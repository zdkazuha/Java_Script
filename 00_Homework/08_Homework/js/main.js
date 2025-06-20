const url = "https://fakestoreapi.com/products";
let arr = [];

fetch(url)
    .then(response => response.json())
    .then(data => {
        const cards= document.querySelector('.cards');

        data.forEach(product => {
            arr.push(product);

            const productCard = document.createElement('div');
            productCard.className = 'card';
            productCard.innerHTML = `
                <img src="${product.image}">
                <h2>${product.title}</h2>
                <p>${product.description.slice(0, 100)}...</p>
                <p><strong>Price: $${product.price}</strong></p>
                <p><strong>Rating: ${product.rating.rate}</strong></p>
            `;

            cards.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

const sortBtn = document.querySelector('#sortBtn');
sortBtn.addEventListener('click', () =>{
    const cards = document.querySelector('.cards');
    cards.classList.toggle('sorted');
    cards.innerHTML = '';    

    if(cards.classList.contains('sorted')) {
        arr.sort((a, b) => b.price - a.price);
    } else {
        arr.sort((a, b) => a.price - b.price);
    }

    arr.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'card';
        productCard.innerHTML = `
            <img src="${product.image}">
            <h2>${product.title}</h2>
            <p>${product.description.slice(0, 100)}...</p>
            <p><strong>Price: $${product.price}</strong></p>
            <p><strong>Rating: ${product.rating.rate}</strong></p>
        `;

        cards.appendChild(productCard);
    });
});