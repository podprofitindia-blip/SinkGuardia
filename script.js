const products=[
["Best Seller","🌶️","360° Rotating Spice Rack","₹699","₹1,299","4.8","1.2k"],
["Trending","🧺","Under Shelf Basket Organizer","₹499","₹899","4.6","840"],
["Premium","🗂️","Drawer Organizer Set (8 PCS)","₹899","₹1,499","4.7","620"],
["Bestseller","🧰","Foldable Storage Box (Large)","₹1,299","₹1,999","4.8","1.5k"],
["New Arrival","🧴","Wall Mounted Bathroom Shelf","₹799","₹1,399","4.5","510"],
["Smart Choice","💻","Desk Organizer with Phone Stand","₹599","₹999","4.6","780"]
];

const grid=document.getElementById("productGrid");
grid.innerHTML=products.map((p,i)=>`
<article class="product">
  <span class="badge">${p[0]}</span>
  <div class="product-img">${p[1]}</div>
  <h3>${p[2]}</h3>
  <div class="stars">★★★★★ <span style="color:#8a918d">(${p[6]} reviews)</span></div>
  <p class="price">${p[3]} <span class="old">${p[4]}</span></p>
  <button onclick="addToCart(${i})">🛒 Add to Cart</button>
</article>`).join("");

let cart=[];
function addToCart(i){
  cart.push(products[i]);
  document.getElementById("cartCount").textContent=cart.length;
  showToast("Added to your NESTORA picks ✓");
}
function showToast(msg){
  const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2200);
}
function openCart(){
  document.getElementById("cartPanel").classList.add("open");
  document.getElementById("overlay").classList.add("show");
  const box=document.getElementById("cartItems");
  box.innerHTML=cart.length?cart.map(p=>`<p><strong>${p[2]}</strong><br>${p[3]}</p>`).join(""):"No products added yet.";
}
function closeCart(){
  document.getElementById("cartPanel").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}
function toggleMenu(){document.getElementById("mobileMenu").classList.toggle("open")}
function focusSearch(){
  showToast("Search is ready — connect your product search when products are finalized.");
}
function subscribe(e){
  e.preventDefault();
  showToast("Thanks! Welcome to NESTORA Insider.");
  document.getElementById("email").value="";
}
