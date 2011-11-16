var Router=function(f){this.f=f};

Router.prototype=
{
	setStart: function(p)
	{
		this.start=p;
	},
	setEnd: function(p)
	{
		this.end=p;
	},
	calcRoute: function()
	{
		list=new RouterPath(this.start,this.f);
		list.addNeighbours(this.start);
		used=[];
		var l=1000;
		var path;
		do
		{
			l--;
			var best=null;
			var best2=null;
			for(var i=0;i<list.path.length;i++)
			{
				//console.log(list.path[i].pos, 'vs', best);
				var isUsed=false;
				for(var j=0;j<used.length;j++)
				{
					if(list.path[i].pos.equals(used[j]))
					{
						isUsed=true;
						break;
					}
				}
				if(!isUsed && (best==null || list.getCost(list.path[i].pos, this.end)<list.getCost(best, this.end)))
				{
					best=list.path[i].pos;
					best2=list.path[i];
				}
			}
			list.addNeighbours(best);
			//path.add(best);
			//path=path.reverse();
			used.push(best);
		}while(l && !best.equals(this.end));
		path=new Path();
		for(var p=best;p;)
		{
			path.add(p);
			for(var i=0;i<list.path.length;i++)
			{
				if(list.path[i].pos.equals(p))
				{
					p=list.path[i].prev;
					break;
				}
			}
		}
		path=path.reverse();
		this.list=list;
		return path;
	}
}

var RouterPath=function(p,f)
{
	this.path=[
	{
		pos: p,
		prev: null,
	}];
	this.f=f;
	};

RouterPath.prototype.add=function(p,pr)
{
	this.path.push({pos:p,prev:pr});
};

RouterPath.prototype.getCost=function(p,d)
{
	return Math.abs(p.x-d.x)+Math.abs(p.y-d.y);
	// return Math.round(p.distance(d));
}

RouterPath.prototype.addNeighbours=function(p)
{
	for(var i=-1;i<2;i+=2)
	{
		var pos=new Position(p.x+i, p.y);
		if(p.prev && pos.equals(p.prev))
		{
			//
		}
		else if(this.f.fieldExists(pos) && this.f.getField(pos) != 'B')
		{
			this.path.push(
			{pos:pos,prev:p});
		}
	}
	for(var j=-1;j<2;j+=2)
	{
		var pos=new Position(p.x, p.y+j);
		if(p.prev && pos.equals(p.prev))
		{
			//
		}
		else if(this.f.fieldExists(pos) && this.f.getField(pos) != 'B' && this.f.getField(pos) != 'F')
		{
			this.path.push(
			{pos:pos,prev:p});
		}
	}
}