var Path=function()
{
	this.pos=0;
	this.path=[];
};

Path.prototype=
{
	add: function(p)
	{
		this.path.push(p);
	},
	getNext: function()
	{
		return this.path[this.pos++];
	},
	hasNext: function()
	{
		return this.path[this.pos] != null;
	},
	empty: function()
	{
		return this.path.length==0;
	},
	pop: function()
	{
		
	},
	reverse: function()
	{
		var a=new Path();;
		for(var i=this.path.length;i;i--)
		{
			a.add(this.path[i-1]);
		}
		return a;
	},
	length: function()
	{
		return this.path.length;
	}
}
	
	