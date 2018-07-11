//Variables Declaration

var audio = document.getElementById("audio");
var sound = document.getElementById("source");
var listOfSongs = document.querySelectorAll(".listOfSongs>li");
var playButton = document.querySelector(".play");
var stopButton = document.querySelector(".stop");
var forwardButton = document.querySelector(".forward");
var nameOfSong= document.querySelector(".item3");
var video = document.querySelector('#video');
const poetrySheet = document.querySelectorAll("#poetrySheet>div");
const poetry = document.querySelector("#poetrySheet");
const sideLeft = document.querySelector('#side-left');
const innerPoetry =document.querySelector('.inner');
//Functions Declaration


//Play current audio track
function play() {
	audio.load();
	audio.play();
	
	}
//Play flyby on click of one of the top navigation buttons
function playF() {
	sound.setAttribute('src','flyby.wav');
	audio.load();
	audio.play();
	}
//Stop playing audio
function stop(){
	audio.pause();
	
}
// this highlight current playing song on a list of songs
function highlight(){
	for( let i = 0 ; i<listOfSongs.length; i++){
		if(sound.getAttribute('src')===listOfSongs[i].getAttribute('src')){
			listOfSongs[i].style.background='rgba(255,0,0,0.7)';
		}else{
			listOfSongs[i].style.background='rgba(255,0,0,0.2)';
		}
	}
}
//Function determine what's gonna happen after click on the forward button by audio player
//This function is related to addEventListener on 'forward' button
function forward(){
	var currentSong=sound.getAttribute('src');
	if(currentSong==="flyby.wav"){
		sound.setAttribute('src',listOfSongs[0].getAttribute('src'));
		nameOfSong.textContent="Noir Fatale - Autumn";
	}

	for(var i=0; i<listOfSongs.length;i++){
		if(listOfSongs[i].getAttribute('src')===currentSong){
			if(i===listOfSongs.length-1){
				sound.setAttribute('src',listOfSongs[0].getAttribute('src'));
				nameOfSong.textContent="Noir Fatale - Autumn";
			}else{
				sound.setAttribute('src',listOfSongs[i+1].getAttribute('src'));
				if(listOfSongs[i].getAttribute("class")==="autumn"){
					nameOfSong.textContent="Noir Fatale - Tender Suicide";
				}else if(listOfSongs[i].getAttribute("class")==="tender"){
					nameOfSong.textContent="Noir Fatale - Mefedron lake";
				}else if(listOfSongs[i].getAttribute("class")==="mefedron"){
					nameOfSong.textContent="Noir Fatale - Ethnic techno";
				}
			}			
			
		}
	}
	highlight();

}
// Function determines whats happen after clicking 'play' button
// It relates to eventListener on 'play' button
//It calls play() function 
function playOn(){
	if(sound.getAttribute('src')==="flyby.wav"){
		sound.setAttribute('src','player/audio/noir fatale - autumn.mp3');
		nameOfSong.textContent="Noir Fatale - Autumn";
	}
	for( var i = 0 ; i<listOfSongs.length; i++){
		if(sound.getAttribute('src')===listOfSongs[i].getAttribute('src')){
			listOfSongs[i].style.background='rgba(255,0,0,0.7)';
		}else{
			listOfSongs[i].style.background='rgba(255,0,0,0.2)';
		}
	}
	
	play();	
}
//===========FUNCTION SLIDE====================
function slideR(){
	let index = 0;
	for(let i=0;i<poetrySheet.length;i++){
		if(poetrySheet[i].style.display==='block'){
	       	poetrySheet[i].style.display='none';
			index=i+1;
			}
	}
	if(index>=poetrySheet.length){index=0};
	poetrySheet[index].style.display='block';
}
function slideL(){
	let index = 0;
	for(let i=0;i<poetrySheet.length;i++){
		if(poetrySheet[i].style.display==='block'){
	       	poetrySheet[i].style.display='none';
			index=i-1;
			}
	}
	if(index<0){index=poetrySheet.length-1};
	poetrySheet[index].style.display='block';
}
//=================================Events adding

forwardButton.addEventListener("click",forward);

playButton.addEventListener("click",playOn);

stopButton.addEventListener("click",stop);


/*Handling Contact button*/
var contact=document.querySelector("#contact");
contact.addEventListener("click",function(){
	innerPoetry.style.display='block';
	sideLeft.style.display='block';
	poetry.style.display="none";
	audioPlayer2.style.display='none';
	audioPlayer.style.display='none';
	var foto = document.querySelector("#jafoto");
	foto.style.display="none";
	var theForm=document.querySelector("#theform");
	theForm.style.display="table";
	var row1S=document.querySelectorAll(".row1");
	for(var i =0; i<row1S.length;i++){
		row1S[i].style.display="table-row";
	}
	var labelS=document.querySelectorAll(".row1 label");
	for(var i =0; i<labelS.length;i++){
		labelS[i].style.display="table-cell";
	}
	var inputName=document.querySelector(".row1>#name");
	inputName.style.display="table-cell";
	var inputMail=document.querySelector(".row1>#mail");
	inputMail.style.display="table-cell";
	var textArea=document.querySelector(".row1>textarea");
	textArea.style.display="table-cell";
	var submitButton=document.querySelector("#submit");
	submitButton.style.display="inline-block";
})
/*Handling Music Button*/
var music = document.querySelector('#music');
var audioPlayer = document.querySelector('#audioPlayer');
var audioPlayer2 = document.querySelector("#audioPlayer2");

music.addEventListener('click', function(){
	sideLeft.style.display='none';
	poetry.style.display="none";
	innerPoetry.style.display='none';
	audioPlayer.style.display='block';
	audioPlayer2.style.display='block';
});	
//Handling Home Button
const home = document.querySelector("#home");
home.addEventListener('click', function(){
	window.location.reload();
})
//Handling Poetry button

const poetryButton = document.querySelector("#poetry");
poetryButton.addEventListener("click",function(){
	innerPoetry.style.display='none';
	sideLeft.style.display='none';
	audioPlayer2.style.display='none';
	audioPlayer.style.display='none';
	poetry.style.display="flex";
	slideR();
})
//Handling playlist songs buttons
listOfSongs.forEach((li)=>{
li.addEventListener("click",()=>{
	stop();
	const passedSrc = li.getAttribute('src');
	const getClass = li.getAttribute('class');
	sound.setAttribute('src',passedSrc);
	highlight();
	play();
	const text="";
	switch(getClass){
		case "autumn":
		nameOfSong.textContent="Noir Fatale - Autumn";
		break;
		case "tender":
		nameOfSong.textContent="Noir Fatale - Tender Suicide";
		break;
		case "mefedron":
		nameOfSong.textContent="Noir Fatale - Mefedron lake";
		break;
		case "ethnic":
		nameOfSong.textContent="Noir Fatale - Ethnic techno";
		break;
	}
	
});
});
//Handling Poetry Slide

const buttonRight = document.querySelector("#button-right");
buttonRight.addEventListener('click',slideR);
const buttonLeft = document.querySelector('#button-left');
buttonLeft.addEventListener('click',slideL)

