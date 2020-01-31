var body, num, array, width, context, logo, myElements, analyser, src, height;

body = document.querySelector('body');

num = 32;

array = new Uint8Array(num*2);

width = 10;

// window.onclick = function(){

    // if(context) return;

    // body.querySelector('h1').remove();

    // for(var i = 0 ; i < num ; i++){
    //     logo = document.createElement('div');
    //     logo.className = 'logo';
    //     logo.style.background = 'red';
    //     logo.style.minWidth = width+'px';
    //     body.appendChild(logo);
    // }

    // myElements = document.getElementsByClassName('logo');
    context = new AudioContext();
    analyser = context.createAnalyser();

    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(stream => {
        src = context.createMediaStreamSource(stream);
        src.connect(analyser);
        loop();
    }).catch(error => {
        alert(error + '\r\n\ Отклонено. Страница будет обновлена!');
        location.reload();
    });
// }

function loop() {
    window.requestAnimationFrame(loop);
    analyser.getByteFrequencyData(array);
    for(var i = 0 ; i < num ; i++){
        height = array[i+num];
        // myElements[i].style.minHeight = height+'px';
        // myElements[i].style.opacity = 0.008*height;
        if(height > 200){
            console.log("OFF!");

            body.querySelector('.flame').style.display = 'none'
            setTimeout(() => {
                body.querySelector('.flame').style.display = ''
                console.log("FIRE!");
            }, 5000);
            // flameOff();
            // flameFire();
            // body.querySelector('#id').innerHTML = height;
        }
    }

}
function flameFire(){
    setTimeout(() => {
        body.querySelector('.flame').style.display = ''
        console.log("fire");
    }, 5000);
}
function flameOff(){
    body.querySelector('.flame').style.display = 'none'
    console.log("off");
}

// alert("Click candle once to start!")