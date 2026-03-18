# Akıllı Hibrit Atık Ayrıştırma Sistemi (Sensör Füzyonu)

## 📌 Proje Özeti
Bu proje, geleneksel sadece görüntü işlemeye dayalı atık ayrıştırma sistemlerinin eksiklerini; **ağırlık, nem, metal iletkenliği ve fiziksel boyut** verilerini hibrit bir yapay zeka modeliyle birleştirerek çözmeyi amaçlar.

---

## 🚀 Temel Problem ve Sektör Boşluğu
Mevcut sistemler (AMP Robotics, Bin-e vb.) büyük oranda kameraya güvenir. Ancak:
- İçinde sıvı olan bir plastik şişe ile boş olanı ayıramazlar.
- Kirli/yağlı kağıt ile temiz kağıdı ayırt etmekte zorlanırlar.
- Sadece görsel benzerlik nedeniyle yanlış sınıflama yapabilirler.

**Çözümümüz:** Yapay zekayı sadece "görmeye" değil, "hissetmeye" de zorlamak.

---

## 🛠 Teknik Mimari (Hibrit Sensör Seti)

| Sensör Tipi | Görevi | AI Modelindeki Rolü |
| :--- | :--- | :--- |
| **Kamera (OpenCV)** | Nesne tanıma ve form analizi | Görüntü Sınıflandırma (CNN) |
| **Yük Hücresi (Load Cell)** | Kütle ölçümü | Doluluk ve materyal yoğunluk tahmini |
| **Endüktif Sensör** | Metal varlığı tespiti | Kesin metal/metal dışı ayrımı |
| **Nem Sensörü** | Kontaminasyon ölçümü | Geri dönüştürülebilirlik skoru |

---

## 🧠 Yapay Zeka Yaklaşımı: Data Fusion
Sistem, kameradan gelen **Piksel Verisi** ile sensörlerden gelen **Sayısal Veriyi** (Tabular Data) birleştirir. 
- **Görüntü Kolu:** Resnet veya MobileNet mimarisi.
- **Sensör Kolu:** Basit bir Çok Katmanlı Algılayıcı (MLP).
- **Birleşim:** İki koldan gelen veriler "Concatenate" edilerek nihai sınıflandırma yapılır.

---

## 🎯 Hedef Kullanıcılar
1. **Endüstriyel Tesisler:** Kimyasal ve tehlikeli atık yönetimi yapan fabrikalar.
2. **Akıllı Şehirler:** Belediyeler için hata payı düşük akıllı konteynerler.
3. **Laboratuvarlar:** Hassas materyal ayrıştırması gereken Ar-Ge merkezleri.

---

## 📈 Farklılaşma (USP)
- **Yüksek Doğruluk:** %99'a varan metal ve sıvı içeriği tespiti.
- **Maliyet Etkin:** Pahalı spektroskopi cihazları yerine ucuz hibrit sensörler.
- **Mühendislik Yaklaşımı:** Malzeme bilgisi ve proses otomasyonunun yazılımla birleşimi.
