/**
 * Level state.
 */
function Level() {
	Phaser.State.call(this);
}




var proto = Object.create(Phaser.State);
Level.prototype = proto;


var vProduccion=false;

var Maquina;
if (vProduccion==true){
	Maquina='http://xn--guiotepro-n6a.es'
	//Maquina='http://xn--guiotepro-n6a.es:801'
}
else
{
	//Maquina='http://localhost:5000'		
	//Maquina='http://192.168.1.100:5000'		
	Maquina='http://192.168.43.100:5000'		
}


var bmd;
var YMHIHSNADE;
var vSonidoOn;
var FechaIni;
var FechaFin;
var JKCANKPQBB=0;
var SFKLFIJOIO='1.0.7';
var VXEWRTCPMM=true;
var socket;
var EVAILWGGKX=false;
var HKCERVLWFB;
var NHLRWTHYVG=false;
var VKYLOUGFGR=false;
//var LogicalNoticia=false;
var inputField;
var ERQHLTPETK=false;
var BUJELVTIKU;
var ISVLSNLHWR=0;
var IJCSKNTKVH="";

var JLVDFTPUNI=101;
var MFENMIFPUA=3;
var HLBMKNFUWL=1500;//milisegundos
var GWFPRHAYQK=20;//segundos
var XIQDONAJMM;
var KVBNWXDTON;
var RCYRGXLWBR;

var idPartida;

var FXGSEGRXKC=[];
var WUHRYVMYBE=[];
var SXFHAGTGJT=[];
var	CBCNHFGWLU=[];
var	KNVKGHHTYC=[];
var	TWJONOKGHC=[];
var	AGKVNAGGLB=[];
var	ETAUVLWEYR=[];
var VDKOVQXHON=[];
var YBVSVUGPJG=[];
var WSHPROHDIV=[];
var TTJKWKBPWO=[];
var FBSDMRLVEL=[];
var KBESPOUXUK=[];
var JLOISTPAPQ=[];
var BRILHDFUSO=[];
var XYRJNHOCRB=[];
var HAJIKEVCFP=[];
var LSJCRLDUCH=[];
var EGPDVIEJEL=false;
var EHUHWTYXOS=false;
var	VUFCMULFSR;
var	QTQIWVWEOI;
var DDONCKKEVJ;
var	IXWMVXRIVW;
var	QFPBRSSRCY;
var MALHKNCITQ;
var	HCTVQVJJIB;
var	IWGTWFENXM;
var WPVNAOXVJH;
var	posX_U;
var	posY_U;
var NXXLHVGDFY;
var SNVWBLGBPJ=4;
var MEPQMUPTEH=1.5;
var RABUWLOKWX=0.9;
var XQNKTFDREN=1;
var QDTCADQEEX=1.5;
var PVQFVAAAEY=300; //500
var RXKKPILDQT;
var SYXHGDSJDY;
var BDRJVGFWQH;
var PBHYCULPGK;
var UOPIKJVEKS;
var WWFSQDQYYU;
var GSXGWASLIY;
var COTMMCVJWP;
var SemaforoCartaRecibida;

//OJO CON ESTOS ArrayS AL LIMPIAR VARIABLES
var XPBCVAGCDQ=[];
var QLNEIQGEDF=[];
var KYDWXPGHVY=[];
var NBEJWDVLLV=[];
//var ArrayJugadoresDesconectadosID=[];
var XYXCEMMRDC=[];
var JEHYBALODM=[];
var DCOXIXEBRJ=[];

var PWMIBRSDCJ=[];
var NKJHKJHHHE=[];
var ESKTEXAVHU;
var MYQBNBVHKU=false;
var ObjTurnoU;
var ObjTurnoL;
var ObjTurnoD;
var ObjTurnoR;
var MuestraErrorDesconexion=true;

var NQMQGXXHIL = function(TKWCTNGROU,SSUNXNEEHN){
	this.AGTXFNIKQD=TKWCTNGROU
	this.SSUNXNEEHN=SSUNXNEEHN
};
var KTBOJTXFEU=[];
var BSFNXQXOTD=[];
var LUCRWXJMDR=1;
var KKPQLKMIQR=[];
var HBFBHWJQSQ=false;
var YJNIRPCWEI;
var JKLJKLRIRI;


var XAXPEHVIAI=false;
var KEPPHQIJQR=0; //por algún motivo lo manda todo al 0
var AQONVWHHFT=0;
var BOLUEYFVYH=0;
var GAMFUXNGTH=0;
var JOWOYBTJSV=0;
var YAJVUBPNNW=15;
var DFBVDPETGO;
var IRXOKNWTLV=150;//120
var TFSXFTYVGQ;
var MDYSFNYPYP=250;
var vVelocidadRobar=350; 
//var RDBQUAVHEP=4;
var DVNRTQIWGL=1; //1.0.4
var TGTQPBEQFR;
var PQUFIBKJJH;
var LJRRHVSVKD;
var LCYAHFBDTT;
var NEPGDYQDEI;
var HHBPAROITT;
var EWXBTDLSHW;
var BDEFDQUJJE;
var CKOUBGTDUF;
var JLFYUAKDIJ;
var RXPVLOEMXC;
var UMEOIIEQQD;
var XIDKQMJQLI;
var MTNVBILBQS;
var UTIDOKPNXQ;
var UHHXSNXXJK=0;
var PXGXKDDNFK=0;
var CNCCBHQJKL=0;
var JVQXQGYDHH=0;
var IEQDMBJCAY;
var PPTWRPRLSI=false;
var FOQUJVEYFC=[];
var YGTNAODFHW;
var UEHYPTREIH;
var IBECDOLWLN;
var EFKTQSXAMA;
var BotonClasificacion;
var LNJDKEVPQE;
var COIVBWRMCC=0;
var SXSHBRJFIR=0;
//Phaser.Easing.Quadratic.Out;
//Phaser.Easing.Quartic;
var KYFMRVNHIQ=Phaser.Easing.Linear.Out;
var BSXWFYLCEW=Phaser.Easing.Linear.Out;
var QUXNHVVDDK=Phaser.Easing.Bounce.Out;
var PXEBTYBHGS=0;
var EHBNOAKBDQ=false;
var KOHYQKLAJO=false;
var PJRPWGXEYM=75;
var HUUCUYFBLW;
var timerpareja;
var timerestoylisto;
var TKXPPGUPVV;
//var PUBDSNTIUS;
var CVTBLMKIGL;
var VEMBUOOHLM=true;
var UWROMBGGSY;
var HUPALFWPFI;
var BXYCJYDVRT;
var IRAIEARIWA;

var IDKJKASOTQ;
var MMKMYKBXGH;
var AQXDDTTNUH;
var JNMGJTHVNF;

var QYBDUBOCBT;
var BDQHBTUNWW;
var PRWBHVTUSC;
var BMWINQGWDD;
var deb;


var WAAJJVPHTG=0;
var KKMUHEKLOC=0;

var JBXCGDTWYW;
var NSNUIQUYIU;
var JSJSHSHSSE;
var VKEJRPCHKN;
var LFWPDMQYKH;
var BHLJBCKLKE;
var SFVDEVFFCR;
var KMBKTLXURD;
var Snd20Bastos;
var DPCNHOBNRM;
var UHKVCVBOMD;
var LKGDBLGIEP;
var GMKJKKAKMH;
var VPGBDEHDIT;
var KFDIGGAMBI;
var MWLXRMDQXK;
var DPIDINSQVF;
var GERQISACAV;
var TSXDMBDDID;
var VLVITFRSLA;
var LSQGNFJBGH;
var CVJDMGILKI;
var JDPOTVNRCT;
var PDSPWPACWB;
var NEKUUPJKUV;
var MIKBDMVLOR;
var HKHCMJEIUU;
var LKGDBLGIEP;
var SndIdas2;
var SndVueltas2;
var SndGrano;
var SndUltimas;
var QETACVSHAR;
var JHJEWHFWNL=false;

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



var PWGIQBBAWX=true;
var ATTUXTNNKX;
var XQDPVWOUII
//var cambiar=1;

var ObjetoG;

var UVYJLLYCYD=function(SSUNXNEEHN,AURESXCGMK)
{
	this.SSUNXNEEHN=SSUNXNEEHN
	this.AURESXCGMK=AURESXCGMK
}


var AWXPNWRCHC = function(WWKVHIMWYD,BONQVNOXDP,QHHQPXWFNG,EJOYNSESRD,IRQGAFESIC,FFRVOEAXTF,BDYYDTFQAO,UHYGLMAUNK,DNQIYVAFPR,XCXKVEEIOO,BUJELVTIKU){
	this.WWKVHIMWYD=WWKVHIMWYD
	this.BONQVNOXDP=BONQVNOXDP
	this.QHHQPXWFNG=QHHQPXWFNG
	this.EJOYNSESRD=EJOYNSESRD
	this.IRQGAFESIC=IRQGAFESIC,
	this.FFRVOEAXTF=FFRVOEAXTF
	this.BDYYDTFQAO=BDYYDTFQAO
	this.UHYGLMAUNK=UHYGLMAUNK
	this.DNQIYVAFPR=DNQIYVAFPR
	this.XCXKVEEIOO=XCXKVEEIOO
	this.BUJELVTIKU=BUJELVTIKU
	
	this.OBTBPOULAV=FFRVOEAXTF+"-"+BDYYDTFQAO;
	
};


function HMNHQKBORK(FXGSEGRXKC,NPYBJSHIFL,x,y) {

	this.FXGSEGRXKC=FXGSEGRXKC;
	this.NPYBJSHIFL=NPYBJSHIFL
	this.x=x;
    this.y=y;    
}

KGLYPJHYGL=function(){
	//alert("KGLYPJHYGL");
	//console.log("JJJ");
	//EABXADHEVT("TKYUFYJRRA");
}
Level.prototype.create=function(){

	this.game.onPause.add(KGLYPJHYGL, this);
	this.game.onResume.add(KGLYPJHYGL, this);

	vSonidoOn=true;
//this.player1.graphic.beginFill(this.player1.color, 1);
//this.player1.graphic.drawRect(0, 0, this.player1.size, this.player1.size);
		
	//log(false, Math.floor(Math.random() * 360) + 1   );	
	YMHIHSNADE=this;
	
	DFBVDPETGO=Math.floor(Math.random());
	YJEISFVFQY();
	
	if (window.innerHeight/window.innerWidth<0.68)
	{	
		JHJEWHFWNL=false;
	}
	else
	{
		JHJEWHFWNL=true;
		QDTCADQEEX=1.7;
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
var timerborrar = YMHIHSNADE.time.create(false);
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
	
	//YMHIHSNADE.forceSetTimeOut=true;
	//Phaser.RequestAnimationFrame(YMHIHSNADE, false);
	//alert(isRAF());
	////

  

	
	////
	//console.log("Eo");

	VKEJRPCHKN = YMHIHSNADE.add.audio('VKEJRPCHKN');
	LFWPDMQYKH = YMHIHSNADE.add.audio('LFWPDMQYKH');
	BHLJBCKLKE = YMHIHSNADE.add.audio('BHLJBCKLKE');
	SFVDEVFFCR = YMHIHSNADE.add.audio('SFVDEVFFCR');
	KMBKTLXURD = YMHIHSNADE.add.audio('KMBKTLXURD');
	Snd20Bastos = YMHIHSNADE.add.audio('Snd20Bastos');
	DPCNHOBNRM = YMHIHSNADE.add.audio('DPCNHOBNRM');
	GMKJKKAKMH = YMHIHSNADE.add.audio('GMKJKKAKMH');
	UHKVCVBOMD = YMHIHSNADE.add.audio('UHKVCVBOMD');
	LKGDBLGIEP = YMHIHSNADE.add.audio('LKGDBLGIEP');
	VPGBDEHDIT = YMHIHSNADE.add.audio('VPGBDEHDIT');
	KFDIGGAMBI = YMHIHSNADE.add.audio('KFDIGGAMBI');
	MWLXRMDQXK = YMHIHSNADE.add.audio('SndArrastro2');
	DPIDINSQVF = YMHIHSNADE.add.audio('DPIDINSQVF');
	GERQISACAV = YMHIHSNADE.add.audio('GERQISACAV');
	TSXDMBDDID = YMHIHSNADE.add.audio('TSXDMBDDID');
	VLVITFRSLA = YMHIHSNADE.add.audio('VLVITFRSLA');
	LSQGNFJBGH = YMHIHSNADE.add.audio('LSQGNFJBGH');
	CVJDMGILKI = YMHIHSNADE.add.audio('CVJDMGILKI');
	NEKUUPJKUV = YMHIHSNADE.add.audio('NEKUUPJKUV');
	MIKBDMVLOR = YMHIHSNADE.add.audio('MIKBDMVLOR');
	HKHCMJEIUU = YMHIHSNADE.add.audio('SndTabazo2');
	JDPOTVNRCT=YMHIHSNADE.add.audio('JDPOTVNRCT');
	SndIdas2=YMHIHSNADE.add.audio('SndIdas2');
	SndVueltas2=YMHIHSNADE.add.audio('SndVueltas2');
	SndGrano=YMHIHSNADE.add.audio('SndGrano');
	SndUltimas=YMHIHSNADE.add.audio('SndUltimas');
	
	
	//1.0.6
		SndChatarrero=YMHIHSNADE.add.audio('SndChatarrero');
		SndChiflar=YMHIHSNADE.add.audio('SndChiflar');
		SndEscupe=YMHIHSNADE.add.audio('SndEscupe');
		SndFaldas=YMHIHSNADE.add.audio('SndFaldas');
		SndGorrion=YMHIHSNADE.add.audio('SndGorrion');
		SndGrijan=YMHIHSNADE.add.audio('SndGrijan');
		SndGuinoteOtro=YMHIHSNADE.add.audio('SndGuinoteOtro');
		SndMataBocarrana=YMHIHSNADE.add.audio('SndMataBocarrana');
		SndMonja=YMHIHSNADE.add.audio('SndMonja');
		SndPajaro=YMHIHSNADE.add.audio('SndPajaro');
		SndPrimeraChicos=YMHIHSNADE.add.audio('SndPrimeraChicos');
		SndPuntos=YMHIHSNADE.add.audio('SndPuntos');
		SndToro=YMHIHSNADE.add.audio('SndToro');	
	
	
	//1.0.6
	
	
	//PDSPWPACWB= YMHIHSNADE.add.audio('PDSPWPACWB');
	
	//console.log(YMHIHSNADE.sound.usingAudioTag);
	/*//console.log("No audio "+YMHIHSNADE.sound.noAudio);
	VKEJRPCHKN.play();
	//console.log("Audio Tag: "+VKEJRPCHKN.usingAudioTag);
	//console.log("WebAudio Tag: "+VKEJRPCHKN.usingWebAudio);
	//console.log("Sonando: "+VKEJRPCHKN.isPlaying);*/

	//SUMEMLHUFX(false); //1.0.6
	
	NHLRWTHYVG=false;
	VKYLOUGFGR=false;
	//LogicalNoticia=false;
	//SndBatalla = YMHIHSNADE.add.audio('SndBatalla');
	//SndBatalla.play();
	//if (window.innerHeight/window.innerWidth<0.55)
	//{
		 WAAJJVPHTG=1300;
		 KKMUHEKLOC=622;
		//console.log("PC");
		//var alto=300;
	//}
	//else
	//{
		//var ancho=window.innerWidth;
		//var alto=window.innerHeight;
		
	//	 WAAJJVPHTG=1200;
	//	 KKMUHEKLOC=750;
	//	//console.log("IPAD");
	//}
	
	//XIQDONAJMM=this.game.add.tileSprite(0, 0, YMHIHSNADE.world.width, YMHIHSNADE.world.height, 'FondoPrincipal');
	
	
	if (JHJEWHFWNL==false)
	{
		KVBNWXDTON=this.game.add.tileSprite(0, 0, YMHIHSNADE.world.width, YMHIHSNADE.world.height, 'IRQGAFESIC');
		XIQDONAJMM=YMHIHSNADE.add.sprite(0, 0, 'FondoPrincipal');
	}
	else
	{
		KVBNWXDTON=this.game.add.tileSprite(0, 0, YMHIHSNADE.world.width, YMHIHSNADE.world.height, 'Tapete_43');
		XIQDONAJMM=YMHIHSNADE.add.sprite(0, 0, 'FondoPrincipal_43');
	}


	
	XIQDONAJMM.visible=true;
	KVBNWXDTON.visible=false;
	
	

	
		var x=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*6)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (2 *(SXSHBRJFIR+
	YAJVUBPNNW))+COIVBWRMCC;
	

	
	YGTNAODFHW= YMHIHSNADE.add.button(x , YMHIHSNADE.world.height-45, 'Boton_cambiar_7_on', QPGADJGDVQ , this, 2, 1, 0);
	YGTNAODFHW.visible=false;	
	YGTNAODFHW.anchor.setTo(0.5,0.5);
	YGTNAODFHW.width=YGTNAODFHW.width*1.2;
	YGTNAODFHW.height=YGTNAODFHW.height*1.2;
	
	QETACVSHAR=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*6)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (2 *(SXSHBRJFIR+
	YAJVUBPNNW))+COIVBWRMCC+250;
	
	if (JHJEWHFWNL==true)
	{
		QETACVSHAR=QETACVSHAR+40;
	}
	
	/*	QETACVSHAR=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*6)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (19 *(SXSHBRJFIR+
	YAJVUBPNNW))+COIVBWRMCC;
	*/
	
	CUUKQAGFEB= YMHIHSNADE.add.button(QETACVSHAR ,  YMHIHSNADE.world.height-45, 'Boton_Salir', Salir , this, 2, 1, 0);
	CUUKQAGFEB.visible=true;	
	CUUKQAGFEB.anchor.setTo(0.5,0.5);
	CUUKQAGFEB.width=CUUKQAGFEB.width*1.2;
	CUUKQAGFEB.height=CUUKQAGFEB.height*1.2;
	
	HUUCUYFBLW = YMHIHSNADE.time.create(false);
	timerpareja = YMHIHSNADE.time.create(false);
	timerestoylisto  = YMHIHSNADE.time.create(false); //1.0.6
	CVTBLMKIGL = YMHIHSNADE.time.create(false);
	
	TKXPPGUPVV = YMHIHSNADE.time.create(false);

					
	//PUBDSNTIUS = YMHIHSNADE.time.create(false);	
	
	
	YJNIRPCWEI = YMHIHSNADE.add.text(0, 0, "");
	
	PQUFIBKJJH=YMHIHSNADE.add.tween(YJNIRPCWEI).to( { alpha: 1 }, 1, KYFMRVNHIQ, true);
	LJRRHVSVKD=YMHIHSNADE.add.tween(YJNIRPCWEI).to( { alpha: 1 }, 1, KYFMRVNHIQ, true);
	LCYAHFBDTT=YMHIHSNADE.add.tween(YJNIRPCWEI).to( { alpha: 1 }, 1, KYFMRVNHIQ, true);
	NEPGDYQDEI=YMHIHSNADE.add.tween(YJNIRPCWEI).to( { alpha: 1 }, 1, KYFMRVNHIQ, true);
	
	RXKKPILDQT = YMHIHSNADE.add.group();
	SYXHGDSJDY = YMHIHSNADE.add.group();
	BDRJVGFWQH = YMHIHSNADE.add.group();
	PBHYCULPGK = YMHIHSNADE.add.group();
	GSXGWASLIY = YMHIHSNADE.add.group();
	UOPIKJVEKS = YMHIHSNADE.add.group();
	WWFSQDQYYU = YMHIHSNADE.add.group();
	COTMMCVJWP = YMHIHSNADE.add.group();
	
	var BRQFVLOBSF=YMHIHSNADE.add.sprite(-200,-200,'1');
	COIVBWRMCC=BRQFVLOBSF.width;
	AltoCarta=BRQFVLOBSF.height;
	SXSHBRJFIR=BRQFVLOBSF.width*QDTCADQEEX;
	AltoCartaEscalado=BRQFVLOBSF.height*QDTCADQEEX;
	PXEBTYBHGS=((YMHIHSNADE.world.height-AltoCarta-AltoCartaEscalado+COIVBWRMCC)/2)+(COIVBWRMCC)-25;
	SUMEMLHUFX("D");
	
	UTIDOKPNXQ=YMHIHSNADE.add.tween(BRQFVLOBSF);
	TTCLPDJAMD=YMHIHSNADE.add.tween(BRQFVLOBSF);
	BDEFDQUJJE=YMHIHSNADE.add.tween(BRQFVLOBSF);
	CKOUBGTDUF=YMHIHSNADE.add.tween(BRQFVLOBSF);
	JLFYUAKDIJ=YMHIHSNADE.add.tween(BRQFVLOBSF);
	PQUFIBKJJH=YMHIHSNADE.add.tween(BRQFVLOBSF);
	LJRRHVSVKD=YMHIHSNADE.add.tween(BRQFVLOBSF);
	LCYAHFBDTT=YMHIHSNADE.add.tween(BRQFVLOBSF);
	
	var IQVAAXFOXW = { font: "bold 18px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
	UWROMBGGSY=YMHIHSNADE.add.text(0, 0, "",IQVAAXFOXW);
	HUPALFWPFI=YMHIHSNADE.add.text(-100, -100, "", IQVAAXFOXW);
	BXYCJYDVRT=YMHIHSNADE.add.text(-100, -100, "", IQVAAXFOXW);
	IRAIEARIWA=YMHIHSNADE.add.text(-100, -100, "", IQVAAXFOXW);
	
	var WNTTMAIFLB = { font: "bold 30px Arial", fill: "#fff", align: "right", boundsAlignH: "middle", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
	XQDPVWOUII=YMHIHSNADE.add.text(0, 0, "Ntros:\nEllos:", WNTTMAIFLB);
	XQDPVWOUII.stroke = '#961918';
    XQDPVWOUII.strokeThickness = 4;
    XQDPVWOUII.fill = '#F8E600';		
	XQDPVWOUII.visible=false;
	XQDPVWOUII.setTextBounds(900,YMHIHSNADE.world.height-(AltoCartaEscalado*2),300,100)
	

	
	var styleMarcador = { font: "bold 30px Arial", fill: "#fff", boundsAlignH: "left", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
	ATTUXTNNKX=YMHIHSNADE.add.text(0, 0, "", styleMarcador);
	ATTUXTNNKX.visible=false;
	ATTUXTNNKX.stroke = '#961918';
    ATTUXTNNKX.strokeThickness = 4;
    ATTUXTNNKX.fill = '#F8E600';		
	ATTUXTNNKX.setTextBounds(990,YMHIHSNADE.world.height-(AltoCartaEscalado*2),300,100)
	
	
	
	/*var styleMarcador = { font: "bold 30px Arial", fill: "#fff", boundsAlignH: "left", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
	TextCuentaAmigos=YMHIHSNADE.add.text(100, 300, "", styleMarcador);
	TextCuentaAmigos.visible=false;
	TextCuentaAmigos.stroke = '#961918';
    TextCuentaAmigos.strokeThickness = 4;
    TextCuentaAmigos.fill = '#F8E600';		*/
	//TextCuentaAmigos.setTextBounds(990,YMHIHSNADE.world.height-(AltoCartaEscalado*2),300,100)

	var styleMarcador = { font: "bold 24px Arial", fill: "#fff", boundsAlignH: "right", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 5000};	
	JKLJKLRIRI=YMHIHSNADE.add.text(0, 0, "", styleMarcador);
	JKLJKLRIRI.visible=false;
	JKLJKLRIRI.stroke = '#961918';
    JKLJKLRIRI.strokeThickness = 4;
    JKLJKLRIRI.fill = '#F8E600';		
	JKLJKLRIRI.setTextBounds(15,15,YMHIHSNADE.world.width-120,100)
	

	
	LHLJIPPLXD= YMHIHSNADE.add.button(400, 0, 'spr_cantar', function(){ 
		TRKOSJTLDX();
	}, this, 2, 1, 0);
	LHLJIPPLXD.visible=false;
	
	/*BotonLoginDIV= YMHIHSNADE.add.button(700, 0, 'spr_cantar', function(){ 
		QDPPTWILGS();
	}, this, 2, 1, 0);
	BotonLoginDIV.visible=true;*/

	var x=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*6)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (0 *(SXSHBRJFIR+
	YAJVUBPNNW))+COIVBWRMCC;
	
	IEQDMBJCAY= YMHIHSNADE.add.button(x, YMHIHSNADE.world.height-45, 'Boton_cantar_on', function(){ VSBOFQVPVQ(TFSXFTYVGQ); }, this, 2, 1, 0);
	IEQDMBJCAY.visible=false;
	IEQDMBJCAY.anchor.setTo(0.5,0.5);
	IEQDMBJCAY.width=IEQDMBJCAY.width*1.2;
	IEQDMBJCAY.height=IEQDMBJCAY.height*1.2;

	
	
	BotonSonidoOn= YMHIHSNADE.add.button(50+YAJVUBPNNW, 110, 'Boton_sonido_on', SonidoOff, this, 2, 1, 0);;
	BotonSonidoOn.anchor.setTo(0.5,0.5)
	BotonSonidoOn.visible=false;
	BotonSonidoOff= YMHIHSNADE.add.button(50+YAJVUBPNNW, 110, 'Boton_sonido_off', SonidoOn, this, 2, 1, 0);;
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
	
	JFRRFIXASB= YMHIHSNADE.add.button(900, 0, 'spr_cantar', function(){ 
		JTQKCQEDPC();
	}, this, 2, 1, 0);
	JFRRFIXASB.visible=false;
	
	TDRCQKMLDY= YMHIHSNADE.add.button(900, 0, 'spr_cantar', function(){ 
		JTQKCQEDPC();
	}, this, 2, 1, 0);
	TDRCQKMLDY.visible=false;
	
	UEHYPTREIH= YMHIHSNADE.add.button(YMHIHSNADE.world.centerX - 120, YMHIHSNADE.world.height-170, 'Boton_solo', OCSBJTDODP, this, 2, 1, 0);
	UEHYPTREIH.visible=false;
	UEHYPTREIH.width=UEHYPTREIH.width;
	UEHYPTREIH.height=UEHYPTREIH.height;
	UEHYPTREIH.anchor.setTo(0.5,0.5)
	
	BotonContacta= YMHIHSNADE.add.button(YMHIHSNADE.world.width-100, YMHIHSNADE.world.height-30, 'Contacta', function(){RSHJSKMBRP(5)}, this, 2, 1, 0);
	BotonContacta.visible=false;
	BotonContacta.anchor.setTo(0.5,0.5)
	
	if (JHJEWHFWNL==true)
	{
		UEHYPTREIH.width=UEHYPTREIH.width*1.4;
		UEHYPTREIH.height=UEHYPTREIH.height*1.4;
		UEHYPTREIH.y=UEHYPTREIH.y-90;
		UEHYPTREIH.x=UEHYPTREIH.x-45;
	}
	
	IBECDOLWLN= YMHIHSNADE.add.button(YMHIHSNADE.world.centerX + 120, YMHIHSNADE.world.height-170, 'Boton_online', JVEHDHOEEM, this, 2, 1, 0);;
	IBECDOLWLN.visible=false;
	IBECDOLWLN.width=IBECDOLWLN.width;
	IBECDOLWLN.height=IBECDOLWLN.height;
	IBECDOLWLN.anchor.setTo(0.5,0.5)
	
	if (JHJEWHFWNL==true)
	{
		IBECDOLWLN.width=IBECDOLWLN.width*1.4;
		IBECDOLWLN.height=IBECDOLWLN.height*1.4;
		IBECDOLWLN.y=IBECDOLWLN.y-90;
		IBECDOLWLN.x=IBECDOLWLN.x+45;
	}	
	
	//1.0.8
	BotonClasificacion= YMHIHSNADE.add.button(YMHIHSNADE.world.centerX + 300, YMHIHSNADE.world.height-170, 'Boton_ranking', SolicitaClasificacion, this, 2, 1, 0);;
	BotonClasificacion.visible=false;
	BotonClasificacion.width=BotonClasificacion.width;
	BotonClasificacion.height=BotonClasificacion.height;
	BotonClasificacion.anchor.setTo(0.5,0.5)
	
	if (JHJEWHFWNL==true)
	{
		BotonClasificacion.width=BotonClasificacion.width*1.4;
		BotonClasificacion.height=BotonClasificacion.height*1.4;
		BotonClasificacion.y=BotonClasificacion.y-90;
		BotonClasificacion.x=BotonClasificacion.x+45;
	}		
	//1.0.8
	
	EFKTQSXAMA= YMHIHSNADE.add.button(YMHIHSNADE.world.centerX -120 , YMHIHSNADE.world.height-170-1000, 'Boton_aleatorio', InicioMultiJugadorAleatorio, this, 2, 1, 0);
	EFKTQSXAMA.visible=false;
	EFKTQSXAMA.width=EFKTQSXAMA.width;
	EFKTQSXAMA.height=EFKTQSXAMA.height;
	EFKTQSXAMA.anchor.setTo(0.5,0.5)
	
	if (JHJEWHFWNL==true)
	{
		EFKTQSXAMA.width=EFKTQSXAMA.width*1.4;
		EFKTQSXAMA.height=EFKTQSXAMA.height*1.4;
		EFKTQSXAMA.y=EFKTQSXAMA.y-90;
		EFKTQSXAMA.x=EFKTQSXAMA.x-45;
	}
	
	LNJDKEVPQE= YMHIHSNADE.add.button(YMHIHSNADE.world.centerX +120+1000 , YMHIHSNADE.world.height-170, 'Boton_amigos', YIQDWVLKWG, this, 2, 1, 0);;
	LNJDKEVPQE.visible=false;
	LNJDKEVPQE.width=LNJDKEVPQE.width;
	LNJDKEVPQE.height=LNJDKEVPQE.height;
	LNJDKEVPQE.anchor.setTo(0.5,0.5)
	
	if (JHJEWHFWNL==true)
	{
		LNJDKEVPQE.width=LNJDKEVPQE.width*1.4;
		LNJDKEVPQE.height=LNJDKEVPQE.height*1.4;
		LNJDKEVPQE.y=LNJDKEVPQE.y-90;
		LNJDKEVPQE.x=LNJDKEVPQE.x+45;
	}		
	
	
	
	HJKHDKJHWU= YMHIHSNADE.add.button(YMHIHSNADE.world.centerX+35  , YMHIHSNADE.world.centerY+150, 'Boton_robots', RellenarSala, this, 2, 1, 0);;
	HJKHDKJHWU.visible=false;
	HJKHDKJHWU.width=HJKHDKJHWU.width;
	HJKHDKJHWU.height=HJKHDKJHWU.height;
	HJKHDKJHWU.anchor.setTo(0.5,0.5)
	
	bmd = YMHIHSNADE.add.bitmapData(YMHIHSNADE.world.width,YMHIHSNADE.world.height);
	bmd.ctx.beginPath();
	bmd.ctx.rect(0,0,YMHIHSNADE.world.width,YMHIHSNADE.world.height);
	bmd.ctx.fillStyle = '#000000';
	bmd.ctx.fill();
	
	MITSNADNQS();

	//IEQDMBJCAY.visible=false;
	
	//console.log("ANTES INTENTA CONEXION");
	
	BUJELVTIKU=YMHIHSNADE.add.button(x , YMHIHSNADE.world.height-45, 'Boton_cambiar_7_on', DMLSYYQBXI , this, 2, 1, 0);
	BUJELVTIKU.visible=false;
	BUJELVTIKU.anchor.setTo(0.5,0.5);
	BUJELVTIKU.x=230;
	BUJELVTIKU.y=-500;
	
	
	var x=WIEVLYANFM("U_C",0)-COIVBWRMCC;
	var y=FIGQBSJQGA("U_C",0)+(AltoCarta/2)+(YAJVUBPNNW);
	if (JHJEWHFWNL==true)
	{
		y=y+15;
	}
	
	ObjTurnoU=YMHIHSNADE.add.sprite(x,y, 'Imagen_Turno');
	ObjTurnoU.anchor.setTo(0.5, 0.5)
	ObjTurnoU.visible=false;

	var x=WIEVLYANFM("L_C",0)+COIVBWRMCC;
	var y=FIGQBSJQGA("L_C",0);

	if (JHJEWHFWNL==true)
	{
		x=x+15;
	}
	ObjTurnoL=YMHIHSNADE.add.sprite(x,y, 'Imagen_Turno');
	ObjTurnoL.anchor.setTo(0.5, 0.5)
	ObjTurnoL.visible=false;

	
	var x=WIEVLYANFM("R_C",0)-COIVBWRMCC;
	var y=FIGQBSJQGA("L_C",0);

	if (JHJEWHFWNL==true)
	{
		x=x-15;
	}
	ObjTurnoR=YMHIHSNADE.add.sprite(x,y, 'Imagen_Turno');
	ObjTurnoR.anchor.setTo(0.5, 0.5);
	ObjTurnoR.visible=false;


	
	var x=WIEVLYANFM("U_C",0)-COIVBWRMCC;
	var y=YMHIHSNADE.world.height-SXSHBRJFIR-AltoCartaEscalado+(YAJVUBPNNW);

	ObjTurnoD=YMHIHSNADE.add.sprite(x,y, 'Imagen_Turno');
	ObjTurnoD.anchor.setTo(0.5, 0.5)
	ObjTurnoD.visible=false;

	
	if (PWGIQBBAWX==true)
	{
		
		try
		{
			XEMENNVXGV();
			if (socket.id!=undefined)
			{
					//alert("ko");			
				//socket.emit('EOMOFODTKB', socket.id,SFKLFIJOIO) ;
				
				if (PWMIBRSDCJ.length>0)
				{
					var JugadorPubli=PWMIBRSDCJ[0].WWKVHIMWYD;
					var JugadorFullPubli=PWMIBRSDCJ[0].FFRVOEAXTF + '-'+ PWMIBRSDCJ[0].BDYYDTFQAO;
					socket.emit('EOMOFODTKB', socket.id,SFKLFIJOIO,ObjetoG) ;
				}
				else
				{
					socket.emit('EOMOFODTKB', socket.id,SFKLFIJOIO,ObjetoG) ;
				}
				
				
				
				socket.emit('SNEESSIXBK', SFKLFIJOIO);

			}
		}
		catch (e){};
		//console.log("INTENTA CONEXION");
		
		if(ERQHLTPETK==false)
		{
			CMREMHOJIN();
		}
	}
	PWGIQBBAWX=true;
	ERQHLTPETK=false;

		
	

	YJNIRPCWEI.x=YMHIHSNADE.world.centerX;
	YJNIRPCWEI.y=YMHIHSNADE.world.centerY+30
	
	YJNIRPCWEI.anchor.set(0.5);
    YJNIRPCWEI.align = 'center';


    YJNIRPCWEI.font = 'Arial Black';
    YJNIRPCWEI.fontSize = 40;
    YJNIRPCWEI.fontWeight = 'bold';


    YJNIRPCWEI.stroke = '#961918';
    YJNIRPCWEI.strokeThickness = 7;
    YJNIRPCWEI.fill = '#F8E600';		
		
		
		
		
	JBXCGDTWYW = YMHIHSNADE.add.text(YMHIHSNADE.world.centerX, YMHIHSNADE.world.centerY, 'Esperando jugadores');
	JBXCGDTWYW.visible=false;
	//log(true,"Se crea el mensaje");
	
	JBXCGDTWYW.anchor.set(0.5);
    JBXCGDTWYW.align = 'center';


    JBXCGDTWYW.font = 'Arial Black';
    JBXCGDTWYW.fontSize = 60;
    JBXCGDTWYW.fontWeight = 'bold';


    JBXCGDTWYW.stroke = '#961918';
    JBXCGDTWYW.strokeThickness = 15;
    JBXCGDTWYW.fill = '#F8E600';
			
			
	NSNUIQUYIU = YMHIHSNADE.add.text(YMHIHSNADE.world.centerX, YMHIHSNADE.world.centerY-50, 'Un momento por favor... Esperando al resto de compañeros.');
	NSNUIQUYIU.visible=false;
	//log(true,"Se crea el mensaje");
	
	NSNUIQUYIU.anchor.set(0.5);
    NSNUIQUYIU.align = 'center';


    NSNUIQUYIU.font = 'Arial Black';
    NSNUIQUYIU.fontSize = 40;
    NSNUIQUYIU.fontWeight = 'bold';


    NSNUIQUYIU.stroke = '#961918';
    NSNUIQUYIU.strokeThickness = 15;
    NSNUIQUYIU.fill = '#F8E600';			
	NSNUIQUYIU.wordWrap= true;
	NSNUIQUYIU.wordWrapWidth=1000;	
	

	JSJSHSHSSE = YMHIHSNADE.add.text(YMHIHSNADE.world.centerX, YMHIHSNADE.world.centerY-50, 'Eligiendo pareja');
	JSJSHSHSSE.visible=false;
	//log(true,"Se crea el mensaje");
	
	JSJSHSHSSE.anchor.set(0.5);
    JSJSHSHSSE.align = 'center';


    JSJSHSHSSE.font = 'Arial Black';
    JSJSHSHSSE.fontSize = 40;
    JSJSHSHSSE.fontWeight = 'bold';


    JSJSHSHSSE.stroke = '#961918';
    JSJSHSHSSE.strokeThickness = 15;
    JSJSHSHSSE.fill = '#F8E600';			
	JSJSHSHSSE.wordWrap= true;
	JSJSHSHSSE.wordWrapWidth=1000;	
	
		inputField = YMHIHSNADE.add.inputField(10+YAJVUBPNNW, 25,{
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
	
	//deb=YMHIHSNADE.add.text(0, 0, "");
	
	
	if (UEHYPTREIH.visible==true && IBECDOLWLN.visible==true)
	{
		CUUKQAGFEB.x=QETACVSHAR;
		CUUKQAGFEB.visible=false;
	}
	

	
};

SolicitaClasificacion=function()
{
	if (socket.id!=undefined)
	{
		socket.emit('XUUKTXNVCK',socket.id);	
	}
}

RellenarSala=function()
{
	if (EGPDVIEJEL==true)
	{
		if(socket.id!=null)
		{
			//console.log("llega a rellenar");
			socket.emit('NZBSUWWZXX',DFBVDPETGO)
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

DMLSYYQBXI=function()
{
	BUJELVTIKU.visible=false;
}

YIQDWVLKWG=function()
{
	if (checkConnection()==true)
	{	
		NFARLTEOCI();
		if (EGPDVIEJEL==true)
		{
			socket.emit('ETJNHPEGJR') ;
		}
	}
}


WTERKRAPBE=function(ABWBCAJRXQ,KXAWTTIEGG,SPWYNLHQXU,PAXBGDCANU,VRCARVJJPF,VGVSETFAFF,As,WJIXAEXYTP)
{
	
	//ABWBCAJRXQ=TFSXFTYVGQ;

	if (EGPDVIEJEL==true)
	{
		var XJARYUVBCB=XPBCVAGCDQ[ABWBCAJRXQ-1].XJARYUVBCB;
		var FUAQHEGBCV=XPBCVAGCDQ[ABWBCAJRXQ-1].OBTBPOULAV;
		var Name=XPBCVAGCDQ[ABWBCAJRXQ-1].WWKVHIMWYD;
		var Socket=XPBCVAGCDQ[ABWBCAJRXQ-1].AURESXCGMK;
		//console.log(ABWBCAJRXQ+" Mi Socket: "+Socket);
		var Sala=XPBCVAGCDQ[ABWBCAJRXQ-1].Sala;
		
		var Idas;

		if (SPWYNLHQXU==true)
		{	
			Idas='v';
		}
		else
		{
			Idas='i';
		}
		
		//if (XPBCVAGCDQ[ABWBCAJRXQ-1].XJARYUVBCB==true)
		//{
		//	Idas='d';
		//}

		
		socket.emit('GJXCBKEBBB',FUAQHEGBCV,Name,Socket,Sala,KXAWTTIEGG,Idas,XJARYUVBCB,PAXBGDCANU,VRCARVJJPF,VGVSETFAFF,As,WJIXAEXYTP)
	}
}

TJDBATCOYY=function(XGSWBEHNKH)
{
	var i;
	var RHOLNWBOXR="";
	
	IICHSQQWTF(XGSWBEHNKH);
	
}

IICHSQQWTF=function(XGSWBEHNKH)
{
	var i;
	var table = document.getElementById("TablaSalas");
	// Create an empty <tr> element and add it to the 1st position of the table:
	var row; 
	var cell1;
	var cell2;
	var cell3;
	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	
	//console.log("Tamaño amigos "+XGSWBEHNKH.length);
	
	

	//var tableRows = table.getElementsByTagName('tr');
	var rowCount = table.rows.length;
//alert(rowCount);
	for (var i = 1; i < rowCount; i++) {
	  
		table.deleteRow(1);
	}


	
	var d=document.getElementById('DivSalasAmigos');
	d.style.display = 'block';
	//d.style.zIndex=-100;
						
	for (i=0;i<=XGSWBEHNKH.length-1;i++)
	{
		row=table.insertRow();
		//row.onclick = function(){alert(XGSWBEHNKH[i].Sala);};
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
		cell3 = row.insertCell(2);
		cell3.style.display = 'none';
		//cell3 = row.insertCell(2);
		
		
		cell1.innerHTML = XGSWBEHNKH[i].Sala;
		cell2.innerHTML = XGSWBEHNKH[i].Creador;
		//cell3.innerHTML =  "<img src='" + Data[i].Usuario[0][0] + "' style='max-width:100%' >";
		cell3.innerHTML = (XGSWBEHNKH[i].OBTBPOULAV.substring(0, XGSWBEHNKH[i].OBTBPOULAV.indexOf('-',1))+46);
		//cell3.style.visibility = "hidden";
		
		row.onclick = (function() { // closure
            var cnt = i; // save the counter to use in the function
            return function() {
			OQDXNSPREQ(this.cells[0].innerHTML, this.cells[2].innerHTML)
			//InicioPartidaOnline(1,this.cells[2].innerHTML);
            //  alert("row"+cnt+" data="+this.cells[2].innerHTML);
			  
            }    
        })(i);
		
		
		
		
		//cell1.onclick=function(){alert(this.rowIndex);};
		
		//cell3.innerHTML = XGSWBEHNKH[i].Sala;
		//cell3.style.visibility = "hidden";
		
		
	}
}

ETTNDBLRCS=function()
{
	BUJELVTIKU.visible=false;
	var d=document.getElementById('DivSalasAmigos');
	d.style.display = 'none';
	
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

XHSDDIIBGG=function(VideoJuego)
{
	
	var RHOLNWBOXR="";
	var TextoVideoJuego="";
	
	if (VideoJuego==true)
	{
		TextoVideoJuego=" del videojuego";
	}
	
	//YHNMANDWLT();
	
	if (EGPDVIEJEL==false)
	{
		RHOLNWBOXR="¿Realmente desea Salir"+TextoVideoJuego+"?";
	}
	else
	{
		if (XPBCVAGCDQ!=undefined)
		{
			if (XPBCVAGCDQ.length!=4)
			{
				RHOLNWBOXR="¿Realmente desea Salir"+TextoVideoJuego+"?";
			}
			else
			{
				RHOLNWBOXR="¿Realmente desea Salir"+TextoVideoJuego+"? Salir Implica una derrota.";
			}
		}
		else
		{
			RHOLNWBOXR="¿Realmente desea Salir"+TextoVideoJuego+"?";
		}
	}
	
	var a=document.getElementById("lblSalir") 
	//var b=a.labels[0];
	a.textContent = RHOLNWBOXR;
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
	
	//console.log("Soy "+TFSXFTYVGQ)
		
	for (i=0;i<=XPBCVAGCDQ.length-1;i++)
	{
		//if (XPBCVAGCDQ[i].XJARYUVBCB==false || (XPBCVAGCDQ[i].XJARYUVBCB==true  && XPBCVAGCDQ[1].XJARYUVBCB==false ))
		//{
			if ((i+1)!=TFSXFTYVGQ)
			{
				if (vueltas==0)
				{
					player1=XPBCVAGCDQ[i].WWKVHIMWYD;
					idplayer1=XPBCVAGCDQ[i].AURESXCGMK;				
				}
				if (vueltas==1)
				{
					player2=XPBCVAGCDQ[i].WWKVHIMWYD;
					idplayer2=XPBCVAGCDQ[i].AURESXCGMK;				
				}
				if (vueltas==2)
				{
					player3=XPBCVAGCDQ[i].WWKVHIMWYD;
					idplayer3=XPBCVAGCDQ[i].AURESXCGMK;				
				}
				vueltas++;
			}
		//}
		
	}
	
	
	for (i=0;i<=XPBCVAGCDQ.length-1;i++)
	{
		//console.log("-----"+XPBCVAGCDQ[i].XJARYUVBCB);
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
	
	//if (XPBCVAGCDQ[0].XJARYUVBCB==true && XPBCVAGCDQ[2].XJARYUVBCB==false)	{
	//	a.style.display = 'none';
	//}
	
	a=document.getElementById("Pareja2") 
	//var b=a.labels[0];
	a.textContent = player2;
	
	//if (XPBCVAGCDQ[1].XJARYUVBCB==true)
	//{
	//	a.style.display = 'none';
	//}
	
	a=document.getElementById("Pareja3") 
	//var b=a.labels[0];
	a.textContent = player3;	
	
	//if (XPBCVAGCDQ[2].XJARYUVBCB==true  && XPBCVAGCDQ[0].XJARYUVBCB==false)
	//{
	//	a.style.display = 'none';
	//}
	
	if (MuestraDIV==true)
	{	
		var d=document.getElementById('DivEligePareja');
		d.style.display = 'block';
		
		var JHKSJDHVKJ=7;
		
		timerpareja.loop(1000, function(){	
		
			
		
			if (JHKSJDHVKJ<=0)
			{
				timerpareja.stop();
				RespuestaPareja(2);
			}
			else
			{
				JHKSJDHVKJ=JHKSJDHVKJ-1;
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

RespuestaPareja=function(Seleccion)
{
	var i;
	var ParejaOriginal;
	//OrdenEnSala
	var d=document.getElementById('DivEligePareja');
	d.style.display = 'none';
//JugadorSalaFalseado	
	
	if (TFSXFTYVGQ==1)
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
	if (TFSXFTYVGQ==2)
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
	if (TFSXFTYVGQ==3)
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
	if (TFSXFTYVGQ==4)
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

	
	//console.log("Soy "+TFSXFTYVGQ+" Ha seleccionado: "+Seleccion+" Mi pareja "+MiPareja);
	
	
	var OrdenDelModificado=XPBCVAGCDQ[MiPareja-1].OrdenEnSala;
	//console.log("Orden del modificado "+OrdenDelModificado);
	

	//console.log("Pareja Original "+ParejaOriginal);
	XPBCVAGCDQ[MiPareja-1].OrdenEnSala=ParejaOriginal;
	
	
	XPBCVAGCDQ[ParejaOriginal-1].OrdenEnSala=OrdenDelModificado;


	XPBCVAGCDQ.sort(sort_by('OrdenEnSala', false, parseFloat));
	
	
	
	
	//Por ahora reparte siempre el último en entrar
	var GXNRNMAAKW=function( XPBCVAGCDQ,DFBVDPETGO, RDBQUAVHEP,NuevaPareja,
		OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
		 this.XPBCVAGCDQ=XPBCVAGCDQ
		 this.DFBVDPETGO=DFBVDPETGO
		 this.RDBQUAVHEP=RDBQUAVHEP
		 this.NuevaPareja=NuevaPareja

											 
		 this.OYJAHGADFQ=OYJAHGADFQ
		 this.OJPXTRQDKS=OJPXTRQDKS
		 this.LYHKNIMVEB=LYHKNIMVEB
		 this.RHOLNWBOXR=RHOLNWBOXR
		 
		 this.EBAPPJFYSW=new Date(Date.now());
	 }
	var QPHHGPRJAI=[];
	QPHHGPRJAI.splice(0,1000);

		
	var OYJAHGADFQ=Math.random()*100000;
	var KCPHFPSPLQ=new GXNRNMAAKW(XPBCVAGCDQ,DFBVDPETGO,4,MiPareja,
		OYJAHGADFQ,socket.id,DFBVDPETGO,'IWOWOOKJKJ');
	NBEJWDVLLV.push(KCPHFPSPLQ);
	QPHHGPRJAI.push(KCPHFPSPLQ);


	socket.emit('IWOWOOKJKJ',QPHHGPRJAI[0],
	 function(XQLEOGMJYG)
	 {			 
		EXBCVLOIYJ(XQLEOGMJYG,'IWOWOOKJKJ');
	 }
	);						
	QPHHGPRJAI.splice(0,1000);	
	
	
	KYDWXPGHVY.splice(0,1000) //Importante no quitarlo. Al hacer los giros con el array de jugadores, hay que volver a calcular los desconectados y por eso se limpia el array
	//console.log("Llamada 1")
	IOJCRKJSRL();
	
}

UAUDUHCLOB=function()
{
	var d=document.getElementById('DivSalir');
	d.style.display = 'none';
	//d.style.zIndex=-100;
}

RespuestaSalir=function(JSKXXDPSDS)
{
	var a=document.getElementById("lblSalir") 
	var textomensaje=a.textContent;
	
	UAUDUHCLOB();
	if (JSKXXDPSDS==true)
	{
		if (textomensaje.search('videojuego')>=0) 
		{
			navigator.app.exitApp();
		}
		else
		{
			FHKOYDXPCL();
		}
	}
	else
	{
		//alert("Se queda");
	}
}

PTBEWVCTBF=function(BXDXCOKIHE)
{
	socket.emit("AXPTYWMEOH",BXDXCOKIHE);
	NFARLTEOCI();
}
OQDXNSPREQ=function(NombreSala,Residual)
{
	ETTNDBLRCS();	
	var d=document.getElementById('DivPasswordSala');
	document.getElementById("sala_pass").value=NombreSala;
	document.getElementById("pass_pass").value="";
	
	//console.log("Residual "+Residual.substring(0, Residual.length-2));
	//console.log("Residual2 "+PWMIBRSDCJ[0].OBTBPOULAV.substring(0, PWMIBRSDCJ[0].OBTBPOULAV.indexOf('-',1)+0));
	a=Residual.substring(0, Residual.length-2);
	b=PWMIBRSDCJ[0].OBTBPOULAV.substring(0, PWMIBRSDCJ[0].OBTBPOULAV.indexOf('-',1)+0);
	
	//console.log(a.length);
	//console.log(b.length);
	
	if (PWMIBRSDCJ[0].UHYGLMAUNK==true || PWMIBRSDCJ[0].OBTBPOULAV.substring(0, PWMIBRSDCJ[0].OBTBPOULAV.indexOf('-',1)+0)==   Residual.substring(0, Residual.length-2)  )
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

NFARLTEOCI=function()
{
	ETTNDBLRCS();	
	CerrarCrearSala();
	RHNUCWDYDF();
	YHNMANDWLT();
}
RHNUCWDYDF=function(idSalaAmigo)
{
		
	var d=document.getElementById('DivPasswordSala');
	d.style.display = 'none';
	//d.style.zIndex="101";
	
}

RPEOWUSPJU=function(Sala,Pass)
{
	socket.emit('FNPXATLNEM', Sala, Pass) ;
	RHNUCWDYDF();
}

CrearSala=function(Sala,Pass)
{
	var XUWGVBCQPJ;
	var OBTBPOULAV;
	
	if (Sala!="")
	{
		if (EGPDVIEJEL==true)
		{
			if (PWMIBRSDCJ.length>0)
			{
				XUWGVBCQPJ=PWMIBRSDCJ[0].WWKVHIMWYD;
				OBTBPOULAV=PWMIBRSDCJ[0].FFRVOEAXTF + '-'+ PWMIBRSDCJ[0].BDYYDTFQAO;
			}
			else
			{
				XUWGVBCQPJ="";
				OBTBPOULAV="";
			}
			
			socket.emit('JYSMJTIHBJ', Sala.substring(0,30), Pass.substring(0,30), XUWGVBCQPJ,OBTBPOULAV) ;
			socket.emit('ETJNHPEGJR') ;
		
		}
	}
	CerrarCrearSala();
}
MITSNADNQS=function()
{
	
	UEHYPTREIH.visible=true;
	IBECDOLWLN.visible=true;
	BotonContacta.visible=true;
	JKLJKLRIRI.visible=true;
	BotonClasificacion.visible=true; //1.0.8
}

YBWXJFDOAW=function()
{
	
	EFKTQSXAMA.visible=true;
	LNJDKEVPQE.visible=true;
	JKLJKLRIRI.visible=true;
	
	//CUUKQAGFEB.visible=true;

	APUVCXAYVN= YMHIHSNADE.world.centerX -120;
	PHMUHFKHBO=YMHIHSNADE.world.height-170;

	KYLVRIAAWF= YMHIHSNADE.world.centerX +120; 
	VLHOFXLPJS= YMHIHSNADE.world.height-170;


	if (JHJEWHFWNL==true)
	{
		//EFKTQSXAMA.width=EFKTQSXAMA.width*1.4;
		//EFKTQSXAMA.height=EFKTQSXAMA.height*1.4;
		//PHMUHFKHBO=EFKTQSXAMA.y-90;
		//APUVCXAYVN=EFKTQSXAMA.x-45;
		PHMUHFKHBO=VLHOFXLPJS-90;
		
	}
	
	if (JHJEWHFWNL==true)
	{
		//LNJDKEVPQE.width=LNJDKEVPQE.width*1.4;
		//LNJDKEVPQE.height=LNJDKEVPQE.height*1.4;
		//VLHOFXLPJS=LNJDKEVPQE.y-90;
		VLHOFXLPJS=LNJDKEVPQE.x+45;
		KYLVRIAAWF=KYLVRIAAWF+45;
	}	





	
	var TXBFLEOYKI=YMHIHSNADE.add.tween(LNJDKEVPQE).to( { x: KYLVRIAAWF }, 400, BSXWFYLCEW);
	TXBFLEOYKI.start();

	var RDJFKUULTX=YMHIHSNADE.add.tween(EFKTQSXAMA).to( { y: PHMUHFKHBO  }, 400, KYFMRVNHIQ);
	RDJFKUULTX.start();
	

	
}


RSHJSKMBRP=function(Tipo)
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
				MCFSLYOMHE();	
				//MITSNADNQS();
				ObjetoG=obj;				
				JVEHDHOEEM();
				//socket.emit('PIXQSCGEJH', DFBVDPETGO,socket.id, false,SFKLFIJOIO,ObjetoG) ;
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
				  MCFSLYOMHE();
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
			//if (loc.search('http://xn--guiotepro-n6a.es/?HKCERVLWFB=g')>=0) {
			if (loc.search('HKCERVLWFB')>=0) {	
			
				SalirDesdeLogueo();	
				ref.close();

			}
			});
		}
	}
	
	
	
	/*var myCallback = function(event) { alert(event.url); }
	ref.addEventListener('loadstart', myCallback);
	ref.removeEventListener('loadstart', myCallback);*/
	
}	
	
JTQKCQEDPC=function()
{
	// window.open("http://xn--guiotepro-n6a.es/auth/google", '_system', 'location=yes');
	HUUCUYFBLW.stop();
	log(true,"Es el Turno de "+DVNRTQIWGL+". Yo soy "+TFSXFTYVGQ);


}

TRKOSJTLDX=function()
{
	var d;
	if (EHBNOAKBDQ==false)
	{
		d=document.getElementById('chat');
		d.style.display = 'block';
		/*d.style.zIndex=100;
		
		d.style.position = "absolute";
		d.style.left = YMHIHSNADE.world.x+'px';
		d.style.top = 10+'px';
		d.style.width =80+'px';*/
		
		
		EHBNOAKBDQ=true;
	}
	else
	{
		var d=document.getElementById('chat');
		d.style.display = 'none';
		//d.style.zIndex=-1;

		
		
		EHBNOAKBDQ=false;
	}
	
}


QDPPTWILGS=function()
{
	var d;
	if (EHBNOAKBDQ==false)
	{
		d=document.getElementById('Login');
		d.style.display = 'block';
		/*d.style.zIndex=100;
		
		d.style.position = "relative";
		d.style.left = 130+'px';
		d.style.top = 30+'px';*/
		
		
		KOHYQKLAJO=true;
	}
	else
	{
		var d=document.getElementById('Login');
		d.style.display = 'none';
		//d.style.zIndex=-1;
		KOHYQKLAJO=false;
	}
	
}


WFWTECIQSP=function()
{
	var d;
	
		d=document.getElementById('Login');
		d.style.display = 'block';
		//d.style.zIndex=100;
		
		d.style.position = "absolute";
		//d.style.left = 30+'px';
		//d.style.top = 30+'px';		

}



XIAPNYIGXV=function(UHTPGPRUJA,RPHWVBBGIM,EsCante,OMDVKATFLQ, desdeServer)
{
	var HUJOOKLGRK;
	var GCTYDSCWXE;
	var YSMHGCUJFD;
	var text;
	var TDSYMKWUOC;
	var LQCVWFLTAG;
	var IQISGTBLTU
	var DQKYYAPEEN;
	var UMEOIIEQQD;
	var FTBVKLREAE;
	var IFJRJXGGFY;
	var CWWHRMDADQ;
	var HOGPTRLBYH;
	var i;
	var XLAXKBPPMF=false;
	var STLEOJDWSU=HHOPUSIABJ(UHTPGPRUJA);
	//console.log("SSUNXNEEHN que habla "+UHTPGPRUJA+ " "+STLEOJDWSU)
	var OTGBWFDOND=true;
	//////////////
//EsCante=true;	



	if (UHTPGPRUJA==undefined)
	{
		return false;
	}

	if (EsCante==true)
	{
		

		
		
		//console.log("VOY A CANTAR");
		HUCLBWTDFV(UHTPGPRUJA,RPHWVBBGIM,OMDVKATFLQ);
		if (SRFFTPLVMJ(RPHWVBBGIM)==false || desdeServer==false) // desdeServer: Tema de que canta el que tiene el control dos veces..
		{	
			FOQUJVEYFC.push(RPHWVBBGIM)
			
			//console.log("Va a cantarrrrr")
			
			
			
			if(TFSXFTYVGQ==1) {
				if(UHTPGPRUJA==2){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="El jugador de su derecha canta 20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su derecha canta las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("R",40);
					}
				}
				if(UHTPGPRUJA==3){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="Su compañero canta 20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("N",20);
					}
					else
					{
						//DevolverTexto="Su compa�ero canta las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("N",40);
					}
				}		
				if(UHTPGPRUJA==4){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="El jugador de su izquierda canta 20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su izquierda canta las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("R",40);
					}
				}	

				if(UHTPGPRUJA==1){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("N",20);
					}
					else
					{
						//DevolverTexto="Las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("N",40);
					}
				}				
			}

			if(TFSXFTYVGQ==2) {
				if(UHTPGPRUJA==3){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="El jugador de su derecha canta 20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su derecha canta las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("R",40);
					}
				}
				if(UHTPGPRUJA==4){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="Su compa�ero canta 20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("N",20);
					}
					else
					{
						//DevolverTexto="Su compa�ero canta las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("N",40);
					}
				}		
				if(UHTPGPRUJA==1){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="El jugador de su izquierda canta 20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su izquierda canta las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("R",40);
					}
				}	

				if(UHTPGPRUJA==2){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("N",20);
					}
					else
					{
						//DevolverTexto="Las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("N",40);
					}
				}			
			}
			
				if(TFSXFTYVGQ==3) {
				if(UHTPGPRUJA==4){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="El jugador de su derecha canta 20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su derecha canta las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("R",40);
					}
				}
				if(UHTPGPRUJA==1){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="Su compa�ero canta 20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("N",20);
					}
					else
					{
						//DevolverTexto="Su compa�ero canta las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("N",40);
					}
				}		
				if(UHTPGPRUJA==2){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="El jugador de su izquierda canta 20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su izquierda canta las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("R",40);
					}
				}	
				if(UHTPGPRUJA==3){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("N",20);
					}
					else
					{
						//DevolverTexto="Las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("N",40);
					}
				}			
			}
			
			if(TFSXFTYVGQ==4) {
				if(UHTPGPRUJA==1){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="El jugador de su derecha canta 20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su derecha canta las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("R",40);
					}
				}
				if(UHTPGPRUJA==2){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="Su compa�ero canta 20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("N",20);
					}
					else
					{
						//DevolverTexto="Su compa�ero canta las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("N",40);
					}
				}		
				if(UHTPGPRUJA==3){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="El jugador de su izquierda canta 20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("R",20);
					}
					else
					{
						//DevolverTexto="El jugador de su izquierda canta las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("R",40);
					}
				}	
				if(UHTPGPRUJA==4){
					if (OMDVKATFLQ==20)
					{
						//DevolverTexto="20 en "+ AWCCMSCOPO;
						RPHWVBBGIM="20 en "+RPHWVBBGIM;
						OTGBWFDOND=LQJEJOOAPH("N",20);
					}
					else
					{
						//DevolverTexto="Las 40";
						RPHWVBBGIM="Las 40";
						OTGBWFDOND=LQJEJOOAPH("N",40);
					}
				}			
			}
		}
	}

	
	//////////////
	
	//if (EsCante==false || (EsCante==true && OTGBWFDOND==true))
	if ( (EsCante==false  ) || EsCante==true )
	{
		log(false,RPHWVBBGIM);
		
		HUJOOKLGRK=(RPHWVBBGIM.length*27)/2
		
		HOGPTRLBYH='20_espadas'; //1.0.8 Creo que es el error de algunos dispositivos
		var BocadilloTemp=YMHIHSNADE.add.sprite(-300,-300, HOGPTRLBYH);
		var AltoBocadilloEstallido=BocadilloTemp.height;
		var AnchoBocadilloEstallido=BocadilloTemp.width;
		log(false,"ancho   ss "+BocadilloTemp.width);
		if (STLEOJDWSU=="D")
		{
			if (EsCante==false)
			{
				GCTYDSCWXE=WIEVLYANFM("D",0)-SXSHBRJFIR+150;
				YSMHGCUJFD=FIGQBSJQGA("D",0)-AltoCartaEscalado*1.2;
				IFJRJXGGFY=GCTYDSCWXE+20;
				CWWHRMDADQ=YSMHGCUJFD+20;			
			}
			else
			{
				
				
				GCTYDSCWXE=YMHIHSNADE.world.centerX; //(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*6)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+(SXSHBRJFIR*1.5);
				YSMHGCUJFD=YMHIHSNADE.world.height-(SXSHBRJFIR*2);
				
				if (UTIDOKPNXQ.isRunning==true)
				{
					GCTYDSCWXE=GCTYDSCWXE+200;
					log(false,"CORRIENDO");
				}

				
				IFJRJXGGFY=GCTYDSCWXE+(AnchoBocadilloEstallido*2.7);
				CWWHRMDADQ=YSMHGCUJFD+(AltoBocadilloEstallido*1.8);	
				

				
				
				
			}

			HOGPTRLBYH= 'SOPWHPQINK';

		}	
		if (STLEOJDWSU=="U")
		{
			if (EsCante==false)
			{
				
				GCTYDSCWXE=WIEVLYANFM("U",0);
				YSMHGCUJFD=FIGQBSJQGA("U",0)+(AltoCarta/2);			
				IFJRJXGGFY=GCTYDSCWXE+20;
				CWWHRMDADQ=YSMHGCUJFD+45;
			}	
			else
			{
							
				GCTYDSCWXE=YMHIHSNADE.world.centerX; //(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*6)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+(SXSHBRJFIR*1.5);
				YSMHGCUJFD=(AltoCarta)*1.5;	

				if (UTIDOKPNXQ.isRunning==true)
				{
					GCTYDSCWXE=GCTYDSCWXE+200;
				}
				
				IFJRJXGGFY=GCTYDSCWXE+(AnchoBocadilloEstallido*2.7);
				CWWHRMDADQ=YSMHGCUJFD+(AltoBocadilloEstallido*1.8);	
				
			}

			HOGPTRLBYH= 'LFDEDJWAOF';

		}
		if (STLEOJDWSU=="L")
		{
			if (EsCante==false)
			{
				GCTYDSCWXE=WIEVLYANFM("L",0)+(COIVBWRMCC/2);
				YSMHGCUJFD=FIGQBSJQGA("L",0)-COIVBWRMCC+100;		
				IFJRJXGGFY=GCTYDSCWXE+20;
				CWWHRMDADQ=YSMHGCUJFD+20;			
			}
			else
			{
				GCTYDSCWXE=(COIVBWRMCC*2.5);
				//YSMHGCUJFD=YMHIHSNADE.world.height/2-COIVBWRMCC;
				YSMHGCUJFD=YMHIHSNADE.world.centerY;
				
				if (UTIDOKPNXQ.isRunning==true)
				{
					YSMHGCUJFD=YSMHGCUJFD+100;
				}
				
				IFJRJXGGFY=GCTYDSCWXE+(AnchoBocadilloEstallido*2.7);
				CWWHRMDADQ=YSMHGCUJFD+(AltoBocadilloEstallido*1.8);	
			}

			HOGPTRLBYH= 'PASYDHNYGP';
		}
		if (STLEOJDWSU=="R")
		{
			
			if (EsCante==false)
			{
				GCTYDSCWXE=WIEVLYANFM("R",0)-(AltoCarta*2.3);
				YSMHGCUJFD=FIGQBSJQGA("R",0)-100;		
				IFJRJXGGFY=GCTYDSCWXE+20;
				CWWHRMDADQ=YSMHGCUJFD+45;
			}
			else
			{
				GCTYDSCWXE=YMHIHSNADE.world.width-(COIVBWRMCC*2.5);
				//YSMHGCUJFD=YMHIHSNADE.world.height/2-COIVBWRMCC;	
				YSMHGCUJFD=YMHIHSNADE.world.centerY;
				
				if (UTIDOKPNXQ.isRunning==true)
				{
					YSMHGCUJFD=YSMHGCUJFD+100;
				}
				IFJRJXGGFY=GCTYDSCWXE+(AnchoBocadilloEstallido*2.7);
				CWWHRMDADQ=YSMHGCUJFD+(AltoBocadilloEstallido*1.8);					
			}
			HOGPTRLBYH= 'RTHPPBTCQJ';
		}	
		
		if (EsCante==true){
			if (OMDVKATFLQ==20)
			{
				HOGPTRLBYH='Estallido';
				if (RPHWVBBGIM.indexOf('oros')>0)
				{
					HOGPTRLBYH='20_oros';
					EABXADHEVT("BNSLLGGORP");
				}
				
				if (RPHWVBBGIM.indexOf('copas')>0)
				{
					HOGPTRLBYH='20_copas';
					EABXADHEVT("TKYUFYJRRA");
				}
				
				if (RPHWVBBGIM.indexOf('espadas')>0)
				{
					HOGPTRLBYH='20_espadas';
					EABXADHEVT("LFYAQLIDAI");
				}
				
				if (RPHWVBBGIM.indexOf('bastos')>0)
				{
					HOGPTRLBYH='20_bastos';
					EABXADHEVT("CEDKIIHEHO");
				}
			}
			else
			{
				//HOGPTRLBYH='Estallido_40';
				HOGPTRLBYH='Las_40';
				EABXADHEVT("CPBEWFVQIJ");
			}
			
			//1.0.8
			if(navigator.vibrate) {
				window.navigator.vibrate(300);
			}
			
			
			log(false,"NPYBJSHIFL FTBVKLREAE: "+GCTYDSCWXE);
			
			
			
			//var bmd = YMHIHSNADE.add.bitmapData(YMHIHSNADE.world.width-100,YMHIHSNADE.world.height-100);
			//var bmd = YMHIHSNADE.make.bitmapData(300,300);
			 

			// draw to the canvas context like normal
		
			//1.0.8
			/*bmd.ctx.beginPath();
			bmd.ctx.rect(0,0,YMHIHSNADE.world.width,YMHIHSNADE.world.height);
			bmd.ctx.fillStyle = '#000000';
			bmd.ctx.fill();*/
		
			// use the bitmap data as the texture for the sprite

		
		

			//FTBVKLREAE.bringToTop;
			//var style = { font: "bold 17px Arial", wordWrap: true, wordWrapWidth: FTBVKLREAE.width-10 };
			
			
			
			//text = YMHIHSNADE.add.text(IFJRJXGGFY, CWWHRMDADQ , RPHWVBBGIM, style);
			//text.alpha=0;
							
			 //1.0.8
			if (TTCLPDJAMD.isRunning==false)
			{
				var WTCIGMLJUY = YMHIHSNADE.add.sprite(0, 0, bmd);
				WTCIGMLJUY.alpha=0.7;
				
				TTCLPDJAMD = YMHIHSNADE.add.tween(WTCIGMLJUY).to( { alpha: 0.7 }, 1000, KYFMRVNHIQ, true);
				TTCLPDJAMD.onComplete.add(  function(){
						TTCLPDJAMD = YMHIHSNADE.add.tween(WTCIGMLJUY).to( { alpha: 0 }, 500, KYFMRVNHIQ, true,1000,0);
					}
				);
			}
			
			
			FTBVKLREAE=YMHIHSNADE.add.sprite(GCTYDSCWXE,YSMHGCUJFD, HOGPTRLBYH);
			FTBVKLREAE.anchor.setTo(0.5, 0.5);

			//FTBVKLREAE.bringToTop;
			UTIDOKPNXQ = YMHIHSNADE.add.tween(FTBVKLREAE).to( { alpha: 1 }, 1000, KYFMRVNHIQ, true);
			UTIDOKPNXQ.onComplete.add(  function(){
					UTIDOKPNXQ = YMHIHSNADE.add.tween(FTBVKLREAE).to( { alpha: 0 }, 500, KYFMRVNHIQ, true,1000,0);
				}
			);
			
			
			/*UMEOIIEQQD = YMHIHSNADE.add.tween(text).to( { alpha: 1 }, 1500, KYFMRVNHIQ, true);
			UMEOIIEQQD.onComplete.add(  function(){
					UMEOIIEQQD = YMHIHSNADE.add.tween(text).to( { alpha: 0 }, 1500, KYFMRVNHIQ, true,2000,0);
				}
			
			);*/
			

			
		}
		else
		{
			
			for (i=0; i<=QLNEIQGEDF.length-1;i++)
			{
				if(QLNEIQGEDF[i]==STLEOJDWSU)
				{
					XLAXKBPPMF=true;
				}
				
			}	
			
			if (XLAXKBPPMF==false)
			{
				FTBVKLREAE=YMHIHSNADE.add.sprite(GCTYDSCWXE,YSMHGCUJFD, HOGPTRLBYH);

				var style = { font: "bold 21px Arial", wordWrap: true, wordWrapWidth: FTBVKLREAE.width-14 };
				
				
				
				text = YMHIHSNADE.add.text(IFJRJXGGFY, CWWHRMDADQ , RPHWVBBGIM, style);
				text.alpha=0;
				
				DQKYYAPEEN = YMHIHSNADE.add.tween(FTBVKLREAE).to( { alpha: 1 }, 1500, KYFMRVNHIQ, true);
				DQKYYAPEEN.onComplete.add(  function(){
						DQKYYAPEEN = YMHIHSNADE.add.tween(FTBVKLREAE).to( { alpha: 0 }, 1500, KYFMRVNHIQ, true,2000,0);
					}
				
				);
				
				UMEOIIEQQD = YMHIHSNADE.add.tween(text).to( { alpha: 1 }, 1500, KYFMRVNHIQ, true);
				UMEOIIEQQD.onComplete.add(  function(){
						UMEOIIEQQD = YMHIHSNADE.add.tween(text).to( { alpha: 0 }, 1500, KYFMRVNHIQ, true,2000,0);
					}
				
				);
			}
		}
	}
	
	
}

BYBYBFHBOX=function(TFSXFTYVGQ,RPHWVBBGIM,EsCante)
{
	RPHWVBBGIM=RPHWVBBGIM.substring(0,60)
	inputField.resetText();
	XIAPNYIGXV(TFSXFTYVGQ,RPHWVBBGIM,EsCante)
	if (EGPDVIEJEL==true && EsCante==false)
	{
		socket.emit('HXUNTIAKHM', RPHWVBBGIM,DFBVDPETGO,TFSXFTYVGQ) ;
	}
}

XEMENNVXGV=function()
{
	
	try
	{
		if (socket.id==undefined)
		{
			socket = io.connect(Maquina,{reconnection: true,  reconnectionDelay: 3000,
				reconnectionDelayMax : 4000,
				reconnectionAttempts: 1,
				'max reconnection attempts' : 1
			}
			);
			//IJCSKNTKVH
			setEventHandlers();
			
		}
	}
	catch(err) 
	{
		try
		{
			if (socket==undefined)
			{
			socket = io.connect(Maquina,{reconnection: true,  reconnectionDelay: 3000,
				reconnectionDelayMax : 4000,
				reconnectionAttempts: 1,
				'max reconnection attempts' : 1
			}
			);
				setEventHandlers();
				
			}
		}
		catch(err){
			//console.log("Problema reconectando");
		}
	}
	//console.log("Intento de reconexión "+JKCANKPQBB);

}
JVEHDHOEEM=function(){
	
	if (checkConnection()==true)
	{	
		JKCANKPQBB=0;
		CUUKQAGFEB.x=QETACVSHAR+150;
		CUUKQAGFEB.visible=true;
		XEMENNVXGV();
		
		DVNRTQIWGL=1; //1.0.4
		UEHYPTREIH.visible=false;
		IBECDOLWLN.visible=false;
		BotonClasificacion.visible=false; //1.0.8
		BotonContacta.visible=false;
		//EFKTQSXAMA.visible=false;
		//LNJDKEVPQE.visible=false;
		
		EGPDVIEJEL=true;
		
		QSAXUCPASV();
		WNEWPCNXPA();
		log(true,"Entra en multijugador");
		
		
		IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);		
		YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);	
		//log(false,User);

		//console.log("J");
		JKLJKLRIRI.visible=true;
		//JKLJKLRIRI.text="KK";
		
		//alert(socket.id);
		if (socket.id!=undefined)
		{
			socket.emit('PIXQSCGEJH', DFBVDPETGO,socket.id, false,SFKLFIJOIO,ObjetoG) ;
			//socket.emit('XUUKTXNVCK',socket.id);
			socket.emit('JKHWJKHIWF');
		
		}
		else
		{
			XEMENNVXGV();
			
		}

	}
}

InicioPartidaOnline=function(Modalidad,Sala)
{
	
	BUJELVTIKU.visible=false;
	CUUKQAGFEB.visible=true;
	CUUKQAGFEB.x=QETACVSHAR;
	
	DVNRTQIWGL=1; //1.0.4

	NFARLTEOCI();
	
	if (socket.id!=undefined)
	{
		socket.emit('PRHGDXYEOQ', socket.id, true,Modalidad,Sala,SFKLFIJOIO,ObjetoG) ; //0: LXGKVFJUFT  1: Amigos
	}
}

InicioMultiJugadorAleatorio=function()
{
	if (checkConnection()==true)
	{	
		InicioPartidaOnline(0,false);//LXGKVFJUFT
	}
}

CMREMHOJIN=function(){

		var HKCERVLWFB = getUrlVars()["HKCERVLWFB"];
		//alert(HKCERVLWFB);
		if (HKCERVLWFB=="g#" || HKCERVLWFB=="g")
		{
			//alert("entra");
			JVEHDHOEEM();
		}

}

OCSBJTDODP=function(){
	

	XEMENNVXGV();
	
	//if (VXEWRTCPMM==true)
	//{
		UEHYPTREIH.visible=false;
		IBECDOLWLN.visible=false;
		BotonClasificacion.visible=true; //1.0.8
		BotonContacta.visible=false;
		EFKTQSXAMA.visible=false;
		LNJDKEVPQE.visible=false;
		JKLJKLRIRI.visible=false;
		
		
		EGPDVIEJEL=false;
		
		QSAXUCPASV();
		WNEWPCNXPA();	
		
		
		TFSXFTYVGQ=1;
		MYQBNBVHKU=true;
		
		XIQDONAJMM.visible=false;
		KVBNWXDTON.visible=true;
			
		ETKKAJPFXQ(4); //ILA RDBQUAVHEP
		//JQSOOBSDDS()
		
		
		IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);		
		YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);		
	//}
	//else
	//{
	//	VSXSYEUABW("Versión Obsoleta. Actualícese.",false);
		
	//}

}



SVLGSBPKGJ=function() {
	var DevolverTexto;
	
	if (EGPDVIEJEL==false)
	{
		log(false,"DVNRTQIWGL en RTOSLKFWHC AWCCMSCOPO: "+DVNRTQIWGL)
		if(TFSXFTYVGQ==1) {
			if(DVNRTQIWGL==2){
				DevolverTexto="Es el turno del jugador de su derecha"
			}
			if(DVNRTQIWGL==3){
				DevolverTexto="Es el turno de su compañero"
			}		
			if(DVNRTQIWGL==4){
				DevolverTexto="Es el turno del jugador de su izquierda"
			}			
		}

		if(TFSXFTYVGQ==2) {
			if(DVNRTQIWGL==3){
				DevolverTexto="Es el turno del jugador de su derecha"
			}
			if(DVNRTQIWGL==4){
				DevolverTexto="Es el turno de su compañero"
			}		
			if(DVNRTQIWGL==1){
				DevolverTexto="Es el turno del jugador de su izquierda"
			}			
		}	
		
		if(TFSXFTYVGQ==3) {
			if(DVNRTQIWGL==4){
				DevolverTexto="Es el turno del jugador de su derecha"
			}
			if(DVNRTQIWGL==1){
				DevolverTexto="Es el turno de su compañero"
			}		
			if(DVNRTQIWGL==2){
				DevolverTexto="Es el turno del jugador de su izquierda"
			}			
		}	

		if(TFSXFTYVGQ==4) {
			if(DVNRTQIWGL==1){
				DevolverTexto="Es el turno del jugador de su derecha"
			}
			if(DVNRTQIWGL==2){
				DevolverTexto="Es el turno de su compañero"
			}		
			if(DVNRTQIWGL==3){
				DevolverTexto="Es el turno del jugador de su izquierda"
			}			
		}
	}
	else
	{
		DevolverTexto=" Es el turno de "+XPBCVAGCDQ[DVNRTQIWGL-1].WWKVHIMWYD
	}
	return DevolverTexto;
}



function dragUpdate(sprite, pointer, dragX, dragY, snapPoint) {

  	var index;
	 for ( var i = 0; i < AGKVNAGGLB.length; i++){
		if (AGKVNAGGLB[i].UUOPKETETA==sprite.name){
			index=i;
			break;
		}	 
	 }

	 //log(false,"Moviendo "+AGKVNAGGLB[index].HVCFEWNDRF+" de "+AGKVNAGGLB[index].SGCSHJVERI+" "+pointer.x)
	
	 for ( var i = 0; i < AGKVNAGGLB.length; i++){
		YMHIHSNADE.physics.arcade.overlap(AGKVNAGGLB[i].TNFAGGMKXD, AGKVNAGGLB[i], MDBPQGPDUY, null, this);
	}
	

}

MDBPQGPDUY=function(sprite, spriteColision) {
	log(false,"Colisionando ");
};

 
 
Level.prototype.update=function(){
	SYXHGDSJDY.sort('y', Phaser.Group.SORT_ASCENDING);
	BDRJVGFWQH.sort('y', Phaser.Group.SORT_DESCENDING);	

	
};


Encima=function(cartamovida){

	//YMHIHSNADE.add.text(600, 300,"Ca", { font: '16px Arial', fill: '#ffffff' });
	cartamovida.x=cartamovida.x-1500;
	
	YMHIHSNADE.tweens.removeAll();

	// rotate monkey
	var twn = YMHIHSNADE.add.tween(cartamovida);
	twn.to({
		angle : cartamovida.angle + 360
	}, 1000, "Linear", true);

	// scale monkey
	twn = YMHIHSNADE.add.tween(cartamovida.scale);
	twn.to({
		x : 0.1,
		y : 0.1
	}, 1000, "Linear", true);
//	YMHIHSNADE.add.text(390, 300,cartamovida.SGCSHJVERI, { font: '16px Arial', fill: '#ffffff' });
};


/*var ObjetoSala = function(AURESXCGMK,Sala){
	this.AURESXCGMK=AURESXCGMK
	this.Sala=Sala
};
*/

var ObjetoSala = function(AURESXCGMK,Sala,Cerrada,WWKVHIMWYD,BONQVNOXDP,QHHQPXWFNG,AvatarSprite,XJARYUVBCB,EJOYNSESRD,IRQGAFESIC,Amigo,OBTBPOULAV,OrdenEnSala, JugadorSalaFalseado,NombreOri){
	this.AURESXCGMK=AURESXCGMK;
	this.Sala=Sala;
	this.SalaCerrada=Cerrada;
	this.WWKVHIMWYD=WWKVHIMWYD;
	this.BONQVNOXDP=BONQVNOXDP;
	this.QHHQPXWFNG=QHHQPXWFNG;
	this.AvatarSprite;
	this.XJARYUVBCB=XJARYUVBCB;
	this.EJOYNSESRD=EJOYNSESRD;
	this.IRQGAFESIC=IRQGAFESIC;
	this.Amigo=Amigo
	this.OBTBPOULAV=OBTBPOULAV
	this.OrdenEnSala=OrdenEnSala
	this.JugadorSalaFalseado=JugadorSalaFalseado
	
	this.NombreOri=NombreOri
};

setEventHandlers = function () {
  // Socket connection successful
  //YMHIHSNADE.add.text(390, 400,"laiolailo", { font: '16px Arial', fill: '#ffffff' });
  
  
  socket.on('connect', AYAOSXTCBR)
  socket.on('reconnect', function()
  {
	  var i;
	  if (MYQBNBVHKU==false)
	  {
		  MatarConexion();
	  }
	  else
	  {
	 
	  JKCANKPQBB=0;
	  //console.log("ARRAY DE LA SALA "+XPBCVAGCDQ);
	  if (XPBCVAGCDQ.length>0) 
	  {
		  SVHMCOYULR("Reconectando..."+ XPBCVAGCDQ[TFSXFTYVGQ-1].WWKVHIMWYD);	
		  socket.emit("Reconectado", XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK,XPBCVAGCDQ[TFSXFTYVGQ-1].Sala);
	
	
	  
	  
	  }
	  else
	  {
		   //console.log("MUY RARO");
		  if (EGPDVIEJEL==true)
		  {
			FHKOYDXPCL();
		  }
	  }
	  }
  })

  socket.on('VOUQWLMKWW', CURCDCWNHB)
  socket.on('UAKKKJVTUK', DVCXGBTNWL)
 
  socket.on('disconnect', RWOCHOBYJY)
 
  
  socket.on('OUPPFUDFTA', function(data,callback)
  {
	  //console.log(data);
	  NSIRYROROW(data.JugadoresEnSala,data.SalaJoin,data.ArrayEnviar)
	  return callback(data.OYJAHGADFQ);
  }
  )
  
  
  
  socket.on('FFGKWCDVFE', function(data,callback)
  {
	  //console.log(data);
	  KLDULSMKMA(data.data,data.RDBQUAVHEP,data.idPartida)
	  return callback(data.OYJAHGADFQ);
  }
  )
  
  socket.on('VMCFXIVSKH', function(data,callback)
  {
	  //console.log(data);
	  XWGQYYRRQO(data.UHTPGPRUJA,data.SJVCMXWVVI,data.BBSGITWRQX)
	  return callback(data.OYJAHGADFQ);
  }
  )

  socket.on('PMXHPCMRIF',  function(data,callback)
  {
	  //console.log(data);
	  var i;
	  var HAUSUTNHGI=true;
	  
	  if (data.DesdeDesconexion==true)
	  {
			  for (i=0;i<=NBEJWDVLLV.length-1;i++)
			  {
					if(NBEJWDVLLV[i].RHOLNWBOXR=='RYUDYPPOXW' || NBEJWDVLLV[i].RHOLNWBOXR=='RYUDYPPOXW solo yo')
					{
						HAUSUTNHGI=false;
						break;
					}
			  }
			  
			if (HAUSUTNHGI==false)
			{
				MatarConexion();
			}
	  
	  }
	  else
	  {
		  HAUSUTNHGI=true;
	  }
	  //console.log("jol");
	  NOGEVUYFEW(data.UHTPGPRUJA,data.SJVCMXWVVI,data.Turno,data.AGTXFNIKQD,data.QKVJASWVEO)
	  
	  return callback(data.OYJAHGADFQ);
  }
  )
 
  socket.on('ODSYQUFMDU', function(data,callback)
  {
	  
	  var i;
	  var HAUSUTNHGI=true;
	  
	  if (data.DesdeDesconexion==true)
	  {
			  for (i=0;i<=NBEJWDVLLV.length-1;i++)
			  {
					if(NBEJWDVLLV[i].RHOLNWBOXR=='RYUDYPPOXW' || NBEJWDVLLV[i].RHOLNWBOXR=='RYUDYPPOXW solo yo')
					{
						HAUSUTNHGI=false;
						break;
					}
			  }
			  
			if (HAUSUTNHGI==false)
			{
				MatarConexion();
			}
	  
	  }
	  else
	  {
		  HAUSUTNHGI=true;
	  }
	
	  NOGEVUYFEW(data.UHTPGPRUJA,data.SJVCMXWVVI,data.Turno,data.AGTXFNIKQD,data.QKVJASWVEO)
	  return callback(data.OYJAHGADFQ);
  }
  )
  
  
  socket.on('VOJPSKOTNY', function(data,callback)
  {
	  //console.log(data);
	  NUWTGXUUTS();
	  return callback(data.OYJAHGADFQ);
  }
  )

  socket.on('IPGXRVPSID',  function(data,callback)
  {
	  //console.log(data);
	  TGLVJXEMKD(data.UHTPGPRUJA,data.OMDVKATFLQ,data.AWCCMSCOPO)
	  return callback(data.OYJAHGADFQ);
  }
  )
  
  
  socket.on('RNLCJXJTGF', function(data,callback)
  {
	  //console.log(data);
	  MBDMSUIWEH(data.UHTPGPRUJA,data.SJVCMXWVVI)
	  return callback(data.OYJAHGADFQ);
  }
  )
  
  
  socket.on('HKJSDHFUIW', function(data,callback)
  {
	  //console.log(data);
	  MCMWUEHUWH(data.ArrayDelaPropiaSalaClienteOrdenada,data.RDBQUAVHEP)
	  return callback(data.OYJAHGADFQ);
  }
  )
  
   socket.on('KJHKHEIEIE', function(data,callback)
  {
	  //console.log(data);
	  BMNBIWEGUY(data.QuienSoy)
	  return callback(data.OYJAHGADFQ);
  }
  ) 

  
  
  
  socket.on('OYYQISPRTK', function(data,callback)
  {
	  //console.log(data);
	  VMSUJQUAGD(data.data,data.QuienHabla)
	  return callback(data.OYJAHGADFQ);
  }
  )
  
  
  socket.on('GCOMOMYQBP', function(data,callback)
  {
	  //console.log(data);
	  GDRQVXOCBL(data.SSUNXNEEHN,data.WWKVHIMWYD,data.posicionJugador)
	  return callback(data.OYJAHGADFQ);
  }
  )
  
  
 
 socket.on('TGUUXMBTHT', function(data,callback)
  {
	  //console.log(data);
	  BCVWETKAKG(data.SSUNXNEEHN,data.WWKVHIMWYD,data.posicionJugador,data.NuevoId)
	  return callback(data.OYJAHGADFQ);
  }
  )


 socket.on("connect_failed", FGRXSJFOOH)
  socket.on("connect_error", MNTKNVATCM)
  socket.on("ITHUWHNFDP", TJDBATCOYY)
  socket.on("IOWWFUHGJF", VSXSYEUABW)
  socket.on("XRIVHTTLDJ",QAFLUOOCBX)
  socket.on("FCRHVCROVJ", SRUKEMRQNI)
  
  socket.on('JWNXDMIDXW', function (text) {
	if (text=="Error5")
	{
		VSXSYEUABW("Usuario deshabilitado.", true)
	}
	
	WFWTECIQSP();
	});

	socket.on('NNSGGWRWTY',HAJAHHHETE)
	
	socket.on('giveme_your_moves', function(data,callback)
	  {
		  //console.log(data);
		  onSocketEnviaEnOff(data.DFBVDPETGO)
		  return callback(data.OYJAHGADFQ);
	  }
	  )

};


onSocketEnviaEnOff=function(Sala)
{
	var i;
	//1.0.6
	for (i=0;i<=NBEJWDVLLV.length-1;i++)
	{
		//console.log("Enviando el mensaje "+NBEJWDVLLV[0].OYJAHGADFQ+" de "+NBEJWDVLLV[0].OJPXTRQDKS);
		//console.log("Comparo cliente "+NBEJWDVLLV[i].OJPXTRQDKS+" con "+ViejoSocket+" y sala "+NBEJWDVLLV[i].DFBVDPETGO+" con "+Sala);
		//if ( (NBEJWDVLLV[i].OJPXTRQDKS==NuevoID || NBEJWDVLLV[i].OJPXTRQDKS===JugadorQueReconecta) && NBEJWDVLLV[i].DFBVDPETGO==Sala)
		if ( NBEJWDVLLV[i].DFBVDPETGO==Sala)
		{
			
			NBEJWDVLLV[i].OJPXTRQDKS=socket.id; //Cambio las colas de mensajes al nuevo socket.
			
			//console.log("Y lo emito "+NBEJWDVLLV[i].RHOLNWBOXR +" "+NBEJWDVLLV[0].OYJAHGADFQ+" de "+NBEJWDVLLV[0].OJPXTRQDKS); 	
			 this.emit(NBEJWDVLLV[i].RHOLNWBOXR,NBEJWDVLLV[i],
			 function(XQLEOGMJYG)
			 {
				
				EXBCVLOIYJ(XQLEOGMJYG,'reconecto');
				
				
			 }
			);
		}


	}	
	

	IOJCRKJSRL();
}

HAJAHHHETE=function(NMNUEBBPOI)
{
	//alert(NMNUEBBPOI.HJHKJHJKHE+ " "+NMNUEBBPOI.NSUIHIUEUE);

	//JKLJKLRIRI.visible=true;
	
	JKLJKLRIRI.text="Contra el mundo: "+ NMNUEBBPOI.HJHKJHJKHE+" personas en línea\n"+"Contra amigos: "+NMNUEBBPOI.NSUIHIUEUE +" personas en línea";
	
	//TextCuentaAmigos.visible=true;
	//TextCuentaAmigos.text="Contra amigos: "+NMNUEBBPOI.NSUIHIUEUE +" personas en línea";	
	
}


MCMWUEHUWH=function(ArrayDelaPropiaSalaClienteOrdenada,QuienReparteServer,NuevaPareja)
{
	var i;
	
	
	XPBCVAGCDQ=ArrayDelaPropiaSalaClienteOrdenada;
	
	KYDWXPGHVY.splice(0,1000); //Importante hacer esto porque han cambiado los órdenes
	IOJCRKJSRL();
	
	
	for (i=0; i<=XPBCVAGCDQ.length-1;i++)
	{
		if (XPBCVAGCDQ[i].AURESXCGMK==socket.id)
		{
			TFSXFTYVGQ=(i+1);
			//console.log("CHANGE2: "+TFSXFTYVGQ)
			//console.log("SOY con el trucaje"+TFSXFTYVGQ);
		}

	}
	
	//console.log("SOY "+TFSXFTYVGQ);
	
	BSFNXQXOTD.splice(0,1000);
	JHKJKHHJCC();
	
	
	var GXNRNMAAKW=function( QuienSoy,
		OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
		 this.QuienSoy=TFSXFTYVGQ
		 
											 
		 this.OYJAHGADFQ=OYJAHGADFQ
		 this.OJPXTRQDKS=OJPXTRQDKS
		 this.LYHKNIMVEB=LYHKNIMVEB
		 this.RHOLNWBOXR=RHOLNWBOXR
		 
		 this.EBAPPJFYSW=new Date(Date.now());
	 }


	 var QPHHGPRJAI=[];
	QPHHGPRJAI.splice(0,1000);

		
	var OYJAHGADFQ=Math.random()*100000;
	var KCPHFPSPLQ=new GXNRNMAAKW(XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK,
		OYJAHGADFQ,socket.id,DFBVDPETGO,'JHWIEIWIIW');
	NBEJWDVLLV.push(KCPHFPSPLQ);
	QPHHGPRJAI.push(KCPHFPSPLQ);
	

	socket.emit('JHWIEIWIIW',QPHHGPRJAI[0],  
	 function(XQLEOGMJYG)
	 {			 
		EXBCVLOIYJ(XQLEOGMJYG,'JHWIEIWIIW');
	 }
	);	
	QPHHGPRJAI.splice(0,1000);		
	//KYDWXPGHVY.splice(0,1000);
	
	//console.log("Soy "+TFSXFTYVGQ+" "+ESKTEXAVHU);
	
	for (i=0;i<=XPBCVAGCDQ.length-1;i++)
	{
		if (TFSXFTYVGQ==ESKTEXAVHU && XPBCVAGCDQ[i].XJARYUVBCB==true)
		{
			//console.log("Enviando..");
			var OYJAHGADFQ=Math.random()*100000;
			var KCPHFPSPLQ=new GXNRNMAAKW(XPBCVAGCDQ[i].AURESXCGMK,
				OYJAHGADFQ,socket.id,DFBVDPETGO,'JHWIEIWIIW');
			NBEJWDVLLV.push(KCPHFPSPLQ);
			QPHHGPRJAI.push(KCPHFPSPLQ);
			
			
			socket.emit('JHWIEIWIIW',QPHHGPRJAI[0],  
			 function(XQLEOGMJYG)
			 {			 
				EXBCVLOIYJ(XQLEOGMJYG,'JHWIEIWIIW');
			 }
			);	
			QPHHGPRJAI.splice(0,1000);		
			//KYDWXPGHVY.splice(0,1000);
	
	
		}
	}

	
	
	

	
	
}

BMNBIWEGUY=function(QuienDaOK)
{
	var i;
	var IUWYUIYWIN=false;
	NKJHKJHHHE.push(QuienDaOK);
	//console.log("Recibiendo respuestas: "+NKJHKJHHHE.length+" ");
	NNSHEUERGY();

	
}

NNSHEUERGY=function()
{
	
	var IUWYUIYWIN=false;
	var i;
	
	//console.log("Debe repartir.."+NKJHKJHHHE.length)
	//IOJCRKJSRL();
	IOJCRKJSRL();//1.0.6
	
	if (NKJHKJHHHE.length==4 && AGKVNAGGLB.length==0 && KNVKGHHTYC.length==0 && CBCNHFGWLU.length==0 && TWJONOKGHC.length==0)
	{
		
		
		if (XPBCVAGCDQ.length==4){
		
			/*for (i=0;i<=KYDWXPGHVY.length-1;i++)
			{
			//console.log("XJARYUVBCB "+ESKTEXAVHU);	
				if (KYDWXPGHVY[i].AURESXCGMK==XPBCVAGCDQ[3].AURESXCGMK && TFSXFTYVGQ==ESKTEXAVHU)
				{
					IUWYUIYWIN=true;
				}
			}*/
	
			if ( TFSXFTYVGQ==ESKTEXAVHU)
			{
			 //if (XPBCVAGCDQ[3].AURESXCGMK==socket.id || IUWYUIYWIN==true){ //Se crea la baraja
				
				DVNRTQIWGL=1;
				
				ETKKAJPFXQ(4);	//ILA RDBQUAVHEP
				EnviarBaraja(WUHRYVMYBE,DFBVDPETGO,4,EVAILWGGKX,XPBCVAGCDQ,(JVQXQGYDHH+CNCCBHQJKL)) ; //ILA RDBQUAVHEP
							
			}
		}
		
		
	}
	
}
SRUKEMRQNI=function(Data){
	var i;
	
	if (1==1)
	{
	var table = document.getElementById("TablaClasificacion");
	var row; 
	var cell1;
	var cell2;
	var cell3;
	var rowCount = table.rows.length;


	for (i = 1; i < rowCount; i++) {
	  
		table.deleteRow(1);
	}

	//alert("j");

	/*for (i=0;i<=Data.length-1;i++)
	{

		console.log(Data[i].Usuario[1][0]+" "+Data[i].PAXBGDCANU+Data[i].Usuario[0][0]);
		
		
	}
	*/

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	
	
	
	



	
	var d=document.getElementById('DivClasificacion');
	d.style.display = 'block';
	//d.style.zIndex=-100;
						
	for (i=0;i<=Data.length-1;i++)
	{
		row=table.insertRow();
		
		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
		cell3 = row.insertCell(2);
		cell4 = row.insertCell(3);
		cell5 = row.insertCell(4);
		cell6 = row.insertCell(5);		
		cell7 = row.insertCell(6);
		
		
		
		cell1.innerHTML =  "<img src='" + Data[i]._Usuario[0][0] + "' style='max-width:100%' >";
		cell2.innerHTML = Data[i]._Usuario[1][0];
		cell3.innerHTML = Data[i]._Jugadas;
		cell4.innerHTML = Data[i]._Ganadas;
		cell5.innerHTML = Data[i]._Perdidas;
		cell6.innerHTML = Data[i]._Retiradas;
		cell7.innerHTML = parseFloat(Data[i]._Puntos).toFixed(2);;
		
		

		
		
		
		
		
		
	}	
	}
	

}
QAFLUOOCBX=function(Validacion,Sala){
	if (Validacion==true)
	{
		InicioPartidaOnline(1,Sala);
	}
	else
	{
		//console.log("mal");
		VSXSYEUABW("Contraseña incorrecta.",false);
	}
}
VSXSYEUABW=function(RPHWVBBGIM,PIOOIEWRGG)
{
	var	UYEUYIYECB=IEUIUCYUCC(RPHWVBBGIM,40);
	
	var tw = YMHIHSNADE.add.tween(UYEUYIYECB).to( { alpha: 0 }, 1000, KYFMRVNHIQ, true,5000);
	tw.onComplete.add( function(){
		
		if (PIOOIEWRGG==false)
		{
			VXEWRTCPMM=false;
			FHKOYDXPCL();
		}
		
		}
	);
}



FGRXSJFOOH=function()
{
	YUXWLFWVRD();
	
}

MNTKNVATCM=function()
{
	YUXWLFWVRD();
}

CURCDCWNHB=function(CYHNPORXFJ)
{
		//alert(CYHNPORXFJ[0].IRQGAFESIC);
		var tapete;
		
		PWMIBRSDCJ.splice(0,1000);
		
		tapete=CYHNPORXFJ[0].IRQGAFESIC
		if (JHJEWHFWNL==true)
		{
			tapete=tapete.replace('.jpg','_43.jpg');
		}
		PWMIBRSDCJ.push(new AWXPNWRCHC(CYHNPORXFJ[0].WWKVHIMWYD,
			CYHNPORXFJ[0].BONQVNOXDP,
			CYHNPORXFJ[0].QHHQPXWFNG,
			CYHNPORXFJ[0].EJOYNSESRD,
			tapete,
			CYHNPORXFJ[0].FFRVOEAXTF,
			CYHNPORXFJ[0].BDYYDTFQAO,
			CYHNPORXFJ[0].UHYGLMAUNK,
			CYHNPORXFJ[0].DNQIYVAFPR,
			CYHNPORXFJ[0].XCXKVEEIOO,
			CYHNPORXFJ[0].BUJELVTIKU
			));
			
			//alert(PWMIBRSDCJ[0].IRQGAFESIC);
		
		if ( CYHNPORXFJ[0].XCXKVEEIOO!="" )
		{
			//console.log("Debe Salir "+CYHNPORXFJ[0].DNQIYVAFPR);
			VSXSYEUABW(CYHNPORXFJ[0].XCXKVEEIOO,CYHNPORXFJ[0].DNQIYVAFPR);
			
		}
		
		LEQRGVLYLX=PWMIBRSDCJ[0].IRQGAFESIC;
	
		
		
		DCIKAAMXTU=new Phaser.Loader(YMHIHSNADE);
		DCIKAAMXTU.crossOrigin ="Anonymous"
		DCIKAAMXTU.image('LEQRGVLYLX', PWMIBRSDCJ[0].IRQGAFESIC);
		DCIKAAMXTU.onFileComplete.add( function() { BHAACHYLAS();  }  );
		DCIKAAMXTU.start();

		CBGXLQKDBG=new Phaser.Loader(YMHIHSNADE);
		CBGXLQKDBG.crossOrigin ="Anonymous"
		//CBGXLQKDBG.removeFile('image', 'ReversoRemoto')
		CBGXLQKDBG.image('ReversoRemoto', PWMIBRSDCJ[0].EJOYNSESRD,true);
		CBGXLQKDBG.onFileComplete.add( function() { GXFPVAOHBL();  }  );
		CBGXLQKDBG.start();
		
		if (PWMIBRSDCJ[0].BUJELVTIKU!=null && ISVLSNLHWR<=2 && XPBCVAGCDQ.length!=4 && EHUHWTYXOS==false )
		{			
			ETJWOWNABD=new Phaser.Loader(YMHIHSNADE);
			ETJWOWNABD.crossOrigin ="Anonymous"
			ETJWOWNABD.image('NoticiaRemoto', PWMIBRSDCJ[0].BUJELVTIKU,true);
			ETJWOWNABD.onFileComplete.add( function() { OJPKPPKDJU();  }  );
			ETJWOWNABD.start();
		}
		
		ISVLSNLHWR++;
		if (ISVLSNLHWR>10)
		{
			ISVLSNLHWR=0;
		}
		
		YBWXJFDOAW();
	
}

DVCXGBTNWL=function(CYHNPORXFJ)
{
	
	var i;
	
	//No puedo hacer destroys porque se revienta en los carteles de fin de partida
		/*for (i=0;i<=FXGSEGRXKC.length-1;i++)
		{
			FXGSEGRXKC[i].TNFAGGMKXD.destroy();
		}

		for (i=0;i<=CBCNHFGWLU.length-1;i++)
		{
			CBCNHFGWLU[i].TNFAGGMKXD.destroy();
		}

		for (i=0;i<=KNVKGHHTYC.length-1;i++)
		{
			KNVKGHHTYC[i].TNFAGGMKXD.destroy();
		}

		for (i=0;i<=TWJONOKGHC.length-1;i++)
		{
			TWJONOKGHC[i].TNFAGGMKXD.destroy();
		}
		for (i=0;i<=AGKVNAGGLB.length-1;i++)
		{
			AGKVNAGGLB[i].TNFAGGMKXD.destroy();
		}

		for (i=0;i<=VDKOVQXHON.length-1;i++)
		{
			VDKOVQXHON[i].TNFAGGMKXD.destroy();
		}

		for (i=0;i<=FBSDMRLVEL.length-1;i++)
		{
			FBSDMRLVEL[i].TNFAGGMKXD.destroy();
		}

		for (i=0;i<=KBESPOUXUK.length-1;i++)
		{
			KBESPOUXUK[i].destroy();
		}

		for (i=0;i<=BRILHDFUSO.length-1;i++)
		{
			BRILHDFUSO[i].destroy();
		}*/


		//alert(CYHNPORXFJ[0].IRQGAFESIC);
		PWMIBRSDCJ.splice(0,1000);

		var tapete=CYHNPORXFJ[0].IRQGAFESIC;
		if (JHJEWHFWNL==true)
		{
			tapete=tapete.replace('.jpg','_43.jpg');
		}
		PWMIBRSDCJ.push(new AWXPNWRCHC(CYHNPORXFJ[0].WWKVHIMWYD,
			CYHNPORXFJ[0].BONQVNOXDP,
			CYHNPORXFJ[0].QHHQPXWFNG,
			CYHNPORXFJ[0].EJOYNSESRD,
			tapete,
			CYHNPORXFJ[0].FFRVOEAXTF,
			CYHNPORXFJ[0].BDYYDTFQAO,
			CYHNPORXFJ[0].UHYGLMAUNK,
			CYHNPORXFJ[0].DNQIYVAFPR,
			CYHNPORXFJ[0].XCXKVEEIOO,
			CYHNPORXFJ[0].BUJELVTIKU
			));
			
		if ( CYHNPORXFJ[0].XCXKVEEIOO!="" )
		{
			//console.log("Debe Salir "+CYHNPORXFJ[0].DNQIYVAFPR)
			VSXSYEUABW(CYHNPORXFJ[0].XCXKVEEIOO,CYHNPORXFJ[0].DNQIYVAFPR)			
		}	
			
		LEQRGVLYLX=PWMIBRSDCJ[0].IRQGAFESIC;
	
		
		
		DCIKAAMXTU=new Phaser.Loader(YMHIHSNADE);
		DCIKAAMXTU.crossOrigin ="Anonymous"
		DCIKAAMXTU.image('LEQRGVLYLX', PWMIBRSDCJ[0].IRQGAFESIC);
		DCIKAAMXTU.onFileComplete.add( function() { BHAACHYLAS();  }  );
		DCIKAAMXTU.start();
		
		CBGXLQKDBG=new Phaser.Loader(YMHIHSNADE);
		CBGXLQKDBG.crossOrigin ="Anonymous"
		//CBGXLQKDBG.removeFile('image', 'ReversoRemoto')
		CBGXLQKDBG.image('ReversoRemoto', PWMIBRSDCJ[0].EJOYNSESRD,true);
		// alert(PWMIBRSDCJ[0].EJOYNSESRD);
		CBGXLQKDBG.onFileComplete.add( function() { GXFPVAOHBL();  }  );
		CBGXLQKDBG.start();
		
		if (PWMIBRSDCJ[0].BUJELVTIKU!=null && ISVLSNLHWR<=2 && XPBCVAGCDQ.length!=4 && EHUHWTYXOS==false )
		{
			NoticiaRemoto=PWMIBRSDCJ[0].BUJELVTIKU
			ETJWOWNABD=new Phaser.Loader(YMHIHSNADE);
			ETJWOWNABD.crossOrigin ="Anonymous"
			ETJWOWNABD.image('NoticiaRemoto', PWMIBRSDCJ[0].BUJELVTIKU);
			ETJWOWNABD.onFileComplete.add( function() { OJPKPPKDJU();  }  );
			ETJWOWNABD.start();		
		}
		ISVLSNLHWR++;
		if (ISVLSNLHWR>10)
		{
			ISVLSNLHWR=0;
		}
	
}



GDRQVXOCBL=function(JJHEHUIEGO,NombreDesconectado,posicionJugador)
{
	var LQPUBPQTJA;
	var i;
	var u;
	var NPYBJSHIFL;
	var STLEOJDWSU;
	
	//return true;
	
	log(true,"Desconecta el jugador ");
	log(true,"JUGADOR QUE DESCONECTA "+JJHEHUIEGO);
	
	//console.log("SSUNXNEEHN que desconecta "+JJHEHUIEGO);
	for (var i=0;i<=XPBCVAGCDQ.length-1;i++)
	{
		//console.log("Desconectando... "+XPBCVAGCDQ[i].AURESXCGMK+" "+XPBCVAGCDQ[i].WWKVHIMWYD);
		if (XPBCVAGCDQ[i].AURESXCGMK==JJHEHUIEGO)
		{
			XPBCVAGCDQ[i].XJARYUVBCB=true;
			KYDWXPGHVY.push( new UVYJLLYCYD ( (i+1),JJHEHUIEGO ));
			//ArrayJugadoresDesconectadosID.push(JJHEHUIEGO);
		}			
		
	}
	IOJCRKJSRL();
	
		//No se si sobra
	if (MYQBNBVHKU==false && TFSXFTYVGQ==ESKTEXAVHU) //1.0.6
	{	
		var GXNRNMAAKW=function( DFBVDPETGO,AURESXCGMK,idPartida,
			OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
			 this.DFBVDPETGO=DFBVDPETGO
			 this.AURESXCGMK=AURESXCGMK
			 this.idPartida=idPartida
								 
			 this.OYJAHGADFQ=OYJAHGADFQ
			 this.OJPXTRQDKS=OJPXTRQDKS
			 this.LYHKNIMVEB=LYHKNIMVEB
			 this.RHOLNWBOXR=RHOLNWBOXR
			 
			 this.EBAPPJFYSW=new Date(Date.now());
		 }
		var QPHHGPRJAI=[];
		QPHHGPRJAI.splice(0,1000);

			
		var OYJAHGADFQ=Math.random()*100000;
		var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,JJHEHUIEGO,idPartida,
			OYJAHGADFQ,JJHEHUIEGO,DFBVDPETGO,'BKEMJDLQQM');
		NBEJWDVLLV.push(KCPHFPSPLQ);
		QPHHGPRJAI.push(KCPHFPSPLQ);


		socket.emit('BKEMJDLQQM',QPHHGPRJAI[0],
		 function(XQLEOGMJYG)
		 {			 
			EXBCVLOIYJ(XQLEOGMJYG,'BKEMJDLQQM');
		 }
		);						
		QPHHGPRJAI.splice(0,1000);	
	}
	

	
	
	//console.log("MADRE MIA: "+TFSXFTYVGQ)
	for(i=0;i<=KYDWXPGHVY.length-1;i++)
	{		
		//console.log("-- JUGADORES DESCONECTADOS "+KYDWXPGHVY[i].SSUNXNEEHN);
	}
	

		//1.0.4
		if (EGPDVIEJEL==true && MYQBNBVHKU==false)//1.0.6
		{
			if (TFSXFTYVGQ==ESKTEXAVHU && JVQXQGYDHH==0 && CNCCBHQJKL==0 && EVAILWGGKX==false)
			{
				if (socket!=null)
				{
					var GXNRNMAAKW=function( QuienSoy,
						OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
						 this.QuienSoy=TFSXFTYVGQ
						 
															 
						 this.OYJAHGADFQ=OYJAHGADFQ
						 this.OJPXTRQDKS=OJPXTRQDKS
						 this.LYHKNIMVEB=LYHKNIMVEB
						 this.RHOLNWBOXR=RHOLNWBOXR
						 
						 this.EBAPPJFYSW=new Date(Date.now());
					 }


					 var QPHHGPRJAI=[];
					QPHHGPRJAI.splice(0,1000);

						
					var OYJAHGADFQ=Math.random()*100000;
					var KCPHFPSPLQ=new GXNRNMAAKW(TFSXFTYVGQ,
						OYJAHGADFQ,socket.id,DFBVDPETGO,'JHWIEIWIIW');
					NBEJWDVLLV.push(KCPHFPSPLQ);
					QPHHGPRJAI.push(KCPHFPSPLQ);

					
					//console.log("Envio JHWIEIWIIW desde desconectados");
					socket.emit('JHWIEIWIIW',QPHHGPRJAI[0],
					 function(XQLEOGMJYG)
					 {			 
						EXBCVLOIYJ(XQLEOGMJYG,'JHWIEIWIIW');
					 }
					);	
					QPHHGPRJAI.splice(0,1000);		
				}
			}	
		}
		

	
	
	
	

	

	
	for (var i=0;i<=XPBCVAGCDQ.length-1;i++)
	{
		if (XPBCVAGCDQ[i].AURESXCGMK==JJHEHUIEGO)
		{
			NPYBJSHIFL=i;			
		}			
		
	}
	
	if (NPYBJSHIFL==0)
	{
		UWROMBGGSY.text="Ordenador 1";
		XPBCVAGCDQ[NPYBJSHIFL].WWKVHIMWYD="Ordenador 1"
		//IDKJKASOTQ.loadTexture('Maquina', 0);
		QYBDUBOCBT.loadTexture('Maquina', 0);
		QYBDUBOCBT.width=PJRPWGXEYM;
		QYBDUBOCBT.height=PJRPWGXEYM;
		
	}
	
	if (NPYBJSHIFL==1)
	{
		HUPALFWPFI.text="Ordenador 2";
		XPBCVAGCDQ[NPYBJSHIFL].WWKVHIMWYD="Ordenador 2"
		BDQHBTUNWW.loadTexture('Maquina', 0);
		BDQHBTUNWW.width=PJRPWGXEYM;
		BDQHBTUNWW.height=PJRPWGXEYM;
	}	
	if (NPYBJSHIFL==2)
	{
		BXYCJYDVRT.text="Ordenador 3";
		XPBCVAGCDQ[NPYBJSHIFL].WWKVHIMWYD="Ordenador 3"
		PRWBHVTUSC.loadTexture('Maquina', 0);
		PRWBHVTUSC.width=PJRPWGXEYM;
		PRWBHVTUSC.height=PJRPWGXEYM;
	}
	if (NPYBJSHIFL==3)
	{
		IRAIEARIWA.text="Ordenador 4";
		XPBCVAGCDQ[NPYBJSHIFL].WWKVHIMWYD="Ordenador 4"
		BMWINQGWDD.loadTexture('Maquina', 0);
		BMWINQGWDD.width=PJRPWGXEYM;
		BMWINQGWDD.height=PJRPWGXEYM;
	}	
	
	/* recuperar if (KYDWXPGHVY.length==0)
	{
		MostrarElegirPareja(false);
	}*/
	
	VWYRRWMSJI('XJARYUVBCB',NPYBJSHIFL);

	
	//NNSHEUERGY();
	/*if (TFSXFTYVGQ==ESKTEXAVHU && JVQXQGYDHH==0 && CNCCBHQJKL==0 && EVAILWGGKX==false && AGKVNAGGLB.length==0 && VDKOVQXHON.length==0 && KNVKGHHTYC.length==0 && CBCNHFGWLU.length==0 && XPBCVAGCDQ.length>=4)
	{	
		for (i=0;i<=KYDWXPGHVY.length-1;i++)
		{
			if (KYDWXPGHVY[i].AURESXCGMK==XPBCVAGCDQ[3].AURESXCGMK)
			{
				RespuestaPareja(2);
			}
		}
	}*/
	
	/*PUBDSNTIUS.add(5000, function(){
		PUBDSNTIUS.stop();
		IOJCRKJSRL();	
		//console.log("El controlaco");
	}
	);	
	PUBDSNTIUS.start();*/
	
	//1.0.6  && ESKTEXAVHU==TFSXFTYVGQ
	if (AGKVNAGGLB.length==0 && VDKOVQXHON.length==0 && KNVKGHHTYC.length==0 && CBCNHFGWLU.length==0 && XPBCVAGCDQ.length>=4 && ESKTEXAVHU==TFSXFTYVGQ)
	{
		//console.log("GAÑAN");
		KPQSPDMKJE(DVNRTQIWGL);
		//console.log("Llamada 7");
		//IOJCRKJSRL();
	}
		
		
}


VWYRRWMSJI=function(HOGPTRLBYH,NPYBJSHIFL)
{
	//return true;
	//	var HOGPTRLBYH= 'XJARYUVBCB';
	var STLEOJDWSU;
	var GCTYDSCWXE;
	var YSMHGCUJFD;
	
	STLEOJDWSU= HHOPUSIABJ(NPYBJSHIFL+1);
	
	if (STLEOJDWSU=="D")
	{

			GCTYDSCWXE=YMHIHSNADE.world.centerX; //(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*6)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+(SXSHBRJFIR*1.5);
			YSMHGCUJFD=YMHIHSNADE.world.height-(SXSHBRJFIR*2);
			



	}	
	if (STLEOJDWSU=="U")
	{
	
						
			GCTYDSCWXE=YMHIHSNADE.world.centerX; //(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*6)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+(SXSHBRJFIR*1.5);
			YSMHGCUJFD=(AltoCarta)*1.5;	

		

	}
	if (STLEOJDWSU=="L")
	{
	
			GCTYDSCWXE=(COIVBWRMCC*2.5);
			//YSMHGCUJFD=YMHIHSNADE.world.height/2-COIVBWRMCC;
			YSMHGCUJFD=YMHIHSNADE.world.centerY;
			
	
		
	}
	if (STLEOJDWSU=="R")
	{
		
	
			GCTYDSCWXE=YMHIHSNADE.world.width-(COIVBWRMCC*2.5);
			//YSMHGCUJFD=YMHIHSNADE.world.height/2-COIVBWRMCC;	
			YSMHGCUJFD=YMHIHSNADE.world.centerY;
			
	
	}	
	
	
	
	if(navigator.vibrate) {
		window.navigator.vibrate(300);
	}
		
	log(false,"NPYBJSHIFL FTBVKLREAE: "+GCTYDSCWXE);
		
		
		
	//var bmd = YMHIHSNADE.add.bitmapData(YMHIHSNADE.world.width,YMHIHSNADE.world.height);

	// draw to the canvas context like normal
	/*bmd.ctx.beginPath();
	bmd.ctx.rect(0,0,YMHIHSNADE.world.width,YMHIHSNADE.world.height);
	bmd.ctx.fillStyle = '#000000';
	bmd.ctx.fill();*/

	// use the bitmap data as the texture for the sprite
	var WTCIGMLJUY = YMHIHSNADE.add.sprite(0, 0, bmd);
	WTCIGMLJUY.alpha=0.7;


	var FTBVKLREAE=YMHIHSNADE.add.sprite(GCTYDSCWXE,YSMHGCUJFD, HOGPTRLBYH);
	FTBVKLREAE.anchor.setTo(0.5, 0.5);


		
		var TTCLPDJAMD = YMHIHSNADE.add.tween(WTCIGMLJUY).to( { alpha: 0.7 }, 1000, KYFMRVNHIQ, true);
		TTCLPDJAMD.onComplete.add(  function(){
				TTCLPDJAMD = YMHIHSNADE.add.tween(WTCIGMLJUY).to( { alpha: 0 }, 500, KYFMRVNHIQ, true,1000,0);
			}
		);
		
		
		var NKJEHKJJJK = YMHIHSNADE.add.tween(FTBVKLREAE).to( { alpha: 1 }, 1000, KYFMRVNHIQ, true);
		NKJEHKJJJK.onComplete.add(  function(){
				NKJEHKJJJK = YMHIHSNADE.add.tween(FTBVKLREAE).to( { alpha: 0 }, 500, KYFMRVNHIQ, true,1000,0);
			}
		);
}

BCVWETKAKG=function(JugadorQueReconecta,NombreDesconectado,posicionJugador,NuevoID)
{
	var LQPUBPQTJA;
	var i;
	var u;
	var NPYBJSHIFL;
	var STLEOJDWSU;
	
	//return true;
	//PUBDSNTIUS.stop();
	
	log(true,"Desconecta el jugador ");
	log(true,"JUGADOR QUE RECONECTA "+JugadorQueReconecta);
	
	
	
	for (i=0;i<=KYDWXPGHVY.length-1;i++)
	{
		if (KYDWXPGHVY[i].AURESXCGMK==JugadorQueReconecta)
		{
			KYDWXPGHVY.splice(i,1);
			break;
		}			
		
	}
	
	
	var NumeroJugador=-1;
	for (i=0;i<=XPBCVAGCDQ.length-1;i++)
	{
		//console.log("Actualizando id: "+XPBCVAGCDQ[i].AURESXCGMK+ " "+ JugadorQueReconecta);
		if (XPBCVAGCDQ[i].AURESXCGMK==JugadorQueReconecta)
		{
			NPYBJSHIFL=i;	
			XPBCVAGCDQ[i].XJARYUVBCB=false;
			XPBCVAGCDQ[i].AURESXCGMK=NuevoID;
			//console.log("Mi nuevo id: "+NuevoID);
			break;
		}
	}
	
	

	for (i=0;i<=XPBCVAGCDQ.length-1;i++)
	{
		//console.log("PELICULA "+XPBCVAGCDQ[i].XJARYUVBCB);
	}
	
	JHKJKHHJCC();

	
	VWYRRWMSJI('Conectado',NPYBJSHIFL);
	IOJCRKJSRL();//1.0.6
	
}


function BHAACHYLAS() {

	var key;
	
	//key='LEQRGVLYLX';		
	
	
	//KVBNWXDTON.name = key;
	//KVBNWXDTON.loadTexture(key, 0);
	
	NHLRWTHYVG=true;
	//alert("TAPETE DESCARGADO "+NHLRWTHYVG);
	

}


function GXFPVAOHBL() {

	var key;
	
	VKYLOUGFGR=true;
	
	
	//QYBDUBOCBT.x=QYBDUBOCBT.x*(-1);
	//QYBDUBOCBT.y=QYBDUBOCBT.y*(-1);
	//BackDorso.name = key;
	//BackDorso.loadTexture(key, 0);
	
	//QYBDUBOCBT.width=PJRPWGXEYM;
	//QYBDUBOCBT.height=PJRPWGXEYM;
	
	//log(true,"Se recalcula");

}


function OJPKPPKDJU() {

	var key;
	
	if (PWMIBRSDCJ[0].BUJELVTIKU!=null)
	{
		//LogicalNoticia=true;
		BUJELVTIKU.visible=true;
		BUJELVTIKU.loadTexture('NoticiaRemoto', 0);
		var tw=YMHIHSNADE.add.tween(BUJELVTIKU).to( { y: 345 }, 1000, QUXNHVVDDK);
		tw.start();
		//console.log("DIBUJA");
	}

}

function SJXIUSUWHQ() {

	var key;
	
	key='imagen1';		
	
	if (QYBDUBOCBT.x<0)
	{
		QYBDUBOCBT.x=QYBDUBOCBT.x*(-1);
		QYBDUBOCBT.y=QYBDUBOCBT.y*(-1);
	}
	
	QYBDUBOCBT.name = key;
	try
	{
		QYBDUBOCBT.loadTexture(key, 0);
	}
	catch(e)
	{
		log(true,"No consigo cargar la imagen de sprite 1");
	}
	
	QYBDUBOCBT.width=PJRPWGXEYM;
	QYBDUBOCBT.height=PJRPWGXEYM;
	
	log(true,"Se recalcula");

}
function CWTXODSQLJ() {

	var key;
	
	key='imagen2';		
	
	if (BDQHBTUNWW.x<0)
	{
		BDQHBTUNWW.x=BDQHBTUNWW.x*(-1);
		BDQHBTUNWW.y=BDQHBTUNWW.y*(-1);
	}
	
	BDQHBTUNWW.name = key;
	
	try
	{
		BDQHBTUNWW.loadTexture(key, 0);
	}
	catch(e)
	{
		log(true,"No consigo cargar la imagen de sprite 2");
	}
	
	BDQHBTUNWW.width=PJRPWGXEYM;
	BDQHBTUNWW.height=PJRPWGXEYM;	
}

function EXQNVUFJLI() {

	var key;
	
	key='imagen3';		
	
	if (PRWBHVTUSC.x<0)
	{
		PRWBHVTUSC.x=PRWBHVTUSC.x*(-1);
		PRWBHVTUSC.y=PRWBHVTUSC.y*(-1);
	}
	
	PRWBHVTUSC.name = key;
	try
	{
		PRWBHVTUSC.loadTexture(key, 0);
	}
	catch(e)
	{
		log(true,"No consigo cargar la imagen de sprite 3");
	}
	
	PRWBHVTUSC.width=PJRPWGXEYM;
	PRWBHVTUSC.height=PJRPWGXEYM;
}

function DJAOLUHAHL() {

	var key;
	
	key='imagen4';		

	if (BMWINQGWDD.x<0)
	{	
		BMWINQGWDD.x=BMWINQGWDD.x*(-1);
		BMWINQGWDD.y=BMWINQGWDD.y*(-1);
	}
	
	BMWINQGWDD.name = key;
	try
	{
		BMWINQGWDD.loadTexture(key, 0);
	}
	catch(e)
	{
		log(true,"No consigo cargar la imagen de sprite 4");
	}
	
	BMWINQGWDD.width=PJRPWGXEYM;
	BMWINQGWDD.height=PJRPWGXEYM;	
}



// Socket connected
AYAOSXTCBR  = function() {
	JKCANKPQBB=0;
	//console.log("CONECTADO");
 // log(false,'Conectado al servidor:')
  //console.log(socket.id);
  
  	if (socket.id!=undefined && ( UEHYPTREIH.visible==true || LNJDKEVPQE.visible==true  ))
	{
		socket.emit('JKHWJKHIWF');
	}
	
  	if (socket.id!=undefined && UEHYPTREIH.visible==false ) //Solo se envia la peticion si no estoy en la pantalla principal
	//Ya que si no aparece la pantalla de login al principio
	{
		if (MYQBNBVHKU==false)
		{
			socket.emit('PIXQSCGEJH', DFBVDPETGO,socket.id, false,SFKLFIJOIO,ObjetoG) ;
			socket.emit('SNEESSIXBK', SFKLFIJOIO);
		}
	}
	else
	{
		if (socket.id!=undefined)
		{
			//alert("ko");		
			//console.log("Pide publi");
			//socket.emit('EOMOFODTKB', socket.id,SFKLFIJOIO) ;
			
			if (PWMIBRSDCJ.length>0)
			{
				var JugadorPubli=PWMIBRSDCJ[0].WWKVHIMWYD;
				var JugadorFullPubli=PWMIBRSDCJ[0].FFRVOEAXTF + '-'+ PWMIBRSDCJ[0].BDYYDTFQAO;
				socket.emit('EOMOFODTKB', socket.id,SFKLFIJOIO,ObjetoG) ;
			}
			else
			{
				socket.emit('EOMOFODTKB', socket.id,SFKLFIJOIO,ObjetoG) ;
			}
			
			
			socket.emit('SNEESSIXBK', SFKLFIJOIO);
		}
	}

  //socket.emit('adduser', prompt("What's your name?"));
  
};

RWOCHOBYJY  = function() {
  YUXWLFWVRD();
};

AAQWTFMQMA = function() {
 log(false,'carta movida')
 //log(false,this.hola)
//Level.prototype.Dibuja();
//Dibuja();
 
 };
 
 DQNJCOABIH = function() {
 log(false,'ya te la env�o')
 //log(false,this.hola)
//Level.prototype.Dibuja();

 
 };

 NUWTGXUUTS=function() {
	log(true,"Le llega");
	NSNUIQUYIU.visible=false;
	JSJSHSHSSE.visible=false;
	MYQBNBVHKU=true;
	//alert("COMENZADA");
	//console.log("Llamada 9");
	IOJCRKJSRL();
	//console.log("Antes de prepararcaracteristicamano");
	JQSOOBSDDS();	
	//console.log("Después de prepararcaracteristicamano");
	
 };
 
 KSKJDEIIEI=function()
 {
	
	JSJSHSHSSE.visible=false;
	JBXCGDTWYW.visible=true;
    JBXCGDTWYW.alpha = 0;

    //  Create our tween. This will fade the sprite to alpha 1 over the duration of 2 seconds
    var tween = YMHIHSNADE.add.tween(JBXCGDTWYW).to( { alpha: 1 }, 1500, "Linear", true, 0, -1);

    //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
    //  The 3000 tells it to wait for 3 seconds before starting the fade back.
    tween.yoyo(true, 3000);
	

 }
 
  MensajeEsperandoListos=function()
 {
	
	JSJSHSHSSE.visible=false;
	NSNUIQUYIU.visible=true;
    NSNUIQUYIU.alpha = 0;

    //  Create our tween. This will fade the sprite to alpha 1 over the duration of 2 seconds
    var tween = YMHIHSNADE.add.tween(NSNUIQUYIU).to( { alpha: 1 }, 1500, "Linear", true, 0, -1);

    //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
    //  The 3000 tells it to wait for 3 seconds before starting the fade back.
    tween.yoyo(true, 3000);
	

 }
 
  NHKJAHUEIE=function()
 {
	 var i;
	 var vivo=0;
	 
	for (i=0;i<=XPBCVAGCDQ.length-1;i++)
	{
		if (XPBCVAGCDQ[i].XJARYUVBCB==false)
		{
			vivo=i;
		}
	}
	 
	JBXCGDTWYW.visible=false;
	if (XPBCVAGCDQ.length>0)
	{
		JSJSHSHSSE.text=XPBCVAGCDQ[vivo].WWKVHIMWYD+" está eligiendo pareja";
	}
	else
	{
		JSJSHSHSSE.text="Se está eligiendo pareja";
	}
	
	JSJSHSHSSE.visible=true;
    JSJSHSHSSE.alpha = 0;

	
    //  Create our tween. This will fade the sprite to alpha 1 over the duration of 2 seconds
    var tween = YMHIHSNADE.add.tween(JSJSHSHSSE).to( { alpha: 1 }, 1500, "Linear", true, 0, -1);

    //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
    //  The 3000 tells it to wait for 3 seconds before starting the fade back.
    tween.yoyo(true, 3000);
	

 }
 
 RUVPPDCRDY=function(OrdenConectado)
 {
	 var STLEOJDWSU;
	 
 }
 
 RWANTPBSQE=function(MMIFVRWSYK)
 {
	 
	var QuienDeshabilito;
	var STLEOJDWSU;
	var i;
	var VEFCIYHBGC=false;
	var SSUNXNEEHN;
	var UYEUYIYECB;
	
	SSUNXNEEHN=MMIFVRWSYK;
	
	STLEOJDWSU=HHOPUSIABJ(SSUNXNEEHN);
	log(true,"ALGO CON LA STLEOJDWSU "+STLEOJDWSU);
	for (i=0;i<=QLNEIQGEDF.length-1;i++)
	{
		if (QLNEIQGEDF[i]==STLEOJDWSU)
		{
			VEFCIYHBGC=true;
			break;
		}
	}
	
	if (VEFCIYHBGC==false) //Hay que deshabilitarlo
	{
		if(STLEOJDWSU!="D")
		{
			QLNEIQGEDF.push(STLEOJDWSU);
		
			
			if (MMIFVRWSYK==1)
			 {
				QYBDUBOCBT.tint=Phaser.Color.getColor(110,110,110);
			 }
			 if (MMIFVRWSYK==2)
			 {
				 BDQHBTUNWW.tint=Phaser.Color.getColor(110,110,110);
			 }	
			 if (MMIFVRWSYK==3)
			 {
				 PRWBHVTUSC.tint=Phaser.Color.getColor(110,110,110);
			 }	 
			 if (MMIFVRWSYK==4)
			 {
				 BMWINQGWDD.tint=Phaser.Color.getColor(110,110,110);
			 }	 
			 
		 }
	}
	else
	{
		QLNEIQGEDF.splice(i,1);
		if (MMIFVRWSYK==1)
		 {
			QYBDUBOCBT.tint=Phaser.Color.getColor(255,255,255);
		 }
		 if (MMIFVRWSYK==2)
		 {
			 BDQHBTUNWW.tint=Phaser.Color.getColor(255,255,255);
		 }	
		 if (MMIFVRWSYK==3)
		 {
			 PRWBHVTUSC.tint=Phaser.Color.getColor(255,255,255);
		 }	 
		 if (MMIFVRWSYK==4)
		 {
			 BMWINQGWDD.tint=Phaser.Color.getColor(255,255,255);
		 }	 
	}
	
	if (STLEOJDWSU=="D")
	{
		
		UYEUYIYECB=IEUIUCYUCC("Pulse sobre la foto de los jugadores\npara activar o desactivar el chat con ellos",40);
	}
	else
	{
		if (VEFCIYHBGC==false)
		{
			UYEUYIYECB=IEUIUCYUCC("Chat deshabilitado con "+XPBCVAGCDQ[MMIFVRWSYK-1].WWKVHIMWYD,40);
		}
		else
		{
			UYEUYIYECB=IEUIUCYUCC("Chat habilitado con "+XPBCVAGCDQ[MMIFVRWSYK-1].WWKVHIMWYD,40);
		}
		

	}
	

	var tw = YMHIHSNADE.add.tween(UYEUYIYECB).to( { alpha: 0 }, 1000, KYFMRVNHIQ, true,1000);
	
	 
 }
 NSIRYROROW = function(conectados,room,HGIFKEMXAD) {
	
	 DFBVDPETGO=room;
	 log(false,'conectados: '+conectados)
	 log(false,'DFBVDPETGO: '+DFBVDPETGO)

	var LongitudArray = HGIFKEMXAD.length-1;

	var i;
	var u;
	var VEFCIYHBGC;
	var QHHQPXWFNG;
	//var textJugador;
	var UBWRXKMTQN;
	var x1;
	var y1;
	var x1text;
	var y1text;
	var JKAHSQUUIA=0;
	var imagen1="";
	var imagen2="";
	var imagen3="";
	var imagen4="";

	var tapete;
	var LEQRGVLYLX="";
	var DCIKAAMXTU="";
	var CBGXLQKDBG="";
	var DorsoRemoto="";

	//Onjetos Loader;
	var a;
	var b;
	var c;
	var d;

	CUUKQAGFEB.x=QETACVSHAR;
	//XPBCVAGCDQ.splice(0,1000);

	EFKTQSXAMA.visible=false;
	LNJDKEVPQE.visible=false;
	
	//if (JBXCGDTWYW==undefined)
	//{
	log(true,"Longitud de conectados sala aleatoria "+LongitudArray)

	
	
	YHNMANDWLT();
		
	log(true,"Se borra "+LongitudArray);
	for (i=0;i<=LongitudArray;i++){
		//console.log("SOCKETS: ");
		//console.log("SOCKETS ID: "+socket.id);
		//console.log("SOCKETS JUGADOR: "+HGIFKEMXAD[i].AURESXCGMK);
		if (HGIFKEMXAD[i].Sala==room)
		{
			
			VEFCIYHBGC=false;
			for (u=0;u<=XPBCVAGCDQ.length-1;u++)
			{
				if (HGIFKEMXAD[i].AURESXCGMK==XPBCVAGCDQ[u].AURESXCGMK)
				{
					VEFCIYHBGC=true;
				}			
			}	
			
			if (VEFCIYHBGC==false)
			{
				
				tapete=HGIFKEMXAD[i].IRQGAFESIC;
				if (JHJEWHFWNL==true)
				{
					tapete=tapete.replace('.jpg','_43.jpg');
				}
		
				if (HGIFKEMXAD[i].QHHQPXWFNG==null)
				{					
					QHHQPXWFNG=Maquina+"/assets/images/desconocido.png";
				}
				else
				{
					QHHQPXWFNG=HGIFKEMXAD[i].QHHQPXWFNG
				}
				XPBCVAGCDQ.push(new ObjetoSala(HGIFKEMXAD[i].AURESXCGMK,HGIFKEMXAD[i].Sala,false,HGIFKEMXAD[i].WWKVHIMWYD,
					HGIFKEMXAD[i].BONQVNOXDP,QHHQPXWFNG,null,HGIFKEMXAD[i].XJARYUVBCB,HGIFKEMXAD[i].EJOYNSESRD,tapete, HGIFKEMXAD[i].Amigo , HGIFKEMXAD[i].OBTBPOULAV, (i+1), "",HGIFKEMXAD[i].WWKVHIMWYD   ))
					
				log(true,"Se está recibiendo "+HGIFKEMXAD[i].WWKVHIMWYD+" "+HGIFKEMXAD[i].XJARYUVBCB	);
				log(true,"Se ha guardado ");
				log(true,"Se ha guardado "+XPBCVAGCDQ[XPBCVAGCDQ.length-1].XJARYUVBCB);
			}
		}			
	}

	if (LongitudArray<=2)
	{
		KSKJDEIIEI();
	}
	else
	{
		NHKJAHUEIE();
	}
	
	//console.log("Llamada 10");
	IOJCRKJSRL();

	//Saco el bucle porque si se conecta el segundo, no sabe quien es
	 for (var i=0;i<=XPBCVAGCDQ.length-1;i++){
		//console.log("RECIBIENDO JUGADORES: "+XPBCVAGCDQ[i].AURESXCGMK+  "    "+socket.id)
		if (XPBCVAGCDQ[i].AURESXCGMK==socket.id)
		{
			
			
			TFSXFTYVGQ=i+1;
			//console.log("CHANGE1: "+TFSXFTYVGQ);
			
			XIQDONAJMM.visible=false;
			KVBNWXDTON.visible=true;
			
			//DMLCWWNWRP();
			
			
			log(true,XPBCVAGCDQ[i].IRQGAFESIC);
			log(true,XPBCVAGCDQ[i].EJOYNSESRD);
			
			inputField.visible=true;

			
		}
	}


		
	JHKJKHHJCC();
	


	if (XPBCVAGCDQ.length==4){
		HJKHDKJHWU.visible=false;
		var MMNORPWJDC;
		for (i=0;i<=XPBCVAGCDQ.length-1;i++)
		{
			//console.log("Antes "+XPBCVAGCDQ[i].WWKVHIMWYD+" Orden: "+ XPBCVAGCDQ[i].OrdenEnSala+ " "+XPBCVAGCDQ[i].AURESXCGMK + " "+socket.id)
			if (XPBCVAGCDQ[i].XJARYUVBCB==false)
			{
				MMNORPWJDC=XPBCVAGCDQ[i].AURESXCGMK;
			}
		}

		

		 if (MMNORPWJDC==socket.id){ //Se crea la baraja
			
			DVNRTQIWGL=1;
			MostrarElegirPareja(true);

		 }
		
	 }
	 else
	 {
		 for (i=0;i<=XPBCVAGCDQ.length-1;i++)
		 {
			if (XPBCVAGCDQ[i].XJARYUVBCB==false)
			{
				MMNORPWJDC=XPBCVAGCDQ[i].AURESXCGMK;
			} 
		 }
		 
		 if (MMNORPWJDC==socket.id)
		 {			
			HJKHDKJHWU.visible=true;
		 }
		 else
		 {
			HJKHDKJHWU.visible=false;
		 }
		 
		 
	 }
 };
 
 
  JHKJKHHJCC=function(){
	 
	var i;
	var u;
	var VEFCIYHBGC;
	//var textJugador;
	var UBWRXKMTQN;
	var x1;
	var y1;
	var x1text;
	var y1text;
	var JKAHSQUUIA=0;
	var imagen1="";
	var imagen2="";
	var imagen3="";
	var imagen4="";

	var LEQRGVLYLX="";
	var DCIKAAMXTU="";
	var CBGXLQKDBG="";
	var DorsoRemoto="";

	//Onjetos Loader;
	var a;
	var b;
	var c;
	var d;

	for (i=0;i<=XPBCVAGCDQ.length-1;i++){
		//console.log("i   "+i);
		JKAHSQUUIA=i+1;
		//if (IGPARKSECH(JKAHSQUUIA)==true)
		if (1==1)
		{
	 		log(true,"SSUNXNEEHN Temporal "+JKAHSQUUIA);
			//console.log("1");
		
			UBWRXKMTQN=HHOPUSIABJ(JKAHSQUUIA);
			//console.log("1.1");
			log(true,"Ha devuelto "+UBWRXKMTQN);
			SUMEMLHUFX("D");
			//console.log("1.2");
			//console.log(UBWRXKMTQN);
			if (UBWRXKMTQN=="D")
			{
				//console.log("1.3");
				x1=WIEVLYANFM("D_5",0)+110;
				//console.log("1.4");
				y1=FIGQBSJQGA("L_0",0)+20;
				//XPBCVAGCDQ[i].WWKVHIMWYD="AWCCMSCOPO largo en la parte de abajo"
				//console.log("1.5");
				var IQVAAXFOXW = { font: "bold 18px Arial", fill: "#fff", align: "left", boundsAlignH: "left", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
				//console.log("1.6");
				x1text=x1+85;
				y1text=y1;

			}
			if (UBWRXKMTQN=="R")
			{
				//x1=WIEVLYANFM("R_0",0)-30;
				if (JHJEWHFWNL==false)
				{
					x1=WIEVLYANFM("D_5",0)+245;
				}
				else
				{
					x1=WIEVLYANFM("R_5",0)-20;
				}
			//	x1=500;
				//if (JHJEWHFWNL==false)
				//{
				y1=FIGQBSJQGA("R_5",0)-147
				//}
				//else
				//{
				//	y1=FIGQBSJQGA("R_5",0)
				//}
				//XPBCVAGCDQ[i].WWKVHIMWYD="Pepito Grillo es gay ya te digo";
				//XPBCVAGCDQ[i].WWKVHIMWYD="Ivan";
				var IQVAAXFOXW = { font: "bold 18px Arial", fill: "#fff", align: "right", boundsAlignH: "right", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
				x1text=x1-200;
				//x1text=100;
				y1text=y1;				
				
			}
			if (UBWRXKMTQN=="U")
			{
				x1=WIEVLYANFM("D_0",0)+25;
				//x1=WIEVLYANFM("D_5",0)+90;
				if (JHJEWHFWNL==false)
				{
					y1=FIGQBSJQGA("R_5",0)-147;
				}
				else
				{
					y1=FIGQBSJQGA("U_0",0)-95;
				}
				
				//XPBCVAGCDQ[i].WWKVHIMWYD="y algo mariposón. Tb lo se"
				var IQVAAXFOXW = { font: "bold 18px Arial", fill: "#fff", align: "right", boundsAlignH: "right", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
				x1text=x1-200;
				y1text=y1;				
			}
			  
			if (UBWRXKMTQN=="L")
			{
				//console.log("1.11");
				x1=WIEVLYANFM("L_0",0);
				//console.log("1.12");
				y1=FIGQBSJQGA("L_0",0)+20;
				//XPBCVAGCDQ[i].WWKVHIMWYD="Otro AWCCMSCOPO largo en la parte izquierda"
				//console.log("1.13");
				var IQVAAXFOXW = { font: "bold 18px Arial", fill: "#fff", align: "left", boundsAlignH: "left", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 160};	
				//console.log("1.14");
				x1text=x1+85;
				y1text=y1;				
			}
			//console.log("i "+i );
				//console.log("Dice que no existe "+XPBCVAGCDQ[i].XJARYUVBCB);
				if (i==0){
					//UWROMBGGSY = YMHIHSNADE.add.text(x1+60, y1+15, XPBCVAGCDQ[i].WWKVHIMWYD,style);
					//console.log("2");
					//console.log("DKIFYHXLLC "+QYBDUBOCBT);
					if (QYBDUBOCBT!=undefined)
					{
						QYBDUBOCBT.destroy();
						UWROMBGGSY.destroy();
					}	
					QYBDUBOCBT= YMHIHSNADE.add.sprite(x1*(-1),y1*(-1),'1');
					QYBDUBOCBT.inputEnabled = true;
					//console.log("3");
					QYBDUBOCBT.events.onInputDown.add( function(){ RWANTPBSQE(1); } );
					
					UWROMBGGSY=YMHIHSNADE.add.text(0, 0, "",IQVAAXFOXW);
					UWROMBGGSY.setTextBounds(x1text, y1text, 190, 90);
					
					//UWROMBGGSY.x=(x1text);
					//UWROMBGGSY.y=(y1text);
					//alert("jj");
					//UWROMBGGSY.style=IQVAAXFOXW;
					
					UWROMBGGSY.text="";
					UWROMBGGSY.text=XPBCVAGCDQ[i].NombreOri;
					
					
					
					imagen1=XPBCVAGCDQ[i].QHHQPXWFNG
					if (IDKJKASOTQ==undefined)
					{
						IDKJKASOTQ=new Phaser.Loader(YMHIHSNADE);
					}
					
					if ( XPBCVAGCDQ[i].XJARYUVBCB==false)
					{
						IDKJKASOTQ.crossOrigin ="Anonymous"
						IDKJKASOTQ.image('imagen1', XPBCVAGCDQ[i].QHHQPXWFNG,true);
						//console.log("QHHQPXWFNG "+XPBCVAGCDQ[i].QHHQPXWFNG);
						IDKJKASOTQ.onFileComplete.add( function() { SJXIUSUWHQ();  }  );
						IDKJKASOTQ.start();
					}
					else
					{
						UWROMBGGSY.text="";
						UWROMBGGSY.text="Ordenador 1";
						XPBCVAGCDQ[i].WWKVHIMWYD="Ordenador 1"
						var key='Maquina'					
						if (QYBDUBOCBT.x<0)
						{
							QYBDUBOCBT.x=QYBDUBOCBT.x*(-1);
							QYBDUBOCBT.y=QYBDUBOCBT.y*(-1);
						}
						QYBDUBOCBT.name = key;
						QYBDUBOCBT.loadTexture(key, 0);
						QYBDUBOCBT.width=PJRPWGXEYM;
						QYBDUBOCBT.height=PJRPWGXEYM;	
					}
					
				}
				if (i==1){
					//HUPALFWPFI = YMHIHSNADE.add.text(x1+60, y1+15, XPBCVAGCDQ[i].WWKVHIMWYD,style);
					if (BDQHBTUNWW!=undefined)
					{
						BDQHBTUNWW.destroy();
						HUPALFWPFI.destroy();
					}	
					BDQHBTUNWW= YMHIHSNADE.add.sprite(x1*(-1),y1*(-1),'1');
					BDQHBTUNWW.inputEnabled = true;
					BDQHBTUNWW.events.onInputDown.add( function(){ RWANTPBSQE(2); } );
					
					HUPALFWPFI=YMHIHSNADE.add.text(0, 0, "",IQVAAXFOXW);
					HUPALFWPFI.setTextBounds(x1text, y1text, 190, 90);
					
				//	HUPALFWPFI.x=(x1text);
				//	HUPALFWPFI.y=(y1text);
					//HUPALFWPFI.setTextBounds(100, 100, 200, 200);
					//HUPALFWPFI.style=IQVAAXFOXW;
					
					HUPALFWPFI.text="";
					HUPALFWPFI.text=XPBCVAGCDQ[i].NombreOri;
					//console.log("RPHWVBBGIM jugador 2: "+XPBCVAGCDQ[i].WWKVHIMWYD);
					
					imagen2=XPBCVAGCDQ[i].QHHQPXWFNG
					if (MMKMYKBXGH==undefined)
					{
						MMKMYKBXGH=new Phaser.Loader(YMHIHSNADE);
					}
					
					
					if ( XPBCVAGCDQ[i].XJARYUVBCB==false)
					{
						MMKMYKBXGH.crossOrigin ="Anonymous"
						//console.log("QHHQPXWFNG "+XPBCVAGCDQ[i].QHHQPXWFNG);
						MMKMYKBXGH.image('imagen2', XPBCVAGCDQ[i].QHHQPXWFNG,true);
						MMKMYKBXGH.onFileComplete.add( function() { CWTXODSQLJ();  }  );
						MMKMYKBXGH.start();
					}
					else
					{
						HUPALFWPFI.text="";
						HUPALFWPFI.text="Ordenador 2";
						XPBCVAGCDQ[i].WWKVHIMWYD="Ordenador 2"
						var key='Maquina'					
						if (BDQHBTUNWW.x<0)
						{
							BDQHBTUNWW.x=BDQHBTUNWW.x*(-1);
							BDQHBTUNWW.y=BDQHBTUNWW.y*(-1);
						}
						BDQHBTUNWW.name = key;
						BDQHBTUNWW.loadTexture(key, 0);
						BDQHBTUNWW.width=PJRPWGXEYM;
						BDQHBTUNWW.height=PJRPWGXEYM;	
					}
				}
				if (i==2){
					//BXYCJYDVRT = YMHIHSNADE.add.text(x1+60, y1+15, XPBCVAGCDQ[i].WWKVHIMWYD,style);
					if (PRWBHVTUSC!=undefined)
					{
						PRWBHVTUSC.destroy();
						BXYCJYDVRT.destroy();
					}
					PRWBHVTUSC= YMHIHSNADE.add.sprite(x1*(-1),y1*(-1),'1');
					PRWBHVTUSC.inputEnabled = true;
					PRWBHVTUSC.events.onInputDown.add(  function(){ RWANTPBSQE(3); } );
					
					
					BXYCJYDVRT=YMHIHSNADE.add.text(0, 0, "",IQVAAXFOXW);
					BXYCJYDVRT.setTextBounds(x1text, y1text, 190, 90);
					//BXYCJYDVRT.x=(x1text);
					//BXYCJYDVRT.y=(y1text);
					//BXYCJYDVRT.style=IQVAAXFOXW;
					BXYCJYDVRT.text="";
					BXYCJYDVRT.text=XPBCVAGCDQ[i].NombreOri;
					//console.log("RPHWVBBGIM jugador 3: "+XPBCVAGCDQ[i].WWKVHIMWYD);
					
					imagen3=XPBCVAGCDQ[i].QHHQPXWFNG
					imagen3=XPBCVAGCDQ[i].QHHQPXWFNG
					if (AQXDDTTNUH==undefined)
					{
						AQXDDTTNUH=new Phaser.Loader(YMHIHSNADE);
					}
					if ( XPBCVAGCDQ[i].XJARYUVBCB==false)
					{
						AQXDDTTNUH.crossOrigin ="Anonymous"
						//console.log("QHHQPXWFNG "+XPBCVAGCDQ[i].QHHQPXWFNG);
						AQXDDTTNUH.image('imagen3', XPBCVAGCDQ[i].QHHQPXWFNG,true);
						AQXDDTTNUH.onFileComplete.add( function() { EXQNVUFJLI();  }  );
						AQXDDTTNUH.start();
					}
					else
					{
						BXYCJYDVRT.text="";
						BXYCJYDVRT.text="Ordenador 3";
						XPBCVAGCDQ[i].WWKVHIMWYD="Ordenador 3"
						var key='Maquina'					
						if (PRWBHVTUSC.x<0)
						{
							PRWBHVTUSC.x=PRWBHVTUSC.x*(-1);
							PRWBHVTUSC.y=PRWBHVTUSC.y*(-1);
						}
						PRWBHVTUSC.name = key;
						PRWBHVTUSC.loadTexture(key, 0);
						PRWBHVTUSC.width=PJRPWGXEYM;
						PRWBHVTUSC.height=PJRPWGXEYM;	
					}
				}
				if (i==3){
					//IRAIEARIWA = YMHIHSNADE.add.text(x1+60, y1+15, XPBCVAGCDQ[i].WWKVHIMWYD,style);
					//console.log("1.31");
					if (BMWINQGWDD!=undefined)
					{
						BMWINQGWDD.destroy();
						IRAIEARIWA.destroy();
					}
					BMWINQGWDD= YMHIHSNADE.add.sprite(x1*(-1),y1*(-1),'1');
					//console.log("1.32");
					BMWINQGWDD.inputEnabled = true;
					//console.log("1.33");
					BMWINQGWDD.events.onInputDown.add( function(){ RWANTPBSQE(4); } );
					//console.log("1.34");
					
					
					IRAIEARIWA=YMHIHSNADE.add.text(0, 0, "",IQVAAXFOXW);
					IRAIEARIWA.setTextBounds(x1text, y1text, 190, 90);
					//IRAIEARIWA.x=(x1text);
					//IRAIEARIWA.y=(y1text);
					//IRAIEARIWA.style=IQVAAXFOXW;
					IRAIEARIWA.text="";
					IRAIEARIWA.text=XPBCVAGCDQ[i].NombreOri;
					//console.log("RPHWVBBGIM jugador 4: "+XPBCVAGCDQ[i].WWKVHIMWYD);
					
					imagen4=XPBCVAGCDQ[i].QHHQPXWFNG
					imagen4=XPBCVAGCDQ[i].QHHQPXWFNG
					if (JNMGJTHVNF==undefined)
					{
						JNMGJTHVNF=new Phaser.Loader(YMHIHSNADE);
					}
					
					if ( XPBCVAGCDQ[i].XJARYUVBCB==false)
					{
						JNMGJTHVNF.crossOrigin ="Anonymous"
						//console.log("1.35");
						JNMGJTHVNF.image('imagen4', XPBCVAGCDQ[i].QHHQPXWFNG,true);
						//console.log("1.36");
						//console.log("QHHQPXWFNG "+XPBCVAGCDQ[i].QHHQPXWFNG);
						JNMGJTHVNF.onFileComplete.add( function() { DJAOLUHAHL();  }  );
						JNMGJTHVNF.start();
						//console.log("1.37");
					}
					else
					{
						IRAIEARIWA.text="";
						IRAIEARIWA.text="Ordenador 4";
						XPBCVAGCDQ[i].WWKVHIMWYD="Ordenador 4"
						var key='Maquina'					
						if (BMWINQGWDD.x<0)
						{
							BMWINQGWDD.x=BMWINQGWDD.x*(-1);
							BMWINQGWDD.y=BMWINQGWDD.y*(-1);
						}
						BMWINQGWDD.name = key;
						BMWINQGWDD.loadTexture(key, 0);
						BMWINQGWDD.width=PJRPWGXEYM;
						BMWINQGWDD.height=PJRPWGXEYM;	
					}	
				}			
		}	
	}	
		
 }
 
 
 
DRKFTTVQVC=function(){
	 
	var i;
	var u;
	var VEFCIYHBGC;
	//var textJugador;
	var UBWRXKMTQN;
	var x1;
	var y1;
	var x1text;
	var y1text;
	var JKAHSQUUIA=0;
	var imagen1="";
	var imagen2="";
	var imagen3="";
	var imagen4="";

	var LEQRGVLYLX="";
	var DCIKAAMXTU="";
	var CBGXLQKDBG="";
	var DorsoRemoto="";

	//Onjetos Loader;
	var a;
	var b;
	var c;
	var d;

	 
	for (i=0;i<=XPBCVAGCDQ.length-1;i++){
		
		JKAHSQUUIA=i+1;
		//if (IGPARKSECH(JKAHSQUUIA)==true)
		//{
	 		log(true,"SSUNXNEEHN Temporal "+JKAHSQUUIA);
		
					
				//console.log("Dice que no existe "+XPBCVAGCDQ[i].XJARYUVBCB);
				if (i==0){
				
					UWROMBGGSY.text=XPBCVAGCDQ[i].NombreOri;
					
					
					
					imagen1=XPBCVAGCDQ[i].QHHQPXWFNG
					IDKJKASOTQ=new Phaser.Loader(YMHIHSNADE);
					
					if ( XPBCVAGCDQ[i].XJARYUVBCB==false)
					{
						IDKJKASOTQ.crossOrigin ="Anonymous"
						IDKJKASOTQ.image('imagen1', XPBCVAGCDQ[i].QHHQPXWFNG);
						//console.log("QHHQPXWFNG "+XPBCVAGCDQ[i].QHHQPXWFNG);
						IDKJKASOTQ.onFileComplete.add( function() { SJXIUSUWHQ();  }  );
						IDKJKASOTQ.start();
					}
					else
					{
						UWROMBGGSY.text="Ordenador 1";
						XPBCVAGCDQ[i].WWKVHIMWYD="Ordenador 1"
						var key='Maquina'					
						QYBDUBOCBT.name = key;
						QYBDUBOCBT.loadTexture(key, 0);	
						QYBDUBOCBT.width=PJRPWGXEYM;
						QYBDUBOCBT.height=PJRPWGXEYM;							
					}
					
				}
				if (i==1){
					
					HUPALFWPFI.text=XPBCVAGCDQ[i].NombreOri;
					
					imagen2=XPBCVAGCDQ[i].QHHQPXWFNG
					MMKMYKBXGH=new Phaser.Loader(YMHIHSNADE);
					if ( XPBCVAGCDQ[i].XJARYUVBCB==false)
					{
						MMKMYKBXGH.crossOrigin ="Anonymous"
						MMKMYKBXGH.image('imagen2', XPBCVAGCDQ[i].QHHQPXWFNG);
						//console.log("QHHQPXWFNG "+XPBCVAGCDQ[i].QHHQPXWFNG);
						MMKMYKBXGH.onFileComplete.add( function() { CWTXODSQLJ();  }  );
						MMKMYKBXGH.start();
					}
					else
					{
						HUPALFWPFI.text="Ordenador 2";
						XPBCVAGCDQ[i].WWKVHIMWYD="Ordenador 2"
						var key='Maquina'					
						BDQHBTUNWW.name = key;
						BDQHBTUNWW.loadTexture(key, 0);
						BDQHBTUNWW.width=PJRPWGXEYM;
						BDQHBTUNWW.height=PJRPWGXEYM;							
					}
				}
				if (i==2){
					
					BXYCJYDVRT.text=XPBCVAGCDQ[i].NombreOri;
					
					imagen3=XPBCVAGCDQ[i].QHHQPXWFNG
					AQXDDTTNUH=new Phaser.Loader(YMHIHSNADE);
					if ( XPBCVAGCDQ[i].XJARYUVBCB==false)
					{
						AQXDDTTNUH.crossOrigin ="Anonymous"
						AQXDDTTNUH.image('imagen3', XPBCVAGCDQ[i].QHHQPXWFNG);
						//console.log("QHHQPXWFNG "+XPBCVAGCDQ[i].QHHQPXWFNG);
						AQXDDTTNUH.onFileComplete.add( function() { EXQNVUFJLI();  }  );
						AQXDDTTNUH.start();
					}
					else
					{
						BXYCJYDVRT.text="Ordenador 3";
						XPBCVAGCDQ[i].WWKVHIMWYD="Ordenador 3"
						var key='Maquina'					

						PRWBHVTUSC.name = key;
						PRWBHVTUSC.loadTexture(key, 0);
						PRWBHVTUSC.width=PJRPWGXEYM;
						PRWBHVTUSC.height=PJRPWGXEYM;							
					}
				}
				if (i==3){
					
					IRAIEARIWA.text=XPBCVAGCDQ[i].NombreOri;
					
					imagen4=XPBCVAGCDQ[i].QHHQPXWFNG
					JNMGJTHVNF=new Phaser.Loader(YMHIHSNADE);
					if ( XPBCVAGCDQ[i].XJARYUVBCB==false)
					{
						JNMGJTHVNF.crossOrigin ="Anonymous"
						JNMGJTHVNF.image('imagen4', XPBCVAGCDQ[i].QHHQPXWFNG);
						//console.log("QHHQPXWFNG "+XPBCVAGCDQ[i].QHHQPXWFNG);
						JNMGJTHVNF.onFileComplete.add( function() { DJAOLUHAHL();  }  );
						JNMGJTHVNF.start();
					}
					else
					{
						IRAIEARIWA.text="Ordenador 4";
						XPBCVAGCDQ[i].WWKVHIMWYD="Ordenador 4"
						var key='Maquina'					
						BMWINQGWDD.name = key;
						BMWINQGWDD.loadTexture(key, 0);
						BMWINQGWDD.width=PJRPWGXEYM;
						BMWINQGWDD.height=PJRPWGXEYM;							
					}	
				}			
		//}	
	}	
		
 } 
IOJCRKJSRL=function()
{
	var i;
	var u;
	var Vivo;
	
	XPBCVAGCDQ.sort(sort_by('OrdenEnSala', false, parseFloat));
	
	LRYVPILWKS();
	
	//console.log("Jugadores UHYCGYFWYJ: "+KYDWXPGHVY.length);
	
	var Vivo;
	/*for (i=0;i<=XPBCVAGCDQ.length-1;i++)
	{
		
		Vivo=true;
		for (u=0;u<=KYDWXPGHVY.length-1;u++)
		{
			//console.log("SSUNXNEEHN desc "+KYDWXPGHVY[u].SSUNXNEEHN);
			if ( (i+1)==KYDWXPGHVY[u].SSUNXNEEHN)
			{
				Vivo=false;	
				//console.log("Muerto "+KYDWXPGHVY[u].SSUNXNEEHN);				
			}		
			else
			{
				//console.log("Vivo "+KYDWXPGHVY[u].SSUNXNEEHN);		
			}
		}	
		if (Vivo==true)
		{			
			break;
		}
	}*/
	
	Vivo=true
	
	//for (i=0;i<=XPBCVAGCDQ.length-1;i++)
	//{
		//console.log("Volteando "+XPBCVAGCDQ[i].XJARYUVBCB+" "+XPBCVAGCDQ[i].SSUNXNEEHN);

		
	//}
	
	for (i=0;i<=XPBCVAGCDQ.length-1;i++)
	{
		//console.log("Volteando "+XPBCVAGCDQ[i].XJARYUVBCB+" "+XPBCVAGCDQ[i].SSUNXNEEHN);
		if (XPBCVAGCDQ[i].XJARYUVBCB==false)
		{			
			break;
		}
		
	}
	
	//console.log("Calculando el control.."+Vivo+" "+XPBCVAGCDQ.length+" "+KYDWXPGHVY.length)
	if (Vivo==true)
	{
		ESKTEXAVHU=(i+1);
		log(true,"TOMA EL CONTROL DSDE CONECTADOS: "+ESKTEXAVHU);
		
		//console.log("** Calcula Control");
		//console.log("Hace el amago")
		if (BSUNPMKJSM(LUCRWXJMDR)==true) //Para que cuando comience partida, empiece el contador en el jugador que corresponda. 
		//Con todos los cambios, dej� de funcionar.
		{
			JWXRWCVLGC(LUCRWXJMDR);
		}
		

		
	}
	
	
	
}
 
consol=function()
{
	log(false,"a");
}
KLDULSMKMA = function(Data,RDBQUAVHEP,idPartidaServer) {
//Tipo Idas o Vueltas
	
 
 //log(false,this.hola)
//Level.prototype.Dibuja();
var i;
var XJARYUVBCB=false;
var QueHago;
//console.log("Me llega la id partida "+idPartidaServer)
idPartida=idPartidaServer;
QueHago=RDBQUAVHEP;
/*QueHago=RDBQUAVHEP-1;
if (QueHago==0)
{
	QueHago=4;
}*/

	log(true,'El que reparte es '+RDBQUAVHEP+" y yo soy "+TFSXFTYVGQ )
	//alert('El que reparte es '+RDBQUAVHEP+" y yo soy "+TFSXFTYVGQ );
	
	/*for (i=0;i<=KYDWXPGHVY.length-1;i++)
	{
		if (RDBQUAVHEP==KYDWXPGHVY[i].SSUNXNEEHN)
		{
			XJARYUVBCB=true;
		}
	}*/
	
	
//if (DVNRTQIWGL==KYDWXPGHVY[i].SSUNXNEEHN && TFSXFTYVGQ==ESKTEXAVHU)
	
	
	if ( //(RDBQUAVHEP!=TFSXFTYVGQ &&  XJARYUVBCB==true && ESKTEXAVHU==TFSXFTYVGQ  )  

			(OSBTHSJKFW()==true) 
			//!( RDBQUAVHEP==TFSXFTYVGQ ||  (RDBQUAVHEP!=TFSXFTYVGQ && ESKTEXAVHU==TFSXFTYVGQ && XJARYUVBCB==true))  
		
		) //(AGKVNAGGLB.length==0 && KNVKGHHTYC.length==0 && CBCNHFGWLU.length==0 && TWJONOKGHC.length==0)
	{
		
		log(true,'Recibiendo baraja..')
		//SXFHAGTGJT no se elimina. Se usa por el tema pesta�as y porque se eliminaba la variable en QSAXUCPASV

	
//	if (Tipo=="Idas")
//	{
//		DVNRTQIWGL=1;
//	}
	//else{
		log(true,"Creo el FXGSEGRXKC de apoyo");
		//for (i=0;i<=Data.length-1;i++) //A veces acaba antes que el que reparte, se crea el FXGSEGRXKC de apoyo y después se llama, pero creo que lo dejo obsoleto por un TKXPPGUPVV
		//{
		//	SXFHAGTGJT.push(new TVYNYTCQYW(Data[i].SGCSHJVERI,Data[i].UUOPKETETA,Data[i].HVCFEWNDRF,null,null,null));
		//}
		//if (!BDEFDQUJJE.isRunning  && !CKOUBGTDUF.isRunning  && !JLFYUAKDIJ.isRunning && !PQUFIBKJJH.isRunning && !LJRRHVSVKD.isRunning && !LCYAHFBDTT.isRunning)
		//{
		//	log(true,"la crea");
		//	CLWUDOTYHT(Data,RDBQUAVHEP);
		//}
		//else
		//{
			log(true,"la crea a malas ");
			
			CVTBLMKIGL.loop(1000, function(){
				//log(true, "Dando vueltas como un capullo2 "+Data.length+" BDEFDQUJJE "+BDEFDQUJJE.isRunning+" CKOUBGTDUF "+CKOUBGTDUF.isRunning+" JLFYUAKDIJ "+JLFYUAKDIJ.isRunning+" PQUFIBKJJH "+PQUFIBKJJH.isRunning+" LJRRHVSVKD "+LJRRHVSVKD.isRunning+ "  LCYAHFBDTT "+LCYAHFBDTT.isRunning);
				//if (!BDEFDQUJJE.isRunning  && !CKOUBGTDUF.isRunning  && !JLFYUAKDIJ.isRunning && !PQUFIBKJJH.isRunning && !LJRRHVSVKD.isRunning && !LCYAHFBDTT.isRunning)
				if (JEHYBALODM.length==0)
					{
						log(true, "Dando vueltas como un capullo");
						CVTBLMKIGL.stop();
						CLWUDOTYHT(Data,RDBQUAVHEP);
					}
				}
			);
			CVTBLMKIGL.start();	
			
		//}
	}
	else
	{
		log(true,"Yo no hago nada con la baraja recibida");
	}


 
 };
 
 
 TGLVJXEMKD= function(UHTPGPRUJA,OMDVKATFLQ, AWCCMSCOPO) {
	//LGDEYPLFSA(UHTPGPRUJA,OMDVKATFLQ, AWCCMSCOPO); 
	
	XIAPNYIGXV(UHTPGPRUJA,AWCCMSCOPO,true,OMDVKATFLQ,true);
	//HUCLBWTDFV(UHTPGPRUJA,AWCCMSCOPO,OMDVKATFLQ);
	
 };
 
 
XWGQYYRRQO = function(UHTPGPRUJA,SJVCMXWVVI,BBSGITWRQX) {
 log(false,'Recibiendo NPYBJSHIFL de jugador'+UHTPGPRUJA+": "+SJVCMXWVVI+" "+BBSGITWRQX)
 RAVHQRVMNJ(UHTPGPRUJA,SJVCMXWVVI,BBSGITWRQX); 
 };
 
 
 NOGEVUYFEW= function(UHTPGPRUJA,SJVCMXWVVI,turnoRecibido,SLGKDYQCAY,VMKDXVSQEY) {

	//SVHMCOYULR("RECIBO..."+ SJVCMXWVVI+" y "+UHTPGPRUJA);
	var Delay=10;
	
	if (OTGNMRHTVK()==true)
	{
		WWAYLOUPUQ(); 
	}
	else
	{
		
	 //ape XYXCEMMRDC.push(new NQMQGXXHIL(SLGKDYQCAY,UHTPGPRUJA) );
	 
		//console.log("BLOQUEO DESDE SERVER RAPIDO- "+UHTPGPRUJA+" "+SLGKDYQCAY+" "+VMKDXVSQEY);
		if (WSHPROHDIV.length>0) //1.0.6 Hago un delay
		{
			Delay=700*WSHPROHDIV.length;	
		}
		//console.log("se");
		var timerdelay = YMHIHSNADE.time.create(false);
			timerdelay.add(Delay, function(){
				//console.log("si");
				VPDVSDLPHG(UHTPGPRUJA,SJVCMXWVVI,SLGKDYQCAY,VMKDXVSQEY); 
		}
		);
		timerdelay.start();
		
	}
	

 }
 
 MBDMSUIWEH = function(UHTPGPRUJA,SJVCMXWVVI){
  NPOUCHQXMY(UHTPGPRUJA,SJVCMXWVVI); 
 }
 
 VMSUJQUAGD=function(RPHWVBBGIM,QuienHabla){
  XIAPNYIGXV(QuienHabla,RPHWVBBGIM,false); 
 }
 

YHNMANDWLT=function()
{
	var d;
	
	d=document.getElementById('Login');
		d.style.display = 'none';
	//	d.style.zIndex=-1;
		

}

MCFSLYOMHE=function()
{
	var d;
	
	d=document.getElementById('Login');
		d.style.display = 'none';
	//	d.style.zIndex=-1;
		
	UEHYPTREIH.visible=true;
	IBECDOLWLN.visible=true;
	BotonClasificacion.visible=true; //1.0.8
	BotonContacta.visible=true;
	JKLJKLRIRI.visible=true;
}

YUXWLFWVRD=function()
{
	if (EGPDVIEJEL==true)
	{
		var timerErrorConexion = YMHIHSNADE.time.create(false);
		//timerErrorConexion.add(5000,function(){
		//	timerErrorConexion.stop();
		//	if (socket.id!=undefined)
		//	{
		if (MuestraErrorDesconexion==true)
		{
			SVHMCOYULR("Revise su conexión a internet o inténtelo más tarde.");
		}
		MuestraErrorDesconexion=true;
		//	}
		//});
		//timerErrorConexion.start();
		
		//socket.disconnect();
		PWGIQBBAWX=false;
		

		
		JKCANKPQBB++;
		if (JKCANKPQBB>=3 && EGPDVIEJEL==true)
		{
			FHKOYDXPCL();
		}
		
			
	}
	
	//YHNMANDWLT();
	
}

SVHMCOYULR=function(RPHWVBBGIM)
{
	//tocar 1000 y 50
	var styleMarcador = { font: "bold 50px Arial", fill: "#fff", align: "center", boundsAlignH: "center", boundsAlignV: "middle" , wordWrap: true, wordWrapWidth: 800};	
	var BMQCYKJAHO=YMHIHSNADE.add.text(0, 0, RPHWVBBGIM, styleMarcador);
	//ATTUXTNNKX.visible=false;
	BMQCYKJAHO.stroke = '#961918';
    BMQCYKJAHO.strokeThickness = 4;
    BMQCYKJAHO.fill = '#F8E600';		
	//ATTUXTNNKX.setTextBounds(960,310,300,100)
	BMQCYKJAHO.setTextBounds(100,150,1200,200)
	
	var	twMensajeError = YMHIHSNADE.add.tween(BMQCYKJAHO).to( { alpha: 0 }, 1500, KYFMRVNHIQ, true,1000);
	
	
}

Salir=function(VideoJuego){
	
	//if (XPBCVAGCDQ.length==4 || EGPDVIEJEL==false)
	//{
		XHSDDIIBGG(VideoJuego);
	//}
	//else
	//{
	//	FHKOYDXPCL();
	//}
}

FHKOYDXPCL=function()
{
	NFARLTEOCI();
	EHUHWTYXOS=false;
	//	WNEWPCNXPA();
	/*1.0.6 MuestraErrorDesconexion=false;
	try
	{
		socket.disconnect();
		DFBVDPETGO=Math.floor(Math.random());
	}
	catch(e){}*/
	
	//XIQDONAJMM.visible=true;
	YJEISFVFQY();
	QSAXUCPASV();	
	WNEWPCNXPA();
	PWGIQBBAWX=true;
	ERQHLTPETK=true;
	//YMHIHSNADE.state.start("Level");	
	//1.0.6
	MatarConexion();
}

SalirDesdeLogueo=function()
{
	NFARLTEOCI();
	EHUHWTYXOS=false;
	//	WNEWPCNXPA();
	MuestraErrorDesconexion=false;
	try
	{
		socket.disconnect();
		socket=null;
		DFBVDPETGO=Math.floor(Math.random());
	}
	catch(e){}
	
	//XIQDONAJMM.visible=true;
	YJEISFVFQY();
	QSAXUCPASV();	
	WNEWPCNXPA();
	PWGIQBBAWX=true;
	XEMENNVXGV();
	JVEHDHOEEM();
}

EXBCVLOIYJ=function(XQLEOGMJYG,Origen)
{
	var encontrado=false;
	var i;
	
	for (i=0;i<=NBEJWDVLLV.length-1;i++)
	{
		if (NBEJWDVLLV[i].OYJAHGADFQ==XQLEOGMJYG)
		{
			encontrado=true;
			break;
		}
	}
	if (encontrado==true)
	{
		NBEJWDVLLV.splice(i,1);
		//console.log("Eliminado mensaje "+Origen+" "+XQLEOGMJYG)
	}
}	


MuestraTurno=function()
{
	var UBWRXKMTQN=HHOPUSIABJ(DVNRTQIWGL);
	var FXGSEGRXKC;
	var i;
	var tween1;
	var tween2;
	var tween3;
	var tween4;
	var u;
	//var
	
	//console.log("Animacion "+UBWRXKMTQN);
	
	//AnimacionTurnoON(ObjTurnoD);
	/*ObjTurnoD.visible=true;
	ObjTurnoL.visible=true;
	ObjTurnoR.visible=true;
	ObjTurnoU.visible=true;*/
	
	if (UBWRXKMTQN=="D")
	{
		AnimacionTurnoON(ObjTurnoD);
		AnimacionTurnoOFF(ObjTurnoL);
		AnimacionTurnoOFF(ObjTurnoR);
		AnimacionTurnoOFF(ObjTurnoU);	
	}
	
	if (UBWRXKMTQN=="U")
	{
		AnimacionTurnoON(ObjTurnoU);
		AnimacionTurnoOFF(ObjTurnoL);
		AnimacionTurnoOFF(ObjTurnoR);
		AnimacionTurnoOFF(ObjTurnoD);
	}
	
	if (UBWRXKMTQN=="L")
	{
		AnimacionTurnoON(ObjTurnoL);
		AnimacionTurnoOFF(ObjTurnoU);
		AnimacionTurnoOFF(ObjTurnoR);
		AnimacionTurnoOFF(ObjTurnoD);
	}	
	
	if (UBWRXKMTQN=="R")
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
		
		tween = YMHIHSNADE.add.tween(Obj);
		tween.to( {alpha:1

		}
		, MDYSFNYPYP, KYFMRVNHIQ,false,500);
		tween.start();
	*/

}

AnimacionTurnoOFF=function(Obj)
{

	Obj.tint=Phaser.Color.getColor(110,110,110);
	/*var tween;
		
		tween = YMHIHSNADE.add.tween(Obj);
		tween.to( {alpha:0.5

		}
		, MDYSFNYPYP, KYFMRVNHIQ,false,500);
		tween.start();*/

}

/*Level.prototype.render=function(){
	var a;
	a=YMHIHSNADE.add.text(0, 0, "");
	a.text=""
	a.text="aaa"+UHHXSNXXJK;
}*/