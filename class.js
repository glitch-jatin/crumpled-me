class Paper{

    constructor(){
        var options = {
            isStatic:false,
            'restitution':0.4,
            'friction':0.4,
            'density':1.2
        }
        
        this.body = Bodies.circle(100,680,25 , options);
        this.body.position.x = 100;
      this.body.position.y = 680;
      this.radius = 25;
        World.add(world, this.body);
    }

display(){
   //this.body.position.x=mouseX;
   //.body.position.y=mouseY;

    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("purple");
    fill(255);
    ellipse(this.body.position.x,this.body.position.y, this.radius,this.radius);
    
}


}