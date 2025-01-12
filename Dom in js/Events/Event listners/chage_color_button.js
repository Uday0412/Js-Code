let btn = document.querySelector("button");

btn.addEventListener("click" , function(){
    let btn1 = getrandom();
    this.style.backgroundColor = btn1; // Apply the random colour to the button
});

function getrandom(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let bule = Math.floor(Math.random() * 255);

    // Corrected "rbg" to "rgb"
    let color = `rgb(${red} , ${green} ,${bule})`;

    return color;
}