var container = document.getElementById("game-container")

var titel = document.getElementById("title");
var verhaal = document.getElementById("description")

var knoppen = document.getElementById("game-buttons");
var menu1 = document.getElementById("button1");
var menu2 = document.getElementById("button2");
var menu3 = document.getElementById("button3");

var itemimg = document.getElementById("inventoryItem");

var foto;

var yeet = new Audio("sound/yeet.mp3");
var audio = new Audio ("sound/background-music.mp3");

function start(){


 document.body.style.backgroundImage = "url('images/hoofdmenu3.jpg')";

	titel.innerHTML =("A good day to die");
	verhaal.style.display = "none";
	itemimg.style.display = "none";
	menu1.style.display = "inline"
	menu2.style.display = "inline"
	menu3.style.display = "inline"
	

	menu1.innerHTML=("verhaal");
	menu2.innerHTML=("uitleg");
	menu3.innerHTML=("start")

	button1.onclick = function(){
		startup();

	}
	button2.onclick = function(){
		uitleg();
	}
	button3.onclick = function(){
      	level1();
      	music();
	}

}


function startup() {
verhaal.innerHTML="Je heb je vrouw verloren toen ze op reis ging ze is twee jaar vermist. <br>Nu heb je haar gevonden. Ze zit op een eiland vlakbij india ,<br>terwijl je reist hoor je van iedereen dat het eiland levensgevaarlijk is.<br> je stap nu op het eiland maar zal je overleven dat is de vraag?"
verhaal.style.display = "inline";

}

function uitleg(){
	
	verhaal.innerHTML="Dit is een point and click adventure game. <br> het is een horror game waar je verschillende mensen moet vermoorden en je moet overleven. "//moet nog gebeuren//
	verhaal.style.display = "inline"
}

function level1(){
	titel.innerHTML="Het eiland"
	console.log('het eiland');
	verhaal.innerHTML="Je bent met een boot naar het eiland gevaard, <br> en zet nu voet op het eiland <br> Het ziet er eng en niet goed uit, <br> maar het gaat over je vrouw loop je door of ga je teug in je boot?"
	verhaal.style.display = "inline"
     document.body.style.backgroundImage = "url('images/level-1-background.jpg')";
    menu3.style.display="none";
     menu1.innerHTML="doorlopen"
     menu1.setAttribute("onclick","doorlopen()")
     	menu2.innerHTML="terug naar de boot"
     	menu2.setAttribute("onclick"," boot()")
     	var L1tekst = document.getElementById("L1tekst");
   
}


function  boot() {
	document.body.style.backgroundImage = "url('images/boot2-L1.jpg')";
	titel.innerHTML="Het Slechte Einde"
	verhaal.innerHTML=" Je hebt je vrouw verlaten omdat je te bang was.<br> Je hebt het slechte einde gekozen."
	menu1.innerHTML = "Start Opnieuw"
	audio.pause();
	yeet.play();
	menu2.style.display="none";
	menu3.style.display="none";
	menu1.onclick = function(){
		yeet.pause();
		yeet.currentTime = 0;
		start();
	}
	
}

function doorlopen() {
	document.body.style.backgroundImage = "url('images/level-2-background.jpg')"
	
	verhaal.innerHTML="Het is nu nacht. Je pakt je camera erbij zo dat je meer kan zien.<br>Je ziet een raar persoon staan,<br> maar naast je ligt een scherpe bijl waarschijnlijk van de rare mensen. pak je het op? "
	menu1.innerHTML="pak de bijl op"
	menu1.setAttribute("onclick","bijl()");
	menu3.style.display= "inline"
	menu3.innerHTML= "pak de bijl niet op"
	menu3.setAttribute("onclick","nietbijl()");
}

function nietbijl() {
	document.body.style.backgroundImage = "url('images/level-2dood.jpg')"
	titel.innerHTML="DOOD"
	verhaal.innerHTML= "Je hebt de bijl niet opgepakt.<br> Je liep langs hem en hij viel je gelijk aan.<br>Je bent dood!"
	menu1.innerHTML="start opnieuw"
	menu2.style.display="none";
	menu3.style.display="none";
	menu1.onclick =function(){
		start();

	}
}

function bijl() {
    document.body.style.backgroundImage = "url('images/huis-L2.jpg')"
	titel.innerHTML="Het huis"
	console.log("huis");
	verhaal.innerHTML="Je hebt de bijl opgepakt,<br> je slaat hem nu in zijn nek, hij is dood.<br>Je loopt een beetje door en ziet een huis staan.<br> Loop je naar binnen of loop je er omheen? "
	menu1.innerHTML="huis naar binnen gaan"
	menu1.setAttribute("onclick","huis()")
    menu3.innerHTML="langs het huis lopen"
    menu3.setAttribute("onclick","langslopen()")

}

function langslopen() {
	document.body.style.backgroundImage = "url('images/poort3-L2.jpg')"
	verhaal.innerHTML="Je bent langs het huis gelopen,<br>maar je komt een poort tegen je kan er niet door heen<br> je hebt een sleutel nodig."
	menu1.innerHTML="terug"
	menu1.setAttribute("onclick","terug()")

}

function terug() {
	  document.body.style.backgroundImage = "url('images/huis-L2.jpg')"
	titel.innerHTML="Het huis"
	console.log();
	verhaal.innerHTML=""
	menu1.innerHTML="huis naar binnen gaan"
	menu1.setAttribute("onclick","huis()")
    menu3.innerHTML="langs het huis lopen"
    menu3.setAttribute("onclick","langslopen()")
}


function huis() {
	document.body.style.backgroundImage = "url('images/inhuis2.jpg')"
	console.log();
	verhaal.innerHTML="doorzoek het huis"
	menu1.innerHTML="de gang links nemen"
	menu1.setAttribute("onclick","kamerlinks()")
	menu3.innerHTML="de gang rechts nemen"
    menu3.setAttribute("onclick","kamerrechts()")
}

function kamerlinks() {
	document.body.style.backgroundImage = "url('images/kamerlinks2.jpg')"
	verhaal.innerHTML="Er light niks wat je goed kunt gebruiken."
	menu1.innerHTML="terug"
	menu1.setAttribute("onclick","terug2()")
	menu3.style.display="none";
}

function terug2() {
	document.body.style.backgroundImage = "url('images/inhuis2.jpg')"
	console.log();
	verhaal.innerHTML="doorzoek het huis"
	menu1.innerHTML="de gang links nemen"
	menu1.setAttribute("onclick","kamerlinks()")
	menu3.style.display="inline";
	menu3.innerHTML="de gang rechts nemen"
 
}

function kamerrechts() {
document.body.style.backgroundImage = "url('images/kamerrechts2.jpg')"
verhaal.innerHTML="Er staat een raar wezen voor je,<br> maar er steekt een sleutel uit haar zak.<br> Probeer je haar vriendelijk aan te spreken of sla je haar dood met de bijl? "
menu1.innerHTML="Haar aanspreken"
menu1.setAttribute("onclick","aanspreken()")
menu3.innerHTML="haar dood slaan"
menu3.setAttribute("onclick","doodslaan()")
}


function aanspreken() {
document.body.style.backgroundImage = "url('images/dood.jpg')"

verhaal.innerHTML="Het werkte natuurlijk niet<br> en ze heeft je in je nek gebeten. <br> Je bent dood."
menu1.innerHTML="start opnieuw"
	menu1.setAttribute("onclick","start2()")
	menu2.style.display="none";
	menu3.style.display="none";
}	


function start2() {
	


 document.body.style.backgroundImage = "url('images/hoofdmenu3.jpg')";

	titel.innerHTML =("A good day to die");
	verhaal.style.display = "none";
	itemimg.style.display = "none";
	menu1.style.display = "inline"
	menu2.style.display = "inline"
	menu3.style.display = "inline"
	
	menu1.innerHTML=("verhaal");
	menu2.innerHTML=("uitleg");
	menu3.innerHTML=("start")

	button1.onclick = function(){
		startup();

	}
	button2.onclick = function(){
		uitleg();
	}
	button3.onclick = function(){
      	level1();
      	music();
	}
}	

function doodslaan() {
    document.body.style.backgroundImage = "url('images/huis-L2.jpg')"
 titel.innerHTML="Het huis" 
 verhaal.innerHTML="Je hebt haar verslagen <br> en je hebt de sleutel opgepakt.<br> Je staat nu buiten het huis. " 

	console.log("huis");
	menu1.innerHTML="huis naar binnen gaan"
	menu1.setAttribute("onclick","Huis()")
    menu3.innerHTML="langs het huis lopen"
    menu3.setAttribute("onclick","Langslopen()")
}
	
	function Huis() {
		verhaal.innerHTML="Er is niks meer in het huis"
	}

function Langslopen() {
	document.body.style.backgroundImage = "url('images/poort3-L2.jpg')"
	verhaal.innerHTML="Je bent langs het huis gelopen,<br>maar je komt een poort tegen Gelukkig heb je die sleutel gevonden."
	menu1.innerHTML="Gebruik sleutel"
	menu1.setAttribute("onclick","sleutel()")
    menu3.style.display="none";
}

function sleutel() {
	document.body.style.backgroundImage = "url('images/kerk.jpg')"
	console.log("kerk")
	titel.innerHTML="kerk"
	verhaal.innerHTML="Je staat voor een enge kerk."
	menu1.innerHTML="Loop naar binnen"
	menu1.setAttribute("onclick","binnenkerk()")
 menu2.style.display="none";
 menu2.style.display="none";
}

function binnenkerk() {
	document.body.style.backgroundImage = "url('images/binnenkerk2.jpg')"

   verhaal.innerHTML="Je bent nu in de enge kerk. <br> Je verstop je achter een bankje omdat je ziet dat een mens wordt geofferd.<br>Sluip je langs hun of probeer je de man te redden?"
   menu1.innerHTML="langs sluipen "
   menu1.setAttribute("onclick","sluipen()")
  
   menu3.style.display="inline"
   menu2.style.display="inline"

   menu3.innerHTML="De man redden"
   menu3.setAttribute("onclick","redden()")
 } 
   
function redden() {
document.body.style.backgroundImage = "url('images/redden2.jpg')"
verhaal.innerHTML="Toen je de man probeerde te helpen werd je overmeesterd door de priester zijn handlangers.<br>Je werd buiten gesmeten en je werd opgegeten door de kannibalen.<br> Je ben dood."
menu1.innerHTML="start opnieuw"
menu3.style.display="none"
menu2.style.display="none"
menu1.onclick= function(){
	start();
}
}
 
function sluipen() {
document.body.style.backgroundImage = "url('images/kelder.jpg')"
console.log("kelder")
titel.innerHTML="kelder"
verhaal.innerHTML="Je bent lang priester gelopen en zit nu in de kelder"
menu1.innerHTML="doorlopen"
menu1.setAttribute("onclick","lopen()")
menu3.style.display="none"
menu2.style.display="inline"
}

function lopen() {
document.body.style.backgroundImage = "url('images/vrouw.jpg')"
console.log("vrouw");
verhaal.innerHTML="Je hebt je vrouw gevonden!<br>Je zit wel vast met handboeien. Je moet iets zoeken om haar te bevrijden"
menu1.innerHTML="Zoeken"
menu1.setAttribute("onclick","zoeken()")
menu2.style.display="none";
}
function zoeken() {
	document.body.style.backgroundImage = "url('images/kelder5.jpg')"
	titel.innerHTML="Zoek"
	verhaal.innerHTML="Je moet een een sleutel of een kniptang zoeken"
	menu1.innerHTML="loop door"
	menu1.setAttribute("onclick","verderzoeken()")    
 }

function verderzoeken() {
		document.body.style.backgroundImage = "url('images/kelder3.jpg')"
		menu1.innerHTML="zoek door"
		menu1.setAttribute("onclick","zoekdoor()")
}

function zoekdoor() {
	document.body.style.backgroundImage = "url('images/kniptang.jpg')"
	titel.innerHTML="gevonden!"
 verhaal.innerHTML=""
 menu1.innerHTML="terug naar je vrouw"
 menu1.setAttribute("onclick","vrouw()")
}

function vrouw() {
	document.body.style.backgroundImage = "url('images/vrouw.jpg')"

verhaal.innerHTML=""
menu1.innerHTML="Knip de handboeien door"
menu1.setAttribute("onclick","knippen()")
menu2.style.display="none";
}

function knippen() {
	menu1.innerHTML=""
	menu2.style.display="inline";
	menu2.setAttribute("onclick","vrouwboot()")
}

function vrouwboot() {
		document.body.style.backgroundImage = "url('images/boot2-L1.jpg')";
	titel.innerHTML="Het Einde"
	console.log("het einde")
	verhaal.innerHTML=" Je hebt je vrouw gered en vaart rustig weg van het eiland."
	menu1.innerHTML = "Start Opnieuw"
	audio.pause();
	yeet.play();
	menu2.style.display="none";
	menu3.style.display="none";
	menu1.onclick = function(){
		yeet.pause();
		yeet.currentTime = 0;
		start();
	}
}




function music () {

	console.log("music turned on");
	audio.loop = true;
	audio.play();
}
