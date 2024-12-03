// JavaScript for adding products to cart
let cart = [];

function addToCart(productName, price) {
    cart.push({name: productName, price: price});
    alert(productName + ' has been added to the cart!');
    console.log(cart);
}

// Add event listeners to the 'Add to Cart' buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('p').innerText;
        const price = parseFloat(product.querySelectorAll('p')[1].innerText.replace('$', ''));
        addToCart(productName, price);
    });
});
