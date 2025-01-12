let btns = document.querySelectorAll("button");

// this loop will work in all buttons
for(btn of btns){
    btn.onclick = "say hello";
    btn.onmouseenter = function() {
        alert("hi good moring");
    };
}