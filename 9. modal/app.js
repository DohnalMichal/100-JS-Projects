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
						<img src="./img/${product.img}" alt="${product.name}"></img>
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
modal();

//Modal
function modal() {
	const storeItems = document.querySelectorAll('.item img');
	const modal = document.querySelector('.modal');
	const modalImage = document.querySelector('.modal-img img');
	// console.log(storeItems);

	// storeItems[0].addEventListener("click", (e) => {
	// 	const event = e.target;
	// 	console.log(event);
	// })

	for (let i = 0; i < storeItems.length; i++) {
		// console.log(storeItems[i].src);
		storeItems[i].addEventListener('click', (e) => {
			// console.log(storeItems[i].src);
			let source = e.target.src;
			// let source = storeItems[i].src;
			modal.style.display = "flex";
			modalImage.src = source;
			console.log(source);

			//Arrows
			const back = document.querySelector('.back-arrow');
			const forward = document.querySelector('.forward-arrow');
			// const img = document.querySelector('img');

			let clicks = 0;
			// console.log(storeItems);
			// clicks = storeItems.indexOf(e.ta);

			back.addEventListener("click", function () {
				clicks--;
				// console.log(clicks);
				if (clicks < storeItems.length) {
					clicks = storeItems.length - 1;
				}
				modalImage.src = storeItems[clicks].src;
			})

			forward.addEventListener("click", function () {
				clicks++;
				if (clicks >= storeItems.length) {
					clicks = 0;
				}
				modalImage.src = storeItems[clicks].src;
			});

			//Closes modal on click outside
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
			//Closes modal on ESC
			document.addEventListener("keydown", function (event) {
				var key = event.key;
				if (key === 'Escape' || key === 'Esc' || key === 27) {
					modal.style.display = "none";
				}
			})
		})
	}
}
