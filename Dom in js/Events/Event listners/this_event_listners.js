let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let tbn1 = generaterandom();  
    document.body.style.backgroundColor = tbn1; // Apply the random colour to the button
});

function generaterandom() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    // Corrected "rbg" to "rgb"
    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}
