// const button = document.querySelector('button');
// const cake = document.querySelector('.item .cake');
// const cupcake = document.querySelector('.item .cupcake');
// const sweets = document.querySelector('.item .sweets');


// button.addEventListener("click", function () {
// 	if (button.innerHTML === "All") {
// 		cake.style.display = "block";
// 		cupcake.style.display = "block";
// 		sweets.style.display = "block";
// 	}
// 	else if (button.innerHTML === "Cakes") {
// 		cake.style.display = "block";
// 		cupcake.style.display = "none";
// 		sweets.style.display = "none";
// 	}
// })


const buttons = document.querySelectorAll('button');
const storeItems = document.querySelectorAll('.item');

// console.log(buttons);

buttons.forEach(function (button) {
	button.addEventListener('click', function (e) {
		//prevent the default link jump to top of page
		e.preventDefault()
		//grab the filter button that was clicked
		const filter = e.target.dataset.filter;
		if (filter === 'all') {
			//show all items
			storeItems.forEach(function (item) {
				item.style.display = 'block';
			})
		} else if (filter === 'cakes') {
			storeItems.forEach(function (item) {
				if (item.classList.contains('cake')) {
					item.style.display = 'block';
				} else {
					item.style.display = 'none';
				}
			})
		} else if (filter === 'cupcakes') {
			storeItems.forEach(function (item) {
				if (item.classList.contains('cupcake')) {
					item.style.display = 'block';
				} else {
					item.style.display = 'none';
				}
			})
		} else if (filter === 'sweets') {
			storeItems.forEach(function (item) {
				if (item.classList.contains('sweets')) {
					item.style.display = 'block';
				} else {
					item.style.display = 'none';
				}
			})
		}
	})
})


const searchBox = document.querySelector('#search');
const storeItem = document.querySelectorAll('.item');

searchBox.addEventListener('keyup', (e) => {
	
	const searchFilter = e.target.value.toLowerCase();
	//display only items that contain filter input

	storeItem.forEach((item) => {
		if (item.textContent.includes(searchFilter)) {
			item.style.display = 'block';
			console.log(searchBox.value);
		} else {
			item.style.display = 'none';
		}
	})
})