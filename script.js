const cartIcon = document.getElementById('cart-icon');

let cartCount = 0;

function abc(){
    cartCount++;
    updateCart(cartCount);
}
function updateCart(count) {
    cartCount = count;
    cartIcon.innerHTML = `<circle cx="12" cy="12" r="8" fill="red" stroke="black" />
                          <text x="8" y="16" font-size="15" fill="white">${cartCount}</text>`;
}