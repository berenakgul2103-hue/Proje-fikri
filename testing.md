# 🧪 Test Süreci (testing.md)

Bu aşamada, hazırlanan prototipin farklı atık türleri üzerindeki başarısı test edilmiştir.

### 📥 Test Girdileri (Inputs)
Sisteme aşağıdaki nesneler kamera aracılığıyla gösterilmiştir:
1.  Şeffaf plastik su şişesi.
2.  Kullanılmış metal içecek kutusu.
3.  Buruşturulmuş beyaz kağıt.
4.  Cam kavanoz.

### 📤 Test Çıktıları (Outputs)
* **Plastik Şişe:** %92 güven oranıyla "bottle" olarak tanımlandı. (Başarılı)
* **Metal Kutu:** %88 güven oranıyla "can" olarak tanımlandı. (Başarılı)
* **Buruşturulmuş Kağıt:** %75 güven oranıyla nesne olarak algılandı. (Geliştirilmeli)

### 📊 Başarı Analizi
Genel doğruluk oranı ilk testlerde **%85** civarındadır. Işıklandırmanın iyi olduğu durumlarda başarı oranı artmaktadır.
