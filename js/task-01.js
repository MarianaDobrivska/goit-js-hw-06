const refs = {
  categoriesEl: document.querySelector("#categories"),
  itemsEl: document.querySelectorAll(".item"),
};

function getCategoriesNumber() {
  const categoriesQuantity = refs.itemsEl.length;
  console.log(`Number of categories: ${categoriesQuantity}`);
}

function getCategoriesMeta() {
  const categoryMeta = refs.itemsEl.forEach(function (item) {
    const header = item.querySelector(".item > h2").textContent;
    const quantity = item.querySelectorAll(".item > ul >li").length;

    console.log(`Category: ${header}`);
    console.log(`Elements: ${quantity}`);
  });
  return categoryMeta;
}

getCategoriesNumber();
getCategoriesMeta();
