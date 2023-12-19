Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

camera= document.getElementById("camera")

Webcam.attach("#camera")

function takeSnapshot(){
    Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_url+'"/>';
    
    })
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NYvG-vIEp/model.json", modelLoded)

function modelLoded() {
    console.log('Model Loaded')
}

function check() {
    img= document.getElementById('captured_image')
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error){
    console.error(error)
    } else {
        document.getElementById("resultObjectName").innerHTML= results[0].label
        document.getElementById("resultObjectAccuracy").innerHTML= results[0].confidence.toFixed(3)
    }
    
}