DMLCWWNWRP=function()
{ 
//alert('Se mete en tapete');
//alert('Creo tapete '+NHLRWTHYVG);

	try
	{
		JBXCGDTWYW.visible=false;
		if (EGPDVIEJEL==true)
		{
			MensajeEsperandoListos();
		}
		//JBXCGDTWYW.destroy();
		log(true,"Se destuye. Recibida");
	}
	catch(e){
		log(true,"No se destuye. Recibida");
	}
//alert(NHLRWTHYVG+" "+VKYLOUGFGR);
 if ( NHLRWTHYVG==true && VKYLOUGFGR==true )
   {
	  
		var key='LEQRGVLYLX';	

		//KVBNWXDTON=null;
		//KVBNWXDTON=YMHIHSNADE.add.tileSprite(0, 0, WAAJJVPHTG, KKMUHEKLOC, key);		
	   	KVBNWXDTON.name = key;
		try
		{
			KVBNWXDTON.loadTexture(key, 0);
		}
		catch(e){
			log(true,"No se pudo cargar el tapete remoto.");
			if (JHJEWHFWNL==false)
			{
				KVBNWXDTON.loadTexture("IRQGAFESIC");
			}
			else
			{
				KVBNWXDTON.loadTexture("Tapete_43");
			}
		}
		RCYRGXLWBR='ReversoRemoto';
   }
   else
   {
	 
		if (JHJEWHFWNL==false)
		{
				var key='IRQGAFESIC';
		}
		else
		{
				var key='Tapete_43';
		}
			
		//KVBNWXDTON=null;	
		//KVBNWXDTON=YMHIHSNADE.add.tileSprite(0, 0, WAAJJVPHTG, KKMUHEKLOC, key);		
	   	KVBNWXDTON.name = key;
		
		try
		{
			KVBNWXDTON.loadTexture(key, 0);
		}
		catch(e){
			log(true,"No se pudo cargar el tapete local.");
			if (JHJEWHFWNL==false)
			{
				KVBNWXDTON.loadTexture("IRQGAFESIC");
			}
			else
			{
				KVBNWXDTON.loadTexture("Tapete_43");
			}
		}
		RCYRGXLWBR='Reverso';
   }
   NHLRWTHYVG=false;
   VKYLOUGFGR=false;
}
   
ETKKAJPFXQ=function(RDBQUAVHEP){
	
	var XSHRPQMEEY;
	var SGCSHJVERI;
	var i;
	var HVCFEWNDRF;

	MYQBNBVHKU=false; //1.0.6
	
	JKLJKLRIRI.visible=false;
	OcultarElegirPareja();
	NKJHKJHHHE.splice(0,1000);	
	CUUKQAGFEB.x=QETACVSHAR;
	CUUKQAGFEB.visible=true;
	FXGSEGRXKC=[];
	WUHRYVMYBE=[];
	EHUHWTYXOS=true;
	OSBTHSJKFW();
	
	log(true,"He repartido yo");
	QSAXUCPASV(); 

	if (EGPDVIEJEL==true)
	{
		inputField.visible=true;
	}


	

	if (EVAILWGGKX==true)
	{
		ATTUXTNNKX.visible=true;
		XQDPVWOUII.visible=true;
		//EABXADHEVT('CLVBGPCTEJ');	
	}
	else
	{
		//EABXADHEVT('JCIRYRCUJJ');		
	}
	

	
	
	DMLCWWNWRP();

   //if (isLoading 
   					/*var TKXPPGUPVV = YMHIHSNADE.time.create(false);
					TKXPPGUPVV.loop(5000, function(){
					//	if (MYQBNBVHKU==true)
					//	{
							//alert("llega");
							
							//New2
							
							//IA(DVNRTQIWGL);
					//	}
						alert("k");
						TKXPPGUPVV.stop();
					});
					TKXPPGUPVV.start();	*/

   //ImagenFondo.key='Tapetea';
   /* [9,10,19,20,29,30,39,40,1,2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,
   21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38]*/
   
   [38,37,36,35,34,33,32,31,28,27,26,25,24,23,22,9,4,17,16,15,14,13,12,11,6,7,21,18,5,3,2,1,40,19,30,29,39,20,10,8].forEach( function(element, index, Array){
//[24,40,36,35,34,33,32,31,28,19,39,20,10,8,30,23,22,9,13,12,11,6,7,21,18,5,3,2,1,27,26,25,4,17,16,15,14,38,37,29].forEach( function(element, index, Array){
   //for (XSHRPQMEEY = 1; XSHRPQMEEY <= 40; XSHRPQMEEY++) { 

		XSHRPQMEEY=element;
		
		if(XSHRPQMEEY<=10){		
				SGCSHJVERI="oros";
				HVCFEWNDRF=XSHRPQMEEY;
		}
		else{
			if(XSHRPQMEEY<=20){
				SGCSHJVERI="copas";
				HVCFEWNDRF=XSHRPQMEEY-10;
			}
			else{
				if(XSHRPQMEEY<=30){
					SGCSHJVERI="espadas";
					HVCFEWNDRF=XSHRPQMEEY-20;
				}
				else{
					SGCSHJVERI="bastos";
					HVCFEWNDRF=XSHRPQMEEY-30;
				}
			}
		}
	
		log(false,SGCSHJVERI);
			

    		FXGSEGRXKC.push(new TVYNYTCQYW(SGCSHJVERI,XSHRPQMEEY,HVCFEWNDRF,null,null,null));
			
    	
    	
	//}
	
   });
	
  FXGSEGRXKC=Phaser.ArrayUtils.shuffle(FXGSEGRXKC);
	
	

	
	for(i=0;i<=FXGSEGRXKC.length-1;i++){
			//log(false,"Longitud "+this.Cartas.length)
			//log(false,this.Cartas[i].EHDWIURHHD);
			
			WUHRYVMYBE.push(new TVYNYTCQYW(FXGSEGRXKC[i].SGCSHJVERI,FXGSEGRXKC[i].UUOPKETETA,FXGSEGRXKC[i].HVCFEWNDRF,null,null));
			//MazoVivo.push(new TVYNYTCQYW(FXGSEGRXKC[i].SGCSHJVERI,FXGSEGRXKC[i].UUOPKETETA,FXGSEGRXKC[i].HVCFEWNDRF,null));
			
			/*WUHRYVMYBE[i].SGCSHJVERI=WUHRYVMYBE[i].SGCSHJVERI;
			WUHRYVMYBE[i].EHDWIURHHD=FXGSEGRXKC[i].EHDWIURHHD;
			WUHRYVMYBE[i].UUOPKETETA=FXGSEGRXKC[i].UUOPKETETA;
			*/
			
			if (HBFBHWJQSQ==false)
			{
				FXGSEGRXKC[i].TNFAGGMKXD = YMHIHSNADE.add.sprite(-100, YMHIHSNADE.world.centerY/2, RCYRGXLWBR);
			}
			else{
				FXGSEGRXKC[i].TNFAGGMKXD = YMHIHSNADE.add.sprite(-100, YMHIHSNADE.world.centerY/2, WUHRYVMYBE[i].UUOPKETETA);
			}
			
			if (JHJEWHFWNL==true)
			{
				FXGSEGRXKC[i].TNFAGGMKXD.width=FXGSEGRXKC[i].TNFAGGMKXD.width*1.2
				FXGSEGRXKC[i].TNFAGGMKXD.height=FXGSEGRXKC[i].TNFAGGMKXD.height*1.2
			}
			
			FXGSEGRXKC[i].TNFAGGMKXD.name=WUHRYVMYBE[i].UUOPKETETA;
			
			GSXGWASLIY.add(FXGSEGRXKC[i].TNFAGGMKXD);
			//FXGSEGRXKC[i].TNFAGGMKXD.bringToTop();
			
			//FXGSEGRXKC[i].TNFAGGMKXD.scale.setTo(0.4,0.4);
			FXGSEGRXKC[i].TNFAGGMKXD.anchor.setTo(0.5, 0.5);
			//FXGSEGRXKC[i].TNFAGGMKXD.x=300;
			//FXGSEGRXKC[i].TNFAGGMKXD.events.onDragStart.add(dragStart);
			//FXGSEGRXKC[i].TNFAGGMKXD.events.onDragStop.add(dragStop);
			FXGSEGRXKC[i].TNFAGGMKXD.events.onDragUpdate.add(dragUpdate);

   
   
			YMHIHSNADE.physics.arcade.enable(FXGSEGRXKC[i].TNFAGGMKXD);

			//////FXGSEGRXKC[i].TNFAGGMKXD.body.collideWorldBounds = true;
			FXGSEGRXKC[i].TNFAGGMKXD.body.velocity.x = 0;
			FXGSEGRXKC[i].TNFAGGMKXD.body.bounce.set(0);
			
			//Borrar
			//FXGSEGRXKC[i].TNFAGGMKXD.inputEnabled = true;
			//FXGSEGRXKC[i].TNFAGGMKXD.input.enableDrag(false,true);
			
			//  Also enable sprite for drag
			//FXGSEGRXKC[i].TNFAGGMKXD.inputEnabled = true;
			//FXGSEGRXKC[i].TNFAGGMKXD.input.enableDrag(false,true);
	}
		
		/*COIVBWRMCC=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.width;
		AltoCarta=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.height;
		SXSHBRJFIR=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.width*QDTCADQEEX;
		AltoCartaEscalado=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.height*QDTCADQEEX;
		PXEBTYBHGS=((YMHIHSNADE.world.height-AltoCarta-AltoCartaEscalado+COIVBWRMCC)/2)+(COIVBWRMCC);*/
		SUMEMLHUFX("D");
		
		NABJPTUWJA(RDBQUAVHEP);
		//console.log("REPARTE "+RDBQUAVHEP)
		if (RDBQUAVHEP==4)
		{
			if (TFSXFTYVGQ==1){
				MYGLJKSQBC();
			}
			if (TFSXFTYVGQ==2){
				RPMTCXIXGA();
			}
			if (TFSXFTYVGQ==3){
				MLSPYKFFCM();
			}
			if (TFSXFTYVGQ==4){
				EUNGWSACEK();
			}
		}
		
		if (RDBQUAVHEP==1)
		{
			if (TFSXFTYVGQ==2){
				MYGLJKSQBC();
			}
			if (TFSXFTYVGQ==3){
				RPMTCXIXGA();
			}
			if (TFSXFTYVGQ==4){
				MLSPYKFFCM();
			}
			if (TFSXFTYVGQ==1){
				EUNGWSACEK();
			}
		}		
		
		if (RDBQUAVHEP==2)
		{
			if (TFSXFTYVGQ==3){
				MYGLJKSQBC();
			}
			if (TFSXFTYVGQ==4){
				RPMTCXIXGA();
			}
			if (TFSXFTYVGQ==1){
				MLSPYKFFCM();
			}
			if (TFSXFTYVGQ==2){
				EUNGWSACEK();
			}
		}				

		if (RDBQUAVHEP==3)
		{
			if (TFSXFTYVGQ==4){
				MYGLJKSQBC();
			}
			if (TFSXFTYVGQ==1){
				RPMTCXIXGA();
			}
			if (TFSXFTYVGQ==2){
				MLSPYKFFCM();
			}
			if (TFSXFTYVGQ==3){
				EUNGWSACEK();
			}
		}				
		
		DVNRTQIWGL=RDBQUAVHEP+1;
		if (DVNRTQIWGL==5)
		{
			DVNRTQIWGL=1
		}
		MuestraTurno();
		//JQSOOBSDDS();
		
		if (EGPDVIEJEL==false)
		{
			MYQBNBVHKU=true;
		}
		else
		{
			JQSOOBSDDS();
		}
	
		
		//JWXRWCVLGC();
		YMHIHSNADE.world.bringToTop(RXKKPILDQT);
		
		log(false,"Soy el "+TFSXFTYVGQ+" y reparte "+RDBQUAVHEP);
		
		
		

		
		
		
		
 };