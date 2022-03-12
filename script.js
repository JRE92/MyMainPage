
function timeOut() {    
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var time = hours + ":" + minutes + ":" + seconds;

    if(seconds<10 && minutes<10){
        time = hours + ":0" + minutes + ":0" + seconds;
        document.getElementById("clock").innerHTML = time;
        return;
    }
    if(seconds<10){
        time = hours + ":" + minutes + ":0" + seconds;
        document.getElementById("clock").innerHTML = time;
        return;
    }
    if(minutes<10){
        time = hours + ":0" + minutes + ":" + seconds;
        document.getElementById("clock").innerHTML = time;
        return;
    }

    document.getElementById("clock").innerHTML = time;
}
setInterval(timeOut, 1000)

