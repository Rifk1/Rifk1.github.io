// Definisikan daftar gambar untuk setiap grup.
// Sesuaikan dengan nama file gambar di folder images/
const imageGroups = {
    group1: [
        { path: 'images/group1/gambar1.jpg', title: 'L Shape - Case 1' },
        { path: 'images/group1/gambar2.jpg', title: 'L Shape - Case 2' },
        { path: 'images/group1/gambar3.jpg', title: 'L Shape - Case 3' },
        { path: 'images/group1/gambar4.jpg', title: 'L Shape - Case 4' },
        { path: 'images/group1/gambar5.jpg', title: 'L Shape - Case 5' },
        { path: 'images/group1/gambar6.jpg', title: 'L Shape - Case 6' }
    ],
    group2: [
        { path: 'images/group2/petir1.jpg', title: 'Pola Petir - Case 1' },
        { path: 'images/group2/petir2.png', title: 'Pola Petir - Case 2' },
        { path: 'images/group2/petir3.png', title: 'Pola Petir - Case 3' },
        { path: 'images/group2/petir4.png', title: 'Pola Petir - Case 4' },
        { path: 'images/group2/petir5.png', title: 'Pola Petir - Case 5' },
        { path: 'images/group2/petir6.png', title: 'Pola Petir - Case 6' }
    ],
    k:[
        { path: 'images/k/k1.png', title: "F U R U' R2' F' R U R U' R'" },
        { path: 'images/k/k2.png', title: "(R' F R) (U R' F' R) (F U' F')" },
        { path: 'images/k/k3.png', title: "(r' U' r) (R' U' R U) (r' U r)" },
        { path: 'images/k/k4.png', title: "(r U r') (R U R' U') (r U' r')" }
    ],
    i:[
        { path: 'images/i/i3.png', title: "(R' F R U) (R U' R2' F') R2 U' R' (U R U R')" },
        { path: 'images/i/i4.png', title: "r' U' r (U' R' U R) (U' R' U R) r' U r" }
        
    ],
     i:[
        { path: 'images/A/A1.png', title: "(R' F R U) (R U' R2' F') R2 U' R' (U R U R')" },
        { path: 'images/A/A2.png', title: "r' U' r (U' R' U R) (U' R' U R) r' U r" },
        { path: 'images/A/A3.png', title: "r' U' r (U' R' U R) (U' R' U R) r' U r" },
        { path: 'images/A/A4.png', title: "r' U' r (U' R' U R) (U' R' U R) r' U r" }
        
    ]
};

// Ambil elemen HTML
const showRandomBtn = document.getElementById('showRandomBtn');
const randomImage = document.getElementById('randomImage');
const groupCheckboxes = document.querySelectorAll('input[name="group"]');
const showAllBtn = document.getElementById('showAllBtn');
const imageTitle = document.getElementById('imageTitle');
const toggleTitleBtn = document.getElementById('toggleTitleBtn');
let isTitleVisible = false;
toggleTitleBtn.addEventListener('click', () => {
    isTitleVisible = !isTitleVisible;
    imageTitle.style.display = isTitleVisible ? 'block' : 'none';
    toggleTitleBtn.textContent = isTitleVisible ? 'Sembunyikan Judul' : 'Tampilkan Judul';
});

let lastImage = null;

function getRandomImage() {
    let allImages = [];
    let selectedGroups = [];

    groupCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedGroups.push(checkbox.value);
        }
    });

    selectedGroups.forEach(group => {
        if (imageGroups[group]) {
            allImages = allImages.concat(imageGroups[group]);
        }
    });

     if (allImages.length === 0) {
        randomImage.src = 'images/tidakada.jpeg';   
        randomImage.alt = 'Tidak ada grup yang dipilih.';
        document.getElementById('imageTitle').textContent = '';
        return;
    }

    let selectedImage;
    do {
        const randomIndex = Math.floor(Math.random() * allImages.length);
        selectedImage = allImages[randomIndex];
    } while (selectedImage === lastImage && allImages.length > 1);

    lastImage = selectedImage;
    randomImage.src = selectedImage.path;
    randomImage.alt = selectedImage.title;
    document.getElementById('imageTitle').textContent = selectedImage.title;
}

// Tambahkan event listener untuk tombol "Tampilkan Semua"
showAllBtn.addEventListener('click', () => {
    // Periksa apakah ada checkbox yang dicentang
    const anyChecked = Array.from(groupCheckboxes).some(checkbox => checkbox.checked);

    if (anyChecked) {
        // Jika ada yang dicentang, matikan semua centang
        groupCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    } else {
        // Jika tidak ada yang dicentang, nyalakan semua centang
        groupCheckboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
    }
});

// Tambahkan event listener untuk tombol "Tampilkan Gambar Random"
showRandomBtn.addEventListener('click', getRandomImage);

// Tambahkan event listener untuk tombol Spasi
document.addEventListener('keyup', (event) => {
    // Cek apakah tombol yang ditekan adalah spasi (spacebar)
    if (event.key === ' ') {
        getRandomImage();
    }
});

// Panggil fungsi sekali saat halaman pertama kali dimuat

getRandomImage();

function copyLink(link) {
    navigator.clipboard.writeText(link)
        .then(() => {
            alert("Tautan berhasil disalin!");
        })
        .catch(err => {
            console.error('Gagal menyalin: ', err);
        });
}
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const btn = document.getElementById('toggleAudioBtn');
    if (!video || !btn) return;

    // set initial text sesuai state muted
    btn.textContent = video.muted ? 'Suara: Mati' : 'Suara: Hidup';
    btn.setAttribute('aria-pressed', String(!video.muted));

    btn.addEventListener('click', async () => {
        // user interaction allows mengaktifkan audio
        video.muted = !video.muted;
        btn.textContent = video.muted ? 'Suara: Mati' : 'Suara: Hidup';
        btn.setAttribute('aria-pressed', String(!video.muted));
        try {
            await video.play(); // beberapa browser butuh play() dipanggil setelah gesture
        } catch (e) {
            // ignore jika gagal
            console.warn('Tidak bisa memutar video:', e);
        }
    });
});



