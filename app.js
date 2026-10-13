const grid = document.getElementById("product-grid");
const filters = document.querySelectorAll(".filter");
document.getElementById("year").textContent = new Date().getFullYear();
function renderProducts(category="todos"){
  grid.innerHTML = "";
  products.filter(p => category==="todos" || p.category===category).forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";
    const visual = document.createElement("div"); visual.className="product-visual";
    const tag = document.createElement("span"); tag.className="product-tag"; tag.textContent=p.tag; visual.appendChild(tag);
    const icon = document.createElement("span"); icon.textContent=p.icon; icon.setAttribute("aria-hidden","true"); visual.appendChild(icon);
    const title = document.createElement("h3"); title.textContent=p.title;
    const desc = document.createElement("p"); desc.textContent=p.description;
    const bottom = document.createElement("div"); bottom.className="product-bottom";
    const note = document.createElement("small"); note.textContent="Enlace de afiliado*";
    const link = document.createElement("a"); link.className="buy-link"; link.href=p.affiliateUrl; link.target="_blank"; link.rel="sponsored nofollow noopener"; link.textContent="Ver en Amazon ↗"; link.setAttribute("aria-label",`Ver ${p.title} en Amazon`);
    bottom.append(note,link); card.append(visual,title,desc,bottom); grid.appendChild(card);
  });
}
filters.forEach(button => button.addEventListener("click",()=>{
  filters.forEach(b=>b.classList.toggle("active",b===button));
  renderProducts(button.dataset.filter);
}));
document.querySelectorAll("[data-filter]").forEach(link=>{
  if(link.classList.contains("filter")) return;
  link.addEventListener("click",()=>{const f=link.dataset.filter;filters.forEach(b=>b.classList.toggle("active",b.dataset.filter===f));renderProducts(f);});
});
renderProducts();