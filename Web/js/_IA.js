IA=function(UHTPGPRUJA){
	var NJGFWACAPY=false;
	var BMITYYFCGC;
	var MGYJHGHWGC=[];
	var BMWUIUWIIO=[];
	var i;
	var u;
	var STLEOJDWSU;
	var LSKPLOTYIB;

	//console.log("IAIAOH");
	
	if (  ( (MYQBNBVHKU==true &&  UHHXSNXXJK<JLVDFTPUNI && PXGXKDDNFK<JLVDFTPUNI) ||  (EVAILWGGKX==false && MYQBNBVHKU==true)     ) 
		&& OTGNMRHTVK()==false	)
	{
	
		BMITYYFCGC=VDKOVQXHON.length+1;
			
		
		
		log(false,"LUCRWXJMDR "+LUCRWXJMDR);
		
		
		

		MGYJHGHWGC.splice(0,100);
		//EVHFMHFMJU(DVNRTQIWGL);
		
		/*1.0.9 if (EGPDVIEJEL==false)
		{
			UHTPGPRUJA=DVNRTQIWGL;
		}*/
		UHTPGPRUJA=DVNRTQIWGL; //1.0.9
		
		
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
		if (MGYJHGHWGC.length>0)
			{
			
			var BHQBDHNAII=BJGHJEGJWQ(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC);
			//console.log("TVYNYTCQYW devuelta ganadora: "+BHQBDHNAII);
			if (BHQBDHNAII!=false)
			{
				NJGFWACAPY=BHQBDHNAII;
			}
			else
			{
				if (NFKKYVMBUB()==true)
				{
					NJGFWACAPY=HWPRRTMYEP(MGYJHGHWGC,UHTPGPRUJA,"Alto",BMITYYFCGC);
				}
				else
				{
					if (EAYMXOKKHT()==true  || (EVAILWGGKX==true && BMITYYFCGC==3) )
					{
						
						if (EVAILWGGKX==false && LUCRWXJMDR==4)
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
						NJGFWACAPY=GMUESSHERK(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC);
					}	
				}
			}
			
			for (var h=0;h<=MGYJHGHWGC.length-1;h++)
			{
				if (MGYJHGHWGC[h].UUOPKETETA===NJGFWACAPY)
				{
					var pp=MGYJHGHWGC[h].SGCSHJVERI;
					var qq=MGYJHGHWGC[h].EHDWIURHHD
					var rr=MGYJHGHWGC[h].HVCFEWNDRF
				}
			}
			
			//console.log("CARTA MOVER "+NJGFWACAPY," "+UHTPGPRUJA+" "+qq+" "+pp+" "+rr);
			
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
				//console.log("IA DESDE IA");
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
							
								/*var QKVJASWVEO=Date.now();
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
								*/
								
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
						}
					}
					
				
			}
		}
		else
		{
			log(true,"No muevo porque el MGYJHGHWGC mide 0");
		}
	}
	
}

EAYMXOKKHT=function(){
	var i;
	var NMBAYQIQHE=false;
	var DCBSNHIVQB=0;
	
	for (i=0;i<=VDKOVQXHON.length-1;i++)
	{
		DCBSNHIVQB=DCBSNHIVQB+VDKOVQXHON[i].WQCPJQWFPN;
	}

	if (DCBSNHIVQB>=10)
	{
		NMBAYQIQHE=true;
	}	

	return NMBAYQIQHE;
}


BJGHJEGJWQ=function(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC){
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
	//console.log("PAXBGDCANU mesa: "+DCBSNHIVQB);
	
	
	for (i=0;i<=MGYJHGHWGC.length-1;i++){
		if(MGYJHGHWGC[i].SGCSHJVERI==TGTQPBEQFR && MGYJHGHWGC[i].WQCPJQWFPN>=2)
		{
			if (MGYJHGHWGC[i].WQCPJQWFPN>CartaQueMasVale)
			{
				CartaQueMasVale=MGYJHGHWGC[i].WQCPJQWFPN;
				u=i;
			}
		}
	}
	
	
	for (i=0;i<=MGYJHGHWGC.length-1;i++){

		if (MGYJHGHWGC[i].WQCPJQWFPN>CartaQueMasValeCualquiera)
		{
			CartaQueMasValeCualquiera=MGYJHGHWGC[i].WQCPJQWFPN;
			j=i;
		}
		
	}

	//CRITICO
	if (UHHXSNXXJK+CartaQueMasVale+DCBSNHIVQB>=(JLVDFTPUNI))
	{
		if (BMITYYFCGC==4)
		{
			
			
			var Key=UIBEMREGDL(MGYJHGHWGC,MGYJHGHWGC[j].SGCSHJVERI,MGYJHGHWGC[j].VVRCMEUNOJ)
			//console.log("Ultimo en tirar: (prov): "+Key);
			if (FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false)
			{
				return Key;
			}
			else
			{
				
				var Key=UIBEMREGDL(MGYJHGHWGC,MGYJHGHWGC[u].SGCSHJVERI,MGYJHGHWGC[u].VVRCMEUNOJ)
				//console.log("Ultimo en tirar: (prov2): "+Key);
				if (FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false)
				{
					return Key;
				}
				else
				{
					//console.log("Ultimo en tirar: No lo hace");
					return false;
				}
			}
		}
		else
		{

				//console.log("RECOMIENDA: "+MGYJHGHWGC[u].SGCSHJVERI+" "+MGYJHGHWGC[u].VVRCMEUNOJ);
				var Key=UIBEMREGDL(MGYJHGHWGC,MGYJHGHWGC[u].SGCSHJVERI,MGYJHGHWGC[u].VVRCMEUNOJ);
				//console.log("RECOMENDADO KEY: "+Key)
				if (FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false)
				{		
					//console.log("RECOMENDADO KEY DEVUELTA: "+Key)
					return Key;
				}
				else
				{
					//console.log("ni recomienda ni leches");
					return false;
				}
			
			
		}
	}
	else
	{
		//console.log("No merece echar carta");
		return false;
	}
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


GMUESSHERK=function(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC){
	var i;
	var u;
	var VEFCIYHBGC=false;
	
	var LKCQTMENTF=VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA);
	
	LSJCRLDUCH.splice(0,100);
	

	for (i=0;i<=MGYJHGHWGC.length-1;i++)
	{
		//log(false,"ENTRA "+i)
		XRUDRJJNSI(MGYJHGHWGC[i].SGCSHJVERI);
	}
	
	RTOSLKFWHC=FSXJJOQKGP(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC);
	
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
					if (MGYJHGHWGC[u].SGCSHJVERI==LSJCRLDUCH[i].SGCSHJVERI && MGYJHGHWGC[u].WQCPJQWFPN<10 && 
					
						(
						BMITYYFCGC==1 ||
						(FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)==false && BMITYYFCGC==2) ||
						( (BMITYYFCGC==3 ||  BMITYYFCGC==4)  && (LKCQTMENTF==true || FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)==false))
						)

					)
					{
						VEFCIYHBGC=true;
						RTOSLKFWHC=MGYJHGHWGC[u].TNFAGGMKXD.name;
						//log(false,"LSKPLOTYIB "+MGYJHGHWGC[u].SGCSHJVERI+" "+MGYJHGHWGC[u].WQCPJQWFPN);
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
		RTOSLKFWHC=FYUXQXPFFD(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC);
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


FYUXQXPFFD=function(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
{
	var THQIYGMEUM=[];
	var i;
	var IYSEFXCNWF=20;
	var VEFCIYHBGC=false;
	var QOWECQVXCM;
	
	var LKCQTMENTF=VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA);
	
	THQIYGMEUM.splice(0,100);
	
	
	for (i=0;i<=MGYJHGHWGC.length-1;i++){
		THQIYGMEUM.push(new JOGDJUXHDY(MGYJHGHWGC[i].SGCSHJVERI,MGYJHGHWGC[i].VVRCMEUNOJ,MGYJHGHWGC[i].TNFAGGMKXD.name, MGYJHGHWGC[i].WQCPJQWFPN ));
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
				(FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)==false && BMITYYFCGC==2) ||
				( (BMITYYFCGC==3 ||  BMITYYFCGC==4)  && (LKCQTMENTF==true || FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)==false))

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
					(FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false && BMITYYFCGC==2) ||
					((BMITYYFCGC==3 ||  BMITYYFCGC==4) && (FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false))

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
				//if (FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)==false || BMITYYFCGC==3 || BMITYYFCGC==4)
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


DSAYFEABOB=function(MGYJHGHWGC,UHTPGPRUJA)
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
	
	for (i=0;i<=IYSEFXCNWF;i++)
	{
		//Intento quitarme cartas que no san TGTQPBEQFR, pero que no valgan más de 10 OMDVKATFLQ
		Phaser.ArrayUtils.shuffle(THQIYGMEUM);
		if (THQIYGMEUM[0].SGCSHJVERI==TGTQPBEQFR)
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
	
	
	if (VEFCIYHBGC==false)
	{
		for (i=0;i<=IYSEFXCNWF;i++)
		{
			//Intento quitarme cartas que no san TGTQPBEQFR, pero que maten
			Phaser.ArrayUtils.shuffle(THQIYGMEUM);
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
	
	QOWECQVXCM=FSXJJOQKGP(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC);
	if (QOWECQVXCM==false)
	{
		
		
		
		
		if (  (EVAILWGGKX==false && VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true) 
			|| (EVAILWGGKX==true && VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true && MiCompiHaTiradoTriunfo(VDKOVQXHON,BMITYYFCGC)==true    )		)
		{
			QOWECQVXCM=GMUESSHERK(MGYJHGHWGC,UHTPGPRUJA);
			//log(false,"LA SRCGCMADME ES NUESTRA JUGADOR: "+UHTPGPRUJA);
		}
		else
		{		
			
			if (BMITYYFCGC==4)
			{
			
				THQIYGMEUM.splice(0,100);	
	
				for (i=0;i<=MGYJHGHWGC.length-1;i++){
					THQIYGMEUM.push(new JOGDJUXHDY(MGYJHGHWGC[i].SGCSHJVERI,MGYJHGHWGC[i].VVRCMEUNOJ,MGYJHGHWGC[i].TNFAGGMKXD.name, MGYJHGHWGC[i].WQCPJQWFPN ));
				}
	
				Phaser.ArrayUtils.shuffle(THQIYGMEUM);
				
				for (i=0;i<=THQIYGMEUM.length-1;i++)
				{
					if (THQIYGMEUM[i].SGCSHJVERI!=TGTQPBEQFR)
					{
						var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)
						if ( FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false)						
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
				for (i=0;i<=MGYJHGHWGC.length-1;i++)
				{
					if (MGYJHGHWGC[i].SGCSHJVERI==TGTQPBEQFR && MGYJHGHWGC[i].VVRCMEUNOJ<PUWBYVGIMA)
					{
						PUWBYVGIMA=MGYJHGHWGC[i].VVRCMEUNOJ
					}
				}
				//y el más alto
				for (i=0;i<=MGYJHGHWGC.length-1;i++)
				{
					if (MGYJHGHWGC[i].SGCSHJVERI==TGTQPBEQFR && MGYJHGHWGC[i].VVRCMEUNOJ>INIDNQUMXV)
					{
						INIDNQUMXV=MGYJHGHWGC[i].VVRCMEUNOJ
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
					var Key=UIBEMREGDL(MGYJHGHWGC,TGTQPBEQFR,valorAnalizar);
					var QOWECQVXCM=FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key);
					//log(false,"lo flipo "+QOWECQVXCM);
					if (QOWECQVXCM!=false)
					{
					
						//log(false,"La SRCGCMADME sí sería nuestra con "+QOWECQVXCM)
					
					}
					else{
						//log(false,"Cualquier carta pero TGTQPBEQFR")
						QOWECQVXCM=DSAYFEABOB(MGYJHGHWGC,UHTPGPRUJA);
						QOWECQVXCM=FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,QOWECQVXCM);
						if (QOWECQVXCM==false){
							QOWECQVXCM=GMUESSHERK(MGYJHGHWGC,UHTPGPRUJA);
						}
					}
				}
				else
				{
					QOWECQVXCM=DSAYFEABOB(MGYJHGHWGC,UHTPGPRUJA);
					QOWECQVXCM=FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,QOWECQVXCM);
					if (QOWECQVXCM==false){
						QOWECQVXCM=GMUESSHERK(MGYJHGHWGC,UHTPGPRUJA);
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

FSXJJOQKGP=function(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
{
	var i;
	var THQIYGMEUM=[];
	var LKCQTMENTF=VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA);
	var QOWECQVXCM=false;
	THQIYGMEUM.splice(0,100);
	
	
	for (i=0;i<=MGYJHGHWGC.length-1;i++){
		THQIYGMEUM.push(new JOGDJUXHDY(MGYJHGHWGC[i].SGCSHJVERI,MGYJHGHWGC[i].VVRCMEUNOJ,MGYJHGHWGC[i].TNFAGGMKXD.name, MGYJHGHWGC[i].WQCPJQWFPN ));
	}
	
	Phaser.ArrayUtils.shuffle(THQIYGMEUM);
	
	if (BMITYYFCGC==4)
	{
	
		for (i=0;i<=THQIYGMEUM.length-1;i++)
		{
			var Key=UIBEMREGDL(THQIYGMEUM,THQIYGMEUM[i].SGCSHJVERI,THQIYGMEUM[i].VVRCMEUNOJ)
			if (  (LKCQTMENTF==true || FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false) && THQIYGMEUM[i].SGCSHJVERI!=TGTQPBEQFR && THQIYGMEUM[i].WQCPJQWFPN>=10  )
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
					if (  (LKCQTMENTF==true || FNLYNGWANP(MGYJHGHWGC,UHTPGPRUJA,Key)!=false) && THQIYGMEUM[i].SGCSHJVERI!=TGTQPBEQFR && THQIYGMEUM[i].WQCPJQWFPN>=10  )
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