# 🛠️ Geliştirme Süreci ve Karşılaşılan Sorunlar (development.md)

### ✅ Tamamlanan Görevler
* YOLOv8 kütüphanesi projeye entegre edildi.
* Kameradan canlı görüntü alma ve işleme algoritması yazıldı.
* Atık türlerini birbirinden ayıran eşik değerleri (threshold) belirlendi.

### ⚠️ Karşılaşılan Zorluklar ve Çözümler
1.  **Işık Sorunu:** Düşük ışıkta nesnelerin yanlış tanınması.
    * *Çözüm:* Görüntü işleme adımında parlaklık dengeleme (normalization) uygulandı.
2.  **Kütüphane Çakışmaları:** OpenCV ve Ultralytics sürümleri arasında uyumsuzluk.
    * *Çözüm:* `requirements.txt` dosyası oluşturularak sabit sürümler belirlendi.

### 🚀 Gelecek Planları
* Modelin sadece atıklar üzerine odaklanması için özel bir veri seti (dataset) ile eğitilmesi.
* Belediye veri tabanına bağlanarak en yakın geri dönüşüm noktalarını göstermesi.
