const filterHamburger = document.querySelector('.filter-hamburger');
const filterProducts = document.querySelector('.filter-products');

filterHamburger.addEventListener('click', () => {
	console.log("object");
	filterProducts.classList.toggle('active');
});
