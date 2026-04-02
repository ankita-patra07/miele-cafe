let menu = [{
    id : 1,
    name : "Espresso",
    price : 140,
    category : "Hot"},
    {
    id : 2,
    name : "Cappuccino",
    price : 200,
    category : "Hot"
    },
{   id : 3,
    name : "Cold Brew",
    price : 220,
    category : "Cold"

},
{
    id : 4,
    name : "Iced Latte",
    price : 210,
    category : "Cold"
},
{
    id : 5,
    name : "Butter Croissant",
    price : 180,
    category : "Food"
},
{
  id : 6, 
  name : "Avocado Toast",
  price : 280,
  category : "Food",
}];


function renderItems(){

let itemsdiv = document.querySelector("#items-grid");
let html = "";
menu.forEach(function(val){
    html += `<div class="card">
    <h3>${val.name}</h3> 
    <p>₹${val.price}</p>
    <button onclick = "addToCart(${val.id})">Add</button>
    </div>`;
});

itemsdiv.innerHTML = html;

}
renderItems();

let cart = [];

function addToCart(id){
  let item = menu.find(function(val){
    return val.id === id;
  });

  cart.push(item);
  renderCart();
}

function renderCart(){
  let cartDiv = document.querySelector("#cart");
  let html = "";

  cart.forEach(function(item){
    html += `<p>${item.name} - ₹${item.price}</p>`;
  });

  cartDiv.innerHTML = html;
}