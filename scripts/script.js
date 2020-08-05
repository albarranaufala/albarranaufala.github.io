const burger = document.querySelector('.burger');
const navResponsive = document.querySelector('.nav-responsive');
let isBurgerClicked = false;
let portfolios = [
    {
        role: 'Frontend Developer',
        img: 'assets/img/kastil-creative.jpg',
        name: 'Kastil Creative Website',
        year: 2020,
    },
    {
        role: 'Fullstack Developer',
        img: 'assets/img/lptm.jpg',
        name: 'LPTM Company Website',
        year: 2020,
    },
    {
        role: 'Frontend Developer',
        img: 'assets/img/kelas-fiqih.jpg',
        name: 'Kelas Fiqih',
        year: 2020,
    },
    {
        role: 'Fullstack Developer',
        img: 'assets/img/twalang.jpg',
        name: 'Twalang Website',
        year: 2019,
    },
    {
        role: 'Videographer',
        img: 'assets/img/input-2019.jpg',
        name: 'INPUT 2019 Aftermovie',
        year: 2019,
    },
    {
        role: 'Videographer',
        img: 'assets/img/harmony-pontianak.jpg',
        name: 'Harmony of Pontianak',
        year: 2017,
    },
]

renderPortfolio(portfolios, 'Semua');

burger.addEventListener("click", function(e) {
    if(!isBurgerClicked){
        burger.firstElementChild.src = 'assets/icon/close.svg';
        navResponsive.style.maxHeight = navResponsive.scrollHeight + 'px';
    } else {
        burger.firstElementChild.src = 'assets/icon/burger.svg';
        navResponsive.style.maxHeight = 0;
    }
    isBurgerClicked = !isBurgerClicked;
});

function renderPortofolioItem(portfolio){
    return `<div class="portfolio-item">
        <img class="portfolio-img" src="${portfolio.img}" alt="">
        <div class="portfolio-info">
            <span class="role">${portfolio.role}</span>
            <h3>${portfolio.name}</h3>
            <p>${portfolio.year}</p>
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