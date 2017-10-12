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
	//this.forceLandscaepe=true;
	//this.scale.forceOrientation(false, true);
	
	var preloadBar = this.add.sprite(this.world.centerX, this.world.centerY,
			"loading");
	preloadBar.anchor.set(0.5, 0.5);
	this.load.setPreloadSprite(preloadBar);

	// Here we load the rest of the assets our game needs.
	//this.load.pack("start", "assets/assets-pack.json");
	//this.load.pack("level", "assets/assets-pack.json");
	
	this.load.bitmapFont('MiFuenteAmarilla', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
	this.load.bitmapFont('MiFuenteNegra', 'assets/fonts/fontblack.png', 'assets/fonts/fontblack.fnt');
	 
	
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
	this.load.image('JHGHJAGCMC', 'assets/images/Cartas/Reversos/maquina.jpg');	
	this.load.image('IRQGAFESIC', 'assets/images/Cartas/Tapetes/tapete.jpg');	
	this.load.image('Tapete_43', 'assets/images/Cartas/Tapetes/tapete_43.jpg');	
	this.load.image('Las_40', 'assets/images/las 40.png');	
	this.load.image('20_oros', 'assets/images/20 oros.png');	
	this.load.image('20_copas', 'assets/images/20 copas.png');	
	this.load.image('20_espadas', 'assets/images/20 espadas.png');	
	this.load.image('20_bastos', 'assets/images/20 bastos.png');	
	
	this.load.image('FondoPrincipal', 'assets/images/fondo_principal.png');	
	this.load.image('FondoPrincipal_43', 'assets/images/fondo_principal_43.png');	
	this.load.image('Boton_solo', 'assets/images/Botones/jugar_solo.png');	
	this.load.image('Boton_online', 'assets/images/Botones/jugar_online.png');	
	this.load.image('Boton_ranking', 'assets/images/Botones/boton_ranking.png');
	this.load.image('Boton_amigos', 'assets/images/Botones/jugar_con_amigos.png');	
	this.load.image('Boton_bar1', 'assets/images/Botones/jugar_bar_1.png');	
	this.load.image('Boton_aleatorio', 'assets/images/Botones/jugar_mundo.png');	
	this.load.image('Boton_cambiar_7_on', 'assets/images/cambiar 7.png');	
	this.load.image('Boton_cambiar_7_off', 'assets/images/cambiar 7 gris.png');	
	this.load.image('Boton_cantar_on', 'assets/images/cantar.png');	
	this.load.image('Boton_cantar_off', 'assets/images/cantar gris.png');	
	this.load.image('XJARYUVBCB', 'assets/images/desconectado.png');	
	this.load.image('Conectado', 'assets/images/conectado.png');	
	this.load.image('Copa', 'assets/images/copa.png');	
	this.load.image('Perder', 'assets/images/perder.png');	
	this.load.image('Boton_Salir', 'assets/images/salir.png');	
	this.load.image('Imagen_Turno', 'assets/images/imagen_turno.png');	
	this.load.image('Contacta', 'assets/images/contacta.png');	
	this.load.image('Boton_sonido_on', 'assets/images/sound_on.png');	
	this.load.image('Boton_sonido_off', 'assets/images/sound_off.png');	
	this.load.image('Boton_robots', 'assets/images/completar_robots.png');	
	this.load.image('Boton_micro_off', 'assets/images/micro_off.png');	
	this.load.image('Boton_micro_on', 'assets/images/micro_on.png');	
	
	this.load.image('Ninja', 'assets/images/nivel_ninja.png');	
	this.load.image('Medalla', 'assets/images/medalla.png');	
	this.load.image('Mago', 'assets/images/nivel_mago.png');	
	this.load.image('PRO', 'assets/images/nivel_pro.png');	
	this.load.image('Diplomado', 'assets/images/nivel_diplomado.png');	
	this.load.image('SinLogro', 'assets/images/sin_logro.png');	
	
	if( window.plugins && window.plugins.NativeAudio )
	{
		
		
		LoadCordova('LFWPDMQYKH', 'assets/sounds/mesa.mp3');
		LoadCordova('VKEJRPCHKN','assets/sounds/reparto.mp3');
		LoadCordova('BHLJBCKLKE', 'assets/sounds/cantes/20_oros.mp3');
		LoadCordova('SFVDEVFFCR', 'assets/sounds/cantes/20_copas.mp3');
		LoadCordova('KMBKTLXURD', 'assets/sounds/cantes/20_espadas.mp3');
		LoadCordova('UIYIEWUHCI','assets/sounds/cantes/20_bastos.mp3');
		LoadCordova('DPCNHOBNRM', 'assets/sounds/cantes/las_40.mp3');
		LoadCordova('GMKJKKAKMH', 'assets/sounds/cantes/las_40_2.mp3');
		
		LoadCordova('UHKVCVBOMD', 'assets/sounds/idas.mp3');
		LoadCordova('LKGDBLGIEP','assets/sounds/vueltas.mp3');
		LoadCordova('VPGBDEHDIT', 'assets/sounds/a_por_ellos.mp3');
		LoadCordova('KFDIGGAMBI', 'assets/sounds/arrastro.mp3');
		LoadCordova('SndArrastro2','assets/sounds/arrastro_2.mp3');
		LoadCordova('DPIDINSQVF', 'assets/sounds/bocarrana.mp3');
		LoadCordova('GERQISACAV', 'assets/sounds/campeones.mp3');
		LoadCordova('TSXDMBDDID', 'assets/sounds/contar.mp3');
		LoadCordova('VLVITFRSLA', 'assets/sounds/coto_terminado.mp3');
		LoadCordova('LSQGNFJBGH', 'assets/sounds/espadilla.mp3');
		LoadCordova('CVJDMGILKI', 'assets/sounds/ore.mp3');
		LoadCordova('NEKUUPJKUV', 'assets/sounds/otra_vez.mp3');
		LoadCordova('MIKBDMVLOR', 'assets/sounds/tabazo.mp3');
		LoadCordova('SndTabazo2','assets/sounds/tabazo_2.mp3');
		LoadCordova('JDPOTVNRCT', 'assets/sounds/matanza_caballo.mp3');
		LoadCordova('JHGVBSHGIW', 'assets/sounds/idas2.mp3');
		LoadCordova('IUIUOPPWCC', 'assets/sounds/vueltas2.mp3');
		LoadCordova('JBCWHUIWCW', 'assets/sounds/grano.mp3');
		LoadCordova('NBIQIUICLA', 'assets/sounds/ultimas.mp3');
		
		LoadCordova('UIYIUHCWVX', 'assets/sounds/chatarrero.mp3');
		LoadCordova('UUYECMNSZZ', 'assets/sounds/chiflar.mp3');
		LoadCordova('ZZJJJUHIHI', 'assets/sounds/escupe.mp3');
		LoadCordova('LEUSNCUWAA', 'assets/sounds/faldas.mp3');
		LoadCordova('AAAAJKGHKC', 'assets/sounds/gorrion.mp3');
		LoadCordova('HKJHVUHWUO', 'assets/sounds/grijan.mp3');
		LoadCordova('BVUWCEFEGY', 'assets/sounds/guinote_otro.mp3');
		LoadCordova('NUSHIUSPKE', 'assets/sounds/mata_bocarrana.mp3');
		LoadCordova('UIYIUWCHCW', 'assets/sounds/monja.mp3');
		LoadCordova('AZZHJKWPLD', 'assets/sounds/pajaro.mp3');
		LoadCordova('HGJCHGAJGC', 'assets/sounds/primera_chicos.mp3');
		LoadCordova('MSJIWCUWCU', 'assets/sounds/puntosaudio.mp3');
		LoadCordova('LOIYUIYIUC', 'assets/sounds/toro.mp3');
		
		
	}
	//else
	//{
		

	
	this.load.audio('VKEJRPCHKN',['assets/sounds/reparto.ogg', 'assets/sounds/reparto.mp3']);
	this.load.audio('LFWPDMQYKH', ['assets/sounds/mesa.ogg','assets/sounds/mesa.mp3']);
	this.load.audio('BHLJBCKLKE', ['assets/sounds/cantes/20_oros.ogg','assets/sounds/cantes/20_oros.mp3']);
	this.load.audio('SFVDEVFFCR', ['assets/sounds/cantes/20_copas.ogg','assets/sounds/cantes/20_copas.mp3']);
	this.load.audio('KMBKTLXURD', ['assets/sounds/cantes/20_espadas.ogg','assets/sounds/cantes/20_espadas.mp3']);
	this.load.audio('UIYIEWUHCI', ['assets/sounds/cantes/20_bastos.ogg','assets/sounds/cantes/20_bastos.mp3']);
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
	
	this.load.audio('JHGVBSHGIW', ['assets/sounds/idas2.ogg','assets/sounds/idas2.mp3']);
	this.load.audio('IUIUOPPWCC', ['assets/sounds/vueltas2.ogg','assets/sounds/vueltas2.mp3']);
	this.load.audio('JBCWHUIWCW', ['assets/sounds/grano.ogg','assets/sounds/grano.mp3']);
	this.load.audio('NBIQIUICLA', ['assets/sounds/ultimas.ogg','assets/sounds/ultimas.mp3']);
	
	
		this.load.audio('UIYIUHCWVX', ['assets/sounds/chatarrero.ogg','assets/sounds/chatarrero.mp3']);
		this.load.audio('UUYECMNSZZ', ['assets/sounds/chiflar.ogg','assets/sounds/chiflar.mp3']);
		this.load.audio('ZZJJJUHIHI', ['assets/sounds/escupe.ogg','assets/sounds/escupe.mp3']);
		this.load.audio('LEUSNCUWAA', ['assets/sounds/faldas.ogg','assets/sounds/faldas.mp3']);
		this.load.audio('AAAAJKGHKC', ['assets/sounds/gorrion.ogg','assets/sounds/gorrion.mp3']);
		this.load.audio('HKJHVUHWUO', ['assets/sounds/grijan.ogg','assets/sounds/grijan.mp3']);
		this.load.audio('BVUWCEFEGY', ['assets/sounds/guinote_otro.ogg','assets/sounds/guinote_otro.mp3']);
		this.load.audio('NUSHIUSPKE', ['assets/sounds/mata_bocarrana.ogg','assets/sounds/mata_bocarrana.mp3']);
		this.load.audio('UIYIUWCHCW', ['assets/sounds/monja.ogg','assets/sounds/monja.mp3']);
		this.load.audio('AZZHJKWPLD', ['assets/sounds/pajaro.ogg','assets/sounds/pajaro.mp3']);
		this.load.audio('HGJCHGAJGC', ['assets/sounds/primera_chicos.ogg','assets/sounds/primera_chicos.mp3']);
		this.load.audio('MSJIWCUWCU', ['assets/sounds/puntosaudio.ogg','assets/sounds/puntosaudio.mp3']);
		this.load.audio('LOIYUIYIUC', ['assets/sounds/toro.ogg','assets/sounds/toro.mp3']);	
	
	//}
	
	/*else
	{
		
	this.load.audio('VKEJRPCHKN',['assets/sounds/reparto.wav', 'assets/sounds/reparto.mp3']);
	this.load.audio('LFWPDMQYKH', ['assets/sounds/mesa.wav','assets/sounds/mesa.mp3']);
	this.load.audio('BHLJBCKLKE', ['assets/sounds/cantes/20_oros.ogg','assets/sounds/cantes/20_oros.mp3']);
	this.load.audio('SFVDEVFFCR', ['assets/sounds/cantes/20_copas.ogg','assets/sounds/cantes/20_copas.mp3']);
	this.load.audio('KMBKTLXURD', ['assets/sounds/cantes/20_espadas.ogg','assets/sounds/cantes/20_espadas.mp3']);
	this.load.audio('UIYIEWUHCI', ['assets/sounds/cantes/20_bastos.ogg','assets/sounds/cantes/20_bastos.mp3']);
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
	
	}
	*/

	
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

LoadCordova=function(Audio,RutaOrigen)
{
	//window.plugins.NativeAudio.preloadComplex(Audio, RutaOrigen, 1, 1, 0, function(msg){
	window.plugins.NativeAudio.preloadSimple(Audio, RutaOrigen, function(msg){	
	}, function(msg){
		//console.log( 'error cargando: ' + Audio );
	});
}
Preload.prototype.create = function() {
	this.game.state.start("Menu");
};
