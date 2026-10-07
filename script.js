function showMenu() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}

function orderNow() {
    alert("🍴 Welcome to Bala Ji Restaurant!\n\nYour order section will open soon.");
}

function bookTable() {
    alert("📅 Table Booking\n\nThank you! Please contact Bala Ji Restaurant for booking.");
}

function addToCart(food) {
    alert("✅ " + food + " added to your order!");
}