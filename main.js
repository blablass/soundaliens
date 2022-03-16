
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
        random_r = Math.floor(Math.random()*255) + 1
        random_g = Math.floor(Math.random()*255) + 1
        random_b = Math.floor(Math.random()*255) + 1
        document.getElementById("resultlabel").innerHTML = "I can hear: " + result[0].label
        document.getElementById("confidence").innerHTML = "Accuracy: " + (result[0].confidence * 100).toFixed(3) + "%"
        document.getElementById("resultlabel").style.color = "rgb("+ random_r +","+ random_g +","+ random_b +")"
        document.getElementById("confidence").style.color = "rgb("+ random_r +","+ random_g +","+ random_b +")"
        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");
        if(result[0].label == "clap"){
            img1.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        else if(result[0].label == "snap"){
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.gif"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        else if(result[0].label == "Bell"){
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.gif"
            img4.src = "aliens-04.png"
        } 
        else{           img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.gif"
        }
    }
}
