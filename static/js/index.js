// Burger + burger-menu
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('offscreen-menu').classList.toggle('active');
});