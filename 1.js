// Step 1: Define the list of users
const users = [
    'alice',
    'bob',
    'charlie',
    'dave',
    'eve'
];

// Step 2: Create the function
function isUserPresent(username) {
    // Step 3: Check if the username is in the list
    return users.includes(username);
}

// Example usage:
console.log(isUserPresent('alice'));  // Output: true
console.log(isUserPresent('mallory')); // Output: false
