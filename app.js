function draw() {
    var slider = document.getElementById("myRange").value;
    var cnv = document.getElementById("myCanvas");
    var ctx = cnv.getContext("2d");
    ctx.clearRect(0,0,cnv.width, cnv.height);
    ctx.beginPath();
    ctx.arc(250,250,slider,0,Math.PI*2); //x,y,radius,start angle,end angle,false/true)
    ctx.stroke();
    ctx.closePath();
    // console.log(slider);
    }
    
window.onload = draw
window.oninput=draw

