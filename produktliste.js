const listContainer = document.querySelector(".produktliste_container");
const category = new URLSearchParams(window.location.search).get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `
     
      <article class="productz  ${product.soldout && "soldOut"}"> 

            <a class="produktliste_a" href="produkt.html?id=${product.id}">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="1165">
            </a>
            <div class="text1">
                <h2>${product.productdisplayname}</h2>
                <p>Pris: ${product.price}</p>
${product.soldout ? `<p class="soldOutText">Udsolgt</p>` : product.discount ? `<p class="onSale">${product.discount}%</p>` : ""}
           
                
            </div>
            </article>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
