


class Bob {
  constructor(x, y, width, height) {
    var options = {
        'restitution':1,
        'friction':5.0,
        'density':3.0
     
    }
    this.body = Bodies.circle(x, y,20, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("Magenta");
    strokeWeight("4");
    ellipse(0, 0, this.width, this.height);
    pop();
  }
};
