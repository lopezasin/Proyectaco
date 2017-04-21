window.onload = function() {


	
	//if (window.innerHeight/window.innerWidth<0.55)
	//{
		var ancho=1366;
		var alto=662;
	//	console.log("PC");

	//}
	//else
	//{

		//var ancho=1366;
		//var alto=900;
		//var ancho=1100;
	//	var alto=700;
	//	console.log("IPAD");
	//}
	
		/*var ancho=1280;
		var alto=768;
		
				var ancho=1152;
		var alto=691;*/

	//var game = new Phaser.Game(ancho,alto, Phaser.AUTO,'gamer');
//var config = {  width: ancho,  height: alto, id:'koko',  renderer: Phaser.AUTO,  parent: 'gamer',  transparent: false,  antialias: true,  forceSetTimeOut: true}
var config = {  width: ancho,  height: alto, id:'koko',  renderer: 1,  parent: 'gamer',  transparent: false,  antialias: true,  forceSetTimeOut: true }
var game = new Phaser.Game(config);// now add your states here

//{ preload: preload, create: create, update:update  }

	
	// Add the States your game has.
	game.state.add("Boot", Boot);
	game.state.add("Menu", Menu);
	game.state.add("Preload", Preload);
	game.state.add("Level", Level);

	// Now start the Boot state.
	game.state.start("Boot");
};

function resizeGame2() {
	log(false,"redimensiona");
	log(false,$(window).width()+"x"+$( window ).height());
   // YMHIHSNADE.scale.setGameSize($( window ).width(), $( window ).height());
	
	//new haser.ScaleManager(this,$( window ).width(), $( window ).height());
	
  
  
}


/*function resizeGame(){
	var height = $(window).height();
	var width = $(window).width();	
	//log(false,$(window).height());
	YMHIHSNADE.width = width;
	YMHIHSNADE.height = height;
	ame_objeto.stage.bounds.width = width;
	YMHIHSNADE.stage.bounds.height = height;	
	if (YMHIHSNADE.renderType === Phaser.WEBGL){
		YMHIHSNADE.renderer.resize(width, height);
	}
}*/