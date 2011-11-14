window.onload=function()
{
	var field=new GameField(config.sizeX, config.sizeY);
	field.setFields(config.fieldSetup);
	//console.log(field.getField(8,8));
	var canvas=new Canvas(config.canvasWidth, config.canvasHeight, config.canvasScale, document.getElementById(config.canvasID));
	canvas.setOffset(Math.floor(-field.sizeX/2), Math.floor(field.sizeY/2));
	var robot=new Robot(2,2,field);
	
	canvas.drawField(field);
	canvas.drawRobot(robot);
	
	var nextTick=function()
	{
		robot.think();
		canvas.drawGrid();
		canvas.drawField(field);
		canvas.drawRobot(robot);
		robot.update();
	}
	document.onclick=nextTick;
}


var config=
{
	sizeX: 15,
	sizeY: 10,
	canvasWidth: 700,
	canvasHeight: 700,
	canvasScale: 30,
	canvasID: 'canvas',
	colors:
	{
		charger: 'yellow',
		robot: 'blue',
		start: 'green',
		path: 'rgba(0,0,255,0.5)',
		garbage: 'red',
		wall: 'black',
		obstackle: 'purple'
	},
	codes:
	{
		'F':'wall',
		'B':'obstackle',
		'A':'robot',
		'.':'garbage',
		'K':'charger',
		' ':'air',
		'P':'start'
	},
	fieldSetup:'\
FFFFFFFFFFFFFFF\n\
FK            F\n\
F             F\n\
F   BB        F\n\
F   B         F\n\
F   B         F\n\
F   B         F\n\
F   B .       F\n\
F   B        PF\n\
FFFFFFFFFFFFFFF',
}