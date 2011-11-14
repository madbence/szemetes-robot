var Canvas=function(w,h,s,e)
{
	this.x=w;
	this.y=h;
	this.s=s;
	this.e=e;
	this.c=e.getContext('2d');
	this.drawGrid();
}

Canvas.prototype=
{
	drawGrid: function()
	{
		this.c.save();
		this.c.clearRect(0,0,this.x,this.y);
		this.c.strikeStype='1px solid black';
		for(var i=-Math.round(this.x/this.s/2);i<this.x/this.s/2;i++)
		{
			this.c.beginPath();
			this.c.moveTo(this.x/2+i*this.s, 0);
			this.c.lineTo(this.x/2+i*this.s, this.y);
			this.c.stroke();
		}
		for(var i=-Math.round(this.y/this.s/2);i<this.y/this.s/2;i++)
		{
			this.c.beginPath();
			this.c.moveTo(0, this.y/2+i*this.s);
			this.c.lineTo(this.x , this.y/2+i*this.s);
			this.c.stroke();
		}
		this.c.restore();
	},
	fill: function(p,c)
	{
		this.c.save();
		this.c.fillStyle=c;
		this.c.fillRect(this.x/2+this.s*(p.x-1), this.y/2-this.s*p.y, this.s, this.s);
		this.c.restore();
	},
	drawField: function(f)
	{
		this.c.save();
		for(var i=0;i<f.sizeY;i++)
		{
			for(var j=0;j<f.sizeX;j++)
			{
				if(config.codes[f.fields[i][j]] != 'air')
					this.fill(new Position(this.offsetX+j,this.offsetY-i), config.colors[config.codes[f.fields[i][j]]]);
			}
		}
		this.c.restore();
	},
	setOffset: function(x,y)
	{
		this.offsetX=x;
		this.offsetY=y;
	},
	drawRobot: function(r)
	{
		this.fill(new Position(this.offsetX+r.pos.x, this.offsetY-r.pos.y), config.colors['robot']);
		if(r.nextMove)
			this.fill(new Position(this.offsetX+r.nextMove.x, this.offsetY-r.nextMove.y), config.colors['path']);
		//console.log(new Position(this.offsetX+r.x, this.offsetY-r.y));
	}
}