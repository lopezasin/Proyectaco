﻿function TVYNYTCQYW(FHXIGDTMQS,EHDWIURHHD,HVCFEWNDRF,game,NPYBJSHIFL,jugador,TKWCTNGROU,VMKDXVSQEY) {

	this.SGCSHJVERI=FHXIGDTMQS;
	this.UUOPKETETA=EHDWIURHHD;
    this.HVCFEWNDRF=HVCFEWNDRF;    
	this.TNFAGGMKXD=game;
	this.NPYBJSHIFL=NPYBJSHIFL;
	this.jugador=jugador;
	this.AGTXFNIKQD=TKWCTNGROU; //A priori se usa solo en los buffer.Ojo en el futuro si meto mⳠpar⮥tros en la llamada pq este no lo he rellenado en ning򮠬ado.
	this.VMKDXVSQEY=VMKDXVSQEY;
	
	//this.idCartaNum=EHDWIURHHD
	//this.name=EHDWIURHHD;
	
	/*var XRJIFVUUGG;
	if(TFSXFTYVGQ==1)
	{
		XRJIFVUUGG="A";
	}	
	else
	{
		XRJIFVUUGG="B";		
	}
	
	if (EHDWIURHHD<=9)
	{
		this.UUOPKETETA=XRJIFVUUGG+"0"+EHDWIURHHD.toString();
	}
	else
	{
		this.UUOPKETETA=XRJIFVUUGG+EHDWIURHHD.toString();
	}*/

	
	switch (HVCFEWNDRF){
	
		case 1 :
			this.VVRCMEUNOJ=12;
			this.WQCPJQWFPN=11;
			break;
		case 3 :
			this.VVRCMEUNOJ=11;
			this.WQCPJQWFPN=10;
			break;	
		case 10 :
			this.VVRCMEUNOJ=10;
			this.WQCPJQWFPN=4;
			break;				
		case 9 :
			this.VVRCMEUNOJ=8;
			this.WQCPJQWFPN=2;
			break;	
		case 8 :
			this.VVRCMEUNOJ=9;
			this.WQCPJQWFPN=3;
			break;				
		default :		
			this.VVRCMEUNOJ=HVCFEWNDRF
			this.WQCPJQWFPN=0;
			break;		
	}
	
	

	
 
}

//Se usa para las comprobaciones de Bazas ganadoras.
function UYOMGORTXR(SGCSHJVERI,VVRCMEUNOJ,jugador) { 
	this.SGCSHJVERI=SGCSHJVERI;
	this.VVRCMEUNOJ=VVRCMEUNOJ;
    this.jugador=jugador;
}

SUMEMLHUFX=function(UBWRXKMTQN)
{
	var HVWPIFFCEV;
	var FXGSEGRXKC;
	ETAUVLWEYR.splice(0,1000);
	
	
	//var SXSHBRJFIR=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.width*QDTCADQEEX;
	
	if (UBWRXKMTQN=="D")
	{
		FXGSEGRXKC=AGKVNAGGLB;
	}
	if (UBWRXKMTQN=="U")
	{
		FXGSEGRXKC=TWJONOKGHC;
	}
	if (UBWRXKMTQN=="L")
	{
		FXGSEGRXKC=KNVKGHHTYC;
	}
	if (UBWRXKMTQN=="R")
	{
		FXGSEGRXKC=CBCNHFGWLU;
	}
	
	var HGFPUSYJWG=1;
	
	if (LUCRWXJMDR>5)
	{
		log(false,"INCREIBLE0");
		if (UBWRXKMTQN=="R" || UBWRXKMTQN=="U")
		{
			HVWPIFFCEV=(FXGSEGRXKC.length+1);
			
		}
		else
		{
			HVWPIFFCEV=FXGSEGRXKC.length+1;
			log(false,"INCREIBLE");
		}
	}
	else
	{
		
		if (FXGSEGRXKC.length==0)
		{
			HVWPIFFCEV=6;
		}
		else
		{	
			HVWPIFFCEV=FXGSEGRXKC.length+1;
			if (HVWPIFFCEV==7)
			{
				HVWPIFFCEV=6;
			}
		}
		
	}
	
	//1.0.6
	if (MYQBNBVHKU==false)
	{
		HVWPIFFCEV=6;
	}
	
	
	
	//posicionEspecial Cartas Ultima SRCGCMADME (nunca cambia)
	var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*6)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (0 *(SXSHBRJFIR+ YAJVUBPNNW))
	-(SXSHBRJFIR)-(COIVBWRMCC/2)+30;
	
	var GHTWROCHVV=YMHIHSNADE.world.height-(SXSHBRJFIR)-30;
	
	ETAUVLWEYR.push(new HMNHQKBORK("ULTIMA_Baza",0,NOFEDXHMLS,GHTWROCHVV));
	
	
/*	if 	(DeQuien=="VIYQDHWIAA"){
		NOFEDXHMLS=WIEVLYANFM("D",98)- (SXSHBRJFIR)-(COIVBWRMCC/2);
		GHTWROCHVV=FIGQBSJQGA("D",0);
	}
	else{
		
		NOFEDXHMLS=WIEVLYANFM("ULTIMA_Baza_Rival",0)-(SXSHBRJFIR)-(COIVBWRMCC/2);
		GHTWROCHVV=FIGQBSJQGA("R_0",0)+COIVBWRMCC;
	}*/
	
	

	//var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*6)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (7 *(SXSHBRJFIR+ YAJVUBPNNW))-(SXSHBRJFIR)-(COIVBWRMCC/2);
	
	//var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*6)) )/2)- ((  1   *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG)+COIVBWRMCC;
	var NOFEDXHMLS;
	
	if (EGPDVIEJEL==true)
	{
		NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)  +  COIVBWRMCC )    /2)+      (5 *(COIVBWRMCC+ YAJVUBPNNW))+COIVBWRMCC-(PJRPWGXEYM/2)+
		(COIVBWRMCC*1.5);
	}
	else
	{
		NOFEDXHMLS=YMHIHSNADE.world.width-COIVBWRMCC;
	}
	
	
	var GHTWROCHVV=(COIVBWRMCC);
	
	ETAUVLWEYR.push(new HMNHQKBORK("ULTIMA_Baza_Rival",0,NOFEDXHMLS,GHTWROCHVV));
	
	//var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-    - (YAJVUBPNNW*5)   +  SXSHBRJFIR   (((SXSHBRJFIR/2)*HVWPIFFCEV))  )    /2)+      (0 *((SXSHBRJFIR/2)+ YAJVUBPNNW ));
	var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (0 *(SXSHBRJFIR+ YAJVUBPNNW));
	var GHTWROCHVV=YMHIHSNADE.world.height-SXSHBRJFIR;
	ETAUVLWEYR.push(new HMNHQKBORK("D",0,NOFEDXHMLS,GHTWROCHVV-60));
	
	var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*6)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (0 *(SXSHBRJFIR+ YAJVUBPNNW));
	var GHTWROCHVV=YMHIHSNADE.world.height-SXSHBRJFIR;
	ETAUVLWEYR.push(new HMNHQKBORK("D",98,NOFEDXHMLS,GHTWROCHVV-60));
	
	var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*6)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR )    /2)-(SXSHBRJFIR/2) ;
	var GHTWROCHVV=YMHIHSNADE.world.height-(MKSLYEWQQS*2)-(YAJVUBPNNW/2);
	ETAUVLWEYR.push(new HMNHQKBORK("D_0",0,NOFEDXHMLS,GHTWROCHVV-60));	
	

	//var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-(((SXSHBRJFIR/2)*HVWPIFFCEV))  )/2)+ (1 *((SXSHBRJFIR/2)+ YAJVUBPNNW));
	var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (1 *(SXSHBRJFIR+ YAJVUBPNNW));
	var GHTWROCHVV=YMHIHSNADE.world.height-SXSHBRJFIR;
	ETAUVLWEYR.push(new HMNHQKBORK("D",1,NOFEDXHMLS,GHTWROCHVV-60));
	

	//var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-(((SXSHBRJFIR/2)*HVWPIFFCEV)) )/2)+ (2 *((SXSHBRJFIR/2)+ YAJVUBPNNW));
	var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (2 *(SXSHBRJFIR+ YAJVUBPNNW));
	var GHTWROCHVV=YMHIHSNADE.world.height-SXSHBRJFIR;
	ETAUVLWEYR.push(new HMNHQKBORK("D",2,NOFEDXHMLS,GHTWROCHVV-60));
	
	//var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-(((SXSHBRJFIR/2)*HVWPIFFCEV))   )    /2)+      (3 *((SXSHBRJFIR/2)+ YAJVUBPNNW));
	var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (3 *(SXSHBRJFIR+ YAJVUBPNNW));
	var GHTWROCHVV=YMHIHSNADE.world.height-SXSHBRJFIR;
	ETAUVLWEYR.push(new HMNHQKBORK("D",3,NOFEDXHMLS,GHTWROCHVV-60));

	//var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-(((SXSHBRJFIR/2)*HVWPIFFCEV)) )/2)+ (4 *((SXSHBRJFIR/2)+ YAJVUBPNNW));
	var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (4 *(SXSHBRJFIR+ YAJVUBPNNW));
	var GHTWROCHVV=YMHIHSNADE.world.height-SXSHBRJFIR;
	ETAUVLWEYR.push(new HMNHQKBORK("D",4,NOFEDXHMLS,GHTWROCHVV-60));
	

	//var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-(((SXSHBRJFIR/2)*HVWPIFFCEV)) )/2)+ (5 *((SXSHBRJFIR/2)+ YAJVUBPNNW));
	var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (5 *(SXSHBRJFIR+ YAJVUBPNNW));
	var GHTWROCHVV=YMHIHSNADE.world.height-SXSHBRJFIR;
	ETAUVLWEYR.push(new HMNHQKBORK("D",5,NOFEDXHMLS,GHTWROCHVV-60));	
	
	
	//jojo
	var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*6)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (5 *(SXSHBRJFIR+ YAJVUBPNNW));
	var GHTWROCHVV=YMHIHSNADE.world.height-SXSHBRJFIR;	
	ETAUVLWEYR.push(new HMNHQKBORK("D_5",0,NOFEDXHMLS,GHTWROCHVV-60));	
	
	
	//Robada
	var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((SXSHBRJFIR*6)) - (YAJVUBPNNW*5)  +  SXSHBRJFIR  )    /2)+      (5 *(SXSHBRJFIR+ YAJVUBPNNW));
	var GHTWROCHVV=YMHIHSNADE.world.height-SXSHBRJFIR;
	ETAUVLWEYR.push(new HMNHQKBORK("D",99,NOFEDXHMLS,GHTWROCHVV-60));	



	if (LUCRWXJMDR<=4)	
	{
		var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  COIVBWRMCC  )    /2)+      (5 *(COIVBWRMCC+ YAJVUBPNNW));
	}
	else
	{
		var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  COIVBWRMCC )/2)+ (5 *(COIVBWRMCC+ YAJVUBPNNW))- ( (6-HVWPIFFCEV) *(COIVBWRMCC+ YAJVUBPNNW));
	}
	var GHTWROCHVV=COIVBWRMCC;
	ETAUVLWEYR.push(new HMNHQKBORK("U",0,NOFEDXHMLS,GHTWROCHVV));
	
	
	var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)  +  COIVBWRMCC )    /2)+      (4 *(COIVBWRMCC+ YAJVUBPNNW))+COIVBWRMCC-(PJRPWGXEYM/2);
	var GHTWROCHVV=(COIVBWRMCC*2);
	ETAUVLWEYR.push(new HMNHQKBORK("U_0",0,NOFEDXHMLS,GHTWROCHVV));
	

	
	
	if (LUCRWXJMDR<=4)	
	{	
		var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  COIVBWRMCC )/2)+ (4 *(COIVBWRMCC+ YAJVUBPNNW));
	}
	else
	{
		var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  COIVBWRMCC )/2)+ (4 *(COIVBWRMCC+ YAJVUBPNNW))- ( (6-HVWPIFFCEV) *(COIVBWRMCC+ YAJVUBPNNW));
	}
	var GHTWROCHVV=COIVBWRMCC;
	ETAUVLWEYR.push(new HMNHQKBORK("U",1,NOFEDXHMLS,GHTWROCHVV));
	
	if (LUCRWXJMDR<=4)	
	{
		var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*HVWPIFFCEV)) - (YAJVUBPNNW*5)   +  COIVBWRMCC)/2)+ (3 *(COIVBWRMCC+ YAJVUBPNNW));
	}
	else
	{
		var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  COIVBWRMCC )/2)+ (3 *(COIVBWRMCC+ YAJVUBPNNW))- ( (6-HVWPIFFCEV) *(COIVBWRMCC+ YAJVUBPNNW));
	}
	var GHTWROCHVV=COIVBWRMCC;
	ETAUVLWEYR.push(new HMNHQKBORK("U",2,NOFEDXHMLS,GHTWROCHVV));


	
	/*var NOFEDXHMLS=COIVBWRMCC;
	var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV))   )/2)+ (0 *((COIVBWRMCC/2)+ YAJVUBPNNW));
	ETAUVLWEYR.push(new HMNHQKBORK("L",0,NOFEDXHMLS,GHTWROCHVV));*/
	var NOFEDXHMLS=COIVBWRMCC;
	if (LUCRWXJMDR<=14)
	{	
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  0   *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	}
	else
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  0  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) +  ((  (0+HVWPIFFCEV)  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG)    ;
	}
	ETAUVLWEYR.push(new HMNHQKBORK("L",0,NOFEDXHMLS,GHTWROCHVV))
	

	

	/*var NOFEDXHMLS=COIVBWRMCC;
	var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV))   )/2)+ (1*((COIVBWRMCC/2)+ YAJVUBPNNW));*/
	var NOFEDXHMLS=COIVBWRMCC;
	if (LUCRWXJMDR<=14)
	{	
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  1   *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	}
	else
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  1  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) +  ((  (0+HVWPIFFCEV)  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG)    ;
	}
	ETAUVLWEYR.push(new HMNHQKBORK("L",1,NOFEDXHMLS,GHTWROCHVV));
	

	/*var NOFEDXHMLS=COIVBWRMCC;
	var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV))  )/2)+ (2*((COIVBWRMCC/2)+ YAJVUBPNNW));
	ETAUVLWEYR.push(new HMNHQKBORK("L",2,NOFEDXHMLS,GHTWROCHVV));*/
	var NOFEDXHMLS=COIVBWRMCC;
	if (LUCRWXJMDR<=14)
	{	
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  2   *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	}
	else
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  2  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) +  ((  (0+HVWPIFFCEV)  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG)    ;
	}
	ETAUVLWEYR.push(new HMNHQKBORK("L",2,NOFEDXHMLS,GHTWROCHVV));
	
	var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*6)) )/2)+ ((  2   *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	ETAUVLWEYR.push(new HMNHQKBORK("L_C",0,NOFEDXHMLS,GHTWROCHVV));
	
	
	
vFormulaAjuste=( ((YAJVUBPNNW)*(6-HVWPIFFCEV)))
//vFormulaAjuste=-(COIVBWRMCC+YAJVUBPNNW)

	var NOFEDXHMLS=YMHIHSNADE.world.width-COIVBWRMCC;
	if (LUCRWXJMDR<=4)
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  5  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	}
	else
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  5  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) -  ((  (6-HVWPIFFCEV)  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) -vFormulaAjuste    ;
	}
	
	ETAUVLWEYR.push(new HMNHQKBORK("R",0,NOFEDXHMLS,GHTWROCHVV));
	

	var NOFEDXHMLS=YMHIHSNADE.world.width-COIVBWRMCC;
	
	if (LUCRWXJMDR<=4)
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  4   *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	}
	else
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  4  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) -  ((  (6-HVWPIFFCEV)  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG)  -vFormulaAjuste ;
	}
	ETAUVLWEYR.push(new HMNHQKBORK("R",1,NOFEDXHMLS,GHTWROCHVV));
	


	var NOFEDXHMLS=YMHIHSNADE.world.width-COIVBWRMCC;
	if (LUCRWXJMDR<=4)
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)))/2)+ ((  3    *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	}
	else
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  3  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) -  ((  (6-HVWPIFFCEV)  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) -vFormulaAjuste ;
	}
	ETAUVLWEYR.push(new HMNHQKBORK("R",2,NOFEDXHMLS,GHTWROCHVV));
	
	var NOFEDXHMLS=YMHIHSNADE.world.width-COIVBWRMCC;
	var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*6)))/2)+ ((  3    *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	ETAUVLWEYR.push(new HMNHQKBORK("R_C",0,NOFEDXHMLS,GHTWROCHVV));

	
	if (LUCRWXJMDR<=4)
	{
		var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  COIVBWRMCC  )    /2)+      (2 *(COIVBWRMCC+ YAJVUBPNNW));
	}
	else
	{
		var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  COIVBWRMCC )/2)+ (2 *(COIVBWRMCC+ YAJVUBPNNW))- ( (6-HVWPIFFCEV) *(COIVBWRMCC+ YAJVUBPNNW));
	}
	var GHTWROCHVV=COIVBWRMCC;
	ETAUVLWEYR.push(new HMNHQKBORK("U",3,NOFEDXHMLS,GHTWROCHVV));
	
	if (LUCRWXJMDR<=4)	
	{
		var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  COIVBWRMCC )/2)+ (1 *(COIVBWRMCC+ YAJVUBPNNW));
	}
	else
	{
		var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  COIVBWRMCC )/2)+ (1 *(COIVBWRMCC+ YAJVUBPNNW))- ( (6-HVWPIFFCEV) *(COIVBWRMCC+ YAJVUBPNNW));
	}
	
	var GHTWROCHVV=COIVBWRMCC;
	ETAUVLWEYR.push(new HMNHQKBORK("U",4,NOFEDXHMLS,GHTWROCHVV));

	if (LUCRWXJMDR<=4)	
	{
		var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*HVWPIFFCEV)) - (YAJVUBPNNW*5)   +  COIVBWRMCC)/2)+ (0 *(COIVBWRMCC+ YAJVUBPNNW));
	}
	else
	{
		var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*HVWPIFFCEV)) - (YAJVUBPNNW*5)  +  COIVBWRMCC )/2)+ (0 *(COIVBWRMCC+ YAJVUBPNNW))- ( (6-HVWPIFFCEV) *(COIVBWRMCC+ YAJVUBPNNW));
	}
	var GHTWROCHVV=COIVBWRMCC;
	ETAUVLWEYR.push(new HMNHQKBORK("U",5,NOFEDXHMLS,GHTWROCHVV));
	
	//Robada
	var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)   +  COIVBWRMCC)/2)+ (0 *(COIVBWRMCC+ YAJVUBPNNW));
	var GHTWROCHVV=COIVBWRMCC;
	ETAUVLWEYR.push(new HMNHQKBORK("U",99,NOFEDXHMLS,GHTWROCHVV));

	var NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)   +  COIVBWRMCC)/2)+ (0 *(COIVBWRMCC+ YAJVUBPNNW));
	var GHTWROCHVV=COIVBWRMCC;	
	ETAUVLWEYR.push(new HMNHQKBORK("U_C",0,NOFEDXHMLS,GHTWROCHVV));	
	
	/*var NOFEDXHMLS=COIVBWRMCC;
	var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV))   )/2)+ (3 *((COIVBWRMCC/2)+ YAJVUBPNNW));*/
	var NOFEDXHMLS=COIVBWRMCC;
	if (LUCRWXJMDR<=14)
	{	
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  3   *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	}
	else
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  3  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) +  ((  (0+HVWPIFFCEV)  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG)    ;
	}
	ETAUVLWEYR.push(new HMNHQKBORK("L",3,NOFEDXHMLS,GHTWROCHVV));
	

	/*var NOFEDXHMLS=COIVBWRMCC;
	var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV))  )/2)+ (4 *((COIVBWRMCC/2)+ YAJVUBPNNW));*/
	var NOFEDXHMLS=COIVBWRMCC;
	if (LUCRWXJMDR<=14)
	{	
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  4   *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	}
	else
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  4  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) +  ((  (0+HVWPIFFCEV)  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG)    ;
	}
	ETAUVLWEYR.push(new HMNHQKBORK("L",4,NOFEDXHMLS,GHTWROCHVV));
	

	/*var NOFEDXHMLS=COIVBWRMCC;
	var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV))    )/2)+ (5 *((COIVBWRMCC/2)+ YAJVUBPNNW));*/
	var NOFEDXHMLS=COIVBWRMCC;
	if (LUCRWXJMDR<=14)
	{	
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  5   *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	}
	else
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  5  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) +  ((  (0+HVWPIFFCEV)  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG)    ;
	}
	ETAUVLWEYR.push(new HMNHQKBORK("L",5,NOFEDXHMLS,GHTWROCHVV));
	
	
	
	var NOFEDXHMLS=YAJVUBPNNW+5;
	var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*6))    )/2)+ (5 *((COIVBWRMCC/2)+ YAJVUBPNNW))+(COIVBWRMCC/2)+(YAJVUBPNNW);
	ETAUVLWEYR.push(new HMNHQKBORK("L_0",0,NOFEDXHMLS,GHTWROCHVV));
	
	//Robada
	var NOFEDXHMLS=COIVBWRMCC;
	var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*6))    )/2)+ (5 *((COIVBWRMCC/2)+ YAJVUBPNNW));
	ETAUVLWEYR.push(new HMNHQKBORK("L",99,NOFEDXHMLS,GHTWROCHVV));
	

	

	var NOFEDXHMLS=YMHIHSNADE.world.width-COIVBWRMCC;
	if (LUCRWXJMDR<=4)
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  2    *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	}
	else
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  2  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) -  ((  (6-HVWPIFFCEV)  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) -vFormulaAjuste    ;
	}
	
	ETAUVLWEYR.push(new HMNHQKBORK("R",3,NOFEDXHMLS,GHTWROCHVV));
	
	
	
	var NOFEDXHMLS=YMHIHSNADE.world.width-COIVBWRMCC;
	if (LUCRWXJMDR<=4)
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  1    *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	}
	else
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  1  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) -  ((  (6-HVWPIFFCEV)  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG)   -vFormulaAjuste  ;
	}
	ETAUVLWEYR.push(new HMNHQKBORK("R",4,NOFEDXHMLS,GHTWROCHVV));
	


	var NOFEDXHMLS=YMHIHSNADE.world.width-COIVBWRMCC;
	if (LUCRWXJMDR<=4)
	{	
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  0   *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	}
	else
	{
		var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*HVWPIFFCEV)) )/2)+ ((  0  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) -  ((  (6-HVWPIFFCEV)  *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG) -vFormulaAjuste    ;
	}
	ETAUVLWEYR.push(new HMNHQKBORK("R",5,NOFEDXHMLS,GHTWROCHVV));
	

	//jojo
	var NOFEDXHMLS=YMHIHSNADE.world.width-COIVBWRMCC;
	var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*6)) )/2)+ ((  0   *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	ETAUVLWEYR.push(new HMNHQKBORK("R_5",0,NOFEDXHMLS,GHTWROCHVV));
	
	
	var NOFEDXHMLS=YMHIHSNADE.world.width-(COIVBWRMCC+YAJVUBPNNW)*2;
	var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*6)) )/2)- ((  1   *((COIVBWRMCC/2)+ YAJVUBPNNW))*HGFPUSYJWG);
	ETAUVLWEYR.push(new HMNHQKBORK("R_0",0,NOFEDXHMLS,GHTWROCHVV));
	
	
	
	//Robada
	var NOFEDXHMLS=YMHIHSNADE.world.width-COIVBWRMCC;
	var GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-(((COIVBWRMCC/2)*6)) )/2)+ (0 *((COIVBWRMCC/2)+ YAJVUBPNNW));
	ETAUVLWEYR.push(new HMNHQKBORK("R",99,NOFEDXHMLS,GHTWROCHVV));
	

//////////////////////////////////////////////////////////////////

	
	XIYTYOBTYD();
}


XIYTYOBTYD=function()
{
	VUFCMULFSR=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)  +  COIVBWRMCC )/2)+ (4 *((COIVBWRMCC)));
	QTQIWVWEOI=PXEBTYBHGS+( (COIVBWRMCC))-(COIVBWRMCC/5)-25;
	DDONCKKEVJ=0;
		
	GHGYTYYGNN=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)  +  COIVBWRMCC )/2)+ (4 *(COIVBWRMCC));
	HJGJWOCUMN=PXEBTYBHGS-( (COIVBWRMCC/2))-15;
	NXXLHVGDFY=0;

	IXWMVXRIVW=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)  +  COIVBWRMCC )/2)+ (4 *(COIVBWRMCC))-(COIVBWRMCC)+(COIVBWRMCC/5);
	QFPBRSSRCY=PXEBTYBHGS-10;//+( 1*(COIVBWRMCC+ YAJVUBPNNW));
	MALHKNCITQ=-90;
	//sprite.angle

	HCTVQVJJIB=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)  +  COIVBWRMCC )/2)+ (5 *((COIVBWRMCC)))-(COIVBWRMCC/5);
	IWGTWFENXM=PXEBTYBHGS-10;//+( 1*(COIVBWRMCC+ YAJVUBPNNW));
	WPVNAOXVJH=+90;
}
