const navLinks = document.querySelectorAll('.sidebar ul li');
const sidebar = document.querySelector('.sidebar');
const btnClose = document.getElementById('btn-closed');
const btnToggle = document.getElementById('btn-toggle');

// Fungsi untuk menangani klik pada elemen <li>
function handleNavClick(event) {
    // Hapus kelas 'active' dari semua elemen <li>
    navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
    });

    // Tambahkan kelas 'active' ke elemen <li> yang diklik
    event.target.closest('li').classList.add('active');
}

// Tambahkan event listener untuk setiap elemen <li>
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', handleNavClick);
});

btnClose.addEventListener('click', () => {
    sidebar.style.left = '-100%'; /* Sembunyikan sidebar ke kiri */
});

btnToggle.addEventListener('click', () => {
    sidebar.style.left = '0%'; /* Tampilkan sidebar */
});
