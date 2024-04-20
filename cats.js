document.addEventListener("DOMContentLoaded", () => {
    fetchMyCat();
    buttonClkCat();
})

async function fetchMyCat(){
    let image = document.getElementById("cat-image");
    try{
        let response = await fetch('https://api.thecatapi.com/v1/images/search');
        let json = await response.json();
        image.src = json[0].url;
    } catch (error) {
        console.error('No cat today my friend...', error);
        image.alt = "Failed to fetch image";
    }
}

function buttonClkCat(){
    let button = document.getElementById("cat-button");
    button.addEventListener("click", fetchMyCat);
}