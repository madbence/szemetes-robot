var Router=function(){};

Router.prototype=
{
	setStart: function(p)
	{
		this.start=p;
	}
	setEnd: function(p)
	{
		this.end=p;
	}
	calcRoute: function()
	{
		var path=new Path();
		path.add(this.start);
		var current=this.start
		while