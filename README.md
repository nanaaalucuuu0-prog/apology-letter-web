# 💝 Surat Permintaan Maaf Romantis

Web interaktif yang indah untuk mengucapkan permintaan maaf kepada orang terkasih dengan cara yang romantis dan berkesan.

## 🌹 Fitur

✨ **Amplop Interaktif** - Klik untuk membuka amplop dan membaca surat
💕 **Animasi Bunga & Hati** - Bunga dan hati berjatuhan sepanjang waktu
📸 **Carousel Foto** - Tampilkan kenangan indah dengan foto yang bisa digeser
🎨 **Desain Romantis** - Gradien indah dan warna-warna pastel
📱 **Responsive** - Bekerja sempurna di desktop dan mobile
⌨️ **Navigasi Mudah** - Bisa diakses dengan mouse, keyboard, atau sentuhan

## 🚀 Cara Menggunakan

1. **Clone repository**
   ```bash
   git clone https://github.com/nanaaalucuuu0-prog/apology-letter-web.git
   cd apology-letter-web
   ```

2. **Buka file `index.html`** di browser Anda
   - Atau akses langsung via GitHub Pages

3. **Customize konten:**

   ### Mengubah Teks Surat
   - Buka `index.html`
   - Cari section `<div class="letter-content">`
   - Edit teks sesuai keinginan Anda

   ### Menambah Foto
   - Ganti URL placeholder di carousel dengan foto Anda
   - Cari bagian `<div class="carousel-slide">`
   - Ganti `src="https://via.placeholder.com/..."` dengan URL atau path foto Anda

   ### Mengubah Jumlah Foto
   - Tambah atau kurangi `<div class="carousel-slide">` sesuai kebutuhan
   - Update nilai `totalSlides` di `script.js`

## 📝 Customization Tips

### 1. Ganti Warna Tema
Di `styles.css`, cari `linear-gradient` dan ubah kode warna:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### 2. Ubah Kata-kata Surat
Edit teks di dalam `<div class="letter-content">` di `index.html`

### 3. Tambah Foto
```html
<div class="carousel-slide" id="slide6">
    <img src="URL_FOTO_ANDA" alt="Foto 6">
</div>
```
Jangan lupa update `totalSlides = 6` di `script.js`

### 4. Ubah Emoji yang Berjatuh
Di `script.js`, cari array `items` dan ubah emoji sesuai keinginan:
```javascript
const items = ['❤️', '💕', '🌹', '🌸', '💐', '🦋', '💖', '✨'];
```

## 🔗 Link Akses

Akses web ini melalui GitHub Pages:
```
https://nanaaalucuuu0-prog.github.io/apology-letter-web/
```

## 📱 Kompatibilitas

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 💡 Tips Menggunakan

1. **Buka di dalam suasana yang romantis** 🕯️
2. **Pertahankan koneksi internet** untuk memuat placeholder foto
3. **Ganti placeholder dengan foto asli** untuk hasil terbaik
4. **Customize teks surat** agar terasa lebih personal
5. **Share link** dengan orang terkasih Anda

## 🎯 Alur Interaksi

1. Halaman pertama: Amplop yang bisa diklik
2. Halaman kedua: Surat permintaan maaf
3. Halaman ketiga: Carousel foto dengan navigasi
4. Halaman keempat: Pesan penutup

## 🛠️ Tech Stack

- HTML5
- CSS3 (dengan animasi)
- Vanilla JavaScript
- GitHub Pages (hosting)

## 📄 Lisensi

Free to use and modify for personal purposes 💕

---

**Dibuat dengan ❤️ untuk orang terkasih**