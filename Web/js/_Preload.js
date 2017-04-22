/**
 * Preload state.
 */
function Preload() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Preload.prototype = proto;

Preload.prototype.preload = function() {
	
	
	// This sets the preloadBar sprite as a loader sprite.
	// What that does is automatically crop the sprite from 0 to full-width
	// as the files below are loaded in.
	//this.forceLandscape=true;
	//this.scale.forceOrientation(false, true);
	
	var preloadBar = this.add.sprite(this.world.centerX, this.world.centerY,
			"loading");
	preloadBar.anchor.set(0.5, 0.5);
	this.load.setPreloadSprite(preloadBar);

	// Here we load the rest of the assets our game needs.
	//this.load.pack("start", "assets/assets-pack.json");
	//this.load.pack("level", "assets/assets-pack.json");
	
	this.load.image('1', 'assets/images/Cartas/Oros/1.png');
	this.load.image('2', 'assets/images/Cartas/Oros/2.png');
	this.load.image('3', 'assets/images/Cartas/Oros/3.png');
	this.load.image('4', 'assets/images/Cartas/Oros/4.png');
	this.load.image('5', 'assets/images/Cartas/Oros/5.png');
	this.load.image('6', 'assets/images/Cartas/Oros/6.png');
	this.load.image('7', 'assets/images/Cartas/Oros/7.png');
	this.load.image('8', 'assets/images/Cartas/Oros/10.png');
	this.load.image('9', 'assets/images/Cartas/Oros/11.png');
	this.load.image('10', 'assets/images/Cartas/Oros/12.png');
	
	this.load.image('11', 'assets/images/Cartas/Copas/1.png');
	this.load.image('12', 'assets/images/Cartas/Copas/2.png');
	this.load.image('13', 'assets/images/Cartas/Copas/3.png');
	this.load.image('14', 'assets/images/Cartas/Copas/4.png');
	this.load.image('15', 'assets/images/Cartas/Copas/5.png');
	this.load.image('16', 'assets/images/Cartas/Copas/6.png');
	this.load.image('17', 'assets/images/Cartas/Copas/7.png');
	this.load.image('18', 'assets/images/Cartas/Copas/10.png');
	this.load.image('19', 'assets/images/Cartas/Copas/11.png');
	this.load.image('20', 'assets/images/Cartas/Copas/12.png');	
	
	this.load.image('21', 'assets/images/Cartas/Espadas/1.png');
	this.load.image('22', 'assets/images/Cartas/Espadas/2.png');
	this.load.image('23', 'assets/images/Cartas/Espadas/3.png');
	this.load.image('24', 'assets/images/Cartas/Espadas/4.png');
	this.load.image('25', 'assets/images/Cartas/Espadas/5.png');
	this.load.image('26', 'assets/images/Cartas/Espadas/6.png');
	this.load.image('27', 'assets/images/Cartas/Espadas/7.png');
	this.load.image('28', 'assets/images/Cartas/Espadas/10.png');
	this.load.image('29', 'assets/images/Cartas/Espadas/11.png');
	this.load.image('30', 'assets/images/Cartas/Espadas/12.png');	

	this.load.image('31', 'assets/images/Cartas/Bastos/1.png');
	this.load.image('32', 'assets/images/Cartas/Bastos/2.png');
	this.load.image('33', 'assets/images/Cartas/Bastos/3.png');
	this.load.image('34', 'assets/images/Cartas/Bastos/4.png');
	this.load.image('35', 'assets/images/Cartas/Bastos/5.png');
	this.load.image('36', 'assets/images/Cartas/Bastos/6.png');
	this.load.image('37', 'assets/images/Cartas/Bastos/7.png');
	this.load.image('38', 'assets/images/Cartas/Bastos/10.png');
	this.load.image('39', 'assets/images/Cartas/Bastos/11.png');
	this.load.image('40', 'assets/images/Cartas/Bastos/12.png');	
	
	this.load.image('SOPWHPQINK', 'assets/images/Bocadillo_D.png');	
	this.load.image('RTHPPBTCQJ', 'assets/images/Bocadillo_R.png');	
	this.load.image('LFDEDJWAOF', 'assets/images/Bocadillo_U.png');	
	this.load.image('PASYDHNYGP', 'assets/images/Bocadillo_L.png');	
//	this.load.image('Estallido', 'assets/images/estallido_amarillo.png');	
//	this.load.image('Estallido_40', 'assets/images/estallido_turquesa.png');	
	this.load.image('Reverso', 'assets/images/Cartas/Reversos/reverso.png');	
	this.load.image('Maquina', 'assets/images/Cartas/Reversos/maquina.jpg');	
	this.load.image('IRQGAFESIC', 'assets/images/Cartas/Tapetes/tapete.png');	
	this.load.image('Las_40', 'assets/images/las 40.png');	
	this.load.image('20_oros', 'assets/images/20 oros.png');	
	this.load.image('20_copas', 'assets/images/20 copas.png');	
	this.load.image('20_espadas', 'assets/images/20 espadas.png');	
	this.load.image('20_bastos', 'assets/images/20 bastos.png');	
	
	this.load.image('FondoPrincipal', 'assets/images/fondo_principal.png');	
	this.load.image('Boton_solo', 'assets/images/Botones/jugar_solo.png');	
	this.load.image('Boton_online', 'assets/images/Botones/jugar_online.png');	
	this.load.image('Boton_amigos', 'assets/images/Botones/jugar_con_amigos.png');	
	this.load.image('Boton_bar1', 'assets/images/Botones/jugar_bar_1.png');	
	this.load.image('Boton_aleatorio', 'assets/images/Botones/jugar_mundo.png');	
	this.load.image('Boton_cambiar_7_on', 'assets/images/cambiar 7.png');	
	this.load.image('Boton_cambiar_7_off', 'assets/images/cambiar 7 gris.png');	
	this.load.image('Boton_cantar_on', 'assets/images/cantar.png');	
	this.load.image('Boton_cantar_off', 'assets/images/cantar gris.png');	
	//this.load.image('Boton_chat_on', 'assets/images/chat.png');	
	//this.load.image('Boton_chat_off', 'assets/images/chat gris.png');	
	this.load.image('XJARYUVBCB', 'assets/images/desconectado.png');	
	this.load.image('Conectado', 'assets/images/conectado.png');	
	this.load.image('Copa', 'assets/images/copa.png');	
	this.load.image('Perder', 'assets/images/perder.png');	
	this.load.image('Boton_Salir', 'assets/images/salir.png');	
	
	console.log("ANTES");
	this.load.audio('VKEJRPCHKN',['assets/sounds/reparto.wav', 'assets/sounds/reparto.mp3']);
	this.load.audio('LFWPDMQYKH', ['assets/sounds/mesa.ogg','assets/sounds/mesa.mp3']);
	console.log("DESPUES");
	



	this.load.audio('BHLJBCKLKE', ['assets/sounds/cantes/20_oros.ogg','assets/sounds/cantes/20_oros.mp3']);
	this.load.audio('SFVDEVFFCR', ['assets/sounds/cantes/20_copas.ogg','assets/sounds/cantes/20_copas.mp3']);
	this.load.audio('KMBKTLXURD', ['assets/sounds/cantes/20_espadas.ogg','assets/sounds/cantes/20_espadas.mp3']);
	this.load.audio('Snd20Bastos', ['assets/sounds/cantes/20_bastos.ogg','assets/sounds/cantes/20_bastos.mp3']);
	this.load.audio('DPCNHOBNRM', ['assets/sounds/cantes/las_40.ogg','assets/sounds/cantes/las_40.mp3']);
	this.load.audio('GMKJKKAKMH', ['assets/sounds/cantes/las_40_2.ogg','assets/sounds/cantes/las_40_2.mp3']);
	
	this.load.audio('UHKVCVBOMD', ['assets/sounds/idas.ogg', 'assets/sounds/idas.mp3']);
	this.load.audio('LKGDBLGIEP', ['assets/sounds/vueltas.ogg','assets/sounds/vueltas.mp3']);
	this.load.audio('VPGBDEHDIT', ['assets/sounds/a_por_ellos.ogg','assets/sounds/a_por_ellos.mp3']);
	this.load.audio('KFDIGGAMBI', ['assets/sounds/arrastro.ogg','assets/sounds/arrastro.mp3']);
	this.load.audio('SndArrastro2', ['assets/sounds/arrastro_2.ogg','assets/sounds/arrastro_2.mp3']);
	this.load.audio('DPIDINSQVF', ['assets/sounds/bocarrana.ogg','assets/sounds/bocarrana.mp3']);
	this.load.audio('GERQISACAV', ['assets/sounds/campeones.ogg','assets/sounds/campeones.mp3']);
	this.load.audio('TSXDMBDDID', ['assets/sounds/contar.ogg','assets/sounds/contar.mp3']);
	this.load.audio('VLVITFRSLA', ['assets/sounds/coto_terminado.ogg','assets/sounds/coto_terminado.mp3']);
	this.load.audio('LSQGNFJBGH', ['assets/sounds/espadilla.ogg','assets/sounds/espadilla.mp3']);
	this.load.audio('CVJDMGILKI', ['assets/sounds/ore.ogg','assets/sounds/ore.mp3']);
	this.load.audio('NEKUUPJKUV', ['assets/sounds/otra_vez.ogg','assets/sounds/otra_vez.mp3']);
	this.load.audio('MIKBDMVLOR', ['assets/sounds/tabazo.ogg','assets/sounds/tabazo.mp3']);
	this.load.audio('SndTabazo2', ['assets/sounds/tabazo_2.ogg','assets/sounds/tabazo_2.mp3']);
	this.load.audio('JDPOTVNRCT', ['assets/sounds/matanza_caballo.ogg','assets/sounds/matanza_caballo.mp3']);
	//this.load.audio('PDSPWPACWB', ['assets/sounds/mata_companero.ogg','assets/sounds/mata_companero.mp3']);


	
	//this.load.bitmapFont('Clarent', 'assets/fonts/clarent_0.png', 'assets/fonts/clarent.fnt');
	
	


	//this.load.image('image-url',  'http://www.w3school.com.cn/i/ct_html5_canvas_image.gif' )
	//this.load.crossOrigin = "Anonymous"
	//this.load.image('image-url', 'http://i.imgur.com/0LINzxs.jpg');
	
	
	//this.load.image('Bocadillo3', 'assets/images/FTBVKLREAE arriba1.png');	
	
	this.load.spritesheet('spr_cantar', 'assets/buttons/button_sprite_sheet.png', 193, 71);
	
	//this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

	
	/*this.load.image("gameover", "http://i221.photobucket.com/albums/dd22/djmid71/gameover_zpse663rlsp.png");
    this.load.image("tryagain", "http://i221.photobucket.com/albums/dd22/djmid71/tryagain_zpszyvxhs8m.png");
    this.load.image("yes", "http://i221.photobucket.com/albums/dd22/djmid71/yes_zpsfppqya7h.png");
    this.load.image("no", "http://i221.photobucket.com/albums/dd22/djmid71/no_zpsnjisaare.png");*/
	
	
	/*	
	WebFontConfig = {

		//  'active' means all requested fonts have finished loading
		//  We set a 1 second delay before calling 'createText'.
		//  For some reason if we don't the browser cannot render the text the first time it's created.
		active: function() { this.time.events.add(Phaser.TKXPPGUPVV.SECOND, createText, this); },

		//  The Google Fonts we want to load (specify as many as you like in the Array)
		google: {
		  families: ['Fontdiner Swanky','Finger Paint']
		}

	};
	*/
};

Preload.prototype.create = function() {
	this.game.state.start("Menu");
};
