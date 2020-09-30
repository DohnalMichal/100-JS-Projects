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

	//Array of image sources
	let imageList = [];
	imageCounter = 0;
	storeItems.forEach(function (image) {
		imageList.push(image.src);
	})

	//Sets imageCounter to currently clicked image
	for (let i = 0; i < storeItems.length; i++) {
		storeItems[i].addEventListener("click", function (e) {
			let image = e.target.src;
			imageCounter = imageList.indexOf(image);
		})
	}

	//Displays modal
	for (let i = 0; i < storeItems.length; i++) {
		storeItems[i].addEventListener('click', (e) => {
			let source = e.target.src;
			modal.style.display = "flex";
			modalImage.src = source;
		})
	}

	//Arrows
	const back = document.querySelector('.back-arrow');
	const forward = document.querySelector('.forward-arrow');

	//Back arrow
	back.addEventListener("click", function () {
		imageCounter--;
		if (imageCounter < 0) {
			imageCounter = storeItems.length - 1;
		}
		modalImage.src = storeItems[imageCounter].src;
	})

	//Forward button
	forward.addEventListener("click", function () {
		imageCounter++;
		if (imageCounter >= storeItems.length) {
			imageCounter = 0;
		}
		modalImage.src = storeItems[imageCounter].src;
	});

	// Closes modal on click outside
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
}
