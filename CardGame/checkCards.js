var aceCounter = 0;
var kingCounter = 0;
var queenCounter = 0;
var tenCounter = 0;

var points = 0;


function aceCheck(a,b){  //a refers to # of times its been clicked, b refers to the html element img
//	console.log(a);
	//note to all future editors/developers: yes, that is 01 and yes it needs to in string form
	if(a==='01'){
		aceCounter++;
		if(aceCounter===2){
			alert("you got one!!!");
			points++;
			console.log(points);
		};//end of nested if
	} ; //end of if
	checkWin();
};


function kingCheck(a){
//	console.log(a);
	//note to all future editors/developers: yes, that is 01 and yes it needs to in string form
	if(a==='01'){
		kingCounter++;
		if(kingCounter===2){
			alert("you got one!!!");
			points++;
			console.log(points);
		};//end of nested if
	} ; //end of if
	checkWin();
};


function queenCheck(a){
//	console.log(a);
	//note to all future editors/developers: yes, that is 01 and yes it needs to in string form
	if(a==='01'){
		queenCounter++;
		if(queenCounter===2){
			alert("you got one!!!");
			points++;
			console.log(points);
		};//end of nested if
	} ; //end of if
	checkWin();
};


function tenCheck(a){
//	console.log(a);
	//note to all future editors/developers: yes, that is 01 and yes it needs to in string form
	if(a==='01'){
		tenCounter++;
		if(tenCounter===2){
			alert("you got one!!!");
			points++;
			console.log(points);
		};//end of nested if
	} ; //end of if
	checkWin();
};

function checkWin(){
	if(points === 3){
		alert("YOU WON!!!");
	}
}