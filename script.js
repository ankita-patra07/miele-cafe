// Menu Items Data
const menuItems = [
  // ─── COFFEE ───
   {
    id: 1,
    category: "coffee",
    name: "Espresso",
    price: 120,
    description: "A concentrated shot of rich, dark coffee with a velvety crema.",
    tag: "bestseller",
    image : "https://images.unsplash.com/photo-1612509590595-785e974ed690?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXNwcmVzc28lMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    category: "coffee",
    name: "Cappuccino",
    price: 180,
    description: "Espresso with steamed milk and a thick layer of frothy foam.",
    tag: "bestseller",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    category: "coffee",
    name: "Flat White",
    price: 190,
    description: "Velvety microfoam over a double ristretto. Stronger than a latte.",
    tag: null,
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    category: "coffee",
    name: "Cold Brew",
    price: 220,
    description: "Steeped for 18 hours. Smooth, low-acid, and served over ice.",
    tag: "new",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    category: "coffee",
    name: "Cafe Latte",
    price: 185,
    description: "Espresso with generous steamed milk and a light foam top.",
    tag: null,
    image: "https://images.unsplash.com/photo-1630021439100-74a32ab42d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZSUyMGxhdHRlfGVufDB8fDB8fHww"
  },

  // ─── TEA & LATTES ───
  {
    id: 6,
    category: "tea&L",
    name: "Matcha Latte",
    price: 210,
    description: "Ceremonial grade matcha whisked with steamed oat milk.",
    tag: "bestseller",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    category: "tea&L",
    name: "Masala Chai",
    price: 160,
    description: "House-spiced tea brewed with ginger, cardamom, and full-fat milk.",
    tag: "bestseller",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    category: "tea&L",
    name: "Turmeric Latte",
    price: 195,
    description: "Golden milk with turmeric, black pepper, cinnamon, and honey.",
    tag: "new",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    category: "tea&L",
    name: "Hot Chocolate",
    price: 175,
    description: "Dark Belgian couverture melted with steamed milk. Dense and rich.",
    tag: null,
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&auto=format&fit=crop&q=60"
  },

  // ─── FOOD ───
  {
    id: 10,
    category: "food",
    name: "Avocado Toast",
    price: 280,
    description: "Smashed avo on sourdough with chilli flakes, lemon, and microgreens.",
    tag: "bestseller",
    image: "https://plus.unsplash.com/premium_photo-1676106624038-81d1e17573db?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZvY2FkbyUyMHRvYXN0fGVufDB8fDB8fHww"
  },
  {
    id: 11,
    category: "food",
    name: "Eggs Benedict",
    price: 320,
    description: "Poached eggs, ham, and hollandaise on a toasted English muffin.",
    tag: null,
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 12,
    category: "food",
    name: "Grilled Panini",
    price: 260,
    description: "Pressed sourdough with mozzarella, sundried tomatoes, and basil pesto.",
    tag: null,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 13,
    category: "food",
    name: "Granola Bowl",
    price: 240,
    description: "House granola with Greek yogurt, seasonal fruit, and wildflower honey.",
    tag: "seasonal",
    image: "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?w=400&auto=format&fit=crop&q=60"
  },

  // ─── DESSERTS ───
  {
    id: 14,
    category: "desserts",
    name: "Tiramisu",
    price: 220,
    description: "Classic Italian layers of espresso-soaked ladyfingers and mascarpone.",
    tag: "bestseller",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 15,
    category: "desserts",
    name: "Chocolate Lava Cake",
    price: 250,
    description: "Warm dark chocolate cake with a molten centre. Served with ice cream.",
    tag: "after 6pm",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 16,
    category: "desserts",
    name: "Lemon Tart",
    price: 195,
    description: "Buttery pastry shell with a sharp, creamy lemon curd filling.",
    tag: null,
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&auto=format&fit=crop&q=60"
  },
  {
    id: 17,
    category: "desserts",
    name: "Croissant",
    price: 140,
    description: "Freshly baked, flaky, and buttery. Plain or with almond cream.",
    tag: "morning only",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&auto=format&fit=crop&q=60"
  }
];

const categoryLabels = {
  "coffee": "Coffee",
  "tea&L" : "Tea and Lattes",
  "food" : "Food",
  "desserts" : "Desserts",
};

// TAG CLASS MAPPING 
function tagClass (tag){
  if(!tag) return  "";
  const tagMap = {
    'new': 'tag-new', 'bestseller': 'tag-bestseller', 'seasonal': 'tag-seasonal', 'after 6pm': 'tag-afterpm', 'morning only': 'tag-morning' 
  };
  return tagMap[tag] || "";
}

// BUILDING SINGLE CARD USING FUNCTIONS 

function buildCard(item){
  const tagHTML = item.tag ? `<span class="menu-card-tag ${tagClass(item.tag)}">${item.tag}</span>`: '';

  return `
  <div class="menu-card">
    <div class ="menu-card-img-wrap">
        <img class ="menu-card-img" src="${item.image}" alt ="${item.name}">
    </div>
    <div class ="menu-card-body">
      ${tagHTML}
      <div class ="menu-card-name">${item.name}</div>
      <div class ="menu-card-desc">${item.description}</div>
      <div class ="menu-card-footer">
          <div class ="menu-card-price"><span>₹</span>${item.price}</div>
          <button class="menu-card-add">+</button>
      </div>
    </div>
  </div>`;
}

//RENDER MENU BY ACTIVE CATEGORY
function renderMenu(activeCat){
  const container = document.getElementById("menuContainer");
  const categories = activeCat === 'all' ? ['coffee','tea&L','food','desserts'] : [activeCat];

  container.innerHTML = categories.map(cat => {
   const items = menuItems.filter(i => i.category=== cat);
    if (!items.length) return '';
    return `
      <div class="menu-category">
        <div class="category-title">${categoryLabels[cat]}</div>
        <div class="menu-row">
          ${items.map(buildCard).join('')}
        </div>
      </div>`;

}).join('');

}

// ── Tab switching ───────────────────────────────
document.getElementById('menuTabs').addEventListener('click', e => {
  const tab = e.target.closest('.menu-tab');
  if (!tab) return;
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderMenu(tab.dataset.cat);
});

// Initialize menu on page load
renderMenu('all');

//--- Hamburger------------------------------

const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click',() => {
const open = navLinks.classList.toggle('active');
  hamburger.querySelector('i').className = open
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
});