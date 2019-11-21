'use strict';

var ObjetoCante=function(SGCSHJVERI,jugador)
{
	this.SGCSHJVERI=SGCSHJVERI
	this.jugador=jugador
}

var ObjetoFirmes=function(numerofirmes,puntuaciones)
{
	this.numerofirmes=numerofirmes
	this.puntuaciones=puntuaciones
}



var ObjetoConfiguraSituacion=function(DCBSNHIVQB,MarcadorRevisarNuestro,VVSFGSGGSW, OrosMano, CopasMano, EspadasMano, BastosMano,
	OrosGlobal, CopasGlobal, EspadasGlobal, BastosGlobal, BMITYYFCGC,TriunfosEnMesa)
{
	this.DCBSNHIVQB=DCBSNHIVQB
	this.MarcadorRevisarNuestro=MarcadorRevisarNuestro
	this.VVSFGSGGSW=VVSFGSGGSW
	this.OrosMano=OrosMano
	this.CopasMano=CopasMano
	this.EspadasMano=EspadasMano
	this.BastosMano=BastosMano
	this.OrosGlobal=OrosGlobal
	this.CopasGlobal=CopasGlobal
	this.EspadasGlobal=EspadasGlobal
	this.BastosGlobal=BastosGlobal
	this.BMITYYFCGC=BMITYYFCGC
	this.TriunfosEnMesa=TriunfosEnMesa
}

var ObjetoCartaPosible=function(SGCSHJVERI,VVRCMEUNOJ)
{
	this.SGCSHJVERI=SGCSHJVERI
	this.VVRCMEUNOJ=VVRCMEUNOJ
}
	
var ObjetoCambiaCarta=function(VVRCMEUNOJ,RRWWKUVRLD)
{
	this.VVRCMEUNOJ=VVRCMEUNOJ
	this.RRWWKUVRLD=RRWWKUVRLD
}

function DeQuienVa()
{
	var QJXRLWRPYD;
	var ESHLDBNEQI;
	var TTJFVWDTMG=0;
	
	var i;
	
	for (i=0;i<=VDKOVQXHON.length-1;i++)
	{
		if (i==0){
			QJXRLWRPYD=VDKOVQXHON[i].VVRCMEUNOJ;
			ESHLDBNEQI=VDKOVQXHON[i].SGCSHJVERI;
			TTJFVWDTMG=VDKOVQXHON[i].jugador;
		}
	
		if ( (VDKOVQXHON[i].VVRCMEUNOJ>QJXRLWRPYD && VDKOVQXHON[i].SGCSHJVERI==ESHLDBNEQI)
			|| (  VDKOVQXHON[i].SGCSHJVERI==TGTQPBEQFR && ESHLDBNEQI!=TGTQPBEQFR )
		)
		{

		QJXRLWRPYD=VDKOVQXHON[i].VVRCMEUNOJ;
		ESHLDBNEQI=VDKOVQXHON[i].SGCSHJVERI;
		TTJFVWDTMG=VDKOVQXHON[i].jugador;
		
		}
		
		

	}

		return TTJFVWDTMG;
}
function JugarConCompanero(MazoTrabajo,UHTPGPRUJA,SGEGEGEGEW)
{
	var NJGFWACAPY=false;
	
	NJGFWACAPY=PuntosMinimosCasiGanadores(MazoTrabajo,UHTPGPRUJA,false, SGEGEGEGEW)
	if (NJGFWACAPY!=false)
	{
		console.log(TraducePorID(NJGFWACAPY)+ " v 14.1.1.1")	
	}								
	else								
	{
		NJGFWACAPY=PuntosMinimosCasiGanadores(MazoTrabajo,UHTPGPRUJA,true, SGEGEGEGEW)
		if (NJGFWACAPY!=false)
		{
			console.log(TraducePorID(NJGFWACAPY)+ " v 14.1.1.2")	
		}
		else
		{
			NJGFWACAPY=MatarMejorTriunfo(MazoTrabajo, UHTPGPRUJA,0,12,true,true, SGEGEGEGEW)
			if (NJGFWACAPY!=false)
			{
				console.log(TraducePorID(NJGFWACAPY)+ " v 14.1.1.3")	
			}										
		}
	}
	
	return NJGFWACAPY;
}

function PuntosMinimosCasiGanadores(MazoTrabajo,UHTPGPRUJA,ConTriunfo, SGEGEGEGEW)
{
	var INIDNQUMXV=99
	var Key=false;
	var i;
	var KeyTemporal=false
	
	if (ConTriunfo==true)
	{
		
		for (i=0;i<=MazoTrabajo.length-1;i++) 
		{
			if (			
				MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.MarcadorRevisarNuestro+SGEGEGEGEW.DCBSNHIVQB+BAVVCAHQCC(MazoTrabajo)+11>=JLVDFTPUNI 
				&& MazoTrabajo[i].VVRCMEUNOJ<INIDNQUMXV &&  MazoTrabajo[i].VVRCMEUNOJ==TGTQPBEQFR)
			{	
				INIDNQUMXV= MazoTrabajo[i].VVRCMEUNOJ;
				KeyTemporal=UIBEMREGDL(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)
			}
		}
		
		if (INIDNQUMXV!=99)
		{
			Key=KeyTemporal
		}
	}
	else
	{
		for (i=0;i<=MazoTrabajo.length-1;i++) 
		{
			if (			
				MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.MarcadorRevisarNuestro+SGEGEGEGEW.DCBSNHIVQB+BAVVCAHQCC(MazoTrabajo)+11>=JLVDFTPUNI 
				&& MazoTrabajo[i].VVRCMEUNOJ<INIDNQUMXV &&  MazoTrabajo[i].VVRCMEUNOJ!=TGTQPBEQFR)
			{	
				INIDNQUMXV=MazoTrabajo[i].VVRCMEUNOJ;
				KeyTemporal=UIBEMREGDL(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)
			}
		}
		
		if (INIDNQUMXV!=99)
		{
			Key=KeyTemporal
		}
		
	}
	

	return Key;
	
}


function BHQBDHNAII(MazoTrabajo, UHTPGPRUJA, SGEGEGEGEW)
{
	var Key=false;
	var PuntosCante=BAVVCAHQCC(MazoTrabajo);
	var i;
	var ArrayCartaPosible=[]
	var PuntosApuesta=0;
	var ObjetoApuesta;
	var Tirar;
	
	//		var a=ValorFirmesRestantes(UHTPGPRUJA, MazoTrabajo, TGTQPBEQFR, 1)
	//console.log("PUNTOS "+a.numerofirmes+" "+a.puntuaciones);
	
	if (SGEGEGEGEW.BMITYYFCGC==4)
	{

	
		for (i=0;i<=MazoTrabajo.length-1;i++) //Ganar sin cantar
		{	
			if ( SGEGEGEGEW.MarcadorRevisarNuestro+MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.DCBSNHIVQB>=JLVDFTPUNI
				&& IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ
				
				)  )
			{
				ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));				
			}
		}
		
		if (ArrayCartaPosible.length==0)
		{
			var PuntosCante=BAVVCAHQCC(MazoTrabajo)
			for (i=0;i<=MazoTrabajo.length-1;i++) //Ganar cantando
			{	
			
				if ( SGEGEGEGEW.MarcadorRevisarNuestro+MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.DCBSNHIVQB+PuntosCante>=JLVDFTPUNI
					&& IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)  )
				{
					if (TengoCanteConEstaCarta(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)==false)
					{
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));				
					}
				}
			}		
		}
	}
	else
	{
		for (i=0;i<=MazoTrabajo.length-1;i++) //Ganar sin cantar
		{	
			
			ObjetoApuesta=ValorFirmesRestantes(UHTPGPRUJA, MazoTrabajo, TGTQPBEQFR, MazoTrabajo[i].VVRCMEUNOJ)
			PuntosApuesta=0;
			if (GuinotesVivosOtrasManos()>=3)
			{
				PuntosApuesta=ObjetoApuesta.puntuaciones+(ObjetoApuesta.numerofirmes*10) //Estimo con el resto de firmes cuantos OMDVKATFLQ hago
			}
			else
			{
				PuntosApuesta=ObjetoApuesta.puntuaciones+(ObjetoApuesta.numerofirmes*4)
			}
			
			
			if ( SGEGEGEGEW.MarcadorRevisarNuestro+MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.DCBSNHIVQB+PuntosApuesta>=JLVDFTPUNI
				&& EstaFirme(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ, MazoTrabajo) && MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR 
				&& IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)					
				)
			{
				console.log("posible 1")
				ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));				
			}
		}
		
		if (ArrayCartaPosible.length==0)
		{
			var PuntosCante=BAVVCAHQCC(MazoTrabajo)
			for (i=0;i<=MazoTrabajo.length-1;i++) //Ganar cantando
			{	

			ObjetoApuesta=ValorFirmesRestantes(UHTPGPRUJA, MazoTrabajo, TGTQPBEQFR, MazoTrabajo[i].VVRCMEUNOJ)
			PuntosApuesta=0;
			if (GuinotesVivosOtrasManos()>=3)
			{
				PuntosApuesta=ObjetoApuesta.puntuaciones+(ObjetoApuesta.numerofirmes*10) //Estimo con el resto de firmes cuantos OMDVKATFLQ hago
			}
			else
			{
				PuntosApuesta=ObjetoApuesta.puntuaciones+(ObjetoApuesta.numerofirmes*4)
			}
			
				if ( SGEGEGEGEW.MarcadorRevisarNuestro+MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.DCBSNHIVQB+PuntosCante+PuntosApuesta>=JLVDFTPUNI
					&& EstaFirme(UHTPGPRUJA, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ, MazoTrabajo) && MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR
					&& IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)					)
				{
					if (TengoCanteConEstaCarta(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)==false)
					{
						console.log("posible 2")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));				
					}
				}
			}		
		}
		
		
		for (i=0;i<=MazoTrabajo.length-1;i++) //Ganar sin cantar
		{	
		
			ObjetoApuesta=ValorFirmesRestantes(UHTPGPRUJA, MazoTrabajo, TGTQPBEQFR, MazoTrabajo[i].VVRCMEUNOJ)
			PuntosApuesta=0;
			if (GuinotesVivosOtrasManos()>=3)
			{
				PuntosApuesta=ObjetoApuesta.puntuaciones+(ObjetoApuesta.numerofirmes*10) //Estimo con el resto de firmes cuantos OMDVKATFLQ hago
			}
			else
			{
				PuntosApuesta=ObjetoApuesta.puntuaciones+(ObjetoApuesta.numerofirmes*4)
			}
			
			if ( SGEGEGEGEW.MarcadorRevisarNuestro+MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.DCBSNHIVQB+PuntosApuesta>=JLVDFTPUNI
				  && MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR
				  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)				  )
			{
				Tirar=true;
				if (   MazoTrabajo[i].VVRCMEUNOJ==11 )
				{
					console.log("Ojitoo")
					if (ImposibleTabazoDeTriunfo(UHTPGPRUJA, SGEGEGEGEW))
					{
						Tirar=true;
					}
					else
					{
						Tirar=false;
					}
				}
				if (Tirar==true)
				{
					console.log("posible 3")
					ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));				
				}
			}
		}
		
		if (ArrayCartaPosible.length==0)
		{
			var PuntosCante=BAVVCAHQCC(MazoTrabajo)
			for (i=0;i<=MazoTrabajo.length-1;i++) //Ganar cantando
			{	
			
				ObjetoApuesta=ValorFirmesRestantes(UHTPGPRUJA, MazoTrabajo, TGTQPBEQFR, MazoTrabajo[i].VVRCMEUNOJ)
				PuntosApuesta=0;
				if (GuinotesVivosOtrasManos()>=3)
				{
					PuntosApuesta=ObjetoApuesta.puntuaciones+(ObjetoApuesta.numerofirmes*10) //Estimo con el resto de firmes cuantos OMDVKATFLQ hago
				}
				else
				{
					PuntosApuesta=ObjetoApuesta.puntuaciones+(ObjetoApuesta.numerofirmes*4)
				}		
				
				if ( SGEGEGEGEW.MarcadorRevisarNuestro+MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.DCBSNHIVQB+PuntosCante+PuntosApuesta>=JLVDFTPUNI
					 && MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR
				     && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)					 )
				{
					if (TengoCanteConEstaCarta(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)==false)
					{
						Tirar=true;
						if (   MazoTrabajo[i].VVRCMEUNOJ==11 )
						{
							if (ImposibleTabazoDeTriunfo(UHTPGPRUJA, SGEGEGEGEW))
							{
								Tirar=true;
							}
							else
							{
								Tirar=false;
							}
						}
						
						if (Tirar==true)
						{
							console.log("posible 4")
							ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));				
						}
					}
				}
			}		
		}		
	}
	
	Key=DameLaCarta(ArrayCartaPosible,99) 
	return Key;
}

function SonTodasTriunfo(MazoTrabajo)
{
	var i;
	var QOWECQVXCM=true;
	var PrimerPalo=MazoTrabajo[0].SGCSHJVERI
	
	if (PrimerPalo!=TGTQPBEQFR)
	{
		QOWECQVXCM=false;
	}
	else
	{
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{
			if (PrimerPalo!=MazoTrabajo[i].SGCSHJVERI)
			{
				QOWECQVXCM=false;
				break;
			}
		}
	}
	
	return QOWECQVXCM;
}
function LanzaBlanca(MazoTrabajo, UHTPGPRUJA, SGEGEGEGEW)
{
	var i;
	var u;
	var QOWECQVXCM=false;
	var Key=false
	var PaloSuperar
	var ValorSuperar;
	var ValorDescarte
	
	var ArrayCartaPosible=[];
	
	
	if (EVAILWGGKX==true)
	{
		ValorDescarte=7;
	}
	else
	{
		ValorDescarte=8;
	}
	
	
	
	console.log("A DISFRUTAR :"+VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA))

	//Soy turno 3 y mi compi lanza firme, guiñote si puedo
	if (ArrayCartaPosible.length==0)
	{
		if (SGEGEGEGEW.BMITYYFCGC==3 && EstaFirme(UHTPGPRUJA, VDKOVQXHON[0].SGCSHJVERI, VDKOVQXHON[0].VVRCMEUNOJ, VDKOVQXHON ) && VDKOVQXHON[0].SGCSHJVERI==TGTQPBEQFR )
		{
			for (i=0;i<=MazoTrabajo.length-1;i++)
			{
				if ( MazoTrabajo[i].VVRCMEUNOJ>=11  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR
						
				)
				{
					console.log("Rellena desde 0")
					ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
				}
			}
		}
		
	}

	//AGTXFNIKQD 4, turno 4,  3 pelado no triunfo y la baza ya iba nuestra (cargo si lo tengo pelado)
	if (ArrayCartaPosible.length==0)
	{
		if (LUCRWXJMDR==4 && SGEGEGEGEW.BMITYYFCGC==4)
		{
			for (i=0;i<=MazoTrabajo.length-1;i++)
			{
				if ( MazoTrabajo[i].VVRCMEUNOJ==11 && VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) ==1  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR
						&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
						 ) 

				)
				{
					console.log("Rellena desde 1")
					ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
				}
			}
		}
		
	}
	
	if (ArrayCartaPosible.length==0)
	{
		if (LUCRWXJMDR==4 && SGEGEGEGEW.BMITYYFCGC==4)
		{
			for (i=0;i<=MazoTrabajo.length-1;i++)
			{
				if ( MazoTrabajo[i].VVRCMEUNOJ==12 && VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) ==1  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR
						&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
						 ) 

				)
				{
					console.log("Rellena desde 1")
					ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
				}
			}
		}
		
	}	

	//Tengo una carta pelada menor o igual a 7, la baza va nuestra o no mato al echarla. (una carta pelada que no mata) (si no hacen partida)
	if (ArrayCartaPosible.length==0)
	{
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if ( MazoTrabajo[i].VVRCMEUNOJ<=ValorDescarte && VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) ==1  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR
			
							&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
				|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==false )) //que no mate yo
			)
			{
					if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
					{
						console.log("Rellena desde 1.1")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
					}
			}
		}	
	}	
	
	//3 de triunfo, acompañado
	if (ArrayCartaPosible.length==0)
	{
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if ( MazoTrabajo[i].VVRCMEUNOJ==11 && VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) ==2  && MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR
			
							 && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==true  //que no mate yo
			)
			{
					if (!HayTabazoDeTriunfo(UHTPGPRUJA, SGEGEGEGEW) && HaSalido(TGTQPBEQFR,12) )
					{
						console.log("Rellena desde 1.15")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
					}
			}
		}	
	}	
	

	if (EVAILWGGKX==true)
	{
		if (ArrayCartaPosible.length==0)
		{
			for (i=0;i<=MazoTrabajo.length-1;i++)
			{			
				if ( MazoTrabajo[i].VVRCMEUNOJ<=7 && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR
				
								&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
					|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==false )) //que no mate yo
				)
				{
						if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
						{
							console.log("Rellena desde 1.2.1")
							ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
						}
				}
			}	
		}	


		if (ArrayCartaPosible.length==0)
		{
			for (i=0;i<=MazoTrabajo.length-1;i++)
			{			
				if ( MazoTrabajo[i].VVRCMEUNOJ<=7 && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR
				
								&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
					|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false   )) //que no mate yo
				)
				{
						if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
						{
							console.log("Rellena desde 1.2.2")
							ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
						}
				}
			}	
		}	


		if (ArrayCartaPosible.length==0)
		{
			for (i=0;i<=MazoTrabajo.length-1;i++)
			{			
				if ( MazoTrabajo[i].VVRCMEUNOJ<=7 && MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR
				
								&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
					|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==false )) //que no mate yo
				)
				{
						if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
						{
							console.log("Rellena desde 1.2.3")
							ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
						}
				}
			}	
		}	
				
		
		if (ArrayCartaPosible.length==0)
		{
			for (i=0;i<=MazoTrabajo.length-1;i++)
			{			
				if ( MazoTrabajo[i].VVRCMEUNOJ<=7 && MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR
				
								&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
					|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false   )) //que no mate yo
				)
				{
						if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
						{
							console.log("Rellena desde 1.2.4")
							ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
						}
				}
			}	
		}		
	}

///////////////////////////////////////
	//Tengo una carta pelada menor o igual a rey no triunfo, la baza va nuestra o no mato al echarla. (una carta pelada que no mata) (si no hacen partida)
	if (ArrayCartaPosible.length==0)
	{
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if ( MazoTrabajo[i].VVRCMEUNOJ<=10 && VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) ==1  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR
			
							&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
				|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==false )) //que no mate yo
			)
			{
					if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
					{
						console.log("Rellena desde 2")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
					}
			}
		}	
	}
		
		//AGTXFNIKQD 4, turno 4, 3 pelado no triunfo y la baza ya iba nuestra o no iba nuestra y no mato y tengo más de 3 triunfos (regalo guiñote si no hacen partida) 
	if (ArrayCartaPosible.length==0)
	{
		if (LUCRWXJMDR==4 && SGEGEGEGEW.BMITYYFCGC==4)
		{
			for (i=0;i<=MazoTrabajo.length-1;i++)
			{			
				if ( MazoTrabajo[i].VVRCMEUNOJ==11 && VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) ==1  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR && OQOQOCBSKK(MazoTrabajo)>=3
				
								&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
					|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==false )) //que no mate yo
				)
				{
						if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
						{
							console.log("Rellena desde 3")
							ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
						}
				}
			}	
		}
	}

 //Tengo 2 cartas de un mismo SGCSHJVERI. Echo menor a rey. Si es un cante, no lanzo. Tampoco si lanzar si hacen partida
	if (ArrayCartaPosible.length==0)
	{
		
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if ( MazoTrabajo[i].VVRCMEUNOJ<=10 && VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) ==2  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR
			
							&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
				|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==false )) //que no mate yo
				&& TengoCanteConEstaCarta(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)==false				
			)
			{
					if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
					{
						console.log("Rellena desde 4.0")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
					}
			}
		}	
	
	}

// Cartas donde haya más o igual a 3 del mismo  SGCSHJVERI, menor a rey y que no sea cante. Que no mate.  Tampoco si lanzar si hacen partida
	if (ArrayCartaPosible.length==0)
	{
		
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if ( MazoTrabajo[i].VVRCMEUNOJ<=10 && VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) >3  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR
			
							&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
				|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==false )) //que no mate yo
				&& TengoCanteConEstaCarta(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)==false				
			)
			{
					if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
					{
						console.log("Rellena desde 4")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
					}
			}
		}	
	
	}


	if (ArrayCartaPosible.length==0)
	{
		if (LUCRWXJMDR==4 && SGEGEGEGEW.BMITYYFCGC==4)
		{
			for (i=0;i<=MazoTrabajo.length-1;i++)
			{			
				if ( MazoTrabajo[i].VVRCMEUNOJ>=11  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR
				
								&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
					|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==true )) //que no mate yo
				)
				{
						console.log("Rellena desde 5")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
						
				}
			}	
		}
	}


    //Una carta no triunfo que no haga que ganen. Primero que no mate. Que no regale un as o tres. No quitarme cante
	if (ArrayCartaPosible.length==0)
	{
		
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if ( MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR
			
							&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
				|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==false && 
				 MazoTrabajo[i].VVRCMEUNOJ<=10 //para que no regale un 3 o as
				 && TengoCanteConEstaCarta(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)==false			
				)) //que no mate yo
				 	
			)
			{
					if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
					{
						console.log("Rellena desde 6")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
					}
			}
		}	
	
	}	
	
   //Una carta no triunfo que no haga que ganen. Primero que no mate. Que no regale un as o tres. Me quito cante
	if (ArrayCartaPosible.length==0)
	{
		
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if ( MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR
			
							&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
				|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==false && 
				 MazoTrabajo[i].VVRCMEUNOJ<=10 //para que no regale un 3 o as
				
				)) //que no mate yo
				 	
			)
			{
					if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
					{
						console.log("Rellena desde 6.1")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
					}
			}
		}	
	
	}		
	
	//Una carta no triunfo que no haga que ganen. Que mate
	if (ArrayCartaPosible.length==0)
	{
		
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if ( MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR
			
							&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
				|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==true )) //que no mate yo
					
			)
			{
					if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
					{
						console.log("Rellena desde 7")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
					}
			}
		}	
	
	}		
	
	
	// Una carta triunfo que no haga que ganen. Primero que no mate
	if (ArrayCartaPosible.length==0)
	{
		
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if ( MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR
			
							&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
				|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==false )) //que no mate yo
				&& TengoCanteConEstaCarta(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)==false		
			)
			{
					if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
					{
						console.log("Rellena desde 8")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
					}
			}
		}	
	
	}	
	
	// Una carta triunfo que no haga que ganen. Que no mate
	if (ArrayCartaPosible.length==0)
	{
		
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if ( MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR
			
							&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
				|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==true )) //que no mate yo
				&& TengoCanteConEstaCarta(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)==false		
			)
			{
					if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
					{
						console.log("Rellena desde 9")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
					}
			}
		}	
	
	}		
	
	
	
//
	// Una carta triunfo que no haga que ganen. Primero que no mate
	if (ArrayCartaPosible.length==0)
	{
		
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if ( MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR
			
							&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
				|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==false )) //que no mate yo
				
			)
			{
					if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
					{
						console.log("Rellena desde 9.1")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
					}
			}
		}	
	
	}	
	
	// Una carta triunfo que no haga que ganen. Que no mate
	if (ArrayCartaPosible.length==0)
	{
		
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if ( MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR
			
							&& (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true
				|| ( VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false  && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==true )) //que no mate yo
				
			)
			{
					if (MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB<=JLVDFTPUNI)
					{
						console.log("Rellena desde 9.2")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
					}
			}
		}	
	
	}		

	for (i=0;i<=ArrayCartaPosible.length-1;i++)
	{
		if (ArrayCartaPosible[i].VVRCMEUNOJ==7 && ArrayCartaPosible[i].SGCSHJVERI==TGTQPBEQFR)
		{
			if (LUCRWXJMDR<=4 && FBSDMRLVEL[0].VVRCMEUNOJ>=8)
			{
				ArrayCartaPosible.splice(i,1)
			}
		}
	}
	
	
	if (ArrayCartaPosible.length==0)
	{
		
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if (MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR)
			{
				ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
			}
					
		}	
	
	}		
	
	if (ArrayCartaPosible.length==0)
	{
		
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			console.log("Rellena desde 11")
			ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
					
		}	
	
	}		

 
	
	var PUWBYVGIMA=99;
	var PUWBYVGIMA=0;
	
	
	if (SGEGEGEGEW.BMITYYFCGC==1)
	{
		Key=DameLaCarta(ArrayCartaPosible,0)		
	}
	
	if (SGEGEGEGEW.BMITYYFCGC==2 || SGEGEGEGEW.BMITYYFCGC==3)
	{
		if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA))
		{
			if (VDKOVQXHON[0].SGCSHJVERI==TGTQPBEQFR || SonTodasTriunfo(ArrayCartaPosible) )
			{
				Key=DameLaCarta(ArrayCartaPosible,0)	
			}
			else
			{
				Key=DameLaCarta(ArrayCartaPosible,99)	
			}
		}
		else
		{
			if (LUCRWXJMDR==4)
			{
				Key=DameLaCarta(ArrayCartaPosible,0)	
			}
			else
			{
				Key=DameLaCarta(ArrayCartaPosible,99)	
			}
		}
			
	}	
	
	if (PuntuacionPorID(Key)>=10)
	{
		Key=DameLaCarta(ArrayCartaPosible,98)	
	}
	
	
	if (Key==false)
	{
		if (SGEGEGEGEW.BMITYYFCGC==4)
		{	
			if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA))
			{
				if (VDKOVQXHON[0].SGCSHJVERI==TGTQPBEQFR || SonTodasTriunfo(ArrayCartaPosible))
				{
					Key=DameLaCarta(ArrayCartaPosible,0) 
				}
				else
				{
					Key=DameLaCarta(ArrayCartaPosible,99)
				}
			}
			else
			{
				Key=DameLaCarta(ArrayCartaPosible,0)
			}
		}	
	}
	
	
	if (Key==false)
	{
		Key=DameLaCarta(ArrayCartaPosible,0)
	}
		
	
	
	return Key;
}

function DameLaCarta(ArrayCartaPosible,QueQuiero)
{
	//QueQuiero  0 Lo más bajo 99 lo más alto

	var PUWBYVGIMA=99;
	var INIDNQUMXV=0;
	var i;
	var Key=false;
	
	//console.log("antes array "+ArrayCartaPosible.length+" que quiero "+QueQuiero)
	if (QueQuiero==0)
	{
		for (i=0;i<=ArrayCartaPosible.length-1;i++)
		{
			//console.log("Dando vueltas "+ArrayCartaPosible[i].VVRCMEUNOJ)
			if (ArrayCartaPosible[i].VVRCMEUNOJ<=PUWBYVGIMA)
			{
				PUWBYVGIMA=ArrayCartaPosible[i].VVRCMEUNOJ;
				Key=UIBEMREGDL(ArrayCartaPosible[i].SGCSHJVERI, ArrayCartaPosible[i].VVRCMEUNOJ)
				//console.log("En el array "+Key)
			}
		}	
	}
	
	if (QueQuiero==99)
	{
		for (i=0;i<=ArrayCartaPosible.length-1;i++)
		{
			//console.log("Dando vueltas2 "+ArrayCartaPosible[i].VVRCMEUNOJ+" "+ArrayCartaPosible[i].SGCSHJVERI)
			if (ArrayCartaPosible[i].VVRCMEUNOJ>=INIDNQUMXV)
			{
				INIDNQUMXV=ArrayCartaPosible[i].VVRCMEUNOJ;
				Key=UIBEMREGDL(ArrayCartaPosible[i].SGCSHJVERI, ArrayCartaPosible[i].VVRCMEUNOJ)		
				//console.log("En el array2 "+Key)				
			}
		}	
	}	
	
	
	if (QueQuiero==50)
	{
		ArrayCartaPosible.sort(sort_by('VVRCMEUNOJ', false, parseFloat));
		var PosicionDevolver=Math.floor(ArrayCartaPosible.length/2)
		for (i=0;i<=ArrayCartaPosible.length-1;i++)
		{
			if(i==PosicionDevolver)
			{
				Key=UIBEMREGDL(ArrayCartaPosible[i].SGCSHJVERI, ArrayCartaPosible[i].VVRCMEUNOJ)
				break;
			}
		}
	}
	
	
	if (QueQuiero==98)
	{
		
		for (i=0;i<=ArrayCartaPosible.length-1;i++)
		{
			//console.log("Dando vueltas2 "+ArrayCartaPosible[i].VVRCMEUNOJ+" "+ArrayCartaPosible[i].SGCSHJVERI)
			if (ArrayCartaPosible[i].VVRCMEUNOJ>=INIDNQUMXV && ArrayCartaPosible[i].WQCPJQWFPN==10 && OQOQOCBSKK(ArrayCartaPosible)==2
				&& SonTodasTriunfo(ArrayCartaPosible))
			{
				INIDNQUMXV=ArrayCartaPosible[i].VVRCMEUNOJ;
				Key=UIBEMREGDL(ArrayCartaPosible[i].SGCSHJVERI, ArrayCartaPosible[i].VVRCMEUNOJ)		
				//console.log("En el array2 "+Key)				
			}
		}	
		
		if (Key==false)
		{
			for (i=0;i<=ArrayCartaPosible.length-1;i++)
			{
				//console.log("Dando vueltas2 "+ArrayCartaPosible[i].VVRCMEUNOJ+" "+ArrayCartaPosible[i].SGCSHJVERI)
				if (ArrayCartaPosible[i].VVRCMEUNOJ>=INIDNQUMXV && ArrayCartaPosible[i].WQCPJQWFPN<=4)
				{
					INIDNQUMXV=ArrayCartaPosible[i].VVRCMEUNOJ;
					Key=UIBEMREGDL(ArrayCartaPosible[i].SGCSHJVERI, ArrayCartaPosible[i].VVRCMEUNOJ)		
					//console.log("En el array2 "+Key)				
				}
			}
		}
	}
	
	
	return Key;
}


function LanzaGuinote(UHTPGPRUJA, MazoTrabajo, SGEGEGEGEW)
{
	var i;
	var u;
	var QOWECQVXCM=false;
	var Key=false
	
	Key=GuinotePelado(MazoTrabajo, SGEGEGEGEW);	
	
	if (Key==false)
	{
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{

			
			if ( MazoTrabajo[i].VVRCMEUNOJ==11 && EstaFirme( UHTPGPRUJA, MazoTrabajo[i].SGCSHJVERI,  MazoTrabajo[i].VVRCMEUNOJ, MazoTrabajo)==false && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR )  //Busco el 3 no firme
			{
				Key=UIBEMREGDL(MazoTrabajo[i].SGCSHJVERI,MazoTrabajo[i].VVRCMEUNOJ)				
				break;
			}
			
		}
	}		
	if (Key==false)
	{
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{
			
			if ( MazoTrabajo[i].VVRCMEUNOJ==12 && HaSalido(MazoTrabajo[i].SGCSHJVERI,11)==true   && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR ) //Busco un as que haya salido su tres
			{
				Key=UIBEMREGDL(MazoTrabajo[i].SGCSHJVERI,MazoTrabajo[i].VVRCMEUNOJ)				
				break;
			}				
		}
	}
	
	
	if (Key==false)
	{
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{
			
			if ( MazoTrabajo[i].VVRCMEUNOJ==12 && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR ) //Busco un as que haya salido su tres
			{
				Key=UIBEMREGDL(MazoTrabajo[i].SGCSHJVERI,MazoTrabajo[i].VVRCMEUNOJ)				
				break;
			}				
		}
	}
	
	if (Key==false)
	{
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{

			
			if ( MazoTrabajo[i].VVRCMEUNOJ==11 && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR )  //Busco el 3 no firme
			{
				Key=UIBEMREGDL(MazoTrabajo[i].SGCSHJVERI,MazoTrabajo[i].VVRCMEUNOJ)				
				break;
			}
			
		}
	}		
	
	return Key;
}

function EstaFirme(UHTPGPRUJA, SGCSHJVERI,VVRCMEUNOJ, MazoTrabajo)
{
	
	var i;
	var u;
	var EsFirme=true;
	var ArrayRevisar=[1,2,3,4,5,6,7,8,9,10,11,12]
	var VEFCIYHBGC=false;
	
	//console.log("esta firme "+VVRCMEUNOJ+" "+SGCSHJVERI)
	if (ArrayCambioCarta.length>0 && SGCSHJVERI==TGTQPBEQFR)
	{
		for (i=0;i<=ArrayRevisar.length-1;i++)
		{
			if (ArrayRevisar[i]==VVRCMEUNOJ && UDUUDUDDJJ(UHTPGPRUJA, ArrayCambioCarta[0].RRWWKUVRLD)==true  )
			{
				ArrayRevisar.splice(i,1)
			}
		}
	}
	
	if (LUCRWXJMDR<=4)
	{
		for (i=0;i<=ArrayRevisar.length-1;i++)
		{
			if (ArrayRevisar[i]==FBSDMRLVEL[0].VVRCMEUNOJ && SGCSHJVERI==TGTQPBEQFR)
			{
				ArrayRevisar.splice(i,1)
			}
		}		
	}
	

	for (i=0;i<=MazoCartasSalidas.length-1;i++)
	{
		if (MazoCartasSalidas[i].SGCSHJVERI==SGCSHJVERI)
		{
			for (u=0;u<=ArrayRevisar.length-1;u++)
			{
				if (MazoCartasSalidas[i].VVRCMEUNOJ==ArrayRevisar[u] && MazoCartasSalidas[i].AGTXFNIKQD!=LUCRWXJMDR)
				{
					//console.log("borrando salidas.."+ArrayRevisar[u]+" "+SGCSHJVERI)
					ArrayRevisar.splice(u,1)
					
				}
			}
		}
	}
	
	
	for (i=0;i<=MazoTrabajo.length-1;i++)
	{
		if (MazoTrabajo[i].SGCSHJVERI==SGCSHJVERI)
		{
			VEFCIYHBGC=false;
			for (u=0;u<=ArrayRevisar.length-1;u++)
			{
				if (MazoTrabajo[i].VVRCMEUNOJ==ArrayRevisar[u] && MazoTrabajo[i].VVRCMEUNOJ!=VVRCMEUNOJ) //Quito las de mi mano, pero no quito la propia carta
				{
					//console.log("borrando mias.."+ArrayRevisar[u]+" "+SGCSHJVERI)
					ArrayRevisar.splice(u,1)
					
				}
			}
		}
	}	
	
	for (i=0;i<=ArrayRevisar.length-1;i++)
	{
		if (ArrayRevisar[i]>VVRCMEUNOJ)
		{
			//console.log("No es firme "+ArrayRevisar[i]+" "+VVRCMEUNOJ+" "+SGCSHJVERI)
			EsFirme=false;
			break;
		}
	}	
	
	
	
	
	return EsFirme;
	
}

function HayGuinoteEnMesa()
{
	var i;
	var QOWECQVXCM=false
	
	for (i=0;i<=VDKOVQXHON.length-1;i++)
	{
		
		if ( VDKOVQXHON[i].VVRCMEUNOJ>=11  ) //Busco un as que haya salido su tres
		{
			QOWECQVXCM=true;	
			break;
		}				
	}
	
	return QOWECQVXCM;
}
function HaSalido(SGCSHJVERI,VVRCMEUNOJ)
{
	
	var i;
	var HaSalido=false;
	
	for (i=0;i<=MazoCartasSalidas.length-1;i++)
	{
		//var Key=UIBEMREGDL(MGYJHGHWGC[i].SGCSHJVERI,MGYJHGHWGC[i].VVRCMEUNOJ)
		if ( MazoCartasSalidas[i].VVRCMEUNOJ==VVRCMEUNOJ && MazoCartasSalidas[i].SGCSHJVERI==SGCSHJVERI && MazoCartasSalidas[i].AGTXFNIKQD!=LUCRWXJMDR)
		{
			HaSalido=true;
			break;
		}
	}
	
	return HaSalido;
	
}

function TengoEstaCarta(MazoTrabajo,VVRCMEUNOJ, SGCSHJVERI)
{
	
	var i;
	var Tengo=false;
	
	for (i=0;i<=MazoTrabajo.length-1;i++)
	{
		//var Key=UIBEMREGDL(MGYJHGHWGC[i].SGCSHJVERI,MGYJHGHWGC[i].VVRCMEUNOJ)
		if ( MazoTrabajo[i].VVRCMEUNOJ==VVRCMEUNOJ && MazoTrabajo[i].SGCSHJVERI==SGCSHJVERI)
		{
			Tengo=true;
			break;
		}
	}
	
	return Tengo;
	
}

function GuinotesVivosOtrasManos()
{
	var Vivos=6;
	var i;
	
	for (i=0;i<=MazoCartasSalidas.length-1;i++)
	{
		if ( (MazoCartasSalidas[i].VVRCMEUNOJ==11 ||  MazoCartasSalidas[i].VVRCMEUNOJ==12) && MazoCartasSalidas[i].SGCSHJVERI!=TGTQPBEQFR)
		{
			Vivos--;
		}
	}
	
	for (i=0;i<=AGKVNAGGLB.length-1;i++)
	{
		if ( (AGKVNAGGLB[i].VVRCMEUNOJ==11 ||  AGKVNAGGLB[i].VVRCMEUNOJ==12) && AGKVNAGGLB[i].SGCSHJVERI!=TGTQPBEQFR)
		{
			Vivos--;	
		}
	}
	
	return Vivos;
}

function AsesVivosOtrasManos()
{
	var Vivos=3;
	
	for (i=0;i<=MazoCartasSalidas.length-1;i++)
	{
		if ( MazoCartasSalidas[i].VVRCMEUNOJ==12  && MazoCartasSalidas[i].SGCSHJVERI!=TGTQPBEQFR)
		{
			Vivos--;
		}
	}
	
	for (i=0;i<=AGKVNAGGLB.length-1;i++)
	{
		if ( AGKVNAGGLB[i].VVRCMEUNOJ==12 && AGKVNAGGLB[i].SGCSHJVERI!=TGTQPBEQFR)
		{
			Vivos--;	
		}
	}
	
	return Vivos;
}


function MarcarFigura(MazoTrabajo)
{
	var i;
	var Key=false;
	var SEQJGUOFTO=true;
		
	MazoTrabajo=Phaser.ArrayUtils.shuffle(MazoTrabajo);
	
	var listavalores=[10,9,8]
	
	listavalores.forEach( function(element, index, Array)
	{
		if (SEQJGUOFTO==true)
		{	
		
			for (i=0;i<=MazoTrabajo.length-1;i++)
			{
				if ( MazoTrabajo[i].VVRCMEUNOJ==element && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR)
				{
					Key=UIBEMREGDL(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)
					SEQJGUOFTO=false;
					break;
				}
			}
			
		}
	})
	
	return Key;
}

function DevuelveTriunfoFirme(UHTPGPRUJA, MazoTrabajo)
{
	
	var i;
	var u;
	var HaSalido=false;
	//var ArrayRevisar=[1,2,3,4,5,6,7,8,9,10,11,12]
	var EsFirme=false;
	var Key=false;
	
	var MiMasAlta=0;
	for (i=0;i<=MazoTrabajo.length-1;i++)
	{
		//var Key=UIBEMREGDL(MGYJHGHWGC[i].SGCSHJVERI,MGYJHGHWGC[i].VVRCMEUNOJ)
		if ( MazoTrabajo[i].VVRCMEUNOJ>MiMasAlta && MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR)
		{
			MiMasAlta=MazoTrabajo[i].VVRCMEUNOJ
		}
	}
	
	if (MiMasAlta>0)
	{
		EsFirme=EstaFirme(UHTPGPRUJA, TGTQPBEQFR,MiMasAlta, MazoTrabajo)
		
		if (EsFirme==true)
		{
			Key=UIBEMREGDL(TGTQPBEQFR, MiMasAlta)	
		}
		
		console.log("DEVUELVE ALTA "+MiMasAlta);
		console.log("DEVUELVE TRIUNFO FIRME "+Key);
	}
	
	return Key;
	
}

function DevuelveNoTriunfoFirme(UHTPGPRUJA, MazoTrabajo)
{
	
	var i;
	var u;
	var HaSalido=false;
	//var ArrayRevisar=[1,2,3,4,5,6,7,8,9,10,11,12]
	var EsFirme=false;
	var Key=false;
	var CuentaFirme=0;	
	var MiMasAlta=0;
	var SEQJGUOFTO=true;
	
	
	var listapalos=["oros","copas","espadas","bastos"];
	listapalos=Phaser.ArrayUtils.shuffle(listapalos);
	
	listapalos.forEach( function(element, index, Array)
	{
		if (SEQJGUOFTO==true && TGTQPBEQFR!=element )
		{
			HaSalido=false;

			EsFirme=false;
			Key=false;
			CuentaFirme=0;	
			MiMasAlta=0;
		
			for (i=0;i<=MazoTrabajo.length-1;i++)
			{
				if ( MazoTrabajo[i].VVRCMEUNOJ>MiMasAlta && MazoTrabajo[i].SGCSHJVERI==element)
				{
					MiMasAlta=MazoTrabajo[i].VVRCMEUNOJ
				}
			}
			

			
			if (MiMasAlta>0)
			{
				EsFirme=EstaFirme(UHTPGPRUJA, element, MiMasAlta, MazoTrabajo)
				
				if (EsFirme==true)
				{
					Key=UIBEMREGDL(element, MiMasAlta)	
					SEQJGUOFTO=false;
				}	
			}
			

		}
	})
	
	return Key;
	
}

function ValorFirmesRestantes(UHTPGPRUJA, MazoTrabajo, PaloBuscar, ValorExcluir)
{
	var ObjetoDevolver;
	var i;
	var puntuaciones=0;
	var numerofirmes=0;
	var Key;
	
	
	for (i=0;i<=MazoTrabajo.length-1;i++)
	{
		if ( MazoTrabajo[i].SGCSHJVERI==PaloBuscar && MazoTrabajo[i].VVRCMEUNOJ!=ValorExcluir  )
		{
			if (EstaFirme(UHTPGPRUJA, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ, MazoTrabajo)  && MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR )
			{
				numerofirmes=numerofirmes+1;
				Key=UIBEMREGDL(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)
				puntuaciones=puntuaciones+PuntuacionPorID(Key)
			}
		}
	}
	
	ObjetoDevolver=new ObjetoFirmes(numerofirmes,puntuaciones);
	
	return ObjetoDevolver
	
	
}

function CuentaFirmes(UHTPGPRUJA, MazoTrabajo, PaloBuscar)
{
	
	var i;
	var u;
	var HaSalido=false;
	
	var EsFirme=false;
	var Key=false;
	var CuentaFirme=0;	
	var MiMasAlta=0;
	
	
	var listapalos=["oros","copas","espadas","bastos"];
	listapalos=Phaser.ArrayUtils.shuffle(listapalos);


				
	listapalos.forEach( function(element, index, Array)
	{
		

		
		if (PaloBuscar=="todos" || PaloBuscar==element)
		{	
			HaSalido=false;
			EsFirme=false;
			Key=false;
			CuentaFirme=0;	
			MiMasAlta=0;
			
			for (i=0;i<=MazoTrabajo.length-1;i++)
			{
				/*if ( MazoTrabajo[i].VVRCMEUNOJ>MiMasAlta && MazoTrabajo[i].SGCSHJVERI==element)
				{
					MiMasAlta=MazoTrabajo[i].VVRCMEUNOJ
				}*/
			
			

			
				//if (MiMasAlta>0)
				//{
				console.log("pregunto por "+MazoTrabajo[i].VVRCMEUNOJ+" "+MazoTrabajo[i].SGCSHJVERI)
				EsFirme=EstaFirme(UHTPGPRUJA, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ, MazoTrabajo)
				//}
				
				if (EsFirme==true)
				{
					console.log("la carta es "+MazoTrabajo[i].VVRCMEUNOJ+" "+element+" ES FIRME")
					CuentaFirme++;
					console.log("Cuenta firmes temporal "+CuentaFirme);
				}
				else
				{
					console.log("la carta "+MazoTrabajo[i].VVRCMEUNOJ+" "+element+" NO ES FIRME")
				}
			}
		}
		
	})
	
	console.log("Cuenta firmes "+CuentaFirme);
	return CuentaFirme;
	
}

function DescarteCompanero(UHTPGPRUJA,MazoTrabajo)
{
	var i;
	var Key=false;
	var PaloDescarte=""
	
	for (i=MazoCartasSalidas.length-1;i>=0;i--)
	{
		if (MazoCartasSalidas[i].jugador!=UHTPGPRUJA)
		{
			if (MazoCartasSalidas[i].AGTXFNIKQD==4 && UDUUDUDDJJ(UHTPGPRUJA, MazoCartasSalidas[i].jugador))
			{
				PaloDescarte=MazoCartasSalidas[i].SGCSHJVERI
				break;				
			}			
		}
	}
	
	var ValorMinimo=0
	for (i=0;i<=MazoTrabajo.length-1;i++)
	{
		if (MazoTrabajo[i].VVRCMEUNOJ>ValorMinimo && MazoTrabajo[i].SGCSHJVERI==PaloDescarte)
		{
			Key=UIBEMREGDL(MazoTrabajo[i].SGCSHJVERI,MazoTrabajo[i].VVRCMEUNOJ)
			ValorMinimo=MazoTrabajo[i].VVRCMEUNOJ
		}
			
	}
	
	return Key;
}	


function MiCompiHaMarcado(UHTPGPRUJA,NBOOATHXUG, MazoTrabajo)
{
	var i;
	var QOWECQVXCM=false;
	
	for (i=MazoCartasSalidas.length-1;i>=0;i--)
	{
		if (MazoCartasSalidas[i].jugador!=UHTPGPRUJA)
		{
			if (MazoCartasSalidas[i].AGTXFNIKQD>=5 && MazoCartasSalidas[i].AGTXFNIKQD<NBOOATHXUG && MazoCartasSalidas[i].NPYBJSHIFL==1)
			{
				if (UDUUDUDDJJ(UHTPGPRUJA, MazoCartasSalidas[i].jugador) && MazoCartasSalidas[i].SGCSHJVERI==TGTQPBEQFR )
				{
					console.log("Marca1")
					QOWECQVXCM=true;
					break;
				}
			}
			
			if (MazoCartasSalidas[i].AGTXFNIKQD<=4)
			{
				if (UDUUDUDDJJ(UHTPGPRUJA, MazoCartasSalidas[i].jugador) && MazoCartasSalidas[i].VVRCMEUNOJ>=11 && MazoCartasSalidas[i].NPYBJSHIFL!=4 )
				{
					console.log("Marca2")
					QOWECQVXCM=true;
					break;
				}
			}
			
			if (MazoCartasSalidas[i].AGTXFNIKQD<=4 && EVAILWGGKX==true)
			{
				if (UDUUDUDDJJ(UHTPGPRUJA, MazoCartasSalidas[i].jugador) && MazoCartasSalidas[i].VVRCMEUNOJ>=8 && MazoCartasSalidas[i].VVRCMEUNOJ<=10
				&& MazoCartasSalidas[i].SGCSHJVERI!=TGTQPBEQFR)
				{
					console.log("Marca3")
					QOWECQVXCM=true;
					break;
				}			
			}
		}
	}
	
	if (MiCompiTieneElAs(UHTPGPRUJA))
	{
		QOWECQVXCM=true;	
		console.log("Marca4")
	}
	else
	{	

		if (QOWECQVXCM==true && NBOOATHXUG==5)
		{
			QOWECQVXCM=true;
			console.log("Marca5")
		}
		else
		{
			if (QOWECQVXCM==true && ContinuarArrastrando(UHTPGPRUJA, MazoTrabajo, NBOOATHXUG)==true)
			{
				QOWECQVXCM=true;
				console.log("Marca6")
			}
			else
			{
				QOWECQVXCM=false;
				console.log("Marca7")
			}	
		}
	}
	

	
	
	
	return QOWECQVXCM;
}	


/*function MatarCiviloCriminal_menos_a_mas(MazoTrabajo, UHTPGPRUJA, SGEGEGEGEW, ValorMinimo, AunqueSeaEl3,RompoElJuego)
{
	var NJGFWACAPY=false
	
	if (NJGFWACAPY==false)
	{
		NJGFWACAPY=MatarSinTriunfo(MazoTrabajo, UHTPGPRUJA, SGEGEGEGEW, 11)
		if (NJGFWACAPY!=false)
		{
			//console.log(TraducePorID(NJGFWACAPY)+ " v 9.4.2.1 bis")
		}
	}
	
	if (NJGFWACAPY==false)
	{
		NJGFWACAPY=MatarSinTriunfo(MazoTrabajo, UHTPGPRUJA, SGEGEGEGEW, 0)
		if (NJGFWACAPY!=false)
		{
			//console.log(TraducePorID(NJGFWACAPY)+ " v 9.4.2.2")
		}
	}
	
	if (NJGFWACAPY==false)
	{
		NJGFWACAPY=MatarPeorTriunfo(MazoTrabajo, UHTPGPRUJA,0,true,false, SGEGEGEGEW)		
		if (NJGFWACAPY!=false)
		{
			//console.log(TraducePorID(NJGFWACAPY)+ " v 9.4.2.3")
		}
	}	
	
	return NJGFWACAPY
	
}*/

function PuedoLlegarA31(MazoTrabajo, UHTPGPRUJA,SGEGEGEGEW)
{
	var QOWECQVXCM=false;
	var i;
	
	for (i=0;i<=MazoTrabajo.length-1;i++)
	{
		if ( IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ) && TengoCanteConEstaCarta(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)==false  )
		{
			if ( SGEGEGEGEW.MarcadorRevisarNuestro+MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.DCBSNHIVQB>=31)
			{
				QOWECQVXCM=true;
				break;
			}
		}
		
	}
	
}

function GuinotePelado(MazoTrabajo, SGEGEGEGEW)
{
	
	var i;
	var VEFCIYHBGC=false;
	var Key=false;
	
	
	for (i=0;i<=MazoTrabajo.length-1;i++)
	{
		if ( MazoTrabajo[i].VVRCMEUNOJ==11 && VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) ==1  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR) 
		{
			Key=UIBEMREGDL(MazoTrabajo[i].SGCSHJVERI,MazoTrabajo[i].VVRCMEUNOJ)
			break;
		}
	}
	
	for (i=0;i<=MazoTrabajo.length-1;i++)
	{
		if ( MazoTrabajo[i].VVRCMEUNOJ==12 && VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) ==1  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR)
		{
			Key=UIBEMREGDL(MazoTrabajo[i].SGCSHJVERI,MazoTrabajo[i].VVRCMEUNOJ)
			break;
		}
	}
	return Key;
	
}


function VecesEnMano (MazoTrabajo, SGCSHJVERI, SGEGEGEGEW)
{
	var veces;
	var i;
	
	if (SGCSHJVERI=="oros")
	{
		veces=SGEGEGEGEW.OrosMano
	}

	if (SGCSHJVERI=="copas")
	{
		veces=SGEGEGEGEW.CopasMano	
	}
	
	if (SGCSHJVERI=="espadas")
	{
		veces=SGEGEGEGEW.EspadasMano
	}

	if (SGCSHJVERI=="bastos")
	{
		veces=SGEGEGEGEW.BastosMano
	}	
	
	if (veces==2 && SGCSHJVERI!=TGTQPBEQFR) //para no dejar un 3 pelado
	{
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{
			if (MazoTrabajo[i].VVRCMEUNOJ==11)
			{
				veces=3;
			}
		}
	}
	
	return veces;
}

function XXZXVSDVSD(MazoTrabajo,UHTPGPRUJA,BMITYYFCGC) //Se usa
{
	var i;
	var u;
	var VEFCIYHBGC=false;
	var MarcadorRevisarNuestro;
	var VVSFGSGGSW;
	var DCBSNHIVQB=0;
	var NMBDIWHGDI=false;
	var RTOSLKFWHC=false;
	//var SGEGEGEGEW;
	var UYWGCJGCJJ;
	
	if (UDUUDUDDJJ(TFSXFTYVGQ,UHTPGPRUJA)==true)
	{
		MarcadorRevisarNuestro=UHHXSNXXJK;
		VVSFGSGGSW=PXGXKDDNFK;
	}
	else
	{
		MarcadorRevisarNuestro=PXGXKDDNFK;
		VVSFGSGGSW=UHHXSNXXJK;
	}
	
	var TriunfosEnMesa=0;
	for (i=0;i<=VDKOVQXHON.length-1;i++)
	{
		DCBSNHIVQB=DCBSNHIVQB+VDKOVQXHON[i].WQCPJQWFPN;
		if (VDKOVQXHON[i].SGCSHJVERI==TGTQPBEQFR)
		{
			TriunfosEnMesa++;
		}
	}
	

	var OrosMano=0
	var CopasMano=0
	var EspadasMano=0
	var BastosMano=0
	
	for (i=0;i<=MazoTrabajo.length-1;i++)
	{
		if (MazoTrabajo[i].SGCSHJVERI=="oros")
		{
			OrosMano++;
		}
		if (MazoTrabajo[i].SGCSHJVERI=="copas")
		{
			CopasMano++;
		}
		
		if (MazoTrabajo[i].SGCSHJVERI=="espadas")
		{
			EspadasMano++;
		}
		
		if (MazoTrabajo[i].SGCSHJVERI=="bastos")
		{
			BastosMano++;
		}		
	}

	
	var OrosGlobal=ContadorPaloOros
	var CopasGlobal=ContadorPaloCopas
	var EspadasGlobal=ContadorPaloEspadas
	var BastosGlobal=ContadorPaloBastos


	UYWGCJGCJJ=new ObjetoConfiguraSituacion(DCBSNHIVQB,MarcadorRevisarNuestro,VVSFGSGGSW,	
		OrosMano, CopasMano, EspadasMano, BastosMano,
		OrosGlobal, CopasGlobal, EspadasGlobal, BastosGlobal, BMITYYFCGC,TriunfosEnMesa);
		
	return UYWGCJGCJJ;
	
	
}


function TengoCanteConEstaCarta(XACEBCSJAB,FHEFFYUQFX,ValorReal)
{
	var i;
	var u;
	var JGDJVGWVNZ=0;
	var RTOSLKFWHC=true;
	
	
	
	if (ValorReal==9 || ValorReal==10)
	{
		for (i=0;i<=XACEBCSJAB.length-1;i++)
		{
			if (XACEBCSJAB[i].SGCSHJVERI==FHEFFYUQFX && (XACEBCSJAB[i].VVRCMEUNOJ==9 ||  XACEBCSJAB[i].VVRCMEUNOJ==10))
			{
				JGDJVGWVNZ++;
			}
		}
		
		if (JGDJVGWVNZ==2)
		{
			for (i=0;i<=FOQUJVEYFC.length-1;i++)
			{
				if (FOQUJVEYFC[i].SGCSHJVERI==FHEFFYUQFX)
				{
					RTOSLKFWHC=false;
					break;					
				}
			}
		}
		else
		{
			RTOSLKFWHC=false;
		}
	}
	else
	{
		RTOSLKFWHC=false;
	}
	
	return RTOSLKFWHC;
	
}

function ImposibleTabazoDeTriunfo(UHTPGPRUJA, SGEGEGEGEW)
{
	var RTOSLKFWHC=false;
	var Cumple=false;
	var i;
	
	if (LUCRWXJMDR<=4)
	{
		if (FBSDMRLVEL[0].VVRCMEUNOJ==12)
		{
			RTOSLKFWHC=true;
		}
	}	
	
	for (i=0;i<=MazoCartasSalidas.length-1;i++)
	{
		if (MazoCartasSalidas[i].VVRCMEUNOJ==12 && MazoCartasSalidas[i].SGCSHJVERI==TGTQPBEQFR  && MazoCartasSalidas[i].AGTXFNIKQD!=LUCRWXJMDR)
		{
			RTOSLKFWHC=true;
			break;
		}
	}
	
	if (RTOSLKFWHC==false)
	{
		if (ArrayCambioCarta.length>0)
		{
			if (ArrayCambioCarta.VVRCMEUNOJ==12)
			{
				
				
				
				if (SGEGEGEGEW.BMITYYFCGC==1)
				{
					if (EsMiDerecha(UHTPGPRUJA, ArrayCambioCarta[0].RRWWKUVRLD) || EsMiIzquierda(UHTPGPRUJA, ArrayCambioCarta[0].RRWWKUVRLD) )
					{
						Cumple=true;
					}
				}
				
				if (SGEGEGEGEW.BMITYYFCGC==2 || SGEGEGEGEW.BMITYYFCGC==3)
				{
					if (EsMiDerecha(UHTPGPRUJA, ArrayCambioCarta[0].RRWWKUVRLD)   )
					{
						Cumple=true;
					}
				}				
				
				
				
				if (Cumple==false)
				{
					RTOSLKFWHC=true;
				}
			
			
			}
		}
	}
	
	if (EVAILWGGKX==true && SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB+11>=JLVDFTPUNI)
	{
		RTOSLKFWHC=true;
	}
	
	
	return RTOSLKFWHC;
}

function TengoUnX(MazoTrabajo, valorBuscar,RevisarTriunfos)
{
	var i;
	var QOWECQVXCM=false;
	
	for (i=0;i<=MazoTrabajo.length-1;i++)
	{
		if (MazoTrabajo[i].VVRCMEUNOJ==valorBuscar)
		{
			if (RevisarTriunfos==true || (RevisarTriunfos==false && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR))
			{
				QOWECQVXCM=true;
				break;
			}
		}
	}
	
	return QOWECQVXCM;
}

function MiCompiTieneElAs(UHTPGPRUJA)
{
	var RTOSLKFWHC=false;
	var Cumple=false;
	var i;
	
	if ( !HaSalido(TGTQPBEQFR,12) ) 
	{
		if (ArrayCambioCarta.length>0)
		{
			if (ArrayCambioCarta[0].VVRCMEUNOJ==12)
			{
				RTOSLKFWHC=UDUUDUDDJJ(UHTPGPRUJA,ArrayCambioCarta[0].RRWWKUVRLD)
			}
		}
	}	
	
	return RTOSLKFWHC;
}

function HayTabazoDeTriunfo(UHTPGPRUJA, SGEGEGEGEW)
{
	var RTOSLKFWHC=false;
	var i;
	
	if (ArrayCambioCarta.length>0)
	{
		if (ArrayCambioCarta.VVRCMEUNOJ==12)
		{
			if (SGEGEGEGEW.BMITYYFCGC==1)
			{
				if (EsMiDerecha(UHTPGPRUJA, ArrayCambioCarta[0].RRWWKUVRLD) || EsMiIzquierda(UHTPGPRUJA, ArrayCambioCarta[0].RRWWKUVRLD) )
				{
					RTOSLKFWHC=true;
				}
			}
			
			if (SGEGEGEGEW.BMITYYFCGC==2 || SGEGEGEGEW.BMITYYFCGC==3)
			{
				if (EsMiDerecha(UHTPGPRUJA, ArrayCambioCarta[0].RRWWKUVRLD)   )
				{
					RTOSLKFWHC=true;
				}
			}			
		}
	}
	
	for (i=0;i<=MazoCartasSalidas.length-1;i++)
	{
		if (MazoCartasSalidas[i].VVRCMEUNOJ==12 && MazoCartasSalidas[i].SGCSHJVERI==TGTQPBEQFR  && MazoCartasSalidas[i].AGTXFNIKQD!=LUCRWXJMDR)
		{
			RTOSLKFWHC=false;
			break;
		}
	}	
	
	console.log("Hay tabazo "+RTOSLKFWHC)
	return RTOSLKFWHC;
}



function MatarMejorTriunfo(MazoTrabajo, UHTPGPRUJA, ValorMinimo,ValorMaximo, AunqueSeaEl3,RompoElJuego, SGEGEGEGEW)
{
	var i;
	var Mejor=0;
	var Key=false;
	
	if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false || VDKOVQXHON.length==0 || (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true &&  VDKOVQXHON[0].SGCSHJVERI!=TGTQPBEQFR  ) )
	{

		for (i=0;i<=MazoTrabajo.length-1;i++)
		{
			if (MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR && MazoTrabajo[i].VVRCMEUNOJ>=ValorMinimo && MazoTrabajo[i].VVRCMEUNOJ<=ValorMaximo)
			{
				if (MazoTrabajo[i].VVRCMEUNOJ>=Mejor && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==true )
				{
					if ( (MazoTrabajo[i].VVRCMEUNOJ==9 || MazoTrabajo[i].VVRCMEUNOJ==10) )
					{
						if (TengoCanteConEstaCarta(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)==false)
						{
							Mejor=MazoTrabajo[i].VVRCMEUNOJ
						}
						else
						{
							if(RompoElJuego==true)
							{
								Mejor=MazoTrabajo[i].VVRCMEUNOJ
							}
						}
					}
					
					if ( MazoTrabajo[i].VVRCMEUNOJ==7 )
					{
						if (LUCRWXJMDR>4)
						{
							Mejor=MazoTrabajo[i].VVRCMEUNOJ
						}
						else
						{						
							if ( FBSDMRLVEL[0].VVRCMEUNOJ>=9)
							{
								if(RompoElJuego==true)
								{
									Mejor=MazoTrabajo[i].VVRCMEUNOJ
								}
							}
							else
							{
								Mejor=MazoTrabajo[i].VVRCMEUNOJ
							}
						}
					}
					
					if ( MazoTrabajo[i].VVRCMEUNOJ==11)
					{

						
						if (ImposibleTabazoDeTriunfo(UHTPGPRUJA, SGEGEGEGEW))
						{
							Mejor=MazoTrabajo[i].VVRCMEUNOJ
						}
						else
						{
							if (AunqueSeaEl3==true)
							{
								if (HayTabazoDeTriunfo(UHTPGPRUJA, SGEGEGEGEW))
								{
										//Nada que hacer
								}
								else
								{
									Mejor=MazoTrabajo[i].VVRCMEUNOJ
								}
							}
						}					
					}
					
					if ( MazoTrabajo[i].VVRCMEUNOJ==8 || MazoTrabajo[i].VVRCMEUNOJ<=6 ||  MazoTrabajo[i].VVRCMEUNOJ==12)
					{
						Mejor=MazoTrabajo[i].VVRCMEUNOJ								
					}				
				}
			}		
		}
		
		if (Mejor!=0)
		{
			Key=UIBEMREGDL(TGTQPBEQFR, Mejor)
		}
	}
	
	return Key;
	
}

function TriunfoAlto(MazoTrabajo)
{
	var Key=false
	var i;
	
	for (i=12;i>=8;i--)
	{
		if (TengoEstaCarta(MazoTrabajo,i,TGTQPBEQFR))
		{
			Key=UIBEMREGDL(TGTQPBEQFR, i)
			break;
		}
	}
	
	return Key;
}

function TriunfoBajo(MazoTrabajo)
{
	var i;
	var valorAlto=99;
	var Key=false;
	
	for (i=0;i<=MazoTrabajo.length-1;i++)
	{
		if (MazoTrabajo[i].VVRCMEUNOJ<valorAlto && MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR)
		{
			valorAlto=MazoTrabajo[i].VVRCMEUNOJ;
			Key=UIBEMREGDL(TGTQPBEQFR, valorAlto)		
		}
	}
	
	return Key;
	
}

function MatarPeorTriunfo(MazoTrabajo, UHTPGPRUJA, ValorMinimo,AunqueSeaEl3,RompoElJuego, SGEGEGEGEW)
{
	//Es un copy & paste de MatarMejorTriunfo pero cambiando Mejor por Peor
	var i;
	var Peor=99;
	var Key=false;
	var Trucar=false;
	
	if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false || VDKOVQXHON.length==0 || (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==true &&  VDKOVQXHON[0].SGCSHJVERI!=TGTQPBEQFR  ) )
	{
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{
			if (MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR && MazoTrabajo[i].VVRCMEUNOJ>=ValorMinimo)
			{
				if (MazoTrabajo[i].VVRCMEUNOJ<=Peor && IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )==true )
				{
					
					if ( (MazoTrabajo[i].VVRCMEUNOJ==9 || MazoTrabajo[i].VVRCMEUNOJ==10) )
					{
						if (TengoCanteConEstaCarta(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)==false)
						{
							Peor=MazoTrabajo[i].VVRCMEUNOJ
						}
						else
						{
							if(RompoElJuego==true)
							{
								Peor=MazoTrabajo[i].VVRCMEUNOJ
							}
						}
					}
					
					if ( MazoTrabajo[i].VVRCMEUNOJ==7 )
					{
						if (LUCRWXJMDR>4)
						{
							Peor=MazoTrabajo[i].VVRCMEUNOJ
						}
						else
						{						
							if ( FBSDMRLVEL[0].VVRCMEUNOJ>=9)
							{
								if(RompoElJuego==true)
								{
									Peor=MazoTrabajo[i].VVRCMEUNOJ
								}
							}
							else
							{
								Peor=MazoTrabajo[i].VVRCMEUNOJ
							}
						}
					}
					
					if ( MazoTrabajo[i].VVRCMEUNOJ==11)
					{

						
						if (ImposibleTabazoDeTriunfo(UHTPGPRUJA, SGEGEGEGEW))
						{
							Peor=MazoTrabajo[i].VVRCMEUNOJ
						}
						else
						{
							if (AunqueSeaEl3==true)
							{
								if (HayTabazoDeTriunfo(UHTPGPRUJA, SGEGEGEGEW))
								{
										//Nada que hacer
								}
								else
								{
									Peor=MazoTrabajo[i].VVRCMEUNOJ
								}
							}
						}					
					}
					
					if ( MazoTrabajo[i].VVRCMEUNOJ==8 || MazoTrabajo[i].VVRCMEUNOJ<=6 || MazoTrabajo[i].VVRCMEUNOJ==12)
					{
						Peor=MazoTrabajo[i].VVRCMEUNOJ								
					}	
				}
			}		
		}
		
		if (Peor!=0)
		{
			if (Peor==11)
			{
				if (SGEGEGEGEW.VVSFGSGGSW+SGEGEGEGEW.DCBSNHIVQB+11+12>=JLVDFTPUNI || HayTabazoDeTriunfo(UHTPGPRUJA, SGEGEGEGEW) )
				{
					Trucar=true;				
				}
			}	
			
			if (Peor==12)
			{
				console.log("HA MARCARDO "+MiCompiHaMarcado(UHTPGPRUJA,LUCRWXJMDR, MazoTrabajo))
				if (Trucar==false && EVAILWGGKX==true && !MiCompiHaMarcado(UHTPGPRUJA,LUCRWXJMDR, MazoTrabajo))
				{
					console.log("truca")
					Trucar=true;						
				}
			}
				
				
			
				
			if (Trucar==false)
			{
				Key=UIBEMREGDL(TGTQPBEQFR, Peor)
			}
		}
		
	}
	return Key;
	
}



function Servir(UHTPGPRUJA,MazoTrabajo, FHEFFYUQFX, Posicion,SGEGEGEGEW, AunqueSeaEl3,RompoElJuego)
{
	var i;
	var Mejor=0;
	var ArrayCartaPosible=[];
	var Key=false
	
	for (i=0;i<=MazoTrabajo.length-1;i++)
	{
		if (MazoTrabajo[i].SGCSHJVERI==FHEFFYUQFX)
		{
				if ( (MazoTrabajo[i].VVRCMEUNOJ==9 || MazoTrabajo[i].VVRCMEUNOJ==10) )
				{
					if (TengoCanteConEstaCarta(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)==false)
					{
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));	
					}
					else
					{
						if(RompoElJuego==true)
						{
							ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));	
						}
					}
				}
				
				if ( MazoTrabajo[i].VVRCMEUNOJ==7 )
				{
					if (LUCRWXJMDR>4)
					{
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));	
					}
					else
					{						
						if ( FBSDMRLVEL[0].VVRCMEUNOJ>=9)
						{
							if(RompoElJuego==true)
							{
								ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));	
							}
						}
						else
						{
							Mejor=MazoTrabajo[i].VVRCMEUNOJ
						}
					}
				}
				
				if ( MazoTrabajo[i].VVRCMEUNOJ==11)
				{

					console.log("antes de ver imposible tabazo")
					if (ImposibleTabazoDeTriunfo(UHTPGPRUJA, SGEGEGEGEW))
					{
						console.log("es imposible")
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));	
					}
					else
					{
						console.log("es posible")
						if (AunqueSeaEl3==true || 
						
						(VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) ==2 &&  MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR) //De cara el 3
						
						)
						{
							if (HayTabazoDeTriunfo(UHTPGPRUJA, SGEGEGEGEW))
							{
									//Nada que hacer
							}
							else
							{
								ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));	
							}
						}
					}					
				}
				
				if ( MazoTrabajo[i].VVRCMEUNOJ==8 || MazoTrabajo[i].VVRCMEUNOJ<=6)
				{
					ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));							
				}				
			
		}		
	}
	
	if (ArrayCartaPosible.length>0)
	{
		Key=DameLaCarta(ArrayCartaPosible,Posicion) 
		
		if (SonTodasTriunfo(ArrayCartaPosible))
		{
			if (VecesEnMano(ArrayCartaPosible, TGTQPBEQFR , SGEGEGEGEW) ==2)
			for (i=0;i<=ArrayCartaPosible.length-1;i++)
			{
				if (ArrayCartaPosible[i].VVRCMEUNOJ==11 	&& HayTabazoDeTriunfo(UHTPGPRUJA, SGEGEGEGEW)==false ) 
				{
					Key=DameLaCarta(ArrayCartaPosible,99) //3 de cara
				}
			}
		}
		
		
	}
	
	return Key
}

function UDUUDUDDJJ(JugadorQueMueve1, JugadorQueMueve2)
{
	var UWCYUIWCIJ=false;
	
	if (JugadorQueMueve1==1)
	{
		if (JugadorQueMueve2==1){
			UWCYUIWCIJ=true;
		}
		if (JugadorQueMueve2==2){
			UWCYUIWCIJ=false;
		}
		if (JugadorQueMueve2==3){
			UWCYUIWCIJ=true;
		}
		if (JugadorQueMueve2==4){
			UWCYUIWCIJ=false;
		}			
	}
	if (JugadorQueMueve1==2)
	{
		if (JugadorQueMueve2==2){
			UWCYUIWCIJ=true;
		}
		if (JugadorQueMueve2==3){
			UWCYUIWCIJ=false;
		}
		if (JugadorQueMueve2==4){
			UWCYUIWCIJ=true;
		}
		if (JugadorQueMueve2==1){
			UWCYUIWCIJ=false;
		}			
	}
	if (JugadorQueMueve1==3)
	{
		if (JugadorQueMueve2==3){
			UWCYUIWCIJ=true;
		}
		if (JugadorQueMueve2==4){
			UWCYUIWCIJ=false;
		}
		if (JugadorQueMueve2==1){
			UWCYUIWCIJ=true;
		}
		if (JugadorQueMueve2==2){
			UWCYUIWCIJ=false;
		}			
	}
	if (JugadorQueMueve1==4)
	{
		if (JugadorQueMueve2==4){
			UWCYUIWCIJ=true;
		}
		if (JugadorQueMueve2==1){
			UWCYUIWCIJ=false;
		}
		if (JugadorQueMueve2==2){
			UWCYUIWCIJ=true;
		}
		if (JugadorQueMueve2==3){
			UWCYUIWCIJ=false;
		}			
	}		
	return UWCYUIWCIJ;
}




function EsMiDerecha(JugadorQueMueve1, JugadorPregunto)
{
	var EsDerecha=false;
	
	if (JugadorQueMueve1==1)
	{
		if (JugadorPregunto==2)
		{
			EsDerecha=true;
		}			
	}
	if (JugadorQueMueve1==2)
	{
		if (JugadorPregunto==3)
		{
			EsDerecha=true;
		}			
	}
	if (JugadorQueMueve1==3)
	{
		if (JugadorPregunto==4)
		{
			EsDerecha=true;
		}			
	}
	if (JugadorQueMueve1==4)
	{
		if (UHTPGPRUJA==1)
		{
			EsDerecha=true;
		}			
	}	
	return EsDerecha;
}


function EsMiIzquierda(JugadorQueMueve1, JugadorPregunto)
{
	var EsIzquierda=false;
	
	if (JugadorQueMueve1==1)
	{
		if (JugadorPregunto==4)
		{
			EsIzquierda=true;
		}			
	}
	if (JugadorQueMueve1==2)
	{
		if (JugadorPregunto==1)
		{
			EsIzquierda=true;
		}			
	}
	if (JugadorQueMueve1==3)
	{
		if (JugadorPregunto==2)
		{
			EsIzquierda=true;
		}			
	}
	if (JugadorQueMueve1==4)
	{
		if (UHTPGPRUJA==3)
		{
			EsIzquierda=true;
		}			
	}	
	return EsIzquierda;
}


function MatarSinTriunfo(MazoTrabajo, UHTPGPRUJA, SGEGEGEGEW,ValorMinimo)
{
	var i;
	var Key=false;
	var ArrayCartaPosible=[]

	for (i=0;i<=MazoTrabajo.length-1;i++)
	{			
		if ( IA_HariaBaza(UHTPGPRUJA,MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ )  &&
			VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR && MazoTrabajo[i].VVRCMEUNOJ>=ValorMinimo)
		{
				if ( SGEGEGEGEW.BMITYYFCGC==4 || (SGEGEGEGEW.BMITYYFCGC!=4 && MazoTrabajo[i].VVRCMEUNOJ<=10 && 
					TengoCanteConEstaCarta(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)==false &&
					SGEGEGEGEW.VVSFGSGGSW+MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.DCBSNHIVQB+11<JLVDFTPUNI)
				)
				ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
		}
	}
	
	if (ArrayCartaPosible.length>0)
	{
		Key=DameLaCarta(ArrayCartaPosible,99) 
	}
	return Key;
		
}


function Cargar(MazoTrabajo, UHTPGPRUJA, SGEGEGEGEW)
{
	var i;
	var u;
	var QOWECQVXCM=false;
	var Key=false
	var PaloSuperar
	var ValorSuperar
	
	var ArrayCartaPosible=[];

		
		for (i=0;i<=MazoTrabajo.length-1;i++) //Ganar sin cantar
		{	
			if ( SGEGEGEGEW.MarcadorRevisarNuestro+MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.DCBSNHIVQB>=JLVDFTPUNI)
			{
				ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));				
			}
		}
		
		if (ArrayCartaPosible.length==0)
		{
			var PuntosCante=BAVVCAHQCC(MazoTrabajo)
			for (i=0;i<=MazoTrabajo.length-1;i++) //Ganar cantando
			{	
			
				if ( SGEGEGEGEW.MarcadorRevisarNuestro+MazoTrabajo[i].WQCPJQWFPN+SGEGEGEGEW.DCBSNHIVQB+PuntosCante>=JLVDFTPUNI)
				{
					if (TengoCanteConEstaCarta(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ)==false)
					{
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));				
					}
				}
			}		
		}
		

		if (ArrayCartaPosible.length==0)
		{
			for (i=0;i<=MazoTrabajo.length-1;i++)
			{			
				if ( MazoTrabajo[i].VVRCMEUNOJ==11 && VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) ==1  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR)
				{
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
				}
			}
		}
		
		if (ArrayCartaPosible.length==0)
		{
			for (i=0;i<=MazoTrabajo.length-1;i++)
			{
				if ( MazoTrabajo[i].VVRCMEUNOJ==12 && VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) ==1  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR)
				{
						ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
				}
			}		
		}

		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if ( MazoTrabajo[i].VVRCMEUNOJ==11 && VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) >=1  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR)
			{
					ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
			}
		}		

		for (i=0;i<=MazoTrabajo.length-1;i++)
		{			
			if ( MazoTrabajo[i].VVRCMEUNOJ==12 && VecesEnMano(MazoTrabajo, MazoTrabajo[i].SGCSHJVERI , SGEGEGEGEW) >=1  && MazoTrabajo[i].SGCSHJVERI!=TGTQPBEQFR)
			{
					ArrayCartaPosible.push(new ObjetoCartaPosible(MazoTrabajo[i].SGCSHJVERI, MazoTrabajo[i].VVRCMEUNOJ ));					
			}
		}		
		
		if (ArrayCartaPosible.length>0)
		{
			Key=DameLaCarta(ArrayCartaPosible,0) //Quiero la más baja
		}

	
	return Key;
}



function BAVVCAHQCC(MazoTrabajo)
{
	var i;
	var JGDJVGWVNZ=0;
	var NMABMNABIW=0;
	
	["oros","copas","espadas","bastos"].forEach( function(element, index, Array){
		
		JGDJVGWVNZ=0;
		
		for (i=0;i<=MazoTrabajo.length-1;i++)
		{
			if(MazoTrabajo[i].SGCSHJVERI==element && (MazoTrabajo[i].VVRCMEUNOJ==9 || MazoTrabajo[i].VVRCMEUNOJ==10) && SRFFTPLVMJ(element)==false)
			{
				JGDJVGWVNZ++;
			}
		}
		if (JGDJVGWVNZ==2)
		{
			if(TGTQPBEQFR==element)
			{
				NMABMNABIW=NMABMNABIW+40;
			}
			else
			{
				NMABMNABIW=NMABMNABIW+20;
			}
		}	
	});
	//////console.log("PAXBGDCANU cante: "+NMABMNABIW);
	return NMABMNABIW;
}


function IA_HariaBaza(UHTPGPRUJA, SGCSHJVERI, VVRCMEUNOJ )
{
	
	var u;
	var i;
	var QOWECQVXCM=true;
	var VEFCIYHBGC=false;
	var JEOOIEYAWD=[];
	
		
	JEOOIEYAWD.splice(0,100);
	for (u=0;u<=VDKOVQXHON.length-1;u++){
		JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[u].SGCSHJVERI,VDKOVQXHON[u].VVRCMEUNOJ,VDKOVQXHON[u].jugador ));
	}
	
	//for (i=0;i<=MGYJHGHWGC.length-1;i++)
	//{
	//	if (MGYJHGHWGC[i].TNFAGGMKXD.name==PPHCWHCIWQ)
	//	{
			JEOOIEYAWD.push(new UYOMGORTXR(SGCSHJVERI,VVRCMEUNOJ,UHTPGPRUJA));
	//		break;
	//	}		
	//}

	
	
	if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true)
	{
		VEFCIYHBGC=true;	
	}

	
	if (VEFCIYHBGC==true)
	{
		QOWECQVXCM=true;
	}
	else
	{
		QOWECQVXCM=false;
	}
	
	//log(true,"FNLYNGWANP "+UHTPGPRUJA +" "+QOWECQVXCM);
	return QOWECQVXCM;
}







































function OQOQOCBSKK(MazoTrabajo)
{
	var i;
	var Contador=0;
	var QOWECQVXCM=false;
	
	for (i=0;i<=MazoTrabajo.length-1;i++)
	{
		if (MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR)
		{
			Contador++;
		}
	}
	
		
	return Contador;
}





function UIBEMREGDL(SGCSHJVERI,VVRCMEUNOJ)
{
	var i;
	var QOWECQVXCM=false;
	
	//console.log("Longitud FXGSEGRXKC: "+FXGSEGRXKC.length)
	for (i=0;i<=MazoTodas.length-1;i++)
	{
		//console.log(FXGSEGRXKC[i].VVRCMEUNOJ+" "+ FXGSEGRXKC[i].SGCSHJVERI+" "+SGCSHJVERI+" "+VVRCMEUNOJ)
		if (MazoTodas[i].VVRCMEUNOJ==VVRCMEUNOJ && MazoTodas[i].SGCSHJVERI==SGCSHJVERI)
		{
			QOWECQVXCM=MazoTodas[i].UUOPKETETA;
			//console.log("¡carta encontrada!")
			//console.log("¡carta encontrada! "+QOWECQVXCM)
			break;
		}
	}
	
	return QOWECQVXCM;
}

function TraducePorID(id)
{
	var i;
	var QOWECQVXCM=false;
	console.log("Traduciendo..."+id)
	for (i=0;i<=MazoTodas.length-1;i++)
	{
		if (MazoTodas[i].UUOPKETETA==id)
		{
			QOWECQVXCM=MazoTodas[i].valorTexto;
			break;
		}
	}
	
	return QOWECQVXCM;
}

function PuntuacionPorID(id)
{
	var i;
	var QOWECQVXCM=false;
	//console.log("Traduciendo..."+id)
	for (i=0;i<=MazoTodas.length-1;i++)
	{
		if (MazoTodas[i].UUOPKETETA==id)
		{
			QOWECQVXCM=MazoTodas[i].WQCPJQWFPN;
			break;
		}
	}
	
	return QOWECQVXCM;
}

function PeligroCante40(UHTPGPRUJA,MazoTrabajo)
{
	return	ArrayCambioCarta.length>0 &&
		( ArrayCambioCarta[0].VVRCMEUNOJ==9 || ArrayCambioCarta[0].VVRCMEUNOJ==10) && UDUUDUDDJJ(UHTPGPRUJA,  ArrayCambioCarta[0].RRWWKUVRLD)==false
		&& !(TengoEstaCarta(MazoTrabajo, 9, TGTQPBEQFR) || TengoEstaCarta(MazoTrabajo, 10, TGTQPBEQFR) ) 
		&& !HaSalido(TGTQPBEQFR,9)==true
		&& !HaSalido(TGTQPBEQFR,10)==true	
		&&  SRFFTPLVMJ(TGTQPBEQFR)==false
}

function ContinuarArrastrando(UHTPGPRUJA, MazoTrabajo, NBOOATHXUG)
{
	var QOWECQVXCM=false;
	var RondaConTriunfo=0
	var i;
	var RevisaRonda=0;
	
	for (i=ArrayRevisaArrastre.length-1;i>=0;i--)
	{
		if ( UDUUDUDDJJ(UHTPGPRUJA, ArrayRevisaArrastre[i].SSUNXNEEHN ) )
		{
			RevisaRonda=ArrayRevisaArrastre[i].AGTXFNIKQD
			break;
		}
	}
	
	if (RevisaRonda!=0)
	{
		for (i=ArrayRondaGanada.length-1;i>=0;i--)
		{
			if (ArrayRondaGanada[i].AGTXFNIKQD==RevisaRonda && UDUUDUDDJJ(UHTPGPRUJA, ArrayRondaGanada[i].SSUNXNEEHN))
			{
				console.log("CONTINUA")
				QOWECQVXCM=true;
				break;
			}
		}
	}
	else
	{
		QOWECQVXCM=true;
	}
	
	
	/*if (LUCRWXJMDR==5)
	{
		QOWECQVXCM=true;
	}
	else
	{
		
		if (PeligroCante40(UHTPGPRUJA,MazoTrabajo))
		{
			QOWECQVXCM=true;
		}
			
		if ( SRFFTPLVMJ(TGTQPBEQFR)==true && UDUUDUDDJJ(UHTPGPRUJA, QuienHaCantado(TGTQPBEQFR))==false &&  !HaSalido(TGTQPBEQFR,9)==true
			&& !HaSalido(TGTQPBEQFR,10)==true	 )
		{
			QOWECQVXCM=true;
		}
	
		for (i=MazoCartasSalidas.length-1;i>=0;i--)
		{
			if (MazoCartasSalidas[i].jugador==UHTPGPRUJA)
			{
				
				if (MazoCartasSalidas[i].AGTXFNIKQD>=5 && MazoCartasSalidas[i].AGTXFNIKQD<NBOOATHXUG && MazoCartasSalidas[i].NPYBJSHIFL==1 &&  MazoCartasSalidas[i].SGCSHJVERI==TGTQPBEQFR)
				{
					RondaConTriunfo=MazoCartasSalidas[i].AGTXFNIKQD
					break;					
				}
			}
		}
		
		if (RondaConTriunfo!=0)
		{
			for (i=MazoCartasSalidas.length-1;i>=0;i--)
			{
				if (MazoCartasSalidas[i].AGTXFNIKQD==RondaConTriunfo && MazoCartasSalidas[i].NPYBJSHIFL==3 &&  MazoCartasSalidas[i].SGCSHJVERI==TGTQPBEQFR)
				{
					QOWECQVXCM=true;
				}
			}
		}
	
	}*/
	
	return QOWECQVXCM;
}

/////////////////

function IA_Idas(RondaQueMueve,SGEGEGEGEW,BMITYYFCGC,UHTPGPRUJA, MGYJHGHWGC)
{
var NJGFWACAPY=false;
var i;
				console.log("Tamaño FBSDMRLVEL "+FBSDMRLVEL.length)
				console.log("Valor FBSDMRLVEL "+FBSDMRLVEL[0].VVRCMEUNOJ)
				if ( RondaQueMueve<=4 ) //No es arrastre
				{
					if (SGEGEGEGEW.DCBSNHIVQB>=20)
					{
						if (BMITYYFCGC==3)
						{
							if ([11,12].indexOf( VDKOVQXHON[0].VVRCMEUNOJ  )>=0)
							{
								if (VDKOVQXHON[0].SGCSHJVERI==TGTQPBEQFR)
								{
									if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA))
									{
										NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
										console.log(TraducePorID(NJGFWACAPY)+ " 1.1.1.1.1")
									}
									else
									{
										NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
										console.log(TraducePorID(NJGFWACAPY)+ " 1.1.1.1.2")
									}
								}
								else
								{
									NJGFWACAPY=MatarMejorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,12,true,false, SGEGEGEGEW)		
									console.log(TraducePorID(NJGFWACAPY)+ " 1.1.1.2.1")								
								}
							}
							else
							{
								//Nunca se puede dar
							}
						}
						
						if (BMITYYFCGC==4)
						{
							if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA))
							{
								 NJGFWACAPY=Cargar(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
								 console.log(TraducePorID(NJGFWACAPY)+ " 1.1.2.1")		
							}
							else
							{
								 NJGFWACAPY=MatarSinTriunfo(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW,0)
								 if (NJGFWACAPY!=false)
								 {
									console.log(TraducePorID(NJGFWACAPY)+ " 1.1.2.2")		
								 }
								 else
								 {
									  NJGFWACAPY=MatarPeorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,true,false, SGEGEGEGEW)		
									  console.log(TraducePorID(NJGFWACAPY)+ " 1.1.2.3")		
								 }
								 
								 
							}
							
						}
						
					}

					if (NJGFWACAPY==false && SGEGEGEGEW.DCBSNHIVQB>=10 && HayGuinoteEnMesa()) //1.2
					{
						if(LUCRWXJMDR==4)
						{
							if (VDKOVQXHON[0].SGCSHJVERI!=TGTQPBEQFR && VDKOVQXHON[0].VVRCMEUNOJ==11 && TengoEstaCarta(MGYJHGHWGC,12,VDKOVQXHON[0].SGCSHJVERI))
							{
								NJGFWACAPY=MatarSinTriunfo(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW, 0)
								if (NJGFWACAPY==false)
								{
									console.log(TraducePorID(NJGFWACAPY)+ " 1.2.1.1")		
								}
							}
							
							if (NJGFWACAPY==false)
							{
								if (VDKOVQXHON[0].SGCSHJVERI==TGTQPBEQFR && VDKOVQXHON[0].VVRCMEUNOJ==11 && TengoEstaCarta(MGYJHGHWGC,12,VDKOVQXHON[0].SGCSHJVERI))
								{
									NJGFWACAPY=MatarMejorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,12,true,false, SGEGEGEGEW)	
									if (NJGFWACAPY==false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " 1.2.1.1 bis")		
									}
								}							
							}
							
							if (NJGFWACAPY==false)
							{
								NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
								console.log(TraducePorID(NJGFWACAPY)+ " 1.2.1.2")		
							}
						}
						else
						{
							if(LUCRWXJMDR<=3)
							{
								if (BMITYYFCGC==2)
								{
									if (VDKOVQXHON[0].SGCSHJVERI!=TGTQPBEQFR)
									{
										if ( EVAILWGGKX==false || (SGEGEGEGEW.MarcadorRevisarNuestro<=70 && EVAILWGGKX==true) )
										{
											NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
											if (NJGFWACAPY==false)
											{
												console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.1.1")		
											}
										}
										
										if (NJGFWACAPY==false)
										{
											NJGFWACAPY=MatarPeorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,false,false, SGEGEGEGEW)		
											console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.1.2")		
										}
									}
									else
									{
										NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
										console.log(TraducePorID(NJGFWACAPY)+ " blanca 1.2.2.1.1")		
									}
								}
								if (BMITYYFCGC==3)
								{
									if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA) && VDKOVQXHON[0].SGCSHJVERI==TGTQPBEQFR && VDKOVQXHON[0].VVRCMEUNOJ>=8)
									{
										NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
										console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.2.1")		
									}
									
									if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA) && VDKOVQXHON[0].SGCSHJVERI!=TGTQPBEQFR && VDKOVQXHON[0].VVRCMEUNOJ==12)
									{
										NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
										console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.2.2")		
									}		
									
									if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA) && VDKOVQXHON[0].SGCSHJVERI!=TGTQPBEQFR && VDKOVQXHON[0].VVRCMEUNOJ==11)
									{
										if (HaSalido(VDKOVQXHON[0].SGCSHJVERI,12))
										{
											NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
											console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.2.3")		
										}
										else
										{
											NJGFWACAPY=MatarPeorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,false,false, SGEGEGEGEW)	
											console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.2.3 bis")		
										}
									}										
								
									if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)   && VDKOVQXHON[1].VVRCMEUNOJ>=11)
									{
										if ( VDKOVQXHON[0].SGCSHJVERI==TGTQPBEQFR)
										{
											if (EVAILWGGKX==false)
											{
												NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
												console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.2.4")												
											}
											else
											{
												if (VDKOVQXHON[0].VVRCMEUNOJ<=7)
												{
													NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
													console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.2.4")															
												}
											}
										}
										else
										{
											if (EVAILWGGKX==false)
											{
												NJGFWACAPY=MatarPeorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,false,false, SGEGEGEGEW)	
												console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.2.4 bis")												
											}
											else
											{
												NJGFWACAPY=MatarMejorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,12,false,false, SGEGEGEGEW)		
												console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.2.4 bis2")		
											}
										}										
										
									}
									
									if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA)==false)
									{
										if (EVAILWGGKX==false)
										{
											NJGFWACAPY=MatarPeorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,true,false, SGEGEGEGEW)	
											console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.2.5")			
										}
										else
										{
											NJGFWACAPY=MatarMejorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,12,false,false, SGEGEGEGEW)		
											console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.2.5 bis2")												
										}
									
									}
								
								}
								
								if (BMITYYFCGC==4)
								{
									if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA))
									{
										 NJGFWACAPY=Cargar(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
										 console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.3.1")											
									}
									else
									{
										 NJGFWACAPY=MatarSinTriunfo(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW,0)
										 if (NJGFWACAPY!=false)
										 {
											 console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.3.2")		 
										 }
										 else
										 {
											 if (SGEGEGEGEW.TriunfosEnMesa<2)
											 {
												NJGFWACAPY=MatarPeorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,true,false, SGEGEGEGEW)
												if (NJGFWACAPY!=false)
												{
													console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.3.3")		
												}
											 }
											 else
											 {
												 NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
												 if (NJGFWACAPY!=false)
												 {
													console.log(TraducePorID(NJGFWACAPY)+ " 1.2.2.3.3 blanca")		
												 }
											 }
										 }
									}
								}
							}							
						}
						
						
					}
					
					if (NJGFWACAPY==false && SGEGEGEGEW.BMITYYFCGC==3 && VDKOVQXHON[0].SGCSHJVERI==TGTQPBEQFR && 
						 VDKOVQXHON[0].VVRCMEUNOJ>=8 && VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA) )
					{
						NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
						if (NJGFWACAPY!=false)
						{
							console.log(TraducePorID(NJGFWACAPY)+ " 1.3.1.1")		
						}	
					}
					
					if (NJGFWACAPY==false && SGEGEGEGEW.DCBSNHIVQB<=9 || (SGEGEGEGEW.DCBSNHIVQB>=10 && HayGuinoteEnMesa()==false)) //1.3
					{
						
						if (EVAILWGGKX==true)
						{
							return false;
						}
					
						if (LUCRWXJMDR==4)
						{
							if (BMITYYFCGC==1)
							{
								NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
								if (NJGFWACAPY!=false)
								{
									console.log(TraducePorID(NJGFWACAPY)+ " 1.4.1")		
								}
							}
						}
						else
						{
							if (BMITYYFCGC==4)
							{
								if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA))
								{
									NJGFWACAPY=Cargar(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " 1.4.2.1.1")		
									}
								}
							}
							
							if (BMITYYFCGC==3)
							{
								if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA) && VDKOVQXHON[0].SGCSHJVERI==TGTQPBEQFR)
								{
									NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " 1.4.2.2.1.1")		
									}
								}
							}
							
							if (NJGFWACAPY==false)
							{
								NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
								if (NJGFWACAPY!=false)
								{
									console.log(TraducePorID(NJGFWACAPY)+ " 1.4.3")		
								}
							}
						}
					}
					
					
					
				}
				else //Es arrastre
				{
					if (EVAILWGGKX==true)
					{
						return false;
					}
					
					if (LUCRWXJMDR>=5)
					{
						if (BMITYYFCGC==1)
						{
							console.log("Esta cantado "+ SRFFTPLVMJ(TGTQPBEQFR))
							console.log("Quien "+ QuienHaCantado(TGTQPBEQFR))
							console.log("Escompi "+ UDUUDUDDJJ(UHTPGPRUJA, QuienHaCantado(TGTQPBEQFR)))
							if ( 
							PeligroCante40(UHTPGPRUJA, MGYJHGHWGC)							
							)
							{
								var Mifirme=DevuelveTriunfoFirme(UHTPGPRUJA, MGYJHGHWGC)
								if (Mifirme!=false)
								{
									NJGFWACAPY=Mifirme
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " 2.1.1.1")		
									}
								}
								else
								{
									NJGFWACAPY=TriunfoBajo(MGYJHGHWGC)
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " 2.1.1.1 bis")
									}
								}
							}
							else
							{
								if (SRFFTPLVMJ(TGTQPBEQFR)==true && UDUUDUDDJJ(UHTPGPRUJA, QuienHaCantado(TGTQPBEQFR))==false && MiCompiHaMarcado(UHTPGPRUJA, RondaQueMueve, MGYJHGHWGC)==true)
								{
									NJGFWACAPY=TriunfoBajo(MGYJHGHWGC)
									if (NJGFWACAPY!=false)
									{
										console.log(TraducePorID(NJGFWACAPY)+ " 2.1.1.1 bis2")
									}
								}
								 
								if (NJGFWACAPY==false)
								{
									if (RondaQueMueve>=5 && MiCompiHaMarcado(UHTPGPRUJA,RondaQueMueve, MGYJHGHWGC))
									{
										NJGFWACAPY=TriunfoBajo(MGYJHGHWGC)
										if (NJGFWACAPY!=false)
										{
											console.log(TraducePorID(NJGFWACAPY)+ " 2.1.1.2")		
										}
									}
								}
								
								if (NJGFWACAPY==false )
								{
									if (CuentaFirmes(UHTPGPRUJA, MGYJHGHWGC, "todos")>2 && OQOQOCBSKK(MGYJHGHWGC)>=2)
									{
										NJGFWACAPY=TriunfoBajo(MGYJHGHWGC)
									
										if (NJGFWACAPY==false)
										{
											NJGFWACAPY=DevuelveNoTriunfoFirme(UHTPGPRUJA, MGYJHGHWGC)
											if (NJGFWACAPY!=false)
											{
												console.log(TraducePorID(NJGFWACAPY)+ " 2.1.1.4")	
											}
										}
										else
										{
											console.log(TraducePorID(NJGFWACAPY)+ " 2.1.1.3")	
										}
									}
									else
									{

										NJGFWACAPY=DevuelveNoTriunfoFirme(UHTPGPRUJA, MGYJHGHWGC)
										if (NJGFWACAPY!=false)
										{
											console.log(TraducePorID(NJGFWACAPY)+ " 2.1.1.3 bis")	
										}	
										
									}
								}
							}
						}
						
						if (BMITYYFCGC==2)
						{						
							
							if (VDKOVQXHON[0].SGCSHJVERI!=TGTQPBEQFR)
							{
								NJGFWACAPY=Servir(UHTPGPRUJA,MGYJHGHWGC, VDKOVQXHON[0].SGCSHJVERI, 99,SGEGEGEGEW, true,false)
								if (NJGFWACAPY!=false)
								{
									console.log(TraducePorID(NJGFWACAPY)+ " 2.1.2.1.1")	
								}
								else
								{
									if (VDKOVQXHON[0].VVRCMEUNOJ>=11)
									{
										NJGFWACAPY=Servir(UHTPGPRUJA,MGYJHGHWGC, TGTQPBEQFR, 50,SGEGEGEGEW,false,false)
										if (NJGFWACAPY!=false)
										{
											console.log(TraducePorID(NJGFWACAPY)+ " 2.1.2.1.2")	
										}
										else
										{
											NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
											if (NJGFWACAPY!=false)
											{
												console.log(TraducePorID(NJGFWACAPY)+ " 2.1.2.1.4 bis")	
											}
										}
									}
									else
									{
										NJGFWACAPY=Servir(UHTPGPRUJA,MGYJHGHWGC, TGTQPBEQFR, 0, SGEGEGEGEW, false,false)
										if (NJGFWACAPY!=false)
										{
											console.log(TraducePorID(NJGFWACAPY)+ " 2.1.2.1.3")	
										}
										else									
										{
											NJGFWACAPY=LanzaGuinote(UHTPGPRUJA, MGYJHGHWGC, SGEGEGEGEW)
											if (NJGFWACAPY!=false)
											{
												console.log(TraducePorID(NJGFWACAPY)+ " 2.1.2.1.4")	
											}
										}
									}
								}
							}
						}
						
						if (BMITYYFCGC==3)
						{
							if(VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA))
							{
								if (VDKOVQXHON[0].SGCSHJVERI!=TGTQPBEQFR)
								{
									console.log("PAXBGDCANU en mesa "+SGEGEGEGEW.DCBSNHIVQB)
									if (SGEGEGEGEW.DCBSNHIVQB>=10)
									{
										if (SGEGEGEGEW.DCBSNHIVQB>=20 ) //Aseguro
										{
											NJGFWACAPY=MatarMejorTriunfo(MGYJHGHWGC, UHTPGPRUJA,9,12,true,false, SGEGEGEGEW)	
											if (NJGFWACAPY!=false)
											{
												console.log(TraducePorID(NJGFWACAPY)+ " 2.1.3.1.1.1")	
											}											
										}
										
										if (NJGFWACAPY==false &&  !HaSalido(VDKOVQXHON[0].SGCSHJVERI,12) )
										{
											console.log("intenta servir")
											NJGFWACAPY=Servir(UHTPGPRUJA,MGYJHGHWGC, TGTQPBEQFR, 0, SGEGEGEGEW, false,false)
											if (NJGFWACAPY!=false)
											{
												console.log(TraducePorID(NJGFWACAPY)+ " 2.1.3.1.1.2")	
											}
										}
									}
									
									if (NJGFWACAPY==false && (RondaQueMueve==5 || RondaQueMueve==6))
									{
										if (TengoEstaCarta(MGYJHGHWGC, 12, VDKOVQXHON[0].SGCSHJVERI))
										{
											NJGFWACAPY=UIBEMREGDL(VDKOVQXHON[0].SGCSHJVERI,12)
											console.log(TraducePorID(NJGFWACAPY)+ " 2.1.3.1.1.3")	
										}
									}
									
								}
								else
								{
									if (VDKOVQXHON[0].VVRCMEUNOJ<=7)
									{
										NJGFWACAPY=Servir(UHTPGPRUJA,MGYJHGHWGC, TGTQPBEQFR, 99, SGEGEGEGEW, false,false)
									}
									else
									{
										NJGFWACAPY=Servir(UHTPGPRUJA,MGYJHGHWGC, TGTQPBEQFR, 0, SGEGEGEGEW,false,false)
									}
									
									if (NJGFWACAPY!=false)
									{
										//Me aseguro que sea superior a la de mi compañero. Si no lo es, tiro baja. Es para evitar que si sale de as
										console.log(TraducePorID(NJGFWACAPY)+ " 2.1.3.1.2.1")	
									}
								}
							}
							else
							{
									if (NJGFWACAPY==false && (RondaQueMueve==5 || RondaQueMueve==6) && VDKOVQXHON[0].SGCSHJVERI!=TGTQPBEQFR)
									{
										//if (TengoEstaCarta(MGYJHGHWGC, 12, VDKOVQXHON[0].SGCSHJVERI))
										//{
											//NJGFWACAPY=UIBEMREGDL(VDKOVQXHON[0].SGCSHJVERI,12)
											NJGFWACAPY=MatarSinTriunfo(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW, 11)	
											if (NJGFWACAPY!=false)
											{
												console.log(TraducePorID(NJGFWACAPY)+ " 2.1.3.2.1.1")	
											}										
										//}
									}
									else
									{
										
										if (NJGFWACAPY==false && VDKOVQXHON[0].SGCSHJVERI==TGTQPBEQFR) //Está arrastrando mi compi
										{

											NJGFWACAPY=MatarMejorTriunfo(MGYJHGHWGC, UHTPGPRUJA,0,12,true,false, SGEGEGEGEW)	
											
											if (NJGFWACAPY!=false)
											{
												//Me aseguro que sea superior a la de mi compañero. Si no lo es, tiro baja. Es para evitar que si sale de as
												console.log(TraducePorID(NJGFWACAPY)+ " 2.1.3.2.2.1")	
											}
										}
										
										if (NJGFWACAPY==false)
										{
											NJGFWACAPY=LanzaBlanca(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
											if (NJGFWACAPY!=false)
											{
												console.log(TraducePorID(NJGFWACAPY)+ " 2.1.3.2.2")	 //Mas o menos
											}	
										}
									}
								
							}
						}
						
						if (BMITYYFCGC==4)
						{
							if (VMLEORHBGI(VDKOVQXHON,UHTPGPRUJA))
							{
								NJGFWACAPY=Cargar(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW)
								console.log(TraducePorID(NJGFWACAPY)+ " 2.1.4.1.1.2")		
							}
							else
							{
								NJGFWACAPY=MatarSinTriunfo(MGYJHGHWGC, UHTPGPRUJA, SGEGEGEGEW,0)
								console.log(TraducePorID(NJGFWACAPY)+ " 2.1.4.2.1")		
							}
						}					
					}
				}
				
				return NJGFWACAPY;
}
