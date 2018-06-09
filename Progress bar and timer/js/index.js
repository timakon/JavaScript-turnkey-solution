function userProgress(time) {
    var start = 0;
    var time = Math.round(time * 10)
    var progressElement = document.getElementById('user-progress') //элеметнт progress bar
    var intervalId = setInterval(function () {
        if (start>100){
            clearInterval(intervalId);
            userProgressCallBack();
        }
        else{
            progressElement.value = start;
        }
        start++;
    }, time);
}
function userProgressCallBack(){
    document.querySelector('.hidden').style.display = 'block';
    document.querySelector('#user-progress').style.display = 'none';
}

userProgress(1)