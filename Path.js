var Path=function()
{
	this.pos=0;
	this.path=[];
};

Path.prototype=
{
	add: function(p)
	{
		path.push(p);
	}
	getNext: function()
	{
		return this.path[this.pos++];
	}
	empty: function()
	{
		return this.path.length==0;
	}
	pop: function()
	{
		
	}
}
	
	