/**
 * Boot state.
 */
function Boot() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Boot.prototype = proto;

Boot.prototype.init = function() {
	// Unless you specifically know your game needs to support multi-touch I
	// would recommend setting this to 1
	this.input.maxPointers = 1;
	//this.stage.disableVisibilityChange = true;
	// Setup the scale strategy
	//this.scale.forceOrientation(false, true);
	
	//this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	
	///
	
//this.screen = "small";
	///
	
	
	
	//this.forceLandscape=true;
	//this.scale.forceOrientation(false, true);
	//this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
	//this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
	
	//this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    //this.scale.setUserScale(0.70, 1);
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	//Phaser.forceOrientation(true,false)
	
	var isCordovaApp = document.URL.indexOf('http://') === -1
		&& document.URL.indexOf('https://') === -1;
	
	
	if( isCordovaApp==true)
	{
		this.stage.disableVisibilityChange = false;
	}
	else
	{
		this.stage.disableVisibilityChange = true;
	}
	this.stage.disableVisibilityChange = false;

	
	//this.stage.forceSetTimeOut = true;
	//this.forceSetTimeOut=true;
	
	//this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
	//this.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE;

	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = false;
	
	//this.scale.forceLandscape=true;
	
	//

	//this.scale.refresh();
  //game.input.onDown.add(gofull, this);
	
	//this.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE;
	//this.scale.updateLayout();
};


Boot.prototype.preload = function() {
	// Load the assets to be used in the Preload state (progress bar,
	// etc...). Note we use the "preload" key of the asset pack. The rest of
	// the assets should be loaded in the Preload state.
	this.load.pack("preload", "assets/assets-pack.json");
	
};

Boot.prototype.create = function() {
	// By this point the preloader assets have loaded to the cache, we've
	// set the game settings, so now let's start the real preloader going
	//this.game.scale.startFullScreen();
	//this.game.plugins.add(new Phaser.Plugin.SaveCPU)
	//this.game.add.plugin(PhaserInput.Plugin);
	this.game.state.start("Preload");
};

