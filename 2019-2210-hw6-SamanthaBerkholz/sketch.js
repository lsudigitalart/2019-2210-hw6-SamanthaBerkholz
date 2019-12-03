var capture;

function setup() {
    createCanvas(480,120);
    capture = createCapture();
    capture.hide();
}

function draw () {
    var aspectRatio = capture.height/capture.width;
    var h = width* aspectRatiol
    image(capture,0,0, width, h);
    filter(INVERT);
}
var img;
var img2;
var img3;
function preload(){
    img = loadImage("motley.jpg");
    img2 = loadImage("posion.jpg");
    img3 = loadImage("def.jpg");
}
function setup() {
  createCanvas(windowWidth,windowHeight);




}

function draw() {
    if(mouseIsPressed){
        image(img,0,0);
        image(img2,0,0);
        image(img3,0,0);
    }
}