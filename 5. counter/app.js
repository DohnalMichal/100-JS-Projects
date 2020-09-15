const lower = document.querySelector(".lower");
const add = document.querySelector(".add");
const counter = document.querySelector(".counter");
let count = 0;

lower.addEventListener("click", function() {
    count--;
    counter.innerHTML = count;
    checkColor();
})

add.addEventListener("click", function(){
    count++;
    counter.innerHTML = count;
    checkColor();
})

function checkColor () {
    if (count < 0 ) {
        counter.style.color = "red";
    }   else if (count===0) {
        counter.style.color = "#6c757d";
    }   else {
        counter.style.color = "green";
    }
}