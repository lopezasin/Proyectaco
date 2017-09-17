Repartir_Desde_Abajo=function(){
	Repartir_Desde_Abajo_D1();
};

Repartir_Desde_Abajo_U1=function(){
	MazoU.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,0,null));
	//GrupoU.add(Mazo[Mazo.length-1].cartilla);
	ReproducirSonido('_Reparto');

	try
	{
		var posX=devuelveX("U",0);
		var posY=devuelveY("U",0);
		
		//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
		tw1 = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
			tw1.to( {x:posX
			,y:posY}, vVelocidadCartas, EfectoTween2);
			tw1.onComplete.add( function(){ GrupoU.add(MazoU[MazoU.length-1].cartilla); Repartir_Desde_Abajo_U2(); } );
			tw1.start();
			Mazo.pop();
	}
	catch(e)
	{
		//console.log("Error raro "+e)
	}

};

Repartir_Desde_Abajo_U2=function(){
	MazoU.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,1,null));
	//GrupoU.add(Mazo[Mazo.length-1].cartilla);
	ReproducirSonido('_Reparto');
	
	var posX=devuelveX("U",1);
	var posY=devuelveY("U",1);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	tw2 = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		tw2.to( {x:posX
		,y:posY}, vVelocidadCartas, EfectoTween2);
		tw2.onComplete.add(function(){ GrupoU.add(MazoU[MazoU.length-1].cartilla); Repartir_Desde_Abajo_U3(); } );
		tw2.start();
		Mazo.pop();
};

Repartir_Desde_Abajo_U3=function(){
	MazoU.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,2,null));
	//GrupoU.add(Mazo[Mazo.length-1].cartilla);
	ReproducirSonido('_Reparto');
	
	

	
	var posX=devuelveX("U",2);
	var posY=devuelveY("U",2);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	tw3 = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		tw3.to( {x:posX
		,y:posY}, vVelocidadCartas, EfectoTween2);		
		tw3.onComplete.add(function(){ GrupoU.add(MazoU[MazoU.length-1].cartilla); Repartir_Desde_Abajo_L1(); } );
		tw3.start();
		Mazo.pop();
};



Repartir_Desde_Abajo_L1=function(){
	MazoL.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,0,null));
	//GrupoL.add(Mazo[Mazo.length-1].cartilla);
	ReproducirSonido('_Reparto');
	
	var posX=devuelveX("L",0);
	var posY=devuelveY("L",0);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	tw4 = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		tw4.to( {
		x:posX,
		y:posY,
		angle : Mazo[Mazo.length-1].cartilla.angle + 90
		}
		, vVelocidadCartas, EfectoTween2);
		tw4.onComplete.add( function(){ GrupoL.add(MazoL[MazoL.length-1].cartilla); Repartir_Desde_Abajo_L2(); } );
		tw4.start();
		Mazo.pop();
		
};


Repartir_Desde_Abajo_L2=function(){
	MazoL.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,1,null));
	//GrupoL.add(Mazo[Mazo.length-1].cartilla);
	ReproducirSonido('_Reparto');
	
	var posX=devuelveX("L",1);
	var posY=devuelveY("L",1);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	twEsp7 = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		twEsp7.to( {
		x:posX,
		y:posY,
		angle : Mazo[Mazo.length-1].cartilla.angle + 90
		}
		, vVelocidadCartas, EfectoTween2);
		twEsp7.onComplete.add(function(){ GrupoL.add(MazoL[MazoL.length-1].cartilla); Repartir_Desde_Abajo_L3(); } );
		twEsp7.start();
		Mazo.pop();
		
};


Repartir_Desde_Abajo_L3=function(){
	MazoL.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,2,null));
	//GrupoL.add(Mazo[Mazo.length-1].cartilla);
	ReproducirSonido('_Reparto');
	
	
	var posX=devuelveX("L",2);
	var posY=devuelveY("L",2);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	twReu = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		twReu.to( {
		x:posX,
		y:posY,
		angle : Mazo[Mazo.length-1].cartilla.angle + 90
		}
		, vVelocidadCartas, EfectoTween2);
		twReu.onComplete.add( function(){ GrupoL.add(MazoL[MazoL.length-1].cartilla); Repartir_Desde_Abajo_D4(); } );
		twReu.start();
		Mazo.pop();
		
		
};



Repartir_Desde_Abajo_D1=function(){
	MazoD.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,0,null));
	//GrupoD.add(Mazo[Mazo.length-1].cartilla);
	MostrarAnverso(Mazo[Mazo.length-1].cartilla);
	
	
	try
	{
	ReproducirSonido('_Reparto');
	
	if (SonVueltas==true)
	{
		TextMarcador.visible=true;
		TextTituloMarcador.visible=true;
		ReproducirSonido('_Vueltas');		
	}
	else
	{
		//alert("uno");
		ReproducirSonido('_Idas');		
	}
	//alert("dos");
	var posX=devuelveX("D",0);
	//alert("tres");
	var posY=devuelveY("D",0);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	twRec1 = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		twRec1.to( {x:posX
		,y:posY}, vVelocidadCartas, EfectoTween2);
		
		twRec1.onComplete.add(function(){ 
		//alert("seis");	
		GrupoD.add(MazoD[MazoD.length-1].cartilla); 
		//alert("siete");	
		Repartir_Desde_Abajo_D2(); 
		} );
	
	//twRec1=game_objeto.add.tween(Mazo[Mazo.length-1].cartilla.scale);
		game_objeto.add.tween(Mazo[Mazo.length-1].cartilla.scale).to( {x:vEscaladoCarta,y:vEscaladoCarta}, vVelocidadCartas, EfectoTween2,true);
	//alert("cuatro");
		twRec1.start();
	//alert("cinco");	
		
		
		Mazo.pop();
		//alert("cincobis");
	}
	catch(e)
	{
		//console.log(e);
		//window.location.reload();
	}

};

Repartir_Desde_Abajo_D2=function(){
	//alert("ocho");	
	MazoD.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,1,null));
	ReproducirSonido('_Reparto');
	//GrupoD.add(Mazo[Mazo.length-1].cartilla);
	MostrarAnverso(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("D",1);
	var posY=devuelveY("D",1);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	twRec2 = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		twRec2.to( {x:posX
		,y:posY}, vVelocidadCartas, EfectoTween2);
		twRec2.onComplete.add(function(){ GrupoD.add(MazoD[MazoD.length-1].cartilla); Repartir_Desde_Abajo_D3(); } );
		twRec2.start();
		
		game_objeto.add.tween(Mazo[Mazo.length-1].cartilla.scale).to( {x:vEscaladoCarta,y:vEscaladoCarta}, vVelocidadCartas, EfectoTween2,true);
		
		Mazo.pop();
};

Repartir_Desde_Abajo_D3=function(){
	MazoD.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,2,null));
	ReproducirSonido('_Reparto');
	//GrupoD.add(Mazo[Mazo.length-1].cartilla);
	MostrarAnverso(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("D",2);
	var posY=devuelveY("D",2);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	twRec3 = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		twRec3.to( {x:posX
		,y:posY}, vVelocidadCartas, EfectoTween2);		
		twRec3.onComplete.add(function(){ GrupoD.add(MazoD[MazoD.length-1].cartilla); Repartir_Desde_Abajo_R1(); } );
		game_objeto.add.tween(Mazo[Mazo.length-1].cartilla.scale).to( {x:vEscaladoCarta,y:vEscaladoCarta}, vVelocidadCartas, EfectoTween2,true);
		
		twRec3.start();
		Mazo.pop();
};


Repartir_Desde_Abajo_R1=function(){
	MazoR.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,0,null));
	ReproducirSonido('_Reparto');
	//GrupoR.add(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("R",0);
	var posY=devuelveY("R",0);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {
		x:posX,
		y:posY,
		angle : Mazo[Mazo.length-1].cartilla.angle + 270
		}
		, vVelocidadCartas, EfectoTween2);
		s.onComplete.add(function(){ GrupoR.add(MazoR[MazoR.length-1].cartilla); Repartir_Desde_Abajo_R2(); } );
		s.start();
		Mazo.pop();
};


Repartir_Desde_Abajo_R2=function(){
	MazoR.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,1,null));
	ReproducirSonido('_Reparto');
	//GrupoR.add(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("R",1);
	var posY=devuelveY("R",1);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {
		x:posX,
		y:posY,
		angle : Mazo[Mazo.length-1].cartilla.angle + 270
		}
		, vVelocidadCartas, EfectoTween2);
		s.onComplete.add(function(){ GrupoR.add(MazoR[MazoR.length-1].cartilla); Repartir_Desde_Abajo_R3(); } );
		s.start();
		Mazo.pop();
};


Repartir_Desde_Abajo_R3=function(){
	MazoR.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,2,null));
	ReproducirSonido('_Reparto');
	//GrupoR.add(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("R",2);
	var posY=devuelveY("R",2);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {
		x:posX,
		y:posY,
		angle : Mazo[Mazo.length-1].cartilla.angle + 270
		}
		, vVelocidadCartas, EfectoTween2);
		s.onComplete.add(function(){ GrupoR.add(MazoR[MazoR.length-1].cartilla); Repartir_Desde_Abajo_U1(); } );
		s.start();
		Mazo.pop();
};

// SEGUNDA PASADA

Repartir_Desde_Abajo_U4=function(){
	MazoU.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,3,null));
	ReproducirSonido('_Reparto');
	//GrupoU.add(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("U",3);
	var posY=devuelveY("U",3);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {x:posX
		,y:posY}, vVelocidadCartas, EfectoTween2);
		s.onComplete.add(function(){ GrupoU.add(MazoU[MazoU.length-1].cartilla); Repartir_Desde_Abajo_U5(); } );
		s.start();
		Mazo.pop();
		

};

Repartir_Desde_Abajo_U5=function(){
	MazoU.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,4,null));
	ReproducirSonido('_Reparto');
	//GrupoU.add(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("U",4);
	var posY=devuelveY("U",4);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {x:posX
		,y:posY}, vVelocidadCartas, EfectoTween2);
		s.onComplete.add(function(){ GrupoU.add(MazoU[MazoU.length-1].cartilla); Repartir_Desde_Abajo_U6(); } );
		s.start();
		Mazo.pop();
};

Repartir_Desde_Abajo_U6=function(){
	MazoU.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,5,null));
	ReproducirSonido('_Reparto');
	//GrupoU.add(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("U",5);
	var posY=devuelveY("U",5);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {x:posX
		,y:posY}, vVelocidadCartas, EfectoTween2);		
		s.onComplete.add(function(){ GrupoU.add(MazoU[MazoU.length-1].cartilla); Repartir_Desde_Abajo_L4(); } );
		s.start();
		Mazo.pop();
};



Repartir_Desde_Abajo_L4=function(){
	MazoL.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,3,null));
	ReproducirSonido('_Reparto');
	//GrupoL.add(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("L",3);
	var posY=devuelveY("L",3);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {
		x:posX,
		y:posY,
		angle : Mazo[Mazo.length-1].cartilla.angle + 90
		}
		, vVelocidadCartas, EfectoTween2);
		s.onComplete.add(function(){ GrupoL.add(MazoL[MazoL.length-1].cartilla); Repartir_Desde_Abajo_L5(); } );
		s.start();
		Mazo.pop();
};


Repartir_Desde_Abajo_L5=function(){
	MazoL.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,4,null));
	ReproducirSonido('_Reparto');
	//GrupoL.add(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("L",4);
	var posY=devuelveY("L",4);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {
		x:posX,
		y:posY,
		angle : Mazo[Mazo.length-1].cartilla.angle + 90
		}
		, vVelocidadCartas, EfectoTween2);
		s.onComplete.add(function(){ GrupoL.add(MazoL[MazoL.length-1].cartilla); Repartir_Desde_Abajo_L6(); } );
		s.start();
		Mazo.pop();
};


Repartir_Desde_Abajo_L6=function(){
	MazoL.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,5,null));
	ReproducirSonido('_Reparto');
	//GrupoL.add(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("L",5);
	var posY=devuelveY("L",5);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {
		x:posX,
		y:posY,
		angle : Mazo[Mazo.length-1].cartilla.angle + 90
		}
		, vVelocidadCartas, EfectoTween2);
		//s.onComplete.add(Repartir_Desde_Abajo_D4,this)
		s.onComplete.add(function(){ GrupoL.add(MazoL[MazoL.length-1].cartilla); SacaTriunfo(); } );
		s.start();
		Mazo.pop();
		// PreparaCaracteristicasMano();
};



Repartir_Desde_Abajo_D4=function(){
	MazoD.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,3,null));
	ReproducirSonido('_Reparto');
	//GrupoD.add(Mazo[Mazo.length-1].cartilla);
	MostrarAnverso(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("D",3);
	var posY=devuelveY("D",3);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {x:posX
		,y:posY}, vVelocidadCartas, EfectoTween2);
		s.onComplete.add(function(){ GrupoD.add(MazoD[MazoD.length-1].cartilla); Repartir_Desde_Abajo_D5(); } );
		s.start();
		game_objeto.add.tween(Mazo[Mazo.length-1].cartilla.scale).to( {x:vEscaladoCarta,y:vEscaladoCarta}, vVelocidadCartas, EfectoTween2,true);
		Mazo.pop();
		

};

Repartir_Desde_Abajo_D5=function(){
	MazoD.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,4,null));
	ReproducirSonido('_Reparto');
	//GrupoD.add(Mazo[Mazo.length-1].cartilla);
	MostrarAnverso(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("D",4);
	var posY=devuelveY("D",4);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {x:posX
		,y:posY}, vVelocidadCartas, EfectoTween2);
		s.onComplete.add(function(){ GrupoD.add(MazoD[MazoD.length-1].cartilla); Repartir_Desde_Abajo_D6(); } );
		s.start();
		game_objeto.add.tween(Mazo[Mazo.length-1].cartilla.scale).to( {x:vEscaladoCarta,y:vEscaladoCarta}, vVelocidadCartas, EfectoTween2,true);
		Mazo.pop();
};

Repartir_Desde_Abajo_D6=function(){
	MazoD.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,5,null));
	ReproducirSonido('_Reparto');
	//GrupoD.add(Mazo[Mazo.length-1].cartilla);
	MostrarAnverso(Mazo[Mazo.length-1].cartilla);
	var posX=devuelveX("D",5);
	var posY=devuelveY("D",5);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {x:posX
		,y:posY}, vVelocidadCartas, EfectoTween2);		
		s.onComplete.add(function(){ GrupoD.add(MazoD[MazoD.length-1].cartilla); Repartir_Desde_Abajo_R4(); } );
		s.start();
		game_objeto.add.tween(Mazo[Mazo.length-1].cartilla.scale).to( {x:vEscaladoCarta,y:vEscaladoCarta}, vVelocidadCartas, EfectoTween2,true);
		Mazo.pop();
};


Repartir_Desde_Abajo_R4=function(){
	MazoR.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,3,null));
	ReproducirSonido('_Reparto');
	//GrupoR.add(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("R",3);
	var posY=devuelveY("R",3);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {
		x:posX,
		y:posY,
		angle : Mazo[Mazo.length-1].cartilla.angle + 270
		}
		, vVelocidadCartas, EfectoTween2);
		s.onComplete.add(function(){ GrupoR.add(MazoR[MazoR.length-1].cartilla); Repartir_Desde_Abajo_R5(); } );
		s.start();
		Mazo.pop();
};


Repartir_Desde_Abajo_R5=function(){
	MazoR.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,4,null));
	ReproducirSonido('_Reparto');
	//GrupoR.add(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("R",4);
	var posY=devuelveY("R",4);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {
		x:posX,
		y:posY,
		angle : Mazo[Mazo.length-1].cartilla.angle + 270
		}
		, vVelocidadCartas, EfectoTween2);
		s.onComplete.add(function(){ GrupoR.add(MazoR[MazoR.length-1].cartilla); Repartir_Desde_Abajo_R6(); } );
		s.start();
		Mazo.pop();
};


Repartir_Desde_Abajo_R6=function(){
	MazoR.push(new Carta(Mazo[Mazo.length-1].palo,Mazo[Mazo.length-1].idCarta,Mazo[Mazo.length-1].valor,Mazo[Mazo.length-1].cartilla,5,null));
	ReproducirSonido('_Reparto');
	//GrupoR.add(Mazo[Mazo.length-1].cartilla);
	
	var posX=devuelveX("R",5);
	var posY=devuelveY("R",5);
	
	//GrupoMazo.add(Mazo[Mazo.length-1].cartilla);
	var s = game_objeto.add.tween(Mazo[Mazo.length-1].cartilla);
		s.to( {
		x:posX,
		y:posY,
		angle : Mazo[Mazo.length-1].cartilla.angle + 270
		}
		, vVelocidadCartas, EfectoTween2);
		s.onComplete.add(function(){ GrupoR.add(MazoR[MazoR.length-1].cartilla); Repartir_Desde_Abajo_U4(); } );
		s.start();
		Mazo.pop();
};

