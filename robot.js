var Robot=function(x,y,f)
{
	this.pos=new Position(x,y);
	this.charge=600;
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
		if(this.charge<200)
		{
			this.destination=new Position(1, 1);
			return;
		}
		var g=this.f.getGarbages();
		if(g.length == 0)
		{
			this.destination=new Position(this.f.sizeX-2, this.f.sizeY-2);
		}
		else
		{
			var min=null;
			var d=null;
			for(var i=0;i<g.length;i++)
			{
				var r=new Router(this.f);
				r.setStart(this.pos);
				r.setEnd(g[i]);
				var path=r.calcRoute();
				if(min==null || path.length()<min.length())
				{
					min=path;
					d=g[i];
				}
			}
			this.destination=d;
		}
	},
	calcRoute: function(p)
	{
		var r=new Router(this.f);
		r.setStart(this.pos);
		r.setEnd(this.destination);
		this.path=r.calcRoute();
		//this.dlist=r.list;
	},
	think: function()
	{
		if(this.f.getField(this.pos) == '.')
		{
			this.f.setField(this.pos, ' ');
		}
		if(this.f.getField(this.pos) == 'K')
		{
			this.charge=600;
		}
		if(this.path && !this.path.hasNext())
		{
			this.destination=null;
		}
		if(this.charge<200 && (!this.destination || !this.destination.equals(new Position(1,1))))
		{
			this.destination=null;
		}
		if(this.f.changed)
		{
			this.destination=null;
		}
		if(!this.hasDestination())
		{
			this.findDestination();
			if(this.destination == null)
			{
				this.path=null;
			}
			else
			{
				this.calcRoute();
			}
		}
		if(this.path)
		{
			this.nextMove=this.path.getNext();
		}
		else
		{
			this.nextMove=this.pos;
		}
	},
	update: function()
	{
		this.pos=this.nextMove;
		this.charge--;
	}
}