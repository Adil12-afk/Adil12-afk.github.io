const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const DataFile = './products.json';

app.use(bodyParser.json());

let products = [];

fs.readFile(DataFile, (err, data) => {
    if (!err) {
        products = JSON.parse(data);
        console.log("Data loaded");
        
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } else {
        console.log("Error");
    }
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    
    if (product) {
        res.json(product);
    } else {
        res.status(404).send("Product not found");
    }
});

app.post('/products', (req, res) => {
    const newProduct = req.body;

    newProduct.id = products.length + 1; 

    products.push(newProduct);

    fs.writeFile(DataFile, JSON.stringify(products, null, 2), (err) => {
        if (!err) {
            res.send("Product saved successfully");
        } else {
            res.status(500).send("Error");
        }
    });
});