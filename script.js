window.onload=function()
{
	var field=new GameField(config.sizeX, config.sizeY);
	field.setFields(config.fieldSetup);
	//console.log(field.getField(8,8));
	var canvas=new Canvas(config.canvasWidth, config.canvasHeight, config.canvasScale, document.getElementById(config.canvasID));
	canvas.setOffset(Math.floor(-field.sizeX/2), Math.floor(field.sizeY/2));
	var robot=new Robot(2,7,field);
	
	var nextTick=function()
	{
		field.update();
		robot.think();
		canvas.drawGrid();
		canvas.drawField(field);
		canvas.drawRobot(robot);
		robot.update();
	}
	nextTick();
	setInterval(nextTick, 50);
}


var config=
{
	sizeX: 30,
	sizeY: 30,
	canvasWidth: 700,
	canvasHeight: 700,
	canvasScale: 20,
	canvasID: 'canvas',
	colors:
	{
		charger: 'yellow',
		robot: 'blue',
		start: 'green',
		path: 'rgba(0,0,255,0.5)',
		path2: 'rgba(0,0,128,0.2)',
		path3: 'rgba(0,128,128,0.1)',
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
FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF\n\
FK                           F\n\
F                            F\n\
F    BBBBBBBBBBBBBBBBBBBB    F\n\
F    B                  B    F\n\
F    B                  B    F\n\
F    B    B        B    B    F\n\
F    B    B        B    B    F\n\
F    B    B        B    B    F\n\
F    B    B        B    B    F\n\
F    B    B        B    B    F\n\
F    B    B        B    B    F\n\
F    B    B        B    B    F\n\
F    B    B        B    B    F\n\
F    B    B  BBBB  B    B    F\n\
F    B    B  B  B  B    B    F\n\
F    B    B  B  B  B    B    F\n\
F    B    B  B  B  B    B    F\n\
F    B    B        B    B    F\n\
F    B    B        B    B    F\n\
F    B    B        B    B    F\n\
F    B    B        B    B    F\n\
F    B    B        B    B    F\n\
F    B    BBBBBBBBBB    B    F\n\
F    B                  B    F\n\
F    B                  B    F\n\
F    B                  B    F\n\
F                            F\n\
F                           PF\n\
FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
}