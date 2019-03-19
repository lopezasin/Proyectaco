/**
 * Menu state.
 */
function Menu() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Menu.prototype = proto;

//ILA Menu.prototype.preload = function() {
	//this.load.pack("start", "assets/assets-pack.json");
//};

Menu.prototype.create = function() {
	/*var sprite = this.add.image(this.world.centerX, this.world.centerY,
			"tap-to-start");
	sprite.anchor.set(0.5, 0.5);
	this.input.onDown.add(this.startGame, this);*/
	this.startGame();
	
};

Menu.prototype.startGame = function() {
	this.game.state.start("Level");
};