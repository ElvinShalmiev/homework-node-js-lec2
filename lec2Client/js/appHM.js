import { endpoints } from './urlsHM.js'

const productsUL = document.getElementById('products-list');
const btnSave = document.getElementById('save-product');
const inputItem = document.getElementById('input-product');

//fetch("http://localhost:3000/products")

btnSave.addEventListener('click', () => {
    const title = inputItem.value
    const product = { title }
    fetch(endpoints.products, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(json => {

            productsUL.innerHTML = ''
            fetchProducts()
        }).catch(e => {
            alert(e)
        })
})

const fetchProducts = () => {
    fetch(endpoints.products, { method: "GET" })
        .then(res => res.json())

        .then(products => {
            products.forEach(m => {
                const li = document.createElement('li')


                li.id = m.id
                li.classList.add('list-group-item')
                li.innerText = m.title
                productsUL.appendChild(li)

            })



        }).catch(e => {
            alert("Error" + e)
        })
}



fetchProducts();

//delete

/* const fetchProducts2 = () => {
    fetch(endpoints.products, { method: "DELETE" })
        .then(res => res.json())

        .then(products => {
            products.forEach(m => {
               

                let btnDelete = document.createElement("button");
                btnDelete.id = m.id
                btnDelete.classList.add("btn","btn-danger")
                
                btnDelete.innerHTML = "Delete"
                productsUL.appendChild(btnDelete)

                


                

            })



        }).catch(e => {
            alert("Error" + e)
        })
}

fetchProducts2() */