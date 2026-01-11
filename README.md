# Aplikasi Backend Login Node.js

Aplikasi ini merupakan **backend sederhana menggunakan Node.js** yang berfokus pada **fitur autentikasi (login & register)** dengan **password hashing** dan **JSON Web Token (JWT)**.

Project ini dibuat untuk tujuan **pembelajaran backend**, khususnya memahami konsep:

- Authentication
- Authorization
- Hashing password
- Struktur API backend

---

## 🚀 Teknologi yang Digunakan

- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- bcrypt (hashing password)
- JSON Web Token (JWT)
- dotenv

---

## 📌 Fitur

- Register user
- Login user
- Hashing password menggunakan bcrypt
- Autentikasi menggunakan JWT
- Proteksi endpoint menggunakan middleware
- Validasi user login

---

## 📂 Struktur Folder

aplikasi-belajar/
├─ server/
│ ├─ controllers/
│ ├─ routes/
│ ├─ models/
│ ├─ middlewares/
│ ├─ index.js
│ └─ package.json
├─ README.md

---

## 🔐 Alur Autentikasi

1. User melakukan **register**
2. Password di-hash menggunakan bcrypt
3. Data user disimpan ke database
4. User melakukan **login**
5. Password dibandingkan menggunakan `bcrypt.compare`
6. Jika valid, server mengirim **JWT**
7. JWT digunakan untuk mengakses endpoint terproteksi

---

## ⚙️ Instalasi & Menjalankan Project

### 1️⃣ Clone repository

```bash
git clone https://github.com/noob-legend/HASING01.git
cd HASING01/server

### 2️⃣ Install dependency
npm install

### 3️⃣ Konfigurasi environment
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

### 4️⃣ Jalankan server
npm start

server akan berjalan di :
http://localhost:5000
```
