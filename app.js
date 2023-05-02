let randomNumber01 = Math.floor(Math.random() * 6) + 1;
let randomImage01 = "dice0" + randomNumber01 + ".png";
let randomImageSource01 = "images/" + randomImage01;

let image01 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource01);

let randomNumber02 = Math.floor(Math.random() * 6) + 1;
let randomImage02 = "dice0" + randomNumber02 + ".png";
let randomImageSource02 = "images/" + randomImage02;

let image02 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource02);

// condition dice

if(randomNumber01 > randomNumber02){
    document.querySelector("h1").innerHTML = "Player One Win";
}else if(randomNumber02 > randomNumber01){
    document.querySelector("h1").innerHTML = "Player Two Win";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}