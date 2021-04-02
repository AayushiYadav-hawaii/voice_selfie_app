var SpeechRecognition = window.webkitSpeechRecognition;
var rec = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    rec.start();
}
rec.onresult=function (event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content=="take my selfie"){
        console.log("taking your selfie");
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speakdate = "Taking your selfie in 7 seconds";
    utterThis= new SpeechSynthesisUtterance(speakdate);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save(); 
    }, 7000 );
}

camera=document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 100
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="imge" src="'+data_uri+'"/>';
    });
}

function save(){
    lnk=document.getElementById(link);
    image=document.getElementById("imge").src;
    lnk.href=image;
    lnk.click();
}