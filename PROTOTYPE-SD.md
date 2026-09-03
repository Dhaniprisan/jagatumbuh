# Prototype JagaTumbuh SD — Spesifikasi Flow Orang Tua

Kontek: JagaTumbuh = platform sekolah (daycare/KB/TK + ekspansi SD). Repo: /home/ubuntu/projects/jagatumbuh (GitHub Pages, HTML statis + app.css). Prototype SD FASE 1 = flow ORANG TUA SD.

## Alur
index.html → produk-select.html (ADA, jangan diubah) → SD → role-select-sd.html (BUAT) → pilih peran → sd-ortu-beranda.html (BUAT).

Produk daycare TIDAK disentuh (role-select.html & semua parent-*.html, guru-*.html tetap). Semua file SD prefix `sd-`.

## Design system (app.css — SUDAH ADA, jangan ubah)
- Warna: hijau muda pastel (primary) + coral + gold. CSS var di app.css: --cream, --surface, --ink, --muted, --line, --green, --green-soft, --green-dark, --coral, --coral-soft, --coral-dark, --gold, --gold-soft, --gold-dark, --radius, --radius-sm.
- Font: Plus Jakarta Sans (dari Google Fonts, load di <head> tiap halaman).
- Mobile-first, lebar konten ~max 480px, body bg #EBE5DA dengan .app wrapper.
- Struktur screen: statusbar (9:41), app-header (back | judul | avatar), .content, bottom-nav 5 tab.
- Baca dulu parent-beranda.html & parent-daily-report.html utk lihat pola class (app-header, chip-row, section-label, card, bottom-nav, nav-item, pill) — tiru gaya itu.
- Flat clean, pastel, hindari gradient berlebihan.

## Halaman yang dibuat (7 file baru)

### 1. role-select-sd.html
Seperti role-select.html tapi utk SD. Judul "Jelajahi Prototype SD". 2 kartu: Orang Tua (→ sd-ortu-beranda.html, 👨👩👧, "Pantau jadwal, nilai, absensi & komunikasi sekolah anak.") & Guru (→ sd-guru-kelas.html placeholder—belum dibangun, jadi boleh arahkan ke sd-ortu-beranda.html dgn catatan, ATAU ke role-select-sd.html sendiri dgn label "Segera hadir". PILIHAN: buat tombol Guru disabled/akan-datang utk jujur di prototype fase 1). Back ke produk-select.html.

### 2. sd-ortu-beranda.html — Home hub (bintang)
- Header: back ke role-select-sd.html, judul "Halo, Bunda" atau nama ortu, avatar.
- Chip anak: "Kelas 4A · SDN Harapan" + status kehadiran hari ini (Hadir/Sakit/Izin).
- Summary card gelap: hari ini — jumlah mapel, ada/tidak PR, nilai terbaru.
- Grid shortcut 2x3: Jadwal & PR (📅), Nilai & Rapor (📊), Absensi & Izin (📋), Galeri (🖼️), Pesan (💬), Tagihan (💰 — placeholder "Segera").
- Kartu "Perlu perhatian": PR Matematika bsok, nilai ulangan IPA 85, izin diajukan.
- Bottom-nav 5 tab (SD ortu): Beranda (aktif), Jadwal, Nilai, Absensi, Lainnya(masuk ke galeri/chat?) — sederhanakan: Beranda · Jadwal · Nilai · Absensi · Pesan. Lihat pola parent-beranda bottom-nav.

### 3. sd-ortu-jadwal.html — Jadwal & PR
- Header "Jadwal Pelajaran". Picker hari (Senin–Jumat, horizontal chip, Senin aktif).
- Timeline jadwal per jam: 07.00–08.40 Matematika, 08.40–09.20 Bahasa Indonesia, 09.20–10.00 Istirahat, dst (kelas 4A). Tandai yg sudah lewat redup, sekarang highlight.
- Section "PR & Tugas": kartu tugas — mapel, judul, deadline, status (Belum dikerjakan/Selesai). Contoh: Matematika "Latihan pecahan hal. 45", deadline Jumat; IPA "Membuat diorama" deadline Senin depan.

### 4. sd-ortu-nilai.html — Nilai & Rapor
- Header "Nilai Ananda" + pilih semester (Ganjil 2026/2027 aktif).
- Ringkasan: rata-rata, peringkat kelas, tren naik/turun.
- Daftar mapel + nilai (huruf + angka): Matematika 88 A, Bahasa Indonesia 92 A, IPA 85 B+, dst. Bar chart sederhana CSS/SVG tiap mapel.
- Section "Penilaian terbaru": UTS Matematika 88, tugas IPA 90, quiz B.Indo 95 (timeline).
- Tombol "Lihat Rapor Lengkap" (placeholder → alert/toast "Fitur rapor digital segera hadir").

### 5. sd-ortu-absensi.html — Absensi & Perizinan
- Header "Kehadiran & Izin". Ringkasan bulan ini: hadir X, izin Y, sakit Z, alpha 0.
- Kalender mini bulan berjalan (CSS grid) — tandai hadir (hijau dot), izin (kuning), sakit (merah/oranye). Hari ini highlight.
- Section "Riwayat": list tanggal + status + jam (ex: 3 Sep Hadir 06.55; 2 Sep Izin).
- Tombol "+ Ajukan Izin" → section form (mockup, TANPA submit backend): pilih jenis (Sakit/Izin kepentingan), tanggal, alasan, upload surat (placeholder). Tombol "Kirim" → toast "Pengajuan terkirim ke wali kelas ✓" + state berubah jadi "Menunggu konfirmasi".

### 6. sd-ortu-galeri.html — Galeri Kegiatan
- Header "Galeri Kegiatan". Filter chip: Semua · Kelas · Ekstrakurikuler · Lomba.
- Grid 2 kolom foto kegiatan (placeholder emoji/🖼️ + label: "Kegiatan Pramuka", "Class Meeting", "Seni Lukis"). Tiap foto punya label kecil + tanggal. Tab aktif hijau.
- Bisa pakai div warna pastel dgn emoji besar sbg placeholder foto (bukan gambar beneran).

### 7. sd-ortu-chat.html — Pesan (multi-guru)
- Header "Pesan". List chat: Wali Kelas (Bu Sari) — badge unread 2, Guru Matematika (Pak Budi), Guru IPA (Bu Dewi), Admin Sekolah. Avatar warna beda.
- Tap salah satu → view chat sederhana (bubble incoming/outgoing, input mockup). Cukup 1 contoh percakapan wali kelas: "Ananda hari ini aktif di kelas 👍", dll.
- Bottom-nav aktif sesuai halaman.

## Aturan
- Bahasa Indonesia. Nama contoh konsisten: ananda "Raka" (kelas 4A), wali kelas "Bu Sari".
- Gunakan inline <style> kecil utk variasi per halaman + app.css utk dasar (mirip pola parent-*.html yg sudah ada).
- Boleh JS kecil utk interaksi (pilih hari, toast, filter) — taruh inline di akhir body.
- JANGAN ubah file daycare yg ada, app.css, index.html, produk-select.html.
- Verifikasi: tag seimbang, href tidak rusak (file yg dirujuk ada), gak ada overflow (cek manual wajar).
- Laporkan ringkas: file dibuat, struktur, status verifikasi. JANGAN commit/push.
