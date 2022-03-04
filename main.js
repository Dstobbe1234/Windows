// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// Variables for HTML Elements
let windows1 = document.getElementById("windows1");
let windows2 = document.getElementById("windows2");
let windows3 = document.getElementById("windows3");

// Event Listeners 
windows1.addEventListener("click", drawWind1);
windows2.addEventListener("click", drawWind2);
windows3.addEventListener("click", drawWind3);

function drawWind1() {
    let y = 380;
    for(let windowNum = 0; windowNum < 6; windowNum++) {
        ctx.fillStyle = "white";
        ctx.fillRect(25, y, 100, 20);
        y += 40;
    }
}

function drawWind2() {
    let x = 25;
    for(let n = 0; n < 4; n++) {
        let y = 200;
        x += 20
        for(let m = 0; m < 6; m++) {
            ctx.fillStyle = "white";
            ctx.fillRect(x, y, 10, 10);
            y += 20
        }
    }
}

function drawWind3() {
    let x = 180;
    for(let n = 0; n < 5; n++) {
        ctx.fillStyle = "white";
        ctx.fillRect(x, 150, 10, 450);
        x += 20;
    }
}
