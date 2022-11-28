import express from 'express'
import { products } from './movies/productsHM.js';
import cors from "cors";
import { v4 } from "uuid"


const app = express();
app.use(cors())

app.use(express.json())

app.get('/products', (req, res) => {
    res.json(products)
})


app.post('/products', (req, res) => {
    
    const product = req.body
    product.id = v4()
    products.push(product)
    res.json({
        message: "Product Added!"
    })
})


app.put('/products', (req, res) => {

    const product = req.body

     
    const index = products.findIndex(m => m.id === product.id)
   
    products[index] = product

    res.json({
        message: "Product updated successfully"
    })

})

app.delete('/products', (req, res) => {
   
    const product = req.body  
    const index = products.findIndex(m => m.id === product.id)

    products.splice(index, 1)


    res.json({
        message: "Product deleted successfully"
    })

})


app.listen(3000);
