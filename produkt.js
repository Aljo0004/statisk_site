let productContainer = document.querySelector(".produkt_container");
const productId = new URLSearchParams(window.location.search).get("id");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((product) => {
    productContainer.innerHTML = `
                <div class="produkt_container">
        <article class="produktside">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="15699">
             <div class="${product.discount && "rabat"} ${!product.discount && "hide"}">-${product.discount}$</div>
            <div class="produkt_info">
                <h2>${product.productdisplayname}</h2>
                <div>
                    <h3>Farve:</h3>
                    <p>${product.colour1}${product.colour2}</p>
                </div>
                <div>
                 <h3>Inventar Nummer:</h3>
                    <p>${product.relid}</p>
                </div>
                <h3>Mærke</h3>
                <p>${product.brandname}</p>
                <p class"${product.soldout && "udsolgt"} ${!product.soldout && "hide"}">Sold Out</p>

            </div>
            <div class="summer25">
                <h2 class="description">${product.styledesc}</h2>

                <h3 class="knap">Tilføj til Kurv</h3>
            </div>
        </article>
    </div>`;
  });
