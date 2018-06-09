document.querySelector('#test').onmousemove = function (event) {
    window.event;
    //console.log(event);
    document.querySelector('#X').innerHTML = event.offsetX;
    document.querySelector('#Y').innerHTML = event.offsetY;
};