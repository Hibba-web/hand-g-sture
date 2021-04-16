Webcam.set({
    width:300,
    height:350,
    image_format:'png',
    png_quality:100
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version :-', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/l59S2A6vo/model.json', modelLoded);

function modelLoded() {
    console.log("Model Loaded!!!!!! Good job miss coder !!!!");
}



function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        prediction = results[0].label;
        if (results[0].label == "clap") { 
            document.getElementById("result_gesture_name").innerHTML = '<span>"&#128079;"</span>'+" || You are claping !!!"; 
        } 
        if (results[0].label == "peace") { 
            document.getElementById("result_gesture_name").innerHTML = '<span>"&#9996;"</span>'+" || Do you feel my wesite is cool?"; 
        } 
        if (results[0].label == "yes") { 
            document.getElementById("result_gesture_name").innerHTML = ' <span>"&#128077;"</span>' + " || Okay, Thanks for telling me my wesites great!"; 
        }
    }
}