class Box
{
    constructor(x,y,width,height) 
    {
      var options = 
      {
          retitution: 1.0,
          density: 1.0,
          friction: 1.5,
      }
      this.body = Bodies.rectangle(x,y,35,35,options);
      this.width = 35;
      this.height = 35;
      World.add(world, this.body);

      this.visiblity = 255;
    }
    display()
    {
      console.log(this.body.speed)
      if(this.body.speed< 14)
      {
      var pos =this.body.position;

      rectMode(CENTER);

  

      rect(pos.x, pos.y, this.width, this.height);
      }
      else
      {
        push();
        World.remove(world,this.body);
        pop();

      }
    }
}