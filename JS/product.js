const commodities = [
    {
        id : 1,
        image: "../img/ftprod3.png",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 2,
        image: "../img/ftprod1.png",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 3,
        image: "../img/3a9c95d02cbf861b8438527b7a3a82bd-removebg-preview.png",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 4,
        image: "",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 5,
        image: "",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 6,
        image: "",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 7,
        image: "",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 8,
        image: "",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 9,
        image: "",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 9,
        image: "",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 10,
        image: "",
        productName: "Airpods Max",
        Price: 450000,
    },
    
    {
        id : 11,
        image: "",
        productName: "Airpods Max",
        Price: 450000,
    },
];


document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products');

    commodities.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const imagePath = product.image || '../img/ftprod3.png';


        productCard.innerHTML = `
        <div class="product-image">
                    <img src="${imagePath}" alt="${product.productName}">
                </div>
                <div class="product-details">
                    <h4>${product.productName}</h4>
                    <p class="price">&#8358;${product.Price.toLocaleString()}</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
        `;
        productsContainer.appendChild(productCard);
    })
    });

