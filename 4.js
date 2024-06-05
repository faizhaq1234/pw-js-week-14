// Step 1: Define the array of products
const products = [
    { name: 'Laptop', price: 120000 },
    { name: 'Smartphone', price: 70000 },
    { name: 'Tablet', price: 20000 },
    { name: 'Headphones', price: 20000 },
    { name: 'Smartwatch', price: 15000 }
];

// Step 2: Create the function
function findMinMaxProducts(products) {
    // Ensure there is at least one product
    if (products.length === 0) {
        console.log('No products available');
        return;
    }

    // Initialize min and max products
    let minProduct = products[0];
    let maxProduct = products[0];

    // Step 3: Find the min and max priced products
    for (let product of products) {
        if (product.price < minProduct.price) {
            minProduct = product;
        }
        if (product.price > maxProduct.price) {
            maxProduct = product;
        }
    }

    // Print the results
    console.log(`Product with the highest price: ${maxProduct.name} ($${maxProduct.price})`);
    console.log(`Product with the lowest price: ${minProduct.name} ($${minProduct.price})`);
}

// Example usage:
findMinMaxProducts(products);
