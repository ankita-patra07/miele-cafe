const menuItems = [
    { id: 1, name: "House Espresso", price: 140, category: "Hot", note: "Cocoa finish and rich crema", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80" },
    { id: 2, name: "Cappuccino", price: 180, category: "Hot", note: "Balanced roast with silky foam", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80" },
    { id: 3, name: "Spanish Latte", price: 210, category: "Hot", note: "Caramel sweetness and spice", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80" },
    { id: 4, name: "Cold Brew Citrus", price: 170, category: "Cold", note: "18-hour brew with orange peel", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80" },
    { id: 5, name: "Iced Mocha", price: 190, category: "Cold", note: "Dark chocolate and chilled milk", image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=900&q=80" },
    { id: 6, name: "Sparkling Tonic Coffee", price: 200, category: "Cold", note: "Bubbly and refreshing", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80" },
    { id: 7, name: "Avocado Toast", price: 240, category: "Food", note: "Sourdough, chili flakes, lemon", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80" },
    { id: 8, name: "Pesto Paneer Sandwich", price: 260, category: "Food", note: "Grilled and herb-loaded", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80" },
    { id: 9, name: "Truffle Fries", price: 220, category: "Food", note: "Crispy fries with parmesan", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80" },
    { id: 10, name: "Tiramisu Jar", price: 220, category: "Dessert", note: "Espresso-soaked sponge layers", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80" },
    { id: 11, name: "Burnt Cheesecake", price: 250, category: "Dessert", note: "Creamy center, caramelized top", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80" },
    { id: 12, name: "Chocolate Croissant", price: 150, category: "Dessert", note: "Flaky pastry with dark filling", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80" }
];

// Display menu items
const menuItemsDiv = document.querySelector("#menuItems");

menuItems.forEach((item, index) => {
    const itemCard = document.createElement("div");
    itemCard.style.cssText = "width: 260px; min-width: 260px; padding: 20px; border: 1px solid var(--line); border-radius: 12px; background: var(--bg-panel-soft); cursor: pointer; transition: 0.2s; opacity: 0; transform: translateX(42px) translateY(14px) scale(0.94); animation: cardFlyIn 0.65s ease forwards;";
    itemCard.style.animationDelay = `${index * 80}ms`;
    
    itemCard.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 10px; margin-bottom: 12px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">${item.name}</h3>
        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 10px;">${item.note}</p>
        <p style="font-size: 14px; color: var(--accent-strong); font-weight: 700; margin-bottom: 12px;">₹${item.price}</p>
        <button style="width: 100%; padding: 8px; border: none; border-radius: 8px; background: var(--accent); color: white; cursor: pointer; font-weight: 600;">Add to Cart</button>
    `;
    
    menuItemsDiv.appendChild(itemCard);
});


const stories = [
    {
        quote: "The best cappuccino in town. The music, lights, and coffee together feel like a movie scene.",
        author: "Riya, regular guest"
    },
    {
        quote: "I come here for deep work in the mornings and dessert dates at night. Both are perfect.",
        author: "Aman, designer"
    },
    {
        quote: "Cold brew citrus is addictive. Staff recommendations are always on point.",
        author: "Sneha, food blogger"
    }
];


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");
const menuLink = document.querySelector('#menuTab a[href="#menu"]');

function replayMenuCardsAnimation() {
    if (!menuItemsDiv) {
        return;
    }

    const cards = menuItemsDiv.querySelectorAll("div");
    menuItemsDiv.scrollTo({ left: 0, behavior: "smooth" });

    cards.forEach((card, index) => {
        card.style.animation = "none";
        card.style.opacity = "0";
        card.style.transform = "translateX(42px) translateY(14px) scale(0.94)";
        void card.offsetWidth;
        card.style.animation = "cardFlyIn 0.65s ease forwards";
        card.style.animationDelay = `${index * 80}ms`;
    });
}

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
}

if (arrowLeft && arrowRight && menuItemsDiv) {
    const slideAmount = 280;

    arrowLeft.addEventListener("click", () => {
        menuItemsDiv.scrollBy({ left: -slideAmount, behavior: "smooth" });
    });

    arrowRight.addEventListener("click", () => {
        menuItemsDiv.scrollBy({ left: slideAmount, behavior: "smooth" });
    });
}

if (menuLink) {
    menuLink.addEventListener("click", () => {
        replayMenuCardsAnimation();
    });
}
