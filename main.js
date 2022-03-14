
function properfunction(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LVLN_85lX/model.json",modelready)
}
function modelready(){
    classifier.classify(gotresult)
}
function gotresult(error,result){
    if(error){
        console.log(error)
    }else{
        console.log(result)
    }
}