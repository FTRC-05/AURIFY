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
        image: "../PRODUCTS/PRODUCT-IMG/HP1.jpg",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 5,
        image: "../PRODUCTS/PRODUCT-IMG/hp2.jpg",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 6,
        image: "../PRODUCTS/PRODUCT-IMG/hp3.jpg",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 7,
        image: "../PRODUCTS/PRODUCT-IMG/hp5.jpg",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 8,
        image: "../PRODUCTS/PRODUCT-IMG/hp6.jpg",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 9,
        image: "../PRODUCTS/PRODUCT-IMG/hp7.jpg",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 9,
        image: "../PRODUCTS/PRODUCT-IMG/hp8.jpg",
        productName: "Airpods Max",
        Price: 450000,
    },
    {
        id : 10,
        image: "../PRODUCTS/PRODUCT-IMG/hp9.jpg",
        productName: "Airpods Max",
        Price: 450000,
    },
    
    {
        id : 11,
        image: "../PRODUCTS/PRODUCT-IMG/Red Dot Design Award_ Cleer Enduro ANC.jpg",
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

const commodities_2 = [
    {
        id: 1,
        image: "../PRODUCTS/PRODUCT-IMG/eb1.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 2,
        image: "../PRODUCTS/PRODUCT-IMG/eb3.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 3,
        image: "../PRODUCTS/PRODUCT-IMG/ep4.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 4,
        image: "../PRODUCTS/PRODUCT-IMG/ep5.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 5,
        image: "../PRODUCTS/PRODUCT-IMG/ep6.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 6,
        image: "../PRODUCTS/PRODUCT-IMG/ep7.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 7,
        image: "../PRODUCTS/PRODUCT-IMG/ep8.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 8,
        image: "../PRODUCTS/PRODUCT-IMG/ep9.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 9,
        image: "../PRODUCTS/PRODUCT-IMG/ep10.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 10,
        image: "../PRODUCTS/PRODUCT-IMG/ep11.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 11,
        image: "../PRODUCTS/PRODUCT-IMG/ep12.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 12,
        image: "../PRODUCTS/PRODUCT-IMG/apple airpods 3 eb2.jpg",
        productName: 'Apple Airpods 3',
        Price: 250000
    },
];

document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('bud-products');

    commodities_2.forEach(product => {
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


   const commodities_3 = [
    {
        id: 1,
        image: "../PRODUCTS/PRODUCT-IMG/gm1.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 2,
        image: "../PRODUCTS/PRODUCT-IMG/gm2.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 3,
        image: "../PRODUCTS/PRODUCT-IMG/gm3.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 4,
        image: "../PRODUCTS/PRODUCT-IMG/gm4.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 5,
        image: "../PRODUCTS/PRODUCT-IMG/gm5.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 6,
        image: "../PRODUCTS/PRODUCT-IMG/gm6.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 7,
        image: "../PRODUCTS/PRODUCT-IMG/gm7.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 8,
        image: "../PRODUCTS/PRODUCT-IMG/gm8.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 9,
        image: "../PRODUCTS/PRODUCT-IMG/gm9.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 10,
        image: "../PRODUCTS/PRODUCT-IMG/gm10.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 11,
        image: "../PRODUCTS/PRODUCT-IMG/gm11.jpg",
        productName: 'Earbuds pro',
        Price: 20000
    },
    {
        id: 12,
        image: "../PRODUCTS/PRODUCT-IMG/gm12.jpg",
        productName: 'Apple Airpods 3',
        Price: 250000
    },
]; 

document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('gaming-products');

    commodities_3.forEach(product => {
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

    document.addEventListener('contextmenu', function(e) {
    // Check if the target element is an image or video
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault(); // Prevent the default right-click menu
    }
});

// To apply to the whole document (more aggressive)
// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// });