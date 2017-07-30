OTGNMRHTVK=function()
{
	return ((UHHXSNXXJK>=JLVDFTPUNI || PXGXKDDNFK>=JLVDFTPUNI) && EVAILWGGKX==true);	
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
	var Cartilla1;
	var Cartilla2;
	var JSHKAHUIQE;
	var Cartilla1Name;
	var Cartilla2Name;
	
	
		
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
	

	for (i=0;i<=XACEBCSJAB.length-1;i++)
	{
		log(false,"CARTAAAAAAAASSSS: "+XACEBCSJAB[i].TNFAGGMKXD.name);
		if(XACEBCSJAB[i].TNFAGGMKXD.name==DVWJGSLMYC  )
		{
				var QLOWMPCLQW=i;
		}
		
		if(XACEBCSJAB[i].TNFAGGMKXD.name==VMMMRXJYSL  )
		{
				var GTAHPENEVN=i;
		}
	}
	
	Cartilla1=XACEBCSJAB[QLOWMPCLQW].TNFAGGMKXD;
	Cartilla1Name=XACEBCSJAB[QLOWMPCLQW].TNFAGGMKXD.name
	Cartilla2=XACEBCSJAB[GTAHPENEVN].TNFAGGMKXD;
	Cartilla2Name=XACEBCSJAB[GTAHPENEVN].TNFAGGMKXD;
	
	if (OMDVKATFLQ==20 && STLEOJDWSU!="D")
	{

			try
			{
				Cartilla1.loadTexture(Cartilla1.name, 0);
			}
			catch(e){}
			
			GRNXLBNUJR = YMHIHSNADE.add.tween(Cartilla1).to( { alpha: 1 }, 2000, KYFMRVNHIQ, true);
			GRNXLBNUJR.onComplete.add(  function(){
					
					try
					{
						JSHKAHUIQE=true;
						for (i=0;i<=VDKOVQXHON.length-1;i++)
						{
							if (VDKOVQXHON[i].AAJNQWXHMY.name==Cartilla1Name)
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
							Cartilla1.loadTexture(RCYRGXLWBR, 0);
							
						}
						catch(e)
						{
							try
							{
								Cartilla1.loadTexture("Reverso", 0);
							}
							catch(e){}
						
						}*/
					}
				}
			);
			
			try
			{
				Cartilla2.loadTexture(Cartilla2.name, 0);
			}
			catch(e){}
			
			YGYIBEIGPR = YMHIHSNADE.add.tween(Cartilla2).to( { alpha: 1 }, 2000, KYFMRVNHIQ, true);
			YGYIBEIGPR.onComplete.add(  function(){
					
					try
					{
						CHJKAHKJHC();
						JSHKAHUIQE=true;
						for (i=0;i<=VDKOVQXHON.length-1;i++)
						{
							if (VDKOVQXHON[i].AAJNQWXHMY.name==Cartilla2Name)
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
							Cartilla2.loadTexture(RCYRGXLWBR, 0);
							
						}
						catch(e)
						{
							try
							{
								Cartilla2.loadTexture("Reverso", 0);
							}
							catch(e){}
						
						}*/
					}
				}
			);
			
		
	}

}

NAYBJTKIKA=function(TNFAGGMKXD){
	if (HBFBHWJQSQ==false)
	{
		try
		{
			TNFAGGMKXD.loadTexture(TNFAGGMKXD.name, 0);
		}
		catch(e){}
	}
}

XNFDNBQFUA=function(TNFAGGMKXD){	
	if (HBFBHWJQSQ==false)
	{
		//log(true,"El reverso global es: "+RCYRGXLWBR)
		try
		{
			TNFAGGMKXD.loadTexture(RCYRGXLWBR, 0);
		}
		catch(e)
		{
			log(true,"El reverso con el catch "+TNFAGGMKXD.key);
			try
			{
				TNFAGGMKXD.loadTexture('Reverso', 0);
			}
			catch(u)
			{}
		}
	}
	
	
}
NPOUCHQXMY=function(UHTPGPRUJA,SJVCMXWVVI,TKWCTNGROU,LDCCGSIBKW){
  var i;
  var XACEBCSJAB;
  var UBWRXKMTQN;
  var LSKPLOTYIB=false;
  
  //YGTNAODFHW.visible=false;
YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
  
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
				
		FBSDMRLVEL.push(new TVYNYTCQYW(XACEBCSJAB[i].SGCSHJVERI,XACEBCSJAB[i].UUOPKETETA,XACEBCSJAB[i].HVCFEWNDRF,XACEBCSJAB[i].TNFAGGMKXD));
		
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
				GNAHFPUEID(XACEBCSJAB,UBWRXKMTQN,UHTPGPRUJA,TKWCTNGROU,LDCCGSIBKW);
			} ,this)

		if (UBWRXKMTQN=="D")
		{
			//YMHIHSNADE.add.tween(NJGFWACAPY.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
			YMHIHSNADE.add.tween(NJGFWACAPY.scale).to( {x:1,y:1}, IRXOKNWTLV, BSXWFYLCEW,true);
		}					
		
		HHBPAROITT.start();	
	}
	else{
		//log(false,"NO ENCONTRADA");
	}
	
}

QPGADJGDVQ =function()
{
	var i;
	var NJGFWACAPY;
	var LSKPLOTYIB=false;
	
	if (YGTNAODFHW.key=="Boton_cambiar_7_on")
	{
		//YGTNAODFHW.visible=false;
		YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
			
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
					GNAHFPUEID(AGKVNAGGLB,"D",TFSXFTYVGQ);
				}
			 ,this)		
			
			HHBPAROITT.start();	
			YMHIHSNADE.add.tween(NJGFWACAPY.scale).to( {x:1,y:1}, IRXOKNWTLV, BSXWFYLCEW,true);
		}
	}
}

GNAHFPUEID=function(XACEBCSJAB,STLEOJDWSU,RRWWKUVRLD,TKWCTNGROU,LDCCGSIBKW){
	
	var NOFEDXHMLS;
	var GHTWROCHVV;
	var MOFGFYOVIG;
	
		
	XACEBCSJAB.push(new TVYNYTCQYW(FBSDMRLVEL[0].SGCSHJVERI,FBSDMRLVEL[0].UUOPKETETA,FBSDMRLVEL[0].HVCFEWNDRF,FBSDMRLVEL[0].TNFAGGMKXD,7,RRWWKUVRLD));
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
						HJDIMRVCSU(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
						JQSOOBSDDS();
					}
					else{
						//XNFDNBQFUA(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
					}
					//if (TKWCTNGROU!=undefined && LDCCGSIBKW!=undefined) //Si viene de ajeno y no del click
					//{
					UODKOBCGYM(TKWCTNGROU,LDCCGSIBKW);
					//}
				}
				,this)
	

		
	HHBPAROITT.start();
	
	if (STLEOJDWSU=="D")	
	{
			
		YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
	}		
	LMGBDQDXWP(); //2017/04/18

}


TengoEl7=function(){
	var i;
	var JSAVOOUOYD=false;
	
	if (FXGSEGRXKC.length>0)
	{
		for (i=0;i<=AGKVNAGGLB.length-1;i++)
		{
			if(AGKVNAGGLB[i].HVCFEWNDRF==7 && AGKVNAGGLB[i].SGCSHJVERI==TGTQPBEQFR)
			{
				JSAVOOUOYD=true;
				break;
			}
		}
	}
	return JSAVOOUOYD;
}





LQJEJOOAPH=function(SCWJTHLKWF,OMDVKATFLQ){
	

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
		WWAYLOUPUQ(); 
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

LGDEYPLFSA=function(UHTPGPRUJA,OMDVKATFLQ,AWCCMSCOPO){

	var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
	var text;
	var timerCante;
					//  The Text is positioned at 0, 100
	text = YMHIHSNADE.add.text(0, 0, DevolverTexto, style);
	text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	//  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
	text.setTextBounds(0, 100, 800, 100);
	//  Start the TKXPPGUPVV running - this is important!
	//  It won't start automatically, allowing you to hook it to button events and the like.
	timerCante = YMHIHSNADE.time.create(false);
	timerCante.add(3000, FYYEWMEHBU, this,text);
	timerCante.start();
}

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

PosibleCante=function(BMCBJHBJWH){
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

	log(true,"Cantes TamaÃ±o: "+ VDKOVQXHON.length);
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
				}
				else
				{
					//alert("llega a cantar 2");
					VSBOFQVPVQ(2);
					VSBOFQVPVQ(4);
				}
			}
			else
			{
				if (TFSXFTYVGQ==ESKTEXAVHU)
				{
					if (PPTWRPRLSI==true)
					{
						for (i=0;i<=KYDWXPGHVY.length-1;i++)
						{
							if (KYDWXPGHVY[i].SSUNXNEEHN==QBXGANOVYU)
							{
								//alert("hasta la cocina 1");
								VSBOFQVPVQ(QBXGANOVYU);
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
							}
							if (KYDWXPGHVY[i].SSUNXNEEHN==LDDXAIVDNC)
							{
								//alert("hasta la cocina 3");
								VSBOFQVPVQ(LDDXAIVDNC);
							}							
						}						
					}
					
				}				
			}
		}
	
		log(true,"Cantes SRCGCMADME Nuestra: "+PPTWRPRLSI);
		log(true,"Cantes Posible Cante "+PosibleCante(AGKVNAGGLB));
		if (PPTWRPRLSI==true && PosibleCante(AGKVNAGGLB)==true )
		{
			//IEQDMBJCAY.visible=true;	
			IEQDMBJCAY.loadTexture('Boton_cantar_on', 0);			
		}
		else{
			//IEQDMBJCAY.visible=false;
			IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);			
		}	
		
		if (PPTWRPRLSI==true && TengoEl7()==true)
		{
			//YGTNAODFHW.visible=true;
			YGTNAODFHW.loadTexture('Boton_cambiar_7_on', 0);
		}
		else
		{
			//YGTNAODFHW.visible=false;
			YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
		}
		
		
	}
	else
	{
		//YGTNAODFHW.visible=false;
		//IEQDMBJCAY.visible=false;
		IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);
		YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
	}
	
}

BHWUWOPQCB=function(DFBVDPETGO,UHTPGPRUJA,PAXBGDCANU, FHEFFYUQFX, EVAILWGGKX, KXAWTTIEGG, OBTBPOULAV,AURESXCGMK,WWKVHIMWYD)
{
	
	
		/////////////

	var QKVJASWVEO=Date.now();
	var GXNRNMAAKW=function( DFBVDPETGO,UHTPGPRUJA,PAXBGDCANU, FHEFFYUQFX, EVAILWGGKX, KXAWTTIEGG, OBTBPOULAV,AURESXCGMK,WWKVHIMWYD,
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
											 
		 this.OYJAHGADFQ=OYJAHGADFQ
		 this.OJPXTRQDKS=OJPXTRQDKS
		 this.LYHKNIMVEB=LYHKNIMVEB
		 this.RHOLNWBOXR=RHOLNWBOXR
		 
		 this.EBAPPJFYSW=new Date(Date.now());
	 }
	var QPHHGPRJAI=[];
	QPHHGPRJAI.splice(0,1000);

		
	var OYJAHGADFQ=Math.random()*100000;
	var KCPHFPSPLQ=new GXNRNMAAKW( DFBVDPETGO,UHTPGPRUJA,PAXBGDCANU, FHEFFYUQFX, EVAILWGGKX, KXAWTTIEGG, OBTBPOULAV,AURESXCGMK,WWKVHIMWYD,
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
	
	//IEQDMBJCAY.visible=false;
	if ( (IEQDMBJCAY.key=="Boton_cantar_on" && UHTPGPRUJA==TFSXFTYVGQ) || UHTPGPRUJA!=TFSXFTYVGQ )
	{
		if (IEQDMBJCAY.key=="Boton_cantar_on" && UHTPGPRUJA==TFSXFTYVGQ)
		{
			IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);
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
					WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,false,false,true,false,false);
				}
				XIAPNYIGXV(UHTPGPRUJA,"oros",true,40);
				//UHHXSNXXJK=UHHXSNXXJK+40;
			}
			else
			{
				if (EGPDVIEJEL==true)
				{
					BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,20,"oros",EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD) ;
					WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,false,true,false,false,false);
				}
				XIAPNYIGXV(UHTPGPRUJA,"oros",true,20);
				//UHHXSNXXJK=UHHXSNXXJK+20;
			}
			FOQUJVEYFC.push("oros")
		}
		
		if ( UUSWYWBMGP==true && BFXFLFDAPV==true && SRFFTPLVMJ("copas")==false)
		{
			log(false,"Canta en copas");
			if (TGTQPBEQFR=="copas")
			{
				if (EGPDVIEJEL==true)
				{			
					BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,40,"copas",EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD) ;
					
					WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,false,false,true,false,false);
				}
				//LGDEYPLFSA("Las 40");
				//UHHXSNXXJK=UHHXSNXXJK+40;
				XIAPNYIGXV(UHTPGPRUJA,"copas",true,40);
			}
			else
			{
				if (EGPDVIEJEL==true)
				{
					BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,20,"copas", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
					
					WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,false,true,false,false,false);
				}
				//LGDEYPLFSA("20 en copas");
				//UHHXSNXXJK=UHHXSNXXJK+20;
				XIAPNYIGXV(UHTPGPRUJA,"copas",true,20);
			}
			FOQUJVEYFC.push("copas")
			
		}

		if ( UBNODRNAGX==true && UNROHJICCV==true && SRFFTPLVMJ("espadas")==false)
		{
			log(false,"Canta en espadas");
			if (TGTQPBEQFR=="espadas")
			{
				if (EGPDVIEJEL==true)
				{
					BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,40,"espadas", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
					
					WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,false,false,true,false,false);
				}
				//LGDEYPLFSA("Las 40");
				//UHHXSNXXJK=UHHXSNXXJK+40;
				XIAPNYIGXV(UHTPGPRUJA,"espadas",true,40);
			}
			else
			{
				if (EGPDVIEJEL==true)
				{
					BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,20,"espadas", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
					
					WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,false,true,false,false,false);
				}
				//LGDEYPLFSA("20 en espadas");
				//UHHXSNXXJK=UHHXSNXXJK+20;
				XIAPNYIGXV(UHTPGPRUJA,"espadas",true,20);
			}
			FOQUJVEYFC.push("espadas")
		}
		
		if ( VREOAIDYYY==true && MCTHFYHCXF==true && SRFFTPLVMJ("bastos")==false)
		{
			log(false,"Canta en bastos");
			if (TGTQPBEQFR=="bastos")
			{
				if (EGPDVIEJEL==true)
				{
					BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,40,"bastos", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
					
					WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,false,false,true,false,false);
				}
				//LGDEYPLFSA("Las 40");
				//UHHXSNXXJK=UHHXSNXXJK+40;
				XIAPNYIGXV(UHTPGPRUJA,"bastos",true,40);
			}
			else
			{
				if (EGPDVIEJEL==true)
				{
					BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,20,"bastos", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
					
					WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,false,true,false,false,false);
				}
				//LGDEYPLFSA("20 en bastos");
				//UHHXSNXXJK=UHHXSNXXJK+20;
				XIAPNYIGXV(UHTPGPRUJA,"bastos",true,20);
			}
			FOQUJVEYFC.push("bastos")
		}	
		if ( OTGNMRHTVK()==true)
		{
			WWAYLOUPUQ(); 
		}	
	}
	
}

IXLQLKYFRI=function(CartaOpcional){
	var i;

	//if (LUCRWXJMDR>=SNVWBLGBPJ){
		//if (CartaOpcional==undefined){
			if (DVNRTQIWGL==TFSXFTYVGQ)
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
					
					if (XPSRYGDPNI(CartaOpcional,TFSXFTYVGQ)==true || LUCRWXJMDR<=SNVWBLGBPJ  )
					{
						CartaOpcional.TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
					}
					else
					{
						CartaOpcional.TNFAGGMKXD.tint=Phaser.Color.getColor(110,110,110);
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
					log(false,"La SRCGCMADME no sería nuestra");
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
						log(false,"Haría SRCGCMADME con otra carta del mismo SGCSHJVERI");
						GMLVJEFHPL=false;
					}
					else{
						log(false,"NO haría SRCGCMADME con otra carta del mismo SGCSHJVERI");
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
		//console.log(RPHWVBBGIM);
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
HHOPUSIABJ=function(JugadorMazo){
	
	var DNNXCWARGV="D";
	log(true,"Dentro de DevuelveUbicacion "+TFSXFTYVGQ+" "+JugadorMazo)
	
	if(TFSXFTYVGQ==1)
	{
		if (JugadorMazo==1){
			DNNXCWARGV="D"
		}
		if (JugadorMazo==2){
			DNNXCWARGV="R"
		}
		if (JugadorMazo==3){
			DNNXCWARGV="U"
		}
		if (JugadorMazo==4){
			DNNXCWARGV="L"
		}	
	}
	
	if(TFSXFTYVGQ==2)
	{
		if (JugadorMazo==2){
			DNNXCWARGV="D"
		}
		if (JugadorMazo==3){
			DNNXCWARGV="R"
		}
		if (JugadorMazo==4){
			DNNXCWARGV="U"
		}
		if (JugadorMazo==1){
			DNNXCWARGV="L"
		}
	}

	if(TFSXFTYVGQ==3)
	{
		if (JugadorMazo==3){
			DNNXCWARGV="D"
		}
		if (JugadorMazo==4){
			DNNXCWARGV="R"
		}
		if (JugadorMazo==1){
			DNNXCWARGV="U"
		}
		if (JugadorMazo==2){
			DNNXCWARGV="L"
		}
	}

	if(TFSXFTYVGQ==4)
	{
		if (JugadorMazo==4){
			DNNXCWARGV="D"
		}
		if (JugadorMazo==1){
			DNNXCWARGV="R"
		}
		if (JugadorMazo==2){
			DNNXCWARGV="U"
		}
		if (JugadorMazo==3){
			DNNXCWARGV="L"
		}
	}	
	
	log(false,"Va a RTOSLKFWHC.."+DNNXCWARGV);
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
			FXGSEGRXKC[i].TNFAGGMKXD.y=YMHIHSNADE.world.height-(AltoCartaEscalado)-(FXGSEGRXKC[i].TNFAGGMKXD.height/2)-(YAJVUBPNNW*2)-70;	
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
			//alert("Moviendo FXGSEGRXKC");
			
			////////////////////////////////////////////////////////////////////
			//
				IOJCRKJSRL();
			
				var JHKSJDHVKJ=120;
		
				timerestoylisto.loop(1000, function(){	//1.0.6
				
					
				
					if (JHKSJDHVKJ<=0 || MYQBNBVHKU==true)
					{
						timerestoylisto.stop();
						
					}
					else
					{
						EnviarEstoyListo();
						JHKSJDHVKJ=JHKSJDHVKJ-1;
					}
					
					//console.log("Reloj");
				
					
				});
				timerestoylisto.start();
				
			
			//
			

			
		}
		else
		{
			JQSOOBSDDS();
			//log(true,"IA Desde Mover FXGSEGRXKC");
			
			//var TKXPPGUPVV = YMHIHSNADE.time.create(false);
			var PLKOPTSHBQ=XNYRSXYRGF(DVNRTQIWGL);
			//var	TKXPPGUPVV = YMHIHSNADE.time.create(false);
			TKXPPGUPVV.stop();
			TKXPPGUPVV.add(PLKOPTSHBQ, function(){
				TKXPPGUPVV.stop(); 
			//console.log("IA DESDE mover mazo");
			IA(TFSXFTYVGQ);} );
			TKXPPGUPVV.start();			
		}
		
		IEQDMBJCAY.visible=true;
		YGTNAODFHW.visible=true;
		//CUUKQAGFEB.x=QETACVSHAR;
		//CUUKQAGFEB.visible=true;

};

EnviarEstoyListo=function()
{
	var i;
	
	
	if (MYQBNBVHKU==false)//1.0.6
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
			var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,socket.id,idPartida,
				OYJAHGADFQ,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK,DFBVDPETGO,'BKEMJDLQQM');
			NBEJWDVLLV.push(KCPHFPSPLQ);
			QPHHGPRJAI.push(KCPHFPSPLQ);


			socket.emit('BKEMJDLQQM',QPHHGPRJAI[0],
			 function(XQLEOGMJYG)
			 {			 
				EXBCVLOIYJ(XQLEOGMJYG,'BKEMJDLQQM');
			 }
			);						
			QPHHGPRJAI.splice(0,1000);	




		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		/////////////////////////////////////////////////////////////
		//Testando
		//1.0.4 Uno por otro
		//console.log("Llamada 1");
		IOJCRKJSRL();
		//LRYVPILWKS();
		
		if (ESKTEXAVHU==TFSXFTYVGQ)
		{
			for (i=0;i<=XPBCVAGCDQ.length-1;i++)
			{
				if (XPBCVAGCDQ[i].XJARYUVBCB==true )
				{
					//socket.emit('BKEMJDLQQM', DFBVDPETGO,XPBCVAGCDQ[i].AURESXCGMK);
					
					
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
					var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,XPBCVAGCDQ[i].AURESXCGMK,idPartida,
						OYJAHGADFQ,XPBCVAGCDQ[i].AURESXCGMK,DFBVDPETGO,'BKEMJDLQQM');
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
			}
			
		}
		//Testando
		
	}
}

LRYVPILWKS=function()
{
	var i;
	var OLJVOASCTV;
	var u;
	var VEFCIYHBGC;
	var UHYCGYFWYJ=0;
	
	//console.log("LRYVPILWKS..");
	for (i=0;i<=XPBCVAGCDQ.length-1;i++)
	{
		if (XPBCVAGCDQ[i].XJARYUVBCB==true)
		{
			
			
			VEFCIYHBGC=false;
			//console.log("Bucle For");
			for ( var u=0;u<=KYDWXPGHVY.length-1;u++)
			{
					
				//console.log("compara "+ ArrayJugadoresDesconectadosID[u]+" con "+XPBCVAGCDQ[i].AURESXCGMK);
				if (KYDWXPGHVY[u].AURESXCGMK==XPBCVAGCDQ[i].AURESXCGMK)
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
			//1.0.6
			VEFCIYHBGC=false;

			for ( var u=0;u<=KYDWXPGHVY.length-1;u++)
			{
					
				//console.log("compara "+ ArrayJugadoresDesconectadosID[u]+" con "+XPBCVAGCDQ[i].AURESXCGMK);
				if (KYDWXPGHVY[u].AURESXCGMK==XPBCVAGCDQ[i].AURESXCGMK)
				{
					VEFCIYHBGC=true;
					break;
				}
			
			}
			
			if (VEFCIYHBGC==true)
			{
				
				KYDWXPGHVY.splice(u,1);
			}		
			//1.0.6
			
		}
			
	}
	
}
QYYXUWQADX=function(){

	DCOXIXEBRJ.splice(0,100);
	JEHYBALODM.splice(0,100);
	
	var s = YMHIHSNADE.add.tween(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		s.to( {x:(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6))  - (YAJVUBPNNW*8) +  COIVBWRMCC)/2)+ (1 *(COIVBWRMCC+ YAJVUBPNNW))
		,y:PXEBTYBHGS,
		angle : 90
		}, 500, KYFMRVNHIQ);		
		
		s.onComplete.add(SESLFOEJHY,this)		
		
		s.start();
		
		
		
		FBSDMRLVEL.push(new TVYNYTCQYW(FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI,FXGSEGRXKC[FXGSEGRXKC.length-1].UUOPKETETA,FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF,FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD,5,FXGSEGRXKC[FXGSEGRXKC.length-1].jugador));
		NAYBJTKIKA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		//FBSDMRLVEL[FBSDMRLVEL.length-1].TNFAGGMKXD.moveDown();
		COTMMCVJWP.add(FBSDMRLVEL[FBSDMRLVEL.length-1].TNFAGGMKXD);
		YMHIHSNADE.world.bringToTop(GSXGWASLIY);
		YMHIHSNADE.world.bringToTop(RXKKPILDQT);
		TGTQPBEQFR=FBSDMRLVEL[FBSDMRLVEL.length-1].SGCSHJVERI;
		//FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.tint =  Phaser.Color.getColor(100,100,100);
		FXGSEGRXKC.pop();
		
		if (EGPDVIEJEL==true)
		{
			ObjTurnoD.visible=true;
			ObjTurnoR.visible=true;
			ObjTurnoU.visible=true;
			ObjTurnoL.visible=true;
		}
		//NUWTGXUUTS();
		
		//alert(DVNRTQIWGL);
		
		//IOJCRKJSRL();
		
		//JWXRWCVLGC();
		//JQSOOBSDDS();
};

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
	//console.log("ESTADO CONEXION "+socket.socket.connected);
	log(false,"KEYYYYYYYYYYYYYYYYYYYY "+sprite.name);
	log(false,"elimina");
	if (1==1) //(!PQUFIBKJJH.isRunning && !LJRRHVSVKD.isRunning && !LCYAHFBDTT.isRunning && !NEPGDYQDEI.isRunning && !HHBPAROITT.isRunning && !EWXBTDLSHW.isRunning && !BDEFDQUJJE.isRunning && !CKOUBGTDUF.isRunning && !JLFYUAKDIJ.isRunning)
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
					log(false,"La última");	
					VOHGWKGYGY(sprite,AGKVNAGGLB,AGKVNAGGLB[i].NPYBJSHIFL+0.5)	
					CYDMXACGSH=true;					
					break;
				}
				else{
					//log(false,"Regresa a casa 2");	
				}
				
				
			}
		}
		
		if (CYDMXACGSH==false){
			for (i=0;i<=AGKVNAGGLB.length-1;i++){
				if (sprite.name==AGKVNAGGLB[i].TNFAGGMKXD.name){
					var posicionX=WIEVLYANFM("D",AGKVNAGGLB[i].NPYBJSHIFL);
					var posicionY=FIGQBSJQGA("D",AGKVNAGGLB[i].NPYBJSHIFL)
					break;
				}
			}
			
			//ape if(ValidaMovimientoJugadorSinActualizarRapido(LUCRWXJMDR,TFSXFTYVGQ)==true)
			//{
				//como quiero que todo siga igual, pong este if, que me fastidiaba los turnos, y en el siguiente, la misma condición.
				log(true, "LON "+VDKOVQXHON.length)
				log(true,"turnoOOO ANTES "+DVNRTQIWGL);
				//EVHFMHFMJU(TFSXFTYVGQ);
				
				log(true,"turnoOOO DESPUES "+DVNRTQIWGL);
			//}
			//else
			//{
			//	//console.log("ERRO: NO puedo mover desde parar drag "+LUCRWXJMDR+" "+TFSXFTYVGQ);
			//}
			
			log(true,"turnoOOO "+DVNRTQIWGL);
			//console.log("PQUFIBKJJH: "+PQUFIBKJJH.isRunning); 
			//console.log("LJRRHVSVKD: "+LJRRHVSVKD.isRunning); 
			//console.log("LCYAHFBDTT: "+LCYAHFBDTT.isRunning); 
			//console.log("NEPGDYQDEI: "+NEPGDYQDEI.isRunning); 
			//console.log("HHBPAROITT: "+HHBPAROITT.isRunning); 
			//console.log("EWXBTDLSHW: "+EWXBTDLSHW.isRunning); 
			//console.log("BDEFDQUJJE: "+BDEFDQUJJE.isRunning); 
			//console.log("CKOUBGTDUF: "+CKOUBGTDUF.isRunning); 
			//console.log("JLFYUAKDIJ: "+JLFYUAKDIJ.isRunning); 
			//console.log("Marcadores: "+UHHXSNXXJK+" "+PXGXKDDNFK+" "+JLVDFTPUNI); 
			for (var k=0;k<=KTBOJTXFEU.length-1;k++){
				//console.log("SEM: "+KTBOJTXFEU[k].AGTXFNIKQD+" "+KTBOJTXFEU[k].SSUNXNEEHN);
			}	

			//console.log("KXAWTTIEGG: "+MYQBNBVHKU);
			//console.log("DVNRTQIWGL: "+DVNRTQIWGL);
			//console.log("Soy: "+TFSXFTYVGQ);
			//console.log("Son Vueltas: "+EVAILWGGKX);
			//console.log("Marcadores: "+UHHXSNXXJK+" - "+PXGXKDDNFK);
			
			if ( ( Math.abs(sprite.x-posicionX)<=AGKVNAGGLB[AGKVNAGGLB.length-1].TNFAGGMKXD.width*1.5 &&
				Math.abs(sprite.y-posicionY)<=AGKVNAGGLB[AGKVNAGGLB.length-1].TNFAGGMKXD.height*1.5 && DVNRTQIWGL==TFSXFTYVGQ)	&& 
				(!PQUFIBKJJH.isRunning && !LJRRHVSVKD.isRunning && !LCYAHFBDTT.isRunning && !NEPGDYQDEI.isRunning && !HHBPAROITT.isRunning && !EWXBTDLSHW.isRunning && !BDEFDQUJJE.isRunning && !CKOUBGTDUF.isRunning && !JLFYUAKDIJ.isRunning) &&
				MYQBNBVHKU==true 
				&&  ( (UHHXSNXXJK<JLVDFTPUNI && PXGXKDDNFK<JLVDFTPUNI)|| EVAILWGGKX==false )
				)

				//&& ValidaMovimientoJugadorSinActualizarRapido(LUCRWXJMDR,TFSXFTYVGQ)==true 
			{

				if (XPSRYGDPNI(AGKVNAGGLB[i],TFSXFTYVGQ)==true)
				{
					//New
					//ape XYXCEMMRDC.push(new NQMQGXXHIL(LUCRWXJMDR,TFSXFTYVGQ) );
					
					if (ValidaMovimientoJugadorSinActualizar(LUCRWXJMDR,TFSXFTYVGQ)==true)
					{
						TKXPPGUPVV.stop(); //Mucho miedo 29/04/2017
						KTBOJTXFEU.push(new NQMQGXXHIL(LUCRWXJMDR,TFSXFTYVGQ) );
						//console.log("BLOQUEO DESDE IHSCVAKSDJ "+TFSXFTYVGQ+" "+LUCRWXJMDR);
						
						//1.0.4
						
						GLFVIKHXMD();
						if (EGPDVIEJEL==false)
						{
							VDKOVQXHON.push(new TVYNYTCQYW(AGKVNAGGLB[i].SGCSHJVERI,AGKVNAGGLB[i].UUOPKETETA,AGKVNAGGLB[i].HVCFEWNDRF,AGKVNAGGLB[i].TNFAGGMKXD,null,TFSXFTYVGQ,null,null));//no hace falta la EBAPPJFYSW hora del server
							
							QTIPILDEPH(sprite,"D",LUCRWXJMDR,TFSXFTYVGQ);
							AGKVNAGGLB.splice(i,1);	
							OROGRNBISW(AGKVNAGGLB,"D");
						}
						else
						{
							
							
							/*var GXNRNMAAKW=function( DFBVDPETGO,TFSXFTYVGQ,AAJNQWXHMY,Turno, TKWCTNGROU, 
								OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
								 this.DFBVDPETGO=DFBVDPETGO
								 this.TFSXFTYVGQ=TFSXFTYVGQ
								 this.AAJNQWXHMY=AAJNQWXHMY
								 this.Turno=Turno
								 this.AGTXFNIKQD=TKWCTNGROU
																	 
								 this.OYJAHGADFQ=OYJAHGADFQ
								 this.OJPXTRQDKS=OJPXTRQDKS
								 this.LYHKNIMVEB=LYHKNIMVEB
								 this.RHOLNWBOXR=RHOLNWBOXR
								 
								 this.EBAPPJFYSW=new Date(Date.now());
							 }
							var QPHHGPRJAI=[];
							QPHHGPRJAI.splice(0,1000);
								
								
							var QPHHGPRJAI=[];
							QPHHGPRJAI.splice(0,1000);
		 
								
							var OYJAHGADFQ=Math.random()*100000;
							var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,TFSXFTYVGQ,AGKVNAGGLB[i].TNFAGGMKXD.name,TFSXFTYVGQ, LUCRWXJMDR,
								OYJAHGADFQ,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK,DFBVDPETGO,'RYUDYPPOXW solo yo');
							NBEJWDVLLV.push(KCPHFPSPLQ);
							QPHHGPRJAI.push(KCPHFPSPLQ);
		
							if (socket!=undefined)
							{
								socket.emit('RYUDYPPOXW solo yo',QPHHGPRJAI[0],
								 function(XQLEOGMJYG)
								 {			 
									EXBCVLOIYJ(XQLEOGMJYG,'RYUDYPPOXW solo yo');
								 }
								);						
								QPHHGPRJAI.splice(0,1000);	
							}*/
						
						}
						
						
						
						//console.log("Acabo de introducir "+VDKOVQXHON[VDKOVQXHON.length-1].SGCSHJVERI+" "+VDKOVQXHON[VDKOVQXHON.length-1].HVCFEWNDRF);
						
						
						
						
						
						
								
						
						if (EGPDVIEJEL==true)
						{
							
							
							/////////////
							
							var QKVJASWVEO=Date.now();
							var GXNRNMAAKW=function( DFBVDPETGO,TFSXFTYVGQ,AAJNQWXHMY,Turno, TKWCTNGROU, EVAILWGGKX,KXAWTTIEGG,OBTBPOULAV,AURESXCGMK,WWKVHIMWYD,
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
								XPBCVAGCDQ[TFSXFTYVGQ-1].WWKVHIMWYD,
								OYJAHGADFQ,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK,DFBVDPETGO,'RYUDYPPOXW');
							NBEJWDVLLV.push(KCPHFPSPLQ);
							QPHHGPRJAI.push(KCPHFPSPLQ);


							socket.emit('RYUDYPPOXW',QPHHGPRJAI[0],
							 function(XQLEOGMJYG)
							 {			 
								EXBCVLOIYJ(XQLEOGMJYG,'RYUDYPPOXW');
								//OROGRNBISW(AGKVNAGGLB,"D");
									/*//console.log("Borrar: Hola"+XQLEOGMJYG+" - "+CartaMovida);
									//console.log("Borrar: Lon "+AGKVNAGGLB.length);
									for (var j=0;j<=AGKVNAGGLB.length-1;j++)
									{
										//console.log("Borrar Recorro "+AGKVNAGGLB[j].name);
										if (AGKVNAGGLB[j].name==CartaMovida)
										{
											//console.log("Borrar: Elimino "+CartaMovida)
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
									WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,false,false,false,true,false);
								}
								if (AGKVNAGGLB[i].HVCFEWNDRF==3)
								{
									WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,false,false,false,false,true);
								}
							}
						}

						
						
					}

				
				}
				

			}
			else
			{
				//alert("reubica");
				OROGRNBISW(AGKVNAGGLB,"D");
				if (DVNRTQIWGL!=TFSXFTYVGQ  && (Math.abs(sprite.x-posicionX)<=AGKVNAGGLB[AGKVNAGGLB.length-1].TNFAGGMKXD.width &&
				Math.abs(sprite.y-posicionY)<=AGKVNAGGLB[AGKVNAGGLB.length-1].TNFAGGMKXD.height)  ){
		
					
						//  The Text is positioned at 0, 100
						text = YMHIHSNADE.add.text(0, 0, SVLGSBPKGJ());
					
						text.x=YMHIHSNADE.world.centerX;
						text.y=YMHIHSNADE.world.centerY+30
						
						text.anchor.set(0.5);
						text.align = 'center';


						text.font = 'Arial Black';
						text.fontSize = 30;
						text.fontWeight = 'bold';


						text.stroke = '#961918';
						text.strokeThickness = 7;
						text.fill = '#F8E600';		
						

						
						//  It won't start automatically, allowing you to hook it to button events and the like.
						var timertextoturno = YMHIHSNADE.time.create(false);
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
	
	
}

CGCMEMLMAG=function(TKWCTNGROU,LDCCGSIBKW){
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
		
		log(false,"Tamaño de la mano "+XACEBCSJAB.length);
		
			
			
			XACEBCSJAB.push(new TVYNYTCQYW(FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI,FXGSEGRXKC[FXGSEGRXKC.length-1].UUOPKETETA,FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF,FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD,5,FXGSEGRXKC[FXGSEGRXKC.length-1].jugador));
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
						PQUFIBKJJH.to( {x:NOFEDXHMLS
						,y:GHTWROCHVV
						,angle:KKQWKUGGSI
						}
						, vVelocidadRobar, KYFMRVNHIQ);
						PQUFIBKJJH.onComplete.add(//BHRQQCWPGM,this)
							function () {
								OROGRNBISW(XACEBCSJAB,UBWRXKMTQN);
								BHRQQCWPGM(TKWCTNGROU,LDCCGSIBKW); //Truco para poder pasar por parámetro
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



BHRQQCWPGM=function(TKWCTNGROU,LDCCGSIBKW){
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
			XACEBCSJAB.push(new TVYNYTCQYW(FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI,FXGSEGRXKC[FXGSEGRXKC.length-1].UUOPKETETA,FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF,FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD,5,FXGSEGRXKC[FXGSEGRXKC.length-1].jugador));
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
						, vVelocidadRobar, KYFMRVNHIQ);
						PQUFIBKJJH.onComplete.add(//NDYHJQQAUL,this)
							function () {
								OROGRNBISW(XACEBCSJAB,UBWRXKMTQN);
								NDYHJQQAUL(TKWCTNGROU,LDCCGSIBKW); //Truco para poder pasar por parámetro
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


NDYHJQQAUL=function(TKWCTNGROU,LDCCGSIBKW){
	var UBWRXKMTQN;
	var DWTJCXXKNS;
	var XACEBCSJAB;
	
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
			XACEBCSJAB.push(new TVYNYTCQYW(FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI,FXGSEGRXKC[FXGSEGRXKC.length-1].UUOPKETETA,FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF,FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD,5,FXGSEGRXKC[FXGSEGRXKC.length-1].jugador));
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
						, vVelocidadRobar, KYFMRVNHIQ);
					PQUFIBKJJH.onComplete.add(//TMUBOPUYAH,this)
							function () {
								OROGRNBISW(XACEBCSJAB,UBWRXKMTQN);
								TMUBOPUYAH(TKWCTNGROU,LDCCGSIBKW); //Truco para poder pasar por parámetro
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



TMUBOPUYAH=function(TKWCTNGROU,LDCCGSIBKW){
	var UBWRXKMTQN;
	var DWTJCXXKNS;
	var XACEBCSJAB;
	var MazoMover=[];
	var i;
	
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
		MazoMover[MazoMover.length-1].jugador));
		
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
					OROGRNBISW(XACEBCSJAB,UBWRXKMTQN);
					DFCCHCJBNP(TKWCTNGROU);
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
text.destroy();
}



VOHGWKGYGY=function(sprite, Array, BBSGITWRQX){
	//Envía la posición al resto de compañeros
	for (var i=0; i<=Array.length-1; i++){
		if (Array[i].TNFAGGMKXD.name==sprite.name){
			Array[i].NPYBJSHIFL=BBSGITWRQX;	
			if (EGPDVIEJEL==true)
			{
				socket.emit('SSPKARCWJW', DFBVDPETGO,TFSXFTYVGQ,Array[i].TNFAGGMKXD.name,BBSGITWRQX) ;
			}
			break;
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
	//Para que cuando robe el 7 sea la última
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
	
	
	EWXBTDLSHW = YMHIHSNADE.add.tween(NNLCEDVGOV[0].TNFAGGMKXD);
		EWXBTDLSHW.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
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
		EWXBTDLSHW.start();
	}
	
}

JQSOOBSDDS=function(){
var i;
	
		
		for (i=0;i<=AGKVNAGGLB.length-1;i++){
			AGKVNAGGLB[i].TNFAGGMKXD.inputEnabled = true;
			AGKVNAGGLB[i].TNFAGGMKXD.input.enableDrag(false,true);
			//AGKVNAGGLB[i].TNFAGGMKXD.input.allowVerticalDrag = false;
			//AGKVNAGGLB[i].TNFAGGMKXD.events.onInputUp.add(QTIPILDEPH);
			AGKVNAGGLB[i].TNFAGGMKXD.events.onDragUpdate.add(WTNGDOQIWY); 
			AGKVNAGGLB[i].TNFAGGMKXD.events.onDragStop.add(IHSCVAKSDJ); 
		}
		JWXRWCVLGC(1); //ILA 20170128 PELIGROSO. LO HE AÃ‘ADIDO
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


RAVHQRVMNJ=function(UHTPGPRUJA,SJVCMXWVVI,BBSGITWRQX){
	//if (TFSXFTYVGQ!=UHTPGPRUJA){
		
		if(TFSXFTYVGQ==1){
			if (UHTPGPRUJA==2){
				UFYWSHNLRM(CBCNHFGWLU,"R",SJVCMXWVVI,BBSGITWRQX);
			}
			if (UHTPGPRUJA==3){
				UFYWSHNLRM(TWJONOKGHC,"U",SJVCMXWVVI,BBSGITWRQX);
			}
			if (UHTPGPRUJA==4){
				UFYWSHNLRM(KNVKGHHTYC,"L",SJVCMXWVVI,BBSGITWRQX);
			}		
		}
	
		if(TFSXFTYVGQ==2){
			if (UHTPGPRUJA==3){
				UFYWSHNLRM(CBCNHFGWLU,"R",SJVCMXWVVI,BBSGITWRQX);
			}
			if (UHTPGPRUJA==4){
				UFYWSHNLRM(TWJONOKGHC,"U",SJVCMXWVVI,BBSGITWRQX);
			}
			if (UHTPGPRUJA==1){
				UFYWSHNLRM(KNVKGHHTYC,"L",SJVCMXWVVI,BBSGITWRQX);
			}
		
		}	

		if(TFSXFTYVGQ==3){
			if (UHTPGPRUJA==4){
				UFYWSHNLRM(CBCNHFGWLU,"R",SJVCMXWVVI,BBSGITWRQX);
			}
			if (UHTPGPRUJA==1){
				UFYWSHNLRM(TWJONOKGHC,"U",SJVCMXWVVI,BBSGITWRQX);
			}
			if (UHTPGPRUJA==2){
				UFYWSHNLRM(KNVKGHHTYC,"L",SJVCMXWVVI,BBSGITWRQX);
			}		
		}

		if(TFSXFTYVGQ==4){
			if (UHTPGPRUJA==1){
				UFYWSHNLRM(CBCNHFGWLU,"R",SJVCMXWVVI,BBSGITWRQX);
			}
			if (UHTPGPRUJA==2){
				UFYWSHNLRM(TWJONOKGHC,"U",SJVCMXWVVI,BBSGITWRQX);
			}
			if (UHTPGPRUJA==3){
				UFYWSHNLRM(KNVKGHHTYC,"L",SJVCMXWVVI,BBSGITWRQX);
			}	
		}		
	//}

}

UFYWSHNLRM=function(XACEBCSJAB,STLEOJDWSU,SJVCMXWVVI,BBSGITWRQX){
	for (var i=0;i<=XACEBCSJAB.length-1;i++){
		if(XACEBCSJAB[i].TNFAGGMKXD.name==SJVCMXWVVI){
			XACEBCSJAB[i].NPYBJSHIFL=BBSGITWRQX;
			OROGRNBISW(XACEBCSJAB,STLEOJDWSU,true,SJVCMXWVVI)
			break;
		}
	}
}

EfectosRecogerCartas1=function(){
	//for (i=0;i<=VDKOVQXHON.length-1;i++){
	
	var i;	
		
		//CHJKAHKJHC();
		if (YBVSVUGPJG.length>=1){
		//log(false,"RECOJO CARTA 1");
			XNFDNBQFUA(YBVSVUGPJG[0].TNFAGGMKXD);
			
			if (PPTWRPRLSI==true){
					for (i=1;i<=XYRJNHOCRB.length;i++)
					{
						XYRJNHOCRB.alpha=1;
					}
					XYRJNHOCRB.splice(0,10);
					VRLYJAAHUE(YBVSVUGPJG[0].TNFAGGMKXD);
					PQUFIBKJJH = YMHIHSNADE.add.tween(YBVSVUGPJG[0].TNFAGGMKXD);
					PQUFIBKJJH.to( {x: WIEVLYANFM("ULTIMA_Baza",0)
					,y:FIGQBSJQGA("ULTIMA_Baza",0),//YMHIHSNADE.world.height- VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(EfectosRecogerCartas2,this)						
					PQUFIBKJJH.start();
					WWFSQDQYYU.add(YBVSVUGPJG[0].TNFAGGMKXD);
					KBESPOUXUK.push(YBVSVUGPJG[0].TNFAGGMKXD);
					XYRJNHOCRB.push(YBVSVUGPJG[0].TNFAGGMKXD);
					OYOANGYTVY(YBVSVUGPJG[0].TNFAGGMKXD);
				}
				else{
				
				for (i=1;i<=HAJIKEVCFP.length;i++)
				{
					HAJIKEVCFP.alpha=1;
				}
				HAJIKEVCFP.splice(0,10);
				VRLYJAAHUE(YBVSVUGPJG[0].TNFAGGMKXD);
				PQUFIBKJJH = YMHIHSNADE.add.tween(YBVSVUGPJG[0].TNFAGGMKXD);
					PQUFIBKJJH.to( {x:WIEVLYANFM("ULTIMA_Baza_Rival",0)
					,y:FIGQBSJQGA("ULTIMA_Baza_Rival",0),//0+ VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(EfectosRecogerCartas2,this)			
					PQUFIBKJJH.start();
					WWFSQDQYYU.add(YBVSVUGPJG[0].TNFAGGMKXD);
					BRILHDFUSO.push(YBVSVUGPJG[0].TNFAGGMKXD);
					HAJIKEVCFP.push(YBVSVUGPJG[0].TNFAGGMKXD);
					OYOANGYTVY(YBVSVUGPJG[0].TNFAGGMKXD);
			
				}
		//log(false,"fin RECOJO CARTA 1");
		}
		
		
}

EfectosRecogerCartas2=function(){
	//for (i=0;i<=VDKOVQXHON.length-1;i++){
		if (YBVSVUGPJG.length>=2){		
		//log(false,"RECOJO CARTA 2");
			XNFDNBQFUA(YBVSVUGPJG[1].TNFAGGMKXD);
			
			if (PPTWRPRLSI==true){
					VRLYJAAHUE(YBVSVUGPJG[1].TNFAGGMKXD);
					PQUFIBKJJH = YMHIHSNADE.add.tween(YBVSVUGPJG[1].TNFAGGMKXD);
					PQUFIBKJJH.to( {x:WIEVLYANFM("ULTIMA_Baza",0)
					,y:FIGQBSJQGA("ULTIMA_Baza",0),//YMHIHSNADE.world.height- YBVSVUGPJG[YBVSVUGPJG.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(EfectosRecogerCartas3,this)						
					PQUFIBKJJH.start();
					
					KBESPOUXUK.push(YBVSVUGPJG[1].TNFAGGMKXD);
					XYRJNHOCRB.push(YBVSVUGPJG[1].TNFAGGMKXD);
					OYOANGYTVY(YBVSVUGPJG[1].TNFAGGMKXD);
					WWFSQDQYYU.add(YBVSVUGPJG[1].TNFAGGMKXD);
				}
				else{
					
					VRLYJAAHUE(YBVSVUGPJG[1].TNFAGGMKXD);
					PQUFIBKJJH = YMHIHSNADE.add.tween(YBVSVUGPJG[1].TNFAGGMKXD);
					PQUFIBKJJH.to( {x:WIEVLYANFM("ULTIMA_Baza_Rival",0)
					,y:FIGQBSJQGA("ULTIMA_Baza_Rival",0),//0+ YBVSVUGPJG[YBVSVUGPJG.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(EfectosRecogerCartas3,this)						
					PQUFIBKJJH.start();
	
					BRILHDFUSO.push(YBVSVUGPJG[1].TNFAGGMKXD);
					HAJIKEVCFP.push(YBVSVUGPJG[1].TNFAGGMKXD);
					OYOANGYTVY(YBVSVUGPJG[1].TNFAGGMKXD);					
					WWFSQDQYYU.add(YBVSVUGPJG[1].TNFAGGMKXD);
				}
		//log(false,"fin RECOJO CARTA 2");
		}
		
		
}

EfectosRecogerCartas3=function(){
	//for (i=0;i<=YBVSVUGPJG.length-1;i++){
		if (YBVSVUGPJG.length>=3){	
			XNFDNBQFUA(YBVSVUGPJG[2].TNFAGGMKXD);
		//	log(false,"RECOJO CARTA3");
				if (PPTWRPRLSI==true){
					VRLYJAAHUE(YBVSVUGPJG[2].TNFAGGMKXD);
					PQUFIBKJJH = YMHIHSNADE.add.tween(YBVSVUGPJG[2].TNFAGGMKXD);
					PQUFIBKJJH.to( {x:WIEVLYANFM("ULTIMA_Baza",0)
					,y:FIGQBSJQGA("ULTIMA_Baza",0),//YMHIHSNADE.world.height- YBVSVUGPJG[YBVSVUGPJG.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(EfectosRecogerCartas4,this)					
					PQUFIBKJJH.start();
					
					KBESPOUXUK.push(YBVSVUGPJG[2].TNFAGGMKXD);
					XYRJNHOCRB.push(YBVSVUGPJG[2].TNFAGGMKXD);
					OYOANGYTVY(YBVSVUGPJG[2].TNFAGGMKXD);
					WWFSQDQYYU.add(YBVSVUGPJG[2].TNFAGGMKXD);				
				}
				else{
					VRLYJAAHUE(YBVSVUGPJG[2].TNFAGGMKXD);
					PQUFIBKJJH= YMHIHSNADE.add.tween(YBVSVUGPJG[2].TNFAGGMKXD);
					PQUFIBKJJH.to( {x:WIEVLYANFM("ULTIMA_Baza_Rival",0)
					,y:FIGQBSJQGA("ULTIMA_Baza_Rival",0),//0+ YBVSVUGPJG[YBVSVUGPJG.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(EfectosRecogerCartas4,this)					
					PQUFIBKJJH.start();
					
					BRILHDFUSO.push(YBVSVUGPJG[2].TNFAGGMKXD);
					HAJIKEVCFP.push(YBVSVUGPJG[2].TNFAGGMKXD);
					OYOANGYTVY(YBVSVUGPJG[2].TNFAGGMKXD);					
					WWFSQDQYYU.add(YBVSVUGPJG[2].TNFAGGMKXD);
				}
	//	log(false,"fin RECOJO CARTA 3");
		}
		
		
}


EfectosRecogerCartas4=function(TKWCTNGROU,LDCCGSIBKW){
	//for (i=0;i<=YBVSVUGPJG.length-1;i++){
	//log(false,"se mete 4");
		if (YBVSVUGPJG.length>=4){
				
			XNFDNBQFUA(YBVSVUGPJG[3].TNFAGGMKXD);
			//log(false,"RECOJO CARTA 4");
		//	log(false,"Quiere Robar...");
			if (PPTWRPRLSI==true){
					VRLYJAAHUE(YBVSVUGPJG[3].TNFAGGMKXD);
					PQUFIBKJJH = YMHIHSNADE.add.tween(YBVSVUGPJG[3].TNFAGGMKXD);
					PQUFIBKJJH.to( {x:WIEVLYANFM("ULTIMA_Baza",0)
					,y:FIGQBSJQGA("ULTIMA_Baza",0),//YMHIHSNADE.world.height- YBVSVUGPJG[YBVSVUGPJG.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					
					
			
					if (FXGSEGRXKC.length>0){
						PQUFIBKJJH.onComplete.add(//CGCMEMLMAG,this)
							function () {
							PPYGSSQBDV(TKWCTNGROU,LDCCGSIBKW);
							KBESPOUXUK.push(YBVSVUGPJG[3].TNFAGGMKXD)
							XYRJNHOCRB.push(YBVSVUGPJG[3].TNFAGGMKXD);
							OYOANGYTVY(YBVSVUGPJG[3].TNFAGGMKXD);
							WWFSQDQYYU.add(YBVSVUGPJG[3].TNFAGGMKXD);
							//CGCMEMLMAG(TKWCTNGROU,LDCCGSIBKW); //Truco para poder pasar por parámetro
						}
						);
					}
					else
					{
						log(false,"se debería meter aquí");
						KBESPOUXUK.push(YBVSVUGPJG[3].TNFAGGMKXD)
						XYRJNHOCRB.push(YBVSVUGPJG[3].TNFAGGMKXD);
						OYOANGYTVY(YBVSVUGPJG[3].TNFAGGMKXD);
						WWFSQDQYYU.add(YBVSVUGPJG[3].TNFAGGMKXD);
						PQUFIBKJJH.onComplete.add( function(){ DFCCHCJBNP(TKWCTNGROU)} )
					}
					PQUFIBKJJH.start();
					
				
				}
				else{
					VRLYJAAHUE(YBVSVUGPJG[3].TNFAGGMKXD);
					PQUFIBKJJH = YMHIHSNADE.add.tween(YBVSVUGPJG[3].TNFAGGMKXD);
					PQUFIBKJJH.to( {x:WIEVLYANFM("ULTIMA_Baza_Rival",0)
					,y:FIGQBSJQGA("ULTIMA_Baza_Rival",0),//0+ YBVSVUGPJG[YBVSVUGPJG.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					if (FXGSEGRXKC.length>0){
						PQUFIBKJJH.onComplete.add(//CGCMEMLMAG,this)
							function () {
							PPYGSSQBDV(TKWCTNGROU,LDCCGSIBKW);
							BRILHDFUSO.push(YBVSVUGPJG[3].TNFAGGMKXD);
							HAJIKEVCFP.push(YBVSVUGPJG[3].TNFAGGMKXD);
							OYOANGYTVY(YBVSVUGPJG[3].TNFAGGMKXD);
							WWFSQDQYYU.add(YBVSVUGPJG[3].TNFAGGMKXD);
							//CGCMEMLMAG(TKWCTNGROU,LDCCGSIBKW); //Truco para poder pasar por parámetro
						}
						);
					}	
					else
					{
						log(false,"o aquí");
						BRILHDFUSO.push(YBVSVUGPJG[3].TNFAGGMKXD);
						HAJIKEVCFP.push(YBVSVUGPJG[3].TNFAGGMKXD);
						OYOANGYTVY(YBVSVUGPJG[3].TNFAGGMKXD);
						WWFSQDQYYU.add(YBVSVUGPJG[3].TNFAGGMKXD);
						PQUFIBKJJH.onComplete.add( function(){ DFCCHCJBNP(TKWCTNGROU)})
					}					
					PQUFIBKJJH.start();
					
								
			
				}
		//log(false,"fin RECOJO CARTA 4");
		}
		
		
		//YBVSVUGPJG.splice(0,4);
		
}

PPYGSSQBDV=function(TKWCTNGROU,LDCCGSIBKW){
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
	if (LSKPLOTYIB==true && FBSDMRLVEL[0].VVRCMEUNOJ>7 && TKWCTNGROU==5 &&  (  (PPTWRPRLSI==true && (UBWRXKMTQN=="D" || UBWRXKMTQN=="U"))  ||  (PPTWRPRLSI==false && (UBWRXKMTQN=="L" || UBWRXKMTQN=="R") )     )  ){
		log(false,"TVYNYTCQYW a cambiar "+BQJIVKRBLA);
		NPOUCHQXMY(EYCRTUIDMY,BQJIVKRBLA,TKWCTNGROU,LDCCGSIBKW); //Aprovecho la función NPOUCHQXMY para los cambios forzados de última LUCRWXJMDR
			//Debo arrastrar TKWCTNGROU,LDCCGSIBKW porque lo usa CGCMEMLMAG
		
	
	}
	else
	{
		CGCMEMLMAG(TKWCTNGROU,LDCCGSIBKW);
	}

}


IEUIUCYUCC=function(RPHWVBBGIM,Tamano) {

	var text;
	var grd;
	

	text = YMHIHSNADE.add.text(0, 0, RPHWVBBGIM);
	
	text.x=YMHIHSNADE.world.centerX;
	text.y=YMHIHSNADE.world.centerY
	
	text.anchor.set(0.5);
    text.align = 'center';


    text.font = 'Arial Black';
    text.fontSize = Tamano;
    text.fontWeight = 'bold';


    text.stroke = '#961918';
    text.strokeThickness = 10;
	text.fill = '#F8E600';		
   	text.wordWrap= true;
	text.wordWrapWidth=1300;	
	
	return text;
}


BKBXOKMUUQ=function(){
	
	BRJIESNORM();
	
	
	if (EGPDVIEJEL==true)
	{
		socket.emit('TXCYFYXTAI', DFBVDPETGO,socket.id) ;
	}
	
	
	if (EVAILWGGKX==false)
	{		
		
		SYJLVBWPIM();
	}

}




SYJLVBWPIM=function(){
	var RPHWVBBGIM;
	var UYEUYIYECB;
	log(true,"A contar..");

	
	EABXADHEVT('CAGCUMKBGA');	
	UYEUYIYECB=IEUIUCYUCC("Â¡Â¡ A Contar !!",60);
	
	
	BDEFDQUJJE = YMHIHSNADE.add.tween(UYEUYIYECB).to( { x: YMHIHSNADE.world.centerX }, 800, QUXNHVVDDK);
	BDEFDQUJJE.onComplete.add(
		function (){
			CKOUBGTDUF = YMHIHSNADE.add.tween(UYEUYIYECB).to( { alpha: 0 }, 1000, KYFMRVNHIQ, false);
			CKOUBGTDUF.onComplete.add(SGVESYATVX,this);	
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
				}, 1000, BSXWFYLCEW);
			
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
		WWAYLOUPUQ();
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
				}, 100, KYFMRVNHIQ);
			
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
					MueveParaBarajar();
				},this)
			}
			CKOUBGTDUF.start();

		}
}


MueveParaBarajar=function(){
	var i;
	var NYXTITDLCT;
	var LGEVGUTGIL;
	var BKDAVGJUHM;
	var AONEAOAEKM=false;
	
	if (JLOISTPAPQ.length>0)
	{
		AONEAOAEKM=true;
	}
	
	
	BKDAVGJUHM=HHOPUSIABJ(DVNRTQIWGL);
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
	
	log(false,"Tamaño YOBEPVEEMW "+BRILHDFUSO.length);
	log(false,"Tamaño Apoyo "+JLOISTPAPQ.length);
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
					BDEFDQUJJE.onComplete.add(WWAYLOUPUQ,this);
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
					CKOUBGTDUF.onComplete.add(WWAYLOUPUQ,this);
				}				
				
				CKOUBGTDUF.start();
		}
	}
	else{		
		WWAYLOUPUQ();
	}
}

WWAYLOUPUQ=function() {
	
	var text;
	var text2;
    //  You can either set the tab size in the style object:
	var MLFDVPXWYK;
	var DSCVVNAYWK;
	var OUENWKLUUA;
	var QJUYVEJMEB;
	
	HUUCUYFBLW.stop();
	//console.log("RPHWVBBGIM puntuacion");
	if (HGFAUFDVDF()==true)
	{
		
		if (EVAILWGGKX==false)
		{
			QJUYVEJMEB=0;
		}
		else
		{
			QJUYVEJMEB=2000;
		}
		var	TKXPPGUPVV = YMHIHSNADE.time.create(false);
		TKXPPGUPVV.add(QJUYVEJMEB, function()
		{
		
		
			ATTUXTNNKX.visible=false;
			XQDPVWOUII.visible=false;
			var SQIRFQMWSL=DVNRTQIWGL;

			//YMHIHSNADE.tweens.pauseAll(); 
			LimpiarSprites();
			
			
			if (socket.id!=undefined)
			{
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
				
			KMHMNPUINK="Â¡Â¡ Vamos de vueltas !!";
			if (UHHXSNXXJK>=JLVDFTPUNI && PXGXKDDNFK>=JLVDFTPUNI)
			{
				if (PPTWRPRLSI==true){
					JVQXQGYDHH++;
					WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL-1),EVAILWGGKX,true,false,false,false,false);
					//console.log("1. EXOQTFOAQQ VIYQDHWIAA: "+JVQXQGYDHH+" EXOQTFOAQQ YOBEPVEEMW: "+CNCCBHQJKL);
					if (JVQXQGYDHH==MFENMIFPUA)
					{
						KMHMNPUINK="Â¡Â¡ Ganamos la partida y el coto !!";
						EABXADHEVT("JCGKEWDJBQ");
					}
					else
					{
						KMHMNPUINK="Â¡Â¡ Ganamos la partida !!";
						EABXADHEVT("JCGKEWDJBQ");
					}
					
				}
				else
				{
					CNCCBHQJKL++;
					WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL-1),EVAILWGGKX,false,false,false,false,false);
					//console.log("2. EXOQTFOAQQ VIYQDHWIAA: "+JVQXQGYDHH+" EXOQTFOAQQ YOBEPVEEMW: "+CNCCBHQJKL);
					if (CNCCBHQJKL==MFENMIFPUA)
					{
						KMHMNPUINK="Â¡Â¡ Otra vez serÃ¡. Hicieron las 10 Ãºltimas. Perdimos el coto  :(  !!";
						EABXADHEVT("YURJWRGUNO");
					}
					else
					{
						KMHMNPUINK="Hemos perdido. Ellos hicieron las 10 Ãºltimas. Â¡Â¡ A por ellos !!";
						EABXADHEVT("YURJWRGUNO");
					}
					
				}
			}
			else
			{
				if(UHHXSNXXJK>=JLVDFTPUNI)
				{
					JVQXQGYDHH++;
					WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL-1),EVAILWGGKX,true,false,false,false,false);
					//console.log("3. EXOQTFOAQQ VIYQDHWIAA: "+JVQXQGYDHH+" EXOQTFOAQQ YOBEPVEEMW: "+CNCCBHQJKL);
					if (JVQXQGYDHH==MFENMIFPUA)
					{
						KMHMNPUINK="Â¡Â¡ Ganamos la partida y el coto !!";
						ISVLSNLHWR=0;
						EABXADHEVT("JCGKEWDJBQ");						
					}
					else
					{
						KMHMNPUINK="Â¡Â¡ Ganamos la partida !!";
						EABXADHEVT("JCGKEWDJBQ");
					}
					
					
				}
				if(PXGXKDDNFK>=JLVDFTPUNI)
				{
					
					CNCCBHQJKL++;
					WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL-1),EVAILWGGKX,false,false,false,false,false);
					//console.log("4. EXOQTFOAQQ VIYQDHWIAA: "+JVQXQGYDHH+" EXOQTFOAQQ YOBEPVEEMW: "+CNCCBHQJKL);
					
					if (CNCCBHQJKL==MFENMIFPUA)
					{
						KMHMNPUINK="Â¡Â¡ Otra vez serÃ¡. Perdimos el coto  :(  !!";
						ISVLSNLHWR=0;
						EABXADHEVT("YURJWRGUNO");						
					}
					else
					{
						KMHMNPUINK="Hemos perdido la partida. Â¡Â¡ A por ellos !!";
						EABXADHEVT("YURJWRGUNO");
					}
				}
			}
			
			
			
			if (JVQXQGYDHH==MFENMIFPUA || CNCCBHQJKL==MFENMIFPUA )
			{
				var imagenFin;
			
				if (socket.id!=undefined)
				{
					socket.emit("UIEWYIIWIW");
				}


				if (JVQXQGYDHH==MFENMIFPUA)
				{
					imagenFin='Copa';
				}
				else
				{
					imagenFin='Perder';
				}
				
				var Copa=YMHIHSNADE.add.sprite(YMHIHSNADE.world.width+500,YMHIHSNADE.world.centerY, imagenFin);
				Copa.anchor.setTo(0.5,0.5);
				
				BDEFDQUJJE=YMHIHSNADE.add.tween(Copa).to( { x: YMHIHSNADE.world.centerX }, 1000, QUXNHVVDDK,true);
				BDEFDQUJJE.onComplete.add(
					function (){
						 EABXADHEVT("TSYFNOWESC");
						 YMHIHSNADE.add.tween(Copa).to( { alpha:0 }, 0, KYFMRVNHIQ, true, 3000);
					}		
				);
				
				
			}

			
			
			
				text = YMHIHSNADE.add.text(YMHIHSNADE.world.centerX, YMHIHSNADE.world.centerY, KMHMNPUINK);
				text.anchor.setTo(0.5,0.5);
				
				text.x=YMHIHSNADE.world.centerX;
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
				text.boundsAlignV= "middle";
				
				
				BDEFDQUJJE = YMHIHSNADE.add.tween(text).to( { alpha: 0 }, 1000, KYFMRVNHIQ, true,2000);
				BDEFDQUJJE.onComplete.add(
					function()
					{
					
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
							//console.log("en este punto");
							CKOUBGTDUF = YMHIHSNADE.add.tween(text).to( { alpha: 0 }, 0, KYFMRVNHIQ, true,3000);
							CKOUBGTDUF.onComplete.add( 
							
								function()
								{
								
									//var TKXPPGUPVV = YMHIHSNADE.time.create(false);
									//TKXPPGUPVV.add(3000, function(){
							
											var d=document.getElementById('DivResultado');
											d.style.display = 'none';
											//d.style.zIndex=-1;
												
												//console.log("deberia saltar");
												if (JVQXQGYDHH==MFENMIFPUA || CNCCBHQJKL==MFENMIFPUA)
												{
													MatarConexion();

												}
												
												else
												{
												
													if (1==1) //HGFAUFDVDF()==true)
													{	
														DCOXIXEBRJ.splice(0,100);
														JEHYBALODM.splice(0,100);
														//console.log("entra");
														KPQSPDMKJE(SQIRFQMWSL);
														
														

	
	

														
														
														
														
													}

												}
										
								} 
									
							);
								//TKXPPGUPVV.start();	
								
							
							
					
					}
			
			
				);	
		});	
		TKXPPGUPVV.start();
	}
	else
	{
		//alert("grrr "+TFSXFTYVGQ);
	}
}

MatarConexion=function()
{	
	if (socket.id!=undefined)
	{
		MuestraErrorDesconexion=false;
		try
		{
			socket.disconnect();
			socket=null;
			DFBVDPETGO=Math.floor(Math.random());
		}
		catch(e){}
	}
	YMHIHSNADE.state.start("Level");
}

LimpiarSprites=function(){
	
	var i;
	
	ObjTurnoR.visible=false;
	ObjTurnoL.visible=false;
	ObjTurnoU.visible=false;
	ObjTurnoD.visible=false;
	
	for (i=0;i<=FXGSEGRXKC.length-1;i++)
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

	
	for (i=0;i<=YBVSVUGPJG.length-1;i++)
	{
		YBVSVUGPJG[i].TNFAGGMKXD.destroy();
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
	}


	FXGSEGRXKC.splice(0,100);
	CBCNHFGWLU.splice(0,100);
	KNVKGHHTYC.splice(0,100);
	TWJONOKGHC.splice(0,100);
	AGKVNAGGLB.splice(0,100);
	VDKOVQXHON.splice(0,100);
	YBVSVUGPJG.splice(0,100);
	YBVSVUGPJG.splice(0,100);
	FBSDMRLVEL.splice(0,100);
	KBESPOUXUK.splice(0,100);
	BRILHDFUSO.splice(0,100);
	
}
		
QSAXUCPASV=function(){

var i;

BUJELVTIKU.visible=false;
ATTUXTNNKX.visible=false;
XQDPVWOUII.visible=false;
IEQDMBJCAY.visible=false;
YGTNAODFHW.visible=false;
YJNIRPCWEI.text="";

//YMHIHSNADE.tweens.pauseAll(); 
ObjTurnoR.visible=false;
ObjTurnoL.visible=false;
ObjTurnoU.visible=false;
ObjTurnoD.visible=false;

if (inputField!=undefined)
{
	inputField.visible=false;
}
log(true,"Limpiando variables..");
for (i=0;i<=FXGSEGRXKC.length-1;i++)
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


for (i=0;i<=YBVSVUGPJG.length-1;i++)
{
	YBVSVUGPJG[i].TNFAGGMKXD.destroy();
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
}

//IEQDMBJCAY.visible=false;
//YGTNAODFHW.visible=false;
IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);
YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);

NBEJWDVLLV.splice(0,1000); //1.0.6
FXGSEGRXKC.splice(0,100);
WUHRYVMYBE.splice(0,100);
CBCNHFGWLU.splice(0,100);
KNVKGHHTYC.splice(0,100);
TWJONOKGHC.splice(0,100);
AGKVNAGGLB.splice(0,100);
ETAUVLWEYR.splice(0,100);
VDKOVQXHON.splice(0,100);
YBVSVUGPJG.splice(0,100);
WSHPROHDIV.splice(0,100);
TTJKWKBPWO.splice(0,100);
FBSDMRLVEL.splice(0,100);
KBESPOUXUK.splice(0,100);
JLOISTPAPQ.splice(0,100);
BRILHDFUSO.splice(0,100);
KTBOJTXFEU.splice(0,100);
XYXCEMMRDC.splice(0,100);
BSFNXQXOTD.splice(0,100);
LUCRWXJMDR=1;
KKPQLKMIQR.splice(0,100);
PPTWRPRLSI=false;
FOQUJVEYFC.splice(0,100);
XYRJNHOCRB.splice(0,100);
HAJIKEVCFP.splice(0,100);
LSJCRLDUCH.splice(0,100);
NKJHKJHHHE.splice(0,100);

log(true,"Fin limpiando variables..");
}

WNEWPCNXPA=function()
{
	
	//YMHIHSNADE.tweens.pauseAll(); 
	ObjTurnoR.visible=false;
	ObjTurnoL.visible=false;
	ObjTurnoU.visible=false;
	ObjTurnoD.visible=false;
	
	
	log(true,"Limpiando variables conexiÃ³n nueva..");
	DFBVDPETGO=Math.floor(Math.random());
	YJEISFVFQY();
	
	DCOXIXEBRJ.splice(0,100);
	JEHYBALODM.splice(0,100);
	
	//NHLRWTHYVG=false;
	//VKYLOUGFGR=false;
	NBEJWDVLLV.splice(0,1000); //1.0.6
	ATTUXTNNKX.visible=false;
	XQDPVWOUII.visible=false;
	YJNIRPCWEI.text="";
	IEQDMBJCAY.visible=false;
	YGTNAODFHW.visible=false;
	
	UHHXSNXXJK=0;
	PXGXKDDNFK=0;
	JVQXQGYDHH=0;
	CNCCBHQJKL=0;
	XPBCVAGCDQ.splice(0,1000);
	KYDWXPGHVY.splice(0,1000);
	//ArrayJugadoresDesconectadosID.splice(0,1000);
	XYXCEMMRDC.splice(0,1000);
	QLNEIQGEDF.splice(0,1000);
	NKJHKJHHHE.splice(0,100);
	
	ESKTEXAVHU=0;
	MYQBNBVHKU=false;
	EVAILWGGKX=false;
	LUCRWXJMDR=1;
	DVNRTQIWGL=1
	
	
}

KPQSPDMKJE=function(SQIRFQMWSL)
{
	var i;
	var LHRDGYYJLJ;
	//console.log("repartiendo");
	
	var RDBQUAVHEP=SQIRFQMWSL; //ILA RDBQUAVHEP he puesto el var
	
	
	if (EGPDVIEJEL==false)
	{
			//console.log("entra a repartir");
			ETKKAJPFXQ(RDBQUAVHEP);	
	}
	else
	{		
	
		//1.0.6 if (AGKVNAGGLB.length==0 && VDKOVQXHON.length==0 && KNVKGHHTYC.length==0 && CBCNHFGWLU.length==0 && XPBCVAGCDQ.length>=4)
		//	if (AGKVNAGGLB.length==0 && VDKOVQXHON.length==0 && KNVKGHHTYC.length==0 && CBCNHFGWLU.length==0 && XPBCVAGCDQ.length>=4)
		//{
			//console.log("DE VUELTASSSS. EnvÃ­o la bataja y limpio variables");
			
			
			//console.log("Turno actual: "+SQIRFQMWSL+" DVNRTQIWGL: "+DVNRTQIWGL+" Toma el control: "+ESKTEXAVHU+" Soy: "+TFSXFTYVGQ+" Reparte "+RDBQUAVHEP);
			if (RDBQUAVHEP==TFSXFTYVGQ || ESKTEXAVHU==TFSXFTYVGQ)
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
					//console.log("Yo creo la baraja. Por cierto soy.. "+TFSXFTYVGQ+" y reparte "+RDBQUAVHEP);
					ETKKAJPFXQ(RDBQUAVHEP);	
					
					log(false,WUHRYVMYBE.length);
					//log(false,"ROOM "+socket.room);
					if (EGPDVIEJEL==true)
					{
						log(true,"... y la envÃ­o")
						log(true,"EnvÃ­o que reparte: "+RDBQUAVHEP);
						EnviarBaraja(WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,(JVQXQGYDHH+CNCCBHQJKL));	
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
	//}
}
	//RDBQUAVHEP=4;
	//DVNRTQIWGL=0;
BRJIESNORM=function()
{
	YJNIRPCWEI.text="";
	MYQBNBVHKU=false;
	HUUCUYFBLW.stop();
	//IEQDMBJCAY.visible=false;		
	//YGTNAODFHW.visible=false;	
	IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);
	YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
	IEQDMBJCAY.visible=false;
	YGTNAODFHW.visible=false;
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
	log(false,"mostrando última SRCGCMADME");
	var i;
	var CMWUMHNEHK="VIYQDHWIAA"
	var VEFCIYHBGC=false;
	var EDLRWACYRF;
	GEFUYWBVWG=[];
	
	if (1==1)
	{
	
		for (i=0;i<=KBESPOUXUK.length-1;i++)
		{
			KBESPOUXUK[i].bringToTop();
			if (sprite.name==KBESPOUXUK[i].name)
			{
				VEFCIYHBGC=true;
				CMWUMHNEHK="VIYQDHWIAA";
				break;
			}
		}	
		
		if (VEFCIYHBGC==true){
			EDLRWACYRF=XYRJNHOCRB;
		}
		else
		{
			for (i=0;i<=BRILHDFUSO.length-1;i++)
			{
				if (sprite.name==BRILHDFUSO[i].name)
				{
					VEFCIYHBGC=true;
					CMWUMHNEHK="YOBEPVEEMW";
					break;
				}
			}	
			
			if (VEFCIYHBGC==true){
				EDLRWACYRF=HAJIKEVCFP;
			}
		
		}
		
		//Para evitar que se pare la recogida de cartas
		for (i=0;i<=EDLRWACYRF.length-1;i++)
		{
			GEFUYWBVWG.push(EDLRWACYRF[i]);
			WWFSQDQYYU.add(GEFUYWBVWG[i])
			NAYBJTKIKA(GEFUYWBVWG[i]);
			GEFUYWBVWG[i].bringToTop();
		}
		

		
		
		//WWFSQDQYYU.bringToTop();
		//log(false,"ENC"+ sprite.name);
		if (VEFCIYHBGC==true)
		{

		for(i=0;i<=VDKOVQXHON.length-1;i++)
		{
			VDKOVQXHON[i].TNFAGGMKXD.alpha=0.2;
		}
		
		
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
				JKKJHKHSWV(GEFUYWBVWG,CMWUMHNEHK);
				}
			);
			twUB1.start();		
			
			
		}
	
	}
}



JKKJHKHSWV=function(GEFUYWBVWG,DeQuien){
	
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
		
			EfectoRecogerUltimaBaza(GEFUYWBVWG,DeQuien);
		
		    });
		
		
		twUB1.start();		
		


}



EfectoRecogerUltimaBaza=function(GEFUYWBVWG,DeQuien){
	var NOFEDXHMLS;
	var	GHTWROCHVV;
	
	if 	(DeQuien=="VIYQDHWIAA"){
		NOFEDXHMLS=WIEVLYANFM("ULTIMA_Baza",0);
		GHTWROCHVV=FIGQBSJQGA("ULTIMA_Baza",0);
	}
	else{
		//NOFEDXHMLS=WIEVLYANFM("D",98)- (SXSHBRJFIR)-(COIVBWRMCC/2);
		//GHTWROCHVV=FIGQBSJQGA("U",5);
		
		NOFEDXHMLS=WIEVLYANFM("ULTIMA_Baza_Rival",0);
		GHTWROCHVV=FIGQBSJQGA("ULTIMA_Baza_Rival",0);
	}
	
		XNFDNBQFUA(GEFUYWBVWG[0]);
		XNFDNBQFUA(GEFUYWBVWG[1]);
		XNFDNBQFUA(GEFUYWBVWG[2]);
		XNFDNBQFUA(GEFUYWBVWG[3]);

	
		twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[0]);
		GEFUYWBVWG[0].alpha=1;
		twUB1.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV,
		angle:Math.floor(Math.random() * 360) + 1  
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
		//PQUFIBKJJH.onComplete.add(EfectosRecogerCartas2,this)						
		twUB1.start();
		
		
		twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[1]);
		GEFUYWBVWG[1].alpha=1;
		twUB1.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV,
		angle:Math.floor(Math.random() * 360) + 1  
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
		//PQUFIBKJJH.onComplete.add(EfectosRecogerCartas2,this)						
		twUB1.start();


		twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[2]);
		GEFUYWBVWG[2].alpha=1;
		twUB1.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV,
		angle:Math.floor(Math.random() * 360) + 1  
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
		//PQUFIBKJJH.onComplete.add(EfectosRecogerCartas2,this)						
		twUB1.start();		
		
		
		
		twUB1 = YMHIHSNADE.add.tween(GEFUYWBVWG[3]);
		GEFUYWBVWG[3].alpha=1;
		twUB1.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV,
		angle:Math.floor(Math.random() * 360) + 1  
		}
		, MDYSFNYPYP, KYFMRVNHIQ);
		//PQUFIBKJJH.onComplete.add(EfectosRecogerCartas2,this)						
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

function addquake() {
	//if("vibrate" in window.navigator) {
	if(navigator.vibrate) {	
		window.navigator.vibrate(300);
	}
  // define the camera offset for the VHYOFJEDUQ
   var margin = 50;
	 // and set the world's bounds according to the given margin
	 var x = -margin;
	 var y = -margin;

	 var w = YMHIHSNADE.world.width + margin * 2;
	 var h = YMHIHSNADE.world.height + margin * 2;
	 YMHIHSNADE.world.setBounds(x, y, w, h);
	  
	 // we make sure camera is at position (0,0)
	 YMHIHSNADE.world.camera.position.set(0);
  
  var rumbleOffset = 20;
  
  // we need to move according to the camera's current position
  var properties = {
    x: YMHIHSNADE.camera.x - rumbleOffset
  };
  
  // we make it a relly fast movement
  var duration = 50;
  // because it will repeat
  var repeat = 5;
  // we use bounce in-out to soften it a little bit
  var ease = Phaser.Easing.Bounce.InOut;
  var autoStart = false;
  // a little delay because we will run it indefinitely
  var delay = 0;
  // we want to go back to the original position
  var yoyo = true;
  
  var VHYOFJEDUQ = YMHIHSNADE.add.tween(YMHIHSNADE.camera)
    .to(properties, duration, ease, autoStart, delay, repeat, yoyo);
  
  // we're using this line for the example to run indefinitely
  VHYOFJEDUQ.onComplete.addOnce(quakeEnd);
  
  // let the earthquake begins
  VHYOFJEDUQ.start();
}

quakeEnd=function()
{

 //console.log("DEBE ARREGLAR CAMARA");	
  /*var x=0;
  var y=0;
  var w=YMHIHSNADE.world.width;
  var h=YMHIHSNADE.world.height;
 */
 	 var margin = -50;
	 // and set the world's bounds according to the given margin
	 var x = 0;
	 var y = 0;

	 var w = YMHIHSNADE.world.width + (margin * 2);
	 var h = YMHIHSNADE.world.height+ (margin * 2);
	 
  YMHIHSNADE.world.setBounds(x, y, w, h);
  YMHIHSNADE.world.camera.position.set(0);
	
}

YJEISFVFQY=function()
{
	var d=document.getElementById('DivResultado');
	d.style.display = 'none';
	//d.style.zIndex=-1;
}

EnviarBaraja=function(WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,KXAWTTIEGG)
{
	
	//socket.emit('NQAQCOINMY', WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,KXAWTTIEGG);
	/////////////

	var QKVJASWVEO=Date.now();
	var GXNRNMAAKW=function( WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,KXAWTTIEGG,idPartida,
		OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
		 this.WUHRYVMYBE=WUHRYVMYBE
		 this.DFBVDPETGO=DFBVDPETGO
		 this.RDBQUAVHEP=RDBQUAVHEP
		 this.EVAILWGGKX=EVAILWGGKX
		 this.XPBCVAGCDQ=XPBCVAGCDQ
		 this.KXAWTTIEGG=KXAWTTIEGG
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
	idPartida=Math.random()*100000;
	//console.log("Envio el id partida "+idPartida);
	var KCPHFPSPLQ=new GXNRNMAAKW(WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,KXAWTTIEGG,idPartida,
		OYJAHGADFQ,socket.id,DFBVDPETGO,'NQAQCOINMY');
	NBEJWDVLLV.push(KCPHFPSPLQ);
	QPHHGPRJAI.push(KCPHFPSPLQ);


	socket.emit('NQAQCOINMY',QPHHGPRJAI[0],
	 function(XQLEOGMJYG)
	 {			 
		EXBCVLOIYJ(XQLEOGMJYG,'NQAQCOINMY');
	 }
	);						
	QPHHGPRJAI.splice(0,1000);	

	
	/////////////		
}