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

populateListCategorias()
