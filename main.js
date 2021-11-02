noseX = 0;
noseY = 0;

function preload() {
    //clownNose = loadImage("https://i.postimg.cc/zvrDNf5V/Clown-nose.png")
    clownNose = loadImage("Clown nose.png")
}   
function setup() {
    canvas = createCanvas(370, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(370, 300);
    video.hide()

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", obtainedPoses);
}

function modelLoaded(){
    console.log("The PoseNet model is Initialised");
}

function obtainedPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}
function draw() {
    image(video, 0, 0, 370, 300);
    push(); 
    imageMode(CENTER); 
    image(clown_nose, noseX, noseY, 30, 30); 
    pop();
    canvas.center();
}
function clickThePhoto() {
    save("MyClownFilterImage.png");
    canvas.center();
}