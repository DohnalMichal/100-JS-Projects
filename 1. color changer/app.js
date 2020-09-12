const colors = [
    "blue",
    "green",
    "limegreen",
    "red",
    "beige",
    "cyan",
    "deepskyblue",
    "darkturquoise",
];
const body = document.querySelector("body");

function myFunction() {
    let randomNumber = Math.floor(Math.random() * colors.length);
    console.log(randomNumber, colors[randomNumber]);
    body.style.backgroundColor = colors[randomNumber];
}