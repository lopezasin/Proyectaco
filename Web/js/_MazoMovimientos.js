ReproducirSonido=function(Sonido)
{
	var Aleatorio;
	var lAudioTag=false;
	var SO=""
	var Reproducido=false;
	
	if (vSonidoOn==true)
	{
	
		lAudioTag=game_objeto.sound.usingAudioTag;
	
		if( window.plugins)
		{
			try
			{
				SO = device.platform;			
			}
			catch(e)
			{
				SO="Android";
			}
		}
		
		
		if( (window.plugins && window.plugins.NativeAudio && lAudioTag==true ) || SO.toUpperCase()=="IOS" )
		{
			switch (Sonido)
			{
			case '_Reparto' :
				window.plugins.NativeAudio.play('SndReparto');//SndReparto
				break;

			case '_Mesa' :
				window.plugins.NativeAudio.play('SndMesa');
				break;
			
			case '_Oros' :
				window.plugins.NativeAudio.play('Snd20Oros');
				break;	
			
			case '_Copas' :
				window.plugins.NativeAudio.play('Snd20Copas');
				break;		
			
			case '_Espadas' :
				window.plugins.NativeAudio.play('Snd20Espadas');
				break;		
			
			case '_Bastos' :
				window.plugins.NativeAudio.play('Snd20Bastos');
				break;		
				
			case '_Las40' :
				
				Aleatorio = Math.floor(Math.random() * 2) + 1  
				if (Aleatorio==1)
				{
					window.plugins.NativeAudio.play('SndLas40');
				}
				else
				{
					window.plugins.NativeAudio.play('SndLas40_2');
				}

				break;		
				
				
			case '_Idas' :
				//window.plugins.NativeAudio.play('SndIdas');
				Aleatorio = Math.floor(Math.random() * 2) + 1  
				if (Aleatorio==1)
				{
					window.plugins.NativeAudio.play('SndIdas');
				}
				else
				{
					window.plugins.NativeAudio.play('SndIdas2');
				}
				break;	

			case '_Vueltas' :
				//window.plugins.NativeAudio.play('SndVueltas');
				Aleatorio = Math.floor(Math.random() * 2) + 1  
				if (Aleatorio==1)
				{
					window.plugins.NativeAudio.play('SndVueltas');
				}
				else
				{
					window.plugins.NativeAudio.play('SndVueltas2');
				}
				break;	
				
		

			case '_Arrastro' :
				
				Aleatorio = Math.floor(Math.random() * 2) + 1  
				
				if (Aleatorio==1)
				{
					window.plugins.NativeAudio.play('SndArrastro');
				}
				if (Aleatorio==2)
				{
					window.plugins.NativeAudio.play('SndArrastro_2');
				}
				break;	
				
			
			case '_Bocarrana' :
				Aleatorio = Math.floor(Math.random() * 4) + 1  
				if (Aleatorio==1)
				{
					window.plugins.NativeAudio.play('SndBocarrana');
				}
				if (Aleatorio==2)
				{
					window.plugins.NativeAudio.play('SndMataBocarrana');
				}					
				break;	

			case '_Campeones' :
				window.plugins.NativeAudio.play('SndCampeones');
				break;		

			case '_Contar' :
				window.plugins.NativeAudio.play('SndContar');
				break;	

			case '_CotoTerminado' :
				window.plugins.NativeAudio.play('SndCotoTerminado');
				break;		

			case '_Espadilla' :
				Aleatorio = Math.floor(Math.random() * 10) + 1  

				if (Aleatorio<=8 && Reproducido==false)
				{
					window.plugins.NativeAudio.play('SndEspadilla');
					Reproducido=true;
				}
				if (Aleatorio<=9 && Reproducido==false)
				{
					window.plugins.NativeAudio.play('SndPuntos');
					Reproducido=true;
				}	
				if (Aleatorio<=10 && Reproducido==false)
				{
					window.plugins.NativeAudio.play('SndPajaro');
					Reproducido=true;
				}						
		
				break;		

			case '_Ore' :
				Aleatorio = Math.floor(Math.random() * 10) + 1  
				
				if (Aleatorio<=8 && Reproducido==false)
				{
					window.plugins.NativeAudio.play('SndOre');
					Reproducido=true;
				}
				if (Aleatorio<=9 && Reproducido==false)
				{
					window.plugins.NativeAudio.play('SndPuntos');
					Reproducido=true;
				}	
				if (Aleatorio<=10 && Reproducido==false)
				{
					window.plugins.NativeAudio.play('SndPajaro');
					Reproducido=true;
				}						
						
			
				break;	

			case '_OtraVezSera' :
					if (MarcadorPartidasNuestro==0 && MarcadorPartidasRival==1)
					{
						Aleatorio = Math.floor(Math.random() * 2) + 1  
						
						if (Aleatorio==1)
						{
							window.plugins.NativeAudio.play('SndPrimeraChicos');
						}
						else
						{
							window.plugins.NativeAudio.play('SndAPorEllos');
						}
						Reproducido=true;
					}
					
					if (MarcadorPartidasNuestro==0 && MarcadorPartidasRival==2)
					{
						window.plugins.NativeAudio.play('SndToro');
						Reproducido=true;
					}				
					
					Aleatorio = Math.floor(Math.random() * 3) + 1  
					
					if (Aleatorio==1 && Reproducido==false)
					{
						window.plugins.NativeAudio.play('SndOtraVezSera');
						Reproducido=true;
					}
					if (Aleatorio==2 && Reproducido==false)
					{
						window.plugins.NativeAudio.play('SndAPorEllos');
						Reproducido=true;
					}		
						
					if (Aleatorio==3  && Reproducido==false)
					{
						window.plugins.NativeAudio.play('SndChiflar');
						Reproducido=true;
					}						
								
				
				break;		

			case '_Tabazo' :
				Aleatorio = Math.floor(Math.random() * 2) + 1  
				if (Aleatorio==1)
				{
					window.plugins.NativeAudio.play('SndTabazo');
				}
				if (Aleatorio==2)
				{
					window.plugins.NativeAudio.play('SndTabazo_2');
				}	
				
				break;	

							
			case '_MatanzaCaballo' :
			
				Aleatorio = Math.floor(Math.random() * 3) + 1  
				if (Aleatorio==1)
				{
					window.plugins.NativeAudio.play('SndMatanzaCaballo');
				}
				
				break;			

			case '_Ultimas' :
				window.plugins.NativeAudio.play('SndUltimas');
				break;	
				
			case '_Grano' :
			
				Aleatorio = Math.floor(Math.random() * 2) + 1  
				if (Aleatorio==1)
				{
					window.plugins.NativeAudio.play('SndGrano');
				}				
				break;		
				
				case '_Puntos' :
				
					Aleatorio = Math.floor(Math.random() * 10) + 1  

					if (Aleatorio<=7 && Reproducido==false)
					{
						window.plugins.NativeAudio.play('SndPuntos');
						Reproducido=true;
					}	
					if (Aleatorio<=10 && Reproducido==false)
					{
						window.plugins.NativeAudio.play('SndPajaro');
						Reproducido=true;
					}	
		
					
					break;
				case '_Chatarrero' :
				
					Aleatorio = Math.floor(Math.random() * 3) + 1  
					if (Aleatorio==1)
					{
						window.plugins.NativeAudio.play('SndChatarrero');
					}	
							
					break;		

				case '_Suerte' :
				
					Aleatorio = Math.floor(Math.random() * 15) + 1  
					if (Aleatorio==1)
					{
						window.plugins.NativeAudio.play('SndGorrion');
					}	
					if (Aleatorio==2)
					{
						window.plugins.NativeAudio.play('SndGrijan');
					}	
					if (Aleatorio==3)
					{
						window.plugins.NativeAudio.play('SndMonja');
					}						
							
					break;		

				case '_Escupe' :
				
					Aleatorio = Math.floor(Math.random() * 2) + 1  
					if (Aleatorio==1)
					{
						window.plugins.NativeAudio.play('SndEscupe');
					}						
							
					break;							
					
				case '_GuinoteOtro' :
				
					Aleatorio = Math.floor(Math.random() * 1) + 1  
					if (Aleatorio==1)
					{
						window.plugins.NativeAudio.play('SndGuinoteOtro');
					}						
							
					break;	

				case '_Faldas' :
				
					Aleatorio = Math.floor(Math.random() * 2) + 1  
					if (Aleatorio==1)
					{
						window.plugins.NativeAudio.play('SndFaldas');
					}						
							
					break;						
		
			}		
			
		}
		else
		{
			switch (Sonido)
			{
				case '_Reparto' :
					SndReparto.play();
					break;

				case '_Mesa' :
					SndMesa.play();
					break;
				
				case '_Oros' :
					Snd20Oros.play();
					break;	
				
				case '_Copas' :
					Snd20Copas.play();
					break;		
				
				case '_Espadas' :
					Snd20Espadas.play();
					break;		
				
				case '_Bastos' :
					Snd20Bastos.play();
					break;		
					
				case '_Las40' :
					
					Aleatorio = Math.floor(Math.random() * 2) + 1  
					if (Aleatorio==1)
					{
						SndLas40.play();
					}
					else
					{
						SndLas40_2.play();
					}

					break;		
					
					
				case '_Idas' :
					//SndIdas.play();
					Aleatorio = Math.floor(Math.random() * 2) + 1  
					if (Aleatorio==1)
					{
						SndIdas.play();
					}
					else
					{
						SndIdas2.play();
					}
					break;	

				case '_Vueltas' :
					//SndVueltas.play();
					Aleatorio = Math.floor(Math.random() * 2) + 1  
					if (Aleatorio==1)
					{
						SndVueltas.play();
					}
					else
					{
						SndVueltas2.play();
					}
					break;	
					
			

				case '_Arrastro' :
					
					Aleatorio = Math.floor(Math.random() * 2) + 1  
					
					if (Aleatorio==1)
					{
						SndArrastro.play();
					}
					if (Aleatorio==2)
					{
						SndArrastro_2.play();
					}
					break;	
					
				
				case '_Bocarrana' :
					Aleatorio = Math.floor(Math.random() * 4) + 1  
					if (Aleatorio==1)
					{
						SndBocarrana.play();
					}
					if (Aleatorio==2)
					{
						SndMataBocarrana.play();
					}					
					break;	

				case '_Campeones' :
					SndCampeones.play();
					break;		

				case '_Contar' :
					SndContar.play();
					break;	

				case '_CotoTerminado' :
					SndCotoTerminado.play();
					break;		

				case '_Espadilla' :
					Aleatorio = Math.floor(Math.random() * 10) + 1  
					if (Aleatorio<=8 && Reproducido==false)
					{
						SndEspadilla.play();
						Reproducido=true;
					}
					if (Aleatorio<=9 && Reproducido==false)
					{
						SndPuntos.play();
						Reproducido=true;
					}	
					if (Aleatorio<=10 && Reproducido==false)
					{
						SndPajaro.play();
						Reproducido=true;
					}							
			
					break;		

				case '_Ore' :
					Aleatorio = Math.floor(Math.random() * 10) + 1  
					if (Aleatorio<=8  && Reproducido==false)
					{
						SndOre.play();
						Reproducido=true;
					}
					if (Aleatorio<=9  && Reproducido==false)
					{
						SndPuntos.play();
						Reproducido=true;
					}	
					if (Aleatorio<=10  && Reproducido==false)
					{
						SndPajaro.play();
						Reproducido=true;
					}					
				
					break;	

				case '_OtraVezSera' :
					
					
					
					if (MarcadorPartidasNuestro==0 && MarcadorPartidasRival==1)
					{
						Aleatorio = Math.floor(Math.random() * 2) + 1  
						
						if (Aleatorio==1)
						{
							SndPrimeraChicos.play();
						}
						else
						{
							SndAPorEllos.play();
						}
						Reproducido=true;
					}
					
					if (MarcadorPartidasNuestro==0 && MarcadorPartidasRival==2)
					{
						SndToro.play();
						Reproducido=true;
					}				
					
					Aleatorio = Math.floor(Math.random() * 3) + 1  
					
					if (Aleatorio==1 && Reproducido==false)
					{
						SndOtraVezSera.play();
						Reproducido=true;
					}
					if (Aleatorio==2 && Reproducido==false)
					{
						SndAPorEllos.play();
						Reproducido=true;
					}		
						
					if (Aleatorio==3  && Reproducido==false)
					{
						SndChiflar.play();
						Reproducido=true;
					}						
									
					break;		

				case '_Tabazo' :
					Aleatorio = Math.floor(Math.random() * 2) + 1  
					if (Aleatorio==1)
					{
						SndTabazo.play();
					}
					if (Aleatorio==2)
					{
						SndTabazo_2.play();
					}	
					
					break;	

								
				case '_MatanzaCaballo' :
				
					Aleatorio = Math.floor(Math.random() * 3) + 1  
					if (Aleatorio==1)
					{
						SndMatanzaCaballo.play();
					}
					
					break;		

				case '_Ultimas' :
					SndUltimas.play();
					break;	
					
				case '_Grano' :
				
					Aleatorio = Math.floor(Math.random() * 2) + 1  
					if (Aleatorio==1)
					{
						SndGrano.play();
					}				
					break;						
					
				case '_Puntos' :
				
					Aleatorio = Math.floor(Math.random() * 10) + 1  

					if (Aleatorio<=7 && Reproducido==false)
					{
						SndPuntos.play();
						Reproducido=true;
					}		
					if (Aleatorio<=10 && Reproducido==false)
					{
						SndPajaro.play();
						Reproducido=true;
					}						
					break;			

				case '_Chatarrero' :
				
					Aleatorio = Math.floor(Math.random() * 3) + 1  
					if (Aleatorio==1)
					{
						SndChatarrero.play();
					}	
							
					break;	

				case '_Suerte' :
				
					Aleatorio = Math.floor(Math.random() * 15) + 1  
					if (Aleatorio==1)
					{
						SndGorrion.play();
					}	
					if (Aleatorio==2)
					{
						SndGrijan.play();
					}	
					if (Aleatorio==3)
					{
						SndMonja.play();
					}					
							
					break;	
				
				case '_Escupe' :
				
					Aleatorio = Math.floor(Math.random() * 2) + 1  
					if (Aleatorio==1)
					{
						SndEscupe.play();
					}						
							
					break;			

				case '_GuinoteOtro' :
				
					Aleatorio = Math.floor(Math.random() * 1) + 1  
					if (Aleatorio==1)
					{
						SndGuinoteOtro.play();
					}						
							
					break;		

				case '_Faldas' :
				
					Aleatorio = Math.floor(Math.random() * 2) + 1  
					if (Aleatorio==1)
					{
						SndFaldas.play();
					}						
							
					break;							
			
			}
		}
	}
}

ArreglaReversos=function()
{
	var i;
	try
	{
		for (i=0;i<=MazoL.length-1;i++)
		{
			MostrarReverso(MazoL[i].cartilla);
		}
		for (i=0;i<=MazoR.length-1;i++)
		{
			MostrarReverso(MazoR[i].cartilla);
		}
		for (i=0;i<=MazoU.length-1;i++)
		{
			MostrarReverso(MazoU[i].cartilla);
		}		
		
	}
	catch(e)
	{		
	}
	
}



MueveAlTablero=function(sprite,LetraMazo,RondaRecibida,JugadorQueMueve){
	
	
	//console.log("Entra al tablero "+PartidaComenzada);
	if (PartidaComenzada==false || vRonda==1)
	{
		onSocketComenzadPartida(); // A veces se queda pillado con el tema de las desconexiones. AsÃ­ garantizo que si alguien tira, la partida comienza
	}
	
	if (PuntosFin()==true)
	{
		CrearTextoPuntuacion(); 
	}
	else
	{
	//Paro el reloj
	//if (MarcadorNuestro<PuntosGanar && MarcadorRival<PuntosGanar)
	//{
		if (ModoMultijugador==true)
		{
			timerturno.stop();
			textoContador.text="";
		}	

		//console.log("GRR Letra: "+LetraMazo+" "+JugadorQueMueve);
		//var s; 
		//CentroIrreal=((game_objeto.world.height-AltoCarta-AltoCartaEscalado)/2)+AnchoCarta;
		//alert(CentroIrreal+" H"+game_objeto.world.height+" AltoCarta "+AltoCarta+" AltoCarta Escalado "+AltoCartaEscalado+" Ancho*2"+AnchoCarta)
		GrupoCentral.add(sprite);
		PosicionCartas(LetraMazo);
		if (LetraMazo=="D"){
			var posX=posX_D;
			var posY=posY_D;
			var posAngle=sprite.angle+posAngle_D;		
		}
		
		if (LetraMazo=="U"){
			var posX=posX_U;
			var posY=posY_U;
			var posAngle=sprite.angle+posAngle_U;		
		}	
		
		if (LetraMazo=="L"){
			var posX=posX_L;
			var posY=posY_L;
			var posAngle=sprite.angle+posAngle_L;	
			
		}	

		if (LetraMazo=="R"){
			var posX=posX_R;
			var posY=posY_R;
			var posAngle=sprite.angle+posAngle_R;			
		}	
		
			//log(false,"Letra "+LetraMazo+" "+posX+" "+posY);
			//log(false,"vRonda para pasar "+RondaRecibida);
			
			
			//console.log("MUEVE AL TABLERO: ACABA DE MOVERSE LA CARTA DE "+JugadorQueMueve+" sprite: "+sprite.name+" Letra: "+LetraMazo);
			//console.log("a la posicion "+posX+" "+posY);
			DesHabilitarClick(sprite);
			ReproducirSonido('_Mesa');
			
			try
			{				
				tw1 = game_objeto.add.tween(sprite);
				tw1.to( {x:posX
				,y:posY,
				angle : posAngle
				}, vVelocidadCartasReordernar, EfectoTween1,false);		
				tw1.onComplete.add( function () {
					//ArreglaReversos();
					log(true,"MUEVE AL TABLERO: VA A LLAMAR A QUIEN GANA MANO "+JugadorQueMueve);
				QuienGanaMano(RondaRecibida,JugadorQueMueve); //Truco para poder pasar por parámetro
				
				}  );	

			}
			catch(e)
			{
				//console.log("Error "+e);
			}
			
			if (cuatrotres==false)
			{
				game_objeto.add.tween(sprite.scale).to( {x:1,y:1}, vVelocidadCartas, EfectoTween2,true);
			}
			else
			{
				game_objeto.add.tween(sprite.scale).to( {x:1.2,y:1.2}, vVelocidadCartas, EfectoTween2,true);
			}
			
			tw1.start();
			sprite.bringToTop();
	//}	
		

	}

};

MueveAlTablero_bufferEspecial7=function(RondaParam,turnoParam){

	
	//var AnchoCarta;
	//var s; 
	var sprite;
	var LetraMazo;
	var Mano;
	var i;

	if (PuntosFin()==true)
	{
		CrearTextoPuntuacion(); 
	}
	else
	{
		
	
		if (MazoCentralBufferEspecial7.length>0){
			
			MazoCentralBufferEspecial7.sort(sort_by('FechaHora', false, parseFloat)); //1.0.6

			if (DeboAceptar(MazoCentralBufferEspecial7[0].Ronda,MazoCentralBufferEspecial7[0].jugador)==true) //1.0.6
			{
					
					sprite=MazoCentralBufferEspecial7[0].cartilla;
					//AnchoCarta=sprite.width
					LetraMazo=DevuelveUbicacionCarta(MazoCentralBufferEspecial7[0].jugador);

					//SemaforoRondas.push(new ObjetoJugadoresRonda(MazoCentralBufferEspecial7[0].Ronda,MazoCentralBufferEspecial7[0].jugador) );
					if (ValidaMovimientoJugador(MazoCentralBufferEspecial7[0].Ronda,MazoCentralBufferEspecial7[0].jugador)==true) //1.0.6
					{
						
						MazoCentral.push(new Carta(MazoCentralBufferEspecial7[0].palo,MazoCentralBufferEspecial7[0].idCarta,MazoCentralBufferEspecial7[0].valor,MazoCentralBufferEspecial7[0].cartilla,null,MazoCentralBufferEspecial7[0].jugador,null,MazoCentralBufferEspecial7[0].FechaHora));
						
						
						//1.0.4 23/05/17
						if (MazoCentral.length>0 && ModoMultijugador==true)
						{
							MazoCentral.sort(sort_by('FechaHora', false, parseFloat));
						}	
					
						//console.log("Acabo de introducir "+MazoCentral[MazoCentral.length-1].palo+" "+MazoCentral[MazoCentral.length-1].valor);
						
						OcultarBotones();

					
						if (MazoCentral.length>0)
						{
							MazoCentral.sort(sort_by('FechaHora', false, parseFloat));
						}	
						
						if (LetraMazo=="D"){
							var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (4 *(AnchoCarta+ vSeparacion));
							var posY=CentroIrreal+( 1*(AnchoCarta+ vSeparacion));
							var posAngle=0;
							Mano=MazoD;
						}
						
						if (LetraMazo=="U"){
							var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (4 *(AnchoCarta+ vSeparacion));
							var posY=CentroIrreal-( 1*(AnchoCarta+ vSeparacion));
							var posAngle=0;
							Mano=MazoU;
						}	
						
						if (LetraMazo=="L"){
							var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (3 *(AnchoCarta+ vSeparacion));
							var posY=CentroIrreal;//+( 1*(AnchoCarta+ vSeparacion));
							var posAngle=sprite.angle-90;
							Mano=MazoL;
						}	

						if (LetraMazo=="R"){
							var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (5 *(AnchoCarta+ vSeparacion));
							var posY=CentroIrreal;//+( 1*(AnchoCarta+ vSeparacion));
							var posAngle=sprite.angle+90;
							Mano=MazoR;
						}	
						
						var JugadorBuffer=MazoCentralBufferEspecial7[0].jugador;
						var RondaBuffer=MazoCentralBufferEspecial7[0].Ronda;
						
						for (i=0;i<=Mano.length-1;i++){
							if (sprite.name==Mano[i].cartilla.name){
								break;
							}
						}		
						
						MostrarAnverso(Mano[i].cartilla);
						Mano.splice(i,1);
						ReubicarCartas(Mano,LetraMazo);	
						
						QuienGanaMano(RondaBuffer,JugadorBuffer);
						
						MazoCentralBufferEspecial7.splice(0,1);	
							DesHabilitarClick(sprite);
							ReproducirSonido('_Mesa');
							twEsp7 = game_objeto.add.tween(sprite);
							twEsp7.to( {x:posX
							,y:posY,
							angle : posAngle
							}, vVelocidadCartasReordernar, EfectoTween1);		
							
							if (RondaParam!=undefined){
								twEsp7.onComplete.add( function () {
									RobarCartas1(RondaParam,turnoParam);
								}  );		
							}	
							game_objeto.add.tween(sprite.scale).to( {x:1,y:1}, vVelocidadCartas, EfectoTween2,true);
							twEsp7.start();
					}
			}	

		}
		else{
			if (RondaParam!=undefined){
				RobarCartas1(RondaParam,turnoParam);
			}
		}
	}
};


DeboAceptar=function(RondaRecibida,JugadorQueMueve)
{
	var Devuelve=false;
	var i;
	var RondaActual=vRonda;
	var CuentaTiradas=0;
	
	//Nunca vendrÃ¡n rondas pasadas. Solo futuras
	
	if (RondaRecibida!=vRonda)
	{		
		Devuelve=false; 
	}
	else
	{
			if(JugadorQueMueve==vTurno) //misma ronda
			{
				Devuelve=true; 
			}
			else
			{
				Devuelve=false; 
			}
	}
	
	return Devuelve;
}

MueveAlTablero_buffer1=function(){

	
	//var AnchoCarta;
	//var s; 
	var sprite;
	var LetraMazo;
	var Mano;
	var i;

	if (PuntosFin()==true)
	{
		CrearTextoPuntuacion(); 
	}
	else
		{
		if (MazoCentralBuffer.length>0){
			
			
				MazoCentralBuffer.sort(sort_by('FechaHora', false, parseFloat)); //1.0.6
				
				if (DeboAceptar(MazoCentralBuffer[0].Ronda,MazoCentralBuffer[0].jugador)==true) //1.0.6
				{
				
				sprite=MazoCentralBuffer[0].cartilla;
				//AnchoCarta=sprite.width
				LetraMazo=DevuelveUbicacionCarta(MazoCentralBuffer[0].jugador);

				//SemaforoRondas.push(new ObjetoJugadoresRonda(MazoCentralBuffer[0].Ronda,MazoCentralBuffer[0].jugador) ); //1.0.6
				if (ValidaMovimientoJugador(MazoCentralBuffer[0].Ronda,MazoCentralBuffer[0].jugador)==true) //1.0.6
				{
					//SemaforoRondas.push(new ObjetoJugadoresRonda(vRonda,MazoCentralBuffer[0].jugador) );
					
					MazoCentral.push(new Carta(MazoCentralBuffer[0].palo,MazoCentralBuffer[0].idCarta,MazoCentralBuffer[0].valor,MazoCentralBuffer[0].cartilla,null,MazoCentralBuffer[0].jugador,null,MazoCentralBuffer[0].FechaHora));
					
					//1.0.4 23/05/17
					if (MazoCentral.length>0 && ModoMultijugador==true)
					{
						MazoCentral.sort(sort_by('FechaHora', false, parseFloat));
					}	
					
					//console.log("Acabo de introducir "+MazoCentral[MazoCentral.length-1].palo+" "+MazoCentral[MazoCentral.length-1].valor);
					
					OcultarBotones();
					
					GrupoCentral.add(sprite);
					
					if (LetraMazo=="D"){
						var posX=posX_D;
						var posY=posY_D;
						var posAngle=sprite.angle+posAngle_D;		
						Mano=MazoD;
					}
					
					if (LetraMazo=="U"){
						var posX=posX_U;
						var posY=posY_U;
						var posAngle=sprite.angle+posAngle_U;		
						Mano=MazoU;
					}	
					
					if (LetraMazo=="L"){
						var posX=posX_L;
						var posY=posY_L;
						var posAngle=sprite.angle+posAngle_L;	
						Mano=MazoL;
						
					}	

					if (LetraMazo=="R"){
						var posX=posX_R;
						var posY=posY_R;
						var posAngle=sprite.angle+posAngle_R;	
						Mano=MazoR;
					}	
							
						var JugadorBuffer=MazoCentralBuffer[0].jugador;
						var RondaBuffer=MazoCentralBuffer[0].Ronda;
						//RondaBuffer=vRonda; 1.0.6
						
						for (i=0;i<=Mano.length-1;i++){
							if (sprite.name==Mano[i].cartilla.name){
								//var posicionX=devuelveX("D",MazoD[i].posicion);
								//var posicionY=devuelveY("D",MazoD[i].posicion)
								break;
							}
						}		
						
						MostrarAnverso(MazoCentralBuffer[0].cartilla);
						
						Mano.splice(i,1);
						ReubicarCartas(Mano,LetraMazo);	
						
						QuienGanaMano(RondaBuffer,JugadorBuffer);
						
						MazoCentralBuffer.splice(0,1);	
							DesHabilitarClick(sprite);
							ReproducirSonido('_Mesa');
							tw1 = game_objeto.add.tween(sprite);
							tw1.to( {x:posX
							,y:posY,
							angle : posAngle
							}, vVelocidadCartasReordernar, EfectoTween1);		
							
							if (MazoCentralBuffer.length>0)
							{
								tw1.onComplete.add(MueveAlTablero_buffer2,this);
							}
							
							
							
							//MueveAlTablero_buffer2,this)	
							game_objeto.add.tween(sprite.scale).to( {x:1,y:1}, vVelocidadCartas, EfectoTween2,true);
							tw1.start();
							sprite.bringToTop();
				}
			
			}

		}
	}

};



MueveAlTablero_buffer2=function(){

	
	//var AnchoCarta;
	//var s; 
	var sprite;
	var LetraMazo;
	var i;
	var Mano;

	if (PuntosFin()==true)
	{
		CrearTextoPuntuacion(); 
	}
	else
	{
		
		if (MazoCentralBuffer.length>0){
			
		MazoCentralBuffer.sort(sort_by('FechaHora', false, parseFloat)); //1.0.6
	
		if (DeboAceptar(MazoCentralBuffer[0].Ronda,MazoCentralBuffer[0].jugador)==true) //1.0.6
		{	
				sprite=MazoCentralBuffer[0].cartilla;
				//AnchoCarta=sprite.width
				LetraMazo=DevuelveUbicacionCarta(MazoCentralBuffer[0].jugador);

				//SemaforoRondas.push(new ObjetoJugadoresRonda(MazoCentralBuffer[0].Ronda,MazoCentralBuffer[0].jugador) );
				//SemaforoRondas.push(new ObjetoJugadoresRonda(vRonda,MazoCentralBuffer[0].jugador) );
				//SemaforoRondas.push(new ObjetoJugadoresRonda(MazoCentralBuffer[0].Ronda,MazoCentralBuffer[0].jugador) ); //1.0.6
				if (ValidaMovimientoJugador(MazoCentralBuffer[0].Ronda,MazoCentralBuffer[0].jugador)==true) //1.0.6
				{
				
					MazoCentral.push(new Carta(MazoCentralBuffer[0].palo,MazoCentralBuffer[0].idCarta,MazoCentralBuffer[0].valor,MazoCentralBuffer[0].cartilla,null,MazoCentralBuffer[0].jugador,null,MazoCentralBuffer[0].FechaHora));
					
					
					//1.0.4 23/05/17
					if (MazoCentral.length>0 && ModoMultijugador==true)
					{
						MazoCentral.sort(sort_by('FechaHora', false, parseFloat));
					}	
					
					//console.log("Acabo de introducir "+MazoCentral[MazoCentral.length-1].palo+" "+MazoCentral[MazoCentral.length-1].valor);
					
					OcultarBotones();
					
					GrupoCentral.add(sprite);	
					if (LetraMazo=="D"){
						var posX=posX_D;
						var posY=posY_D;
						var posAngle=sprite.angle+posAngle_D;		
						Mano=MazoD;
					}
					
					if (LetraMazo=="U"){
						var posX=posX_U;
						var posY=posY_U;
						var posAngle=sprite.angle+posAngle_U;		
						Mano=MazoU;
					}	
					
					if (LetraMazo=="L"){
						var posX=posX_L;
						var posY=posY_L;
						var posAngle=sprite.angle+posAngle_L;	
						Mano=MazoL;
						
					}	

					if (LetraMazo=="R"){
						var posX=posX_R;
						var posY=posY_R;
						var posAngle=sprite.angle+posAngle_R;	
						Mano=MazoR;
					}	
					
					var JugadorBuffer=MazoCentralBuffer[0].jugador;
					var RondaBuffer=MazoCentralBuffer[0].Ronda;
					//RondaBuffer=vRonda; //1.0.6

						for (i=0;i<=Mano.length-1;i++)
						{
							if (sprite.name==Mano[i].cartilla.name)
							{
								//var posicionX=devuelveX("D",MazoD[i].posicion);
								//var posicionY=devuelveY("D",MazoD[i].posicion)
								break;
							}
						}		
						Mano.splice(i,1);
						ReubicarCartas(Mano,LetraMazo);	
					
					MostrarAnverso(MazoCentralBuffer[0].cartilla);	
					MazoCentralBuffer.splice(0,1);	
						
						DesHabilitarClick(sprite);
						QuienGanaMano(RondaBuffer,JugadorBuffer);
						
						ReproducirSonido('_Mesa');
						tw1 = game_objeto.add.tween(sprite);
						tw1.to( {x:posX
						,y:posY,
						angle : posAngle
						}, vVelocidadCartasReordernar, EfectoTween1);		
						
						if (MazoCentralBuffer.length>0)
						{
							//tw1.onComplete.add(
							//			function () {
							//	QuienGanaMano(RondaBuffer,JugadorBuffer,"BUFFER3"); //Truco para poder pasar por parámetro
							//	}
							tw1.onComplete.add(MueveAlTablero_buffer3,this);		
						}
						/*else
						{
							tw1.onComplete.add(
								function () {
									QuienGanaMano(RondaBuffer,JugadorBuffer,"BUFFER3"); //Truco para poder pasar por parámetro
								}
								);
						}*/
						//MueveAlTablero_buffer3,this)	
						game_objeto.add.tween(sprite.scale).to( {x:1,y:1}, vVelocidadCartas, EfectoTween2,true);
						tw1.start();
						sprite.bringToTop();
				}
			}
		}
	}
};


MueveAlTablero_buffer3=function(){

	
	//var AnchoCarta;
	//var s; 
	var sprite;
	var LetraMazo;
	var i;
	var Mano;

	if (PuntosFin()==true)
	{
		CrearTextoPuntuacion(); 
	}
	else
	{
		if (MazoCentralBuffer.length>0){
			
		MazoCentralBuffer.sort(sort_by('FechaHora', false, parseFloat)); //1.0.6
		
		if (DeboAceptar(MazoCentralBuffer[0].Ronda,MazoCentralBuffer[0].jugador)==true) //1.0.6
		{
		
				sprite=MazoCentralBuffer[0].cartilla;
				//AnchoCarta=sprite.width
				LetraMazo=DevuelveUbicacionCarta(MazoCentralBuffer[0].jugador);

				//SemaforoRondas.push(new ObjetoJugadoresRonda(MazoCentralBuffer[0].Ronda,MazoCentralBuffer[0].jugador) );
				//SemaforoRondas.push(new ObjetoJugadoresRonda(vRonda,MazoCentralBuffer[0].jugador) );
				//SemaforoRondas.push(new ObjetoJugadoresRonda(MazoCentralBuffer[0].Ronda,MazoCentralBuffer[0].jugador) ); //1.0.6
				if (ValidaMovimientoJugador(MazoCentralBuffer[0].Ronda,MazoCentralBuffer[0].jugador)==true) //1.0.6
				{
				
					MazoCentral.push(new Carta(MazoCentralBuffer[0].palo,MazoCentralBuffer[0].idCarta,MazoCentralBuffer[0].valor,MazoCentralBuffer[0].cartilla,null,MazoCentralBuffer[0].jugador,null,MazoCentralBuffer[0].FechaHora));
					
					//1.0.4 23/05/17
					if (MazoCentral.length>0 && ModoMultijugador==true)
					{
						MazoCentral.sort(sort_by('FechaHora', false, parseFloat));
					}	
					
					//console.log("Acabo de introducir "+MazoCentral[MazoCentral.length-1].palo+" "+MazoCentral[MazoCentral.length-1].valor);
					
					OcultarBotones();
					
					GrupoCentral.add(sprite);
					if (LetraMazo=="D"){
						var posX=posX_D;
						var posY=posY_D;
						var posAngle=sprite.angle+posAngle_D;		
						Mano=MazoD;
					}
					
					if (LetraMazo=="U"){
						var posX=posX_U;
						var posY=posY_U;
						var posAngle=sprite.angle+posAngle_U;		
						Mano=MazoU;
					}	
					
					if (LetraMazo=="L"){
						var posX=posX_L;
						var posY=posY_L;
						var posAngle=sprite.angle+posAngle_L;	
						Mano=MazoL;
						
					}	

					if (LetraMazo=="R"){
						var posX=posX_R;
						var posY=posY_R;
						var posAngle=sprite.angle+posAngle_R;	
						Mano=MazoR;
					}	
					
						var JugadorBuffer=MazoCentralBuffer[0].jugador;
						var RondaBuffer=MazoCentralBuffer[0].Ronda;
						//RondaBuffer=vRonda; 1.0.6
						
						for (i=0;i<=Mano.length-1;i++){
							if (sprite.name==Mano[i].cartilla.name){
								//var posicionX=devuelveX("D",MazoD[i].posicion);
								//var posicionY=devuelveY("D",MazoD[i].posicion)
								break;
							}
						}		
						Mano.splice(i,1);		
						ReubicarCartas(Mano,LetraMazo);	
						
						MostrarAnverso(MazoCentralBuffer[0].cartilla);
						MazoCentralBuffer.splice(0,1);	
						
						DesHabilitarClick(sprite);
						QuienGanaMano(RondaBuffer,JugadorBuffer);
						ReproducirSonido('_Mesa');
						
						tw1 = game_objeto.add.tween(sprite);
						tw1.to( {x:posX
						,y:posY,
						angle : posAngle
						}, vVelocidadCartasReordernar, EfectoTween1);		
						
						
						if (MazoCentralBuffer.length>0){
							//tw1.onComplete.add(
							//				function () {
							//		QuienGanaMano(RondaBuffer,JugadorBuffer,"BUFFER4"); //Truco para poder pasar por parámetro
							//		}
							//)
							
							tw1.onComplete.add(MueveAlTablero_buffer4,this);
						}
					/*	else
						{
							tw1.onComplete.add(
								function () {
									QuienGanaMano(RondaBuffer,JugadorBuffer,"BUFFER3"); //Truco para poder pasar por parámetro
								}
								);
						}*/
						//MueveAlTablero_buffer4,this)	
						game_objeto.add.tween(sprite.scale).to( {x:1,y:1}, vVelocidadCartas, EfectoTween2,true);
						tw1.start();
						sprite.bringToTop();
				}
			}		

		}
	}
};


MueveAlTablero_buffer4=function(){

	
	//var AnchoCarta;
	//var s; 
	var sprite;
	var LetraMazo;
	var i;
	var Mano;
	
	if (PuntosFin()==true)
	{
		CrearTextoPuntuacion(); 
	}
	else
	{
		if (MazoCentralBuffer.length>0){
			
		MazoCentralBuffer.sort(sort_by('FechaHora', false, parseFloat)); //1.0.6
		
		if (DeboAceptar(MazoCentralBuffer[0].Ronda,MazoCentralBuffer[0].jugador)==true) //1.0.6
		{
					
				sprite=MazoCentralBuffer[0].cartilla;
				//AnchoCarta=sprite.width
				LetraMazo=DevuelveUbicacionCarta(MazoCentralBuffer[0].jugador);

				//SemaforoRondas.push(new ObjetoJugadoresRonda(vRonda,MazoCentralBuffer[0].jugador) );
				SemaforoRondas.push(new ObjetoJugadoresRonda(MazoCentralBuffer[0].Ronda,MazoCentralBuffer[0].jugador) ); //1.0.6
				
				MazoCentral.push(new Carta(MazoCentralBuffer[0].palo,MazoCentralBuffer[0].idCarta,MazoCentralBuffer[0].valor,MazoCentralBuffer[0].cartilla,null,MazoCentralBuffer[0].jugador,null,MazoCentralBuffer[0].FechaHora));
			
				//1.0.4 23/05/17
				if (MazoCentral.length>0 && ModoMultijugador==true)
				{
					MazoCentral.sort(sort_by('FechaHora', false, parseFloat));
				}	
			
				//console.log("Acabo de introducir "+MazoCentral[MazoCentral.length-1].palo+" "+MazoCentral[MazoCentral.length-1].valor);
				
				OcultarBotones();
				
				GrupoCentral.add(sprite);
				if (LetraMazo=="D"){
					var posX=posX_D;
					var posY=posY_D;
					var posAngle=posAngle_D;		
					Mano=MazoD;
				}
				
				if (LetraMazo=="U"){
					var posX=posX_U;
					var posY=posY_U;
					var posAngle=posAngle_U;		
					Mano=MazoU;
				}	
				
				if (LetraMazo=="L"){
					var posX=posX_L;
					var posY=posY_L;
					var posAngle=posAngle_L;	
					Mano=MazoL;
					
				}	

				if (LetraMazo=="R"){
					var posX=posX_R;
					var posY=posY_R;
					var posAngle=posAngle_R;	
					Mano=MazoR;
				}	
				
				var JugadorBuffer=MazoCentralBuffer[0].jugador;
				var RondaBuffer=MazoCentralBuffer[0].Ronda;
				//RondaBuffer=vRonda; 1.0.6
				
					for (i=0;i<=Mano.length-1;i++){
						if (sprite.name==Mano[i].cartilla.name){
							//var posicionX=devuelveX("D",MazoD[i].posicion);
							//var posicionY=devuelveY("D",MazoD[i].posicion)
							break;
						}
					}		
					Mano.splice(i,1);		
					ReubicarCartas(Mano,LetraMazo);	

				MostrarAnverso(MazoCentralBuffer[0].cartilla);	
				MazoCentralBuffer.splice(0,1);	
					
					DesHabilitarClick(sprite);
					
					ReproducirSonido('_Mesa');
					tw1 = game_objeto.add.tween(sprite);
					tw1.to( {x:posX
					,y:posY,
					angle : posAngle
					}, vVelocidadCartasReordernar, EfectoTween1);		
					
					
					//tw1.onComplete.add(
					//				function () {
					//		QuienGanaMano(RondaBuffer,JugadorBuffer); //Truco para poder pasar por parámetro
					//		}
					//)
					
					tw1.onComplete.add(
							function () {
								QuienGanaMano(RondaBuffer,JugadorBuffer,"BUFFER3"); //Truco para poder pasar por parámetro
							}
							);
					
					//QuienGanaMano,this)	
					game_objeto.add.tween(sprite.scale).to( {x:1,y:1}, vVelocidadCartas, EfectoTween2,true);
					tw1.start();
					sprite.bringToTop();
			}	

		}
	}
};

QuienGanaManoResultado=function(JugadorQueMueve){
var valorSuperar;
var i;
var vaGanando;
var QuienEsMiIzquierda1;
var QuienEsMiIzquierda2;
var QuienEsMiIzquierda3;	
var Orden1;
var Orden2;
var Orden3;
	
	//PELIGROSO
	if (ModoMultijugador==false)
	{
		if (MazoCentral.length>0){
			QuienEsMiIzquierda1=JugadorQueMueve-1;
			if (QuienEsMiIzquierda1==0){
				QuienEsMiIzquierda1=4;
			}
			Orden1=3;
			
				
			QuienEsMiIzquierda2=QuienEsMiIzquierda1-1;
			if (QuienEsMiIzquierda2==0){
				QuienEsMiIzquierda2=4;
			}
			Orden2=2;
			
			
			QuienEsMiIzquierda3=QuienEsMiIzquierda2-1;
			if (QuienEsMiIzquierda3==0){
				QuienEsMiIzquierda3=4;
			}
			Orden3=1;
			
			
			for (i=0;i<=MazoCentral.length-1;i++)
			{
				if (MazoCentral[i].jugador==QuienEsMiIzquierda1)
				{
					MazoCentral[i].FechaHora=Orden1;
				}
				if (MazoCentral[i].jugador==QuienEsMiIzquierda2)
				{
					MazoCentral[i].FechaHora=Orden2;
				}
				if (MazoCentral[i].jugador==QuienEsMiIzquierda3)
				{
					MazoCentral[i].FechaHora=Orden3;
				}		
				
				if (MazoCentral[i].jugador==JugadorQueMueve)
				{
					MazoCentral[i].FechaHora=4;
				}
				
			}
			
			MazoCentral.sort(sort_by('FechaHora', false, parseFloat));
		}
	}
	//PELIGROSO
	if (JugadorQueMueve==SoyElJugador)
	{
		ColorManoPosibles();
	}
	MostrarOcultarBotonCante();
	
	//01/01/2017 LO HE COMENTADO: FALLABA SI MATABA EL ULTIMO Y PINCHABAS ANTES DE QUE SE RECOGIERAN LAS CARTAS
	/*if (MazoCentral.length>0)
	{
				//MazoCentral.sort(sort_by('FechaHora', false, parseFloat));
				vTurno= (MazoCentral[MazoCentral.length-1].jugador)+1;	
				for (i=0;i<=MazoCentral.length-1;i++)
				{
					
					//console.log("vTurno DE QuienGanaManoRESULTADO "+ (MazoCentral[i].jugador+1)+" "+MazoCentral[i].FechaHora);
				}
				
				if (vTurno==5){
					vTurno=1;
				}
			

				
				log(true,"vTurno trucado "+vTurno);

	}*/
	

					
}

QuienGanaMano=function(RondaRecibida,JugadorQueMueve,JugadaDesdeBuffer){
	var valorSuperar;
	var vaGanando;
	var paloSuperar;
	var  spriteGanador;
	var SituacionRara=false;
	var ValorMano=0;
	var RondaMano;
	var i;
	var JugadorMano;
	
	if (RondaRecibida==undefined){
		log(true,"vRonda Recibida por mí mismo "+vRonda+" Jugador: "+SoyElJugador);
		RondaMano=vRonda;
		JugadorMano=SoyElJugador
	}	
	else{
		log(true,"vRonda Recibida por parámetro "+RondaRecibida+" Jugador: "+JugadorQueMueve);
		RondaMano=RondaRecibida;
		JugadorMano=JugadorQueMueve
	}
	
	
	
	//if (1==1)
	if (PuntosFin()==true)
	{
		CrearTextoPuntuacion(); 
	}
	else
	{
	//ape if (ValidaMovimientoJugador(RondaMano,JugadorMano)==true){
		
		
		
			var Conteo=0;
			/*for (var i=0;i<=SemaforoRondas.length-1;i++){
				if (SemaforoRondas[i].Ronda>UltimaRonda){
					UltimaRonda=SemaforoRondas[i].Ronda;
				}
			}
			*/
			for (var i=0;i<=SemaforoRondas.length-1;i++){
				if (SemaforoRondas[i].Ronda==RondaMano){
					Conteo++;
				}
			}
			
			log(true,"Conteo en la vRonda "+Conteo);
			
		/*	if (Conteo==4){
				RondaJugada.push(RondaMano);
				vRonda++;
				RondaMano=vRonda;
				//log(false,"He cambiado a vRonda "+vRonda);
				log(false,"Jugadas en esta vRonda... ");
				for (var i=0;i<=RondaJugada.length-1;i++){
					log(false,RondaJugada[i]+",");
				}
			}*/

			
		log(true,"ANTES LIMPIAR MESA LIMPIAR MESA"+MazoCentral.length+" "+Conteo);
		//ape if (MazoCentral.length>=4 && Conteo==4){
			

		//1.0.4 23/05/17
		if (MazoCentral.length>0 && ModoMultijugador==true)
		{
			MazoCentral.sort(sort_by('FechaHora', false, parseFloat));
		}		
			
		
		if (MazoCentral.length>=4 ){
		log(true,"DEBE LIMPIAR MESA");
		timer.stop; //Mucho miedo 29/04/2017

				vRonda++;
				RondaMano=vRonda;
				
				if (vRonda==4)
				{
					MensajeError("Â¡Â¡ de Ãºltimas !!")
					ReproducirSonido("_Ultimas");
				}
			
			MazoCentralApoyo.splice(0,100);
			for (i=0;i<=MazoCentral.length-1;i++)
			{
				MazoCentralApoyo.push(new Carta(MazoCentral[i].palo,MazoCentral[i].idCarta,MazoCentral[i].valor,MazoCentral[i].cartilla,
					MazoCentral[i].posicion,MazoCentral[i].jugador,MazoCentral[i].Ronda,MazoCentral[i].FechaHora  )	);					
			}
			
			//1.0.6 Antes borraba mÃ¡s
			MazoCentral.splice(0,4);
			
			for (i=0;i<=3;i++)
			
			{
				if (i==0){
					valorSuperar=MazoCentralApoyo[i].valorReal;
					paloSuperar=MazoCentralApoyo[i].palo;
					vaGanando=MazoCentralApoyo[i].jugador;
					spriteGanador=MazoCentralApoyo[i].cartilla
				}
			
				if ( (MazoCentralApoyo[i].valorReal>valorSuperar && MazoCentralApoyo[i].palo==paloSuperar)
					|| (  MazoCentralApoyo[i].palo==Triunfo && paloSuperar!=Triunfo )
				)
				{

				valorSuperar=MazoCentralApoyo[i].valorReal;
				paloSuperar=MazoCentralApoyo[i].palo;
				vaGanando=MazoCentralApoyo[i].jugador;
				spriteGanador=MazoCentralApoyo[i].cartilla
				
				}
				
				ValorMano=ValorMano+MazoCentralApoyo[i].valorPuntuacion

			}
			
			vTurno=vaGanando;
			MuestraTurno();
			JugadorMano=vTurno;
			ContadorTurno(RondaMano);
			
			
			log(true,"vTurno VA GANANDO "+vTurno);
			
			if (SoyElJugador==1){
				if (vaGanando==1){
					BazaNuestraGlobal=true;
				}
				if (vaGanando==2){
					BazaNuestraGlobal=false;
				}
				if (vaGanando==3){
					BazaNuestraGlobal=true;
				}
				if (vaGanando==4){
					BazaNuestraGlobal=false;
				}			
			}
			if (SoyElJugador==2){
				if (vaGanando==2){
					BazaNuestraGlobal=true;
				}
				if (vaGanando==3){
					BazaNuestraGlobal=false;
				}
				if (vaGanando==4){
					BazaNuestraGlobal=true;
				}
				if (vaGanando==1){
					BazaNuestraGlobal=false;
				}			
			}
			if (SoyElJugador==3){
				if (vaGanando==3){
					BazaNuestraGlobal=true;
				}
				if (vaGanando==4){
					BazaNuestraGlobal=false;
				}
				if (vaGanando==1){
					BazaNuestraGlobal=true;
				}
				if (vaGanando==2){
					BazaNuestraGlobal=false;
				}			
			}
			if (SoyElJugador==4){
				if (vaGanando==4){
					BazaNuestraGlobal=true;
				}
				if (vaGanando==1){
					BazaNuestraGlobal=false;
				}
				if (vaGanando==2){
					BazaNuestraGlobal=true;
				}
				if (vaGanando==3){
					BazaNuestraGlobal=false;
				}			
			}		
			

			var ContinuaJugando;
			if (BazaNuestraGlobal==true){
				ContinuaJugando=ActualizaMarcador("N",	ValorMano);			
			}
			else{
				ContinuaJugando=ActualizaMarcador("R",	ValorMano);	
			}	
			
			log(true,"Marcador QuienGanaMano: "+MarcadorNuestro+" "+MarcadorRival+" "+ContinuaJugando);
			
			if (ContinuaJugando==true)
			{
				
				DesHabilitarClick(spriteGanador);
				
				//Vibración
				//if (MazoCentral.length==4)
				//{
				//	log(true,"TABAZO "+vaGanando+" "+MazoCentral[3].jugador);
				//}
					
				
				if (ValorMano>=21 && MazoCentralApoyo[3].valorPuntuacion==11 && vaGanando==MazoCentralApoyo[3].jugador) 
				{
					ReproducirSonido("_Tabazo");
					//addquake();
					//if("vibrate" in window.navigator) {
					if(navigator.vibrate) {
						window.navigator.vibrate(300);
					}
					
					// define the camera offset for the quake
					var margin = 50;
					// and set the world's bounds according to the given margin
					var x = -margin;
					var y = -margin;

					var w = game_objeto.world.width + margin * 2;
					var h = game_objeto.world.height + margin * 2;
					game_objeto.world.setBounds(x, y, w, h);

					// we make sure camera is at position (0,0)
					game_objeto.world.camera.position.set(0);

					var rumbleOffset = 20;

					// we need to move according to the camera's current position
					var properties = {
					x: game_objeto.camera.x - rumbleOffset
					};

					// we make it a relly fast movement
					var duration = 50;
					// because it will repeat
					var repeat = 3;
					// we use bounce in-out to soften it a little bit
					var ease = Phaser.Easing.Bounce.InOut;
					var autoStart = false;
					// a little delay because we will run it indefinitely
					var delay = 0;
					// we want to go back to the original position
					var yoyo = true;

					var quake = game_objeto.add.tween(game_objeto.camera)
					.to(properties, duration, ease, autoStart, delay, repeat, yoyo);
				  
					// we're using this line for the example to run indefinitely
					quake.onComplete.addOnce(
						function()
						{
							quakeEnd();
							tw1 = game_objeto.add.tween(spriteGanador.scale);
							tw1.to( {x:vEscalaGanadora,y:vEscalaGanadora}		
							, vVelocidadCartasReordernar, EfectoTween1,false,TiempoCartaGanadora);
							//tw1.onComplete.add(EfectosHacerPequenas,this)
								log(false,"¿LAS HARA PEQUEÑAS?");
							tw1.onComplete.add(
								function () {
									EfectosHacerPequenas(RondaMano,JugadorMano); //Truco para poder pasar por parámetro
									spriteGanador.bringToTop();
								}
							);				
							tw1.start();
							
						}

					);

					// let the earthquake begins
					quake.start();


					
					
				}
				else
				{
					var Reproducido=false;
					
					 if (vaGanando==MazoCentralApoyo[3].jugador && MazoCentralApoyo[3].valorPuntuacion==2 && vRonda<=5 && vRonda!=4 && ValorMano<=10)
					 {
						 ReproducirSonido("_MatanzaCaballo");
						 Reproducido=true;
					 }
		
					 if (vaGanando==MazoCentralApoyo[3].jugador && MazoCentralApoyo[3].valorPuntuacion==11 && vRonda<=5 && MazoCentralApoyo[3].palo=="oros" && Reproducido==false && vRonda!=4)
					 {
						 ReproducirSonido("_Ore");
						 Reproducido=true;
					 }	
					 
					 if (vaGanando==MazoCentralApoyo[3].jugador && MazoCentralApoyo[3].valorPuntuacion==11 && vRonda<=5 && MazoCentralApoyo[3].palo=="espadas" && Reproducido==false && vRonda!=4)
					 {
						 ReproducirSonido("_Espadilla");
						 Reproducido=true;
					 }		

					 if (vaGanando==MazoCentralApoyo[3].jugador && MazoCentralApoyo[3].valorPuntuacion>=10 &&  ValorMano<=20  &&  ValorMano>11 && vRonda<=5  && Reproducido==false && vRonda!=4 && SonVueltas==false)
					 {
						 ReproducirSonido("_Puntos");
						 Reproducido=true;
					 }
					 
					 if (vaGanando==MazoCentralApoyo[3].jugador && MazoCentralApoyo[3].valorPuntuacion<10 && ValorMano<=14  && vRonda<=5  && Reproducido==false && vRonda!=4 && SonVueltas==false)
					 {
						 ReproducirSonido("_Chatarrero");
						 Reproducido=true;
					 }			

					 if ( (vaGanando==MazoCentralApoyo[0].jugador || vaGanando==MazoCentralApoyo[2].jugador)  && MazoCentralApoyo[3].valorPuntuacion>=10 && vRonda>=6  && Reproducido==false && vRonda!=4)
					 {
						 ReproducirSonido("_Escupe");
						 Reproducido=true;
					 }						 
					 
					if (
					
						(
						(SoyElJugador==MazoCentralApoyo[1].jugador && BazaNuestraGlobal==true  && MazoCentralApoyo[3].valorPuntuacion>=2 && MazoCentralApoyo[3].valorPuntuacion<=4 && vRonda<=3)
						||
						(SoyElJugador==MazoCentralApoyo[3].jugador && BazaNuestraGlobal==true  && MazoCentralApoyo[3].valorPuntuacion>=2 && MazoCentralApoyo[3].valorPuntuacion<=4 && vRonda<=3)			
						)  && Reproducido==false
					)
					{
						ReproducirSonido("_Grano");
						Reproducido=true;
					}
					
					  if (vRonda==3  && Reproducido==false)
					 {
						 ReproducirSonido("_Suerte");
						 Reproducido=true;
					 }		
				 
					
					tw1 = game_objeto.add.tween(spriteGanador.scale);
					tw1.to( {x:vEscalaGanadora,y:vEscalaGanadora}		
					, vVelocidadCartasReordernar, EfectoTween1,false,TiempoCartaGanadora);
					//tw1.onComplete.add(EfectosHacerPequenas,this)
						log(false,"¿LAS HARA PEQUEÑAS?");
					tw1.onComplete.add(
						function () {
							EfectosHacerPequenas(RondaMano,JugadorMano); //Truco para poder pasar por parámetro
							spriteGanador.bringToTop();
						}
					);				
					tw1.start();
					
				}
				
			}
			
		
			
			
			//log(false,"Gana "+vaGanando);
			
			
			

			
		}
		else
		{
			
			//var timerCalculaTurno = game_objeto.time.create(false);
			//timerCalculaTurno.add(1500, function() { //No me gusta pero si quitaba el 1 y el 4 fallaba. Es como que no le daba tiempo
			
				
				
				
				////
				
			

				
				////
				
				
				
				
				//if (MazoCentral.length>=3)
				//{
					
				//	ReproducirSonido("_MatanzaCaballo");
				//}
				
				if (MazoCentral.length>0)
				{
					var Reproducido=false;
					log(true,"REAL "+MazoCentral[MazoCentral.length-1].valorReal+" "+ MazoCentral[MazoCentral.length-1].palo)
					 if (MazoCentral[MazoCentral.length-1].valorReal==5 && vRonda<=5 && MazoCentral[MazoCentral.length-1].palo=="bastos"  && vRonda<=4)
					 {
						 ReproducirSonido("_Bocarrana");
						 Reproducido=true;
					 }			
					 
					 if (MazoCentral.length==2)
					 {
						 if ( MazoCentral[0].valorPuntuacion>=10 &&  MazoCentral[0].palo!=Triunfo && MazoCentral[1].valorPuntuacion>=10 &&  MazoCentral[1].palo!=Triunfo && vRonda<=4 && Reproducido==false)
						 {
							 ReproducirSonido("_GuinoteOtro");
							 Reproducido=true;
						 }
					 }	
					 
					  if ( MazoCentral[MazoCentral.length-1].valorPuntuacion==2 &&  MazoCentral[MazoCentral.length-1].palo==Triunfo && vRonda>=5 && Reproducido==false)
					  {
						  ReproducirSonido("_Faldas");
						  Reproducido=true;
					  }
					  

					//else
					//{
						if (MazoCentral.length==1)
						{
							if ( (MazoCentral[0].palo==Triunfo ||  MazoCentral[0].valorPuntuacion==11) && vRonda==5)
							{
								ReproducirSonido("_Arrastro");
							}
						}
					//}
				}
				
				
			
				CalculaTurno(RondaMano); 
			
				log(true,"CAMBIO vTurno A" + vTurno);	
			
				if (ModoMultijugador==false)
				{
					//log(true,"IA Desde QuienGanaMano");


						
						
						var TiempoPensarTirada=TiempoPensar(vTurno);

						
						timer.stop(); //04/17
						timer.add(TiempoPensarTirada, function(){
							timer.stop();
						
							IA(vTurno);
						} );
						timer.start();		


						
					//}
				}
				else
				{
					if (MazoCentralBuffer.length>0)
					{
						MueveAlTablero_buffer1();
					}
				}
			
			
			
			//} );
			//timerCalculaTurno.start();
			
			

		

							

		}
		
		//if  (JugadorQueMueve==SoyElJugador)
		//{
			ColorManoPosibles();
		//}
		MostrarOcultarBotonCante();
	
	
		/*log(true,"ContadorTurno Desde QuienGanaMano");
		ContadorTurno(RondaMano);*/
	
	}
	//else
	//{
	//	log(true,"No se puede mover para vRonda "+RondaMano+" y jugador "+JugadorMano);
	//}
	
	
	//log(false,"Q INTENTA METER MANO");
	/*//console.log("Desde QuienGanaMano")
	HeredandoJugadores(RondaMano);*/
	
	
	

}


EstaConectado=function(JugadorValidar)
{
	
	var i;
	var Devuelve=true
	for (i=0;i<=ArrayJugadoresDesconectados.length-1;i++)
	{
		//console.log("Desconectado "+QuienTomaElControl);	
		if (JugadorValidar==ArrayJugadoresDesconectados[i].Jugador)
		{
			Devuelve=false;
			break;
		}
	}
	
	return Devuelve;
}

TiempoPensar=function(JugadorValidar)
{
	var SegundosPensar;
	if( EstaConectado(JugadorValidar)==true )
	{
		if (ModoMultijugador==false)
		{
			SegundosPensar=TiempoIA;	
		}
		else
		{
			SegundosPensar=0.1;	
		}
		
	}
	else
	{
		SegundosPensar=TiempoIA;	
	}
	
	if( (MazoCentral.length>=4 || MazoCentralApoyo.length>=4) && vRonda<=4)
	{
		SegundosPensar=SegundosPensar+2000;
	}
						
	//SegundosPensar=5000;		
	return SegundosPensar;
}					
					
IADesconectados=function(RondaMano)
{
	var i;
	var LanzaIA=false;
	var SumaTiempo=0;
	
	
	//1.0.4 Mierda
	if (ModoMultijugador==false)
	{
		LanzaIA=true;
	}

	//console.log("IA_DESCONECTADOS");
	//var TiempoPensarTirada=TiempoIA+SumaTiempo;
	var TiempoPensarTirada=TiempoPensar(vTurno);
	//1.0.4 quito timer
	//rec var TimerDesc=game_objeto.time.create(false);
	//rec TimerDesc.stop(); //04/17		

	if (timer.duration.toFixed(0)<=0)
	{
		timer.add(TiempoPensarTirada, function()
		{

			//TimerDesc.stop();
			timer.stop();
			//1.0.4 uno por otro		
			RecalculaDesconectados();
			//console.log("Llamada 2");
			//CalculaControl();
			
			//console.log("deberÃ­a tirar"+vTurno);
			//console.log("Soy "+SoyElJugador);
			//console.log("El control lo tiene "+QuienTomaElControl);
			//console.log("Quien Toma el Control :"+QuienTomaElControl+" Turno: "+vTurno+" Soy"+SoyElJugador+" "+ArrayJugadoresDesconectados.length);
			
			//console.log("Desconectados: "+ArrayJugadoresDesconectados.length);
			
			for (i=0;i<=ArrayJugadoresDesconectados.length-1;i++)
			{
				//console.log("Desconectado "+ArrayJugadoresDesconectados[i].Jugador+" "+SoyElJugador+" "+QuienTomaElControl+" "+vTurno);	
				if (vTurno==ArrayJugadoresDesconectados[i].Jugador && SoyElJugador==QuienTomaElControl)
				{
							//console.log("Tirando "+RondaMano+ " "+vTurno+" "+PartidaComenzada);
						//console.log("Comenzada :"+PartidaComenzada);
						if (PartidaComenzada==true)
						{
								//console.log("Venga Tira!! "+RondaMano+ " "+vTurno);
								//console.log("BLOQUEO DESDE SERVER RAPIDO (desconectados) "+vTurno+" "+RondaMano);
							//}
							
							LanzaIA=true;
							

							break;					
						}
			
				}	
				
			}	
			
			if (LanzaIA==false){
			
				return true;
			}
			else
			{
				//console.log("IA DESDE desconectados");
				//timer.stop(); //Mucho miedo 29/04/2017
				//TimerDesc.stop();
				//console.log("AQUI");
				
				IA(vTurno);
				return false;
			

				
				
			}
		
		});
		timer.start();	
	}
}

ContadorTurno=function(RondaMano)
{
	var TiempoParaturno;
	
	if (ModoMultijugador==true && vConContador==true)
		{	
			
			//console.log("** Contador Turno");
			IADesconectados( RondaMano ); //10/02/2017
			
			
			
			//Tiempoturno=5;	Hago esto para no modificar el Comenzad Partida. Quiero que el contador comience pero le sumo segundos para compensar el tiempo de reparto.
			if (vRonda==1 && MazoCentral.length==0)
			{
				TiempoParaturno=Tiempoturno; //ILA 20170128 TiempoParaturno=Tiempoturno; 
			}
			else{
				TiempoParaturno=Tiempoturno;
			}
			
			if (vRonda!=1)
			{
				TiempoParaturno=15;
			}
			
			if (vNoEsta==true)
			{
				TiempoParaturno=7;
			}
			
			
			//if (ValidadorReglas(MazoD[i],SoyElJugador)==true)
			//{
				log(false,"ESTA CORRIENDO: "+ timerturno.duration.toFixed(0));
				if (vTurno==SoyElJugador &&  timerturno.duration.toFixed(0)==0  )
				{

							
							log(false,"VECES QUE PONE EL RELOJ")
								var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

								
								timerturno = game_objeto.time.create(false);
								timerturno.loop(1000, function(){
									
										//if (PartidaComenzada==false)
										//{
										//	timerturno.stop();
										//}
										//else
										//{
											if (textoContador!=undefined)
											{
												textoContador.text="";
											}
											
											if (TiempoParaturno>Tiempoturno)
											{
												textoContador.text="";
											}
											else
											{
												
												if (PartidaComenzada==true)
												{
													textoContador.text="Es mi turno "+TiempoParaturno;
												}
												
											}

											
											if (TiempoParaturno<=0)
											{
												timerturno.stop();
												textoContador.text="";
												log(true,"IA Desde ContadorTurno");

													//IA(SoyElJugador);		DUDA PELIGRO
													//var timer = game_objeto.time.create(false);
													timerturno.stop();
													
													//var TiempoPensarTirada=TiempoPensar(vTurno);
													//var	timer = game_objeto.time.create(false);
													//1.0.4 grr timer.stop(); //04/17
													//timer.add(TiempoPensarTirada, function(){
													//	timer.stop();
														//console.log("IA desde Contador Turno");
														IA(SoyElJugador);
														vNoEsta=true; //1.0.8
													//} 
													//);
													//timer.start();	
												//}							
											}
											else
											{
												TiempoParaturno=TiempoParaturno-1;
											}
										//}
										
									});
								
								timerturno.start();
								log(false,"ESTA CORRIENDO: "+ timerturno.duration.toFixed(0));
				}
				else
				{
					if (vTurno!=SoyElJugador)
					{
						timerturno.stop();
					}
				}
				

			//}
		}
}

CalculaTurno=function(RondaMano){
	
	
	timerturno.stop();
	
	
	
	if (MazoCentral.length>0){
				MazoCentral.sort(sort_by('FechaHora', false, parseFloat));
				vTurno= (MazoCentral[MazoCentral.length-1].jugador)+1;	
				
				if (vTurno==5){
					vTurno=1;
				}
				
				
				for (var i=0;i<=MazoCentral.length-1;i++)
				{
					log(true,"TABA: "+MazoCentral[i].jugador + MazoCentral[i].FechaHora);
				}
				
				log(true,"vTurno guay "+vTurno);
	}
	else
	{
		if (vTurno==4){
			vTurno=1;
		}
		else{
			vTurno++;
		}
		log(true,"vTurno feo "+ vTurno);
	}
	MuestraTurno();
	
	ContadorTurno(RondaMano);
			
}

EfectosHacerPequenas=function(RondaParam,turnoParam){
	
	var i;
	for (i=0;i<=MazoD.length-1;i++)
	{
		MazoD[i].cartilla.tint=Phaser.Color.getColor(255,255,255);
	}
	//for (i=0;i<=MazoCentral.length-1;i++){
		//log(false,"ante de hacerse pequeñas")
		if(MazoCentralApoyo.length>=1){
		//log(false,"Se hacen pequeñas")
		DesHabilitarClick(MazoCentralApoyo[0].cartilla);
		MazoCentralApoyo[0].cartilla.alpha=1;
		tw1 = game_objeto.add.tween(MazoCentralApoyo[0].cartilla.scale);
		tw1.to( {x:vEscalaPequenas
		,y:vEscalaPequenas
		}
		, vVelocidadCartasReordernar, EfectoTween1,false,TiempoCartaGanadora);
		tw1.onComplete.add(EfectosRecogerCartas1,this)				
		tw1.start();					
		}
//}
//EfectosHacerPequenas2=function(){
		if(MazoCentralApoyo.length>=2){
		DesHabilitarClick(MazoCentralApoyo[1].cartilla);
		MazoCentralApoyo[1].cartilla.alpha=1;
		tw2 = game_objeto.add.tween(MazoCentralApoyo[1].cartilla.scale);
		tw2.to( {x:vEscalaPequenas
		,y:vEscalaPequenas
		}
		, vVelocidadCartasReordernar, EfectoTween1,false,TiempoCartaGanadora);
		tw2.onComplete.add(EfectosRecogerCartas2,this)				
		tw2.start();		
		}
//}
//EfectosHacerPequenas3=function(){
		if(MazoCentralApoyo.length>=3){		
		DesHabilitarClick(MazoCentralApoyo[2].cartilla);
		MazoCentralApoyo[2].cartilla.alpha=1;
		tw3 = game_objeto.add.tween(MazoCentralApoyo[2].cartilla.scale);
		tw3.to( {x:vEscalaPequenas
		,y:vEscalaPequenas
		}
		, vVelocidadCartasReordernar, EfectoTween1,false,TiempoCartaGanadora);
		tw3.onComplete.add(EfectosRecogerCartas3,this)				
		tw3.start();		
		}
//}
//EfectosHacerPequenas4=function(){		
		if(MazoCentralApoyo.length>=4){
		//log(false,"Antes de llegar al 4");
		DesHabilitarClick(MazoCentralApoyo[3].cartilla);
		MazoCentralApoyo[3].cartilla.alpha=1;
		tw4 = game_objeto.add.tween(MazoCentralApoyo[3].cartilla.scale);
		tw4.to( {x:vEscalaPequenas
		,y:vEscalaPequenas
		}
		, vVelocidadCartasReordernar, EfectoTween1,false,TiempoCartaGanadora);
		tw4.onComplete.add(//EfectosRecogerCartas4,this)		
				function () {
					EfectosRecogerCartas4(RondaParam,turnoParam); //Truco para poder pasar por parámetro
				}
		);		
		tw4.start();		
		}
	//}
		
}
//*/

EliminarDeLaMesa=function(RondaMano){


	if (PuntosFin()==true)
	{
		CrearTextoPuntuacion(); 
	}
	else
	{

		//if (MazoCentralApoyo.length>=4){
		
		
			log(false,"Se mete en EliminarDeLaMesa");
			//console.log("Acabo de eliminar.."+MazoCentralApoyo.length+" registros");
			MazoCentralApoyo.splice(0,100);
			
			//MostrarOcultarBotonCante();
			
			if (MazoCentralBuffer!=undefined)
			{
				//for (i=0;i<=MazoCentralBuffer.length-1;i++){
				log(false,"Se mete en EliminarDeLaMesa a saber...");
					if (MazoCentralBuffer.length>0){
					//MazoCentral.push(new Carta(MazoCentralBuffer[0].palo,MazoCentralBuffer[0].idCarta,MazoCentralBuffer[0].valor,MazoCentralBuffer[0].cartilla,null,MazoCentralBuffer[0].jugador));
					log(false,"Hay buffer.. y mide "+MazoCentralBuffer.length);
					
					MueveAlTablero_buffer1();


					
					}

			}
			
			if (ModoMultijugador==false){
				//log(true,"IA Desde Eliminar de la mesa");
					
					//var timer = game_objeto.time.create(false);//REVISIONTIEMPO
					
					var TiempoPensarTirada=TiempoPensar(vTurno);
					/*if (tw1.isRunning==true)
					{
						TiempoPensarTirada=TiempoPensarTirada+1500
					}
					else
					{
						//console.log("No corre");
					}*/
						
					//console.log("Tiempo "+TiempoPensarTirada);
					//var	timer = game_objeto.time.create(false);
					timer.stop(); //04/17
					timer.add(TiempoPensarTirada, function(){
					timer.stop();
					//console.log("IA DESDE eliminar de la mesa");
					IA(vTurno);} );
					timer.start();
							
							
				//}
			}
			
			

		//}

		if (ModoMultijugador==true)
		{
			//if (SoyElJugador==1)
			//{
				ColorManoPosibles();
			//}
		}
		
		//MostrarOcultarBotonCante();
		//console.log("SON VUELTAS "+SonVueltas);
		//console.log("Nuestro Marcador: "+MarcadorNuestro+" Rival: "+MarcadorRival+" GANAR: "+PuntosGanar);
		if (SonVueltas==false)
		{
			if (MazoD.length==0)
			{
				RondaFinalizada();
			}
			
			//if (vRonda==2)
			//{
			//	RondaFinalizada();
			//CrearTextoPuntuacion();
			//}
		}
		else
		{
			if (MarcadorNuestro>=PuntosGanar || MarcadorRival>=PuntosGanar)
			{
				CrearTextoPuntuacion(); 
			}
		}
		
		MostrarOcultarBotonCante();
	}
}


ValidaMovimientoJugador=function(RondaRecibida,JugadorQueMueve){
	var Adelante=true

		for (var i=0;i<=SemaforoRondas.length-1;i++){
			if(SemaforoRondas[i].Ronda==RondaRecibida && SemaforoRondas[i].Jugador==JugadorQueMueve){
				Adelante=false;
				break;
			}
		}
	
	if (Adelante==true){
		log(true,"Validado correctamente: vRonda "+RondaRecibida+" "+"Jugador "+JugadorQueMueve);
	/*	if (RondaRecibida==2 && JugadorQueMueve==1)
		{
			alert("mierder");
		}*/
		SemaforoRondas.push(new ObjetoJugadoresRonda(RondaRecibida,JugadorQueMueve) );
		//console.log("BLOQUEO DESDE SERVER RAPIDO (validando movimietno) "+JugadorQueMueve+" "+RondaRecibida);
	}
	else{
		log(false,"Validado Incorrectamente: vRonda "+RondaRecibida+" "+"Jugador "+JugadorQueMueve);
	}
	
	return Adelante;
}

ValidaMovimientoJugadorSinActualizar=function(RondaRecibida,JugadorQueMueve){
	var Adelante=true
	var i;
	
		for (var i=0;i<=SemaforoRondas.length-1;i++){
			if(SemaforoRondas[i].Ronda==RondaRecibida && SemaforoRondas[i].Jugador==JugadorQueMueve){
				Adelante=false;
				break;
			}
		}
	
	if (Adelante==true){
		log(true,"No quiero actualizar Array: vRonda "+RondaRecibida+" "+"Jugador "+JugadorQueMueve);
		//SemaforoRondas.push(new ObjetoJugadoresRonda(RondaRecibida,JugadorQueMueve) );
	}
	else{
		log(true,"Validado Incorrectamente 1, pero no pasa nada: vRonda "+RondaRecibida+" "+"Jugador "+JugadorQueMueve);
	}
	
	return Adelante;
}

ValidaMovimientoJugadorSinActualizarRapido=function(RondaRecibida,JugadorQueMueve){
	var Adelante=true
	var i;
	
		for (var i=0;i<=SemaforoRondasRapido.length-1;i++){
			if(SemaforoRondasRapido[i].Ronda==RondaRecibida && SemaforoRondasRapido[i].Jugador==JugadorQueMueve){
				Adelante=false;
				break;
			}
		}
	
	if (Adelante==true){
		log(true,"No quiero actualizar Array: vRonda "+RondaRecibida+" "+"Jugador "+JugadorQueMueve);
		//SemaforoRondas.push(new ObjetoJugadoresRonda(RondaRecibida,JugadorQueMueve) );
	}
	else{
		log(true,"Validado Incorrectamente 2, pero no pasa nada: vRonda "+RondaRecibida+" "+"Jugador "+JugadorQueMueve);
	}
	
	return Adelante;
}


ValidaRepartosJugador=function(){
	var Adelante=true;
	var i;
		for (i=0;i<=SemaforoRepartos.length-1;i++){
			if(SemaforoRepartos[i]==SoyElJugador){
				Adelante=false;
				break;
			}
		}
	
	if (Adelante==true){
	
		SemaforoRepartos.push(SoyElJugador);
	//	//console.log("BLOQUEO DESDE SERVER RAPIDO (validando movimietno) "+JugadorQueMueve+" "+RondaRecibida);
	}
	//else{
	//	log(false,"Validado Incorrectamente: vRonda "+RondaRecibida+" "+"Jugador "+JugadorQueMueve);
	//}
	
	return Adelante;
}

ValidaTextoPuntuacionJugador=function(){
	var Adelante=true;
	var i;
	
	for (i=0;i<=SemaforoTextoPuntuacion.length-1;i++){
		if(SemaforoTextoPuntuacion[i]==SoyElJugador){
			Adelante=false;
			break;
		}
	}
	
	if (Adelante==true){
	
		SemaforoTextoPuntuacion.push(SoyElJugador);
	//	//console.log("BLOQUEO DESDE SERVER RAPIDO (validando movimietno) "+JugadorQueMueve+" "+RondaRecibida);
	}
	//else{
	//	log(false,"Validado Incorrectamente: vRonda "+RondaRecibida+" "+"Jugador "+JugadorQueMueve);
	//}
	
	return Adelante;
}


ValidaDibujoAvatars=function(idJugador){
var Adelante=true;
var i;

	for (i=0;i<=SemaforoAvatars.length-1;i++){
		if(SemaforoAvatars[i]==idJugador){
			Adelante=false;
			break;
		}
	}
	
	if (Adelante==true){
		log(false,"Avatar Validado correctamente:  "+idJugador);
		SemaforoAvatars.push(idJugador);
	}
	else{
		log(false,"Ya estaba validado el Avatar "+idJugador);
	}
	
	return Adelante;
}

MazoOBuffer=function(JugadorQueMueve,RondaRecibida)
{
	var DirectoAlMazo;
	
	if (vTurno==JugadorQueMueve)
	{
		if (vRonda==RondaRecibida)
		{
			DirectoAlMazo=true;
		}
		else
		{
			DirectoAlMazo=false;
		}
	}
	else
	{
		DirectoAlMazo=false;
	}
	
	return DirectoAlMazo;
}

OrganizarManoMueveCentro=function(Mano,Letra,KeyMover,JugadorQueMueve,RondaRecibida,FechaHora){
	var CartaEncontrada=false;
	var Continuar;
	var i;
	var DirectoAlMazo=false;
	var u;
	
	//ValidaMovimientoJugador(JugadorQueMueve); //Vamos a registrar cada vRonda que jugador muevae para evitar que pase un jugador dos veces por la misma vRonda
	
	//if (Continuar==true){
	//console.log("OrganizarManoMueveCentro: "+JugadorQueMueve+" "+RondaRecibida);
	

	
	for (i=0;i<=Mano.length-1;i++){
		if(Mano[i].cartilla.name==KeyMover){
			
			CartaEncontrada=true;
			
			if (MazoCentral.length>=4 || MazoCentralBuffer.length>0 || MazoOBuffer(JugadorQueMueve,RondaRecibida)==false  ){ //NUEVO EL OR  1.0.6
				
				//console.log("haha");
				log(true,"Rellenandoo Buffer pq el Mazo Central mide..."+MazoCentral.length+" Jugador "+JugadorQueMueve+" vRonda "+RondaRecibida);
				
				for (u=0;u<=MazoCentral.length-1;u++)
				{
					log(true,"NI Idea: "+MazoCentral[u].palo+" "+MazoCentral[u].valor)
				}
				
				
				MazoCentralBuffer.push(new Carta(Mano[i].palo,Mano[i].idCarta,Mano[i].valor,Mano[i].cartilla,null,JugadorQueMueve,RondaRecibida,FechaHora));
				if (MazoCentralBuffer.length>0)
				{
					MazoCentralBuffer.sort(sort_by('FechaHora', false, parseFloat));
				}
				
				log(false,"Rellenandoo Buffer..."+Mano[i].palo+" "+Mano[i].valor);
				
			}
			else{
				
				SemaforoRondas.push(new ObjetoJugadoresRonda(RondaRecibida,JugadorQueMueve) );
				MazoCentral.push(new Carta(Mano[i].palo,Mano[i].idCarta,Mano[i].valor,Mano[i].cartilla,null,JugadorQueMueve,null,FechaHora));
				
			
				//1.0.4 23/05/17
				if (MazoCentral.length>0 && ModoMultijugador==true)
				{
					MazoCentral.sort(sort_by('FechaHora', false, parseFloat));
				}	

			//console.log("Acabo de introducir "+MazoCentral[MazoCentral.length-1].palo+" "+MazoCentral[MazoCentral.length-1].valor);
				
				OcultarBotones();
				if (MazoCentral.length>0)
				{
					MazoCentral.sort(sort_by('FechaHora', false, parseFloat));
				}				
				
				
				log(true,"CREO QUE SE METE AQUI PARA MOVEL AL TABLERO "+JugadorQueMueve);
				MostrarAnverso(Mano[i].cartilla);
				MueveAlTablero(Mano[i].cartilla,Letra,RondaRecibida,JugadorQueMueve);
				Mano.splice(i,1);	
				
			}
			
		

			break;
		}
	}
	
	//Tema pestañas: Se puede dar el caso de que el jugador que tiene el Turno mate, se recoja el Mazo y robe carta.
	//Para el de la pestaña siguiente, aun no tenía la carta en la mano, con lo que la busco en el Mazo.
	
	//MazoCentral.length>=4 && 
	if (CartaEncontrada==false ){
		log(true,"Carta NO encontrada 1");
		for (i=0;i<=Mazo.length-1;i++){
			if(Mazo[i].cartilla.name==KeyMover){
				MazoCentralBuffer.push(new Carta(Mazo[i].palo,Mazo[i].idCarta,Mazo[i].valor,Mazo[i].cartilla,null,JugadorQueMueve,RondaRecibida,FechaHora));				
				log(true,"Rellenando Buffer por matanza..."+" Jugador "+JugadorQueMueve+" vRonda "+RondaRecibida);
				CartaEncontrada=true;
			}			
		}
		
		if (CartaEncontrada==false ){ //Si tampoco se encuentra, lo busco en el Triunfo
			log(true,"Carta NO encontrada 2");
			
			if (CartaTriunfo.length>0)
			{
				if(CartaTriunfo[0].cartilla.name==KeyMover)
				{
					log(true,"Carta ENCONTRADA!!");
					MazoCentralBufferEspecial7.push(new Carta(CartaTriunfo[0].palo,CartaTriunfo[0].idCarta,CartaTriunfo[0].valor,CartaTriunfo[0].cartilla,null,JugadorQueMueve,RondaRecibida,FechaHora));
				
				}
				else{
					log(false,"Carta NO ENCONTRADA!!");
				}
				//log(false,"Carta NO ENCONTRADA!! "+KeyMover);
			}
		}
		
		
		if (MazoCentralBuffer.length>0)
		{
			MazoCentralBuffer.sort(sort_by('FechaHora', false, parseFloat));
		}
	
	}
	

	
	
	ReubicarCartas(Mano,Letra)
	//}
}

MoverCentroAjeno=function(JugadorQueMueve,KeyMover,RondaRecibida,FechaHora){
	//console.log("Mover Centro Ajeno: Soy "+SoyElJugador+" Mueve "+JugadorQueMueve+" la carta "+KeyMover+" MazoCentral mide: "+MazoCentral.length);
	
	//if (SoyElJugador!=JugadorQueMueve){
		
		if(SoyElJugador==1){
			if (JugadorQueMueve==1){
				OrganizarManoMueveCentro(MazoD,"D",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}	
			if (JugadorQueMueve==2){
				OrganizarManoMueveCentro(MazoR,"R",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}
			if (JugadorQueMueve==3){
				OrganizarManoMueveCentro(MazoU,"U",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}
			if (JugadorQueMueve==4){
				OrganizarManoMueveCentro(MazoL,"L",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}		
		}

		if(SoyElJugador==2){
			if (JugadorQueMueve==2){
				OrganizarManoMueveCentro(MazoD,"D",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}	
			if (JugadorQueMueve==3){
				OrganizarManoMueveCentro(MazoR,"R",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}
			if (JugadorQueMueve==4){
				OrganizarManoMueveCentro(MazoU,"U",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}
			if (JugadorQueMueve==1){
				OrganizarManoMueveCentro(MazoL,"L",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}		
		}

		if(SoyElJugador==3){
			if (JugadorQueMueve==3){
				OrganizarManoMueveCentro(MazoD,"D",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}	
			if (JugadorQueMueve==4){
				OrganizarManoMueveCentro(MazoR,"R",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}
			if (JugadorQueMueve==1){
				OrganizarManoMueveCentro(MazoU,"U",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}
			if (JugadorQueMueve==2){
				OrganizarManoMueveCentro(MazoL,"L",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}		
		}
		
		if(SoyElJugador==4){
			if (JugadorQueMueve==4){
				OrganizarManoMueveCentro(MazoD,"D",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}	
			if (JugadorQueMueve==1){
				OrganizarManoMueveCentro(MazoR,"R",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}
			if (JugadorQueMueve==2){
				OrganizarManoMueveCentro(MazoU,"U",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}
			if (JugadorQueMueve==3){
				OrganizarManoMueveCentro(MazoL,"L",KeyMover,JugadorQueMueve,RondaRecibida,FechaHora);
			}		
		}
		
	//}
	//else
	//{
	//	//console.log("No mueve al centro ajeno")
	//}
}


OcultarBotones=function(){
	var QuienEsMiIzquierda;
	var i;
	
	QuienEsMiIzquierda=SoyElJugador-1;
	if (QuienEsMiIzquierda==0){
		QuienEsMiIzquierda=4;
	}
	
	for (i=0;i<=MazoCentral.length-1;i++)
	{
		
		if (MazoCentral[i].jugador==QuienEsMiIzquierda)
		{
			//console.log("Ocultando");
			//BotonSiete.visible=false;
			//BotonCantar.visible=false;
			BotonCantar.loadTexture('Boton_cantar_off', 0);
			BotonSiete.loadTexture('Boton_cambiar_7_off', 0);
			
		}	
	}	
}


checkConnection=function() {

	var Devuelve=true;
	
	var isCordovaApp = document.URL.indexOf('http://') === -1
		&& document.URL.indexOf('https://') === -1;

	//MensajeError("Chequeando");
	if (window.plugins)
	{
		
		try
		{
			var networkState = navigator.connection.type;
			/*var states = {};
		


			states[Connection.UNKNOWN]  = 'Unknown connection';
			states[Connection.ETHERNET] = 'Ethernet connection';
			states[Connection.WIFI]     = 'WiFi connection';
			states[Connection.CELL_2G]  = 'Cell 2G connection';
			states[Connection.CELL_3G]  = 'Cell 3G connection';
			states[Connection.CELL_4G]  = 'Cell 4G connection';
			states[Connection.CELL]     = 'Cell generic connection';
			states[Connection.NONE]     = 'No network connection';*/
			

			
			if (networkState=="none")
			{
				Devuelve=false;
				MensajeError("Revisa tu conexiÃ³n a internet");
			}

			
		
		}
		catch(e)
		{
			MensajeError("Error "+e);
		}
	}

	
	return Devuelve;
	
}
