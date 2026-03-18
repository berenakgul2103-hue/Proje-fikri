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
# Akıllı Hibrit Atık Ayrıştırma Sistemi (Sensör Füzyonu)

## 1. Problem: Ne Çözüyorum?
Geleneksel atık ayrıştırma sistemleri ağırlıklı olarak sadece görüntü işlemeye (kamera) dayanır. Bu durum; içi sıvı dolu pet şişelerin, metal görünümlü plastiklerin veya kirli atıkların yanlış sınıflandırılmasına neden olur. Projem, yapay zekayı fiziksel sensör verileriyle besleyerek bu hataları minimize etmeyi ve geri dönüşüm verimliliğini artırmayı hedefler.

## 2. Kullanıcı: Bu Uygulamayı Kim Kullanacak?
* **Endüstriyel Tesisler:** Kimyasal ve tehlikeli atık üretimi yapan fabrikalar.
* **Akıllı Belediyeler:** Sıfır atık politikası izleyen şehir yönetimleri.
* **Geri Dönüşüm Merkezleri:** Otomasyon verimliliğini artırmak isteyen özel işletmeler.

## 3. AI'ın Rolü: Yapay Zeka Bu Çözümde Ne Yapıyor?
Yapay zeka bu sistemde bir **"Sensör Füzyon Merkezi"** olarak çalışır. Kameradan gelen görsel veriyi (derin öğrenme), yük hücresinden gelen ağırlık verisini ve endüktif sensörden gelen metal sinyallerini eş zamanlı işler. Tüm bu verileri birleştirerek nesnenin hangi hazneye gideceğine dair en doğru kararı saniyeler içinde verir.

## 4. Rakip Durum: Benzer Çözümler Var mı? Benimki Nasıl Farklı?
* **Rakipler:** AMP Robotics, Greyparrot ve Bin-e gibi firmalar genellikle yüksek maliyetli ve sadece görüntü odaklı çözümler sunar.
* **Farkımız:** Sadece "görmeye" değil, ağırlık ve nem gibi fiziksel verilere dayalı bir doğrulama katmanı eklememiz. Bu, özellikle kimya mühendisliği perspektifiyle atığın materyal analizini çok daha ucuza ve hassas yapmamızı sağlar.

## 5. Başarı Kriteri: Bu Proje Başarılı Olursa Ne Değişecek?
Proje başarıya ulaştığında;
* Geri dönüşüm tesislerindeki "yanlış ayırma" oranı %15'lerden %1'in altına düşecek.
* Manuel ayrıştırma maliyetleri azalacak.
* Daha saf hammadde elde edilerek döngüsel ekonomiye ve çevresel sürdürülebilirliğe doğrudan katkı sağlanacak.
