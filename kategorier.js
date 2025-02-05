const listContainer = document.querySelector(".grid_1-1");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then(showCategori); //?limit=6

function showCategori(data) {
  console.log(), data;

  markup = data
    .map(
      (element) =>
        `<article  class="punkter">
    <div class="grid_1-1">

            <ul>
            <a href="produktliste.html?category=${element.category}">${element.category}</a>

            </ul>
    </div>
    </article>`
    )
    .join("");

  document.querySelector("ul").innerHTML = markup;
}
