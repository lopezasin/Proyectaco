window.onload = function() {

var isCordovaApp = document.URL.indexOf('http://') === -1
		&& document.URL.indexOf('https://') === -1;

	if (isCordovaApp==false)
	{
		Inicia();
	}
		

};

Inicia=function()
{
	console.log("Entra a iniciar");
	var ancho;
	var alto;
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
}
