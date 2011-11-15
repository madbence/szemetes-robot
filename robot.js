var Robot=function(x,y,f)
{
	this.pos=new Position(x,y);
	this.charge=6;
	this.destination=null;
	this.f=f;
	this.path=null;
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
		var r=new Router(this.f);
		r.setStart(this.pos);
		r.setEnd(this.destination);
		this.path=r.calcRoute();
		this.dlist=r.list;
	},
	think: function()
	{
		if(!this.hasDestination())
		{
			this.findDestination();
			this.calcRoute();
		}
		this.nextMove=this.path.getNext();
	},
	update: function()
	{
		this.pos=this.nextMove;
	}
}