let apiKey = "vPl94/j4uWH/8/KFAgfBEA==4QXY5Yte8uCtmLkz"

document.addEventListener("DOMContentLoaded", () => {
    fetchMyQuote();
    buttonClkQuote();
})

async function fetchMyQuote(){
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");
    try{
        let response = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        });
        let json = await response.json();
        quote.innerText = json[0].quote;
        author.innerText = "- " + json[0].author;
    } catch (error) {
        console.error('No quote today my friend...', error);
        quote.innerText = "Failed to fetch quote";
    }   
}

function buttonClkQuote(){
    let button = document.getElementById("quote-button");
    button.addEventListener("click", fetchMyQuote);
}