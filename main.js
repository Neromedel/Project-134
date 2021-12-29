object = [];
status = "";
img = "";

function preload() {
    
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('Status').innerHTML = "Status : Detecting Objects."
}

function modelLoaded() {
    console.log('Model Loaded.');
    status = true;
    
}

function draw() {
    image(video, 0, 0, 380, 380);
    if(status != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        object_detector.detect(video,gotResults);
    if(object[0].label == "person"){
        document.getElementById("Status").innerHTML = "Status : Object Detected";
        document.getElementById("number_of_objects").innerHTML = "Baby Found";
        fill(r,g,b);
        percent = floor(object[i].confidence * 100);
        text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
        noFill();
        stroke(r,g,b);
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
    }
}

function gotResults(error,results){
if(error){
console.error(error);
}
console.log(results);
object = results;
}	

