// Step 1: Define the function
function calculateTotalPrice(prices) {
    // Step 2: Calculate the total sum of the prices
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    // Step 3: Return the total
    return total;
}

// Example usage:
const cartPrices = [29.99, 49.99, 9.99, 4.99];
console.log(calculateTotalPrice(cartPrices));  // Output: 94.96
