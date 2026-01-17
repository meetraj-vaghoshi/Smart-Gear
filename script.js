// // Function to reset fields
// function resetFields() {
//     document.querySelector('#bill-name').innerHTML = '';
//     document.querySelector('#bill-phone').innerHTML = '';
//     document.querySelector('#bill-name input').value = '';
//     document.querySelector('#bill-phone input').value = '';

//     // Hide the name input box after a delay
//     const nameInput = document.querySelector('#bill-name input');
//     nameInput.style.display = 'none'; // Hide input box
// }

// // Finalize purchase
// function finalizePurchase() {
//     if (cart.length === 0) {
//         alert('Cart is empty! Add some items before proceeding.');
//         return;
//     }

//     // Prompt for payment method
//     const paymentMethod = prompt("Choose payment method: Cash or UPI").toLowerCase();

//     if (paymentMethod === "cash") {
//         // Handle cash payment
//         const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//         purchaseHistory.push({ id: purchaseHistory.length + 1, products: [...cart], amount: totalAmount });
//         cart = []; // Clear the cart
//         displayCart();
//         alert('Purchase successful! Payment received in cash.');
//         // Reset name and phone number fields
//         resetFields();
//     } else if (paymentMethod === "upi") {
//         // Handle UPI payment
//         const upiId = prompt("Enter your UPI ID:");
//         if (upiId) {
//             const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//             purchaseHistory.push({ id: purchaseHistory.length + 1, products: [...cart], amount: totalAmount });
//             cart = []; // Clear the cart
//             displayCart();
//             alert('Purchase successful! Please pay using the UPI ID: ' + upiId);

//             // Reset name and phone number fields
//             resetFields();
//         } else {
//             alert('UPI ID is required for UPI payment.');
//         }
//     } else {
//         alert('Invalid payment method. Please choose either Cash or UPI.');
//     }
// }

// // Cancel purchase
// function cancelPurchase() {
//     if (cart.length === 0) {
//         alert('Cart is empty! Nothing to cancel.');
//         return;
//     }
//     canceledHistory.push({ id: canceledHistory.length + 1, products: [...cart] });
//     cart = []; // Clear the cart
//     displayCart();
//     alert('Purchase canceled.');
//     // Reset name and phone number fields
//     resetFields();
// }
// Initialize cart and purchase history
let cart = []; // Example initialization, replace with your actual cart logic
let purchaseHistory = [];
let canceledHistory = [];

// Function to format the customer's name
function formatCustomerName() {
    const input = document.querySelector('#customer-name');
    const nameSpan = document.getElementById('bill-name');

    // Capitalize and bold the name
    const capitalizedName = input.value.toUpperCase();
    nameSpan.innerHTML = `<strong>${capitalizedName}</strong>`;
}
// Function to format the customer's phone number
function formatCustomerPhone() {
    const input = document.querySelector('#customer-phone');
    const phoneSpan = document.getElementById('bill-phone');

    // Display the phone number (you can format it as needed)
    const phoneNumber = input.value; // You can add formatting logic here if needed
    phoneSpan.innerHTML = phoneNumber; // Display the phone number
}

// Function to reset fields
function resetFields() {
    document.querySelector('#bill-name').innerHTML = '';
    document.querySelector('#bill-phone').innerHTML = '';
    document.querySelector('#customer-name').value = ''; // Reset name input
    document.querySelector('#customer-phone').value = ''; // Reset phone input
}

// Finalize purchase
function finalizePurchase() {
    if (cart.length === 0) {
        alert('Cart is empty! Add some items before proceeding.');
        return;
    }

    // Prompt for payment method
    const paymentMethod = prompt("Choose payment method: Cash or UPI").toLowerCase();

    if (paymentMethod === "cash") {
        // Handle cash payment
        const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        purchaseHistory.push({ id: purchaseHistory.length + 1, products: [...cart], amount: totalAmount });
        cart = []; // Clear the cart
        displayCart(); // Ensure this function is defined elsewhere
        alert('Purchase successful! Payment received in cash.');
        // Reset name and phone number fields
        resetFields();
    } else if (paymentMethod === "upi") {
        // Handle UPI payment
        const upiId = prompt("Enter your UPI ID:");
        if (upiId) {
            const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            purchaseHistory.push({ id: purchaseHistory.length + 1, products: [...cart], amount: totalAmount });
            cart = []; // Clear the cart
            displayCart(); // Ensure this function is defined elsewhere
            alert('Purchase successful! Please pay using the UPI ID: ' + upiId);
            // Reset name and phone number fields
            resetFields();
        } else {
            alert('UPI ID is required for UPI payment.');
        }
    } else {
        alert('Invalid payment method. Please choose either Cash or UPI.');
    }
}

// Cancel purchase
function cancelPurchase() {
    if (cart.length === 0) {
        alert('Cart is empty! Nothing to cancel.');
        return;
    }
    canceledHistory.push({ id: canceledHistory.length + 1, products: [...cart] });
    cart = []; // Clear the cart
    displayCart(); // Ensure this function is defined elsewhere
    alert('Purchase canceled.');
    // Reset name and phone number fields
    resetFields();
}
// Carousel functionality for Product images
let currentSlideIndex = 0;

function showSlide(carouselId, direction) {
    const carousel = document.querySelector(`#${carouselId} .carousel-images`);
    const totalSlides = carousel.children.length;

    if (direction === "next") {
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    } else {
        currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    }

    const offset = -currentSlideIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Initialize carousel and add event listeners
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.product-carousel');

    carousels.forEach(carousel => {
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');

        prevBtn.addEventListener('click', () => showSlide(carousel.id, 'prev'));
        nextBtn.addEventListener('click', () => showSlide(carousel.id, 'next'));
    });
});

// let cart = [];
// let purchaseHistory = [];
// let canceledHistory = [];

// Add product to cart
function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if already in cart
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    displayCart();
}

// Display cart contents
function displayCart() {
    const billProducts = document.getElementById('bill-products');
    const billAmount = document.getElementById('bill-amount');
    billProducts.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        billProducts.innerHTML += `${item.name} - ₹${item.price} x ${item.quantity}<br>`;
    });
    billAmount.innerHTML = total.toFixed(2); // Display total amount
}


// Carousel functionality for Product images
let currentSlideIndex1 = 0;

function showSlide(carouselId, direction) {
    const carousel = document.querySelector(`#${carouselId} .carousel-images`);
    const totalSlides = carousel.children.length;

    if (direction === "next") {
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    } else {
        currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    }

    const offset = -currentSlideIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Initialize carousel and add event listeners
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.product-carousel');

    carousels.forEach(carousel => {
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');

        prevBtn.addEventListener('click', () => showSlide(carousel.id, 'prev'));
        nextBtn.addEventListener('click', () => showSlide(carousel.id, 'next'));
    });
});
