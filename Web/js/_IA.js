IA=function(UHTPGPRUJA){
	var NJGFWACAPY=false;
	var BMITYYFCGC;
	var MazoIA=[];
	var MazoIATemp=[];
	var i;
	var u;
	var STLEOJDWSU;
	var LSKPLOTYIB;

	console.log("IAIAOH");
	
	if (  ( (MYQBNBVHKU==true &&  UHHXSNXXJK<JLVDFTPUNI && PXGXKDDNFK<JLVDFTPUNI) ||  (EVAILWGGKX==false && MYQBNBVHKU==true)     ) 
			)
	{
	
		BMITYYFCGC=VDKOVQXHON.length+1;
			
		
		
		log(false,"LUCRWXJMDR "+LUCRWXJMDR);
		
		
		

		MazoIA.splice(0,100);
		//EVHFMHFMJU(DVNRTQIWGL);
		
		if (EGPDVIEJEL==false)
		{
			UHTPGPRUJA=DVNRTQIWGL;
		}
		
		
		log(true,"IA JUGADOR QUE MUEVE "+UHTPGPRUJA);
		STLEOJDWSU=HHOPUSIABJ(UHTPGPRUJA)
		if (STLEOJDWSU=="D")
		{
			MazoIATemp=AGKVNAGGLB;
		}
		if (STLEOJDWSU=="U")
		{
			MazoIATemp=TWJONOKGHC
		}
		if (STLEOJDWSU=="L")
		{
			MazoIATemp=KNVKGHHTYC;
		}
		
		if (STLEOJDWSU=="R")
		{
			MazoIATemp=CBCNHFGWLU;
		}
		log(true,"DEBERIA SACAR CARTA DEL FXGSEGRXKC "+STLEOJDWSU);	
		
		
		
		for(i=0;i<=MazoIATemp.length-1;i++){
				MazoIA.push(new TVYNYTCQYW(MazoIATemp[i].SGCSHJVERI,MazoIATemp[i].UUOPKETETA,MazoIATemp[i].HVCFEWNDRF,null,null,null));
				MazoIA[i].TNFAGGMKXD = MazoIATemp[i].TNFAGGMKXD;
		}

			

			for (i=0;i<=MazoIA.length-1;i++)
			{
				if (XPSRYGDPNI(MazoIA[i],UHTPGPRUJA)==false)
				{
					MazoIA[i].SGCSHJVERI="BORRAR";
				}
			}
			//alert(1);
			
			for (u=0;u<=5;u++)
			{
				bloque:
				for (i=0;i<=MazoIA.length-1;i++)
				{
					if (MazoIA[i].SGCSHJVERI=="BORRAR")
					{
						MazoIA.splice(i,1);					
						break bloque;
					}
				}
			}

		
		//log(false,"ESTOY DE VUELTAS: "+EVAILWGGKX);
		if (MazoIA.length>0)
			{
			
			var BHQBDHNAII=IA_PartidaGanada(MazoIA,UHTPGPRUJA,BMITYYFCGC);
			console.log("TVYNYTCQYW devuelta ganadora: "+BHQBDHNAII);
			if (BHQBDHNAII!=false)
			{
				NJGFWACAPY=BHQBDHNAII;
			}
			else
			{
				if (NFKKYVMBUB()==true)
				{
					NJGFWACAPY=HWPRRTMYEP(MazoIA,UHTPGPRUJA,"Alto",BMITYYFCGC);
				}
				else
				{
					if (EAYMXOKKHT()==true || (EVAILWGGKX==true && BMITYYFCGC==3) )
					{
						NJGFWACAPY=HWPRRTMYEP(MazoIA,UHTPGPRUJA,"Bajo",BMITYYFCGC);
					}		
					else
					{
						NJGFWACAPY=GMUESSHERK(MazoIA,UHTPGPRUJA,BMITYYFCGC);
					}	
				}
			}
			
			for (var h=0;h<=MazoIA.length-1;h++)
			{
				if (MazoIA[h].UUOPKETETA===NJGFWACAPY)
				{
					var pp=MazoIA[h].SGCSHJVERI;
					var qq=MazoIA[h].EHDWIURHHD
					var rr=MazoIA[h].HVCFEWNDRF
				}
			}
			
			console.log("CARTA MOVER "+NJGFWACAPY," "+UHTPGPRUJA+" "+qq+" "+pp+" "+rr);
			
			//08/02/2017 Para por si acaso no existe (cambio de 7 o que se yo)
			LSKPLOTYIB=false;
			for (i=0;i<=MazoIA.length-1;i++)
			{
				if(MazoIA[i].TNFAGGMKXD.name==NJGFWACAPY)
				{
					LSKPLOTYIB=true;
					break;
				}
			}
			if (LSKPLOTYIB==false)
			{
				//alert("BRUTAL");
				console.log("IA DESDE IA");
				TKXPPGUPVV.stop(); //Mucho miedo 29/04/2017
				IA(UHTPGPRUJA);
			}
			
			
			
			
			
			
			if (1==1)
			//console.log("CARTA MOVER "+NJGFWACAPY );	
			//if (NJGFWACAPY!=false)
			{
				
					if ( (EGPDVIEJEL==false  && TFSXFTYVGQ!=UHTPGPRUJA) || (EGPDVIEJEL==true)   )
					{
						if (HQWFFUCQDR(LUCRWXJMDR,UHTPGPRUJA)==true)
						{
							log(true,"IA: ENVIO CARTA AL CENTRO "+NJGFWACAPY+" AUTOMATICAMENTE CON DVNRTQIWGL "+UHTPGPRUJA)
							/*if (UHTPGPRUJA==1 && LUCRWXJMDR==2)
							{
								alert("bien");
							}*/
							if (EGPDVIEJEL==false)
							{
								VPDVSDLPHG(UHTPGPRUJA,NJGFWACAPY,LUCRWXJMDR,Date.now()); 
							}
							
							else
							{			
								log(true,"Envio la carta al centro desde IA para mi")
								
								
								/////////////
							
								var QKVJASWVEO=Date.now();
								var GXNRNMAAKW=function( DFBVDPETGO,TFSXFTYVGQ,AAJNQWXHMY,Turno, TKWCTNGROU, 
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
			 
									
								var OYJAHGADFQ=Math.random()*100000;
								var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,UHTPGPRUJA,NJGFWACAPY,UHTPGPRUJA, LUCRWXJMDR,
									OYJAHGADFQ,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,DFBVDPETGO,'RYUDYPPOXW solo yo');
								NBEJWDVLLV.push(KCPHFPSPLQ);
								QPHHGPRJAI.push(KCPHFPSPLQ);


								socket.emit('RYUDYPPOXW solo yo',QPHHGPRJAI[0],
								 function(XQLEOGMJYG)
								 {			 
									EXBCVLOIYJ(XQLEOGMJYG,'RYUDYPPOXW solo yo');
								 }
								);						
								QPHHGPRJAI.splice(0,1000);	
	  
								
								/////////////	
								
								
								
								
								//socket.emit('RYUDYPPOXW solo yo', DFBVDPETGO,UHTPGPRUJA,NJGFWACAPY,UHTPGPRUJA, LUCRWXJMDR) ; //Simulo el VPDVSDLPHG para que la hora me la de el server
							}
							
							if (EGPDVIEJEL==true)
							{
								log(true,"ENVIO CARTA AL RESTO "+NJGFWACAPY+" AUTOMATICAMENTE CON DVNRTQIWGL "+UHTPGPRUJA)
								
								
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
							var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,UHTPGPRUJA,NJGFWACAPY,UHTPGPRUJA, LUCRWXJMDR, EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),
								XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,
								XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD,
								OYJAHGADFQ,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,DFBVDPETGO,'RYUDYPPOXW');
							NBEJWDVLLV.push(KCPHFPSPLQ);
							QPHHGPRJAI.push(KCPHFPSPLQ);


							socket.emit('RYUDYPPOXW',QPHHGPRJAI[0],
							 function(XQLEOGMJYG)
							 {			 
								EXBCVLOIYJ(XQLEOGMJYG,'RYUDYPPOXW');
							 }
							);						
							QPHHGPRJAI.splice(0,1000);	
  
							
							/////////////									
								
								
								
								
								//socket.emit('RYUDYPPOXW', DFBVDPETGO,UHTPGPRUJA,NJGFWACAPY,UHTPGPRUJA, LUCRWXJMDR,EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD) ;
								if (MazoIA[i].SGCSHJVERI==TGTQPBEQFR)
								{
									if (MazoIA[i].HVCFEWNDRF==1)
									{
										WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,false,false,false,false,true,false);
									}
									if (MazoIA[i].HVCFEWNDRF==3)
									{
										WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,false,false,false,false,false,true);
									}								
								}
							}
						}
					}
					
				
			}
		}
		else
		{
			log(true,"No muevo porque el MazoIA mide 0");
		}
	}
	
}

EAYMXOKKHT=function(){
	var i;
	var devuelve=false;
	var DCBSNHIVQB=0;
	
	for (i=0;i<=VDKOVQXHON.length-1;i++)
	{
		DCBSNHIVQB=DCBSNHIVQB+VDKOVQXHON[i].WQCPJQWFPN;
	}

	if (DCBSNHIVQB>=10)
	{
		devuelve=true;
	}	

	return devuelve;
}


IA_PartidaGanada=function(MazoIA,UHTPGPRUJA,BMITYYFCGC){
	var i;
	var u=0;
	var j=0;
	var lanzala=false;
	var CartaQueMasVale=0;
	var CartaQueMasValeCualquiera=0;
	var DCBSNHIVQB=0;
	
	for (i=0;i<=VDKOVQXHON.length-1;i++)
	{
		DCBSNHIVQB=DCBSNHIVQB+VDKOVQXHON[i].WQCPJQWFPN;
	}
	console.log("PAXBGDCANU mesa: "+DCBSNHIVQB);
	
	
	for (i=0;i<=MazoIA.length-1;i++){
		if(MazoIA[i].SGCSHJVERI==TGTQPBEQFR && MazoIA[i].WQCPJQWFPN>=2)
		{
			if (MazoIA[i].WQCPJQWFPN>CartaQueMasVale)
			{
				CartaQueMasVale=MazoIA[i].WQCPJQWFPN;
				u=i;
			}
		}
	}
	
	
	for (i=0;i<=MazoIA.length-1;i++){

		if (MazoIA[i].WQCPJQWFPN>CartaQueMasValeCualquiera)
		{
			CartaQueMasValeCualquiera=MazoIA[i].WQCPJQWFPN;
			j=i;
		}
		
	}

	//CRITICO
	if (UHHXSNXXJK+CartaQueMasVale+DCBSNHIVQB>=(JLVDFTPUNI))
	{
		if (BMITYYFCGC==4)
		{
			
			
			var Key=UIBEMREGDL(MazoIA,MazoIA[j].SGCSHJVERI,MazoIA[j].VVRCMEUNOJ)
			console.log("Ultimo en tirar: (prov): "+Key);
			if (FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)!=false)
			{
				return Key;
			}
			else
			{
				
				var Key=UIBEMREGDL(MazoIA,MazoIA[u].SGCSHJVERI,MazoIA[u].VVRCMEUNOJ)
				console.log("Ultimo en tirar: (prov2): "+Key);
				if (FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)!=false)
				{
					return Key;
				}
				else
				{
					console.log("Ultimo en tirar: No lo hace");
					return false;
				}
			}
		}
		else
		{

				console.log("RECOMIENDA: "+MazoIA[u].SGCSHJVERI+" "+MazoIA[u].VVRCMEUNOJ);
				var Key=UIBEMREGDL(MazoIA,MazoIA[u].SGCSHJVERI,MazoIA[u].VVRCMEUNOJ);
				console.log("RECOMENDADO KEY: "+Key)
				if (FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)!=false)
				{		
					console.log("RECOMENDADO KEY DEVUELTA: "+Key)
					return Key;
				}
				else
				{
					console.log("ni recomienda ni leches");
					return false;
				}
			
			
		}
	}
	else
	{
		console.log("No merece echar carta");
		return false;
	}
}


FNLYNGWANP=function(MazoIA,UHTPGPRUJA, LaKey)
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
	
	for (i=0;i<=MazoIA.length-1;i++)
	{
		if (MazoIA[i].TNFAGGMKXD.name==LaKey)
		{
			JEOOIEYAWD.push(new UYOMGORTXR(MazoIA[i].SGCSHJVERI,MazoIA[i].VVRCMEUNOJ,UHTPGPRUJA));
			break;
		}		
	}

	
	
	if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true)
	{
		VEFCIYHBGC=true;	
	}

	
	if (VEFCIYHBGC==true)
	{
		QOWECQVXCM=LaKey;
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
	var devuelve=false;
	var DCBSNHIVQB=0;
	
	for (i=0;i<=VDKOVQXHON.length-1;i++)
	{
		DCBSNHIVQB=DCBSNHIVQB+VDKOVQXHON[i].WQCPJQWFPN;
	}

	if (DCBSNHIVQB>=20)
	{
		devuelve=true;
	}	

	return devuelve;
}


GMUESSHERK=function(MazoIA,UHTPGPRUJA,BMITYYFCGC){
	var i;
	var u;
	var VEFCIYHBGC=false;
	
	var LKCQTMENTF=VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA);
	
	LSJCRLDUCH.splice(0,100);
	

	for (i=0;i<=MazoIA.length-1;i++)
	{
		//log(false,"ENTRA "+i)
		XRUDRJJNSI(MazoIA[i].SGCSHJVERI);
	}
	
	RTOSLKFWHC=FSXJJOQKGP(MazoIA,UHTPGPRUJA,BMITYYFCGC);
	
	if (RTOSLKFWHC==false)
	{	
		for (i=0;i<=LSJCRLDUCH.length-1;i++)
		{
			//log(false,"A VER... "+LSJCRLDUCH[i].SGCSHJVERI+" "+LSJCRLDUCH[i].veces)
			if (LSJCRLDUCH[i].veces==1 && LSJCRLDUCH[i].SGCSHJVERI!=TGTQPBEQFR)
			{
				for (u=0;u<=MazoIA.length-1;u++)
				{
					
					var Key=UIBEMREGDL(MazoIA,MazoIA[u].SGCSHJVERI,MazoIA[u].VVRCMEUNOJ)
					if (MazoIA[u].SGCSHJVERI==LSJCRLDUCH[i].SGCSHJVERI && MazoIA[u].WQCPJQWFPN<10 && 
					
						(
						BMITYYFCGC==1 ||
						(FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)==false && BMITYYFCGC==2) ||
						( (BMITYYFCGC==3 ||  BMITYYFCGC==4)  && (LKCQTMENTF==true || FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)==false))
						)

					)
					{
						VEFCIYHBGC=true;
						RTOSLKFWHC=MazoIA[u].TNFAGGMKXD.name;
						//log(false,"LSKPLOTYIB "+MazoIA[u].SGCSHJVERI+" "+MazoIA[u].WQCPJQWFPN);
						break;
					}
				}
			}
		}
	}
	else
	{
		VEFCIYHBGC=true;
	}

	if (VEFCIYHBGC==false)
	{
		RTOSLKFWHC=FYUXQXPFFD(MazoIA,UHTPGPRUJA,BMITYYFCGC);
	}
	
	log(false,"GMUESSHERK "+UHTPGPRUJA +" "+RTOSLKFWHC);
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


FYUXQXPFFD=function(MazoIA,UHTPGPRUJA,BMITYYFCGC)
{
	var THQIYGMEUM=[];
	var i;
	var IYSEFXCNWF=20;
	var VEFCIYHBGC=false;
	var QOWECQVXCM;
	
	var LKCQTMENTF=VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA);
	
	THQIYGMEUM.splice(0,100);
	
	
	for (i=0;i<=MazoIA.length-1;i++){
		THQIYGMEUM.push(new JOGDJUXHDY(MazoIA[i].SGCSHJVERI,MazoIA[i].VVRCMEUNOJ,MazoIA[i].TNFAGGMKXD.name, MazoIA[i].WQCPJQWFPN ));
	}
	
	for (i=0;i<=IYSEFXCNWF;i++)
	{
		//Intento quitarme cartas que no san TGTQPBEQFR, pero que no valgan más de 10 OMDVKATFLQ
		Phaser.ArrayUtils.shuffle(THQIYGMEUM);
		if (THQIYGMEUM[0].SGCSHJVERI!=TGTQPBEQFR && THQIYGMEUM[0].WQCPJQWFPN<10)
		{
			var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[0].SGCSHJVERI,THQIYGMEUM[0].VVRCMEUNOJ)
			if (
				BMITYYFCGC==1 ||
				(FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)==false && BMITYYFCGC==2) ||
				( (BMITYYFCGC==3 ||  BMITYYFCGC==4)  && (LKCQTMENTF==true || FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)==false))

			)
			
			{
				VEFCIYHBGC=true;
				QOWECQVXCM=THQIYGMEUM[0].name
				break;
			}
			else
			{
				//log(false,"Ganaría con "+THQIYGMEUM[0].SGCSHJVERI+" "+THQIYGMEUM[0].VVRCMEUNOJ);
			}			
		}
	}
	
	//Aunque mate
	if (VEFCIYHBGC==false)
	{
		for (i=0;i<=IYSEFXCNWF;i++)
		{
			//Intento quitarme cartas que no san TGTQPBEQFR, pero que no valgan más de 10 OMDVKATFLQ
			Phaser.ArrayUtils.shuffle(THQIYGMEUM);
			
			if (THQIYGMEUM[0].SGCSHJVERI!=TGTQPBEQFR && THQIYGMEUM[0].WQCPJQWFPN<10)
			{
				
					VEFCIYHBGC=true;
					QOWECQVXCM=THQIYGMEUM[0].name
					break;			
			}
		}	
	}
	
	
	
	//Con OMDVKATFLQ, que mate	
	if (VEFCIYHBGC==false)
	{
		for (i=0;i<=IYSEFXCNWF;i++)
		{
			//Intento quitarme cartas que no san TGTQPBEQFR, pero que no valgan más de 10 OMDVKATFLQ
			Phaser.ArrayUtils.shuffle(THQIYGMEUM);
			if (THQIYGMEUM[0].SGCSHJVERI!=TGTQPBEQFR)
			{
				var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[0].SGCSHJVERI,THQIYGMEUM[0].VVRCMEUNOJ)
				if (
					
					BMITYYFCGC==1 ||
					(FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)!=false && BMITYYFCGC==2) ||
					((BMITYYFCGC==3 ||  BMITYYFCGC==4) && (FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)!=false))

				)
				
				{
					VEFCIYHBGC=true;
					QOWECQVXCM=THQIYGMEUM[0].name
					break;
				}
				else
				{
					//log(false,"Ganaría con "+THQIYGMEUM[0].SGCSHJVERI+" "+THQIYGMEUM[0].VVRCMEUNOJ);
				}			
			}
		}
	}
	
	
	//Si no encuentra, me quito carta con OMDVKATFLQ
	if (VEFCIYHBGC==false)
	{
		for (i=0;i<=IYSEFXCNWF;i++)
		{
			Phaser.ArrayUtils.shuffle(THQIYGMEUM);
			if (THQIYGMEUM[0]!=TGTQPBEQFR)
			{
				var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[0].SGCSHJVERI,THQIYGMEUM[0].VVRCMEUNOJ)
				//if (FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)==false || BMITYYFCGC==3 || BMITYYFCGC==4)
				//{
					VEFCIYHBGC=true;
					QOWECQVXCM=THQIYGMEUM[0].name
					break;
				//}
			}
		}

	}
	
	//Si no encuentra, me quito cualquiera
	if (VEFCIYHBGC==false)
	{
		Phaser.ArrayUtils.shuffle(THQIYGMEUM);
		QOWECQVXCM=THQIYGMEUM[0].name
	}
	
	log(false,"IA_ALEATORIONOTriunfo "+UHTPGPRUJA +" "+QOWECQVXCM);
	return QOWECQVXCM;
	
}


DSAYFEABOB=function(MazoIA,UHTPGPRUJA)
{
	var THQIYGMEUM=[];
	var i;
	var IYSEFXCNWF=20;
	var VEFCIYHBGC=false;
	var QOWECQVXCM;
	
	THQIYGMEUM.splice(0,100);
	
	
	for (i=0;i<=MazoIA.length-1;i++){
		THQIYGMEUM.push(new JOGDJUXHDY(MazoIA[i].SGCSHJVERI,MazoIA[i].VVRCMEUNOJ,MazoIA[i].TNFAGGMKXD.name, MazoIA[i].WQCPJQWFPN ));
	}
	
	for (i=0;i<=IYSEFXCNWF;i++)
	{
		//Intento quitarme cartas que no san TGTQPBEQFR, pero que no valgan más de 10 OMDVKATFLQ
		Phaser.ArrayUtils.shuffle(THQIYGMEUM);
		if (THQIYGMEUM[0].SGCSHJVERI==TGTQPBEQFR)
		{
			var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[0].SGCSHJVERI,THQIYGMEUM[0].VVRCMEUNOJ)
			if (FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)!=false)
			{
				VEFCIYHBGC=true;
				QOWECQVXCM=THQIYGMEUM[0].name
				break;
			}
		}
	}
	
	
	if (VEFCIYHBGC==false)
	{
		for (i=0;i<=IYSEFXCNWF;i++)
		{
			//Intento quitarme cartas que no san TGTQPBEQFR, pero que maten
			Phaser.ArrayUtils.shuffle(THQIYGMEUM);
			if (THQIYGMEUM[0].SGCSHJVERI!=TGTQPBEQFR)
			{
				var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[0].SGCSHJVERI,THQIYGMEUM[0].VVRCMEUNOJ)
				if (FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)!=false)
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
		Phaser.ArrayUtils.shuffle(THQIYGMEUM);
		QOWECQVXCM=THQIYGMEUM[0].name
	}
	
	log(false,"IA_ALEATORIOSITriunfo "+UHTPGPRUJA +" "+QOWECQVXCM);
	return QOWECQVXCM;
}

MiCompiHaTiradoTriunfo=function(VDKOVQXHON,BMITYYFCGC)
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

HWPRRTMYEP=function(MazoIA,UHTPGPRUJA,Criterio,BMITYYFCGC){
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
	
	
	QOWECQVXCM=FSXJJOQKGP(MazoIA,UHTPGPRUJA,BMITYYFCGC);
	if (QOWECQVXCM==false)
	{
		
		if (  (EVAILWGGKX==false && VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true) 
			|| (EVAILWGGKX==true && VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true && MiCompiHaTiradoTriunfo(VDKOVQXHON,BMITYYFCGC)==true    )		)
		{
			QOWECQVXCM=GMUESSHERK(MazoIA,UHTPGPRUJA);
			//log(false,"LA SRCGCMADME ES NUESTRA JUGADOR: "+UHTPGPRUJA);
		}
		else
		{		
			
			if (BMITYYFCGC==4)
			{
			
				THQIYGMEUM.splice(0,100);	
	
				for (i=0;i<=MazoIA.length-1;i++){
					THQIYGMEUM.push(new JOGDJUXHDY(MazoIA[i].SGCSHJVERI,MazoIA[i].VVRCMEUNOJ,MazoIA[i].TNFAGGMKXD.name, MazoIA[i].WQCPJQWFPN ));
				}
	
				Phaser.ArrayUtils.shuffle(THQIYGMEUM);
				
				for (i=0;i<=THQIYGMEUM.length-1;i++)
				{
					if (THQIYGMEUM[i].SGCSHJVERI!=TGTQPBEQFR)
					{
						var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)
						if ( FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)!=false)						
						{
							VEFCIYHBGC=true;
							QOWECQVXCM=THQIYGMEUM[i].name
							break;
						}
					}
				}
			}
			
			
			if (QOWECQVXCM==false)
			{
				
				//log(false,"LA SRCGCMADME NO ES NUESTRA JUGADOR  "+UHTPGPRUJA);
				//Investigo mi TGTQPBEQFR más bajo
				for (i=0;i<=MazoIA.length-1;i++)
				{
					if (MazoIA[i].SGCSHJVERI==TGTQPBEQFR && MazoIA[i].VVRCMEUNOJ<PUWBYVGIMA)
					{
						PUWBYVGIMA=MazoIA[i].VVRCMEUNOJ
					}
				}
				//y el más alto
				for (i=0;i<=MazoIA.length-1;i++)
				{
					if (MazoIA[i].SGCSHJVERI==TGTQPBEQFR && MazoIA[i].VVRCMEUNOJ>INIDNQUMXV)
					{
						INIDNQUMXV=MazoIA[i].VVRCMEUNOJ
					}
				}	

				
				
				if (Criterio=="Bajo")
				{
					if (PUWBYVGIMA!=100)
					{
						GCDJJRCJTC=true;
						valorAnalizar=PUWBYVGIMA;
					}
					else
					{
						GCDJJRCJTC=false;
					}
				}
				else
				{
					if (INIDNQUMXV!=0)
					{
						GCDJJRCJTC=true;
						valorAnalizar=INIDNQUMXV;
					}
					else
					{
						GCDJJRCJTC=false;
					}
				}
				
				if (GCDJJRCJTC==true)
				{
					var Key=UIBEMREGDL(MazoIA,TGTQPBEQFR,valorAnalizar);
					var QOWECQVXCM=FNLYNGWANP(MazoIA,UHTPGPRUJA,Key);
					//log(false,"lo flipo "+QOWECQVXCM);
					if (QOWECQVXCM!=false)
					{
					
						//log(false,"La SRCGCMADME sí sería nuestra con "+QOWECQVXCM)
					
					}
					else{
						//log(false,"Cualquier carta pero TGTQPBEQFR")
						QOWECQVXCM=DSAYFEABOB(MazoIA,UHTPGPRUJA);
						QOWECQVXCM=FNLYNGWANP(MazoIA,UHTPGPRUJA,QOWECQVXCM);
						if (QOWECQVXCM==false){
							QOWECQVXCM=GMUESSHERK(MazoIA,UHTPGPRUJA);
						}
					}
				}
				else
				{
					QOWECQVXCM=DSAYFEABOB(MazoIA,UHTPGPRUJA);
					QOWECQVXCM=FNLYNGWANP(MazoIA,UHTPGPRUJA,QOWECQVXCM);
					if (QOWECQVXCM==false){
						QOWECQVXCM=GMUESSHERK(MazoIA,UHTPGPRUJA);
					}
				}		
			}			
		}
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

FSXJJOQKGP=function(MazoIA,UHTPGPRUJA,BMITYYFCGC)
{
	var i;
	var THQIYGMEUM=[];
	var LKCQTMENTF=VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA);
	var QOWECQVXCM=false;
	THQIYGMEUM.splice(0,100);
	
	
	for (i=0;i<=MazoIA.length-1;i++){
		THQIYGMEUM.push(new JOGDJUXHDY(MazoIA[i].SGCSHJVERI,MazoIA[i].VVRCMEUNOJ,MazoIA[i].TNFAGGMKXD.name, MazoIA[i].WQCPJQWFPN ));
	}
	
	Phaser.ArrayUtils.shuffle(THQIYGMEUM);
	
	if (BMITYYFCGC==4)
	{
	
		for (i=0;i<=THQIYGMEUM.length-1;i++)
		{
			var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)
			if (  (LKCQTMENTF==true || FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)!=false) && THQIYGMEUM[i].SGCSHJVERI!=TGTQPBEQFR && THQIYGMEUM[i].WQCPJQWFPN>=10  )
			{
				VEFCIYHBGC=true;
				QOWECQVXCM=THQIYGMEUM[i].name
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
				if (VDKOVQXHON[i].SGCSHJVERI==TGTQPBEQFR && VDKOVQXHON[i].VVRCMEUNOJ>=10)
				{
					VEFCIYHBGC=true;
					break;
				}
			}
			
			if (VEFCIYHBGC==true)
			{
				//log(false,"ES DE MI COMPAÑERO "+UHTPGPRUJA);
				for (i=0;i<=THQIYGMEUM.length-1;i++)
				{
					var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)
					if (  (LKCQTMENTF==true || FNLYNGWANP(MazoIA,UHTPGPRUJA,Key)!=false) && THQIYGMEUM[i].SGCSHJVERI!=TGTQPBEQFR && THQIYGMEUM[i].WQCPJQWFPN>=10  )
					{
						VEFCIYHBGC=true;
						QOWECQVXCM=THQIYGMEUM[i].name
						//log(false,"ESTA DEVUELVE "+UHTPGPRUJA+ " "+THQIYGMEUM[i].VVRCMEUNOJ+" de " + THQIYGMEUM[i].SGCSHJVERI);
						break;
					}
				}
			}
			else
			{
				//log(false,"NO ES DE MI COMPAÑERO "+UHTPGPRUJA);
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



	




UIBEMREGDL=function(MazoIA,SGCSHJVERI,VVRCMEUNOJ){
	var i;
	var QOWECQVXCM=false;
	
	for (i=0;i<=MazoIA.length-1;i++)
	{
		if (MazoIA[i].VVRCMEUNOJ==VVRCMEUNOJ && MazoIA[i].SGCSHJVERI==SGCSHJVERI)
		{
			if (MazoIA[i].name!=undefined)
			{
				QOWECQVXCM=MazoIA[i].name;
			}
			else
			{
				QOWECQVXCM=MazoIA[i].TNFAGGMKXD.name;
			}
			//log(false,"EL KEY ES"+QOWECQVXCM);
			break;
		}
	}
	
	return QOWECQVXCM;
}