function nyatakanCinta() {
    const kotak = document.querySelector('.kotak');
    const pernyataan = document.getElementById("pernyataan");

    // Tambahkan animasi goyang
    kotak.classList.add("goyang");

    // Tampilkan pesan setelah animasi selesai
    setTimeout(() => {
        kotak.style.display = "none";
        pernyataan.hidden = false;
    }, 600);
}

function jawaban() {
    const tombol = document.getElementById("tombol");
    tombol.textContent = "Makasiiii sayangg 😍";  // Ubah teks tombol
    tombol.style.background = "#ffa7a7";         // Ubah warna latar tombol
    tombol.style.cursor = "default";             // Nonaktifkan klik ulang
    tombol.disabled = true;                      // Nonaktifkan tombol
    generateHearts()
}

function generateHearts() {
    const pernyataan = document.getElementById("pernyataan");

    // Buat beberapa hati secara acak
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️'; // Simbol hati
        heart.style.left = `${Math.random() * 100}vw`; // Posisi acak horizontal
        heart.style.animationDuration = `${Math.random() * 2 + 4}s`; // Durasi acak untuk tiap hati
        pernyataan.appendChild(heart);

        // Menghapus elemen hati setelah selesai animasi
        setTimeout(() => {
            heart.remove();
        }, 4000); // Sesuaikan dengan durasi animasi
    }
}