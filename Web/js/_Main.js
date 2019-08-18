'use strict';
window.onload = function() {

var isCordovaApp = document.URL.indexOf('http://') === -1
		&& document.URL.indexOf('https://') === -1;

	if (isCordovaApp==false)
	{
		Inicia();
	}
		

};

function Inicia()
{
	//////console.log("Entra a iniciar");
	var ancho;
	var alto;
	var ForceSet;
	
	if (window.innerHeight/window.innerWidth<0.68)
	{	
		ancho=1366;
		alto=662;
	}
	else
	{
		//ancho=1300;
		//alto=900;
		//2048x1536
		ancho=1366;
		alto=1024;
	}
	

	
	//var config = {  width: ancho,  height: alto, id:'koko',  renderer: 1,  parent: 'gamer',  transparent: false,  antialias: true,  forceSetTimeOut: true }
	//1.0.9 Phaser.CANVAS 
	
	var isCordovaApp = document.URL.indexOf('http://') === -1
		&& document.URL.indexOf('https://') === -1;
	
	if( isCordovaApp==true)
	{
		 ForceSet=false;
	}
	else
	{
		 ForceSet=true;
	}
	ForceSet=false; //2.0.7
	// ForceSet=true;
	
	//
	//ForceSet=false;
	//alert(isCordovaApp);
	//alert(ForceSet); 
	//ForceSet=false;
	
	//alert("MALI "+MaliDetect());
	
	if ( MaliDetect()==true)
	{
			
			//var config = {  width: ancho,  height: alto, id:'koko',  renderer: Phaser.AUTO,  parent: 'gamer',  transparent: false,  antialias: true,  forceSetTimeOut: ForceSet,  //preserveDrawingBuffer : true }
			
			
			var config = { width: ancho,  height: alto, id:'koko',  renderer: Phaser.AUTO,  parent: 'gamer',  transparent: true,  antialias: true,  forceSetTimeOut: ForceSet }
			
			
					//var config = {  width: ancho,  height: alto, id:'koko',  renderer: Phaser.AUTO,  parent: 'gamer',  transparent: false,  antialias: true,  forceSetTimeOut: ForceSet, preserveDrawingBuffer : true }
					
					//var config = {  width: ancho,  height: alto, id:'koko',  renderer: Phaser.CANVAS,  parent: 'gamer',  transparent: false,  antialias: true,  forceSetTimeOut: //ForceSet }					
	}
	else
	{
			var config = {  enableDebug : false,	clearBeforeRender : false,  width: ancho,  height: alto, id:'koko',  renderer: Phaser.AUTO,  parent: 'gamer', transparent: false,  antialias: true,  forceSetTimeOut: ForceSet,
  		}
	}
	//2.0.8051 Añado enableDebug : false y clearBeforeRender : false
	 		
			
	var game = new Phaser.Game(config);// now add your states here
	//console.log( game.time.desiredFPS)
   // game.clearBeforeRender = false; //2.0.8051
	//{ preload: preload, create: create, update:update  }
     //console.log(YMHIHSNADE)
		
		// Add the States your game has.
		game.state.add("Boot", Boot);
		game.state.add("Menu", Menu);
		game.state.add("Preload", Preload);
		game.state.add("Level", Level);
		


		// Now start the Boot state.
		game.state.start("Boot");
}
