var innerHTMLString = "";
for(let i = 0; i<16*16;i++){
    innerHTMLString += '<div class="box"></div>';
}
document.querySelector(".container").innerHTML = innerHTMLString;

const box = document.querySelectorAll(".box");

function changeBackground(e){
    e.target.classList.add("colored");
}

box.forEach(element => element.addEventListener("mouseover",changeBackground));

const resetButton = document.createElement("button");
resetButton.className = "res-button";
const body = document.querySelector("body");
resetButton.innerText = "Reset";
body.appendChild(resetButton);

function reset(){
    box.forEach(element => {
        element.classList.remove("colored");
    } 
    });
resetButton.addEventListener("click",reset);

