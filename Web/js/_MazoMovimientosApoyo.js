
/*BNVXVJHWWQ=function()
{

					
					

	//var x=WIEVLYANFM("U_C",0)-COIVBWRMCC-45;
	//var y=YMHIHSNADE.world.height-SXSHBRJFIR-PPLOSJIWHO+(YAJVUBPNNW)-10;
	
	var	x=WIEVLYANFM("ULTIMA_Baza",0);
	var y=FIGQBSJQGA("ULTIMA_Baza",0)-100;
			
	POUWEIOUWQ.x=x;
	POUWEIOUWQ.y=y;
	//POUWEIOUWQ.tint=Phaser.Color.getColor(200,200,200);
	WWFSQDQYYU.add(POUWEIOUWQ);
	YMHIHSNADE.add.tween(POUWEIOUWQ).to( { alpha: 1 }, 1500, KYFMRVNHIQ, true);
}*/

RateAPP=function()
{
	if( window.plugins)	
	{
		  AppRate.preferences = {
			useLanguage: 'es',
			simpleMode:true,
		  displayAppName: 'GuiñotePRO',
		  usesUntilPrompt: 0,
		  promptAgainForEachNewVersion: false,
		  inAppReview: true,
		  storeAppURL: {
			ios: '1232782144',
			android: 'market://details?id=es.guinotepro.guinotepro'
		  },
		  customLocale: {
			title: "¡Valora %@!",
			message: "Te necesitamos para seguir creciendo. ¡será rápido! :)",
			cancelButtonLabel: "No, Gracias",
			laterButtonLabel: "Más tarde",
			rateButtonLabel: "Valorar ahora",
			yesButtonLabel: "Sí",
			noButtonLabel: "No",
			appRatePromptTitle: '¿Te gusta %@?'//,
			//feedbackPromptTitle: '¿Algún comentario?'  
		  },
		  callbacks: {
			handleNegativeFeedback: function(){
			  window.open('mailto:feedback@example.com','_system');
			},
			onRateDialogShow: function(callback){
			  socket.emit('Consola','Ha pulsado rate');
			},
			onButtonClicked: function(buttonIndex){
			 socket.emit('Consola','Ha pulsado botón '+buttonIndex);
			}
		  }
		};
		 
		AppRate.promptForRating();
	}
}

LLALALASCC=function()
{
	YGTNAODFHW.frameName='cambiar 7';
	YGTNAODFHW.onInputOver.add(function(){
		YGTNAODFHW.frameName='cambiar 7';
	});
	YGTNAODFHW.onInputUp.add(function(){
		YGTNAODFHW.frameName='cambiar 7';
	});	
	YGTNAODFHW.onInputDown.add(function(){
		YGTNAODFHW.frameName='cambiar 7';
	});	
	YGTNAODFHW.onInputOut.add(function(){
		YGTNAODFHW.frameName='cambiar 7';
	});		
}

NMABWIWAAA=function()
{
	YGTNAODFHW.frameName='cambiar 7 gris';
	YGTNAODFHW.onInputOver.add(function(){
		YGTNAODFHW.frameName='cambiar 7 gris';
	});
	YGTNAODFHW.onInputUp.add(function(){
		YGTNAODFHW.frameName='cambiar 7 gris';
	});	
	YGTNAODFHW.onInputDown.add(function(){
		YGTNAODFHW.frameName='cambiar 7 gris';
	});	
	YGTNAODFHW.onInputOut.add(function(){
		YGTNAODFHW.frameName='cambiar 7 gris';
	});		
}

PPPAPAPQCD=function()
{
	IEQDMBJCAY.frameName='cantar';
	IEQDMBJCAY.onInputOver.add(function(){
		IEQDMBJCAY.frameName='cantar';
	});
	IEQDMBJCAY.onInputUp.add(function(){
		IEQDMBJCAY.frameName='cantar';
	});	
	IEQDMBJCAY.onInputDown.add(function(){
		IEQDMBJCAY.frameName='cantar';
	});	
	IEQDMBJCAY.onInputOut.add(function(){
		IEQDMBJCAY.frameName='cantar';
	});		
}

PAHJCWBNJH=function()
{
	IEQDMBJCAY.frameName='cantar gris';
	IEQDMBJCAY.onInputOver.add(function(){
		IEQDMBJCAY.frameName='cantar gris';
	});
	IEQDMBJCAY.onInputUp.add(function(){
		IEQDMBJCAY.frameName='cantar gris';
	});	
	IEQDMBJCAY.onInputDown.add(function(){
		IEQDMBJCAY.frameName='cantar gris';
	});	
	IEQDMBJCAY.onInputOut.add(function(){
		IEQDMBJCAY.frameName='cantar gris';
	});		
}
	
	
function MaliDetect() {
	//console.log("UNICO "+unico);
	//unico=1;
    var canv = document.createElement('canvas');
    canv.setAttribute("width", "1");
    canv.setAttribute("height", "1");
    document.body.appendChild(canv);

    var canvas = document.getElementsByTagName('canvas');
    var gl = canvas[0].getContext('webgl', { stencil: true });
    canvas[0].parentNode.removeChild(canvas[0]);

    if (!gl)
        return false;

    var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
	
    var renderer;
    if (dbgRenderInfo != null)
	{
        renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
		//alert(renderer);
    }
	else
	{
		return false;
	}

    //var n = renderer.search("Mali-400");
	if (KYLIAIETHX==false)
	{
		SVHMCOYULR(renderer);
	}
	var n = renderer.search(/mali/i);
    if (n != -1)
        return true;
    else
        return false;
}

function MaliDetect2() {
   
	var canv = document.createElement('canvas');
    var canvas = document.getElementsByTagName('canvas');
    var gl = canvas[0].getContext('webgl', { stencil: true });
    

    if (!gl)
        return false;

    var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
    var renderer;
    if (dbgRenderInfo != null)
        renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
    else return false;

    //var n = renderer.search("Mali-400");
	
	if (KYLIAIETHX==false)
	{
		alert(renderer);
	}
	var n = renderer.search(/mali/i);
    if (n != -1)
	{
		alert("ENCONTRADO");
        return true;
    }
	else
	{
		alert("NO NCONTRADO");
		return false;
	}
        
}

OTGNMRHTVK=function()
{
	return ((UHHXSNXXJK>=JLVDFTPUNI || PXGXKDDNFK>=JLVDFTPUNI) && EVAILWGGKX==true);	
}

PPWJOWHOIW=function()
{
	HUUCUYFBLW=YMHIHSNADE.time.create(false);
	HYSGUYGUYT=YMHIHSNADE.time.create(false);
	BGHJGDWJVI=YMHIHSNADE.time.create(false); //1.0.6
	CVTBLMKIGL=YMHIHSNADE.time.create(false);
	MMCDRVCGAV=YMHIHSNADE.time.create(false);	
	TKXPPGUPVV=YMHIHSNADE.time.create(false);
}

HUCLBWTDFV=function(UHTPGPRUJA,AWCCMSCOPO,OMDVKATFLQ)
{
	
	var STLEOJDWSU;
	var MUNNUSLXFH;
	var FWXWCWPXPK;
	var XACEBCSJAB;
	var DVWJGSLMYC;
	var VMMMRXJYSL;
	var i;
	var GRNXLBNUJR;
	var YGYIBEIGPR;
	var JQGKJGKCKJ;
	var IUQYICUQIU;
	var JSHKAHUIQE;
	var NBVBVBNVCQ;
	var JHKDVHWODW;
	
		
	if (LUCRWXJMDR<=4)
	{
		
		STLEOJDWSU=HHOPUSIABJ(UHTPGPRUJA);
		if (STLEOJDWSU=="D")
		{
			XACEBCSJAB=AGKVNAGGLB;
		}
		if (STLEOJDWSU=="U")
		{
			XACEBCSJAB=TWJONOKGHC
		}
		if (STLEOJDWSU=="L")
		{
			XACEBCSJAB=KNVKGHHTYC
		}
		if (STLEOJDWSU=="R")
		{
			XACEBCSJAB=CBCNHFGWLU;
		}
		
		if (AWCCMSCOPO=="oros")
		{
			DVWJGSLMYC=8;
			VMMMRXJYSL=10;
		}
		if (AWCCMSCOPO=="copas")
		{
			DVWJGSLMYC=18;
			VMMMRXJYSL=20;
		}
		if (AWCCMSCOPO=="espadas")
		{
			DVWJGSLMYC=28;
			VMMMRXJYSL=30;
		}		
		if (AWCCMSCOPO=="bastos")
		{
			DVWJGSLMYC=38;
			VMMMRXJYSL=40;
		}	
		
		var QLOWMPCLQW;
		var GTAHPENEVN;

		for (i=0;i<=XACEBCSJAB.length-1;i++)
		{
			log(false,"CARTAAAAAAAASSSS: "+XACEBCSJAB[i].TNFAGGMKXD.name);
			//console.log("XACEBCSJAB id "+XACEBCSJAB[i].TNFAGGMKXD.name+ "   "+DVWJGSLMYC);
			if(XACEBCSJAB[i].TNFAGGMKXD.name==DVWJGSLMYC  )
			{
					var QLOWMPCLQW=i;
			}
			
			if(XACEBCSJAB[i].TNFAGGMKXD.name==VMMMRXJYSL  )
			{
					var GTAHPENEVN=i;
			}
		}
		
		if (QLOWMPCLQW!=undefined && GTAHPENEVN!=undefined)
		{
			JQGKJGKCKJ=XACEBCSJAB[QLOWMPCLQW].TNFAGGMKXD;
			NBVBVBNVCQ=XACEBCSJAB[QLOWMPCLQW].TNFAGGMKXD.name
			IUQYICUQIU=XACEBCSJAB[GTAHPENEVN].TNFAGGMKXD;
			JHKDVHWODW=XACEBCSJAB[GTAHPENEVN].TNFAGGMKXD;
			
			if (OMDVKATFLQ==20 && STLEOJDWSU!="D")
			{

					try
					{
						JQGKJGKCKJ.loadTexture(NXNXBWBBWL,AKEULTNWHL(JQGKJGKCKJ), 0);
					}
					catch(e){}
					
					GRNXLBNUJR = YMHIHSNADE.add.tween(JQGKJGKCKJ).to( { alpha: 1 }, 2000, KYFMRVNHIQ, true);
					GRNXLBNUJR.onComplete.add(  function(){
							
							try
							{
								JSHKAHUIQE=true;
								for (i=0;i<=VDKOVQXHON.length-1;i++)
								{
									if (VDKOVQXHON[i].AAJNQWXHMY.name==NBVBVBNVCQ)
									{
										JSHKAHUIQE=false;
									}
								}	
								CHJKAHKJHC();
							}
							catch(e)
							{
								JSHKAHUIQE=false;
								
							}

							
							if (JSHKAHUIQE==true)
							{
								//CHJKAHKJHC();
								/*try
								{
									JQGKJGKCKJ.loadTexture(RCYRGXLWBR, 0);
									
								}
								catch(e)
								{
									try
									{
										JQGKJGKCKJ.loadTexture("Reverso", 0);
									}
									catch(e){}
								
								}*/
							}
						}
					);
					
					try
					{
						IUQYICUQIU.loadTexture(NXNXBWBBWL,AKEULTNWHL(IUQYICUQIU), 0);
					}
					catch(e){}
					
					YGYIBEIGPR = YMHIHSNADE.add.tween(IUQYICUQIU).to( { alpha: 1 }, 2000, KYFMRVNHIQ, true);
					YGYIBEIGPR.onComplete.add(  function(){
							
							try
							{
								CHJKAHKJHC();
								JSHKAHUIQE=true;
								for (i=0;i<=VDKOVQXHON.length-1;i++)
								{
									if (VDKOVQXHON[i].AAJNQWXHMY.name==JHKDVHWODW)
									{
										JSHKAHUIQE=false;
									}
								}	
							}
							catch(e)
							{
								JSHKAHUIQE=false;
								//CHJKAHKJHC();
							}

							
							if (JSHKAHUIQE==true)
							{
								//CHJKAHKJHC();
								/*try
								{
									IUQYICUQIU.loadTexture(RCYRGXLWBR, 0);
									
								}
								catch(e)
								{
									try
									{
										IUQYICUQIU.loadTexture("Reverso", 0);
									}
									catch(e){}
								
								}*/
							}
						}
					);
					
				
			}
		}
	}

}

UYAKDBNLTD=function(){
	var i;
	//try
	//{
		for (i=0;i<=KNVKGHHTYC.length-1;i++)
		{
			KNVKGHHTYC[i].TNFAGGMKXD.loadTexture(NXNXBWBBWL,AKEULTNWHL(KNVKGHHTYC[i].TNFAGGMKXD), 0);
		}
		for (i=0;i<=TWJONOKGHC.length-1;i++)
		{
			TWJONOKGHC[i].TNFAGGMKXD.loadTexture(NXNXBWBBWL,AKEULTNWHL(TWJONOKGHC[i].TNFAGGMKXD), 0);
		}		
		for (i=0;i<=CBCNHFGWLU.length-1;i++)
		{
			CBCNHFGWLU[i].TNFAGGMKXD.loadTexture(NXNXBWBBWL,AKEULTNWHL(CBCNHFGWLU[i].TNFAGGMKXD), 0);
		}		
	//}
	//catch(e){}

}

AKEULTNWHL=function(TNFAGGMKXD)
{
	var XRJIFVUUGG;
	
	/*if(TFSXFTYVGQ==1)
	{
		XRJIFVUUGG="A";
	}	
	else
	{
		XRJIFVUUGG="A";		
	}
	console.log("E");
	console.log(TNFAGGMKXD.name);
	if (TNFAGGMKXD.name<=9)
	{
		XCKJMDNBYC=XRJIFVUUGG+"0"+TNFAGGMKXD.name.toString();
	}
	else
	{
		XCKJMDNBYC=XRJIFVUUGG+TNFAGGMKXD.name.toString();
	}
	
	XCKJMDNBYC='1_oros';*/
	//console.log("Devuelvo el anverso "+XCKJMDNBYC);
	
	var XCKJMDNBYC;
					
	if (TNFAGGMKXD.name<=10)
	{
		XCKJMDNBYC=(TNFAGGMKXD.name-0)+"_oros";
	}
	else
	{
		if (TNFAGGMKXD.name<=20)
		{
			XCKJMDNBYC=(TNFAGGMKXD.name-10)+"_copas";
		}
		else
		{
			if (TNFAGGMKXD.name<=30)
			{
				XCKJMDNBYC=(TNFAGGMKXD.name-20)+"_espadas";
			}
			else
			{
				XCKJMDNBYC=(TNFAGGMKXD.name-30)+"_bastos";
			}
		}
		
	}
					
	return XCKJMDNBYC;
}
NAYBJTKIKA=function(TNFAGGMKXD){
	var XCKJMDNBYC;
	if (HBFBHWJQSQ==false)
	{
		try
		{
			

			//2.0.1 TNFAGGMKXD.loadTexture(AKEULTNWHL(TNFAGGMKXD), 0);
			//TNFAGGMKXD.loadTexture(NXNXBWBBWL,AKEULTNWHL(TNFAGGMKXD));
			TNFAGGMKXD.loadTexture(NXNXBWBBWL);
			TNFAGGMKXD.frameName=AKEULTNWHL(TNFAGGMKXD)
			//console.log("Llega")
			//a=YMHIHSNADE.cache.getFrame('BMANCBQGIU');
			//console.log(a);
			//Phaser.Texture.fromFrame('BMANCBQGIU')
			//TNFAGGMKXD.frame=a;
			//TNFAGGMKXD.frameName= 'BMANCBQGIU';
		}
		catch(e){
			//console.log("Supererror"+e)
		}
	}
}

XNFDNBQFUA=function(TNFAGGMKXD){	
	if (HBFBHWJQSQ==false)
	{
		//log(true,"El reverso global es: "+RCYRGXLWBR)
		try
		{
			if (YMHIHSNADE.cache.checkImageKey(RCYRGXLWBR))
			{
				TNFAGGMKXD.loadTexture(RCYRGXLWBR, 0);
			}
			else
			{
				RCYRGXLWBR='Reverso'
				TNFAGGMKXD.loadTexture(RCYRGXLWBR, 0);
			}
		}
		catch(e)
		{
			//console.log("Supererror2"+e)
			log(true,"El reverso con el catch "+TNFAGGMKXD.key);
			try
			{
				RCYRGXLWBR='Reverso'
				TNFAGGMKXD.loadTexture(RCYRGXLWBR, 0);
				
			}
			catch(u)
			{}
		}
	}
	
	
}
NPOUCHQXMY=function(UHTPGPRUJA,SJVCMXWVVI,TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ,DesdeForzarCambio){
  var i;
  var XACEBCSJAB;
  var UBWRXKMTQN;
  var LSKPLOTYIB=false;
  
  //console.log("Estoy en el 7 ajeno: "+UHTPGPRUJA+" "+SJVCMXWVVI)
  //YGTNAODFHW.kill();
	//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
	//YGTNAODFHW.frameName='cambiar 7 gris';
	NMABWIWAAA();
  
  UBWRXKMTQN=HHOPUSIABJ(UHTPGPRUJA);
   log(false,"SSUNXNEEHN 7: "+UHTPGPRUJA+"STLEOJDWSU: "+UBWRXKMTQN+" KEY: "+SJVCMXWVVI)
   
  	if (UBWRXKMTQN=="D"){
		XACEBCSJAB=AGKVNAGGLB;
	}
    if (UBWRXKMTQN=="L"){
		XACEBCSJAB=KNVKGHHTYC;
	}
    if (UBWRXKMTQN=="U"){
		XACEBCSJAB=TWJONOKGHC;
	}
    if (UBWRXKMTQN=="R"){
		XACEBCSJAB=CBCNHFGWLU;
	}	
	
	for (i=0;i<=XACEBCSJAB.length-1;i++)
	{
		if(XACEBCSJAB[i].TNFAGGMKXD.name==SJVCMXWVVI)
		{
			LSKPLOTYIB=true;
			break;
		}
	}
	
	if (LSKPLOTYIB==true)
	{
		log(false,"ENCONTRADA");
		NJGFWACAPY=XACEBCSJAB[i].TNFAGGMKXD
		NAYBJTKIKA(NJGFWACAPY);
		NJGFWACAPY.sendToBack();
				
		FBSDMRLVEL.push(new TVYNYTCQYW(XACEBCSJAB[i].SGCSHJVERI,XACEBCSJAB[i].UUOPKETETA,XACEBCSJAB[i].HVCFEWNDRF,XACEBCSJAB[i].TNFAGGMKXD,null,null,null,null,XACEBCSJAB[i].MQUGCIUQII));
		
		COTMMCVJWP.add(XACEBCSJAB[i].TNFAGGMKXD);
		YMHIHSNADE.world.bringToTop(VDKOVQXHON);
		YMHIHSNADE.world.bringToTop(AGKVNAGGLB);
		
		XACEBCSJAB.splice(i,1);
		OROGRNBISW(XACEBCSJAB,UBWRXKMTQN);
		

		
		
		
		HHBPAROITT = YMHIHSNADE.add.tween(NJGFWACAPY);
		HHBPAROITT.to( {x:(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6))  - (YAJVUBPNNW*8) +  COIVBWRMCC)/2)+ (1 *(COIVBWRMCC+ YAJVUBPNNW))
		,y:PXEBTYBHGS,
		angle : 90
		}, 500, BSXWFYLCEW);		
		
		HHBPAROITT.onComplete.add( 			
			function () {
				GNAHFPUEID(XACEBCSJAB,UBWRXKMTQN,UHTPGPRUJA,TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ,DesdeForzarCambio);
			} ,this)

		if (UBWRXKMTQN=="D")
		{
			//YMHIHSNADE.add.tween(NJGFWACAPY.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
			YMHIHSNADE.add.tween(NJGFWACAPY.scale).to( {x:1,y:1}, IRXOKNWTLV, BSXWFYLCEW,true);
		}					
		
		HHBPAROITT.start();	
	}
	else{
		//console.log("No he encontrado carta moviendo 7")
		//log(false,"NO ENCONTRADA");
	}
	
	
	
}


TengoMedioCuarenta=function(FXGSEGRXKC)
{
	var i;
	var RTOSLKFWHC=false;
	for (i=0;i<=FXGSEGRXKC.length-1;i++)
	{
		if( (FXGSEGRXKC[i].VVRCMEUNOJ==9 || FXGSEGRXKC[i].VVRCMEUNOJ==10) && FXGSEGRXKC[i].SGCSHJVERI==TGTQPBEQFR)
		{
			RTOSLKFWHC=true;
			break;
		}
	}
	return RTOSLKFWHC;
}
QPGADJGDVQ=function(Jugador7)
{
	var i;
	var NJGFWACAPY;
	var LSKPLOTYIB=false;
	var XACEBCSJAB;
	var LECTUTFGKY;
	
		if ( TFSXFTYVGQ==1 || TFSXFTYVGQ==3 )
		{
			
			if ( Jugador7==1 || Jugador7==3) {
				if (PPTWRPRLSI==true)
				{
					LECTUTFGKY=true;
				}
				else
				{
					LECTUTFGKY=false;
				}
			}
			else
			{
				if (PPTWRPRLSI==true)
				{
					LECTUTFGKY=false;
				}
				else
				{
					LECTUTFGKY=true;
				}
			}
		}
		
		if ( TFSXFTYVGQ==2 || TFSXFTYVGQ==4 ) //No hago else porque se ve más claro
		{
			if ( Jugador7==2 || Jugador7==4) {
				if (PPTWRPRLSI==true)
				{
					LECTUTFGKY=true;
				}
				else
				{
					LECTUTFGKY=false;
				}
			}
			else
			{
				if (PPTWRPRLSI==true)
				{
					LECTUTFGKY=false;
				}
				else
				{
					LECTUTFGKY=true;
				}
			}
		}
			
			
			
	//console.log("Intenta 7: "+LUCRWXJMDR+" "+Jugador7+" "+TFSXFTYVGQ+" "+LECTUTFGKY+" " + VDKOVQXHON.length+ " "+ESKTEXAVHU);	
	
   var UBWRXKMTQN=HHOPUSIABJ(Jugador7);
 
   
	if (UBWRXKMTQN=="D"){
		XACEBCSJAB=AGKVNAGGLB;
	}
	if (UBWRXKMTQN=="L"){
		XACEBCSJAB=KNVKGHHTYC;
	}
	if (UBWRXKMTQN=="U"){
		XACEBCSJAB=TWJONOKGHC;
	}
	if (UBWRXKMTQN=="R"){
		XACEBCSJAB=CBCNHFGWLU;
	}	
			
	
	if ( ( (EGPDVIEJEL==true && SNJCSVWFCC()) || EGPDVIEJEL==false ) && LUCRWXJMDR<=4    )
	{
		//if (YGTNAODFHW.frameName=='cambiar 7') 2.0.1 clave:7gris
		if ( (VDKOVQXHON.length==0 || VDKOVQXHON.length==1) && ( (LECTUTFGKY==true && TengoEl7(Jugador7)==true && Jugador7==TFSXFTYVGQ)
			
		||
		(LECTUTFGKY==true && TengoEl7(Jugador7)==true && Jugador7!=TFSXFTYVGQ && PermisoParaTomarControl(Jugador7) && FBSDMRLVEL[0].VVRCMEUNOJ>7 && 
		 
		 (EVAILWGGKX==true || (EVAILWGGKX==false && (FBSDMRLVEL[0].VVRCMEUNOJ==9  || FBSDMRLVEL[0].VVRCMEUNOJ==10 ) && TengoMedioCuarenta(XACEBCSJAB)==true  )  )

		) //Cambio por otro
		//ESKTEXAVHU==TFSXFTYVGQ cabezon
		
		) //2.0.1 clave:7gris
		)
		{
			

				
			
			
			//YGTNAODFHW.kill();
			//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
			//YGTNAODFHW.frameName='cambiar 7 gris';
			NMABWIWAAA();
			
			for (i=0;i<=XACEBCSJAB.length-1;i++)
			{
				if(XACEBCSJAB[i].HVCFEWNDRF==7 && XACEBCSJAB[i].SGCSHJVERI==TGTQPBEQFR)
				{
					LSKPLOTYIB=true;
					break;
				}
			}
			
			if (LSKPLOTYIB==true)
			{
				
				if (EGPDVIEJEL==true)
				{

					/////////////
				
					var QKVJASWVEO=Date.now();
					var GXNRNMAAKW=function( DFBVDPETGO,UHTPGPRUJA,AAJNQWXHMY, EVAILWGGKX, KXAWTTIEGG, OBTBPOULAV, AURESXCGMK, WWKVHIMWYD,MQUGCIUQII,
						OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
						 this.DFBVDPETGO=DFBVDPETGO
						 this.UHTPGPRUJA=UHTPGPRUJA
						 this.AAJNQWXHMY=AAJNQWXHMY
						 this.EVAILWGGKX=EVAILWGGKX
						 this.KXAWTTIEGG=KXAWTTIEGG
						 this.OBTBPOULAV=OBTBPOULAV
						 this.AURESXCGMK=AURESXCGMK
						 this.WWKVHIMWYD=WWKVHIMWYD
						 this.MQUGCIUQII=MQUGCIUQII
						
															 
						 this.OYJAHGADFQ=OYJAHGADFQ
						 this.OJPXTRQDKS=OJPXTRQDKS
						 this.LYHKNIMVEB=LYHKNIMVEB
						 this.RHOLNWBOXR=RHOLNWBOXR
						 
						 this.EBAPPJFYSW=new Date(Date.now());
					 }
					var QPHHGPRJAI=[];
					QPHHGPRJAI.splice(0,1000);

						
					var OYJAHGADFQ=Math.random()*100000;
					var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,Jugador7,XACEBCSJAB[i].TNFAGGMKXD.name, EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[Jugador7-1].OBTBPOULAV,XPBCVAGCDQ[Jugador7-1].AURESXCGMK, XPBCVAGCDQ[Jugador7-1].WWKVHIMWYD,MQUGCIUQII,
						OYJAHGADFQ,XPBCVAGCDQ[Jugador7-1].AURESXCGMK,DFBVDPETGO,'WROHETMDHX');
					NBEJWDVLLV.push(KCPHFPSPLQ);
					QPHHGPRJAI.push(KCPHFPSPLQ);


					socket.emit('WROHETMDHX',QPHHGPRJAI[0],
					 function(XQLEOGMJYG)
					 {			 
						EXBCVLOIYJ(XQLEOGMJYG,'WROHETMDHX');
					 }
					);						
					QPHHGPRJAI.splice(0,1000);	

					
					/////////////	
					
					
					//socket.emit('WROHETMDHX', DFBVDPETGO,TFSXFTYVGQ,AGKVNAGGLB[i].TNFAGGMKXD.name, EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[TFSXFTYVGQ-1].OBTBPOULAV,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK, XPBCVAGCDQ[TFSXFTYVGQ-1].WWKVHIMWYD) ;
				}
				else //1.0.9
				{				
					NJGFWACAPY=XACEBCSJAB[i].TNFAGGMKXD
					//NJGFWACAPY.sendToBack();
					//VRLYJAAHUE(NJGFWACAPY);
					
					FBSDMRLVEL.push(new TVYNYTCQYW(XACEBCSJAB[i].SGCSHJVERI,XACEBCSJAB[i].UUOPKETETA,XACEBCSJAB[i].HVCFEWNDRF,XACEBCSJAB[i].TNFAGGMKXD,5,XACEBCSJAB[i].jugador,null,null,XACEBCSJAB[i].MQUGCIUQII));
					NAYBJTKIKA(NJGFWACAPY);
					VRLYJAAHUE(FBSDMRLVEL.length-1);
					//GSXGWASLIY.add(FBSDMRLVEL[0].TNFAGGMKXD);
					COTMMCVJWP.add(XACEBCSJAB[i].TNFAGGMKXD);
					YMHIHSNADE.world.bringToTop(VDKOVQXHON);
					YMHIHSNADE.world.bringToTop(XACEBCSJAB);
					
					//FBSDMRLVEL[1].TNFAGGMKXD.moveDown();
					
					XACEBCSJAB.splice(i,1);
					OROGRNBISW(XACEBCSJAB,UBWRXKMTQN);
					

					
					
					
					HHBPAROITT = YMHIHSNADE.add.tween(NJGFWACAPY);
					HHBPAROITT.to( {x:(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6))  - (YAJVUBPNNW*8) +  COIVBWRMCC)/2)+ (1 *(COIVBWRMCC+ YAJVUBPNNW))
					,y:PXEBTYBHGS,
					angle : 90
					}, 500, BSXWFYLCEW);		
					
					HHBPAROITT.onComplete.add( 
					
						function () {
							VRLYJAAHUE(NJGFWACAPY);
							GNAHFPUEID(XACEBCSJAB,UBWRXKMTQN,Jugador7,false,false,false,false);
						}
					 ,this)		
					
					HHBPAROITT.start();	
					YMHIHSNADE.add.tween(NJGFWACAPY.scale).to( {x:1,y:1}, IRXOKNWTLV, BSXWFYLCEW,true);
				}
			}
		}
	}
}


/*QPGADJGDVQ=function()
{
	var i;
	var NJGFWACAPY;
	var LSKPLOTYIB=false;
	
	if ( (EGPDVIEJEL==true && SNJCSVWFCC()) || EGPDVIEJEL==false)
	{
		//if (YGTNAODFHW.frameName=='cambiar 7') 2.0.1 clave:7gris
		if ( (VDKOVQXHON.length==0 || VDKOVQXHON.length==1) &&  (PPTWRPRLSI==true && TengoEl7()==true)) //2.0.1 clave:7gris
		{
			//YGTNAODFHW.kill();
			//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
			//YGTNAODFHW.frameName='cambiar 7 gris';
			NMABWIWAAA();
			
			for (i=0;i<=AGKVNAGGLB.length-1;i++)
			{
				if(AGKVNAGGLB[i].HVCFEWNDRF==7 && AGKVNAGGLB[i].SGCSHJVERI==TGTQPBEQFR)
				{
					LSKPLOTYIB=true;
					break;
				}
			}
			
			if (LSKPLOTYIB==true)
			{
				
				if (EGPDVIEJEL==true)
				{

					/////////////
				
					var QKVJASWVEO=Date.now();
					var GXNRNMAAKW=function( DFBVDPETGO,UHTPGPRUJA,AAJNQWXHMY, EVAILWGGKX, KXAWTTIEGG, OBTBPOULAV, AURESXCGMK, WWKVHIMWYD,
						OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
						 this.DFBVDPETGO=DFBVDPETGO
						 this.UHTPGPRUJA=UHTPGPRUJA
						 this.AAJNQWXHMY=AAJNQWXHMY
						 this.EVAILWGGKX=EVAILWGGKX
						 this.KXAWTTIEGG=KXAWTTIEGG
						 this.OBTBPOULAV=OBTBPOULAV
						 this.AURESXCGMK=AURESXCGMK
						 this.WWKVHIMWYD=WWKVHIMWYD
						
															 
						 this.OYJAHGADFQ=OYJAHGADFQ
						 this.OJPXTRQDKS=OJPXTRQDKS
						 this.LYHKNIMVEB=LYHKNIMVEB
						 this.RHOLNWBOXR=RHOLNWBOXR
						 
						 this.EBAPPJFYSW=new Date(Date.now());
					 }
					var QPHHGPRJAI=[];
					QPHHGPRJAI.splice(0,1000);

						
					var OYJAHGADFQ=Math.random()*100000;
					var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,TFSXFTYVGQ,AGKVNAGGLB[i].TNFAGGMKXD.name, EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[TFSXFTYVGQ-1].OBTBPOULAV,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK, XPBCVAGCDQ[TFSXFTYVGQ-1].WWKVHIMWYD,
						OYJAHGADFQ,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK,DFBVDPETGO,'WROHETMDHX');
					NBEJWDVLLV.push(KCPHFPSPLQ);
					QPHHGPRJAI.push(KCPHFPSPLQ);


					socket.emit('WROHETMDHX',QPHHGPRJAI[0],
					 function(XQLEOGMJYG)
					 {			 
						EXBCVLOIYJ(XQLEOGMJYG,'WROHETMDHX');
					 }
					);						
					QPHHGPRJAI.splice(0,1000);	

					
					/////////////	
					
					
					//socket.emit('WROHETMDHX', DFBVDPETGO,TFSXFTYVGQ,AGKVNAGGLB[i].TNFAGGMKXD.name, EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[TFSXFTYVGQ-1].OBTBPOULAV,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK, XPBCVAGCDQ[TFSXFTYVGQ-1].WWKVHIMWYD) ;
				}
				else //1.0.9
				{				
					NJGFWACAPY=AGKVNAGGLB[i].TNFAGGMKXD
					//NJGFWACAPY.sendToBack();
					//VRLYJAAHUE(NJGFWACAPY);
					
					FBSDMRLVEL.push(new TVYNYTCQYW(AGKVNAGGLB[i].SGCSHJVERI,AGKVNAGGLB[i].UUOPKETETA,AGKVNAGGLB[i].HVCFEWNDRF,AGKVNAGGLB[i].TNFAGGMKXD,5,AGKVNAGGLB[i].jugador));
					VRLYJAAHUE(FBSDMRLVEL.length-1);
					//GSXGWASLIY.add(FBSDMRLVEL[0].TNFAGGMKXD);
					COTMMCVJWP.add(AGKVNAGGLB[i].TNFAGGMKXD);
					YMHIHSNADE.world.bringToTop(VDKOVQXHON);
					YMHIHSNADE.world.bringToTop(AGKVNAGGLB);
					
					//FBSDMRLVEL[1].TNFAGGMKXD.moveDown();
					
					AGKVNAGGLB.splice(i,1);
					OROGRNBISW(AGKVNAGGLB,"D");
					

					
					
					
					HHBPAROITT = YMHIHSNADE.add.tween(NJGFWACAPY);
					HHBPAROITT.to( {x:(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6))  - (YAJVUBPNNW*8) +  COIVBWRMCC)/2)+ (1 *(COIVBWRMCC+ YAJVUBPNNW))
					,y:PXEBTYBHGS,
					angle : 90
					}, 500, BSXWFYLCEW);		
					
					HHBPAROITT.onComplete.add( 
					
						function () {
							VRLYJAAHUE(NJGFWACAPY);
							GNAHFPUEID(AGKVNAGGLB,"D",TFSXFTYVGQ,false,false,false,false);
						}
					 ,this)		
					
					HHBPAROITT.start();	
					YMHIHSNADE.add.tween(NJGFWACAPY.scale).to( {x:1,y:1}, IRXOKNWTLV, BSXWFYLCEW,true);
				}
			}
		}
	}
}*/

GNAHFPUEID=function(XACEBCSJAB,STLEOJDWSU,RRWWKUVRLD,TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ,DesdeForzarCambio){
	
	var NOFEDXHMLS;
	var GHTWROCHVV;
	var MOFGFYOVIG;
	
		
	XACEBCSJAB.push(new TVYNYTCQYW(FBSDMRLVEL[0].SGCSHJVERI,FBSDMRLVEL[0].UUOPKETETA,FBSDMRLVEL[0].HVCFEWNDRF,FBSDMRLVEL[0].TNFAGGMKXD,7,RRWWKUVRLD,null,null,FBSDMRLVEL[0].MQUGCIUQII));
	//RXKKPILDQT.add(FBSDMRLVEL[0].TNFAGGMKXD);
	
	FBSDMRLVEL.shift();
	
	//var COIVBWRMCC=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.width;
	
	if (STLEOJDWSU=="D")
	{
		NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)   +  COIVBWRMCC)/2)+ (5 *(COIVBWRMCC+ YAJVUBPNNW));
		GHTWROCHVV=YMHIHSNADE.world.height-COIVBWRMCC;
		MOFGFYOVIG=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.angle - 90;
		NAYBJTKIKA(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
		RXKKPILDQT.add(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
	}
	
	if (STLEOJDWSU=="R")
	{
		//NOFEDXHMLS=YMHIHSNADE.world.height-COIVBWRMCC;
		//GHTWROCHVV=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)  +  COIVBWRMCC  )    /2)+      (0 *(COIVBWRMCC+ YAJVUBPNNW));
		
	 NOFEDXHMLS=YMHIHSNADE.world.width-COIVBWRMCC;
	 GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)   +  COIVBWRMCC)/2)+ (0 *(COIVBWRMCC+ YAJVUBPNNW));
		
		MOFGFYOVIG=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.angle + 180;
		XNFDNBQFUA(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
		BDRJVGFWQH.add(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
	}	
	
	if (STLEOJDWSU=="L")
	{
		NOFEDXHMLS=COIVBWRMCC;
	    GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)   +  COIVBWRMCC)/2)+ (5 *(COIVBWRMCC+ YAJVUBPNNW));
		MOFGFYOVIG=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.angle + 0;
		XNFDNBQFUA(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
		SYXHGDSJDY.add(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
		log(false,"Parte izquierda");
	}	

	if (STLEOJDWSU=="U")
	{
		NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)  +  COIVBWRMCC  )    /2)+      (0 *(COIVBWRMCC+ YAJVUBPNNW));
		GHTWROCHVV=COIVBWRMCC;	
		
		

		
		
		
		
		
		
		MOFGFYOVIG=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.angle - 90;
		XNFDNBQFUA(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
		PBHYCULPGK.add(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
	}
		
	

	log(false,"Mueve la carta...");	
	HHBPAROITT = YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
	HHBPAROITT.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV,
		angle : MOFGFYOVIG
		}, 500, BSXWFYLCEW);		
HHBPAROITT.onComplete.add(	function () {
					OROGRNBISW(XACEBCSJAB,STLEOJDWSU,false,false,XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.name);
					if (STLEOJDWSU=="D"){
						
						JQSOOBSDDS();
						HJDIMRVCSU(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD); //2.0.1 importantísimo que esta línea no se ponga donde está la anterior
					}
					else{
						//XNFDNBQFUA(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
					}
					//if (TKWCTNGROU!=undefined && LDCCGSIBKW!=undefined) //Si viene de ajeno y no del click
					//{
					//if (DUGDLNBOGK==false)
					//{
					//	//console.log("OGGWQECXBK: 7.0");
						//UODKOBCGYM(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ);
					//}
					//else
					//{
					if (FXGSEGRXKC.length>0 && DesdeForzarCambio==true)
					{
						//console.log("Robar cartas finalizando 7")
						CGCMEMLMAG(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ);
					}
					else
					{
						console.log("RECUPERA_ GNAHFPUEID");
						OGGWQECXBK(TXLWIIINGQ,false,false);
					}

						
					//}
					//}
					
					
					
					
				}
				,this)
	

		
	HHBPAROITT.start();
	
	if (STLEOJDWSU=="D")	
	{
			
		YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
	}	
	else
	{
		if (JHJEWHFWNL==true)
		{
			YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale).to( {x:1.2,y:1.2}, IRXOKNWTLV, BSXWFYLCEW,true);
		}
	}
	LMGBDQDXWP(); //2017/04/18

}


TengoEl7=function(Jugador7){
	var i;
	var JSAVOOUOYD=false;
	var XACEBCSJAB;
	var UBWRXKMTQN;
	
	if (FXGSEGRXKC.length>0)
	{
		
		
	   UBWRXKMTQN=HHOPUSIABJ(Jugador7);
	 
	   
		if (UBWRXKMTQN=="D"){
			XACEBCSJAB=AGKVNAGGLB;
		}
		if (UBWRXKMTQN=="L"){
			XACEBCSJAB=KNVKGHHTYC;
		}
		if (UBWRXKMTQN=="U"){
			XACEBCSJAB=TWJONOKGHC;
		}
		if (UBWRXKMTQN=="R"){
			XACEBCSJAB=CBCNHFGWLU;
		}	
		
		for (i=0;i<=XACEBCSJAB.length-1;i++)
		{
			if(XACEBCSJAB[i].HVCFEWNDRF==7 && XACEBCSJAB[i].SGCSHJVERI==TGTQPBEQFR)
			{
				JSAVOOUOYD=true;
				break;
			}
		}
	}
	return JSAVOOUOYD;
}





LQJEJOOAPH=function(SCWJTHLKWF,OMDVKATFLQ, TXLWIIINGQ){
	

	var MLFDVPXWYK;
	var DSCVVNAYWK;
	var QOWECQVXCM;
	
	//CRITICO
	if (SCWJTHLKWF=="N")
	{
		UHHXSNXXJK=UHHXSNXXJK+OMDVKATFLQ;
	}
	else
	{
		PXGXKDDNFK=PXGXKDDNFK+OMDVKATFLQ;
	}
	
	
	if (UHHXSNXXJK>50){
		MLFDVPXWYK=UHHXSNXXJK-50 + " Buenas";
	}
	else{
		MLFDVPXWYK=UHHXSNXXJK+ " Malas";	
	}
	if (PXGXKDDNFK>50){
		DSCVVNAYWK=PXGXKDDNFK-50 + " Buenas";
	}
	else{
		DSCVVNAYWK=PXGXKDDNFK+ " Malas";	
	}	
	
	ATTUXTNNKX.text=MLFDVPXWYK+"\n"+DSCVVNAYWK;
	
	if ( OTGNMRHTVK()==true )
	{
		//console.log("WWAYLOUPUQ Desde actualiza marcador");
		console.log("DEL Actualiza marcador "+JHHWEKWEJK);
		if (JHHWEKWEJK==false) //2.0.1 Se metía varias veces
		{
			WWAYLOUPUQ(TXLWIIINGQ); 
		}
		QOWECQVXCM=false;
	}	
	else
	{
		QOWECQVXCM=true;
	}
	
	log(false,"Nosotros "+UHHXSNXXJK);
	log(false,"YOBEPVEEMW "+PXGXKDDNFK);
	
	return QOWECQVXCM;
}

/*LGDEYPLFSA=function(UHTPGPRUJA,OMDVKATFLQ,AWCCMSCOPO){

	var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
	var text;
	var timerCante;
					//  The Text is positioned at 0, 100
	text = YMHIHSNADE.add.text(0, 0, NJWWPODLWD, style);
	text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	//  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
	text.setTextBounds(0, 100, 800, 100);
	//  Start the TKXPPGUPVV running - this is important!
	//  It won't start automatically, allowing you to hook it to button events and the like.
	timerCante = YMHIHSNADE.time.create(false);
	timerCante.add(3000, FYYEWMEHBU, this,text);
	timerCante.start();
}*/

SRFFTPLVMJ=function(SGCSHJVERI){
	var i;
	var WIEMLCTGXO=false;
	for (i=0;i<=FOQUJVEYFC.length-1;i++)
	{
		if (FOQUJVEYFC[i]==SGCSHJVERI){
			WIEMLCTGXO=true;
			break;
		}
	}

	return WIEMLCTGXO;
}

BFXLLYQNMN=function(BMCBJHBJWH){
	var i;
	var CIPQYKQBMR=false;
	var SWIGVTVMDU=false;
	var UUSWYWBMGP=false;
	var BFXFLFDAPV=false;
	var UBNODRNAGX=false;
	var UNROHJICCV=false;
	var VREOAIDYYY=false;
	var MCTHFYHCXF=false;
	var TGTTLELLIS=false;
	
	for (i=0; i<=BMCBJHBJWH.length-1;i++)
	{
		if (BMCBJHBJWH[i].VVRCMEUNOJ==10 && BMCBJHBJWH[i].SGCSHJVERI=="oros"){
			CIPQYKQBMR=true;
		}
		
		if (BMCBJHBJWH[i].VVRCMEUNOJ==10 && BMCBJHBJWH[i].SGCSHJVERI=="copas"){
			UUSWYWBMGP=true;
		}
		if (BMCBJHBJWH[i].VVRCMEUNOJ==10 && BMCBJHBJWH[i].SGCSHJVERI=="espadas"){
			UBNODRNAGX=true;
		}	
	
		if (BMCBJHBJWH[i].VVRCMEUNOJ==10 && BMCBJHBJWH[i].SGCSHJVERI=="bastos"){
			VREOAIDYYY=true;
		}	
		
		if (BMCBJHBJWH[i].VVRCMEUNOJ==9 && BMCBJHBJWH[i].SGCSHJVERI=="oros"){
			SWIGVTVMDU=true;
		}
		
		if (BMCBJHBJWH[i].VVRCMEUNOJ==9 && BMCBJHBJWH[i].SGCSHJVERI=="copas"){
			BFXFLFDAPV=true;
		}
		if (BMCBJHBJWH[i].VVRCMEUNOJ==9 && BMCBJHBJWH[i].SGCSHJVERI=="espadas"){
			UNROHJICCV=true;
		}	
	
		if (BMCBJHBJWH[i].VVRCMEUNOJ==9 && BMCBJHBJWH[i].SGCSHJVERI=="bastos"){
			MCTHFYHCXF=true;
		}			
	}
	
	if ( (CIPQYKQBMR==true && SWIGVTVMDU==true && SRFFTPLVMJ("oros")==false) ||
		(UUSWYWBMGP==true && BFXFLFDAPV==true && SRFFTPLVMJ("copas")==false) ||
		(UBNODRNAGX==true && UNROHJICCV==true && SRFFTPLVMJ("espadas")==false) ||		
		(VREOAIDYYY==true && MCTHFYHCXF==true && SRFFTPLVMJ("bastos")==false) 	

	)
	{
		TGTTLELLIS=true;
	}	
	else
	{
		TGTTLELLIS=false;
	}
	
	return TGTTLELLIS;

}



LMGBDQDXWP=function(){
	var SRCGCMADME;
	var i;
	var QBXGANOVYU;
	var YBWNGQGIHW;
	var LDDXAIVDNC;

	log(true,"Cantes Tamaño: "+ VDKOVQXHON.length);
	//alert("llega a cantar 0");
	if (VDKOVQXHON.length==0 || VDKOVQXHON.length==1)
	{
	
		if (TFSXFTYVGQ==1)
		{
			QBXGANOVYU=3;
			YBWNGQGIHW=2;
			LDDXAIVDNC=4;
		}
		if (TFSXFTYVGQ==2)
		{
			QBXGANOVYU=4;
			YBWNGQGIHW=1;
			LDDXAIVDNC=3;
		}
		if (TFSXFTYVGQ==3)
		{
			QBXGANOVYU=1;
			YBWNGQGIHW=2;
			LDDXAIVDNC=4;
		}
		if (TFSXFTYVGQ==4)
		{
			QBXGANOVYU=2;
			YBWNGQGIHW=1;
			LDDXAIVDNC=3;
		}		
		
		
		if ( LUCRWXJMDR>1)
		{
			if (EGPDVIEJEL==false)
			{
				if (PPTWRPRLSI==true)
				{
					//alert("llega a cantar");
					VSBOFQVPVQ(3);
					QPGADJGDVQ(3)
				}
				else
				{
					//alert("llega a cantar 2");
					VSBOFQVPVQ(2);
					VSBOFQVPVQ(4);
					QPGADJGDVQ(2);
					QPGADJGDVQ(4);
				}
			}
			else
			{
				if (TFSXFTYVGQ==ESKTEXAVHU && FReconectando()==false) //cabezon FReconectando
				{
					if (PPTWRPRLSI==true)
					{
						for (i=0;i<=KYDWXPGHVY.length-1;i++)
						{
							if (KYDWXPGHVY[i].SSUNXNEEHN==QBXGANOVYU)
							{
								//alert("hasta la cocina 1");
								VSBOFQVPVQ(QBXGANOVYU);
								QPGADJGDVQ(QBXGANOVYU);
							}
						}							
					}
					else
					{
						//alert("algo pasa");
						for (i=0;i<=KYDWXPGHVY.length-1;i++)
						{
							//alert(KYDWXPGHVY[i]);
							if (KYDWXPGHVY[i].SSUNXNEEHN==YBWNGQGIHW)
							{
								//alert("hasta la cocina 2");
								VSBOFQVPVQ(YBWNGQGIHW);
								QPGADJGDVQ(YBWNGQGIHW);
							}
							if (KYDWXPGHVY[i].SSUNXNEEHN==LDDXAIVDNC)
							{
								//alert("hasta la cocina 3");
								VSBOFQVPVQ(LDDXAIVDNC);
								QPGADJGDVQ(LDDXAIVDNC);
							}							
						}						
					}
					
				}				
			}
		}
	
		log(true,"Cantes SRCGCMADME Nuestra: "+PPTWRPRLSI);
		log(true,"Cantes Posible Cante "+BFXLLYQNMN(AGKVNAGGLB));
		if (PPTWRPRLSI==true && BFXLLYQNMN(AGKVNAGGLB)==true )
		{
			//IEQDMBJCAY.revive();	
			//IEQDMBJCAY.loadTexture('Boton_cantar_on', 0);			
			//IEQDMBJCAY.frameName= 'cantar';		//asd
			PPPAPAPQCD();
		}
		else{
			//IEQDMBJCAY.kill();
			//IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);			
			//IEQDMBJCAY.frameName= 'cantar gris';		//asd
			PAHJCWBNJH();

		}	
		
		if (PPTWRPRLSI==true && TengoEl7(TFSXFTYVGQ)==true && FBSDMRLVEL[0].VVRCMEUNOJ>7)
		{
			//YGTNAODFHW.revive();
			//YGTNAODFHW.loadTexture('Boton_cambiar_7_on', 0);
			//YGTNAODFHW.frameName='cambiar 7';
			LLALALASCC();
		}
		else
		{
			//YGTNAODFHW.kill();
			//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
			YGTNAODFHW.frameName='cambiar 7 gris';
			NMABWIWAAA();
		}
		
		
	}
	else
	{
		//YGTNAODFHW.kill();
		//IEQDMBJCAY.kill();
		//IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);
		//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
		//IEQDMBJCAY.frameName='cantar gris';
		//YGTNAODFHW.frameName='cambiar 7 gris';
		PAHJCWBNJH();
		NMABWIWAAA();
	}
	
}

BHWUWOPQCB=function(DFBVDPETGO,UHTPGPRUJA,PAXBGDCANU, FHEFFYUQFX, EVAILWGGKX, KXAWTTIEGG, OBTBPOULAV,AURESXCGMK,WWKVHIMWYD)
{
	
	
		/////////////

	var QKVJASWVEO=Date.now();
	var GXNRNMAAKW=function( DFBVDPETGO,UHTPGPRUJA,PAXBGDCANU, FHEFFYUQFX, EVAILWGGKX, KXAWTTIEGG, OBTBPOULAV,AURESXCGMK,WWKVHIMWYD,MQUGCIUQII,
		OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
		 this.DFBVDPETGO=DFBVDPETGO
		 this.UHTPGPRUJA=UHTPGPRUJA
		 this.PAXBGDCANU=PAXBGDCANU
		 this.FHEFFYUQFX=FHEFFYUQFX
		 this.EVAILWGGKX=EVAILWGGKX
		 this.KXAWTTIEGG=KXAWTTIEGG
		 this.OBTBPOULAV=OBTBPOULAV
		 this.AURESXCGMK=AURESXCGMK
		 this.WWKVHIMWYD=WWKVHIMWYD
		 this.MQUGCIUQII=MQUGCIUQII
											 
		 this.OYJAHGADFQ=OYJAHGADFQ
		 this.OJPXTRQDKS=OJPXTRQDKS
		 this.LYHKNIMVEB=LYHKNIMVEB
		 this.RHOLNWBOXR=RHOLNWBOXR
		 
		 this.EBAPPJFYSW=new Date(Date.now());
	 }
	var QPHHGPRJAI=[];
	QPHHGPRJAI.splice(0,1000);

		
	var OYJAHGADFQ=Math.random()*100000;
	var KCPHFPSPLQ=new GXNRNMAAKW( DFBVDPETGO,UHTPGPRUJA,PAXBGDCANU, FHEFFYUQFX, EVAILWGGKX, KXAWTTIEGG, OBTBPOULAV,AURESXCGMK,WWKVHIMWYD,MQUGCIUQII,
		OYJAHGADFQ,AURESXCGMK,DFBVDPETGO,'OSMNKAMXMY');
	NBEJWDVLLV.push(KCPHFPSPLQ);
	QPHHGPRJAI.push(KCPHFPSPLQ);


	socket.emit('OSMNKAMXMY',QPHHGPRJAI[0],
	 function(XQLEOGMJYG)
	 {			 
		EXBCVLOIYJ(XQLEOGMJYG,'OSMNKAMXMY');
	 }
	);						
	QPHHGPRJAI.splice(0,1000);	

	
	/////////////	
								
	
}

VSBOFQVPVQ=function(UHTPGPRUJA){
	var i;
	var CIPQYKQBMR=false;
	var SWIGVTVMDU=false;
	var UUSWYWBMGP=false;
	var BFXFLFDAPV=false;
	var UBNODRNAGX=false;
	var UNROHJICCV=false;
	var VREOAIDYYY=false;
	var MCTHFYHCXF=false;
	var SGCSHJVERI;
	var OMDVKATFLQ=0;
	var YDMAEKLTIK=[];
	var UBWRXKMTQN;
	
	//IEQDMBJCAY.kill();
	if ( (EGPDVIEJEL==true && SNJCSVWFCC()) || EGPDVIEJEL==false)
	{
		
		if ( (IEQDMBJCAY.frameName=="cantar" && UHTPGPRUJA==TFSXFTYVGQ) || UHTPGPRUJA!=TFSXFTYVGQ )
		{
			if (IEQDMBJCAY.frameName=="cantar" && UHTPGPRUJA==TFSXFTYVGQ)
			{
				//IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);
				//IEQDMBJCAY.frameName="cantar gris"
				PAHJCWBNJH();
			}
					
			
		//alert("kk");
			if (EGPDVIEJEL==true){
				//YDMAEKLTIK=AGKVNAGGLB;
				 UBWRXKMTQN=HHOPUSIABJ(UHTPGPRUJA);
				 //alert(UBWRXKMTQN);
				 if (UBWRXKMTQN=="D")
				 {
					YDMAEKLTIK=AGKVNAGGLB;
				 }
				 if (UBWRXKMTQN=="U")
				 {
					YDMAEKLTIK=TWJONOKGHC;
				 }
				 if(UBWRXKMTQN=="L")
				 {
					YDMAEKLTIK=KNVKGHHTYC;
				 }
				 if (UBWRXKMTQN=="R")
				 {
					YDMAEKLTIK=CBCNHFGWLU;
				 }
			}
			else
			{
				if (UHTPGPRUJA==1)
				{
					YDMAEKLTIK=AGKVNAGGLB;
				}

				if (UHTPGPRUJA==2)
				{
					YDMAEKLTIK=CBCNHFGWLU;
				}
				if (UHTPGPRUJA==3)
				{
					YDMAEKLTIK=TWJONOKGHC;
				}
				if (UHTPGPRUJA==4)
				{
					YDMAEKLTIK=KNVKGHHTYC;
				}	
			}

			
			for (i=0; i<=YDMAEKLTIK.length-1;i++)
			{
				if (YDMAEKLTIK[i].VVRCMEUNOJ==10 && YDMAEKLTIK[i].SGCSHJVERI=="oros" ){
					CIPQYKQBMR=true;	
				}
				
				if (YDMAEKLTIK[i].VVRCMEUNOJ==10 && YDMAEKLTIK[i].SGCSHJVERI=="copas" ){
					UUSWYWBMGP=true;
				}
				if (YDMAEKLTIK[i].VVRCMEUNOJ==10 && YDMAEKLTIK[i].SGCSHJVERI=="espadas"){
					UBNODRNAGX=true;
				}	
			
				if (YDMAEKLTIK[i].VVRCMEUNOJ==10 && YDMAEKLTIK[i].SGCSHJVERI=="bastos"){
					VREOAIDYYY=true;
				}	
				
				if (YDMAEKLTIK[i].VVRCMEUNOJ==9 && YDMAEKLTIK[i].SGCSHJVERI=="oros"){
					SWIGVTVMDU=true;
				}
				
				if (YDMAEKLTIK[i].VVRCMEUNOJ==9 && YDMAEKLTIK[i].SGCSHJVERI=="copas"){
					BFXFLFDAPV=true;
				}
				if (YDMAEKLTIK[i].VVRCMEUNOJ==9 && YDMAEKLTIK[i].SGCSHJVERI=="espadas"){
					UNROHJICCV=true;
				}	
			
				if (YDMAEKLTIK[i].VVRCMEUNOJ==9 && YDMAEKLTIK[i].SGCSHJVERI=="bastos"){
					MCTHFYHCXF=true;
				}			
			}	

			if ( CIPQYKQBMR==true && SWIGVTVMDU==true && SRFFTPLVMJ("oros")==false) 
			{
				log(false,"Canta en Oros");
				if (TGTQPBEQFR=="oros")
				{
					if (EGPDVIEJEL==true)
					{
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,40,"oros", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK, XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD) ;
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,false,true,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"oros",true,40,false,false);
						FOQUJVEYFC.push("oros")
					}
					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"oros",true,40);
					
				}
				else
				{
					if (EGPDVIEJEL==true)
					{
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,20,"oros",EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD) ;
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,true,false,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"oros",true,20,false,false);
						FOQUJVEYFC.push("oros")
					}
					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"oros",true,20);
					
				}
				//1.0.9 FOQUJVEYFC.push("oros")
			}
			
			if ( UUSWYWBMGP==true && BFXFLFDAPV==true && SRFFTPLVMJ("copas")==false)
			{
				log(false,"Canta en copas");
				if (TGTQPBEQFR=="copas")
				{
					if (EGPDVIEJEL==true)
					{			
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,40,"copas",EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD) ;
						
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,false,true,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"copas",true,40,false,false);
						FOQUJVEYFC.push("copas")
					}

					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"copas",true,40);
				}
				else
				{
					if (EGPDVIEJEL==true)
					{
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,20,"copas", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
						
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,true,false,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"copas",true,20,false,false);
						FOQUJVEYFC.push("copas")
					}

					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"copas",true,20);
				}
				//1.0.9 FOQUJVEYFC.push("copas")
				
			}

			if ( UBNODRNAGX==true && UNROHJICCV==true && SRFFTPLVMJ("espadas")==false)
			{
				log(false,"Canta en espadas");
				if (TGTQPBEQFR=="espadas")
				{
					if (EGPDVIEJEL==true)
					{
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,40,"espadas", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
						
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,false,true,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"espadas",true,40,false,false);
						FOQUJVEYFC.push("espadas")
					}

					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"espadas",true,40);
				}
				else
				{
					if (EGPDVIEJEL==true)
					{
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,20,"espadas", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
						
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,true,false,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"espadas",true,20,false,false);
						FOQUJVEYFC.push("espadas")
					}

					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"espadas",true,20);
				}
				//1.0.9 FOQUJVEYFC.push("espadas")
			}
			
			if ( VREOAIDYYY==true && MCTHFYHCXF==true && SRFFTPLVMJ("bastos")==false)
			{
				log(false,"Canta en bastos");
				if (TGTQPBEQFR=="bastos")
				{
					if (EGPDVIEJEL==true)
					{
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,40,"bastos", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
						
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,false,true,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"bastos",true,40,false,false);
						FOQUJVEYFC.push("bastos")
					}

					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"bastos",true,40);
				}
				else
				{
					if (EGPDVIEJEL==true)
					{
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,20,"bastos", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
						
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,true,false,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"bastos",true,20,false,false);
						FOQUJVEYFC.push("bastos")
					}

					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"bastos",true,20);
				}
				//1.0.9 FOQUJVEYFC.push("bastos")
			}	
			if ( OTGNMRHTVK()==true)
			{
				//console.log("WWAYLOUPUQ Desde cantar");
				//NOCREO WWAYLOUPUQ(); 
			}	
		}
	}
}

IXLQLKYFRI=function(IUYUIHVKJW){
	var i;
	var u;
	//if (LUCRWXJMDR>=SNVWBLGBPJ){
		//if (IUYUIHVKJW==undefined){
	var valida=true;
	
			for (u=0;u<=VDKOVQXHON.length-1;u++)
			{
				if (VDKOVQXHON[u].jugador==TFSXFTYVGQ)
				{
					valida=false;
				}
			}
						
			if (DVNRTQIWGL==TFSXFTYVGQ && valida==true)
			{
				for (i=0;i<=AGKVNAGGLB.length-1;i++)
				{
					if (XPSRYGDPNI(AGKVNAGGLB[i],TFSXFTYVGQ)==true)
					{
						AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
					}
					else
					{
						AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(110,110,110);
					}		
				}
			}
			else
			{
				for (i=0;i<=AGKVNAGGLB.length-1;i++)
				{
					AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
				}
			}
		//}
		/*else
		{
					
					if (XPSRYGDPNI(IUYUIHVKJW,TFSXFTYVGQ)==true || LUCRWXJMDR<=SNVWBLGBPJ  )
					{
						IUYUIHVKJW.TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
					}
					else
					{
						IUYUIHVKJW.TNFAGGMKXD.tint=Phaser.Color.getColor(110,110,110);
					}		
		}*/
	//}
	/*else
	{
		for (i=0;i<=AGKVNAGGLB.length-1;i++)
		{
			if (XPSRYGDPNI(AGKVNAGGLB[i],TFSXFTYVGQ)==true)
			{
				AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
			}
			else
			{
				AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(110,110,110);
			}		
		}
	}*/
}

XPSRYGDPNI=function(TVYNYTCQYW,UHTPGPRUJA){
	
	var GMLVJEFHPL;
	var JEOOIEYAWD=[];
	var i;
	var STLEOJDWSU;
	var ROKSCTPBNI=[];
	
	STLEOJDWSU=HHOPUSIABJ(UHTPGPRUJA)
	if (STLEOJDWSU=="D")
	{
		ROKSCTPBNI=AGKVNAGGLB;
	}
	if (STLEOJDWSU=="U")
	{
		ROKSCTPBNI=TWJONOKGHC;
	}	
	if (STLEOJDWSU=="R")
	{
		ROKSCTPBNI=CBCNHFGWLU;
	}
	if (STLEOJDWSU=="L")
	{
		ROKSCTPBNI=KNVKGHHTYC;
	}	
	
	
	if (VDKOVQXHON.length==0 || LUCRWXJMDR<=SNVWBLGBPJ)
	{
		GMLVJEFHPL=true;
	}
	else
	{
	
		
		if (IMVFJBDBXG(ROKSCTPBNI)==true){
			log(false,"Tengo del mismo SGCSHJVERI");
			
			JEOOIEYAWD.splice(0,4);
			for (i=0;i<=VDKOVQXHON.length-1;i++){
				JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[i].SGCSHJVERI,VDKOVQXHON[i].VVRCMEUNOJ,VDKOVQXHON[i].jugador ));
				//log(false,JEOOIEYAWD[i].SGCSHJVERI+" - "+JEOOIEYAWD[i].VVRCMEUNOJ+" - "+JEOOIEYAWD[i].jugador);		
			}
			
			
			if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true){
				log(false,"La SRCGCMADME es nuestra");
				if (TVYNYTCQYW.SGCSHJVERI==VDKOVQXHON[0].SGCSHJVERI){
					log(false,"La carta es del mismo SGCSHJVERI");
					GMLVJEFHPL=true;
				}
				else{
					log(false,"La carta NO es del mismo SGCSHJVERI");
					GMLVJEFHPL=false;
				}
			}
			else{
				//PreparaArray metiendo carta
				log(false,"NO es nuestra SRCGCMADME..");
				JEOOIEYAWD.splice(0,4);
				for (i=0;i<=VDKOVQXHON.length-1;i++){
					JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[i].SGCSHJVERI,VDKOVQXHON[i].VVRCMEUNOJ,VDKOVQXHON[i].jugador ));					
				}
				JEOOIEYAWD.push(new UYOMGORTXR(TVYNYTCQYW.SGCSHJVERI,TVYNYTCQYW.VVRCMEUNOJ,UHTPGPRUJA ));
				log(false,JEOOIEYAWD[JEOOIEYAWD.length-1].SGCSHJVERI+" - "+JEOOIEYAWD[JEOOIEYAWD.length-1].VVRCMEUNOJ+" - "+JEOOIEYAWD[JEOOIEYAWD.length-1].jugador);
				
				if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true){
					log(false,"La SRCGCMADME no ser�a nuestra");
					if (TVYNYTCQYW.SGCSHJVERI==VDKOVQXHON[0].SGCSHJVERI){
						log(false,"Es del mismo SGCSHJVERI");
						GMLVJEFHPL=true;
					}	
					else{
						log(false,"No es del mismo SGCSHJVERI");
						GMLVJEFHPL=false;
					}
				}
				else{
					if (BNKCXIHKDW("MismoPalo",UHTPGPRUJA,ROKSCTPBNI)==true){
						log(false,"Har�a SRCGCMADME con otra carta del mismo SGCSHJVERI");
						GMLVJEFHPL=false;
					}
					else{
						log(false,"NO har�a SRCGCMADME con otra carta del mismo SGCSHJVERI");
						//GMLVJEFHPL=true;
						if (TVYNYTCQYW.SGCSHJVERI==VDKOVQXHON[0].SGCSHJVERI)
						{
							GMLVJEFHPL=true;
						}
						else
						{
							if (IMVFJBDBXG(ROKSCTPBNI)==true){
								GMLVJEFHPL=false;				
							}
							else{
								GMLVJEFHPL=true;
							}
						}
						
					}
				}
				
			}			
		}
		else
		{
		
			JEOOIEYAWD.splice(0,4);
			for (i=0;i<=VDKOVQXHON.length-1;i++){
				JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[i].SGCSHJVERI,VDKOVQXHON[i].VVRCMEUNOJ,VDKOVQXHON[i].jugador ));
				//log(false,JEOOIEYAWD[i].SGCSHJVERI+" - "+JEOOIEYAWD[i].VVRCMEUNOJ+" - "+JEOOIEYAWD[i].jugador);
			}
			
			if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true){
				GMLVJEFHPL=true;
			}
			else{
				
				
				JEOOIEYAWD.splice(0,4);
				for (i=0;i<=VDKOVQXHON.length-1;i++){
					JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[i].SGCSHJVERI,VDKOVQXHON[i].VVRCMEUNOJ,VDKOVQXHON[i].jugador ));
					//log(false,JEOOIEYAWD[i].SGCSHJVERI+" - "+JEOOIEYAWD[i].VVRCMEUNOJ+" - "+JEOOIEYAWD[i].jugador);
				}
				JEOOIEYAWD.push(new UYOMGORTXR(TVYNYTCQYW.SGCSHJVERI,TVYNYTCQYW.VVRCMEUNOJ,UHTPGPRUJA ));
				//log(false,JEOOIEYAWD[JEOOIEYAWD.length-1].SGCSHJVERI+" - "+JEOOIEYAWD[JEOOIEYAWD.length-1].VVRCMEUNOJ+" - "+JEOOIEYAWD[JEOOIEYAWD.length-1].jugador);
				
				if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true){
					GMLVJEFHPL=true;
				}
				else{
					if (BNKCXIHKDW("OtroPalo",UHTPGPRUJA,ROKSCTPBNI)==true){
						GMLVJEFHPL=false;
					}
					else{
						GMLVJEFHPL=true;
					}
				}
			}
		}
	}
	
	return GMLVJEFHPL;
	
}

log=function(MYQCQNOJGH,RPHWVBBGIM){
	
	if (MYQCQNOJGH==true)
	{
		////console.log(RPHWVBBGIM);
	}	
}

BNKCXIHKDW=function(WIXBCPBSJI,UHTPGPRUJA,ROKSCTPBNI){
	
	var i;
	var u;
	var IRFWBJNIMN;
	var JEOOIEYAWD=[];
	
	IRFWBJNIMN=false;
	if (WIXBCPBSJI=="MismoPalo")
	{
		for (i=0;i<=ROKSCTPBNI.length-1;i++)
		{
			if(IRFWBJNIMN==false){
			JEOOIEYAWD.splice(0,4);
			for (u=0;u<=VDKOVQXHON.length-1;u++){
				JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[u].SGCSHJVERI,VDKOVQXHON[u].VVRCMEUNOJ,VDKOVQXHON[u].jugador ));
			}
			
			if (VDKOVQXHON[0].SGCSHJVERI==ROKSCTPBNI[i].SGCSHJVERI){
				JEOOIEYAWD.push(new UYOMGORTXR(ROKSCTPBNI[i].SGCSHJVERI,ROKSCTPBNI[i].VVRCMEUNOJ,UHTPGPRUJA ));
				if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true){
					IRFWBJNIMN=true;
					break;
				}			
			}	
			}		
		}	
	}

	if (WIXBCPBSJI=="MismoPaloSinBaza")
	{
		for (i=0;i<=ROKSCTPBNI.length-1;i++)
		{
			if(IRFWBJNIMN==false){
			JEOOIEYAWD.splice(0,4);
			for (u=0;u<=VDKOVQXHON.length-1;u++){
				JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[u].SGCSHJVERI,VDKOVQXHON[u].VVRCMEUNOJ,VDKOVQXHON[u].jugador ));
			}
			
			if (VDKOVQXHON[0].SGCSHJVERI==ROKSCTPBNI[i].SGCSHJVERI){
				JEOOIEYAWD.push(new UYOMGORTXR(ROKSCTPBNI[i].SGCSHJVERI,ROKSCTPBNI[i].VVRCMEUNOJ,UHTPGPRUJA ));
				if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true){
					IRFWBJNIMN=true;
					break;
				}			
			}	
			}		
		}	
	}

	
	if (WIXBCPBSJI=="OtroPalo")
	{
		for (i=0;i<=ROKSCTPBNI.length-1;i++){
			if(IRFWBJNIMN==false){
			JEOOIEYAWD.splice(0,4);
			for (u=0;u<=VDKOVQXHON.length-1;u++){
				JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[u].SGCSHJVERI,VDKOVQXHON[u].VVRCMEUNOJ,VDKOVQXHON[u].jugador ));
			}
			
			if (VDKOVQXHON[0].SGCSHJVERI!=ROKSCTPBNI[i].SGCSHJVERI){
				JEOOIEYAWD.push(new UYOMGORTXR(ROKSCTPBNI[i].SGCSHJVERI,ROKSCTPBNI[i].VVRCMEUNOJ,UHTPGPRUJA ));
				if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true){
					IRFWBJNIMN=true;
					break;
				}			
			}	
			}
		}	
	
	}
	
	return IRFWBJNIMN;
	
}

IMVFJBDBXG=function(ROKSCTPBNI){
	
	
	var i;
	var GMLVJEFHPL;
	GMLVJEFHPL=false;
	for (i=0;i<=ROKSCTPBNI.length-1;i++){
		if (ROKSCTPBNI[i].SGCSHJVERI==VDKOVQXHON[0].SGCSHJVERI){
			GMLVJEFHPL=true;
			break;
		}	
	}
	return GMLVJEFHPL;
	
}


VMLEORHBGI=function(MAUODEDWED,UHTPGPRUJA){
	
	
	var i;
	var TTJFVWDTMG;
	var LECTUTFGKY;
	var QJXRLWRPYD;
	var ESHLDBNEQI
	
		
		for (i=0;i<=MAUODEDWED.length-1;i++)
		{
	
		
		//log(false,"Dentro-- "+ MAUODEDWED[i].SGCSHJVERI +" - "+MAUODEDWED[i].VVRCMEUNOJ+" - "+MAUODEDWED[i].jugador);
		
			if (i==0){
				QJXRLWRPYD=MAUODEDWED[i].VVRCMEUNOJ;
				ESHLDBNEQI=MAUODEDWED[i].SGCSHJVERI;
				TTJFVWDTMG=MAUODEDWED[i].jugador;				
			}
		
			if ( (MAUODEDWED[i].VVRCMEUNOJ>QJXRLWRPYD && MAUODEDWED[i].SGCSHJVERI==ESHLDBNEQI)
				|| (  MAUODEDWED[i].SGCSHJVERI==TGTQPBEQFR && ESHLDBNEQI!=TGTQPBEQFR )
			)
			{

			QJXRLWRPYD=MAUODEDWED[i].VVRCMEUNOJ;
			ESHLDBNEQI=MAUODEDWED[i].SGCSHJVERI;
			TTJFVWDTMG=MAUODEDWED[i].jugador;
			
			
			}
			
			
		}
		
			
		if (UHTPGPRUJA==1){
			if (TTJFVWDTMG==1){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==2){
				LECTUTFGKY=false;
			}
			if (TTJFVWDTMG==3){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==4){
				LECTUTFGKY=false;
			}			
		}
		if (UHTPGPRUJA==2){
			if (TTJFVWDTMG==2){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==3){
				LECTUTFGKY=false;
			}
			if (TTJFVWDTMG==4){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==1){
				LECTUTFGKY=false;
			}			
		}
		if (UHTPGPRUJA==3){
			if (TTJFVWDTMG==3){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==4){
				LECTUTFGKY=false;
			}
			if (TTJFVWDTMG==1){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==2){
				LECTUTFGKY=false;
			}			
		}
		if (UHTPGPRUJA==4){
			if (TTJFVWDTMG==4){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==1){
				LECTUTFGKY=false;
			}
			if (TTJFVWDTMG==2){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==3){
				LECTUTFGKY=false;
			}			
		}	

	return LECTUTFGKY;
	
}
HHOPUSIABJ=function(HGCJHQJCEI){
	
	var DNNXCWARGV="D";
	log(true,"Dentro de DevuelveUbicacion "+TFSXFTYVGQ+" "+HGCJHQJCEI)
	////console.log("Dentro de DevuelveUbicacion "+TFSXFTYVGQ+" "+HGCJHQJCEI);
	if(TFSXFTYVGQ==1)
	{
		if (HGCJHQJCEI==1){
			DNNXCWARGV="D"
		}
		if (HGCJHQJCEI==2){
			DNNXCWARGV="R"
		}
		if (HGCJHQJCEI==3){
			DNNXCWARGV="U"
		}
		if (HGCJHQJCEI==4){
			DNNXCWARGV="L"
		}	
	}
	
	if(TFSXFTYVGQ==2)
	{
		if (HGCJHQJCEI==2){
			DNNXCWARGV="D"
		}
		if (HGCJHQJCEI==3){
			DNNXCWARGV="R"
		}
		if (HGCJHQJCEI==4){
			DNNXCWARGV="U"
		}
		if (HGCJHQJCEI==1){
			DNNXCWARGV="L"
		}
	}

	if(TFSXFTYVGQ==3)
	{
		if (HGCJHQJCEI==3){
			DNNXCWARGV="D"
		}
		if (HGCJHQJCEI==4){
			DNNXCWARGV="R"
		}
		if (HGCJHQJCEI==1){
			DNNXCWARGV="U"
		}
		if (HGCJHQJCEI==2){
			DNNXCWARGV="L"
		}
	}

	if(TFSXFTYVGQ==4)
	{
		if (HGCJHQJCEI==4){
			DNNXCWARGV="D"
		}
		if (HGCJHQJCEI==1){
			DNNXCWARGV="R"
		}
		if (HGCJHQJCEI==2){
			DNNXCWARGV="U"
		}
		if (HGCJHQJCEI==3){
			DNNXCWARGV="L"
		}
	}	
	
	log(false,"Va a RTOSLKFWHC.."+DNNXCWARGV);
	////console.log("Dentro de DevuelveUbicacion DEVUELVE "+DNNXCWARGV);
	return DNNXCWARGV;
}


JHIEHWIMCB=function(UBWRXKMTQN){
	var SSUNXNEEHN;
	
	if(TFSXFTYVGQ==1)
	{
		if (UBWRXKMTQN=="D"){
			SSUNXNEEHN=1;
		}
		if (UBWRXKMTQN=="R"){
			SSUNXNEEHN=2;
		}
		if (UBWRXKMTQN=="U"){
			SSUNXNEEHN=3;
		}
		if (UBWRXKMTQN=="L"){
			SSUNXNEEHN=4;
		}	
	}
	
	if(TFSXFTYVGQ==2)
	{
		if (UBWRXKMTQN=="D"){
			SSUNXNEEHN=2;
		}
		if (UBWRXKMTQN=="R"){
			SSUNXNEEHN=3;
		}
		if (UBWRXKMTQN=="U"){
			SSUNXNEEHN=4;
		}
		if (UBWRXKMTQN=="L"){
			SSUNXNEEHN=1;
		}	
	}
	
	if(TFSXFTYVGQ==3)
	{
		if (UBWRXKMTQN=="D"){
			SSUNXNEEHN=3;
		}
		if (UBWRXKMTQN=="R"){
			SSUNXNEEHN=4;
		}
		if (UBWRXKMTQN=="U"){
			SSUNXNEEHN=1;
		}
		if (UBWRXKMTQN=="L"){
			SSUNXNEEHN=2;
		}	
	}

	if(TFSXFTYVGQ==4)
	{
		if (UBWRXKMTQN=="D"){
			SSUNXNEEHN=4;
		}
		if (UBWRXKMTQN=="R"){
			SSUNXNEEHN=1;
		}
		if (UBWRXKMTQN=="U"){
			SSUNXNEEHN=2;
		}
		if (UBWRXKMTQN=="L"){
			SSUNXNEEHN=3;
		}	
	}	
	
	return SSUNXNEEHN;
}

NABJPTUWJA=function(RDBQUAVHEP){
	var i;
	var DNNXCWARGV;
	
	if(TFSXFTYVGQ==1)
	{
		if (RDBQUAVHEP==1){
			DNNXCWARGV="D"
		}
		if (RDBQUAVHEP==2){
			DNNXCWARGV="R"
		}
		if (RDBQUAVHEP==3){
			DNNXCWARGV="U"
		}
		if (RDBQUAVHEP==4){
			DNNXCWARGV="L"
		}	
	}
	
	if(TFSXFTYVGQ==2)
	{
		if (RDBQUAVHEP==2){
			DNNXCWARGV="D"
		}
		if (RDBQUAVHEP==3){
			DNNXCWARGV="R"
		}
		if (RDBQUAVHEP==4){
			DNNXCWARGV="U"
		}
		if (RDBQUAVHEP==1){
			DNNXCWARGV="L"
		}
	}

	if(TFSXFTYVGQ==3)
	{
		if (RDBQUAVHEP==3){
			DNNXCWARGV="D"
		}
		if (RDBQUAVHEP==4){
			DNNXCWARGV="R"
		}
		if (RDBQUAVHEP==1){
			DNNXCWARGV="U"
		}
		if (RDBQUAVHEP==2){
			DNNXCWARGV="L"
		}
	}

	if(TFSXFTYVGQ==4)
	{
		if (RDBQUAVHEP==4){
			DNNXCWARGV="D"
		}
		if (RDBQUAVHEP==1){
			DNNXCWARGV="R"
		}
		if (RDBQUAVHEP==2){
			DNNXCWARGV="U"
		}
		if (RDBQUAVHEP==3){
			DNNXCWARGV="L"
		}
	}	

	
	if (DNNXCWARGV=="D"){
		for(i=0;i<=FXGSEGRXKC.length-1;i++){
			FXGSEGRXKC[i].TNFAGGMKXD.x=YMHIHSNADE.world.centerX+(i/2);
			FXGSEGRXKC[i].TNFAGGMKXD.y=YMHIHSNADE.world.height-(PPLOSJIWHO)-(FXGSEGRXKC[i].TNFAGGMKXD.height/2)-(YAJVUBPNNW*2)-70;	
		}
	}
	
	if (DNNXCWARGV=="U"){
		for(i=0;i<=FXGSEGRXKC.length-1;i++){
			FXGSEGRXKC[i].TNFAGGMKXD.x=YMHIHSNADE.world.centerX+(i/2);
			FXGSEGRXKC[i].TNFAGGMKXD.y=(FXGSEGRXKC[i].TNFAGGMKXD.height)+(FXGSEGRXKC[i].TNFAGGMKXD.height/2)+(YAJVUBPNNW*2);	;	
		}
	}
	
	if (DNNXCWARGV=="L"){
		for(i=0;i<=FXGSEGRXKC.length-1;i++){
			FXGSEGRXKC[i].TNFAGGMKXD.x=(FXGSEGRXKC[i].TNFAGGMKXD.height)+(FXGSEGRXKC[i].TNFAGGMKXD.height/2)+(YAJVUBPNNW*2)+(i/2);
			FXGSEGRXKC[i].TNFAGGMKXD.y=PXEBTYBHGS;	
			//FXGSEGRXKC[i].TNFAGGMKXD.angle=90;
		}
	}

	if (DNNXCWARGV=="R"){
		for(i=0;i<=FXGSEGRXKC.length-1;i++){
			FXGSEGRXKC[i].TNFAGGMKXD.x=YMHIHSNADE.world.width-(FXGSEGRXKC[i].TNFAGGMKXD.height)-(FXGSEGRXKC[i].TNFAGGMKXD.height/2)-(YAJVUBPNNW*3)+(i/2);
			FXGSEGRXKC[i].TNFAGGMKXD.y=PXEBTYBHGS;	
		}
	}
	
};


SESLFOEJHY=function(){
		//var COIVBWRMCC=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.width;
		var i;
		var u;
		var VEFCIYHBGC;
		
		for(i=0;i<=FXGSEGRXKC.length-1;i++){
					
			var s = YMHIHSNADE.add.tween(FXGSEGRXKC[i].TNFAGGMKXD);
			s.to( {x:(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)  +  COIVBWRMCC  )    /2)+      (0 *(COIVBWRMCC+ YAJVUBPNNW))+(i/2),
			y:PXEBTYBHGS}, 500, KYFMRVNHIQ);	
			s.start();
			
		}
		

		
		if (EGPDVIEJEL==true)
		{

				
				XSWEXRHSJY();
				
			//
			

			
		}
		else
		{
			JQSOOBSDDS();
			//log(true,"IA Desde Mover FXGSEGRXKC");
			//console.log("superorganizador desde mover mazo monojugador");
			GIDSSFEUNT();
			//raka
			//var TKXPPGUPVV = YMHIHSNADE.time.create(false);
			/*var PLKOPTSHBQ=XNYRSXYRGF(DVNRTQIWGL);
			//var	TKXPPGUPVV = YMHIHSNADE.time.create(false);
			TKXPPGUPVV.stop();
			TKXPPGUPVV.add(PLKOPTSHBQ, function(){
				TKXPPGUPVV.stop(); 
			//console.log("IA DESDE mover mazo");
			IA(TFSXFTYVGQ,false);} );
			TKXPPGUPVV.start();		*/	
		}
		
		IEQDMBJCAY.revive();
		YGTNAODFHW.revive();
		//CUUKQAGFEB.x=QETACVSHAR;
		//CUUKQAGFEB.revive();

};

XSWEXRHSJY=function()
{
	var i;
	
	
	if (MYQBNBVHKU==false)//1.0.6
	{
	
			var GXNRNMAAKW=function( DFBVDPETGO,AURESXCGMK,MQUGCIUQII,
				OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
				 this.DFBVDPETGO=DFBVDPETGO
				 this.AURESXCGMK=AURESXCGMK
				 this.MQUGCIUQII=MQUGCIUQII
									 
				 this.OYJAHGADFQ=OYJAHGADFQ
				 this.OJPXTRQDKS=OJPXTRQDKS
				 this.LYHKNIMVEB=LYHKNIMVEB
				 this.RHOLNWBOXR=RHOLNWBOXR
				 
				 this.EBAPPJFYSW=new Date(Date.now());
			 }
			var QPHHGPRJAI=[];
			QPHHGPRJAI.splice(0,1000);

				
			var OYJAHGADFQ=Math.random()*100000;
			var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,socket.id,MQUGCIUQII,
				OYJAHGADFQ,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK,DFBVDPETGO,'BKEMJDLQQM');
			NBEJWDVLLV.push(KCPHFPSPLQ);
			QPHHGPRJAI.push(KCPHFPSPLQ);

			if (KYLIAIETHX==false)
			{
				socket.emit('Consola','Envio listo desconecta '+TFSXFTYVGQ)
			}
			
			socket.emit('BKEMJDLQQM',QPHHGPRJAI[0],
			 function(XQLEOGMJYG)
			 {			 
				EXBCVLOIYJ(XQLEOGMJYG,'BKEMJDLQQM');
			 }
			);						
			QPHHGPRJAI.splice(0,1000);	

		WRGLRODAXY();
		
		/////////////////////////////////////////////////////////////
		//Testando
		//1.0.4 Uno por otro
		////console.log("Llamada 1");
		//1.0.9 IOJCRKJSRL();
		//LRYVPILWKS();
		

		//Testando
		
	}
}

WRGLRODAXY=function()
{
	var i;
	
		if (ESKTEXAVHU==TFSXFTYVGQ)
		{
			for (i=0;i<=XPBCVAGCDQ.length-1;i++)
			{
				if (XPBCVAGCDQ[i].XJARYUVBCB==true )
				{
					//socket.emit('BKEMJDLQQM', DFBVDPETGO,XPBCVAGCDQ[i].AURESXCGMK);
					
					
						var GXNRNMAAKW=function( DFBVDPETGO,AURESXCGMK,MQUGCIUQII,
						OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
						 this.DFBVDPETGO=DFBVDPETGO
						 this.AURESXCGMK=AURESXCGMK
						 this.MQUGCIUQII=MQUGCIUQII
											 
						 this.OYJAHGADFQ=OYJAHGADFQ
						 this.OJPXTRQDKS=OJPXTRQDKS
						 this.LYHKNIMVEB=LYHKNIMVEB
						 this.RHOLNWBOXR=RHOLNWBOXR
						 
						 this.EBAPPJFYSW=new Date(Date.now());
					 }
					var QPHHGPRJAI=[];
					QPHHGPRJAI.splice(0,1000);

						
					var OYJAHGADFQ=Math.random()*100000;
					var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,XPBCVAGCDQ[i].AURESXCGMK,MQUGCIUQII,
						OYJAHGADFQ,XPBCVAGCDQ[i].AURESXCGMK,DFBVDPETGO,'BKEMJDLQQM');
					NBEJWDVLLV.push(KCPHFPSPLQ);
					QPHHGPRJAI.push(KCPHFPSPLQ);

					if (KYLIAIETHX==false)
					{
						socket.emit('Consola','Envio listo desconectados al inicio '+XPBCVAGCDQ[i].AURESXCGMK)
					}
					
					socket.emit('BKEMJDLQQM',QPHHGPRJAI[0],
					 function(XQLEOGMJYG)
					 {			 
						EXBCVLOIYJ(XQLEOGMJYG,'BKEMJDLQQM');
					 }
					);						
					QPHHGPRJAI.splice(0,1000);	
					
				}
			}
			
		}
	
}

LRYVPILWKS=function()
{
	var i;
	var OLJVOASCTV;
	var u;
	var VEFCIYHBGC;
	var UHYCGYFWYJ=0;
	
	//console.log("LRYVPILWKS.."+XPBCVAGCDQ.length);
	KYDWXPGHVY.splice(0,1000);
	for (i=0;i<=XPBCVAGCDQ.length-1;i++)
	{
		if (XPBCVAGCDQ[i].XJARYUVBCB==true)
		{
			
			////console.log("¡Desconectado!.."+i);
			VEFCIYHBGC=false;
			////console.log("Bucle For");
			for ( var u=0;u<=KYDWXPGHVY.length-1;u++)
			{
					
				////console.log("compara "+ ArrayJugadoresDesconectadosID[u]+" con "+XPBCVAGCDQ[i].AURESXCGMK);
				if ( EstaArray(KYDWXPGHVY[u].AURESXCGMK,XPBCVAGCDQ[i].AURESXCGMK))  //MULTIPLEJUGADOR
				{
					VEFCIYHBGC=true;
				}
			
			}
			
			if (VEFCIYHBGC==false)
			{
				
				KYDWXPGHVY.push( new UVYJLLYCYD ( (i+1),XPBCVAGCDQ[i].AURESXCGMK ));
				//ArrayJugadoresDesconectadosID.push(XPBCVAGCDQ[i].AURESXCGMK);
			}

			
			
		}
		else
		{
			
			u=KYDWXPGHVY.length;
			while (u--)
			{	
	
				if (EstaArray(KYDWXPGHVY[u].AURESXCGMK,XPBCVAGCDQ[i].AURESXCGMK)) //MULTIPLEJUGADOR
				{
					KYDWXPGHVY.splice(u,1);					
				}		
			}
			

			
		}
			
	}
	
}
QYYXUWQADX=function(TXLWIIINGQ){

	//2.0.1 DCOXIXEBRJ.splice(0,100); clave:reparto
	//2.0.1 JEHYBALODM.splice(0,100); clave:reparto
	
	vVecesMinimizado=0;
	vVecesReconectado=0;
	
	var s = YMHIHSNADE.add.tween(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		s.to( {x:(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6))  - (YAJVUBPNNW*8) +  COIVBWRMCC)/2)+ (1 *(COIVBWRMCC+ YAJVUBPNNW))
		,y:PXEBTYBHGS,
		angle : 90
		}, 500, KYFMRVNHIQ);		
		
		s.onComplete.add(SESLFOEJHY,this)		
		
		s.start();
		
		
		
		FBSDMRLVEL.push(new TVYNYTCQYW(FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI,FXGSEGRXKC[FXGSEGRXKC.length-1].UUOPKETETA,FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF,FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD,5,FXGSEGRXKC[FXGSEGRXKC.length-1].jugador,null,null,FXGSEGRXKC[FXGSEGRXKC.length-1].MQUGCIUQII));
		NAYBJTKIKA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		//FBSDMRLVEL[FBSDMRLVEL.length-1].TNFAGGMKXD.moveDown();
		COTMMCVJWP.add(FBSDMRLVEL[FBSDMRLVEL.length-1].TNFAGGMKXD);
		YMHIHSNADE.world.bringToTop(GSXGWASLIY);
		YMHIHSNADE.world.bringToTop(RXKKPILDQT);
		TGTQPBEQFR=FBSDMRLVEL[FBSDMRLVEL.length-1].SGCSHJVERI;
		
		//POUWEIOUWQ.frame=FBSDMRLVEL[0].TNFAGGMKXD.frame
		//FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.tint =  Phaser.Color.getColor(100,100,100);
		FXGSEGRXKC.pop();
		
		if (EGPDVIEJEL==true)
		{
			DHJGJHGWCY.revive();
			GJHWUYGCBN.revive();
			UYIUYIUYIU.revive();
			BNVUWCOWEC.revive();
		}
		
		HGMNXSIAPV=true;
		console.log("RECUPERA_ sacatriunfo");
		OGGWQECXBK(TXLWIIINGQ,false,false); //QYYXUWQADX
		//NUWTGXUUTS();
		
		//alert(DVNRTQIWGL);
		
		HayPROS();
		

		
		
		//JQSOOBSDDS();
};

HayPROS=function()
{
	var i;
	var Cuenta=0;
	
	if (XPBCVAGCDQ.length>0)
	{
		for (i=0;i<=XPBCVAGCDQ.length-1;i++)
		{
			if (XPBCVAGCDQ[i].NHWYTYUSYG==true || (XPBCVAGCDQ[i].OIUIOWCHVW>=1 && XPBCVAGCDQ[i].OIUIOWCHVW<=5))
			{
				Cuenta++;
			}
		}
	}
	
	//console.log("CUENTA "+Cuenta)
	
	if (Cuenta>=1)
	{
		if (JVQXQGYDHH==0 && CNCCBHQJKL==0 && EVAILWGGKX==false && UHHXSNXXJK==0 && PXGXKDDNFK==0) 
		{
			EABXADHEVT("_HayPROS");
		}
	}
	else
	{
		EABXADHEVT("_HayProfesionales");
			
	}
}


function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

	if (spriteA.name!=spriteB.name){
	    return Phaser.Rectangle.intersects(boundsA, boundsB);
	}
	else{
		return false;
	}

}



function WTNGDOQIWY(sprite) {
  var s;
  var i;
//  log(false,"co");
//log(false,"mide moviendo.. "+AGKVNAGGLB.length);
	for (var i=AGKVNAGGLB.length-1;i>=0;i--){
	   if (checkOverlap(sprite, AGKVNAGGLB[i].TNFAGGMKXD))
		{
			AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(175,200,111);
		}
		else{
			//if (DVNRTQIWGL==TFSXFTYVGQ){
				//IXLQLKYFRI(sprite);
			AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
			//IXLQLKYFRI();
			//}
			//else
			//{
			//	AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
			//}			
		}
		//IXLQLKYFRI();
		//sprite.tint=Phaser.Color.getColor(255,255,255);
	}	
}

function IHSCVAKSDJ(sprite) {
  var s;
  var CYDMXACGSH=false;	
  var i;
  var k;
  var text;
	////console.log("ESTADO CONEXION "+socket.socket.connected);
	//log(false,"KEYYYYYYYYYYYYYYYYYYYY "+sprite.name);
	//log(false,"elimina");
	//console.log("HAY CACHE "+YMHIHSNADE.cache.checkImageKey('publi'));
	//socket.emit('Consola',"Paro Drag");
	
	//console.log("Drag: Soy "+TFSXFTYVGQ+" Turno: "+DVNRTQIWGL+" Control:"+ESKTEXAVHU+" Reconectando: "+DUGDLNBOGK+" AGTXFNIKQD "+LUCRWXJMDR)
	
	

	
	//if (EGPDVIEJEL==true)
	//{	
		//if (KYLIAIETHX==false)
		//{
		//	socket.emit("Consola","0: "+XPBCVAGCDQ[0].AURESXCGMK+" 1: "+XPBCVAGCDQ[1].AURESXCGMK+" 2: "+XPBCVAGCDQ[2].AURESXCGMK+" 3: //"+XPBCVAGCDQ[3].AURESXCGMK);
		//}
	//}
	
	if (OTGNMRHTVK()==false) //2.0.7
	
		//(!PQUFIBKJJH.isRunning && !LJRRHVSVKD.isRunning && !LCYAHFBDTT.isRunning && !NEPGDYQDEI.isRunning && !HHBPAROITT.isRunning && !EWXBTDLSHW.isRunning && !BDEFDQUJJE.isRunning && !CKOUBGTDUF.isRunning && !JLFYUAKDIJ.isRunning)
	{
	
		/*for (i=0;i<=AGKVNAGGLB.length-1;i++){
			AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
		}*/
		IXLQLKYFRI();

		for (i=0;i<=AGKVNAGGLB.length-1;i++){
		   if (i!=AGKVNAGGLB.length-1){
			   if (checkOverlap(sprite, AGKVNAGGLB[i].TNFAGGMKXD) && checkOverlap(sprite, AGKVNAGGLB[i+1].TNFAGGMKXD))
			   {
				VOHGWKGYGY(sprite,AGKVNAGGLB,AGKVNAGGLB[i+1].NPYBJSHIFL-0.5)
				CYDMXACGSH=true;			
				
				break;
			   }
			   else
			   {
					if (checkOverlap(sprite, AGKVNAGGLB[i].TNFAGGMKXD)) {					
						VOHGWKGYGY(sprite,AGKVNAGGLB,AGKVNAGGLB[i].NPYBJSHIFL-0.5)
						CYDMXACGSH=true;					
						break;
					}
					else{
						//log(false,"Regresa a casa");
					}
				}
				
				//sprite.tint=Phaser.Color.getColor(255,255,255);
			}
			else
			{
				if (checkOverlap(sprite, AGKVNAGGLB[i].TNFAGGMKXD)) {		
					log(false,"La �ltima");	
					VOHGWKGYGY(sprite,AGKVNAGGLB,AGKVNAGGLB[i].NPYBJSHIFL+0.5)	
					CYDMXACGSH=true;					
					break;
				}
				else{
					//log(false,"Regresa a casa 2");	
				}
				
				
			}
		}
		
		if (KYLIAIETHX==false)
		{
		 MensajeError2("Drag: Soy "+TFSXFTYVGQ+" Turno: "+DVNRTQIWGL+" Control:"+ESKTEXAVHU+" Reconectando: "+FReconectando()+" AGTXFNIKQD "+LUCRWXJMDR+" Col:"+CYDMXACGSH);
		}
		console.log("ID "+AGKVNAGGLB[0].MQUGCIUQII);
		if (CYDMXACGSH==false)
		{
			for (i=0;i<=AGKVNAGGLB.length-1;i++){
				if (sprite.name==AGKVNAGGLB[i].TNFAGGMKXD.name){
					var posicionX=WIEVLYANFM("D",AGKVNAGGLB[i].NPYBJSHIFL);
					var posicionY=FIGQBSJQGA("D",AGKVNAGGLB[i].NPYBJSHIFL)
					break;
				}
			}
			
			//ape if(ValidaMovimientoJugadorSinActualizarRapido(LUCRWXJMDR,TFSXFTYVGQ)==true)
			//{
				//como quiero que todo siga igual, pong este if, que me fastidiaba los turnos, y en el siguiente, la misma condici�n.
				log(true, "LON "+VDKOVQXHON.length)
				log(true,"turnoOOO ANTES "+DVNRTQIWGL);
				//EVHFMHFMJU(TFSXFTYVGQ);
				
				log(true,"turnoOOO DESPUES "+DVNRTQIWGL);
			//}
			//else
			//{
			//	////console.log("ERRO: NO puedo mover desde parar drag "+LUCRWXJMDR+" "+TFSXFTYVGQ);
			//}
			
			log(true,"turnoOOO "+DVNRTQIWGL);
			////console.log("PQUFIBKJJH: "+PQUFIBKJJH.isRunning); 
			////console.log("LJRRHVSVKD: "+LJRRHVSVKD.isRunning); 
			////console.log("LCYAHFBDTT: "+LCYAHFBDTT.isRunning); 
			////console.log("NEPGDYQDEI: "+NEPGDYQDEI.isRunning); 
			////console.log("HHBPAROITT: "+HHBPAROITT.isRunning); 
			////console.log("EWXBTDLSHW: "+EWXBTDLSHW.isRunning); 
			////console.log("BDEFDQUJJE: "+BDEFDQUJJE.isRunning); 
			////console.log("CKOUBGTDUF: "+CKOUBGTDUF.isRunning); 
			////console.log("JLFYUAKDIJ: "+JLFYUAKDIJ.isRunning); 
			////console.log("Marcadores: "+UHHXSNXXJK+" "+PXGXKDDNFK+" "+JLVDFTPUNI); 
			//for (var k=0;k<=KTBOJTXFEU.length-1;k++){
				////console.log("SEM: "+KTBOJTXFEU[k].AGTXFNIKQD+" "+KTBOJTXFEU[k].SSUNXNEEHN);
			//}	

			////console.log("KXAWTTIEGG: "+MYQBNBVHKU);
			////console.log("DVNRTQIWGL: "+DVNRTQIWGL);
			////console.log("Soy: "+TFSXFTYVGQ);
			////console.log("Son Vueltas: "+EVAILWGGKX);
			////console.log("Marcadores: "+UHHXSNXXJK+" - "+PXGXKDDNFK);
			
		/*
		*/
		
			//console.log("Antes condiciones");
			if ( ( Math.abs(sprite.x-posicionX)<=AGKVNAGGLB[AGKVNAGGLB.length-1].TNFAGGMKXD.width*1.5 &&
				Math.abs(sprite.y-posicionY)<=AGKVNAGGLB[AGKVNAGGLB.length-1].TNFAGGMKXD.height*1.5 && DVNRTQIWGL==TFSXFTYVGQ)	&& 
				(!PQUFIBKJJH.isRunning && !LJRRHVSVKD.isRunning && !LCYAHFBDTT.isRunning && !NEPGDYQDEI.isRunning && !HHBPAROITT.isRunning 
					&& !EWXBTDLSHW.isRunning && !BDEFDQUJJE.isRunning && !CKOUBGTDUF.isRunning && !JLFYUAKDIJ.isRunning
					&& !PTHQXTTWIH.isRunning  && !IRQUWMEVQL.isRunning && !HIFQJUUVEU.isRunning && !JKSTORAHAM.isRunning
				&& !TKXWTMCBFU.isRunning && !UEIQAMIDWY.isRunning && !GCKCAMPPHX.isRunning && !CFFVTFENDF.isRunning) &&
				MYQBNBVHKU==true 
				&& OTGNMRHTVK()==false //1.0.9
				&& FReconectando()==false //1.0.9
				&& TLGMUNNDGH==false
				&& ( (EGPDVIEJEL==true && SNJCSVWFCC()) || EGPDVIEJEL==false) //1.0.9
				&& HMVFLEYPXM.length==0
				)

				//&& ValidaMovimientoJugadorSinActualizarRapido(LUCRWXJMDR,TFSXFTYVGQ)==true 
			{
				//console.log("grrr 1");
				if (XPSRYGDPNI(AGKVNAGGLB[i],TFSXFTYVGQ)==true)
				{
					//console.log("grrr 2");
					//New
					//ape XYXCEMMRDC.push(new NQMQGXXHIL(LUCRWXJMDR,TFSXFTYVGQ) );
					
					//if (ValidaMovimientoJugadorSinActualizar(LUCRWXJMDR,TFSXFTYVGQ)==true) 1.0.9
					//console.log("Validando..");
					if (HQWFFUCQDR(LUCRWXJMDR,TFSXFTYVGQ,MQUGCIUQII)==true) //quito el sinacutalizar
					{
						//console.log("grrr 3");
						TKXPPGUPVV.stop(); //Mucho miedo 29/04/2017
						//1.0.9 KTBOJTXFEU.push(new NQMQGXXHIL(LUCRWXJMDR,TFSXFTYVGQ) );
						////console.log("BLOQUEO DESDE IHSCVAKSDJ "+TFSXFTYVGQ+" "+LUCRWXJMDR);
						
						//1.0.4
						//console.log("Tirando");
						GLFVIKHXMD();
						if (EGPDVIEJEL==false)
						{
							VDKOVQXHON.push(new TVYNYTCQYW(AGKVNAGGLB[i].SGCSHJVERI,AGKVNAGGLB[i].UUOPKETETA,AGKVNAGGLB[i].HVCFEWNDRF,AGKVNAGGLB[i].TNFAGGMKXD,null,TFSXFTYVGQ,null,null,AGKVNAGGLB[i].MQUGCIUQII));//no hace falta la EBAPPJFYSW hora del server
							
							QTIPILDEPH(sprite,"D",LUCRWXJMDR,TFSXFTYVGQ,false);
							AGKVNAGGLB.splice(i,1);	
							OROGRNBISW(AGKVNAGGLB,"D");
						}
						
						
						
						
						
								
						
						if (EGPDVIEJEL==true)
						{
							
							
							/////////////
							AJFQVFUKAP=false; //1.0.8
							
							var QKVJASWVEO=Date.now();
							var GXNRNMAAKW=function( DFBVDPETGO,TFSXFTYVGQ,AAJNQWXHMY,Turno, TKWCTNGROU, EVAILWGGKX,KXAWTTIEGG,OBTBPOULAV,AURESXCGMK,WWKVHIMWYD,MQUGCIUQII,
								OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
								 this.DFBVDPETGO=DFBVDPETGO
								 this.TFSXFTYVGQ=TFSXFTYVGQ
								 this.AAJNQWXHMY=AAJNQWXHMY
								 this.Turno=Turno
								 this.AGTXFNIKQD=TKWCTNGROU
								 this.EVAILWGGKX=EVAILWGGKX
								 this.KXAWTTIEGG=KXAWTTIEGG
								 this.OBTBPOULAV=OBTBPOULAV
								 this.AURESXCGMK=AURESXCGMK
								 this.WWKVHIMWYD=WWKVHIMWYD
								 this.MQUGCIUQII=MQUGCIUQII
								 
								 this.OYJAHGADFQ=OYJAHGADFQ
								 this.OJPXTRQDKS=OJPXTRQDKS
								 this.LYHKNIMVEB=LYHKNIMVEB
								 this.RHOLNWBOXR=RHOLNWBOXR
								 
								 this.EBAPPJFYSW=new Date(Date.now());
							 }
							var QPHHGPRJAI=[];
							QPHHGPRJAI.splice(0,1000);
		 
								
							var OYJAHGADFQ=Math.random()*100000;
							var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,TFSXFTYVGQ,AGKVNAGGLB[i].TNFAGGMKXD.name,DVNRTQIWGL, LUCRWXJMDR, EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),
								XPBCVAGCDQ[TFSXFTYVGQ-1].OBTBPOULAV,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK,
								XPBCVAGCDQ[TFSXFTYVGQ-1].WWKVHIMWYD,MQUGCIUQII,
								OYJAHGADFQ,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK,DFBVDPETGO,'RYUDYPPOXW');
							NBEJWDVLLV.push(KCPHFPSPLQ);
							QPHHGPRJAI.push(KCPHFPSPLQ);

								
							socket.emit('RYUDYPPOXW',QPHHGPRJAI[0],
							 function(XQLEOGMJYG)
							 {			 
								EXBCVLOIYJ(XQLEOGMJYG,'RYUDYPPOXW');
								//OROGRNBISW(AGKVNAGGLB,"D");
									/*////console.log("Borrar: Hola"+XQLEOGMJYG+" - "+CartaMovida);
									////console.log("Borrar: Lon "+AGKVNAGGLB.length);
									for (var j=0;j<=AGKVNAGGLB.length-1;j++)
									{
										////console.log("Borrar Recorro "+AGKVNAGGLB[j].name);
										if (AGKVNAGGLB[j].name==CartaMovida)
										{
											////console.log("Borrar: Elimino "+CartaMovida)
											AGKVNAGGLB.splice(j,1);	
											OROGRNBISW(AGKVNAGGLB,"D");
											break;
										}
									}*/
									

							 }
							);						
							QPHHGPRJAI.splice(0,1000);	
  
							
							/////////////							
							
							
							
							
							//socket.emit('RYUDYPPOXW', DFBVDPETGO,TFSXFTYVGQ,AGKVNAGGLB[i].TNFAGGMKXD.name,DVNRTQIWGL, LUCRWXJMDR, EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[TFSXFTYVGQ-1].OBTBPOULAV,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK,XPBCVAGCDQ[TFSXFTYVGQ-1].WWKVHIMWYD) ;
							if (AGKVNAGGLB[i].SGCSHJVERI==TGTQPBEQFR)
							{
								if (AGKVNAGGLB[i].HVCFEWNDRF==1)
								{
									WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,false,false,true,false);
								}
								if (AGKVNAGGLB[i].HVCFEWNDRF==3)
								{
									WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,false,false,false,true);
								}
							}
						}

						
						
					}

				
				}
				

			}
			else
			{
				//console.log("algo no mola");
				//alert("reubica");
				OROGRNBISW(AGKVNAGGLB,"D");
				if (DVNRTQIWGL!=TFSXFTYVGQ  && (Math.abs(sprite.x-posicionX)<=AGKVNAGGLB[AGKVNAGGLB.length-1].TNFAGGMKXD.width &&
				Math.abs(sprite.y-posicionY)<=AGKVNAGGLB[AGKVNAGGLB.length-1].TNFAGGMKXD.height)  ){
		
					
						//  The Text is positioned at 0, 100
						//text = YMHIHSNADE.add.text(0, 0, SVLGSBPKGJ());
						text = IEUIUCYUCC(SVLGSBPKGJ(),40);
					
						/*text.x=YMHIHSNADE.world.centerX;
						text.y=YMHIHSNADE.world.centerY+30
						
						text.anchor.set(0.5);
						text.align = 'center';


						text.font = 'Arial Black';
						text.fontSize = 30;
						text.fontWeight = 'bold';


						text.stroke = '#961918';
						text.strokeThickness = 7;
						text.fill = '#F8E600';	*/	
						

						
						//  It won't start automatically, allowing you to hook it to button events and the like.
						var timertextoturno = YMHIHSNADE.time.create(true);
						timertextoturno.add(1500, FYYEWMEHBU, this,text);
						timertextoturno.start();
						

						//  Set a timerEvent to occur after 3 seconds
						

				}
			}
			
		}
		else
		{
			OROGRNBISW(AGKVNAGGLB,"D");
		}	
	}
	else
	{
		OROGRNBISW(AGKVNAGGLB,"D");
	}		
	
	
}

CGCMEMLMAG=function(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ){
	var UBWRXKMTQN;
	var DWTJCXXKNS;
	var XACEBCSJAB;
	
	//if (UHHXSNXXJK<JLVDFTPUNI && PXGXKDDNFK<JLVDFTPUNI)
	//{
		

		
		var VJGLUDIXWN=LDCCGSIBKW;
		
		log(false,"Intenta robar..");
		if (FXGSEGRXKC.length>0){
		
		DWTJCXXKNS=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD
		UBWRXKMTQN=HHOPUSIABJ(VJGLUDIXWN);
		
		if (UBWRXKMTQN=="U"){
			var XACEBCSJAB=TWJONOKGHC;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			PBHYCULPGK.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="D"){
			var XACEBCSJAB=AGKVNAGGLB;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle;
			NAYBJTKIKA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			RXKKPILDQT.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="L"){
			var XACEBCSJAB=KNVKGHHTYC;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle+90;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			SYXHGDSJDY.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="R"){
			var XACEBCSJAB=CBCNHFGWLU;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle+270;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			BDRJVGFWQH.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}	
		
		log(false,"Tama�o de la mano "+XACEBCSJAB.length);
		
			
			
			XACEBCSJAB.push(new TVYNYTCQYW(FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI,FXGSEGRXKC[FXGSEGRXKC.length-1].UUOPKETETA,FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF,FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD,5,FXGSEGRXKC[FXGSEGRXKC.length-1].jugador,null,null,FXGSEGRXKC[FXGSEGRXKC.length-1].MQUGCIUQII));
			EABXADHEVT('WWYKUMYJBJ');
			
			
			if (UBWRXKMTQN=="D"){
				JQSOOBSDDS();
			}
			
			FXGSEGRXKC.pop();
			
			
			
			var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,99);
			log(false,"X de "+UBWRXKMTQN+" "+NOFEDXHMLS);
			var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,99);
				
			//if (NCKMGYLDRO=="L"){
					//VRLYJAAHUE(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
			if (FXGSEGRXKC.length>0){
				PQUFIBKJJH = YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
				//console.log("FrameBased: "+PQUFIBKJJH.frameBased);
				
						PQUFIBKJJH.to( {x:NOFEDXHMLS
						,y:GHTWROCHVV
						,angle:KKQWKUGGSI
						}
						, BQUYYUASDK, KYFMRVNHIQ);
						PQUFIBKJJH.onComplete.add(//BHRQQCWPGM,this)
							function () {
								OROGRNBISW(XACEBCSJAB,UBWRXKMTQN);
								BHRQQCWPGM(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ); //Truco para poder pasar por par�metro
							}
						);
						if (UBWRXKMTQN=="D")
						{
							YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
						}
						PQUFIBKJJH.start();
			}
			else
			{
				log(false,"No quedan cartas");
				log(false,"FXGSEGRXKC grr: "+FXGSEGRXKC[0].HVCFEWNDRF+" "+FXGSEGRXKC[0].SGCSHJVERI);
			}
			
			if (FBSDMRLVEL.length>0){
				FBSDMRLVEL[FBSDMRLVEL.length-1].TNFAGGMKXD.moveDown();	
			}
		}
	//}
}



BHRQQCWPGM=function(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ){
	var UBWRXKMTQN;
	var DWTJCXXKNS;
	var XACEBCSJAB;
	
	//if (UHHXSNXXJK<JLVDFTPUNI && PXGXKDDNFK<JLVDFTPUNI)
	//{
	
		var VJGLUDIXWN=LDCCGSIBKW+1;
		
		if (FXGSEGRXKC.length>0){
		
		/*log(false,"DVNRTQIWGL: "+DVNRTQIWGL);
		log(false,"DVNRTQIWGL Ficticio: "+VJGLUDIXWN);*/
		if (VJGLUDIXWN>4){
			VJGLUDIXWN=VJGLUDIXWN-4;
		}
		
		//log(false,"DVNRTQIWGL Ficticio Modificicado: "+VJGLUDIXWN);
		DWTJCXXKNS=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD
		
		//log(false,"Robada 2 "+FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF+" de "+FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI);
		
		
		UBWRXKMTQN=HHOPUSIABJ(VJGLUDIXWN);
		//log(false,"STLEOJDWSU: "+UBWRXKMTQN);
		
		if (UBWRXKMTQN=="U"){
			var XACEBCSJAB=TWJONOKGHC;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			PBHYCULPGK.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="D"){
			var XACEBCSJAB=AGKVNAGGLB;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle;
			NAYBJTKIKA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			RXKKPILDQT.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="L"){
			var XACEBCSJAB=KNVKGHHTYC;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle+90;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			SYXHGDSJDY.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="R"){
			var XACEBCSJAB=CBCNHFGWLU;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle+270;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			BDRJVGFWQH.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}	
		
		//if (XACEBCSJAB.length<6){
			XACEBCSJAB.push(new TVYNYTCQYW(FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI,FXGSEGRXKC[FXGSEGRXKC.length-1].UUOPKETETA,FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF,FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD,5,FXGSEGRXKC[FXGSEGRXKC.length-1].jugador,null,null,FXGSEGRXKC[FXGSEGRXKC.length-1].MQUGCIUQII));
			EABXADHEVT('WWYKUMYJBJ');
			
			if (UBWRXKMTQN=="D"){
				JQSOOBSDDS();
			}
			
			FXGSEGRXKC.pop();
			
			
			
			var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,99);
			var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,99);
			log(false,"X de "+UBWRXKMTQN+" "+NOFEDXHMLS);
				
			if (FXGSEGRXKC.length>0){
					//VRLYJAAHUE(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
					PQUFIBKJJH = YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
						PQUFIBKJJH.to( {x:NOFEDXHMLS
						,y:GHTWROCHVV
						,angle:KKQWKUGGSI
						}
						, BQUYYUASDK, KYFMRVNHIQ);
						PQUFIBKJJH.onComplete.add(//NDYHJQQAUL,this)
							function () {
								OROGRNBISW(XACEBCSJAB,UBWRXKMTQN);
								NDYHJQQAUL(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ); //Truco para poder pasar por par�metro
							}
						);
						if (UBWRXKMTQN=="D")
						{
							YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
						}
						PQUFIBKJJH.start();
			}
			if (FBSDMRLVEL.length>0){
				FBSDMRLVEL[FBSDMRLVEL.length-1].TNFAGGMKXD.moveDown();	
			}
		}
	//}
}


NDYHJQQAUL=function(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ){
	var UBWRXKMTQN;
	var DWTJCXXKNS;
	var XACEBCSJAB;
	var i;
	

	
	
	//if (UHHXSNXXJK<JLVDFTPUNI && PXGXKDDNFK<JLVDFTPUNI)
	//{
		var VJGLUDIXWN=LDCCGSIBKW+2;
		if (VJGLUDIXWN>4){
			VJGLUDIXWN=VJGLUDIXWN-4;
		}
		
		if (FXGSEGRXKC.length>0){
		
		DWTJCXXKNS=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD
		//log(false,"Robada 3 "+FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF+" de "+FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI);
		
		UBWRXKMTQN=HHOPUSIABJ(VJGLUDIXWN);
		
		if (UBWRXKMTQN=="U"){
			var XACEBCSJAB=TWJONOKGHC;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			PBHYCULPGK.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="D"){
			var XACEBCSJAB=AGKVNAGGLB;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle;
			NAYBJTKIKA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			RXKKPILDQT.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="L"){
			var XACEBCSJAB=KNVKGHHTYC;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle+90;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			SYXHGDSJDY.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="R"){
			var XACEBCSJAB=CBCNHFGWLU;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle+270;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			BDRJVGFWQH.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}	
		
		//if (XACEBCSJAB.length<6){
			XACEBCSJAB.push(new TVYNYTCQYW(FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI,FXGSEGRXKC[FXGSEGRXKC.length-1].UUOPKETETA,FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF,FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD,5,FXGSEGRXKC[FXGSEGRXKC.length-1].jugador,null,null,FXGSEGRXKC[FXGSEGRXKC.length-1].MQUGCIUQII));
			EABXADHEVT('WWYKUMYJBJ');
			
			if (UBWRXKMTQN=="D"){
				JQSOOBSDDS();
			}
			
			FXGSEGRXKC.pop();
			
			
			
			var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,99);
			var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,99);
			log(false,"X de "+UBWRXKMTQN+" "+NOFEDXHMLS);
				
			if (FXGSEGRXKC.length>0 || FBSDMRLVEL.length>0){
					//VRLYJAAHUE(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
					PQUFIBKJJH = YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
						PQUFIBKJJH.to( {x:NOFEDXHMLS
						,y:GHTWROCHVV
						,angle:KKQWKUGGSI
						}
						, BQUYYUASDK, KYFMRVNHIQ);
					PQUFIBKJJH.onComplete.add(//TMUBOPUYAH,this)
							function () {
								OROGRNBISW(XACEBCSJAB,UBWRXKMTQN);
								TMUBOPUYAH(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ); //Truco para poder pasar por par�metro
							}
						);
						if (UBWRXKMTQN=="D")
						{
							YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
						}
						PQUFIBKJJH.start();
			}
			
			if (FBSDMRLVEL.length>0){
				FBSDMRLVEL[FBSDMRLVEL.length-1].TNFAGGMKXD.moveDown();	
			}
		}
	//}
}



TMUBOPUYAH=function(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ){
	var UBWRXKMTQN;
	var DWTJCXXKNS;
	var XACEBCSJAB;
	var MazoMover=[];
	var i;
	
	//console.log("AGTXFNIKQD Robar "+LUCRWXJMDR)

	//if (UHHXSNXXJK<JLVDFTPUNI && PXGXKDDNFK<JLVDFTPUNI)
	//{
		var VJGLUDIXWN=LDCCGSIBKW+3;
		if (VJGLUDIXWN>4){
			VJGLUDIXWN=VJGLUDIXWN-4;
		}
		
		if (FXGSEGRXKC.length>0 || FBSDMRLVEL.length>0 ){
		
		log(false,"koooo")
		
		if(FXGSEGRXKC.length>0){
			MazoMover=FXGSEGRXKC;		
			//log(false,"Error");
			
		}
		else{
			MazoMover=FBSDMRLVEL;		
			//log(false,"Robada4 "+FBSDMRLVEL[MazoMover.length-1].HVCFEWNDRF+" de "+FBSDMRLVEL[MazoMover.length-1].SGCSHJVERI);
			//log(false,"Robada4 "+FBSDMRLVEL[FBSDMRLVEL.length-1].HVCFEWNDRF+" de "+FBSDMRLVEL[FBSDMRLVEL.length-1].SGCSHJVERI);
		}
		
		DWTJCXXKNS=MazoMover[MazoMover.length-1].TNFAGGMKXD;
		//log(false,"Robada4 "+MazoMover[MazoMover.length-1].HVCFEWNDRF+" de "+MazoMover[MazoMover.length-1].SGCSHJVERI);
		
		UBWRXKMTQN=HHOPUSIABJ(VJGLUDIXWN);
		
		if (UBWRXKMTQN=="U"){
			var XACEBCSJAB=TWJONOKGHC;
			var KKQWKUGGSI=MazoMover[MazoMover.length-1].TNFAGGMKXD.angle;
			//XNFDNBQFUA(MazoMover[MazoMover.length-1].TNFAGGMKXD);
			for (i=0;i<=MazoMover.length-1;i++)
			{
				XNFDNBQFUA(MazoMover[i].TNFAGGMKXD);
			}
			
			PBHYCULPGK.add(MazoMover[MazoMover.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="D"){
			var XACEBCSJAB=AGKVNAGGLB;
			var KKQWKUGGSI=MazoMover[MazoMover.length-1].TNFAGGMKXD.angle;
			NAYBJTKIKA(MazoMover[MazoMover.length-1].TNFAGGMKXD);
			RXKKPILDQT.add(MazoMover[MazoMover.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="L"){
			var XACEBCSJAB=KNVKGHHTYC;
			var KKQWKUGGSI=MazoMover[MazoMover.length-1].TNFAGGMKXD.angle+90;
			//XNFDNBQFUA(MazoMover[MazoMover.length-1].TNFAGGMKXD);
			for (i=0;i<=MazoMover.length-1;i++)
			{
				XNFDNBQFUA(MazoMover[i].TNFAGGMKXD);
			}
			SYXHGDSJDY.add(MazoMover[MazoMover.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="R"){
			var XACEBCSJAB=CBCNHFGWLU;
			var KKQWKUGGSI=MazoMover[MazoMover.length-1].TNFAGGMKXD.angle+270;
			//XNFDNBQFUA(MazoMover[MazoMover.length-1].TNFAGGMKXD);
			for (i=0;i<=MazoMover.length-1;i++)
			{
				XNFDNBQFUA(MazoMover[i].TNFAGGMKXD);
			}
			BDRJVGFWQH.add(MazoMover[MazoMover.length-1].TNFAGGMKXD);
		}	
		
		//if (XACEBCSJAB.length<6){ // Hay que poner este control porque si no pasa varias veces en multijugador
		XACEBCSJAB.push(new TVYNYTCQYW(MazoMover[MazoMover.length-1].SGCSHJVERI,MazoMover[MazoMover.length-1].UUOPKETETA,MazoMover[MazoMover.length-1].HVCFEWNDRF,MazoMover[MazoMover.length-1].TNFAGGMKXD,5,
		MazoMover[MazoMover.length-1].jugador,null,null,MazoMover[MazoMover.length-1].MQUGCIUQII));
		
		EABXADHEVT('WWYKUMYJBJ');
		
		if (UBWRXKMTQN=="D"){
			JQSOOBSDDS();
		}
		
		MazoMover.pop();
		
		if (MazoMover.length==0){
			KKQWKUGGSI=KKQWKUGGSI-90;
		}
		
		var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,99);
		var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,99);
		log(false,"X de "+UBWRXKMTQN+" "+NOFEDXHMLS);	
		//if (NCKMGYLDRO=="L"){
				//VRLYJAAHUE(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
				PQUFIBKJJH = YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
					PQUFIBKJJH.to( {x:NOFEDXHMLS
					,y:GHTWROCHVV
					,angle:KKQWKUGGSI
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					PQUFIBKJJH.onComplete.add( function(){ 
					
					//if (LUCRWXJMDR==4)
					//{
						//BNVXVJHWWQ();
					//}
					OROGRNBISW(XACEBCSJAB,UBWRXKMTQN);
					DFCCHCJBNP(TKWCTNGROU,TXLWIIINGQ);
					////console.log("TAREA desde robarcartas.");
					
					} 
					)
					if (UBWRXKMTQN=="D")
					{
						YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
					}
					PQUFIBKJJH.start();
		//}
				if (FBSDMRLVEL.length>0){
					FBSDMRLVEL[FBSDMRLVEL.length-1].TNFAGGMKXD.moveDown();	
				}
		
		
		}
		LMGBDQDXWP();
	//}
}


FYYEWMEHBU=function(text){
text.kill();
}



VOHGWKGYGY=function(sprite, Array, BBSGITWRQX){
	//Env�a la posici�n al resto de compa�eros
	if (SNJCSVWFCC()==true || EGPDVIEJEL==false ) //2.0.1 EGPDVIEJEL==false
	{
		for (var i=0; i<=Array.length-1; i++){
			if (Array[i].TNFAGGMKXD.name==sprite.name){
				Array[i].NPYBJSHIFL=BBSGITWRQX;	
				if (EGPDVIEJEL==true && FReconectando()==false )
				{
					socket.emit('SSPKARCWJW', DFBVDPETGO,TFSXFTYVGQ,Array[i].TNFAGGMKXD.name,BBSGITWRQX,MQUGCIUQII) ;
				}
				break;
			}
		}
	}
	
}

WIEVLYANFM=function(FXGSEGRXKC,NPYBJSHIFL){
	for(var i = 0; i < ETAUVLWEYR.length; i++) {
		if (ETAUVLWEYR[i].FXGSEGRXKC==FXGSEGRXKC && ETAUVLWEYR[i].NPYBJSHIFL==NPYBJSHIFL){
			return ETAUVLWEYR[i].x;
		}		
	}
}

FIGQBSJQGA=function(FXGSEGRXKC,NPYBJSHIFL){
	for(var i = 0; i < ETAUVLWEYR.length; i++) {
		if (ETAUVLWEYR[i].FXGSEGRXKC==FXGSEGRXKC && ETAUVLWEYR[i].NPYBJSHIFL==NPYBJSHIFL){
			return ETAUVLWEYR[i].y;
		}		
	}
}
	
OROGRNBISW=function(JYVKHLQLIM,NCKMGYLDRO,BBUAAVEPDC,SJVCMXWVVI,KeyDesde7){
	
	
	var i;
	//Para que cuando robe el 7 sea la �ltima
	for (var i=0;i<=JYVKHLQLIM.length-1;i++)
	{
		if (JYVKHLQLIM[i].TNFAGGMKXD.name==KeyDesde7)
		{
			JYVKHLQLIM[i].NPYBJSHIFL=10;
		}
	}

	
	JYVKHLQLIM.sort(sort_by('NPYBJSHIFL', false, parseFloat));
	
	for (var i=0;i<=JYVKHLQLIM.length-1;i++)
	{
		JYVKHLQLIM[i].NPYBJSHIFL=i;
	}



	if (BBUAAVEPDC==true){

		for (var i=0;i<=JYVKHLQLIM.length-1;i++){
			if (JYVKHLQLIM[i].TNFAGGMKXD.name==SJVCMXWVVI){
				break;
			}
		}	
		
		SUMEMLHUFX(NCKMGYLDRO)
		var NOFEDXHMLS=WIEVLYANFM(NCKMGYLDRO,i);
		var GHTWROCHVV=FIGQBSJQGA(NCKMGYLDRO,i);
		
		if (NCKMGYLDRO=="L"){
				VRLYJAAHUE(JYVKHLQLIM[i].TNFAGGMKXD);
				EWXBTDLSHW = YMHIHSNADE.add.tween(JYVKHLQLIM[i].TNFAGGMKXD);
				EWXBTDLSHW.to( {x:NOFEDXHMLS+ JYVKHLQLIM[JYVKHLQLIM.length-1].TNFAGGMKXD.width
				,y:GHTWROCHVV
				}
				, MDYSFNYPYP, KYFMRVNHIQ);
				EWXBTDLSHW.onComplete.add(BWTIWMVDQQ,this)
				
				EWXBTDLSHW.start();
		}
		if (NCKMGYLDRO=="R"){
			VRLYJAAHUE(JYVKHLQLIM[i].TNFAGGMKXD);
			EWXBTDLSHW = YMHIHSNADE.add.tween(JYVKHLQLIM[i].TNFAGGMKXD);
				EWXBTDLSHW.to( {x:NOFEDXHMLS- JYVKHLQLIM[JYVKHLQLIM.length-1].TNFAGGMKXD.width
				,y:GHTWROCHVV
				}
				, MDYSFNYPYP, KYFMRVNHIQ);
				EWXBTDLSHW.onComplete.add(BQNUWYNWUM,this)
				
				EWXBTDLSHW.start();
		}		
		if (NCKMGYLDRO=="U"){
			VRLYJAAHUE(JYVKHLQLIM[i].TNFAGGMKXD);
			EWXBTDLSHW = YMHIHSNADE.add.tween(JYVKHLQLIM[i].TNFAGGMKXD);
				EWXBTDLSHW.to( {x:NOFEDXHMLS
				,y:GHTWROCHVV+ JYVKHLQLIM[JYVKHLQLIM.length-1].TNFAGGMKXD.width
				}
				, MDYSFNYPYP, KYFMRVNHIQ);
				EWXBTDLSHW.onComplete.add(IASDVOABBB,this)
				
				EWXBTDLSHW.start();
		}	
		
		
	}
	else
	{
		XVQSVMPDII(NCKMGYLDRO);
	}
	
	
	



}

BQNUWYNWUM=function(){
	XVQSVMPDII("R");
}


BWTIWMVDQQ=function(){
	XVQSVMPDII("L");
}

IASDVOABBB=function(){
	XVQSVMPDII("U");
}

//2.0.1 01/02/2018
Desolapar=function()
{
	try{
		SYXHGDSJDY.sort('y', Phaser.Group.SORT_ASCENDING);
		BDRJVGFWQH.sort('y', Phaser.Group.SORT_DESCENDING);	
	}
	catch(e){}
}

XVQSVMPDII=function(UBWRXKMTQN){
	
	
	
	var NNLCEDVGOV=[];
	if (UBWRXKMTQN=="U"){
		NNLCEDVGOV=TWJONOKGHC;
	}
	if (UBWRXKMTQN=="D"){
		NNLCEDVGOV=AGKVNAGGLB;
	}
	if (UBWRXKMTQN=="L"){
		NNLCEDVGOV=KNVKGHHTYC;
	}
	if (UBWRXKMTQN=="R"){
		NNLCEDVGOV=CBCNHFGWLU;
	}

	SUMEMLHUFX(UBWRXKMTQN)
	
	
	if (NNLCEDVGOV.length>=1)
	{
	

	var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,0);
	var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,0);
	
	
	//log(false,"REORDENANDO X: FXGSEGRXKC "+UBWRXKMTQN+" "+NOFEDXHMLS);
	//log(false,"REORDENANDO Y: FXGSEGRXKC "+UBWRXKMTQN+" "+GHTWROCHVV);
	Desolapar();
	
	EWXBTDLSHW = YMHIHSNADE.add.tween(NNLCEDVGOV[0].TNFAGGMKXD);
		EWXBTDLSHW.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
		EWXBTDLSHW.onComplete.add(function(){Desolapar();} );
		EWXBTDLSHW.start();
	}

	if (NNLCEDVGOV.length>=2)
	{	
	
		var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,1);
		var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,1);
		
	//log(false,"REORDENANDO X: FXGSEGRXKC "+UBWRXKMTQN+" "+NOFEDXHMLS);
	//log(false,"REORDENANDO Y: FXGSEGRXKC "+UBWRXKMTQN+" "+GHTWROCHVV);
	
	EWXBTDLSHW= YMHIHSNADE.add.tween(NNLCEDVGOV[1].TNFAGGMKXD);
		EWXBTDLSHW.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
		EWXBTDLSHW.onComplete.add(function(){Desolapar();} );
		EWXBTDLSHW.start();
	}

	if (NNLCEDVGOV.length>=3)
	{
	
	//log(false,"REORDENANDO X: FXGSEGRXKC "+UBWRXKMTQN+" "+NOFEDXHMLS);
	//log(false,"REORDENANDO Y: FXGSEGRXKC "+UBWRXKMTQN+" "+GHTWROCHVV);
	
	
		var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,2);
		var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,2);
	
	
	EWXBTDLSHW = YMHIHSNADE.add.tween(NNLCEDVGOV[2].TNFAGGMKXD);
		EWXBTDLSHW.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
		EWXBTDLSHW.onComplete.add(function(){Desolapar();} );
		EWXBTDLSHW.start();
	}

	if (NNLCEDVGOV.length>=4)
	{
		if (FXGSEGRXKC.length>0)
	{
		var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,3);
		var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,3);
	}
	else
	{
		if(UBWRXKMTQN=="R")
		{
			var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,3);
			var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,3);
		}
		else
		{
			var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,3);
			var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,3);
		}
	}
	//log(false,"REORDENANDO X: FXGSEGRXKC "+UBWRXKMTQN+" "+NOFEDXHMLS);
	//log(false,"REORDENANDO Y: FXGSEGRXKC "+UBWRXKMTQN+" "+GHTWROCHVV);
	
	EWXBTDLSHW = YMHIHSNADE.add.tween(NNLCEDVGOV[3].TNFAGGMKXD);
		EWXBTDLSHW.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
		EWXBTDLSHW.onComplete.add(function(){Desolapar();} );
		EWXBTDLSHW.start();
	}
	
	if (NNLCEDVGOV.length>=5)
	{	
		var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,4);
		var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,4);
	
	//log(false,"REORDENANDO X: FXGSEGRXKC "+UBWRXKMTQN+" "+NOFEDXHMLS);
	//log(false,"REORDENANDO Y: FXGSEGRXKC "+UBWRXKMTQN+" "+GHTWROCHVV);
	
	EWXBTDLSHW = YMHIHSNADE.add.tween(NNLCEDVGOV[4].TNFAGGMKXD);
		EWXBTDLSHW.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
		EWXBTDLSHW.onComplete.add(function(){Desolapar();} );
		EWXBTDLSHW.start();		
	}
		
	if (NNLCEDVGOV.length>=6)
	{		
	
		var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,5);
		var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,5);
	
	//log(false,"REORDENANDO X: FXGSEGRXKC "+UBWRXKMTQN+" "+NOFEDXHMLS);
	//log(false,"REORDENANDO Y: FXGSEGRXKC "+UBWRXKMTQN+" "+GHTWROCHVV);
	
	EWXBTDLSHW = YMHIHSNADE.add.tween(NNLCEDVGOV[5].TNFAGGMKXD);
		EWXBTDLSHW.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
		EWXBTDLSHW.onComplete.add(function(){Desolapar();} );
		EWXBTDLSHW.start();
	}
	
}

JQSOOBSDDS=function(){
var i;
	
		
		for (i=0;i<=AGKVNAGGLB.length-1;i++){
			//if (AGKVNAGGLB[i].TNFAGGMKXD.inputEnabled==false || AGKVNAGGLB[i].TNFAGGMKXD.inputEnabled==undefined) //2.0.1
			//{
				AGKVNAGGLB[i].TNFAGGMKXD.inputEnabled = true;
				AGKVNAGGLB[i].TNFAGGMKXD.input.enableDrag(false,true);
				//AGKVNAGGLB[i].TNFAGGMKXD.input.allowVerticalDrag = false;
				//AGKVNAGGLB[i].TNFAGGMKXD.events.onInputUp.add(QTIPILDEPH);
				//AGKVNAGGLB[i].TNFAGGMKXD.events.onDragUpdate.add(WTNGDOQIWY); 
				AGKVNAGGLB[i].TNFAGGMKXD.events.onDragStop.add(IHSCVAKSDJ); 
			//}
		}
		
		//raka JWXRWCVLGC(1); //ILA 20170128 PELIGROSO. LO HE AÑADIDO
}

VRLYJAAHUE=function(sprite){
	sprite.inputEnabled = false;
}

HJDIMRVCSU=function(sprite){
	log(false,"Activa el sprite.");
	sprite.inputEnabled = true;
}

var sort_by = function(field, reverse, primer){

   var key = primer ? 
       function(x) {return primer(x[field])} : 
       function(x) {return x[field]};

   reverse = !reverse ? 1 : -1;

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     } 
}


RAVHQRVMNJ=function(UHTPGPRUJA,SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ){
	//if (TFSXFTYVGQ!=UHTPGPRUJA){
		
		if(TFSXFTYVGQ==1){
			if (UHTPGPRUJA==2){
				UFYWSHNLRM(CBCNHFGWLU,"R",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==3){
				UFYWSHNLRM(TWJONOKGHC,"U",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==4){
				UFYWSHNLRM(KNVKGHHTYC,"L",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}		
		}
	
		if(TFSXFTYVGQ==2){
			if (UHTPGPRUJA==3){
				UFYWSHNLRM(CBCNHFGWLU,"R",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==4){
				UFYWSHNLRM(TWJONOKGHC,"U",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==1){
				UFYWSHNLRM(KNVKGHHTYC,"L",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
		
		}	

		if(TFSXFTYVGQ==3){
			if (UHTPGPRUJA==4){
				UFYWSHNLRM(CBCNHFGWLU,"R",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==1){
				UFYWSHNLRM(TWJONOKGHC,"U",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==2){
				UFYWSHNLRM(KNVKGHHTYC,"L",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}		
		}

		if(TFSXFTYVGQ==4){
			if (UHTPGPRUJA==1){
				UFYWSHNLRM(CBCNHFGWLU,"R",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==2){
				UFYWSHNLRM(TWJONOKGHC,"U",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==3){
				UFYWSHNLRM(KNVKGHHTYC,"L",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}	
		}		
	//}
	

}

UFYWSHNLRM=function(XACEBCSJAB,STLEOJDWSU,SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ){
	for (var i=0;i<=XACEBCSJAB.length-1;i++){
		if(XACEBCSJAB[i].TNFAGGMKXD.name==SJVCMXWVVI){
			XACEBCSJAB[i].NPYBJSHIFL=BBSGITWRQX;
			OROGRNBISW(XACEBCSJAB,STLEOJDWSU,true,SJVCMXWVVI)
			break;
		}
	}
	console.log("RECUPERA_ orden cartas");
	OGGWQECXBK(TXLWIIINGQ,false,false); //Orden cartas
}

WEFMQSNCOE=function(TXLWIIINGQ){
	//for (i=0;i<=VDKOVQXHON.length-1;i++){
	
	var i;	
		
		//CHJKAHKJHC();
		if (VDKOVQXHON.length>=1){
		//log(false,"RECOJO CARTA 1");
			XNFDNBQFUA(VDKOVQXHON[0].TNFAGGMKXD);
			
			if (PPTWRPRLSI==true){
					for (i=1;i<=XYRJNHOCRB.length;i++)
					{
						XYRJNHOCRB.alpha=1;
					}
					XYRJNHOCRB.splice(0,10);
					VRLYJAAHUE(VDKOVQXHON[0].TNFAGGMKXD);
					PTHQXTTWIH = YMHIHSNADE.add.tween(VDKOVQXHON[0].TNFAGGMKXD);
					PTHQXTTWIH.to( {x: WIEVLYANFM("ULTIMA_Baza",0)
					,y:FIGQBSJQGA("ULTIMA_Baza",0),//YMHIHSNADE.world.height- VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(UCJLIRNXGJ,this)						
					PTHQXTTWIH.start();
					WWFSQDQYYU.add(VDKOVQXHON[0].TNFAGGMKXD);
					KBESPOUXUK.push(VDKOVQXHON[0].TNFAGGMKXD);
					XYRJNHOCRB.push(VDKOVQXHON[0].TNFAGGMKXD);
					OYOANGYTVY(VDKOVQXHON[0].TNFAGGMKXD);
				}
				else{
				
				for (i=1;i<=HAJIKEVCFP.length;i++)
				{
					HAJIKEVCFP.alpha=1;
				}
				HAJIKEVCFP.splice(0,10);
				VRLYJAAHUE(VDKOVQXHON[0].TNFAGGMKXD);
				PTHQXTTWIH = YMHIHSNADE.add.tween(VDKOVQXHON[0].TNFAGGMKXD);
					PTHQXTTWIH.to( {x:WIEVLYANFM("ULTIMA_Baza_Rival",0)
					,y:FIGQBSJQGA("ULTIMA_Baza_Rival",0),//0+ VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(UCJLIRNXGJ,this)			
					PTHQXTTWIH.start();
					WWFSQDQYYU.add(VDKOVQXHON[0].TNFAGGMKXD);
					BRILHDFUSO.push(VDKOVQXHON[0].TNFAGGMKXD);
					HAJIKEVCFP.push(VDKOVQXHON[0].TNFAGGMKXD);
					OYOANGYTVY(VDKOVQXHON[0].TNFAGGMKXD);
			
				}
		//log(false,"fin RECOJO CARTA 1");
		}
		
		
}

UCJLIRNXGJ=function(TXLWIIINGQ){
	//for (i=0;i<=VDKOVQXHON.length-1;i++){
		if (VDKOVQXHON.length>=2){		
		//log(false,"RECOJO CARTA 2");
			XNFDNBQFUA(VDKOVQXHON[1].TNFAGGMKXD);
			
			if (PPTWRPRLSI==true){
					VRLYJAAHUE(VDKOVQXHON[1].TNFAGGMKXD);
					IRQUWMEVQL = YMHIHSNADE.add.tween(VDKOVQXHON[1].TNFAGGMKXD);
					IRQUWMEVQL.to( {x:WIEVLYANFM("ULTIMA_Baza",0)
					,y:FIGQBSJQGA("ULTIMA_Baza",0),//YMHIHSNADE.world.height- VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(PGDMTNSUGD,this)						
					IRQUWMEVQL.start();
					
					KBESPOUXUK.push(VDKOVQXHON[1].TNFAGGMKXD);
					XYRJNHOCRB.push(VDKOVQXHON[1].TNFAGGMKXD);
					OYOANGYTVY(VDKOVQXHON[1].TNFAGGMKXD);
					WWFSQDQYYU.add(VDKOVQXHON[1].TNFAGGMKXD);
				}
				else{
					
					VRLYJAAHUE(VDKOVQXHON[1].TNFAGGMKXD);
					IRQUWMEVQL = YMHIHSNADE.add.tween(VDKOVQXHON[1].TNFAGGMKXD);
					IRQUWMEVQL.to( {x:WIEVLYANFM("ULTIMA_Baza_Rival",0)
					,y:FIGQBSJQGA("ULTIMA_Baza_Rival",0),//0+ VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(PGDMTNSUGD,this)						
					IRQUWMEVQL.start();
	
					BRILHDFUSO.push(VDKOVQXHON[1].TNFAGGMKXD);
					HAJIKEVCFP.push(VDKOVQXHON[1].TNFAGGMKXD);
					OYOANGYTVY(VDKOVQXHON[1].TNFAGGMKXD);					
					WWFSQDQYYU.add(VDKOVQXHON[1].TNFAGGMKXD);
				}
		//log(false,"fin RECOJO CARTA 2");
		}
		
		
}

PGDMTNSUGD=function(TXLWIIINGQ){
	//for (i=0;i<=VDKOVQXHON.length-1;i++){
		if (VDKOVQXHON.length>=3){	
			XNFDNBQFUA(VDKOVQXHON[2].TNFAGGMKXD);
		//	log(false,"RECOJO CARTA3");
				if (PPTWRPRLSI==true){
					VRLYJAAHUE(VDKOVQXHON[2].TNFAGGMKXD);
					HIFQJUUVEU = YMHIHSNADE.add.tween(VDKOVQXHON[2].TNFAGGMKXD);
					HIFQJUUVEU.to( {x:WIEVLYANFM("ULTIMA_Baza",0)
					,y:FIGQBSJQGA("ULTIMA_Baza",0),//YMHIHSNADE.world.height- VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(VRHXGWDUTQ,this)					
					HIFQJUUVEU.start();
					
					KBESPOUXUK.push(VDKOVQXHON[2].TNFAGGMKXD);
					XYRJNHOCRB.push(VDKOVQXHON[2].TNFAGGMKXD);
					OYOANGYTVY(VDKOVQXHON[2].TNFAGGMKXD);
					WWFSQDQYYU.add(VDKOVQXHON[2].TNFAGGMKXD);				
				}
				else{
					VRLYJAAHUE(VDKOVQXHON[2].TNFAGGMKXD);
					HIFQJUUVEU= YMHIHSNADE.add.tween(VDKOVQXHON[2].TNFAGGMKXD);
					HIFQJUUVEU.to( {x:WIEVLYANFM("ULTIMA_Baza_Rival",0)
					,y:FIGQBSJQGA("ULTIMA_Baza_Rival",0),//0+ VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(VRHXGWDUTQ,this)					
					HIFQJUUVEU.start();
					
					BRILHDFUSO.push(VDKOVQXHON[2].TNFAGGMKXD);
					HAJIKEVCFP.push(VDKOVQXHON[2].TNFAGGMKXD);
					OYOANGYTVY(VDKOVQXHON[2].TNFAGGMKXD);					
					WWFSQDQYYU.add(VDKOVQXHON[2].TNFAGGMKXD);
				}
	//	log(false,"fin RECOJO CARTA 3");
		}
		
		
}


VRHXGWDUTQ=function(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ){
	//for (i=0;i<=VDKOVQXHON.length-1;i++){
	//log(false,"se mete 4");
	
	//console.log("AGTXFNIKQD Recoger "+LUCRWXJMDR)

	
	
	
		if (VDKOVQXHON.length>=4){
				
			XNFDNBQFUA(VDKOVQXHON[3].TNFAGGMKXD);
			//log(false,"RECOJO CARTA 4");
		//	log(false,"Quiere Robar...");
		
			//Está bien pensado. Un If va a PPYGSSQBDV que luego llama a Robar, y después a Eliminar. El else, elimina porque no hay para robar.
			if (PPTWRPRLSI==true){
					VRLYJAAHUE(VDKOVQXHON[3].TNFAGGMKXD);
					JKSTORAHAM = YMHIHSNADE.add.tween(VDKOVQXHON[3].TNFAGGMKXD);
					JKSTORAHAM.to( {x:WIEVLYANFM("ULTIMA_Baza",0)
					,y:FIGQBSJQGA("ULTIMA_Baza",0),//YMHIHSNADE.world.height- VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					
					
			
					if (FXGSEGRXKC.length>0){
						JKSTORAHAM.onComplete.add(//CGCMEMLMAG,this)
							function () {
							PPYGSSQBDV(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ); //Este llama a robar
							KBESPOUXUK.push(VDKOVQXHON[3].TNFAGGMKXD)
							XYRJNHOCRB.push(VDKOVQXHON[3].TNFAGGMKXD);
							OYOANGYTVY(VDKOVQXHON[3].TNFAGGMKXD);
							WWFSQDQYYU.add(VDKOVQXHON[3].TNFAGGMKXD);
							//CGCMEMLMAG(TKWCTNGROU,LDCCGSIBKW); //Truco para poder pasar por par�metro
						}
						);
					}
					else
					{
						log(false,"se deber�a meter aqu�");
						KBESPOUXUK.push(VDKOVQXHON[3].TNFAGGMKXD)
						XYRJNHOCRB.push(VDKOVQXHON[3].TNFAGGMKXD);
						OYOANGYTVY(VDKOVQXHON[3].TNFAGGMKXD);
						WWFSQDQYYU.add(VDKOVQXHON[3].TNFAGGMKXD);
						JKSTORAHAM.onComplete.add( function(){ 
						DFCCHCJBNP(TKWCTNGROU,TXLWIIINGQ);
						////console.log("TAREA desde recogercartas.");
						
						} )
					}
					JKSTORAHAM.start();
					
				
				}
				else{
					VRLYJAAHUE(VDKOVQXHON[3].TNFAGGMKXD);
					JKSTORAHAM = YMHIHSNADE.add.tween(VDKOVQXHON[3].TNFAGGMKXD);
					JKSTORAHAM.to( {x:WIEVLYANFM("ULTIMA_Baza_Rival",0)
					,y:FIGQBSJQGA("ULTIMA_Baza_Rival",0),//0+ VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					if (FXGSEGRXKC.length>0){
						JKSTORAHAM.onComplete.add(//CGCMEMLMAG,this)
							function () {
							PPYGSSQBDV(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ);
							BRILHDFUSO.push(VDKOVQXHON[3].TNFAGGMKXD);
							HAJIKEVCFP.push(VDKOVQXHON[3].TNFAGGMKXD);
							OYOANGYTVY(VDKOVQXHON[3].TNFAGGMKXD);
							WWFSQDQYYU.add(VDKOVQXHON[3].TNFAGGMKXD);
							//CGCMEMLMAG(TKWCTNGROU,LDCCGSIBKW); //Truco para poder pasar por par�metro
						}
						);
					}	
					else
					{
						log(false,"o aqu�");
						BRILHDFUSO.push(VDKOVQXHON[3].TNFAGGMKXD);
						HAJIKEVCFP.push(VDKOVQXHON[3].TNFAGGMKXD);
						OYOANGYTVY(VDKOVQXHON[3].TNFAGGMKXD);
						WWFSQDQYYU.add(VDKOVQXHON[3].TNFAGGMKXD);
						JKSTORAHAM.onComplete.add( function(){ 
						DFCCHCJBNP(TKWCTNGROU,TXLWIIINGQ);
						////console.log("TAREA desde recogercartas2.");
						
						})
					}					
					JKSTORAHAM.start();
					
								
			
				}
		//log(false,"fin RECOJO CARTA 4");
		}
		
		
		//VDKOVQXHON.splice(0,4);
		
}

PPYGSSQBDV=function(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ){
	var i;
	var LSKPLOTYIB=false;
	var EYCRTUIDMY;
	var BQJIVKRBLA;
	var UBWRXKMTQN;
	
	
	for (i=0;i<=AGKVNAGGLB.length-1;i++){
		if (AGKVNAGGLB[i].SGCSHJVERI==TGTQPBEQFR && AGKVNAGGLB[i].HVCFEWNDRF==7)
		{
			LSKPLOTYIB=true;
			BQJIVKRBLA= AGKVNAGGLB[i].TNFAGGMKXD.name;
			UBWRXKMTQN="D";
		}
	}

	for (i=0;i<=CBCNHFGWLU.length-1;i++){
		if (CBCNHFGWLU[i].SGCSHJVERI==TGTQPBEQFR && CBCNHFGWLU[i].HVCFEWNDRF==7)
		{
			LSKPLOTYIB=true;
			BQJIVKRBLA= CBCNHFGWLU[i].TNFAGGMKXD.name;
			UBWRXKMTQN="R";
		}
	}
	
	for (i=0;i<=TWJONOKGHC.length-1;i++){
		if (TWJONOKGHC[i].SGCSHJVERI==TGTQPBEQFR && TWJONOKGHC[i].HVCFEWNDRF==7)
		{
			LSKPLOTYIB=true;
			BQJIVKRBLA= TWJONOKGHC[i].TNFAGGMKXD.name;
			UBWRXKMTQN="U";
		}
	}
	
	for (i=0;i<=KNVKGHHTYC.length-1;i++){
		if (KNVKGHHTYC[i].SGCSHJVERI==TGTQPBEQFR && KNVKGHHTYC[i].HVCFEWNDRF==7)
		{
			LSKPLOTYIB=true;
			BQJIVKRBLA= KNVKGHHTYC[i].TNFAGGMKXD.name;
			UBWRXKMTQN="L";
		}
	}
		
	EYCRTUIDMY=JHIEHWIMCB(UBWRXKMTQN);
	log(false,"La LUCRWXJMDR es " + TKWCTNGROU);
	//console.log("Antes Cambiar 7 "+TKWCTNGROU);
	if (LSKPLOTYIB==true && FBSDMRLVEL[0].VVRCMEUNOJ>7 && TKWCTNGROU==4 &&  (  (PPTWRPRLSI==true && (UBWRXKMTQN=="D" || UBWRXKMTQN=="U"))  ||  (PPTWRPRLSI==false && (UBWRXKMTQN=="L" || UBWRXKMTQN=="R") )     )  ){
		//console.log("Lo Cambia 7 "+TKWCTNGROU);
		log(false,"TVYNYTCQYW a cambiar "+BQJIVKRBLA);
		NPOUCHQXMY(EYCRTUIDMY,BQJIVKRBLA,TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ,true); //Aprovecho la funci�n NPOUCHQXMY para los cambios forzados de �ltima LUCRWXJMDR
			//Debo arrastrar TKWCTNGROU,LDCCGSIBKW porque lo usa CGCMEMLMAG
		
	
	}
	else
	{
		//console.log("Robando cartas forzar cambio"+TKWCTNGROU);
		CGCMEMLMAG(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ);
	}

}


IEUIUCYUCC=function(RPHWVBBGIM,Tamano) {

	var AWCCMSCOPO;
	var grd;
	

	//text = YMHIHSNADE.add.text(0, 0, RPHWVBBGIM);
	VTEVNYKAUB.removeAll(); //2.0.1 clave:textoseliminar

	TextoGeneral=YMHIHSNADE.add.bitmapText(0, 0, 'MiFuenteAmarilla', 'BitmapText', Tamano);
	TextoGeneral.text=RPHWVBBGIM;
	TextoGeneral.anchor.set(0.5,0.5);
	TextoGeneral.x=YMHIHSNADE.world.centerX;
	TextoGeneral.y=YMHIHSNADE.world.centerY-25

	

		/*TextoGeneral.revive();
		TextoGeneral.alpha=1;
		//TextoGeneral.x=YMHIHSNADE.world.centerX;
		//TextoGeneral.y=YMHIHSNADE.world.centerY-25
		TextoGeneral.text=RPHWVBBGIM;
		TextoGeneral.fontSize=Tamano;*/
	
	
	
	VTEVNYKAUB.add(TextoGeneral); //2.0.1 clave:textoseliminar
	YMHIHSNADE.world.bringToTop(VTEVNYKAUB);
	
	
	return TextoGeneral;
}


BKBXOKMUUQ=function(TXLWIIINGQ){
	
	
	if (JHHWEKWEJK==false)
	{
		JHHWEKWEJK=true; //1.0.8 Para controlar que si alguien desconecta no reparte echando leches (onsocketdesconectado)
		BRJIESNORM();
		
		
		/*if (EGPDVIEJEL==true) 2.0.7
		{
			socket.emit('TXCYFYXTAI', DFBVDPETGO,socket.id) ;
		}*/
		
		
		if (EVAILWGGKX==false)
		{		
			
			SYJLVBWPIM(TXLWIIINGQ);
		}
	}

}




SYJLVBWPIM=function(TXLWIIINGQ){
	var RPHWVBBGIM;
	var UYEUYIYECB;
	log(true,"A contar..");

	console.log("DEL recontando "+JHHWEKWEJK);
	
	//JHHWEKWEJK=true;//1.0.9 Lo quito en 2.0.1 Ya se llama en su llamada
		
		
	EABXADHEVT('CAGCUMKBGA');	
	UYEUYIYECB=IEUIUCYUCC("¡¡ A Contar !!",60);
	
	UYEUYIYECB.alpha=1
	BDEFDQUJJE = YMHIHSNADE.add.tween(UYEUYIYECB).to( { x: YMHIHSNADE.world.centerX }, 800, QUXNHVVDDK);
	BDEFDQUJJE.onComplete.add(
		function (){
			CKOUBGTDUF = YMHIHSNADE.add.tween(UYEUYIYECB).to( { alpha: 0 }, 1000, KYFMRVNHIQ, false);
			CKOUBGTDUF.onComplete.add(function(){
				UYEUYIYECB.kill();
				if (FReconectando(true)==false) //2.0.1 se colgaba
				{
					SGVESYATVX();
				}
				else
				{
					//es correcto que no valide aquí JHHWEKWEJK==false
					WWAYLOUPUQ(TXLWIIINGQ);
				}
			})
			CKOUBGTDUF.start();
		}		
	);
	BDEFDQUJJE.start();
	log(true,"SYJLVBWPIM");
	
}

SGVESYATVX=function(){
	
	var i;
	
	//for (i=KBESPOUXUK.length-1;i>=0;i--)
	log(false,"LLega a SGVESYATVX");
	if (KBESPOUXUK.length>0)
	{
		for (i=0;i<=KBESPOUXUK.length-1;i++)
		{
			//KBESPOUXUK[i].moveDown();
			UJTKROLWWS(KBESPOUXUK[i])
			KBESPOUXUK[i].bringToTop();
		}
		
		for (i=0;i<=BRILHDFUSO.length-1;i++)
		{
			
			UJTKROLWWS(BRILHDFUSO[i])
			
		}
		
		
		for (i=KBESPOUXUK.length-1;i>=0;i--)
		{
			//KBESPOUXUK[KBESPOUXUK.length-1].bringToTop();
			
			CKOUBGTDUF = YMHIHSNADE.add.tween(KBESPOUXUK[i]);
				CKOUBGTDUF.to( {x:YMHIHSNADE.world.centerX
				,y:YMHIHSNADE.world.height-KBESPOUXUK[i].height//-KBESPOUXUK[i].width  //KBESPOUXUK[i].height-
				,angle:0
				}, 600, BSXWFYLCEW);
			
			if (i==0){
				CKOUBGTDUF.onComplete.add(MBCDQIAWIE,this)
			}
			
			CKOUBGTDUF.start();
				
			JLFYUAKDIJ = YMHIHSNADE.add.tween(KBESPOUXUK[i].scale);
			JLFYUAKDIJ.to( {x:XQNKTFDREN
			,y:XQNKTFDREN
			});		
			JLFYUAKDIJ.start();
				
		}
	}
	else
	{
		//console.log("WWAYLOUPUQ Desde recogidas al centro");
		//NOCREO WWAYLOUPUQ();
		WWAYLOUPUQ(); //Se colgaba si no hacías baza.
	}
}

MBCDQIAWIE=function(){
		
		var i;
		

		
		if (KBESPOUXUK.length>0)
		{
			KBESPOUXUK[KBESPOUXUK.length-1].bringToTop();
			NAYBJTKIKA(KBESPOUXUK[KBESPOUXUK.length-1]);
			//log(false,"debe mover "+KBESPOUXUK[KBESPOUXUK.length-1].name);
			CKOUBGTDUF = YMHIHSNADE.add.tween(KBESPOUXUK[KBESPOUXUK.length-1]);
				CKOUBGTDUF.to( {x:YMHIHSNADE.world.centerX
				,y: YMHIHSNADE.world.centerY-100, //0+(KBESPOUXUK[KBESPOUXUK.length-1].height)*2, //  PXEBTYBHGS,  //KBESPOUXUK[i].height-
				angle:  Math.round(Math.random() * (180) - 45)//Math.floor(Math.random() * 90 ) + 1
				}, 50, KYFMRVNHIQ); //1.0.8 Pasa de 100 a 50 milisegundos
			
			if (KBESPOUXUK.length>1)
			{
				CKOUBGTDUF.onComplete.add(
				function () {
					KBESPOUXUK[KBESPOUXUK.length-1].moveUp();
					JLOISTPAPQ.push(KBESPOUXUK[KBESPOUXUK.length-1]);
					EABXADHEVT('WWYKUMYJBJ');
					KBESPOUXUK.pop();
					MBCDQIAWIE()
				},this)
			}
			else
			{
				CKOUBGTDUF.onComplete.add(
				function () {
					JLOISTPAPQ.push(KBESPOUXUK[KBESPOUXUK.length-1]);
					EABXADHEVT('WWYKUMYJBJ');
					KBESPOUXUK.pop();
					MBCDQIAWIE()
					JHKJWHCKWE();
				},this)
			}
			CKOUBGTDUF.start();

		}
}


JHKJWHCKWE=function(){
	var i;
	var NYXTITDLCT=0;
	var LGEVGUTGIL=0;
	var BKDAVGJUHM;
	var AONEAOAEKM=false;
	
	if (JLOISTPAPQ.length>0)
	{
		AONEAOAEKM=true;
	}
	
	//console.log("Mueve para barajar")
	
	BKDAVGJUHM=HHOPUSIABJ(DVNRTQIWGL);
	
	try
	{
		if(BKDAVGJUHM=="D")
		{
			NYXTITDLCT=YMHIHSNADE.world.centerX;
			LGEVGUTGIL=YMHIHSNADE.world.height+(JLOISTPAPQ[JLOISTPAPQ.length-1].height*2);
		}

		if(BKDAVGJUHM=="U")
		{
			NYXTITDLCT=YMHIHSNADE.world.centerX;
			LGEVGUTGIL=0-(JLOISTPAPQ[JLOISTPAPQ.length-1].height*2);
		}	
		
		if(BKDAVGJUHM=="L")
		{
			NYXTITDLCT=0-(JLOISTPAPQ[JLOISTPAPQ.length-1].width*2);
			LGEVGUTGIL=PXEBTYBHGS;
		}	

		if(BKDAVGJUHM=="R")
		{
			NYXTITDLCT=YMHIHSNADE.world.width+(JLOISTPAPQ[JLOISTPAPQ.length-1].width*2);
			LGEVGUTGIL=PXEBTYBHGS;
		}	
	}
	catch(e)
	{
		//console.log("Error grave en ABWBCAJRXQ para barajar")
	}
	
	log(false,"Tama�o YOBEPVEEMW "+BRILHDFUSO.length);
	log(false,"Tama�o Apoyo "+JLOISTPAPQ.length);
	
	
	//try
	//{
		if (BRILHDFUSO.length>0)
		{
			for (i=0;i<=BRILHDFUSO.length-1;i++)
			{
					BDEFDQUJJE = YMHIHSNADE.add.tween(BRILHDFUSO[i]);
					BDEFDQUJJE.to( {x:NYXTITDLCT
					,y:LGEVGUTGIL,  			
					}, 1000, BSXWFYLCEW,false,500);			

					if (AONEAOAEKM==false && i==BRILHDFUSO.length-1)
					{
						//console.log("WWAYLOUPUQ Desde ABWBCAJRXQ para barajar");
						//NOCREO BDEFDQUJJE.onComplete.add(WWAYLOUPUQ,this);
					}
					
					BDEFDQUJJE.start();
			}	
		}
		
		if (JLOISTPAPQ.length>0)
		{
			for (i=0;i<=JLOISTPAPQ.length-1;i++)
			{
					CKOUBGTDUF = YMHIHSNADE.add.tween(JLOISTPAPQ[i]);
					CKOUBGTDUF.to( {x:NYXTITDLCT
					,y:LGEVGUTGIL,  //JLOISTPAPQ[i].height-
					
					}, 1000, BSXWFYLCEW,false,500);
					
					if (AONEAOAEKM==true && i==JLOISTPAPQ.length-1)
					{
						//console.log("WWAYLOUPUQ Desde ABWBCAJRXQ para barajar2");
						//es correcto que no valide aquí JHHWEKWEJK==false
						CKOUBGTDUF.onComplete.add(WWAYLOUPUQ,this);
					}				
					
					CKOUBGTDUF.start();
			}
		}
		else{		
			//NOCREO WWAYLOUPUQ();
		}
	//}
	//catch(e){}
}

BorrarTareasObsoletas=function()
{
	var i;
	
	//Al finalizar, a veces no se borra la tarea porque no se recupera al ser detenida la partida. Paramos hasta detecta una baraja desde server
	for (i=0;i<=HMVFLEYPXM.length-1;i++)
	{
		//if (HMVFLEYPXM[i].RHOLNWBOXR=="FFGKWCDVFE")
		if (HMVFLEYPXM[i].MQUGCIUQII==MQUGCIUQII && HMVFLEYPXM[i].RHOLNWBOXR!="TGUUXMBTHT" && HMVFLEYPXM[i].RHOLNWBOXR!="GCOMOMYQBP")
		{
		//	break;
		//}
		//else
		//{
			HMVFLEYPXM[i]["Borrar"]=true;
			//console.log("Borro porque el último no se borra")
		}			
	}
	
	i=HMVFLEYPXM.length; //2.0.1 Cuelgue Faltaba esto
	while (i--)
	{
		if (HMVFLEYPXM[i]["Borrar"]==true)
		{
			HMVFLEYPXM.splice(i,1);
		}
	}
	
	REDYBSYSNN.splice(0,10000);
	
}

CalculaGBits=function()
{
	var ObjetoGBits=function(GbitsResultado,GbitsNuevoDia)
	{
		this.GbitsResultado=GbitsResultado
		this.GbitsNuevoDia=GbitsNuevoDia
	}
	
	var GbitsResultado;
	var GbitsNuevoDia;
	var SEQJGUOFTO=false;
	
	GbitsResultado=0;
	GbitsNuevoDia=0;
	
	try
	{
		if (XPBCVAGCDQ[TFSXFTYVGQ-1].Amigo==false)
		{
			SEQJGUOFTO=true;
		}
		else
		{
			SEQJGUOFTO=false;
		}
	}
	catch(e)
	{
		SEQJGUOFTO=false;
	}
	
	
	if (SEQJGUOFTO==true)
	{	
		GbitsNuevoDia=EsNuevoDia();
		
		
		if (JVQXQGYDHH==MFENMIFPUA || CNCCBHQJKL==MFENMIFPUA)
		{
			if (JVQXQGYDHH>CNCCBHQJKL)
			{
				if (JVQXQGYDHH==3 && CNCCBHQJKL==0)
				{
					if(PWMIBRSDCJ!=undefined && PWMIBRSDCJ[0].PuntuaciondePRO)
					{
						GbitsResultado=10;
					}
					else
					{
						GbitsResultado=5;
					}
				}
				else
				{
					if(PWMIBRSDCJ!=undefined && PWMIBRSDCJ[0].PuntuaciondePRO)
					{
						GbitsResultado=5;
					}
					else
					{
						GbitsResultado=3;
					}
				}
			}
			else
			{


				if(PWMIBRSDCJ!=undefined && PWMIBRSDCJ[0].PuntuaciondePRO)
				{
					GbitsResultado=-4;
				}
				else
				{
					GbitsResultado=-2;
				}
							
				
				if (PWMIBRSDCJ.length>0)
				{
					if (PWMIBRSDCJ[0].GbitsResultado+PWMIBRSDCJ[0].GbitsDiario+PWMIBRSDCJ[0].GbitsPlus+
						GbitsResultado<0)
						{
							console.log("LO ANULO");
							GbitsResultado=0;
						}				
				}
				
			}
		}
		
		GbitsPendientes=GbitsPendientes+GbitsResultado+GbitsNuevoDia;
	}
	console.log("ANTES METODO: "+GbitsResultado+ " .. "+GbitsNuevoDia )
	var ObjetoMoneda=new ObjetoGBits(GbitsResultado,GbitsNuevoDia);
	console.log("DEPUES METODO: "+ObjetoMoneda.GbitsResultado+ " .. "+ObjetoMoneda.GbitsNuevoDia )
	return ObjetoMoneda;
}

WWAYLOUPUQ=function(TXLWIIINGQ) {
	
	var AWCCMSCOPO;
	var texto2;
    //  You can either set the tab size in the style object:
	var MLFDVPXWYK;
	var DSCVVNAYWK;
	var OUENWKLUUA;
	var QJUYVEJMEB;
	var i;

	//console.log("Crear AWCCMSCOPO puntuacion")
	if (HGFAUFDVDF()==true) //2.0.1 Añado JHHWEKWEJK==false
	{
		

		
		//2.0.1 Cuelgue Me sigo asegurando de que la segunda posición no es también FFGKWCDVFE
		/*if (HMVFLEYPXM.length>=2)
		{
			if (HMVFLEYPXM[1].RHOLNWBOXR=="FFGKWCDVFE") //Segunda posición
			{
				HMVFLEYPXM.splice(1,1);
			}
		}*/
		
		DesbloquearTirada(); //2.0.1 clave:bloqueotirada
		
		//console.log("Valida RPHWVBBGIM Puntuación")
		
		JHHWEKWEJK=true; //1.0.8 Para controlar que si alguien desconecta no reparte echando leches (onsocketdesconectado)
		HUUCUYFBLW.stop();
		TKXPPGUPVV.stop();
		UYAKDBNLTD();
	
		if (EVAILWGGKX==false || FReconectando(true)==true)
		{
			QJUYVEJMEB=0;
		}
		else
		{
			QJUYVEJMEB=3500;
		}
		
		
		
		var	timerpuntuacion = YMHIHSNADE.time.create(true);
		timerpuntuacion.add(QJUYVEJMEB, function()
		{
		
			UIYIUCHWUH();
			
			//ATTUXTNNKX.kill();
			ATTUXTNNKX.kill();
			XQDPVWOUII.kill();
			var SQIRFQMWSL=DVNRTQIWGL;

			//YMHIHSNADE.tweens.pauseAll(); 
			
			
			
			if (SNJCSVWFCC()==true)
			{
				//console.log("Crear AWCCMSCOPO puntuacion2")
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
				
			}
				
			//CRITICO
			if (PPTWRPRLSI==true){
				if (EVAILWGGKX==false)
				{
					UHHXSNXXJK=UHHXSNXXJK+10;
				}
			}
			else
			{
				if (EVAILWGGKX==false)
				{
					PXGXKDDNFK=PXGXKDDNFK+10;
				}
			}
			
			
			if (UHHXSNXXJK>=JLVDFTPUNI || PXGXKDDNFK>=JLVDFTPUNI)
			{
				
				OUENWKLUUA=true;
			}
			else
			{
				OUENWKLUUA=false;
				
			}
			

			if (EVAILWGGKX==true)
			{
				EVAILWGGKX=false;	
			}
			else
			{
				EVAILWGGKX=true;	
			}
			
			if (OUENWKLUUA==true)
			{
				EVAILWGGKX=false;	
				BRJIESNORM();
			}
			

			
			
			if (UHHXSNXXJK>50){
				MLFDVPXWYK=UHHXSNXXJK-50 + " Buenas";
			}
			else{
				MLFDVPXWYK=UHHXSNXXJK+ " Malas";	
			}
			
			if (PXGXKDDNFK>50){
				DSCVVNAYWK=PXGXKDDNFK-50 + " Buenas";
			}
			else{
				DSCVVNAYWK=PXGXKDDNFK+ " Malas";	
			}	
			
			ATTUXTNNKX.text=MLFDVPXWYK+"\n"+DSCVVNAYWK;
				
			KMHMNPUINK="¡¡ Vamos de vueltas !!";
			if (UHHXSNXXJK>=JLVDFTPUNI && PXGXKDDNFK>=JLVDFTPUNI)
			{
				if (PPTWRPRLSI==true){
					JVQXQGYDHH++;
					
					
					
					WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL-1),EVAILWGGKX,1,false,false,false,false);
					////console.log("1. EXOQTFOAQQ VIYQDHWIAA: "+JVQXQGYDHH+" EXOQTFOAQQ YOBEPVEEMW: "+CNCCBHQJKL);
					if (JVQXQGYDHH==MFENMIFPUA)
					{
						if (EGPDVIEJEL==true)
						{
							CotoGanado=true;
						}
						KMHMNPUINK="¡¡ Ganamos la partida\n y el coto !!";
						//KMHMNPUINK="";
						EABXADHEVT("JCGKEWDJBQ");
					}
					else
					{
						KMHMNPUINK="¡¡ Ganamos la partida !!";
						EABXADHEVT("JCGKEWDJBQ");
					}
					
				}
				else
				{
					CNCCBHQJKL++;
					WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL-1),EVAILWGGKX,2,false,false,false,false);
					////console.log("2. EXOQTFOAQQ VIYQDHWIAA: "+JVQXQGYDHH+" EXOQTFOAQQ YOBEPVEEMW: "+CNCCBHQJKL);
					if (CNCCBHQJKL==MFENMIFPUA)
					{
						//KMHMNPUINK="¡¡ Otra vez será.\n Hicieron las 10 últimas.\n Perdimos el coto  :(  !!";
						KMHMNPUINK="¡¡ Perdimos el coto  :(  !!";
						EABXADHEVT("YURJWRGUNO");
					}
					else
					{
						//KMHMNPUINK="Hemos perdido.\n Ellos hicieron las 10 últimas.\n ¡¡ A por ellos !!";
						KMHMNPUINK="Hemos perdido la partida.\n ¡¡ A por ellos !!";
						EABXADHEVT("YURJWRGUNO");
					}
					
				}
			}
			else
			{
				if(UHHXSNXXJK>=JLVDFTPUNI)
				{
					JVQXQGYDHH++;
					WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL-1),EVAILWGGKX,1,false,false,false,false);
					////console.log("3. EXOQTFOAQQ VIYQDHWIAA: "+JVQXQGYDHH+" EXOQTFOAQQ YOBEPVEEMW: "+CNCCBHQJKL);
					if (JVQXQGYDHH==MFENMIFPUA)
					{
						if (EGPDVIEJEL==true)
						{
							CotoGanado=true;
						}
						KMHMNPUINK="¡¡ Ganamos la partida\n y el coto !!";
						ISVLSNLHWR=0;
						EABXADHEVT("JCGKEWDJBQ");						
					}
					else
					{
						KMHMNPUINK="¡¡ Ganamos la partida !!";
						EABXADHEVT("JCGKEWDJBQ");
					}
					
					
				}
				if(PXGXKDDNFK>=JLVDFTPUNI)
				{
					
					CNCCBHQJKL++;
					WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL-1),EVAILWGGKX,2,false,false,false,false);
					////console.log("4. EXOQTFOAQQ VIYQDHWIAA: "+JVQXQGYDHH+" EXOQTFOAQQ YOBEPVEEMW: "+CNCCBHQJKL);
					
					if (CNCCBHQJKL==MFENMIFPUA)
					{
						KMHMNPUINK="¡¡ Perdimos el coto  :(  !!";
						ISVLSNLHWR=0;
						EABXADHEVT("YURJWRGUNO");						
					}
					else
					{
						KMHMNPUINK="Hemos perdido la partida.\n ¡¡ A por ellos !!";
						EABXADHEVT("YURJWRGUNO");
					}
				}
			}
			
			
			
			if (JVQXQGYDHH==MFENMIFPUA || CNCCBHQJKL==MFENMIFPUA )
			{
				var imagenFin;
			
				if (EGPDVIEJEL==true)
				{
					if (SNJCSVWFCC()==true)
					{
						socket.emit("UIEWYIIWIW", socket.id,DFBVDPETGO,MQUGCIUQII);
					}
				}


				if (JVQXQGYDHH==MFENMIFPUA)
				{
					imagenFin='copa';
					//console.log("Emite ya");
					LLSSKSKSKQ();
				}
				else
				{
					imagenFin='perder';
				}
				
				//var BMANCBQGIU=YMHIHSNADE.add.image(YMHIHSNADE.world.width+500,YMHIHSNADE.world.centerY, 'general',imagenFin); //2.0.1 clave:rehuse
				//BMANCBQGIU.anchor.setTo(0.5,0.5);
				//console.log("Mostrando copa "+imagenFin);				
				BMANCBQGIU.frameName=imagenFin;
				BMANCBQGIU.x=YMHIHSNADE.world.width+500;
				BMANCBQGIU.revive();
				//BMANCBQGIU.bringToTop();
				BMANCBQGIU.alpha=1;
				
				//console.log("Incomprensible1");
				BDEFDQUJJE=YMHIHSNADE.add.tween(BMANCBQGIU).to( { x: YMHIHSNADE.world.centerX }, 1000, QUXNHVVDDK,true);
				BDEFDQUJJE.onComplete.add(
					function (){
						 EABXADHEVT("TSYFNOWESC");
						//console.log("Incomprensible2");						 
						 BDEFDQUJJE=YMHIHSNADE.add.tween(BMANCBQGIU).to( { alpha:0 }, 0, KYFMRVNHIQ, true, 3000);
						 BDEFDQUJJE.onComplete.add(	function()
						 {
							 //console.log("Incomprensible3");
							 BMANCBQGIU.kill();
							 BMANCBQGIU.alpha=1;
						 }
						 );
					}		
				);
				
				
			}

			
			
			
				//text = YMHIHSNADE.add.text(YMHIHSNADE.world.centerX, YMHIHSNADE.world.centerY, KMHMNPUINK);
				
			
				//console.log("Escribe AWCCMSCOPO");
				AWCCMSCOPO=IEUIUCYUCC( KMHMNPUINK ,60);
				AWCCMSCOPO.anchor.setTo(0.5,0.5);
				
				//console.log("Escribe texto2");
				
				/*text.x=YMHIHSNADE.world.centerX;
				text.y=YMHIHSNADE.world.centerY;
				
				text.anchor.set(0.5);
				text.align = 'center';


				text.font = 'Arial Black';
				text.fontSize = 40;
				text.fontWeight = 'bold';


				text.stroke = '#961918';
				text.strokeThickness = 7;
				text.fill = '#F8E600';	
				text.boundsAlignH= "center";
				text.boundsAlignV= "middle";*/
				
				var TiempoDelay=1000;
				var TiempoAnimacion=2000;
				
				if (FReconectando(true)==true)
				{
					var TiempoDelay=0;
					var TiempoAnimacion=0;
				}
				
				//console.log("tween AWCCMSCOPO");

				BDEFDQUJJE = YMHIHSNADE.add.tween(AWCCMSCOPO).to( { alpha: 0 }, TiempoDelay, KYFMRVNHIQ, true,TiempoAnimacion);
				BDEFDQUJJE.onComplete.add(
					function()
					{

							//console.log("tween destruye");
							//AWCCMSCOPO.kill();
							var y = document.getElementById("Clasificacion").rows[1].cells;
							y[1].innerHTML = MLFDVPXWYK;
							y[2].innerHTML = JVQXQGYDHH;
							
							var y = document.getElementById("Clasificacion").rows[2].cells;
							y[1].innerHTML = DSCVVNAYWK;
							y[2].innerHTML = CNCCBHQJKL;		
							
							var d=document.getElementById('DivResultado');
							d.style.display = 'block';
							//d.style.zIndex=-100;
							
							if (OUENWKLUUA==true)
							{
								UHHXSNXXJK=0;
								PXGXKDDNFK=0;

								//QSAXUCPASV();
							}
							////console.log("en este punto");
							
							var TiempoDelay=0;
							var TiempoAnimacion=3000;
							
							if (FReconectando(true)==true)
							{
								var TiempoDelay=0;
								var TiempoAnimacion=0;
							}
				
				
							CKOUBGTDUF = YMHIHSNADE.add.tween(AWCCMSCOPO).to( { alpha: 0 }, TiempoDelay, KYFMRVNHIQ, true,TiempoAnimacion);
							CKOUBGTDUF.onComplete.add( 
							
								function()
								{
								
									//var TKXPPGUPVV = YMHIHSNADE.time.create(false);
									//TKXPPGUPVV.add(3000, function(){
							
											var d=document.getElementById('DivResultado');
											d.style.display = 'none';
											//d.style.zIndex=-1;
												
												////console.log("deberia saltar");
												//console.log("MARCADOR NUESTRO "+JVQXQGYDHH+" MARCADOR RIVAL " +CNCCBHQJKL+"  PARTIDASCOTO "+MFENMIFPUA)
												if (JVQXQGYDHH==MFENMIFPUA || CNCCBHQJKL==MFENMIFPUA)
												{
													//console.log("MATO LA CONEXION")
													//var timerdelaymatarconexion;
													//timerdelaymatarconexion=YMHIHSNADE.time.create(false);
													//timerdelaymatarconexion.add(2000, function()
													//{
														MHELAUXKXR();
														//JHKWHCWKWC(); //2.0.7
													//});
													//timerdelaymatarconexion.start();
													
												}												
												else
												{
													//console.log("NUEVO")
													if (1==1) //HGFAUFDVDF()==true)
													{	
														//2.0.1 DCOXIXEBRJ.splice(0,100); clave:reparto
														//2.0.1 JEHYBALODM.splice(0,100); clave:reparto
														
														FinalizaTextoPuntuacionJugador();
														
														
														////console.log("entra");
														//JHHWEKWEJK=false;  2.0.7
								
														//console.log("Antes remove");
														if (EGPDVIEJEL==false)
														{
															console.log("BORRO TODOS LOS TIMERS");
															try
															{
																YMHIHSNADE.time.removeAll()				
																PPWJOWHOIW();
															}
															catch(e){}
														}
														
														console.log("BORRA llega hasta aqui");
														
														BorrarTareasObsoletas();
														OGGWQECXBK(TXLWIIINGQ); //Pruebo a quitar KPQSPDMKJE
												
														
														

	
	

														
														
														
														
													}

												}
										
								} 
									
							);
								//TKXPPGUPVV.start();	
								
							
							
						}
					
			
			
				);	
				
		});	
		timerpuntuacion.start();
	}
	else
	{
		//console.log("No AWCCMSCOPO puntuación");
	}
}



MatarConexionPrueba=function()
{	
	try
	{
		//if (SNJCSVWFCC()==true)
		//{
				YTUGCWECJC=true;
			
				socket.disconnect();
				socket=undefined; //1.0.8 ivan
				//DFBVDPETGO=Math.floor(Math.random());
				JKCANKPQBB=0;
			
		//}
	}
	catch(e){}
	
	
}

MHELAUXKXR=function()
{	

	BNWHJGHWUW.removeAll(); //2.0.7 para poder chatear durante los recuentos. Que se mate en este momento.
	console.log("He sido asesinado de verdad");
	try
	{
		//if (SNJCSVWFCC()==true)
		//{
			YTUGCWECJC=false;
			
				socket.disconnect();
				socket=undefined; //1.0.8 ivan
				DFBVDPETGO=Math.floor(Math.random());
				JKCANKPQBB=0;
			
		//}
	}
	catch(e){}
	
	DFBVDPETGO=Math.floor(Math.random()); //1.0.8 y lo de atrás que he comentado
	
	/*	if (JKCANKPQBB<=2)
	{
		PWGIQBBAWX=true;
	
	}
	else
	{		
		PWGIQBBAWX=false;	
	}*/
	//YMHIHSNADE.destroy();
	
	WNEWPCNXPA(); //2.0.1
	QSAXUCPASV(); //2.0.1
	YMHIHSNADE.state.start("Level",false,false);
	//XEMENNVXGV(); //1.0.8 Si no fallaba la consulta del ránking desde logindesdeweb
}


JHKWHCWKWC=function()
{	
	
	BNWHJGHWUW.removeAll(); //2.0.7 para poder chatear durante los recuentos. Que se mate en este momento.
	
	
	console.log("He sido asesinado de mentira");
	DFBVDPETGO=Math.floor(Math.random()); //1.0.8 y lo de atrás que he comentado
	
	WNEWPCNXPA(); //1.0.9
	QSAXUCPASV(); //1.0.9
	
	/*if (JKCANKPQBB<=2)
	{
		PWGIQBBAWX=true;
	
	}
	else
	{		
		PWGIQBBAWX=false;	
	}*/
	YMHIHSNADE.state.start("Level",false,false);
	//XEMENNVXGV(); //1.0.8 Si no fallaba la consulta del ránking desde logindesdeweb
}

UIYIUCHWUH=function(){
	
	var i;
	
	WTCIGMLJUY.kill(); //2.0.1
	
	try
	{
		GJHWUYGCBN.kill();
		BNVUWCOWEC.kill();
		UYIUYIUYIU.kill();
		DHJGJHGWCY.kill();
	}
	catch(e){}



	FXGSEGRXKC.splice(0,100);
	CBCNHFGWLU.splice(0,100);
	KNVKGHHTYC.splice(0,100);
	TWJONOKGHC.splice(0,100);
	AGKVNAGGLB.splice(0,100);
	VDKOVQXHON.splice(0,100);
	FBSDMRLVEL.splice(0,100);
	KBESPOUXUK.splice(0,100);
	BRILHDFUSO.splice(0,100);
	
	try
	{
		RXKKPILDQT.removeAll();
		SYXHGDSJDY.removeAll();
		BDRJVGFWQH.removeAll();
		PBHYCULPGK.removeAll();
		GSXGWASLIY.removeAll();
		UOPIKJVEKS.removeAll();
		WWFSQDQYYU.removeAll();
		COTMMCVJWP.removeAll();
		//BNWHJGHWUW.removeAll(); 2.0.7 Excepción, para que puedan hablar en el chat mientras se reparte o cuenta. Lo pongo al acabar el coto.		
		VTEVNYKAUB.removeAll();
	
		if (!NNXBXBHSHH.isRunning && !GSGGWGWGWG.isRunning && !OOQQOQOOID.isRunning && !NBMNABHJCG.isRunning && !twMensajeError.isRunning
		&& !MMSJJSJSUW.isRunning && !HGJCWICPWQ.isRunning && !QTQTQTQTQT.isRunning && !NXHWIWPWOW.isRunning && !BDEFDQUJJE.isRunning && !CKOUBGTDUF.isRunning
		&& !JLFYUAKDIJ.isRunning && !PTHQXTTWIH.isRunning && !IRQUWMEVQL.isRunning && !HIFQJUUVEU.isRunning
		)
		{
			//console.log("Todo borrado");
			YMHIHSNADE.tweens.removeAll();
		}	


	}
	catch(e)
	{}
	
	

	
}
		
QSAXUCPASV=function(){

var i;

EligiendoPareja=false; 
BloqueoOrganizador=false;

VBMSLTWABI=0;
//NO DEBE DUGDLNBOGK=false;
AJFQVFUKAP=false;
//JHHWEKWEJK=false; //1.0.8 NO SE PUEDE PONER
		
MYQBNBVHKU=false; //1.0.9
HGMNXSIAPV=false; //1.0.9

if (HUUCUYFBLW!=undefined) //2.0.1 todo este if y el contenido
{
	HUUCUYFBLW.stop();
}
if (HYSGUYGUYT!=undefined)
{
	HYSGUYGUYT.stop();
}
if (BGHJGDWJVI!=undefined)
{
	BGHJGDWJVI.stop();
}	
if (CVTBLMKIGL!=undefined)
{
	CVTBLMKIGL.stop();
	console.log("Limpio CVTBLMKIGL")
}	
if (MMCDRVCGAV!=undefined)
{
	MMCDRVCGAV.stop();
}	
if (TKXPPGUPVV!=undefined)
{
	TKXPPGUPVV.stop();
}	



	if (HMVFLEYPXM.length==0)
	{
		TLGMUNNDGH=false;
	}
	
FSKHWVCMCA=false;
BUJELVTIKU.kill();
//ATTUXTNNKX.kill();
ATTUXTNNKX.kill();
XQDPVWOUII.kill();
IEQDMBJCAY.kill();
YGTNAODFHW.kill();
YJNIRPCWEI.text="";
YJNIRPCWEI.kill();

//YMHIHSNADE.tweens.pauseAll(); 
GJHWUYGCBN.kill(); 
BNVUWCOWEC.kill();
UYIUYIUYIU.kill();
DHJGJHGWCY.kill();

//if (inputField!=undefined)
//{
	;
	PANPKTGSCV.kill();
	HRGDCMPPKU.kill();	
	IFMJVFFEQN.kill()
	KAHCKJHQEO.kill();
//}
log(true,"Limpiando variables..");

//2.0.1
/*for (i=0;i<=FXGSEGRXKC.length-1;i++)
{
	try
	{
		FXGSEGRXKC[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}
}

for (i=0;i<=CBCNHFGWLU.length-1;i++)
{
	try
	{	
		CBCNHFGWLU[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}

for (i=0;i<=KNVKGHHTYC.length-1;i++)
{
	try
	{	
		KNVKGHHTYC[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}

for (i=0;i<=TWJONOKGHC.length-1;i++)
{
	try
	{	
		TWJONOKGHC[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}
for (i=0;i<=AGKVNAGGLB.length-1;i++)
{
	try
	{
		AGKVNAGGLB[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}


for (i=0;i<=VDKOVQXHON.length-1;i++)
{
	try
	{	
		VDKOVQXHON[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}


for (i=0;i<=VDKOVQXHON.length-1;i++)
{
	try
	{	
		VDKOVQXHON[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}

for (i=0;i<=FBSDMRLVEL.length-1;i++)
{
	try
	{	
		FBSDMRLVEL[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}

for (i=0;i<=KBESPOUXUK.length-1;i++)
{
	try
	{	
		KBESPOUXUK[i].destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}

for (i=0;i<=BRILHDFUSO.length-1;i++)
{
	try
	{	
		BRILHDFUSO[i].destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}*/

//IEQDMBJCAY.kill();
//YGTNAODFHW.kill();
//IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);
//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
//IEQDMBJCAY.frameName= 'cantar gris';		//asd
//YGTNAODFHW.frameName='cambiar 7 gris';

NMABWIWAAA();
PAHJCWBNJH();

NBEJWDVLLV.splice(0,1000); //1.0.6

FXGSEGRXKC.splice(0,100);
WUHRYVMYBE.splice(0,100);
CBCNHFGWLU.splice(0,100);
KNVKGHHTYC.splice(0,100);
TWJONOKGHC.splice(0,100);
AGKVNAGGLB.splice(0,100);
ETAUVLWEYR.splice(0,100);
VDKOVQXHON.splice(0,100);
//WSHPROHDIV.splice(0,100); 2.0.7
//TTJKWKBPWO.splice(0,100); 2.0.7
FBSDMRLVEL.splice(0,100);
KBESPOUXUK.splice(0,100);
JLOISTPAPQ.splice(0,100);
BRILHDFUSO.splice(0,100);
KTBOJTXFEU.splice(0,100);
//XYXCEMMRDC.splice(0,100);
//BSFNXQXOTD.splice(0,100);
LUCRWXJMDR=1;
PNVKSWRTOJ=1;
KKPQLKMIQR.splice(0,100);
PPTWRPRLSI=false;
FOQUJVEYFC.splice(0,100);
XYRJNHOCRB.splice(0,100);
HAJIKEVCFP.splice(0,100);
LSJCRLDUCH.splice(0,100);
//NKJHKJHHHE.splice(0,100);

log(true,"Fin limpiando variables..");
}

DesbloquearTirada=function() //2.0.1 clave:bloqueotirada
{
	TLGMUNNDGH=false;
}

WNEWPCNXPA=function()
{
	QSAXUCPASV();
	
	EligiendoPareja=false; 

	BloqueoOrganizador=false;
	
	MQUGCIUQII=null; //2.0.1 20180224 NO PONER EN LIMPIARVARIABLES	
	FSKHWVCMCA=false;
	VBMSLTWABI=0;
	//DUGDLNBOGK=false; 2.0.7
	AJFQVFUKAP=false;
	JHHWEKWEJK=false; //1.0.8
	console.log("Finalizando partida a false WNEWPCNXPA");
	//YMHIHSNADE.tweens.pauseAll(); 
	GJHWUYGCBN.kill();
	BNVUWCOWEC.kill();
	UYIUYIUYIU.kill();
	DHJGJHGWCY.kill();
	
	TLGMUNNDGH=false;
	
	
	log(true,"Limpiando variables conexión nueva..");
	DFBVDPETGO=Math.floor(Math.random());
	YJEISFVFQY();
	
	DCOXIXEBRJ.splice(0,100);
	JEHYBALODM.splice(0,100);
	
	HMVFLEYPXM.splice(0,10000);
	//RLEHYYGBGQ.splice(0,10000); 2.0.7
	REDYBSYSNN.splice(0,10000);
	ArrayBloqueoTareasBack.splice(0,10000);
	JSNTWHPRIL.splice(0,10000); //1.0.7
	//NHLRWTHYVG=false;
	//VKYLOUGFGR=false;
	NBEJWDVLLV.splice(0,1000); //1.0.6
	//ATTUXTNNKX.kill();
	ATTUXTNNKX.text="";
	ATTUXTNNKX.kill();
	XQDPVWOUII.kill();
	YJNIRPCWEI.text="";
	YJNIRPCWEI.kill();
	IEQDMBJCAY.kill();
	YGTNAODFHW.kill();
	
	UHHXSNXXJK=0; //deshaz
	PXGXKDDNFK=0;//deshaz
	JVQXQGYDHH=0;
	CNCCBHQJKL=0;
	//console.log("LIMPIA");
	XPBCVAGCDQ.splice(0,1000);
	KYDWXPGHVY.splice(0,1000);
	//ArrayJugadoresDesconectadosID.splice(0,1000);
	//XYXCEMMRDC.splice(0,1000);
	QLNEIQGEDF.splice(0,1000);
	//NKJHKJHHHE.splice(0,100);
	
	ESKTEXAVHU=0;
	MYQBNBVHKU=false;
	HGMNXSIAPV=false;
	EVAILWGGKX=false;//deshaz
	LUCRWXJMDR=1;
	PNVKSWRTOJ=1;
	DVNRTQIWGL=1
	
	//UIYIUCHWUH(); 2.0.1 lo paso al Level
}

ACGJHQWGVB=function()
{
	//if (RXKKPILDQT==undefined)
	//{
		RXKKPILDQT = YMHIHSNADE.add.group();
		SYXHGDSJDY = YMHIHSNADE.add.group();
		BDRJVGFWQH = YMHIHSNADE.add.group();
		PBHYCULPGK = YMHIHSNADE.add.group();
		GSXGWASLIY = YMHIHSNADE.add.group();
		UOPIKJVEKS = YMHIHSNADE.add.group();
		WWFSQDQYYU = YMHIHSNADE.add.group();
		COTMMCVJWP = YMHIHSNADE.add.group();
		BNWHJGHWUW = YMHIHSNADE.add.group();
		VTEVNYKAUB=YMHIHSNADE.add.group();//1.0.9
	//}
	VTEVNYKAUB.add(JBXCGDTWYW);
	YMHIHSNADE.world.bringToTop(VTEVNYKAUB);
	VTEVNYKAUB.add(NSNUIQUYIU);
	YMHIHSNADE.world.bringToTop(VTEVNYKAUB);
	
	UTIDOKPNXQ=YMHIHSNADE.add.tween(BRQFVLOBSF);
	TTCLPDJAMD=YMHIHSNADE.add.tween(BRQFVLOBSF);
	BDEFDQUJJE=YMHIHSNADE.add.tween(BRQFVLOBSF);
	CKOUBGTDUF=YMHIHSNADE.add.tween(BRQFVLOBSF);
	JLFYUAKDIJ=YMHIHSNADE.add.tween(BRQFVLOBSF);
	PQUFIBKJJH=YMHIHSNADE.add.tween(BRQFVLOBSF);
	LJRRHVSVKD=YMHIHSNADE.add.tween(BRQFVLOBSF);
	LCYAHFBDTT=YMHIHSNADE.add.tween(BRQFVLOBSF);
	NEPGDYQDEI=YMHIHSNADE.add.tween(BRQFVLOBSF);
	PTHQXTTWIH=YMHIHSNADE.add.tween(BRQFVLOBSF);
	IRQUWMEVQL=YMHIHSNADE.add.tween(BRQFVLOBSF);
	HIFQJUUVEU=YMHIHSNADE.add.tween(BRQFVLOBSF);	
	JKSTORAHAM=YMHIHSNADE.add.tween(BRQFVLOBSF);	
	TKXWTMCBFU=YMHIHSNADE.add.tween(BRQFVLOBSF);
	UEIQAMIDWY=YMHIHSNADE.add.tween(BRQFVLOBSF);
	GCKCAMPPHX=YMHIHSNADE.add.tween(BRQFVLOBSF);	
	CFFVTFENDF=YMHIHSNADE.add.tween(BRQFVLOBSF);
	NNXBXBHSHH=YMHIHSNADE.add.tween(BRQFVLOBSF);
	//console.log("Aqui lo creo "+NNXBXBHSHH);
	MMSJJSJSUW=YMHIHSNADE.add.tween(BRQFVLOBSF);
	OOQQOQOOID=YMHIHSNADE.add.tween(BRQFVLOBSF);
	QTQTQTQTQT=YMHIHSNADE.add.tween(BRQFVLOBSF);
	GSGGWGWGWG=YMHIHSNADE.add.tween(BRQFVLOBSF);
	HGJCWICPWQ=YMHIHSNADE.add.tween(BRQFVLOBSF);
	NBMNABHJCG=YMHIHSNADE.add.tween(BRQFVLOBSF);
	NXHWIWPWOW=YMHIHSNADE.add.tween(BRQFVLOBSF);

	BJHGSJHDGS=YMHIHSNADE.add.tween(BRQFVLOBSF);
	IUWYIUFYCW=YMHIHSNADE.add.tween(BRQFVLOBSF);
	NXWIWPWPQQ=YMHIHSNADE.add.tween(BRQFVLOBSF);
	NMSBGIVWOT=YMHIHSNADE.add.tween(BRQFVLOBSF);
	NNCHIEIEWW=YMHIHSNADE.add.tween(BRQFVLOBSF);
	PPWPWWODJF=YMHIHSNADE.add.tween(BRQFVLOBSF);
	HJGWIOWOVD=YMHIHSNADE.add.tween(BRQFVLOBSF);
	HQJHKJCHKW=YMHIHSNADE.add.tween(BRQFVLOBSF);

	JKHKJVHWPW=YMHIHSNADE.add.tween(BRQFVLOBSF);
	NBXIJWGIWP=YMHIHSNADE.add.tween(BRQFVLOBSF);
	JHWJFHWIWW=YMHIHSNADE.add.tween(BRQFVLOBSF);
	MNIIWIWIUD=YMHIHSNADE.add.tween(BRQFVLOBSF);
	DSCHJGSVHJ=YMHIHSNADE.add.tween(BRQFVLOBSF);
	UIWYCUIHWU=YMHIHSNADE.add.tween(BRQFVLOBSF);
	NBSHGWHGWW=YMHIHSNADE.add.tween(BRQFVLOBSF);
	EHIEHUIEHU=YMHIHSNADE.add.tween(BRQFVLOBSF);
	FJHJGFHGFO=YMHIHSNADE.add.tween(BRQFVLOBSF);
	HGHJGWKHAA=YMHIHSNADE.add.tween(BRQFVLOBSF);
	AAAAJGHJGW=YMHIHSNADE.add.tween(BRQFVLOBSF);
	UIWYIEUCWW=YMHIHSNADE.add.tween(BRQFVLOBSF);
	BBBJHKWOOW=YMHIHSNADE.add.tween(BRQFVLOBSF);
	MMSWJWIAHG=YMHIHSNADE.add.tween(BRQFVLOBSF);
	HJGSXHJGSW=YMHIHSNADE.add.tween(BRQFVLOBSF);
	YYYWCGWCGW=YMHIHSNADE.add.tween(BRQFVLOBSF);





	twMensajeError=YMHIHSNADE.add.tween(BRQFVLOBSF);
}
KPQSPDMKJE=function(SQIRFQMWSL)
{
	var i;
	var LHRDGYYJLJ;
	var TodoEnOrden=false;
	////console.log("repartiendo");
	
	if ( (EGPDVIEJEL==true && SNJCSVWFCC()) || EGPDVIEJEL==false ) //2.0.1
	{

		if (CompruebaPeticionReparto(MQUGCIUQII))
		{
		
			if (EGPDVIEJEL==false) //2.0.1
			{
				MQUGCIUQII=Math.random()*100000;
				CompruebaPartidaFinalizada(MQUGCIUQII)
			}
				
			
			var RDBQUAVHEP=SQIRFQMWSL; //ILA RDBQUAVHEP he puesto el var
			//console.log("Nueva partidar")

			//var BRQFVLOBSF=YMHIHSNADE.add.image(-200,-200,'A01');
			
			//console.log("borra");
			//YMHIHSNADE.world.removeAll();
			
			//console.log("Llego a nueva partida");
			
			if (EGPDVIEJEL==false)
			{
					////console.log("entra a repartir");
					ETKKAJPFXQ(RDBQUAVHEP);	
					TodoEnOrden=true;
			}
			else
			{		
			
				//1.0.6 if (AGKVNAGGLB.length==0 && VDKOVQXHON.length==0 && KNVKGHHTYC.length==0 && CBCNHFGWLU.length==0 && XPBCVAGCDQ.length>=4)
				//console.log("BORRAR ESTOY ACA")	;
				if (AGKVNAGGLB.length==0 && VDKOVQXHON.length==0 && KNVKGHHTYC.length==0 && CBCNHFGWLU.length==0 && XPBCVAGCDQ.length>=4 && FReconectando()==false)  //2.0.1 03/02/2018 Clave:Reparto
				{
					////console.log("DE VUELTASSSS. Envío la bataja y limpio variables");
					
					
					//console.log("Turno actual: "+SQIRFQMWSL+" DVNRTQIWGL: "+DVNRTQIWGL+" Toma el control: "+ESKTEXAVHU+" Soy: "+TFSXFTYVGQ+" Reparte "+RDBQUAVHEP);
					//ESKTEXAVHU==TFSXFTYVGQ cabezon
					if (RDBQUAVHEP==TFSXFTYVGQ ||  PermisoParaTomarControl(RDBQUAVHEP) )
					{
						
						LHRDGYYJLJ=false;
						for (i=0;i<=KYDWXPGHVY.length-1;i++)
						{
							if (KYDWXPGHVY[i].SSUNXNEEHN==RDBQUAVHEP)
							{
								LHRDGYYJLJ=true;
							}
							
						}
						
						if (RDBQUAVHEP==TFSXFTYVGQ || LHRDGYYJLJ==true)
						{
							////console.log("Yo creo la baraja. Por cierto soy.. "+TFSXFTYVGQ+" y reparte "+RDBQUAVHEP);
							
							1==1 //1.0.9 if (OSBTHSJKFW()==true) //1.0.8
							{
								//console.log("Creo yo la baraja");
								console.log("CREO LA BARAJA Y LA ENVIO")	;
								
								if (FReconectando()==false)
								{
									ETKKAJPFXQ(RDBQUAVHEP);	
									
									log(false,WUHRYVMYBE.length);
									//log(false,"ROOM "+socket.room);
									//console.log("A NQAQCOINMY");
									log(true,"... y la envío")
									log(true,"Envío que reparte: "+RDBQUAVHEP);
									//console.log("A enviar baraja2");
									HKJWHCKHWQ(WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,(JVQXQGYDHH+CNCCBHQJKL));	
								}
								
							}
						}
					}
					//else
					//{
						/*if(SXFHAGTGJT.length>0)
						{
							CLWUDOTYHT(SXFHAGTGJT,RDBQUAVHEP,true)
						}*/
						
						//1.0.4
						//if (EGPDVIEJEL==false)
						//{
						//	ETKKAJPFXQ(RDBQUAVHEP);	
						//}
						
						//AQUI
					//}
				}
			}
		}
	}
}
	//RDBQUAVHEP=4;
	//DVNRTQIWGL=0;
BRJIESNORM=function()
{
	YJNIRPCWEI.text="";
	YJNIRPCWEI.kill();
	MYQBNBVHKU=false;
	HGMNXSIAPV=false;
	HUUCUYFBLW.stop();
	TKXPPGUPVV.stop();
	//IEQDMBJCAY.kill();		
	//YGTNAODFHW.kill();	
	//IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);
	//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
	//IEQDMBJCAY.frameName= 'cantar gris';		//asd
	//YGTNAODFHW.frameName='cambiar 7 gris';
	
	PAHJCWBNJH();
	NMABWIWAAA();
			
	IEQDMBJCAY.kill();
	YGTNAODFHW.kill();
}	








OYOANGYTVY=function(sprite)
{
	sprite.inputEnabled = true;
	sprite.input.disableDrag();
	sprite.events.onInputDown.add(GJFQTBUCRH);
	
}

UJTKROLWWS=function(sprite)
{
	sprite.inputEnabled = false;
	//sprite.input.disableDrag();
	//sprite.events.onInputDown.add(GJFQTBUCRH);
	
}

GJFQTBUCRH=function(sprite){
	log(false,"mostrando �ltima SRCGCMADME");
	var i;
	var CMWUMHNEHK="VIYQDHWIAA"
	var VEFCIYHBGC=false;
	var EDLRWACYRF;
	var GEFUYWBVWG=[];
	var JKAHQMCRIV=0;
	
	if (1==1)
	{
		//console.log("LONG MAZO RECOGIDO "+KBESPOUXUK.length)
		for (i=0;i<=KBESPOUXUK.length-1;i++)
		{
			//KBESPOUXUK[i].bringToTop();
			//console.log("KEY "+KBESPOUXUK[i].key)
			//if (KBESPOUXUK[i].key.indexOf('baraja')==0)
			//{
			//	JKAHQMCRIV++;
			//}
				
			if (sprite.name==KBESPOUXUK[i].name)
			{
				VEFCIYHBGC=true;
				CMWUMHNEHK="VIYQDHWIAA";
				
				//console.log("KEY: "+KBESPOUXUK[i].key)

				
				//break;
			}
		}	
		//console.log("HAY "+ JKAHQMCRIV);
		
		if (VEFCIYHBGC==true){
			EDLRWACYRF=XYRJNHOCRB;
		}
		else
		{
			//JKAHQMCRIV=0;
			for (i=0;i<=BRILHDFUSO.length-1;i++)
			{
				//if (BRILHDFUSO[i].key.indexOf('baraja')==0)
				//{
				//	JKAHQMCRIV++;
				//}
			
				if (sprite.name==BRILHDFUSO[i].name)
				{					
					VEFCIYHBGC=true;
					CMWUMHNEHK="YOBEPVEEMW";
					
					//if (BRILHDFUSO[i].key.indexOf('baraja')==0)
					//{
					//	JKAHQMCRIV++;
					//}
				
					//break;
				}
			}	
			
			if (VEFCIYHBGC==true){
				EDLRWACYRF=HAJIKEVCFP;
			}
			//else
			//{
			//	JKAHQMCRIV=0;
			//}
		
		}
		

		JKAHQMCRIV=0;
		var PosicionCante=[];
		
		for (i=0;i<=EDLRWACYRF.length-1;i++)
		{
			//console.log("KKKK "+EDLRWACYRF[i].key);
			if (EDLRWACYRF[i].key.indexOf('baraja')==0)
			{
				JKAHQMCRIV++;
				PosicionCante.push(i);
			}
		}
		
		//Para evitar que se pare la recogida de cartas
		for (i=0;i<=EDLRWACYRF.length-1;i++)
		{
			GEFUYWBVWG.push(EDLRWACYRF[i]);
			WWFSQDQYYU.add(GEFUYWBVWG[i])
			NAYBJTKIKA(GEFUYWBVWG[i]);
			//GEFUYWBVWG[i].bringToTop();
		}
		

		
		
		//WWFSQDQYYU.bringToTop();
		//log(false,"ENC"+ sprite.name);
		if (VEFCIYHBGC==true)
		{
			

			
			

			for(i=0;i<=VDKOVQXHON.length-1;i++)
			{
				VDKOVQXHON[i].TNFAGGMKXD.alpha=0.2;
			}
			
			try
			{
				//log(false,"NO ENC");
				twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[0].scale);
				twUB1.to( {x:XQNKTFDREN
				,y:XQNKTFDREN,
				angle:0  
				}
				, MDYSFNYPYP, KYFMRVNHIQ);
				twUB1.start();			
				
				twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[0]);
				twUB1.to( {x:YMHIHSNADE.world.centerX
				,y:PXEBTYBHGS,
				angle:0  
				}
				, MDYSFNYPYP, KYFMRVNHIQ);
				twUB1.start();		
			


			twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[1].scale);
				twUB1.to( {x:XQNKTFDREN
				,y:XQNKTFDREN,
				angle:0  
				}
				, MDYSFNYPYP, KYFMRVNHIQ);
				twUB1.start();			
				
			twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[1]);
				twUB1.to( {x:YMHIHSNADE.world.centerX+(COIVBWRMCC*1)+(YAJVUBPNNW)
				,y:PXEBTYBHGS,
				angle:0  
				}
				, MDYSFNYPYP, KYFMRVNHIQ);
				twUB1.start();		
			

			
			
				twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[2].scale);
				twUB1.to( {x:XQNKTFDREN
				,y:XQNKTFDREN,
				angle:0  
				}
				, MDYSFNYPYP, KYFMRVNHIQ);
				twUB1.start();			
				
			twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[2]);
				twUB1.to( {x:YMHIHSNADE.world.centerX+(COIVBWRMCC*2)+(YAJVUBPNNW*2)
				,y:PXEBTYBHGS,
				angle:0  
				}
				, MDYSFNYPYP, KYFMRVNHIQ);
				twUB1.start();		
			
			
			

			
			
				twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[3].scale);
				twUB1.to( {x:XQNKTFDREN
				,y:XQNKTFDREN,
				angle:0  
				}
				, MDYSFNYPYP, KYFMRVNHIQ);
				twUB1.start();			
				
				twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[3]);
				twUB1.to( {x:YMHIHSNADE.world.centerX+(COIVBWRMCC*3)+(YAJVUBPNNW*3)
				,y:PXEBTYBHGS,
				angle:0  
				}
				, MDYSFNYPYP, KYFMRVNHIQ);
				twUB1.onComplete.add( function(){
					JKKJHKHSWV(GEFUYWBVWG,CMWUMHNEHK,PosicionCante);
					}
				);
				twUB1.start();		
			}
			catch(e)
			{
				//console.log("Error mostrando última baza");
			}
			
		}
	
	}
}



JKKJHKHSWV=function(GEFUYWBVWG,MNABIEVSLA,PosicionCante){
	
		twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[0].scale);
		twUB1.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,false,500);
		twUB1.start();		

		
		twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[1].scale);
		twUB1.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,false,500);
		twUB1.start();		

		
		twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[2].scale);
		twUB1.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,false,500);
		twUB1.start();		
		
//}
//EfectosHacerPequenas2=function(){
		twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[3].scale);
		twUB1.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,false,500);
		
		
		twUB1.onComplete.add( function(){
		
			KHCJWKUIYV(GEFUYWBVWG,MNABIEVSLA,PosicionCante);
		
		    });
		
		
		twUB1.start();		
		


}



KHCJWKUIYV=function(GEFUYWBVWG,MNABIEVSLA,PosicionCante){
	var NOFEDXHMLS;
	var	GHTWROCHVV;
	var i;
	
	if 	(MNABIEVSLA=="VIYQDHWIAA"){
		NOFEDXHMLS=WIEVLYANFM("ULTIMA_Baza",0);
		GHTWROCHVV=FIGQBSJQGA("ULTIMA_Baza",0);
	}
	else{
		//NOFEDXHMLS=WIEVLYANFM("D",98)- (SXSHBRJFIR)-(COIVBWRMCC/2);
		//GHTWROCHVV=FIGQBSJQGA("U",5);
		
		NOFEDXHMLS=WIEVLYANFM("ULTIMA_Baza_Rival",0);
		GHTWROCHVV=FIGQBSJQGA("ULTIMA_Baza_Rival",0);
	}
	

	//console.log("Hay cante "+JKAHQMCRIV);

		//XNFDNBQFUA(GEFUYWBVWG[0]);	
	
	
		XNFDNBQFUA(GEFUYWBVWG[0]);	
		XNFDNBQFUA(GEFUYWBVWG[1]);
		XNFDNBQFUA(GEFUYWBVWG[2]);
		XNFDNBQFUA(GEFUYWBVWG[3]);
		
		if (PosicionCante.length>0) //2.0.7
		{
			for (i=0;i<=PosicionCante.length-1;i++)
			{
				NAYBJTKIKA(GEFUYWBVWG[ PosicionCante[i]   ]);
			}
		}
			

	/*	if (JKAHQMCRIV==0) 2.0.7
		{
			XNFDNBQFUA(GEFUYWBVWG[0]);	
			XNFDNBQFUA(GEFUYWBVWG[1]);
			XNFDNBQFUA(GEFUYWBVWG[2]);
			XNFDNBQFUA(GEFUYWBVWG[3]);
		}

		
		if (JKAHQMCRIV==3)
		{
			XNFDNBQFUA(GEFUYWBVWG[0]);	
			NAYBJTKIKA(GEFUYWBVWG[1]);
			NAYBJTKIKA(GEFUYWBVWG[2]);
			NAYBJTKIKA(GEFUYWBVWG[3]);
		}
		
		if (JKAHQMCRIV==2)
		{
			XNFDNBQFUA(GEFUYWBVWG[0]);	
			XNFDNBQFUA(GEFUYWBVWG[1]);
			NAYBJTKIKA(GEFUYWBVWG[2]);
			NAYBJTKIKA(GEFUYWBVWG[3]);
		}		
		
		
		if (JKAHQMCRIV==1)
		{
			XNFDNBQFUA(GEFUYWBVWG[0]);	
			XNFDNBQFUA(GEFUYWBVWG[1]);
			XNFDNBQFUA(GEFUYWBVWG[2]);
			NAYBJTKIKA(GEFUYWBVWG[3]);
		}

*/
	
		twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[0]);
		GEFUYWBVWG[0].alpha=1;
		twUB1.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV,
		angle:Math.floor(Math.random() * 360) + 1  
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
		//PQUFIBKJJH.onComplete.add(UCJLIRNXGJ,this)						
		twUB1.start();
		
		
		twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[1]);
		GEFUYWBVWG[1].alpha=1;
		twUB1.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV,
		angle:Math.floor(Math.random() * 360) + 1  
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
		//PQUFIBKJJH.onComplete.add(UCJLIRNXGJ,this)						
		twUB1.start();


		twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[2]);
		GEFUYWBVWG[2].alpha=1;
		twUB1.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV,
		angle:Math.floor(Math.random() * 360) + 1  
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
		//PQUFIBKJJH.onComplete.add(UCJLIRNXGJ,this)						
		twUB1.start();		
		
		
		
		twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[3]);
		GEFUYWBVWG[3].alpha=1;
		twUB1.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV,
		angle:Math.floor(Math.random() * 360) + 1  
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
		//PQUFIBKJJH.onComplete.add(UCJLIRNXGJ,this)						
		twUB1.start();
		
		for(i=0;i<=VDKOVQXHON.length-1;i++)
		{
			VDKOVQXHON[i].TNFAGGMKXD.alpha=1;			
		}
	/*	for(i=0;i<=XYRJNHOCRB.length-1;i++)
		{
			XYRJNHOCRB[i].TNFAGGMKXD.alpha=1;
		}		
		for(i=0;i<=HAJIKEVCFP.length-1;i++)
		{
			HAJIKEVCFP[i].TNFAGGMKXD.alpha=1;
		}	*/			
}


quakeEnd=function()
{

 ////console.log("DEBE ARREGLAR CAMARA");	

 	 var margin = -50;
	 //var margin = 0;
	 // and set the world's bounds according to the given margin
	 var x = 0;
	 var y = 0;
	//var x = -margin;
	//var y = -margin;

	 var w = YMHIHSNADE.world.width + (margin * 2);
	 var h = YMHIHSNADE.world.height+ (margin * 2);
	 
  YMHIHSNADE.world.setBounds(x, y, w, h);
  YMHIHSNADE.world.camera.position.set(0,0);
	
}

YJEISFVFQY=function()
{
	var d=document.getElementById('DivResultado');
	d.style.display = 'none';
	//d.style.zIndex=-1;
}

HKJWHCKHWQ=function(WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,KXAWTTIEGG)
{
	
	//socket.emit('NQAQCOINMY', WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,KXAWTTIEGG);
	/////////////
//console.log("Enviándola");
	var QKVJASWVEO=Date.now();
	var GXNRNMAAKW=function( WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,KXAWTTIEGG,MQUGCIUQII,
		OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
		 this.WUHRYVMYBE=WUHRYVMYBE
		 this.DFBVDPETGO=DFBVDPETGO
		 this.RDBQUAVHEP=RDBQUAVHEP
		 this.EVAILWGGKX=EVAILWGGKX
		 this.XPBCVAGCDQ=XPBCVAGCDQ
		 this.KXAWTTIEGG=KXAWTTIEGG
		 this.MQUGCIUQII=MQUGCIUQII
											 
		 this.OYJAHGADFQ=OYJAHGADFQ
		 this.OJPXTRQDKS=OJPXTRQDKS
		 this.LYHKNIMVEB=LYHKNIMVEB
		 this.RHOLNWBOXR=RHOLNWBOXR
		 
		 this.EBAPPJFYSW=new Date(Date.now());
	 }
	var QPHHGPRJAI=[];
	QPHHGPRJAI.splice(0,1000);

		
	var OYJAHGADFQ=Math.random()*100000;
	
	//2.0.1 clave:reparto var MQUGCIUQII=OYJAHGADFQ; //Para que no calcule otra vez
	////console.log("Envio el id partida "+MQUGCIUQII);
	console.log("ENVIO EL ID "+MQUGCIUQII);
	var KCPHFPSPLQ=new GXNRNMAAKW(WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,KXAWTTIEGG,MQUGCIUQII,
		OYJAHGADFQ,socket.id,DFBVDPETGO,'NQAQCOINMY');
	NBEJWDVLLV.push(KCPHFPSPLQ);
	QPHHGPRJAI.push(KCPHFPSPLQ);

	//console.log("envio baraja");
	socket.emit('NQAQCOINMY',QPHHGPRJAI[0],
	 function(XQLEOGMJYG)
	 {		
		//console.log("la recibió el server");	 
		EXBCVLOIYJ(XQLEOGMJYG,'NQAQCOINMY');
	 }
	);						
	QPHHGPRJAI.splice(0,1000);	

	
	/////////////		
}