const allProducts = "https://fakestoreapi.com/products"
const allElectronics = "https://fakestoreapi.com/products/category/electronics"
const allJewelery = "https://fakestoreapi.com/products/category/jewelery"
// const allMensClothing "https://fakestoreapi.com/products/category/men's clothing"
// const allWomenClothing = "https://fakestoreapi.com/products/category/electronics"
// console.log(allProducts);
// console.log(allElectronics);

const gridContainer = document.querySelector("#gridContainer")

const 


const storeAssortment = (products) => {
    fetch(products)
    .then ((response) => response.json())
    // .then(json=>console.log(json))
    .then ((data) =>{ 
    
        data.forEach((dataNew) => {
            const title = dataNew.title
            const img = dataNew.image
            const price = dataNew.price

        gridContainer.innerHTML += `
            <div class="card">
                <img src="${img}">
                <h2>${title}</h2> 
                <p>$ ${price}</p>
            </div>`

        })
    })
    .catch((error) => gridContainer.innerHTML = `No Result found`)
}

storeAssortment(allProducts)

let reset = () => {
    gridContainer.innerHTML = ""
}

// Alle elektronisches Produkte ausgeben
let electronicalProducts = () => {
    reset()
    storeAssortment(allElectronics)
}

document.querySelector("#electronics").addEventListener("click", function() {
    electronicalProducts()
})

// Alle Juweleries ausgeben
let jeweleryProducts = () => {
    reset()
    storeAssortment(allJewelery)
}

document.querySelector("#jewelery").addEventListener("click", function() {
    jeweleryProducts()
})






