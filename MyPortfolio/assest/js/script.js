// JavaScript untuk navigasi halaman dan scroll
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Jika href adalah link halaman lain, biarkan browser membuka halaman
        if (href !== "#" && href !== "") {
            return;  // Biarkan navigasi ke halaman lain
        }

        // Jika navigasi dalam halaman (scroll), cegah default behavior dan lakukan scroll
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animasi Skill Bar
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
        const level = bar.classList.contains('html') ? '80%' :
                      bar.classList.contains('js') ? '70%' :
                      bar.classList.contains('react') ? '60%' : '0%';
        bar.style.width = level;
    });
}

// Observer untuk animasi skill bar
const skillsSection = document.querySelector('#skills');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
        }
    });
}, { threshold: 0.5 });
observer.observe(skillsSection);

// Fungsi untuk filter portfolio
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        if (item.classList.contains(category) || category === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Menampilkan semua saat memuat
filterPortfolio('all');

// Mendapatkan elemen navbar
const navbar = document.querySelector('.navbar-header');

// Fungsi untuk menambahkan atau menghapus kelas 'scroll-navbar' saat di-scroll
function handleScroll() {
    if (window.scrollY > 50) { // Cek apakah scroll lebih dari 50px
        navbar.classList.add('scroll-navbar');
    } else {
        navbar.classList.remove('scroll-navbar');
    }
}

// Menjalankan fungsi saat halaman di-scroll
window.addEventListener('scroll', handleScroll);

// Data untuk grafik kepuasan pelanggan
const ctx = document.getElementById('customerSatisfactionChart').getContext('2d');
const customerSatisfactionChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['John Doe', 'Jane Smith'], // Nama Klien
        datasets: [{
            label: 'Kepuasan Pelanggan (%)',
            data: [90, 95], // Persentase kepuasan
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 10
                }
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeOutBounce'
        }
    }
});

// Menambahkan animasi efek fade in untuk konten
const sections = document.querySelectorAll("section");
sections.forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
        section.style.opacity = 1;
    }, index * 500); // Menambah delay antara setiap section
});

// Untuk menutup lightbox jika area luar gambar diklik
document.querySelectorAll('.lightbox').forEach(lightbox => {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            window.location.hash = ''; // Menghapus hash dan menutup lightbox
        }
    });
});
