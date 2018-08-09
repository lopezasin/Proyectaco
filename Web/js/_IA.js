	
UEWYIUWIVW=function(Quien)
{
	var i;
	var Conectado=true;
	for (i=0;i<=KYDWXPGHVY.length-1;i++)
	{
		if (KYDWXPGHVY[i].SSUNXNEEHN==Quien)
		{
			Conectado=false;
			break;
		}
	}
	
	return Conectado;
}

IA=function(UHTPGPRUJA,RondaQueMueve){
	var NJGFWACAPY=false;
	var BMITYYFCGC;
	var MGYJHGHWGC=[];
	var BMWUIUWIIO=[];
	var i;
	var u;
	var STLEOJDWSU;
	var LSKPLOTYIB;
	//var CambioEstado=false;
	
	/*if (BloqueoIA==false)
	{
		CambioEstado=true;
		BloqueoIA=true;
	}*/
	
	//var UHTPGPRUJA;

	////console.log("Llega a IA");
	//alert("s");
	TKXPPGUPVV.stop(); //1.0.9
	HUUCUYFBLW.stop(); //raka
	
	////console.log("Turno "+DVNRTQIWGL+" Control: "+ESKTEXAVHU+" Soy: "+TFSXFTYVGQ+" Mandatory: "+Mandatory+" to fixed "+HUUCUYFBLW.duration.toFixed(0));
	if (  ( (HGMNXSIAPV==true && MYQBNBVHKU==true &&  UHHXSNXXJK<JLVDFTPUNI && PXGXKDDNFK<JLVDFTPUNI) ||  (HGMNXSIAPV==true && EVAILWGGKX==false && MYQBNBVHKU==true)     ) 
		&& OTGNMRHTVK()==false	
		&& ( (UHTPGPRUJA!=TFSXFTYVGQ && PermisoParaTomarControl(UHTPGPRUJA)   ) || 
					(UHTPGPRUJA==TFSXFTYVGQ && HUUCUYFBLW.duration.toFixed(0)<=0 && EGPDVIEJEL==true)||
					EGPDVIEJEL==false
			)
		&& FReconectando()==false
		&& ( (EGPDVIEJEL==false) || (EGPDVIEJEL==true && SNJCSVWFCC()==true) )
		&& TurnoYaPasado(RondaQueMueve,UHTPGPRUJA)==false //importante por la rapidez que a veces se lanzan 2 ias
	) 
	//TFSXFTYVGQ==ESKTEXAVHU && EGPDVIEJEL==true && UEWYIUWIVW(UHTPGPRUJA)==false cabezon
		
	{
		HUUCUYFBLW.stop();
		TKXPPGUPVV.stop();
		
		////console.log("IA Venga vamos");
		BMITYYFCGC=VDKOVQXHON.length+1;
			
		
		
		log(false,"LUCRWXJMDR "+LUCRWXJMDR);
		
		
		

		MGYJHGHWGC.splice(0,100);
		//EVHFMHFMJU(DVNRTQIWGL);
		
		/*1.0.9 if (EGPDVIEJEL==false)
		{
			UHTPGPRUJA=DVNRTQIWGL;
		}*/
		//UHTPGPRUJA=DVNRTQIWGL; //1.0.9 2.0.7
		
		
		log(true,"IA JUGADOR QUE MUEVE "+UHTPGPRUJA);
		STLEOJDWSU=HHOPUSIABJ(UHTPGPRUJA)
		if (STLEOJDWSU=="D")
		{
			BMWUIUWIIO=AGKVNAGGLB;
		}
		if (STLEOJDWSU=="U")
		{
			BMWUIUWIIO=TWJONOKGHC
		}
		if (STLEOJDWSU=="L")
		{
			BMWUIUWIIO=KNVKGHHTYC;
		}
		
		if (STLEOJDWSU=="R")
		{
			BMWUIUWIIO=CBCNHFGWLU;
		}
		log(true,"DEBERIA SACAR CARTA DEL FXGSEGRXKC "+STLEOJDWSU);	
		
		
		
		for(i=0;i<=BMWUIUWIIO.length-1;i++){
				MGYJHGHWGC.push(new TVYNYTCQYW(BMWUIUWIIO[i].SGCSHJVERI,BMWUIUWIIO[i].UUOPKETETA,BMWUIUWIIO[i].HVCFEWNDRF,null,null,null));
				MGYJHGHWGC[i].TNFAGGMKXD = BMWUIUWIIO[i].TNFAGGMKXD;
		}

			

			for (i=0;i<=MGYJHGHWGC.length-1;i++)
			{
				if (XPSRYGDPNI(MGYJHGHWGC[i],UHTPGPRUJA)==false)
				{
					MGYJHGHWGC[i].SGCSHJVERI="BORRAR";
				}
			}
			//alert(1);
			
			for (u=0;u<=5;u++)
			{
				bloque:
				for (i=0;i<=MGYJHGHWGC.length-1;i++)
				{
					if (MGYJHGHWGC[i].SGCSHJVERI=="BORRAR")
					{
						MGYJHGHWGC.splice(i,1);					
						break bloque;
					}
				}
			}

		
		//log(false,"ESTOY DE VUELTAS: "+EVAILWGGKX);
		////console.log("IA Venga vamos2");
		if (MGYJHGHWGC.length>0)
		{
			
			//borrar este bloque
			/*if (EVAILWGGKX==false)
			{
				console.log("JIOO "+MGYJHGHWGC.length);
				socket.emit("CartasPosibles",MQUGCIUQII,LUCRWXJMDR,DVNRTQIWGL,MGYJHGHWGC.length)
			}*/
				
				
			if (KYLIAIETHX==false)
			{
				console.log("IA DEL JUGADOR "+UHTPGPRUJA);
			}
			NJGFWACAPY=BJGHJEGJWQ(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC);
			if (NJGFWACAPY==false)
			{
				if (NFKKYVMBUB()==true)
				{
					NJGFWACAPY=HWPRRTMYEP(MGYJHGHWGC,UHTPGPRUJA,"Alto",BMITYYFCGC);
				}
				else
				{
					if (EVAILWGGKX==false)
					{
						if (EAYMXOKKHT()==true && MZXZCVZDVZ(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)==false)
						{
							if(RondaQueMueve==4)
							{
								NJGFWACAPY=GMUESSHERK(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC);								
							}
							else
							{								
								NJGFWACAPY=HWPRRTMYEP(MGYJHGHWGC,UHTPGPRUJA,"Bajo",BMITYYFCGC);
							}
						}
						else
						{
							if (ZXCFVSVDSW(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)==true)
							{
								NJGFWACAPY=HWPRRTMYEP(MGYJHGHWGC,UHTPGPRUJA,"Bajo",BMITYYFCGC);
							}
							else
							{
								NJGFWACAPY=GMUESSHERK(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC);
							}
						}
					}
					else
					{
						if (EAYMXOKKHT()==true)
						{
							NJGFWACAPY=HWPRRTMYEP(MGYJHGHWGC,UHTPGPRUJA,"Bajo",BMITYYFCGC);
						}
						else
						{
							if ( BMITYYFCGC==3)
							{
								NJGFWACAPY=HWPRRTMYEP(MGYJHGHWGC,UHTPGPRUJA,"Bajo",BMITYYFCGC);
							}
							else
							{
								if (BMITYYFCGC==4 && RondaQueMueve==4)
								{
									NJGFWACAPY=HWPRRTMYEP(MGYJHGHWGC,UHTPGPRUJA,"Bajo",BMITYYFCGC);
								}
								else
								{
									if (ZXCFVSVDSW(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)==true)
									{
										NJGFWACAPY=HWPRRTMYEP(MGYJHGHWGC,UHTPGPRUJA,"Bajo",BMITYYFCGC);
									}
									else
									{
										NJGFWACAPY=GMUESSHERK(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC);
									}
								}
							}
						}
						
					}
				}	
			}		
					
				
				//}
			//}
			
			/*for (var h=0;h<=MGYJHGHWGC.length-1;h++)
			{
				if (MGYJHGHWGC[h].UUOPKETETA===NJGFWACAPY)
				{
					var pp=MGYJHGHWGC[h].SGCSHJVERI;
					var qq=MGYJHGHWGC[h].EHDWIURHHD
					var rr=MGYJHGHWGC[h].HVCFEWNDRF
				}
			}*/
			
			//////console.log("CARTA MOVER "+NJGFWACAPY," "+UHTPGPRUJA+" "+qq+" "+pp+" "+rr);
			
			//08/02/2017 Para por si acaso no existe (cambio de 7 o que se yo)
			LSKPLOTYIB=false;
			for (i=0;i<=MGYJHGHWGC.length-1;i++)
			{
				if(MGYJHGHWGC[i].TNFAGGMKXD.name==NJGFWACAPY)
				{
					LSKPLOTYIB=true;
					break;
				}
			}
			if (LSKPLOTYIB==false)
			{
				//alert("BRUTAL");
				////console.log("IA DESDE Imprevisible");
				//TKXPPGUPVV.stop(); //Mucho miedo 29/04/2017
				////console.log("IA 4");
				IA(UHTPGPRUJA,RondaQueMueve);
			}
			
			
			
			
			
			
			if (1==1)
			//////console.log("CARTA MOVER "+NJGFWACAPY );	
			//if (NJGFWACAPY!=false)
			{
				
					if ( (EGPDVIEJEL==false  && TFSXFTYVGQ!=UHTPGPRUJA) || (EGPDVIEJEL==true)   )
					{
						////console.log("Antes de validar");
						//if (1==1)
						if ( (EGPDVIEJEL==false) || (EGPDVIEJEL==true && SNJCSVWFCC()==true) )
						{	
							if (HQWFFUCQDR(RondaQueMueve,UHTPGPRUJA)==true )
							{
								//console.log("Consola","BLOQUEADO EL MOVIMIENTO DEL JUGADOR "+UHTPGPRUJA+" CON RONDA "+)
								////console.log("ACABO DE BLOQUEAR "+LUCRWXJMDR+" "+UHTPGPRUJA)
								log(true,"IA: ENVIO CARTA AL CENTRO "+NJGFWACAPY+" AUTOMATICAMENTE CON DVNRTQIWGL "+UHTPGPRUJA)
								/*if (UHTPGPRUJA==1 && LUCRWXJMDR==2)
								{
									alert("bien");
								}*/
								if (EGPDVIEJEL==false)
								{
									VPDVSDLPHG(UHTPGPRUJA,NJGFWACAPY,RondaQueMueve,Date.now(),false); 
								}
								
								else
								{			
									log(true,"Envio la carta al centro desde IA para mi")
									
								
								}
								
								if (EGPDVIEJEL==true)
								{
										////console.log("ENVIO CARTA AL RESTO "+NJGFWACAPY+" AUTOMATICAMENTE CON DVNRTQIWGL "+UHTPGPRUJA)
										
										
						/////////////
									
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
									var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,UHTPGPRUJA,NJGFWACAPY,UHTPGPRUJA, RondaQueMueve, EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),
										XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,
										XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD,MQUGCIUQII,
										OYJAHGADFQ,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,DFBVDPETGO,'RYUDYPPOXW');
									NBEJWDVLLV.push(KCPHFPSPLQ);
									QPHHGPRJAI.push(KCPHFPSPLQ);
									/*socket.emit("Consola","IA SSUNXNEEHN "+TFSXFTYVGQ+" Tiro por "+UHTPGPRUJA+" AGTXFNIKQD "+RondaQueMueve+" TVYNYTCQYW "+NJGFWACAPY);
									if(NJGFWACAPY==1)
									{
										socket.emit("Consola","---------CULPABLE--------------IA SSUNXNEEHN "+TFSXFTYVGQ+" Tiro por "+UHTPGPRUJA+" AGTXFNIKQD "+RondaQueMueve+" TVYNYTCQYW "+NJGFWACAPY);
									}*/
									console.log("INVENTADA DE "+TFSXFTYVGQ+" representando a "+UHTPGPRUJA+" TVYNYTCQYW "+NJGFWACAPY+" "+RondaQueMueve)
									
									var timererror=YMHIHSNADE.time.create(false);
									var ContinuarTry=true;
									timererror.loop(200,function(){
										console.log("Entra al TKXPPGUPVV")
										try
										{
											
											socket.emit('RYUDYPPOXW',QPHHGPRJAI[0],
											 function(XQLEOGMJYG)
											 {			 
												EXBCVLOIYJ(XQLEOGMJYG,'RYUDYPPOXW');
											 }
											);
																				
										}
										catch(e)
										{
											ContinuarTry=false;
										}
										
										
										if (ContinuarTry==true)
										{
											timererror.stop();
											QPHHGPRJAI.splice(0,1000);	
											

											console.log("CONTINUA")
				  
											
											/////////////									
												
												
												
											
											//socket.emit('RYUDYPPOXW', DFBVDPETGO,UHTPGPRUJA,NJGFWACAPY,UHTPGPRUJA, LUCRWXJMDR,EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD) ;
											if (MGYJHGHWGC[i].SGCSHJVERI==TGTQPBEQFR)
											{
												if (MGYJHGHWGC[i].HVCFEWNDRF==1)
												{
													WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,false,false,true,false);
												}
												if (MGYJHGHWGC[i].HVCFEWNDRF==3)
												{
													WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,false,false,false,true);
												}								
											}
																						
										}
										//console.log("VUELTA");
									}
									);
									timererror.start();
									

								}
							}
							else
							{
								////console.log("No valida bien");	
							}
						}
					
					}
					
				
			}
		}
		else
		{
			log(true,"No muevo porque el MGYJHGHWGC mide 0");
		}
	}
	
	//BloqueoIA=false;
	
}

XXZXVSDVSD=function(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
{
	var i;
	var u;
	var VEFCIYHBGC=false;
	var DVSFGEBHHE;
	var VVSFGSGGSW;
	var DCBSNHIVQB=0;
	var NMBDIWHGDI=false;
	var RTOSLKFWHC=false;
	var SGEGEGEGEW;
	var UYWGCJGCJJ;
	
	if (UDUUDUDDJJ(UHTPGPRUJA)==true)
	{
		DVSFGEBHHE=UHHXSNXXJK;
		VVSFGSGGSW=PXGXKDDNFK;
	}
	else
	{
		DVSFGEBHHE=PXGXKDDNFK;
		VVSFGSGGSW=UHHXSNXXJK;
	}
	
	for (i=0;i<=VDKOVQXHON.length-1;i++)
	{
		DCBSNHIVQB=DCBSNHIVQB+VDKOVQXHON[i].WQCPJQWFPN;
	}
	
	var SGEGEGEGEW=function(DCBSNHIVQB,DVSFGEBHHE,VVSFGSGGSW)
	{
		this.DCBSNHIVQB=DCBSNHIVQB
		this.DVSFGEBHHE=DVSFGEBHHE
		this.VVSFGSGGSW=VVSFGSGGSW
	}

	UYWGCJGCJJ=new SGEGEGEGEW(DCBSNHIVQB,DVSFGEBHHE,VVSFGSGGSW);
	return UYWGCJGCJJ;
	
	
}

EAYMXOKKHT=function(){
	var i;
	var NMBAYQIQHE=false;
	var DCBSNHIVQB=0;
	var FiguraGorda=false;
	
	for (i=0;i<=VDKOVQXHON.length-1;i++)
	{
		DCBSNHIVQB=DCBSNHIVQB+VDKOVQXHON[i].WQCPJQWFPN;
		if (VDKOVQXHON[i].VVRCMEUNOJ>=11)
		{
			FiguraGorda=true;
		}
	}

	if (DCBSNHIVQB>=10 && FiguraGorda==true)
	{
		NMBAYQIQHE=true;
	}	

	return NMBAYQIQHE;
}

UDUUDUDDJJ=function(UHTPGPRUJA)
{
	var UWCYUIWCIJ;
	
	if (TFSXFTYVGQ==1)
	{
		if (UHTPGPRUJA==1){
			UWCYUIWCIJ=true;
		}
		if (UHTPGPRUJA==2){
			UWCYUIWCIJ=false;
		}
		if (UHTPGPRUJA==3){
			UWCYUIWCIJ=true;
		}
		if (UHTPGPRUJA==4){
			UWCYUIWCIJ=false;
		}			
	}
	if (TFSXFTYVGQ==2)
	{
		if (UHTPGPRUJA==2){
			UWCYUIWCIJ=true;
		}
		if (UHTPGPRUJA==3){
			UWCYUIWCIJ=false;
		}
		if (UHTPGPRUJA==4){
			UWCYUIWCIJ=true;
		}
		if (UHTPGPRUJA==1){
			UWCYUIWCIJ=false;
		}			
	}
	if (TFSXFTYVGQ==3)
	{
		if (UHTPGPRUJA==3){
			UWCYUIWCIJ=true;
		}
		if (UHTPGPRUJA==4){
			UWCYUIWCIJ=false;
		}
		if (UHTPGPRUJA==1){
			UWCYUIWCIJ=true;
		}
		if (UHTPGPRUJA==2){
			UWCYUIWCIJ=false;
		}			
	}
	if (TFSXFTYVGQ==4)
	{
		if (UHTPGPRUJA==4){
			UWCYUIWCIJ=true;
		}
		if (UHTPGPRUJA==1){
			UWCYUIWCIJ=false;
		}
		if (UHTPGPRUJA==2){
			UWCYUIWCIJ=true;
		}
		if (UHTPGPRUJA==3){
			UWCYUIWCIJ=false;
		}			
	}		
	return UWCYUIWCIJ;
}
BAVVCAHQCC=function(FXGSEGRXKC)
{
	var i;
	var JGDJVGWVNZ=0;
	var NMABMNABIW=0;
	
	["oros","copas","espadas","bastos"].forEach( function(element, index, Array){
		
		JGDJVGWVNZ=0;
		
		for (i=0;i<=FXGSEGRXKC.length-1;i++)
		{
			if(FXGSEGRXKC[i].SGCSHJVERI==element && (FXGSEGRXKC[i].VVRCMEUNOJ==9 || FXGSEGRXKC[i].VVRCMEUNOJ==10) && SRFFTPLVMJ(element)==false)
			{
				JGDJVGWVNZ++;
			}
		}
		if (JGDJVGWVNZ==2)
		{
			if(TGTQPBEQFR==element)
			{
				NMABMNABIW=NMABMNABIW+40;
			}
			else
			{
				NMABMNABIW=NMABMNABIW+20;
			}
		}	
	});
	////console.log("PAXBGDCANU cante: "+NMABMNABIW);
	return NMABMNABIW;
}

//AVE
TengoCantePaloOSieteCritico=function(FXGSEGRXKC,FHEFFYUQFX,ValorReal)
{
	var i;
	var RTOSLKFWHC=false;
	var JGDJVGWVNZ=0;
	var EsEl7=false;
	
	for (i=0;i<=FXGSEGRXKC.length-1;i++)
	{
		if( (FXGSEGRXKC[i].VVRCMEUNOJ==9 || FXGSEGRXKC[i].VVRCMEUNOJ==10) && FXGSEGRXKC[i].SGCSHJVERI==FHEFFYUQFX && SRFFTPLVMJ(FHEFFYUQFX)==false)
		{
			JGDJVGWVNZ++;
		}
		
		if (FXGSEGRXKC[i].VVRCMEUNOJ==7 && FXGSEGRXKC[i].SGCSHJVERI==TGTQPBEQFR && FXGSEGRXKC[i].VVRCMEUNOJ==ValorReal)
		{
			EsEl7=true;
		}
			
	}
	
	if (JGDJVGWVNZ==2)
	{
		RTOSLKFWHC=true;
	}
	else
	{
		if (FBSDMRLVEL.length>0)
		{
			if (JGDJVGWVNZ==1 && (FBSDMRLVEL[0].VVRCMEUNOJ==9 || FBSDMRLVEL[0].VVRCMEUNOJ==10) && FBSDMRLVEL[0].SGCSHJVERI==FHEFFYUQFX)
			{
				RTOSLKFWHC=true;			
			}
			
			if (JGDJVGWVNZ==2) //Puede ser redundante porque hago otras validaciones en otros lados, pero lo dejo.
			{
				RTOSLKFWHC=true;			
			}			
		
			if ( (FBSDMRLVEL[0].VVRCMEUNOJ==11 || FBSDMRLVEL[0].VVRCMEUNOJ==12) && EsEl7==true)
			{
				RTOSLKFWHC=true;	
			}
		}
		
	}
	
	return RTOSLKFWHC;
}


BJGHJEGJWQ=function(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC){
	var i;
	var NMBMWIAAGS=0;
	var LLLSJDHWIV=0;
	var MNBZMJHWHW=0;
	var WYGCYJGXJX=0;
	var NMABCIQLLA=false;

	var NBXYUWGUDX=0;
	var NNCNXSHSAZ=0;
	
	var JGDIWUDVIS=0;
	var NMBJWWHGDH=0;
	
	var NMXBZWIQQD=0;
	var NMBVNKSLWU=0;
	
	var NMVNHGIWDW=0;
	var SHDBMVSNXB=0;
	
	
	var DCBSNHIVQB=0;
	var Key;
	var DVSFGEBHHE;
	var VVSFGSGGSW;
	var QOWECQVXCM=false;
	var SGEGEGEGEW;
	
	SGEGEGEGEW=XXZXVSDVSD(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
	DVSFGEBHHE=SGEGEGEGEW.DVSFGEBHHE;
	VVSFGSGGSW=SGEGEGEGEW.VVSFGSGGSW;
	DCBSNHIVQB=SGEGEGEGEW.DCBSNHIVQB;
	
	if (EVAILWGGKX==true)
	{
	
	//if (BMITYYFCGC==3 && VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true && AJCKJHQOQC(VDKOVQXHON,BMITYYFCGC)==true)
	//{
	//	QOWECQVXCM=false;
	//}
	//else
	//{		
		for (i=0;i<=MGYJHGHWGC.length-1;i++)
		{
			if(MGYJHGHWGC[i].SGCSHJVERI==TGTQPBEQFR)
			{
				if (MGYJHGHWGC[i].VVRCMEUNOJ>NNCNXSHSAZ)
				{
					NBXYUWGUDX=MGYJHGHWGC[i].WQCPJQWFPN;
					NNCNXSHSAZ=MGYJHGHWGC[i].VVRCMEUNOJ;
					NMBMWIAAGS=i;
				}
			}
		}
		////console.log("TVYNYTCQYW que mas vale para "+DVNRTQIWGL+" "+NBXYUWGUDX+" Turno "+BMITYYFCGC);
		

		for (i=0;i<=MGYJHGHWGC.length-1;i++)
		{
			if(MGYJHGHWGC[i].SGCSHJVERI==TGTQPBEQFR)
			{
				if (MGYJHGHWGC[i].VVRCMEUNOJ>NMBJWWHGDH && TengoCantePaloOSieteCritico(MGYJHGHWGC, MGYJHGHWGC[i].SGCSHJVERI, MGYJHGHWGC[i].VVRCMEUNOJ)==false) //AVE  (MGYJHGHWGC[i].VVRCMEUNOJ!=10 && MGYJHGHWGC[i].VVRCMEUNOJ!=9) )
				{
					JGDIWUDVIS=MGYJHGHWGC[i].WQCPJQWFPN;
					NMBJWWHGDH=MGYJHGHWGC[i].VVRCMEUNOJ;
					LLLSJDHWIV=i;
				}
			}
		}
		////console.log("TVYNYTCQYW que mas vale para "+DVNRTQIWGL+" "+JGDIWUDVIS+" Turno "+BMITYYFCGC);
		
		
		for (i=0;i<=MGYJHGHWGC.length-1;i++)
		{

			if (MGYJHGHWGC[i].VVRCMEUNOJ>NMBVNKSLWU)
			{
				NMXBZWIQQD=MGYJHGHWGC[i].WQCPJQWFPN;
				NMBVNKSLWU=MGYJHGHWGC[i].VVRCMEUNOJ;
				MNBZMJHWHW=i;
			}
			
		}
		
		for (i=0;i<=MGYJHGHWGC.length-1;i++)
		{

			if (MGYJHGHWGC[i].VVRCMEUNOJ>SHDBMVSNXB && TengoCantePaloOSieteCritico(MGYJHGHWGC, MGYJHGHWGC[i].SGCSHJVERI, MGYJHGHWGC[i].VVRCMEUNOJ)==false) //&& (MGYJHGHWGC[i].VVRCMEUNOJ!=10 && MGYJHGHWGC[i].VVRCMEUNOJ!=9) )
			{
				NMVNHGIWDW=MGYJHGHWGC[i].WQCPJQWFPN;
				SHDBMVSNXB=MGYJHGHWGC[i].VVRCMEUNOJ;
				WYGCYJGXJX=i;
			}
			
		}	
		
		Key=UIBEMREGDL(MGYJHGHWGC,MGYJHGHWGC[MNBZMJHWHW].SGCSHJVERI,MGYJHGHWGC[MNBZMJHWHW].VVRCMEUNOJ);
		if ((DVSFGEBHHE+NMXBZWIQQD+DCBSNHIVQB)>=JLVDFTPUNI  &&  BMITYYFCGC==4 && FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false)
		{	
			if (KYLIAIETHX==false)
			{
				console.log("CG 1");
			}
			QOWECQVXCM=Key;
		}
		
		if ((VVSFGSGGSW+DCBSNHIVQB)>=JLVDFTPUNI && (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false || OQOQOCBSKK(VDKOVQXHON)==0 ))
		{
			if (KYLIAIETHX==false)
			{
				console.log("CG vital");
			}
			QOWECQVXCM=HWPRRTMYEP(MGYJHGHWGC,UHTPGPRUJA,"Bajo",BMITYYFCGC);
		}

		//Sin tener en cuenta cantes. Hay que hacerlo por separado porque si no podría guardarse medio cante a pesar de ganar matando con esa carta
		if (QOWECQVXCM==false)
		{
			if ( ((DVSFGEBHHE+NBXYUWGUDX+DCBSNHIVQB)>=JLVDFTPUNI)  )
			{
				if (BMITYYFCGC==4)
				{				
					var Key=UIBEMREGDL(MGYJHGHWGC,MGYJHGHWGC[NMBMWIAAGS].SGCSHJVERI,MGYJHGHWGC[NMBMWIAAGS].VVRCMEUNOJ)
					//////console.log("Ultimo en tirar: (prov2): "+Key);
					if (FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false)
					{
						if (KYLIAIETHX==false)
						{
							console.log("CG 2");
						}
						QOWECQVXCM=Key;
					}
					else
					{
						//////console.log("Ultimo en tirar: No lo hace");
						if (KYLIAIETHX==false)
						{
							console.log("CG 3");
						}
						QOWECQVXCM=false;
					}
					
				}
				else
				{

					//////console.log("RECOMIENDA: "+MGYJHGHWGC[u].SGCSHJVERI+" "+MGYJHGHWGC[u].VVRCMEUNOJ);
					var Key=UIBEMREGDL(MGYJHGHWGC,MGYJHGHWGC[NMBMWIAAGS].SGCSHJVERI,MGYJHGHWGC[NMBMWIAAGS].VVRCMEUNOJ);
					//////console.log("RECOMENDADO KEY: "+Key)
					if (FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false && MGYJHGHWGC[NMBMWIAAGS].WQCPJQWFPN!=10)
					{		
						//////console.log("RECOMENDADO KEY DEVUELTA: "+Key)
						////console.log("CG 4_1: "+DVSFGEBHHE);
						////console.log("CG 4_1: "+DCBSNHIVQB);
						////console.log("CG 4_3 "+NBXYUWGUDX);		
						if (KYLIAIETHX==false)
						{
							console.log("CG 4: "+(DVSFGEBHHE+NBXYUWGUDX+DCBSNHIVQB));
						}						
						
						QOWECQVXCM=Key;
					}
					else
					{
						//////console.log("ni recomienda ni leches");
						if (KYLIAIETHX==false)
						{
							console.log("CG 5");
						}	
						QOWECQVXCM=false;
					}
				
					
				}
			}
			else
			{
				//////console.log("No merece echar carta");
				////console.log("CG 6 ");
				
				if (KYLIAIETHX==false)
				{
					console.log("CG 7 "+(DVSFGEBHHE+NBXYUWGUDX+DCBSNHIVQB));
				}				
				QOWECQVXCM=false;
			}
		}
		
		//Ahora teniendo en cuenta cantes
		Key=UIBEMREGDL(MGYJHGHWGC,MGYJHGHWGC[WYGCYJGXJX].SGCSHJVERI,MGYJHGHWGC[WYGCYJGXJX].VVRCMEUNOJ);
		if ((DVSFGEBHHE+NMXBZWIQQD+DCBSNHIVQB+BAVVCAHQCC(MGYJHGHWGC))>=JLVDFTPUNI  &&  BMITYYFCGC==4 && FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false)
		{	
			if (KYLIAIETHX==false)
			{
				console.log("CG 8");
			}	
			QOWECQVXCM=Key;
		}
		
		if (QOWECQVXCM==false)
		{
			if ( ((DVSFGEBHHE+NBXYUWGUDX+DCBSNHIVQB+BAVVCAHQCC(MGYJHGHWGC) )>=JLVDFTPUNI)  )
			{
				if (BMITYYFCGC==4)
				{				
					var Key=UIBEMREGDL(MGYJHGHWGC,MGYJHGHWGC[LLLSJDHWIV].SGCSHJVERI,MGYJHGHWGC[LLLSJDHWIV].VVRCMEUNOJ)
					//////console.log("Ultimo en tirar: (prov2): "+Key);
					if (FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false)
					{
						if (KYLIAIETHX==false)
						{
							console.log("CG 9");
						}
						QOWECQVXCM=Key;
					}
					else
					{
						//////console.log("Ultimo en tirar: No lo hace");
						if (KYLIAIETHX==false)
						{
							console.log("CG 10");
						}
						QOWECQVXCM=false;
					}
					
				}
				else
				{

					//////console.log("RECOMIENDA: "+MGYJHGHWGC[u].SGCSHJVERI+" "+MGYJHGHWGC[u].VVRCMEUNOJ);
					var Key=UIBEMREGDL(MGYJHGHWGC,MGYJHGHWGC[LLLSJDHWIV].SGCSHJVERI,MGYJHGHWGC[LLLSJDHWIV].VVRCMEUNOJ);
					//////console.log("RECOMENDADO KEY: "+Key)
					if (FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false && MGYJHGHWGC[NMBMWIAAGS].WQCPJQWFPN!=10 || ( MGYJHGHWGC[NMBMWIAAGS].WQCPJQWFPN==10 && BMITYYFCGC>=2)   ) 
					{		
						//////console.log("RECOMENDADO KEY DEVUELTA: "+Key)
						////console.log("CG 4_1: "+DVSFGEBHHE);
						////console.log("CG 4_1: "+DCBSNHIVQB);
						////console.log("CG 4_3 "+NBXYUWGUDX);				
						
						if (KYLIAIETHX==false)
						{
							console.log("CG 11: "+(DVSFGEBHHE+NBXYUWGUDX+DCBSNHIVQB));
						}						
						QOWECQVXCM=Key;
					}
					else
					{
						//////console.log("ni recomienda ni leches");
						if (KYLIAIETHX==false)
						{
							console.log("CG 12");
						}	
						QOWECQVXCM=false;
					}
				
					
				}
			}
			else
			{
				//////console.log("No merece echar carta");
				////console.log("CG 6 ");
				if (KYLIAIETHX==false)
				{
					console.log("CG 13 "+(DVSFGEBHHE+NBXYUWGUDX+DCBSNHIVQB));
				}					
				
				QOWECQVXCM=false;
			}
		}	
	//}
	}
	return QOWECQVXCM;
}


FNLYNGWANP=function(MGYJHGHWGC,UHTPGPRUJA, PPHCWHCIWQ)
{
	
	var u;
	var i;
	var QOWECQVXCM;
	var VEFCIYHBGC=false;
	var JEOOIEYAWD=[];
	
		
	JEOOIEYAWD.splice(0,100);
	for (u=0;u<=VDKOVQXHON.length-1;u++){
		JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[u].SGCSHJVERI,VDKOVQXHON[u].VVRCMEUNOJ,VDKOVQXHON[u].jugador ));
	}
	
	for (i=0;i<=MGYJHGHWGC.length-1;i++)
	{
		if (MGYJHGHWGC[i].TNFAGGMKXD.name==PPHCWHCIWQ)
		{
			JEOOIEYAWD.push(new UYOMGORTXR(MGYJHGHWGC[i].SGCSHJVERI,MGYJHGHWGC[i].VVRCMEUNOJ,UHTPGPRUJA));
			break;
		}		
	}

	
	
	if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true)
	{
		VEFCIYHBGC=true;	
	}

	
	if (VEFCIYHBGC==true)
	{
		QOWECQVXCM=PPHCWHCIWQ;
	}
	else
	{
		QOWECQVXCM=false;
	}
	
	log(true,"FNLYNGWANP "+UHTPGPRUJA +" "+QOWECQVXCM);
	return QOWECQVXCM;
}



NFKKYVMBUB=function(){

	var i;
	var NMBAYQIQHE=false;
	var DCBSNHIVQB=0;
	
	for (i=0;i<=VDKOVQXHON.length-1;i++)
	{
		DCBSNHIVQB=DCBSNHIVQB+VDKOVQXHON[i].WQCPJQWFPN;
	}

	if (DCBSNHIVQB>=20)
	{
		NMBAYQIQHE=true;
	}	

	return NMBAYQIQHE;
}

PPPPWPCPWW=function(FXGSEGRXKC,UHTPGPRUJA,BMITYYFCGC)
{
	var i;
	var u;
	var RTOSLKFWHC=false;
	var VEFCIYHBGC;
	
	for (u=12;u>=7;u--)
	{
		for (i=0;i<=FXGSEGRXKC.length-1;i++)
		{
			var Key=UIBEMREGDL(FXGSEGRXKC,FXGSEGRXKC[i].SGCSHJVERI,FXGSEGRXKC[i].VVRCMEUNOJ)
			if (FXGSEGRXKC[i].SGCSHJVERI==TGTQPBEQFR && FXGSEGRXKC[i].VVRCMEUNOJ==u)
			{
				RTOSLKFWHC=Key;
				break;
			}
		}	
	}
	
	return RTOSLKFWHC;
}

SMMBWKHVIL=function(FXGSEGRXKC,UHTPGPRUJA,BMITYYFCGC)
{
	var i;
	var u;
	var RTOSLKFWHC=false;
	var VEFCIYHBGC;
	
	for (u=12;u>=11;u--)
	{
		for (i=0;i<=FXGSEGRXKC.length-1;i++)
		{
			var Key=UIBEMREGDL(FXGSEGRXKC,FXGSEGRXKC[i].SGCSHJVERI,FXGSEGRXKC[i].VVRCMEUNOJ)
			if (FXGSEGRXKC[i].SGCSHJVERI==TGTQPBEQFR && FXGSEGRXKC[i].VVRCMEUNOJ==u)
			{
				RTOSLKFWHC=Key;
				break;
			}
		}	
	}
	
	return RTOSLKFWHC;
}

JJAJAJAJAJ=function(FXGSEGRXKC,UHTPGPRUJA,BMITYYFCGC)
{
	var i;
	var u;
	var RTOSLKFWHC=false;
	var VEFCIYHBGC;
	
	for (u=10;u>=8;u--)
	{
		for (i=0;i<=FXGSEGRXKC.length-1;i++)
		{
			var Key=UIBEMREGDL(FXGSEGRXKC,FXGSEGRXKC[i].SGCSHJVERI,FXGSEGRXKC[i].VVRCMEUNOJ)
			if (FXGSEGRXKC[i].SGCSHJVERI==TGTQPBEQFR && FXGSEGRXKC[i].VVRCMEUNOJ==u)
			{
				RTOSLKFWHC=Key;
				break;
			}
		}	
	}
	
	return RTOSLKFWHC;
}

EJEJEJEJJE=function(FXGSEGRXKC,UHTPGPRUJA,BMITYYFCGC)
{
	var i;
	var u;
	var RTOSLKFWHC=false;
	var VEFCIYHBGC;
	
	////console.log("Analizando cartas.."+LUCRWXJMDR+" "+BMITYYFCGC);
	for (u=12;u>=11;u--)
	{
		for (i=0;i<=FXGSEGRXKC.length-1;i++)
		{
			var Key=UIBEMREGDL(FXGSEGRXKC,FXGSEGRXKC[i].SGCSHJVERI,FXGSEGRXKC[i].VVRCMEUNOJ)
			if (FXGSEGRXKC[i].SGCSHJVERI!=TGTQPBEQFR && FXGSEGRXKC[i].VVRCMEUNOJ==u)
			{
				RTOSLKFWHC=Key;
				break;
			}
		}	
	}
	////console.log("Analizando cartas fin .."+LUCRWXJMDR+" "+BMITYYFCGC+" " +RTOSLKFWHC);
	return RTOSLKFWHC;
}


IGHVIUGWUO=function(UHTPGPRUJA)
{
	var MANSCWVWVW="D";
	var STLEOJDWSU=HHOPUSIABJ(UHTPGPRUJA);
	var FXGSEGRXKC;
	var i;
	var RTOSLKFWHC=false;
	
	if (STLEOJDWSU=="D")
	{
		MANSCWVWVW="R";
		FXGSEGRXKC=CBCNHFGWLU;
	}
	if (STLEOJDWSU=="R")
	{
		MANSCWVWVW="U";
		FXGSEGRXKC=TWJONOKGHC;
	}	
	if (STLEOJDWSU=="U")
	{
		MANSCWVWVW="L";
		FXGSEGRXKC=KNVKGHHTYC;
	}	
		if (STLEOJDWSU=="L")
	{
		MANSCWVWVW="D";
		FXGSEGRXKC=AGKVNAGGLB;
	}	
	
	var FHEFFYUQFX=VDKOVQXHON[0].SGCSHJVERI;
	
	for (i=0;i<=FXGSEGRXKC.length-1;i++)
	{
		if (FXGSEGRXKC[i].SGCSHJVERI==FHEFFYUQFX && FXGSEGRXKC[i].SGCSHJVERI!=TGTQPBEQFR && FXGSEGRXKC[i].VVRCMEUNOJ>=12)
		{
			RTOSLKFWHC=true;
			break;
		}
	}
	
	return RTOSLKFWHC;
	
}


ZXCFVSVDSW=function(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
{
	var i;
	var u;
	var VEFCIYHBGC=false;
	var DVSFGEBHHE;
	var VVSFGSGGSW;
	var DCBSNHIVQB=0;
	var NMBDIWHGDI=false;
	var RTOSLKFWHC=false;
	var SGEGEGEGEW;
	var LKCQTMENTF=VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA);
	
	SGEGEGEGEW=XXZXVSDVSD(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
	DVSFGEBHHE=SGEGEGEGEW.DVSFGEBHHE;
	VVSFGSGGSW=SGEGEGEGEW.VVSFGSGGSW;
	DCBSNHIVQB=SGEGEGEGEW.DCBSNHIVQB;
	
	if (VDKOVQXHON.length>0)
	{
		if (LUCRWXJMDR>=5 && LKCQTMENTF==true && VDKOVQXHON[0].SGCSHJVERI!=TGTQPBEQFR && BMITYYFCGC==3 && IGHVIUGWUO(UHTPGPRUJA)==true )
		{
			RTOSLKFWHC=true;
		}
	}	
	
	if (LUCRWXJMDR==4 && LKCQTMENTF==false && BMITYYFCGC==3 && EAYMXOKKHT()==true )
	{
		RTOSLKFWHC=true;
	}	
		

	
	return RTOSLKFWHC;
}


MZXZCVZDVZ=function(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
{
	var i;
	var u;
	var VEFCIYHBGC=false;
	var DVSFGEBHHE;
	var VVSFGSGGSW;
	var DCBSNHIVQB=0;
	var NMBDIWHGDI=false;
	var RTOSLKFWHC=false;
	var SGEGEGEGEW;
	var LKCQTMENTF=VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA);
	
	SGEGEGEGEW=XXZXVSDVSD(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
	DVSFGEBHHE=SGEGEGEGEW.DVSFGEBHHE;
	VVSFGSGGSW=SGEGEGEGEW.VVSFGSGGSW;
	DCBSNHIVQB=SGEGEGEGEW.DCBSNHIVQB;
	
	if (VDKOVQXHON.length>0) //Hay un guiñote en la mesa, soy el tercero y no sujeto
	{
		if (LKCQTMENTF==true && VDKOVQXHON[0].SGCSHJVERI!=TGTQPBEQFR && BMITYYFCGC==3 && VDKOVQXHON[0].VVRCMEUNOJ>=12 )
		{
			RTOSLKFWHC=true;
		}
	}	
	
	
	return RTOSLKFWHC;
}

MBXKWGIPQD=function()
{
	var i;
	var QOWECQVXCM=false;
	
	if (LSJCRLDUCH.length>0)
	{
		for (i=0;i<=LSJCRLDUCH.length-1;i++)
		{
			if (LSJCRLDUCH[i].veces==1 && LSJCRLDUCH[i].SGCSHJVERI!=TGTQPBEQFR)
			{
				QOWECQVXCM=true;
				break
			}
		}
	
	}
	
	return QOWECQVXCM;
	
}


GMUESSHERK=function(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
{
	var i;
	var u;
	var VEFCIYHBGC=false;
	var DVSFGEBHHE;
	var VVSFGSGGSW;
	var DCBSNHIVQB=0;
	var NMBDIWHGDI=false;
	var RTOSLKFWHC=false;
	var SGEGEGEGEW;
	
	
	SGEGEGEGEW=XXZXVSDVSD(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
	DVSFGEBHHE=SGEGEGEGEW.DVSFGEBHHE;
	VVSFGSGGSW=SGEGEGEGEW.VVSFGSGGSW;
	DCBSNHIVQB=SGEGEGEGEW.DCBSNHIVQB

	
	
	var LKCQTMENTF=VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA);
	
	LSJCRLDUCH.splice(0,100);



	for (i=0;i<=MGYJHGHWGC.length-1;i++)
	{
		//log(false,"ENTRA "+i)
		XRUDRJJNSI(MGYJHGHWGC[i].SGCSHJVERI);
	}
	
	if (RTOSLKFWHC==false)
	{
		RTOSLKFWHC=FSXJJOQKGP(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC);
	}
	
	

	

	////console.log("AGTXFNIKQD "+LUCRWXJMDR+" Nº Jugada"+BMITYYFCGC)
	
	if (RTOSLKFWHC==false && EVAILWGGKX==true && BMITYYFCGC<=2 && ( DVSFGEBHHE>=80  || DVSFGEBHHE<=40 || VVSFGSGGSW>=90 )  )
	{
		NMBDIWHGDI=SMMBWKHVIL(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
		if ( NMBDIWHGDI!=false && FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,NMBDIWHGDI)!=false ) //Si echo triunfo que sea para ganar
		{
			RTOSLKFWHC=NMBDIWHGDI;
			//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A13");
			//VEFCIYHBGC=true;
			if (KYLIAIETHX==false)
			{
				console.log("CG 14");
			}		
		}	
	}
	
	if (RTOSLKFWHC==false && EVAILWGGKX==true && BMITYYFCGC<=2 && ( DVSFGEBHHE<=40 || VVSFGSGGSW>=90 ) && (DCBSNHIVQB+DVSFGEBHHE<JLVDFTPUNI) )
	{
		NMBDIWHGDI=EJEJEJEJJE(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
		if ( NMBDIWHGDI!=false )
		{
			RTOSLKFWHC=NMBDIWHGDI;
			//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A14");
			//VEFCIYHBGC=true;
			if (KYLIAIETHX==false)
			{
				console.log("CG 15");
			}	
		}	
	}		
	
	
	if (RTOSLKFWHC==false && EVAILWGGKX==true && BMITYYFCGC<=2 && ( DVSFGEBHHE<=40 || VVSFGSGGSW>=90)  )
	{
		NMBDIWHGDI=JJAJAJAJAJ(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
		if ( NMBDIWHGDI!=false && FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,NMBDIWHGDI)!=false )
		{
			RTOSLKFWHC=NMBDIWHGDI;
			if (KYLIAIETHX==false)
			{
				console.log("CG 16");
			}	
			//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A15");
			//VEFCIYHBGC=true;
		}	
	}				
	
	if (RTOSLKFWHC==false && BMITYYFCGC==3 && LKCQTMENTF==true && IGHVIUGWUO(UHTPGPRUJA)==false && EVAILWGGKX==false && LUCRWXJMDR==4 && DCBSNHIVQB<10)
	{
		for (i=0;i<=MGYJHGHWGC.length-1;i++)
		{
			var Key=UIBEMREGDL(MGYJHGHWGC,MGYJHGHWGC[i].SGCSHJVERI,MGYJHGHWGC[i].VVRCMEUNOJ)
			if (MGYJHGHWGC[i].SGCSHJVERI!=TGTQPBEQFR && MGYJHGHWGC[i].VVRCMEUNOJ>=11)
			{
				RTOSLKFWHC=Key;
				//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A16");
				if (KYLIAIETHX==false)
				{
					console.log("CG 17");
				}	
				//VEFCIYHBGC=true;
				break;
			}
		}	
	}	
	
	/*if (BMITYYFCGC==3 && LKCQTMENTF==false && IGHVIUGWUO(UHTPGPRUJA)==false && EVAILWGGKX==false && LUCRWXJMDR==4 && DCBSNHIVQB>=10)
	{
		for (i=0;i<=MGYJHGHWGC.length-1;i++)
		{
			var Key=UIBEMREGDL(MGYJHGHWGC,MGYJHGHWGC[i].SGCSHJVERI,MGYJHGHWGC[i].VVRCMEUNOJ)
			if (MGYJHGHWGC[i].SGCSHJVERI!=TGTQPBEQFR && MGYJHGHWGC[i].VVRCMEUNOJ>=11)
			{
				RTOSLKFWHC=Key;
				//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A16");
				//VEFCIYHBGC=true;
				break;
			}
		}	
	}*/		
	
	if (RTOSLKFWHC==false) //Arrastro de as, o salgo de últimas con as si no puedo descartar
	{
		if ( (LUCRWXJMDR>=5 && BMITYYFCGC==1) || (LUCRWXJMDR==4 && BMITYYFCGC==1 && MBXKWGIPQD()==false  )   )
		{
			for (i=0;i<=MGYJHGHWGC.length-1;i++)
			{
				var Key=UIBEMREGDL(MGYJHGHWGC,MGYJHGHWGC[i].SGCSHJVERI,MGYJHGHWGC[i].VVRCMEUNOJ)
				if (MGYJHGHWGC[i].SGCSHJVERI!=TGTQPBEQFR && MGYJHGHWGC[i].VVRCMEUNOJ==12)
				{
					RTOSLKFWHC=Key;
					if (KYLIAIETHX==false)
					{
						console.log("CG 18");
					}	
					//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A17");
					//VEFCIYHBGC=true;
					break;
				}
			}
		}
	}
	
	if (RTOSLKFWHC==false)
	{		
		for (i=0;i<=LSJCRLDUCH.length-1;i++)
		{
			//log(false,"A VER... "+LSJCRLDUCH[i].SGCSHJVERI+" "+LSJCRLDUCH[i].veces)
			if (LSJCRLDUCH[i].veces==1 && LSJCRLDUCH[i].SGCSHJVERI!=TGTQPBEQFR)
			{
				for (u=0;u<=MGYJHGHWGC.length-1;u++)
				{
					
					var Key=UIBEMREGDL(MGYJHGHWGC,MGYJHGHWGC[u].SGCSHJVERI,MGYJHGHWGC[u].VVRCMEUNOJ)
					if (MGYJHGHWGC[u].SGCSHJVERI==LSJCRLDUCH[i].SGCSHJVERI && 
					( (MGYJHGHWGC[u].WQCPJQWFPN<10  && EVAILWGGKX==false) || (MGYJHGHWGC[u].WQCPJQWFPN==0  && EVAILWGGKX==true) )      && 
					 ((DVSFGEBHHE+MGYJHGHWGC[u].WQCPJQWFPN+DCBSNHIVQB)<JLVDFTPUNI) && //Como antes se mira si gano, esto se refiere a que no doy partida a los rivales.
						NMBCIWGWAD(MGYJHGHWGC,MGYJHGHWGC[u].SGCSHJVERI,MGYJHGHWGC[u].VVRCMEUNOJ)==false &&
						(
						LKCQTMENTF==true || 
						FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)==false ||
						BMITYYFCGC==1
						)

					
					)
					{
						//VEFCIYHBGC=true;
						RTOSLKFWHC=MGYJHGHWGC[u].TNFAGGMKXD.name;
						//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A18");
						if (KYLIAIETHX==false)
						{
							console.log("CG 19");
						}	
						//log(false,"LSKPLOTYIB "+MGYJHGHWGC[u].SGCSHJVERI+" "+MGYJHGHWGC[u].WQCPJQWFPN);
						break;
					}
				}
			}
		}
	}


	if (RTOSLKFWHC==false)
	{
		//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A19");
		if (KYLIAIETHX==false)
		{
			console.log("CG 19.1");
		}	
		RTOSLKFWHC=FYUXQXPFFD(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC);
		
	}
	
	//log(false,"GMUESSHERK "+UHTPGPRUJA +" "+RTOSLKFWHC);
	return RTOSLKFWHC;
	
}

var HMWCCAMDCC = function(SGCSHJVERI,veces){
	this.SGCSHJVERI=SGCSHJVERI;
	this.veces=veces;	
};
	

XRUDRJJNSI=function(SGCSHJVERI){
	
	var i;
	var VEFCIYHBGC=false;
	
	for (i=0;i<=LSJCRLDUCH.length-1;i++)
	{
		if (LSJCRLDUCH[i].SGCSHJVERI==SGCSHJVERI)
		{
			LSJCRLDUCH[i].veces=LSJCRLDUCH[i].veces+1;
			VEFCIYHBGC=true;
			break;
		}
	}
	
	if (VEFCIYHBGC==false)
	{
		LSJCRLDUCH.push(new HMWCCAMDCC(SGCSHJVERI,1) );
	}
	
}

function JOGDJUXHDY(SGCSHJVERI,VVRCMEUNOJ,key,WQCPJQWFPN) {
	this.SGCSHJVERI=SGCSHJVERI;
	this.VVRCMEUNOJ=VVRCMEUNOJ;
    this.name=key;
	this.WQCPJQWFPN=WQCPJQWFPN;
}

NMBCIWGWAD=function(XACEBCSJAB,FHEFFYUQFX,ValorReal)
{
	var i;
	var u;
	var JGDJVGWVNZ=0;
	var RTOSLKFWHC=true;
	
	if (ValorReal==9 || ValorReal==10)
	{
		for (i=0;i<=XACEBCSJAB.length-1;i++)
		{
			if (XACEBCSJAB[i].SGCSHJVERI==FHEFFYUQFX && (XACEBCSJAB[i].VVRCMEUNOJ==9 ||  XACEBCSJAB[i].VVRCMEUNOJ==10))
			{
				JGDJVGWVNZ++;
			}
		}
		
		if (JGDJVGWVNZ==2)
		{
			for (i=0;i<=FOQUJVEYFC.length-1;i++)
			{
				if (FOQUJVEYFC[i]==FHEFFYUQFX)
				{
					RTOSLKFWHC=false;
					break;					
				}
			}
		}
		else
		{
			RTOSLKFWHC=false;
		}
	}
	else
	{
		RTOSLKFWHC=false;
	}
	
	return RTOSLKFWHC;
	
}

FYUXQXPFFD=function(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
{
	var THQIYGMEUM=[];
	var i;
	var IYSEFXCNWF=20;
	var VEFCIYHBGC=false;
	var QOWECQVXCM=false;
	var Key;
	var PUWBYVGIMA;
	var INIDNQUMXV;
	
	
	var LKCQTMENTF=VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA);
	
	THQIYGMEUM.splice(0,100);
	
	
	for (i=0;i<=MGYJHGHWGC.length-1;i++){
		THQIYGMEUM.push(new JOGDJUXHDY(MGYJHGHWGC[i].SGCSHJVERI,MGYJHGHWGC[i].VVRCMEUNOJ,MGYJHGHWGC[i].TNFAGGMKXD.name, MGYJHGHWGC[i].WQCPJQWFPN ));
	}
	

	
	//Si no encuentra, me quito cualquiera
	PUWBYVGIMA=100;
	if (QOWECQVXCM==false)
	{
		for (i=0;i<=THQIYGMEUM.length-1;i++)
		{	
			Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)
			if (THQIYGMEUM[i].VVRCMEUNOJ<PUWBYVGIMA && THQIYGMEUM[i].SGCSHJVERI!=TGTQPBEQFR &&
			
				(LKCQTMENTF==true || 
				FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)==false ||
				BMITYYFCGC==1)
				
				&& NMBCIWGWAD(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)==false
				
			)
			
			{
				PUWBYVGIMA=THQIYGMEUM[i].VVRCMEUNOJ
				//Phaser.ArrayUtils.shuffle(THQIYGMEUM);
				QOWECQVXCM=THQIYGMEUM[i].name
				if (KYLIAIETHX==false)
				{
					console.log("CG 20");
				}	
				//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A08");
				//break;
			}
		}
	}
	
	
	
	

	PUWBYVGIMA=100;
	if (QOWECQVXCM==false)
	{
		
		for (i=0;i<=THQIYGMEUM.length-1;i++)
		{	
			Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)
			if (THQIYGMEUM[i].VVRCMEUNOJ<PUWBYVGIMA && THQIYGMEUM[i].SGCSHJVERI==TGTQPBEQFR && 
			
				(LKCQTMENTF==true || 
				FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)==false ||
				BMITYYFCGC==1)
				
				&& NMBCIWGWAD(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)==false
				&& ( (BMITYYFCGC!=4 && BMITYYFCGC!=3 ) || ( (BMITYYFCGC==4 || BMITYYFCGC==3 )  && NBXWIVWWRS(THQIYGMEUM, THQIYGMEUM[i].VVRCMEUNOJ, THQIYGMEUM[i].SGCSHJVERI)==true )
				) //Para que no se guarde el 3 pelado
			)
			{
				PUWBYVGIMA=THQIYGMEUM[i].VVRCMEUNOJ
				//Phaser.ArrayUtils.shuffle(THQIYGMEUM);
				QOWECQVXCM=THQIYGMEUM[i].name
				if (KYLIAIETHX==false)
				{
					console.log("CG 21");
				}	
				//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A09");
				//break;
			}
		}
	}	
		
		
	PUWBYVGIMA=100;
	if (QOWECQVXCM==false)
	{
		for (i=0;i<=THQIYGMEUM.length-1;i++)
		{	
			Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)
			if (THQIYGMEUM[i].VVRCMEUNOJ<PUWBYVGIMA && THQIYGMEUM[i].SGCSHJVERI!=TGTQPBEQFR
				&& NMBCIWGWAD(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)==false
			)
			
			{
				PUWBYVGIMA=THQIYGMEUM[i].VVRCMEUNOJ
				//Phaser.ArrayUtils.shuffle(THQIYGMEUM);
				QOWECQVXCM=THQIYGMEUM[i].name
				if (KYLIAIETHX==false)
				{
					console.log("CG 22");
				}	
				//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A10");
				//break;
			}
		}
	}
	PUWBYVGIMA=100;
	if (QOWECQVXCM==false)
	{
		for (i=0;i<=THQIYGMEUM.length-1;i++)
		{	
			if (THQIYGMEUM[i].VVRCMEUNOJ<PUWBYVGIMA && THQIYGMEUM[i].SGCSHJVERI==TGTQPBEQFR
				&& NMBCIWGWAD(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)==false
				&& ( (BMITYYFCGC!=4 && BMITYYFCGC!=3 ) || ( (BMITYYFCGC==4 || BMITYYFCGC==3 ) && NBXWIVWWRS(THQIYGMEUM, THQIYGMEUM[i].VVRCMEUNOJ, THQIYGMEUM[i].SGCSHJVERI)==true ) 
				) //Para que no se guarde el 3 pelado
			)
			{
				PUWBYVGIMA=THQIYGMEUM[i].VVRCMEUNOJ
				//Phaser.ArrayUtils.shuffle(THQIYGMEUM);
				QOWECQVXCM=THQIYGMEUM[i].name
				if (KYLIAIETHX==false)
				{
					console.log("CG 23");
				}	
				//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A11");
				//break;
			}
		}
	}	
	
	if (QOWECQVXCM==false)
	{
		THQIYGMEUM=Phaser.ArrayUtils.shuffle(THQIYGMEUM);
		PUWBYVGIMA=100;
		for (i=0;i<=THQIYGMEUM.length-1;i++)
		{
			if (THQIYGMEUM[i].VVRCMEUNOJ<=PUWBYVGIMA)
			{
				PUWBYVGIMA=THQIYGMEUM[i].VVRCMEUNOJ;
				QOWECQVXCM=THQIYGMEUM[i].name
				if (KYLIAIETHX==false)
				{
					console.log("CG 24");
				}	
			}
		}	
		
		
		//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A12");
	}

	
	//Si acaba en mi que tire la más alta, aunque tenga ya el Devuelvo calculado
	if (BMITYYFCGC==4)
	{
		INIDNQUMXV=0;
	//if (QOWECQVXCM==false)
	//{
		for (i=0;i<=THQIYGMEUM.length-1;i++)
		{	
			Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)
			if (THQIYGMEUM[i].VVRCMEUNOJ>INIDNQUMXV && THQIYGMEUM[i].SGCSHJVERI!=TGTQPBEQFR &&
			
				(LKCQTMENTF==true)
				
				&& NMBCIWGWAD(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)==false
				
			)
			
			{
				INIDNQUMXV=THQIYGMEUM[i].VVRCMEUNOJ
				//Phaser.ArrayUtils.shuffle(THQIYGMEUM);
				QOWECQVXCM=THQIYGMEUM[i].name
				if (KYLIAIETHX==false)
				{
					console.log("CG 25");
				}	
				//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A08");
				//break;
			}
		}
	//}
	}
	
	
	
	
	
	//log(false,"IA_ALEATORIONOTriunfo "+UHTPGPRUJA +" "+QOWECQVXCM);
	return QOWECQVXCM;
	
}

BXCWOPQCSD=function(THQIYGMEUM,MGYJHGHWGC,UHTPGPRUJA,ValorReal)
{
	var i;
	var IYSEFXCNWF=20;
	var VEFCIYHBGC=false;
	var QOWECQVXCM=false;
	
	for (i=0;i<=IYSEFXCNWF;i++)
	{
		//Intento quitarme cartas que no san TGTQPBEQFR, pero que no valgan mⳠde 10 OMDVKATFLQ
		THQIYGMEUM=Phaser.ArrayUtils.shuffle(THQIYGMEUM);
		if (THQIYGMEUM[0].SGCSHJVERI==TGTQPBEQFR && THQIYGMEUM[0].VVRCMEUNOJ<=ValorReal)
		{
			var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[0].SGCSHJVERI,THQIYGMEUM[0].VVRCMEUNOJ)
			if (FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false)
			{
				VEFCIYHBGC=true;
				QOWECQVXCM=THQIYGMEUM[0].name
				if (KYLIAIETHX==false)
				{
					console.log("CG 25.1");
				}	
				break;
			}
		}
	}
	
	return QOWECQVXCM;
}

/*DSAYFEABOB=function(MGYJHGHWGC,UHTPGPRUJA)
{
	var THQIYGMEUM=[];
	var i;
	var IYSEFXCNWF=20;
	var VEFCIYHBGC=false;
	var QOWECQVXCM;
	
	THQIYGMEUM.splice(0,100);
	
	
	for (i=0;i<=MGYJHGHWGC.length-1;i++){
		THQIYGMEUM.push(new JOGDJUXHDY(MGYJHGHWGC[i].SGCSHJVERI,MGYJHGHWGC[i].VVRCMEUNOJ,MGYJHGHWGC[i].TNFAGGMKXD.name, MGYJHGHWGC[i].WQCPJQWFPN ));
	}
	
	
	VEFCIYHBGC=BXCWOPQCSD(THQIYGMEUM,MGYJHGHWGC,UHTPGPRUJA,7)
	if (VEFCIYHBGC==false)
	{
		VEFCIYHBGC=BXCWOPQCSD(THQIYGMEUM,MGYJHGHWGC,UHTPGPRUJA,8)
	}
	if (VEFCIYHBGC==false)
	{
		VEFCIYHBGC=BXCWOPQCSD(THQIYGMEUM,MGYJHGHWGC,UHTPGPRUJA,9)
	}
	if (VEFCIYHBGC==false)
	{
		VEFCIYHBGC=BXCWOPQCSD(THQIYGMEUM,MGYJHGHWGC,UHTPGPRUJA,10)
	}
	if (VEFCIYHBGC==false)
	{
		VEFCIYHBGC=BXCWOPQCSD(THQIYGMEUM,MGYJHGHWGC,UHTPGPRUJA,11)
	}
		if (VEFCIYHBGC==false)
	{
		VEFCIYHBGC=BXCWOPQCSD(THQIYGMEUM,MGYJHGHWGC,UHTPGPRUJA,12)
	}
		if (VEFCIYHBGC==false)
	{
		VEFCIYHBGC=BXCWOPQCSD(THQIYGMEUM,MGYJHGHWGC,UHTPGPRUJA,12)
	}
	
	
	
	
	if (VEFCIYHBGC==false)
	{
		for (i=0;i<=IYSEFXCNWF;i++)
		{
			//Intento quitarme cartas que no san TGTQPBEQFR, pero que maten
			THQIYGMEUM=Phaser.ArrayUtils.shuffle(THQIYGMEUM);
			if (THQIYGMEUM[0].SGCSHJVERI!=TGTQPBEQFR)
			{
				var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[0].SGCSHJVERI,THQIYGMEUM[0].VVRCMEUNOJ)
				if (FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false)
				{
					VEFCIYHBGC=true;
					QOWECQVXCM=THQIYGMEUM[0].name
					break;
				}
			}
		}
	}

	if (VEFCIYHBGC==false)
	{
		THQIYGMEUM=Phaser.ArrayUtils.shuffle(THQIYGMEUM);
		QOWECQVXCM=THQIYGMEUM[0].name
	}
	
	log(false,"IA_ALEATORIOSITriunfo "+UHTPGPRUJA +" "+QOWECQVXCM);
	return QOWECQVXCM;
}*/

AJCKJHQOQC=function(VDKOVQXHON,BMITYYFCGC)
{
	var QOWECQVXCM=false;
	if (BMITYYFCGC==3)
	{
		if (VDKOVQXHON.length>0)
		{
			if (VDKOVQXHON[0].SGCSHJVERI==TGTQPBEQFR)
			{
				QOWECQVXCM=true;
			}
		}
	}
	return QOWECQVXCM;
}

OQOQOCBSKK=function(FXGSEGRXKC)
{
	var i;
	var Contador=0;
	var QOWECQVXCM=false;
	
	for (i=0;i<=FXGSEGRXKC.length-1;i++)
	{
		if (FXGSEGRXKC[i].SGCSHJVERI==TGTQPBEQFR)
		{
			Contador++;
		}
	}
	
		
	return Contador;
}

NBXWIVWWRS=function(XACEBCSJAB, ValorReal, FHEFFYUQFX)
{
	//Sirve para que no se quede con el tres pelado. Obligo a tirarlo si tengo dos triunfos y muere en mi la baza
	var i;
	var QOWECQVXCM=true;
	
	if (OQOQOCBSKK(XACEBCSJAB)==2)
	{
		if (FHEFFYUQFX==TGTQPBEQFR && ValorReal==11)
		{
			QOWECQVXCM=true;
		}
		else
		{
			for (i=0;i<=XACEBCSJAB.length-1;i++)
			{
				if (XACEBCSJAB[i].SGCSHJVERI==TGTQPBEQFR && XACEBCSJAB[i].VVRCMEUNOJ==11 && ValorReal!=11 && FHEFFYUQFX==TGTQPBEQFR)
				{
					QOWECQVXCM=false;
				}
			}
		}
	

	}
	else
	{
		QOWECQVXCM=true;
	}
	
	//Si lo tengo pero en la mesa está el AS, no lo hecho
	for (i=0;i<=VDKOVQXHON.length-1;i++)
	{
		if (VDKOVQXHON[i].SGCSHJVERI==TGTQPBEQFR && VDKOVQXHON[i].VVRCMEUNOJ==12)
		{
			QOWECQVXCM=false;
			break;
		}
	}
	
	////console.log("Validacion del tres: "+QOWECQVXCM);
	return QOWECQVXCM;
	
}

HWPRRTMYEP=function(MGYJHGHWGC,UHTPGPRUJA,Criterio,BMITYYFCGC){
	//Con TGTQPBEQFR Alto
	//Con TGTQPBEQFR Bajo
	
	var u;
	var i;
	var JEOOIEYAWD=[];
	var PUWBYVGIMA=100;
	var INIDNQUMXV=0;
	var QOWECQVXCM=false;
	var GCDJJRCJTC=false;
	var valorAnalizar;
	var THQIYGMEUM=[];
	var IYSEFXCNWF;
	var CartaMasBaja=0;
	var PaloMasBajo="";
	var PaloMasAlto="";
	var CartaMasAlta=0;
	var VEFCIYHBGC=false;
	
	////console.log("Sujeta");
	
	QOWECQVXCM=FSXJJOQKGP(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC);
	if (QOWECQVXCM==false)
	{
		
		
		
		
		if (  //(EVAILWGGKX==false && VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true) 
			//|| (EVAILWGGKX==true && 
		VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true && AJCKJHQOQC(VDKOVQXHON,BMITYYFCGC)==true    )		
		{
			//console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A01");
			QOWECQVXCM=GMUESSHERK(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC);			
			//log(false,"LA SRCGCMADME ES NUESTRA JUGADOR: "+UHTPGPRUJA);
		}
		else
		{		
			
			THQIYGMEUM.splice(0,100);	

			for (i=0;i<=MGYJHGHWGC.length-1;i++){
				THQIYGMEUM.push(new JOGDJUXHDY(MGYJHGHWGC[i].SGCSHJVERI,MGYJHGHWGC[i].VVRCMEUNOJ,MGYJHGHWGC[i].TNFAGGMKXD.name, MGYJHGHWGC[i].WQCPJQWFPN ));
			}
			THQIYGMEUM=Phaser.ArrayUtils.shuffle(THQIYGMEUM);
			
			
			
			if (VDKOVQXHON.length>0) //A un guiñote , otro
			{
				if (OQOQOCBSKK(THQIYGMEUM)==0 && BMITYYFCGC==2 && VDKOVQXHON[0].SGCSHJVERI!=TGTQPBEQFR && VDKOVQXHON[0].VVRCMEUNOJ>=11)
				{
					
					for (i=0;i<=THQIYGMEUM.length-1;i++)
					{
						var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)
						if ( THQIYGMEUM[i].VVRCMEUNOJ>=11)
						{
							QOWECQVXCM=Key;
							////console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A02");
							break;
						}
					}
				}			
			}
			
			
			if (QOWECQVXCM==false)
			{
				if (BMITYYFCGC==4)
				{	
					VEFCIYHBGC=false;
					CartaMasAlta=0;
					for (i=0;i<=THQIYGMEUM.length-1;i++)
					{
						if (THQIYGMEUM[i].SGCSHJVERI!=TGTQPBEQFR)
						{
							var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)
							if ( FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false)						
							{
								if (THQIYGMEUM[i].VVRCMEUNOJ>=CartaMasAlta)
								{
									CartaMasAlta=THQIYGMEUM[i].VVRCMEUNOJ;
									PaloMasAlto=THQIYGMEUM[i].SGCSHJVERI;
									VEFCIYHBGC=true;								
								}
							}
						}
					}
					if (VEFCIYHBGC==true)
					{
						QOWECQVXCM=UIBEMREGDL(THQIYGMEUM,PaloMasAlto,CartaMasAlta)
						////console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A03");
					}
				}
			}
			
			if (QOWECQVXCM==false)
			{
				
				//log(false,"LA SRCGCMADME NO ES NUESTRA JUGADOR  "+UHTPGPRUJA);
				//Investigo mi TGTQPBEQFR m�s bajo
				
				if (BMITYYFCGC==4 || Criterio=="Bajo")
				{
					if ( OQOQOCBSKK(VDKOVQXHON)<2 ) //ningún guiñote vale dos triunfos
					{					
						VEFCIYHBGC=false;
						CartaMasBaja=100;
						for (i=0;i<=THQIYGMEUM.length-1;i++)
						{
							if (THQIYGMEUM[i].SGCSHJVERI==TGTQPBEQFR)
							{
								var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)
								if ( FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false
								
								&& 
									( (BMITYYFCGC!=4 && BMITYYFCGC!=3 ) || ( (BMITYYFCGC==4 || BMITYYFCGC==3 ) 
									&& NBXWIVWWRS(THQIYGMEUM, THQIYGMEUM[i].VVRCMEUNOJ, THQIYGMEUM[i].SGCSHJVERI)==true )				
									)	//Para que no se guarde el 3 pelado
								)								
								{
									if (THQIYGMEUM[i].VVRCMEUNOJ<=CartaMasBaja)
									{
										CartaMasBaja=THQIYGMEUM[i].VVRCMEUNOJ;
										PaloMasBajo=THQIYGMEUM[i].SGCSHJVERI;
										VEFCIYHBGC=true;
									}
								}
							}
						}
						////console.log("VEFCIYHBGC "+VEFCIYHBGC)
						if (VEFCIYHBGC==true)
						{
							////console.log("Ya lo creo ")
							QOWECQVXCM=UIBEMREGDL(THQIYGMEUM,PaloMasBajo,CartaMasBaja)
							////console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A04");
						}	
					}
				}
				else
				{
					if (Criterio=="Alto")
					{
						VEFCIYHBGC=false;
						CartaMasAlta=0;
						for (i=0;i<=THQIYGMEUM.length-1;i++)
						{
							if (THQIYGMEUM[i].SGCSHJVERI==TGTQPBEQFR)
							{
								var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)
								if ( FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false)						
								{
									if (THQIYGMEUM[i].VVRCMEUNOJ>=CartaMasAlta)
									{
										CartaMasAlta=THQIYGMEUM[i].VVRCMEUNOJ;
										PaloMasAlto=THQIYGMEUM[i].SGCSHJVERI;
										VEFCIYHBGC=true
									}
								}
							}
						}
						if (VEFCIYHBGC==true)
						{
							QOWECQVXCM=UIBEMREGDL(THQIYGMEUM,PaloMasAlto,CartaMasAlta)
							////console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A05");
						}						
						
					}				
					
				}		
		
			}			
		}
	}
	
	if (QOWECQVXCM==false)
	{
		////console.log("CG DESCARTE AGTXFNIKQD: "+LUCRWXJMDR+" jugada "+BMITYYFCGC);
		QOWECQVXCM=GMUESSHERK(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC);		
	}
	//log(false,"Y DEFINITAMENTE DEVUELVE.."+QOWECQVXCM)
	log(false,"HWPRRTMYEP "+UHTPGPRUJA +" "+QOWECQVXCM);
	return QOWECQVXCM;
	
}

MWEIOSJBGW=function(UHTPGPRUJA){
	var i;
	if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true)
	{
		return true;
	}
	else
	{
		return false;
	}
}

FSXJJOQKGP=function(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
{
	var i;
	var THQIYGMEUM=[];
	var LKCQTMENTF=VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA);
	var QOWECQVXCM=false;
	THQIYGMEUM.splice(0,100);
	
	var SGEGEGEGEW=XXZXVSDVSD(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
	var DVSFGEBHHE=SGEGEGEGEW.DVSFGEBHHE;
	var VVSFGSGGSW=SGEGEGEGEW.VVSFGSGGSW;
	var DCBSNHIVQB=SGEGEGEGEW.DCBSNHIVQB;
	
	
	for (i=0;i<=MGYJHGHWGC.length-1;i++){
		THQIYGMEUM.push(new JOGDJUXHDY(MGYJHGHWGC[i].SGCSHJVERI,MGYJHGHWGC[i].VVRCMEUNOJ,MGYJHGHWGC[i].TNFAGGMKXD.name, MGYJHGHWGC[i].WQCPJQWFPN ));
	}
	
	THQIYGMEUM=Phaser.ArrayUtils.shuffle(THQIYGMEUM);
	
	if (BMITYYFCGC==4)
	{
	
		for (i=0;i<=THQIYGMEUM.length-1;i++)
		{
			var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)
			if (  (LKCQTMENTF==true || FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false) && THQIYGMEUM[i].SGCSHJVERI!=TGTQPBEQFR && THQIYGMEUM[i].WQCPJQWFPN>=10  )
			{
				VEFCIYHBGC=true;
				QOWECQVXCM=THQIYGMEUM[i].name
				////console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A06");
				break;
			}
		}
		
	}
	else
	{
		//log(false,"DEBE METERSE AQUI PARA CARGAR "+UHTPGPRUJA+" "+LKCQTMENTF);
		var VEFCIYHBGC=false;
		
		if (LKCQTMENTF==true)
		{
			for (i=0;i<=VDKOVQXHON.length-1;i++)
			{
				if (  (VDKOVQXHON[i].SGCSHJVERI==TGTQPBEQFR && VDKOVQXHON[i].WQCPJQWFPN>=4)
						||    (VDKOVQXHON[i].SGCSHJVERI==TGTQPBEQFR && VDKOVQXHON[i].WQCPJQWFPN>=2 && DCBSNHIVQB<=15   )       )
				{
					VEFCIYHBGC=true;
					break;
				}
			}
			
			if (VEFCIYHBGC==true)
			{
				//log(false,"ES DE MI COMPA�ERO "+UHTPGPRUJA);
				for (i=0;i<=THQIYGMEUM.length-1;i++)
				{
					
					if (  THQIYGMEUM[i].SGCSHJVERI!=TGTQPBEQFR && THQIYGMEUM[i].WQCPJQWFPN>=10  )
					{
						VEFCIYHBGC=true;
						QOWECQVXCM=THQIYGMEUM[i].name
						////console.log("QOWECQVXCM "+LUCRWXJMDR+": "+"A07");
						//log(false,"ESTA DEVUELVE "+UHTPGPRUJA+ " "+THQIYGMEUM[i].VVRCMEUNOJ+" de " + THQIYGMEUM[i].SGCSHJVERI);
						break;
					}
				}
			}
			else
			{
				//log(false,"NO ES DE MI COMPA�ERO "+UHTPGPRUJA);
			}
		}
		else
		{
			QOWECQVXCM=false;
		}
	}
	
	log(false,"FSXJJOQKGP "+UHTPGPRUJA +" "+QOWECQVXCM);
	
	return QOWECQVXCM;
}



	




UIBEMREGDL=function(MGYJHGHWGC,SGCSHJVERI,VVRCMEUNOJ){
	var i;
	var QOWECQVXCM=false;
	
	for (i=0;i<=MGYJHGHWGC.length-1;i++)
	{
		if (MGYJHGHWGC[i].VVRCMEUNOJ==VVRCMEUNOJ && MGYJHGHWGC[i].SGCSHJVERI==SGCSHJVERI)
		{
			if (MGYJHGHWGC[i].name!=undefined)
			{
				QOWECQVXCM=MGYJHGHWGC[i].name;
			}
			else
			{
				QOWECQVXCM=MGYJHGHWGC[i].TNFAGGMKXD.name;
			}
			//log(false,"EL KEY ES"+QOWECQVXCM);
			break;
		}
	}
	
	return QOWECQVXCM;
}