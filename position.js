var Position=function(x,y)
{
	this.x=x;
	this.y=y;
}

Position.prototype=
{
	distance: function(p)
	{
		return Math.sqrt((this.x-p.x)*(this.x-p.x)+(this.y-p.y)*(this.y-p.y));
	},
	preferedMove: function(p)
	{
		if(this.x == p.x)
		{
			if(this.y>p.y)
			{
				return new Position(this.x, this.y-1);
			}
			return new Position(this.x, this.y+1);
		}
		else if(this.y == p.y)
		{
			if(this.x>p.x)
			{
				return new Position(this.x-1, this.y);
			}
			return new Position(this.x+1, this.y);
		}
		if(Math.abs(this.x-p.x) < Math.abs(this.y-p.y))
		{
			if(this.y>p.y)
			{
				return new Position(this.x, this.y-1);
			}
			return new Position(this.x, this.y+1);
		}
		if(this.x>p.x)
		{
			return new Position(this.x-1, this.y);
		}
		return new Position(this.x+1, this.y);
	},
	equals: function(p)
	{
		return this.x==p.x&&this.y==p.y;
	}
}