// Definisikan daftar gambar untuk setiap grup.
// Sesuaikan dengan nama file gambar di folder images/
const imageGroups = {
    group1: [
        'images/group1/gambar1.jpg',
        'images/group1/gambar2.jpg',
        'images/group1/gambar3.jpg',
        'images/group1/gambar4.jpg',
        'images/group1/gambar5.jpg',
        'images/group1/gambar6.jpg'
    ],
    group2: [
        'images/group2/petir1.jpg',
        'images/group2/petir2.png',
        'images/group2/petir3.png',
        'images/group2/petir4.png',
        'images/group2/petir5.png',
        'images/group2/petir6.png'
    ]
};

// Ambil elemen HTML
const showRandomBtn = document.getElementById('showRandomBtn');
const randomImage = document.getElementById('randomImage');
const groupCheckboxes = document.querySelectorAll('input[name="group"]');
const showAllBtn = document.getElementById('showAllBtn');

function getRandomImage() {
    let allImages = [];
    let selectedGroups = [];

    // Cek grup mana saja yang dicentang
    groupCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedGroups.push(checkbox.value);
        }
    });

    // Kumpulkan semua gambar dari grup yang dipilih
    selectedGroups.forEach(group => {
        if (imageGroups[group]) {
            allImages = allImages.concat(imageGroups[group]);
        }
    });

    // Jika tidak ada grup yang dicentang, berikan pesan atau jangan tampilkan apa-apa
    if (allImages.length === 0) {
        randomImage.src = '';
        randomImage.alt = 'Tidak ada grup yang dipilih.';
        return;
    }

    // Pilih gambar secara acak
    const randomIndex = Math.floor(Math.random() * allImages.length);
    const selectedImagePath = allImages[randomIndex];

    // Tampilkan gambar
    randomImage.src = selectedImagePath;
    randomImage.alt = 'Gambar Random';
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


