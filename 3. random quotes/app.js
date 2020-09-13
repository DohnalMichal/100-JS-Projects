const quotes = [
    {
        author: "Albert Einstein",
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
        author: "Benjamin Franklin",
        quote: "Either write something worth reading or do something worth writing."
    },
    {
        author: "Nelson Mandela",
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        author: "Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
    },
    {
        author: "Michal Dohnal",
        quote: "Voda je pro slabý"
    }
]

function generateQuote() {
    const quoteText = document.querySelector(".quote-text");
    const author = document.querySelector(".author");

    let randomNumber = Math.floor(Math.random() * quotes.length);

    console.log(quotes[randomNumber]);
    quoteText.innerHTML = quotes[randomNumber].quote;
    author.innerHTML = quotes[randomNumber].author;
}