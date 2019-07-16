'use strict';
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
	//this.time.desiredFps=30;
	//console.log(this)
	
	/*this.time.advancedTiming=true; 
	this.time.msMin=400
	this.time.msMax=500
	this.time.suggestedFps=30 
	this.time.timeToCall =10000*/
	//this.multiTexture=true;
	//this.time.desiredFps=30 
	//YMHIHSNADE.time.desiredFpsMult =3000; 
	//this.time.fpsMin=15;
	//this.time.fpsMax=30;
	

	
	var preloadBar = this.add.image(this.world.centerX, this.world.centerY,	'loading');
	preloadBar.anchor.set(0.5, 0.5);
	this.load.setPreloadSprite(preloadBar);

	// Here we load the rest of the assets our game needs.
	//this.load.pack("start", "assets/assets-pack.json");
	//this.load.pack("level", "assets/assets-pack.json");

	this.load.bitmapFont('MiFuenteAmarilla', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
	this.load.bitmapFont('MiFuenteNegra', 'assets/fonts/fontblack.png', 'assets/fonts/fontblack.fnt');
	this.load.bitmapFont('MiFuenteRoja', 'assets/fonts/fontred.png', 'assets/fonts/fontred.fnt');
	
	////console.log("antes pro");
	this.load.atlas('baraja_pro', 'assets/images/Cartas/baraja_pro.png', 'assets/images/Cartas/baraja_pro.json',Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	////console.log("despues pro");
	this.load.atlas('baraja_guinarte', 'assets/images/Cartas/baraja_guinarte.png', 'assets/images/Cartas/baraja_guinarte.json',Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	////console.log("antes general");
	this.load.atlas('general', 'assets/images/general.png', 'assets/images/general.json',Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	
	this.load.atlas('emoticonos_server', 'assets/images/emoticonos_server.png', 'assets/images/emoticonos_server.json',Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	

////console.log(this.cache.checkImageKey('publi'));
	//this.load.atlas('publi', 'assets/images/publi.png', 'assets/images/publi.json',Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	////console.log(this.cache.checkImageKey('publi'));

	
	
	
	////console.log("despues general");

	//this.load.image('Emoticono1', 'assets/images/emoticonos/emoticono1.png');	
	
	this.load.image('Reverso', 'assets/images/Cartas/Reversos/reverso.png',true);	
	this.load.image('JHGHJAGCMC', 'assets/images/Cartas/Reversos/maquina.jpg');	
	this.load.image('IRQGAFESIC', 'assets/images/Cartas/Tapetes/tapete.jpg');	
	this.load.image('Tapete_43', 'assets/images/Cartas/Tapetes/tapete_43.jpg');	
	


	/*this.load.image('A01', 'assets/images/Cartas/pro/Oros/1.png',true);
	this.load.image('A02', 'assets/images/Cartas/pro/Oros/2.png',true);
	this.load.image('A03', 'assets/images/Cartas/pro/Oros/3.png',true);
	this.load.image('A04', 'assets/images/Cartas/pro/Oros/4.png',true);
	this.load.image('A05', 'assets/images/Cartas/pro/Oros/5.png',true);
	this.load.image('A06', 'assets/images/Cartas/pro/Oros/6.png',true);
	this.load.image('A07', 'assets/images/Cartas/pro/Oros/7.png',true);
	this.load.image('A08', 'assets/images/Cartas/pro/Oros/10.png',true);
	this.load.image('A09', 'assets/images/Cartas/pro/Oros/11.png',true);
	this.load.image('A10', 'assets/images/Cartas/pro/Oros/12.png',true);
	
	this.load.image('A11', 'assets/images/Cartas/pro/Copas/1.png',true);
	this.load.image('A12', 'assets/images/Cartas/pro/Copas/2.png',true);
	this.load.image('A13', 'assets/images/Cartas/pro/Copas/3.png',true);
	this.load.image('A14', 'assets/images/Cartas/pro/Copas/4.png',true);
	this.load.image('A15', 'assets/images/Cartas/pro/Copas/5.png',true);
	this.load.image('A16', 'assets/images/Cartas/pro/Copas/6.png',true);
	this.load.image('A17', 'assets/images/Cartas/pro/Copas/7.png',true);
	this.load.image('A18', 'assets/images/Cartas/pro/Copas/10.png',true);
	this.load.image('A19', 'assets/images/Cartas/pro/Copas/11.png',true);
	this.load.image('A20', 'assets/images/Cartas/pro/Copas/12.png',true);	
	
	this.load.image('A21', 'assets/images/Cartas/pro/Espadas/1.png',true);
	this.load.image('A22', 'assets/images/Cartas/pro/Espadas/2.png',true);
	this.load.image('A23', 'assets/images/Cartas/pro/Espadas/3.png',true);
	this.load.image('A24', 'assets/images/Cartas/pro/Espadas/4.png',true);
	this.load.image('A25', 'assets/images/Cartas/pro/Espadas/5.png',true);
	this.load.image('A26', 'assets/images/Cartas/pro/Espadas/6.png',true);
	this.load.image('A27', 'assets/images/Cartas/pro/Espadas/7.png',true);
	this.load.image('A28', 'assets/images/Cartas/pro/Espadas/10.png',true);
	this.load.image('A29', 'assets/images/Cartas/pro/Espadas/11.png',true);
	this.load.image('A30', 'assets/images/Cartas/pro/Espadas/12.png',true);	

	this.load.image('A31', 'assets/images/Cartas/pro/Bastos/1.png',true);
	this.load.image('A32', 'assets/images/Cartas/pro/Bastos/2.png',true);
	this.load.image('A33', 'assets/images/Cartas/pro/Bastos/3.png',true);
	this.load.image('A34', 'assets/images/Cartas/pro/Bastos/4.png',true);
	this.load.image('A35', 'assets/images/Cartas/pro/Bastos/5.png',true);
	this.load.image('A36', 'assets/images/Cartas/pro/Bastos/6.png',true);
	this.load.image('A37', 'assets/images/Cartas/pro/Bastos/7.png',true);
	this.load.image('A38', 'assets/images/Cartas/pro/Bastos/10.png',true);
	this.load.image('A39', 'assets/images/Cartas/pro/Bastos/11.png',true);
	this.load.image('A40', 'assets/images/Cartas/pro/Bastos/12.png',true);	
	
	

	
	this.load.image('B01', 'assets/images/Cartas/guinarte/Oros/1.png',true);
	this.load.image('B02', 'assets/images/Cartas/guinarte/Oros/2.png',true);
	this.load.image('B03', 'assets/images/Cartas/guinarte/Oros/3.png',true);
	this.load.image('B04', 'assets/images/Cartas/guinarte/Oros/4.png',true);
	this.load.image('B05', 'assets/images/Cartas/guinarte/Oros/5.png',true);
	this.load.image('B06', 'assets/images/Cartas/guinarte/Oros/6.png',true);
	this.load.image('B07', 'assets/images/Cartas/guinarte/Oros/7.png',true);
	this.load.image('B08', 'assets/images/Cartas/guinarte/Oros/10.png',true);
	this.load.image('B09', 'assets/images/Cartas/guinarte/Oros/11.png',true);
	this.load.image('B10', 'assets/images/Cartas/guinarte/Oros/12.png',true);
	
	this.load.image('B11', 'assets/images/Cartas/guinarte/Copas/1.png',true);
	this.load.image('B12', 'assets/images/Cartas/guinarte/Copas/2.png',true);
	this.load.image('B13', 'assets/images/Cartas/guinarte/Copas/3.png',true);
	this.load.image('B14', 'assets/images/Cartas/guinarte/Copas/4.png',true);
	this.load.image('B15', 'assets/images/Cartas/guinarte/Copas/5.png',true);
	this.load.image('B16', 'assets/images/Cartas/guinarte/Copas/6.png',true);
	this.load.image('B17', 'assets/images/Cartas/guinarte/Copas/7.png',true);
	this.load.image('B18', 'assets/images/Cartas/guinarte/Copas/10.png',true);
	this.load.image('B19', 'assets/images/Cartas/guinarte/Copas/11.png',true);
	this.load.image('B20', 'assets/images/Cartas/guinarte/Copas/12.png',true);	
	
	this.load.image('B21', 'assets/images/Cartas/guinarte/Espadas/1.png',true);
	this.load.image('B22', 'assets/images/Cartas/guinarte/Espadas/2.png',true);
	this.load.image('B23', 'assets/images/Cartas/guinarte/Espadas/3.png',true);
	this.load.image('B24', 'assets/images/Cartas/guinarte/Espadas/4.png',true);
	this.load.image('B25', 'assets/images/Cartas/guinarte/Espadas/5.png',true);
	this.load.image('B26', 'assets/images/Cartas/guinarte/Espadas/6.png',true);
	this.load.image('B27', 'assets/images/Cartas/guinarte/Espadas/7.png',true);
	this.load.image('B28', 'assets/images/Cartas/guinarte/Espadas/10.png',true);
	this.load.image('B29', 'assets/images/Cartas/guinarte/Espadas/11.png',true);
	this.load.image('B30', 'assets/images/Cartas/guinarte/Espadas/12.png',true);	

	this.load.image('B31', 'assets/images/Cartas/guinarte/Bastos/1.png',true);
	this.load.image('B32', 'assets/images/Cartas/guinarte/Bastos/2.png',true);
	this.load.image('B33', 'assets/images/Cartas/guinarte/Bastos/3.png',true);
	this.load.image('B34', 'assets/images/Cartas/guinarte/Bastos/4.png',true);
	this.load.image('B35', 'assets/images/Cartas/guinarte/Bastos/5.png',true);
	this.load.image('B36', 'assets/images/Cartas/guinarte/Bastos/6.png',true);
	this.load.image('B37', 'assets/images/Cartas/guinarte/Bastos/7.png',true);
	this.load.image('B38', 'assets/images/Cartas/guinarte/Bastos/10.png',true);
	this.load.image('B39', 'assets/images/Cartas/guinarte/Bastos/11.png',true);
	this.load.image('B40', 'assets/images/Cartas/guinarte/Bastos/12.png',true);*/
	


	/*this.load.image('1', 'assets/images/Cartas/pro/Oros/1.png',true);
	this.load.image('2', 'assets/images/Cartas/pro/Oros/2.png',true);
	this.load.image('3', 'assets/images/Cartas/pro/Oros/3.png',true);
	this.load.image('4', 'assets/images/Cartas/pro/Oros/4.png',true);
	this.load.image('5', 'assets/images/Cartas/pro/Oros/5.png',true);
	this.load.image('6', 'assets/images/Cartas/pro/Oros/6.png',true);
	this.load.image('7', 'assets/images/Cartas/pro/Oros/7.png',true);
	this.load.image('8', 'assets/images/Cartas/pro/Oros/10.png',true);
	this.load.image('9', 'assets/images/Cartas/pro/Oros/11.png',true);
	this.load.image('10', 'assets/images/Cartas/pro/Oros/12.png',true);
	
	this.load.image('11', 'assets/images/Cartas/pro/Copas/1.png',true);
	this.load.image('12', 'assets/images/Cartas/pro/Copas/2.png',true);
	this.load.image('13', 'assets/images/Cartas/pro/Copas/3.png',true);
	this.load.image('14', 'assets/images/Cartas/pro/Copas/4.png',true);
	this.load.image('15', 'assets/images/Cartas/pro/Copas/5.png',true);
	this.load.image('16', 'assets/images/Cartas/pro/Copas/6.png',true);
	this.load.image('17', 'assets/images/Cartas/pro/Copas/7.png',true);
	this.load.image('18', 'assets/images/Cartas/pro/Copas/10.png',true);
	this.load.image('19', 'assets/images/Cartas/pro/Copas/11.png',true);
	
	this.load.image('20', 'assets/images/Cartas/pro/Copas/12.png',true);	
	this.load.image('21', 'assets/images/Cartas/pro/Espadas/1.png',true);
	this.load.image('22', 'assets/images/Cartas/pro/Espadas/2.png',true);
	this.load.image('23', 'assets/images/Cartas/pro/Espadas/3.png',true);
	this.load.image('24', 'assets/images/Cartas/pro/Espadas/4.png',true);
	this.load.image('25', 'assets/images/Cartas/pro/Espadas/5.png',true);
	this.load.image('26', 'assets/images/Cartas/pro/Espadas/6.png',true);
	this.load.image('27', 'assets/images/Cartas/pro/Espadas/7.png',true);
	this.load.image('28', 'assets/images/Cartas/pro/Espadas/10.png',true);
	this.load.image('29', 'assets/images/Cartas/pro/Espadas/11.png',true);
	this.load.image('30', 'assets/images/Cartas/pro/Espadas/12.png',true);	

	this.load.image('31', 'assets/images/Cartas/pro/Bastos/1.png',true);
	this.load.image('32', 'assets/images/Cartas/pro/Bastos/2.png',true);
	this.load.image('33', 'assets/images/Cartas/pro/Bastos/3.png',true);
	this.load.image('34', 'assets/images/Cartas/pro/Bastos/4.png',true);
	this.load.image('35', 'assets/images/Cartas/pro/Bastos/5.png',true);
	this.load.image('36', 'assets/images/Cartas/pro/Bastos/6.png',true);
	this.load.image('37', 'assets/images/Cartas/pro/Bastos/7.png',true);
	this.load.image('38', 'assets/images/Cartas/pro/Bastos/10.png',true);
	this.load.image('39', 'assets/images/Cartas/pro/Bastos/11.png',true);
	this.load.image('40', 'assets/images/Cartas/pro/Bastos/12.png',true);	*/
	
	/*
	this.load.image('SOPWHPQINK', 'assets/images/Bocadillo_D.png',true);	
	this.load.image('RTHPPBTCQJ', 'assets/images/Bocadillo_R.png',true);	
	this.load.image('LFDEDJWAOF', 'assets/images/Bocadillo_U.png',true);	
	this.load.image('PASYDHNYGP', 'assets/images/Bocadillo_L.png',true);	

	this.load.image('Reverso', 'assets/images/Cartas/Reversos/reverso.png',true);	
	this.load.image('JHGHJAGCMC', 'assets/images/Cartas/Reversos/maquina.jpg');	
	this.load.image('IRQGAFESIC', 'assets/images/Cartas/Tapetes/tapete.jpg');	
	this.load.image('Tapete_43', 'assets/images/Cartas/Tapetes/tapete_43.jpg');	
	this.load.image('Las_40', 'assets/images/las 40.png',true);	
	this.load.image('20_oros', 'assets/images/20 oros.png',true);	
	this.load.image('20_copas', 'assets/images/20 copas.png',true);	
	this.load.image('20_espadas', 'assets/images/20 espadas.png',true);	
	this.load.image('20_bastos', 'assets/images/20 bastos.png',true);	
	
	this.load.image('FondoPrincipal', 'assets/images/fondo_principal.png',true);	
	this.load.image('FondoPrincipal_43', 'assets/images/fondo_principal_43.png',true);	
	this.load.image('Boton_solo', 'assets/images/Botones/jugar_solo.png',true);	
	this.load.image('Boton_online', 'assets/images/Botones/jugar_online.png',true);	
	this.load.image('Boton_ranking', 'assets/images/Botones/boton_ranking.png',true);
	this.load.image('Boton_amigos', 'assets/images/Botones/jugar_con_amigos.png',true);	
	this.load.image('Boton_bar1', 'assets/images/Botones/jugar_bar_1.png',true);	
	this.load.image('Boton_aleatorio', 'assets/images/Botones/jugar_mundo.png',true);	
	this.load.image('Boton_cambiar_7_on', 'assets/images/cambiar 7.png',true);	
	this.load.image('Boton_cambiar_7_off', 'assets/images/cambiar 7 gris.png',true);	
	this.load.image('Boton_cantar_on', 'assets/images/cantar.png',true);	
	this.load.image('Boton_cantar_off', 'assets/images/cantar gris.png',true);	
	this.load.image('XJARYUVBCB', 'assets/images/desconectado.png',true);	
	this.load.image('Conectado', 'assets/images/conectado.png',true);	
	this.load.image('BMANCBQGIU', 'assets/images/copa.png',true);	
	this.load.image('Perder', 'assets/images/perder.png',true);	
	this.load.image('Boton_Salir', 'assets/images/salir.png',true);	
	this.load.image('Imagen_Turno', 'assets/images/imagen_turno.png',true);	
	this.load.image('Contacta', 'assets/images/contacta.png',true);	
	this.load.image('Boton_sonido_on', 'assets/images/sound_on.png',true);	
	this.load.image('Boton_sonido_off', 'assets/images/sound_off.png',true);	
	this.load.image('Boton_robots', 'assets/images/completar_robots.png',true);	
	this.load.image('Boton_micro_off', 'assets/images/micro_off.png',true);	
	this.load.image('Boton_micro_on', 'assets/images/micro_on.png',true);	
	this.load.image('Boton_escribir', 'assets/images/teclado.png',true);
	
	this.load.image('Ninja', 'assets/images/nivel_ninja.png',true);	
	this.load.image('Medalla', 'assets/images/medalla.png',true);	
	this.load.image('Mago', 'assets/images/nivel_mago.png',true);	
	this.load.image('PRO', 'assets/images/nivel_pro.png',true);	
	this.load.image('Diplomado', 'assets/images/nivel_diplomado.png',true);	
	this.load.image('SinLogro', 'assets/images/sin_logro.png',true);	
	
	this.load.image('negro', 'assets/images/negro.png',true);	
	this.load.image('negro_43', 'assets/images/negro_43.png',true);	*/
	
	if( window.plugins && window.plugins.NativeAudio )
	{
		
		
		LoadCordova('LFWPDMQYKH', 'assets/sounds/mesa.mp3');
		LoadCordova('VKEJRPCHKN','assets/sounds/reparto.mp3');
		LoadCordova('Snd20', 'assets/sounds/cantes/20.mp3');
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
		LoadCordova('HGJCHGAJGC', 'assets/sounds/chicos.mp3');
		LoadCordova('MSJIWCUWCU', 'assets/sounds/puntosaudio.mp3');
		LoadCordova('LOIYUIYIUC', 'assets/sounds/toro.mp3');
		
		LoadCordova('NSNSNSWGIU', 'assets/sounds/fuera_mesa.mp3');
		LoadCordova('LWHWUIWHIL', 'assets/sounds/atencion_profesionales.mp3');
		LoadCordova('UWYIUWJHGS', 'assets/sounds/caballo_encimador.mp3');
		LoadCordova('NNXHHWHWWW', 'assets/sounds/el_gafas.mp3');
		LoadCordova('UUUUDJWJAJ', 'assets/sounds/habiendo_pan.mp3');
		LoadCordova('UUQGJQGJAM', 'assets/sounds/hay_pros.mp3');
		LoadCordova('NXHWHHWQQE', 'assets/sounds/muerto_oficio.mp3');
		LoadCordova('OOUOIWJDDD', 'assets/sounds/quince_o_mas.mp3');
		LoadCordova('NBSMNBHWOW', 'assets/sounds/sindicato_dos_seguidas.mp3');
		LoadCordova('HJGWHJDGJP', 'assets/sounds/tu_cuenta.mp3');
		
		LoadCordova('PPPQIODKJA', 'assets/sounds/cremallera.mp3');
		LoadCordova('NMGIUEIWFE', 'assets/sounds/monedas.mp3');
		
		
		LoadCordova('SndPrimo', 'assets/sounds/primo.mp3');	
		LoadCordova('SndToco',  'assets/sounds/toco.mp3');	
		LoadCordova('SndTaustano',  'assets/sounds/taustano.mp3');	
		LoadCordova('SndNoSube',  'assets/sounds/nosube.mp3');	
		LoadCordova('SndSientate',  'assets/sounds/sientate.mp3');	
		LoadCordova('SndPensar',  'assets/sounds/pensar.mp3');	
		LoadCordova('SndNoSabes',  'assets/sounds/nosabes.mp3');	
		LoadCordova('SndNano',  'assets/sounds/nano.mp3');	
		LoadCordova('SndMejor',  'assets/sounds/mejor.mp3');	
		LoadCordova('SndGenial',  'assets/sounds/genial.mp3');	
		LoadCordova('SndDar', 'assets/sounds/dar.mp3');	
		LoadCordova('SndClases',  'assets/sounds/clases.mp3');	
		LoadCordova('Snd20Copas2', 'assets/sounds/copas.mp3');	
		LoadCordova('SndArtista', 'assets/sounds/artista.mp3');	
		LoadCordova('SndArrancao', 'assets/sounds/arrancao.mp3');
		
		
	}
	//else
	//{
		this.load.audio('PPPQIODKJA', ['assets/sounds/cremallera.ogg','assets/sounds/cremallera.mp3']);
		this.load.audio('NMGIUEIWFE', ['assets/sounds/monedas.ogg','assets/sounds/monedas.mp3']);
		
		
		this.load.audio('NSNSNSWGIU', ['assets/sounds/fuera_mesa.ogg','assets/sounds/fuera_mesa.mp3']);
		this.load.audio('LWHWUIWHIL', ['assets/sounds/atencion_profesionales.ogg','assets/sounds/atencion_profesionales.mp3']);
		this.load.audio('UWYIUWJHGS', ['assets/sounds/caballo_encimador.ogg','assets/sounds/caballo_encimador.mp3']);
		this.load.audio('NNXHHWHWWW', ['assets/sounds/el_gafas.ogg','assets/sounds/el_gafas.mp3']);
		this.load.audio('UUUUDJWJAJ', ['assets/sounds/habiendo_pan.ogg','assets/sounds/habiendo_pan.mp3']);
		this.load.audio('UUQGJQGJAM', ['assets/sounds/hay_pros.ogg','assets/sounds/hay_pros.mp3']);
		this.load.audio('NXHWHHWQQE', ['assets/sounds/muerto_oficio.ogg','assets/sounds/muerto_oficio.mp3']);
		this.load.audio('OOUOIWJDDD', ['assets/sounds/quince_o_mas.ogg','assets/sounds/quince_o_mas.mp3']);
		this.load.audio('NBSMNBHWOW', ['assets/sounds/sindicato_dos_seguidas.ogg','assets/sounds/sindicato_dos_seguidas.mp3']);
		this.load.audio('HJGWHJDGJP', ['assets/sounds/tu_cuenta.ogg','assets/sounds/tu_cuenta.mp3']);
	
	this.load.audio('VKEJRPCHKN',['assets/sounds/reparto.ogg', 'assets/sounds/reparto.mp3']);
	this.load.audio('LFWPDMQYKH', ['assets/sounds/mesa.ogg','assets/sounds/mesa.mp3']);
	this.load.audio('Snd20', ['assets/sounds/cantes/20.ogg','assets/sounds/cantes/20.mp3']);
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
		this.load.audio('HGJCHGAJGC', ['assets/sounds/chicos.ogg','assets/sounds/chicos.mp3']);
		this.load.audio('MSJIWCUWCU', ['assets/sounds/puntosaudio.ogg','assets/sounds/puntosaudio.mp3']);
		this.load.audio('LOIYUIYIUC', ['assets/sounds/toro.ogg','assets/sounds/toro.mp3']);	
		
		
		
		this.load.audio('SndPrimo', ['assets/sounds/primo.ogg','assets/sounds/primo.mp3']);	
		this.load.audio('SndToco', ['assets/sounds/toco.ogg','assets/sounds/toco.mp3']);	
		this.load.audio('SndTaustano', ['assets/sounds/taustano.ogg','assets/sounds/taustano.mp3']);	
		this.load.audio('SndNoSube', ['assets/sounds/nosube.ogg','assets/sounds/nosube.mp3']);	
		this.load.audio('SndSientate', ['assets/sounds/sientate.ogg','assets/sounds/sientate.mp3']);	
		this.load.audio('SndPensar', ['assets/sounds/pensar.ogg','assets/sounds/pensar.mp3']);	
		this.load.audio('SndNoSabes', ['assets/sounds/nosabes.ogg','assets/sounds/nosabes.mp3']);	
		this.load.audio('SndNano', ['assets/sounds/nano.ogg','assets/sounds/nano.mp3']);	
		this.load.audio('SndMejor', ['assets/sounds/mejor.ogg','assets/sounds/mejor.mp3']);	
		this.load.audio('SndGenial', ['assets/sounds/genial.ogg','assets/sounds/genial.mp3']);	
		this.load.audio('SndDar', ['assets/sounds/dar.ogg','assets/sounds/dar.mp3']);	
		this.load.audio('SndClases', ['assets/sounds/clases.ogg','assets/sounds/clases.mp3']);	
		this.load.audio('Snd20Copas2', ['assets/sounds/copas.ogg','assets/sounds/copas.mp3']);	
		this.load.audio('SndArtista', ['assets/sounds/artista.ogg','assets/sounds/artista.mp3']);	
		this.load.audio('SndArrancao', ['assets/sounds/arrancao.ogg','assets/sounds/arrancao.mp3']);
		
	
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
	
	
	//this.load.image('Bocadillo3', 'assets/images/FTBVKLREAE arriba1.png',true);	
	
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

function LoadCordova(Audio,RutaOrigen)
{
	//window.plugins.NativeAudio.preloadComplex(Audio, RutaOrigen, 1, 1, 0, function(msg){
	window.plugins.NativeAudio.preloadSimple(Audio, RutaOrigen, function(msg){	
	}, function(msg){
		//////console.log( 'error cargando: ' + Audio );
	});
}
Preload.prototype.create = function() {
	this.game.state.start("Menu");
};
