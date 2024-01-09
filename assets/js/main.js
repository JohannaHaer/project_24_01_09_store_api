const allProducts = "https://fakestoreapi.com/products"
const allElectronics = "https://fakestoreapi.com/products/category/electronics"
const allJewelery = "https://fakestoreapi.com/products/category/jewelery"
const allMensClothing = "https://fakestoreapi.com/products/category/men's%20clothing"
const allWomenClothing = "https://fakestoreapi.com/products/category/women's%20clothing"

const gridContainer = document.querySelector("#gridContainer")
let select = document.querySelector("#sort")

const storeAssortment = (products) => {
    fetch(products)
    .then ((response) => response.json())
    .then ((data) =>{ 
    
        data.forEach((dataNew) => {
            const title = dataNew.title
            const img = dataNew.image
            const price = dataNew.price

        gridContainer.innerHTML += `
            <div class="card">
                <div class="imgContainer"><img src="${img}"></div>
                <div class="desciptionContainer">
                    <h2>${title}</h2>
                    <hr>
                    <div class="priceAndBtn"> 
                    <p>$ ${price}</p>
                    <button class="btnCart">Add to cart</button>
                    </div>
                </div>
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

document.querySelector("#electronics").addEventListener("click", electronicalProducts)

// Alle Jeweleries ausgeben
let jeweleryProducts = () => {
    reset()
    storeAssortment(allJewelery)
}

document.querySelector("#jewelery").addEventListener("click", jeweleryProducts)

// Alle Men's Clothings ausgeben
let mensClothingProducts = () => {
    reset()
    storeAssortment(allMensClothing)
}

document.querySelector("#mensClothing").addEventListener("click", mensClothingProducts)

// Alle Women's Clothings ausgeben
let womensClothingProducts = () => {
    reset()
    storeAssortment(allWomenClothing)
}

document.querySelector("#womensClothing").addEventListener("click", womensClothingProducts)



fetch("https://fakestoreapi.com/products")
    .then ((response) => response.json())
    .then ((data) => { 
        let products = data
        

        let sortFunc = () => {
            
            if (select.value === 'priceAsc') {
                let result = products.sort((a, b) => a.price - b.price)
                reset()
                result.forEach((dataNew) => {
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
            } else if (select.value === 'priceDesc') {
                let result = products.sort((a, b) => b.price - a.price)
                reset()
                result.forEach((dataNew) => {
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
            }
        }
    

        select.addEventListener("change", function() {
            sortFunc()
        })


        let search = () => {
            let input = document.querySelector("#input")
            input.addEventListener("input", () => {
                inputValue = input.value
            let result = products.filter((product) => product.title.toLowerCase().includes(inputValue.toLowerCase()))
            reset()
            result.forEach((dataNew) => {
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
        }    
        search()
})