/**
 * Level state.
 */
function Level() {
	Phaser.State.call(this);
}




var proto = Object.create(Phaser.State);
Level.prototype = proto;


var vProduccion=true;

var Maquina;
if (vProduccion==true){
	Maquina='http://35.158.124.54'
	//Maquina='http://a.xn--guiotepro-n6a.es'
	//Maquina='http://xn--guiotepro-n6a.es:5000'
	//Maquina='http://54.93.97.50:5000'
}
else
{
	Maquina='http://localhost:5000'		
	//Maquina='http://192.168.1.100:5000'		
	//Maquina='http://192.168.43.100:5000'		
}

var vNoEsta;
var SocketInicializado=false
var FinalizandoPartida=false;
var bmd;
var game_objeto;
var vSonidoOn;
var FechaIni;
var FechaFin;
var IntentosReconexion=0;
var Version='1.0.8';
var lUsable=true;
var socket;
var SonVueltas=false;
var callbackweb;
var LogicalTapeteRemoto=false;
var LogicalDorsoRemoto=false;
//var LogicalNoticia=false;
var inputField;
var FuerzaSalir=false;
var Noticia;
var ContadorNoticia=0;
var AntiguoSocket="";

var PuntosGanar=101;
var PartidasCoto=3;
var TiempoIA=1500;//milisegundos
var Tiempoturno=20;//segundos
var BackFondo;
var BackTapete;
var ReversoGlobal;

var idPartida;

var Mazo=[];
var MazoEnviar=[];
var MazoEnviarApoyo=[];
var	MazoR=[];
var	MazoL=[];
var	MazoU=[];
var	MazoD=[];
var	Mazoposiciones=[];
var MazoCentral=[];
var MazoCentralApoyo=[];
var MazoCentralBuffer=[];
var MazoCentralBufferEspecial7=[];
var CartaTriunfo=[];
var MazoRecogido=[];
var MazoRecogidoApoyo=[];
var MazoRecogidoRival=[];
var UltimaBazaNuestra=[];
var UltimaBazaRival=[];
var ArrayDescartePosible=[];
var ModoMultijugador=false;
var EntradaModoJuego=false;
var	posX_D;
var	posY_D;
var posAngle_D;
var	posX_L;
var	posY_L;
var posAngle_L;
var	posX_R;
var	posY_R;
var posAngle_R;
var	posX_U;
var	posY_U;
var posAngle_U;
var RondaArrastre=4;
var vEscalaGanadora=1.5;
var vEscalaPequenas=0.9;
var vEscalaUltimaBaza=1;
var vEscaladoCarta=1.5;
var TiempoCartaGanadora=300; //500
var GrupoD;
var GrupoL;
var GrupoR;
var GrupoU;
var GrupoCentral;
var GrupoUltimaBaza;
var GrupoMazo;
var Grupo7;
var SemaforoCartaRecibida;

//OJO CON ESTOS ArrayS AL LIMPIAR VARIABLES
var ArrayDelaPropiaSala=[];
var ArrayChatDeshabilitado=[];
var ArrayJugadoresDesconectados=[];
var ArrayAccionesDesconexiones=[];
//var ArrayJugadoresDesconectadosID=[];
var SemaforoRondasRapido=[];
var SemaforoTextoPuntuacion=[];
var SemaforoRepartos=[];

var ArrayInfoJugador=[];
var ArrayOKParejas=[];
var QuienTomaElControl;
var PartidaComenzada=false;
var ObjTurnoU;
var ObjTurnoL;
var ObjTurnoD;
var ObjTurnoR;
var MuestraErrorDesconexion=true;

var ObjetoJugadoresRonda = function(RondaParam,Jugador){
	this.Ronda=RondaParam
	this.Jugador=Jugador
};
var SemaforoRondas=[];
var SemaforoAvatars=[];
var vRonda=1;
var RondaJugada=[];
var SiempreBocaArriba=false;
var textoContador;
var TextCuentaMundo;


var soyelprimero=false;
var vVerticalPorqueSi=0; //por algún motivo lo manda todo al 0
var vHorizontalPorqueSi=0;
var vVerticalDerechaPorqueSi=0;
var vHorizontalDerechaPorqueSi=0;
var vHorizontalIzquierdaPorqueSi=0;
var vSeparacion=15;
var Habitacion;
var vVelocidadCartas=150;//120
var SoyElJugador;
var vVelocidadCartasReordernar=250;
var vVelocidadRobar=350; 
//var QuienReparte=4;
var vTurno=1; //1.0.4
var Triunfo;
var tw1;
var tw2;
var tw3;
var tw4;
var twEsp7;
var twReu;
var twRec1;
var twRec2;
var twRec3;
var twText1;
var twText2;
var twText3;
var twText4;
var twBocadillo;
var MarcadorNuestro=0;
var MarcadorRival=0;
var MarcadorPartidasRival=0;
var MarcadorPartidasNuestro=0;
var BotonCantar;
var BazaNuestraGlobal=false;
var RegistrarCantes=[];
var BotonSiete;
var BotonMonoJugador;
var BotonMultiJugador;
var BotonAleatorio;
var BotonClasificacion;
var BotonAmigos;
var AnchoCarta=0;
var AnchoCartaEscalado=0;
//Phaser.Easing.Quadratic.Out;
//Phaser.Easing.Quartic;
var EfectoTween1=Phaser.Easing.Linear.Out;
var EfectoTween2=Phaser.Easing.Linear.Out;
var EfectoTweenRebote=Phaser.Easing.Bounce.Out;
var CentroIrreal=0;
var MuestraChat=false;
var MuestraLogin=false;
var AnchoFoto=75;
var timerturno;
var timerpareja;
var timerestoylisto;
var timer;
//var timerRetardo;
var timerBarajaRecibida;
var vConContador=true;
var textJugador1;
var textJugador2;
var textJugador3;
var textJugador4;

var Avatar1;
var Avatar2;
var Avatar3;
var Avatar4;

var AvatarSprite1;
var AvatarSprite2;
var AvatarSprite3;
var AvatarSprite4;

var AvatarMedalla1;
var AvatarMedalla2;
var AvatarMedalla3;
var AvatarMedalla4;

var AvatarLogro1;
var AvatarLogro2;
var AvatarLogro3;
var AvatarLogro4;


var deb;


var anchoPantalla=0;
var altoPantalla=0;

var textEsperando;
var textListos;
var textEligiendo;
var SndReparto;
var SndMesa;
var Snd20Oros;
var Snd20Copas;
var Snd20Espadas;
var Snd20Bastos;
var SndLas40;
var SndIdas;
var SndVueltas;
var SndLas40_2;
var SndAPorEllos;
var SndArrastro;
var SndArrastro_2;
var SndBocarrana;
var SndCampeones;
var SndContar;
var SndCotoTerminado;
var SndEspadilla;
var SndOre;
var SndMatanzaCaballo;
var SndMataCompanero;
var SndOtraVezSera;
var SndTabazo;
var SndTabazo_2;
var SndVueltas;
var SndIdas2;
var SndVueltas2;
var SndGrano;
var SndUltimas;
var xSalir;
var cuatrotres=false;

var SndChatarrero;
var SndChiflar;
var SndEscupe;
var SndFaldas;
var SndGorrion;
var SndGrijan;
var SndGuinoteOtro;
var SndMataBocarrana;
var SndMonja;
var SndPajaro;
var SndPrimeraChicos;
var SndPuntos;
var SndToro;	

//1.0.8 //Solo lPermisoDesconectado se modifica desde el servidor, sin que haga falta salir y entrar.
//var lPermisoHabilitado=true; //Controla usuarios que deshabilito
//var lVersionValida=true;
//var lPermisoDesconectado=true;
//1.0.8


var IntentaConexionInicial=true;
var TextMarcador;
var TextTituloMarcador
//var cambiar=1;

var ObjetoG;

var ObjetoDesconexion=function(Jugador,JugadorSala)
{
	this.Jugador=Jugador
	this.JugadorSala=JugadorSala
}


var ObjetoJugador = function(Nombre,Sexo,Foto,Dorso,Tapete,ProveedorID,RedSocial,Admin,VersionOK,VersionMensaje,Noticia,IP,ChatDisponible,Nivel,CampeonSemanal){
	this.Nombre=Nombre
	this.Sexo=Sexo
	this.Foto=Foto
	this.Dorso=Dorso
	this.Tapete=Tapete
	this.ProveedorID=ProveedorID
	this.RedSocial=RedSocial
	this.Admin=Admin
	this.VersionOK=VersionOK
	this.VersionMensaje=VersionMensaje
	this.Noticia=Noticia
	this.IP=IP
	this.ChatDisponible=ChatDisponible
	this.Nivel=Nivel
	this.CampeonSemanal=CampeonSemanal
	
	this.JugadorFull=ProveedorID+"-"+RedSocial;
	
};


function PosicionesCartas(Mazo,posicion,x,y) {

	this.Mazo=Mazo;
	this.posicion=posicion
	this.x=x;
    this.y=y;    
}

acelera=function(){
	//alert("acelera");
	//console.log("JJJ");
	//ReproducirSonido("_Copas");
}
Level.prototype.create=function(){

	//this.game.onPause.add(acelera, this); //1.0.8 Sobra
	//this.game.onResume.add(acelera, this);

	vSonidoOn=true;
//this.player1.graphic.beginFill(this.player1.color, 1);
//this.player1.graphic.drawRect(0, 0, this.player1.size, this.player1.size);
		
	//log(false, Math.floor(Math.random() * 360) + 1   );	
	game_objeto=this;
	
	Habitacion=Math.floor(Math.random());
	OcultaClasificacion();
	
	if (window.innerHeight/window.innerWidth<0.68)
	{	
		cuatrotres=false;
	}
	else
	{
		cuatrotres=true;
		vEscaladoCarta=1.7;
	}
	
	
	if( window.plugins)
	{
		window.plugins.googleplus.trySilentLogin(
				{
				 // 'scopes': '... ', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
				  //'webClientId': 'client id of the web app/server side', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
				  'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
				},
				function (obj) {
					ObjetoG=obj;	
				}
				,
				function (msg) {
				 }
		);
	}
////

/*now= new Date();
var timerborrar = game_objeto.time.create(false);
			timerborrar.add(5000, function(){
				now2= new Date();
				//console.log(now);
//console.log(now2);

//console.log(now2-now);
			}
			);
			timerborrar.start();
*/			

//
	
	/*this.myInput2 = this.createInput(550, 400);
    this.myInput2.anchor.set(0.5);
    this.myInput2.angle = -30;
    this.myInput2.canvasInput.value('Woww, lo necesitabamos!');*/
	
	//game_objeto.forceSetTimeOut=true;
	//Phaser.RequestAnimationFrame(game_objeto, false);
	//alert(isRAF());
	////

  

	
	////
	//console.log("Eo");
	//console.log(getMonday(new Date(Date.now())));

	SndReparto = game_objeto.add.audio('SndReparto');
	SndMesa = game_objeto.add.audio('SndMesa');
	Snd20Oros = game_objeto.add.audio('Snd20Oros');
	Snd20Copas = game_objeto.add.audio('Snd20Copas');
	Snd20Espadas = game_objeto.add.audio('Snd20Espadas');
	Snd20Bastos = game_objeto.add.audio('Snd20Bastos');
	SndLas40 = game_objeto.add.audio('SndLas40');
	SndLas40_2 = game_objeto.add.audio('SndLas40_2');
	SndIdas = game_objeto.add.audio('SndIdas');
	SndVueltas = game_objeto.add.audio('SndVueltas');
	SndAPorEllos = game_objeto.add.audio('SndAPorEllos');
	SndArrastro = game_objeto.add.audio('SndArrastro');
	SndArrastro_2 = game_objeto.add.audio('SndArrastro2');
	SndBocarrana = game_objeto.add.audio('SndBocarrana');
	SndCampeones = game_objeto.add.audio('SndCampeones');
	SndContar = game_objeto.add.audio('SndContar');
	SndCotoTerminado = game_objeto.add.audio('SndCotoTerminado');
	SndEspadilla = game_objeto.add.audio('SndEspadilla');
	SndOre = game_objeto.add.audio('SndOre');
	SndOtraVezSera = game_objeto.add.audio('SndOtraVezSera');
	SndTabazo = game_objeto.add.audio('SndTabazo');
	SndTabazo_2 = game_objeto.add.audio('SndTabazo2');
	SndMatanzaCaballo=game_objeto.add.audio('SndMatanzaCaballo');
	SndIdas2=game_objeto.add.audio('SndIdas2');
	SndVueltas2=game_objeto.add.audio('SndVueltas2');
	SndGrano=game_objeto.add.audio('SndGrano');
	SndUltimas=game_objeto.add.audio('SndUltimas');
	
	
	//1.0.6
		SndChatarrero=game_objeto.add.audio('SndChatarrero');
		SndChiflar=game_objeto.add.audio('SndChiflar');
		SndEscupe=game_objeto.add.audio('SndEscupe');
		SndFaldas=game_objeto.add.audio('SndFaldas');
		SndGorrion=game_objeto.add.audio('SndGorrion');
		SndGrijan=game_objeto.add.audio('SndGrijan');
		SndGuinoteOtro=game_objeto.add.audio('SndGuinoteOtro');
		SndMataBocarrana=game_objeto.add.audio('SndMataBocarrana');
		SndMonja=game_objeto.add.audio('SndMonja');
		SndPajaro=game_objeto.add.audio('SndPajaro');
		SndPrimeraChicos=game_objeto.add.audio('SndPrimeraChicos');
		SndPuntos=game_objeto.add.audio('SndPuntos');
		SndToro=game_objeto.add.audio('SndToro');	
	
	
	//1.0.6
	
	
	//SndMataCompanero= game_objeto.add.audio('SndMataCompanero');
	
	//console.log(game_objeto.sound.usingAudioTag);
	/*//console.log("No audio "+game_objeto.sound.noAudio);
	SndReparto.play();
	//console.log("Audio Tag: "+SndReparto.usingAudioTag);
	//console.log("WebAudio Tag: "+SndReparto.usingWebAudio);
	//console.log("Sonando: "+SndReparto.isPlaying);*/

	//PosicionCartas(false); //1.0.6
	
	LogicalTapeteRemoto=false;
	LogicalDorsoRemoto=false;
	//LogicalNoticia=false;
	//SndBatalla = game_objeto.add.audio('SndBatalla');
	//SndBatalla.play();
	//if (window.innerHeight/window.innerWidth<0.55)
	//{
		 anchoPantalla=1300;
		 altoPantalla=622;
		//console.log("PC");
		//var alto=300;
	//}
	//else
	//{
		//var ancho=window.innerWidth;
		//var alto=window.innerHeight;
		
	//	 anchoPantalla=1200;
	//	 altoPantalla=750;
	//	//console.log("IPAD");
	//}
	
	//BackFondo=this.game.add.tileSprite(0, 0, game_objeto.world.width, game_objeto.world.height, 'FondoPrincipal');
	
	
	if (cuatrotres==false)
	{
		BackTapete=this.game.add.tileSprite(0, 0, game_objeto.world.width, game_objeto.world.height, 'Tapete');
		BackFondo=game_objeto.add.sprite(0, 0, 'FondoPrincipal');
	}
	else
	{
		BackTapete=this.game.add.tileSprite(0, 0, game_objeto.world.width, game_objeto.world.height, 'Tapete_43');
		BackFondo=game_objeto.add.sprite(0, 0, 'FondoPrincipal_43');
	}


	
	BackFondo.visible=true;
	BackTapete.visible=false;
	
	

	
		var x=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*6)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+      (2 *(AnchoCartaEscalado+
	vSeparacion))+AnchoCarta;
	

	
	BotonSiete= game_objeto.add.button(x , game_objeto.world.height-45, 'Boton_cambiar_7_on', Cambiar7 , this, 2, 1, 0);
	BotonSiete.visible=false;	
	BotonSiete.anchor.setTo(0.5,0.5);
	BotonSiete.width=BotonSiete.width*1.2;
	BotonSiete.height=BotonSiete.height*1.2;
	
	xSalir=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*6)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+      (2 *(AnchoCartaEscalado+
	vSeparacion))+AnchoCarta+250;
	
	if (cuatrotres==true)
	{
		xSalir=xSalir+40;
	}
	
	/*	xSalir=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*6)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+      (19 *(AnchoCartaEscalado+
	vSeparacion))+AnchoCarta;
	*/
	
	BotonSalir= game_objeto.add.button(xSalir ,  game_objeto.world.height-45, 'Boton_Salir', Salir , this, 2, 1, 0);
	BotonSalir.visible=true;	
	BotonSalir.anchor.setTo(0.5,0.5);
	BotonSalir.width=BotonSalir.width*1.2;
	BotonSalir.height=BotonSalir.height*1.2;
	
	timerturno = game_objeto.time.create(false);
	timerpareja = game_objeto.time.create(false);
	timerestoylisto  = game_objeto.time.create(false); //1.0.6
	timerBarajaRecibida = game_objeto.time.create(false);
	
	timer = game_objeto.time.create(false);

					
	//timerRetardo = game_objeto.time.create(false);	
	
	
	textoContador = game_objeto.add.text(0, 0, "");
	
	tw1=game_objeto.add.tween(textoContador).to( { alpha: 1 }, 1, EfectoTween1, true);
	tw2=game_objeto.add.tween(textoContador).to( { alpha: 1 }, 1, EfectoTween1, true);
	tw3=game_objeto.add.tween(textoContador).to( { alpha: 1 }, 1, EfectoTween1, true);
	tw4=game_objeto.add.tween(textoContador).to( { alpha: 1 }, 1, EfectoTween1, true);
	
	GrupoD = game_objeto.add.group();
	GrupoL = game_objeto.add.group();
	GrupoR = game_objeto.add.group();
	GrupoU = game_objeto.add.group();
	GrupoMazo = game_objeto.add.group();
	GrupoCentral = game_objeto.add.group();
	GrupoUltimaBaza = game_objeto.add.group();
	Grupo7 = game_objeto.add.group();
	
	var CartaDummie=game_objeto.add.sprite(-200,-200,'1');
	AnchoCarta=CartaDummie.width;
	AltoCarta=CartaDummie.height;
	AnchoCartaEscalado=CartaDummie.width*vEscaladoCarta;
	AltoCartaEscalado=CartaDummie.height*vEscaladoCarta;
	CentroIrreal=((game_objeto.world.height-AltoCarta-AltoCartaEscalado+AnchoCarta)/2)+(AnchoCarta)-25;
	PosicionCartas("D");
	
	twBocadillo=game_objeto.add.tween(CartaDummie);
	twFondoNegro=game_objeto.add.tween(CartaDummie);
	twRec1=game_objeto.add.tween(CartaDummie);
	twRec2=game_objeto.add.tween(CartaDummie);
	twRec3=game_objeto.add.tween(CartaDummie);
	tw1=game_objeto.add.tween(CartaDummie);
	tw2=game_objeto.add.tween(CartaDummie);
	tw3=game_objeto.add.tween(CartaDummie);
	
	var styleJugador = { font: "bold 18px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
	textJugador1=game_objeto.add.text(0, 0, "",styleJugador);
	textJugador2=game_objeto.add.text(-100, -100, "", styleJugador);
	textJugador3=game_objeto.add.text(-100, -100, "", styleJugador);
	textJugador4=game_objeto.add.text(-100, -100, "", styleJugador);
	
	var styleMarcadorTitulo = { font: "bold 30px Arial", fill: "#fff", align: "right", boundsAlignH: "middle", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
	TextTituloMarcador=game_objeto.add.text(0, 0, "Ntros:\nEllos:", styleMarcadorTitulo);
	TextTituloMarcador.stroke = '#961918';
    TextTituloMarcador.strokeThickness = 4;
    TextTituloMarcador.fill = '#F8E600';		
	TextTituloMarcador.visible=false;
	TextTituloMarcador.setTextBounds(900,game_objeto.world.height-(AltoCartaEscalado*2),300,100)
	

	
	var styleMarcador = { font: "bold 30px Arial", fill: "#fff", boundsAlignH: "left", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
	TextMarcador=game_objeto.add.text(0, 0, "", styleMarcador);
	TextMarcador.visible=false;
	TextMarcador.stroke = '#961918';
    TextMarcador.strokeThickness = 4;
    TextMarcador.fill = '#F8E600';		
	TextMarcador.setTextBounds(990,game_objeto.world.height-(AltoCartaEscalado*2),300,100)
	
	
	
	/*var styleMarcador = { font: "bold 30px Arial", fill: "#fff", boundsAlignH: "left", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
	TextCuentaAmigos=game_objeto.add.text(100, 300, "", styleMarcador);
	TextCuentaAmigos.visible=false;
	TextCuentaAmigos.stroke = '#961918';
    TextCuentaAmigos.strokeThickness = 4;
    TextCuentaAmigos.fill = '#F8E600';		*/
	//TextCuentaAmigos.setTextBounds(990,game_objeto.world.height-(AltoCartaEscalado*2),300,100)

	var styleMarcador = { font: "bold 24px Arial", fill: "#fff", boundsAlignH: "right", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 5000};	
	TextCuentaMundo=game_objeto.add.text(0, 0, "", styleMarcador);
	TextCuentaMundo.visible=false;
	TextCuentaMundo.stroke = '#961918';
    TextCuentaMundo.strokeThickness = 4;
    TextCuentaMundo.fill = '#F8E600';		
	TextCuentaMundo.setTextBounds(15,15,game_objeto.world.width-120,100)
	

	
	BotonDIV= game_objeto.add.button(400, 0, 'spr_cantar', function(){ 
		MuestraOcultaChat();
	}, this, 2, 1, 0);
	BotonDIV.visible=false;
	
	/*BotonLoginDIV= game_objeto.add.button(700, 0, 'spr_cantar', function(){ 
		MuestraOcultaLogin();
	}, this, 2, 1, 0);
	BotonLoginDIV.visible=true;*/

	var x=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*6)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+      (0 *(AnchoCartaEscalado+
	vSeparacion))+AnchoCarta;
	
	BotonCantar= game_objeto.add.button(x, game_objeto.world.height-45, 'Boton_cantar_on', function(){ Cantar(SoyElJugador); }, this, 2, 1, 0);
	BotonCantar.visible=false;
	BotonCantar.anchor.setTo(0.5,0.5);
	BotonCantar.width=BotonCantar.width*1.2;
	BotonCantar.height=BotonCantar.height*1.2;

	
	
	BotonSonidoOn= game_objeto.add.button(50+vSeparacion, 110, 'Boton_sonido_on', SonidoOff, this, 2, 1, 0);;
	BotonSonidoOn.anchor.setTo(0.5,0.5)
	BotonSonidoOn.visible=false;
	BotonSonidoOff= game_objeto.add.button(50+vSeparacion, 110, 'Boton_sonido_off', SonidoOn, this, 2, 1, 0);;
	BotonSonidoOff.anchor.setTo(0.5,0.5)
	BotonSonidoOff.visible=false;
	
	
		//SndChatarrero.play();
		//SndChiflar.play();
		//SndEscupe.play();
		//SndFaldas.play();
		//SndGorrion.play();
		//SndGrijan.play();
		//SndGuinoteOtro.play();
		//SndMataBocarrana.play();
		//SndMonja.play();
		//SndPajaro.play();
		//SndPrimeraChicos.play();
		//SndPuntos.play();
		//SndToro.play();
	
	
	
	
	if (vSonidoOn==true)
	{
		BotonSonidoOn.visible=true;
		BotonSonidoOff.visible=false;
	}


    this.stage.backgroundColor = '#2d2d2d';

	this.lCartaEnviada=0;
	
	BotonBorrar= game_objeto.add.button(900, 0, 'spr_cantar', function(){ 
		DetenerTiempo();
	}, this, 2, 1, 0);
	BotonBorrar.visible=false;
	
	BotonParar= game_objeto.add.button(900, 0, 'spr_cantar', function(){ 
		DetenerTiempo();
	}, this, 2, 1, 0);
	BotonParar.visible=false;
	
	BotonMonoJugador= game_objeto.add.button(game_objeto.world.centerX - 120, game_objeto.world.height-170, 'Boton_solo', InicioMonoJugador, this, 2, 1, 0);
	BotonMonoJugador.visible=false;
	BotonMonoJugador.width=BotonMonoJugador.width;
	BotonMonoJugador.height=BotonMonoJugador.height;
	BotonMonoJugador.anchor.setTo(0.5,0.5)
	
	BotonContacta= game_objeto.add.button(game_objeto.world.width-100, game_objeto.world.height-30, 'Contacta', function(){LoginCordova(5)}, this, 2, 1, 0);
	BotonContacta.visible=false;
	BotonContacta.anchor.setTo(0.5,0.5)
	
	if (cuatrotres==true)
	{
		BotonMonoJugador.width=BotonMonoJugador.width*1.4;
		BotonMonoJugador.height=BotonMonoJugador.height*1.4;
		BotonMonoJugador.y=BotonMonoJugador.y-90;
		BotonMonoJugador.x=BotonMonoJugador.x-45;
	}
	
	BotonMultiJugador= game_objeto.add.button(game_objeto.world.centerX + 120, game_objeto.world.height-170, 'Boton_online', InicioMultiJugador, this, 2, 1, 0);;
	BotonMultiJugador.visible=false;
	BotonMultiJugador.width=BotonMultiJugador.width;
	BotonMultiJugador.height=BotonMultiJugador.height;
	BotonMultiJugador.anchor.setTo(0.5,0.5)
	
	if (cuatrotres==true)
	{
		BotonMultiJugador.width=BotonMultiJugador.width*1.4;
		BotonMultiJugador.height=BotonMultiJugador.height*1.4;
		BotonMultiJugador.y=BotonMultiJugador.y-90;
		BotonMultiJugador.x=BotonMultiJugador.x+45;
	}	
	
	//1.0.8
	BotonClasificacion= game_objeto.add.button(game_objeto.world.centerX + 420, game_objeto.world.centerY-100, 'Boton_ranking', SolicitaClasificacion, this, 2, 1, 0);;
	BotonClasificacion.visible=false;
	BotonClasificacion.width=BotonClasificacion.width;
	BotonClasificacion.height=BotonClasificacion.height;
	BotonClasificacion.anchor.setTo(0.5,0.5)
	
	if (cuatrotres==true)
	{
		BotonClasificacion.width=BotonClasificacion.width;
		BotonClasificacion.height=BotonClasificacion.height;
		BotonClasificacion.y=BotonClasificacion.y-110;
		BotonClasificacion.x=BotonClasificacion.x+70;
	}		
	//1.0.8
	
	BotonAleatorio= game_objeto.add.button(game_objeto.world.centerX -120 , game_objeto.world.height-170-1000, 'Boton_aleatorio', InicioMultiJugadorAleatorio, this, 2, 1, 0);
	BotonAleatorio.visible=false;
	BotonAleatorio.width=BotonAleatorio.width;
	BotonAleatorio.height=BotonAleatorio.height;
	BotonAleatorio.anchor.setTo(0.5,0.5)
	
	if (cuatrotres==true)
	{
		BotonAleatorio.width=BotonAleatorio.width*1.4;
		BotonAleatorio.height=BotonAleatorio.height*1.4;
		BotonAleatorio.y=BotonAleatorio.y-90;
		BotonAleatorio.x=BotonAleatorio.x-45;
	}
	
	BotonAmigos= game_objeto.add.button(game_objeto.world.centerX +120+1000 , game_objeto.world.height-170, 'Boton_amigos', InicioMultiJugadorAmigos, this, 2, 1, 0);;
	BotonAmigos.visible=false;
	BotonAmigos.width=BotonAmigos.width;
	BotonAmigos.height=BotonAmigos.height;
	BotonAmigos.anchor.setTo(0.5,0.5)
	
	if (cuatrotres==true)
	{
		BotonAmigos.width=BotonAmigos.width*1.4;
		BotonAmigos.height=BotonAmigos.height*1.4;
		BotonAmigos.y=BotonAmigos.y-90;
		BotonAmigos.x=BotonAmigos.x+45;
	}		
	
	
	
	BotonRobots= game_objeto.add.button(game_objeto.world.centerX+35  , game_objeto.world.centerY+150, 'Boton_robots', RellenarSala, this, 2, 1, 0);;
	BotonRobots.visible=false;
	BotonRobots.width=BotonRobots.width;
	BotonRobots.height=BotonRobots.height;
	BotonRobots.anchor.setTo(0.5,0.5)
	
	//1.0.8 Error de los 20
	bmd = game_objeto.add.bitmapData(game_objeto.world.width,game_objeto.world.height);
	bmd.ctx.beginPath();
	bmd.ctx.rect(0,0,game_objeto.world.width,game_objeto.world.height);
	bmd.ctx.fillStyle = '#000000';
	bmd.ctx.fill();
	//1.0.8
	
	ConfiguraPantallaInicio();

	//BotonCantar.visible=false;
	
	//console.log("ANTES INTENTA CONEXION");
	
	Noticia=game_objeto.add.button(x , game_objeto.world.height-45, 'Boton_cambiar_7_on', CerrarNoticia , this, 2, 1, 0);
	Noticia.visible=false;
	Noticia.anchor.setTo(0.5,0.5);
	Noticia.x=230;
	Noticia.y=-500;
	
	
	var x=devuelveX("U_C",0)-AnchoCarta;
	var y=devuelveY("U_C",0)+(AltoCarta/2)+(vSeparacion);
	if (cuatrotres==true)
	{
		y=y+15;
	}
	
	ObjTurnoU=game_objeto.add.sprite(x,y, 'Imagen_Turno');
	ObjTurnoU.anchor.setTo(0.5, 0.5)
	ObjTurnoU.visible=false;

	var x=devuelveX("L_C",0)+AnchoCarta;
	var y=devuelveY("L_C",0);

	if (cuatrotres==true)
	{
		x=x+15;
	}
	ObjTurnoL=game_objeto.add.sprite(x,y, 'Imagen_Turno');
	ObjTurnoL.anchor.setTo(0.5, 0.5)
	ObjTurnoL.visible=false;

	
	var x=devuelveX("R_C",0)-AnchoCarta;
	var y=devuelveY("L_C",0);

	if (cuatrotres==true)
	{
		x=x-15;
	}
	ObjTurnoR=game_objeto.add.sprite(x,y, 'Imagen_Turno');
	ObjTurnoR.anchor.setTo(0.5, 0.5);
	ObjTurnoR.visible=false;


	
	var x=devuelveX("U_C",0)-AnchoCarta;
	var y=game_objeto.world.height-AnchoCartaEscalado-AltoCartaEscalado+(vSeparacion);

	ObjTurnoD=game_objeto.add.sprite(x,y, 'Imagen_Turno');
	ObjTurnoD.anchor.setTo(0.5, 0.5)
	ObjTurnoD.visible=false;

	
	if (IntentaConexionInicial==true)
	{
		
		try
		{
			
			//console.log("Conecta: Llamada level")			
			ConectaServidor();
			if (socket.id!=undefined)
			{
					//alert("ko");			
				//socket.emit('enviar_peticion_publicidad', socket.id,Version) ;
				
				if (ArrayInfoJugador.length>0)
				{
					var JugadorPubli=ArrayInfoJugador[0].Nombre;
					var JugadorFullPubli=ArrayInfoJugador[0].ProveedorID + '-'+ ArrayInfoJugador[0].RedSocial;
					socket.emit('enviar_peticion_publicidad', socket.id,Version,ObjetoG) ;
				}
				else
				{
					socket.emit('enviar_peticion_publicidad', socket.id,Version,ObjetoG) ;
				}
				
				
				
				socket.emit('enviar validar version', Version);

			}
		}
		catch (e){};
		//console.log("INTENTA CONEXION");
		
		if(FuerzaSalir==false)
		{
			//console.log("Llamada level2")		
			LoginDesdeWeb();
		}
	}
	IntentaConexionInicial=true;
	FuerzaSalir=false;

	if (socket.id!=undefined)
	{
		socket.emit('solicita conectados');
	}
		
	

	textoContador.x=game_objeto.world.centerX;
	textoContador.y=game_objeto.world.centerY+30
	
	textoContador.anchor.set(0.5);
    textoContador.align = 'center';


    textoContador.font = 'Arial Black';
    textoContador.fontSize = 40;
    textoContador.fontWeight = 'bold';


    textoContador.stroke = '#961918';
    textoContador.strokeThickness = 7;
    textoContador.fill = '#F8E600';		
		
		
		
		
	textEsperando = game_objeto.add.text(game_objeto.world.centerX, game_objeto.world.centerY, 'Esperando jugadores');
	textEsperando.visible=false;
	//log(true,"Se crea el mensaje");
	
	textEsperando.anchor.set(0.5);
    textEsperando.align = 'center';


    textEsperando.font = 'Arial Black';
    textEsperando.fontSize = 60;
    textEsperando.fontWeight = 'bold';


    textEsperando.stroke = '#961918';
    textEsperando.strokeThickness = 15;
    textEsperando.fill = '#F8E600';
			
			
	textListos = game_objeto.add.text(game_objeto.world.centerX, game_objeto.world.centerY-50, 'Un momento por favor... Esperando al resto de compañeros.');
	textListos.visible=false;
	//log(true,"Se crea el mensaje");
	
	textListos.anchor.set(0.5);
    textListos.align = 'center';


    textListos.font = 'Arial Black';
    textListos.fontSize = 40;
    textListos.fontWeight = 'bold';


    textListos.stroke = '#961918';
    textListos.strokeThickness = 15;
    textListos.fill = '#F8E600';			
	textListos.wordWrap= true;
	textListos.wordWrapWidth=1000;	
	

	textEligiendo = game_objeto.add.text(game_objeto.world.centerX, game_objeto.world.centerY-50, 'Eligiendo pareja');
	textEligiendo.visible=false;
	//log(true,"Se crea el mensaje");
	
	textEligiendo.anchor.set(0.5);
    textEligiendo.align = 'center';


    textEligiendo.font = 'Arial Black';
    textEligiendo.fontSize = 40;
    textEligiendo.fontWeight = 'bold';


    textEligiendo.stroke = '#961918';
    textEligiendo.strokeThickness = 15;
    textEligiendo.fill = '#F8E600';			
	textEligiendo.wordWrap= true;
	textEligiendo.wordWrapWidth=1000;	
	
		inputField = game_objeto.add.inputField(10+vSeparacion, 25,{
		font: "20px Arial",
		height:30,
		width:200,
		padding:5,
		placeHolder: "¿algo que decir?",
		borderRadius: 6,
		zoom:false
		//blockInput:true,
		//focusOutOnEnter:false
		}
		);
		
		inputField.visible=false;

		//MostrarCrearSala();
	
	//deb=game_objeto.add.text(0, 0, "");
	
	//kio= game_objeto.add.sprite(100,530,'PRO');
	//kio2= game_objeto.add.sprite(145,530,'Medalla');
	//kio3= game_objeto.add.sprite(1210,530,'Mago');
	
	if (BotonMonoJugador.visible==true && BotonMultiJugador.visible==true)
	{
		BotonSalir.x=xSalir;
		BotonSalir.visible=false;
	}
	

	
};

SolicitaClasificacion=function()
{
	var JugadorFull;
	
	if (ArrayInfoJugador.length>0)
	{
		console.log("EO "+ArrayInfoJugador[0].JugadorFull)
		console.log("EO "+ArrayInfoJugador[0]);
		JugadorFull=ArrayInfoJugador[0].JugadorFull;
	}
	else
	{
		console.log("aa "+ArrayInfoJugador[0].JugadorFull)
		JugadorFull=null;
	}
	
	if (socket.id!=undefined)
	{
		
		socket.emit('solicita_clasificacion',socket.id,JugadorFull);	
	}
}

RellenarSala=function()
{
	if (ModoMultijugador==true)
	{
		if(socket.id!=undefined)
		{
			//console.log("llega a rellenar");
			socket.emit('rellenar sala',Habitacion,ArrayDelaPropiaSala[SoyElJugador-1].JugadorFull)
		}
	}
}

SonidoOff=function()
{
	vSonidoOn=false;
	BotonSonidoOn.visible=false;
	BotonSonidoOff.visible=true;
}

SonidoOn=function()
{
	vSonidoOn=true;
	BotonSonidoOn.visible=true;
	BotonSonidoOff.visible=false;
}

CerrarNoticia=function()
{
	Noticia.visible=false;
}

InicioMultiJugadorAmigos=function()
{
	
	/*if ( lPermisoHabilitado==false )
	{
		return false;
	}*/
	
	if (checkConnection()==true)
	{	
		CancelarAmigos();
		if (ModoMultijugador==true)
		{
			socket.emit('enviar peticion sala amigos') ;
		}
	}
}


GrabarResultado=function(mueve,Partida,IdasVueltas,Puntos,Veinte,Cuarenta,As,Tres)
{
	
	//mueve=SoyElJugador;

	if (ModoMultijugador==true)
	{
		var Desconectado=ArrayDelaPropiaSala[mueve-1].Desconectado;
		var Provider_Full=ArrayDelaPropiaSala[mueve-1].JugadorFull;
		var Name=ArrayDelaPropiaSala[mueve-1].Nombre;
		var Socket=ArrayDelaPropiaSala[mueve-1].JugadorSala;
		//console.log(mueve+" Mi Socket: "+Socket);
		var Sala=ArrayDelaPropiaSala[mueve-1].Sala;
		var Amigo=ArrayDelaPropiaSala[mueve-1].Amigo;
		var IP=ArrayDelaPropiaSala[mueve-1].IP;
		
		var Idas;

		if (IdasVueltas==true)
		{	
			Idas='v';
		}
		else
		{
			Idas='i';
		}
		
		//if (ArrayDelaPropiaSala[mueve-1].Desconectado==true)
		//{
		//	Idas='d';
		//}

		
		socket.emit('Enviar_Resultados',Provider_Full,Name,Socket,Sala,Partida,Idas,Desconectado,Puntos,Veinte,Cuarenta,As,Tres,Amigo,idPartida,IP)
	}
}

onSocketListaSalaAmigos=function(ListaAmigos)
{
	var i;
	var Mensaje="";
	
	CrearTablaSalas(ListaAmigos);
	
}

CrearTablaSalas=function(ListaAmigos)
{
	var i;
	var table = document.getElementById("TablaSalas");
	// Create an empty <tr> element and add it to the 1st position of the table:
	var row; 
	var cell1;
	var cell2;
	var cell3;
	
	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	
	//console.log("Tamaño amigos "+ListaAmigos.length);
	
	OcultarFacebook();

	//var tableRows = table.getElementsByTagName('tr');
	var rowCount = table.rows.length;
//alert(rowCount);
	for (var i = 1; i < rowCount; i++) {
	  
		table.deleteRow(1);
	}


	
	var d=document.getElementById('DivSalasAmigos');
	d.style.display = 'block';
	//d.style.zIndex=-100;
						
	for (i=0;i<=ListaAmigos.length-1;i++)
	{
		row=table.insertRow(i+1);
		//row.onclick = function(){alert(ListaAmigos[i].Sala);};
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
		cell3 = row.insertCell(2);
		cell3.style.display = 'none';
		//cell3 = row.insertCell(2);
		
		
		cell1.innerHTML = ListaAmigos[i].Sala;
		cell2.innerHTML = ListaAmigos[i].Creador;
		//cell3.innerHTML =  "<img src='" + Data[i].Usuario[0][0] + "' style='max-width:100%' >";
		cell3.innerHTML = (ListaAmigos[i].JugadorFull.substring(0, ListaAmigos[i].JugadorFull.indexOf('-',1))+46);
		//cell3.style.visibility = "hidden";
		
		row.onclick = (function() { // closure
            var cnt = i; // save the counter to use in the function
            return function() {
			MostrarPidePasswordSala(this.cells[0].innerHTML, this.cells[2].innerHTML)
			//InicioPartidaOnline(1,this.cells[2].innerHTML);
            //  alert("row"+cnt+" data="+this.cells[2].innerHTML);
			  
            }    
        })(i);
		
		
		
		
		//cell1.onclick=function(){alert(this.rowIndex);};
		
		//cell3.innerHTML = ListaAmigos[i].Sala;
		//cell3.style.visibility = "hidden";
		
		
	}
}

CerrarTablaSalas=function()
{
	Noticia.visible=false;
	var d=document.getElementById('DivSalasAmigos');
	d.style.display = 'none';
	
}

CerrarClasificacion=function()
{
	var d=document.getElementById('DivClasificacionContenedor');
	d.style.display = 'none';
	MostrarFacebook();
}

MostrarCrearSala=function(){
	
	var d=document.getElementById('DivCrearSala');
	document.getElementById("sala").value="";
	document.getElementById("pass").value=""
	d.style.display = 'block';
	//d.style.zIndex="101";
}


CerrarCrearSala=function(){
	
	var d=document.getElementById('DivCrearSala');
	d.style.display = 'none';
	//d.style.zIndex=-100;
}

MostrarSalir=function(VideoJuego)
{
	
	var Mensaje="";
	var TextoVideoJuego="";
	
	if (VideoJuego==true)
	{
		TextoVideoJuego=" del videojuego";
	}
	
	//OcultaPantallaLogin();
	
	if (ModoMultijugador==false)
	{
		Mensaje="¿Realmente desea Salir"+TextoVideoJuego+"?";
	}
	else
	{
		if (ArrayDelaPropiaSala!=undefined)
		{
			if (ArrayDelaPropiaSala.length!=4)
			{
				Mensaje="¿Realmente desea Salir"+TextoVideoJuego+"?";
			}
			else
			{
				Mensaje="¿Realmente desea Salir"+TextoVideoJuego+"? Salir Implica una derrota.";
			}
		}
		else
		{
			Mensaje="¿Realmente desea Salir"+TextoVideoJuego+"?";
		}
	}
	
	var a=document.getElementById("lblSalir") 
	//var b=a.labels[0];
	a.textContent = Mensaje;
	var d=document.getElementById('DivSalir');
	d.style.display = 'block';
	
	
}

MostrarElegirPareja=function(MuestraDIV)
{
	
	var i;
	var player1="";
	var player2="";
	var player3="";
	var idplayer1="";
	var idplayer2="";
	var idplayer3="";
	var vueltas=0;
	
	//console.log("Soy "+SoyElJugador)
		
	for (i=0;i<=ArrayDelaPropiaSala.length-1;i++)
	{
		//if (ArrayDelaPropiaSala[i].Desconectado==false || (ArrayDelaPropiaSala[i].Desconectado==true  && ArrayDelaPropiaSala[1].Desconectado==false ))
		//{
			if ((i+1)!=SoyElJugador)
			{
				if (vueltas==0)
				{
					player1=ArrayDelaPropiaSala[i].Nombre;
					idplayer1=ArrayDelaPropiaSala[i].JugadorSala;				
				}
				if (vueltas==1)
				{
					player2=ArrayDelaPropiaSala[i].Nombre;
					idplayer2=ArrayDelaPropiaSala[i].JugadorSala;				
				}
				if (vueltas==2)
				{
					player3=ArrayDelaPropiaSala[i].Nombre;
					idplayer3=ArrayDelaPropiaSala[i].JugadorSala;				
				}
				vueltas++;
			}
		//}
		
	}
	
	
	for (i=0;i<=ArrayDelaPropiaSala.length-1;i++)
	{
		//console.log("-----"+ArrayDelaPropiaSala[i].Desconectado);
	}
	
	var a=document.getElementById("lblPareja") 
	//var b=a.labels[0];
	a.textContent = "Elige a tu pareja";
	a=document.getElementById("Pareja1") 	
	a.style.display = 'inline-block';
	a=document.getElementById("Pareja2") 	
	a.style.display =  'inline-block';
	a=document.getElementById("Pareja3") 	
	a.style.display = 'inline-block';	
	
	
	a=document.getElementById("Pareja1") 
	//var b=a.labels[0];
	a.textContent = player1;
	
	//if (ArrayDelaPropiaSala[0].Desconectado==true && ArrayDelaPropiaSala[2].Desconectado==false)	{
	//	a.style.display = 'none';
	//}
	
	a=document.getElementById("Pareja2") 
	//var b=a.labels[0];
	a.textContent = player2;
	
	//if (ArrayDelaPropiaSala[1].Desconectado==true)
	//{
	//	a.style.display = 'none';
	//}
	
	a=document.getElementById("Pareja3") 
	//var b=a.labels[0];
	a.textContent = player3;	
	
	//if (ArrayDelaPropiaSala[2].Desconectado==true  && ArrayDelaPropiaSala[0].Desconectado==false)
	//{
	//	a.style.display = 'none';
	//}
	
	if (MuestraDIV==true)
	{	
		var d=document.getElementById('DivEligePareja');
		d.style.display = 'block';
		
		var TiempoParaturno=7;
		
		timerpareja.loop(1000, function(){	
		
			
		
			if (TiempoParaturno<=0)
			{
				timerpareja.stop();
				RespuestaPareja(2);
			}
			else
			{
				TiempoParaturno=TiempoParaturno-1;
			}
		
			
		});
		timerpareja.start();
		
	}
}

OcultarElegirPareja=function()
{
	timerpareja.stop();
	var d=document.getElementById('DivEligePareja');
	d.style.display = 'none';
}

MostrarFacebook=function()
{
	var d=document.getElementById('DivFace');
	d.style.display = 'inline-block';	
}

OcultarFacebook=function()
{
	var d=document.getElementById('DivFace');
	d.style.display = 'none';	
}

RespuestaPareja=function(Seleccion)
{
	var i;
	var ParejaOriginal;
	//OrdenEnSala
	var d=document.getElementById('DivEligePareja');
	d.style.display = 'none';
//JugadorSalaFalseado	
	
	if (SoyElJugador==1)
	{
		ParejaOriginal=3;
	
		if (Seleccion==1)
		{
			MiPareja=2;
		}
		if (Seleccion==2)
		{
			MiPareja=3;
		}
		if (Seleccion==3)
		{
			MiPareja=4;
		}
	}
	if (SoyElJugador==2)
	{
		ParejaOriginal=4;
		if (Seleccion==1)
		{
			MiPareja=1;
		}
		if (Seleccion==2)
		{
			MiPareja=3;
		}
		if (Seleccion==3)
		{
			MiPareja=4;
		}
	}
	if (SoyElJugador==3)
	{
		ParejaOriginal=1;
		if (Seleccion==1)
		{
			MiPareja=1;
		}
		if (Seleccion==2)
		{
			MiPareja=2;
		}
		if (Seleccion==3)
		{
			MiPareja=4;
		}		
	}
	if (SoyElJugador==4)
	{
		ParejaOriginal=2;
		if (Seleccion==1)
		{
			MiPareja=1;
		}
		if (Seleccion==2)
		{
			MiPareja=2;
		}
		if (Seleccion==3)
		{
			MiPareja=3;
		}		
	}	

	
	//console.log("Soy "+SoyElJugador+" Ha seleccionado: "+Seleccion+" Mi pareja "+MiPareja);
	
	
	var OrdenDelModificado=ArrayDelaPropiaSala[MiPareja-1].OrdenEnSala;
	//console.log("Orden del modificado "+OrdenDelModificado);
	

	//console.log("Pareja Original "+ParejaOriginal);
	ArrayDelaPropiaSala[MiPareja-1].OrdenEnSala=ParejaOriginal;
	
	
	ArrayDelaPropiaSala[ParejaOriginal-1].OrdenEnSala=OrdenDelModificado;


	ArrayDelaPropiaSala.sort(sort_by('OrdenEnSala', false, parseFloat));
	
	
	
	
	//Por ahora reparte siempre el último en entrar
	var ObjectSend=function( ArrayDelaPropiaSala,Habitacion, QuienReparte,NuevaPareja,
		IdMsg,ClientId,SalaID,Mensaje){
		 this.ArrayDelaPropiaSala=ArrayDelaPropiaSala
		 this.Habitacion=Habitacion
		 this.QuienReparte=QuienReparte
		 this.NuevaPareja=NuevaPareja

											 
		 this.IdMsg=IdMsg
		 this.ClientId=ClientId
		 this.SalaID=SalaID
		 this.Mensaje=Mensaje
		 
		 this.Fecha=new Date(Date.now());
	 }
	var ArrayAccionesDesconexionesLocal=[];
	ArrayAccionesDesconexionesLocal.splice(0,1000);

		
	var IdMsg=Math.random()*100000;
	var Objeto=new ObjectSend(ArrayDelaPropiaSala,Habitacion,4,MiPareja,
		IdMsg,socket.id,Habitacion,'enviar cambio parejas');
	ArrayAccionesDesconexiones.push(Objeto);
	ArrayAccionesDesconexionesLocal.push(Objeto);


	socket.emit('enviar cambio parejas',ArrayAccionesDesconexionesLocal[0],
	 function(idMensaje)
	 {			 
		EliminarColaMensajes(idMensaje,'enviar cambio parejas');
	 }
	);						
	ArrayAccionesDesconexionesLocal.splice(0,1000);	
	
	
	ArrayJugadoresDesconectados.splice(0,1000) //Importante no quitarlo. Al hacer los giros con el array de jugadores, hay que volver a calcular los desconectados y por eso se limpia el array
	//console.log("Llamada 1")
	CalculaControl();
	
}

CerrarSalir=function()
{
	var d=document.getElementById('DivSalir');
	d.style.display = 'none';
	//d.style.zIndex=-100;
}

RespuestaSalir=function(Respuesta)
{
	var a=document.getElementById("lblSalir") 
	var textomensaje=a.textContent;
	
	CerrarSalir();
	if (Respuesta==true)
	{
		if (textomensaje.search('videojuego')>=0) 
		{
			navigator.app.exitApp();
		}
		else
		{
			SalirConfirmado();
		}
	}
	else
	{
		//alert("Se queda");
	}
}

EliminarSalaDesdeCliente=function(SalaEliminar)
{
	socket.emit("enviar_eliminar_sala_amigo_cliente",SalaEliminar);
	CancelarAmigos();
}
MostrarPidePasswordSala=function(NombreSala,Residual)
{
	CerrarTablaSalas();	
	var d=document.getElementById('DivPasswordSala');
	document.getElementById("sala_pass").value=NombreSala;
	document.getElementById("pass_pass").value="";
	
	//console.log("Residual "+Residual.substring(0, Residual.length-2));
	//console.log("Residual2 "+ArrayInfoJugador[0].JugadorFull.substring(0, ArrayInfoJugador[0].JugadorFull.indexOf('-',1)+0));
	a=Residual.substring(0, Residual.length-2);
	b=ArrayInfoJugador[0].JugadorFull.substring(0, ArrayInfoJugador[0].JugadorFull.indexOf('-',1)+0);
	
	//console.log(a.length);
	//console.log(b.length);
	
	if (ArrayInfoJugador[0].Admin==true || ArrayInfoJugador[0].JugadorFull.substring(0, ArrayInfoJugador[0].JugadorFull.indexOf('-',1)+0)==   Residual.substring(0, Residual.length-2)  )
	{
		//console.log("MUESTRA");
		//document.getElementById("btnEliminarSala").style.visibility = "none";
		document.getElementById("btnEliminarSala").style.display = "inline-block";
	}
	else
	{
		//console.log("OCULTA");
		//document.getElementById("btnEliminarSala").style.visibility = "hidden";
		document.getElementById("btnEliminarSala").style.display = "none";
	}
	
	//document.getElementById("idSalaHidden").value="";	
	d.style.display = 'block';
	//d.style.zIndex="101";
	
}

CancelarAmigos=function()
{
	CerrarTablaSalas();	
	CerrarClasificacion();
	CerrarCrearSala();
	CerrarPidePasswordSala();
	OcultaPantallaLogin();
	//OcultarFacebook();
}
CerrarPidePasswordSala=function(idSalaAmigo)
{
		
	var d=document.getElementById('DivPasswordSala');
	d.style.display = 'none';
	//d.style.zIndex="101";
	
}

ValidaPasswordSala=function(Sala,Pass)
{
	socket.emit('enviar validar password', Sala, Pass) ;
	CerrarPidePasswordSala();
}

CrearSala=function(Sala,Pass)
{
	var JugadorCreador;
	var JugadorFull;
	
	if (Sala!="")
	{
		if (ModoMultijugador==true)
		{
			if (ArrayInfoJugador.length>0)
			{
				JugadorCreador=ArrayInfoJugador[0].Nombre;
				JugadorFull=ArrayInfoJugador[0].ProveedorID + '-'+ ArrayInfoJugador[0].RedSocial;
			}
			else
			{
				JugadorCreador="";
				JugadorFull="";
			}
			
			socket.emit('enviar sala nueva', Sala.substring(0,30), Pass.substring(0,30), JugadorCreador,JugadorFull) ;
			socket.emit('enviar peticion sala amigos') ;
		
		}
	}
	CerrarCrearSala();
}
ConfiguraPantallaInicio=function()
{
	
	BotonMonoJugador.visible=true;
	BotonMultiJugador.visible=true;
	BotonContacta.visible=true;
	TextCuentaMundo.visible=true;
	MostrarFacebook();
	BotonClasificacion.visible=true; //1.0.8
}

ConfiguraPantallaMultijugador=function()
{
	
	BotonAleatorio.visible=true;
	BotonAmigos.visible=true;
	TextCuentaMundo.visible=true;
	MostrarFacebook();
	
	//BotonSalir.visible=true;

	xAleatorio= game_objeto.world.centerX -120;
	yAleatorio=game_objeto.world.height-170;

	xAmigos= game_objeto.world.centerX +120; 
	yAmigos= game_objeto.world.height-170;


	if (cuatrotres==true)
	{
		//BotonAleatorio.width=BotonAleatorio.width*1.4;
		//BotonAleatorio.height=BotonAleatorio.height*1.4;
		//yAleatorio=BotonAleatorio.y-90;
		//xAleatorio=BotonAleatorio.x-45;
		yAleatorio=yAmigos-90;
		
	}
	
	if (cuatrotres==true)
	{
		//BotonAmigos.width=BotonAmigos.width*1.4;
		//BotonAmigos.height=BotonAmigos.height*1.4;
		//yAmigos=BotonAmigos.y-90;
		yAmigos=BotonAmigos.x+45;
		xAmigos=xAmigos+45;
	}	





	
	var twAmigo=game_objeto.add.tween(BotonAmigos).to( { x: xAmigos }, 400, EfectoTween2);
	twAmigo.start();

	var twAleatorio=game_objeto.add.tween(BotonAleatorio).to( { y: yAleatorio  }, 400, EfectoTween1);
	twAleatorio.start();
	

	
}


LoginCordova=function(Tipo)
{
	
	
	var TrucoNavegador=true;
	var ref;
	//console.log(window.cordova);
	var isCordovaApp = document.URL.indexOf('http://') === -1
		&& document.URL.indexOf('https://') === -1;
  
	if (isCordovaApp==false)
	{
		switch (Tipo){	
		
			case 1 :		
			ref = window.open(Maquina+'/auth/google', '_self');
					
			break;		
			
			case 2 :		
			ref = window.open(Maquina+'/auth/facebook', '_self');
			break;	
			
			case 3 :		
			ref = window.open(Maquina+'/auth/Instagram', '_self');
			break;	
			
			case 4 :		
			ref = window.open(Maquina+'/auth/Twitter', '_self');
			break;	
			
			case 5 :		
			TrucoNavegador=false;
			ref = window.open(Maquina+'/contacto');
			break;				
		}
	}
	else
	{
		switch (Tipo){	
		
			case 1 :		
			//ref = cordova.InAppBrowser.open(Maquina+'/auth/google', '_blank', 'location=no');
				TrucoNavegador=false;
			window.plugins.googleplus.login(
				{
				 // 'scopes': '... ', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
				  //'webClientId': 'client id of the web app/server side', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
				  'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
				},
				function (obj) {
				CierraPantallaLogin();	
				//ConfiguraPantallaInicio();
				ObjetoG=obj;				
				InicioMultiJugador();
				//socket.emit('enviar_peticion_modo_multijugador', Habitacion,socket.id, false,Version,ObjetoG) ;
				  //alert(JSON.stringify(obj)); // do something useful instead of alerting
				  //alert(obj);
				  /*alert(obj.email);
				  alert(obj.userId);
				  alert(obj.displayName);
				  alert(obj.familyName);
				  alert(obj.givenName);
				  alert(obj.imageUrl);*/
				  
				  /*alert(obj[0].email);
				  
					var a=JSON.stringify(obj);
					
					alert(a.email);
					alert(a[0].email);
					alert(a);*/
				},
				function (msg) {
				  alert('error: ' + msg);
				  CierraPantallaLogin();
				}
			);
			break;		
			
			case 2 :		
			ref = cordova.InAppBrowser.open(Maquina+'/auth/facebook', '_blank', 'location=no');
			break;	
			
			case 3 :		
			ref = cordova.InAppBrowser.open(Maquina+'/auth/Instagram', '_blank', 'location=no');
			break;	
			
			case 4 :		
			ref = cordova.InAppBrowser.open(Maquina+'/auth/Twitter', '_blank', 'location=no');
			break;	
			
			case 5 :		
			TrucoNavegador=false;
			ref = cordova.InAppBrowser.open(Maquina+'/contacto', '_blank', 'location=no');
			break;
		}
		
		if (TrucoNavegador==true)
		{
			ref.addEventListener('loadstop', function(e) {
			var loc = e.url;
			//when url is changed check if the url contains your specific callbackURL
			//console.log("LOC "+loc);
			//if (loc.search('http://xn--guiotepro-n6a.es/?callbackweb=g')>=0) {
			//alert("a");	
			if (loc.search('callbackweb')>=0) {	
				//alert("b");	
				//SalirDesdeLogueo();	
				//alert("c");
				//InicioMultiJugador();
				//ConfiguraPantallaMultijugador();
				//alert("d");
				//CierraPantallaLogin();
				//InicioMultiJugador(false);
				SalirConfirmado();
				ref.close();
				//InicioMultiJugador();
				//ConfiguraPantallaMultijugador();
			}
			});
		}
	}
	
	
	
	/*var myCallback = function(event) { alert(event.url); }
	ref.addEventListener('loadstart', myCallback);
	ref.removeEventListener('loadstart', myCallback);*/
	
}	
	
DetenerTiempo=function()
{
	// window.open("http://xn--guiotepro-n6a.es/auth/google", '_system', 'location=yes');
	timerturno.stop();
	log(true,"Es el Turno de "+vTurno+". Yo soy "+SoyElJugador);


}

MuestraOcultaChat=function()
{
	var d;
	if (MuestraChat==false)
	{
		d=document.getElementById('chat');
		d.style.display = 'block';
		/*d.style.zIndex=100;
		
		d.style.position = "absolute";
		d.style.left = game_objeto.world.x+'px';
		d.style.top = 10+'px';
		d.style.width =80+'px';*/
		
		
		MuestraChat=true;
	}
	else
	{
		var d=document.getElementById('chat');
		d.style.display = 'none';
		//d.style.zIndex=-1;

		
		
		MuestraChat=false;
	}
	
}


MuestraOcultaLogin=function()
{
	var d;
	if (MuestraChat==false)
	{
		d=document.getElementById('Login');
		d.style.display = 'block';
		/*d.style.zIndex=100;
		
		d.style.position = "relative";
		d.style.left = 130+'px';
		d.style.top = 30+'px';*/
		
		
		MuestraLogin=true;
	}
	else
	{
		var d=document.getElementById('Login');
		d.style.display = 'none';
		//d.style.zIndex=-1;
		MuestraLogin=false;
	}
	
}


MuestraPantallaLogin=function()
{
	var d;
	
		d=document.getElementById('Login');
		d.style.display = 'block';
		//d.style.zIndex=100;
		
		d.style.position = "absolute";
		//d.style.left = 30+'px';
		//d.style.top = 30+'px';		

}



TextoBocadillo=function(JugadorQueMueve,Texto,EsCante,puntos, desdeServer)
{
	var LongitudTexto;
	var posXBocadillo;
	var posYBocadillo;
	var text;
	var CorrectorX;
	var CorrectorY;
	var TextoSalida
	var twText;
	var twText2;
	var Bocadillo;
	var posXBocadilloTexto;
	var posYBocadilloTexto;
	var ImagenBocadillo;
	var i;
	var ChatDeshabilitado=false;
	var Letra=DevuelveUbicacionCarta(JugadorQueMueve);
	//console.log("Jugador que habla "+JugadorQueMueve+ " "+Letra)
	var ContinuaJugando=true;
	//////////////
//EsCante=true;	



	if (JugadorQueMueve==undefined)
	{
		return false;
	}

	if (EsCante==true)
	{
		

		
		
		//console.log("VOY A CANTAR");
		MuestraDorsoCante(JugadorQueMueve,Texto,puntos);
		if (EstaCantado(Texto)==false || desdeServer==false) // desdeServer: Tema de que canta el que tiene el control dos veces..
		{	
			RegistrarCantes.push(Texto)
			
			//console.log("Va a cantarrrrr")
			
			
			
			if(SoyElJugador==1) {
				if(JugadorQueMueve==2){
					if (puntos==20)
					{
						//DevolverTexto="El jugador de su derecha canta 20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su derecha canta las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("R",40);
					}
				}
				if(JugadorQueMueve==3){
					if (puntos==20)
					{
						//DevolverTexto="Su compañero canta 20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("N",20);
					}
					else
					{
						//DevolverTexto="Su compa�ero canta las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("N",40);
					}
				}		
				if(JugadorQueMueve==4){
					if (puntos==20)
					{
						//DevolverTexto="El jugador de su izquierda canta 20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su izquierda canta las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("R",40);
					}
				}	

				if(JugadorQueMueve==1){
					if (puntos==20)
					{
						//DevolverTexto="20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("N",20);
					}
					else
					{
						//DevolverTexto="Las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("N",40);
					}
				}				
			}

			if(SoyElJugador==2) {
				if(JugadorQueMueve==3){
					if (puntos==20)
					{
						//DevolverTexto="El jugador de su derecha canta 20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su derecha canta las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("R",40);
					}
				}
				if(JugadorQueMueve==4){
					if (puntos==20)
					{
						//DevolverTexto="Su compa�ero canta 20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("N",20);
					}
					else
					{
						//DevolverTexto="Su compa�ero canta las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("N",40);
					}
				}		
				if(JugadorQueMueve==1){
					if (puntos==20)
					{
						//DevolverTexto="El jugador de su izquierda canta 20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su izquierda canta las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("R",40);
					}
				}	

				if(JugadorQueMueve==2){
					if (puntos==20)
					{
						//DevolverTexto="20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("N",20);
					}
					else
					{
						//DevolverTexto="Las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("N",40);
					}
				}			
			}
			
				if(SoyElJugador==3) {
				if(JugadorQueMueve==4){
					if (puntos==20)
					{
						//DevolverTexto="El jugador de su derecha canta 20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su derecha canta las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("R",40);
					}
				}
				if(JugadorQueMueve==1){
					if (puntos==20)
					{
						//DevolverTexto="Su compa�ero canta 20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("N",20);
					}
					else
					{
						//DevolverTexto="Su compa�ero canta las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("N",40);
					}
				}		
				if(JugadorQueMueve==2){
					if (puntos==20)
					{
						//DevolverTexto="El jugador de su izquierda canta 20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su izquierda canta las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("R",40);
					}
				}	
				if(JugadorQueMueve==3){
					if (puntos==20)
					{
						//DevolverTexto="20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("N",20);
					}
					else
					{
						//DevolverTexto="Las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("N",40);
					}
				}			
			}
			
			if(SoyElJugador==4) {
				if(JugadorQueMueve==1){
					if (puntos==20)
					{
						//DevolverTexto="El jugador de su derecha canta 20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su derecha canta las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("R",40);
					}
				}
				if(JugadorQueMueve==2){
					if (puntos==20)
					{
						//DevolverTexto="Su compa�ero canta 20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("N",20);
					}
					else
					{
						//DevolverTexto="Su compa�ero canta las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("N",40);
					}
				}		
				if(JugadorQueMueve==3){
					if (puntos==20)
					{
						//DevolverTexto="El jugador de su izquierda canta 20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su izquierda canta las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("R",40);
					}
				}	
				if(JugadorQueMueve==4){
					if (puntos==20)
					{
						//DevolverTexto="20 en "+ texto;
						Texto="20 en "+Texto;
						ContinuaJugando=ActualizaMarcador("N",20);
					}
					else
					{
						//DevolverTexto="Las 40";
						Texto="Las 40";
						ContinuaJugando=ActualizaMarcador("N",40);
					}
				}			
			}
		}
	}

	
	//////////////
	
	//if (EsCante==false || (EsCante==true && ContinuaJugando==true))
	if ( (EsCante==false  ) || EsCante==true )
	{
		log(false,Texto);
		
		LongitudTexto=(Texto.length*27)/2
		
		ImagenBocadillo='20_espadas'; //1.0.8 Creo que es el error de algunos dispositivos
		var BocadilloTemp=game_objeto.add.sprite(-300,-300, ImagenBocadillo);
		var AltoBocadilloEstallido=BocadilloTemp.height;
		var AnchoBocadilloEstallido=BocadilloTemp.width;
		log(false,"ancho   ss "+BocadilloTemp.width);
		if (Letra=="D")
		{
			if (EsCante==false)
			{
				posXBocadillo=devuelveX("D",0)-AnchoCartaEscalado+150;
				posYBocadillo=devuelveY("D",0)-AltoCartaEscalado*1.2;
				posXBocadilloTexto=posXBocadillo+20;
				posYBocadilloTexto=posYBocadillo+20;			
			}
			else
			{
				
				
				posXBocadillo=game_objeto.world.centerX; //(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*6)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+(AnchoCartaEscalado*1.5);
				posYBocadillo=game_objeto.world.height-(AnchoCartaEscalado*2);
				
				if (twBocadillo.isRunning==true)
				{
					posXBocadillo=posXBocadillo+200;
					log(false,"CORRIENDO");
				}

				
				posXBocadilloTexto=posXBocadillo+(AnchoBocadilloEstallido*2.7);
				posYBocadilloTexto=posYBocadillo+(AltoBocadilloEstallido*1.8);	
				

				
				
				
			}

			ImagenBocadillo= 'BocadilloD';

		}	
		if (Letra=="U")
		{
			if (EsCante==false)
			{
				
				posXBocadillo=devuelveX("U",0);
				posYBocadillo=devuelveY("U",0)+(AltoCarta/2);			
				posXBocadilloTexto=posXBocadillo+20;
				posYBocadilloTexto=posYBocadillo+45;
			}	
			else
			{
							
				posXBocadillo=game_objeto.world.centerX; //(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*6)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+(AnchoCartaEscalado*1.5);
				posYBocadillo=(AltoCarta)*1.5;	

				if (twBocadillo.isRunning==true)
				{
					posXBocadillo=posXBocadillo+200;
				}
				
				posXBocadilloTexto=posXBocadillo+(AnchoBocadilloEstallido*2.7);
				posYBocadilloTexto=posYBocadillo+(AltoBocadilloEstallido*1.8);	
				
			}

			ImagenBocadillo= 'BocadilloU';

		}
		if (Letra=="L")
		{
			if (EsCante==false)
			{
				posXBocadillo=devuelveX("L",0)+(AnchoCarta/2);
				posYBocadillo=devuelveY("L",0)-AnchoCarta+100;		
				posXBocadilloTexto=posXBocadillo+20;
				posYBocadilloTexto=posYBocadillo+20;			
			}
			else
			{
				posXBocadillo=(AnchoCarta*2.5);
				//posYBocadillo=game_objeto.world.height/2-AnchoCarta;
				posYBocadillo=game_objeto.world.centerY;
				
				if (twBocadillo.isRunning==true)
				{
					posYBocadillo=posYBocadillo+100;
				}
				
				posXBocadilloTexto=posXBocadillo+(AnchoBocadilloEstallido*2.7);
				posYBocadilloTexto=posYBocadillo+(AltoBocadilloEstallido*1.8);	
			}

			ImagenBocadillo= 'BocadilloL';
		}
		if (Letra=="R")
		{
			
			if (EsCante==false)
			{
				posXBocadillo=devuelveX("R",0)-(AltoCarta*2.3);
				posYBocadillo=devuelveY("R",0)-100;		
				posXBocadilloTexto=posXBocadillo+20;
				posYBocadilloTexto=posYBocadillo+45;
			}
			else
			{
				posXBocadillo=game_objeto.world.width-(AnchoCarta*2.5);
				//posYBocadillo=game_objeto.world.height/2-AnchoCarta;	
				posYBocadillo=game_objeto.world.centerY;
				
				if (twBocadillo.isRunning==true)
				{
					posYBocadillo=posYBocadillo+100;
				}
				posXBocadilloTexto=posXBocadillo+(AnchoBocadilloEstallido*2.7);
				posYBocadilloTexto=posYBocadillo+(AltoBocadilloEstallido*1.8);					
			}
			ImagenBocadillo= 'BocadilloR';
		}	
		
		if (EsCante==true){
			if (puntos==20)
			{
				ImagenBocadillo='Estallido';
				if (Texto.indexOf('oros')>0)
				{
					ImagenBocadillo='20_oros';
					ReproducirSonido("_Oros");
				}
				
				if (Texto.indexOf('copas')>0)
				{
					ImagenBocadillo='20_copas';
					ReproducirSonido("_Copas");
				}
				
				if (Texto.indexOf('espadas')>0)
				{
					ImagenBocadillo='20_espadas';
					ReproducirSonido("_Espadas");
				}
				
				if (Texto.indexOf('bastos')>0)
				{
					ImagenBocadillo='20_bastos';
					ReproducirSonido("_Bastos");
				}
			}
			else
			{
				//ImagenBocadillo='Estallido_40';
				ImagenBocadillo='Las_40';
				ReproducirSonido("_Las40");
			}
			
			//1.0.8
			if(navigator.vibrate) {
				window.navigator.vibrate(300);
			}
			
			
			log(false,"posicion Bocadillo: "+posXBocadillo);
			
			
			
			//var bmd = game_objeto.add.bitmapData(game_objeto.world.width-100,game_objeto.world.height-100);
			//var bmd = game_objeto.make.bitmapData(300,300);
			 

			// draw to the canvas context like normal
		
			//1.0.8
			/*bmd.ctx.beginPath();
			bmd.ctx.rect(0,0,game_objeto.world.width,game_objeto.world.height);
			bmd.ctx.fillStyle = '#000000';
			bmd.ctx.fill();*/
		
			// use the bitmap data as the texture for the sprite

		
		

			//Bocadillo.bringToTop;
			//var style = { font: "bold 17px Arial", wordWrap: true, wordWrapWidth: Bocadillo.width-10 };
			
			
			
			//text = game_objeto.add.text(posXBocadilloTexto, posYBocadilloTexto , Texto, style);
			//text.alpha=0;
							
			 //1.0.8
			if (twFondoNegro.isRunning==false)
			{
				var FondoNegro = game_objeto.add.sprite(0, 0, bmd);
				FondoNegro.alpha=0.7;
				
				twFondoNegro = game_objeto.add.tween(FondoNegro).to( { alpha: 0.7 }, 1000, EfectoTween1, true);
				twFondoNegro.onComplete.add(  function(){
						twFondoNegro = game_objeto.add.tween(FondoNegro).to( { alpha: 0 }, 500, EfectoTween1, true,1000,0);
					}
				);
			}
			
			
			Bocadillo=game_objeto.add.sprite(posXBocadillo,posYBocadillo, ImagenBocadillo);
			Bocadillo.anchor.setTo(0.5, 0.5);

			//Bocadillo.bringToTop;
			twBocadillo = game_objeto.add.tween(Bocadillo).to( { alpha: 1 }, 1000, EfectoTween1, true);
			twBocadillo.onComplete.add(  function(){
					twBocadillo = game_objeto.add.tween(Bocadillo).to( { alpha: 0 }, 500, EfectoTween1, true,1000,0);
				}
			);
			
			
			/*twText2 = game_objeto.add.tween(text).to( { alpha: 1 }, 1500, EfectoTween1, true);
			twText2.onComplete.add(  function(){
					twText2 = game_objeto.add.tween(text).to( { alpha: 0 }, 1500, EfectoTween1, true,2000,0);
				}
			
			);*/
			

			
		}
		else
		{
			
			for (i=0; i<=ArrayChatDeshabilitado.length-1;i++)
			{
				if(ArrayChatDeshabilitado[i]==Letra)
				{
					ChatDeshabilitado=true;
				}
				
			}	
			
			if (ChatDeshabilitado==false)
			{
				Bocadillo=game_objeto.add.sprite(posXBocadillo,posYBocadillo, ImagenBocadillo);

				var style = { font: "bold 21px Arial", wordWrap: true, wordWrapWidth: Bocadillo.width-14 };
				
				
				
				text = game_objeto.add.text(posXBocadilloTexto, posYBocadilloTexto , Texto, style);
				text.alpha=0;
				
				twText = game_objeto.add.tween(Bocadillo).to( { alpha: 1 }, 1500, EfectoTween1, true);
				twText.onComplete.add(  function(){
						twText = game_objeto.add.tween(Bocadillo).to( { alpha: 0 }, 1500, EfectoTween1, true,2000,0);
					}
				
				);
				
				twText2 = game_objeto.add.tween(text).to( { alpha: 1 }, 1500, EfectoTween1, true);
				twText2.onComplete.add(  function(){
						twText2 = game_objeto.add.tween(text).to( { alpha: 0 }, 1500, EfectoTween1, true,2000,0);
					}
				
				);
			}
		}
	}
	
	
}

EnviarTextoBocadillo=function(SoyElJugador,Texto,EsCante)
{
	Texto=Texto.substring(0,60)
	inputField.resetText();
	TextoBocadillo(SoyElJugador,Texto,EsCante)
	if (ModoMultijugador==true && EsCante==false)
	{
		socket.emit('enviar texto', Texto,Habitacion,SoyElJugador) ;
	}
}

ConectaServidor=function()
{
	
	/*try
	{
		MuestraErrorDesconexion=false;
		socket.disconnect();
		console.log("Desconecta el socket ");
		console.log("Estado del socket "+socket.id);
		
	}
	catch(err)
	{
		MuestraErrorDesconexion=true;
	}*/
	//console.log("Entra a conectar");
	try
	{
		if (socket.id==undefined)
		{
			//console.log("Se mete a conectar");
			socket = io.connect(Maquina,{reconnection: true,  reconnectionDelay: 3000,
				reconnectionDelayMax : 4000,
				reconnectionAttempts: 2,
				'max reconnection attempts' : 2,
				ForceNew : false,
				connect_timeout : 5000,
				timeout :5000
				//'connection timeout':5000
				//timeout :5
				// transports: ['websocket'],
				//'force new connection': true
			}
			);
			//AntiguoSocket
			SocketInicializado=false;
			//console.log("inicia setevent proxima");
			//if (SocketInicializado==false)
			//{
			//	console.log("inicia setevent");
			//	SocketInicializado=true;
				setEventHandlers();				
			//}
			
		}
	}
	catch(err) 
	{
		try
		{
			if (socket==undefined)
			{
			//console.log("Se mete a conectar 2");
			socket = io.connect(Maquina,{reconnection: true,  reconnectionDelay: 3000,
				reconnectionDelayMax : 4000,
				reconnectionAttempts: 2,
				'max reconnection attempts' : 2,
				ForceNew : false,
				connect_timeout : 5000,
				timeout :5000
				//'connection timeout':5000
				//timeout :5
				//transports: ['websocket']
				//'force new connection': true
			}
			);
			
			//SocketInicializado=false;
			//if (SocketInicializado==false)
			//{
			//	SocketInicializado=true;
				setEventHandlers();				
			//}
				
			}
		}
		catch(err){
			//console.log("Problema reconectando");
		}
	}
	//console.log("Intento de reconexión "+IntentosReconexion);

}
InicioMultiJugador=function(NoConectar){
	
	/*if ( lPermisoHabilitado==false )
	{
		return false;
	}*/
	
	
	if (checkConnection()==true)
	{	
		//console.log("inicio si");
		IntentosReconexion=0;
		BotonSalir.x=xSalir+150;
		BotonSalir.visible=true;
		//SocketInicializado=false;
		//console.log("Conecta: Llamada InicioMultiJugador")		
	
		/*if (socket.id!=undefined)
		{
			MuestraErrorDesconexion=false;
			try
			{
				socket.disconnect();
				socket=null; 
				Habitacion=Math.floor(Math.random());
			}
			catch(e){}
		}*/
		
		if (NoConectar!=true) //Creaba sockets sin conocimiento
		{
			ConectaServidor();
		}
		
		vTurno=1; //1.0.4
		BotonMonoJugador.visible=false;
		BotonMultiJugador.visible=false;
		//BotonClasificacion.visible=false; //1.0.8
		BotonContacta.visible=false;
		//BotonAleatorio.visible=false;
		//BotonAmigos.visible=false;
		
		ModoMultijugador=true;
		
		LimpiarVariables();
		LimpiarVariablesConexionNueva();
		log(true,"Entra en multijugador");
		
		
		BotonCantar.loadTexture('Boton_cantar_off', 0);		
		BotonSiete.loadTexture('Boton_cambiar_7_off', 0);	
		//log(false,User);

		//console.log("J");
		TextCuentaMundo.visible=true;
		//TextCuentaMundo.text="KK";
		
		
		if (socket.id!=undefined)
		{
			//console.log("Arriba");
			socket.emit('enviar_peticion_modo_multijugador', Habitacion,socket.id, false,Version,ObjetoG) ;
			//socket.emit('solicita_clasificacion',socket.id);
			socket.emit('solicita conectados');
		
		}
		/*else 1.0.8
		{
			//console.log("Abajo");
			console.log("Conecta: Llamada InicioMultiJugador2 ");			
			ConectaServidor();
			
		}*/

	}
	else
	{
		//console.log("inicio no");
	}
}

InicioPartidaOnline=function(Modalidad,Sala)
{
	//OcultarFacebook(); //1.0.8
	BotonClasificacion.visible=false;
	Noticia.visible=false;
	BotonSalir.visible=true;
	//1.0.8 BotonSalir.x=xSalir;
	
	vTurno=1; //1.0.4

	CancelarAmigos();
	
	if (socket.id!=undefined)
	{
		socket.emit('enviar_peticion_partida', socket.id, true,Modalidad,Sala,Version,ObjetoG) ; //0: Aleatorio  1: Amigos
	}
}

InicioMultiJugadorAleatorio=function()
{
	
	/*if ( lPermisoHabilitado==false )
	{
		return false;
	}*/
	
	if (checkConnection()==true)
	{	
		InicioPartidaOnline(0,false);//Aleatorio
	}
}

LoginDesdeWeb=function(){

		var callbackweb = getUrlVars()["callbackweb"];
		//alert(callbackweb);
		if (callbackweb=="g#" || callbackweb=="g")
		{
			//alert("entra");
			SocketInicializado=false;
			//console.log("Conecta: Llamada LoginDesdeWeb");			
			InicioMultiJugador(true);
		}

}

InicioMonoJugador=function(){
	
	/*if ( lVersionValida==false )
	{
		return false;
	}*/

	ConectaServidor();
	
	//if (lUsable==true)
	//{
		BotonMonoJugador.visible=false;
		BotonMultiJugador.visible=false;
		BotonClasificacion.visible=false; //1.0.8
		BotonContacta.visible=false;
		BotonAleatorio.visible=false;
		BotonAmigos.visible=false;
		TextCuentaMundo.visible=false;
		
		
		ModoMultijugador=false;
		
		LimpiarVariables();
		LimpiarVariablesConexionNueva();	
		
		
		SoyElJugador=1;
		PartidaComenzada=true;
		
		BackFondo.visible=false;
		BackTapete.visible=true;
			
		CrearBaraja(4); //ILA QuienReparte
		//PreparaCaracteristicasMano()
		
		
		BotonCantar.loadTexture('Boton_cantar_off', 0);		
		BotonSiete.loadTexture('Boton_cambiar_7_off', 0);		
	//}
	//else
	//{
	//	onSocketMensajeServidor("Versión Obsoleta. Actualícese.",false);
		
	//}

}



textoturno=function() {
	var DevolverTexto;
	
	if (ModoMultijugador==false)
	{
		log(false,"vTurno en Devolver texto: "+vTurno)
		if(SoyElJugador==1) {
			if(vTurno==2){
				DevolverTexto="Es el turno del jugador de su derecha"
			}
			if(vTurno==3){
				DevolverTexto="Es el turno de su compañero"
			}		
			if(vTurno==4){
				DevolverTexto="Es el turno del jugador de su izquierda"
			}			
		}

		if(SoyElJugador==2) {
			if(vTurno==3){
				DevolverTexto="Es el turno del jugador de su derecha"
			}
			if(vTurno==4){
				DevolverTexto="Es el turno de su compañero"
			}		
			if(vTurno==1){
				DevolverTexto="Es el turno del jugador de su izquierda"
			}			
		}	
		
		if(SoyElJugador==3) {
			if(vTurno==4){
				DevolverTexto="Es el turno del jugador de su derecha"
			}
			if(vTurno==1){
				DevolverTexto="Es el turno de su compañero"
			}		
			if(vTurno==2){
				DevolverTexto="Es el turno del jugador de su izquierda"
			}			
		}	

		if(SoyElJugador==4) {
			if(vTurno==1){
				DevolverTexto="Es el turno del jugador de su derecha"
			}
			if(vTurno==2){
				DevolverTexto="Es el turno de su compañero"
			}		
			if(vTurno==3){
				DevolverTexto="Es el turno del jugador de su izquierda"
			}			
		}
	}
	else
	{
		DevolverTexto=" Es el turno de "+ArrayDelaPropiaSala[vTurno-1].Nombre
	}
	return DevolverTexto;
}



function dragUpdate(sprite, pointer, dragX, dragY, snapPoint) {

  	var index;
	 for ( var i = 0; i < MazoD.length; i++){
		if (MazoD[i].idCarta==sprite.name){
			index=i;
			break;
		}	 
	 }

	 //log(false,"Moviendo "+MazoD[index].valor+" de "+MazoD[index].palo+" "+pointer.x)
	
	 for ( var i = 0; i < MazoD.length; i++){
		game_objeto.physics.arcade.overlap(MazoD[i].cartilla, MazoD[i], colision_cartas, null, this);
	}
	

}

colision_cartas=function(sprite, spriteColision) {
	log(false,"Colisionando ");
};

 
 
Level.prototype.update=function(){
	
	GrupoL.sort('y', Phaser.Group.SORT_ASCENDING);
	GrupoR.sort('y', Phaser.Group.SORT_DESCENDING);	

	
};


Encima=function(cartamovida){

	//game_objeto.add.text(600, 300,"Ca", { font: '16px Arial', fill: '#ffffff' });
	cartamovida.x=cartamovida.x-1500;
	
	game_objeto.tweens.removeAll();

	// rotate monkey
	var twn = game_objeto.add.tween(cartamovida);
	twn.to({
		angle : cartamovida.angle + 360
	}, 1000, "Linear", true);

	// scale monkey
	twn = game_objeto.add.tween(cartamovida.scale);
	twn.to({
		x : 0.1,
		y : 0.1
	}, 1000, "Linear", true);
//	game_objeto.add.text(390, 300,cartamovida.palo, { font: '16px Arial', fill: '#ffffff' });
};


/*var ObjetoSala = function(JugadorSala,Sala){
	this.JugadorSala=JugadorSala
	this.Sala=Sala
};
*/

var ObjetoSala = function(JugadorSala,Sala,Cerrada,Nombre,Sexo,Foto,AvatarSprite,Desconectado,Dorso,Tapete,Amigo,JugadorFull,OrdenEnSala, JugadorSalaFalseado,NombreOri,Admin,IP,
	Nivel,CampeonSemanal){
		
	this.JugadorSala=JugadorSala;
	this.Sala=Sala;
	this.SalaCerrada=Cerrada;
	this.Nombre=Nombre;
	this.Sexo=Sexo;
	this.Foto=Foto;
	this.AvatarSprite;
	this.Desconectado=Desconectado;
	this.Dorso=Dorso;
	this.Tapete=Tapete;
	this.Amigo=Amigo
	this.JugadorFull=JugadorFull
	this.OrdenEnSala=OrdenEnSala
	this.JugadorSalaFalseado=JugadorSalaFalseado
	this.Admin=Admin
	this.IP=IP
	this.Nivel=Nivel
	this.CampeonSemanal=CampeonSemanal	
	
	this.NombreOri=NombreOri
};

setEventHandlers = function () { //ESTE
  // Socket connection successful
  //game_objeto.add.text(390, 400,"laiolailo", { font: '16px Arial', fill: '#ffffff' });
  
  
  socket.on('connect', onSocketConnected);
  socket.on('reconnect', function()
  {
	  var i;
	  if (PartidaComenzada==false)
	  {
		  //MatarConexion();
		  SalirConfirmado(); //madremia
	  }
	  else
	  {
	 
	  IntentosReconexion=0;
	  //console.log("ARRAY DE LA SALA "+ArrayDelaPropiaSala);
	  if (ArrayDelaPropiaSala.length>0) 
	  {
		  MensajeError("Reconectando..."+ ArrayDelaPropiaSala[SoyElJugador-1].Nombre);	
		  socket.emit("Reconectado", ArrayDelaPropiaSala[SoyElJugador-1].JugadorSala,ArrayDelaPropiaSala[SoyElJugador-1].Sala);
	
	
	  
	  
	  }
	  else
	  {
		   //console.log("MUY RARO");
		  if (ModoMultijugador==true)
		  {
			//jojo SalirConfirmado();
			SalirConfirmado(); //madremia
		  }
	  }
	  }
  });

  socket.on('enviar_perfil_desde_server', onSocketPerfil);
  socket.on('enviar_publicidad_desde_server', onSocketPublicidad);
 
  socket.on('disconnect', onSocketDisconnect);
 
  
  socket.on('conectados_sala', function(data,callback)
  {
	  //console.log(data);
	  onSocketconectadosSala(data.JugadoresEnSala,data.SalaJoin,data.ArrayEnviar)
	  return callback(data.IdMsg);
  }
  );
  
  
  
  socket.on('baraja_desde_server', function(data,callback)
  {
	  //console.log(data);
	  onSocketBarajaDesdeServer(data.data,data.QuienReparte,data.idPartida)
	  return callback(data.IdMsg);
  }
  );
  
  socket.on('envio_posicion_desde_server', function(data,callback)
  {
	  //console.log(data);
	  onSocketEnvioPosicionDesdeServer(data.JugadorQueMueve,data.KeyMover,data.nuevaposicion)
	  return callback(data.IdMsg);
  }
  );

  socket.on('envio_centro_desde_server',  function(data,callback)
  {
	  //console.log(data);
	  var i;
	  var Adelante=true;
	  
	  if (data.DesdeDesconexion==true)
	  {
			  for (i=0;i<=ArrayAccionesDesconexiones.length-1;i++)
			  {
					if(ArrayAccionesDesconexiones[i].Mensaje=='enviar carta centro' || ArrayAccionesDesconexiones[i].Mensaje=='enviar carta centro solo yo')
					{
						Adelante=false;
						break;
					}
			  }
			  
			if (Adelante==false)
			{
				//MatarConexion();
				SalirConfirmado(); //madremia
			}
	  
	  }
	  else
	  {
		  Adelante=true;
	  }
	  //console.log("jol");
	  onSocketEnvioCentroDesdeServer(data.JugadorQueMueve,data.KeyMover,data.Turno,data.Ronda,data.Hora)
	  
	  return callback(data.IdMsg);
  }
  );
 
  socket.on('envio_centro_desde_server_solo_yo', function(data,callback)
  {
	  
	  var i;
	  var Adelante=true;
	  
	  if (data.DesdeDesconexion==true)
	  {
			  for (i=0;i<=ArrayAccionesDesconexiones.length-1;i++)
			  {
					if(ArrayAccionesDesconexiones[i].Mensaje=='enviar carta centro' || ArrayAccionesDesconexiones[i].Mensaje=='enviar carta centro solo yo')
					{
						Adelante=false;
						break;
					}
			  }
			  
			if (Adelante==false)
			{
				//MatarConexion();
				SalirConfirmado(); //madremia
			}
	  
	  }
	  else
	  {
		  Adelante=true;
	  }
	
	  onSocketEnvioCentroDesdeServer(data.JugadorQueMueve,data.KeyMover,data.Turno,data.Ronda,data.Hora)
	  return callback(data.IdMsg);
  }
  );
  
  
  socket.on('Comenzad Partida', function(data,callback)
  {
	  //console.log(data);
	  onSocketComenzadPartida();
	  return callback(data.IdMsg);
  }
  );

  socket.on('envio_cante_desde_server',  function(data,callback)
  {
	  //console.log(data);
	  onSocketCantarDesdeServer(data.JugadorQueMueve,data.puntos,data.texto)
	  return callback(data.IdMsg);
  }
  );  
  
  socket.on('envio_cambio7_desde_server', function(data,callback)
  {
	  //console.log(data);
	  onSocketCambiar7DesdeServer(data.JugadorQueMueve,data.KeyMover)
	  return callback(data.IdMsg);
  }
  );
  
  
  socket.on('envio_parejas_desde_server', function(data,callback)
  {
	  //console.log(data);
	  onSocketCambiarParejasDesdeServer(data.ArrayDelaPropiaSalaClienteOrdenada,data.QuienReparte)
	  return callback(data.IdMsg);
  }
  );
  
   socket.on('envio_ok_parejas_desde_server', function(data,callback)
  {
	  //console.log(data);
	  onSocketCambiarParejasDesdeServerOK(data.QuienSoy)
	  return callback(data.IdMsg);
  }
  );  
  
  socket.on('enviar_texto_desde_server', function(data,callback)
  {
	  //console.log(data);
	  onSocketEnviarTextoDesdeServer(data.data,data.QuienHabla)
	  return callback(data.IdMsg);
  }
  );
  
  
  socket.on('desconectado_desde_server', function(data,callback)
  {
	  //console.log(data);
	  onSocketDesconectadoDesdeServer(data.Jugador,data.Nombre,data.posicionJugador,data.MinutosSancion) //1.0.8 Añado MinutosSancion
	  return callback(data.IdMsg);
  }
  );
  
  
 
 socket.on('reconectado_desde_server', function(data,callback)
  {
	  //console.log(data);
	  onSocketReconectadoDesdeServer(data.Jugador,data.Nombre,data.posicionJugador,data.NuevoId)
	  return callback(data.IdMsg);
  }
  );


 socket.on("connect_failed", onSocketConexionFallida);
  socket.on("connect_error", onSocketServidorCaido);
  socket.on("envio_lista_sala_amigos", onSocketListaSalaAmigos);
  socket.on("MensajeServidor", onSocketMensajeServidor);
  socket.on("envio_validacion_salas_ok",onSocketValidacionSalaOK);
  socket.on("envia_clasificacion", onSocketClasificacion);
  
  socket.on('error_personalizado_desde_server', onSocketErrorDesdeServer);
  
 
	socket.on('cuenta jugadores',onSocketContadorJugadores);
	
	socket.on('giveme_your_moves', function(data,callback)
	  {
		  //console.log(data);
		  onSocketEnviaEnOff(data.Habitacion)
		  return callback(data.IdMsg);
	  }
	  );
	  
	  socket.on('elimina_chat_desde_server', function()
	  {
		  inputField.visible=false;
	  });

}; //ESTE


onSocketErrorDesdeServer= function (ErrorInterno,ErrorPublico) {
	
	
	if (ErrorInterno=="Error0" || ErrorInterno=="Error2" || ErrorInterno=="Error3" || ErrorInterno=="Error4") //Errores de Login
	{
		MuestraPantallaLogin();
	}
	

	if (ErrorInterno=="Error5") //Usuario deshabilitado
	{
		//lPermisoHabilitado=false;
		onSocketMensajeServidor(ErrorPublico, true)
	}

	if (ErrorInterno=="Error6") //Usuario en la sala
	{
		onSocketMensajeServidor(ErrorPublico, false)
	}
	
	if (ErrorInterno=="Error7") //Contraseña Incorrecta
	{
		onSocketMensajeServidor(ErrorPublico, false)
	}	
	
	if (ErrorInterno=="Error8") //Versión Incorrecta
	{
		onSocketMensajeServidor(ErrorPublico, true);
	}		
	
	if (ErrorInterno=="Error9" || ErrorInterno=="Error10" || ErrorInterno=="Error11" ) //Sala completa, Nombre de sala no permitido y Sala Existe
	{
		onSocketMensajeServidor(ErrorPublico, true);
	}		
	
	if (ErrorInterno=="Error12")
	{
		//lPermisoDesconectado=false;
		onSocketMensajeServidor(ErrorPublico, false);		
	}	
	
	if (ErrorInterno=="Error13")
	{
		//Informar a todos de que un usuario ha sido sancionado
		onSocketMensajeServidor(ErrorPublico, false);		
	}		
	
}


onSocketEnviaEnOff=function(Sala)
{
	var i;
	//1.0.6
	for (i=0;i<=ArrayAccionesDesconexiones.length-1;i++)
	{
		//console.log("Enviando el mensaje "+ArrayAccionesDesconexiones[0].IdMsg+" de "+ArrayAccionesDesconexiones[0].ClientId);
		//console.log("Comparo cliente "+ArrayAccionesDesconexiones[i].ClientId+" con "+ViejoSocket+" y sala "+ArrayAccionesDesconexiones[i].Habitacion+" con "+Sala);
		//if ( (ArrayAccionesDesconexiones[i].ClientId==NuevoID || ArrayAccionesDesconexiones[i].ClientId===JugadorQueReconecta) && ArrayAccionesDesconexiones[i].Habitacion==Sala)
		if ( ArrayAccionesDesconexiones[i].Habitacion==Sala)
		{
			
			ArrayAccionesDesconexiones[i].ClientId=socket.id; //Cambio las colas de mensajes al nuevo socket.
			
			//console.log("Y lo emito "+ArrayAccionesDesconexiones[i].Mensaje +" "+ArrayAccionesDesconexiones[0].IdMsg+" de "+ArrayAccionesDesconexiones[0].ClientId); 	
			 this.emit(ArrayAccionesDesconexiones[i].Mensaje,ArrayAccionesDesconexiones[i],
			 function(idMensaje)
			 {
				
				EliminarColaMensajes(idMensaje,'reconecto');
				
				
			 }
			);
		}


	}	
	

	CalculaControl();
}

onSocketContadorJugadores=function(ObjetoContador)
{
	//alert(ObjetoContador.CuentaMundo+ " "+ObjetoContador.CuentaAmigos);

	//TextCuentaMundo.visible=true;
	TextCuentaMundo.text="";
	
	if (ObjetoContador.CuentaMundo!=-9999)
	{
		TextCuentaMundo.text="Contra el mundo: "+ ObjetoContador.CuentaMundo+" personas\n"+"Contra amigos: "+ObjetoContador.CuentaAmigos +" personas\n";
	}
	
	
	if (ObjetoContador.CuentaSolos!=-9999)
	{
		TextCuentaMundo.text=TextCuentaMundo.text+"Contra el juego: "+ObjetoContador.CuentaSolos+" personas";
	}
	
	
	/*TextCuentaMundo.text="Contra el mundo: "+ ObjetoContador.CuentaMundo+" personas en línea\n"+"Contra amigos: "+ObjetoContador.CuentaAmigos +" personas en línea\n"+
		"Contra el juego: "+ObjetoContador.CuentaSolos+" personas";
	*/
	
	
}


onSocketCambiarParejasDesdeServer=function(ArrayDelaPropiaSalaClienteOrdenada,QuienReparteServer,NuevaPareja)
{
	var i;
	
	
	ArrayDelaPropiaSala=ArrayDelaPropiaSalaClienteOrdenada;
	
	ArrayJugadoresDesconectados.splice(0,1000); //Importante hacer esto porque han cambiado los órdenes
	CalculaControl();
	
	
	for (i=0; i<=ArrayDelaPropiaSala.length-1;i++)
	{
		if (ArrayDelaPropiaSala[i].JugadorSala==socket.id)
		{
			SoyElJugador=(i+1);
			//console.log("CHANGE2: "+SoyElJugador)
			//console.log("SOY con el trucaje"+SoyElJugador);
		}

	}
	
	//console.log("SOY "+SoyElJugador);
	
	SemaforoAvatars.splice(0,1000);
	DibujaJugadores();
	
	
	var ObjectSend=function( QuienSoy,
		IdMsg,ClientId,SalaID,Mensaje){
		 this.QuienSoy=SoyElJugador
		 
											 
		 this.IdMsg=IdMsg
		 this.ClientId=ClientId
		 this.SalaID=SalaID
		 this.Mensaje=Mensaje
		 
		 this.Fecha=new Date(Date.now());
	 }


	 var ArrayAccionesDesconexionesLocal=[];
	ArrayAccionesDesconexionesLocal.splice(0,1000);

		
	var IdMsg=Math.random()*100000;
	var Objeto=new ObjectSend(ArrayDelaPropiaSala[SoyElJugador-1].JugadorSala,
		IdMsg,socket.id,Habitacion,'cambio parejas ok');
	ArrayAccionesDesconexiones.push(Objeto);
	ArrayAccionesDesconexionesLocal.push(Objeto);
	

	socket.emit('cambio parejas ok',ArrayAccionesDesconexionesLocal[0],  
	 function(idMensaje)
	 {			 
		EliminarColaMensajes(idMensaje,'cambio parejas ok');
	 }
	);	
	ArrayAccionesDesconexionesLocal.splice(0,1000);		
	//ArrayJugadoresDesconectados.splice(0,1000);
	
	//console.log("Soy "+SoyElJugador+" "+QuienTomaElControl);
	
	for (i=0;i<=ArrayDelaPropiaSala.length-1;i++)
	{
		if (SoyElJugador==QuienTomaElControl && ArrayDelaPropiaSala[i].Desconectado==true)
		{
			//console.log("Enviando..");
			var IdMsg=Math.random()*100000;
			var Objeto=new ObjectSend(ArrayDelaPropiaSala[i].JugadorSala,
				IdMsg,socket.id,Habitacion,'cambio parejas ok');
			ArrayAccionesDesconexiones.push(Objeto);
			ArrayAccionesDesconexionesLocal.push(Objeto);
			
			
			socket.emit('cambio parejas ok',ArrayAccionesDesconexionesLocal[0],  
			 function(idMensaje)
			 {			 
				EliminarColaMensajes(idMensaje,'cambio parejas ok');
			 }
			);	
			ArrayAccionesDesconexionesLocal.splice(0,1000);		
			//ArrayJugadoresDesconectados.splice(0,1000);
	
	
		}
	}

	
	
	

	
	
}

onSocketCambiarParejasDesdeServerOK=function(QuienDaOK)
{
	var i;
	var FuerzaReparto=false;
	ArrayOKParejas.push(QuienDaOK);
	//console.log("Recibiendo respuestas: "+ArrayOKParejas.length+" ");
	FuerzaRepartoPartidaInicial();

	
}

FuerzaRepartoPartidaInicial=function()
{
	
	var FuerzaReparto=false;
	var i;
	
	//console.log("Debe repartir.."+ArrayOKParejas.length)
	//CalculaControl();
	CalculaControl();//1.0.6
	
	if (ArrayOKParejas.length==4 && MazoD.length==0 && MazoL.length==0 && MazoR.length==0 && MazoU.length==0)
	{
		
		
		if (ArrayDelaPropiaSala.length==4){
		
			/*for (i=0;i<=ArrayJugadoresDesconectados.length-1;i++)
			{
			//console.log("Desconectado "+QuienTomaElControl);	
				if (ArrayJugadoresDesconectados[i].JugadorSala==ArrayDelaPropiaSala[3].JugadorSala && SoyElJugador==QuienTomaElControl)
				{
					FuerzaReparto=true;
				}
			}*/
	
			if ( SoyElJugador==QuienTomaElControl)
			{
			 //if (ArrayDelaPropiaSala[3].JugadorSala==socket.id || FuerzaReparto==true){ //Se crea la baraja
				
				vTurno=1;
				
				if (ValidaRepartosJugador()==true) //1.0.8
				{
					CrearBaraja(4);	//ILA QuienReparte
					EnviarBaraja(MazoEnviar,Habitacion,4,SonVueltas,ArrayDelaPropiaSala,(MarcadorPartidasNuestro+MarcadorPartidasRival)) ; //ILA QuienReparte
				}
							
			}
		}
		
		
	}
	
}
onSocketClasificacion=function(Data,ObjetoPosicionGlobal,ObjetoPosicionSemanal){
	var i;
	var row; 
	var cell1;
	var cell2;
	var cell3;
	var cell4;
	var cell5;
	var cell6;
	var cell7;
	var cell8;
	var cell9;
	var Imagen;	
	var index;
	var TextoPosicion="";
	
	console.log(ObjetoPosicionGlobal._Posicion);
	console.log(ObjetoPosicionGlobal._Puntos);

	/*console.log(ObjetoPosicionSemanal._Posicion);
	console.log(ObjetoPosicionSemanal._Puntos);*/
	
	OcultarFacebook();
	
	var table = document.getElementById("TextoClasificacionGlobal");
	if (ObjetoPosicionGlobal._Puntos==0)
	{
		table.textContent="No sabemos quién eres. Entra con tu usuario en multijugador.";
	}
	else
	{
		if (ObjetoPosicionGlobal._Posicion==0)
		{
			TextoPosicion="No estás entre los 100 primeros."			
		}
		else
		{
			TextoPosicion="Estás en la posición "+ObjetoPosicionGlobal._Posicion+"."
		}
		
		table.textContent= TextoPosicion+" Tienes "+ObjetoPosicionGlobal._Puntos+" ptos.";
	}
	

	var table = document.getElementById("TextoClasificacionSemanal");
	if (ObjetoPosicionSemanal._Puntos==0)
	{
		table.textContent="No sabemos quién eres. Entra con tu usuario en multijugador.";
	}
	else
	{
		if (ObjetoPosicionSemanal._Posicion==0)
		{
			TextoPosicion="No estás entre los 100 primeros."			
		}
		else
		{
			TextoPosicion="Estás en la posición "+ObjetoPosicionSemanal._Posicion+"."
		}
		
		table.textContent= TextoPosicion+" Tienes "+ObjetoPosicionSemanal._Puntos+" ptos.";
	}	
	
	
	
	var table = document.getElementById("TablaClasificacion");
	var rowCount = table.rows.length;


	for (i = 1; i < rowCount; i++) {
	  
		table.deleteRow(1);
	}

	
	
	var d=document.getElementById('DivClasificacionContenedor');
	d.style.display = 'inline-block';
	
	index=0;
	for (i=0;i<=Data.length-1;i++)
	{
		if (Data[i]._Tipo==1)
		{
		
			row=table.insertRow(index+1);
			
			cell1 = row.insertCell(0);
			cell2 = row.insertCell(1);
			cell3 = row.insertCell(2);
			cell4 = row.insertCell(3);
			cell5 = row.insertCell(4);
			cell6 = row.insertCell(5);		
			cell7 = row.insertCell(6);
			cell8 = row.insertCell(7);
			cell9 = row.insertCell(8);
			
			cell1.innerHTML = Data[i]._Posicion;
			
			
			
			if(Data[i].Foto!=undefined)
			{
				cell2.innerHTML =  "<img class='zoom' src='" + Data[i].Foto + "' style='max-width:30;max-height:30' >";
				//cell2.innerHTML =  "<a href="+ Data[i].Foto+" class='fancy'><img src="+ Data[i].Foto+" style='max-width:140;max-height:140'></a>";
			}
			else
			{
				cell2.innerHTML =  "<img class='zoom' src='" + Maquina+'/assets/images/desconocido.png' + "' style='max-width:30;max-height:30' >";
			}
			cell3.innerHTML = Data[i].Jugador;
			cell4.innerHTML = Data[i]._Jugadas;
			cell5.innerHTML = Data[i]._Ganadas;
			cell6.innerHTML = Data[i]._Perdidas;
			cell7.innerHTML = Data[i]._Retiradas;
			cell8.innerHTML = parseFloat(Data[i]._Puntos).toFixed(0);
			
			
			Imagen=CalculaAvatarLogro(Data[i]._Nivel,1)
			/*if  (Data[i]._Nivel==1)
			{
				Imagen='nivel_pro.png'
			}
			if  (Data[i]._Nivel==2)
			{
				Imagen='nivel_ninja.png'
			}		
			if  (Data[i]._Nivel==3)
			{
				Imagen='nivel_mago.png'
			}			
			if  (Data[i]._Nivel==4)
			{
				Imagen='nivel_diplomado.png'
			}	*/		
			cell9.innerHTML =  "<img class='zoom' src='" + Maquina+'/assets/images/'+Imagen + "' style='max-width:30;max-height:30' >";
			
			index++;
		}
		
		
		
		
		
		
	
	}
	
	
	var table = document.getElementById("TablaClasificacionSemanal");
	var rowCount = table.rows.length;


	for (i = 1; i < rowCount; i++) {
	  
		table.deleteRow(1);
	}

	
	index=0;
	for (i=0;i<=Data.length-1;i++)
	{
		if (Data[i]._Tipo==2)
		{
			//console.log("Rellena");
			row=table.insertRow(index+1);
			
			
			cell1 = row.insertCell(0);
			cell2 = row.insertCell(1);
			cell3 = row.insertCell(2);
			cell4 = row.insertCell(3);
			cell5 = row.insertCell(4);
			cell6 = row.insertCell(5);		
			cell7 = row.insertCell(6);
			cell8 = row.insertCell(7);
			cell9 = row.insertCell(8);
			
			cell1.innerHTML = Data[i]._Posicion;
			if(Data[i].Foto!=undefined)
			{
				cell2.innerHTML =  "<img class='zoom' src='" + Data[i].Foto + "' style='max-width:30;max-height:30' >";
			}
			else
			{
				cell2.innerHTML =  "<img class='zoom' src='" + Maquina+'/assets/images/desconocido.png' + "' style='max-width:30;max-height:30' >";
			}
			cell3.innerHTML = Data[i].Jugador;
			cell4.innerHTML = Data[i]._Jugadas;
			cell5.innerHTML = Data[i]._Ganadas;
			cell6.innerHTML = Data[i]._Perdidas;
			cell7.innerHTML = Data[i]._Retiradas;
			cell8.innerHTML = parseFloat(Data[i]._Puntos).toFixed(0);
			
			Imagen="sin_logro.png";
			if  (Data[i]._CampeonSemanal==true)
			{
				Imagen='medalla.png'
			}
		
			cell9.innerHTML =  "<img class='zoom' src='" + Maquina+'/assets/images/'+Imagen + "' style='max-width:30;max-height:30' >";
			index++
		}
		
		
		
		
		
		
	
	}
		
	
	
	
	
	


	

}
onSocketValidacionSalaOK=function(Validacion,Sala){
	if (Validacion==true)
	{
		InicioPartidaOnline(1,Sala);
	}
	else
	{
		//console.log("mal");
		//onSocketMensajeServidor("Contraseña incorrecta.",false); //1.0.8
		onSocketErrorDesdeServer("Error7","Contraseña incorrecta.");
		
	}
}
onSocketMensajeServidor=function(Texto,Salir)
{


	var	TextoFormateado=EscribirTextoGuay(Texto,40);
	
	var tw = game_objeto.add.tween(TextoFormateado).to( { alpha: 0 }, 1000, EfectoTween1, true,5000);
	tw.onComplete.add( function(){
	
		if (Salir==true)
		{
			SalirConfirmado();
		}
		
	}
		
		
	);
}



onSocketConexionFallida=function()
{
	ErrorConexion();
	
}

onSocketServidorCaido=function()
{
	ErrorConexion();
}

onSocketPerfil=function(ArrayDesdeServer)
{
		//alert(ArrayDesdeServer[0].Tapete);
		var tapete;
		
		ArrayInfoJugador.splice(0,1000);
		
		tapete=ArrayDesdeServer[0].Tapete
		if (cuatrotres==true)
		{
			tapete=tapete.replace('.jpg','_43.jpg');
		}
		console.log("ENTRO "+ArrayDesdeServer[0].ChatDisponible)
		ArrayInfoJugador.push(new ObjetoJugador(ArrayDesdeServer[0].Nombre,
			ArrayDesdeServer[0].Sexo,
			ArrayDesdeServer[0].Foto,
			ArrayDesdeServer[0].Dorso,
			tapete,
			ArrayDesdeServer[0].ProveedorID,
			ArrayDesdeServer[0].RedSocial,
			ArrayDesdeServer[0].Admin,
			ArrayDesdeServer[0].VersionOK,
			ArrayDesdeServer[0].VersionMensaje,
			ArrayDesdeServer[0].Noticia,
			ArrayDesdeServer[0].IP,
			ArrayDesdeServer[0].ChatDisponible,
			ArrayDesdeServer[0].Nivel,
			ArrayDesdeServer[0].CampeonSemanal
			));
			
			//alert(ArrayInfoJugador[0].Tapete);
		
		
		
		
		if ( ArrayDesdeServer[0].VersionMensaje!="" )
		{
			//console.log("Debe Salir "+ArrayDesdeServer[0].VersionOK);
			//onSocketMensajeServidor(ArrayDesdeServer[0].VersionMensaje,ArrayDesdeServer[0].VersionOK); //1.0.8
			onSocketErrorDesdeServer("Error8",ArrayDesdeServer[0].VersionMensaje); //1.0.8
			//lVersionValida=ArrayDesdeServer[0].VersionOK; //1.0.8
			
			
		}
		
		TapeteRemoto=ArrayInfoJugador[0].Tapete;
	
		
		
		TapeteRemotoLoader=new Phaser.Loader(game_objeto);
		TapeteRemotoLoader.crossOrigin ="Anonymous"
		TapeteRemotoLoader.image('TapeteRemoto', ArrayInfoJugador[0].Tapete);
		TapeteRemotoLoader.onFileComplete.add( function() { fileCompleteTapete();  }  );
		TapeteRemotoLoader.start();

		DorsoRemotoLoader=new Phaser.Loader(game_objeto);
		DorsoRemotoLoader.crossOrigin ="Anonymous"
		//DorsoRemotoLoader.removeFile('image', 'ReversoRemoto')
		DorsoRemotoLoader.image('ReversoRemoto', ArrayInfoJugador[0].Dorso,true);
		DorsoRemotoLoader.onFileComplete.add( function() { fileCompleteDorso();  }  );
		DorsoRemotoLoader.start();
		
		if (ArrayInfoJugador[0].Noticia!=null && ContadorNoticia<=2 && ArrayDelaPropiaSala.length!=4 && EntradaModoJuego==false )
		{			
			NoticiaRemotoLoader=new Phaser.Loader(game_objeto);
			NoticiaRemotoLoader.crossOrigin ="Anonymous"
			NoticiaRemotoLoader.image('NoticiaRemoto', ArrayInfoJugador[0].Noticia,true);
			NoticiaRemotoLoader.onFileComplete.add( function() { fileCompleteNoticia();  }  );
			NoticiaRemotoLoader.start();
		}
		
		ContadorNoticia++;
		if (ContadorNoticia>10)
		{
			ContadorNoticia=0;
		}
		
		if (BotonMonoJugador.visible==false) //1.0.8 El IF solamente. Resulta que según la rapidez de calculaperfil se superponían imágenes de los botones
		{
			ConfiguraPantallaMultijugador();
		}
	
}

onSocketPublicidad=function(ArrayDesdeServer)
{
	
	var i;
	
	//No puedo hacer destroys porque se revienta en los carteles de fin de partida
		/*for (i=0;i<=Mazo.length-1;i++)
		{
			Mazo[i].cartilla.destroy();
		}

		for (i=0;i<=MazoR.length-1;i++)
		{
			MazoR[i].cartilla.destroy();
		}

		for (i=0;i<=MazoL.length-1;i++)
		{
			MazoL[i].cartilla.destroy();
		}

		for (i=0;i<=MazoU.length-1;i++)
		{
			MazoU[i].cartilla.destroy();
		}
		for (i=0;i<=MazoD.length-1;i++)
		{
			MazoD[i].cartilla.destroy();
		}

		for (i=0;i<=MazoCentral.length-1;i++)
		{
			MazoCentral[i].cartilla.destroy();
		}

		for (i=0;i<=CartaTriunfo.length-1;i++)
		{
			CartaTriunfo[i].cartilla.destroy();
		}

		for (i=0;i<=MazoRecogido.length-1;i++)
		{
			MazoRecogido[i].destroy();
		}

		for (i=0;i<=MazoRecogidoRival.length-1;i++)
		{
			MazoRecogidoRival[i].destroy();
		}*/


		//alert(ArrayDesdeServer[0].Tapete);
		ArrayInfoJugador.splice(0,1000);

		var tapete=ArrayDesdeServer[0].Tapete;
		if (cuatrotres==true)
		{
			tapete=tapete.replace('.jpg','_43.jpg');
		}
		console.log("ENTRO1 "+ArrayDesdeServer[0].ChatDisponible)
		ArrayInfoJugador.push(new ObjetoJugador(ArrayDesdeServer[0].Nombre,
			ArrayDesdeServer[0].Sexo,
			ArrayDesdeServer[0].Foto,
			ArrayDesdeServer[0].Dorso,
			tapete,
			ArrayDesdeServer[0].ProveedorID,
			ArrayDesdeServer[0].RedSocial,
			ArrayDesdeServer[0].Admin,
			ArrayDesdeServer[0].VersionOK,
			ArrayDesdeServer[0].VersionMensaje,
			ArrayDesdeServer[0].Noticia,
			ArrayDesdeServer[0].IP,
			ArrayDesdeServer[0].ChatDisponible,
			ArrayDesdeServer[0].Nivel,
			ArrayDesdeServer[0].CampeonSemanal			
			));
			
		if ( ArrayDesdeServer[0].VersionMensaje!="" )
		{
			//console.log("Debe Salir "+ArrayDesdeServer[0].VersionOK)
			//onSocketMensajeServidor(ArrayDesdeServer[0].VersionMensaje,ArrayDesdeServer[0].VersionOK)	//1.0.8
			onSocketErrorDesdeServer("Error8",ArrayDesdeServer[0].VersionMensaje); //1.0.8
			//lVersionValida=ArrayDesdeServer[0].VersionOK; //1.0.8
		}	
			
		TapeteRemoto=ArrayInfoJugador[0].Tapete;
	
		
		
		TapeteRemotoLoader=new Phaser.Loader(game_objeto);
		TapeteRemotoLoader.crossOrigin ="Anonymous"
		TapeteRemotoLoader.image('TapeteRemoto', ArrayInfoJugador[0].Tapete);
		TapeteRemotoLoader.onFileComplete.add( function() { fileCompleteTapete();  }  );
		TapeteRemotoLoader.start();
		
		DorsoRemotoLoader=new Phaser.Loader(game_objeto);
		DorsoRemotoLoader.crossOrigin ="Anonymous"
		//DorsoRemotoLoader.removeFile('image', 'ReversoRemoto')
		DorsoRemotoLoader.image('ReversoRemoto', ArrayInfoJugador[0].Dorso,true);
		// alert(ArrayInfoJugador[0].Dorso);
		DorsoRemotoLoader.onFileComplete.add( function() { fileCompleteDorso();  }  );
		DorsoRemotoLoader.start();
		
		if (ArrayInfoJugador[0].Noticia!=null && ContadorNoticia<=2 && ArrayDelaPropiaSala.length!=4 && EntradaModoJuego==false )
		{
			NoticiaRemoto=ArrayInfoJugador[0].Noticia
			NoticiaRemotoLoader=new Phaser.Loader(game_objeto);
			NoticiaRemotoLoader.crossOrigin ="Anonymous"
			NoticiaRemotoLoader.image('NoticiaRemoto', ArrayInfoJugador[0].Noticia);
			NoticiaRemotoLoader.onFileComplete.add( function() { fileCompleteNoticia();  }  );
			NoticiaRemotoLoader.start();		
		}
		ContadorNoticia++;
		if (ContadorNoticia>10)
		{
			ContadorNoticia=0;
		}
	
}



onSocketDesconectadoDesdeServer=function(JugadorQueDesconecta,NombreDesconectado,posicionJugador,MinutosSancion)
{
	var TextDesconectado;
	var i;
	var u;
	var posicion;
	var Letra;
	
	//return true;
	
	log(true,"Desconecta el jugador ");
	log(true,"JUGADOR QUE DESCONECTA "+JugadorQueDesconecta);
	
	//console.log("Jugador que desconecta "+JugadorQueDesconecta);
	for (var i=0;i<=ArrayDelaPropiaSala.length-1;i++)
	{
		//console.log("Desconectando... "+ArrayDelaPropiaSala[i].JugadorSala+" "+ArrayDelaPropiaSala[i].Nombre);
		if (ArrayDelaPropiaSala[i].JugadorSala==JugadorQueDesconecta)
		{
			ArrayDelaPropiaSala[i].Desconectado=true;
			ArrayJugadoresDesconectados.push( new ObjetoDesconexion ( (i+1),JugadorQueDesconecta ));
			//ArrayJugadoresDesconectadosID.push(JugadorQueDesconecta);
		}			
		
	}
	CalculaControl();
	
		//No se si sobra
	if (PartidaComenzada==false && SoyElJugador==QuienTomaElControl) //1.0.6
	{	
		var ObjectSend=function( Habitacion,JugadorSala,idPartida,
			IdMsg,ClientId,SalaID,Mensaje){
			 this.Habitacion=Habitacion
			 this.JugadorSala=JugadorSala
			 this.idPartida=idPartida
								 
			 this.IdMsg=IdMsg
			 this.ClientId=ClientId
			 this.SalaID=SalaID
			 this.Mensaje=Mensaje
			 
			 this.Fecha=new Date(Date.now());
		 }
		var ArrayAccionesDesconexionesLocal=[];
		ArrayAccionesDesconexionesLocal.splice(0,1000);

			
		var IdMsg=Math.random()*100000;
		var Objeto=new ObjectSend(Habitacion,JugadorQueDesconecta,idPartida,
			IdMsg,JugadorQueDesconecta,Habitacion,'Estoy listo');
		ArrayAccionesDesconexiones.push(Objeto);
		ArrayAccionesDesconexionesLocal.push(Objeto);


		socket.emit('Estoy listo',ArrayAccionesDesconexionesLocal[0],
		 function(idMensaje)
		 {			 
			EliminarColaMensajes(idMensaje,'Estoy listo');
		 }
		);						
		ArrayAccionesDesconexionesLocal.splice(0,1000);	
	}
	

	
	
	//console.log("MADRE MIA: "+SoyElJugador)
	for(i=0;i<=ArrayJugadoresDesconectados.length-1;i++)
	{		
		//console.log("-- JUGADORES DESCONECTADOS "+ArrayJugadoresDesconectados[i].Jugador);
	}
	

		//1.0.4
		if (ModoMultijugador==true && PartidaComenzada==false)//1.0.6
		{
			if (SoyElJugador==QuienTomaElControl && MarcadorPartidasNuestro==0 && MarcadorPartidasRival==0 && SonVueltas==false && MarcadorNuestro==0 && MarcadorRival==0) //1.0.8 Nos aseguramos con MarcadorNuestro y MarcadorRival de que realmente la partida nunca comenzó
			{
				if (socket!=null)
				{
					var ObjectSend=function( QuienSoy,
						IdMsg,ClientId,SalaID,Mensaje){
						 this.QuienSoy=SoyElJugador
						 
															 
						 this.IdMsg=IdMsg
						 this.ClientId=ClientId
						 this.SalaID=SalaID
						 this.Mensaje=Mensaje
						 
						 this.Fecha=new Date(Date.now());
					 }


					 var ArrayAccionesDesconexionesLocal=[];
					ArrayAccionesDesconexionesLocal.splice(0,1000);

						
					var IdMsg=Math.random()*100000;
					var Objeto=new ObjectSend(SoyElJugador,
						IdMsg,socket.id,Habitacion,'cambio parejas ok');
					ArrayAccionesDesconexiones.push(Objeto);
					ArrayAccionesDesconexionesLocal.push(Objeto);

					
					//console.log("Envio cambio parejas ok desde desconectados");
					socket.emit('cambio parejas ok',ArrayAccionesDesconexionesLocal[0],
					 function(idMensaje)
					 {			 
						EliminarColaMensajes(idMensaje,'cambio parejas ok');
					 }
					);	
					ArrayAccionesDesconexionesLocal.splice(0,1000);		
				}
			}	
		}
		

	
	
	
	

	

	
	for (var i=0;i<=ArrayDelaPropiaSala.length-1;i++)
	{
		if (ArrayDelaPropiaSala[i].JugadorSala==JugadorQueDesconecta)
		{
			posicion=i;			
		}			
		
	}
	
	if (posicion==0)
	{
		textJugador1.text="Ordenador 1";
		ArrayDelaPropiaSala[posicion].Nombre="Ordenador 1"
		//Avatar1.loadTexture('Maquina', 0);
		AvatarSprite1.loadTexture('Maquina', 0);
		AvatarSprite1.width=AnchoFoto;
		AvatarSprite1.height=AnchoFoto;
		
		if (AvatarMedalla1!=undefined)
		{
			AvatarMedalla1.destroy();
		}

		if (AvatarLogro1!=undefined)
		{
			AvatarLogro1.destroy();
		}		
		
		
		
	}
	
	if (posicion==1)
	{
		textJugador2.text="Ordenador 2";
		ArrayDelaPropiaSala[posicion].Nombre="Ordenador 2"
		AvatarSprite2.loadTexture('Maquina', 0);
		AvatarSprite2.width=AnchoFoto;
		AvatarSprite2.height=AnchoFoto;
		
		if (AvatarMedalla2!=undefined)
		{
			AvatarMedalla2.destroy();
		}

		if (AvatarLogro2!=undefined)
		{
			AvatarLogro2.destroy();
		}	}	
	if (posicion==2)
	{
		textJugador3.text="Ordenador 3";
		ArrayDelaPropiaSala[posicion].Nombre="Ordenador 3"
		AvatarSprite3.loadTexture('Maquina', 0);
		AvatarSprite3.width=AnchoFoto;
		AvatarSprite3.height=AnchoFoto;
		
		if (AvatarMedalla3!=undefined)
		{
			AvatarMedalla3.destroy();
		}

		if (AvatarLogro3!=undefined)
		{
			AvatarLogro3.destroy();
		}		
	}
	if (posicion==3)
	{
		textJugador4.text="Ordenador 4";
		ArrayDelaPropiaSala[posicion].Nombre="Ordenador 4"
		AvatarSprite4.loadTexture('Maquina', 0);
		AvatarSprite4.width=AnchoFoto;
		AvatarSprite4.height=AnchoFoto;
		
		if (AvatarMedalla4!=undefined)
		{
			AvatarMedalla4.destroy();
		}

		if (AvatarLogro4!=undefined)
		{
			AvatarLogro4.destroy();
		}	
	}	
	
	/* recuperar if (ArrayJugadoresDesconectados.length==0)
	{
		MostrarElegirPareja(false);
	}*/
	
	DibujaMensajeEspecial('Desconectado',posicion);
	if (MinutosSancion>0)
	{
		onSocketErrorDesdeServer("Error13",NombreDesconectado+" será sancionado con "+MinutosSancion+" minutos si no logra reconectar.");
	}

	
	//FuerzaRepartoPartidaInicial();
	/*if (SoyElJugador==QuienTomaElControl && MarcadorPartidasNuestro==0 && MarcadorPartidasRival==0 && SonVueltas==false && MazoD.length==0 && MazoCentral.length==0 && MazoL.length==0 && MazoR.length==0 && ArrayDelaPropiaSala.length>=4)
	{	
		for (i=0;i<=ArrayJugadoresDesconectados.length-1;i++)
		{
			if (ArrayJugadoresDesconectados[i].JugadorSala==ArrayDelaPropiaSala[3].JugadorSala)
			{
				RespuestaPareja(2);
			}
		}
	}*/
	
	/*timerRetardo.add(5000, function(){
		timerRetardo.stop();
		CalculaControl();	
		//console.log("El controlaco");
	}
	);	
	timerRetardo.start();*/
	
	//1.0.6  && QuienTomaElControl==SoyElJugador
	if (MazoD.length==0 && MazoCentral.length==0 && MazoL.length==0 && MazoR.length==0 && ArrayDelaPropiaSala.length>=4 && QuienTomaElControl==SoyElJugador && FinalizandoPartida==false) //1.0.8 FinalizandoPartida==false)
	{
		//console.log("GAÑAN");
		NuevaPartida(vTurno);
		//console.log("Llamada 7");
		//CalculaControl();
	}
		
		
}


DibujaMensajeEspecial=function(ImagenBocadillo,posicion)
{
	//return true;
	//	var ImagenBocadillo= 'Desconectado';
	var Letra;
	var posXBocadillo;
	var posYBocadillo;
	
	Letra= DevuelveUbicacionCarta(posicion+1);
	
	if (Letra=="D")
	{

			posXBocadillo=game_objeto.world.centerX; //(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*6)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+(AnchoCartaEscalado*1.5);
			posYBocadillo=game_objeto.world.height-(AnchoCartaEscalado*2);
			



	}	
	if (Letra=="U")
	{
	
						
			posXBocadillo=game_objeto.world.centerX; //(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*6)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+(AnchoCartaEscalado*1.5);
			posYBocadillo=(AltoCarta)*1.5;	

		

	}
	if (Letra=="L")
	{
	
			posXBocadillo=(AnchoCarta*2.5);
			//posYBocadillo=game_objeto.world.height/2-AnchoCarta;
			posYBocadillo=game_objeto.world.centerY;
			
	
		
	}
	if (Letra=="R")
	{
		
	
			posXBocadillo=game_objeto.world.width-(AnchoCarta*2.5);
			//posYBocadillo=game_objeto.world.height/2-AnchoCarta;	
			posYBocadillo=game_objeto.world.centerY;
			
	
	}	
	
	
	
	/*
	//1.0.8
	if(navigator.vibrate) {
		window.navigator.vibrate(300);
	}*/
		
	log(false,"posicion Bocadillo: "+posXBocadillo);
		
		
		
	//var bmd = game_objeto.add.bitmapData(game_objeto.world.width,game_objeto.world.height);

	// draw to the canvas context like normal
	/*bmd.ctx.beginPath();
	bmd.ctx.rect(0,0,game_objeto.world.width,game_objeto.world.height);
	bmd.ctx.fillStyle = '#000000';
	bmd.ctx.fill();*/

	// use the bitmap data as the texture for the sprite
	var FondoNegro = game_objeto.add.sprite(0, 0, bmd);
	FondoNegro.alpha=0.7;


	var Bocadillo=game_objeto.add.sprite(posXBocadillo,posYBocadillo, ImagenBocadillo);
	Bocadillo.anchor.setTo(0.5, 0.5);


		
		var twFondoNegro = game_objeto.add.tween(FondoNegro).to( { alpha: 0.7 }, 1000, EfectoTween1, true);
		twFondoNegro.onComplete.add(  function(){
				twFondoNegro = game_objeto.add.tween(FondoNegro).to( { alpha: 0 }, 500, EfectoTween1, true,1000,0);
			}
		);
		
		
		var twBocadilloDesconectado = game_objeto.add.tween(Bocadillo).to( { alpha: 1 }, 1000, EfectoTween1, true);
		twBocadilloDesconectado.onComplete.add(  function(){
				twBocadilloDesconectado = game_objeto.add.tween(Bocadillo).to( { alpha: 0 }, 500, EfectoTween1, true,1000,0);
			}
		);
}

onSocketReconectadoDesdeServer=function(JugadorQueReconecta,NombreDesconectado,posicionJugador,NuevoID)
{
	var TextDesconectado;
	var i;
	var u;
	var posicion;
	var Letra;
	
	//return true;
	//timerRetardo.stop();
	
	log(true,"Desconecta el jugador ");
	log(true,"JUGADOR QUE RECONECTA "+JugadorQueReconecta);
	
	
	
	for (i=0;i<=ArrayJugadoresDesconectados.length-1;i++)
	{
		if (ArrayJugadoresDesconectados[i].JugadorSala==JugadorQueReconecta)
		{
			ArrayJugadoresDesconectados.splice(i,1);
			break;
		}			
		
	}
	
	
	var NumeroJugador=-1;
	for (i=0;i<=ArrayDelaPropiaSala.length-1;i++)
	{
		//console.log("Actualizando id: "+ArrayDelaPropiaSala[i].JugadorSala+ " "+ JugadorQueReconecta);
		if (ArrayDelaPropiaSala[i].JugadorSala==JugadorQueReconecta)
		{
			posicion=i;	
			ArrayDelaPropiaSala[i].Desconectado=false;
			ArrayDelaPropiaSala[i].JugadorSala=NuevoID;
			//console.log("Mi nuevo id: "+NuevoID);
			break;
		}
	}
	
	

	for (i=0;i<=ArrayDelaPropiaSala.length-1;i++)
	{
		//console.log("PELICULA "+ArrayDelaPropiaSala[i].Desconectado);
	}
	
	DibujaJugadores();

	
	DibujaMensajeEspecial('Conectado',posicion);
	CalculaControl();//1.0.6
	
}


function fileCompleteTapete() {

	var key;
	
	//key='TapeteRemoto';		
	
	
	//BackTapete.name = key;
	//BackTapete.loadTexture(key, 0);
	
	LogicalTapeteRemoto=true;
	//alert("TAPETE DESCARGADO "+LogicalTapeteRemoto);
	

}


function fileCompleteDorso() {

	var key;
	
	LogicalDorsoRemoto=true;
	
	
	//AvatarSprite1.x=AvatarSprite1.x*(-1);
	//AvatarSprite1.y=AvatarSprite1.y*(-1);
	//BackDorso.name = key;
	//BackDorso.loadTexture(key, 0);
	
	//AvatarSprite1.width=AnchoFoto;
	//AvatarSprite1.height=AnchoFoto;
	
	//log(true,"Se recalcula");

}


function fileCompleteNoticia() {

	var key;
	
	if (ArrayInfoJugador[0].Noticia!=null)
	{
		//LogicalNoticia=true;
		Noticia.visible=true;
		Noticia.loadTexture('NoticiaRemoto', 0);
		var tw=game_objeto.add.tween(Noticia).to( { y: 345 }, 1000, EfectoTweenRebote);
		tw.start();
		//console.log("DIBUJA");
	}

}

function fileComplete1() {

	var key;
	
	key='imagen1';		
	
	if (AvatarSprite1.x<0)
	{
		AvatarSprite1.x=AvatarSprite1.x*(-1);
		AvatarSprite1.y=AvatarSprite1.y*(-1);
	}
	
	AvatarSprite1.name = key;
	try
	{
		AvatarSprite1.loadTexture(key, 0);
	}
	catch(e)
	{
		log(true,"No consigo cargar la imagen de sprite 1");
	}
	
	AvatarSprite1.width=AnchoFoto;
	AvatarSprite1.height=AnchoFoto;
	
	log(true,"Se recalcula");

}
function fileComplete2() {

	var key;
	
	key='imagen2';		
	
	if (AvatarSprite2.x<0)
	{
		AvatarSprite2.x=AvatarSprite2.x*(-1);
		AvatarSprite2.y=AvatarSprite2.y*(-1);
	}
	
	AvatarSprite2.name = key;
	
	try
	{
		AvatarSprite2.loadTexture(key, 0);
	}
	catch(e)
	{
		log(true,"No consigo cargar la imagen de sprite 2");
	}
	
	AvatarSprite2.width=AnchoFoto;
	AvatarSprite2.height=AnchoFoto;	
}

function fileComplete3() {

	var key;
	
	key='imagen3';		
	
	if (AvatarSprite3.x<0)
	{
		AvatarSprite3.x=AvatarSprite3.x*(-1);
		AvatarSprite3.y=AvatarSprite3.y*(-1);
	}
	
	AvatarSprite3.name = key;
	try
	{
		AvatarSprite3.loadTexture(key, 0);
	}
	catch(e)
	{
		log(true,"No consigo cargar la imagen de sprite 3");
	}
	
	AvatarSprite3.width=AnchoFoto;
	AvatarSprite3.height=AnchoFoto;
}

function fileComplete4() {

	var key;
	
	key='imagen4';		

	if (AvatarSprite4.x<0)
	{	
		AvatarSprite4.x=AvatarSprite4.x*(-1);
		AvatarSprite4.y=AvatarSprite4.y*(-1);
	}
	
	AvatarSprite4.name = key;
	try
	{
		AvatarSprite4.loadTexture(key, 0);
	}
	catch(e)
	{
		log(true,"No consigo cargar la imagen de sprite 4");
	}
	
	AvatarSprite4.width=AnchoFoto;
	AvatarSprite4.height=AnchoFoto;	
}



// Socket connected
onSocketConnected  = function() {
	IntentosReconexion=0;
	//console.log("CONECTADO");
 // log(false,'Conectado al servidor:')
  //console.log(socket.id);
  //console.log("kkk");
  	if (socket.id!=undefined && ( BotonMonoJugador.visible==true || BotonAmigos.visible==true  ))
	{
		
		socket.emit('solicita conectados');
	}
	
  	if (socket.id!=undefined && BotonMonoJugador.visible==false ) //Solo se envia la peticion si no estoy en la pantalla principal
	//Ya que si no aparece la pantalla de login al principio
	{
		if (PartidaComenzada==false)
		{
			socket.emit('enviar_peticion_modo_multijugador', Habitacion,socket.id, false,Version,ObjetoG) ;
			socket.emit('enviar validar version', Version);
		}
	}
	else
	{
		if (socket.id!=undefined)
		{
			//alert("ko");		
			//console.log("Pide publi");
			socket.emit('enviar_peticion_publicidad', socket.id,Version) ;
			
			if (ArrayInfoJugador.length>0)
			{
				var JugadorPubli=ArrayInfoJugador[0].Nombre;
				var JugadorFullPubli=ArrayInfoJugador[0].ProveedorID + '-'+ ArrayInfoJugador[0].RedSocial;
				socket.emit('enviar_peticion_publicidad', socket.id,Version,ObjetoG) ;
			}
			else
			{
				socket.emit('enviar_peticion_publicidad', socket.id,Version,ObjetoG) ;
			}
			
			
			socket.emit('enviar validar version', Version);
		}
	}

  //socket.emit('adduser', prompt("What's your name?"));
  
};

onSocketDisconnect  = function() {
  ErrorConexion();
};

onSocketCartaMovida = function() {
 log(false,'carta movida')
 //log(false,this.hola)
//Level.prototype.Dibuja();
//Dibuja();
 
 };
 
 onSocketBarajaPedida = function() {
 log(false,'ya te la env�o')
 //log(false,this.hola)
//Level.prototype.Dibuja();

 
 };

 onSocketComenzadPartida=function() {
	log(true,"Le llega");
	textListos.visible=false;
	textEligiendo.visible=false;
	PartidaComenzada=true;
	//alert("COMENZADA");
	//console.log("Llamada 9");
	CalculaControl();
	//console.log("Antes de prepararcaracteristicamano");
	PreparaCaracteristicasMano();	
	//console.log("Después de prepararcaracteristicamano");
	
 };
 
 MensajeEsperandoJugadores=function()
 {
	
	textEligiendo.visible=false;
	textEsperando.visible=true;
    textEsperando.alpha = 0;

    //  Create our tween. This will fade the sprite to alpha 1 over the duration of 2 seconds
    var tween = game_objeto.add.tween(textEsperando).to( { alpha: 1 }, 1500, "Linear", true, 0, -1);

    //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
    //  The 3000 tells it to wait for 3 seconds before starting the fade back.
    tween.yoyo(true, 3000);
	

 }
 
  MensajeEsperandoListos=function()
 {
	
	textEligiendo.visible=false;
	textListos.visible=true;
    textListos.alpha = 0;

    //  Create our tween. This will fade the sprite to alpha 1 over the duration of 2 seconds
    var tween = game_objeto.add.tween(textListos).to( { alpha: 1 }, 1500, "Linear", true, 0, -1);

    //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
    //  The 3000 tells it to wait for 3 seconds before starting the fade back.
    tween.yoyo(true, 3000);
	

 }
 
  MensajeEsperandoElegir=function()
 {
	 var i;
	 var vivo=0;
	 
	for (i=0;i<=ArrayDelaPropiaSala.length-1;i++)
	{
		if (ArrayDelaPropiaSala[i].Desconectado==false)
		{
			vivo=i;
		}
	}
	 
	textEsperando.visible=false;
	if (ArrayDelaPropiaSala.length>0)
	{
		textEligiendo.text=ArrayDelaPropiaSala[vivo].Nombre+" está eligiendo pareja";
	}
	else
	{
		textEligiendo.text="Se está eligiendo pareja";
	}
	
	textEligiendo.visible=true;
    textEligiendo.alpha = 0;

	
    //  Create our tween. This will fade the sprite to alpha 1 over the duration of 2 seconds
    var tween = game_objeto.add.tween(textEligiendo).to( { alpha: 1 }, 1500, "Linear", true, 0, -1);

    //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
    //  The 3000 tells it to wait for 3 seconds before starting the fade back.
    tween.yoyo(true, 3000);
	

 }
 
 DevuelveUbicacionCartaSegunOrdenConectado=function(OrdenConectado)
 {
	 var Letra;
	 
 }
 
 ClickAvatar=function(NumeroAvatar)
 {
	 
	var QuienDeshabilito;
	var Letra;
	var i;
	var Encontrado=false;
	var Jugador;
	var TextoFormateado;
	
	Jugador=NumeroAvatar;
	
	Letra=DevuelveUbicacionCarta(Jugador);
	log(true,"ALGO CON LA Letra "+Letra);
	for (i=0;i<=ArrayChatDeshabilitado.length-1;i++)
	{
		if (ArrayChatDeshabilitado[i]==Letra)
		{
			Encontrado=true;
			break;
		}
	}
	
	if (Encontrado==false) //Hay que deshabilitarlo
	{
		if(Letra!="D")
		{
			ArrayChatDeshabilitado.push(Letra);
		
			
			if (NumeroAvatar==1)
			 {
				AvatarSprite1.tint=Phaser.Color.getColor(110,110,110);
			 }
			 if (NumeroAvatar==2)
			 {
				 AvatarSprite2.tint=Phaser.Color.getColor(110,110,110);
			 }	
			 if (NumeroAvatar==3)
			 {
				 AvatarSprite3.tint=Phaser.Color.getColor(110,110,110);
			 }	 
			 if (NumeroAvatar==4)
			 {
				 AvatarSprite4.tint=Phaser.Color.getColor(110,110,110);
			 }	 
			 
		 }
	}
	else
	{
		ArrayChatDeshabilitado.splice(i,1);
		if (NumeroAvatar==1)
		 {
			AvatarSprite1.tint=Phaser.Color.getColor(255,255,255);
		 }
		 if (NumeroAvatar==2)
		 {
			 AvatarSprite2.tint=Phaser.Color.getColor(255,255,255);
		 }	
		 if (NumeroAvatar==3)
		 {
			 AvatarSprite3.tint=Phaser.Color.getColor(255,255,255);
		 }	 
		 if (NumeroAvatar==4)
		 {
			 AvatarSprite4.tint=Phaser.Color.getColor(255,255,255);
		 }	 
	}
	
	if (Letra=="D")
	{
		
		TextoFormateado=EscribirTextoGuay("Pulse sobre la foto de los jugadores\npara activar o desactivar el chat con ellos",40);
	}
	else
	{
		if (Encontrado==false)
		{
			TextoFormateado=EscribirTextoGuay("Chat deshabilitado con "+ArrayDelaPropiaSala[NumeroAvatar-1].Nombre,40);
			
			if (ArrayDelaPropiaSala[0].Amigo==false)
			{
				socket.emit("enviar_silenciar", ArrayInfoJugador[0].JugadorFull, ArrayInfoJugador[0].IP, ArrayDelaPropiaSala[NumeroAvatar-1].JugadorFull,Habitacion);				
			}
		}
		else
		{
			TextoFormateado=EscribirTextoGuay("Chat habilitado con "+ArrayDelaPropiaSala[NumeroAvatar-1].Nombre,40);
			if (ArrayDelaPropiaSala[0].Amigo==false)
			{
				socket.emit("enviar_desilenciar", ArrayInfoJugador[0].JugadorFull, ArrayInfoJugador[0].IP, ArrayDelaPropiaSala[NumeroAvatar-1].JugadorFull,Habitacion);
			}
		}
		

	}
	

	var tw = game_objeto.add.tween(TextoFormateado).to( { alpha: 0 }, 1000, EfectoTween1, true,1000);
	
	 
 }
 onSocketconectadosSala = function(conectados,room,ArrayJugadorSalas) {
	 OcultarFacebook();
	 Habitacion=room;
	 log(false,'conectados: '+conectados)
	 log(false,'Habitacion: '+Habitacion)

	
	
	var LongitudArray = ArrayJugadorSalas.length-1;

	var i;
	var u;
	var Encontrado;
	var Foto;
	//var textJugador;
	var LetraMazo;
	var x1;
	var y1;
	var x1text;
	var y1text;
	var NumeroJugadorTemporal=0;
	var imagen1="";
	var imagen2="";
	var imagen3="";
	var imagen4="";

	var tapete;
	var TapeteRemoto="";
	var TapeteRemotoLoader="";
	var DorsoRemotoLoader="";
	var DorsoRemoto="";

	//Onjetos Loader;
	var a;
	var b;
	var c;
	var d;

	BotonSalir.x=xSalir;
	//ArrayDelaPropiaSala.splice(0,1000);

	BotonAleatorio.visible=false;
	BotonAmigos.visible=false;
	
	//if (textEsperando==undefined)
	//{
	log(true,"Longitud de conectados sala aleatoria "+LongitudArray)

	
	
	OcultaPantallaLogin();
		
	log(true,"Se borra "+LongitudArray);
	for (i=0;i<=LongitudArray;i++){
		//console.log("SOCKETS: ");
		//console.log("SOCKETS ID: "+socket.id);
		//console.log("SOCKETS JUGADOR: "+ArrayJugadorSalas[i].JugadorSala);
		if (ArrayJugadorSalas[i].Sala==room)
		{
			
			Encontrado=false;
			for (u=0;u<=ArrayDelaPropiaSala.length-1;u++)
			{
				if (ArrayJugadorSalas[i].JugadorSala==ArrayDelaPropiaSala[u].JugadorSala)
				{
					Encontrado=true;
				}			
			}	
			
			if (Encontrado==false)
			{
				
				tapete=ArrayJugadorSalas[i].Tapete;
				if (cuatrotres==true)
				{
					tapete=tapete.replace('.jpg','_43.jpg');
				}
		
				if (ArrayJugadorSalas[i].Foto==null)
				{					
					Foto=Maquina+"/assets/images/desconocido.png";
				}
				else
				{
					Foto=ArrayJugadorSalas[i].Foto
				}
				
				//console.log("Mi nivelaco "+ArrayJugadorSalas[i].Nivel);
				ArrayDelaPropiaSala.push(new ObjetoSala(ArrayJugadorSalas[i].JugadorSala,ArrayJugadorSalas[i].Sala,false,ArrayJugadorSalas[i].Nombre,
					ArrayJugadorSalas[i].Sexo,Foto,null,ArrayJugadorSalas[i].Desconectado,ArrayJugadorSalas[i].Dorso,tapete, ArrayJugadorSalas[i].Amigo , ArrayJugadorSalas[i].JugadorFull, (i+1), "",ArrayJugadorSalas[i].Nombre, ArrayJugadorSalas[i].Admin,ArrayJugadorSalas[i].IP,
					ArrayJugadorSalas[i].Nivel,ArrayJugadorSalas[i].CampeonSemanal
					))
					
				//console.log("Campeon semanal "+ArrayJugadorSalas[i].CampeonSemanal+" "+ArrayJugadorSalas[i].Nivel);	
					
				//log(true,"Se está recibiendo "+ArrayJugadorSalas[i].Nombre+" "+ArrayJugadorSalas[i].Desconectado	);
				//log(true,"Se ha guardado ");
				//log(true,"Se ha guardado "+ArrayDelaPropiaSala[ArrayDelaPropiaSala.length-1].Desconectado);
			}
		}			
	}

	if (LongitudArray<=2)
	{
		MensajeEsperandoJugadores();
	}
	else
	{
		MensajeEsperandoElegir();
	}
	
	//console.log("Llamada 10");
	CalculaControl();

	//Saco el bucle porque si se conecta el segundo, no sabe quien es
	 for (var i=0;i<=ArrayDelaPropiaSala.length-1;i++){
		//console.log("RECIBIENDO JUGADORES: "+ArrayDelaPropiaSala[i].JugadorSala+  "    "+socket.id)
		if (ArrayDelaPropiaSala[i].JugadorSala==socket.id)
		{
			
			
			SoyElJugador=i+1;
			//console.log("CHANGE1: "+SoyElJugador);
			
			BackFondo.visible=false;
			BackTapete.visible=true;
			
			//CrearTapete();
			
			
			log(true,ArrayDelaPropiaSala[i].Tapete);
			log(true,ArrayDelaPropiaSala[i].Dorso);
			//console.log("CHAT "+ArrayInfoJugador[0].ChatDisponible);
			inputField.visible=true;
			if (ArrayInfoJugador.length>0)
			{
				inputField.visible=ArrayInfoJugador[0].ChatDisponible;	 //1.0.8
			}

			
		}
	}


		
	DibujaJugadores();
	


	if (ArrayDelaPropiaSala.length==4){
		BotonRobots.visible=false;
		var UltimoVivo;
		for (i=0;i<=ArrayDelaPropiaSala.length-1;i++)
		{
			//console.log("Antes "+ArrayDelaPropiaSala[i].Nombre+" Orden: "+ ArrayDelaPropiaSala[i].OrdenEnSala+ " "+ArrayDelaPropiaSala[i].JugadorSala + " "+socket.id)
			if (ArrayDelaPropiaSala[i].Desconectado==false)
			{
				UltimoVivo=ArrayDelaPropiaSala[i].JugadorSala;
			}
		}

		

		 if (UltimoVivo==socket.id){ //Se crea la baraja
			
			vTurno=1;
			MostrarElegirPareja(true);

		 }
		
	 }
	 else
	 {
		 for (i=0;i<=ArrayDelaPropiaSala.length-1;i++)
		 {
			if (ArrayDelaPropiaSala[i].Desconectado==false)
			{
				UltimoVivo=ArrayDelaPropiaSala[i].JugadorSala;
			} 
		 }
		 
		 if (UltimoVivo==socket.id)
		 {			
			BotonRobots.visible=true;
		 }
		 else
		 {
			BotonRobots.visible=false;
		 }
		 
		 
	 }
 };
 
 CalculaAvatarLogro=function(Nivel,Origen)
 {
	 //Origen 1: Tabla Clasificacion Origen 2: Avatar
	 var Logro="SinLogro";
	 var Imagen="sin_logro.png";
	 
 
	 
	 var Devolver="";
	 if (Nivel==1)
	 {
		 Logro='PRO';
		 Imagen='nivel_pro.png'
	 }
	 if (Nivel==2)
	 {
		 Logro='Ninja';
		 Imagen='nivel_ninja.png'
	 }
	 if (Nivel==3)
	 {
		 Logro='Mago';
		 Imagen='nivel_mago.png'
	 }
	 if (Nivel==4)
	 {
		 Logro='Diplomado';
		 Imagen='nivel_diplomado.png'
	 }	 
	
	if (Origen==1)
	{
		Devolver=Imagen;
	}
	else
	{
		Devolver=Logro;
	}
	
	return Devolver;
	
 }
 		
 
  DibujaJugadores=function(){
	 
	var i;
	var u;
	var Encontrado;
	//var textJugador;
	var LetraMazo;
	var x1;
	var y1;
	var x1text;
	var y1text;
	var NumeroJugadorTemporal=0;
	var imagen1="";
	var imagen2="";
	var imagen3="";
	var imagen4="";

	var TapeteRemoto="";
	var TapeteRemotoLoader="";
	var DorsoRemotoLoader="";
	var DorsoRemoto="";

	//Onjetos Loader;
	var a;
	var b;
	var c;
	var d;
	
	var Desplazamiento;

	for (i=0;i<=ArrayDelaPropiaSala.length-1;i++){
		//console.log("i   "+i);
		NumeroJugadorTemporal=i+1;
		//if (ValidaDibujoAvatars(NumeroJugadorTemporal)==true)
		if (1==1)
		{
	 		log(true,"Jugador Temporal "+NumeroJugadorTemporal);
			//console.log("1");
		
			LetraMazo=DevuelveUbicacionCarta(NumeroJugadorTemporal);
			//console.log("1.1");
			log(true,"Ha devuelto "+LetraMazo);
			PosicionCartas("D");
			//console.log("1.2");
			//console.log(LetraMazo);
			Desplazamiento=0;
			if (LetraMazo=="D")
			{
				//console.log("1.3");
				x1=devuelveX("D_5",0)+110;
				//console.log("1.4");
				y1=devuelveY("L_0",0)+20;
				//ArrayDelaPropiaSala[i].Nombre="texto largo en la parte de abajo"
				//console.log("1.5");
				var styleJugador = { font: "bold 18px Arial", fill: "#fff", align: "left", boundsAlignH: "left", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
				//console.log("1.6");
				x1text=x1+85;
				y1text=y1;
				
				Desplazamiento=75;

			}
			if (LetraMazo=="R")
			{
				//x1=devuelveX("R_0",0)-30;
				if (cuatrotres==false)
				{
					x1=devuelveX("D_5",0)+245;
				}
				else
				{
					x1=devuelveX("R_5",0)-20;
				}
			//	x1=500;
				//if (cuatrotres==false)
				//{
				y1=devuelveY("R_5",0)-147
				//}
				//else
				//{
				//	y1=devuelveY("R_5",0)
				//}
				//ArrayDelaPropiaSala[i].Nombre="Pepito Grillo es gay ya te digo";
				//ArrayDelaPropiaSala[i].Nombre="Ivan";
				var styleJugador = { font: "bold 18px Arial", fill: "#fff", align: "right", boundsAlignH: "right", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
				x1text=x1-200;
				//x1text=100;
				y1text=y1;	
				Desplazamiento=-55;				
				
			}
			if (LetraMazo=="U")
			{
				x1=devuelveX("D_0",0)+25;
				//x1=devuelveX("D_5",0)+90;
				if (cuatrotres==false)
				{
					y1=devuelveY("R_5",0)-147;
				}
				else
				{
					y1=devuelveY("U_0",0)-95;
				}
				
				//ArrayDelaPropiaSala[i].Nombre="y algo mariposón. Tb lo se"
				var styleJugador = { font: "bold 18px Arial", fill: "#fff", align: "right", boundsAlignH: "right", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
				x1text=x1-200;
				y1text=y1;		
				Desplazamiento=-55;				
			}
			  
			if (LetraMazo=="L")
			{
				//console.log("1.11");
				x1=devuelveX("L_0",0);
				//console.log("1.12");
				y1=devuelveY("L_0",0)+20;
				//ArrayDelaPropiaSala[i].Nombre="Otro texto largo en la parte izquierda"
				//console.log("1.13");
				var styleJugador = { font: "bold 18px Arial", fill: "#fff", align: "left", boundsAlignH: "left", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
				//console.log("1.14");
				x1text=x1+85;
				y1text=y1;		
				Desplazamiento=75;				
			}
			//console.log("i "+i );
				//console.log("Dice que no existe "+ArrayDelaPropiaSala[i].Desconectado);
					/*var Desplazamiento=0
					if(LetraMazo=="D" || LetraMazo=="U" || LetraMazo=="L" || LetraMazo=="R")
					{
						Desplazamiento=75
					}
					else
					{
						Desplazamiento=-55
					}*/
					
				if (i==0){
					//textJugador1 = game_objeto.add.text(x1+60, y1+15, ArrayDelaPropiaSala[i].Nombre,style);
					//console.log("2");
					//console.log("Avatar "+AvatarSprite1);
					if (AvatarSprite1!=undefined)
					{
						AvatarSprite1.destroy();
						textJugador1.destroy();
					}	
					AvatarSprite1= game_objeto.add.sprite(x1*(-1),y1*(-1),'1');
					AvatarSprite1.inputEnabled = true;
					//console.log("3");
					AvatarSprite1.events.onInputDown.add( function(){ ClickAvatar(1); } );
					
					if (AvatarMedalla1!=undefined)
					{
						AvatarMedalla1.destroy();
					}
					

					
					if (ArrayDelaPropiaSala[i].CampeonSemanal==true && ArrayDelaPropiaSala[i].Desconectado==false)
					{
						AvatarMedalla1 = game_objeto.add.sprite(x1+Desplazamiento,y1+55,'Medalla');
					}
					
					if (AvatarLogro1!=undefined)
					{
						AvatarLogro1.destroy();
					}
					
					if (ArrayDelaPropiaSala[i].Nivel>0 && ArrayDelaPropiaSala[i].Desconectado==false)
					{
						AvatarLogro1 = game_objeto.add.sprite(x1+Desplazamiento,y1-35,CalculaAvatarLogro(ArrayDelaPropiaSala[i].Nivel,2));					
					}
					
					textJugador1=game_objeto.add.text(0, 0, "",styleJugador);
					textJugador1.setTextBounds(x1text, y1text, 190, 90);
					
					//textJugador1.x=(x1text);
					//textJugador1.y=(y1text);
					//alert("jj");
					//textJugador1.style=styleJugador;
					
					textJugador1.text="";
					textJugador1.text=ArrayDelaPropiaSala[i].NombreOri;
					
					
					
					imagen1=ArrayDelaPropiaSala[i].Foto
					if (Avatar1==undefined)
					{
						Avatar1=new Phaser.Loader(game_objeto);
					}
					
					if ( ArrayDelaPropiaSala[i].Desconectado==false)
					{
						Avatar1.crossOrigin ="Anonymous"
						Avatar1.image('imagen1', ArrayDelaPropiaSala[i].Foto,true);
						//console.log("Foto "+ArrayDelaPropiaSala[i].Foto);
						Avatar1.onFileComplete.add( function() { fileComplete1();  }  );
						Avatar1.start();
					}
					else
					{
						textJugador1.text="";
						textJugador1.text="Ordenador 1";
						ArrayDelaPropiaSala[i].Nombre="Ordenador 1"
						var key='Maquina'					
						if (AvatarSprite1.x<0)
						{
							AvatarSprite1.x=AvatarSprite1.x*(-1);
							AvatarSprite1.y=AvatarSprite1.y*(-1);
						}
						AvatarSprite1.name = key;
						AvatarSprite1.loadTexture(key, 0);
						AvatarSprite1.width=AnchoFoto;
						AvatarSprite1.height=AnchoFoto;	
					}
					
				}
				if (i==1){
					//textJugador2 = game_objeto.add.text(x1+60, y1+15, ArrayDelaPropiaSala[i].Nombre,style);
					if (AvatarSprite2!=undefined)
					{
						AvatarSprite2.destroy();
						textJugador2.destroy();
					}	
					AvatarSprite2= game_objeto.add.sprite(x1*(-1),y1*(-1),'1');
					AvatarSprite2.inputEnabled = true;
					AvatarSprite2.events.onInputDown.add( function(){ ClickAvatar(2); } );
	
					if (AvatarMedalla2!=undefined)
					{
						AvatarMedalla2.destroy();
					}
					
					if (ArrayDelaPropiaSala[i].CampeonSemanal==true  && ArrayDelaPropiaSala[i].Desconectado==false)
					{
						AvatarMedalla2 = game_objeto.add.sprite(x1+Desplazamiento,y1+55,'Medalla'); //-55
					}
					
					if (AvatarLogro2!=undefined)
					{
						AvatarLogro2.destroy();
					}
					
					if (ArrayDelaPropiaSala[i].Nivel>0  && ArrayDelaPropiaSala[i].Desconectado==false)
					{
						AvatarLogro2 = game_objeto.add.sprite(x1+Desplazamiento,y1-35,CalculaAvatarLogro(ArrayDelaPropiaSala[i].Nivel,2));							
					}
					
					textJugador2=game_objeto.add.text(0, 0, "",styleJugador);
					textJugador2.setTextBounds(x1text, y1text, 190, 90);
					
				//	textJugador2.x=(x1text);
				//	textJugador2.y=(y1text);
					//textJugador2.setTextBounds(100, 100, 200, 200);
					//textJugador2.style=styleJugador;
					
					textJugador2.text="";
					textJugador2.text=ArrayDelaPropiaSala[i].NombreOri;
					//console.log("Texto jugador 2: "+ArrayDelaPropiaSala[i].Nombre);
					
					imagen2=ArrayDelaPropiaSala[i].Foto
					if (Avatar2==undefined)
					{
						Avatar2=new Phaser.Loader(game_objeto);
					}
					
					
					if ( ArrayDelaPropiaSala[i].Desconectado==false)
					{
						Avatar2.crossOrigin ="Anonymous"
						//console.log("Foto "+ArrayDelaPropiaSala[i].Foto);
						Avatar2.image('imagen2', ArrayDelaPropiaSala[i].Foto,true);
						Avatar2.onFileComplete.add( function() { fileComplete2();  }  );
						Avatar2.start();
					}
					else
					{
						textJugador2.text="";
						textJugador2.text="Ordenador 2";
						ArrayDelaPropiaSala[i].Nombre="Ordenador 2"
						var key='Maquina'					
						if (AvatarSprite2.x<0)
						{
							AvatarSprite2.x=AvatarSprite2.x*(-1);
							AvatarSprite2.y=AvatarSprite2.y*(-1);
						}
						AvatarSprite2.name = key;
						AvatarSprite2.loadTexture(key, 0);
						AvatarSprite2.width=AnchoFoto;
						AvatarSprite2.height=AnchoFoto;	
					}
				}
				if (i==2){
					//textJugador3 = game_objeto.add.text(x1+60, y1+15, ArrayDelaPropiaSala[i].Nombre,style);
					if (AvatarSprite3!=undefined)
					{
						AvatarSprite3.destroy();
						textJugador3.destroy();
					}
					AvatarSprite3= game_objeto.add.sprite(x1*(-1),y1*(-1),'1');
					AvatarSprite3.inputEnabled = true;
					AvatarSprite3.events.onInputDown.add(  function(){ ClickAvatar(3); } );
					
					
					if (AvatarMedalla3!=undefined)
					{
						AvatarMedalla3.destroy();
					}
					if (ArrayDelaPropiaSala[i].CampeonSemanal==true && ArrayDelaPropiaSala[i].Desconectado==false)
					{
						AvatarMedalla3 = game_objeto.add.sprite(x1+Desplazamiento,y1+55,'Medalla'); //-55
					}

					if (AvatarLogro3!=undefined)
					{
						AvatarLogro3.destroy();
					}
					
					if (ArrayDelaPropiaSala[i].Nivel>0 && ArrayDelaPropiaSala[i].Desconectado==false)
					{
						AvatarLogro3 = game_objeto.add.sprite(x1+Desplazamiento,y1-35,CalculaAvatarLogro(ArrayDelaPropiaSala[i].Nivel,2));			
					}
					
					textJugador3=game_objeto.add.text(0, 0, "",styleJugador);
					textJugador3.setTextBounds(x1text, y1text, 190, 90);
					//textJugador3.x=(x1text);
					//textJugador3.y=(y1text);
					//textJugador3.style=styleJugador;
					textJugador3.text="";
					textJugador3.text=ArrayDelaPropiaSala[i].NombreOri;
					//console.log("Texto jugador 3: "+ArrayDelaPropiaSala[i].Nombre);
					
					imagen3=ArrayDelaPropiaSala[i].Foto
					imagen3=ArrayDelaPropiaSala[i].Foto
					if (Avatar3==undefined)
					{
						Avatar3=new Phaser.Loader(game_objeto);
					}
					if ( ArrayDelaPropiaSala[i].Desconectado==false)
					{
						Avatar3.crossOrigin ="Anonymous"
						//console.log("Foto "+ArrayDelaPropiaSala[i].Foto);
						Avatar3.image('imagen3', ArrayDelaPropiaSala[i].Foto,true);
						Avatar3.onFileComplete.add( function() { fileComplete3();  }  );
						Avatar3.start();
					}
					else
					{
						textJugador3.text="";
						textJugador3.text="Ordenador 3";
						ArrayDelaPropiaSala[i].Nombre="Ordenador 3"
						var key='Maquina'					
						if (AvatarSprite3.x<0)
						{
							AvatarSprite3.x=AvatarSprite3.x*(-1);
							AvatarSprite3.y=AvatarSprite3.y*(-1);
						}
						AvatarSprite3.name = key;
						AvatarSprite3.loadTexture(key, 0);
						AvatarSprite3.width=AnchoFoto;
						AvatarSprite3.height=AnchoFoto;	
					}
				}
				if (i==3){
					//textJugador4 = game_objeto.add.text(x1+60, y1+15, ArrayDelaPropiaSala[i].Nombre,style);
					//console.log("1.31");
					if (AvatarSprite4!=undefined)
					{
						AvatarSprite4.destroy();
						textJugador4.destroy();
					}					
					AvatarSprite4= game_objeto.add.sprite(x1*(-1),y1*(-1),'1');
					

					
					//console.log("1.32");
					AvatarSprite4.inputEnabled = true;
					//console.log("1.33");
					AvatarSprite4.events.onInputDown.add( function(){ ClickAvatar(4); } );
					//console.log("1.34");
	
					if (AvatarMedalla4!=undefined)
					{
						AvatarMedalla4.destroy();
					}
					if (ArrayDelaPropiaSala[i].CampeonSemanal==true && ArrayDelaPropiaSala[i].Desconectado==false)
					{
						AvatarMedalla4 = game_objeto.add.sprite(x1+Desplazamiento,y1+55,'Medalla');//75
					}
					
					if (AvatarLogro4!=undefined)
					{
						AvatarLogro4.destroy();
					}
					
					if (ArrayDelaPropiaSala[i].Nivel>0 && ArrayDelaPropiaSala[i].Desconectado==false)
					{
						AvatarLogro4 = game_objeto.add.sprite(x1+Desplazamiento,y1-35,CalculaAvatarLogro(ArrayDelaPropiaSala[i].Nivel,2));		
					}
					
					textJugador4=game_objeto.add.text(0, 0, "",styleJugador);
					textJugador4.setTextBounds(x1text, y1text, 190, 90);
					//textJugador4.x=(x1text);
					//textJugador4.y=(y1text);
					//textJugador4.style=styleJugador;
					textJugador4.text="";
					textJugador4.text=ArrayDelaPropiaSala[i].NombreOri;
					//console.log("Texto jugador 4: "+ArrayDelaPropiaSala[i].Nombre);
					
					imagen4=ArrayDelaPropiaSala[i].Foto
					imagen4=ArrayDelaPropiaSala[i].Foto
					if (Avatar4==undefined)
					{
						Avatar4=new Phaser.Loader(game_objeto);
					}
					
					if ( ArrayDelaPropiaSala[i].Desconectado==false)
					{
						Avatar4.crossOrigin ="Anonymous"
						//console.log("1.35");
						Avatar4.image('imagen4', ArrayDelaPropiaSala[i].Foto,true);
						//console.log("1.36");
						//console.log("Foto "+ArrayDelaPropiaSala[i].Foto);
						Avatar4.onFileComplete.add( function() { fileComplete4();  }  );
						Avatar4.start();
						//console.log("1.37");
					}
					else
					{
						textJugador4.text="";
						textJugador4.text="Ordenador 4";
						ArrayDelaPropiaSala[i].Nombre="Ordenador 4"
						var key='Maquina'					
						if (AvatarSprite4.x<0)
						{
							AvatarSprite4.x=AvatarSprite4.x*(-1);
							AvatarSprite4.y=AvatarSprite4.y*(-1);
						}
						AvatarSprite4.name = key;
						AvatarSprite4.loadTexture(key, 0);
						AvatarSprite4.width=AnchoFoto;
						AvatarSprite4.height=AnchoFoto;	
					}	
				}			
		}	
	}	
		
 }
 
 
 
DibujaJugadores2=function(){
	 
	var i;
	var u;
	var Encontrado;
	//var textJugador;
	var LetraMazo;
	var x1;
	var y1;
	var x1text;
	var y1text;
	var NumeroJugadorTemporal=0;
	var imagen1="";
	var imagen2="";
	var imagen3="";
	var imagen4="";

	var TapeteRemoto="";
	var TapeteRemotoLoader="";
	var DorsoRemotoLoader="";
	var DorsoRemoto="";

	//Onjetos Loader;
	var a;
	var b;
	var c;
	var d;

	 
	for (i=0;i<=ArrayDelaPropiaSala.length-1;i++){
		
		NumeroJugadorTemporal=i+1;
		//if (ValidaDibujoAvatars(NumeroJugadorTemporal)==true)
		//{
	 		log(true,"Jugador Temporal "+NumeroJugadorTemporal);
		
					
				//console.log("Dice que no existe "+ArrayDelaPropiaSala[i].Desconectado);
				if (i==0){
				
					textJugador1.text=ArrayDelaPropiaSala[i].NombreOri;
					
					
					
					imagen1=ArrayDelaPropiaSala[i].Foto
					Avatar1=new Phaser.Loader(game_objeto);
					
					if ( ArrayDelaPropiaSala[i].Desconectado==false)
					{
						Avatar1.crossOrigin ="Anonymous"
						Avatar1.image('imagen1', ArrayDelaPropiaSala[i].Foto);
						//console.log("Foto "+ArrayDelaPropiaSala[i].Foto);
						Avatar1.onFileComplete.add( function() { fileComplete1();  }  );
						Avatar1.start();
					}
					else
					{
						textJugador1.text="Ordenador 1";
						ArrayDelaPropiaSala[i].Nombre="Ordenador 1"
						var key='Maquina'					
						AvatarSprite1.name = key;
						AvatarSprite1.loadTexture(key, 0);	
						AvatarSprite1.width=AnchoFoto;
						AvatarSprite1.height=AnchoFoto;							
					}
					
				}
				if (i==1){
					
					textJugador2.text=ArrayDelaPropiaSala[i].NombreOri;
					
					imagen2=ArrayDelaPropiaSala[i].Foto
					Avatar2=new Phaser.Loader(game_objeto);
					if ( ArrayDelaPropiaSala[i].Desconectado==false)
					{
						Avatar2.crossOrigin ="Anonymous"
						Avatar2.image('imagen2', ArrayDelaPropiaSala[i].Foto);
						//console.log("Foto "+ArrayDelaPropiaSala[i].Foto);
						Avatar2.onFileComplete.add( function() { fileComplete2();  }  );
						Avatar2.start();
					}
					else
					{
						textJugador2.text="Ordenador 2";
						ArrayDelaPropiaSala[i].Nombre="Ordenador 2"
						var key='Maquina'					
						AvatarSprite2.name = key;
						AvatarSprite2.loadTexture(key, 0);
						AvatarSprite2.width=AnchoFoto;
						AvatarSprite2.height=AnchoFoto;							
					}
				}
				if (i==2){
					
					textJugador3.text=ArrayDelaPropiaSala[i].NombreOri;
					
					imagen3=ArrayDelaPropiaSala[i].Foto
					Avatar3=new Phaser.Loader(game_objeto);
					if ( ArrayDelaPropiaSala[i].Desconectado==false)
					{
						Avatar3.crossOrigin ="Anonymous"
						Avatar3.image('imagen3', ArrayDelaPropiaSala[i].Foto);
						//console.log("Foto "+ArrayDelaPropiaSala[i].Foto);
						Avatar3.onFileComplete.add( function() { fileComplete3();  }  );
						Avatar3.start();
					}
					else
					{
						textJugador3.text="Ordenador 3";
						ArrayDelaPropiaSala[i].Nombre="Ordenador 3"
						var key='Maquina'					

						AvatarSprite3.name = key;
						AvatarSprite3.loadTexture(key, 0);
						AvatarSprite3.width=AnchoFoto;
						AvatarSprite3.height=AnchoFoto;							
					}
				}
				if (i==3){
					
					textJugador4.text=ArrayDelaPropiaSala[i].NombreOri;
					
					imagen4=ArrayDelaPropiaSala[i].Foto
					Avatar4=new Phaser.Loader(game_objeto);
					if ( ArrayDelaPropiaSala[i].Desconectado==false)
					{
						Avatar4.crossOrigin ="Anonymous"
						Avatar4.image('imagen4', ArrayDelaPropiaSala[i].Foto);
						//console.log("Foto "+ArrayDelaPropiaSala[i].Foto);
						Avatar4.onFileComplete.add( function() { fileComplete4();  }  );
						Avatar4.start();
					}
					else
					{
						textJugador4.text="Ordenador 4";
						ArrayDelaPropiaSala[i].Nombre="Ordenador 4"
						var key='Maquina'					
						AvatarSprite4.name = key;
						AvatarSprite4.loadTexture(key, 0);
						AvatarSprite4.width=AnchoFoto;
						AvatarSprite4.height=AnchoFoto;							
					}	
				}			
		//}	
	}	
		
 } 
CalculaControl=function()
{
	var i;
	var u;
	var Vivo;
	
	ArrayDelaPropiaSala.sort(sort_by('OrdenEnSala', false, parseFloat));
	
	RecalculaDesconectados();
	
	//console.log("Jugadores Desconectados: "+ArrayJugadoresDesconectados.length);
	
	var Vivo;
	/*for (i=0;i<=ArrayDelaPropiaSala.length-1;i++)
	{
		
		Vivo=true;
		for (u=0;u<=ArrayJugadoresDesconectados.length-1;u++)
		{
			//console.log("Jugador desc "+ArrayJugadoresDesconectados[u].Jugador);
			if ( (i+1)==ArrayJugadoresDesconectados[u].Jugador)
			{
				Vivo=false;	
				//console.log("Muerto "+ArrayJugadoresDesconectados[u].Jugador);				
			}		
			else
			{
				//console.log("Vivo "+ArrayJugadoresDesconectados[u].Jugador);		
			}
		}	
		if (Vivo==true)
		{			
			break;
		}
	}*/
	
	Vivo=true
	
	//for (i=0;i<=ArrayDelaPropiaSala.length-1;i++)
	//{
		//console.log("Volteando "+ArrayDelaPropiaSala[i].Desconectado+" "+ArrayDelaPropiaSala[i].Jugador);

		
	//}
	
	for (i=0;i<=ArrayDelaPropiaSala.length-1;i++)
	{
		//console.log("Volteando "+ArrayDelaPropiaSala[i].Desconectado+" "+ArrayDelaPropiaSala[i].Jugador);
		if (ArrayDelaPropiaSala[i].Desconectado==false)
		{			
			break;
		}
		
	}
	
	//console.log("Calculando el control.."+Vivo+" "+ArrayDelaPropiaSala.length+" "+ArrayJugadoresDesconectados.length)
	if (Vivo==true)
	{
		QuienTomaElControl=(i+1);
		log(true,"TOMA EL CONTROL DSDE CONECTADOS: "+QuienTomaElControl);
		
		//console.log("** Calcula Control");
		//console.log("Hace el amago")
		if (IADesconectados(vRonda)==true) //Para que cuando comience partida, empiece el contador en el jugador que corresponda. 
		//Con todos los cambios, dej� de funcionar.
		{
			ContadorTurno(vRonda);
		}
		

		
	}
	
	
	
}
 
consol=function()
{
	log(false,"a");
}
onSocketBarajaDesdeServer = function(Data,QuienReparte,idPartidaServer) {
//Tipo Idas o Vueltas
	
 
 //log(false,this.hola)
//Level.prototype.Dibuja();
var i;
var Desconectado=false;
var QueHago;
//console.log("Me llega la id partida "+idPartidaServer)
idPartida=idPartidaServer;
QueHago=QuienReparte;
/*QueHago=QuienReparte-1;
if (QueHago==0)
{
	QueHago=4;
}*/

	log(true,'El que reparte es '+QuienReparte+" y yo soy "+SoyElJugador )
	//alert('El que reparte es '+QuienReparte+" y yo soy "+SoyElJugador );
	
	/*for (i=0;i<=ArrayJugadoresDesconectados.length-1;i++)
	{
		if (QuienReparte==ArrayJugadoresDesconectados[i].Jugador)
		{
			Desconectado=true;
		}
	}*/
	
	
//if (vTurno==ArrayJugadoresDesconectados[i].Jugador && SoyElJugador==QuienTomaElControl)
	
	
	if ( //(QuienReparte!=SoyElJugador &&  Desconectado==true && QuienTomaElControl==SoyElJugador  )  

			(ValidaRepartosJugador()==true) 
			//!( QuienReparte==SoyElJugador ||  (QuienReparte!=SoyElJugador && QuienTomaElControl==SoyElJugador && Desconectado==true))  
		
		) //(MazoD.length==0 && MazoL.length==0 && MazoR.length==0 && MazoU.length==0)
	{
		
		log(true,'Recibiendo baraja..')
		//MazoEnviarApoyo no se elimina. Se usa por el tema pesta�as y porque se eliminaba la variable en LimpiarVariables

	
//	if (Tipo=="Idas")
//	{
//		vTurno=1;
//	}
	//else{
		log(true,"Creo el Mazo de apoyo");
		//for (i=0;i<=Data.length-1;i++) //A veces acaba antes que el que reparte, se crea el Mazo de apoyo y después se llama, pero creo que lo dejo obsoleto por un timer
		//{
		//	MazoEnviarApoyo.push(new Carta(Data[i].palo,Data[i].idCarta,Data[i].valor,null,null,null));
		//}
		//if (!twRec1.isRunning  && !twRec2.isRunning  && !twRec3.isRunning && !tw1.isRunning && !tw2.isRunning && !tw3.isRunning)
		//{
		//	log(true,"la crea");
		//	CrearBarajaRecibida(Data,QuienReparte);
		//}
		//else
		//{
			log(true,"la crea a malas ");
			
			timerBarajaRecibida.loop(1000, function(){
				//log(true, "Dando vueltas como un capullo2 "+Data.length+" twRec1 "+twRec1.isRunning+" twRec2 "+twRec2.isRunning+" twRec3 "+twRec3.isRunning+" tw1 "+tw1.isRunning+" tw2 "+tw2.isRunning+ "  tw3 "+tw3.isRunning);
				//if (!twRec1.isRunning  && !twRec2.isRunning  && !twRec3.isRunning && !tw1.isRunning && !tw2.isRunning && !tw3.isRunning)
				if (SemaforoTextoPuntuacion.length==0)
					{
						log(true, "Dando vueltas como un capullo");
						timerBarajaRecibida.stop();
						CrearBarajaRecibida(Data,QuienReparte);
					}
				}
			);
			timerBarajaRecibida.start();	
			
		//}
	}
	else
	{
		log(true,"Yo no hago nada con la baraja recibida");
	}


 
 };
 
 
 onSocketCantarDesdeServer= function(JugadorQueMueve,puntos, texto) {
	//TextoCante(JugadorQueMueve,puntos, texto); 
	
	TextoBocadillo(JugadorQueMueve,texto,true,puntos,true);
	//MuestraDorsoCante(JugadorQueMueve,texto,puntos);
	
 };
 
 
onSocketEnvioPosicionDesdeServer = function(JugadorQueMueve,KeyMover,nuevaposicion) {
 log(false,'Recibiendo posicion de jugador'+JugadorQueMueve+": "+KeyMover+" "+nuevaposicion)
 MoverCartaAjena(JugadorQueMueve,KeyMover,nuevaposicion); 
 };
 
 
 onSocketEnvioCentroDesdeServer= function(JugadorQueMueve,KeyMover,turnoRecibido,RondaRecibida,FechaHora) {

	//MensajeError("RECIBO..."+ KeyMover+" y "+JugadorQueMueve);
	var Delay=10;
	
	if (PuntosFin()==true)
	{
		CrearTextoPuntuacion(); 
	}
	else
	{
		
	 //ape SemaforoRondasRapido.push(new ObjetoJugadoresRonda(RondaRecibida,JugadorQueMueve) );
	 
		//console.log("BLOQUEO DESDE SERVER RAPIDO- "+JugadorQueMueve+" "+RondaRecibida+" "+FechaHora);
		if (MazoCentralBuffer.length>0) //1.0.6 Hago un delay
		{
			Delay=700*MazoCentralBuffer.length;	
		}
		//console.log("se");
		var timerdelay = game_objeto.time.create(false);
			timerdelay.add(Delay, function(){
				//console.log("si");
				MoverCentroAjeno(JugadorQueMueve,KeyMover,RondaRecibida,FechaHora); 
		}
		);
		timerdelay.start();
		
	}
	

 }
 
 onSocketCambiar7DesdeServer = function(JugadorQueMueve,KeyMover){
  Cambiar7Ajeno(JugadorQueMueve,KeyMover); 
 }
 
 onSocketEnviarTextoDesdeServer=function(Texto,QuienHabla){
  TextoBocadillo(QuienHabla,Texto,false); 
 }
 

OcultaPantallaLogin=function()
{
	var d;
	
	d=document.getElementById('Login');
		d.style.display = 'none';
	//	d.style.zIndex=-1;
		

}

CierraPantallaLogin=function()
{
	var d;
	
	d=document.getElementById('Login');
		d.style.display = 'none';
	//	d.style.zIndex=-1;
		
	BotonMonoJugador.visible=true;
	BotonMultiJugador.visible=true;
	BotonClasificacion.visible=true; //1.0.8
	BotonContacta.visible=true;
	TextCuentaMundo.visible=true;
	
	BotonAleatorio.visible=false; //1.0.8 resuelve bug cerrar de la x el login.
	BotonAmigos.visible=false; //1.0.8
	BotonSalir.visible=false; //1.0.8
}

ErrorConexion=function()
{
	if (ModoMultijugador==true)
	{
		//var timerErrorConexion = game_objeto.time.create(false);
		//timerErrorConexion.add(5000,function(){
		//	timerErrorConexion.stop();
		//	if (socket.id!=undefined)
		//	{
		if (MuestraErrorDesconexion==true)
		{
			MensajeError("Revise su conexión a internet o inténtelo más tarde.");
		}
		MuestraErrorDesconexion=true;
		//	}
		//});
		//timerErrorConexion.start();
		
		//socket.disconnect();
		IntentaConexionInicial=false;
		

		
		IntentosReconexion++;
		//if (IntentosReconexion>=3 && ModoMultijugador==true)
		if (IntentosReconexion>=2)	
		{
			//SalirConfirmado(); 1.0.81
			//MatarConexionDeMentira();
			SalirConfirmado(); //madremia
			
		}
		
			
	}
	
	//OcultaPantallaLogin();
	
}

MensajeError=function(Texto)
{
	//tocar 1000 y 50
	var styleMarcador = { font: "bold 50px Arial", fill: "#fff", align: "center", boundsAlignH: "center", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 800};	
	var TextError=game_objeto.add.text(0, 0, Texto, styleMarcador);
	//TextMarcador.visible=false;
	TextError.stroke = '#961918';
    TextError.strokeThickness = 4;
    TextError.fill = '#F8E600';		
	//TextMarcador.setTextBounds(960,310,300,100)
	TextError.setTextBounds(100,150,1200,200)
	
	var	twMensajeError = game_objeto.add.tween(TextError).to( { alpha: 0 }, 1500, EfectoTween1, true,1000);
	
	
}

Salir=function(VideoJuego){
	
	//if (ArrayDelaPropiaSala.length==4 || ModoMultijugador==false)
	//{
		MostrarSalir(VideoJuego);
	//}
	//else
	//{
	//	SalirConfirmado();
	//}
}

SalirConfirmado=function()
{
	CancelarAmigos();
	EntradaModoJuego=false;
	//	LimpiarVariablesConexionNueva();
	/*1.0.6 MuestraErrorDesconexion=false;
	try
	{
		socket.disconnect();
		Habitacion=Math.floor(Math.random());
	}
	catch(e){}*/
	
	//BackFondo.visible=true;
	//OcultaClasificacion(); //1.0.8 Daba problemas pero es que además se ejecuta en LimpiarVariablesConexionNueva
	LimpiarVariables();	
	LimpiarVariablesConexionNueva();
	IntentaConexionInicial=true;
	FuerzaSalir=true;
	//game_objeto.state.start("Level");	
	//1.0.6
	
	
	MatarConexion();
	//SocketInicializado=false;
}

SalirDesdeLogueo=function()
{
	CancelarAmigos();
	EntradaModoJuego=false;
	//	LimpiarVariablesConexionNueva();
	MuestraErrorDesconexion=false;
	
	//1.0.8
	/*try 
	{
		socket.disconnect();
		socket=null;
		Habitacion=Math.floor(Math.random());
	}
	catch(e){}
	*/
	
	//BackFondo.visible=true;
	OcultaClasificacion();
	LimpiarVariables();	
	LimpiarVariablesConexionNueva();
	IntentaConexionInicial=true;
	//console.log("Conecta: Llamada SalirDesdeLogueo");			
	//1.0.8 jo ConectaServidor();
	//InicioMultiJugador();
}

EliminarColaMensajes=function(idMensaje,Origen)
{
	var encontrado=false;
	var i;
	
	for (i=0;i<=ArrayAccionesDesconexiones.length-1;i++)
	{
		if (ArrayAccionesDesconexiones[i].IdMsg==idMensaje)
		{
			encontrado=true;
			break;
		}
	}
	if (encontrado==true)
	{
		ArrayAccionesDesconexiones.splice(i,1);
		//console.log("Eliminado mensaje "+Origen+" "+idMensaje)
	}
}	


MuestraTurno=function()
{
	var LetraMazo=DevuelveUbicacionCarta(vTurno);
	var Mazo;
	var i;
	var tween1;
	var tween2;
	var tween3;
	var tween4;
	var u;
	//var
	
	//console.log("Animacion "+LetraMazo);
	
	//AnimacionTurnoON(ObjTurnoD);
	/*ObjTurnoD.visible=true;
	ObjTurnoL.visible=true;
	ObjTurnoR.visible=true;
	ObjTurnoU.visible=true;*/
	
	if (LetraMazo=="D")
	{
		AnimacionTurnoON(ObjTurnoD);
		AnimacionTurnoOFF(ObjTurnoL);
		AnimacionTurnoOFF(ObjTurnoR);
		AnimacionTurnoOFF(ObjTurnoU);	
	}
	
	if (LetraMazo=="U")
	{
		AnimacionTurnoON(ObjTurnoU);
		AnimacionTurnoOFF(ObjTurnoL);
		AnimacionTurnoOFF(ObjTurnoR);
		AnimacionTurnoOFF(ObjTurnoD);
	}
	
	if (LetraMazo=="L")
	{
		AnimacionTurnoON(ObjTurnoL);
		AnimacionTurnoOFF(ObjTurnoU);
		AnimacionTurnoOFF(ObjTurnoR);
		AnimacionTurnoOFF(ObjTurnoD);
	}	
	
	if (LetraMazo=="R")
	{
		AnimacionTurnoON(ObjTurnoR);
		AnimacionTurnoOFF(ObjTurnoU);
		AnimacionTurnoOFF(ObjTurnoL);
		AnimacionTurnoOFF(ObjTurnoD);
	}	
	
	
}	

AnimacionTurnoON=function(Obj)
{
	
	Obj.tint=Phaser.Color.getColor(255,255,255);
	/*var tween;
		
		tween = game_objeto.add.tween(Obj);
		tween.to( {alpha:1

		}
		, vVelocidadCartasReordernar, EfectoTween1,false,500);
		tween.start();
	*/

}

AnimacionTurnoOFF=function(Obj)
{

	Obj.tint=Phaser.Color.getColor(110,110,110);
	/*var tween;
		
		tween = game_objeto.add.tween(Obj);
		tween.to( {alpha:0.5

		}
		, vVelocidadCartasReordernar, EfectoTween1,false,500);
		tween.start();*/

}



/*Level.prototype.render=function(){
	var a;
	a=game_objeto.add.text(0, 0, "");
	a.text=""
	a.text="aaa"+MarcadorNuestro;
}*/