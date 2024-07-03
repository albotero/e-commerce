import { PRODUCTS } from "./products.js"

const listCategoriasDiv = document.querySelector(".list-categorias")
const productosDiv = document.querySelector("main.productos")

const populateListCategorias = () => {
  listCategoriasDiv.innerHTML = Object.entries(
    PRODUCTS.reduce((acc, { category }) => ({ ...acc, [category]: acc[category] + 1 || 1 }), {})
  )
    .map(([name, count]) => `<div>${name} <span class="count">(${count})</span></div>`)
    .join("")
}

const populateProductos = () => {
  productosDiv.innerHTML = PRODUCTS.map(
    ({ id, title, price, img }) => `
      <div class="product-card">
        <img src="./assets/img/${img}" alt="${title}" class="product-image" />
        <p class="product-title">${title}</p>
        <p class="product-price">COP$ ${price.toLocaleString()}</p>
        <button class="product-buy" onclick="alert('COMPRADO:\\n${title}')" value="${id}">Comprar</button>
      </div>`
  ).join("")
}

document.addEventListener("DOMContentLoaded", () => {
  populateListCategorias()
  populateProductos()
})
