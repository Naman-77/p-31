class Plinko {
    constructor(x, y){
    var options ={
     isStatic: true,
     restitution: 1
    }
    this.body = Bodies.circle(x, y, 10, options);
    this.radius = 10;
    World.add(world,this.body);
}
display(){
    var position = this.body.position;
    var angle = this.body.angle
    push();
    translate(position.x, position.y);
    rotate(angle);
    fill('white');
    ellipseMode(RADIUS);
    ellipse(0, 0, this.radius, this.radius);
    pop();
}
 
}