const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.querySelector("#ingredients");

const ingredientsEl = [];
for (const ingr of ingredients) {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingr;
  ingredientItem.classList.add("item");
  ingredientsEl.push(ingredientItem);
}
ingredientList.append(...ingredientsEl);
