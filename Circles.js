class Circle{
    constructor(x, y, radius){
        var options={
            restitution: 0.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.color = color(random(0,255),random(0,255),random(0,255) );
        this.radius = radius; 
         
}
    
    display(){
        var position = this.body.position;
        var angle = this.body.angle
        push();
        translate(position.x, position.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
}

}