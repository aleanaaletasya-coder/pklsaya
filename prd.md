
# PRODUCT REQUIREMENTS DOCUMENT (PRD)

# Website Roti Gembong Gembul Purbalingga

**Versi:** 1.0
**Status:** Draft
**Project Owner:** Roti Gembong Gembul Purbalingga
**Dokumen Dibuat:** 2 Juli 2026

---

# 1. Executive Summary

Website Roti Gembong Gembul Purbalingga akan menjadi platform digital resmi yang berfungsi sebagai media branding, katalog produk, pusat informasi promo, serta saluran pemesanan online yang terintegrasi dengan WhatsApp dan layanan pengantaran.

Website dirancang dengan pendekatan **mobile-first**, mengingat mayoritas pelanggan mengakses melalui smartphone.

Target utama website bukan hanya meningkatkan penjualan, tetapi juga memperkuat citra merek sebagai toko roti modern dengan kualitas premium dan pelayanan cepat.

---

# 2. Latar Belakang

Saat ini sebagian besar pelanggan memperoleh informasi melalui media sosial.

Permasalahan yang muncul:

* Informasi menu tersebar.
* Promo sulit ditemukan.
* Tidak ada katalog produk yang lengkap.
* Pelanggan harus bertanya satu per satu melalui WhatsApp.
* Belum ada media resmi yang meningkatkan kredibilitas bisnis.

Website hadir sebagai solusi untuk menyatukan seluruh informasi tersebut.

---

# 3. Tujuan Produk

## Tujuan Bisnis

* Meningkatkan penjualan minimal 30%.
* Menambah pelanggan baru setiap bulan.
* Memperkuat branding.
* Menjadi pusat informasi resmi.
* Mengurangi pertanyaan berulang dari pelanggan.

## Tujuan Pengguna

Pengguna dapat:

* melihat seluruh menu
* mengetahui harga
* mengetahui promo
* menemukan lokasi toko
* memesan dengan cepat
* menghubungi admin
* melihat jam operasional
* melihat testimoni pelanggan

---

# 4. Stakeholder

| Stakeholder  | Tanggung Jawab      |
| ------------ | ------------------- |
| Owner        | Persetujuan fitur   |
| Marketing    | Promo & konten      |
| Admin Toko   | Update menu         |
| Developer    | Pengembangan sistem |
| UI Designer  | Desain antarmuka    |
| Photographer | Foto produk         |

---

# 5. User Persona

## Persona 1

Nama:
Andi

Umur:
22 Tahun

Pekerjaan:
Mahasiswa

Kebutuhan:

* mencari roti enak
* harga terjangkau
* bisa delivery
* promo

Pain Point:

* tidak tahu menu
* tidak tahu harga
* bingung lokasi

---

## Persona 2

Nama:
Rina

Umur:
31 Tahun

Pekerjaan:
Ibu Rumah Tangga

Kebutuhan:

* pesan untuk keluarga
* banyak pilihan rasa
* pembayaran mudah

---

# 6. User Journey

## Awareness

Melihat Instagram

↓

Klik Link Website

↓

Masuk Homepage

↓

Melihat Menu

↓

Melihat Promo

↓

Klik Pesan

↓

WhatsApp

↓

Checkout

↓

Pembelian

↓

Repeat Order

---

# 7. Sitemap

HOME

├── Tentang Kami

├── Menu

│ ├── Sweet

│ ├── Salty

│ ├── Crunchy

│ ├── Fruit

│ └── Combo

├── Promo

├── Galeri

├── Testimoni

├── FAQ

├── Lokasi

├── Blog

└── Kontak

---

# 8. Arsitektur Informasi

Homepage menjadi pusat navigasi menuju seluruh halaman.

Menu harus dapat diakses maksimal dua klik dari halaman utama.

Navigasi utama:

* Home
* Menu
* Promo
* Tentang
* Blog
* Lokasi
* Kontak

---

# 9. Functional Requirement

## Homepage

Menampilkan:

Hero Banner

Promo

Menu Favorit

Best Seller

Review

CTA

Lokasi

Footer

---

## Menu

Fitur:

Search

Filter

Kategori

Harga

Deskripsi

Foto HD

Status Best Seller

Tombol Pesan

---

## Promo

Admin dapat:

Tambah Promo

Edit Promo

Hapus Promo

Atur Tanggal Aktif

Countdown Promo

---

## Blog

Kategori:

Promo

Artikel

Berita

Tips

Resep

---

## Kontak

Form:

Nama

No HP

Email

Pesan

Validasi otomatis

---

## FAQ

Accordion

Search FAQ

---

## Gallery

Kategori

Zoom Image

Lazy Load

---

# 10. Non Functional Requirement

Loading < 3 detik

SEO Friendly

Responsive

HTTPS

Accessibility

Core Web Vitals

Caching

Image Compression

CDN

---

# 11. User Flow

HOME

↓

MENU

↓

DETAIL PRODUK

↓

PESAN

↓

WHATSAPP

↓

CHECKOUT

---

# 12. Admin Dashboard

Dashboard

Menu

Kategori

Promo

Blog

FAQ

Gallery

Testimoni

SEO

Banner

Pengguna

Laporan

---

# 13. Hak Akses

## Owner

Semua akses

## Admin

CRUD seluruh konten

## Marketing

Promo

Banner

Artikel

SEO

## Customer

View website

Pesan

Kontak

---

# 14. Database

### Produk

* id
* nama
* slug
* kategori
* harga
* deskripsi
* gambar
* status
* created_at

---

### Promo

* id
* judul
* gambar
* deskripsi
* mulai
* selesai

---

### Blog

* id
* title
* slug
* isi
* thumbnail
* author

---

### Testimoni

* id
* nama
* foto
* rating
* komentar

---

# 15. API

GET /products

GET /promo

GET /blogs

GET /gallery

GET /faq

POST /contact

POST /newsletter

---

# 16. Integrasi

WhatsApp

Google Maps

Instagram Feed

TikTok

Google Analytics

Search Console

Meta Pixel

Google Tag Manager

Cloudinary

---

# 17. SEO Strategy

Target Keyword:

Roti Gembong Purbalingga

Bakery Purbalingga

Roti Enak

Roti Isi

Roti Premium

Long Tail:

Roti Gembong Gembul Purbalingga

Roti terbaik di Purbalingga

Bakery dekat alun-alun Purbalingga

Roti untuk oleh-oleh Purbalingga

---

# 18. Content Strategy

Homepage

1000–1500 kata

Blog

800–1200 kata

Meta Title

≤60 karakter

Meta Description

≤155 karakter

Alt Image

Semua gambar wajib memiliki alt text.

---

# 19. Wireframe

HOME

---

LOGO

MENU

SEARCH

---

HERO IMAGE

CTA

---

BEST SELLER

---

MENU

---

PROMO

---

TESTIMONI

---

MAP

---

FOOTER

---

---

# 20. UI Design System

## Primary

#FFD23F

## Secondary

#5A3825

## Background

#FFFFFF

## Success

#16A34A

## Error

#DC2626

Typography

Poppins

Heading 48

Heading 32

Body 16

Caption 14

Radius

12 px

Button

Primary

Secondary

Outline

---

# 21. Animasi

Hover Button

Fade In

Image Zoom

Scroll Reveal

Loading Skeleton

Toast Notification

---

# 22. Security

HTTPS

Google reCAPTCHA

Rate Limiting

Input Validation

CSRF Protection

XSS Protection

Backup Harian

---

# 23. Analytics

Jumlah Pengunjung

Klik WhatsApp

Produk Terlaris

Promo Terbanyak

Sumber Traffic

Durasi Kunjungan

Conversion Rate

---

# 24. Roadmap

## Phase 1

Company Profile

Menu

Promo

WhatsApp

Gallery

Maps

SEO

---

## Phase 2

Member

Wishlist

Voucher

Point Reward

Blog

Artikel

---

## Phase 3

Online Payment

Checkout

Order Tracking

Dashboard Penjualan

Laporan

Membership

---

# 25. KPI

6 Bulan

20.000 Visitor

CTR >10%

Bounce Rate <40%

Average Session >2 menit

500 Klik WhatsApp/bulan

30% Kenaikan Penjualan

100 Ulasan Google Baru

---

# 26. Risiko

| Risiko                     | Mitigasi               |
| -------------------------- | ---------------------- |
| Foto produk kurang menarik | Foto profesional       |
| Website lambat             | Optimasi gambar & CDN  |
| Konten tidak diperbarui    | Jadwal update mingguan |
| Traffic rendah             | SEO & iklan digital    |
| Admin tidak terbiasa       | Pelatihan CMS          |

---

# 27. Acceptance Criteria

* Website responsif di desktop, tablet, dan mobile.
* Seluruh halaman dapat diakses tanpa error (HTTP 200).
* Waktu muat halaman utama <3 detik pada koneksi 4G.
* Formulir kontak dan tombol WhatsApp berfungsi dengan baik.
* Semua produk memiliki foto, deskripsi, harga, dan tombol pemesanan.
* Struktur SEO (title, meta description, heading, sitemap XML, robots.txt) telah diterapkan.
* Website memenuhi standar aksesibilitas dasar (kontras warna, navigasi keyboard, alt text gambar).
* Google Analytics dan Meta Pixel aktif serta mengirim data dengan benar.
