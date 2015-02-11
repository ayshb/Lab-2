var x = 0;
var salary = [{name: "A", salary:6, dept:"MG"},
			{name: "B", salary:3, dept:"MG"},
			{name: "C", salary:4, dept:"EN"},
			{name: "D", salary:7, dept:"IT"},
			{name: "E", salary:2, dept:"EN"}];
var clrValR = 255
var clrValG = 20
var clrValB = 147;


function setup() {
	createCanvas(640, 480);
	background(255);
}

function calculate_height(salary) {
    return parseFloat(10 + ((parseInt(salary)-1)* (22.5)));
}

function draw() {
	// background(100);
	// ellipse(x, height/2, 20 , 20);
	// x = x + 1;
	// if(x==100){x=0;}
	var idx = -1;
     for (idx in salary) {
        var val = salary[idx].salary;
        var heading = salary[idx].name;
		fill(clrValR,clrValG,clrValB);
		rect(idx*15,250, 10, -calculate_height(val));
		text(heading, idx*15+2,265);
     }
}

function changeFill(clr){
	switch(clr){
		case 'red':
			clrValR = 255;
			clrValG = 0;
			clrValB = 0;
			break;
		case 'green':
			clrValR = 0;
			clrValG = 255;
			clrValB = 0;
			break;
		case 'blue':
			clrValR = 0;
			clrValG = 0;
			clrValB = 255;
			break;
		default:
			clrValR = 255;
			clrValG = 20;
			clrValB = 147;
			break;
	}
	draw();
}



