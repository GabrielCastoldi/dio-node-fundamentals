const { getFullName, productType} = require("./services/products");
const products = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {
    console.log("carrinho de compras:");

    getFullName("1", "teclado");
    products.getFullName("1", "teclado");

    // products.getFullName("408", "mousepad");
    // products.getFullName("508", "mouse");
    // products.getProductLabel("mousepad");

    database.connectToDatabase("my-data");
}

main();