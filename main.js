function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/p56BNNsiu/model.json',modelReady);
}
function modelReady(){
    console.log("Model is Ready!!!!")
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        random_color_r = Math.floor(Math.random()*256);
        random_color_g = Math.floor(Math.random()*256);
        random_color_b = Math.floor(Math.random()*256);

        console.log(results);

        document.getElementById("result_label").innerHTML="I Can Hear : "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Acuuracy : "+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color= "rgb("+random_color_r+","+random_color_g+","+random_color_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_color_r+","+random_color_g+","+random_color_b+")";;

        img = document.getElementById("Image");

        if(results[0].label == "Barking"){
            img.src="Dog.gif";
        }else if(results[0].label == "Meowing"){
            img.src="Cat.gif";
        }else if(results[0].label == "Roar"){
            img.src="Tiger.gif";
        }else if(results[0].label == "Mooing"){
            img.src="Cow.gif";
        }else{
            img.src="TooMuchBackgroundNoise.gif";
		}
}
}gif