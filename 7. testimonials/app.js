const back = document.querySelector('.back');
const forward = document.querySelector('.forward');
const personImage = document.querySelector('.person-image');
const personName = document.querySelector('.person-name');
const personStars = document.querySelector('.person-stars')
const personText = document.querySelector('.person-testimonial');

let clicks = 0;

const people = [
    {
        name: "Alex",
        stars: "★★★★☆",
        testimonial: "I called today because I thought my account was over changed. It turns out it was not. Jeremi showed me where I can get my receipts and see my charges for the account. He walked me through the difference between a domain charge and a hosting charge. He even told me when payments are due next. Then he helped me change the administration contact. He walked me through the website and gave me the knowledge that I probably should have had a long time ago. He was clear, patient, and thorough! Every company deserves a team member like him. I consider myself lucky to have worked with him as I feel educated with your site.",
        source: "alex.jpg"
    },
    {
        name: "Peter",
        stars: "★★★★★",
        testimonial: "Eric helped me figure out how to get my site back online when Weebly never responded, all is well now thanks to his assistance!",
        source: "peter.jfif"
    },
    {
        name: "Gisella",
        stars: "★★★★★",
        testimonial: "I had problems to access my newly hired hosting account, I was scared and very worried because I could not update the necessary information to access the contracted services, but in a very patient and friendly way Eric, I will remember the information that I had indicated at the time of signing up with you, I thank you for having such a qualified and human staff in these situations, which can be put in one's place.",
        source: "gisella.jfif"
    }
]

back.addEventListener("click", function () {
    if (clicks === 0) {
        clicks = people.length;
    }
    clicks -= 1;
    personImage.src = people[clicks].source;
    personName.innerHTML = people[clicks].name;
    personStars.innerHTML = people[clicks].stars;    
    personText.innerHTML = people[clicks].testimonial;
})

forward.addEventListener("click", function () {
    clicks += 1;
    if (clicks == people.length) {
        clicks = 0;
    }

    personImage.src = people[clicks].source;
    personName.innerHTML = people[clicks].name;
    personStars.innerHTML = people[clicks].stars;
    personText.innerHTML = people[clicks].testimonial;
});