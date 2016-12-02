//Gwyneth Raquepo
//November 23 2016 
//title: javascript test review

//Variables
var knight = "Gwain";
var maiden = "Guinevere";
var monster = "Dragon";

//Array
var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];

//Object
var hero = {
	wizard : "Merlin",
	weapon : weaponChest[2];
	power : 2
}

//Sword in the Stone 
function swordInTheStone(worthy){
	if(worthy == "Arthur"){
		console.log("We have found our King"+" "+ worthy + ".");
	}else{
		console.log("We must keep searching," + "for"+" "+ worthy +" "+"is unworthy" + ".");
	}
}
swordInTheStone(knight);

//KingQueen
function trueLove(king, queen){
	if(queen == "Guinevere" && king == "Arthur"){
		console.log("On this day, our"+ " "+ king +" "+"and" + " "+ queen +" "+ "shall rule happily ever after");
	}else{
		console.log("We must keep searching, for true love must reign over Camelot.");
	}
}
trueLove(knight, maiden);

//Battle
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
epicBattle(hero.wizard, monster, hero.power);

//ok