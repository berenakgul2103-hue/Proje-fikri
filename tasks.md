# EcoScan Geliştirme Görev Listesi

## 1) Proje Kurulumu
- [x] React + TypeScript + Vite projesi başlat.
- [x] Tailwind CSS kur ve temel tema renklerini (yeşil odaklı) tanımla.
- [x] PWA uyumluluğu için temel manifest ve favicon yapılandırmasını ekle.
- [x] `src` içinde feature tabanlı klasör yapısını oluştur (`dashboard`, `scanner`, `result`, `shared`).

## 2) Veri Modeli ve Mock Katmanı
- [ ] Ürün ve katsayı veri modellerini TypeScript interface olarak tanımla.
- [ ] PRD’deki örnek barkod verilerini mock veri dosyasına ekle.
- [ ] Materyal katsayı tablosunu (`cam`, `plastik`, `aluminyum`) merkezi bir sabit olarak oluştur.
- [ ] Barkoda göre ürün bulma ve karbon tasarrufu hesaplama yardımcı fonksiyonlarını yaz.

## 3) Durum Yönetimi ve Kalıcılık
- [ ] Zustand ile global store kur (`toplamTasarruf`, `scanGecmisi`, `sonSonuc`).
- [ ] İlk açılışta localStorage’dan veriyi yükle.
- [ ] Her başarılı taramadan sonra toplam tasarruf ve geçmişi localStorage’a kaydet.
- [ ] Hatalı veya bulunamayan barkod durumları için store’da ayrı hata alanı ekle.

## 4) Dashboard Ekranı
- [ ] Dashboard layout’unu mobil öncelikli tasarla.
- [ ] Canlı toplam CO2 tasarrufu sayacını store’dan besle.
- [ ] “Ağaç kurtarma” benzeri etki göstergesini (metafor kartı) hesaplayıp göster.
- [ ] “Tarama Başlat” CTA butonunu scanner ekranına yönlendirecek şekilde bağla.

## 5) Barkod Tarayıcı Entegrasyonu
- [ ] `html5-qrcode` kütüphanesini projeye ekle.
- [ ] Kamera izin akışını (izin isteme, reddedilme, tekrar dene) uygula.
- [ ] Tarayıcı ekranında odak karesi ve yönlendirici metin göster.
- [ ] Başarılı taramada barkodu yalnızca bir kez işle (duplicate scan engeli).
- [ ] Tarama sonrası hesaplama akışını tetikleyip sonuç ekranına yönlendir.

## 6) Hesaplama ve İş Kuralları
- [ ] Formülü kodla: `tasarruf = atik_agirligi * materyal_katsayisi`.
- [ ] Birim dönüşümlerini netleştir (gram -> kilogram gibi) ve tek formatta tut.
- [ ] Hesaplanan değeri sonuç ekranına uygun formatta (örn. `0.12 kg CO2`) hazırla.
- [ ] Ürün bulunamazsa kullanıcıya anlaşılır fallback mesajı ver.

## 7) Sonuç / Başarı Ekranı
- [ ] Ürün adı, materyal tipi ve hesaplanan tasarruf bilgisini göster.
- [ ] Başarı mesajı ve küçük bir mikro-etkileşim (örn. kısa fade/scale) ekle.
- [ ] “Ana Sayfaya Dön” ve “Yeni Tarama” aksiyonlarını bağla.
- [ ] Her başarı ekranı gösteriminde toplam puanın güncellendiğini doğrula.

## 8) Geçmiş ve Motivasyon (MVP+)
- [ ] Son taramaları listeleyen basit geçmiş bölümü ekle (Dashboard altında).
- [ ] Günlük/haftalık ilerleme göstergesi için placeholder alan hazırla.
- [ ] Kullanıcı motivasyonu için dinamik tebrik metni üret (eşik bazlı).

## 9) Hata Yönetimi ve UX Dayanıklılığı
- [ ] Kamera yok/erişilemiyor senaryosu için alternatif ekran tasarla.
- [ ] Tarama başarısız olduğunda tekrar dene akışı ekle.
- [ ] Boş durumlar (henüz tarama yok) için bilgilendirici UI oluştur.
- [ ] Yavaş cihazlarda tarayıcı performansını korumak için gereksiz render’ları azalt.

## 10) Test ve Doğrulama
- [ ] Hesaplama fonksiyonları için birim testler yaz.
- [ ] Store aksiyonları için kritik akış testleri ekle.
- [ ] Ekranlar arası kullanıcı akışı testi yap (Dashboard -> Scanner -> Sonuç).
- [ ] Mock barkodlarla manuel kabul testi checklist’i hazırla.

## 11) Yayına Hazırlık
- [ ] Production build al ve bundle boyutunu kontrol et.
- [ ] HTTPS üzerinde kamera erişimini doğrula.
- [ ] Temel Lighthouse denetimi yap (Performance, Accessibility, PWA).
- [ ] MVP sürümü için kısa release notu oluştur.
# GreenScore AI - Gelistirme Gorev Listesi

Bu liste `prd.md` icerigine gore adim adim gelistirme icin hazirlanmistir.

## 0) Proje Hazirlik ve Planlama
- [ ] Proje klasor yapisini netlestir (`frontend`, `backend`, `ai`, `docs`).
- [ ] Teknoloji secimlerini kesinlestir (Next.js 14, Tailwind, Node.js + TypeScript, Prisma, PostgreSQL/Supabase).
- [ ] Ortam degiskenlerini tanimla (`.env.example`) ve gelistirme ortamlarini ayarla.
- [ ] PRD maddelerini issue/task formatina bol (epic > feature > task).
- [ ] Baslangic metriklerini belirle (MVP teslim tarihi, model dogruluk hedefi, temel performans hedefleri).

## 1) Faz 1 - MVP (Temel AI Tarama + Karbon Hesaplama)

### 1.1 Altyapi ve Temel Kurulum
- [ ] Next.js 14 App Router projesini baslat.
- [ ] Tailwind CSS, ESLint, Prettier ve TypeScript kurulumunu tamamla.
- [ ] Backend API katmanini olustur (Node.js + TypeScript).
- [ ] Prisma kurulumu yap ve Supabase PostgreSQL baglantisini ac.
- [ ] Temel CI adimlarini ekle (lint + build).

### 1.2 Veri Modeli ve Veritabani
- [ ] `User` modeli: profil bilgileri, olusturma tarihi.
- [ ] `ScanEvent` modeli: atik tipi, agirlik/adet, guven skoru, zaman damgasi.
- [ ] `CarbonEntry` modeli: hesaplanan tasarruf degeri (`kgCO2`), kaynak katsayi.
- [ ] `ScoreSummary` modeli: gunluk/haftalik/yillik toplam GreenScore.
- [ ] Ilk migration ve seed verilerini olustur.

### 1.3 Onboarding ve Kimlik Akisi
- [ ] Hizli onboarding ekranini gelistir (ad, e-posta/anonim baslangic).
- [ ] Kullanici olusturma endpoint'ini yaz.
- [ ] Profil goruntuleme/guncelleme endpoint'lerini yaz.
- [ ] Basit oturum yonetimi (MVP seviyesinde) ekle.

### 1.4 AI Tarama Arayuzu (Scan UI)
- [ ] Kamera erisim ve izin akisini gelistir.
- [ ] Gercek zamanli tarama ekranini olustur (overlay + scanning animasyonu).
- [ ] AI model entegrasyonunu yap (TensorFlow.js/YOLOv8 client-side).
- [ ] Atik siniflarini destekle: PET, HDPE, Aluminyum, Kagit, Cam.
- [ ] Guven skoru `%85+` ise otomatik onay; altinda manuel onay akisi ekle.

### 1.5 Karbon Hesaplama Modulu
- [ ] Emisyon katsayi tablosunu olustur (EPA referansli).
- [ ] Hesaplama formulu servisini yaz: `Atik Turu x Emisyon Katsayisi`.
- [ ] Plastik ve aluminyum katsayilarini MVP'ye ekle:
  - [ ] 1 kg plastik = yaklasik 1.5 kg CO2 tasarrufu.
  - [ ] 1 kg aluminyum = yaklasik 9 kg CO2 tasarrufu.
- [ ] Hesaplama sonucunu `CarbonEntry` tablosuna kaydet.
- [ ] Hesaplama dogrulugu icin unit testler yaz.

### 1.6 Dashboard (Takip Ekrani)
- [ ] Toplam GreenScore karti tasarla.
- [ ] Gunluk/haftalik/yillik birikim grafikleri ekle.
- [ ] Son taramalar listesi ve filtreleri ekle.
- [ ] Dark mode + neon yesil visual dili uygula.
- [ ] Veri bos durumlari ve hata durumlarini tasarla.

### 1.7 Faz 1 Test ve Yayin
- [ ] E2E temel akisi test et: onboarding > scan > hesaplama > dashboard.
- [ ] AI tahmin performansi ve gecikme olcumlerini al.
- [ ] Guvenlik ve veri dogrulama kontrollerini tamamla.
- [ ] Vercel uzerinde staging deploy yap.
- [ ] MVP demo checklist'i hazirla ve onay al.

## 2) Faz 2 - Sosyal Paylasim ve Sertifika

### 2.1 Dinamik Sertifika Uretici
- [ ] Sertifika tasarim sablonunu olustur (minimalist + resmi kimlik).
- [ ] Dinamik veri alanlarini bagla (isim, tarih, toplam tasarruf, GreenScore).
- [ ] PNG ciktilari uret:
  - [ ] 1080x1920 (Story)
  - [ ] 1080x1080 (Post)
- [ ] Dosya olusturma ve indirme akislarini tamamla.

### 2.2 Share Card ve Sosyal Akis
- [ ] Paylasim ekranini gelistir (onizleme + kopya metin).
- [ ] Sosyal platform paylasim link/scheme entegrasyonlarini ekle.
- [ ] Leaderboard ekranini olustur (siralama + prestijli UI).
- [ ] Kullanici gizlilik seceneklerini ekle (skor gorunurlugu ac/kapat).

### 2.3 Faz 2 Kalite
- [ ] Sertifika gorunurluk ve tipografi kontrolu yap.
- [ ] Farkli cihazlarda paylasim ekrani uyumlulugunu test et.
- [ ] Sosyal akis icin event tracking ekle (tiklama, indirme, paylasim).

## 3) Faz 3 - Kurumsal/Belediye Entegrasyonlari
- [ ] Gercek atik kutulari ile entegrasyon gereksinimlerini topla.
- [ ] Kurum API entegrasyon taslagini cikar.
- [ ] QR/NFC dogrulama senaryolari tasarla.
- [ ] Kullanici eylemlerini fiziksel toplama noktasi verileriyle eslestirme akisini kur.
- [ ] Pilot kurum ile POC plani hazirla.

## 4) Capraz Konular (Tum Fazlarda)

### 4.1 Guvenlik ve Uyumluluk
- [ ] API rate limiting ve temel suistimal korumasi ekle.
- [ ] Girdi dogrulama ve sanitization kurallarini uygula.
- [ ] Kisisel veri saklama/politika metinlerini hazirla.

### 4.2 Gozlemlenebilirlik ve Performans
- [ ] Loglama standartlarini belirle (frontend + backend).
- [ ] Hata izleme araci entegre et.
- [ ] Temel performans metriklerini takip et (LCP, API response, model inferans suresi).

### 4.3 Test Stratejisi
- [ ] Unit test kapsam hedefi belirle.
- [ ] API entegrasyon testlerini yaz.
- [ ] Kritik kullanici akislarina E2E testler ekle.

## 5) Onceliklendirme (Kisa Yol)
1. Altyapi + veri modeli + onboarding
2. AI tarama + guven skoru akisi
3. Karbon hesaplama + dashboard
4. Sertifika uretimi + sosyal paylasim
5. Leaderboard + kurumsal entegrasyonlar

## 6) Teslim Kriterleri (Definition of Done)
- [ ] Her gorevin net kabul kriteri yazili.
- [ ] Kod incelemesi tamamlandi.
- [ ] Testler gecti (unit/integration/e2e ilgili kapsama gore).
- [ ] Dokumantasyon guncellendi.
- [ ] Staging ortaminda dogrulandi.
