const grid=document.getElementById('productGrid');
const search=document.getElementById('search');
const filter=document.getElementById('filter');
const empty=document.getElementById('empty');

function isAffiliateUrl(url){
  return url && url !== '#' && !url.includes('PASTE_AFFILIATE_URL_HERE');
}

function render(){
  const q=(search.value||'').toLowerCase().trim();
  const f=filter.value;
  const list=products.filter(p=>(f==='All'||p.category===f)&&(`${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q)));
  grid.innerHTML=list.map(p=>{
    const active=isAffiliateUrl(p.affiliateUrl);
    const href=active?p.affiliateUrl:'#';
    return `<article class="product-card">
      <div class="product-image"><span class="badge">${p.badge}</span><div class="product-art">${p.art}</div></div>
      <div class="product-body">
        <div class="product-category">${p.category.toUpperCase()}</div>
        <h3>${p.name}</h3>
        <div class="rating">★ ${p.rating} / 5</div>
        <p>${p.description}</p>
        <div class="card-bottom"><span class="price">${p.price}</span>
          <a class="view-btn" href="${href}" ${active?'target="_blank" rel="sponsored nofollow noopener"':''} onclick="${active?'':'return productNotice(event)'}">${active?'Check price →':'Add affiliate link →'}</a>
        </div>
      </div>
    </article>`;
  }).join('');
  empty.hidden=list.length>0;
}

function productNotice(e){
  e.preventDefault();
  alert('Add the real affiliate URL for this product in js/products.js.');
  return false;
}

search.addEventListener('input',render);
filter.addEventListener('change',render);

document.querySelectorAll('.category').forEach(a=>a.addEventListener('click',()=>{
  filter.value=a.dataset.filter;
  render();
}));

const menuBtn=document.getElementById('menuBtn');
const mobileNav=document.getElementById('mobileNav');
menuBtn.addEventListener('click',()=>{
  const open=mobileNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',open?'true':'false');
});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  mobileNav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
}));

render();