class Stone{
	constructor(x,y){
	var options = {
		'density':12,
		'friction': 0.9,
		'restitution':0.8
	  };
	{
	this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);
	}
	}
	display()
	{
			var rubberpos=this.body.position;
			var angle = this.body.angle;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			rotate (angle);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			pop()
	}

}