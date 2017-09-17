CrearBarajaRecibida=function(data,QuienReparte,EliminarBazaApoyo){
	
	var idCartaBucle;
	var palo;
	var i;
	var Continuar;
	
	PartidaComenzada=false; //1.0.6
	FinalizandoPartida=false //1.0.8
	
	timerBarajaRecibida.stop();
	
	TextCuentaMundo.visible=false;
	OcultarElegirPareja();
	ArrayOKParejas.splice(0,1000);	
	BotonSalir.x=xSalir;
	BotonSalir.visible=true;
	LimpiarVariables();
	EntradaModoJuego=true;
	
	/*try
	{
		textEsperando.visible=false;
		if (ModoMultijugador==true)
		{
			MensajeEsperandoListos();
		}
		//textEsperando.destroy();
		log(true,"Se destuye. Recibida");
	}
	catch(e){
		log(true,"No se destuye. Recibida");
	}*/
	
	
	if (SonVueltas==true)
	{
		TextMarcador.visible=true;
		TextTituloMarcador.visible=true;
		//ReproducirSonido('_Vueltas');		
	}
	else
	{
		//ReproducirSonido('_Idas');		
	}	


	if (ModoMultijugador==true)
	{
		inputField.visible=true;
		if (ArrayInfoJugador.length>0)
		{
			inputField.visible=ArrayInfoJugador[0].ChatDisponible;	 //1.0.8
		}
		
	}

	OcultarFacebook(); //1.0.8
	
	CrearTapete();
	

	
	for(i=0;i<=data.length-1;i++){
			//log(false,"Longitud "+this.Cartas.length)
			//log(false,this.Cartas[i].numero);
			Mazo.push(new Carta(data[i].palo,data[i].idCarta,data[i].valor,null,null,null));
			//MazoVivo.push(new Carta(data[i].palo,data[i].idCarta,data[i].valor,null,null));
			if (SiempreBocaArriba==false)
			{
				Mazo[i].cartilla = game_objeto.add.sprite(50,game_objeto.world.centerY/2, ReversoGlobal);
			}
			else
			{
				Mazo[i].cartilla = game_objeto.add.sprite(50,game_objeto.world.centerY/2, Mazo[i].idCarta);				
			}
			
			if (cuatrotres==true)
			{
				Mazo[i].cartilla.width=Mazo[i].cartilla.width*1.2
				Mazo[i].cartilla.height=Mazo[i].cartilla.height*1.2
			}			
			
			//Mazo[i].cartilla.inputEnabled = true;
			//Mazo[i].cartilla.input.enableDrag(false,true);
			
			Mazo[i].cartilla.name=Mazo[i].idCarta;
			//Mazo[i].cartilla.scale.setTo(0.4,0.4);
			Mazo[i].cartilla.anchor.setTo(0.5, 0.5);
   
   
			game_objeto.physics.arcade.enable(Mazo[i].cartilla);
			//Mazo[i].cartilla.events.onDragStop.add(dragStop);
			

			Mazo[i].cartilla.body.collideWorldBounds = false;
			
			Mazo[i].cartilla.body.velocity.x = 0;
			Mazo[i].cartilla.body.bounce.set(0);
			
			
			//  Also enable sprite for drag
			//Mazo[i].cartilla.inputEnabled = true;
			//Mazo[i].cartilla.input.enableDrag(false,true);
			//log(false,Mazo[i].idCarta);
	}
	
	//if (EliminarBazaApoyo==true)
	//{
		MazoEnviarApoyo.splice(0,100);
	//}
		
		/*AnchoCarta=Mazo[Mazo.length-1].cartilla.width;
		AltoCarta=Mazo[Mazo.length-1].cartilla.height;
		AnchoCartaEscalado=Mazo[Mazo.length-1].cartilla.width*vEscaladoCarta;
		AltoCartaEscalado=Mazo[Mazo.length-1].cartilla.height*vEscaladoCarta;
		CentroIrreal=((game_objeto.world.height-AltoCarta-AltoCartaEscalado+AnchoCarta)/2)+(AnchoCarta);*/
		PosicionCartas("D");
	
		log(false,"Llega...");
		var   s;
			
		Esconde_Mazo(QuienReparte);
		log(true,"REPARTE "+QuienReparte)
		if (QuienReparte==4)
		{
			if (SoyElJugador==1){
				Repartir_Desde_Abajo();
			}
			if (SoyElJugador==2){
				Repartir_Desde_Izquierda();
			}
			if (SoyElJugador==3){
				Repartir_Desde_Arriba();
			}
			if (SoyElJugador==4){
				Repartir_Desde_Derecha();
			}
		}
		
		if (QuienReparte==1)
		{
			if (SoyElJugador==2){
				Repartir_Desde_Abajo();
			}
			if (SoyElJugador==3){
				Repartir_Desde_Izquierda();
			}
			if (SoyElJugador==4){
				Repartir_Desde_Arriba();
			}
			if (SoyElJugador==1){
				Repartir_Desde_Derecha();
			}
		}		
		
		if (QuienReparte==2)
		{
			if (SoyElJugador==3){
				Repartir_Desde_Abajo();
			}
			if (SoyElJugador==4){
				Repartir_Desde_Izquierda();
			}
			if (SoyElJugador==1){
				Repartir_Desde_Arriba();
			}
			if (SoyElJugador==2){
				Repartir_Desde_Derecha();
			}
		}				

		if (QuienReparte==3)
		{
			if (SoyElJugador==4){
				Repartir_Desde_Abajo();
			}
			if (SoyElJugador==1){
				Repartir_Desde_Izquierda();
			}
			if (SoyElJugador==2){
				Repartir_Desde_Arriba();
			}
			if (SoyElJugador==3){
				Repartir_Desde_Derecha();
			}
		}				



		//Lo vuelvo a restablecer
		
		log(false,"Soy el "+SoyElJugador+" y reparte "+QuienReparte);
		vTurno=QuienReparte+1;
		if (vTurno==5)
		{
			vTurno=1
		}
		MuestraTurno();
		//PreparaCaracteristicasMano();
		//PartidaComenzada=true;
		//alert("grrr");
		//ContadorTurno();
		game_objeto.world.bringToTop(GrupoD);

 };
