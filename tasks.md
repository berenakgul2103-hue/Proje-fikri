Aşama 1: Hazırlık ve Altyapı
[ ] Proje klasör yapısının oluşturulması (index.html, style.css, app.js).

[ ] Google AI Studio'dan alınan Gemini API Key'in güvenli bir yerde saklanması.

[ ] Tailwind CSS bağlantısının HTML dosyasına eklenmesi.

[ ] Temel sayfa düzeninin (Header, Ana Sayfa, Footer) tasarlanması.

🟡 Aşama 2: AI Entegrasyonu (Gemini API)
[ ] Kullanıcının fotoğraf yüklemesini veya kamera açmasını sağlayacak butonun eklenmesi.

[ ] Gemini API'ye fotoğraf gönderen fetch fonksiyonunun yazılması.

[ ] Prompt Engineering: Gemini'ye "Bu fotoğrafı analiz et, atık türünü ve karbon tasarrufunu JSON formatında döndür" talimatının verilmesi.

[ ] Gelen cevabın (Plastik/Metal/Kağıt) ekranda gösterilmesi.

🟠 Aşama 3: Hesaplama ve Mantık
[ ] Karbon tasarrufu hesaplama motorunun kurulması (AI'dan gelen veriye göre).

[ ] LocalStorage kullanımı: Kullanıcının toplam skorunun tarayıcıya kaydedilmesi (Sayfa yenilense de gitmemesi için).

[ ] Günlük, haftalık ve yıllık periyotlar için zaman damgalı (timestamp) kayıt sisteminin kurulması.

🔵 Aşama 4: Arayüz ve Sosyal Paylaşım
[ ] Dashboard üzerindeki "Karbon Sayacı"nın dinamik hale getirilmesi.

[ ] Sertifika Oluşturucu: Kullanıcının skorunu içeren şık bir "Başarı Kartı" tasarımı.

[ ] html2canvas veya benzeri bir kütüphane ile bu kartın resim (PNG) olarak indirilmesi sağlanması.

[ ] Sosyal medya (Instagram/LinkedIn) paylaşım butonlarının eklenmesi.

🔴 Aşama 5: Test ve Yayınlama
[ ] Farklı atık türleriyle (kirli, ezilmiş, farklı ışıkta) AI testlerinin yapılması.

[ ] Mobil cihazlarda kamera erişiminin kontrol edilmesi (Responsive Tasarım).

[ ] Uygulamanın Vercel veya GitHub Pages üzerinde canlıya alınması.
