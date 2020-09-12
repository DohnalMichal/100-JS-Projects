const characters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];

function myFunction() {
    let hash = "#";
    const body = document.querySelector("body");
    const hex = document.querySelector(".hex");

    for (let i = 0; i < 6; i++) {
        hash += characters[Math.floor(Math.random() * characters.length)];

        hex.innerHTML = hash;
        body.style.backgroundColor = hash;
    }
}