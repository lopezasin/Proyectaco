PuntosFin=function()
{
	return ((MarcadorNuestro>=PuntosGanar || MarcadorRival>=PuntosGanar) && SonVueltas==true);	
}

MuestraDorsoCante=function(JugadorQueMueve,texto,puntos)
{
	var Letra;
	var Carta1;
	var Carta2;
	var Mano;
	var id1;
	var id2;
	var i;
	var twCarta1;
	var twCarta2;
	var Cartilla1;
	var Cartilla2;
	var Voltear;
	var Cartilla1Name;
	var Cartilla2Name;
	
	
		
	Letra=DevuelveUbicacionCarta(JugadorQueMueve);
	if (Letra=="D")
	{
		Mano=MazoD;
	}
	if (Letra=="U")
	{
		Mano=MazoU
	}
	if (Letra=="L")
	{
		Mano=MazoL
	}
	if (Letra=="R")
	{
		Mano=MazoR;
	}
	
	if (texto=="oros")
	{
		id1=8;
		id2=10;
	}
	if (texto=="copas")
	{
		id1=18;
		id2=20;
	}
	if (texto=="espadas")
	{
		id1=28;
		id2=30;
	}		
	if (texto=="bastos")
	{
		id1=38;
		id2=40;
	}	
	

	for (i=0;i<=Mano.length-1;i++)
	{
		log(false,"CARTAAAAAAAASSSS: "+Mano[i].cartilla.name);
		if(Mano[i].cartilla.name==id1  )
		{
				var posicion1=i;
		}
		
		if(Mano[i].cartilla.name==id2  )
		{
				var posicion2=i;
		}
	}
	
	Cartilla1=Mano[posicion1].cartilla;
	Cartilla1Name=Mano[posicion1].cartilla.name
	Cartilla2=Mano[posicion2].cartilla;
	Cartilla2Name=Mano[posicion2].cartilla;
	
	if (puntos==20 && Letra!="D")
	{

			try
			{
				Cartilla1.loadTexture(Cartilla1.name, 0);
			}
			catch(e){}
			
			twCarta1 = game_objeto.add.tween(Cartilla1).to( { alpha: 1 }, 2000, EfectoTween1, true);
			twCarta1.onComplete.add(  function(){
					
					try
					{
						Voltear=true;
						for (i=0;i<=MazoCentral.length-1;i++)
						{
							if (MazoCentral[i].Cartilla.name==Cartilla1Name)
							{
								Voltear=false;
							}
						}	
						ArreglaReversos();
					}
					catch(e)
					{
						Voltear=false;
						
					}

					
					if (Voltear==true)
					{
						//ArreglaReversos();
						/*try
						{
							Cartilla1.loadTexture(ReversoGlobal, 0);
							
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
			
			twCarta2 = game_objeto.add.tween(Cartilla2).to( { alpha: 1 }, 2000, EfectoTween1, true);
			twCarta2.onComplete.add(  function(){
					
					try
					{
						ArreglaReversos();
						Voltear=true;
						for (i=0;i<=MazoCentral.length-1;i++)
						{
							if (MazoCentral[i].Cartilla.name==Cartilla2Name)
							{
								Voltear=false;
							}
						}	
					}
					catch(e)
					{
						Voltear=false;
						//ArreglaReversos();
					}

					
					if (Voltear==true)
					{
						//ArreglaReversos();
						/*try
						{
							Cartilla2.loadTexture(ReversoGlobal, 0);
							
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

MostrarTodasCartas=function(){
	var i;
	//try
	//{
		for (i=0;i<=MazoL.length-1;i++)
		{
			MazoL[i].cartilla.loadTexture(MazoL[i].cartilla.name, 0);
		}
		for (i=0;i<=MazoU.length-1;i++)
		{
			MazoU[i].cartilla.loadTexture(MazoU[i].cartilla.name, 0);
		}		
		for (i=0;i<=MazoR.length-1;i++)
		{
			MazoR[i].cartilla.loadTexture(MazoR[i].cartilla.name, 0);
		}		
	//}
	//catch(e){}

}

MostrarAnverso=function(cartilla){
	if (SiempreBocaArriba==false)
	{
		try
		{
			cartilla.loadTexture(cartilla.name, 0);
		}
		catch(e){}
	}
}

MostrarReverso=function(cartilla){	
	if (SiempreBocaArriba==false)
	{
		//log(true,"El reverso global es: "+ReversoGlobal)
		try
		{
			cartilla.loadTexture(ReversoGlobal, 0);
		}
		catch(e)
		{
			log(true,"El reverso con el catch "+cartilla.key);
			try
			{
				cartilla.loadTexture('Reverso', 0);
			}
			catch(u)
			{}
		}
	}
	
	
}
Cambiar7Ajeno=function(JugadorQueMueve,KeyMover,RondaParam,turnoParam){
  var i;
  var Mano;
  var LetraMazo;
  var Encontrada=false;
  
  //BotonSiete.visible=false;
BotonSiete.loadTexture('Boton_cambiar_7_off', 0);
  
  LetraMazo=DevuelveUbicacionCarta(JugadorQueMueve);
   log(false,"Jugador 7: "+JugadorQueMueve+"Letra: "+LetraMazo+" KEY: "+KeyMover)
   
  	if (LetraMazo=="D"){
		Mano=MazoD;
	}
    if (LetraMazo=="L"){
		Mano=MazoL;
	}
    if (LetraMazo=="U"){
		Mano=MazoU;
	}
    if (LetraMazo=="R"){
		Mano=MazoR;
	}	
	
	for (i=0;i<=Mano.length-1;i++)
	{
		if(Mano[i].cartilla.name==KeyMover)
		{
			Encontrada=true;
			break;
		}
	}
	
	if (Encontrada==true)
	{
		log(false,"ENCONTRADA");
		CartaMover=Mano[i].cartilla
		MostrarAnverso(CartaMover);
		CartaMover.sendToBack();
				
		CartaTriunfo.push(new Carta(Mano[i].palo,Mano[i].idCarta,Mano[i].valor,Mano[i].cartilla));
		
		Grupo7.add(Mano[i].cartilla);
		game_objeto.world.bringToTop(MazoCentral);
		game_objeto.world.bringToTop(MazoD);
		
		Mano.splice(i,1);
		ReubicarCartas(Mano,LetraMazo);
		

		
		
		
		twEsp7 = game_objeto.add.tween(CartaMover);
		twEsp7.to( {x:(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6))  - (vSeparacion*8) +  AnchoCarta)/2)+ (1 *(AnchoCarta+ vSeparacion))
		,y:CentroIrreal,
		angle : 90
		}, 500, EfectoTween2);		
		
		twEsp7.onComplete.add( 			
			function () {
				FinalizaCambio7(Mano,LetraMazo,JugadorQueMueve,RondaParam,turnoParam);
			} ,this)

		if (LetraMazo=="D")
		{
			//game_objeto.add.tween(CartaMover.scale).to( {x:vEscaladoCarta,y:vEscaladoCarta}, vVelocidadCartas, EfectoTween2,true);
			game_objeto.add.tween(CartaMover.scale).to( {x:1,y:1}, vVelocidadCartas, EfectoTween2,true);
		}					
		
		twEsp7.start();	
	}
	else{
		//log(false,"NO ENCONTRADA");
	}
	
}

Cambiar7 =function()
{
	var i;
	var CartaMover;
	var Encontrada=false;
	
	if (BotonSiete.key=="Boton_cambiar_7_on")
	{
		//BotonSiete.visible=false;
		BotonSiete.loadTexture('Boton_cambiar_7_off', 0);
			
		for (i=0;i<=MazoD.length-1;i++)
		{
			if(MazoD[i].valor==7 && MazoD[i].palo==Triunfo)
			{
				Encontrada=true;
				break;
			}
		}
		
		if (Encontrada==true)
		{
			
			if (ModoMultijugador==true)
			{

				/////////////
			
				var Hora=Date.now();
				var ObjectSend=function( Habitacion,JugadorQueMueve,Cartilla, SonVueltas, Partida, JugadorFull, JugadorSala, Nombre,
					IdMsg,ClientId,SalaID,Mensaje){
					 this.Habitacion=Habitacion
					 this.JugadorQueMueve=JugadorQueMueve
					 this.Cartilla=Cartilla
					 this.SonVueltas=SonVueltas
					 this.Partida=Partida
					 this.JugadorFull=JugadorFull
					 this.JugadorSala=JugadorSala
					 this.Nombre=Nombre
					
														 
					 this.IdMsg=IdMsg
					 this.ClientId=ClientId
					 this.SalaID=SalaID
					 this.Mensaje=Mensaje
					 
					 this.Fecha=new Date(Date.now());
				 }
				var ArrayAccionesDesconexionesLocal=[];
				ArrayAccionesDesconexionesLocal.splice(0,1000);

					
				var IdMsg=Math.random()*100000;
				var Objeto=new ObjectSend(Habitacion,SoyElJugador,MazoD[i].cartilla.name, SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),ArrayDelaPropiaSala[SoyElJugador-1].JugadorFull,ArrayDelaPropiaSala[SoyElJugador-1].JugadorSala, ArrayDelaPropiaSala[SoyElJugador-1].Nombre,
					IdMsg,ArrayDelaPropiaSala[SoyElJugador-1].JugadorSala,Habitacion,'enviar cambio7');
				ArrayAccionesDesconexiones.push(Objeto);
				ArrayAccionesDesconexionesLocal.push(Objeto);


				socket.emit('enviar cambio7',ArrayAccionesDesconexionesLocal[0],
				 function(idMensaje)
				 {			 
					EliminarColaMensajes(idMensaje,'enviar cambio7');
				 }
				);						
				ArrayAccionesDesconexionesLocal.splice(0,1000);	

				
				/////////////	
				
				
				//socket.emit('enviar cambio7', Habitacion,SoyElJugador,MazoD[i].cartilla.name, SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),ArrayDelaPropiaSala[SoyElJugador-1].JugadorFull,ArrayDelaPropiaSala[SoyElJugador-1].JugadorSala, ArrayDelaPropiaSala[SoyElJugador-1].Nombre) ;
			}
			
			CartaMover=MazoD[i].cartilla
			//CartaMover.sendToBack();
			//DesHabilitarClick(CartaMover);
			
			CartaTriunfo.push(new Carta(MazoD[i].palo,MazoD[i].idCarta,MazoD[i].valor,MazoD[i].cartilla,5,MazoD[i].jugador));
			DesHabilitarClick(CartaTriunfo.length-1);
			//GrupoMazo.add(CartaTriunfo[0].cartilla);
			Grupo7.add(MazoD[i].cartilla);
			game_objeto.world.bringToTop(MazoCentral);
			game_objeto.world.bringToTop(MazoD);
			
			//CartaTriunfo[1].cartilla.moveDown();
			
			MazoD.splice(i,1);
			ReubicarCartas(MazoD,"D");
			

			
			
			
			twEsp7 = game_objeto.add.tween(CartaMover);
			twEsp7.to( {x:(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6))  - (vSeparacion*8) +  AnchoCarta)/2)+ (1 *(AnchoCarta+ vSeparacion))
			,y:CentroIrreal,
			angle : 90
			}, 500, EfectoTween2);		
			
			twEsp7.onComplete.add( 
			
				function () {
					DesHabilitarClick(CartaMover);
					FinalizaCambio7(MazoD,"D",SoyElJugador);
				}
			 ,this)		
			
			twEsp7.start();	
			game_objeto.add.tween(CartaMover.scale).to( {x:1,y:1}, vVelocidadCartas, EfectoTween2,true);
		}
	}
}

FinalizaCambio7=function(Mano,Letra,JugadorCambia7,RondaParam,turnoParam){
	
	var posX;
	var posY;
	var angulo;
	
		
	Mano.push(new Carta(CartaTriunfo[0].palo,CartaTriunfo[0].idCarta,CartaTriunfo[0].valor,CartaTriunfo[0].cartilla,7,JugadorCambia7));
	//GrupoD.add(CartaTriunfo[0].cartilla);
	
	CartaTriunfo.shift();
	
	//var AnchoCarta=Mano[Mano.length-1].cartilla.width;
	
	if (Letra=="D")
	{
		posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)   +  AnchoCarta)/2)+ (5 *(AnchoCarta+ vSeparacion));
		posY=game_objeto.world.height-AnchoCarta;
		angulo=Mano[Mano.length-1].cartilla.angle - 90;
		MostrarAnverso(Mano[Mano.length-1].cartilla);
		GrupoD.add(Mano[Mano.length-1].cartilla);
	}
	
	if (Letra=="R")
	{
		//posX=game_objeto.world.height-AnchoCarta;
		//posY=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)  +  AnchoCarta  )    /2)+      (0 *(AnchoCarta+ vSeparacion));
		
	 posX=game_objeto.world.width-AnchoCarta;
	 posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)   +  AnchoCarta)/2)+ (0 *(AnchoCarta+ vSeparacion));
		
		angulo=Mano[Mano.length-1].cartilla.angle + 180;
		MostrarReverso(Mano[Mano.length-1].cartilla);
		GrupoR.add(Mano[Mano.length-1].cartilla);
	}	
	
	if (Letra=="L")
	{
		posX=AnchoCarta;
	    posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)   +  AnchoCarta)/2)+ (5 *(AnchoCarta+ vSeparacion));
		angulo=Mano[Mano.length-1].cartilla.angle + 0;
		MostrarReverso(Mano[Mano.length-1].cartilla);
		GrupoL.add(Mano[Mano.length-1].cartilla);
		log(false,"Parte izquierda");
	}	

	if (Letra=="U")
	{
		posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)  +  AnchoCarta  )    /2)+      (0 *(AnchoCarta+ vSeparacion));
		posY=AnchoCarta;	
		
		

		
		
		
		
		
		
		angulo=Mano[Mano.length-1].cartilla.angle - 90;
		MostrarReverso(Mano[Mano.length-1].cartilla);
		GrupoU.add(Mano[Mano.length-1].cartilla);
	}
		
	

	log(false,"Mueve la carta...");	
	twEsp7 = game_objeto.add.tween(Mano[Mano.length-1].cartilla);
	twEsp7.to( {x:posX
		,y:posY,
		angle : angulo
		}, 500, EfectoTween2);		
twEsp7.onComplete.add(	function () {
					ReubicarCartas(Mano,Letra,false,false,Mano[Mano.length-1].cartilla.name);
					if (Letra=="D"){
						HabilitarClick(Mano[Mano.length-1].cartilla);
						PreparaCaracteristicasMano();
					}
					else{
						//MostrarReverso(Mano[Mano.length-1].cartilla);
					}
					//if (RondaParam!=undefined && turnoParam!=undefined) //Si viene de ajeno y no del click
					//{
					MueveAlTablero_bufferEspecial7(RondaParam,turnoParam);
					//}
				}
				,this)
	

		
	twEsp7.start();
	
	if (Letra=="D")	
	{
			
		game_objeto.add.tween(Mano[Mano.length-1].cartilla.scale).to( {x:vEscaladoCarta,y:vEscaladoCarta}, vVelocidadCartas, EfectoTween2,true);
	}		
	MostrarOcultarBotonCante(); //2017/04/18

}


TengoEl7=function(){
	var i;
	var Tengo7=false;
	
	if (Mazo.length>0)
	{
		for (i=0;i<=MazoD.length-1;i++)
		{
			if(MazoD[i].valor==7 && MazoD[i].palo==Triunfo)
			{
				Tengo7=true;
				break;
			}
		}
	}
	return Tengo7;
}





ActualizaMarcador=function(ParaQuien,puntos){
	

	var TextoNuestro;
	var TextoRival;
	var Devuelve;
	
	//CRITICO
	if (ParaQuien=="N")
	{
		MarcadorNuestro=MarcadorNuestro+puntos;
	}
	else
	{
		MarcadorRival=MarcadorRival+puntos;
	}
	
	
	if (MarcadorNuestro>50){
		TextoNuestro=MarcadorNuestro-50 + " Buenas";
	}
	else{
		TextoNuestro=MarcadorNuestro+ " Malas";	
	}
	if (MarcadorRival>50){
		TextoRival=MarcadorRival-50 + " Buenas";
	}
	else{
		TextoRival=MarcadorRival+ " Malas";	
	}	
	
	TextMarcador.text=TextoNuestro+"\n"+TextoRival;
	
	if ( PuntosFin()==true )
	{
		CrearTextoPuntuacion(); 
		Devuelve=false;
	}	
	else
	{
		Devuelve=true;
	}
	
	log(false,"Nosotros "+MarcadorNuestro);
	log(false,"Rival "+MarcadorRival);
	
	return Devuelve;
}

TextoCante=function(JugadorQueMueve,puntos,texto){

	var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
	var text;
	var timerCante;
					//  The Text is positioned at 0, 100
	text = game_objeto.add.text(0, 0, DevolverTexto, style);
	text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	//  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
	text.setTextBounds(0, 100, 800, 100);
	//  Start the timer running - this is important!
	//  It won't start automatically, allowing you to hook it to button events and the like.
	timerCante = game_objeto.time.create(false);
	timerCante.add(3000, EliminaTextoPantalla, this,text);
	timerCante.start();
}

EstaCantado=function(palo){
	var i;
	var Cantado=false;
	for (i=0;i<=RegistrarCantes.length-1;i++)
	{
		if (RegistrarCantes[i]==palo){
			Cantado=true;
			break;
		}
	}

	return Cantado;
}

PosibleCante=function(MazoJugador){
	var i;
	var ReyOros=false;
	var SotaOros=false;
	var ReyCopas=false;
	var SotaCopas=false;
	var ReyEspadas=false;
	var SotaEspadas=false;
	var ReyBastos=false;
	var SotaBastos=false;
	var CanteDisponible=false;
	
	for (i=0; i<=MazoJugador.length-1;i++)
	{
		if (MazoJugador[i].valorReal==10 && MazoJugador[i].palo=="oros"){
			ReyOros=true;
		}
		
		if (MazoJugador[i].valorReal==10 && MazoJugador[i].palo=="copas"){
			ReyCopas=true;
		}
		if (MazoJugador[i].valorReal==10 && MazoJugador[i].palo=="espadas"){
			ReyEspadas=true;
		}	
	
		if (MazoJugador[i].valorReal==10 && MazoJugador[i].palo=="bastos"){
			ReyBastos=true;
		}	
		
		if (MazoJugador[i].valorReal==9 && MazoJugador[i].palo=="oros"){
			SotaOros=true;
		}
		
		if (MazoJugador[i].valorReal==9 && MazoJugador[i].palo=="copas"){
			SotaCopas=true;
		}
		if (MazoJugador[i].valorReal==9 && MazoJugador[i].palo=="espadas"){
			SotaEspadas=true;
		}	
	
		if (MazoJugador[i].valorReal==9 && MazoJugador[i].palo=="bastos"){
			SotaBastos=true;
		}			
	}
	
	if ( (ReyOros==true && SotaOros==true && EstaCantado("oros")==false) ||
		(ReyCopas==true && SotaCopas==true && EstaCantado("copas")==false) ||
		(ReyEspadas==true && SotaEspadas==true && EstaCantado("espadas")==false) ||		
		(ReyBastos==true && SotaBastos==true && EstaCantado("bastos")==false) 	

	)
	{
		CanteDisponible=true;
	}	
	else
	{
		CanteDisponible=false;
	}
	
	return CanteDisponible;

}



MostrarOcultarBotonCante=function(){
	var Baza;
	var i;
	var Companero;
	var Rival1;
	var Rival2;

	log(true,"Cantes TamaÃ±o: "+ MazoCentral.length);
	//alert("llega a cantar 0");
	if (MazoCentral.length==0 || MazoCentral.length==1)
	{
	
		if (SoyElJugador==1)
		{
			Companero=3;
			Rival1=2;
			Rival2=4;
		}
		if (SoyElJugador==2)
		{
			Companero=4;
			Rival1=1;
			Rival2=3;
		}
		if (SoyElJugador==3)
		{
			Companero=1;
			Rival1=2;
			Rival2=4;
		}
		if (SoyElJugador==4)
		{
			Companero=2;
			Rival1=1;
			Rival2=3;
		}		
		
		
		if ( vRonda>1)
		{
			if (ModoMultijugador==false)
			{
				if (BazaNuestraGlobal==true)
				{
					//alert("llega a cantar");
					Cantar(3);
				}
				else
				{
					//alert("llega a cantar 2");
					Cantar(2);
					Cantar(4);
				}
			}
			else
			{
				if (SoyElJugador==QuienTomaElControl)
				{
					if (BazaNuestraGlobal==true)
					{
						for (i=0;i<=ArrayJugadoresDesconectados.length-1;i++)
						{
							if (ArrayJugadoresDesconectados[i].Jugador==Companero)
							{
								//alert("hasta la cocina 1");
								Cantar(Companero);
							}
						}							
					}
					else
					{
						//alert("algo pasa");
						for (i=0;i<=ArrayJugadoresDesconectados.length-1;i++)
						{
							//alert(ArrayJugadoresDesconectados[i]);
							if (ArrayJugadoresDesconectados[i].Jugador==Rival1)
							{
								//alert("hasta la cocina 2");
								Cantar(Rival1);
							}
							if (ArrayJugadoresDesconectados[i].Jugador==Rival2)
							{
								//alert("hasta la cocina 3");
								Cantar(Rival2);
							}							
						}						
					}
					
				}				
			}
		}
	
		log(true,"Cantes Baza Nuestra: "+BazaNuestraGlobal);
		log(true,"Cantes Posible Cante "+PosibleCante(MazoD));
		if (BazaNuestraGlobal==true && PosibleCante(MazoD)==true )
		{
			//BotonCantar.visible=true;	
			BotonCantar.loadTexture('Boton_cantar_on', 0);			
		}
		else{
			//BotonCantar.visible=false;
			BotonCantar.loadTexture('Boton_cantar_off', 0);			
		}	
		
		if (BazaNuestraGlobal==true && TengoEl7()==true)
		{
			//BotonSiete.visible=true;
			BotonSiete.loadTexture('Boton_cambiar_7_on', 0);
		}
		else
		{
			//BotonSiete.visible=false;
			BotonSiete.loadTexture('Boton_cambiar_7_off', 0);
		}
		
		
	}
	else
	{
		//BotonSiete.visible=false;
		//BotonCantar.visible=false;
		BotonCantar.loadTexture('Boton_cantar_off', 0);
		BotonSiete.loadTexture('Boton_cambiar_7_off', 0);
	}
	
}

EnviarCante=function(Habitacion,JugadorQueMueve,Puntos, Palo, SonVueltas, Partida, JugadorFull,JugadorSala,Nombre)
{
	
	
		/////////////

	var Hora=Date.now();
	var ObjectSend=function( Habitacion,JugadorQueMueve,Puntos, Palo, SonVueltas, Partida, JugadorFull,JugadorSala,Nombre,
		IdMsg,ClientId,SalaID,Mensaje){
		 this.Habitacion=Habitacion
		 this.JugadorQueMueve=JugadorQueMueve
		 this.Puntos=Puntos
		 this.Palo=Palo
		 this.SonVueltas=SonVueltas
		 this.Partida=Partida
		 this.JugadorFull=JugadorFull
		 this.JugadorSala=JugadorSala
		 this.Nombre=Nombre
											 
		 this.IdMsg=IdMsg
		 this.ClientId=ClientId
		 this.SalaID=SalaID
		 this.Mensaje=Mensaje
		 
		 this.Fecha=new Date(Date.now());
	 }
	var ArrayAccionesDesconexionesLocal=[];
	ArrayAccionesDesconexionesLocal.splice(0,1000);

		
	var IdMsg=Math.random()*100000;
	var Objeto=new ObjectSend( Habitacion,JugadorQueMueve,Puntos, Palo, SonVueltas, Partida, JugadorFull,JugadorSala,Nombre,
		IdMsg,JugadorSala,Habitacion,'enviar cante');
	ArrayAccionesDesconexiones.push(Objeto);
	ArrayAccionesDesconexionesLocal.push(Objeto);


	socket.emit('enviar cante',ArrayAccionesDesconexionesLocal[0],
	 function(idMensaje)
	 {			 
		EliminarColaMensajes(idMensaje,'enviar cante');
	 }
	);						
	ArrayAccionesDesconexionesLocal.splice(0,1000);	

	
	/////////////	
								
	
}

Cantar=function(JugadorQueMueve){
	var i;
	var ReyOros=false;
	var SotaOros=false;
	var ReyCopas=false;
	var SotaCopas=false;
	var ReyEspadas=false;
	var SotaEspadas=false;
	var ReyBastos=false;
	var SotaBastos=false;
	var palo;
	var puntos=0;
	var MazoJuego=[];
	var LetraMazo;
	
	//BotonCantar.visible=false;
	if ( (BotonCantar.key=="Boton_cantar_on" && JugadorQueMueve==SoyElJugador) || JugadorQueMueve!=SoyElJugador )
	{
		if (BotonCantar.key=="Boton_cantar_on" && JugadorQueMueve==SoyElJugador)
		{
			BotonCantar.loadTexture('Boton_cantar_off', 0);
		}
				
		
	//alert("kk");
		if (ModoMultijugador==true){
			//MazoJuego=MazoD;
			 LetraMazo=DevuelveUbicacionCarta(JugadorQueMueve);
			 //alert(LetraMazo);
			 if (LetraMazo=="D")
			 {
				MazoJuego=MazoD;
			 }
			 if (LetraMazo=="U")
			 {
				MazoJuego=MazoU;
			 }
			 if(LetraMazo=="L")
			 {
				MazoJuego=MazoL;
			 }
			 if (LetraMazo=="R")
			 {
				MazoJuego=MazoR;
			 }
		}
		else
		{
			if (JugadorQueMueve==1)
			{
				MazoJuego=MazoD;
			}

			if (JugadorQueMueve==2)
			{
				MazoJuego=MazoR;
			}
			if (JugadorQueMueve==3)
			{
				MazoJuego=MazoU;
			}
			if (JugadorQueMueve==4)
			{
				MazoJuego=MazoL;
			}	
		}

		
		for (i=0; i<=MazoJuego.length-1;i++)
		{
			if (MazoJuego[i].valorReal==10 && MazoJuego[i].palo=="oros" ){
				ReyOros=true;	
			}
			
			if (MazoJuego[i].valorReal==10 && MazoJuego[i].palo=="copas" ){
				ReyCopas=true;
			}
			if (MazoJuego[i].valorReal==10 && MazoJuego[i].palo=="espadas"){
				ReyEspadas=true;
			}	
		
			if (MazoJuego[i].valorReal==10 && MazoJuego[i].palo=="bastos"){
				ReyBastos=true;
			}	
			
			if (MazoJuego[i].valorReal==9 && MazoJuego[i].palo=="oros"){
				SotaOros=true;
			}
			
			if (MazoJuego[i].valorReal==9 && MazoJuego[i].palo=="copas"){
				SotaCopas=true;
			}
			if (MazoJuego[i].valorReal==9 && MazoJuego[i].palo=="espadas"){
				SotaEspadas=true;
			}	
		
			if (MazoJuego[i].valorReal==9 && MazoJuego[i].palo=="bastos"){
				SotaBastos=true;
			}			
		}	

		if ( ReyOros==true && SotaOros==true && EstaCantado("oros")==false) 
		{
			log(false,"Canta en Oros");
			if (Triunfo=="oros")
			{
				if (ModoMultijugador==true)
				{
					EnviarCante(Habitacion,JugadorQueMueve,40,"oros", SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorFull,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala, ArrayDelaPropiaSala[JugadorQueMueve-1].Nombre) ;
					GrabarResultado(JugadorQueMueve,(MarcadorPartidasNuestro+MarcadorPartidasRival),SonVueltas,0,false,true,false,false);
				}
				TextoBocadillo(JugadorQueMueve,"oros",true,40);
				//MarcadorNuestro=MarcadorNuestro+40;
			}
			else
			{
				if (ModoMultijugador==true)
				{
					EnviarCante(Habitacion,JugadorQueMueve,20,"oros",SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorFull,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,ArrayDelaPropiaSala[JugadorQueMueve-1].Nombre) ;
					GrabarResultado(JugadorQueMueve,(MarcadorPartidasNuestro+MarcadorPartidasRival),SonVueltas,0,true,false,false,false);
				}
				TextoBocadillo(JugadorQueMueve,"oros",true,20);
				//MarcadorNuestro=MarcadorNuestro+20;
			}
			RegistrarCantes.push("oros")
		}
		
		if ( ReyCopas==true && SotaCopas==true && EstaCantado("copas")==false)
		{
			log(false,"Canta en copas");
			if (Triunfo=="copas")
			{
				if (ModoMultijugador==true)
				{			
					EnviarCante(Habitacion,JugadorQueMueve,40,"copas",SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorFull,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,ArrayDelaPropiaSala[JugadorQueMueve-1].Nombre) ;
					
					GrabarResultado(JugadorQueMueve,(MarcadorPartidasNuestro+MarcadorPartidasRival),SonVueltas,0,false,true,false,false);
				}
				//TextoCante("Las 40");
				//MarcadorNuestro=MarcadorNuestro+40;
				TextoBocadillo(JugadorQueMueve,"copas",true,40);
			}
			else
			{
				if (ModoMultijugador==true)
				{
					EnviarCante(Habitacion,JugadorQueMueve,20,"copas", SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorFull,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,ArrayDelaPropiaSala[JugadorQueMueve-1].Nombre);
					
					GrabarResultado(JugadorQueMueve,(MarcadorPartidasNuestro+MarcadorPartidasRival),SonVueltas,0,true,false,false,false);
				}
				//TextoCante("20 en copas");
				//MarcadorNuestro=MarcadorNuestro+20;
				TextoBocadillo(JugadorQueMueve,"copas",true,20);
			}
			RegistrarCantes.push("copas")
			
		}

		if ( ReyEspadas==true && SotaEspadas==true && EstaCantado("espadas")==false)
		{
			log(false,"Canta en espadas");
			if (Triunfo=="espadas")
			{
				if (ModoMultijugador==true)
				{
					EnviarCante(Habitacion,JugadorQueMueve,40,"espadas", SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorFull,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,ArrayDelaPropiaSala[JugadorQueMueve-1].Nombre);
					
					GrabarResultado(JugadorQueMueve,(MarcadorPartidasNuestro+MarcadorPartidasRival),SonVueltas,0,false,true,false,false);
				}
				//TextoCante("Las 40");
				//MarcadorNuestro=MarcadorNuestro+40;
				TextoBocadillo(JugadorQueMueve,"espadas",true,40);
			}
			else
			{
				if (ModoMultijugador==true)
				{
					EnviarCante(Habitacion,JugadorQueMueve,20,"espadas", SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorFull,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,ArrayDelaPropiaSala[JugadorQueMueve-1].Nombre);
					
					GrabarResultado(JugadorQueMueve,(MarcadorPartidasNuestro+MarcadorPartidasRival),SonVueltas,0,true,false,false,false);
				}
				//TextoCante("20 en espadas");
				//MarcadorNuestro=MarcadorNuestro+20;
				TextoBocadillo(JugadorQueMueve,"espadas",true,20);
			}
			RegistrarCantes.push("espadas")
		}
		
		if ( ReyBastos==true && SotaBastos==true && EstaCantado("bastos")==false)
		{
			log(false,"Canta en bastos");
			if (Triunfo=="bastos")
			{
				if (ModoMultijugador==true)
				{
					EnviarCante(Habitacion,JugadorQueMueve,40,"bastos", SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorFull,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,ArrayDelaPropiaSala[JugadorQueMueve-1].Nombre);
					
					GrabarResultado(JugadorQueMueve,(MarcadorPartidasNuestro+MarcadorPartidasRival),SonVueltas,0,false,true,false,false);
				}
				//TextoCante("Las 40");
				//MarcadorNuestro=MarcadorNuestro+40;
				TextoBocadillo(JugadorQueMueve,"bastos",true,40);
			}
			else
			{
				if (ModoMultijugador==true)
				{
					EnviarCante(Habitacion,JugadorQueMueve,20,"bastos", SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorFull,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,ArrayDelaPropiaSala[JugadorQueMueve-1].Nombre);
					
					GrabarResultado(JugadorQueMueve,(MarcadorPartidasNuestro+MarcadorPartidasRival),SonVueltas,0,true,false,false,false);
				}
				//TextoCante("20 en bastos");
				//MarcadorNuestro=MarcadorNuestro+20;
				TextoBocadillo(JugadorQueMueve,"bastos",true,20);
			}
			RegistrarCantes.push("bastos")
		}	
		if ( PuntosFin()==true)
		{
			CrearTextoPuntuacion(); 
		}	
	}
	
}

ColorManoPosibles=function(CartaOpcional){
	var i;

	//if (vRonda>=RondaArrastre){
		//if (CartaOpcional==undefined){
			if (vTurno==SoyElJugador)
			{
				for (i=0;i<=MazoD.length-1;i++)
				{
					if (ValidadorReglas(MazoD[i],SoyElJugador)==true)
					{
						MazoD[i].cartilla.tint=Phaser.Color.getColor(255,255,255);
					}
					else
					{
						MazoD[i].cartilla.tint=Phaser.Color.getColor(110,110,110);
					}		
				}
			}
			else
			{
				for (i=0;i<=MazoD.length-1;i++)
				{
					MazoD[i].cartilla.tint=Phaser.Color.getColor(255,255,255);
				}
			}
		//}
		/*else
		{
					
					if (ValidadorReglas(CartaOpcional,SoyElJugador)==true || vRonda<=RondaArrastre  )
					{
						CartaOpcional.cartilla.tint=Phaser.Color.getColor(255,255,255);
					}
					else
					{
						CartaOpcional.cartilla.tint=Phaser.Color.getColor(110,110,110);
					}		
		}*/
	//}
	/*else
	{
		for (i=0;i<=MazoD.length-1;i++)
		{
			if (ValidadorReglas(MazoD[i],SoyElJugador)==true)
			{
				MazoD[i].cartilla.tint=Phaser.Color.getColor(255,255,255);
			}
			else
			{
				MazoD[i].cartilla.tint=Phaser.Color.getColor(110,110,110);
			}		
		}
	}*/
}

ValidadorReglas=function(Carta,JugadorQueMueve){
	
	var lReturn;
	var ArrayFicticio=[];
	var i;
	var Letra;
	var MazoActual=[];
	
	Letra=DevuelveUbicacionCarta(JugadorQueMueve)
	if (Letra=="D")
	{
		MazoActual=MazoD;
	}
	if (Letra=="U")
	{
		MazoActual=MazoU;
	}	
	if (Letra=="R")
	{
		MazoActual=MazoR;
	}
	if (Letra=="L")
	{
		MazoActual=MazoL;
	}	
	
	
	if (MazoCentral.length==0 || vRonda<=RondaArrastre)
	{
		lReturn=true;
	}
	else
	{
	
		
		if (RTengoMismoPalo(MazoActual)==true){
			log(false,"Tengo del mismo palo");
			
			ArrayFicticio.splice(0,4);
			for (i=0;i<=MazoCentral.length-1;i++){
				ArrayFicticio.push(new CartaBazaNuestra(MazoCentral[i].palo,MazoCentral[i].valorReal,MazoCentral[i].jugador ));
				//log(false,ArrayFicticio[i].palo+" - "+ArrayFicticio[i].valorReal+" - "+ArrayFicticio[i].jugador);		
			}
			
			
			if (RBazaEsNuestra(ArrayFicticio,JugadorQueMueve)==true){
				log(false,"La Baza es nuestra");
				if (Carta.palo==MazoCentral[0].palo){
					log(false,"La carta es del mismo palo");
					lReturn=true;
				}
				else{
					log(false,"La carta NO es del mismo palo");
					lReturn=false;
				}
			}
			else{
				//PreparaArray metiendo carta
				log(false,"NO es nuestra Baza..");
				ArrayFicticio.splice(0,4);
				for (i=0;i<=MazoCentral.length-1;i++){
					ArrayFicticio.push(new CartaBazaNuestra(MazoCentral[i].palo,MazoCentral[i].valorReal,MazoCentral[i].jugador ));					
				}
				ArrayFicticio.push(new CartaBazaNuestra(Carta.palo,Carta.valorReal,JugadorQueMueve ));
				log(false,ArrayFicticio[ArrayFicticio.length-1].palo+" - "+ArrayFicticio[ArrayFicticio.length-1].valorReal+" - "+ArrayFicticio[ArrayFicticio.length-1].jugador);
				
				if (RBazaEsNuestra(ArrayFicticio,JugadorQueMueve)==true){
					log(false,"La Baza no sería nuestra");
					if (Carta.palo==MazoCentral[0].palo){
						log(false,"Es del mismo palo");
						lReturn=true;
					}	
					else{
						log(false,"No es del mismo palo");
						lReturn=false;
					}
				}
				else{
					if (RHariaBaza("MismoPalo",JugadorQueMueve,MazoActual)==true){
						log(false,"Haría Baza con otra carta del mismo palo");
						lReturn=false;
					}
					else{
						log(false,"NO haría Baza con otra carta del mismo palo");
						//lReturn=true;
						if (Carta.palo==MazoCentral[0].palo)
						{
							lReturn=true;
						}
						else
						{
							if (RTengoMismoPalo(MazoActual)==true){
								lReturn=false;				
							}
							else{
								lReturn=true;
							}
						}
						
					}
				}
				
			}			
		}
		else
		{
		
			ArrayFicticio.splice(0,4);
			for (i=0;i<=MazoCentral.length-1;i++){
				ArrayFicticio.push(new CartaBazaNuestra(MazoCentral[i].palo,MazoCentral[i].valorReal,MazoCentral[i].jugador ));
				//log(false,ArrayFicticio[i].palo+" - "+ArrayFicticio[i].valorReal+" - "+ArrayFicticio[i].jugador);
			}
			
			if (RBazaEsNuestra(ArrayFicticio,JugadorQueMueve)==true){
				lReturn=true;
			}
			else{
				
				
				ArrayFicticio.splice(0,4);
				for (i=0;i<=MazoCentral.length-1;i++){
					ArrayFicticio.push(new CartaBazaNuestra(MazoCentral[i].palo,MazoCentral[i].valorReal,MazoCentral[i].jugador ));
					//log(false,ArrayFicticio[i].palo+" - "+ArrayFicticio[i].valorReal+" - "+ArrayFicticio[i].jugador);
				}
				ArrayFicticio.push(new CartaBazaNuestra(Carta.palo,Carta.valorReal,JugadorQueMueve ));
				//log(false,ArrayFicticio[ArrayFicticio.length-1].palo+" - "+ArrayFicticio[ArrayFicticio.length-1].valorReal+" - "+ArrayFicticio[ArrayFicticio.length-1].jugador);
				
				if (RBazaEsNuestra(ArrayFicticio,JugadorQueMueve)==true){
					lReturn=true;
				}
				else{
					if (RHariaBaza("OtroPalo",JugadorQueMueve,MazoActual)==true){
						lReturn=false;
					}
					else{
						lReturn=true;
					}
				}
			}
		}
	}
	
	return lReturn;
	
}

log=function(Mostrar,Texto){
	
	if (Mostrar==true)
	{
		//console.log(Texto);
	}	
}

RHariaBaza=function(Naturaleza,JugadorQueMueve,MazoActual){
	
	var i;
	var u;
	var lEncontrado;
	var ArrayFicticio=[];
	
	lEncontrado=false;
	if (Naturaleza=="MismoPalo")
	{
		for (i=0;i<=MazoActual.length-1;i++)
		{
			if(lEncontrado==false){
			ArrayFicticio.splice(0,4);
			for (u=0;u<=MazoCentral.length-1;u++){
				ArrayFicticio.push(new CartaBazaNuestra(MazoCentral[u].palo,MazoCentral[u].valorReal,MazoCentral[u].jugador ));
			}
			
			if (MazoCentral[0].palo==MazoActual[i].palo){
				ArrayFicticio.push(new CartaBazaNuestra(MazoActual[i].palo,MazoActual[i].valorReal,JugadorQueMueve ));
				if (RBazaEsNuestra(ArrayFicticio,JugadorQueMueve)==true){
					lEncontrado=true;
					break;
				}			
			}	
			}		
		}	
	}

	if (Naturaleza=="MismoPaloSinBaza")
	{
		for (i=0;i<=MazoActual.length-1;i++)
		{
			if(lEncontrado==false){
			ArrayFicticio.splice(0,4);
			for (u=0;u<=MazoCentral.length-1;u++){
				ArrayFicticio.push(new CartaBazaNuestra(MazoCentral[u].palo,MazoCentral[u].valorReal,MazoCentral[u].jugador ));
			}
			
			if (MazoCentral[0].palo==MazoActual[i].palo){
				ArrayFicticio.push(new CartaBazaNuestra(MazoActual[i].palo,MazoActual[i].valorReal,JugadorQueMueve ));
				if (RBazaEsNuestra(ArrayFicticio,JugadorQueMueve)==true){
					lEncontrado=true;
					break;
				}			
			}	
			}		
		}	
	}

	
	if (Naturaleza=="OtroPalo")
	{
		for (i=0;i<=MazoActual.length-1;i++){
			if(lEncontrado==false){
			ArrayFicticio.splice(0,4);
			for (u=0;u<=MazoCentral.length-1;u++){
				ArrayFicticio.push(new CartaBazaNuestra(MazoCentral[u].palo,MazoCentral[u].valorReal,MazoCentral[u].jugador ));
			}
			
			if (MazoCentral[0].palo!=MazoActual[i].palo){
				ArrayFicticio.push(new CartaBazaNuestra(MazoActual[i].palo,MazoActual[i].valorReal,JugadorQueMueve ));
				if (RBazaEsNuestra(ArrayFicticio,JugadorQueMueve)==true){
					lEncontrado=true;
					break;
				}			
			}	
			}
		}	
	
	}
	
	return lEncontrado;
	
}

RTengoMismoPalo=function(MazoActual){
	
	
	var i;
	var lReturn;
	lReturn=false;
	for (i=0;i<=MazoActual.length-1;i++){
		if (MazoActual[i].palo==MazoCentral[0].palo){
			lReturn=true;
			break;
		}	
	}
	return lReturn;
	
}


RBazaEsNuestra=function(ArraySimulado,JugadorQueMueve){
	
	
	var i;
	var vaGanando;
	var BazaNuestra;
	var valorSuperar;
	var paloSuperar
	
		
		for (i=0;i<=ArraySimulado.length-1;i++)
		{
	
		
		//log(false,"Dentro-- "+ ArraySimulado[i].palo +" - "+ArraySimulado[i].valorReal+" - "+ArraySimulado[i].jugador);
		
			if (i==0){
				valorSuperar=ArraySimulado[i].valorReal;
				paloSuperar=ArraySimulado[i].palo;
				vaGanando=ArraySimulado[i].jugador;				
			}
		
			if ( (ArraySimulado[i].valorReal>valorSuperar && ArraySimulado[i].palo==paloSuperar)
				|| (  ArraySimulado[i].palo==Triunfo && paloSuperar!=Triunfo )
			)
			{

			valorSuperar=ArraySimulado[i].valorReal;
			paloSuperar=ArraySimulado[i].palo;
			vaGanando=ArraySimulado[i].jugador;
			
			
			}
			
			
		}
		
			
		if (JugadorQueMueve==1){
			if (vaGanando==1){
				BazaNuestra=true;
			}
			if (vaGanando==2){
				BazaNuestra=false;
			}
			if (vaGanando==3){
				BazaNuestra=true;
			}
			if (vaGanando==4){
				BazaNuestra=false;
			}			
		}
		if (JugadorQueMueve==2){
			if (vaGanando==2){
				BazaNuestra=true;
			}
			if (vaGanando==3){
				BazaNuestra=false;
			}
			if (vaGanando==4){
				BazaNuestra=true;
			}
			if (vaGanando==1){
				BazaNuestra=false;
			}			
		}
		if (JugadorQueMueve==3){
			if (vaGanando==3){
				BazaNuestra=true;
			}
			if (vaGanando==4){
				BazaNuestra=false;
			}
			if (vaGanando==1){
				BazaNuestra=true;
			}
			if (vaGanando==2){
				BazaNuestra=false;
			}			
		}
		if (JugadorQueMueve==4){
			if (vaGanando==4){
				BazaNuestra=true;
			}
			if (vaGanando==1){
				BazaNuestra=false;
			}
			if (vaGanando==2){
				BazaNuestra=true;
			}
			if (vaGanando==3){
				BazaNuestra=false;
			}			
		}	

	return BazaNuestra;
	
}
DevuelveUbicacionCarta=function(JugadorMazo){
	
	var posicionMazo="D";
	log(true,"Dentro de DevuelveUbicacion "+SoyElJugador+" "+JugadorMazo)
	
	if(SoyElJugador==1)
	{
		if (JugadorMazo==1){
			posicionMazo="D"
		}
		if (JugadorMazo==2){
			posicionMazo="R"
		}
		if (JugadorMazo==3){
			posicionMazo="U"
		}
		if (JugadorMazo==4){
			posicionMazo="L"
		}	
	}
	
	if(SoyElJugador==2)
	{
		if (JugadorMazo==2){
			posicionMazo="D"
		}
		if (JugadorMazo==3){
			posicionMazo="R"
		}
		if (JugadorMazo==4){
			posicionMazo="U"
		}
		if (JugadorMazo==1){
			posicionMazo="L"
		}
	}

	if(SoyElJugador==3)
	{
		if (JugadorMazo==3){
			posicionMazo="D"
		}
		if (JugadorMazo==4){
			posicionMazo="R"
		}
		if (JugadorMazo==1){
			posicionMazo="U"
		}
		if (JugadorMazo==2){
			posicionMazo="L"
		}
	}

	if(SoyElJugador==4)
	{
		if (JugadorMazo==4){
			posicionMazo="D"
		}
		if (JugadorMazo==1){
			posicionMazo="R"
		}
		if (JugadorMazo==2){
			posicionMazo="U"
		}
		if (JugadorMazo==3){
			posicionMazo="L"
		}
	}	
	
	log(false,"Va a Devolver.."+posicionMazo);
	return posicionMazo;
}


DevuelveJugadorSegunMazo=function(LetraMazo){
	var Jugador;
	
	if(SoyElJugador==1)
	{
		if (LetraMazo=="D"){
			Jugador=1;
		}
		if (LetraMazo=="R"){
			Jugador=2;
		}
		if (LetraMazo=="U"){
			Jugador=3;
		}
		if (LetraMazo=="L"){
			Jugador=4;
		}	
	}
	
	if(SoyElJugador==2)
	{
		if (LetraMazo=="D"){
			Jugador=2;
		}
		if (LetraMazo=="R"){
			Jugador=3;
		}
		if (LetraMazo=="U"){
			Jugador=4;
		}
		if (LetraMazo=="L"){
			Jugador=1;
		}	
	}
	
	if(SoyElJugador==3)
	{
		if (LetraMazo=="D"){
			Jugador=3;
		}
		if (LetraMazo=="R"){
			Jugador=4;
		}
		if (LetraMazo=="U"){
			Jugador=1;
		}
		if (LetraMazo=="L"){
			Jugador=2;
		}	
	}

	if(SoyElJugador==4)
	{
		if (LetraMazo=="D"){
			Jugador=4;
		}
		if (LetraMazo=="R"){
			Jugador=1;
		}
		if (LetraMazo=="U"){
			Jugador=2;
		}
		if (LetraMazo=="L"){
			Jugador=3;
		}	
	}	
	
	return Jugador;
}

Esconde_Mazo=function(QuienReparte){
	var i;
	var posicionMazo;
	
	if(SoyElJugador==1)
	{
		if (QuienReparte==1){
			posicionMazo="D"
		}
		if (QuienReparte==2){
			posicionMazo="R"
		}
		if (QuienReparte==3){
			posicionMazo="U"
		}
		if (QuienReparte==4){
			posicionMazo="L"
		}	
	}
	
	if(SoyElJugador==2)
	{
		if (QuienReparte==2){
			posicionMazo="D"
		}
		if (QuienReparte==3){
			posicionMazo="R"
		}
		if (QuienReparte==4){
			posicionMazo="U"
		}
		if (QuienReparte==1){
			posicionMazo="L"
		}
	}

	if(SoyElJugador==3)
	{
		if (QuienReparte==3){
			posicionMazo="D"
		}
		if (QuienReparte==4){
			posicionMazo="R"
		}
		if (QuienReparte==1){
			posicionMazo="U"
		}
		if (QuienReparte==2){
			posicionMazo="L"
		}
	}

	if(SoyElJugador==4)
	{
		if (QuienReparte==4){
			posicionMazo="D"
		}
		if (QuienReparte==1){
			posicionMazo="R"
		}
		if (QuienReparte==2){
			posicionMazo="U"
		}
		if (QuienReparte==3){
			posicionMazo="L"
		}
	}	

	
	if (posicionMazo=="D"){
		for(i=0;i<=Mazo.length-1;i++){
			Mazo[i].cartilla.x=game_objeto.world.centerX+(i/2);
			Mazo[i].cartilla.y=game_objeto.world.height-(AltoCartaEscalado)-(Mazo[i].cartilla.height/2)-(vSeparacion*2)-70;	
		}
	}
	
	if (posicionMazo=="U"){
		for(i=0;i<=Mazo.length-1;i++){
			Mazo[i].cartilla.x=game_objeto.world.centerX+(i/2);
			Mazo[i].cartilla.y=(Mazo[i].cartilla.height)+(Mazo[i].cartilla.height/2)+(vSeparacion*2);	;	
		}
	}
	
	if (posicionMazo=="L"){
		for(i=0;i<=Mazo.length-1;i++){
			Mazo[i].cartilla.x=(Mazo[i].cartilla.height)+(Mazo[i].cartilla.height/2)+(vSeparacion*2)+(i/2);
			Mazo[i].cartilla.y=CentroIrreal;	
			//Mazo[i].cartilla.angle=90;
		}
	}

	if (posicionMazo=="R"){
		for(i=0;i<=Mazo.length-1;i++){
			Mazo[i].cartilla.x=game_objeto.world.width-(Mazo[i].cartilla.height)-(Mazo[i].cartilla.height/2)-(vSeparacion*3)+(i/2);
			Mazo[i].cartilla.y=CentroIrreal;	
		}
	}
	
};


MoverMazo=function(){
		//var AnchoCarta=Mazo[Mazo.length-1].cartilla.width;
		var i;
		var u;
		var Encontrado;
		
		for(i=0;i<=Mazo.length-1;i++){
					
			var s = game_objeto.add.tween(Mazo[i].cartilla);
			s.to( {x:(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)  +  AnchoCarta  )    /2)+      (0 *(AnchoCarta+ vSeparacion))+(i/2),
			y:CentroIrreal}, 500, EfectoTween1);	
			s.start();
			
		}
		

		
		if (ModoMultijugador==true)
		{
			//alert("Moviendo Mazo");
			
			////////////////////////////////////////////////////////////////////
			//
				CalculaControl();
			
				var TiempoParaturno=120;
		
				timerestoylisto.loop(1000, function(){	//1.0.6
				
					
				
					if (TiempoParaturno<=0 || PartidaComenzada==true)
					{
						timerestoylisto.stop();
						
					}
					else
					{
						EnviarEstoyListo();
						TiempoParaturno=TiempoParaturno-1;
					}
					
					//console.log("Reloj");
				
					
				});
				timerestoylisto.start();
				
			
			//
			

			
		}
		else
		{
			PreparaCaracteristicasMano();
			//log(true,"IA Desde Mover Mazo");
			
			//var timer = game_objeto.time.create(false);
			var TiempoPensarTirada=TiempoPensar(vTurno);
			//var	timer = game_objeto.time.create(false);
			timer.stop();
			timer.add(TiempoPensarTirada, function(){
				timer.stop(); 
			//console.log("IA DESDE mover mazo");
			IA(SoyElJugador);} );
			timer.start();			
		}
		
		BotonCantar.visible=true;
		BotonSiete.visible=true;
		//BotonSalir.x=xSalir;
		//BotonSalir.visible=true;

};

EnviarEstoyListo=function()
{
	var i;
	
	
	if (PartidaComenzada==false)//1.0.6
	{
	
			var ObjectSend=function( Habitacion,JugadorSala,idPartida,
				IdMsg,ClientId,SalaID,Mensaje){
				 this.Habitacion=Habitacion
				 this.JugadorSala=JugadorSala
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
			var Objeto=new ObjectSend(Habitacion,socket.id,idPartida,
				IdMsg,ArrayDelaPropiaSala[SoyElJugador-1].JugadorSala,Habitacion,'Estoy listo');
			ArrayAccionesDesconexiones.push(Objeto);
			ArrayAccionesDesconexionesLocal.push(Objeto);


			socket.emit('Estoy listo',ArrayAccionesDesconexionesLocal[0],
			 function(idMensaje)
			 {			 
				EliminarColaMensajes(idMensaje,'Estoy listo');
			 }
			);						
			ArrayAccionesDesconexionesLocal.splice(0,1000);	




		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		/////////////////////////////////////////////////////////////
		//Testando
		//1.0.4 Uno por otro
		//console.log("Llamada 1");
		CalculaControl();
		//RecalculaDesconectados();
		
		if (QuienTomaElControl==SoyElJugador)
		{
			for (i=0;i<=ArrayDelaPropiaSala.length-1;i++)
			{
				if (ArrayDelaPropiaSala[i].Desconectado==true )
				{
					//socket.emit('Estoy listo', Habitacion,ArrayDelaPropiaSala[i].JugadorSala);
					
					
						var ObjectSend=function( Habitacion,JugadorSala,idPartida,
						IdMsg,ClientId,SalaID,Mensaje){
						 this.Habitacion=Habitacion
						 this.JugadorSala=JugadorSala
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
					var Objeto=new ObjectSend(Habitacion,ArrayDelaPropiaSala[i].JugadorSala,idPartida,
						IdMsg,ArrayDelaPropiaSala[i].JugadorSala,Habitacion,'Estoy listo');
					ArrayAccionesDesconexiones.push(Objeto);
					ArrayAccionesDesconexionesLocal.push(Objeto);


					socket.emit('Estoy listo',ArrayAccionesDesconexionesLocal[0],
					 function(idMensaje)
					 {			 
						EliminarColaMensajes(idMensaje,'Estoy listo');
					 }
					);						
					ArrayAccionesDesconexionesLocal.splice(0,1000);	
					
				}
			}
			
		}
		//Testando
		
	}
}

RecalculaDesconectados=function()
{
	var i;
	var FuerzaComienzo;
	var u;
	var Encontrado;
	var Desconectados=0;
	
	//console.log("RecalculaDesconectados..");
	for (i=0;i<=ArrayDelaPropiaSala.length-1;i++)
	{
		if (ArrayDelaPropiaSala[i].Desconectado==true)
		{
			
			
			Encontrado=false;
			//console.log("Bucle For");
			for ( var u=0;u<=ArrayJugadoresDesconectados.length-1;u++)
			{
					
				//console.log("compara "+ ArrayJugadoresDesconectadosID[u]+" con "+ArrayDelaPropiaSala[i].JugadorSala);
				if (ArrayJugadoresDesconectados[u].JugadorSala==ArrayDelaPropiaSala[i].JugadorSala)
				{
					Encontrado=true;
				}
			
			}
			
			if (Encontrado==false)
			{
				
				ArrayJugadoresDesconectados.push( new ObjetoDesconexion ( (i+1),ArrayDelaPropiaSala[i].JugadorSala ));
				//ArrayJugadoresDesconectadosID.push(ArrayDelaPropiaSala[i].JugadorSala);
			}

			
			
		}
		else
		{
			//1.0.6
			Encontrado=false;

			for ( var u=0;u<=ArrayJugadoresDesconectados.length-1;u++)
			{
					
				//console.log("compara "+ ArrayJugadoresDesconectadosID[u]+" con "+ArrayDelaPropiaSala[i].JugadorSala);
				if (ArrayJugadoresDesconectados[u].JugadorSala==ArrayDelaPropiaSala[i].JugadorSala)
				{
					Encontrado=true;
					break;
				}
			
			}
			
			if (Encontrado==true)
			{
				
				ArrayJugadoresDesconectados.splice(u,1);
			}		
			//1.0.6
			
		}
			
	}
	
}
SacaTriunfo=function(){

	SemaforoRepartos.splice(0,100);
	SemaforoTextoPuntuacion.splice(0,100);
	
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {x:(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6))  - (vSeparacion*8) +  AnchoCarta)/2)+ (1 *(AnchoCarta+ vSeparacion))
		,y:CentroIrreal,
		angle : 90
		}, 500, EfectoTween1);		
		
		s.onComplete.add(MoverMazo,this)		
		
		s.start();
		
		
		
		CartaTriunfo.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,5,Mazo[Mazo.length-1].jugador));
		MostrarAnverso(Mazo[Mazo.length-1].cartilla);
		//CartaTriunfo[CartaTriunfo.length-1].cartilla.moveDown();
		Grupo7.add(CartaTriunfo[CartaTriunfo.length-1].cartilla);
		game_objeto.world.bringToTop(GrupoMazo);
		game_objeto.world.bringToTop(GrupoD);
		Triunfo=CartaTriunfo[CartaTriunfo.length-1].palo;
		//Mazo[Mazo.length-1].cartilla.tint =  Phaser.Color.getColor(100,100,100);
		Mazo.pop();
		
		if (ModoMultijugador==true)
		{
			ObjTurnoD.visible=true;
			ObjTurnoR.visible=true;
			ObjTurnoU.visible=true;
			ObjTurnoL.visible=true;
		}
		//onSocketComenzadPartida();
		
		//alert(vTurno);
		
		//CalculaControl();
		
		//ContadorTurno();
		//PreparaCaracteristicasMano();
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



function Moviendo_Carta(sprite) {
  var s;
  var i;
//  log(false,"co");
//log(false,"mide moviendo.. "+MazoD.length);
	for (var i=MazoD.length-1;i>=0;i--){
	   if (checkOverlap(sprite, MazoD[i].cartilla))
		{
			MazoD[i].cartilla.tint=Phaser.Color.getColor(175,200,111);
		}
		else{
			//if (vTurno==SoyElJugador){
				//ColorManoPosibles(sprite);
			MazoD[i].cartilla.tint=Phaser.Color.getColor(255,255,255);
			//ColorManoPosibles();
			//}
			//else
			//{
			//	MazoD[i].cartilla.tint=Phaser.Color.getColor(255,255,255);
			//}			
		}
		//ColorManoPosibles();
		//sprite.tint=Phaser.Color.getColor(255,255,255);
	}	
}

function Parar_Drag(sprite) {
  var s;
  var Colision=false;	
  var i;
  var k;
  var text;
	//console.log("ESTADO CONEXION "+socket.socket.connected);
	log(false,"KEYYYYYYYYYYYYYYYYYYYY "+sprite.name);
	log(false,"elimina");
	if (1==1) //(!tw1.isRunning && !tw2.isRunning && !tw3.isRunning && !tw4.isRunning && !twEsp7.isRunning && !twReu.isRunning && !twRec1.isRunning && !twRec2.isRunning && !twRec3.isRunning)
	{
	
		/*for (i=0;i<=MazoD.length-1;i++){
			MazoD[i].cartilla.tint=Phaser.Color.getColor(255,255,255);
		}*/
		ColorManoPosibles();

		for (i=0;i<=MazoD.length-1;i++){
		   if (i!=MazoD.length-1){
			   if (checkOverlap(sprite, MazoD[i].cartilla) && checkOverlap(sprite, MazoD[i+1].cartilla))
			   {
				Trucaposicion(sprite,MazoD,MazoD[i+1].posicion-0.5)
				Colision=true;			
				
				break;
			   }
			   else
			   {
					if (checkOverlap(sprite, MazoD[i].cartilla)) {					
						Trucaposicion(sprite,MazoD,MazoD[i].posicion-0.5)
						Colision=true;					
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
				if (checkOverlap(sprite, MazoD[i].cartilla)) {		
					log(false,"La última");	
					Trucaposicion(sprite,MazoD,MazoD[i].posicion+0.5)	
					Colision=true;					
					break;
				}
				else{
					//log(false,"Regresa a casa 2");	
				}
				
				
			}
		}
		
		if (Colision==false){
			for (i=0;i<=MazoD.length-1;i++){
				if (sprite.name==MazoD[i].cartilla.name){
					var posicionX=devuelveX("D",MazoD[i].posicion);
					var posicionY=devuelveY("D",MazoD[i].posicion)
					break;
				}
			}
			
			//ape if(ValidaMovimientoJugadorSinActualizarRapido(vRonda,SoyElJugador)==true)
			//{
				//como quiero que todo siga igual, pong este if, que me fastidiaba los turnos, y en el siguiente, la misma condición.
				log(true, "LON "+MazoCentral.length)
				log(true,"turnoOOO ANTES "+vTurno);
				//QuienGanaManoResultado(SoyElJugador);
				
				log(true,"turnoOOO DESPUES "+vTurno);
			//}
			//else
			//{
			//	//console.log("ERRO: NO puedo mover desde parar drag "+vRonda+" "+SoyElJugador);
			//}
			
			log(true,"turnoOOO "+vTurno);
			//console.log("tw1: "+tw1.isRunning); 
			//console.log("tw2: "+tw2.isRunning); 
			//console.log("tw3: "+tw3.isRunning); 
			//console.log("tw4: "+tw4.isRunning); 
			//console.log("twEsp7: "+twEsp7.isRunning); 
			//console.log("twReu: "+twReu.isRunning); 
			//console.log("twRec1: "+twRec1.isRunning); 
			//console.log("twRec2: "+twRec2.isRunning); 
			//console.log("twRec3: "+twRec3.isRunning); 
			//console.log("Marcadores: "+MarcadorNuestro+" "+MarcadorRival+" "+PuntosGanar); 
			for (var k=0;k<=SemaforoRondas.length-1;k++){
				//console.log("SEM: "+SemaforoRondas[k].Ronda+" "+SemaforoRondas[k].Jugador);
			}	

			//console.log("Partida: "+PartidaComenzada);
			//console.log("vTurno: "+vTurno);
			//console.log("Soy: "+SoyElJugador);
			//console.log("Son Vueltas: "+SonVueltas);
			//console.log("Marcadores: "+MarcadorNuestro+" - "+MarcadorRival);
			
			if ( ( Math.abs(sprite.x-posicionX)<=MazoD[MazoD.length-1].cartilla.width*1.5 &&
				Math.abs(sprite.y-posicionY)<=MazoD[MazoD.length-1].cartilla.height*1.5 && vTurno==SoyElJugador)	&& 
				(!tw1.isRunning && !tw2.isRunning && !tw3.isRunning && !tw4.isRunning && !twEsp7.isRunning && !twReu.isRunning && !twRec1.isRunning && !twRec2.isRunning && !twRec3.isRunning) &&
				PartidaComenzada==true 
				&&  ( (MarcadorNuestro<PuntosGanar && MarcadorRival<PuntosGanar)|| SonVueltas==false )
				)

				//&& ValidaMovimientoJugadorSinActualizarRapido(vRonda,SoyElJugador)==true 
			{

				if (ValidadorReglas(MazoD[i],SoyElJugador)==true)
				{
					//New
					//ape SemaforoRondasRapido.push(new ObjetoJugadoresRonda(vRonda,SoyElJugador) );
					
					if (ValidaMovimientoJugadorSinActualizar(vRonda,SoyElJugador)==true)
					{
						timer.stop(); //Mucho miedo 29/04/2017
						SemaforoRondas.push(new ObjetoJugadoresRonda(vRonda,SoyElJugador) );
						//console.log("BLOQUEO DESDE Parar_Drag "+SoyElJugador+" "+vRonda);
						
						//1.0.4
						
						OcultarBotones();
						if (ModoMultijugador==false)
						{
							MazoCentral.push(new Carta(MazoD[i].palo,MazoD[i].idCarta,MazoD[i].valor,MazoD[i].cartilla,null,SoyElJugador,null,null));//no hace falta la Fecha hora del server
							
							MueveAlTablero(sprite,"D",vRonda,SoyElJugador);
							MazoD.splice(i,1);	
							ReubicarCartas(MazoD,"D");
						}
						else
						{
							
							
							/*var ObjectSend=function( Habitacion,SoyElJugador,Cartilla,Turno, RondaParam, 
								IdMsg,ClientId,SalaID,Mensaje){
								 this.Habitacion=Habitacion
								 this.SoyElJugador=SoyElJugador
								 this.Cartilla=Cartilla
								 this.Turno=Turno
								 this.Ronda=RondaParam
																	 
								 this.IdMsg=IdMsg
								 this.ClientId=ClientId
								 this.SalaID=SalaID
								 this.Mensaje=Mensaje
								 
								 this.Fecha=new Date(Date.now());
							 }
							var ArrayAccionesDesconexionesLocal=[];
							ArrayAccionesDesconexionesLocal.splice(0,1000);
								
								
							var ArrayAccionesDesconexionesLocal=[];
							ArrayAccionesDesconexionesLocal.splice(0,1000);
		 
								
							var IdMsg=Math.random()*100000;
							var Objeto=new ObjectSend(Habitacion,SoyElJugador,MazoD[i].cartilla.name,SoyElJugador, vRonda,
								IdMsg,ArrayDelaPropiaSala[SoyElJugador-1].JugadorSala,Habitacion,'enviar carta centro solo yo');
							ArrayAccionesDesconexiones.push(Objeto);
							ArrayAccionesDesconexionesLocal.push(Objeto);
		
							if (socket!=undefined)
							{
								socket.emit('enviar carta centro solo yo',ArrayAccionesDesconexionesLocal[0],
								 function(idMensaje)
								 {			 
									EliminarColaMensajes(idMensaje,'enviar carta centro solo yo');
								 }
								);						
								ArrayAccionesDesconexionesLocal.splice(0,1000);	
							}*/
						
						}
						
						
						
						//console.log("Acabo de introducir "+MazoCentral[MazoCentral.length-1].palo+" "+MazoCentral[MazoCentral.length-1].valor);
						
						
						
						
						
						
								
						
						if (ModoMultijugador==true)
						{
							
							
							/////////////
							vNoEsta=false; //1.0.8
							
							var Hora=Date.now();
							var ObjectSend=function( Habitacion,SoyElJugador,Cartilla,Turno, RondaParam, SonVueltas,Partida,JugadorFull,JugadorSala,Nombre,
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
								 
								 this.IdMsg=IdMsg
								 this.ClientId=ClientId
								 this.SalaID=SalaID
								 this.Mensaje=Mensaje
								 
								 this.Fecha=new Date(Date.now());
							 }
							var ArrayAccionesDesconexionesLocal=[];
							ArrayAccionesDesconexionesLocal.splice(0,1000);
		 
								
							var IdMsg=Math.random()*100000;
							var Objeto=new ObjectSend(Habitacion,SoyElJugador,MazoD[i].cartilla.name,vTurno, vRonda, SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),
								ArrayDelaPropiaSala[SoyElJugador-1].JugadorFull,ArrayDelaPropiaSala[SoyElJugador-1].JugadorSala,
								ArrayDelaPropiaSala[SoyElJugador-1].Nombre,
								IdMsg,ArrayDelaPropiaSala[SoyElJugador-1].JugadorSala,Habitacion,'enviar carta centro');
							ArrayAccionesDesconexiones.push(Objeto);
							ArrayAccionesDesconexionesLocal.push(Objeto);


							socket.emit('enviar carta centro',ArrayAccionesDesconexionesLocal[0],
							 function(idMensaje)
							 {			 
								EliminarColaMensajes(idMensaje,'enviar carta centro');
								//ReubicarCartas(MazoD,"D");
									/*//console.log("Borrar: Hola"+idMensaje+" - "+CartaMovida);
									//console.log("Borrar: Lon "+MazoD.length);
									for (var j=0;j<=MazoD.length-1;j++)
									{
										//console.log("Borrar Recorro "+MazoD[j].name);
										if (MazoD[j].name==CartaMovida)
										{
											//console.log("Borrar: Elimino "+CartaMovida)
											MazoD.splice(j,1);	
											ReubicarCartas(MazoD,"D");
											break;
										}
									}*/
									

							 }
							);						
							ArrayAccionesDesconexionesLocal.splice(0,1000);	
  
							
							/////////////							
							
							
							
							
							//socket.emit('enviar carta centro', Habitacion,SoyElJugador,MazoD[i].cartilla.name,vTurno, vRonda, SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),ArrayDelaPropiaSala[SoyElJugador-1].JugadorFull,ArrayDelaPropiaSala[SoyElJugador-1].JugadorSala,ArrayDelaPropiaSala[SoyElJugador-1].Nombre) ;
							if (MazoD[i].palo==Triunfo)
							{
								if (MazoD[i].valor==1)
								{
									GrabarResultado(SoyElJugador,(MarcadorPartidasNuestro+MarcadorPartidasRival),SonVueltas,0,false,false,true,false);
								}
								if (MazoD[i].valor==3)
								{
									GrabarResultado(SoyElJugador,(MarcadorPartidasNuestro+MarcadorPartidasRival),SonVueltas,0,false,false,false,true);
								}
							}
						}

						
						
					}

				
				}
				

			}
			else
			{
				//alert("reubica");
				ReubicarCartas(MazoD,"D");
				if (vTurno!=SoyElJugador  && (Math.abs(sprite.x-posicionX)<=MazoD[MazoD.length-1].cartilla.width &&
				Math.abs(sprite.y-posicionY)<=MazoD[MazoD.length-1].cartilla.height)  ){
		
					
						//  The Text is positioned at 0, 100
						text = game_objeto.add.text(0, 0, textoturno());
					
						text.x=game_objeto.world.centerX;
						text.y=game_objeto.world.centerY+30
						
						text.anchor.set(0.5);
						text.align = 'center';


						text.font = 'Arial Black';
						text.fontSize = 30;
						text.fontWeight = 'bold';


						text.stroke = '#961918';
						text.strokeThickness = 7;
						text.fill = '#F8E600';		
						

						
						//  It won't start automatically, allowing you to hook it to button events and the like.
						var timertextoturno = game_objeto.time.create(false);
						timertextoturno.add(1500, EliminaTextoPantalla, this,text);
						timertextoturno.start();
						

						//  Set a timerEvent to occur after 3 seconds
						

				}
			}
			
		}
		else
		{
			ReubicarCartas(MazoD,"D");
		}	
	}
	
	
}

RobarCartas1=function(RondaParam,turnoParam){
	var LetraMazo;
	var spriteRobar;
	var Mano;
	
	//if (MarcadorNuestro<PuntosGanar && MarcadorRival<PuntosGanar)
	//{
		
		var turnoFicticio=turnoParam;
		
		log(false,"Intenta robar..");
		if (Mazo.length>0){
		
		spriteRobar=Mazo[Mazo.length-1].cartilla
		LetraMazo=DevuelveUbicacionCarta(turnoFicticio);
		
		if (LetraMazo=="U"){
			var Mano=MazoU;
			var angleCarta=Mazo[Mazo.length-1].cartilla.angle;
			MostrarReverso(Mazo[Mazo.length-1].cartilla);
			GrupoU.add(Mazo[Mazo.length-1].cartilla);
		}
		if (LetraMazo=="D"){
			var Mano=MazoD;
			var angleCarta=Mazo[Mazo.length-1].cartilla.angle;
			MostrarAnverso(Mazo[Mazo.length-1].cartilla);
			GrupoD.add(Mazo[Mazo.length-1].cartilla);
		}
		if (LetraMazo=="L"){
			var Mano=MazoL;
			var angleCarta=Mazo[Mazo.length-1].cartilla.angle+90;
			MostrarReverso(Mazo[Mazo.length-1].cartilla);
			GrupoL.add(Mazo[Mazo.length-1].cartilla);
		}
		if (LetraMazo=="R"){
			var Mano=MazoR;
			var angleCarta=Mazo[Mazo.length-1].cartilla.angle+270;
			MostrarReverso(Mazo[Mazo.length-1].cartilla);
			GrupoR.add(Mazo[Mazo.length-1].cartilla);
		}	
		
		log(false,"Tamaño de la mano "+Mano.length);
		
			
			
			Mano.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,5,Mazo[Mazo.length-1].jugador));
			ReproducirSonido('_Reparto');
			
			
			if (LetraMazo=="D"){
				PreparaCaracteristicasMano();
			}
			
			Mazo.pop();
			
			
			
			var posX=devuelveX(LetraMazo,99);
			log(false,"X de "+LetraMazo+" "+posX);
			var posY=devuelveY(LetraMazo,99);
				
			//if (LetraMazoReubicar=="L"){
					//DesHabilitarClick(Mano[Mano.length-1].cartilla);
			if (Mazo.length>0){
				tw1 = game_objeto.add.tween(Mano[Mano.length-1].cartilla);
						tw1.to( {x:posX
						,y:posY
						,angle:angleCarta
						}
						, vVelocidadRobar, EfectoTween1);
						tw1.onComplete.add(//RobarCartas2,this)
							function () {
								ReubicarCartas(Mano,LetraMazo);
								RobarCartas2(RondaParam,turnoParam); //Truco para poder pasar por parámetro
							}
						);
						if (LetraMazo=="D")
						{
							game_objeto.add.tween(Mano[Mano.length-1].cartilla.scale).to( {x:vEscaladoCarta,y:vEscaladoCarta}, vVelocidadCartas, EfectoTween2,true);
						}
						tw1.start();
			}
			else
			{
				log(false,"No quedan cartas");
				log(false,"Mazo grr: "+Mazo[0].valor+" "+Mazo[0].palo);
			}
			
			if (CartaTriunfo.length>0){
				CartaTriunfo[CartaTriunfo.length-1].cartilla.moveDown();	
			}
		}
	//}
}



RobarCartas2=function(RondaParam,turnoParam){
	var LetraMazo;
	var spriteRobar;
	var Mano;
	
	//if (MarcadorNuestro<PuntosGanar && MarcadorRival<PuntosGanar)
	//{
	
		var turnoFicticio=turnoParam+1;
		
		if (Mazo.length>0){
		
		/*log(false,"vTurno: "+vTurno);
		log(false,"vTurno Ficticio: "+turnoFicticio);*/
		if (turnoFicticio>4){
			turnoFicticio=turnoFicticio-4;
		}
		
		//log(false,"vTurno Ficticio Modificicado: "+turnoFicticio);
		spriteRobar=Mazo[Mazo.length-1].cartilla
		
		//log(false,"Robada 2 "+Mazo[Mazo.length-1].valor+" de "+Mazo[Mazo.length-1].palo);
		
		
		LetraMazo=DevuelveUbicacionCarta(turnoFicticio);
		//log(false,"Letra: "+LetraMazo);
		
		if (LetraMazo=="U"){
			var Mano=MazoU;
			var angleCarta=Mazo[Mazo.length-1].cartilla.angle;
			MostrarReverso(Mazo[Mazo.length-1].cartilla);
			GrupoU.add(Mazo[Mazo.length-1].cartilla);
		}
		if (LetraMazo=="D"){
			var Mano=MazoD;
			var angleCarta=Mazo[Mazo.length-1].cartilla.angle;
			MostrarAnverso(Mazo[Mazo.length-1].cartilla);
			GrupoD.add(Mazo[Mazo.length-1].cartilla);
		}
		if (LetraMazo=="L"){
			var Mano=MazoL;
			var angleCarta=Mazo[Mazo.length-1].cartilla.angle+90;
			MostrarReverso(Mazo[Mazo.length-1].cartilla);
			GrupoL.add(Mazo[Mazo.length-1].cartilla);
		}
		if (LetraMazo=="R"){
			var Mano=MazoR;
			var angleCarta=Mazo[Mazo.length-1].cartilla.angle+270;
			MostrarReverso(Mazo[Mazo.length-1].cartilla);
			GrupoR.add(Mazo[Mazo.length-1].cartilla);
		}	
		
		//if (Mano.length<6){
			Mano.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,5,Mazo[Mazo.length-1].jugador));
			ReproducirSonido('_Reparto');
			
			if (LetraMazo=="D"){
				PreparaCaracteristicasMano();
			}
			
			Mazo.pop();
			
			
			
			var posX=devuelveX(LetraMazo,99);
			var posY=devuelveY(LetraMazo,99);
			log(false,"X de "+LetraMazo+" "+posX);
				
			if (Mazo.length>0){
					//DesHabilitarClick(Mano[Mano.length-1].cartilla);
					tw1 = game_objeto.add.tween(Mano[Mano.length-1].cartilla);
						tw1.to( {x:posX
						,y:posY
						,angle:angleCarta
						}
						, vVelocidadRobar, EfectoTween1);
						tw1.onComplete.add(//RobarCartas3,this)
							function () {
								ReubicarCartas(Mano,LetraMazo);
								RobarCartas3(RondaParam,turnoParam); //Truco para poder pasar por parámetro
							}
						);
						if (LetraMazo=="D")
						{
							game_objeto.add.tween(Mano[Mano.length-1].cartilla.scale).to( {x:vEscaladoCarta,y:vEscaladoCarta}, vVelocidadCartas, EfectoTween2,true);
						}
						tw1.start();
			}
			if (CartaTriunfo.length>0){
				CartaTriunfo[CartaTriunfo.length-1].cartilla.moveDown();	
			}
		}
	//}
}


RobarCartas3=function(RondaParam,turnoParam){
	var LetraMazo;
	var spriteRobar;
	var Mano;
	
	//if (MarcadorNuestro<PuntosGanar && MarcadorRival<PuntosGanar)
	//{
		var turnoFicticio=turnoParam+2;
		if (turnoFicticio>4){
			turnoFicticio=turnoFicticio-4;
		}
		
		if (Mazo.length>0){
		
		spriteRobar=Mazo[Mazo.length-1].cartilla
		//log(false,"Robada 3 "+Mazo[Mazo.length-1].valor+" de "+Mazo[Mazo.length-1].palo);
		
		LetraMazo=DevuelveUbicacionCarta(turnoFicticio);
		
		if (LetraMazo=="U"){
			var Mano=MazoU;
			var angleCarta=Mazo[Mazo.length-1].cartilla.angle;
			MostrarReverso(Mazo[Mazo.length-1].cartilla);
			GrupoU.add(Mazo[Mazo.length-1].cartilla);
		}
		if (LetraMazo=="D"){
			var Mano=MazoD;
			var angleCarta=Mazo[Mazo.length-1].cartilla.angle;
			MostrarAnverso(Mazo[Mazo.length-1].cartilla);
			GrupoD.add(Mazo[Mazo.length-1].cartilla);
		}
		if (LetraMazo=="L"){
			var Mano=MazoL;
			var angleCarta=Mazo[Mazo.length-1].cartilla.angle+90;
			MostrarReverso(Mazo[Mazo.length-1].cartilla);
			GrupoL.add(Mazo[Mazo.length-1].cartilla);
		}
		if (LetraMazo=="R"){
			var Mano=MazoR;
			var angleCarta=Mazo[Mazo.length-1].cartilla.angle+270;
			MostrarReverso(Mazo[Mazo.length-1].cartilla);
			GrupoR.add(Mazo[Mazo.length-1].cartilla);
		}	
		
		//if (Mano.length<6){
			Mano.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,5,Mazo[Mazo.length-1].jugador));
			ReproducirSonido('_Reparto');
			
			if (LetraMazo=="D"){
				PreparaCaracteristicasMano();
			}
			
			Mazo.pop();
			
			
			
			var posX=devuelveX(LetraMazo,99);
			var posY=devuelveY(LetraMazo,99);
			log(false,"X de "+LetraMazo+" "+posX);
				
			if (Mazo.length>0 || CartaTriunfo.length>0){
					//DesHabilitarClick(Mano[Mano.length-1].cartilla);
					tw1 = game_objeto.add.tween(Mano[Mano.length-1].cartilla);
						tw1.to( {x:posX
						,y:posY
						,angle:angleCarta
						}
						, vVelocidadRobar, EfectoTween1);
					tw1.onComplete.add(//RobarCartas4,this)
							function () {
								ReubicarCartas(Mano,LetraMazo);
								RobarCartas4(RondaParam,turnoParam); //Truco para poder pasar por parámetro
							}
						);
						if (LetraMazo=="D")
						{
							game_objeto.add.tween(Mano[Mano.length-1].cartilla.scale).to( {x:vEscaladoCarta,y:vEscaladoCarta}, vVelocidadCartas, EfectoTween2,true);
						}
						tw1.start();
			}
			
			if (CartaTriunfo.length>0){
				CartaTriunfo[CartaTriunfo.length-1].cartilla.moveDown();	
			}
		}
	//}
}



RobarCartas4=function(RondaParam,turnoParam){
	var LetraMazo;
	var spriteRobar;
	var Mano;
	var MazoMover=[];
	var i;
	
	//if (MarcadorNuestro<PuntosGanar && MarcadorRival<PuntosGanar)
	//{
		var turnoFicticio=turnoParam+3;
		if (turnoFicticio>4){
			turnoFicticio=turnoFicticio-4;
		}
		
		if (Mazo.length>0 || CartaTriunfo.length>0 ){
		
		log(false,"koooo")
		
		if(Mazo.length>0){
			MazoMover=Mazo;		
			//log(false,"Error");
			
		}
		else{
			MazoMover=CartaTriunfo;		
			//log(false,"Robada4 "+CartaTriunfo[MazoMover.length-1].valor+" de "+CartaTriunfo[MazoMover.length-1].palo);
			//log(false,"Robada4 "+CartaTriunfo[CartaTriunfo.length-1].valor+" de "+CartaTriunfo[CartaTriunfo.length-1].palo);
		}
		
		spriteRobar=MazoMover[MazoMover.length-1].cartilla;
		//log(false,"Robada4 "+MazoMover[MazoMover.length-1].valor+" de "+MazoMover[MazoMover.length-1].palo);
		
		LetraMazo=DevuelveUbicacionCarta(turnoFicticio);
		
		if (LetraMazo=="U"){
			var Mano=MazoU;
			var angleCarta=MazoMover[MazoMover.length-1].cartilla.angle;
			//MostrarReverso(MazoMover[MazoMover.length-1].cartilla);
			for (i=0;i<=MazoMover.length-1;i++)
			{
				MostrarReverso(MazoMover[i].cartilla);
			}
			
			GrupoU.add(MazoMover[MazoMover.length-1].cartilla);
		}
		if (LetraMazo=="D"){
			var Mano=MazoD;
			var angleCarta=MazoMover[MazoMover.length-1].cartilla.angle;
			MostrarAnverso(MazoMover[MazoMover.length-1].cartilla);
			GrupoD.add(MazoMover[MazoMover.length-1].cartilla);
		}
		if (LetraMazo=="L"){
			var Mano=MazoL;
			var angleCarta=MazoMover[MazoMover.length-1].cartilla.angle+90;
			//MostrarReverso(MazoMover[MazoMover.length-1].cartilla);
			for (i=0;i<=MazoMover.length-1;i++)
			{
				MostrarReverso(MazoMover[i].cartilla);
			}
			GrupoL.add(MazoMover[MazoMover.length-1].cartilla);
		}
		if (LetraMazo=="R"){
			var Mano=MazoR;
			var angleCarta=MazoMover[MazoMover.length-1].cartilla.angle+270;
			//MostrarReverso(MazoMover[MazoMover.length-1].cartilla);
			for (i=0;i<=MazoMover.length-1;i++)
			{
				MostrarReverso(MazoMover[i].cartilla);
			}
			GrupoR.add(MazoMover[MazoMover.length-1].cartilla);
		}	
		
		//if (Mano.length<6){ // Hay que poner este control porque si no pasa varias veces en multijugador
		Mano.push(new Carta(MazoMover[MazoMover.length-1].palo,MazoMover[MazoMover.length-1].idCarta,MazoMover[MazoMover.length-1].valor,MazoMover[MazoMover.length-1].cartilla,5,
		MazoMover[MazoMover.length-1].jugador));
		
		ReproducirSonido('_Reparto');
		
		if (LetraMazo=="D"){
			PreparaCaracteristicasMano();
		}
		
		MazoMover.pop();
		
		if (MazoMover.length==0){
			angleCarta=angleCarta-90;
		}
		
		var posX=devuelveX(LetraMazo,99);
		var posY=devuelveY(LetraMazo,99);
		log(false,"X de "+LetraMazo+" "+posX);	
		//if (LetraMazoReubicar=="L"){
				//DesHabilitarClick(Mano[Mano.length-1].cartilla);
				tw1 = game_objeto.add.tween(Mano[Mano.length-1].cartilla);
					tw1.to( {x:posX
					,y:posY
					,angle:angleCarta
					}
					, vVelocidadCartasReordernar, EfectoTween1);
					tw1.onComplete.add( function(){ 
					ReubicarCartas(Mano,LetraMazo);
					EliminarDeLaMesa(RondaParam);
					} 
					)
					if (LetraMazo=="D")
					{
						game_objeto.add.tween(Mano[Mano.length-1].cartilla.scale).to( {x:vEscaladoCarta,y:vEscaladoCarta}, vVelocidadCartas, EfectoTween2,true);
					}
					tw1.start();
		//}
				if (CartaTriunfo.length>0){
					CartaTriunfo[CartaTriunfo.length-1].cartilla.moveDown();	
				}
		
		
		}
		MostrarOcultarBotonCante();
	//}
}


EliminaTextoPantalla=function(text){
text.destroy();
}



Trucaposicion=function(sprite, Array, nuevaposicion){
	//Envía la posición al resto de compañeros
	for (var i=0; i<=Array.length-1; i++){
		if (Array[i].cartilla.name==sprite.name){
			Array[i].posicion=nuevaposicion;	
			if (ModoMultijugador==true)
			{
				socket.emit('enviar posicion', Habitacion,SoyElJugador,Array[i].cartilla.name,nuevaposicion) ;
			}
			break;
		}
	}
	
}

devuelveX=function(Mazo,posicion){
	for(var i = 0; i < Mazoposiciones.length; i++) {
		if (Mazoposiciones[i].Mazo==Mazo && Mazoposiciones[i].posicion==posicion){
			return Mazoposiciones[i].x;
		}		
	}
}

devuelveY=function(Mazo,posicion){
	for(var i = 0; i < Mazoposiciones.length; i++) {
		if (Mazoposiciones[i].Mazo==Mazo && Mazoposiciones[i].posicion==posicion){
			return Mazoposiciones[i].y;
		}		
	}
}
	
ReubicarCartas=function(MazoReubicar,LetraMazoReubicar,efectoSacarCarta,KeyMover,KeyDesde7){
	
	
	var i;
	//Para que cuando robe el 7 sea la última
	for (var i=0;i<=MazoReubicar.length-1;i++)
	{
		if (MazoReubicar[i].cartilla.name==KeyDesde7)
		{
			MazoReubicar[i].posicion=10;
		}
	}

	
	MazoReubicar.sort(sort_by('posicion', false, parseFloat));
	
	for (var i=0;i<=MazoReubicar.length-1;i++)
	{
		MazoReubicar[i].posicion=i;
	}



	if (efectoSacarCarta==true){

		for (var i=0;i<=MazoReubicar.length-1;i++){
			if (MazoReubicar[i].cartilla.name==KeyMover){
				break;
			}
		}	
		
		PosicionCartas(LetraMazoReubicar)
		var posX=devuelveX(LetraMazoReubicar,i);
		var posY=devuelveY(LetraMazoReubicar,i);
		
		if (LetraMazoReubicar=="L"){
				DesHabilitarClick(MazoReubicar[i].cartilla);
				twReu = game_objeto.add.tween(MazoReubicar[i].cartilla);
				twReu.to( {x:posX+ MazoReubicar[MazoReubicar.length-1].cartilla.width
				,y:posY
				}
				, vVelocidadCartasReordernar, EfectoTween1);
				twReu.onComplete.add(EfectosReordenarCartasPrevioL,this)
				
				twReu.start();
		}
		if (LetraMazoReubicar=="R"){
			DesHabilitarClick(MazoReubicar[i].cartilla);
			twReu = game_objeto.add.tween(MazoReubicar[i].cartilla);
				twReu.to( {x:posX- MazoReubicar[MazoReubicar.length-1].cartilla.width
				,y:posY
				}
				, vVelocidadCartasReordernar, EfectoTween1);
				twReu.onComplete.add(EfectosReordenarCartasPrevioR,this)
				
				twReu.start();
		}		
		if (LetraMazoReubicar=="U"){
			DesHabilitarClick(MazoReubicar[i].cartilla);
			twReu = game_objeto.add.tween(MazoReubicar[i].cartilla);
				twReu.to( {x:posX
				,y:posY+ MazoReubicar[MazoReubicar.length-1].cartilla.width
				}
				, vVelocidadCartasReordernar, EfectoTween1);
				twReu.onComplete.add(EfectosReordenarCartasPrevioU,this)
				
				twReu.start();
		}	
		
		
	}
	else
	{
		EfectosReordenarCartas(LetraMazoReubicar);
	}
	
	



}

EfectosReordenarCartasPrevioR=function(){
	EfectosReordenarCartas("R");
}


EfectosReordenarCartasPrevioL=function(){
	EfectosReordenarCartas("L");
}

EfectosReordenarCartasPrevioU=function(){
	EfectosReordenarCartas("U");
}


EfectosReordenarCartas=function(LetraMazo){
	
	
	
	var MazoReordenar=[];
	if (LetraMazo=="U"){
		MazoReordenar=MazoU;
	}
	if (LetraMazo=="D"){
		MazoReordenar=MazoD;
	}
	if (LetraMazo=="L"){
		MazoReordenar=MazoL;
	}
	if (LetraMazo=="R"){
		MazoReordenar=MazoR;
	}

	PosicionCartas(LetraMazo)
	
	
	if (MazoReordenar.length>=1)
	{
	

	var posX=devuelveX(LetraMazo,0);
	var posY=devuelveY(LetraMazo,0);
	
	
	//log(false,"REORDENANDO X: Mazo "+LetraMazo+" "+posX);
	//log(false,"REORDENANDO Y: Mazo "+LetraMazo+" "+posY);
	
	
	twReu = game_objeto.add.tween(MazoReordenar[0].cartilla);
		twReu.to( {x:posX
		,y:posY
		}
		, vVelocidadCartasReordernar, EfectoTween1);
		twReu.start();
	}

	if (MazoReordenar.length>=2)
	{	
	
		var posX=devuelveX(LetraMazo,1);
		var posY=devuelveY(LetraMazo,1);
		
	//log(false,"REORDENANDO X: Mazo "+LetraMazo+" "+posX);
	//log(false,"REORDENANDO Y: Mazo "+LetraMazo+" "+posY);
	
	twReu= game_objeto.add.tween(MazoReordenar[1].cartilla);
		twReu.to( {x:posX
		,y:posY
		}
		, vVelocidadCartasReordernar, EfectoTween1);
		twReu.start();
	}

	if (MazoReordenar.length>=3)
	{
	
	//log(false,"REORDENANDO X: Mazo "+LetraMazo+" "+posX);
	//log(false,"REORDENANDO Y: Mazo "+LetraMazo+" "+posY);
	
	
		var posX=devuelveX(LetraMazo,2);
		var posY=devuelveY(LetraMazo,2);
	
	
	twReu = game_objeto.add.tween(MazoReordenar[2].cartilla);
		twReu.to( {x:posX
		,y:posY
		}
		, vVelocidadCartasReordernar, EfectoTween1);
		twReu.start();
	}

	if (MazoReordenar.length>=4)
	{
		if (Mazo.length>0)
	{
		var posX=devuelveX(LetraMazo,3);
		var posY=devuelveY(LetraMazo,3);
	}
	else
	{
		if(LetraMazo=="R")
		{
			var posX=devuelveX(LetraMazo,3);
			var posY=devuelveY(LetraMazo,3);
		}
		else
		{
			var posX=devuelveX(LetraMazo,3);
			var posY=devuelveY(LetraMazo,3);
		}
	}
	//log(false,"REORDENANDO X: Mazo "+LetraMazo+" "+posX);
	//log(false,"REORDENANDO Y: Mazo "+LetraMazo+" "+posY);
	
	twReu = game_objeto.add.tween(MazoReordenar[3].cartilla);
		twReu.to( {x:posX
		,y:posY
		}
		, vVelocidadCartasReordernar, EfectoTween1);
		twReu.start();
	}
	
	if (MazoReordenar.length>=5)
	{	
		var posX=devuelveX(LetraMazo,4);
		var posY=devuelveY(LetraMazo,4);
	
	//log(false,"REORDENANDO X: Mazo "+LetraMazo+" "+posX);
	//log(false,"REORDENANDO Y: Mazo "+LetraMazo+" "+posY);
	
	twReu = game_objeto.add.tween(MazoReordenar[4].cartilla);
		twReu.to( {x:posX
		,y:posY
		}
		, vVelocidadCartasReordernar, EfectoTween1);
		twReu.start();		
	}
		
	if (MazoReordenar.length>=6)
	{		
	
		var posX=devuelveX(LetraMazo,5);
		var posY=devuelveY(LetraMazo,5);
	
	//log(false,"REORDENANDO X: Mazo "+LetraMazo+" "+posX);
	//log(false,"REORDENANDO Y: Mazo "+LetraMazo+" "+posY);
	
	twReu = game_objeto.add.tween(MazoReordenar[5].cartilla);
		twReu.to( {x:posX
		,y:posY
		}
		, vVelocidadCartasReordernar, EfectoTween1);
		twReu.start();
	}
	
}

PreparaCaracteristicasMano=function(){
var i;
	
		
		for (i=0;i<=MazoD.length-1;i++){
			MazoD[i].cartilla.inputEnabled = true;
			MazoD[i].cartilla.input.enableDrag(false,true);
			//MazoD[i].cartilla.input.allowVerticalDrag = false;
			//MazoD[i].cartilla.events.onInputUp.add(MueveAlTablero);
			MazoD[i].cartilla.events.onDragUpdate.add(Moviendo_Carta); 
			MazoD[i].cartilla.events.onDragStop.add(Parar_Drag); 
		}
		ContadorTurno(1); //ILA 20170128 PELIGROSO. LO HE AÃ‘ADIDO
}

DesHabilitarClick=function(sprite){
	sprite.inputEnabled = false;
}

HabilitarClick=function(sprite){
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


MoverCartaAjena=function(JugadorQueMueve,KeyMover,nuevaposicion){
	//if (SoyElJugador!=JugadorQueMueve){
		
		if(SoyElJugador==1){
			if (JugadorQueMueve==2){
				OrganizarManoOrdenamiento(MazoR,"R",KeyMover,nuevaposicion);
			}
			if (JugadorQueMueve==3){
				OrganizarManoOrdenamiento(MazoU,"U",KeyMover,nuevaposicion);
			}
			if (JugadorQueMueve==4){
				OrganizarManoOrdenamiento(MazoL,"L",KeyMover,nuevaposicion);
			}		
		}
	
		if(SoyElJugador==2){
			if (JugadorQueMueve==3){
				OrganizarManoOrdenamiento(MazoR,"R",KeyMover,nuevaposicion);
			}
			if (JugadorQueMueve==4){
				OrganizarManoOrdenamiento(MazoU,"U",KeyMover,nuevaposicion);
			}
			if (JugadorQueMueve==1){
				OrganizarManoOrdenamiento(MazoL,"L",KeyMover,nuevaposicion);
			}
		
		}	

		if(SoyElJugador==3){
			if (JugadorQueMueve==4){
				OrganizarManoOrdenamiento(MazoR,"R",KeyMover,nuevaposicion);
			}
			if (JugadorQueMueve==1){
				OrganizarManoOrdenamiento(MazoU,"U",KeyMover,nuevaposicion);
			}
			if (JugadorQueMueve==2){
				OrganizarManoOrdenamiento(MazoL,"L",KeyMover,nuevaposicion);
			}		
		}

		if(SoyElJugador==4){
			if (JugadorQueMueve==1){
				OrganizarManoOrdenamiento(MazoR,"R",KeyMover,nuevaposicion);
			}
			if (JugadorQueMueve==2){
				OrganizarManoOrdenamiento(MazoU,"U",KeyMover,nuevaposicion);
			}
			if (JugadorQueMueve==3){
				OrganizarManoOrdenamiento(MazoL,"L",KeyMover,nuevaposicion);
			}	
		}		
	//}

}

OrganizarManoOrdenamiento=function(Mano,Letra,KeyMover,nuevaposicion){
	for (var i=0;i<=Mano.length-1;i++){
		if(Mano[i].cartilla.name==KeyMover){
			Mano[i].posicion=nuevaposicion;
			ReubicarCartas(Mano,Letra,true,KeyMover)
			break;
		}
	}
}

EfectosRecogerCartas1=function(){
	//for (i=0;i<=MazoCentral.length-1;i++){
	
	var i;	
		
		//ArreglaReversos();
		if (MazoCentralApoyo.length>=1){
		//log(false,"RECOJO CARTA 1");
			MostrarReverso(MazoCentralApoyo[0].cartilla);
			
			if (BazaNuestraGlobal==true){
					for (i=1;i<=UltimaBazaNuestra.length;i++)
					{
						UltimaBazaNuestra.alpha=1;
					}
					UltimaBazaNuestra.splice(0,10);
					DesHabilitarClick(MazoCentralApoyo[0].cartilla);
					tw1 = game_objeto.add.tween(MazoCentralApoyo[0].cartilla);
					tw1.to( {x: devuelveX("ULTIMA_Baza",0)
					,y:devuelveY("ULTIMA_Baza",0),//game_objeto.world.height- MazoCentral[MazoCentral.length-1].cartilla.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, vVelocidadCartasReordernar, EfectoTween1);
					//tw1.onComplete.add(EfectosRecogerCartas2,this)						
					tw1.start();
					GrupoUltimaBaza.add(MazoCentralApoyo[0].cartilla);
					MazoRecogido.push(MazoCentralApoyo[0].cartilla);
					UltimaBazaNuestra.push(MazoCentralApoyo[0].cartilla);
					HabilitarVerUltimaBaza(MazoCentralApoyo[0].cartilla);
				}
				else{
				
				for (i=1;i<=UltimaBazaRival.length;i++)
				{
					UltimaBazaRival.alpha=1;
				}
				UltimaBazaRival.splice(0,10);
				DesHabilitarClick(MazoCentralApoyo[0].cartilla);
				tw1 = game_objeto.add.tween(MazoCentralApoyo[0].cartilla);
					tw1.to( {x:devuelveX("ULTIMA_Baza_Rival",0)
					,y:devuelveY("ULTIMA_Baza_Rival",0),//0+ MazoCentral[MazoCentral.length-1].cartilla.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, vVelocidadCartasReordernar, EfectoTween1);
					//tw1.onComplete.add(EfectosRecogerCartas2,this)			
					tw1.start();
					GrupoUltimaBaza.add(MazoCentralApoyo[0].cartilla);
					MazoRecogidoRival.push(MazoCentralApoyo[0].cartilla);
					UltimaBazaRival.push(MazoCentralApoyo[0].cartilla);
					HabilitarVerUltimaBaza(MazoCentralApoyo[0].cartilla);
			
				}
		//log(false,"fin RECOJO CARTA 1");
		}
		
		
}

EfectosRecogerCartas2=function(){
	//for (i=0;i<=MazoCentral.length-1;i++){
		if (MazoCentralApoyo.length>=2){		
		//log(false,"RECOJO CARTA 2");
			MostrarReverso(MazoCentralApoyo[1].cartilla);
			
			if (BazaNuestraGlobal==true){
					DesHabilitarClick(MazoCentralApoyo[1].cartilla);
					tw1 = game_objeto.add.tween(MazoCentralApoyo[1].cartilla);
					tw1.to( {x:devuelveX("ULTIMA_Baza",0)
					,y:devuelveY("ULTIMA_Baza",0),//game_objeto.world.height- MazoCentralApoyo[MazoCentralApoyo.length-1].cartilla.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, vVelocidadCartasReordernar, EfectoTween1);
					//tw1.onComplete.add(EfectosRecogerCartas3,this)						
					tw1.start();
					
					MazoRecogido.push(MazoCentralApoyo[1].cartilla);
					UltimaBazaNuestra.push(MazoCentralApoyo[1].cartilla);
					HabilitarVerUltimaBaza(MazoCentralApoyo[1].cartilla);
					GrupoUltimaBaza.add(MazoCentralApoyo[1].cartilla);
				}
				else{
					
					DesHabilitarClick(MazoCentralApoyo[1].cartilla);
					tw1 = game_objeto.add.tween(MazoCentralApoyo[1].cartilla);
					tw1.to( {x:devuelveX("ULTIMA_Baza_Rival",0)
					,y:devuelveY("ULTIMA_Baza_Rival",0),//0+ MazoCentralApoyo[MazoCentralApoyo.length-1].cartilla.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, vVelocidadCartasReordernar, EfectoTween1);
					//tw1.onComplete.add(EfectosRecogerCartas3,this)						
					tw1.start();
	
					MazoRecogidoRival.push(MazoCentralApoyo[1].cartilla);
					UltimaBazaRival.push(MazoCentralApoyo[1].cartilla);
					HabilitarVerUltimaBaza(MazoCentralApoyo[1].cartilla);					
					GrupoUltimaBaza.add(MazoCentralApoyo[1].cartilla);
				}
		//log(false,"fin RECOJO CARTA 2");
		}
		
		
}

EfectosRecogerCartas3=function(){
	//for (i=0;i<=MazoCentralApoyo.length-1;i++){
		if (MazoCentralApoyo.length>=3){	
			MostrarReverso(MazoCentralApoyo[2].cartilla);
		//	log(false,"RECOJO CARTA3");
				if (BazaNuestraGlobal==true){
					DesHabilitarClick(MazoCentralApoyo[2].cartilla);
					tw1 = game_objeto.add.tween(MazoCentralApoyo[2].cartilla);
					tw1.to( {x:devuelveX("ULTIMA_Baza",0)
					,y:devuelveY("ULTIMA_Baza",0),//game_objeto.world.height- MazoCentralApoyo[MazoCentralApoyo.length-1].cartilla.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, vVelocidadCartasReordernar, EfectoTween1);
					//tw1.onComplete.add(EfectosRecogerCartas4,this)					
					tw1.start();
					
					MazoRecogido.push(MazoCentralApoyo[2].cartilla);
					UltimaBazaNuestra.push(MazoCentralApoyo[2].cartilla);
					HabilitarVerUltimaBaza(MazoCentralApoyo[2].cartilla);
					GrupoUltimaBaza.add(MazoCentralApoyo[2].cartilla);				
				}
				else{
					DesHabilitarClick(MazoCentralApoyo[2].cartilla);
					tw1= game_objeto.add.tween(MazoCentralApoyo[2].cartilla);
					tw1.to( {x:devuelveX("ULTIMA_Baza_Rival",0)
					,y:devuelveY("ULTIMA_Baza_Rival",0),//0+ MazoCentralApoyo[MazoCentralApoyo.length-1].cartilla.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, vVelocidadCartasReordernar, EfectoTween1);
					//tw1.onComplete.add(EfectosRecogerCartas4,this)					
					tw1.start();
					
					MazoRecogidoRival.push(MazoCentralApoyo[2].cartilla);
					UltimaBazaRival.push(MazoCentralApoyo[2].cartilla);
					HabilitarVerUltimaBaza(MazoCentralApoyo[2].cartilla);					
					GrupoUltimaBaza.add(MazoCentralApoyo[2].cartilla);
				}
	//	log(false,"fin RECOJO CARTA 3");
		}
		
		
}


EfectosRecogerCartas4=function(RondaParam,turnoParam){
	//for (i=0;i<=MazoCentralApoyo.length-1;i++){
	//log(false,"se mete 4");
		if (MazoCentralApoyo.length>=4){
				
			MostrarReverso(MazoCentralApoyo[3].cartilla);
			//log(false,"RECOJO CARTA 4");
		//	log(false,"Quiere Robar...");
			if (BazaNuestraGlobal==true){
					DesHabilitarClick(MazoCentralApoyo[3].cartilla);
					tw1 = game_objeto.add.tween(MazoCentralApoyo[3].cartilla);
					tw1.to( {x:devuelveX("ULTIMA_Baza",0)
					,y:devuelveY("ULTIMA_Baza",0),//game_objeto.world.height- MazoCentralApoyo[MazoCentralApoyo.length-1].cartilla.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, vVelocidadCartasReordernar, EfectoTween1);
					
					
			
					if (Mazo.length>0){
						tw1.onComplete.add(//RobarCartas1,this)
							function () {
							ForzarCambio7(RondaParam,turnoParam);
							MazoRecogido.push(MazoCentralApoyo[3].cartilla)
							UltimaBazaNuestra.push(MazoCentralApoyo[3].cartilla);
							HabilitarVerUltimaBaza(MazoCentralApoyo[3].cartilla);
							GrupoUltimaBaza.add(MazoCentralApoyo[3].cartilla);
							//RobarCartas1(RondaParam,turnoParam); //Truco para poder pasar por parámetro
						}
						);
					}
					else
					{
						log(false,"se debería meter aquí");
						MazoRecogido.push(MazoCentralApoyo[3].cartilla)
						UltimaBazaNuestra.push(MazoCentralApoyo[3].cartilla);
						HabilitarVerUltimaBaza(MazoCentralApoyo[3].cartilla);
						GrupoUltimaBaza.add(MazoCentralApoyo[3].cartilla);
						tw1.onComplete.add( function(){ EliminarDeLaMesa(RondaParam)} )
					}
					tw1.start();
					
				
				}
				else{
					DesHabilitarClick(MazoCentralApoyo[3].cartilla);
					tw1 = game_objeto.add.tween(MazoCentralApoyo[3].cartilla);
					tw1.to( {x:devuelveX("ULTIMA_Baza_Rival",0)
					,y:devuelveY("ULTIMA_Baza_Rival",0),//0+ MazoCentralApoyo[MazoCentralApoyo.length-1].cartilla.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, vVelocidadCartasReordernar, EfectoTween1);
					if (Mazo.length>0){
						tw1.onComplete.add(//RobarCartas1,this)
							function () {
							ForzarCambio7(RondaParam,turnoParam);
							MazoRecogidoRival.push(MazoCentralApoyo[3].cartilla);
							UltimaBazaRival.push(MazoCentralApoyo[3].cartilla);
							HabilitarVerUltimaBaza(MazoCentralApoyo[3].cartilla);
							GrupoUltimaBaza.add(MazoCentralApoyo[3].cartilla);
							//RobarCartas1(RondaParam,turnoParam); //Truco para poder pasar por parámetro
						}
						);
					}	
					else
					{
						log(false,"o aquí");
						MazoRecogidoRival.push(MazoCentralApoyo[3].cartilla);
						UltimaBazaRival.push(MazoCentralApoyo[3].cartilla);
						HabilitarVerUltimaBaza(MazoCentralApoyo[3].cartilla);
						GrupoUltimaBaza.add(MazoCentralApoyo[3].cartilla);
						tw1.onComplete.add( function(){ EliminarDeLaMesa(RondaParam)})
					}					
					tw1.start();
					
								
			
				}
		//log(false,"fin RECOJO CARTA 4");
		}
		
		
		//MazoCentralApoyo.splice(0,4);
		
}

ForzarCambio7=function(RondaParam,turnoParam){
	var i;
	var Encontrada=false;
	var JugadorMueve;
	var CartaCambiar;
	var LetraMazo;
	
	
	for (i=0;i<=MazoD.length-1;i++){
		if (MazoD[i].palo==Triunfo && MazoD[i].valor==7)
		{
			Encontrada=true;
			CartaCambiar= MazoD[i].cartilla.name;
			LetraMazo="D";
		}
	}

	for (i=0;i<=MazoR.length-1;i++){
		if (MazoR[i].palo==Triunfo && MazoR[i].valor==7)
		{
			Encontrada=true;
			CartaCambiar= MazoR[i].cartilla.name;
			LetraMazo="R";
		}
	}
	
	for (i=0;i<=MazoU.length-1;i++){
		if (MazoU[i].palo==Triunfo && MazoU[i].valor==7)
		{
			Encontrada=true;
			CartaCambiar= MazoU[i].cartilla.name;
			LetraMazo="U";
		}
	}
	
	for (i=0;i<=MazoL.length-1;i++){
		if (MazoL[i].palo==Triunfo && MazoL[i].valor==7)
		{
			Encontrada=true;
			CartaCambiar= MazoL[i].cartilla.name;
			LetraMazo="L";
		}
	}
		
	JugadorMueve=DevuelveJugadorSegunMazo(LetraMazo);
	log(false,"La vRonda es " + RondaParam);
	if (Encontrada==true && CartaTriunfo[0].valorReal>7 && RondaParam==5 &&  (  (BazaNuestraGlobal==true && (LetraMazo=="D" || LetraMazo=="U"))  ||  (BazaNuestraGlobal==false && (LetraMazo=="L" || LetraMazo=="R") )     )  ){
		log(false,"Carta a cambiar "+CartaCambiar);
		Cambiar7Ajeno(JugadorMueve,CartaCambiar,RondaParam,turnoParam); //Aprovecho la función Cambiar7Ajeno para los cambios forzados de última vRonda
			//Debo arrastrar RondaParam,turnoParam porque lo usa RobarCartas1
		
	
	}
	else
	{
		RobarCartas1(RondaParam,turnoParam);
	}

}


EscribirTextoGuay=function(Texto,Tamano) {

	var text;
	var grd;
	

	text = game_objeto.add.text(0, 0, Texto);
	
	text.x=game_objeto.world.centerX;
	text.y=game_objeto.world.centerY
	
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


RondaFinalizada=function(){
	
	FinalizandoPartida=true; //1.0.8 Para controlar que si alguien desconecta no reparte echando leches (onsocketdesconectado)
	LimpiandoPartida();
	
	
	if (ModoMultijugador==true)
	{
		socket.emit('abre_sala_jugador', Habitacion,socket.id) ;
	}
	
	
	if (SonVueltas==false)
	{		
		
		Recuento();
	}

}




Recuento=function(){
	var Texto;
	var TextoFormateado;
	log(true,"A contar..");

	
	ReproducirSonido('_Contar');	
	TextoFormateado=EscribirTextoGuay("Â¡Â¡ A Contar !!",60);
	
	
	twRec1 = game_objeto.add.tween(TextoFormateado).to( { x: game_objeto.world.centerX }, 800, EfectoTweenRebote);
	twRec1.onComplete.add(
		function (){
			twRec2 = game_objeto.add.tween(TextoFormateado).to( { alpha: 0 }, 1000, EfectoTween1, false);
			twRec2.onComplete.add(MueveRecogidasAlCentro,this);	
			twRec2.start();
		}		
	);
	twRec1.start();
	log(true,"Recuento");
}

MueveRecogidasAlCentro=function(){
	
	var i;
	
	//for (i=MazoRecogido.length-1;i>=0;i--)
	log(false,"LLega a MueveRecogidasAlCentro");
	if (MazoRecogido.length>0)
	{
		for (i=0;i<=MazoRecogido.length-1;i++)
		{
			//MazoRecogido[i].moveDown();
			DeshabilitarVerUltimaBaza(MazoRecogido[i])
			MazoRecogido[i].bringToTop();
		}
		
		for (i=0;i<=MazoRecogidoRival.length-1;i++)
		{
			
			DeshabilitarVerUltimaBaza(MazoRecogidoRival[i])
			
		}
		
		
		for (i=MazoRecogido.length-1;i>=0;i--)
		{
			//MazoRecogido[MazoRecogido.length-1].bringToTop();
			
			twRec2 = game_objeto.add.tween(MazoRecogido[i]);
				twRec2.to( {x:game_objeto.world.centerX
				,y:game_objeto.world.height-MazoRecogido[i].height//-MazoRecogido[i].width  //MazoRecogido[i].height-
				,angle:0
				}, 600, EfectoTween2);
			
			if (i==0){
				twRec2.onComplete.add(MueveParaContar,this)
			}
			
			twRec2.start();
				
			twRec3 = game_objeto.add.tween(MazoRecogido[i].scale);
			twRec3.to( {x:vEscalaUltimaBaza
			,y:vEscalaUltimaBaza
			});		
			twRec3.start();
				
		}
	}
	else
	{
		CrearTextoPuntuacion();
	}
}

MueveParaContar=function(){
		
		var i;
		

		
		if (MazoRecogido.length>0)
		{
			MazoRecogido[MazoRecogido.length-1].bringToTop();
			MostrarAnverso(MazoRecogido[MazoRecogido.length-1]);
			//log(false,"debe mover "+MazoRecogido[MazoRecogido.length-1].name);
			twRec2 = game_objeto.add.tween(MazoRecogido[MazoRecogido.length-1]);
				twRec2.to( {x:game_objeto.world.centerX
				,y: game_objeto.world.centerY-100, //0+(MazoRecogido[MazoRecogido.length-1].height)*2, //  CentroIrreal,  //MazoRecogido[i].height-
				angle:  Math.round(Math.random() * (180) - 45)//Math.floor(Math.random() * 90 ) + 1
				}, 50, EfectoTween1); //1.0.8 Pasa de 100 a 50 milisegundos
			
			if (MazoRecogido.length>1)
			{
				twRec2.onComplete.add(
				function () {
					MazoRecogido[MazoRecogido.length-1].moveUp();
					MazoRecogidoApoyo.push(MazoRecogido[MazoRecogido.length-1]);
					ReproducirSonido('_Reparto');
					MazoRecogido.pop();
					MueveParaContar()
				},this)
			}
			else
			{
				twRec2.onComplete.add(
				function () {
					MazoRecogidoApoyo.push(MazoRecogido[MazoRecogido.length-1]);
					ReproducirSonido('_Reparto');
					MazoRecogido.pop();
					MueveParaContar()
					MueveParaBarajar();
				},this)
			}
			twRec2.start();

		}
}


MueveParaBarajar=function(){
	var i;
	var MoverX;
	var MoverY;
	var posicionMazoGanador;
	var BazaNuestraConCartas=false;
	
	if (MazoRecogidoApoyo.length>0)
	{
		BazaNuestraConCartas=true;
	}
	
	
	posicionMazoGanador=DevuelveUbicacionCarta(vTurno);
	if(posicionMazoGanador=="D")
	{
		MoverX=game_objeto.world.centerX;
		MoverY=game_objeto.world.height+(MazoRecogidoApoyo[MazoRecogidoApoyo.length-1].height*2);
	}

	if(posicionMazoGanador=="U")
	{
		MoverX=game_objeto.world.centerX;
		MoverY=0-(MazoRecogidoApoyo[MazoRecogidoApoyo.length-1].height*2);
	}	
	
	if(posicionMazoGanador=="L")
	{
		MoverX=0-(MazoRecogidoApoyo[MazoRecogidoApoyo.length-1].width*2);
		MoverY=CentroIrreal;
	}	

	if(posicionMazoGanador=="R")
	{
		MoverX=game_objeto.world.width+(MazoRecogidoApoyo[MazoRecogidoApoyo.length-1].width*2);
		MoverY=CentroIrreal;
	}		
	
	log(false,"Tamaño Rival "+MazoRecogidoRival.length);
	log(false,"Tamaño Apoyo "+MazoRecogidoApoyo.length);
	if (MazoRecogidoRival.length>0)
	{
		for (i=0;i<=MazoRecogidoRival.length-1;i++)
		{
				twRec1 = game_objeto.add.tween(MazoRecogidoRival[i]);
				twRec1.to( {x:MoverX
				,y:MoverY,  			
				}, 1000, EfectoTween2,false,500);			

				if (BazaNuestraConCartas==false && i==MazoRecogidoRival.length-1)
				{
					twRec1.onComplete.add(CrearTextoPuntuacion,this);
				}
				
				twRec1.start();
		}	
	}
	
	if (MazoRecogidoApoyo.length>0)
	{
		for (i=0;i<=MazoRecogidoApoyo.length-1;i++)
		{
				twRec2 = game_objeto.add.tween(MazoRecogidoApoyo[i]);
				twRec2.to( {x:MoverX
				,y:MoverY,  //MazoRecogidoApoyo[i].height-
				
				}, 1000, EfectoTween2,false,500);
				
				if (BazaNuestraConCartas==true && i==MazoRecogidoApoyo.length-1)
				{
					twRec2.onComplete.add(CrearTextoPuntuacion,this);
				}				
				
				twRec2.start();
		}
	}
	else{		
		CrearTextoPuntuacion();
	}
}

CrearTextoPuntuacion=function() {
	
	var text;
	var text2;
    //  You can either set the tab size in the style object:
	var TextoNuestro;
	var TextoRival;
	var RealmenteFinaliza;
	var TiempoStop;
	
	FinalizandoPartida=true; //1.0.8 Para controlar que si alguien desconecta no reparte echando leches (onsocketdesconectado)
	
	timerturno.stop();
	
	MostrarTodasCartas();
	//console.log("Texto puntuacion");
	if (ValidaTextoPuntuacionJugador()==true)
	{
		
		if (SonVueltas==false)
		{
			TiempoStop=0;
		}
		else
		{
			TiempoStop=2000;
		}
		var	timer = game_objeto.time.create(false);
		timer.add(TiempoStop, function()
		{
		
		
			TextMarcador.visible=false;
			TextTituloMarcador.visible=false;
			var TurnoActual=vTurno;

			//game_objeto.tweens.pauseAll(); 
			LimpiarSprites();
			
			
			if (socket.id!=undefined)
			{
				if (ArrayInfoJugador.length>0)
				{
					var JugadorPubli=ArrayInfoJugador[0].Nombre;
					var JugadorFullPubli=ArrayInfoJugador[0].ProveedorID + '-'+ ArrayInfoJugador[0].RedSocial;
					socket.emit('enviar_peticion_publicidad', socket.id,Version,ObjetoG) ;
				}
				else
				{
					socket.emit('enviar_peticion_publicidad', socket.id,Version,ObjetoG) ;
				}
				
			}
				
			//CRITICO
			if (BazaNuestraGlobal==true){
				if (SonVueltas==false)
				{
					MarcadorNuestro=MarcadorNuestro+10;
				}
			}
			else
			{
				if (SonVueltas==false)
				{
					MarcadorRival=MarcadorRival+10;
				}
			}
			
			
			if (MarcadorNuestro>=PuntosGanar || MarcadorRival>=PuntosGanar)
			{
				
				RealmenteFinaliza=true;
			}
			else
			{
				RealmenteFinaliza=false;
				
			}
			

			if (SonVueltas==true)
			{
				SonVueltas=false;	
			}
			else
			{
				SonVueltas=true;	
			}
			
			if (RealmenteFinaliza==true)
			{
				SonVueltas=false;	
				LimpiandoPartida();
			}
			

			
			
			if (MarcadorNuestro>50){
				TextoNuestro=MarcadorNuestro-50 + " Buenas";
			}
			else{
				TextoNuestro=MarcadorNuestro+ " Malas";	
			}
			
			if (MarcadorRival>50){
				TextoRival=MarcadorRival-50 + " Buenas";
			}
			else{
				TextoRival=MarcadorRival+ " Malas";	
			}	
			
			TextMarcador.text=TextoNuestro+"\n"+TextoRival;
				
			TextoCampeon="Â¡Â¡ Vamos de vueltas !!";
			if (MarcadorNuestro>=PuntosGanar && MarcadorRival>=PuntosGanar)
			{
				if (BazaNuestraGlobal==true){
					MarcadorPartidasNuestro++;
					GrabarResultado(SoyElJugador,(MarcadorPartidasNuestro+MarcadorPartidasRival-1),SonVueltas,1,false,false,false,false);
					//console.log("1. Marcador Nuestro: "+MarcadorPartidasNuestro+" Marcador Rival: "+MarcadorPartidasRival);
					if (MarcadorPartidasNuestro==PartidasCoto)
					{
						TextoCampeon="Â¡Â¡ Ganamos la partida y el coto !!";
						ReproducirSonido("_Campeones");
					}
					else
					{
						TextoCampeon="Â¡Â¡ Ganamos la partida !!";
						ReproducirSonido("_Campeones");
					}
					
				}
				else
				{
					MarcadorPartidasRival++;
					GrabarResultado(SoyElJugador,(MarcadorPartidasNuestro+MarcadorPartidasRival-1),SonVueltas,2,false,false,false,false);
					//console.log("2. Marcador Nuestro: "+MarcadorPartidasNuestro+" Marcador Rival: "+MarcadorPartidasRival);
					if (MarcadorPartidasRival==PartidasCoto)
					{
						TextoCampeon="Â¡Â¡ Otra vez serÃ¡. Hicieron las 10 Ãºltimas. Perdimos el coto  :(  !!";
						ReproducirSonido("_OtraVezSera");
					}
					else
					{
						TextoCampeon="Hemos perdido. Ellos hicieron las 10 Ãºltimas. Â¡Â¡ A por ellos !!";
						ReproducirSonido("_OtraVezSera");
					}
					
				}
			}
			else
			{
				if(MarcadorNuestro>=PuntosGanar)
				{
					MarcadorPartidasNuestro++;
					GrabarResultado(SoyElJugador,(MarcadorPartidasNuestro+MarcadorPartidasRival-1),SonVueltas,1,false,false,false,false);
					//console.log("3. Marcador Nuestro: "+MarcadorPartidasNuestro+" Marcador Rival: "+MarcadorPartidasRival);
					if (MarcadorPartidasNuestro==PartidasCoto)
					{
						TextoCampeon="Â¡Â¡ Ganamos la partida y el coto !!";
						ContadorNoticia=0;
						ReproducirSonido("_Campeones");						
					}
					else
					{
						TextoCampeon="Â¡Â¡ Ganamos la partida !!";
						ReproducirSonido("_Campeones");
					}
					
					
				}
				if(MarcadorRival>=PuntosGanar)
				{
					
					MarcadorPartidasRival++;
					GrabarResultado(SoyElJugador,(MarcadorPartidasNuestro+MarcadorPartidasRival-1),SonVueltas,2,false,false,false,false);
					//console.log("4. Marcador Nuestro: "+MarcadorPartidasNuestro+" Marcador Rival: "+MarcadorPartidasRival);
					
					if (MarcadorPartidasRival==PartidasCoto)
					{
						TextoCampeon="Â¡Â¡ Otra vez serÃ¡. Perdimos el coto  :(  !!";
						ContadorNoticia=0;
						ReproducirSonido("_OtraVezSera");						
					}
					else
					{
						TextoCampeon="Hemos perdido la partida. Â¡Â¡ A por ellos !!";
						ReproducirSonido("_OtraVezSera");
					}
				}
			}
			
			
			
			if (MarcadorPartidasNuestro==PartidasCoto || MarcadorPartidasRival==PartidasCoto )
			{
				var imagenFin;
			
				if (ModoMultijugador==true)
				{
					if (socket.id!=undefined)
					{
						socket.emit("NoResta", socket.id,Habitacion);
					}
				}


				if (MarcadorPartidasNuestro==PartidasCoto)
				{
					imagenFin='Copa';
				}
				else
				{
					imagenFin='Perder';
				}
				
				var Copa=game_objeto.add.sprite(game_objeto.world.width+500,game_objeto.world.centerY, imagenFin);
				Copa.anchor.setTo(0.5,0.5);
				
				twRec1=game_objeto.add.tween(Copa).to( { x: game_objeto.world.centerX }, 1000, EfectoTweenRebote,true);
				twRec1.onComplete.add(
					function (){
						 ReproducirSonido("_CotoTerminado");
						 game_objeto.add.tween(Copa).to( { alpha:0 }, 0, EfectoTween1, true, 3000);
					}		
				);
				
				
			}

			
			
			
				text = game_objeto.add.text(game_objeto.world.centerX, game_objeto.world.centerY, TextoCampeon);
				text.anchor.setTo(0.5,0.5);
				
				text.x=game_objeto.world.centerX;
				text.y=game_objeto.world.centerY;
				
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
				
				
				twRec1 = game_objeto.add.tween(text).to( { alpha: 0 }, 1000, EfectoTween1, true,2000);
				twRec1.onComplete.add(
					function()
					{
					
							var y = document.getElementById("Clasificacion").rows[1].cells;
							y[1].innerHTML = TextoNuestro;
							y[2].innerHTML = MarcadorPartidasNuestro;
							
							var y = document.getElementById("Clasificacion").rows[2].cells;
							y[1].innerHTML = TextoRival;
							y[2].innerHTML = MarcadorPartidasRival;		
							
							var d=document.getElementById('DivResultado');
							d.style.display = 'block';
							//d.style.zIndex=-100;
							
							if (RealmenteFinaliza==true)
							{
								MarcadorNuestro=0;
								MarcadorRival=0;

								//LimpiarVariables();
							}
							//console.log("en este punto");
							twRec2 = game_objeto.add.tween(text).to( { alpha: 0 }, 0, EfectoTween1, true,3000);
							twRec2.onComplete.add( 
							
								function()
								{
								
									//var timer = game_objeto.time.create(false);
									//timer.add(3000, function(){
							
											var d=document.getElementById('DivResultado');
											d.style.display = 'none';
											//d.style.zIndex=-1;
												
												//console.log("deberia saltar");
												if (MarcadorPartidasNuestro==PartidasCoto || MarcadorPartidasRival==PartidasCoto)
												{
													MatarConexionDeMentira();

												}
												
												else
												{
												
													if (1==1) //ValidaTextoPuntuacionJugador()==true)
													{	
														SemaforoRepartos.splice(0,100);
														SemaforoTextoPuntuacion.splice(0,100);
														//console.log("entra");
														NuevaPartida(TurnoActual);
														
														

	
	

														
														
														
														
													}

												}
										
								} 
									
							);
								//timer.start();	
								
							
							
					
					}
			
			
				);	
		});	
		timer.start();
	}
	else
	{
		//alert("grrr "+SoyElJugador);
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
			//socket=null; //1.0.8 ivan
			Habitacion=Math.floor(Math.random());
		}
		catch(e){}
	}
	Habitacion=Math.floor(Math.random()); //1.0.8 y lo de atrÃ¡s que he comentado
	
	IntentaConexionInicial=true;
	game_objeto.state.start("Level");
	//ConectaServidor(); //1.0.8 Si no fallaba la consulta del rÃ¡nking desde logindesdeweb
}


MatarConexionDeMentira=function()
{	

	Habitacion=Math.floor(Math.random()); //1.0.8 y lo de atrÃ¡s que he comentado
	
	IntentaConexionInicial=true;
	game_objeto.state.start("Level");
	//ConectaServidor(); //1.0.8 Si no fallaba la consulta del rÃ¡nking desde logindesdeweb
}

LimpiarSprites=function(){
	
	var i;
	
	ObjTurnoR.visible=false;
	ObjTurnoL.visible=false;
	ObjTurnoU.visible=false;
	ObjTurnoD.visible=false;
	
	for (i=0;i<=Mazo.length-1;i++)
	{
		Mazo[i].cartilla.destroy();
	}

	for (i=0;i<=MazoR.length-1;i++)
	{
		MazoR[i].cartilla.destroy();
	}

	for (i=0;i<=MazoL.length-1;i++)
	{
		MazoL[i].cartilla.destroy();
	}

	for (i=0;i<=MazoU.length-1;i++)
	{
		MazoU[i].cartilla.destroy();
	}
	for (i=0;i<=MazoD.length-1;i++)
	{
		MazoD[i].cartilla.destroy();
	}


	for (i=0;i<=MazoCentral.length-1;i++)
	{
		MazoCentral[i].cartilla.destroy();
	}

	
	for (i=0;i<=MazoCentralApoyo.length-1;i++)
	{
		MazoCentralApoyo[i].cartilla.destroy();
	}
	
	for (i=0;i<=CartaTriunfo.length-1;i++)
	{
		CartaTriunfo[i].cartilla.destroy();
	}

	for (i=0;i<=MazoRecogido.length-1;i++)
	{
		MazoRecogido[i].destroy();
	}

	for (i=0;i<=MazoRecogidoRival.length-1;i++)
	{
		MazoRecogidoRival[i].destroy();
	}


	Mazo.splice(0,100);
	MazoR.splice(0,100);
	MazoL.splice(0,100);
	MazoU.splice(0,100);
	MazoD.splice(0,100);
	MazoCentral.splice(0,100);
	MazoCentralApoyo.splice(0,100);
	MazoCentralApoyo.splice(0,100);
	CartaTriunfo.splice(0,100);
	MazoRecogido.splice(0,100);
	MazoRecogidoRival.splice(0,100);
	
}
		
LimpiarVariables=function(){

var i;

vNoEsta=false;
FinalizandoPartida=false; //1.0.8

Noticia.visible=false;
TextMarcador.visible=false;
TextTituloMarcador.visible=false;
BotonCantar.visible=false;
BotonSiete.visible=false;
textoContador.text="";

//game_objeto.tweens.pauseAll(); 
ObjTurnoR.visible=false;
ObjTurnoL.visible=false;
ObjTurnoU.visible=false;
ObjTurnoD.visible=false;

if (inputField!=undefined)
{
	inputField.visible=false;
}
log(true,"Limpiando variables..");
for (i=0;i<=Mazo.length-1;i++)
{
	Mazo[i].cartilla.destroy();
}

for (i=0;i<=MazoR.length-1;i++)
{
	MazoR[i].cartilla.destroy();
}

for (i=0;i<=MazoL.length-1;i++)
{
	MazoL[i].cartilla.destroy();
}

for (i=0;i<=MazoU.length-1;i++)
{
	MazoU[i].cartilla.destroy();
}
for (i=0;i<=MazoD.length-1;i++)
{
	MazoD[i].cartilla.destroy();
}


for (i=0;i<=MazoCentral.length-1;i++)
{
	MazoCentral[i].cartilla.destroy();
}


for (i=0;i<=MazoCentralApoyo.length-1;i++)
{
	MazoCentralApoyo[i].cartilla.destroy();
}

for (i=0;i<=CartaTriunfo.length-1;i++)
{
	CartaTriunfo[i].cartilla.destroy();
}

for (i=0;i<=MazoRecogido.length-1;i++)
{
	MazoRecogido[i].destroy();
}

for (i=0;i<=MazoRecogidoRival.length-1;i++)
{
	MazoRecogidoRival[i].destroy();
}

//BotonCantar.visible=false;
//BotonSiete.visible=false;
BotonCantar.loadTexture('Boton_cantar_off', 0);
BotonSiete.loadTexture('Boton_cambiar_7_off', 0);

ArrayAccionesDesconexiones.splice(0,1000); //1.0.6
Mazo.splice(0,100);
MazoEnviar.splice(0,100);
MazoR.splice(0,100);
MazoL.splice(0,100);
MazoU.splice(0,100);
MazoD.splice(0,100);
Mazoposiciones.splice(0,100);
MazoCentral.splice(0,100);
MazoCentralApoyo.splice(0,100);
MazoCentralBuffer.splice(0,100);
MazoCentralBufferEspecial7.splice(0,100);
CartaTriunfo.splice(0,100);
MazoRecogido.splice(0,100);
MazoRecogidoApoyo.splice(0,100);
MazoRecogidoRival.splice(0,100);
SemaforoRondas.splice(0,100);
SemaforoRondasRapido.splice(0,100);
SemaforoAvatars.splice(0,100);
vRonda=1;
RondaJugada.splice(0,100);
BazaNuestraGlobal=false;
RegistrarCantes.splice(0,100);
UltimaBazaNuestra.splice(0,100);
UltimaBazaRival.splice(0,100);
ArrayDescartePosible.splice(0,100);
ArrayOKParejas.splice(0,100);

log(true,"Fin limpiando variables..");
}

LimpiarVariablesConexionNueva=function()
{
	
	vNoEsta=false;
	FinalizandoPartida=false; //1.0.8
	//game_objeto.tweens.pauseAll(); 
	ObjTurnoR.visible=false;
	ObjTurnoL.visible=false;
	ObjTurnoU.visible=false;
	ObjTurnoD.visible=false;
	
	
	log(true,"Limpiando variables conexiÃ³n nueva..");
	Habitacion=Math.floor(Math.random());
	OcultaClasificacion();
	
	SemaforoRepartos.splice(0,100);
	SemaforoTextoPuntuacion.splice(0,100);
	
	//LogicalTapeteRemoto=false;
	//LogicalDorsoRemoto=false;
	ArrayAccionesDesconexiones.splice(0,1000); //1.0.6
	TextMarcador.visible=false;
	TextTituloMarcador.visible=false;
	textoContador.text="";
	BotonCantar.visible=false;
	BotonSiete.visible=false;
	
	MarcadorNuestro=0;
	MarcadorRival=0;
	MarcadorPartidasNuestro=0;
	MarcadorPartidasRival=0;
	ArrayDelaPropiaSala.splice(0,1000);
	ArrayJugadoresDesconectados.splice(0,1000);
	//ArrayJugadoresDesconectadosID.splice(0,1000);
	SemaforoRondasRapido.splice(0,1000);
	ArrayChatDeshabilitado.splice(0,1000);
	ArrayOKParejas.splice(0,100);
	
	QuienTomaElControl=0;
	PartidaComenzada=false;
	SonVueltas=false;
	vRonda=1;
	vTurno=1
	
	
}

NuevaPartida=function(TurnoActual)
{
	var i;
	var ReparteEnSuNombre;
	//console.log("repartiendo");
	
	var QuienReparte=TurnoActual; //ILA QuienReparte he puesto el var
	
	
	if (ModoMultijugador==false)
	{
			//console.log("entra a repartir");
			CrearBaraja(QuienReparte);	
	}
	else
	{		
	
		//1.0.6 if (MazoD.length==0 && MazoCentral.length==0 && MazoL.length==0 && MazoR.length==0 && ArrayDelaPropiaSala.length>=4)
		//	if (MazoD.length==0 && MazoCentral.length==0 && MazoL.length==0 && MazoR.length==0 && ArrayDelaPropiaSala.length>=4)
		//{
			//console.log("DE VUELTASSSS. EnvÃ­o la bataja y limpio variables");
			
			
			//console.log("Turno actual: "+TurnoActual+" vTurno: "+vTurno+" Toma el control: "+QuienTomaElControl+" Soy: "+SoyElJugador+" Reparte "+QuienReparte);
			if (QuienReparte==SoyElJugador || QuienTomaElControl==SoyElJugador)
			{
				
				ReparteEnSuNombre=false;
				for (i=0;i<=ArrayJugadoresDesconectados.length-1;i++)
				{
					if (ArrayJugadoresDesconectados[i].Jugador==QuienReparte)
					{
						ReparteEnSuNombre=true;
					}
					
				}
				
				if (QuienReparte==SoyElJugador || ReparteEnSuNombre==true)
				{
					//console.log("Yo creo la baraja. Por cierto soy.. "+SoyElJugador+" y reparte "+QuienReparte);
					
					if (ValidaRepartosJugador()==true) //1.0.8
					{
						CrearBaraja(QuienReparte);	
						
						log(false,MazoEnviar.length);
						//log(false,"ROOM "+socket.room);
						if (ModoMultijugador==true)
						{
							log(true,"... y la envÃ­o")
							log(true,"EnvÃ­o que reparte: "+QuienReparte);
							EnviarBaraja(MazoEnviar,Habitacion,QuienReparte,SonVueltas,ArrayDelaPropiaSala,(MarcadorPartidasNuestro+MarcadorPartidasRival));	
						}
					}
				}
			}
			//else
			//{
				/*if(MazoEnviarApoyo.length>0)
				{
					CrearBarajaRecibida(MazoEnviarApoyo,QuienReparte,true)
				}*/
				
				//1.0.4
				//if (ModoMultijugador==false)
				//{
				//	CrearBaraja(QuienReparte);	
				//}
				
				//AQUI
			//}
		}
	//}
}
	//QuienReparte=4;
	//vTurno=0;
LimpiandoPartida=function()
{
	textoContador.text="";
	PartidaComenzada=false;
	timerturno.stop();
	//BotonCantar.visible=false;		
	//BotonSiete.visible=false;	
	BotonCantar.loadTexture('Boton_cantar_off', 0);
	BotonSiete.loadTexture('Boton_cambiar_7_off', 0);
	BotonCantar.visible=false;
	BotonSiete.visible=false;
}	








HabilitarVerUltimaBaza=function(sprite)
{
	sprite.inputEnabled = true;
	sprite.input.disableDrag();
	sprite.events.onInputDown.add(MuestraUltimaBaza);
	
}

DeshabilitarVerUltimaBaza=function(sprite)
{
	sprite.inputEnabled = false;
	//sprite.input.disableDrag();
	//sprite.events.onInputDown.add(MuestraUltimaBaza);
	
}

MuestraUltimaBaza=function(sprite){
	log(false,"mostrando última Baza");
	var i;
	var VerUltimaBaza="Nuestro"
	var Encontrado=false;
	var MazoMostrarTemp;
	MazoMostrar=[];
	
	if (1==1)
	{
	
		for (i=0;i<=MazoRecogido.length-1;i++)
		{
			MazoRecogido[i].bringToTop();
			if (sprite.name==MazoRecogido[i].name)
			{
				Encontrado=true;
				VerUltimaBaza="Nuestro";
				break;
			}
		}	
		
		if (Encontrado==true){
			MazoMostrarTemp=UltimaBazaNuestra;
		}
		else
		{
			for (i=0;i<=MazoRecogidoRival.length-1;i++)
			{
				if (sprite.name==MazoRecogidoRival[i].name)
				{
					Encontrado=true;
					VerUltimaBaza="Rival";
					break;
				}
			}	
			
			if (Encontrado==true){
				MazoMostrarTemp=UltimaBazaRival;
			}
		
		}
		
		//Para evitar que se pare la recogida de cartas
		for (i=0;i<=MazoMostrarTemp.length-1;i++)
		{
			MazoMostrar.push(MazoMostrarTemp[i]);
			GrupoUltimaBaza.add(MazoMostrar[i])
			MostrarAnverso(MazoMostrar[i]);
			MazoMostrar[i].bringToTop();
		}
		

		
		
		//GrupoUltimaBaza.bringToTop();
		//log(false,"ENC"+ sprite.name);
		if (Encontrado==true)
		{

		for(i=0;i<=MazoCentral.length-1;i++)
		{
			MazoCentral[i].cartilla.alpha=0.2;
		}
		
		
			//log(false,"NO ENC");
			twUB1 = game_objeto.add.tween(MazoMostrar[0].scale);
			twUB1.to( {x:vEscalaUltimaBaza
			,y:vEscalaUltimaBaza,
			angle:0  
			}
			, vVelocidadCartasReordernar, EfectoTween1);
			twUB1.start();			
			
			twUB1 = game_objeto.add.tween(MazoMostrar[0]);
			twUB1.to( {x:game_objeto.world.centerX
			,y:CentroIrreal,
			angle:0  
			}
			, vVelocidadCartasReordernar, EfectoTween1);
			twUB1.start();		
		


		twUB1 = game_objeto.add.tween(MazoMostrar[1].scale);
			twUB1.to( {x:vEscalaUltimaBaza
			,y:vEscalaUltimaBaza,
			angle:0  
			}
			, vVelocidadCartasReordernar, EfectoTween1);
			twUB1.start();			
			
		twUB1 = game_objeto.add.tween(MazoMostrar[1]);
			twUB1.to( {x:game_objeto.world.centerX+(AnchoCarta*1)+(vSeparacion)
			,y:CentroIrreal,
			angle:0  
			}
			, vVelocidadCartasReordernar, EfectoTween1);
			twUB1.start();		
		

		
		
			twUB1 = game_objeto.add.tween(MazoMostrar[2].scale);
			twUB1.to( {x:vEscalaUltimaBaza
			,y:vEscalaUltimaBaza,
			angle:0  
			}
			, vVelocidadCartasReordernar, EfectoTween1);
			twUB1.start();			
			
		twUB1 = game_objeto.add.tween(MazoMostrar[2]);
			twUB1.to( {x:game_objeto.world.centerX+(AnchoCarta*2)+(vSeparacion*2)
			,y:CentroIrreal,
			angle:0  
			}
			, vVelocidadCartasReordernar, EfectoTween1);
			twUB1.start();		
		
		
		

		
		
			twUB1 = game_objeto.add.tween(MazoMostrar[3].scale);
			twUB1.to( {x:vEscalaUltimaBaza
			,y:vEscalaUltimaBaza,
			angle:0  
			}
			, vVelocidadCartasReordernar, EfectoTween1);
			twUB1.start();			
			
			twUB1 = game_objeto.add.tween(MazoMostrar[3]);
			twUB1.to( {x:game_objeto.world.centerX+(AnchoCarta*3)+(vSeparacion*3)
			,y:CentroIrreal,
			angle:0  
			}
			, vVelocidadCartasReordernar, EfectoTween1);
			twUB1.onComplete.add( function(){
				EfectoHacerPequenasUltimaBaza(MazoMostrar,VerUltimaBaza);
				}
			);
			twUB1.start();		
			
			
		}
	
	}
}



EfectoHacerPequenasUltimaBaza=function(MazoMostrar,DeQuien){
	
		twUB1 = game_objeto.add.tween(MazoMostrar[0].scale);
		twUB1.to( {x:vEscalaPequenas
		,y:vEscalaPequenas
		}
		, vVelocidadCartasReordernar, EfectoTween1,false,500);
		twUB1.start();		

		
		twUB1 = game_objeto.add.tween(MazoMostrar[1].scale);
		twUB1.to( {x:vEscalaPequenas
		,y:vEscalaPequenas
		}
		, vVelocidadCartasReordernar, EfectoTween1,false,500);
		twUB1.start();		

		
		twUB1 = game_objeto.add.tween(MazoMostrar[2].scale);
		twUB1.to( {x:vEscalaPequenas
		,y:vEscalaPequenas
		}
		, vVelocidadCartasReordernar, EfectoTween1,false,500);
		twUB1.start();		
		
//}
//EfectosHacerPequenas2=function(){
		twUB1 = game_objeto.add.tween(MazoMostrar[3].scale);
		twUB1.to( {x:vEscalaPequenas
		,y:vEscalaPequenas
		}
		, vVelocidadCartasReordernar, EfectoTween1,false,500);
		
		
		twUB1.onComplete.add( function(){
		
			EfectoRecogerUltimaBaza(MazoMostrar,DeQuien);
		
		    });
		
		
		twUB1.start();		
		


}



EfectoRecogerUltimaBaza=function(MazoMostrar,DeQuien){
	var posX;
	var	posY;
	
	if 	(DeQuien=="Nuestro"){
		posX=devuelveX("ULTIMA_Baza",0);
		posY=devuelveY("ULTIMA_Baza",0);
	}
	else{
		//posX=devuelveX("D",98)- (AnchoCartaEscalado)-(AnchoCarta/2);
		//posY=devuelveY("U",5);
		
		posX=devuelveX("ULTIMA_Baza_Rival",0);
		posY=devuelveY("ULTIMA_Baza_Rival",0);
	}
	
		MostrarReverso(MazoMostrar[0]);
		MostrarReverso(MazoMostrar[1]);
		MostrarReverso(MazoMostrar[2]);
		MostrarReverso(MazoMostrar[3]);

	
		twUB1 = game_objeto.add.tween(MazoMostrar[0]);
		MazoMostrar[0].alpha=1;
		twUB1.to( {x:posX
		,y:posY,
		angle:Math.floor(Math.random() * 360) + 1  
		}
		, vVelocidadCartasReordernar, EfectoTween1);
		//tw1.onComplete.add(EfectosRecogerCartas2,this)						
		twUB1.start();
		
		
		twUB1 = game_objeto.add.tween(MazoMostrar[1]);
		MazoMostrar[1].alpha=1;
		twUB1.to( {x:posX
		,y:posY,
		angle:Math.floor(Math.random() * 360) + 1  
		}
		, vVelocidadCartasReordernar, EfectoTween1);
		//tw1.onComplete.add(EfectosRecogerCartas2,this)						
		twUB1.start();


		twUB1 = game_objeto.add.tween(MazoMostrar[2]);
		MazoMostrar[2].alpha=1;
		twUB1.to( {x:posX
		,y:posY,
		angle:Math.floor(Math.random() * 360) + 1  
		}
		, vVelocidadCartasReordernar, EfectoTween1);
		//tw1.onComplete.add(EfectosRecogerCartas2,this)						
		twUB1.start();		
		
		
		
		twUB1 = game_objeto.add.tween(MazoMostrar[3]);
		MazoMostrar[3].alpha=1;
		twUB1.to( {x:posX
		,y:posY,
		angle:Math.floor(Math.random() * 360) + 1  
		}
		, vVelocidadCartasReordernar, EfectoTween1);
		//tw1.onComplete.add(EfectosRecogerCartas2,this)						
		twUB1.start();
		
		for(i=0;i<=MazoCentral.length-1;i++)
		{
			MazoCentral[i].cartilla.alpha=1;			
		}
	/*	for(i=0;i<=UltimaBazaNuestra.length-1;i++)
		{
			UltimaBazaNuestra[i].cartilla.alpha=1;
		}		
		for(i=0;i<=UltimaBazaRival.length-1;i++)
		{
			UltimaBazaRival[i].cartilla.alpha=1;
		}	*/			
}

function addquake() {
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
  var repeat = 5;
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
  quake.onComplete.addOnce(quakeEnd);
  
  // let the earthquake begins
  quake.start();
}

quakeEnd=function()
{

 //console.log("DEBE ARREGLAR CAMARA");	
  /*var x=0;
  var y=0;
  var w=game_objeto.world.width;
  var h=game_objeto.world.height;
 */
 	 var margin = -50;
	 // and set the world's bounds according to the given margin
	 var x = 0;
	 var y = 0;

	 var w = game_objeto.world.width + (margin * 2);
	 var h = game_objeto.world.height+ (margin * 2);
	 
  game_objeto.world.setBounds(x, y, w, h);
  game_objeto.world.camera.position.set(0);
	
}

OcultaClasificacion=function()
{
	var d=document.getElementById('DivResultado');
	d.style.display = 'none';
	//d.style.zIndex=-1;
}

EnviarBaraja=function(MazoEnviar,Habitacion,QuienReparte,SonVueltas,ArrayDelaPropiaSala,Partida)
{
	
	//socket.emit('enviar baraja', MazoEnviar,Habitacion,QuienReparte,SonVueltas,ArrayDelaPropiaSala,Partida);
	/////////////

	var Hora=Date.now();
	var ObjectSend=function( MazoEnviar,Habitacion,QuienReparte,SonVueltas,ArrayDelaPropiaSala,Partida,idPartida,
		IdMsg,ClientId,SalaID,Mensaje){
		 this.MazoEnviar=MazoEnviar
		 this.Habitacion=Habitacion
		 this.QuienReparte=QuienReparte
		 this.SonVueltas=SonVueltas
		 this.ArrayDelaPropiaSala=ArrayDelaPropiaSala
		 this.Partida=Partida
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
	idPartida=Math.random()*100000;
	//console.log("Envio el id partida "+idPartida);
	var Objeto=new ObjectSend(MazoEnviar,Habitacion,QuienReparte,SonVueltas,ArrayDelaPropiaSala,Partida,idPartida,
		IdMsg,socket.id,Habitacion,'enviar baraja');
	ArrayAccionesDesconexiones.push(Objeto);
	ArrayAccionesDesconexionesLocal.push(Objeto);


	socket.emit('enviar baraja',ArrayAccionesDesconexionesLocal[0],
	 function(idMensaje)
	 {			 
		EliminarColaMensajes(idMensaje,'enviar baraja');
	 }
	);						
	ArrayAccionesDesconexionesLocal.splice(0,1000);	

	
	/////////////		
}