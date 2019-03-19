function DMLCWWNWRP()
{ 
//alert('Se mete en tapete');
//alert('Creo tapete '+NHLRWTHYVG);


	try
	{
		JBXCGDTWYW.kill();
		if (EGPDVIEJEL==true)
		{
			
			UWHKCVJHKV();
		}
		//JBXCGDTWYW.destroy();
		log(true,"Se destuye. Recibida");
	}
	catch(e){
		log(true,"No se destuye. Recibida");
	}
//alert(NHLRWTHYVG+" "+VKYLOUGFGR);
////console.log('Existe TapeteRemoto0' + YMHIHSNADE.cache.checkImageKey('TapeteRemoto0'));		

 ////console.log("Establece el tapete1 "+NHLRWTHYVG+" "+VKYLOUGFGR);
 if ( ( NHLRWTHYVG==true && VKYLOUGFGR==true ) )
   {
	////console.log("Establece el tapete2");	  
		
		//var key='LEQRGVLYLX';	//2.0.1 03/02/2018

		//KVBNWXDTON=null;
		//KVBNWXDTON=YMHIHSNADE.add.tileSprite(0, 0, WAAJJVPHTG, KKMUHEKLOC, key);		
	   
		var key;
		
	
		
	   if(KVBNWXDTON.name=='LEQRGVLYLX')
	   {
		   key='TapeteRemoto2';
	   }
	   else
	   {
		   key='LEQRGVLYLX';
	   }	
		

		
		try
		{
			////console.log("LEQRGVLYLX");
			if (YMHIHSNADE.cache.checkImageKey(key))
			{
				KVBNWXDTON.name = key;
				KVBNWXDTON.loadTexture(key, 0);
				
			}
			else
			{
				if (JHJEWHFWNL==false)
				{
					////console.log("LEQRGVLYLX error2");
					KVBNWXDTON.name = "IRQGAFESIC";
					KVBNWXDTON.loadTexture("IRQGAFESIC");
					
					////console.log("LEQRGVLYLX error3");
				}
				else
				{
					KVBNWXDTON.name = "Tapete_43";
					KVBNWXDTON.loadTexture("Tapete_43");
					
				}				
			}
			////console.log("LEQRGVLYLX ok");
		}
		catch(e){
			////console.log("LEQRGVLYLX error");
			log(true,"No se pudo cargar el tapete remoto.");
			if (JHJEWHFWNL==false)
			{
				////console.log("LEQRGVLYLX error2");
				KVBNWXDTON.name = "IRQGAFESIC";
				KVBNWXDTON.loadTexture("IRQGAFESIC");
				
				////console.log("LEQRGVLYLX error3");
			}
			else
			{
				KVBNWXDTON.name = "Tapete_43";
				KVBNWXDTON.loadTexture("Tapete_43");
				
			}
		}
		
		
		
		if (key=='LEQRGVLYLX')
		{
			if (YMHIHSNADE.cache.checkImageKey('TapeteRemoto2'))
			{				
				YMHIHSNADE.cache.removeImage('TapeteRemoto2');
			}
		}
		else
		{
			if (YMHIHSNADE.cache.checkImageKey('LEQRGVLYLX'))
			{
				YMHIHSNADE.cache.removeImage('LEQRGVLYLX');
			}			
		}
		
		
		//RCYRGXLWBR='ReversoRemoto'; 2.0.1 03/02/2018
		
		///
		
		
		if (RCYRGXLWBR=='ReversoRemoto')
		{
			if (YMHIHSNADE.cache.checkImageKey('ReversoRemoto2'))
			{
				RCYRGXLWBR='ReversoRemoto2';
			}
			else
			{
				RCYRGXLWBR='ReversoRemoto';
			}
		}	
		else
		{
			if (YMHIHSNADE.cache.checkImageKey('ReversoRemoto'))
			{
				RCYRGXLWBR='ReversoRemoto';
			}
			else
			{
				RCYRGXLWBR='ReversoRemoto2';
			}			
		}
		
		
		/*if (YMHIHSNADE.cache.checkImageKey('ReversoRemoto') && YMHIHSNADE.cache.checkImageKey('ReversoRemoto2'))
		{
			RCYRGXLWBR='ReversoRemoto2'
		}		
		else
		{
			if (YMHIHSNADE.cache.checkImageKey('ReversoRemoto'))
			{
				RCYRGXLWBR='ReversoRemoto'
			}
			else
			{
				RCYRGXLWBR='ReversoRemoto2'
			}
		}*/
		///
		
		
		if (RCYRGXLWBR=='ReversoRemoto')
		{
			if (YMHIHSNADE.cache.checkImageKey('ReversoRemoto2'))
			{				
				YMHIHSNADE.cache.removeImage('ReversoRemoto2');
			}
		}
		else
		{
			if (YMHIHSNADE.cache.checkImageKey('ReversoRemoto'))
			{
				YMHIHSNADE.cache.removeImage('ReversoRemoto');
			}			
		}		
		
		if (RCYRGXLWBR=='ReversoRemoto' || RCYRGXLWBR=='ReversoRemoto2') //Si es alguno de los remotos pero no existe, pongo el dorso normal.
		{
			if (YMHIHSNADE.cache.checkImageKey(RCYRGXLWBR)==false)
			{
				RCYRGXLWBR='Reverso';
			}
		}
		
		//YMHIHSNADE.cache.removeImage('LEQRGVLYLX');
   }
   else
   {
	 
		if (JHJEWHFWNL==false)
		{
				var key='IRQGAFESIC';
		}
		else
		{
				var key='Tapete_43';
		}
			
		//KVBNWXDTON=null;	
		//KVBNWXDTON=YMHIHSNADE.add.tileSprite(0, 0, WAAJJVPHTG, KKMUHEKLOC, key);
			
	   	KVBNWXDTON.name = key;
		
		
		try
		{
				
			KVBNWXDTON.loadTexture(key, 0);
				
		}
		catch(e){
			log(true,"No se pudo cargar el tapete local.");
			if (JHJEWHFWNL==false)
			{
				
				KVBNWXDTON.name = "IRQGAFESIC";
				KVBNWXDTON.loadTexture("IRQGAFESIC");
				
					
			}
			else
			{
				KVBNWXDTON.name = "Tapete_43";		
				KVBNWXDTON.loadTexture("Tapete_43");	
						
			}
		}
		RCYRGXLWBR='Reverso';
   }
   NHLRWTHYVG=false;
   VKYLOUGFGR=false;
   

   ActualizaDorsos(); //2.0.1
   //YMHIHSNADE.world.removeAll();
   
}


function ActualizaDorsos()
{
	var i;
	
	////console.log("ACTUALIZA DORSOS "+RCYRGXLWBR);
	////console.log("Antes error");
	for (i=0;i<=KKXJHKJGVG.length-1;i++)
	{
		////console.log("durante error");
		//try
		//{
			////console.log(RCYRGXLWBR);
			//KKXJHKJGVG[i].game=YMHIHSNADE;
			KKXJHKJGVG[i].loadTexture(RCYRGXLWBR, 0);
			KKXJHKJGVG[i].events.destroy();
			KKXJHKJGVG[i].angle=0;
			KKXJHKJGVG[i].scale.setTo(1,1);
			KKXJHKJGVG[i].anchor.setTo(0.5, 0.5);
			KKXJHKJGVG[i].tint=Phaser.Color.getColor(255,255,255);
			KKXJHKJGVG[i].alpha=1;
		//}
		//catch(e)
		//{}
		////console.log("durante2 error");
	}
	
}

function KKAHAHAHWJ()
{
	var i;
	var XCKJMDNBYC;
	
	
	////console.log("ReversoGlobal1 "+RCYRGXLWBR);
	
	/* 2.0.1 duda
	if (KKXJHKJGVG.length>0)
	{
		if (KKXJHKJGVG[0].game==null)
		{
			for (i=0;i<=KKXJHKJGVG.length-1;i++)
			{
				KKXJHKJGVG[i].destroy();
			}
			KKXJHKJGVG.splice(0,100);
		}
	}*/

	
	if (KKXJHKJGVG.length==0)
	{
		for	(i=1;i<=40;i++)
		{
			KKXJHKJGVG.push(YMHIHSNADE.add.image(-100, YMHIHSNADE.world.centerY/2, RCYRGXLWBR));
			

		}
	}
	else
	{
		
		
	}
	////console.log(KKXJHKJGVG[0]);
	//MazoBarajaBase2=KKXJHKJGVG.slice();
	
	//KKXJHKJGVG[0].x=200;
	//YMHIHSNADE.add.image(100, YMHIHSNADE.world.centerY/2, 'Reverso')
	////console.log("Lo mete");
}

function MuestraProblema(RPHWVBBGIM)
{
	var i;
	var UnActivo=0;

	
	
	//var TweensActivos=YMHIHSNADE.tweens.getAll() 
	try
	{
		if	(!PQUFIBKJJH.isRunning && !LJRRHVSVKD.isRunning && !LCYAHFBDTT.isRunning && !NEPGDYQDEI.isRunning && !HHBPAROITT.isRunning 
					&& !EWXBTDLSHW.isRunning && !BDEFDQUJJE.isRunning && !CKOUBGTDUF.isRunning && !JLFYUAKDIJ.isRunning
					&& !PTHQXTTWIH.isRunning  && !IRQUWMEVQL.isRunning && !HIFQJUUVEU.isRunning && !JKSTORAHAM.isRunning
				&& !TKXWTMCBFU.isRunning && !UEIQAMIDWY.isRunning && !GCKCAMPPHX.isRunning && !CFFVTFENDF.isRunning
				&&	 !NNXBXBHSHH.isRunning && !GSGGWGWGWG.isRunning && !OOQQOQOOID.isRunning && !NBMNABHJCG.isRunning && !twMensajeError.isRunning
		&& !MMSJJSJSUW.isRunning && !HGJCWICPWQ.isRunning && !QTQTQTQTQT.isRunning && !NXHWIWPWOW.isRunning
		&& !JKHKJVHWPW.isRunning && !JKHKJVHWPW.isRunning  &&  !NBXIJWGIWP.isRunning && !TTCLPDJAMD.isRunning
		&& !NMBDSKWHIU.isRunning && !twEfectoCanteGlobal1.isRunning && !twEfectoCanteGlobal2.isRunning && !twDesplazaDerechaGlobal.isRunning && !twDesplazaIzquierdaGlobal.isRunning
		)
		{
			UnActivo=0;
		}
		else		
		{
			UnActivo=1;
		}
	}
	catch(e)
	{
		UnActivo=0;
	}
	//console.log("TOTAL ACTIVOS "+UnActivo)
	return UnActivo
	
	
}
  
function Renderizar(Render, RPHWVBBGIM)
{
	var i;
	var TweensActivos;
	var UnActivo=0;
	//return true;
	if (Render==false)
	{
		Render=true;
	}
	else
	{
		Render=false;
	}
	//console.log(YMHIHSNADE)
	//console.log("Renderizando..."+YMHIHSNADE.time.suggestedFps);

	if (YMHIHSNADE.state.game.lockRender!=Render)
	{
		
		
		if (Render==true)
		{
			var timerRender=YMHIHSNADE.time.create(false);
			timerRender.add(100, function()
			{
				//
				//console.log(TweensActivos)
				
				UnActivo=MuestraProblema(RPHWVBBGIM);
				if (UnActivo==0 )
				{
					YMHIHSNADE.state.game.lockRender=Render;
					//console.log("¡Deshabilita! "+RPHWVBBGIM)
				}
				else
				{
					//console.log("No Deshabilita "+RPHWVBBGIM+" "+UnActivo)
				}	

			});
			timerRender.start();
		}
		else
		{
			YMHIHSNADE.state.game.lockRender=Render;
			//console.log("Habilita "+RPHWVBBGIM);
		}
	}

	//YMHIHSNADE.time.fps=3;
	//YMHIHSNADE.time.advancedTiming=true; 
//	YMHIHSNADE.time.game.suggestedFps=20;
	//YMHIHSNADE.state.game.lockRender=Render;
	//YMHIHSNADE.state.game.lockRender=false;
}	
function ETKKAJPFXQ(RDBQUAVHEP)
{
	
	var XSHRPQMEEY;
	var SGCSHJVERI;
	var i;
	var HVCFEWNDRF;
	
	
	//MQUGCIUQII=Math.random()*100000; //Es importante dejarlo aquí,  porque tb afecta al multijugador, aunque parezca que no.
	//console.log("Creo la baraja");
	NFARLTEOCI(); //2.0.8.37
	ACGJHQWGVB();
	
	//console.log(YMHIHSNADE.lockRender)

//console.log(YMHIHSNADE.state.game.lockRender)

	
	
	if (EGPDVIEJEL==false)
	{
  
		MYQBNBVHKU=false; //1.0.6
		JHHWEKWEJK=false //1.0.8
		//console.log("Finalizando partida a false ETKKAJPFXQ");
		HGMNXSIAPV=false;
  
  
		FXGSEGRXKC=[];
		WUHRYVMYBE=[];

		
		JKLJKLRIRI.kill();
		NCTURHDRYW();
		OcultarElegirEmoticono();
		//NKJHKJHHHE.splice(0,1000);	
		CUUKQAGFEB.x=QETACVSHAR;
		CUUKQAGFEB.revive();

		EHUHWTYXOS=true;
		//OSBTHSJKFW(); //1.0.8 Lo he comentado porque lo pongo en las llamadas
		
		log(true,"He repartido yo");
		////console.log("Limpio desde crear baraja");
		QSAXUCPASV(); 

		
		


		NGHJWGJHWG(); //1.0.8
		//HEUDCWFSMP();

		if (EVAILWGGKX==true)
		{
			//ATTUXTNNKX.revive();
			ATTUXTNNKX.revive();
			XQDPVWOUII.revive();
			//EABXADHEVT('CLVBGPCTEJ');	
		}
		else
		{
			//EABXADHEVT('JCIRYRCUJJ');		
		}
		

		
		
	DMLCWWNWRP();

	}
	
	
	if (EGPDVIEJEL==false)
	{
		FXGSEGRXKC.splice(0,1000)
	}
	else
	{
		WUHRYVMYBE.splice(0,1000)
	}
	
	////console.log("JJ");
 //[7,3,1,6,24,2,4,5,13,14,37,11,22,40,30,32,19,16,39,23,38,28,12,9,18,10,8,20,33,15,17,34,36,27,35,25,31,29,21,26].forEach( function(element, index, Array){	
 [12,37,36,35,34,33,32,31,28,27,26,25,24,23,22,8,4,17,16,15,14,13,9,11,1,7,21,18,5,3,38,6,40,19,30,29,39,20,10,2].forEach( function(element, index, Array){
// [12,37,36,35,34,33,32,31,28,27,26,25,24,23,22,2,4,17,16,15,14,13,9,11,1,7,21,18,5,3,38,6,40,19,30,29,39,20,10,8].forEach( function(element, index, Array){
   //for (XSHRPQMEEY = 1; XSHRPQMEEY <= 40; XSHRPQMEEY++) { 

		XSHRPQMEEY=element;
		/*var idCartaBucleText;
		
		if (XSHRPQMEEY<=9)
		{
			idCartaBucleText="A0"+element.toString();
		}
		else
		{
			idCartaBucleText="A"+element.toString();
		}*/
		
		if(XSHRPQMEEY<=10){		
				SGCSHJVERI="oros";
				HVCFEWNDRF=XSHRPQMEEY;
		}
		else{
			if(XSHRPQMEEY<=20){
				SGCSHJVERI="copas";
				HVCFEWNDRF=XSHRPQMEEY-10;
			}
			else{
				if(XSHRPQMEEY<=30){
					SGCSHJVERI="espadas";
					HVCFEWNDRF=XSHRPQMEEY-20;
				}
				else{
					SGCSHJVERI="bastos";
					HVCFEWNDRF=XSHRPQMEEY-30;
				}
			}
		}
	
		//log(false,SGCSHJVERI);
			////console.log("BARAJA ENVIAR "+KKXJHKJGVG.length)
			if (EGPDVIEJEL==false)
			{
				FXGSEGRXKC.push(new TVYNYTCQYW(SGCSHJVERI,XSHRPQMEEY,HVCFEWNDRF,null,null,null,null,null,MQUGCIUQII));
			}
			else
			{
				WUHRYVMYBE.push(new TVYNYTCQYW(SGCSHJVERI,XSHRPQMEEY,HVCFEWNDRF,null,null,null,null,null,MQUGCIUQII));
			}
    	
    	
	//}
	
   });
	
	//FXGSEGRXKC=Phaser.ArrayUtils.shuffle(FXGSEGRXKC);
	//WUHRYVMYBE=Phaser.ArrayUtils.shuffle(WUHRYVMYBE);


	

	if (EGPDVIEJEL==false)
	{		


		
		////console.log("MAZO BASE "+KKXJHKJGVG.length);
		
		for(i=0;i<=FXGSEGRXKC.length-1;i++){

				
				//WUHRYVMYBE.push(new TVYNYTCQYW(FXGSEGRXKC[i].SGCSHJVERI,FXGSEGRXKC[i].UUOPKETETA,FXGSEGRXKC[i].HVCFEWNDRF,null,null));
		
				////console.log("LLEGA")
				if (HBFBHWJQSQ==false)
				{
					//FXGSEGRXKC[i].TNFAGGMKXD = YMHIHSNADE.add.image(-100, YMHIHSNADE.world.centerY/2, RCYRGXLWBR);
					////console.log("ReversoGlobal2 "+RCYRGXLWBR);
					FXGSEGRXKC[i].TNFAGGMKXD = KKXJHKJGVG[i];
				}
				else
				{
					
					var XCKJMDNBYC;
					
					if (FXGSEGRXKC[i].UUOPKETETA<=10)
					{
						XCKJMDNBYC=(FXGSEGRXKC[i].UUOPKETETA-0)+"_oros";
					}
					else
					{
						if (FXGSEGRXKC[i].UUOPKETETA<=20)
						{
							XCKJMDNBYC=(FXGSEGRXKC[i].UUOPKETETA-10)+"_copas";
						}
						else
						{
							if (FXGSEGRXKC[i].UUOPKETETA<=30)
							{
								XCKJMDNBYC=(FXGSEGRXKC[i].UUOPKETETA-20)+"_espadas";
							}
							else
							{
								XCKJMDNBYC=(FXGSEGRXKC[i].UUOPKETETA-30)+"_bastos";
							}
						}
						
					}
					

				
					FXGSEGRXKC[i].TNFAGGMKXD = YMHIHSNADE.add.image(-100, YMHIHSNADE.world.centerY/2, NXNXBWBBWL,XCKJMDNBYC);  //WUHRYVMYBE
					FXGSEGRXKC[i].TNFAGGMKXD.anchor.setTo(0.5, 0.5);
					//YMHIHSNADE.add.image(-100, YMHIHSNADE.world.centerY/2, NXNXBWBBWL,XCKJMDNBYC);  //WUHRYVMYBE
				}
				
				if (JHJEWHFWNL==true)
				{
					FXGSEGRXKC[i].TNFAGGMKXD.width=FXGSEGRXKC[i].TNFAGGMKXD.width*1.2
					FXGSEGRXKC[i].TNFAGGMKXD.height=FXGSEGRXKC[i].TNFAGGMKXD.height*1.2
				}
				
				////console.log("Grabando "+FXGSEGRXKC[i].UUOPKETETA+" "+FXGSEGRXKC[i].name);
				////console.log("IDCARTA "+FXGSEGRXKC[i].UUOPKETETA);
				FXGSEGRXKC[i].TNFAGGMKXD.name=FXGSEGRXKC[i].UUOPKETETA; //WUHRYVMYBE
				
				GSXGWASLIY.add(FXGSEGRXKC[i].TNFAGGMKXD);
				//FXGSEGRXKC[i].TNFAGGMKXD.anchor.setTo(0.5, 0.5);
					//FXGSEGRXKC[i].TNFAGGMKXD.events.onDragUpdate.add(dragUpdate);

	   
	   
				//REHAZ YMHIHSNADE.physics.arcade.enable(FXGSEGRXKC[i].TNFAGGMKXD);

				//REHAZ FXGSEGRXKC[i].TNFAGGMKXD.body.velocity.x = 0;
				//REHAZ FXGSEGRXKC[i].TNFAGGMKXD.body.bounce.set(0);
				
		
		}
			
			SUMEMLHUFX("D");
			
			NABJPTUWJA(RDBQUAVHEP);
		
		if (RDBQUAVHEP==4)
			{
				if (TFSXFTYVGQ==1){
					////console.log("REPARTO")
					MYGLJKSQBC(false);
				}
				if (TFSXFTYVGQ==2){
					RPMTCXIXGA(false);
				}
				if (TFSXFTYVGQ==3){
					MLSPYKFFCM(false);
				}
				if (TFSXFTYVGQ==4){
					EUNGWSACEK(false);
				}
			}
			
			if (RDBQUAVHEP==1)
			{
				if (TFSXFTYVGQ==2){
					MYGLJKSQBC(false);
				}
				if (TFSXFTYVGQ==3){
					RPMTCXIXGA(false);
				}
				if (TFSXFTYVGQ==4){
					MLSPYKFFCM(false);
				}
				if (TFSXFTYVGQ==1){
					EUNGWSACEK(false);
				}
			}		
			
			if (RDBQUAVHEP==2)
			{
				if (TFSXFTYVGQ==3){
					MYGLJKSQBC(false);
				}
				if (TFSXFTYVGQ==4){
					RPMTCXIXGA(false);
				}
				if (TFSXFTYVGQ==1){
					MLSPYKFFCM(false);
				}
				if (TFSXFTYVGQ==2){
					EUNGWSACEK(false);
				}
			}				

			if (RDBQUAVHEP==3)
			{
				if (TFSXFTYVGQ==4){
					MYGLJKSQBC(false);
				}
				if (TFSXFTYVGQ==1){
					RPMTCXIXGA(false);
				}
				if (TFSXFTYVGQ==2){
					MLSPYKFFCM(false);
				}
				if (TFSXFTYVGQ==3){
					EUNGWSACEK(false);
				}
			}				
			YMHIHSNADE.world.bringToTop(VTEVNYKAUB);
			
			DVNRTQIWGL=RDBQUAVHEP+1;
			if (DVNRTQIWGL==5)
			{
				DVNRTQIWGL=1
			}
			KKQJCHKQEP();
			
			if (EGPDVIEJEL==false)
			{
				MYQBNBVHKU=true;
			}
			else
			{
				JQSOOBSDDS();
			}
		
			
			YMHIHSNADE.world.bringToTop(RXKKPILDQT);
			
			log(false,"Soy el "+TFSXFTYVGQ+" y reparte "+RDBQUAVHEP);
		
	}
		
		

		
		
		
		
 };