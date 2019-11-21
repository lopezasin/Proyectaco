'use strict';
function EstaConectado(Quien)
{
	var i;
	var Conectado=true;
	for (i=0;i<=ArrayJugadoresDesconectados.length-1;i++)
	{
		if (ArrayJugadoresDesconectados[i].Jugador==Quien)
		{
			Conectado=false;
			break;
		}
	}
	
	return Conectado;
}

function IA(JugadorQueMueve,RondaQueMueve, PartidaRecibida){
	var CartaMover=false;
	var NumeroJugada;
	var MazoIA=[];
	var MazoIATemp=[];
	var i;
	var u;
	var Letra;
	var Encontrada;
	//var CambioEstado=false;
	
	/*if (BloqueoIA==false)
	{
		CambioEstado=true;
		BloqueoIA=true;
	}*/
	
	//var JugadorQueMueve;

	//////console.log("Llega a IA");
	//alert("s");
	timer.stop(); //1.0.9
	timer.remove();
	timerturno.stop(); //raka
	timerturno.remove();
	
	//////console.log("Turno "+vTurno+" Control: "+QuienTomaElControl+" Soy: "+SoyElJugador+" Mandatory: "+Mandatory+" to fixed "+timerturno.duration.toFixed(0));
	if (  ( (RepartoFinalizado==true && PartidaComenzada==true &&  MarcadorNuestro<PuntosGanar && MarcadorRival<PuntosGanar) ||  (RepartoFinalizado==true && SonVueltas==false && PartidaComenzada==true)     ) 
		&& PuntosFin()==false	
		&& ( (JugadorQueMueve!=SoyElJugador && PermisoParaTomarControl(JugadorQueMueve)   ) || 
					(JugadorQueMueve==SoyElJugador && timerturno.duration.toFixed(0)<=0 && ModoMultijugador==true)||
					ModoMultijugador==false
			)
		&& FReconectando()==false
		&& ( (ModoMultijugador==false) || (ModoMultijugador==true && EstoyConectado()==true) )
		&& TurnoYaPasado(RondaQueMueve,JugadorQueMueve, PartidaRecibida)==false //importante por la rapidez que a veces se lanzan 2 ias
	) 
	//SoyElJugador==QuienTomaElControl && ModoMultijugador==true && EstaConectado(JugadorQueMueve)==false cabezon
		
	{
		timerturno.stop();
		timerturno.remove();
		timer.stop();
		timer.remove();
		
		//////console.log("IA Venga vamos");
		NumeroJugada=MazoCentral.length+1;
			
		
		
		log(false,"vRonda "+vRonda);
		
		
		

		MazoIA.splice(0,100);
		//QuienGanaManoResultado(vTurno);
		
		/*1.0.9 if (ModoMultijugador==false)
		{
			JugadorQueMueve=vTurno;
		}*/
		//JugadorQueMueve=vTurno; //1.0.9 2.0.7
		
		
		//console.log("IA JUGADOR QUE MUEVE "+JugadorQueMueve+" Soy "+SoyElJugador);
		
		Letra=DevuelveUbicacionCarta(JugadorQueMueve)
		if (Letra=="D")
		{
			MazoIATemp=MazoD;
		}
		if (Letra=="U")
		{
			MazoIATemp=MazoU
		}
		if (Letra=="L")
		{
			MazoIATemp=MazoL;
		}
		
		if (Letra=="R")
		{
			MazoIATemp=MazoR;
		}
		//console.log("Debería sacar letra "+Letra);
		
		
		
		for(i=0;i<=MazoIATemp.length-1;i++)
		{
				MazoIA.push(new Carta(MazoIATemp[i].palo,MazoIATemp[i].idCarta,MazoIATemp[i].valor,null,null,null));
				MazoIA[i].cartilla = MazoIATemp[i].cartilla;
		}

			

			for (i=0;i<=MazoIA.length-1;i++)
			{
				if (ValidadorReglas(MazoIA[i],JugadorQueMueve)==false)
				{
					MazoIA[i].palo="BORRAR";
				}
			}
			//alert(1);
			
			for (u=0;u<=5;u++)
			{
				bloque:
				for (i=0;i<=MazoIA.length-1;i++)
				{
					if (MazoIA[i].palo=="BORRAR")
					{
						MazoIA.splice(i,1);					
						break bloque;
					}
				}
			}

		
		//log(false,"ESTOY DE VUELTAS: "+SonVueltas);
		//////console.log("IA Venga vamos2");
		if (MazoIA.length>0)
		{
			
			//borrar este bloque
			/*if (SonVueltas==false)
			{
				//console.log("JIOO "+MazoIA.length);
				socket.emit("CartasPosibles",idPartida,vRonda,vTurno,MazoIA.length)
			}*/
				
				
			if (vProduccion==false)
			{
				//console.log("IA DEL JUGADOR "+JugadorQueMueve);
			}
			CartaMover=IA_PartidaGanada(MazoIA,JugadorQueMueve,NumeroJugada);
			if (CartaMover==false)
			{
				if (IA_MasDe20()==true)
				{
					CartaMover=IA_Sujeta(MazoIA,JugadorQueMueve,"Alto",NumeroJugada);
				}
				else
				{
					if (SonVueltas==false)
					{
						if (IA_MasDe10()==true && SituacionEspecialDescartar(MazoIA,JugadorQueMueve,NumeroJugada)==false)
						{
							if(RondaQueMueve==4)
							{
								CartaMover=IA_Descarte(MazoIA,JugadorQueMueve,NumeroJugada);								
							}
							else
							{								
								CartaMover=IA_Sujeta(MazoIA,JugadorQueMueve,"Bajo",NumeroJugada);
							}
						}
						else
						{
							if (SituacionEspecialSujetar(MazoIA,JugadorQueMueve,NumeroJugada)==true)
							{
								CartaMover=IA_Sujeta(MazoIA,JugadorQueMueve,"Bajo",NumeroJugada);
							}
							else
							{
								CartaMover=IA_Descarte(MazoIA,JugadorQueMueve,NumeroJugada);
							}
						}
					}
					else
					{
						if (IA_MasDe10()==true)
						{
							CartaMover=IA_Sujeta(MazoIA,JugadorQueMueve,"Bajo",NumeroJugada);
						}
						else
						{
							if ( NumeroJugada==3)
							{
								CartaMover=IA_Sujeta(MazoIA,JugadorQueMueve,"Bajo",NumeroJugada);
							}
							else
							{
								if (NumeroJugada==4 && RondaQueMueve==4)
								{
									CartaMover=IA_Sujeta(MazoIA,JugadorQueMueve,"Bajo",NumeroJugada);
								}
								else
								{
									if (SituacionEspecialSujetar(MazoIA,JugadorQueMueve,NumeroJugada)==true)
									{
										CartaMover=IA_Sujeta(MazoIA,JugadorQueMueve,"Bajo",NumeroJugada);
									}
									else
									{
										CartaMover=IA_Descarte(MazoIA,JugadorQueMueve,NumeroJugada);
									}
								}
							}
						}
						
					}
				}	
			}
			else
			{
				//console.log("Problema 1")
			}
					
				
				//}
			//}
			
			/*for (var h=0;h<=MazoIA.length-1;h++)
			{
				if (MazoIA[h].idCarta===CartaMover)
				{
					var pp=MazoIA[h].palo;
					var qq=MazoIA[h].numero
					var rr=MazoIA[h].valor
				}
			}*/
			
			////////console.log("CARTA MOVER "+CartaMover," "+JugadorQueMueve+" "+qq+" "+pp+" "+rr);
			
			//08/02/2017 Para por si acaso no existe (cambio de 7 o que se yo)
			//console.log("Carta Mover "+CartaMover)
			Encontrada=false;
			for (i=0;i<=MazoIA.length-1;i++)
			{
				if(MazoIA[i].cartilla.name==CartaMover)
				{
					Encontrada=true;
					break;
				}
			}
			if (Encontrada==false)
			{
				//console.log("Brutal")
				//alert("BRUTAL");
				//////console.log("IA DESDE Imprevisible");
				//timer.stop(); //Mucho miedo 29/04/2017
				//////console.log("IA 4");
				//IA(JugadorQueMueve,RondaQueMueve,PartidaRecibida);
				LlamadaIA(JugadorQueMueve,RondaQueMueve,PartidaRecibida)
			}
			
			
			
			
			
			
			if (1==1)
			////////console.log("CARTA MOVER "+CartaMover );	
			//if (CartaMover!=false)
			{
					//console.log("Debe pasar "+SoyElJugador+" "+JugadorQueMueve+" "+ModoMultijugador)
					if ( (ModoMultijugador==false  && SoyElJugador!=JugadorQueMueve) || (ModoMultijugador==true)   )
					{
						//////console.log("Antes de validar");
						//if (1==1)
						//console.log("EstoyConectado "+EstoyConectado())
						if ( (ModoMultijugador==false) || (ModoMultijugador==true && EstoyConectado()==true) )
						{	
							if (TurnoYaPasado(RondaQueMueve,JugadorQueMueve, PartidaRecibida)==false)//Parece que repito pero es necesario por la rapidez
							{
								if (ValidaMovimientoJugador(RondaQueMueve,JugadorQueMueve,PartidaRecibida)==true )
								{
									////console.log("Consola","BLOQUEADO EL MOVIMIENTO DEL JUGADOR "+JugadorQueMueve+" CON RONDA "+)
									//////console.log("ACABO DE BLOQUEAR "+vRonda+" "+JugadorQueMueve)
									log(true,"IA: ENVIO CARTA AL CENTRO "+CartaMover+" AUTOMATICAMENTE CON vTurno "+JugadorQueMueve)
									/*if (JugadorQueMueve==1 && vRonda==2)
									{
										alert("bien");
									}*/
									if (ModoMultijugador==false)
									{
										MoverCentroAjeno(JugadorQueMueve,CartaMover,RondaQueMueve,Date.now(),PartidaRecibida,false); 
									}
									
									else
									{			
										log(true,"Envio la carta al centro desde IA para mi")
										
									
									}
									
									if (ModoMultijugador==true)
									{
											//////console.log("ENVIO CARTA AL RESTO "+CartaMover+" AUTOMATICAMENTE CON vTurno "+JugadorQueMueve)
											
											
							/////////////
										//console.log("Habitacion "+Habitacion+" JugadorMueve "+JugadorQueMueve+" Carta "+CartaMover+" "+ArrayDelaPropiaSala[JugadorQueMueve-1].Nombre)
										Habitacion,JugadorQueMueve,CartaMover,JugadorQueMueve, RondaQueMueve, SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),
											ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorFull,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,
											ArrayDelaPropiaSala[JugadorQueMueve-1].Nombre,idPartida,
											IdMsg,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,Habitacion
										
										
										
										
										var Hora=Date.now();
										var ObjectSend=function( Habitacion,SoyElJugador,Cartilla,Turno, RondaParam, SonVueltas,Partida,JugadorFull,JugadorSala,Nombre,idPartida,
											IdMsg,ClientId,SalaID,Mensaje){
											 this.Habitacion=Habitacion
											 this.SoyElJugador=SoyElJugador
											 this.Cartilla=Cartilla
											 this.Turno=Turno
											 this.Ronda=RondaParam
											 this.SonVueltas=SonVueltas
											 this.Partida=Partida
											 this.JugadorFull=JugadorFull
											 this.JugadorSala=JugadorSala
											 this.Nombre=Nombre
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
										var Objeto=new ObjectSend(Habitacion,JugadorQueMueve,CartaMover,JugadorQueMueve, RondaQueMueve, SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),
											ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorFull,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,
											ArrayDelaPropiaSala[JugadorQueMueve-1].Nombre,idPartida,
											IdMsg,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,Habitacion,'enviar carta centro');
										ArrayAccionesDesconexiones.push(Objeto);
										ArrayAccionesDesconexionesLocal.push(Objeto);
										/*socket.emit("Consola","IA Jugador "+SoyElJugador+" Tiro por "+JugadorQueMueve+" Ronda "+RondaQueMueve+" Carta "+CartaMover);
										if(CartaMover==1)
										{
											socket.emit("Consola","---------CULPABLE--------------IA Jugador "+SoyElJugador+" Tiro por "+JugadorQueMueve+" Ronda "+RondaQueMueve+" Carta "+CartaMover);
										}*/
										//console.log("INVENTADA DE "+SoyElJugador+" representando a "+JugadorQueMueve+" Carta "+CartaMover+" "+RondaQueMueve)
										
										var timererror=game_objeto.time.create(false);
										var ContinuarTry=true;
										timererror.loop(200,function(){
											//console.log("Entra al timer")
											try
											{
												//console.log("Enviando..")
												socket.emit('enviar carta centro',ArrayAccionesDesconexionesLocal[0],
												 function(idMensaje)
												 {		
													//console.log("Enviada!")												 
													EliminarColaMensajes(idMensaje,'enviar carta centro');
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
												timererror.stop();
												timererror.remove();
												ArrayAccionesDesconexionesLocal.splice(0,1000);	
												

												//console.log("CONTINUA")
					  
												
												/////////////									
													
													
													
												
												//socket.emit('enviar carta centro', Habitacion,JugadorQueMueve,CartaMover,JugadorQueMueve, vRonda,SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorFull,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,ArrayDelaPropiaSala[JugadorQueMueve-1].Nombre) ;
												if (MazoIA[i].palo==Triunfo)
												{
													if (MazoIA[i].valor==1)
													{
														GrabarResultado(JugadorQueMueve,(MarcadorPartidasNuestro+MarcadorPartidasRival),SonVueltas,0,false,false,true,false);
													}
													if (MazoIA[i].valor==3)
													{
														GrabarResultado(JugadorQueMueve,(MarcadorPartidasNuestro+MarcadorPartidasRival),SonVueltas,0,false,false,false,true);
													}								
												}
																							
											}
											////console.log("VUELTA");
										}
										);
										timererror.start();
										

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
			//console.log("No muevo porque el MazoIA mide 0");
		}
	}
	else
	{
		/*console.log("Reparto Finalizado "+RepartoFinalizado)
		console.log("Partida Comenzada "+PartidaComenzada+ " Son Vueltas "+SonVueltas+" PuntosFin "+PuntosFin())
		console.log("MarcadorNuestro "+MarcadorNuestro+" Puntos Ganar "+MarcadorNuestro)
		console.log("MarcadorRival "+MarcadorRival)
		console.log("JQM "+JugadorQueMueve+" Soy "+SoyElJugador+" Permiso "+PermisoParaTomarControl(JugadorQueMueve)+ " Reconectando "+FReconectando())*/
		
		
	
	}
	
	//BloqueoIA=false;
	
}

function SituacionPartida(MazoIA,JugadorQueMueve,NumeroJugada)
{
	var i;
	var u;
	var Encontrado=false;
	var MarcadorRevisar;
	var MarcadorRevisarEllos;
	var PuntosEnMesa=0;
	var BuenaCarta=false;
	var Devolver=false;
	var ObjetoSituacion;
	var ObjetoSituacionDevolver;
	
	if (EsCompi(JugadorQueMueve)==true)
	{
		MarcadorRevisar=MarcadorNuestro;
		MarcadorRevisarEllos=MarcadorRival;
	}
	else
	{
		MarcadorRevisar=MarcadorRival;
		MarcadorRevisarEllos=MarcadorNuestro;
	}
	
	for (i=0;i<=MazoCentral.length-1;i++)
	{
		PuntosEnMesa=PuntosEnMesa+MazoCentral[i].valorPuntuacion;
	}
	
	var ObjetoSituacion=function(PuntosEnMesa,MarcadorRevisar,MarcadorRevisarEllos)
	{
		this.PuntosEnMesa=PuntosEnMesa
		this.MarcadorRevisar=MarcadorRevisar
		this.MarcadorRevisarEllos=MarcadorRevisarEllos
	}

	ObjetoSituacionDevolver=new ObjetoSituacion(PuntosEnMesa,MarcadorRevisar,MarcadorRevisarEllos);
	return ObjetoSituacionDevolver;
	
	
}

function IA_MasDe10(){
	var i;
	var devuelve=false;
	var PuntosEnMesa=0;
	var FiguraGorda=false;
	
	for (i=0;i<=MazoCentral.length-1;i++)
	{
		PuntosEnMesa=PuntosEnMesa+MazoCentral[i].valorPuntuacion;
		if (MazoCentral[i].valorReal>=11)
		{
			FiguraGorda=true;
		}
	}

	if (PuntosEnMesa>=10 && FiguraGorda==true)
	{
		devuelve=true;
	}	

	return devuelve;
}

function EsCompi(JugadorQueMueve)
{
	var Compi;
	
	if (SoyElJugador==1)
	{
		if (JugadorQueMueve==1){
			Compi=true;
		}
		if (JugadorQueMueve==2){
			Compi=false;
		}
		if (JugadorQueMueve==3){
			Compi=true;
		}
		if (JugadorQueMueve==4){
			Compi=false;
		}			
	}
	if (SoyElJugador==2)
	{
		if (JugadorQueMueve==2){
			Compi=true;
		}
		if (JugadorQueMueve==3){
			Compi=false;
		}
		if (JugadorQueMueve==4){
			Compi=true;
		}
		if (JugadorQueMueve==1){
			Compi=false;
		}			
	}
	if (SoyElJugador==3)
	{
		if (JugadorQueMueve==3){
			Compi=true;
		}
		if (JugadorQueMueve==4){
			Compi=false;
		}
		if (JugadorQueMueve==1){
			Compi=true;
		}
		if (JugadorQueMueve==2){
			Compi=false;
		}			
	}
	if (SoyElJugador==4)
	{
		if (JugadorQueMueve==4){
			Compi=true;
		}
		if (JugadorQueMueve==1){
			Compi=false;
		}
		if (JugadorQueMueve==2){
			Compi=true;
		}
		if (JugadorQueMueve==3){
			Compi=false;
		}			
	}		
	return Compi;
}
function PosibleCanteIA(Mazo)
{
	var i;
	var mediocante=0;
	var puntoscante=0;
	
	["oros","copas","espadas","bastos"].forEach( function(element, index, Array){
		
		mediocante=0;
		
		for (i=0;i<=Mazo.length-1;i++)
		{
			if(Mazo[i].palo==element && (Mazo[i].valorReal==9 || Mazo[i].valorReal==10) && EstaCantado(element)==false)
			{
				mediocante++;
			}
		}
		if (mediocante==2)
		{
			if(Triunfo==element)
			{
				puntoscante=puntoscante+40;
			}
			else
			{
				puntoscante=puntoscante+20;
			}
		}	
	});
	//////console.log("Puntos cante: "+puntoscante);
	return puntoscante;
}

//AVE
function TengoCantePaloOSieteCritico(Mazo,Palo,ValorReal)
{
	var i;
	var Devolver=false;
	var mediocante=0;
	var EsEl7=false;
	
	for (i=0;i<=Mazo.length-1;i++)
	{
		if( (Mazo[i].valorReal==9 || Mazo[i].valorReal==10) && Mazo[i].palo==Palo && EstaCantado(Palo)==false)
		{
			mediocante++;
		}
		
		if (Mazo[i].valorReal==7 && Mazo[i].palo==Triunfo && Mazo[i].valorReal==ValorReal)
		{
			EsEl7=true;
		}
			
	}
	
	if (mediocante==2)
	{
		Devolver=true;
	}
	else
	{
		if (CartaTriunfo.length>0)
		{
			if (mediocante==1 && (CartaTriunfo[0].valorReal==9 || CartaTriunfo[0].valorReal==10) && CartaTriunfo[0].palo==Palo)
			{
				Devolver=true;			
			}
			
			if (mediocante==2) //Puede ser redundante porque hago otras validaciones en otros lados, pero lo dejo.
			{
				Devolver=true;			
			}			
		
			if ( (CartaTriunfo[0].valorReal==11 || CartaTriunfo[0].valorReal==12) && EsEl7==true)
			{
				Devolver=true;	
			}
		}
		
	}
	
	return Devolver;
}


function IA_PartidaGanada(MazoIA,JugadorQueMueve,NumeroJugada){
	var i;
	var posTriunfo=0;
	var posTriunfoSinRomper=0;
	var posCualquiera=0;
	var posCualquieraSinRomper=0;
	var lanzala=false;

	var CartaQueMasVale=0;
	var CartaQueMasVale_ID=0;
	
	var CartaQueMasValeSinRomper=0;
	var CartaQueMasValeSinRomper_ID=0;
	
	var CartaQueMasValeCualquiera=0;
	var CartaQueMasValeCualquiera_ID=0;
	
	var CartaQueMasValeCualquieraSinRomper=0;
	var CartaQueMasValeCualquieraSinRomper_ID=0;
	
	
	var PuntosEnMesa=0;
	var Key;
	var MarcadorRevisar;
	var MarcadorRevisarEllos;
	var Devuelve=false;
	var ObjetoSituacion;
	
	ObjetoSituacion=SituacionPartida(MazoIA,JugadorQueMueve,NumeroJugada)
	MarcadorRevisar=ObjetoSituacion.MarcadorRevisar;
	MarcadorRevisarEllos=ObjetoSituacion.MarcadorRevisarEllos;
	PuntosEnMesa=ObjetoSituacion.PuntosEnMesa;
	
	if (SonVueltas==true)
	{
	
	//if (NumeroJugada==3 && RBazaEsNuestra(MazoCentral,JugadorQueMueve)==true && MiCompiHaTiradoTriunfo(MazoCentral,NumeroJugada)==true)
	//{
	//	Devuelve=false;
	//}
	//else
	//{		
		for (i=0;i<=MazoIA.length-1;i++)
		{
			if(MazoIA[i].palo==Triunfo)
			{
				if (MazoIA[i].valorReal>CartaQueMasVale_ID)
				{
					CartaQueMasVale=MazoIA[i].valorPuntuacion;
					CartaQueMasVale_ID=MazoIA[i].valorReal;
					posTriunfo=i;
				}
			}
		}
		//////console.log("Carta que mas vale para "+vTurno+" "+CartaQueMasVale+" Turno "+NumeroJugada);
		

		for (i=0;i<=MazoIA.length-1;i++)
		{
			if(MazoIA[i].palo==Triunfo)
			{
				if (MazoIA[i].valorReal>CartaQueMasValeSinRomper_ID && TengoCantePaloOSieteCritico(MazoIA, MazoIA[i].palo, MazoIA[i].valorReal)==false) //AVE  (MazoIA[i].valorReal!=10 && MazoIA[i].valorReal!=9) )
				{
					CartaQueMasValeSinRomper=MazoIA[i].valorPuntuacion;
					CartaQueMasValeSinRomper_ID=MazoIA[i].valorReal;
					posTriunfoSinRomper=i;
				}
			}
		}
		//////console.log("Carta que mas vale para "+vTurno+" "+CartaQueMasValeSinRomper+" Turno "+NumeroJugada);
		
		
		for (i=0;i<=MazoIA.length-1;i++)
		{

			if (MazoIA[i].valorReal>CartaQueMasValeCualquiera_ID)
			{
				CartaQueMasValeCualquiera=MazoIA[i].valorPuntuacion;
				CartaQueMasValeCualquiera_ID=MazoIA[i].valorReal;
				posCualquiera=i;
			}
			
		}
		
		for (i=0;i<=MazoIA.length-1;i++)
		{

			if (MazoIA[i].valorReal>CartaQueMasValeCualquieraSinRomper_ID && TengoCantePaloOSieteCritico(MazoIA, MazoIA[i].palo, MazoIA[i].valorReal)==false) //&& (MazoIA[i].valorReal!=10 && MazoIA[i].valorReal!=9) )
			{
				CartaQueMasValeCualquieraSinRomper=MazoIA[i].valorPuntuacion;
				CartaQueMasValeCualquieraSinRomper_ID=MazoIA[i].valorReal;
				posCualquieraSinRomper=i;
			}
			
		}	
		
		Key=IA_DevuelveKey(MazoIA,MazoIA[posCualquiera].palo,MazoIA[posCualquiera].valorReal);
		if ((MarcadorRevisar+CartaQueMasValeCualquiera+PuntosEnMesa)>=PuntosGanar  &&  NumeroJugada==4 && IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false)
		{	
			if (vProduccion==false)
			{
				//console.log("CG 1");
			}
			Devuelve=Key;
		}
		
		if ((MarcadorRevisarEllos+PuntosEnMesa)>=PuntosGanar && (RBazaEsNuestra(MazoCentral,JugadorQueMueve)==false || NumeroTriunfos(MazoCentral)==0 ))
		{
			if (vProduccion==false)
			{
				//console.log("CG vital");
			}
			Devuelve=IA_Sujeta(MazoIA,JugadorQueMueve,"Bajo",NumeroJugada);
		}

		//Sin tener en cuenta cantes. Hay que hacerlo por separado porque si no podría guardarse medio cante a pesar de ganar matando con esa carta
		if (Devuelve==false)
		{
			if ( ((MarcadorRevisar+CartaQueMasVale+PuntosEnMesa)>=PuntosGanar)  )
			{
				if (NumeroJugada==4)
				{				
					var Key=IA_DevuelveKey(MazoIA,MazoIA[posTriunfo].palo,MazoIA[posTriunfo].valorReal)
					////////console.log("Ultimo en tirar: (prov2): "+Key);
					if (IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false)
					{
						if (vProduccion==false)
						{
							//console.log("CG 2");
						}
						Devuelve=Key;
					}
					else
					{
						////////console.log("Ultimo en tirar: No lo hace");
						if (vProduccion==false)
						{
							//console.log("CG 3");
						}
						Devuelve=false;
					}
					
				}
				else
				{

					////////console.log("RECOMIENDA: "+MazoIA[u].palo+" "+MazoIA[u].valorReal);
					var Key=IA_DevuelveKey(MazoIA,MazoIA[posTriunfo].palo,MazoIA[posTriunfo].valorReal);
					////////console.log("RECOMENDADO KEY: "+Key)
					if (IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false && MazoIA[posTriunfo].valorPuntuacion!=10)
					{		
						////////console.log("RECOMENDADO KEY DEVUELTA: "+Key)
						//////console.log("CG 4_1: "+MarcadorRevisar);
						//////console.log("CG 4_1: "+PuntosEnMesa);
						//////console.log("CG 4_3 "+CartaQueMasVale);		
						if (vProduccion==false)
						{
							//console.log("CG 4: "+(MarcadorRevisar+CartaQueMasVale+PuntosEnMesa));
						}						
						
						Devuelve=Key;
					}
					else
					{
						////////console.log("ni recomienda ni leches");
						if (vProduccion==false)
						{
							//console.log("CG 5");
						}	
						Devuelve=false;
					}
				
					
				}
			}
			else
			{
				////////console.log("No merece echar carta");
				//////console.log("CG 6 ");
				
				if (vProduccion==false)
				{
					//console.log("CG 7 "+(MarcadorRevisar+CartaQueMasVale+PuntosEnMesa));
				}				
				Devuelve=false;
			}
		}
		
		//Ahora teniendo en cuenta cantes
		Key=IA_DevuelveKey(MazoIA,MazoIA[posCualquieraSinRomper].palo,MazoIA[posCualquieraSinRomper].valorReal);
		if ((MarcadorRevisar+CartaQueMasValeCualquiera+PuntosEnMesa+PosibleCanteIA(MazoIA))>=PuntosGanar  &&  NumeroJugada==4 && IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false)
		{	
			if (vProduccion==false)
			{
				//console.log("CG 8");
			}	
			Devuelve=Key;
		}
		
		if (Devuelve==false)
		{
			if ( ((MarcadorRevisar+CartaQueMasVale+PuntosEnMesa+PosibleCanteIA(MazoIA) )>=PuntosGanar)  )
			{
				if (NumeroJugada==4)
				{				
					var Key=IA_DevuelveKey(MazoIA,MazoIA[posTriunfoSinRomper].palo,MazoIA[posTriunfoSinRomper].valorReal)
					////////console.log("Ultimo en tirar: (prov2): "+Key);
					if (IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false)
					{
						if (vProduccion==false)
						{
							//console.log("CG 9");
						}
						Devuelve=Key;
					}
					else
					{
						////////console.log("Ultimo en tirar: No lo hace");
						if (vProduccion==false)
						{
							//console.log("CG 10");
						}
						Devuelve=false;
					}
					
				}
				else
				{

					////////console.log("RECOMIENDA: "+MazoIA[u].palo+" "+MazoIA[u].valorReal);
					var Key=IA_DevuelveKey(MazoIA,MazoIA[posTriunfoSinRomper].palo,MazoIA[posTriunfoSinRomper].valorReal);
					////////console.log("RECOMENDADO KEY: "+Key)
					if (IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false && MazoIA[posTriunfo].valorPuntuacion!=10 || ( MazoIA[posTriunfo].valorPuntuacion==10 && NumeroJugada>=2)   ) 
					{		
						////////console.log("RECOMENDADO KEY DEVUELTA: "+Key)
						//////console.log("CG 4_1: "+MarcadorRevisar);
						//////console.log("CG 4_1: "+PuntosEnMesa);
						//////console.log("CG 4_3 "+CartaQueMasVale);				
						
						if (vProduccion==false)
						{
							//console.log("CG 11: "+(MarcadorRevisar+CartaQueMasVale+PuntosEnMesa));
						}						
						Devuelve=Key;
					}
					else
					{
						////////console.log("ni recomienda ni leches");
						if (vProduccion==false)
						{
							//console.log("CG 12");
						}	
						Devuelve=false;
					}
				
					
				}
			}
			else
			{
				////////console.log("No merece echar carta");
				//////console.log("CG 6 ");
				if (vProduccion==false)
				{
					//console.log("CG 13 "+(MarcadorRevisar+CartaQueMasVale+PuntosEnMesa));
				}					
				
				Devuelve=false;
			}
		}	
	//}
	}
	return Devuelve;
}


function IA_Ganaria(MazoIA,JugadorQueMueve, LaKey)
{
	
	var u;
	var i;
	var Devuelve;
	var Encontrado=false;
	var ArrayFicticio=[];
	
		
	ArrayFicticio.splice(0,100);
	for (u=0;u<=MazoCentral.length-1;u++){
		ArrayFicticio.push(new CartaBazaNuestra(MazoCentral[u].palo,MazoCentral[u].valorReal,MazoCentral[u].jugador ));
	}
	
	for (i=0;i<=MazoIA.length-1;i++)
	{
		if (MazoIA[i].cartilla.name==LaKey)
		{
			ArrayFicticio.push(new CartaBazaNuestra(MazoIA[i].palo,MazoIA[i].valorReal,JugadorQueMueve));
			break;
		}		
	}

	
	
	if (RBazaEsNuestra(ArrayFicticio,JugadorQueMueve)==true)
	{
		Encontrado=true;	
	}

	
	if (Encontrado==true)
	{
		Devuelve=LaKey;
	}
	else
	{
		Devuelve=false;
	}
	
	log(true,"IA_Ganaria "+JugadorQueMueve +" "+Devuelve);
	return Devuelve;
}



function IA_MasDe20(){

	var i;
	var devuelve=false;
	var PuntosEnMesa=0;
	
	for (i=0;i<=MazoCentral.length-1;i++)
	{
		PuntosEnMesa=PuntosEnMesa+MazoCentral[i].valorPuntuacion;
	}

	if (PuntosEnMesa>=20)
	{
		devuelve=true;
	}	

	return devuelve;
}

function TengoBuenTriunfo(Mazo,JugadorQueMueve,NumeroJugada)
{
	var i;
	var u;
	var Devolver=false;
	var Encontrado;
	
	for (u=12;u>=7;u--)
	{
		for (i=0;i<=Mazo.length-1;i++)
		{
			var Key=IA_DevuelveKey(Mazo,Mazo[i].palo,Mazo[i].valorReal)
			if (Mazo[i].palo==Triunfo && Mazo[i].valorReal==u)
			{
				Devolver=Key;
				break;
			}
		}	
	}
	
	return Devolver;
}

function TengoAsTresTriunfo(Mazo,JugadorQueMueve,NumeroJugada)
{
	var i;
	var u;
	var Devolver=false;
	var Encontrado;
	
	for (u=12;u>=11;u--)
	{
		for (i=0;i<=Mazo.length-1;i++)
		{
			var Key=IA_DevuelveKey(Mazo,Mazo[i].palo,Mazo[i].valorReal)
			if (Mazo[i].palo==Triunfo && Mazo[i].valorReal==u)
			{
				Devolver=Key;
				break;
			}
		}	
	}
	
	return Devolver;
}

function TengoBuenaCartaTriunfo(Mazo,JugadorQueMueve,NumeroJugada)
{
	var i;
	var u;
	var Devolver=false;
	var Encontrado;
	
	for (u=10;u>=8;u--)
	{
		for (i=0;i<=Mazo.length-1;i++)
		{
			var Key=IA_DevuelveKey(Mazo,Mazo[i].palo,Mazo[i].valorReal)
			if (Mazo[i].palo==Triunfo && Mazo[i].valorReal==u)
			{
				Devolver=Key;
				break;
			}
		}	
	}
	
	return Devolver;
}

function TengoBuenaCartaNOTriunfo(Mazo,JugadorQueMueve,NumeroJugada)
{
	var i;
	var u;
	var Devolver=false;
	var Encontrado;
	
	//////console.log("Analizando cartas.."+vRonda+" "+NumeroJugada);
	for (u=12;u>=11;u--)
	{
		for (i=0;i<=Mazo.length-1;i++)
		{
			var Key=IA_DevuelveKey(Mazo,Mazo[i].palo,Mazo[i].valorReal)
			if (Mazo[i].palo!=Triunfo && Mazo[i].valorReal==u)
			{
				Devolver=Key;
				break;
			}
		}	
	}
	//////console.log("Analizando cartas fin .."+vRonda+" "+NumeroJugada+" " +Devolver);
	return Devolver;
}


function TienenAsTresNoTriunfo(JugadorQueMueve)
{
	var LetraUltimo="D";
	var Letra=DevuelveUbicacionCarta(JugadorQueMueve);
	var Mazo;
	var i;
	var Devolver=false;
	
	if (Letra=="D")
	{
		LetraUltimo="R";
		Mazo=MazoR;
	}
	if (Letra=="R")
	{
		LetraUltimo="U";
		Mazo=MazoU;
	}	
	if (Letra=="U")
	{
		LetraUltimo="L";
		Mazo=MazoL;
	}	
		if (Letra=="L")
	{
		LetraUltimo="D";
		Mazo=MazoD;
	}	
	
	var Palo=MazoCentral[0].palo;
	
	for (i=0;i<=Mazo.length-1;i++)
	{
		if (Mazo[i].palo==Palo && Mazo[i].palo!=Triunfo && Mazo[i].valorReal>=12)
		{
			Devolver=true;
			break;
		}
	}
	
	return Devolver;
	
}


function SituacionEspecialSujetar(MazoIA,JugadorQueMueve,NumeroJugada)
{
	var i;
	var u;
	var Encontrado=false;
	var MarcadorRevisar;
	var MarcadorRevisarEllos;
	var PuntosEnMesa=0;
	var BuenaCarta=false;
	var Devolver=false;
	var ObjetoSituacion;
	var BazaYaEsNuestra=RBazaEsNuestra(MazoCentral,JugadorQueMueve);
	
	ObjetoSituacion=SituacionPartida(MazoIA,JugadorQueMueve,NumeroJugada)
	MarcadorRevisar=ObjetoSituacion.MarcadorRevisar;
	MarcadorRevisarEllos=ObjetoSituacion.MarcadorRevisarEllos;
	PuntosEnMesa=ObjetoSituacion.PuntosEnMesa;
	
	if (MazoCentral.length>0)
	{
		if (vRonda>=5 && BazaYaEsNuestra==true && MazoCentral[0].palo!=Triunfo && NumeroJugada==3 && TienenAsTresNoTriunfo(JugadorQueMueve)==true )
		{
			Devolver=true;
		}
	}	
	
	if (vRonda==4 && BazaYaEsNuestra==false && NumeroJugada==3 && IA_MasDe10()==true )
	{
		Devolver=true;
	}	
		

	
	return Devolver;
}


function SituacionEspecialDescartar(MazoIA,JugadorQueMueve,NumeroJugada)
{
	var i;
	var u;
	var Encontrado=false;
	var MarcadorRevisar;
	var MarcadorRevisarEllos;
	var PuntosEnMesa=0;
	var BuenaCarta=false;
	var Devolver=false;
	var ObjetoSituacion;
	var BazaYaEsNuestra=RBazaEsNuestra(MazoCentral,JugadorQueMueve);
	
	ObjetoSituacion=SituacionPartida(MazoIA,JugadorQueMueve,NumeroJugada)
	MarcadorRevisar=ObjetoSituacion.MarcadorRevisar;
	MarcadorRevisarEllos=ObjetoSituacion.MarcadorRevisarEllos;
	PuntosEnMesa=ObjetoSituacion.PuntosEnMesa;
	
	if (MazoCentral.length>0) //Hay un guiñote en la mesa, soy el tercero y no sujeto
	{
		if (BazaYaEsNuestra==true && MazoCentral[0].palo!=Triunfo && NumeroJugada==3 && MazoCentral[0].valorReal>=12 )
		{
			Devolver=true;
		}
	}	
	
	
	return Devolver;
}

function PuedoDescartarme()
{
	var i;
	var Devuelve=false;
	
	if (ArrayDescartePosible.length>0)
	{
		for (i=0;i<=ArrayDescartePosible.length-1;i++)
		{
			if (ArrayDescartePosible[i].veces==1 && ArrayDescartePosible[i].palo!=Triunfo)
			{
				Devuelve=true;
				break
			}
		}
	
	}
	
	return Devuelve;
	
}


function IA_Descarte(MazoIA,JugadorQueMueve,NumeroJugada)
{
	var i;
	var u;
	var Encontrado=false;
	var MarcadorRevisar;
	var MarcadorRevisarEllos;
	var PuntosEnMesa=0;
	var BuenaCarta=false;
	var Devolver=false;
	var ObjetoSituacion;
	
	
	ObjetoSituacion=SituacionPartida(MazoIA,JugadorQueMueve,NumeroJugada)
	MarcadorRevisar=ObjetoSituacion.MarcadorRevisar;
	MarcadorRevisarEllos=ObjetoSituacion.MarcadorRevisarEllos;
	PuntosEnMesa=ObjetoSituacion.PuntosEnMesa

	
	
	var BazaYaEsNuestra=RBazaEsNuestra(MazoCentral,JugadorQueMueve);
	
	ArrayDescartePosible.splice(0,100);



	for (i=0;i<=MazoIA.length-1;i++)
	{
		//log(false,"ENTRA "+i)
		CuentaPalos(MazoIA[i].palo);
	}
	
	if (Devolver==false)
	{
		Devolver=IA_Cargar(MazoIA,JugadorQueMueve,NumeroJugada);
	}
	
	

	

	//////console.log("Ronda "+vRonda+" Nº Jugada"+NumeroJugada)
	
	if (Devolver==false && SonVueltas==true && NumeroJugada<=2 && ( MarcadorRevisar>=80  || MarcadorRevisar<=40 || MarcadorRevisarEllos>=90 )  )
	{
		BuenaCarta=TengoAsTresTriunfo(MazoIA,JugadorQueMueve,NumeroJugada)
		if ( BuenaCarta!=false && IA_Ganaria(MazoIA,JugadorQueMueve,BuenaCarta)!=false ) //Si echo triunfo que sea para ganar
		{
			Devolver=BuenaCarta;
			////console.log("Devuelve "+vRonda+": "+"A13");
			//Encontrado=true;
			if (vProduccion==false)
			{
				//console.log("CG 14");
			}		
		}	
	}
	
	if (Devolver==false && SonVueltas==true && NumeroJugada<=2 && ( MarcadorRevisar<=40 || MarcadorRevisarEllos>=90 ) && (PuntosEnMesa+MarcadorRevisar<PuntosGanar) )
	{
		BuenaCarta=TengoBuenaCartaNOTriunfo(MazoIA,JugadorQueMueve,NumeroJugada)
		if ( BuenaCarta!=false )
		{
			Devolver=BuenaCarta;
			////console.log("Devuelve "+vRonda+": "+"A14");
			//Encontrado=true;
			if (vProduccion==false)
			{
				//console.log("CG 15");
			}	
		}	
	}		
	
	
	if (Devolver==false && SonVueltas==true && NumeroJugada<=2 && ( MarcadorRevisar<=40 || MarcadorRevisarEllos>=90)  )
	{
		BuenaCarta=TengoBuenaCartaTriunfo(MazoIA,JugadorQueMueve,NumeroJugada)
		if ( BuenaCarta!=false && IA_Ganaria(MazoIA,JugadorQueMueve,BuenaCarta)!=false )
		{
			Devolver=BuenaCarta;
			if (vProduccion==false)
			{
				//console.log("CG 16");
			}	
			////console.log("Devuelve "+vRonda+": "+"A15");
			//Encontrado=true;
		}	
	}				
	
	if (Devolver==false && NumeroJugada==3 && BazaYaEsNuestra==true && TienenAsTresNoTriunfo(JugadorQueMueve)==false && SonVueltas==false && vRonda==4 && PuntosEnMesa<10)
	{
		for (i=0;i<=MazoIA.length-1;i++)
		{
			var Key=IA_DevuelveKey(MazoIA,MazoIA[i].palo,MazoIA[i].valorReal)
			if (MazoIA[i].palo!=Triunfo && MazoIA[i].valorReal>=11)
			{
				Devolver=Key;
				////console.log("Devuelve "+vRonda+": "+"A16");
				if (vProduccion==false)
				{
					//console.log("CG 17");
				}	
				//Encontrado=true;
				break;
			}
		}	
	}	
	
	/*if (NumeroJugada==3 && BazaYaEsNuestra==false && TienenAsTresNoTriunfo(JugadorQueMueve)==false && SonVueltas==false && vRonda==4 && PuntosEnMesa>=10)
	{
		for (i=0;i<=MazoIA.length-1;i++)
		{
			var Key=IA_DevuelveKey(MazoIA,MazoIA[i].palo,MazoIA[i].valorReal)
			if (MazoIA[i].palo!=Triunfo && MazoIA[i].valorReal>=11)
			{
				Devolver=Key;
				////console.log("Devuelve "+vRonda+": "+"A16");
				//Encontrado=true;
				break;
			}
		}	
	}*/		
	
	if (Devolver==false) //Arrastro de as, o salgo de últimas con as si no puedo descartar
	{
		if ( (vRonda>=5 && NumeroJugada==1) || (vRonda==4 && NumeroJugada==1 && PuedoDescartarme()==false  )   )
		{
			for (i=0;i<=MazoIA.length-1;i++)
			{
				var Key=IA_DevuelveKey(MazoIA,MazoIA[i].palo,MazoIA[i].valorReal)
				if (MazoIA[i].palo!=Triunfo && MazoIA[i].valorReal==12)
				{
					Devolver=Key;
					if (vProduccion==false)
					{
						//console.log("CG 18");
					}	
					////console.log("Devuelve "+vRonda+": "+"A17");
					//Encontrado=true;
					break;
				}
			}
		}
	}
	
	if (Devolver==false)
	{		
		for (i=0;i<=ArrayDescartePosible.length-1;i++)
		{
			//log(false,"A VER... "+ArrayDescartePosible[i].palo+" "+ArrayDescartePosible[i].veces)
			if (ArrayDescartePosible[i].veces==1 && ArrayDescartePosible[i].palo!=Triunfo)
			{
				for (u=0;u<=MazoIA.length-1;u++)
				{
					
					var Key=IA_DevuelveKey(MazoIA,MazoIA[u].palo,MazoIA[u].valorReal)
					if (MazoIA[u].palo==ArrayDescartePosible[i].palo && 
					( (MazoIA[u].valorPuntuacion<10  && SonVueltas==false) || (MazoIA[u].valorPuntuacion==0  && SonVueltas==true) )      && 
					 ((MarcadorRevisar+MazoIA[u].valorPuntuacion+PuntosEnMesa)<PuntosGanar) && //Como antes se mira si gano, esto se refiere a que no doy partida a los rivales.
						RompoCante(MazoIA,MazoIA[u].palo,MazoIA[u].valorReal)==false &&
						(
						BazaYaEsNuestra==true || 
						IA_Ganaria(MazoIA,JugadorQueMueve,Key)==false ||
						NumeroJugada==1
						)

					
					)
					{
						//Encontrado=true;
						Devolver=MazoIA[u].cartilla.name;
						////console.log("Devuelve "+vRonda+": "+"A18");
						if (vProduccion==false)
						{
							//console.log("CG 19");
						}	
						//log(false,"Encontrada "+MazoIA[u].palo+" "+MazoIA[u].valorPuntuacion);
						break;
					}
				}
			}
		}
	}


	if (Devolver==false)
	{
		////console.log("Devuelve "+vRonda+": "+"A19");
		if (vProduccion==false)
		{
			//console.log("CG 19.1");
		}	
		Devolver=IA_AleatoriaNoTriunfo(MazoIA,JugadorQueMueve,NumeroJugada);
		
	}
	
	//log(false,"IA_Descarte "+JugadorQueMueve +" "+Devolver);
	return Devolver;
	
}

var ObjetoDescarte = function(palo,veces){
	this.palo=palo;
	this.veces=veces;	
};
	

function CuentaPalos(palo){
	
	var i;
	var Encontrado=false;
	
	ArrayDescartePosible.splice(0,10)
	for (i=0;i<=ArrayDescartePosible.length-1;i++)
	{
		if (ArrayDescartePosible[i].palo==palo)
		{
			ArrayDescartePosible[i].veces=ArrayDescartePosible[i].veces+1;
			Encontrado=true;
			break;
		}
	}
	
	if (Encontrado==false)
	{
		ArrayDescartePosible.push(new ObjetoDescarte(palo,1) );
	}
	
}

function CartaIA(palo,valorReal,key,valorPuntuacion) {
	this.palo=palo;
	this.valorReal=valorReal;
    this.name=key;
	this.valorPuntuacion=valorPuntuacion;
}

function RompoCante(Mano,Palo,ValorReal)
{
	var i;
	var u;
	var mediocante=0;
	var Devolver=true;
	
	if (ValorReal==9 || ValorReal==10)
	{
		for (i=0;i<=Mano.length-1;i++)
		{
			if (Mano[i].palo==Palo && (Mano[i].valorReal==9 ||  Mano[i].valorReal==10))
			{
				mediocante++;
			}
		}
		
		if (mediocante==2)
		{
			for (i=0;i<=RegistrarCantes.length-1;i++)
			{
				if (RegistrarCantes[i]==Palo)
				{
					Devolver=false;
					break;					
				}
			}
		}
		else
		{
			Devolver=false;
		}
	}
	else
	{
		Devolver=false;
	}
	
	return Devolver;
	
}

function IA_AleatoriaNoTriunfo(MazoIA,JugadorQueMueve,NumeroJugada)
{
	var ArrayManoCopia=[];
	var i;
	var Intentos=20;
	var Encontrado=false;
	var Devuelve=false;
	var Key;
	var ValorMasBajo;
	var ValorMasAlto;
	
	
	var BazaYaEsNuestra=RBazaEsNuestra(MazoCentral,JugadorQueMueve);
	
	ArrayManoCopia.splice(0,100);
	
	
	for (i=0;i<=MazoIA.length-1;i++){
		ArrayManoCopia.push(new CartaIA(MazoIA[i].palo,MazoIA[i].valorReal,MazoIA[i].cartilla.name, MazoIA[i].valorPuntuacion ));
	}
	

	
	//Si no encuentra, me quito cualquiera
	ValorMasBajo=100;
	if (Devuelve==false)
	{
		for (i=0;i<=ArrayManoCopia.length-1;i++)
		{	
			Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)
			if (ArrayManoCopia[i].valorReal<ValorMasBajo && ArrayManoCopia[i].palo!=Triunfo &&
			
				(BazaYaEsNuestra==true || 
				IA_Ganaria(MazoIA,JugadorQueMueve,Key)==false ||
				NumeroJugada==1)
				
				&& RompoCante(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)==false
				
			)
			
			{
				ValorMasBajo=ArrayManoCopia[i].valorReal
				//Phaser.ArrayUtils.shuffle(ArrayManoCopia);
				Devuelve=ArrayManoCopia[i].name
				if (vProduccion==false)
				{
					//console.log("CG 20");
				}	
				////console.log("Devuelve "+vRonda+": "+"A08");
				//break;
			}
		}
	}
	
	
	
	

	ValorMasBajo=100;
	if (Devuelve==false)
	{
		
		for (i=0;i<=ArrayManoCopia.length-1;i++)
		{	
			Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)
			if (ArrayManoCopia[i].valorReal<ValorMasBajo && ArrayManoCopia[i].palo==Triunfo && 
			
				(BazaYaEsNuestra==true || 
				IA_Ganaria(MazoIA,JugadorQueMueve,Key)==false ||
				NumeroJugada==1)
				
				&& RompoCante(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)==false
				&& ( (NumeroJugada!=4 && NumeroJugada!=3 ) || ( (NumeroJugada==4 || NumeroJugada==3 )  && EchaElTresSiLoTienesConOtro(ArrayManoCopia, ArrayManoCopia[i].valorReal, ArrayManoCopia[i].palo)==true )
				) //Para que no se guarde el 3 pelado
			)
			{
				ValorMasBajo=ArrayManoCopia[i].valorReal
				//Phaser.ArrayUtils.shuffle(ArrayManoCopia);
				Devuelve=ArrayManoCopia[i].name
				if (vProduccion==false)
				{
					//console.log("CG 21");
				}	
				////console.log("Devuelve "+vRonda+": "+"A09");
				//break;
			}
		}
	}	
		
		
	ValorMasBajo=100;
	if (Devuelve==false)
	{
		for (i=0;i<=ArrayManoCopia.length-1;i++)
		{	
			Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)
			if (ArrayManoCopia[i].valorReal<ValorMasBajo && ArrayManoCopia[i].palo!=Triunfo
				&& RompoCante(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)==false
			)
			
			{
				ValorMasBajo=ArrayManoCopia[i].valorReal
				//Phaser.ArrayUtils.shuffle(ArrayManoCopia);
				Devuelve=ArrayManoCopia[i].name
				if (vProduccion==false)
				{
					//console.log("CG 22");
				}	
				////console.log("Devuelve "+vRonda+": "+"A10");
				//break;
			}
		}
	}
	ValorMasBajo=100;
	if (Devuelve==false)
	{
		for (i=0;i<=ArrayManoCopia.length-1;i++)
		{	
			if (ArrayManoCopia[i].valorReal<ValorMasBajo && ArrayManoCopia[i].palo==Triunfo
				&& RompoCante(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)==false
				&& ( (NumeroJugada!=4 && NumeroJugada!=3 ) || ( (NumeroJugada==4 || NumeroJugada==3 ) && EchaElTresSiLoTienesConOtro(ArrayManoCopia, ArrayManoCopia[i].valorReal, ArrayManoCopia[i].palo)==true ) 
				) //Para que no se guarde el 3 pelado
			)
			{
				ValorMasBajo=ArrayManoCopia[i].valorReal
				//Phaser.ArrayUtils.shuffle(ArrayManoCopia);
				Devuelve=ArrayManoCopia[i].name
				if (vProduccion==false)
				{
					//console.log("CG 23");
				}	
				////console.log("Devuelve "+vRonda+": "+"A11");
				//break;
			}
		}
	}	
	
	if (Devuelve==false)
	{
		ArrayManoCopia=Phaser.ArrayUtils.shuffle(ArrayManoCopia);
		ValorMasBajo=100;
		for (i=0;i<=ArrayManoCopia.length-1;i++)
		{
			if (ArrayManoCopia[i].valorReal<=ValorMasBajo)
			{
				ValorMasBajo=ArrayManoCopia[i].valorReal;
				Devuelve=ArrayManoCopia[i].name
				if (vProduccion==false)
				{
					//console.log("CG 24");
				}	
			}
		}	
		
		
		////console.log("Devuelve "+vRonda+": "+"A12");
	}

	
	//Si acaba en mi que tire la más alta, aunque tenga ya el Devuelvo calculado
	if (NumeroJugada==4)
	{
		ValorMasAlto=0;
	//if (Devuelve==false)
	//{
		for (i=0;i<=ArrayManoCopia.length-1;i++)
		{	
			Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)
			if (ArrayManoCopia[i].valorReal>ValorMasAlto && ArrayManoCopia[i].palo!=Triunfo &&
			
				(BazaYaEsNuestra==true)
				
				&& RompoCante(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)==false
				
			)
			
			{
				ValorMasAlto=ArrayManoCopia[i].valorReal
				//Phaser.ArrayUtils.shuffle(ArrayManoCopia);
				Devuelve=ArrayManoCopia[i].name
				if (vProduccion==false)
				{
					//console.log("CG 25");
				}	
				////console.log("Devuelve "+vRonda+": "+"A08");
				//break;
			}
		}
	//}
	}
	
	
	
	
	
	//log(false,"IA_ALEATORIONOTriunfo "+JugadorQueMueve +" "+Devuelve);
	return Devuelve;
	
}

function IA_DevuelveTriunfoMenorQue(ArrayManoCopia,MazoIA,JugadorQueMueve,ValorReal)
{
	var i;
	var Intentos=20;
	var Encontrado=false;
	var Devuelve=false;
	
	for (i=0;i<=Intentos;i++)
	{
		//Intento quitarme cartas que no san Triunfo, pero que no valgan mⳠde 10 puntos
		ArrayManoCopia=Phaser.ArrayUtils.shuffle(ArrayManoCopia);
		if (ArrayManoCopia[0].palo==Triunfo && ArrayManoCopia[0].valorReal<=ValorReal)
		{
			var Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[0].palo,ArrayManoCopia[0].valorReal)
			if (IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false)
			{
				Encontrado=true;
				Devuelve=ArrayManoCopia[0].name
				if (vProduccion==false)
				{
					//console.log("CG 25.1");
				}	
				break;
			}
		}
	}
	
	return Devuelve;
}

/*IA_AleatoriaSiTriunfo=function(MazoIA,JugadorQueMueve)
{
	var ArrayManoCopia=[];
	var i;
	var Intentos=20;
	var Encontrado=false;
	var Devuelve;
	
	ArrayManoCopia.splice(0,100);
	
	
	for (i=0;i<=MazoIA.length-1;i++){
		ArrayManoCopia.push(new CartaIA(MazoIA[i].palo,MazoIA[i].valorReal,MazoIA[i].cartilla.name, MazoIA[i].valorPuntuacion ));
	}
	
	
	Encontrado=IA_DevuelveTriunfoMenorQue(ArrayManoCopia,MazoIA,JugadorQueMueve,7)
	if (Encontrado==false)
	{
		Encontrado=IA_DevuelveTriunfoMenorQue(ArrayManoCopia,MazoIA,JugadorQueMueve,8)
	}
	if (Encontrado==false)
	{
		Encontrado=IA_DevuelveTriunfoMenorQue(ArrayManoCopia,MazoIA,JugadorQueMueve,9)
	}
	if (Encontrado==false)
	{
		Encontrado=IA_DevuelveTriunfoMenorQue(ArrayManoCopia,MazoIA,JugadorQueMueve,10)
	}
	if (Encontrado==false)
	{
		Encontrado=IA_DevuelveTriunfoMenorQue(ArrayManoCopia,MazoIA,JugadorQueMueve,11)
	}
		if (Encontrado==false)
	{
		Encontrado=IA_DevuelveTriunfoMenorQue(ArrayManoCopia,MazoIA,JugadorQueMueve,12)
	}
		if (Encontrado==false)
	{
		Encontrado=IA_DevuelveTriunfoMenorQue(ArrayManoCopia,MazoIA,JugadorQueMueve,12)
	}
	
	
	
	
	if (Encontrado==false)
	{
		for (i=0;i<=Intentos;i++)
		{
			//Intento quitarme cartas que no san Triunfo, pero que maten
			ArrayManoCopia=Phaser.ArrayUtils.shuffle(ArrayManoCopia);
			if (ArrayManoCopia[0].palo!=Triunfo)
			{
				var Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[0].palo,ArrayManoCopia[0].valorReal)
				if (IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false)
				{
					Encontrado=true;
					Devuelve=ArrayManoCopia[0].name
					break;
				}
			}
		}
	}

	if (Encontrado==false)
	{
		ArrayManoCopia=Phaser.ArrayUtils.shuffle(ArrayManoCopia);
		Devuelve=ArrayManoCopia[0].name
	}
	
	log(false,"IA_ALEATORIOSITriunfo "+JugadorQueMueve +" "+Devuelve);
	return Devuelve;
}*/

function MiCompiHaTiradoTriunfo(MazoCentral,NumeroJugada)
{
	var Devuelve=false;
	if (NumeroJugada==3)
	{
		if (MazoCentral.length>0)
		{
			if (MazoCentral[0].palo==Triunfo)
			{
				Devuelve=true;
			}
		}
	}
	return Devuelve;
}

function NumeroTriunfos(Mazo)
{
	var i;
	var Contador=0;
	var Devuelve=false;
	
	for (i=0;i<=Mazo.length-1;i++)
	{
		if (Mazo[i].palo==Triunfo)
		{
			Contador++;
		}
	}
	
		
	return Contador;
}

function EchaElTresSiLoTienesConOtro(Mano, ValorReal, Palo)
{
	//Sirve para que no se quede con el tres pelado. Obligo a tirarlo si tengo dos triunfos y muere en mi la baza
	var i;
	var Devuelve=true;
	
	if (NumeroTriunfos(Mano)==2)
	{
		if (Palo==Triunfo && ValorReal==11)
		{
			Devuelve=true;
		}
		else
		{
			for (i=0;i<=Mano.length-1;i++)
			{
				if (Mano[i].palo==Triunfo && Mano[i].valorReal==11 && ValorReal!=11 && Palo==Triunfo)
				{
					Devuelve=false;
				}
			}
		}
	

	}
	else
	{
		Devuelve=true;
	}
	
	//Si lo tengo pero en la mesa está el AS, no lo hecho
	for (i=0;i<=MazoCentral.length-1;i++)
	{
		if (MazoCentral[i].palo==Triunfo && MazoCentral[i].valorReal==12)
		{
			Devuelve=false;
			break;
		}
	}
	
	//////console.log("Validacion del tres: "+Devuelve);
	return Devuelve;
	
}

function IA_Sujeta(MazoIA,JugadorQueMueve,Criterio,NumeroJugada){
	//Con Triunfo Alto
	//Con Triunfo Bajo
	
	var u;
	var i;
	var ArrayFicticio=[];
	var ValorMasBajo=100;
	var ValorMasAlto=0;
	var Devuelve=false;
	var IntentaSujetar=false;
	var valorAnalizar;
	var ArrayManoCopia=[];
	var Intentos;
	var CartaMasBaja=0;
	var PaloMasBajo="";
	var PaloMasAlto="";
	var CartaMasAlta=0;
	var Encontrado=false;
	
	//////console.log("Sujeta");
	
	Devuelve=IA_Cargar(MazoIA,JugadorQueMueve,NumeroJugada);
	if (Devuelve==false)
	{
		
		
		
		
		if (  //(SonVueltas==false && RBazaEsNuestra(MazoCentral,JugadorQueMueve)==true) 
			//|| (SonVueltas==true && 
		RBazaEsNuestra(MazoCentral,JugadorQueMueve)==true && MiCompiHaTiradoTriunfo(MazoCentral,NumeroJugada)==true    )		
		{
			////console.log("Devuelve "+vRonda+": "+"A01");
			Devuelve=IA_Descarte(MazoIA,JugadorQueMueve,NumeroJugada);			
			//log(false,"LA Baza ES NUESTRA JUGADOR: "+JugadorQueMueve);
		}
		else
		{		
			
			ArrayManoCopia.splice(0,100);	

			for (i=0;i<=MazoIA.length-1;i++){
				ArrayManoCopia.push(new CartaIA(MazoIA[i].palo,MazoIA[i].valorReal,MazoIA[i].cartilla.name, MazoIA[i].valorPuntuacion ));
			}
			ArrayManoCopia=Phaser.ArrayUtils.shuffle(ArrayManoCopia);
			
			
			
			if (MazoCentral.length>0) //A un guiñote , otro
			{
				if (NumeroTriunfos(ArrayManoCopia)==0 && NumeroJugada==2 && MazoCentral[0].palo!=Triunfo && MazoCentral[0].valorReal>=11)
				{
					
					for (i=0;i<=ArrayManoCopia.length-1;i++)
					{
						var Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)
						if ( ArrayManoCopia[i].valorReal>=11)
						{
							Devuelve=Key;
							//////console.log("Devuelve "+vRonda+": "+"A02");
							break;
						}
					}
				}			
			}
			
			
			if (Devuelve==false)
			{
				if (NumeroJugada==4)
				{	
					Encontrado=false;
					CartaMasAlta=0;
					for (i=0;i<=ArrayManoCopia.length-1;i++)
					{
						if (ArrayManoCopia[i].palo!=Triunfo)
						{
							var Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)
							if ( IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false)						
							{
								if (ArrayManoCopia[i].valorReal>=CartaMasAlta)
								{
									CartaMasAlta=ArrayManoCopia[i].valorReal;
									PaloMasAlto=ArrayManoCopia[i].palo;
									Encontrado=true;								
								}
							}
						}
					}
					if (Encontrado==true)
					{
						Devuelve=IA_DevuelveKey(ArrayManoCopia,PaloMasAlto,CartaMasAlta)
						//////console.log("Devuelve "+vRonda+": "+"A03");
					}
				}
			}
			
			if (Devuelve==false)
			{
				
				//log(false,"LA Baza NO ES NUESTRA JUGADOR  "+JugadorQueMueve);
				//Investigo mi Triunfo m�s bajo
				
				if (NumeroJugada==4 || Criterio=="Bajo")
				{
					if ( NumeroTriunfos(MazoCentral)<2 ) //ningún guiñote vale dos triunfos
					{					
						Encontrado=false;
						CartaMasBaja=100;
						for (i=0;i<=ArrayManoCopia.length-1;i++)
						{
							if (ArrayManoCopia[i].palo==Triunfo)
							{
								var Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)
								if ( IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false
								
								&& 
									( (NumeroJugada!=4 && NumeroJugada!=3 ) || ( (NumeroJugada==4 || NumeroJugada==3 ) 
									&& EchaElTresSiLoTienesConOtro(ArrayManoCopia, ArrayManoCopia[i].valorReal, ArrayManoCopia[i].palo)==true )				
									)	//Para que no se guarde el 3 pelado
								)								
								{
									if (ArrayManoCopia[i].valorReal<=CartaMasBaja)
									{
										CartaMasBaja=ArrayManoCopia[i].valorReal;
										PaloMasBajo=ArrayManoCopia[i].palo;
										Encontrado=true;
									}
								}
							}
						}
						//////console.log("Encontrado "+Encontrado)
						if (Encontrado==true)
						{
							//////console.log("Ya lo creo ")
							Devuelve=IA_DevuelveKey(ArrayManoCopia,PaloMasBajo,CartaMasBaja)
							//////console.log("Devuelve "+vRonda+": "+"A04");
						}	
					}
				}
				else
				{
					if (Criterio=="Alto")
					{
						Encontrado=false;
						CartaMasAlta=0;
						for (i=0;i<=ArrayManoCopia.length-1;i++)
						{
							if (ArrayManoCopia[i].palo==Triunfo)
							{
								var Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)
								if ( IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false)						
								{
									if (ArrayManoCopia[i].valorReal>=CartaMasAlta)
									{
										CartaMasAlta=ArrayManoCopia[i].valorReal;
										PaloMasAlto=ArrayManoCopia[i].palo;
										Encontrado=true
									}
								}
							}
						}
						if (Encontrado==true)
						{
							Devuelve=IA_DevuelveKey(ArrayManoCopia,PaloMasAlto,CartaMasAlta)
							//////console.log("Devuelve "+vRonda+": "+"A05");
						}						
						
					}				
					
				}		
		
			}			
		}
	}
	
	if (Devuelve==false)
	{
		//////console.log("CG DESCARTE Ronda: "+vRonda+" jugada "+NumeroJugada);
		Devuelve=IA_Descarte(MazoIA,JugadorQueMueve,NumeroJugada);		
	}
	//log(false,"Y DEFINITAMENTE DEVUELVE.."+Devuelve)
	log(false,"IA_Sujeta "+JugadorQueMueve +" "+Devuelve);
	return Devuelve;
	
}

function IA_DeboCargar(JugadorQueMueve){
	var i;
	if (RBazaEsNuestra(MazoCentral,JugadorQueMueve)==true)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function IA_Cargar(MazoIA,JugadorQueMueve,NumeroJugada)
{
	var i;
	var ArrayManoCopia=[];
	var BazaYaEsNuestra=RBazaEsNuestra(MazoCentral,JugadorQueMueve);
	var Devuelve=false;
	ArrayManoCopia.splice(0,100);
	
	var ObjetoSituacion=SituacionPartida(MazoIA,JugadorQueMueve,NumeroJugada)
	var MarcadorRevisar=ObjetoSituacion.MarcadorRevisar;
	var MarcadorRevisarEllos=ObjetoSituacion.MarcadorRevisarEllos;
	var PuntosEnMesa=ObjetoSituacion.PuntosEnMesa;
	
	
	for (i=0;i<=MazoIA.length-1;i++){
		ArrayManoCopia.push(new CartaIA(MazoIA[i].palo,MazoIA[i].valorReal,MazoIA[i].cartilla.name, MazoIA[i].valorPuntuacion ));
	}
	
	ArrayManoCopia=Phaser.ArrayUtils.shuffle(ArrayManoCopia);
	
	if (NumeroJugada==4)
	{
	
		for (i=0;i<=ArrayManoCopia.length-1;i++)
		{
			var Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)
			if (  (BazaYaEsNuestra==true || IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false) && ArrayManoCopia[i].palo!=Triunfo && ArrayManoCopia[i].valorPuntuacion>=10  )
			{
				Encontrado=true;
				Devuelve=ArrayManoCopia[i].name
				//////console.log("Devuelve "+vRonda+": "+"A06");
				break;
			}
		}
		
	}
	else
	{
		//log(false,"DEBE METERSE AQUI PARA CARGAR "+JugadorQueMueve+" "+BazaYaEsNuestra);
		var Encontrado=false;
		
		if (BazaYaEsNuestra==true)
		{
			for (i=0;i<=MazoCentral.length-1;i++)
			{
				if (  (MazoCentral[i].palo==Triunfo && MazoCentral[i].valorPuntuacion>=4)
						||    (MazoCentral[i].palo==Triunfo && MazoCentral[i].valorPuntuacion>=2 && PuntosEnMesa<=15   )       )
				{
					Encontrado=true;
					break;
				}
			}
			
			if (Encontrado==true)
			{
				//log(false,"ES DE MI COMPA�ERO "+JugadorQueMueve);
				for (i=0;i<=ArrayManoCopia.length-1;i++)
				{
					
					if (  ArrayManoCopia[i].palo!=Triunfo && ArrayManoCopia[i].valorPuntuacion>=10  )
					{
						Encontrado=true;
						Devuelve=ArrayManoCopia[i].name
						//////console.log("Devuelve "+vRonda+": "+"A07");
						//log(false,"ESTA DEVUELVE "+JugadorQueMueve+ " "+ArrayManoCopia[i].valorReal+" de " + ArrayManoCopia[i].palo);
						break;
					}
				}
			}
			else
			{
				//log(false,"NO ES DE MI COMPA�ERO "+JugadorQueMueve);
			}
		}
		else
		{
			Devuelve=false;
		}
	}
	
	log(false,"IA_Cargar "+JugadorQueMueve +" "+Devuelve);
	
	return Devuelve;
}



	




function IA_DevuelveKey(MazoIA,palo,valorReal){
	var i;
	var Devuelve=false;
	
	for (i=0;i<=MazoIA.length-1;i++)
	{
		if (MazoIA[i].valorReal==valorReal && MazoIA[i].palo==palo)
		{
			if (MazoIA[i].name!=undefined)
			{
				Devuelve=MazoIA[i].name;
			}
			else
			{
				Devuelve=MazoIA[i].cartilla.name;
			}
			//log(false,"EL KEY ES"+Devuelve);
			break;
		}
	}
	
	return Devuelve;
}