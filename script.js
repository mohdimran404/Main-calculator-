// Complete Calculator with PIN and Vault Logic

// Function to perform basic operations
function calculate(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b !== 0) return a / b;
            else throw new Error('Division by zero!');
        default:
            throw new Error('Unknown operation!');
    }
}

// PIN authentication logic
const correctPIN = '1234';
let attempts = 0;
const maxAttempts = 3;

function authenticate(inputPIN) {
    if (attempts >= maxAttempts) {
        return 'Max attempts exceeded. Access denied.';
    }
    if (inputPIN === correctPIN) {
        return 'Access granted.';
    } else {
        attempts++;
        return 'Incorrect PIN. Try again.';
    }
}

// Vault logic
let vault = [];

function addToVault(item) {
    vault.push(item);
    return 'Item added to vault.';
}

function retrieveFromVault(index) {
    if (index >= 0 && index < vault.length) {
        return vault[index];
    } else {
        throw new Error('Invalid index.');
    }
}