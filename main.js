function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(600, 600);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    background('#969A79');

document.getElementById('square_size').innerHTML = "Width and Height of the Square will be = " + difference+"px";

    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}

 function modelLoaded(){
    console.log('PoseNet is Initialized!');
}


noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX+ " noseY = "+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference =  floor(leftWristX - rightWristX);

        console.log("leftWristX = " +leftWristX+"rightWristX = "+ rightWristX + " difference = "+ difference);
    }
}