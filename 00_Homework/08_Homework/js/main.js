const url = "https://fakestoreapi.com/products";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const cards= document.querySelector('.cards');

        data.forEach(product => {
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
