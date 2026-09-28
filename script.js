const grid = document.getElementById("productGrid");
const search = document.getElementById("search");

function productCard(p) {
  return `
    <article class="product-card">
      <div class="product-placeholder" aria-label="${p.category} product image">SINK<br>GUARDIA</div>
      <div class="product-body">
        <p class="tag">${p.category}</p>
        <h3>${p.name}</h3>
        <div class="rating">${p.rating !== "—" ? "★ " + p.rating : "Product details"}</div>
        <p>${p.description}</p>
        <p class="best"><strong>Best for:</strong> ${p.bestFor}</p>
        <div class="card-bottom">
          <strong class="price">${p.price}</strong>
          <a class="button small" href="${p.affiliateUrl}" target="_blank" rel="nofollow sponsored noopener">Check Price</a>
        </div>
        <small>${p.note}</small>
      </div>
    </article>`;
}

function render(items) {
  grid.innerHTML = items.length
    ? items.map(productCard).join("")
    : '<p class="empty">No matching products found.</p>';
}

render(PRODUCTS);

search.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  render(PRODUCTS.filter(p =>
    [p.name, p.category, p.description, p.bestFor].join(" ").toLowerCase().includes(q)
  ));
});