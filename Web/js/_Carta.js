function Carta(palorecibido,numero,valor,game,posicion,jugador,RondaParam,FechaHora) {

	this.palo=palorecibido;
	this.idCarta=numero;
    this.valor=valor;    
	this.cartilla=game;
	this.posicion=posicion;
	this.jugador=jugador;
	this.Ronda=RondaParam; //A priori se usa solo en los buffer.Ojo en el futuro si meto mⳠpar⮥tros en la llamada pq este no lo he rellenado en ning򮠬ado.
	this.FechaHora=FechaHora;
	
	switch (valor){
	
		case 1 :
			this.valorReal=12;
			this.valorPuntuacion=11;
			break;
		case 3 :
			this.valorReal=11;
			this.valorPuntuacion=10;
			break;	
		case 10 :
			this.valorReal=10;
			this.valorPuntuacion=4;
			break;				
		case 9 :
			this.valorReal=8;
			this.valorPuntuacion=2;
			break;	
		case 8 :
			this.valorReal=9;
			this.valorPuntuacion=3;
			break;				
		default :		
			this.valorReal=valor
			this.valorPuntuacion=0;
			break;		
	}
	
	

	
 
}

//Se usa para las comprobaciones de Bazas ganadoras.
function CartaBazaNuestra(palo,valorReal,jugador) { 
	this.palo=palo;
	this.valorReal=valorReal;
    this.jugador=jugador;
}

PosicionCartas=function(LetraMazo)
{
	var NumeroCartasMano;
	var Mazo;
	Mazoposiciones.splice(0,1000);
	
	
	//var AnchoCartaEscalado=Mazo[Mazo.length-1].cartilla.width*vEscaladoCarta;
	
	if (LetraMazo=="D")
	{
		Mazo=MazoD;
	}
	if (LetraMazo=="U")
	{
		Mazo=MazoU;
	}
	if (LetraMazo=="L")
	{
		Mazo=MazoL;
	}
	if (LetraMazo=="R")
	{
		Mazo=MazoR;
	}
	
	var Signo=1;
	
	if (vRonda>5)
	{
		log(false,"INCREIBLE0");
		if (LetraMazo=="R" || LetraMazo=="U")
		{
			NumeroCartasMano=(Mazo.length+1);
			
		}
		else
		{
			NumeroCartasMano=Mazo.length+1;
			log(false,"INCREIBLE");
		}
	}
	else
	{
		
		if (Mazo.length==0)
		{
			NumeroCartasMano=6;
		}
		else
		{	
			NumeroCartasMano=Mazo.length+1;
			if (NumeroCartasMano==7)
			{
				NumeroCartasMano=6;
			}
		}
		
	}
	
	//1.0.6
	if (PartidaComenzada==false)
	{
		NumeroCartasMano=6;
	}
	
	
	
	//posicionEspecial Cartas Ultima Baza (nunca cambia)
	var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*6)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+      (0 *(AnchoCartaEscalado+ vSeparacion))
	-(AnchoCartaEscalado)-(AnchoCarta/2)+30;
	
	var posY=game_objeto.world.height-(AnchoCartaEscalado)-30;
	
	Mazoposiciones.push(new PosicionesCartas("ULTIMA_Baza",0,posX,posY));
	
	
/*	if 	(DeQuien=="Nuestro"){
		posX=devuelveX("D",98)- (AnchoCartaEscalado)-(AnchoCarta/2);
		posY=devuelveY("D",0);
	}
	else{
		
		posX=devuelveX("ULTIMA_Baza_Rival",0)-(AnchoCartaEscalado)-(AnchoCarta/2);
		posY=devuelveY("R_0",0)+AnchoCarta;
	}*/
	
	

	//var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*6)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+      (7 *(AnchoCartaEscalado+ vSeparacion))-(AnchoCartaEscalado)-(AnchoCarta/2);
	
	//var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*6)) )/2)- ((  1   *((AnchoCarta/2)+ vSeparacion))*Signo)+AnchoCarta;
	var posX;
	
	if (ModoMultijugador==true)
	{
		posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)  +  AnchoCarta )    /2)+      (5 *(AnchoCarta+ vSeparacion))+AnchoCarta-(AnchoFoto/2)+
		(AnchoCarta*1.5);
	}
	else
	{
		posX=game_objeto.world.width-AnchoCarta;
	}
	
	
	var posY=(AnchoCarta);
	
	Mazoposiciones.push(new PosicionesCartas("ULTIMA_Baza_Rival",0,posX,posY));
	
	//var posX=(( game_objeto.world.width-vHorizontalPorqueSi-    - (vSeparacion*5)   +  AnchoCartaEscalado   (((AnchoCartaEscalado/2)*NumeroCartasMano))  )    /2)+      (0 *((AnchoCartaEscalado/2)+ vSeparacion ));
	var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+      (0 *(AnchoCartaEscalado+ vSeparacion));
	var posY=game_objeto.world.height-AnchoCartaEscalado;
	Mazoposiciones.push(new PosicionesCartas("D",0,posX,posY-60));
	
	var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*6)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+      (0 *(AnchoCartaEscalado+ vSeparacion));
	var posY=game_objeto.world.height-AnchoCartaEscalado;
	Mazoposiciones.push(new PosicionesCartas("D",98,posX,posY-60));
	
	var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*6)) - (vSeparacion*5)  +  AnchoCartaEscalado )    /2)-(AnchoCartaEscalado/2) ;
	var posY=game_objeto.world.height-(AltoCarta*2)-(vSeparacion/2);
	Mazoposiciones.push(new PosicionesCartas("D_0",0,posX,posY-60));	
	

	//var posX=(( game_objeto.world.width-vHorizontalPorqueSi-(((AnchoCartaEscalado/2)*NumeroCartasMano))  )/2)+ (1 *((AnchoCartaEscalado/2)+ vSeparacion));
	var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+      (1 *(AnchoCartaEscalado+ vSeparacion));
	var posY=game_objeto.world.height-AnchoCartaEscalado;
	Mazoposiciones.push(new PosicionesCartas("D",1,posX,posY-60));
	

	//var posX=(( game_objeto.world.width-vHorizontalPorqueSi-(((AnchoCartaEscalado/2)*NumeroCartasMano)) )/2)+ (2 *((AnchoCartaEscalado/2)+ vSeparacion));
	var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+      (2 *(AnchoCartaEscalado+ vSeparacion));
	var posY=game_objeto.world.height-AnchoCartaEscalado;
	Mazoposiciones.push(new PosicionesCartas("D",2,posX,posY-60));
	
	//var posX=(( game_objeto.world.width-vHorizontalPorqueSi-(((AnchoCartaEscalado/2)*NumeroCartasMano))   )    /2)+      (3 *((AnchoCartaEscalado/2)+ vSeparacion));
	var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+      (3 *(AnchoCartaEscalado+ vSeparacion));
	var posY=game_objeto.world.height-AnchoCartaEscalado;
	Mazoposiciones.push(new PosicionesCartas("D",3,posX,posY-60));

	//var posX=(( game_objeto.world.width-vHorizontalPorqueSi-(((AnchoCartaEscalado/2)*NumeroCartasMano)) )/2)+ (4 *((AnchoCartaEscalado/2)+ vSeparacion));
	var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+      (4 *(AnchoCartaEscalado+ vSeparacion));
	var posY=game_objeto.world.height-AnchoCartaEscalado;
	Mazoposiciones.push(new PosicionesCartas("D",4,posX,posY-60));
	

	//var posX=(( game_objeto.world.width-vHorizontalPorqueSi-(((AnchoCartaEscalado/2)*NumeroCartasMano)) )/2)+ (5 *((AnchoCartaEscalado/2)+ vSeparacion));
	var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+      (5 *(AnchoCartaEscalado+ vSeparacion));
	var posY=game_objeto.world.height-AnchoCartaEscalado;
	Mazoposiciones.push(new PosicionesCartas("D",5,posX,posY-60));	
	
	Mazoposiciones.push(new PosicionesCartas("D_5",0,posX,posY-60));	
	
	
	//Robada
	var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCartaEscalado*6)) - (vSeparacion*5)  +  AnchoCartaEscalado  )    /2)+      (5 *(AnchoCartaEscalado+ vSeparacion));
	var posY=game_objeto.world.height-AnchoCartaEscalado;
	Mazoposiciones.push(new PosicionesCartas("D",99,posX,posY-60));	



	if (vRonda<=4)	
	{
		var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCarta  )    /2)+      (5 *(AnchoCarta+ vSeparacion));
	}
	else
	{
		var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (5 *(AnchoCarta+ vSeparacion))- ( (6-NumeroCartasMano) *(AnchoCarta+ vSeparacion));
	}
	var posY=AnchoCarta;
	Mazoposiciones.push(new PosicionesCartas("U",0,posX,posY));
	
	
	var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)  +  AnchoCarta )    /2)+      (4 *(AnchoCarta+ vSeparacion))+AnchoCarta-(AnchoFoto/2);
	var posY=(AnchoCarta*2);
	Mazoposiciones.push(new PosicionesCartas("U_0",0,posX,posY));
	

	
	
	if (vRonda<=4)	
	{	
		var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (4 *(AnchoCarta+ vSeparacion));
	}
	else
	{
		var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (4 *(AnchoCarta+ vSeparacion))- ( (6-NumeroCartasMano) *(AnchoCarta+ vSeparacion));
	}
	var posY=AnchoCarta;
	Mazoposiciones.push(new PosicionesCartas("U",1,posX,posY));
	
	if (vRonda<=4)	
	{
		var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*NumeroCartasMano)) - (vSeparacion*5)   +  AnchoCarta)/2)+ (3 *(AnchoCarta+ vSeparacion));
	}
	else
	{
		var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (3 *(AnchoCarta+ vSeparacion))- ( (6-NumeroCartasMano) *(AnchoCarta+ vSeparacion));
	}
	var posY=AnchoCarta;
	Mazoposiciones.push(new PosicionesCartas("U",2,posX,posY));


	
	/*var posX=AnchoCarta;
	var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano))   )/2)+ (0 *((AnchoCarta/2)+ vSeparacion));
	Mazoposiciones.push(new PosicionesCartas("L",0,posX,posY));*/
	var posX=AnchoCarta;
	if (vRonda<=14)
	{	
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  0   *((AnchoCarta/2)+ vSeparacion))*Signo);
	}
	else
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  0  *((AnchoCarta/2)+ vSeparacion))*Signo) +  ((  (0+NumeroCartasMano)  *((AnchoCarta/2)+ vSeparacion))*Signo)    ;
	}
	Mazoposiciones.push(new PosicionesCartas("L",0,posX,posY))
	

	

	/*var posX=AnchoCarta;
	var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano))   )/2)+ (1*((AnchoCarta/2)+ vSeparacion));*/
	var posX=AnchoCarta;
	if (vRonda<=14)
	{	
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  1   *((AnchoCarta/2)+ vSeparacion))*Signo);
	}
	else
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  1  *((AnchoCarta/2)+ vSeparacion))*Signo) +  ((  (0+NumeroCartasMano)  *((AnchoCarta/2)+ vSeparacion))*Signo)    ;
	}
	Mazoposiciones.push(new PosicionesCartas("L",1,posX,posY));
	

	/*var posX=AnchoCarta;
	var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano))  )/2)+ (2*((AnchoCarta/2)+ vSeparacion));
	Mazoposiciones.push(new PosicionesCartas("L",2,posX,posY));*/
	var posX=AnchoCarta;
	if (vRonda<=14)
	{	
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  2   *((AnchoCarta/2)+ vSeparacion))*Signo);
	}
	else
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  2  *((AnchoCarta/2)+ vSeparacion))*Signo) +  ((  (0+NumeroCartasMano)  *((AnchoCarta/2)+ vSeparacion))*Signo)    ;
	}
	Mazoposiciones.push(new PosicionesCartas("L",2,posX,posY));
	
	var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  2   *((AnchoCarta/2)+ vSeparacion))*Signo);
	Mazoposiciones.push(new PosicionesCartas("L_C",0,posX,posY));
	
	
	
vFormulaAjuste=( ((vSeparacion)*(6-NumeroCartasMano)))
//vFormulaAjuste=-(AnchoCarta+vSeparacion)

	var posX=game_objeto.world.width-AnchoCarta;
	if (vRonda<=4)
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  5  *((AnchoCarta/2)+ vSeparacion))*Signo);
	}
	else
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  5  *((AnchoCarta/2)+ vSeparacion))*Signo) -  ((  (6-NumeroCartasMano)  *((AnchoCarta/2)+ vSeparacion))*Signo) -vFormulaAjuste    ;
	}
	
	Mazoposiciones.push(new PosicionesCartas("R",0,posX,posY));
	

	var posX=game_objeto.world.width-AnchoCarta;
	
	if (vRonda<=4)
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  4   *((AnchoCarta/2)+ vSeparacion))*Signo);
	}
	else
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  4  *((AnchoCarta/2)+ vSeparacion))*Signo) -  ((  (6-NumeroCartasMano)  *((AnchoCarta/2)+ vSeparacion))*Signo)  -vFormulaAjuste ;
	}
	Mazoposiciones.push(new PosicionesCartas("R",1,posX,posY));
	


	var posX=game_objeto.world.width-AnchoCarta;
	if (vRonda<=4)
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)))/2)+ ((  3    *((AnchoCarta/2)+ vSeparacion))*Signo);
	}
	else
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  3  *((AnchoCarta/2)+ vSeparacion))*Signo) -  ((  (6-NumeroCartasMano)  *((AnchoCarta/2)+ vSeparacion))*Signo) -vFormulaAjuste ;
	}
	Mazoposiciones.push(new PosicionesCartas("R",2,posX,posY));
	
	var posX=game_objeto.world.width-AnchoCarta;
	var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)))/2)+ ((  3    *((AnchoCarta/2)+ vSeparacion))*Signo);
	Mazoposiciones.push(new PosicionesCartas("R_C",0,posX,posY));

	
	if (vRonda<=4)
	{
		var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCarta  )    /2)+      (2 *(AnchoCarta+ vSeparacion));
	}
	else
	{
		var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (2 *(AnchoCarta+ vSeparacion))- ( (6-NumeroCartasMano) *(AnchoCarta+ vSeparacion));
	}
	var posY=AnchoCarta;
	Mazoposiciones.push(new PosicionesCartas("U",3,posX,posY));
	
	if (vRonda<=4)	
	{
		var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (1 *(AnchoCarta+ vSeparacion));
	}
	else
	{
		var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (1 *(AnchoCarta+ vSeparacion))- ( (6-NumeroCartasMano) *(AnchoCarta+ vSeparacion));
	}
	
	var posY=AnchoCarta;
	Mazoposiciones.push(new PosicionesCartas("U",4,posX,posY));

	if (vRonda<=4)	
	{
		var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*NumeroCartasMano)) - (vSeparacion*5)   +  AnchoCarta)/2)+ (0 *(AnchoCarta+ vSeparacion));
	}
	else
	{
		var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*NumeroCartasMano)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (0 *(AnchoCarta+ vSeparacion))- ( (6-NumeroCartasMano) *(AnchoCarta+ vSeparacion));
	}
	var posY=AnchoCarta;
	Mazoposiciones.push(new PosicionesCartas("U",5,posX,posY));
	
	//Robada
	var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)   +  AnchoCarta)/2)+ (0 *(AnchoCarta+ vSeparacion));
	var posY=AnchoCarta;
	Mazoposiciones.push(new PosicionesCartas("U",99,posX,posY));

	var posX=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*NumeroCartasMano)) - (vSeparacion*5)   +  AnchoCarta)/2)+ (0 *(AnchoCarta+ vSeparacion));
	var posY=AnchoCarta;	
	Mazoposiciones.push(new PosicionesCartas("U_C",0,posX,posY));	
	
	/*var posX=AnchoCarta;
	var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano))   )/2)+ (3 *((AnchoCarta/2)+ vSeparacion));*/
	var posX=AnchoCarta;
	if (vRonda<=14)
	{	
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  3   *((AnchoCarta/2)+ vSeparacion))*Signo);
	}
	else
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  3  *((AnchoCarta/2)+ vSeparacion))*Signo) +  ((  (0+NumeroCartasMano)  *((AnchoCarta/2)+ vSeparacion))*Signo)    ;
	}
	Mazoposiciones.push(new PosicionesCartas("L",3,posX,posY));
	

	/*var posX=AnchoCarta;
	var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano))  )/2)+ (4 *((AnchoCarta/2)+ vSeparacion));*/
	var posX=AnchoCarta;
	if (vRonda<=14)
	{	
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  4   *((AnchoCarta/2)+ vSeparacion))*Signo);
	}
	else
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  4  *((AnchoCarta/2)+ vSeparacion))*Signo) +  ((  (0+NumeroCartasMano)  *((AnchoCarta/2)+ vSeparacion))*Signo)    ;
	}
	Mazoposiciones.push(new PosicionesCartas("L",4,posX,posY));
	

	/*var posX=AnchoCarta;
	var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano))    )/2)+ (5 *((AnchoCarta/2)+ vSeparacion));*/
	var posX=AnchoCarta;
	if (vRonda<=14)
	{	
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  5   *((AnchoCarta/2)+ vSeparacion))*Signo);
	}
	else
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  5  *((AnchoCarta/2)+ vSeparacion))*Signo) +  ((  (0+NumeroCartasMano)  *((AnchoCarta/2)+ vSeparacion))*Signo)    ;
	}
	Mazoposiciones.push(new PosicionesCartas("L",5,posX,posY));
	
	
	
	var posX=vSeparacion+5;
	var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*6))    )/2)+ (5 *((AnchoCarta/2)+ vSeparacion))+(AnchoCarta/2)+(vSeparacion);
	Mazoposiciones.push(new PosicionesCartas("L_0",0,posX,posY));
	
	//Robada
	var posX=AnchoCarta;
	var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*6))    )/2)+ (5 *((AnchoCarta/2)+ vSeparacion));
	Mazoposiciones.push(new PosicionesCartas("L",99,posX,posY));
	

	

	var posX=game_objeto.world.width-AnchoCarta;
	if (vRonda<=4)
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  2    *((AnchoCarta/2)+ vSeparacion))*Signo);
	}
	else
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  2  *((AnchoCarta/2)+ vSeparacion))*Signo) -  ((  (6-NumeroCartasMano)  *((AnchoCarta/2)+ vSeparacion))*Signo) -vFormulaAjuste    ;
	}
	
	Mazoposiciones.push(new PosicionesCartas("R",3,posX,posY));
	
	
	
	var posX=game_objeto.world.width-AnchoCarta;
	if (vRonda<=4)
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  1    *((AnchoCarta/2)+ vSeparacion))*Signo);
	}
	else
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  1  *((AnchoCarta/2)+ vSeparacion))*Signo) -  ((  (6-NumeroCartasMano)  *((AnchoCarta/2)+ vSeparacion))*Signo)   -vFormulaAjuste  ;
	}
	Mazoposiciones.push(new PosicionesCartas("R",4,posX,posY));
	


	var posX=game_objeto.world.width-AnchoCarta;
	if (vRonda<=4)
	{	
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  0   *((AnchoCarta/2)+ vSeparacion))*Signo);
	}
	else
	{
		var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  0  *((AnchoCarta/2)+ vSeparacion))*Signo) -  ((  (6-NumeroCartasMano)  *((AnchoCarta/2)+ vSeparacion))*Signo) -vFormulaAjuste    ;
	}
	Mazoposiciones.push(new PosicionesCartas("R",5,posX,posY));
	

	var posX=game_objeto.world.width-AnchoCarta;
	var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*NumeroCartasMano)) )/2)+ ((  0   *((AnchoCarta/2)+ vSeparacion))*Signo);
	Mazoposiciones.push(new PosicionesCartas("R_5",0,posX,posY));
	
	
	var posX=game_objeto.world.width-(AnchoCarta+vSeparacion)*2;
	var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*6)) )/2)- ((  1   *((AnchoCarta/2)+ vSeparacion))*Signo);
	Mazoposiciones.push(new PosicionesCartas("R_0",0,posX,posY));
	
	
	
	//Robada
	var posX=game_objeto.world.width-AnchoCarta;
	var posY=(( game_objeto.world.height-vHorizontalDerechaPorqueSi-(((AnchoCarta/2)*6)) )/2)+ (0 *((AnchoCarta/2)+ vSeparacion));
	Mazoposiciones.push(new PosicionesCartas("R",99,posX,posY));
	

//////////////////////////////////////////////////////////////////

	
	PosicionCartasCentro();
}


PosicionCartasCentro=function()
{
	posX_D=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (4 *((AnchoCarta)));
	posY_D=CentroIrreal+( (AnchoCarta))-(AnchoCarta/5)-25;
	posAngle_D=0;
		
	posX_U=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (4 *(AnchoCarta));
	posY_U=CentroIrreal-( (AnchoCarta/2))-15;
	posAngle_U=0;

	posX_L=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (4 *(AnchoCarta))-(AnchoCarta)+(AnchoCarta/5);
	posY_L=CentroIrreal-10;//+( 1*(AnchoCarta+ vSeparacion));
	posAngle_L=-90;
	//sprite.angle

	posX_R=(( game_objeto.world.width-vHorizontalPorqueSi-((AnchoCarta*6)) - (vSeparacion*5)  +  AnchoCarta )/2)+ (5 *((AnchoCarta)))-(AnchoCarta/5);
	posY_R=CentroIrreal-10;//+( 1*(AnchoCarta+ vSeparacion));
	posAngle_R=+90;
}
