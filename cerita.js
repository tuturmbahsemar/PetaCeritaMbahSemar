/* ============================================================
   DATA CERITA - Peta Tutur Mbah Semar
   Berkas ini satu-satunya yang perlu kamu edit.
   Buka dengan aplikasi teks apa pun (Notepad, Catatan, editor HP).

   ATURAN SINGKAT
   - Teks selalu di dalam tanda kutip ' '  (contoh: url: 'https://youtu.be/abc123')
   - Setiap baris dalam daftar diakhiri koma ,
   - Jangan menghapus kurung { } [ ] atau tanda koma yang ada.
   - Kunci seperti '33' adalah kode provinsi (daftar kode ada di rangkuman).

   BAGAIMANA DAERAH TERBUKA
   - Daerah terbuka otomatis pada tanggal `tayang` video pertamanya.
   - Sepuluh hari sebelumnya daerah berstatus "segera dibuka".
   - Format tanggal: 'TAHUN-BULAN-TANGGAL', misalnya '2026-11-08'.

   MENCANTUMKAN LINK
   - url      : link satu video (YouTube > Bagikan > Salin). Tampil sebagai judul yang bisa diklik.
   - playlist : link playlist daerah itu (YouTube Studio > Playlist). Tampil sebagai tombol besar.
   - Jika playlist kosong tetapi ada url, tombolnya membuka video pertama yang sudah tayang.
   - Hanya link berawalan http:// atau https:// yang diterima.

   CONTOH ENTRI BARU (salin, tempel di bawah entri terakhir, lalu ubah)
     '51': { ringkas: 'Satu kalimat tentang cerita dari daerah ini.',
       petunjuk: 'Teaser misterius yang tampil sebelum daerah dibuka.',
       playlist: '',
       video: [
         { jenis: 'Mitos', judul: 'Judul video lengkap', tayang: '2026-12-06', url: '' }
       ] },

   Jenis yang dipakai: 'Sejarah', 'Mitos', 'Horor'.
   Daerah tanpa video tetapi ingin dipamerkan: { manual: 'segera', buka: 'Menyusul', petunjuk: '...' }
   ============================================================ */
window.CERITA_DATA = {
    '36': { ringkas: 'Ujung barat Jalan Raya Pos. Dari Anyer, jalan sepanjang sekitar seribu kilometer itu dimulai.',
      petunjuk: 'Sebuah jalan yang dibangun di masa kolonial bermula dari pantai ini.',
      playlist: '',
      video: [{ jenis: 'Sejarah', judul: 'Jalan Raya Pos Anyer-Panarukan: Siapa yang Sebenarnya Dibayar?', tayang: '2026-11-03', url: '' }] },
    '33': { ringkas: 'Tanah para dalang dan abdi. Di sini Semar dan Petruk dituturkan, juga perundingan yang berujung penangkapan Pangeran Diponegoro.',
      petunjuk: 'Daerah para dalang. Sosok sang pamomong akan dituturkan lebih dulu di sini.',
      playlist: '',
      video: [
        { jenis: 'Mitos', judul: 'Semar: Dewa yang Menjelma Jadi Abdi, Asal-Usul Sang Pamomong', tayang: '2026-11-08', url: '' },
        { jenis: 'Mitos', judul: 'Petruk Dadi Ratu: Lakon Wayang yang Menyindir Penguasa', tayang: '2026-11-15', url: '' },
        { jenis: 'Sejarah', judul: 'Perang Diponegoro: Pangeran yang Ditangkap Saat Berunding', tayang: '2026-11-17', url: '' }] },
    '32': { ringkas: 'Dari larangan senja yang diwariskan orang tua, kebun-kebun kopi Priangan di masa tanam paksa, sampai peristiwa Rengasdengklok menjelang proklamasi.',
      petunjuk: 'Tanah yang melahirkan kata "pamali". Larangan senja dan kisah kuasa menunggu di sini.',
      playlist: '',
      video: [
        { jenis: 'Horor', judul: 'Pamali Magrib: Kenapa Dilarang Keluar Rumah Saat Senja?', tayang: '2026-11-05', url: '' },
        { jenis: 'Sejarah', judul: 'Tanam Paksa: Sistem yang Memperkaya Belanda dan Menguras Desa-Desa Jawa', tayang: '2026-11-10', url: '' },
        { jenis: 'Sejarah', judul: 'Detik-Detik Sebelum Proklamasi: Peristiwa Rengasdengklok', tayang: '2026-11-24', url: '' }] },
    '61': { ringkas: 'Cerita seram dari tepi sungai. Konon, nama ibu kota daerah ini berkaitan dengan sosok yang ditakuti warga.',
      petunjuk: 'Konon, nama ibu kota daerah ini berasal dari sosok yang ditakuti di tepi sungai.',
      playlist: '',
      video: [{ jenis: 'Horor', judul: 'Kuntilanak dan Pohon Beringin: Kenapa Selalu di Sana?', tayang: '2026-11-12', url: '' }] },
    '34': { ringkas: 'Pantai selatan dan pantangan baju hijau. Kisah Nyai Roro Kidul dari tepi laut yang dijaga.',
      petunjuk: 'Laut selatan menyimpan larangan yang masih dipegang banyak orang.',
      playlist: '',
      video: [{ jenis: 'Mitos', judul: 'Nyai Roro Kidul dan Larangan Baju Hijau di Pantai Selatan', tayang: '2026-11-22', url: '' }] },
    '31': { ringkas: 'Ibu kota yang menyimpan permainan pemanggil arwah: asal-usul Jailangkung dan kisah di baliknya.',
      petunjuk: 'Di tengah hiruk-pikuk kota, ada permainan lama yang konon memanggil sesuatu.',
      playlist: '',
      video: [{ jenis: 'Horor', judul: 'Jailangkung: Asal-Usul Permainan Pemanggil Arwah', tayang: '2026-11-26', url: '' }] },
    '35': { ringkas: 'Ujung timur Jalan Raya Pos. Larangan menjawab panggilan tengah malam dan kepercayaan petani pada Dewi Sri dituturkan dari sini.',
      petunjuk: 'Ujung timur Jalan Raya Pos ada di sini. Ada larangan malam dan penjaga padi yang belum dituturkan.',
      manual: 'segera', buka: '19 Nov',
      playlist: '',
      video: [
        { jenis: 'Horor', judul: 'Pamali Menjawab Panggilan Tengah Malam: Asal-Usul Larangan Itu', tayang: '2026-11-19', url: '' },
        { jenis: 'Mitos', judul: 'Dewi Sri: Asal-Usul Padi dan Kepercayaan Petani Jawa', tayang: '2026-11-29', url: '' }] }
  };

/* ============================================================
   KOTAK USUL CERITA
   1. Buat Google Form dengan 4 pertanyaan bertipe "Jawaban singkat"
      atau "Paragraf" (jangan pilihan ganda): Daerah, Jenis, Cerita, Nama.
   2. Form > titik tiga > "Dapatkan tautan yang telah diisi sebelumnya".
      Isi tiap kolom dengan teks apa saja, klik "Dapatkan tautan", salin.
      Di tautan itu ada entry.1234567 untuk tiap kolom.
   3. formUrl: ganti bagian akhir /viewform menjadi /formResponse.
   Jawaban masuk ke Google Sheets milikmu. Tidak tampil di situs.
   ============================================================ */
window.USUL_CONFIG = {
  formUrl: '',   // contoh: 'https://docs.google.com/forms/d/e/XXXX/formResponse'
  entries: { daerah: '', jenis: '', cerita: '', nama: '' }   // contoh: 'entry.1234567'
};

/* Usulan yang sudah kamu pilih untuk dituturkan (tampil di bawah kotak usul).
   Kosongkan jika belum ada. Contoh:
   { judul: 'Larangan Menikah di Bulan Suro', daerah: 'Jawa Tengah', dari: 'Rina' } */
window.USUL_DIPILIH = [];
