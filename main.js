


const products = [
    { id: 1, name: "Patek Philippe Nautilus", price: "$50", img: "./1.jpeg" },
    { id: 2, name: "Tissot PRX", price: "$35", img: "./2.jpeg" },
    { id: 3, name: "Audemars Piguet Royal Oak", price: "$60", img: "./3.jpeg" },
    { id: 4, name: "Seiko Prospex", price: "$40", img: "./4.jpeg" },
    { id: 5, name: "Casio G-Shock", price: "$40", img: "./5.jpeg" },
    { id: 6, name: "Tag Heuer Carrera", price: "$70", img: "./6.jpeg" },
    { id: 7, name: "Omega Speedmaster", price: "$60", img: "./7.jpeg" },
    { id: 8, name: "Rolex Submariner", price: "$40", img: "./8.jpeg" }
];

// Display Products
function displayProducts() {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";
    products.forEach(product => {
        const card = `
            <div class="col-md-3 mb-4">
                <div class="card shadow">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <button class="btn btn-custom" onclick="buyItem('${product.name}')">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function buyItem(itemName) {
    alert(`Thank you for buying ${itemName}! 🎉`);
}

// Show Thank You Alert & Reset Form
function showThankYou(event) {
    event.preventDefault();
    alert("Thank you for contacting us! 😊");
    document.querySelector("form").reset();
}

// Show Sections Dynamically
function showSection(section) {
    ["landing", "products", "about", "contact"].forEach(id => document.getElementById(id).classList.add("d-none"));
    document.getElementById(section).classList.remove("d-none");
    if (section === "products") displayProducts();
}

document.addEventListener("DOMContentLoaded", () => showSection('landing'));

