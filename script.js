const jewelryData = [
  {
    name: "Pearl Layered Necklace",
    category: "necklace",
    description: "A graceful layered necklace with pearl details, perfect for a soft luxury style.",
    price: 120,
    inStock: true,
    image: "necklace.jpg"
  },
  {
    name: "Diamond Glow Ring",
    category: "ring",
    description: "A refined gold ring with a bright stone, created for elegant everyday moments.",
    price: 500,
    inStock: false,
    image: "ring.jpg"
  },
  {
    name: "Golden Bracelet Stack",
    category: "bracelet",
    description: "A bold yet feminine bracelet look with gold tones and sparkling details.",
    price: 200,
    inStock: true,
    image: "bracelet.jpg"
  }
];

console.log("Minnie Lumière Jewelry project loaded successfully.");

// Hero button
const heroButton = document.querySelector(".hero-button");

if (heroButton) {
  heroButton.addEventListener("click", function () {
    alert("Welcome to the Minnie Lumière collection!");
  });
}

// Create product section
const productSection = document.createElement("section");
productSection.classList.add("product-section");

productSection.innerHTML = `
  <h2>Featured Jewelry Collection</h2>
  <p>Explore our elegant jewelry pieces below.</p>
  <div id="productContainer" class="product-container"></div>
`;

document.body.appendChild(productSection);

const productContainer = document.getElementById("productContainer");

// Loop + DOM
jewelryData.forEach(function (item) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  let stockText = "";
  let stockClass = "";

  if (item.inStock) {
    stockText = "In Stock";
    stockClass = "in-stock";
  } else {
    stockText = "Out of Stock";
    stockClass = "out-stock";
  }

  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <p class="price">$${item.price}</p>
    <p class="${stockClass}">${stockText}</p>
  `;

  productContainer.appendChild(card);
});
