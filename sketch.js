
function setup() {
    createCanvas(800, 400);
    player = new test(200,375);
}
 
function draw() {
    player.display();
}

function touchStarted() {
    console.log(touchX,touchY);
    if(touchX>300 && touchX<500 && touchY>0 && touchY<100)
    player.body.y-=5;
    if(touchX>300 && touchX<500 && touchY>300 && touchY<400)
    player.body.y+=5;
    if(touchX>0 && touchX<200 && touchY>150 && touchY<250)
    player.body.x-=5;
    if(touchX>600 && touchX<800 && touchY>150 && touchY<250)
    player.body.x+=5;
}





