'use strict';
function UEWYIUWIVW(Quien)
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

function IA(UHTPGPRUJA,RondaQueMueve, PartidaRecibida)
{
	var NJGFWACAPY=false;
	var BMITYYFCGC;
	var MGYJHGHWGC=[];
	var BMWUIUWIIO=[];
	var i;
	var u;
	var STLEOJDWSU;
	var LSKPLOTYIB;
	//var CambioEstado=false;
	
	/*if (NMBWIPWLGU==false)
	{
		CambioEstado=true;
		NMBWIPWLGU=true;
	}*/
	
	//var UHTPGPRUJA;

	//////console.log("Llega a IA");
	//alert("s");
	TKXPPGUPVV.stop(); //1.0.9
	TKXPPGUPVV.remove();
	HUUCUYFBLW.stop(); //raka
	HUUCUYFBLW.remove();
	
	//////console.log("Turno "+DVNRTQIWGL+" Control: "+ESKTEXAVHU+" Soy: "+TFSXFTYVGQ+" Mandatory: "+Mandatory+" to fixed "+HUUCUYFBLW.duration.toFixed(0));
	if (  ( (HGMNXSIAPV==true && MYQBNBVHKU==true &&  UHHXSNXXJK<JLVDFTPUNI && PXGXKDDNFK<JLVDFTPUNI) ||  (HGMNXSIAPV==true && EVAILWGGKX==false && MYQBNBVHKU==true)     ) 
		&& OTGNMRHTVK()==false	
		&& ( (UHTPGPRUJA!=TFSXFTYVGQ && PermisoParaTomarControl(UHTPGPRUJA)   ) || 
					(UHTPGPRUJA==TFSXFTYVGQ && HUUCUYFBLW.duration.toFixed(0)<=0 && EGPDVIEJEL==true)||
					EGPDVIEJEL==false
			)
		&& MNAGVJHWOW()==false
		&& ( (EGPDVIEJEL==false) || (EGPDVIEJEL==true && SNJCSVWFCC()==true) )
		&& TurnoYaPasado(RondaQueMueve,UHTPGPRUJA, PartidaRecibida)==false //importante por la rapidez que a veces se lanzan 2 ias
	) 
	//TFSXFTYVGQ==ESKTEXAVHU && EGPDVIEJEL==true && UEWYIUWIVW(UHTPGPRUJA)==false cabezon
		
	{
		HUUCUYFBLW.stop();
		HUUCUYFBLW.remove();
		TKXPPGUPVV.stop();
		TKXPPGUPVV.remove();
		
		//////console.log("IA Venga vamos");
		BMITYYFCGC=VDKOVQXHON.length+1;
			
		
		
		log(false,"LUCRWXJMDR "+LUCRWXJMDR);
		
		
		

		MGYJHGHWGC.splice(0,100);

		
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
		//console.log("Debería sacar letra "+STLEOJDWSU);
		
		
		
		for(i=0;i<=BMWUIUWIIO.length-1;i++)
		{
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

		MGYJHGHWGC=Phaser.ArrayUtils.shuffle(MGYJHGHWGC);

		if (MGYJHGHWGC.length>0)
		{

			var SGEGEGEGEW=XXZXVSDVSD(MGYJHGHWGC,UHTPGPRUJA,BMITYYFCGC)
			//XRUDRJJNSI();

			//COMIENZO
			if (EVAILWGGKX==false)
			{
				NJGFWACAPY=IA_Idas(RondaQueMueve,SGEGEGEGEW,BMITYYFCGC,UHTPGPRUJA, MGYJHGHWGC)

			}
			else
			{
				//LAS VUELTAS
				//console.log("FIRME "+EstaFirme(UHTPGPRUJA,MGYJHGHWGC[0].SGCSHJVERI, MGYJHGHWGC[0].VVRCMEUNOJ, MGYJHGHWGC) )
				//console.log("FIRMES "+CuentaFirmes(UHTPGPRUJA, MGYJHGHWGC, TGTQPBEQFR))
				NJGFWACAPY=BHQBDHNAII(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
				if (NJGFWACAPY!=false)
				{
					console.log(TraducePorID(NJGFWACAPY)+ " v 1")		
				}
				
				if (NJGFWACAPY==false)
				{
					if (BMITYYFCGC==1 || BMITYYFCGC==2)
					{
						var CartaTemporal=false;
						CartaTemporal=DevuelveTriunfoFirme(UHTPGPRUJA, MGYJHGHWGC)
						if  (CartaTemporal!=false)
						{
							if (PuntuacionPorID(CartaTemporal)+SGEGEGEGEW.MarcadorRevisarNuestro+SGEGEGEGEW.DCBSNHIVQB+BAVVCAHQCC(MGYJHGHWGC)+10>=JLVDFTPUNI)
							{
								NJGFWACAPY=CartaTemporal;
								console.log(TraducePorID(NJGFWACAPY)+ " v 8.1")		
							}
						}
					}
				}
				
				if (NJGFWACAPY==false)
				{
					if (BMITYYFCGC==1)
					{
						if (MiCompiTieneElAs(UHTPGPRUJA))
						{
							if (  (TengoUnX(MGYJHGHWGC, 11, true) && SGEGEGEGEW.MarcadorRevisarNuestro+BAVVCAHQCC(MGYJHGHWGC)>=80)
								   || (TengoUnX(MGYJHGHWGC, 12, true) && SGEGEGEGEW.MarcadorRevisarNuestro+BAVVCAHQCC(MGYJHGHWGC)>=79)
							   )
							   {
								  NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
								  if (NJGFWACAPY==true)
								  {
									  console.log(TraducePorID(NJGFWACAPY)+ " v 15.1")
								  }
								  else
								  {
										NJGFWACAPY=MatarMejorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,8,true,false, SGEGEGEGEW)	  
										 if (NJGFWACAPY==true)
										 {
											  console.log(TraducePorID(NJGFWACAPY)+ " v 15.1 bis")
										 }
								  }
							   }
						}
					}
				}
				
				if (NJGFWACAPY==false)
				{
					if (TengoEstaCarta(MGYJHGHWGC, 12, TGTQPBEQFR) && SGEGEGEGEW.MarcadorRevisarNuestro>=78 &&  SGEGEGEGEW.VVSFGSGGSW<=95
						&& (BMITYYFCGC!=4  || (BMITYYFCGC==4 && !EsMiIzquierda(UHTPGPRUJA, DeQuienVa())  )  )
					)
					{
						//if (BMITYYFCGC==2)
						//{
							NJGFWACAPY=MarcarFigura(MGYJHGHWGC)
							if (NJGFWACAPY!=false)
							{
								console.log(TraducePorID(NJGFWACAPY)+ " v 4.1.1")
							}
							else
							{
								/*if (SGEGEGEGEW.VVSFGSGGSW<=60)
								{
									NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " v 4.1.2")
									}
								}*/
							}						
						//}
					}
				}	

				if (NJGFWACAPY==false)
				{
					if (TengoEstaCarta(MGYJHGHWGC, 12, TGTQPBEQFR) && SGEGEGEGEW.MarcadorRevisarNuestro>=80 && (BMITYYFCGC==1 || BMITYYFCGC==2))
					{
						if (GuinotesVivosOtrasManos()>=4 || SGEGEGEGEW.MarcadorRevisarNuestro>=86)
						{
							NJGFWACAPY=UIBEMREGDL(TGTQPBEQFR,12)
							console.log(TraducePorID(NJGFWACAPY)+ " v 5.1.1  5.1.2")
						}
					}					
				}
				
				if (NJGFWACAPY==false)
				{
					if (TengoEstaCarta(MGYJHGHWGC, 11, TGTQPBEQFR) && EstaFirme(UHTPGPRUJA, TGTQPBEQFR, 11, MGYJHGHWGC)   && SGEGEGEGEW.MarcadorRevisarNuestro>=80  
						&& (BMITYYFCGC==1 || BMITYYFCGC==2))
					{
						if (AsesVivosOtrasManos()>=2)
						{
							NJGFWACAPY=UIBEMREGDL(TGTQPBEQFR,11)	
							console.log(TraducePorID(NJGFWACAPY)+ " v 6.1.1")
						}
						
						if (NJGFWACAPY==false)
						{
							if (GuinotesVivosOtrasManos()>=4 && SGEGEGEGEW.MarcadorRevisarNuestro>=81)
							{
								NJGFWACAPY=UIBEMREGDL(TGTQPBEQFR,11)	
								console.log(TraducePorID(NJGFWACAPY)+ " v 6.1.2")
							}
						}
						
						if (NJGFWACAPY==false)
						{
							if (SGEGEGEGEW.MarcadorRevisarNuestro>=87)
							{
								NJGFWACAPY=UIBEMREGDL(TGTQPBEQFR,11)	
								console.log(TraducePorID(NJGFWACAPY)+ " v 6.1.3")
							}
						}						
						
					}
				}
				
				if (NJGFWACAPY==false)
				{
					
					if ( 
						(
						(TengoEstaCarta(MGYJHGHWGC,10,TGTQPBEQFR) && SGEGEGEGEW.MarcadorRevisarNuestro>=87) ||
						(TengoEstaCarta(MGYJHGHWGC,9,TGTQPBEQFR) && SGEGEGEGEW.MarcadorRevisarNuestro>=88) ||
						(TengoEstaCarta(MGYJHGHWGC,8,TGTQPBEQFR) && SGEGEGEGEW.MarcadorRevisarNuestro>=89) ||
						(TengoEstaCarta(MGYJHGHWGC,7,TGTQPBEQFR) && SGEGEGEGEW.MarcadorRevisarNuestro>=91 && (FBSDMRLVEL[0].VVRCMEUNOJ>=11 || RondaQueMueve>=5)  ) ||
						(TengoEstaCarta(MGYJHGHWGC,6,TGTQPBEQFR) && SGEGEGEGEW.MarcadorRevisarNuestro>=91) ||
						(TengoEstaCarta(MGYJHGHWGC,5,TGTQPBEQFR) && SGEGEGEGEW.MarcadorRevisarNuestro>=91) ||
						(TengoEstaCarta(MGYJHGHWGC,4,TGTQPBEQFR) && SGEGEGEGEW.MarcadorRevisarNuestro>=91) ||
						(TengoEstaCarta(MGYJHGHWGC,2,TGTQPBEQFR) && SGEGEGEGEW.MarcadorRevisarNuestro>=91)
						) 
					)
					{
						var CartaTemporal;
						for (i=10;i>=2;i--)
						{
							if (i!=3)
							{
								if (TengoEstaCarta(MGYJHGHWGC,i,TGTQPBEQFR))
								{
									CartaTemporal=UIBEMREGDL(TGTQPBEQFR,i)
									break;
								}
							}
						}
						
						if (IA_HariaBaza(UHTPGPRUJA,TGTQPBEQFR, CartaTemporal)  )
						{
							if (BMITYYFCGC==1 || BMITYYFCGC==2)
							{
								if (FBSDMRLVEL[0].VVRCMEUNOJ>=11 || RondaQueMueve>=5) 
								{
									NJGFWACAPY=CartaTemporal;
									console.log(TraducePorID(NJGFWACAPY)+ " v 7.2.1")
								}
							}
							
							if (NJGFWACAPY==false)
							{
								if (BMITYYFCGC==2)
								{
									NJGFWACAPY=CartaTemporal;
									console.log(TraducePorID(NJGFWACAPY)+ " v 7.3.1")
								}
							}
						}
						
						
					}
				}
				
				
				//Que no se pasen ellos
				if (NJGFWACAPY==false)
				{
					if (SGEGEGEGEW.VVSFGSGGSW>=93)
					{
						if (BMITYYFCGC==1)
						{
							NJGFWACAPY=TriunfoAlto(MGYJHGHWGC)
							if (NJGFWACAPY!=false)
							{
								console.log(TraducePorID(NJGFWACAPY)+ " v 9.1.1")
							}
							else
							{
								NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
								if (NJGFWACAPY!=false)
								{
									console.log(TraducePorID(NJGFWACAPY)+ " v 9.1.2")
								}
								else
								{
									NJGFWACAPY=MatarMejorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,12,true,false, SGEGEGEGEW)	
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " v 9.1.3")
									}
									else
									{
										NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
										if (NJGFWACAPY!=false)
										{
											console.log(TraducePorID(NJGFWACAPY)+ " v 9.1.4")
										}
									}
								}
							}
						
						}
						
						if (BMITYYFCGC==2)
						{
							var CartaTemporal=MatarMejorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,12,true,false, SGEGEGEGEW)	
							if (CartaTemporal!=false)
							{
								if (PuntuacionPorID(CartaTemporal)+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB+BAVVCAHQCC(MGYJHGHWGC)+10>=81)
								{
									NJGFWACAPY=CartaTemporal
									console.log(TraducePorID(NJGFWACAPY)+ " v 9.2.1.1")
								}
							}
							
							if (NJGFWACAPY==false)
							{
								NJGFWACAPY=MatarMejorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,8,true,false, SGEGEGEGEW)	
								if (NJGFWACAPY!=false)
								{
									console.log(TraducePorID(NJGFWACAPY)+ " v 9.2.2")
								}								
							}
							
							if (NJGFWACAPY==false)
							{
								NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
								if (NJGFWACAPY!=false)
								{
									console.log(TraducePorID(NJGFWACAPY)+ " v 9.2.3")
								}
							}							
						}
						
						if (BMITYYFCGC==3)
						{
							//if (SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<101)
							//{
								if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false || (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA) && VDKOVQXHON[0].SGCSHJVERI!=TGTQPBEQFR))
								{
									if (SGEGEGEGEW.DCBSNHIVQB>=10)
									{
										NJGFWACAPY=MatarMejorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,12,true,false, SGEGEGEGEW)	
										if (NJGFWACAPY!=false)									
										{
											console.log(TraducePorID(NJGFWACAPY)+ " v 9.3.1.1 bis")
										}
									}
									else
									{
										NJGFWACAPY=MatarPeorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,true,true, SGEGEGEGEW)
										if (NJGFWACAPY!=false)									
										{
											console.log(TraducePorID(NJGFWACAPY)+ " v 9.3.1.1")
										}
									}
								}
								else
								{
									if (VDKOVQXHON[0].SGCSHJVERI==TGTQPBEQFR && VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA) && VDKOVQXHON[0].VVRCMEUNOJ>=8)
									{
										NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
										if (NJGFWACAPY!=false)			
										{
											console.log(TraducePorID(NJGFWACAPY)+ " v 9.3.1.2")
										}
									}
								}
							//}
						}
						
						if (BMITYYFCGC==4)
						{
							if (SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB>=JLVDFTPUNI)
							{
								NJGFWACAPY=MatarSinTriunfo(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW, 11)
								if (NJGFWACAPY!=false)
								{
									console.log(TraducePorID(NJGFWACAPY)+ " v 9.4.1.1")
								}
								else
								{
									NJGFWACAPY=MatarSinTriunfo(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW, 0)
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " v 9.4.1.1 bis")
									}
									else
									{
										NJGFWACAPY=MatarPeorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,true,true, SGEGEGEGEW)		
										if (NJGFWACAPY!=false)
										{
											console.log(TraducePorID(NJGFWACAPY)+ " v 9.4.1.1 bis")
										}
										else
										{										
											NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
											if (NJGFWACAPY!=false)
											{
												console.log(TraducePorID(NJGFWACAPY)+ " v 9.4.1.2")
											}	
										}
									}
								}									
							}
							else
							{
								if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA))
								{
									NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
									console.log(TraducePorID(NJGFWACAPY)+ " v 9.4.2.1")
								}
								
								if (NJGFWACAPY==false)
								{
									NJGFWACAPY=MatarSinTriunfo(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW, 11)
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " v 9.4.2.1 bis")
									}
								}
								
								if (NJGFWACAPY==false)
								{
									NJGFWACAPY=MatarSinTriunfo(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW, 0)
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " v 9.4.2.2")
									}
								}
								
								if (NJGFWACAPY==false)
								{
									NJGFWACAPY=MatarPeorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,true,false, SGEGEGEGEW)		
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " v 9.4.2.3")
									}
								}
								
								if (NJGFWACAPY==false)
								{
									NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)	
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " v 9.4.2.4")
									}		
								}
								
							}
						}
					}
				}
				
				if (NJGFWACAPY==false)
				{
					if (BMITYYFCGC==4)
					{
						if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA))
						{
							NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
							console.log(TraducePorID(NJGFWACAPY)+ " v 10.1")
						}
						else
						{
							if (MiCompiHaMarcado(UHTPGPRUJA,RondaQueMueve, MGYJHGHWGC) || RondaQueMueve==4 || PuedoLlegarA31(MGYJHGHWGC, UHTPGPRUJA,SGEGEGEGEW)   ) //jugada polémica llegar a 31
							{
								if (NJGFWACAPY==false)
								{
									NJGFWACAPY=MatarSinTriunfo(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW, 11)
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " v 10.2.1")
									}
								}
								
								if (NJGFWACAPY==false)
								{
									NJGFWACAPY=MatarSinTriunfo(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW, 0)
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " v 10.2.1 bis")
									}
								}
								
								if (NJGFWACAPY==false)
								{
									NJGFWACAPY=MatarPeorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,true,false, SGEGEGEGEW)		
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " v 10.2")
									}
								}
								
								if (NJGFWACAPY!=false)
								{
									//no cuenta para la validación de hamarcado
								}
								
							}
							
						}
					}
				}
				
				if (NJGFWACAPY==false)
				{
					if (SGEGEGEGEW.DCBSNHIVQB>=10 && HayGuinoteEnMesa())
					{
						NJGFWACAPY=IA_Idas(RondaQueMueve,SGEGEGEGEW,BMITYYFCGC,UHTPGPRUJA, MGYJHGHWGC)	
						if (NJGFWACAPY!=false)
						{
							console.log(TraducePorID(NJGFWACAPY)+ " v 11")
						}
					}
				}
				
				if (NJGFWACAPY==false)
				{
					if (BMITYYFCGC==2)
					{
						if (HayGuinoteEnMesa())
						{
							NJGFWACAPY=MatarMejorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,12,true,false, SGEGEGEGEW)	
							if (NJGFWACAPY!=false)
							{
								console.log(TraducePorID(NJGFWACAPY)+ " v 12.1")
							}
						}
							//else
							//{
						if (NJGFWACAPY==false)
						{
							if (BAVVCAHQCC(MGYJHGHWGC)==0)
							{
								if ( (TengoEstaCarta(MGYJHGHWGC,12,TGTQPBEQFR) || (TengoEstaCarta(MGYJHGHWGC,11,TGTQPBEQFR) && EstaFirme(UHTPGPRUJA, TGTQPBEQFR, 11, MGYJHGHWGC) ))
								&&	SGEGEGEGEW.MarcadorRevisarNuestro+SGEGEGEGEW.DCBSNHIVQB>=70 && SGEGEGEGEW.MarcadorRevisarNuestro+SGEGEGEGEW.DCBSNHIVQB<=75   )
								{
									NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " v 12.1.1.1")
									}
									else										
									{
										var CartaTemporal=MatarPeorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,true,false, SGEGEGEGEW)
										if (PuntuacionPorID(CartaTemporal)+SGEGEGEGEW.MarcadorRevisarNuestro+SGEGEGEGEW.DCBSNHIVQB+BAVVCAHQCC(MGYJHGHWGC)+10>=81)
										{
											NJGFWACAPY=CartaTemporal;
											console.log(TraducePorID(NJGFWACAPY)+ " v 12.1.2")
										}
									}
								}
							}
							else
							{
								var CartaTemporal=MatarMejorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,12,true,true, SGEGEGEGEW)	
								if (PuntuacionPorID(CartaTemporal)+SGEGEGEGEW.MarcadorRevisarNuestro+SGEGEGEGEW.DCBSNHIVQB+BAVVCAHQCC(MGYJHGHWGC)+10>=81)
								{
									NJGFWACAPY=CartaTemporal;
									console.log(TraducePorID(NJGFWACAPY)+ " v 12.3.1")
								}
							}
							//}
						}
						
						if (NJGFWACAPY==false)
						{
							if (MiCompiHaMarcado(UHTPGPRUJA,RondaQueMueve, MGYJHGHWGC))	
							{
								console.log("Jugar con compañero v12");
								NJGFWACAPY=JugarConCompanero(MGYJHGHWGC,UHTPGPRUJA,SGEGEGEGEW)	
								ArrayRevisaArrastre.push(new NQMQGXXHIL(RondaQueMueve, UHTPGPRUJA))
							}
						}
					}
				}
				
				if (NJGFWACAPY==false)
				{
					if (BMITYYFCGC==3)
					{
						//if (SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB+10>=81)
						//{
							NJGFWACAPY=MatarPeorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,true,false, SGEGEGEGEW)
							if (NJGFWACAPY!=false)
							{
								console.log(TraducePorID(NJGFWACAPY)+ " v 13.1")	
							}
							else
							{
								NJGFWACAPY=MatarSinTriunfo(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW, 0)
								if (NJGFWACAPY!=false)
								{
									console.log(TraducePorID(NJGFWACAPY)+ " v 13.3")	
								}								
							}
						//}
						
						/*if (NJGFWACAPY==false)
						{
							if (SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB+10>=68)
							{
								NJGFWACAPY=MatarPeorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,true,false, SGEGEGEGEW)
								if (NJGFWACAPY!=false)
								{
									console.log(TraducePorID(NJGFWACAPY)+ " v 13.2")	
								}								
							}
						}*/
						
					}
				}
				
				if (NJGFWACAPY==false)
				{
					if (BMITYYFCGC==1)
					{
						if (RondaQueMueve<=4)
						{
							if (MiCompiHaMarcado(UHTPGPRUJA,RondaQueMueve, MGYJHGHWGC))
							{
								console.log("Jugar con compañero v14");
								NJGFWACAPY=JugarConCompanero(MGYJHGHWGC,UHTPGPRUJA,SGEGEGEGEW)
								ArrayRevisaArrastre.push(new NQMQGXXHIL(RondaQueMueve, UHTPGPRUJA))								
							}
							
						}
						else
						{
							NJGFWACAPY=DescarteCompanero(UHTPGPRUJA,MGYJHGHWGC)
							if (NJGFWACAPY!=false)
							{
								console.log(TraducePorID(NJGFWACAPY)+ " v 14.2.1")	
							}
							else							
							{
								NJGFWACAPY=DevuelveNoTriunfoFirme(UHTPGPRUJA, MGYJHGHWGC)
								if (NJGFWACAPY!=false)
								{
									console.log(TraducePorID(NJGFWACAPY)+ " v 14.2.2")	
								}
								else
								{
									NJGFWACAPY=DevuelveTriunfoFirme(UHTPGPRUJA, MGYJHGHWGC)
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " v 14.2.3")	
									}
								}
							}
						}
					}
				}
				
			}
			
			
			
			if (NJGFWACAPY==false)
			{
				NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
				{
					console.log(TraducePorID(NJGFWACAPY)+ " no entra en ningún lado "+NJGFWACAPY)		
				}
			}
			//FIN





			
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
				//console.log("Brutal")
				//alert("BRUTAL");
				//////console.log("IA DESDE Imprevisible");
				//TKXPPGUPVV.stop(); //Mucho miedo 29/04/2017
				//////console.log("IA 4");
				//IA(UHTPGPRUJA,RondaQueMueve,PartidaRecibida);
				if	( EstanTweensParados() )
				{
					LlamadaIA(UHTPGPRUJA,RondaQueMueve,PartidaRecibida)
				}
			}
			
			
			
			
			
			
			if (1==1)
			////////console.log("CARTA MOVER "+NJGFWACAPY );	
			//if (NJGFWACAPY!=false)
			{
					//console.log("Debe pasar "+TFSXFTYVGQ+" "+UHTPGPRUJA+" "+EGPDVIEJEL)
					if ( (EGPDVIEJEL==false  && TFSXFTYVGQ!=UHTPGPRUJA) || (EGPDVIEJEL==true)   )
					{
						//////console.log("Antes de validar");
						//if (1==1)
						//console.log("SNJCSVWFCC "+SNJCSVWFCC())
						if ( (EGPDVIEJEL==false) || (EGPDVIEJEL==true && SNJCSVWFCC()==true) )
						{	
							if (TurnoYaPasado(RondaQueMueve,UHTPGPRUJA, PartidaRecibida)==false)//Parece que repito pero es necesario por la rapidez
							{
								if (HQWFFUCQDR(RondaQueMueve,UHTPGPRUJA,PartidaRecibida)==true )
								{
									////console.log("Consola","BLOQUEADO EL MOVIMIENTO DEL JUGADOR "+UHTPGPRUJA+" CON RONDA "+)
									//////console.log("ACABO DE BLOQUEAR "+LUCRWXJMDR+" "+UHTPGPRUJA)
									log(true,"IA: ENVIO CARTA AL CENTRO "+NJGFWACAPY+" AUTOMATICAMENTE CON DVNRTQIWGL "+UHTPGPRUJA)
									/*if (UHTPGPRUJA==1 && LUCRWXJMDR==2)
									{
										alert("bien");
									}*/
									if (EGPDVIEJEL==false)
									{
										VPDVSDLPHG(UHTPGPRUJA,NJGFWACAPY,RondaQueMueve,Date.now(),PartidaRecibida,false); 
									}
									
									else
									{			
										log(true,"Envio la carta al centro desde IA para mi")
										
									
									}
									
									if (EGPDVIEJEL==true)
									{
											//////console.log("ENVIO CARTA AL RESTO "+NJGFWACAPY+" AUTOMATICAMENTE CON DVNRTQIWGL "+UHTPGPRUJA)
											
											
							/////////////
										//console.log("DFBVDPETGO "+DFBVDPETGO+" EYCRTUIDMY "+UHTPGPRUJA+" TVYNYTCQYW "+NJGFWACAPY+" "+XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD)
										DFBVDPETGO,UHTPGPRUJA,NJGFWACAPY,UHTPGPRUJA, RondaQueMueve, EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),
											XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,
											XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD,MQUGCIUQII,
											OYJAHGADFQ,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,DFBVDPETGO
										
										
										
										
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
										//console.log("INVENTADA DE "+TFSXFTYVGQ+" representando a "+UHTPGPRUJA+" TVYNYTCQYW "+NJGFWACAPY+" "+RondaQueMueve)
										
										var CKHBSQULIF=YMHIHSNADE.time.create(false);
										var ContinuarTry=true;
										CKHBSQULIF.loop(200,function(){
											//console.log("Entra al TKXPPGUPVV")
											try
											{
												//console.log("Enviando..")
												socket.emit('RYUDYPPOXW',QPHHGPRJAI[0],
												 function(XQLEOGMJYG)
												 {		
													//console.log("Enviada!")												 
													EXBCVLOIYJ(XQLEOGMJYG,'RYUDYPPOXW');
												 }
												);
																					
											}
											catch(e)
											{
												//console.log("Error "+e)
												ContinuarTry=false;
											}
											
											
											if (ContinuarTry==true)
											{
												CKHBSQULIF.stop();
												CKHBSQULIF.remove();
												QPHHGPRJAI.splice(0,1000);	
												

												//console.log("CONTINUA")
					  
												
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
											////console.log("VUELTA");
										}
										);
										CKHBSQULIF.start();
										

									}
								}
								else
								{
									//////console.log("No valida bien");	
								}
							}
							else
							{
								//console.log("Otro problemón")
							}
						}
					
					}
					
				
			}
		}
		else
		{
			//console.log("No muevo porque el MGYJHGHWGC mide 0");
		}
	}

	
}

