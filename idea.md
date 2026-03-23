Proje Fikri: AI Destekli Akıllı Atık Ayrıştırma ve Kişisel Karbon Ayak İzi Takip Sistemi
1. Problem Tanımı
Atıkların yanlış ayrıştırılması sadece bir lojistik sorun değil, aynı zamanda ciddi bir karbon salınımı kaynağıdır. Bireyler geri dönüşüm yaptıklarında bunun çevreye olan somut etkisini (kaç ağaç kurtuldu, ne kadar CO 
2
​
  engellendi) göremedikleri için motivasyon kaybı yaşamakta ve sürdürülebilir alışkanlıklar edinmekte zorlanmaktadır.

2. Çözüm (AI + Veri Analitiği)
Sistem, atığı sadece türüne göre ayırmakla kalmaz, ayrıştırılan her bir nesnenin yaşam döngüsü analizini yaparak kişisel karbon ayak izi azalışını gerçek zamanlı hesaplar.

Görüntü İşleme: Atığın türünü (plastik, metal, cam vb.) ve yaklaşık ağırlığını/hacmini belirler.

Emisyon Hesaplama: Ayrıştırılan materyalin geri dönüşümü sayesinde engellenen karbon salınımını (kg/CO 
2
​
  cinsinden) hesaplayan bir algoritma çalıştırır.

Geri Bildirim: Kullanıcıya "Bu plastik şişeyi geri dönüştürerek X gram karbon salınımını engelledin" mesajını iletir.

3. Temel Özellikler (Yeni Odak)
Akıllı Tanıma: YOLOv8 veya benzeri modellerle hızlı materyal sınıflandırma.

Karbon Skorlama: Hammadde üretimi vs. Geri dönüşüm arasındaki emisyon farkını baz alan dinamik hesaplama tablosu.

Kişisel Profil & Gamification: Kullanıcıların haftalık/aylık karbon tasarrufu hedefleri belirleyebileceği bir arayüz.

Liderlik Tablosu: Kampüs veya mahalle genelinde en çok karbon tasarrufu yapan kullanıcıların sergilenmesi.

4. Teknik Prototip Mimarisi
Donanım: Kamera, Jetson Nano (Edge AI), Yük Hücresi (Ağırlık ölçümü için - Karbon hesabı hassasiyeti sağlar) ve Servo Motorlar.

Yazılım: * Backend: Python/Flask (AI modeli ve karbon hesaplama motoru).

Database: Kullanıcı bazlı tasarruf verilerini tutan yapı (PostgreSQL/Firebase).

Hesaplama Metriği: Örn: 1 ton geri dönüştürülmüş alüminyum = 9 ton CO 
2
​
  tasarrufu.

5. Pazar ve Rekabet Analizi
Mevcut rakipler (Bower, Scrapp) sadece "atığı ayır ve puan kazan" modeline odaklanırken;

Bizim Farkımız: Doğrudan Kimyasal Mühendisliği verilerine dayalı karbon hesaplaması sunarak çevresel etkiyi bilimsel ve kişisel bir düzeye indirmemizdir. Bu, özellikle kurumsal sürdürülebilirlik raporlaması yapmak isteyen üniversiteler ve şirketler için büyük bir katma değerdir.

6. Kullanıcı Senaryosu
Kullanıcı atığı akıllı üniteye gösterir.

AI atığı tanımlar (Örn: Cam kavanoz).

Ünite atığı doğru bölmeye gönderirken ekranda: "Tebrikler Beren! Bu camı dönüştürerek karbon ayak izini 0.3 kg azalttın." yazar.

Veri kullanıcının mobil uygulamasına işlenir.

