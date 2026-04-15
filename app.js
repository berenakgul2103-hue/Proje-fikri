const apiKeyInput = document.getElementById("apiKey");
const rememberKey = document.getElementById("rememberKey");
const saveKeyBtn = document.getElementById("saveKeyBtn");
const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const weightInput = document.getElementById("weightInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const statusEl = document.getElementById("status");
const wasteTypeEl = document.getElementById("wasteType");
const confidenceEl = document.getElementById("confidence");
const carbonSavedEl = document.getElementById("carbonSaved");
const dailyTotalEl = document.getElementById("dailyTotal");
const weeklyTotalEl = document.getElementById("weeklyTotal");
const yearlyTotalEl = document.getElementById("yearlyTotal");
const certScoreEl = document.getElementById("certScore");
const certDateEl = document.getElementById("certDate");
const downloadCardBtn = document.getElementById("downloadCardBtn");
const shareInstagramBtn = document.getElementById("shareInstagramBtn");
const shareLinkedinBtn = document.getElementById("shareLinkedinBtn");
const certificateCard = document.getElementById("certificateCard");

const STORAGE_KEY = "greenscore_records_v1";
const SESSION_API_KEY = "greenscore_api_key_session";
const LOCAL_API_KEY = "greenscore_api_key_local";

const emissionByType = {
  plastik: 1.5,
  metal: 9,
  kagit: 1.2,
  cam: 0.3,
  bilinmiyor: 0.5,
};

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.classList.toggle("status-error", isError);
}

function sanitizeJson(text) {
  return (text || "").replace(/```json|```/gi, "").trim();
}

function toKgString(value) {
  return `${Number(value).toFixed(2)} kg CO2`;
}

function readApiKey() {
  return (
    apiKeyInput.value.trim() ||
    sessionStorage.getItem(SESSION_API_KEY) ||
    localStorage.getItem(LOCAL_API_KEY) ||
    ""
  );
}

function saveApiKey() {
  const apiKey = apiKeyInput.value.trim();
  if (!apiKey) {
    setStatus("Kaydetmek icin API key gir.", true);
    return;
  }
  sessionStorage.setItem(SESSION_API_KEY, apiKey);
  if (rememberKey.checked) {
    localStorage.setItem(LOCAL_API_KEY, apiKey);
  } else {
    localStorage.removeItem(LOCAL_API_KEY);
  }
  setStatus("API key depolandı. Uretimde backend proxy kullan.");
}

function loadApiKeyOnStart() {
  const localKey = localStorage.getItem(LOCAL_API_KEY) || "";
  const sessionKey = sessionStorage.getItem(SESSION_API_KEY) || "";
  const key = sessionKey || localKey;
  if (key) {
    apiKeyInput.value = key;
    rememberKey.checked = Boolean(localKey);
  }
}

function getRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveRecord(record) {
  const records = getRecords();
  records.push(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

function sumByPeriod(records) {
  const now = new Date();
  const today = now.toDateString();
  const weekAgo = new Date(now);
  weekAgo.setDate(now.getDate() - 7);
  const year = now.getFullYear();

  let daily = 0;
  let weekly = 0;
  let yearly = 0;

  records.forEach((item) => {
    const date = new Date(item.timestamp);
    const value = Number(item.carbonSavedKg) || 0;
    if (date.toDateString() === today) {
      daily += value;
    }
    if (date >= weekAgo) {
      weekly += value;
    }
    if (date.getFullYear() === year) {
      yearly += value;
    }
  });

  return { daily, weekly, yearly };
}

function refreshDashboard() {
  const records = getRecords();
  const totals = sumByPeriod(records);
  dailyTotalEl.textContent = toKgString(totals.daily);
  weeklyTotalEl.textContent = toKgString(totals.weekly);
  yearlyTotalEl.textContent = toKgString(totals.yearly);
  certScoreEl.textContent = toKgString(totals.yearly);
  certDateEl.textContent = `Tarih: ${new Date().toLocaleDateString("tr-TR")}`;
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const full = String(reader.result || "");
      const base64 = full.split(",")[1];
      if (!base64) {
        reject(new Error("Gorsel okunamadi."));
        return;
      }
      resolve(base64);
    };
    reader.onerror = () => reject(new Error("Dosya okunurken hata olustu."));
    reader.readAsDataURL(file);
  });
}

function readGeminiText(responseJson) {
  const candidates = responseJson?.candidates || [];
  if (!candidates.length) {
    throw new Error("Gemini aday sonuc donmedi.");
  }
  const parts = candidates[0]?.content?.parts || [];
  const textPart = parts.find((part) => typeof part.text === "string");
  if (!textPart?.text) {
    throw new Error("Gemini metin cikti uretmedi.");
  }
  return textPart.text;
}

function normalizeWasteType(value) {
  const text = String(value || "").toLowerCase();
  if (text.includes("plastik")) return "plastik";
  if (text.includes("metal") || text.includes("aluminyum") || text.includes("alüminyum")) return "metal";
  if (text.includes("kagit") || text.includes("kağıt")) return "kagit";
  if (text.includes("cam")) return "cam";
  return "bilinmiyor";
}

function parseAiPayload(rawText) {
  const cleaned = sanitizeJson(rawText);
  const parsed = JSON.parse(cleaned);
  const wasteType = normalizeWasteType(parsed.wasteType);
  const confidence = Number(parsed.confidence) || 0;
  return { wasteType, confidence };
}

async function callGeminiForImage(apiKey, base64Image, mimeType) {
  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
    encodeURIComponent(apiKey);

  const prompt =
    'Bu fotografi analiz et. Atik turunu belirle (Plastik, Metal, Kagit, Cam). Sadece JSON dondur: {"wasteType":"Plastik|Metal|Kagit|Cam","confidence":0-1,"note":"kisa aciklama"}';

  const body = {
    contents: [
      {
        parts: [
          { text: prompt },
          {
            inline_data: {
              mime_type: mimeType,
              data: base64Image,
            },
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.2,
      responseMimeType: "application/json",
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Gemini hata ${response.status}: ${text}`);
  }
  return response.json();
}

async function analyzeImageFlow() {
  const apiKey = readApiKey();
  if (!apiKey) {
    setStatus("Once Gemini API key gir ve kaydet.", true);
    return;
  }
  const file = imageInput.files?.[0];
  if (!file) {
    setStatus("Lutfen analiz icin bir fotograf sec.", true);
    return;
  }

  const weight = Number(weightInput.value);
  if (!weight || weight <= 0) {
    setStatus("Agirlik 0'dan buyuk olmali.", true);
    return;
  }

  analyzeBtn.disabled = true;
  setStatus("Fotograf Gemini ile analiz ediliyor...");

  try {
    const base64 = await fileToBase64(file);
    const raw = await callGeminiForImage(apiKey, base64, file.type || "image/jpeg");
    const textOut = readGeminiText(raw);
    const ai = parseAiPayload(textOut);

    const factor = emissionByType[ai.wasteType] || emissionByType.bilinmiyor;
    const carbonSavedKg = factor * weight;
    const score = Math.round(carbonSavedKg * 10);

    wasteTypeEl.textContent = ai.wasteType;
    confidenceEl.textContent = `${Math.round(ai.confidence * 100)}%`;
    carbonSavedEl.textContent = toKgString(carbonSavedKg);

    const record = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      wasteType: ai.wasteType,
      confidence: ai.confidence,
      weightKg: weight,
      carbonSavedKg,
      score,
    };
    saveRecord(record);
    refreshDashboard();
    setStatus("Analiz tamamlandi ve kaydedildi.");
  } catch (error) {
    setStatus(error.message || "Analiz sirasinda hata olustu.", true);
  } finally {
    analyzeBtn.disabled = false;
  }
}

function previewSelectedImage() {
  const file = imageInput.files?.[0];
  if (!file) {
    previewImage.classList.add("hidden");
    previewImage.src = "";
    return;
  }
  previewImage.src = URL.createObjectURL(file);
  previewImage.classList.remove("hidden");
}

async function downloadCertificate() {
  const canvas = await html2canvas(certificateCard, { scale: 2, backgroundColor: null });
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = `greenscore-sertifika-${Date.now()}.png`;
  link.click();
}

function getShareText() {
  return `GreenScore AI ile ${certScoreEl.textContent} karbon tasarrufu katkisi olusturdum. #GreenScore #Sustainability`;
}

function shareInstagram() {
  const text = getShareText();
  navigator.clipboard
    .writeText(text)
    .then(() => setStatus("Instagram metni panoya kopyalandi."))
    .catch(() => setStatus("Metin kopyalanamadi.", true));
}

function shareLinkedIn() {
  const text = encodeURIComponent(getShareText());
  window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${text}`, "_blank");
}

saveKeyBtn.addEventListener("click", saveApiKey);
analyzeBtn.addEventListener("click", analyzeImageFlow);
imageInput.addEventListener("change", previewSelectedImage);
downloadCardBtn.addEventListener("click", downloadCertificate);
shareInstagramBtn.addEventListener("click", shareInstagram);
shareLinkedinBtn.addEventListener("click", shareLinkedIn);

loadApiKeyOnStart();
refreshDashboard();
