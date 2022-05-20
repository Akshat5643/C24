class Log {
    constructor(x, y,height,angle) {
      var options = {
          'restitution':0.2,
          'friction':2,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, 30, height, options);
      this.width = 30;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push ();
      translate (pos.x,pos.y);
      angleMode(RADIANS);
      rotate (angle);
      rectMode(CENTER);
      strokeWeight(10)
      stroke ("Yellow")
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  