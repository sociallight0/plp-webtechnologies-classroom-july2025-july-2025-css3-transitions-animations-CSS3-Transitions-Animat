/* ========================================
   PART 2: JAVASCRIPT FUNCTIONS
   Demonstrating Scope, Parameters & Return Values
   ======================================== */

// ===== GLOBAL SCOPE VARIABLES =====
// These variables are accessible throughout the entire script
let globalCounter = 0;
const appName = "Dynamic Web Experience";

/**
 * PART 2.1: Calculator Functions with Parameters and Return Values
 * These functions demonstrate how to accept parameters and return calculated values
 */

// Addition function - takes two parameters and returns their sum
function add(a, b) {
    return a + b;
}

// Subtraction function - returns the difference
function subtract(a, b) {
    return a - b;
}

// Multiplication function - returns the product
function multiply(a, b) {
    return a * b;
}

// Division function - includes error handling for division by zero
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

// Power function - demonstrates Math object usage
function power(base, exponent) {
    return Math.pow(base, exponent);
}

/**
 * Master calculator function that delegates to specific operations
 * Demonstrates function composition and parameter passing
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @param {string} operation - Operation to perform
 * @returns {number|string} Result of the calculation
 */
function calculate(num1, num2, operation) {
    // Convert string inputs to numbers
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    
    // Validate inputs
    if (isNaN(a) || isNaN(b)) {
        return "Error: Please enter valid numbers";
    }
    
    // Use switch statement to determine operation
    switch(operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        case 'power':
            return power(a, b);
        default:
            return "Error: Invalid operation";
    }
}

/**
 * PART 2.2: Scope Demonstration Functions
 * These functions show the difference between local and global scope
 */

// Function demonstrating local scope
function demonstrateScope() {
    // LOCAL VARIABLE - only accessible inside this function
    let localCounter = 0;
    
    // Increment both counters
    localCounter++;
    globalCounter++;
    
    // Create a nested function to show scope chain
    function nestedScope() {
        let nestedVariable = "I'm nested!";
        // Can access both local and global variables
        return `Nested can see - Global: ${globalCounter}, Local: ${localCounter}, Nested: ${nestedVariable}`;
    }
    
    return {
        local: localCounter,
        global: globalCounter,
        nested: nestedScope()
    };
}

/**
 * PART 2.3: String Transformation Functions
 * Demonstrate various string manipulation with parameters and returns
 */

// Convert string to uppercase
function toUpperCase(str) {
    return str.toUpperCase();
}

// Convert string to lowercase
function toLowerCase(str) {
    return str.toLowerCase();
}

// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Count words in a string - demonstrates regex and array methods
function countWords(str) {
    if (!str.trim()) return 0;
    const words = str.trim().split(/\s+/);
    return `Word count: ${words.length}`;
}

/**
 * Master string transformation function
 * @param {string} text - Text to transform
 * @param {string} transform - Type of transformation
 * @returns {string} Transformed text
 */
function transformText(text, transform) {
    if (!text) {
        return "Please enter some text first!";
    }
    
    switch(transform) {
        case 'uppercase':
            return toUpperCase(text);
        case 'lowercase':
            return toLowerCase(text);
        case 'reverse':
            return reverseString(text);
        case 'count':
            return countWords(text);
        default:
            return text;
    }
}

/* ========================================
   PART 3: COMBINING CSS + JAVASCRIPT
   Using functions to trigger CSS animations
   ======================================== */

/**
 * PART 3.1: Card Flip Animation
 * Toggle CSS class to trigger 3D flip animation
 */
function toggleCardFlip() {
    const flipContainer = document.getElementById('flipCard');
    flipContainer.classList.toggle('flipped');
}

/**
 * PART 3.2: Modal Animation Functions
 * These functions add/remove classes to trigger CSS animations
 */

// Open modal with animation
function openModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.add('active');
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Close modal with animation
function closeModal() {
    const modal = document.getElementById('modalOverlay');
    modal.classList.remove('active');
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

/**
 * PART 3.3: Loading Animation Controller
 * Toggle loading state with CSS animations
 */

// State variable to track loading status
let isLoading = false;

function toggleLoading() {
    const loadingContainer = document.getElementById('loadingContainer');
    const toggleBtn = document.getElementById('toggleLoadingBtn');
    
    isLoading = !isLoading;
    
    if (isLoading) {
        loadingContainer.classList.add('active');
        toggleBtn.textContent = 'Stop Loading';
        toggleBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    } else {
        loadingContainer.classList.remove('active');
        toggleBtn.textContent = 'Start Loading';
        toggleBtn.style.background = 'linear-gradient(135deg, #ec4899, #f59e0b)';
    }
}

/**
 * PART 3.4: Color Animation Trigger
 * Add animation class dynamically and remove it after completion
 */
function animateColors() {
    const colorBox = document.getElementById('colorBox');
    
    // Remove class if it exists (to restart animation)
    colorBox.classList.remove('animating');
    
    // Force reflow to restart animation
    void colorBox.offsetWidth;
    
    // Add animation class
    colorBox.classList.add('animating');
    
    // Remove class after animation completes (3 seconds)
    setTimeout(() => {
        colorBox.classList.remove('animating');
    }, 3000);
}

/**
 * PART 3.5: Particle Burst Effect
 * Create dynamic elements with CSS animations on click
 * @param {number} x - X coordinate of click
 * @param {number} y - Y coordinate of click
 */
function createParticleBurst(x, y) {
    const burstArea = document.getElementById('burstArea');
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'];
    
    // Create 12 particles
    for (let i = 0; i < 12; i++) {
        createParticle(x, y, colors, burstArea);
    }
}

/**
 * Helper function to create individual particle
 * Demonstrates function decomposition and reusability
 */
function createParticle(x, y, colors, container) {
    const particle = document.createElement('div');
    particle.className = 'burst-particle';
    
    // Random color from array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = randomColor;
    
    // Set initial position
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    // Random direction and distance
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 100;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    // Set CSS variables for animation
    particle.style.setProperty('--tx', `${tx}px`);
    particle.style.setProperty('--ty', `${ty}px`);
    
    container.appendChild(particle);
    
    // Remove particle after animation completes
    setTimeout(() => {
        particle.remove();
    }, 1000);
}

/**
 * PART 3.6: Display Result with Animation
 * Helper function to show results with CSS animation trigger
 * @param {string} elementId - ID of element to update
 * @param {string|number} result - Result to display
 */
function displayResult(elementId, result) {
    const element = document.getElementById(elementId);
    
    // Clear previous content
    element.textContent = '';
    
    // Force reflow
    void element.offsetWidth;
    
    // Set new content
    element.textContent = result;
    
    // Add animation class
    element.classList.add('fade-in');
    
    // Remove animation class after it completes
    setTimeout(() => {
        element.classList.remove('fade-in');
    }, 500);
}

/**
 * Update global counter display
 * Demonstrates DOM manipulation with scope awareness
 */
function updateGlobalCounter() {
    const counterElement = document.getElementById('globalCounter');
    counterElement.textContent = globalCounter;
    
    // Add pulse animation
    counterElement.style.animation = 'none';
    void counterElement.offsetWidth; // Trigger reflow
    counterElement.style.animation = 'pulse 0.5s ease-out';
}

/* ========================================
   EVENT LISTENERS & INITIALIZATION
   ======================================== */

// Wait for DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log(`${appName} initialized successfully!`);
    
    // === PART 2: Calculator Event Listeners ===
    const calculateBtn = document.getElementById('calculateBtn');
    calculateBtn.addEventListener('click', () => {
        const num1 = document.getElementById('num1').value;
        const num2 = document.getElementById('num2').value;
        const operation = document.getElementById('operation').value;
        
        // Call calculate function and display result
        const result = calculate(num1, num2, operation);
        displayResult('calcResult', `Result: ${result}`);
    });
    
    // === PART 2: Scope Demonstration ===
    const scopeBtn = document.getElementById('scopeBtn');
    scopeBtn.addEventListener('click', () => {
        const scopeData = demonstrateScope();
        const output = `
            <strong>Local Counter:</strong> ${scopeData.local}<br>
            <strong>Global Counter:</strong> ${scopeData.global}<br>
            <strong>Nested Function:</strong> ${scopeData.nested}
        `;
        document.getElementById('scopeOutput').innerHTML = output;
        updateGlobalCounter();
    });
    
    // === PART 2: String Transformation ===
    const transformButtons = document.querySelectorAll('[data-transform]');
    transformButtons.forEach(button => {
        button.addEventListener('click', () => {
            const text = document.getElementById('textInput').value;
            const transform = button.getAttribute('data-transform');
            
            // Call transform function and display result
            const result = transformText(text, transform);
            displayResult('textResult', result);
        });
    });
    
    // === PART 3: Card Flip ===
    const flipCard = document.getElementById('flipCard');
    flipCard.addEventListener('click', toggleCardFlip);
    
    // === PART 3: Modal Controls ===
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const closeModalBtn2 = document.getElementById('closeModalBtn2');
    const modalOverlay = document.getElementById('modalOverlay');
    
    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    closeModalBtn2.addEventListener('click', closeModal);
    
    // Close modal when clicking outside content
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
    
    // === PART 3: Loading Animation ===
    const toggleLoadingBtn = document.getElementById('toggleLoadingBtn');
    toggleLoadingBtn.addEventListener('click', toggleLoading);
    
    // === PART 3: Color Animation ===
    const animateColorBtn = document.getElementById('animateColorBtn');
    const colorBox = document.getElementById('colorBox');
    
    animateColorBtn.addEventListener('click', animateColors);
    colorBox.addEventListener('click', animateColors);
    
    // === PART 3: Particle Burst ===
    const burstArea = document.getElementById('burstArea');
    burstArea.addEventListener('click', (e) => {
        const rect = burstArea.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        createParticleBurst(x, y);
    });
    
    console.log('All event listeners attached!');
    console.log(`Global scope variable - appName: ${appName}`);
});

/* ========================================
   UTILITY FUNCTIONS
   Additional helper functions demonstrating best practices
   ======================================== */

/**
 * Debounce function - limits how often a function can run
 * Demonstrates higher-order functions and closures
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Generate random number within range
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random number
 */
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Format number with commas
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Log initialization complete
console.log('✨ All functions loaded and ready!');
console.log('📚 Function scope examples:');
console.log('   - Global variables: appName, globalCounter');
console.log('   - Local variables: Created within each function');
console.log('   - Parameters: Passed to functions for processing');
console.log('   - Return values: Results sent back from functions');
