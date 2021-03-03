// function two() {
//     var c = document.getElementById("c1");
//     var ctx = c.getContext("2d");
//     var img = document.getElementById("one");
//     ctx.drawImage(img,0,0,500,500);
//   }



function one() {
      var canvas  = document.getElementById("c1");
      var context = canvas.getContext('2d');

      var img = new Image();
      img.src = 'img/1.jpg';
      img.onload = function (e)
      {
          context.drawImage(img, 10, 10,500,400);
      }
  }
function two() {
    var canvas  = document.getElementById("c1");
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = 'img/2.jpg';
    img.onload = function (e)
    {
        context.drawImage(img, 10, 10,500,400);
    }
}
function three() {
    var canvas  = document.getElementById("c1");
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = 'img/3.jpg';
    img.onload = function (e)
    {
        context.drawImage(img, 10, 10,500,400);
    }
}
function four() {
    var canvas  = document.getElementById("c1");
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = 'img/4.jpg';
    img.onload = function (e)
    {
        context.drawImage(img, 10, 10,500,400);
    }
}
function five() {
    var canvas  = document.getElementById("c1");
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = 'img/5.jpg';
    img.onload = function (e)
    {
        context.drawImage(img, 10, 10,500,400);
    }
}
function six() {
    var canvas  = document.getElementById("c1");
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = 'img/6.jpg';
    img.onload = function (e)
    {
        context.drawImage(img, 10, 10,500,400);
    }
}
function seven() {
    var canvas  = document.getElementById("c1");
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = 'img/7.jpg';
    img.onload = function (e)
    {
        context.drawImage(img, 10, 10,500,400);
    }
}
function eight() {
    var canvas  = document.getElementById("c1");
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = 'img/8.jpg';
    img.onload = function (e)
    {
        context.drawImage(img, 10, 10,500,400);
    }
}
function nine() {
    var canvas  = document.getElementById("c1");
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = 'img/9.jpg';
    img.onload = function (e)
    {
        context.drawImage(img, 10, 10,500,400);
    }
}
function ten() {
    var canvas  = document.getElementById("c1");
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = 'img/10.jpg';
    img.onload = function (e)
    {
        context.drawImage(img, 10, 10,500,400);
    }
}
var audio = new Audio("img/preview.mp3" ) ;

audio.oncanplaythrough = function(){
audio.play();
}

audio.loop = true;

audio.onended = function(){
audio.play();
}


var audio_info = document.getElementById('audio1');
document.getElementById('play').addEventListener('click', function(){
    audio_info.play();
}, false);
//
document.getElementById('stop').addEventListener('click', function(){
    audio_info.pause();
}, false);