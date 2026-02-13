const api = 'https://www.omdbapi.com/';
const grid = document.querySelector('#card-grid');
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');

async function loadProducts() {
    const response = await fetch(api + `?s=${searchInput.value.trim()}&page=${pagination.page}&apikey=aee5392c`);
    const data = await response.json();

    console.log(data);

    for (let i = 0; i < data.Search.length; i++) {
        addProductToHtml(data.Search[i]);
    }
}

function addProductToHtml(i) {
    grid.innerHTML += `<div class="col">
                        <div class="card h-100">
                            <img height="400" src="${i.Poster}"
                                class="card-img-top" alt="${i.Title}">
                            <div class="card-body">
                                <h5 class="card-title">${i.Title}</h5>
                                <p class="card-text">${i.Year} Year - Genre ${i.Type}</p>
                            </div>
                        </div>
                    </div>`
}

loadMoreBtn.onclick = () => {
    pagination.next();
    loadProducts();
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const searchInputValue = searchInput.value.trim();
    grid.innerHTML = '';
    pagination.reset();

    fetch(api + `?s=${searchInputValue}&page=${pagination.page}&apikey=aee5392c`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.Search) {
                for (let i = 0; i < data.Search.length; i++) {
                    addProductToHtml(data.Search[i]);
                }
            } else {
                grid.innerHTML = '<p>No results found</p>';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});