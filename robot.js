var Robot=function(x,y,f)
{
	this.pos=new Position(x,y);
	this.charge=6;
	this.destination=null;
	this.f=f;
}

Robot.prototype=
{
	hasDestination: function()
	{
		return this.destination!=null;
	},
	findDestination: function(f)
	{
		if(this.charge<2)
		{
			var chargers=f.getChargers();
			var nearest=0;
			//for(var i
		}
		var g=this.f.getGarbages();
		this.destination=g[0];
	},
	calcRoute: function(p)
	{
		
	},
	think: function()
	{
		if(!this.hasDestination())
		{
			this.findDestination();
		}
		if(this.f.getField(this.pos.preferedMove(this.destination)) == 'B')
		{
			alert('fal!');
		}
		else
		{
			this.nextMove=this.pos.preferedMove(this.destination);
		}
	},
	update: function()
	{
		this.pos=this.nextMove;
	}
}