const products = [
  {
    name: "iPhone 14",
    price: "₹70,000",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Samsung TV",
    price: "₹40,000",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Headphones",
    price: "₹2,000",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Laptop",
    price: "₹55,000",
    image: "https://via.placeholder.com/150"
  }
];

const container = document.getElementById("productContainer");

function displayProducts(items) {
  container.innerHTML = "";
  items.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="addToCart('${product.name}')">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(name) {
  alert(name + " added to cart!");
}

// Search feature
document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});

// Load products initially
displayProducts(products);
