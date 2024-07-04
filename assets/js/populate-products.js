import { PRODUCTS } from "./products.js"

const listCategoriasDiv = document.querySelector(".list-categorias")
const productosDiv = document.querySelector("main.productos")

const populateListCategorias = () => {
  listCategoriasDiv.innerHTML = Object.entries(
    PRODUCTS.reduce(
      (acc, { category }) => ({
        ...acc,
        [category]: acc[category] + 1 || 1,
        total: acc.total + 1,
      }),
      { total: 0 }
    )
  )
    .map(([name, count]) => {
      const category = name !== "total" && name
      return `<button class="list-categorias-item" value="${category || ""}">
          ${category || "Todos los productos"} <span class="count">(${count})</span>
        </button>`
    })
    .join("")
}

const populateProductos = (filter = "") => {
  productosDiv.innerHTML = PRODUCTS.filter(({ category }) => !filter || category === filter)
    .map(
      ({ id, title, price, img }) => `
      <div class="product-card">
        <img src="./assets/img/${img}" alt="${title}" class="product-image" />
        <p class="product-title">${title}</p>
        <p class="product-price">COP$ ${price.toLocaleString()}</p>
        <button class="product-buy" value="${id}">Comprar</button>
      </div>`
    )
    .join("")
  // Reset classes to remove selected class
  document.querySelectorAll(".list-categorias-item").forEach((el) => {
    el.className = "list-categorias-item"
    // Set the new selected category
    if (el.value === filter) el.classList.add("selected")
  })
}

const buyProduct = (productId) => {
  const { title, price } = PRODUCTS.find(({ id }) => id.toString() === productId)
  alert(`COMPRADO:\n${title}\nPrecio: COP$ ${price.toLocaleString()}`)
}

document.addEventListener("DOMContentLoaded", () => {
  populateListCategorias()
  populateProductos()
})

document.addEventListener("click", (e) => {
  // Filter categories
  if (e.target.className === "list-categorias-item") return populateProductos(e.target.value)
  // If user clicked on the count span, filter with parent value (button)
  if (e.target.parentNode.className === "list-categorias-item") return populateProductos(e.target.parentNode.value)
  // Buy button clicked
  if (e.target.className === "product-buy") return buyProduct(e.target.value)
})
