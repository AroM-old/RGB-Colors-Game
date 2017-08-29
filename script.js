var numSquares = 6;
var colors = [];
var pickedColor;

var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var mesgDisplay = document.getElementById("msgdisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
    for (var i = 0; i < squares.length; i++) {
        // add click listener to squares
        squares[i].addEventListener("click", function() {
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                msgDisplay.textContent = "Correct!!!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                msgDisplay.textContent = "Try again!!!";
            }
        });
    }
    reset();
}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // click a new random color from array
    pickedColor = pickColors();
    // change colorDisplay to match picked color
    resetButton.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    msgDisplay.textContent = " ";
    // change color squeares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
            // add initial colors to squares

        }
        h1.style.backgroundColor = "steelblue";
    }
}
resetButton.addEventListener("click", function() {
    reset();

});

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColors() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random colors and push into arr
        arr.push(randomColors());
    }
    return arr;
}

function randomColors() {
    //pick a  "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a  "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a  "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}