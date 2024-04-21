function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    let totalPrice = 0;

    cartItems.innerHTML = '';

    cart.forEach(item => {
        const row = document.createElement('tr');

        const productImageCell = document.createElement('td');
        const image = document.createElement('img');
        console.log(item);
        image.src = item.image;
        image.width = 100;
        productImageCell.appendChild(image);

        const productNameCell = document.createElement('td');
        productNameCell.textContent = item.name;

        const priceCell = document.createElement('td');
        priceCell.textContent = `${item.price.toFixed(2)}$`;

        const actionCell = document.createElement('td');
        const removeButton = document.createElement('button');
        
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            removeFromCart(item.id);
            displayCart();
        });

        actionCell.appendChild(removeButton);
        
        row.appendChild(productImageCell);
        row.appendChild(productNameCell);
        row.appendChild(priceCell);
        row.appendChild(actionCell);

        cartItems.appendChild(row);

        totalPrice += item.price;
    });

    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <td colspan="3" style="text-align: right"><strong>Total:</strong></td>
        <td>$${totalPrice.toFixed(2)}</td>
    `;
    cartItems.appendChild(totalRow);
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

window.onload = displayCart;
