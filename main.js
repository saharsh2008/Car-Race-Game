canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1Width = 120;
car1Height = 70;
car1X = 10;
car1Y = 10;
var images = ["road1.jpeg", "road2.webp", "road3.gif", "https://lh3.googleusercontent.com/proxy/hZnCANDsJI_7N-ABhXqSoRWg4dGQuwXraFM8CdrSuQInUKiQzwTtO8y1CxjhQTorNP80eVYM3TVQG6_bcSlC4wS5"];
randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber);
backgroundImage = images[randomNumber];
car2Width = 120;
car2Height = 70;
car2X = 10;
car2Y = 100;
car1Image = "car.png";
car2Image = "car2.png";

function add() {
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;
    car1ImageTag = new Image();
    car1ImageTag.onload = uploadCar1;
    car1ImageTag.src = car1Image;
    car2ImageTag = new Image();
    car2ImageTag.onload = uploadCar2;
    car2ImageTag.src = car2Image;
}

function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1ImageTag, car1X, car1Y, car1Width, car1Height);
}

function uploadCar2() {
    ctx.drawImage(car2ImageTag, car2X, car2Y, car2Width, car2Height);
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        up();
        console.log("up arrow key presssed");
    }
    if (keyPressed == "40") {
        down();
        console.log("down arrow key presssed");
    }
    if (keyPressed == "37") {
        left();
        console.log("left arrow key presssed");
    }
    if (keyPressed == "39") {
        right();
        console.log("right arrow key presssed");
    }
    if (keyPressed == "87") {
        up2();
        console.log("up arrow key presssed");
    }
    if (keyPressed == "83") {
        down2();
        console.log("down arrow key presssed");
    }
    if (keyPressed == "65") {
        left2();
        console.log("left arrow key presssed");
    }
    if (keyPressed == "68") {
        right2();
        console.log("right arrow key presssed");
    }
}

function up() {
    if (car1Y >= 10) {
        car1Y = car1Y - 10;
        console.log("when up is pressed, X =" + car1X + ", Y =" + car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function down() {
    if (car1Y <= 600) {
        car1Y = car1Y + 10;
        console.log("when down is pressed, X =" + car1X + ", Y =" + car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function right() {
    if (car1X <= 690) {
        car1X = car1X + 10;
        console.log("when right is pressed, X =" + car1X + ", Y =" + car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function left() {
    if (car1X >= 10) {
        car1X = car1X - 10;
        console.log("when left is pressed, X =" + car1X + ", Y =" + car1Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function up2() {
    if (car2Y >= 10) {
        car2Y = car2Y - 10;
        console.log("when up is pressed, X =" + car2X + ", Y =" + car2Y);
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}

function down2() {
    if (car2Y <= 600) {
        car2Y = car2Y + 10;
        console.log("when down is pressed, X =" + car2X + ", Y =" + car2Y);
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}

function right2() {
    if (car2X <= 690) {
        car2X = car2X + 10;
        console.log("when right is pressed, X =" + car2X + ", Y =" + car2Y);
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}

function left2() {
    if (car2X >= 10) {
        car2X = car2X - 10;
        console.log("when left is pressed, X =" + car2X + ", Y =" + car2Y);
        uploadBackground();
        uploadCar2();
        uploadCar1();
    }
}
