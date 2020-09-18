const back = document.querySelector('.back');
const forward = document.querySelector('.forward');
const img = document.querySelector('img');

let clicks = 1;

back.addEventListener("click", function () {
	clicks -= 1;
	img.src = `${clicks}.jpeg`
	if (clicks < 1) {
		clicks = 4;
		img.src = `4.jpeg`;
	}
})

forward.addEventListener("click", function () {
	clicks += 1;
	img.src = `${clicks}.jpeg`
	if (clicks > 4) {
		clicks = 1;
		img.src = `1.jpeg`;
	}
});