var GameField=function(x,y)
{
	this.sizeX=x;
	this.sizeY=y;
	this.fields=[];
	for(var i=0;i<y;i++)
	{
		this.fields[i]=[];
		for(var j=0;j<x;j++)
		{
			this.fields[i][j]=null;
		}
	}
}

GameField.prototype=
{
	setFields: function(str)
	{
		this.rawFields=str;
		console.log(str);
		str=str.split('\n');
		for(var i=0;i<this.sizeY;i++)
		{
			for(var j=0;j<this.sizeX;j++)
			{
				this.fields[i][j]=str[i].charAt(j);
			}
		}
		console.log(this.fields);
	},
	getField: function(p)
	{
		return this.fields[p.y][p.x];
	},
	fieldExists: function(p)
	{
		return this.fields[p.y]!=undefined && this.fields[p.y][p.x]!=undefined;
	},
	getGarbages: function()
	{
		var arr=[];
		for(var i=0;i<this.sizeY;i++)
		{
			for(var j=0;j<this.sizeX;j++)
			{
				if(config.codes[this.fields[i][j]] == 'garbage')
				{
					arr.push(new Position(j,i));
				}
			}
		}
		return arr;
	}
}