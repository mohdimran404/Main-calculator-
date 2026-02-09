// calculator.js

// Calculator Logic
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

// Double Tap Detection
let lastTapTime = 0;
function doubleTap(callback) {
    const currentTime = Date.now();
    if (currentTime - lastTapTime <= 300) {
        callback();
    }
    lastTapTime = currentTime;
}

// PIN Validation
let correctPIN = '1234';
function validatePIN(inputPIN) {
    return inputPIN === correctPIN;
}

// Lockout Timer
let isLockedOut = false;
let lockoutTimer;
function startLockout() {
    isLockedOut = true;
    lockoutTimer = setTimeout(() => {
        isLockedOut = false;
    }, 30000); // 30 seconds lockout
}

// Vault Functions
let vault = {};

function storeInVault(key, value) {
    if (isLockedOut) {
        throw new Error('Vault is locked out');
    }
    vault[key] = value;
}

function retrieveFromVault(key) {
    if (isLockedOut) {
        throw new Error('Vault is locked out');
    }
    return vault[key];
}

// Example usage:
// doubleTap(() => console.log('Double tapped!'));
// if (validatePIN(userInput)) { /* access granted */ }
// startLockout();