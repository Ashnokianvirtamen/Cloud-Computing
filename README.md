<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=7c6aff&height=200&section=header&text=Cloud%20Computing&fontSize=50&fontColor=ffffff&fontAlignY=35&desc=By%20Ihsan%20Ramdani%20241011401091&descAlignY=55&descSize=20&descColor=ffffffcc" width="100%"/>

<br/>

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-222222?style=for-the-badge&logo=github&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-6affd4?style=for-the-badge)

<br/>

> 🌩️ **Tugas Cloud Computing** — Aplikasi web interaktif berbasis React yang di-deploy menggunakan GitHub Pages sebagai platform cloud hosting.

<br/>

**[🚀 Live Demo](https://ashnokianvirtamen.github.io/Cloud-Computing/)** • **[📁 Source Code](https://github.com/ashnokianvirtamen/Cloud-Computing)**

</div>

---

## ☁️ Tentang Proyek

Proyek ini merupakan bagian dari tugas mata kuliah **Cloud Computing** yang bertujuan untuk memahami konsep *deployment* aplikasi web ke platform cloud. Aplikasi ini di-deploy secara otomatis ke **GitHub Pages** menggunakan **GitHub Actions** sebagai CI/CD pipeline.

```
Kode ditulis → Push ke GitHub → GitHub Actions build otomatis → Live di cloud ☁️
```

---

## ✨ Fitur Aplikasi

| Fitur | Deskripsi |
|-------|-----------|
| ⏱ **Jam Real-time** | Menampilkan waktu dan tanggal dalam Bahasa Indonesia |
| 🔢 **Counter** | Increment & decrement dengan warna dinamis |
| 🎨 **Palet Warna** | 10 pilihan warna interaktif |
| ✍️ **Analisis Teks** | Statistik otomatis: karakter, kata, kalimat, menit baca |
| 💬 **Kutipan Inspiratif** | Koleksi kutipan yang bisa di-refresh |

---

## 🏗️ Arsitektur Cloud Deployment

```
┌─────────────────────────────────────────────────────────┐
│                     Developer                           │
│                  git push origin main                   │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│                    GitHub Repository                    │
│              (Source Control / Version Control)         │
└───────────────────────┬─────────────────────────────────┘
                        │  trigger
                        ▼
┌─────────────────────────────────────────────────────────┐
│                  GitHub Actions (CI/CD)                 │
│   1. Checkout code                                      │
│   2. Setup Node.js 20                                   │
│   3. npm install                                        │
│   4. npm run build  →  /dist                            │
│   5. Upload artifact                                    │
└───────────────────────┬─────────────────────────────────┘
                        │  deploy
                        ▼
┌─────────────────────────────────────────────────────────┐
│                   GitHub Pages (Cloud)                  │
│         https://ashnokianvirtamen.github.io/Cloud-Computing/     │
└─────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Teknologi |
|-------|-----------|
| **Frontend Framework** | React 18 |
| **Build Tool** | Vite 5 |
| **Language** | JavaScript (JSX) |
| **CI/CD** | GitHub Actions |
| **Hosting / Cloud** | GitHub Pages |
| **Version Control** | Git + GitHub |

</div>

---

## 📁 Struktur Proyek

```
Cloud-Computing/
├── 📄 index.html
├── 📦 package.json
├── ⚙️  vite.config.js
├── 📖 README.md
├── 🔧 .github/
│   └── workflows/
│       └── deploy.yml        ← CI/CD pipeline
└── 📂 src/
    ├── 🚀 main.jsx            ← entry point
    ├── 🏠 App.jsx             ← komponen utama
    ├── 📊 data/
    │   └── constants.js       ← data & konstanta
    └── 🧩 components/
        ├── ClockPanel.jsx
        ├── CounterPanel.jsx
        ├── PalettePanel.jsx
        ├── TypingPanel.jsx
        └── QuotePanel.jsx
```

---

## 🚀 Cara Menjalankan Lokal

```bash
# 1. Clone repo
git clone https://github.com/ashnokianvirtamen/Cloud-Computing.git
cd Cloud-Computing

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka di browser
# http://localhost:5173
```

---

## ☁️ Konsep Cloud Computing yang Diterapkan

- **IaaS (Infrastructure as a Service)** — GitHub menyediakan server dan infrastruktur untuk hosting
- **CI/CD Pipeline** — GitHub Actions otomatis build dan deploy setiap ada perubahan kode
- **Static Site Hosting** — GitHub Pages sebagai platform cloud untuk serving file statis
- **Version Control** — Git memungkinkan kolaborasi dan rollback versi

---

## 📜 Lisensi

Proyek ini dibuat untuk keperluan akademik — Tugas Mata Kuliah Cloud Computing.

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=ff6a9b&height=120&section=footer" width="100%"/>

</div>
