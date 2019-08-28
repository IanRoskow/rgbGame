var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var selectedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();

    setUpSquares();

    resetButton.addEventListener("click", function(){
        reset(colors.length);
    });

    reset(colors.length);
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons.forEach(element => {
                element.classList.remove("selected");
            })
            this.classList.add("selected");
            reset(this.getAttribute("squares"));
        });
    }
}

function setUpSquares(){
    squares.forEach((element, i, array) => {
        element.style.backgroundColor = colors[i];
    
        element.addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === selectedColor){
                message.innerHTML = "Correct";
                resetButton.innerHTML = "Play again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor; 
            }
            else{
                this.style.backgroundColor = "#232323";
                message.innerHTML = "Try again"; 
            }
        });
    });
}

function reset(num){
    colors = generateRandomColors(Number(num));
    selectedColor = pickColor();
    colorDisplay.innerHTML = selectedColor;
    h1.style.backgroundColor = "steelblue";
    resetButton.innerHTML = "New Colors";
    message.innerHTML = "";
    squares.forEach((element, i, array) => {
        if (colors[i]){
            element.style.display = "block";
            element.style.backgroundColor = colors[i];
        }
        else{
            element.style.display = "none";
        }
    });
}

function changeColors(color){
    squares.forEach(element => {
        element.style.backgroundColor = color;
    })
}

function pickColor(){
     return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(number){
    var colorArray = [];
    for (i=0; i< number; i++){
        colorArray.push(randomColor());
    }
    return colorArray;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256); 
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function check(){
    alert("Connected");
}