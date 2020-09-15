class test {
    constructor(x,y) {
        this.body = createSprite(x,y,20,40);
        this.body.shapeColor = "blue";
    }

    display() {
        //camera.position.x = this.body.position.x;
        //camera.position.y = this.body.position.y;
        drawSprites();
    }

    
}