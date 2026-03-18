import cv2
from ultralytics import YOLO

# 1. Eğitilmiş atık tanıma modelini yükle
model = YOLO('yolov8n.pt') 

# 2. Canlı görüntü akışını başlat
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret: break

    # 3. Görüntüyü AI ile analiz et
    results = model(frame)

    # 4. Tespit edilen atıkları görselleştir
    for r in results:
        for box in r.boxes:
            label = model.names[int(box.cls[0])]
            conf = float(box.conf[0])
            if conf > 0.4:  # Güven eşiği
                x1, y1, x2, y2 = map(int, box.xyxy[0])
                cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
                cv2.putText(frame, f'Atik: {label}', (x1, y1 - 10), 
                            cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)

    cv2.imshow('Akilli Atik Sistemi Prototipi', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'): break

cap.release()
cv2.destroyAllWindows()
