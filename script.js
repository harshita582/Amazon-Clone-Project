
console.log("JavaScript is connected!");

// ================= HERO SLIDER =================

const heroSection = document.querySelector(".hero-section");
const leftButton = document.querySelector(".slider-left");
const rightButton = document.querySelector(".slider-right");

const heroImages = [
    "images/hero_image.jpg",
    "images/Heronew_image.jpg",
    "images/Heronew2_image.jpg",
    "images/Heronew3_image.jpg"
];

let currentImage = 0;



// Next image
rightButton.addEventListener("click", function () {

    currentImage++;

    if (currentImage >= heroImages.length) {
        currentImage = 0;
    }

    heroSection.style.backgroundImage =
        `url("${heroImages[currentImage]}")`;
});


// Previous image
leftButton.addEventListener("click", function () {

    currentImage--;

    if (currentImage < 0) {
        currentImage = heroImages.length - 1;
    }

    heroSection.style.backgroundImage =
        `url("${heroImages[currentImage]}")`;
});


// ================= BACK TO TOP =================

const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= SEARCH =================

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-icon");

searchButton.addEventListener("click", function () {

    const searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter something to search.");
    } 
    else {
        alert("You searched for: " + searchText);
    }

});


// ================= CART =================




// ================= PRODUCT DATA =================

const products = {

    clothes: [
        {
            name: "Mandarin Shirt for Men",
            image: "images/clothes_img.jpg",
            price: "₹499",
            rating: "★★★★☆"
        },
        {
            name: "Women's Straight and Pant set with Dupatta",
            image: "images/clothes2_img.jpg",
            price: "₹799",
            rating: "★★★★★"
        },
        {
            name: "Night-Suit",
            image: "images/clothes3_img.jpg",
            price: "₹899",
            rating: "★★★★☆"
        },
        {
            name: "Short Kurta for Men",
            image: "images/clothes4_img.jpg",
            price: "₹999",
            rating: "★★★★☆"
        },
        {
            name: "Kanjivaram Silk Saree",
            image: "images/clothes5_img.jpg",
            price: "₹1000",
            rating: "★★★★☆"
        },
        {
            name: "V-Neck A-Line Maxi Dress",
            image: "images/clothes6_img.jpg",
            price: "₹999",
            rating: "★★★★☆"
        },
        {
            name: "Men Satin Night Suit Full Sleeve",
            image: "images/clothes7_img.jpg",
            price: "₹999",
            rating: "★★★★☆"
        }
    ],

    health: [
        {
            name: "Dettol Antiseptic Liquid",
            image: "images/health_img.jpg",
            price: "₹537",
            rating: "★★★★☆"
        },
        {
            name: " Total-Colgate",
            image: "images/health2_img.jpg",
            price: "₹260",
            rating: "★★★★☆"
        },
        {
            name: "Seoulskin Water Brightening Soap",
            image: "images/health3_img.jpg",
            price: "₹349",
            rating: "★★★★★"
        },
        {
            name: "Himalaya Lip Balm",
            image: "images/health4_img.jpg",
            price: "₹38",
            rating: "★★★★☆"
        }
    ],

    jewellery: [
        {
            name: "Gold Plated Designer Jewellery",
            image: "images/jew_img.jpg",
            price: "₹1,749",
            rating: "★★★★☆"
        },
        {
            name: "Clara| 925 Silver Pink Set ",
            image: "images/jew2_img.jpg",
            price: "₹3,719",
            rating: "★★★★☆"
        },
        {
            name: "Artificial jewellery set",
            image: "images/jew3_img.jpg",
            price: "₹226",
            rating: "★★★★★"
        },
        {
            name: "GIVA |925 Silver Jewellery",
            image: "images/jew4_img.jpg",
            price: "₹1699",
            rating: "★★★★☆"
        }
    ],


    furniture: [
        {
            name: "Sheesham Wood Nesting Table",
            image: "images/furniture1_img.jpg",
            price: "₹3,799",
            rating: "★★★★☆"
        },
        {
            name: "Legacy Of Comfort Amalfi 2 Seater Sofa",
            image: "images/furniture2_img.jpg",
            price: "₹7,999",
            rating: "★★★★★"
        },
        {
            name: "Comfortable Sofa",
            image: "images/81OxeNvTqrL._AC_UL480_FMwebp_QL65_.webp",
            price: "₹8,999",
            rating: "★★★★☆"
        },
        {
            name: "TV Unit-Engineered Wood ",
            image: "images/furniture4_img.jpg",
            price: "₹4,999",
            rating: "★★★★☆"
        },
        {
            name: "Wooden Bookshelf",
            image: "images/furniture5_img.jpg",
            price: "₹2,499",
            rating: "★★★★☆"
        }
    ],

    beauty: [
        {
            name: "Swiss Beauty MAkeup Brushes Set",
            image: "images/beauty1_img.jpg",
            price: "₹351",
            rating: "★★★★★"
        },
        {
            name: "Stainless Steel Nail Clipper Set",
            image: "images/beauty2_img.jpg",
            price: "₹169",
            rating: "★★★★☆"
        },
        {
            name: "Swiss Beauty Satin Lipstick",
            image: "images/beauty3_img.jpg",
            price: "₹186",
            rating: "★★★★☆"
        },
        {
            name: "MAYCREATE Triangle Powder Puff",
            image: "images/beauty4_img.jpg",
            price: "₹119",
            rating: "★★★★★"
        },
        {
            name: "Swiss Beauty MAkeup Set",
            image: "images/beauty5_img.jpg",
            price: "₹650",
            rating: "★★★★★"
        }
    ],

    "pet-care": [
        {
            name: "6-in-1 Pet Grooming Combo for Dogs & Cats",
            image: "images/pet_img.jpg",
            price: "₹479",
            rating: "★★★★★"
        },
        {
            name: "Keratin Care Pet Shampoo",
            image: "images/pet2_img.jpg",
            price: "₹207",
            rating: "★★★★☆"
        },
        {
            name: "Pets Feeding Bowl",
            image: "images/pet3_img.jpg",
            price: "₹189",
            rating: "★★★★☆"
        }
        
    ],

    toys: [
        {
            name: "Talking Cactus Baby Toys",
            image: "images/toys1_img.jpg",
            price: "₹359",
            rating: "★★★★☆"
        },
        {
            name: "Remote Control Car",
            image: "images/toys2_img.jpg",
            price: "₹999",
            rating: "★★★★★"
        },
        {
            name: "Toy Train",
            image: "images/toys3_img.jpg",
            price: "₹589",
            rating: "★★★★☆"
        },
        {
            name: "Robot  Colorful Lights",
            image: "images/toys4_img.jpg",
            price: "₹689",
            rating: "★★★★★"
        },
        {
            name: "Hot Fire Bullet Gun Toy",
            image: "images/toys5_img.jpg",
            price: "₹194",
            rating: "★★★★★"
        }
    ],

    automotive: [
        {
            name: "essential Car Phone Stand",
            image: "images/auto_img.jpg",
            price: "₹269",
            rating: "★★★★☆"
        },
        {
            name: "Anti Matter Bike Helmet",
            image: "images/auto2_img.jpg",
            price: "₹1,994",
            rating: "★★★★★"
        },
        {
            name: "tyre washing brush",
            image: "images/auto3_img.jpg",
            price: "₹499",
            rating: "★★★★☆"
        },
        {
            name: "Car Vacuum Cleaner",
            image: "images/auto4_img.jpg",
            price: "₹3,398",
            rating: "★★★★☆"
        },
        {
            name: "Car Duster",
            image: "images/auto5_img.jpg",
            price: "₹779",
            rating: "★★★★☆"
        }
    ],

    appliances: [
        {
            name: "Slit AC | Convertible 5-in-1",
            image: "images/712qtrs3AfL._AC_UY327_FMwebp_QL65_.webp",
            price: "₹27,490",
            rating: "★★★★☆"
        },
        {
            name: "whirlpool 9 kg Automatic Top Load WAshing Machine",
            image: "images/615xkYPjnZL._AC_UY327_FMwebp_QL65_.webp",
            price: "₹25,499",
            rating: "★★★★★"
        },
        {
            name: "Microwave Oven ",
            image: "images/81bj+66bFhL._AC_UY327_FMwebp_QL65_.webp",
            price: "₹19,090",
            rating: "★★★★☆"
        },
        {
            name: "Haier 2-Door-Side-Side Refrigerator",
            image: "images/71yxMJQhNML._AC_UY327_FMwebp_QL65_.webp",
            price: "₹62,990",
            rating: "★★★★☆"
        }
    ],

    revamp: [
        {
            name: "Modern Decorative Rug 3x5 Ft",
            image: "images/rev1_img.jpg",
            price: "₹3,000",
            rating: "★★★★★"
        },
        {
            name: "24K gold Plated Ganesh Statue",
            image: "images/rev2_img.jpg",
            price: "₹1,297",
            rating: "★★★★☆"
        },
        {
            name: "Homestrap Set of 6 Saree Cover",
            image: "images/rev3_img.jpg",
            price: "₹349",
            rating: "★★★★☆"
        },
        {
            name: "Brass Antique Finish Wall Lamp",
            image: "images/rev4_img.jpg",
            price: "₹2,499",
            rating: "★★★★★"
        }
    ]

};

// ================= CART DATA =================

let cartItems = [];


// ================= HTML ELEMENTS =================

const categoryCards = document.querySelectorAll(".category-card");
const productsSection = document.getElementById("productsSection");
const productsContainer = document.getElementById("productsContainer");
const productCategoryTitle = document.getElementById("productCategoryTitle");
const backToCategories = document.getElementById("backToCategories");
const shopSection = document.querySelector(".shop-section");
const cartCount = document.getElementById("cartCount");
const cartSection = document.getElementById("cartSection");
const cartContainer = document.getElementById("cartContainer");
const cartItemsCount = document.getElementById("cartItemsCount");
const cartTotal = document.getElementById("cartTotal");
const backToProducts = document.getElementById("backToProducts");


// ================= CONTINUE SHOPPING =================

backToProducts.addEventListener("click", function () {

    cartSection.style.display = "none";
    
    heroSection.style.display="";
    shopSection.style.display = "";
    productsSection.style.display="none";

    window.scrollTo({
        top: shopSection.offsetTop,
        behavior: "smooth"
    });

});


// ================= SHOW PRODUCTS =================

function showProducts(category) {

    const categoryProducts = products[category];

    if (!categoryProducts) {
        return;
    }

    productsContainer.innerHTML = "";

    categoryProducts.forEach(product => {

        const productCard = document.createElement("div");

        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <p class="product-name">
                ${product.name}
            </p>

            <p class="product-rating">
                ${product.rating}
            </p>

            <p class="product-price">
                ${product.price}
            </p>

            <button class="add-cart-btn" data-name="${product.name}">
                Add to Cart
            </button>
        `;

        productsContainer.appendChild(productCard);

 //------- ADD TO CART--------------

        const addCartButton = productCard.querySelector(".add-cart-btn");

        addCartButton.addEventListener("click", function () {

        cartItems.push(product);

        cartCount.textContent = cartItems.length;


        alert(product.name + " added to cart!");

});

    });

    const categoryNames = {
        clothes: "Clothes",
        health: "Health & Personal Care",
        furniture: "Furniture",
        beauty: "Beauty Picks",
        jewellery:"Jewellery",
        "pet-care": "Pet Care",
        toys: "New Arrival in Toys",
        automotive: "Automotive Essentials",
        appliances: "Appliances",
        revamp: "Revamp"
    };

    productCategoryTitle.textContent =
        categoryNames[category] || "Products";


    shopSection.style.display = "none";

    productsSection.style.display = "block";

    window.scrollTo({
        top: productsSection.offsetTop,
        behavior: "smooth"
    });

}


// ================= SEE MORE CLICK =================

categoryCards.forEach(card => {

    const seeMore = card.querySelector(".see-more");

    if (seeMore) {

        seeMore.addEventListener("click", function (event) {

            event.preventDefault();

            const category = card.dataset.category;

            showProducts(category);

        });

    }

});


// ================= BACK TO CATEGORIES =================

backToCategories.addEventListener("click", function () {

    productsSection.style.display = "none";
    
    heroSection.style.display="";
    shopSection.style.display = "";

    window.scrollTo({
        top: shopSection.offsetTop,
        behavior: "smooth"
    });

});

// ================= OPEN CART =================

const cart = document.querySelector(".nav-cart");

cart.addEventListener("click", function () {

    heroSection.style.display = "none";
    productsSection.style.display = "none";
    shopSection.style.display = "none";

    cartSection.style.display = "block";
    
    showCart();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ================= SHOW CART =================

function showCart() {

    cartContainer.innerHTML = "";

    if (cartItems.length === 0) {

        cartContainer.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        cartItemsCount.textContent = "0";
        cartTotal.textContent = "₹0";

        return;
    }

    cartItems.forEach(product => {

        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <div>
                <h3>${product.name}</h3>

                <p>${product.rating}</p>

                <p>${product.price}</p>
            </div>
        `;

        cartContainer.appendChild(cartItem);

    });

    let total = 0;

    cartItems.forEach(product => {

    const price = Number(
        product.price.replace("₹", "").replace(/,/g, "")
    );

    total += price;

});

cartItemsCount.textContent = cartItems.length;

cartTotal.textContent = "₹" + total.toLocaleString("en-IN");

}

// ================= UPDATE CART COUNT =================

function updateCartCount() {
    cartCount.textContent = cartItems.length;
}

















































