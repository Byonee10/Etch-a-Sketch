var innerHTMLString = "";
for(let i = 0; i<16*16;i++){
    innerHTMLString += '<div class="box"></div>';
}
document.querySelector(".container").innerHTML = innerHTMLString
