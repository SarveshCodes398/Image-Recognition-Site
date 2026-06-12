# 🧠 Image Recognition Site

An AI-powered Image Recognition Web Application built with **Next.js**, **TensorFlow.js**, **COCO-SSD**, and **MobileNet**. The application supports both **real-time object detection through a webcam** and **image classification through image uploads** directly in the browser.

## 🚀 Features

### 📹 Real-Time Object Detection

* Accesses the user's webcam.
* Detects multiple objects in real time.
* Draws bounding boxes around detected objects.
* Displays detected object labels on screen.
* Powered by TensorFlow.js and COCO-SSD.

### 🖼️ Image Classification

* Upload images directly from your device.
* AI analyzes the uploaded image.
* Displays top predictions with confidence scores.
* Powered by TensorFlow.js and MobileNet.

### 🎨 Modern UI

* Built with Next.js.
* Responsive design using Tailwind CSS.
* Fast client-side inference.
* No backend required.

---

## 🛠️ Tech Stack

* Next.js
* React.js
* Tailwind CSS
* TensorFlow.js
* COCO-SSD
* MobileNet

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── page.jsx
│   ├── Upload/
│   │   └── page.jsx
│
├── components/
│   ├── WebcamDetector.jsx
│   └── ImageUploader.jsx
│
└── public/
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/SarveshCodes398/Image-Recognition-Site.git
```

### Navigate to Project

```bash
cd Image-Recognition-Site
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## 📦 Required Packages

```bash
npm install @tensorflow/tfjs
npm install @tensorflow-models/coco-ssd
npm install @tensorflow-models/mobilenet
```

---

## 🧠 How It Works

### Webcam Detection

1. User grants camera permission.
2. Webcam stream is loaded.
3. COCO-SSD model is initialized.
4. Each video frame is analyzed.
5. Bounding boxes and labels are drawn on a canvas overlay.

### Image Classification

1. User uploads an image.
2. Image is loaded into the browser.
3. MobileNet model analyzes the image.
4. Top predictions are displayed with confidence percentages.

---

## 📸 Screenshots

### Webcam Object Detection

Add Screenshot Here

### Image Classification

Add Screenshot Here

---

## 🔮 Future Improvements

* Detection confidence filtering.
* Dark mode support.
* Object counting.
* Model caching for faster predictions.
* Support for custom-trained models.
* Download prediction reports.
* Voice-assisted object detection.

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

---

## 👨‍💻 Author

**Sarvesh Mathur**

GitHub: https://github.com/SarveshCodes398

LinkedIn: Add Your LinkedIn Profile Here

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.

⭐ Star the repository to support future development.
