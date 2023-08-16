var innerHTMLString = "";
for(let i = 0; i<16*16;i++){
    innerHTMLString += '<div class="box"></div>';
}
document.querySelector(".container").innerHTML = innerHTMLString;

const box = document.querySelectorAll(".box");
let erasingMode = false;
function changeBackground(e){
    if(!erasingMode){
    e.target.classList.add("colored");}
    else{
        e.target.classList.remove("colored");
    }
}

box.forEach(element => element.addEventListener("mouseover",changeBackground));

const resetButton = document.createElement("button");
resetButton.className = "res-button";
const body = document.querySelector("body");
resetButton.innerText = "Reset";


function reset(){
    box.forEach(element => {
        element.classList.remove("colored");
    })};
resetButton.addEventListener("click",reset);

const buttonContainer = document.createElement("div");
buttonContainer.className = "btn-container";
const eraser = document.createElement("button");
eraser.innerText = "Eraser";
buttonContainer.appendChild(resetButton);
buttonContainer.appendChild(eraser);
body.appendChild(buttonContainer);

function erase(){
    erasingMode = !erasingMode;
}
eraser.addEventListener("click",erase)