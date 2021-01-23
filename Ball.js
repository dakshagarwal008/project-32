class Ball{
constructor(x,y,r){
    var options = {
        isStatic:false,
        'restitution':0.3,
        'frictionAir':0.005,
        'density':1.2,
        
    }
    this.body = Bodies.circle(x,y,r,options)
    this.r=r;

    World.add(world, this.body);

}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
fill("orange");
ellipse(0, 0, this.r,this.r);
pop();
}
}