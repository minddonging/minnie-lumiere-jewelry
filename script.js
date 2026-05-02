const jewelryData = [
  {
    name: "Pearl Layered Necklace",
    category: "necklace",
    description: "A graceful layered necklace with pearl details, perfect for a soft luxury style.",
    price: 120,
    inStock: true,
    image: "images/necklace.jpg"
  },
  {
    name: "Diamond Glow Ring",
    category: "ring",
    description: "A refined gold ring with a bright stone, created for elegant everyday moments.",
    price: 500,
    inStock: false,
    image: "images/ring.jpg"
  },
  {
    name: "Golden Bracelet Stack",
    category: "bracelet",
    description: "A bold yet feminine bracelet look with gold tones and sparkling details.",
    price: 200,
    inStock: true,
    image: "images/bracelet.jpg"
  }
];

const pageContent = {
  home: {
    smallTitle: "Welcome",
    title: "Home",
    text: "Welcome to Minnie Lumière, a luxury jewelry brand inspired by soft gold, pearls, and timeless elegance."
  },
  collection: {
    smallTitle: "Our Jewelry",
    title: "Collection",
    text: "Explore necklaces, rings, and bracelets designed with elegance and everyday beauty."
  },
  about: {
    smallTitle: "About Us",
    title: "About Minnie Lumière",
    text: "Minnie Lumière creates soft, feminine jewelry pieces inspired by light, elegance, and meaningful moments."
  },
  contact: {
    smallTitle: "Contact",
    title: "Contact Us",
    text: "For questions about our collection, custom orders, or gifts, please contact our jewelry team."
  }
};

const navItems = document.querySelectorAll(".navItem");
const pageSmallTitle = document.getElementById("pageSmallTitle");
const pageTitle = document.getElementById("pageTitle");
const pageText = document.getElementById("pageText");

navItems.forEach(function(item) {
  item.addEventListener("click", function() {
    navItems.forEach(function(nav) {
      nav.classList.remove("active");
    });

    item.classList.add("active");

    const page = item.dataset.page;
    pageSmallTitle.innerText = pageContent[page].smallTitle;
    pageTitle.innerText = pageContent[page].title;
    pageText.innerText = pageContent[page].text;
  });
});

let currentSlide = 0;

const carouselImage = document.getElementById("carouselImage");
const carouselTitle = document.getElementById("carouselTitle");
const carouselText = document.getElementById("carouselText");
const carouselPrice = document.getElementById("carouselPrice");
const carouselStock = document.getElementById("carouselStock");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateCarousel(index) {
  currentSlide = index;
  const item = jewelryData[currentSlide];

  carouselImage.src = item.image;
  carouselTitle.innerText = item.name;
  carouselText.innerText = item.description;
  carouselPrice.innerText = "$" + item.price;

  if (item.inStock) {
    carouselStock.innerText = "In Stock";
    carouselStock.style.color = "green";
  } else {
    carouselStock.innerText = "Out of Stock";
    carouselStock.style.color = "crimson";
  }
}

nextBtn.addEventListener("click", function() {
  currentSlide++;

  if (currentSlide >= jewelryData.length) {
    currentSlide = 0;
  }

  updateCarousel(currentSlide);
});

prevBtn.addEventListener("click", function() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = jewelryData.length - 1;
  }

  updateCarousel(currentSlide);
});

const menuDropdown = document.getElementById("menuDropdown");
const categoryTitle = document.getElementById("categoryTitle");
const categoryText = document.getElementById("categoryText");
const productList = document.getElementById("productList");

function renderProducts(items) {
  productList.innerHTML = "";

  items.forEach(function(item) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const stockClass = item.inStock ? "in-stock" : "out-stock";
    const stockText = item.inStock ? "Available" : "Sold Out";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p><strong>Category:</strong> ${item.category}</p>
      <p><strong>Price:</strong> $${item.price}</p>
      <p class="${stockClass}">${stockText}</p>
    `;

    productList.appendChild(card);
  });
}

function updateCategory(category) {
  const selectedItems = jewelryData.filter(function(item) {
    return item.category === category;
  });

  if (selectedItems.length > 0) {
    const firstItem = selectedItems[0];
    const firstIndex = jewelryData.findIndex(function(item) {
      return item.category === category;
    });

    categoryTitle.innerText =
      category.charAt(0).toUpperCase() + category.slice(1) + " Collection";

    if (firstItem.inStock) {
      categoryText.innerText =
        firstItem.name + " is available for $" + firstItem.price + ". " + firstItem.description;
    } else {
      categoryText.innerText =
        firstItem.name + " is currently sold out, but you can still view the details.";
    }

    renderProducts(selectedItems);
    updateCarousel(firstIndex);
  } else {
    categoryTitle.innerText = "No Collection Found";
    categoryText.innerText = "There are no items in this category.";
    renderProducts([]);
  }
}

menuDropdown.addEventListener("change", function(event) {
  updateCategory(event.target.value);
});

document.querySelector(".hero-button").addEventListener("click", function() {
  document.querySelector(".intro").scrollIntoView({ behavior: "smooth" });
});

updateCategory("necklace");
