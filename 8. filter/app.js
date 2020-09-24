//List of products
const products = [
	{
		name: "Cake",
		category: "cakes",
		img: "cake-1.jpeg",
		price: 5,
	},
	{
		name: "Cake",
		category: "cakes",
		img: "cake-2.jpeg",
		price: 10,
	},
	{
		name: "Cake",
		category: "cakes",
		img: "cake-3.jpeg",
		price: 15,
	},
	{
		name: "Cupcake",
		category: "cupcakes",
		img: "cupcake-1.jpeg",
		price: 5,
	},
	{
		name: "Cupcake",
		img: "cupcake-2.jpeg",
		category: "cupcakes",
		price: 10,
	},
	{
		name: "Cupcake",
		category: "cupcakes",
		img: "cupcake-3.jpeg",
		price: 15,
		category: "cupcakes"
	},
	{
		name: "Sweets",
		category: "sweets",
		img: "sweets-1.jpeg",
		price: 5,
	},
	{
		name: "Sweets",
		category: "sweets",
		img: "sweets-2.jpeg",
		price: 10,
	},
	{
		name: "Sweets",
		category: "sweets",
		img: "sweets-3.jpeg",
		price: 15,
	},
]
const productList = document.querySelector('#productList');

const displayProducts = (product) => {
	const htmlString = product
		.map((product) => {
			return `
				<div class="item ${product.category}">
					<div class="image">
						<img src="./img/${product.img}"></img>
					</div>
					<div class="bottom">
						<h2>${product.name}</h2>
						<h2>$${product.price}</h2>
					</div>
				</div>
        `;
		})
		.join('');
	productList.innerHTML = htmlString;
	activateFilter();
};

//Function to activate button filter
function activateFilter() {
	const buttons = document.querySelectorAll('button');
	const storeItems = document.querySelectorAll('.item');

	buttons.forEach((button) => {
		button.addEventListener('click', (e) => {
			e.preventDefault()
			const filter = e.target.dataset.filter;

			storeItems.forEach((item) => {
				if (filter === 'all') {
					item.style.display = 'block'
				} else {
					if (item.classList.contains(filter)) {
						item.style.display = 'block'
					} else {
						item.style.display = 'none'
					}
				}
			})
		})
	})
};


//Search Box
const searchBox = document.querySelector('#search');

searchBox.addEventListener('keyup', (e) => {
	const searchString = e.target.value.toLowerCase();

	const filteredProducts = products.filter((product) => {
		return (
			product.name.toLowerCase().includes(searchString)
		)
	});
	displayProducts(filteredProducts);
});

displayProducts(products);