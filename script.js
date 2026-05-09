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

// Button click
const heroButton = document.querySelector(".hero-button");

if (heroButton) {
  heroButton.addEventListener("click", function () {
    alert("Welcome to the Minnie Lumière collection!");
  });
}

// Loop example
jewelryData.forEach(function (item) {
  if (item.inStock) {
    console.log(item.name + " is in stock.");
  } else {
    console.log(item.name + " is out of stock.");
  }
});
