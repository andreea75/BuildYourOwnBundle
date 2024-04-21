document.addEventListener("DOMContentLoaded", function() {
    const addToCartProduct = document.querySelectorAll('.product');

    let totalItems = 0;

    addToCartProduct.forEach(button => {
        button.addEventListener('click', function() {
            const productId = button.getAttribute('data-product-id');
            
            addToCart(productId);
            totalItems++;
            document.getElementById('total').textContent = totalItems;
        });
    });

    function addToCart(productId) {
        const productElement = document.querySelector(`.product[data-product-id="${productId}"]`);
        const productImage = productElement.getAttribute('data-product-image');
        const productName = productElement.getAttribute('data-product-name');
        const productPrice = parseFloat(productElement.getAttribute('data-product-price'));
    
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ id: productId, image: productImage, name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart);
    }
    
});