class Paper{
    constructor(x,y){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Matter.Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0,0,20,20);
        pop();
      }
}