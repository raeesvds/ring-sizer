function draw() {
    var slider = document.getElementById("myRange").value;
    var cnv = document.getElementById("myCanvas");
    var ctx = cnv.getContext("2d");

    ctx.clearRect(0,0,cnv.width, cnv.height);
    ctx.beginPath();
    ctx.arc(250,250,slider,0,Math.PI*2); //x,y,radius,start angle,end angle,false/true)
    ctx.stroke();
    ctx.moveTo(250 - slider*1 , 250);
    ctx.lineTo(250 + slider*1  , 250);
    ctx.stroke();
    ctx.font = "30px Verdana";
    ctx.strokeText(slider*2+"mm",200,240,200)


    ctx.closePath();
    console.log(slider);

    }
    
window.onload = draw
window.oninput=draw

