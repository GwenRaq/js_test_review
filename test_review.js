//Gwyneth Raquepo
//November 23 2016 
//title: javascript test review

var knight = "Gwain";
var maiden = "Guinevere";
var monster = "Dragon";

var weaponChest = ["Mace", "sorcerersStone", "Excalibur"];
var hero = {
	wizard : "Merlin",
	weapon : "Excalibur",
	power : 2
}


function swordInTheStone(worthy){
	if(worthy == "Arthur"){
		console.log("We have found our King"+" "+ worthy + ".");
	}else{
		console.log("We must keep searching," + "for"+" "+ worthy +" "+"is unworthy" + ".");
	}
}
swordInTheStone(knight)


function trueLove(king, queen){
	if(queen == "Guinevere" && king == "Arthur"){
		console.log("On this day, our"+ " "+ king +" "+"and" + " "+ queen +" "+ "shall rule happily ever after");
	}else{
		console.log("We must keep searching, for true love must reign over Camelot.");
	}
}
trueLove(knight, maiden)

function epicBattle(wizard, enemy, power){
	if(power <= 15){
		console.log("Our"+" "+ wizard +" "+ "has fallen"+ ".");
	}else if(power >= 16){
		console.log(wizard + " "+ "has almost slain the"+" "+enemy+".");
	}else if(power <= 40){
		console.log(wizard + " "+ "has almost slain the"+" "+enemy+".");
	}else{
		console.log("Our" +" "+ wizard+ " "+"has slain the"+" "+ enemy+"!");
	}
}
epicBattle(hero.wizard, monster, hero.power)