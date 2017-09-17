IA=function(JugadorQueMueve){
	var CartaMover=false;
	var NumeroJugada;
	var MazoIA=[];
	var MazoIATemp=[];
	var i;
	var u;
	var Letra;
	var Encontrada;

	//console.log("IAIAOH");
	
	if (  ( (PartidaComenzada==true &&  MarcadorNuestro<PuntosGanar && MarcadorRival<PuntosGanar) ||  (SonVueltas==false && PartidaComenzada==true)     ) 
			)
	{
	
		NumeroJugada=MazoCentral.length+1;
			
		
		
		log(false,"vRonda "+vRonda);
		
		
		

		MazoIA.splice(0,100);
		//QuienGanaManoResultado(vTurno);
		
		if (ModoMultijugador==false)
		{
			JugadorQueMueve=vTurno;
		}
		
		
		log(true,"IA JUGADOR QUE MUEVE "+JugadorQueMueve);
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
		log(true,"DEBERIA SACAR CARTA DEL Mazo "+Letra);	
		
		
		
		for(i=0;i<=MazoIATemp.length-1;i++){
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
		if (MazoIA.length>0)
			{
			
			var CartaGanadora=IA_PartidaGanada(MazoIA,JugadorQueMueve,NumeroJugada);
			//console.log("Carta devuelta ganadora: "+CartaGanadora);
			if (CartaGanadora!=false)
			{
				CartaMover=CartaGanadora;
			}
			else
			{
				if (IA_MasDe20()==true)
				{
					CartaMover=IA_Sujeta(MazoIA,JugadorQueMueve,"Alto",NumeroJugada);
				}
				else
				{
					if (IA_MasDe10()==true  || (SonVueltas==true && NumeroJugada==3) )
					{
						
						if (SonVueltas==false && vRonda==4)
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
						CartaMover=IA_Descarte(MazoIA,JugadorQueMueve,NumeroJugada);
					}	
				}
			}
			
			for (var h=0;h<=MazoIA.length-1;h++)
			{
				if (MazoIA[h].idCarta===CartaMover)
				{
					var pp=MazoIA[h].palo;
					var qq=MazoIA[h].numero
					var rr=MazoIA[h].valor
				}
			}
			
			//console.log("CARTA MOVER "+CartaMover," "+JugadorQueMueve+" "+qq+" "+pp+" "+rr);
			
			//08/02/2017 Para por si acaso no existe (cambio de 7 o que se yo)
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
				//alert("BRUTAL");
				//console.log("IA DESDE IA");
				timer.stop(); //Mucho miedo 29/04/2017
				IA(JugadorQueMueve);
			}
			
			
			
			
			
			
			if (1==1)
			//console.log("CARTA MOVER "+CartaMover );	
			//if (CartaMover!=false)
			{
				
					if ( (ModoMultijugador==false  && SoyElJugador!=JugadorQueMueve) || (ModoMultijugador==true)   )
					{
						if (ValidaMovimientoJugador(vRonda,JugadorQueMueve)==true)
						{
							log(true,"IA: ENVIO CARTA AL CENTRO "+CartaMover+" AUTOMATICAMENTE CON vTurno "+JugadorQueMueve)
							/*if (JugadorQueMueve==1 && vRonda==2)
							{
								alert("bien");
							}*/
							if (ModoMultijugador==false)
							{
								MoverCentroAjeno(JugadorQueMueve,CartaMover,vRonda,Date.now()); 
							}
							
							else
							{			
								log(true,"Envio la carta al centro desde IA para mi")
								
								
								/////////////
							
								var Hora=Date.now();
								var ObjectSend=function( Habitacion,SoyElJugador,Cartilla,Turno, RondaParam, 
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
			 
									
								var IdMsg=Math.random()*100000;
								var Objeto=new ObjectSend(Habitacion,JugadorQueMueve,CartaMover,JugadorQueMueve, vRonda,
									IdMsg,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,Habitacion,'enviar carta centro solo yo');
								ArrayAccionesDesconexiones.push(Objeto);
								ArrayAccionesDesconexionesLocal.push(Objeto);


								socket.emit('enviar carta centro solo yo',ArrayAccionesDesconexionesLocal[0],
								 function(idMensaje)
								 {			 
									EliminarColaMensajes(idMensaje,'enviar carta centro solo yo');
								 }
								);						
								ArrayAccionesDesconexionesLocal.splice(0,1000);	
	  
								
								/////////////	
								
								
								
								
								//socket.emit('enviar carta centro solo yo', Habitacion,JugadorQueMueve,CartaMover,JugadorQueMueve, vRonda) ; //Simulo el MoverCentroAjeno para que la hora me la de el server
							}
							
							if (ModoMultijugador==true)
							{
								log(true,"ENVIO CARTA AL RESTO "+CartaMover+" AUTOMATICAMENTE CON vTurno "+JugadorQueMueve)
								
								
				/////////////
							
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
							var Objeto=new ObjectSend(Habitacion,JugadorQueMueve,CartaMover,JugadorQueMueve, vRonda, SonVueltas,(MarcadorPartidasNuestro+MarcadorPartidasRival),
								ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorFull,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,
								ArrayDelaPropiaSala[JugadorQueMueve-1].Nombre,
								IdMsg,ArrayDelaPropiaSala[JugadorQueMueve-1].JugadorSala,Habitacion,'enviar carta centro');
							ArrayAccionesDesconexiones.push(Objeto);
							ArrayAccionesDesconexionesLocal.push(Objeto);


							socket.emit('enviar carta centro',ArrayAccionesDesconexionesLocal[0],
							 function(idMensaje)
							 {			 
								EliminarColaMensajes(idMensaje,'enviar carta centro');
							 }
							);						
							ArrayAccionesDesconexionesLocal.splice(0,1000);	
  
							
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

IA_MasDe10=function(){
	var i;
	var devuelve=false;
	var PuntosEnMesa=0;
	
	for (i=0;i<=MazoCentral.length-1;i++)
	{
		PuntosEnMesa=PuntosEnMesa+MazoCentral[i].valorPuntuacion;
	}

	if (PuntosEnMesa>=10)
	{
		devuelve=true;
	}	

	return devuelve;
}


IA_PartidaGanada=function(MazoIA,JugadorQueMueve,NumeroJugada){
	var i;
	var u=0;
	var j=0;
	var lanzala=false;
	var CartaQueMasVale=0;
	var CartaQueMasValeCualquiera=0;
	var PuntosEnMesa=0;
	
	for (i=0;i<=MazoCentral.length-1;i++)
	{
		PuntosEnMesa=PuntosEnMesa+MazoCentral[i].valorPuntuacion;
	}
	//console.log("Puntos mesa: "+PuntosEnMesa);
	
	
	for (i=0;i<=MazoIA.length-1;i++){
		if(MazoIA[i].palo==Triunfo && MazoIA[i].valorPuntuacion>=2)
		{
			if (MazoIA[i].valorPuntuacion>CartaQueMasVale)
			{
				CartaQueMasVale=MazoIA[i].valorPuntuacion;
				u=i;
			}
		}
	}
	
	
	for (i=0;i<=MazoIA.length-1;i++){

		if (MazoIA[i].valorPuntuacion>CartaQueMasValeCualquiera)
		{
			CartaQueMasValeCualquiera=MazoIA[i].valorPuntuacion;
			j=i;
		}
		
	}

	//CRITICO
	if (MarcadorNuestro+CartaQueMasVale+PuntosEnMesa>=(PuntosGanar))
	{
		if (NumeroJugada==4)
		{
			
			
			var Key=IA_DevuelveKey(MazoIA,MazoIA[j].palo,MazoIA[j].valorReal)
			//console.log("Ultimo en tirar: (prov): "+Key);
			if (IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false)
			{
				return Key;
			}
			else
			{
				
				var Key=IA_DevuelveKey(MazoIA,MazoIA[u].palo,MazoIA[u].valorReal)
				//console.log("Ultimo en tirar: (prov2): "+Key);
				if (IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false)
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

				//console.log("RECOMIENDA: "+MazoIA[u].palo+" "+MazoIA[u].valorReal);
				var Key=IA_DevuelveKey(MazoIA,MazoIA[u].palo,MazoIA[u].valorReal);
				//console.log("RECOMENDADO KEY: "+Key)
				if (IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false)
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


IA_Ganaria=function(MazoIA,JugadorQueMueve, LaKey)
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



IA_MasDe20=function(){

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


IA_Descarte=function(MazoIA,JugadorQueMueve,NumeroJugada){
	var i;
	var u;
	var Encontrado=false;
	
	var BazaYaEsNuestra=RBazaEsNuestra(MazoCentral,JugadorQueMueve);
	
	ArrayDescartePosible.splice(0,100);
	

	for (i=0;i<=MazoIA.length-1;i++)
	{
		//log(false,"ENTRA "+i)
		CuentaPalos(MazoIA[i].palo);
	}
	
	Devolver=IA_Cargar(MazoIA,JugadorQueMueve,NumeroJugada);
	
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
					if (MazoIA[u].palo==ArrayDescartePosible[i].palo && MazoIA[u].valorPuntuacion<10 && 
					
						(
						NumeroJugada==1 ||
						(IA_Ganaria(MazoIA,JugadorQueMueve,Key)==false && NumeroJugada==2) ||
						( (NumeroJugada==3 ||  NumeroJugada==4)  && (BazaYaEsNuestra==true || IA_Ganaria(MazoIA,JugadorQueMueve,Key)==false))
						)

					)
					{
						Encontrado=true;
						Devolver=MazoIA[u].cartilla.name;
						//log(false,"Encontrada "+MazoIA[u].palo+" "+MazoIA[u].valorPuntuacion);
						break;
					}
				}
			}
		}
	}
	else
	{
		Encontrado=true;
	}

	if (Encontrado==false)
	{
		Devolver=IA_AleatoriaNoTriunfo(MazoIA,JugadorQueMueve,NumeroJugada);
	}
	
	log(false,"IA_Descarte "+JugadorQueMueve +" "+Devolver);
	return Devolver;
	
}

var ObjetoDescarte = function(palo,veces){
	this.palo=palo;
	this.veces=veces;	
};
	

CuentaPalos=function(palo){
	
	var i;
	var Encontrado=false;
	
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


IA_AleatoriaNoTriunfo=function(MazoIA,JugadorQueMueve,NumeroJugada)
{
	var ArrayManoCopia=[];
	var i;
	var Intentos=20;
	var Encontrado=false;
	var Devuelve;
	
	var BazaYaEsNuestra=RBazaEsNuestra(MazoCentral,JugadorQueMueve);
	
	ArrayManoCopia.splice(0,100);
	
	
	for (i=0;i<=MazoIA.length-1;i++){
		ArrayManoCopia.push(new CartaIA(MazoIA[i].palo,MazoIA[i].valorReal,MazoIA[i].cartilla.name, MazoIA[i].valorPuntuacion ));
	}
	
	for (i=0;i<=Intentos;i++)
	{
		//Intento quitarme cartas que no san Triunfo, pero que no valgan más de 10 puntos
		Phaser.ArrayUtils.shuffle(ArrayManoCopia);
		if (ArrayManoCopia[0].palo!=Triunfo && ArrayManoCopia[0].valorPuntuacion<10)
		{
			var Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[0].palo,ArrayManoCopia[0].valorReal)
			if (
				NumeroJugada==1 ||
				(IA_Ganaria(MazoIA,JugadorQueMueve,Key)==false && NumeroJugada==2) ||
				( (NumeroJugada==3 ||  NumeroJugada==4)  && (BazaYaEsNuestra==true || IA_Ganaria(MazoIA,JugadorQueMueve,Key)==false))

			)
			
			{
				Encontrado=true;
				Devuelve=ArrayManoCopia[0].name
				break;
			}
			else
			{
				//log(false,"Ganaría con "+ArrayManoCopia[0].palo+" "+ArrayManoCopia[0].valorReal);
			}			
		}
	}
	
	//Aunque mate
	if (Encontrado==false)
	{
		for (i=0;i<=Intentos;i++)
		{
			//Intento quitarme cartas que no san Triunfo, pero que no valgan más de 10 puntos
			Phaser.ArrayUtils.shuffle(ArrayManoCopia);
			
			if (ArrayManoCopia[0].palo!=Triunfo && ArrayManoCopia[0].valorPuntuacion<10)
			{
				
					Encontrado=true;
					Devuelve=ArrayManoCopia[0].name
					break;			
			}
		}	
	}
	
	
	
	//Con puntos, que mate	
	if (Encontrado==false)
	{
		for (i=0;i<=Intentos;i++)
		{
			//Intento quitarme cartas que no san Triunfo, pero que no valgan más de 10 puntos
			Phaser.ArrayUtils.shuffle(ArrayManoCopia);
			if (ArrayManoCopia[0].palo!=Triunfo)
			{
				var Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[0].palo,ArrayManoCopia[0].valorReal)
				if (
					
					NumeroJugada==1 ||
					(IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false && NumeroJugada==2) ||
					((NumeroJugada==3 ||  NumeroJugada==4) && (IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false))

				)
				
				{
					Encontrado=true;
					Devuelve=ArrayManoCopia[0].name
					break;
				}
				else
				{
					//log(false,"Ganaría con "+ArrayManoCopia[0].palo+" "+ArrayManoCopia[0].valorReal);
				}			
			}
		}
	}
	
	
	//Si no encuentra, me quito carta con puntos
	if (Encontrado==false)
	{
		for (i=0;i<=Intentos;i++)
		{
			Phaser.ArrayUtils.shuffle(ArrayManoCopia);
			if (ArrayManoCopia[0]!=Triunfo)
			{
				var Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[0].palo,ArrayManoCopia[0].valorReal)
				//if (IA_Ganaria(MazoIA,JugadorQueMueve,Key)==false || NumeroJugada==3 || NumeroJugada==4)
				//{
					Encontrado=true;
					Devuelve=ArrayManoCopia[0].name
					break;
				//}
			}
		}

	}
	
	//Si no encuentra, me quito cualquiera
	if (Encontrado==false)
	{
		Phaser.ArrayUtils.shuffle(ArrayManoCopia);
		Devuelve=ArrayManoCopia[0].name
	}
	
	log(false,"IA_ALEATORIONOTriunfo "+JugadorQueMueve +" "+Devuelve);
	return Devuelve;
	
}


IA_AleatoriaSiTriunfo=function(MazoIA,JugadorQueMueve)
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
	
	for (i=0;i<=Intentos;i++)
	{
		//Intento quitarme cartas que no san Triunfo, pero que no valgan más de 10 puntos
		Phaser.ArrayUtils.shuffle(ArrayManoCopia);
		if (ArrayManoCopia[0].palo==Triunfo)
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
	
	
	if (Encontrado==false)
	{
		for (i=0;i<=Intentos;i++)
		{
			//Intento quitarme cartas que no san Triunfo, pero que maten
			Phaser.ArrayUtils.shuffle(ArrayManoCopia);
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
		Phaser.ArrayUtils.shuffle(ArrayManoCopia);
		Devuelve=ArrayManoCopia[0].name
	}
	
	log(false,"IA_ALEATORIOSITriunfo "+JugadorQueMueve +" "+Devuelve);
	return Devuelve;
}

MiCompiHaTiradoTriunfo=function(MazoCentral,NumeroJugada)
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

IA_Sujeta=function(MazoIA,JugadorQueMueve,Criterio,NumeroJugada){
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
	
	Devuelve=IA_Cargar(MazoIA,JugadorQueMueve,NumeroJugada);
	if (Devuelve==false)
	{
		
		
		
		
		if (  (SonVueltas==false && RBazaEsNuestra(MazoCentral,JugadorQueMueve)==true) 
			|| (SonVueltas==true && RBazaEsNuestra(MazoCentral,JugadorQueMueve)==true && MiCompiHaTiradoTriunfo(MazoCentral,NumeroJugada)==true    )		)
		{
			Devuelve=IA_Descarte(MazoIA,JugadorQueMueve);
			//log(false,"LA Baza ES NUESTRA JUGADOR: "+JugadorQueMueve);
		}
		else
		{		
			
			if (NumeroJugada==4)
			{
			
				ArrayManoCopia.splice(0,100);	
	
				for (i=0;i<=MazoIA.length-1;i++){
					ArrayManoCopia.push(new CartaIA(MazoIA[i].palo,MazoIA[i].valorReal,MazoIA[i].cartilla.name, MazoIA[i].valorPuntuacion ));
				}
	
				Phaser.ArrayUtils.shuffle(ArrayManoCopia);
				
				for (i=0;i<=ArrayManoCopia.length-1;i++)
				{
					if (ArrayManoCopia[i].palo!=Triunfo)
					{
						var Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)
						if ( IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false)						
						{
							Encontrado=true;
							Devuelve=ArrayManoCopia[i].name
							break;
						}
					}
				}
			}
			
			
			if (Devuelve==false)
			{
				
				//log(false,"LA Baza NO ES NUESTRA JUGADOR  "+JugadorQueMueve);
				//Investigo mi Triunfo más bajo
				for (i=0;i<=MazoIA.length-1;i++)
				{
					if (MazoIA[i].palo==Triunfo && MazoIA[i].valorReal<ValorMasBajo)
					{
						ValorMasBajo=MazoIA[i].valorReal
					}
				}
				//y el más alto
				for (i=0;i<=MazoIA.length-1;i++)
				{
					if (MazoIA[i].palo==Triunfo && MazoIA[i].valorReal>ValorMasAlto)
					{
						ValorMasAlto=MazoIA[i].valorReal
					}
				}	

				
				
				if (Criterio=="Bajo")
				{
					if (ValorMasBajo!=100)
					{
						IntentaSujetar=true;
						valorAnalizar=ValorMasBajo;
					}
					else
					{
						IntentaSujetar=false;
					}
				}
				else
				{
					if (ValorMasAlto!=0)
					{
						IntentaSujetar=true;
						valorAnalizar=ValorMasAlto;
					}
					else
					{
						IntentaSujetar=false;
					}
				}
				
				if (IntentaSujetar==true)
				{
					var Key=IA_DevuelveKey(MazoIA,Triunfo,valorAnalizar);
					var Devuelve=IA_Ganaria(MazoIA,JugadorQueMueve,Key);
					//log(false,"lo flipo "+Devuelve);
					if (Devuelve!=false)
					{
					
						//log(false,"La Baza sí sería nuestra con "+Devuelve)
					
					}
					else{
						//log(false,"Cualquier carta pero Triunfo")
						Devuelve=IA_AleatoriaSiTriunfo(MazoIA,JugadorQueMueve);
						Devuelve=IA_Ganaria(MazoIA,JugadorQueMueve,Devuelve);
						if (Devuelve==false){
							Devuelve=IA_Descarte(MazoIA,JugadorQueMueve);
						}
					}
				}
				else
				{
					Devuelve=IA_AleatoriaSiTriunfo(MazoIA,JugadorQueMueve);
					Devuelve=IA_Ganaria(MazoIA,JugadorQueMueve,Devuelve);
					if (Devuelve==false){
						Devuelve=IA_Descarte(MazoIA,JugadorQueMueve);
					}
				}		
			}			
		}
	}
	
	//log(false,"Y DEFINITAMENTE DEVUELVE.."+Devuelve)
	log(false,"IA_Sujeta "+JugadorQueMueve +" "+Devuelve);
	return Devuelve;
	
}

IA_DeboCargar=function(JugadorQueMueve){
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

IA_Cargar=function(MazoIA,JugadorQueMueve,NumeroJugada)
{
	var i;
	var ArrayManoCopia=[];
	var BazaYaEsNuestra=RBazaEsNuestra(MazoCentral,JugadorQueMueve);
	var Devuelve=false;
	ArrayManoCopia.splice(0,100);
	
	
	for (i=0;i<=MazoIA.length-1;i++){
		ArrayManoCopia.push(new CartaIA(MazoIA[i].palo,MazoIA[i].valorReal,MazoIA[i].cartilla.name, MazoIA[i].valorPuntuacion ));
	}
	
	Phaser.ArrayUtils.shuffle(ArrayManoCopia);
	
	if (NumeroJugada==4)
	{
	
		for (i=0;i<=ArrayManoCopia.length-1;i++)
		{
			var Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)
			if (  (BazaYaEsNuestra==true || IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false) && ArrayManoCopia[i].palo!=Triunfo && ArrayManoCopia[i].valorPuntuacion>=10  )
			{
				Encontrado=true;
				Devuelve=ArrayManoCopia[i].name
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
				if (MazoCentral[i].palo==Triunfo && MazoCentral[i].valorReal>=10)
				{
					Encontrado=true;
					break;
				}
			}
			
			if (Encontrado==true)
			{
				//log(false,"ES DE MI COMPAÑERO "+JugadorQueMueve);
				for (i=0;i<=ArrayManoCopia.length-1;i++)
				{
					var Key=IA_DevuelveKey(ArrayManoCopia,ArrayManoCopia[i].palo,ArrayManoCopia[i].valorReal)
					if (  (BazaYaEsNuestra==true || IA_Ganaria(MazoIA,JugadorQueMueve,Key)!=false) && ArrayManoCopia[i].palo!=Triunfo && ArrayManoCopia[i].valorPuntuacion>=10  )
					{
						Encontrado=true;
						Devuelve=ArrayManoCopia[i].name
						//log(false,"ESTA DEVUELVE "+JugadorQueMueve+ " "+ArrayManoCopia[i].valorReal+" de " + ArrayManoCopia[i].palo);
						break;
					}
				}
			}
			else
			{
				//log(false,"NO ES DE MI COMPAÑERO "+JugadorQueMueve);
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



	




IA_DevuelveKey=function(MazoIA,palo,valorReal){
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