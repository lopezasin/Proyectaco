CrearTapete=function()
{ 
//alert('Se mete en tapete');
//alert('Creo tapete '+LogicalTapeteRemoto);

	try
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
	}
//alert(LogicalTapeteRemoto+" "+LogicalDorsoRemoto);
 if ( LogicalTapeteRemoto==true && LogicalDorsoRemoto==true )
   {
	  
		var key='TapeteRemoto';	

		//BackTapete=null;
		//BackTapete=game_objeto.add.tileSprite(0, 0, anchoPantalla, altoPantalla, key);		
	   	BackTapete.name = key;
		try
		{
			BackTapete.loadTexture(key, 0);
		}
		catch(e){
			log(true,"No se pudo cargar el tapete remoto.");
			if (cuatrotres==false)
			{
				BackTapete.loadTexture("Tapete");
			}
			else
			{
				BackTapete.loadTexture("Tapete_43");
			}
		}
		ReversoGlobal='ReversoRemoto';
   }
   else
   {
	 
		if (cuatrotres==false)
		{
				var key='Tapete';
		}
		else
		{
				var key='Tapete_43';
		}
			
		//BackTapete=null;	
		//BackTapete=game_objeto.add.tileSprite(0, 0, anchoPantalla, altoPantalla, key);		
	   	BackTapete.name = key;
		
		try
		{
			BackTapete.loadTexture(key, 0);
		}
		catch(e){
			log(true,"No se pudo cargar el tapete local.");
			if (cuatrotres==false)
			{
				BackTapete.loadTexture("Tapete");
			}
			else
			{
				BackTapete.loadTexture("Tapete_43");
			}
		}
		ReversoGlobal='Reverso';
   }
   LogicalTapeteRemoto=false;
   LogicalDorsoRemoto=false;
}
   
CrearBaraja=function(QuienReparte){
	
	var idCartaBucle;
	var palo;
	var i;
	var valor;

	PartidaComenzada=false; //1.0.6
	FinalizandoPartida=false //1.0.8
	
	TextCuentaMundo.visible=false;
	OcultarElegirPareja();
	ArrayOKParejas.splice(0,1000);	
	BotonSalir.x=xSalir;
	BotonSalir.visible=true;
	Mazo=[];
	MazoEnviar=[];
	EntradaModoJuego=true;
	//ValidaRepartosJugador(); //1.0.8 Lo he comentado porque lo pongo en las llamadas
	
	log(true,"He repartido yo");
	LimpiarVariables(); 

	if (ModoMultijugador==true)
	{
		inputField.visible=true;
		if (ArrayInfoJugador.length>0)
		{
			inputField.visible=ArrayInfoJugador[0].ChatDisponible;	 //1.0.8
		}
	}

	OcultarFacebook(); //1.0.8
	//MostrarFacebook();

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
	

	
	
	CrearTapete();

   //if (isLoading 
   					/*var timer = game_objeto.time.create(false);
					timer.loop(5000, function(){
					//	if (PartidaComenzada==true)
					//	{
							//alert("llega");
							
							//New2
							
							//IA(vTurno);
					//	}
						alert("k");
						timer.stop();
					});
					timer.start();	*/

   //ImagenFondo.key='Tapetea';
   /* [9,10,19,20,29,30,39,40,1,2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,
   21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38]*/
   
   [38,37,36,35,34,33,32,31,28,27,26,25,24,23,22,9,4,17,16,15,14,13,12,11,6,7,21,18,5,3,2,1,40,19,30,29,39,20,10,8].forEach( function(element, index, Array){
//[24,40,36,35,34,33,32,31,28,19,39,20,10,8,30,23,22,9,13,12,11,6,7,21,18,5,3,2,1,27,26,25,4,17,16,15,14,38,37,29].forEach( function(element, index, Array){
   //for (idCartaBucle = 1; idCartaBucle <= 40; idCartaBucle++) { 

		idCartaBucle=element;
		
		if(idCartaBucle<=10){		
				palo="oros";
				valor=idCartaBucle;
		}
		else{
			if(idCartaBucle<=20){
				palo="copas";
				valor=idCartaBucle-10;
			}
			else{
				if(idCartaBucle<=30){
					palo="espadas";
					valor=idCartaBucle-20;
				}
				else{
					palo="bastos";
					valor=idCartaBucle-30;
				}
			}
		}
	
		log(false,palo);
			

    		Mazo.push(new Carta(palo,idCartaBucle,valor,null,null,null));
			
    	
    	
	//}
	
   });
	
  Mazo=Phaser.ArrayUtils.shuffle(Mazo);
	
	

	
	for(i=0;i<=Mazo.length-1;i++){
			//log(false,"Longitud "+this.Cartas.length)
			//log(false,this.Cartas[i].numero);
			
			MazoEnviar.push(new Carta(Mazo[i].palo,Mazo[i].idCarta,Mazo[i].valor,null,null));
			//MazoVivo.push(new Carta(Mazo[i].palo,Mazo[i].idCarta,Mazo[i].valor,null));
			
			/*MazoEnviar[i].palo=MazoEnviar[i].palo;
			MazoEnviar[i].numero=Mazo[i].numero;
			MazoEnviar[i].idCarta=Mazo[i].idCarta;
			*/
			
			if (SiempreBocaArriba==false)
			{
				Mazo[i].cartilla = game_objeto.add.sprite(-100, game_objeto.world.centerY/2, ReversoGlobal);
			}
			else{
				Mazo[i].cartilla = game_objeto.add.sprite(-100, game_objeto.world.centerY/2, MazoEnviar[i].idCarta);
			}
			
			if (cuatrotres==true)
			{
				Mazo[i].cartilla.width=Mazo[i].cartilla.width*1.2
				Mazo[i].cartilla.height=Mazo[i].cartilla.height*1.2
			}
			
			Mazo[i].cartilla.name=MazoEnviar[i].idCarta;
			
			GrupoMazo.add(Mazo[i].cartilla);
			//Mazo[i].cartilla.bringToTop();
			
			//Mazo[i].cartilla.scale.setTo(0.4,0.4);
			Mazo[i].cartilla.anchor.setTo(0.5, 0.5);
			//Mazo[i].cartilla.x=300;
			//Mazo[i].cartilla.events.onDragStart.add(dragStart);
			//Mazo[i].cartilla.events.onDragStop.add(dragStop);
			Mazo[i].cartilla.events.onDragUpdate.add(dragUpdate);

   
   
			game_objeto.physics.arcade.enable(Mazo[i].cartilla);

			//////Mazo[i].cartilla.body.collideWorldBounds = true;
			Mazo[i].cartilla.body.velocity.x = 0;
			Mazo[i].cartilla.body.bounce.set(0);
			
			//Borrar
			//Mazo[i].cartilla.inputEnabled = true;
			//Mazo[i].cartilla.input.enableDrag(false,true);
			
			//  Also enable sprite for drag
			//Mazo[i].cartilla.inputEnabled = true;
			//Mazo[i].cartilla.input.enableDrag(false,true);
	}
		
		/*AnchoCarta=Mazo[Mazo.length-1].cartilla.width;
		AltoCarta=Mazo[Mazo.length-1].cartilla.height;
		AnchoCartaEscalado=Mazo[Mazo.length-1].cartilla.width*vEscaladoCarta;
		AltoCartaEscalado=Mazo[Mazo.length-1].cartilla.height*vEscaladoCarta;
		CentroIrreal=((game_objeto.world.height-AltoCarta-AltoCartaEscalado+AnchoCarta)/2)+(AnchoCarta);*/
		PosicionCartas("D");
		
		Esconde_Mazo(QuienReparte);
		//console.log("REPARTE "+QuienReparte)
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
		
		vTurno=QuienReparte+1;
		if (vTurno==5)
		{
			vTurno=1
		}
		MuestraTurno();
		//PreparaCaracteristicasMano();
		
		if (ModoMultijugador==false)
		{
			PartidaComenzada=true;
		}
		else
		{
			PreparaCaracteristicasMano();
		}
	
		
		//ContadorTurno();
		game_objeto.world.bringToTop(GrupoD);
		
		log(false,"Soy el "+SoyElJugador+" y reparte "+QuienReparte);
		
		
		

		
		
		
		
 };