const burger = document.querySelector('.burger');
const navResponsive = document.querySelector('.nav-responsive');
let isBurgerClicked = false;
let portfolios = [
    {
        id: 1,
        role: 'Frontend Developer',
        img: 'assets/img/jala-web.jpg',
        name: 'Jala Web App',
        year: 2021,
        description: `
        <p>
            Jala Web App adalah aplikasi yang digunakan petambak udang dalam memonitoring kondisi tambak mereka.
        </p>`,
        tech: 'VueJS',
        duration: '6 bulan',
        url: 'https://app.jala.tech',
    },
    {
        id: 2,
        role: 'Fullstack Developer',
        img: 'assets/img/deafcare-indonesia.jpg',
        name: 'Deafcare Indonesia V2',
        year: 2021,
        description: `
        <p>
            Deafcare adalah solusi bagi pendamping dan penyandang tunarungu untuk mendapatkan informasi terlengkap bagi mereka.
        </p>
        <p>
            Saya membangun semua lini website, seperti backend (Laravel), frontend (VueJS), testing (PHPUnit), dan deployment (Hosting dan Vercel).
        </p>`,
        tech: 'Laravel, NuxtJS (VueJS)',
        duration: '2 minggu',
        url: 'https://deafcareindonesia.com',
    },
    {
        id: 3,
        role: 'Android Developer',
        img: 'assets/img/konsl.jpg',
        name: 'Konsl',
        year: 2020,
        description: `
        <p>
            Konsl adalah sebuah aplikasi berbasis android untuk konsultasi kesehatan mental mahasiswa terutama mahasiswa UII.
        </p>`,
        tech: 'Kotlin',
        duration: '2 minggu',
        url: 'https://bit.ly/KonslApp',
    },
    {
        id: 4,
        role: 'Fullstack Developer',
        img: 'assets/img/dsv.jpg',
        name: 'Delokal Smart Village',
        year: 2020,
        description: `
        <p>
            Delokal Smart Village adalah sistem pengelolaan, manajemen atau sebagai ERP dari desa wisata. Beberapa fitur yang saya kerjakan adalah sebagai berikut:
        </p>
        <p>1. Pembelian dan penjualan produk desa wisata</p>
        <p>2. Manajemen aset</p>
        <p>3. Manajemen QR Produk dan Reward</p>`,
        tech: 'Laravel 7, Bootstrap, JQuery',
        duration: '2 bulan',
        url: 'https://dev.dsv.xyz',
    },
    {
        id: 5,
        role: 'Frontend Developer',
        img: 'assets/img/deafcare.jpg',
        name: 'Deafcare Indonesia',
        year: 2020,
        description: `
        <p>
            Deafcare Indonesia adalah sebuah aplikasi untuk membantu teman-teman tuli dalam mencari kebutuhannya dan membantu mencarikan pelayanan terbaik untuk mereka.
        </p>`,
        tech: 'Laravel 7, Bootstrap, JQuery',
        duration: '1 bulan',
        url: 'https://deafcareindonesia.com',
    },
    {
        id: 6,
        role: 'Fullstack Developer',
        img: 'assets/img/lptm.jpg',
        name: 'LPTM Company Website',
        year: 2020,
        description: `
        <p>
            LPTM Company Website adalah sebuah website yang bertujuan untuk memperkenalkan perusahaan LPTM dan mendigitalkan proses bisnis yang ada di lingkungan LPTM.
        </p>`,
        tech: 'Laravel 7, VueJS, Bootstrap, GoogleDriveAPI, CKEditor, ApexChart',
        duration: '3 bulan',
        url: 'https://lptm.co.id',
    },
    {
        id: 7,
        role: 'Frontend Developer',
        img: 'assets/img/kastil-creative.jpg',
        name: 'Kastil Creative Website',
        year: 2020,
        description: `
        <p>
            Kastil Creative Website adalah sebuah website landing page yang bertujuan untuk memperkenalkan bisnis kreatif Kastil Creative.
        </p>`,
        tech: 'Bootstrap, AOS Library',
        duration: '2 minggu',
        url: 'https://kastilcreative.com',
    },
    {
        id: 8,
        role: 'Fullstack Developer',
        img: 'assets/img/lingkar-belajar.jpg',
        name: 'Lingkar Belajar Online',
        year: 2020,
        description: `
        <p>
            Lingkar Belajar adalah sebuah website forum diskusi mahasiswa UII yang bertujuan untuk menghadirkan lingkungan belajar online seperti di kampus.
        </p>`,
        tech: 'Laravel 7, Bootstrap',
        duration: '1 minggu',
        url: 'https://lingkarbelajar.online',
    },
    {
        id: 9,
        role: 'Fullstack Developer',
        img: 'assets/img/posyandu-mangga.jpg',
        name: 'Smart Posyandu Mangga',
        year: 2020,
        description: `
        <p>
            Smart Posyandu Mangga adalah sebuah Sistem Pendukung Keputusan untuk mengetahui status gizi balita yang dilayani di posyandu mangga.
        </p>`,
        tech: 'Laravel, Bootstrap',
        duration: '2 minggu',
        url: 'https://posyandu-mangga.herokuapp.com',
    },
    {
        id: 10,
        role: 'Fullstack Developer',
        img: 'assets/img/twalang.jpg',
        name: 'Twalang Website',
        year: 2019,
        description: `
        <p>
            Twalang adalah proyek akhir saya pada semester 3. Twalang merupakan sebuah website untuk menjual jasa wisata dan memungkinkan penyedia jasa wisatanya memanajemen jasa yang ditawarkan.
        </p>`,
        tech: 'Laravel 7, Bootstrap, GoogleDriveAPI, ChartJS',
        duration: '3 bulan',
        url: 'https://bitbucket.org/weareabcd/twalang-repository/src/master/',
    },
]

renderPortfolio(portfolios, 'Semua');

burger.addEventListener("click", function(e) {
    if(!isBurgerClicked){
        burger.firstElementChild.firstElementChild.src = 'assets/icon/close.svg';
        navResponsive.style.maxHeight = navResponsive.scrollHeight + 'px';
    } else {
        burger.firstElementChild.firstElementChild.src = 'assets/icon/burger.svg';
        navResponsive.style.maxHeight = 0;
    }
    isBurgerClicked = !isBurgerClicked;
});

function renderPortofolioItem(portfolio){
    return `<div class="portfolio-item" data-id="${portfolio.id}">
        <img class="portfolio-img" src="${portfolio.img}" alt="">
        <div class="portfolio-info">
            <span class="role">${portfolio.role}</span>
            <h3>${portfolio.name}</h3>
            <p>${portfolio.year}</p>
        </div>
    </div>
    <div class="modal dismiss fade-in" id="modal-${portfolio.id}">
        <div class="modal-dialog shadow fade-up">
            <i class="gg-close dismiss"></i>
            <div class="img-container">
                <img src="${portfolio.img}" alt="${portfolio.name}">
            </div>
            <div class="modal-content">
                <span class="role">${portfolio.role}</span>
                <h3>${portfolio.name}</h3>
                <p>${portfolio.year}</p>
                <p style="margin-top:2rem;margin-bottom:0.5rem;font-size:14px"><b>Deskripsi</b></p>
                <p>${portfolio.description || '-'}</p>
                <p style="margin-top:2rem;margin-bottom:0.5rem;font-size:14px"><b>Teknologi</b></p>
                <p>${portfolio.tech || '-'}</p>
                <p style="margin-top:2rem;margin-bottom:0.5rem;font-size:14px"><b>Durasi</b></p>
                <p>${portfolio.duration || '-'}</p>
                <p style="margin-top:2rem;margin-bottom:0.5rem;font-size:14px"><b>URL Project</b></p>
                <a href="${portfolio.url || ''}" target="_blank" rel="noopener noreferrer" style="color:#00173A">${portfolio.url || 'tidak ada'}</a>
            </div>
        </div>
    </div>`
}

function renderPortfolio(portfolios, filter){
    const portfolioWrapper = document.querySelector('.portfolio-wrapper');
    let filtered;
    if(filter == 'Semua'){
        filtered = portfolios;
    } else {
        filtered = portfolios.filter(el => {
            if(el.role == filter){
                return el;
            }
        });
    }
    portfolioWrapper.innerHTML = '';
    filtered.forEach(el => {
        portfolioWrapper.innerHTML += renderPortofolioItem(el);
    });
}

const roleWrapper = document.querySelectorAll('.role-wrapper li');
roleWrapper.forEach(el => {
    el.addEventListener('click', function(e){
        prevFilter = document.querySelector('.role-wrapper li.active');
        prevFilter.classList.remove('active');
        let filter = el.textContent;
        el.classList.add('active');
        renderPortfolio(portfolios, filter);
    })
});

document.querySelector('body').addEventListener('click', event => {
    const portfolioItem = event.target.closest('.portfolio-item');
    if(portfolioItem){
        const id = portfolioItem.dataset.id;
        document.getElementById(`modal-${id}`).classList.add('show');
        document.querySelector('body').classList.add('modal-open');
    }
    if(event.target.classList.contains('dismiss')){
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('show');
        })
        document.querySelector('body').classList.remove('modal-open');
    }
});

async function getMediumStories() {
    const mediumRssFeed = "https://medium.com/feed/@albarranaufala";
    const url = new URL("https://api.rss2json.com/v1/api.json");
    url.search = new URLSearchParams({
        rss_url: mediumRssFeed,
    })
    const result = await fetch(url);
    const data = await result.json();
    return data;
}

function mediumItemTemplate(article) {
    return (
        `<div class="medium-item">
            <img src="${article.thumbnail}" alt="${article.title}">
            <div class="medium-item-info">
                <h3>${article.title}</h3>
                <div>
                    <a href="${article.link}" target="_blank" rel="noopener noreferrer" class="btn-sm btn-primary mt-05">Baca Selengkapnya</a>
                </div>
            </div>
        </div>`
    )
}

async function renderMediumStories() {
    const { items } = await getMediumStories();
    const mediumListHTML = items.map(item => mediumItemTemplate(item)).join('');
    const mediumWrapperDOM = document.querySelector('.medium-wrapper');
    mediumWrapperDOM.innerHTML = mediumListHTML;
}

renderMediumStories();