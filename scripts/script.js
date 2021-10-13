const burger = document.querySelector('.burger');
const navResponsive = document.querySelector('.nav-responsive');
let isBurgerClicked = false;
let portfolios = []

async function renderAllPortfolio() {
    portfolios = await getPortfolioData();
    renderPortfolio(portfolios, 'Semua');
}

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
        filtered = portfolios.sort((a, b) => b.id - a.id);
    } else {
        filtered = portfolios
            .sort((a, b) => b.id - a.id)
            .filter(el => {
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

async function getPortfolioData() {
    const spreadsheetId = '1jzaXV9_m0Mb9DnjWDR4d59L_qCdlBfxRh-9gET-c_R0'
    const apiKey = 'AIzaSyDAjCPFNAr408jQCtIVA9y3a6ltElDPTdk';
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/?key=${apiKey}&includeGridData=true`;
    const result = await fetch(url)
    const { sheets } = await result.json();
    const sheet = sheets[0];
    const data = sheet.data[0].rowData
        .filter((_, index) => index !== 0) // Mulai dari index 1 (menghindari nama kolom)
        .map(row => {
            const { values } = row;
            return {
                id: values[0].formattedValue,
                role: values[1].formattedValue,
                img: values[2].formattedValue,
                name: values[3].formattedValue,
                year: values[4].formattedValue,
                description: values[5].formattedValue,
                tech: values[6].formattedValue,
                duration: values[7].formattedValue,
                url: values[8].formattedValue
            }
        })
    return data;
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

renderAllPortfolio();
renderMediumStories();