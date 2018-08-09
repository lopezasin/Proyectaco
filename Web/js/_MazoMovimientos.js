DibujaTurnos=function()
{
	var x=WIEVLYANFM("U_C",0)-COIVBWRMCC;
	var y=FIGQBSJQGA("U_C",0)+(MKSLYEWQQS/2)+(YAJVUBPNNW);
	var x1;
	var y1;
	var anchoimagen=28;
	
	SUMEMLHUFX("D");
	
	if (JHJEWHFWNL==true)
	{
		y=y+15;
	}
	
	if (UYIUYIUYIU==undefined)
	{
		x1=WIEVLYANFM("D_0",0)+65;
			//x1=WIEVLYANFM("D_5",0)+90;
			if (JHJEWHFWNL==false)
			{
				y1=FIGQBSJQGA("R_5",0)-110;
			}
			else
			{
				y1=FIGQBSJQGA("U_0",0)-50;
				x1=WIEVLYANFM("D_0",0)+95;
			}
				

				
				
		UYIUYIUYIU=YMHIHSNADE.add.image(x,y, 'general','imagen_turno');
		UYIUYIUYIU.width=anchoimagen;
		UYIUYIUYIU.height=anchoimagen;			
		UYIUYIUYIU.anchor.setTo(0.5, 0.5);
		
		UYIUYIUYIU.x=x1;
		UYIUYIUYIU.y=y1;
		
	}		
	
	UYIUYIUYIU.kill();	

	var x=WIEVLYANFM("L_C",0)+COIVBWRMCC;
	var y=FIGQBSJQGA("L_C",0);

	if (JHJEWHFWNL==true)
	{
		x=x+15;
	}
	
	
	if (BNVUWCOWEC==undefined)
	{
		x1=WIEVLYANFM("L_0",0)+40;
			////console.log("1.12");
			
			if (JHJEWHFWNL==false)
			{
				y1=FIGQBSJQGA("L_0",0)+60;
			}
			else
			{
				y1=FIGQBSJQGA("L_0",0)+70;
			}	
		

				
		BNVUWCOWEC=YMHIHSNADE.add.image(x,y, 'general','imagen_turno');
		BNVUWCOWEC.width=anchoimagen;
		BNVUWCOWEC.height=anchoimagen;			
		BNVUWCOWEC.anchor.setTo(0.5, 0.5)
		
		BNVUWCOWEC.x=x1;
		BNVUWCOWEC.y=y1;			
	}		
	
	
	BNVUWCOWEC.kill();

	if (bolsa_dinero==undefined)
	{
		bolsa_dinero=YMHIHSNADE.add.image(YMHIHSNADE.world.width-200 ,60, 'general', 'bolsa_dinero');
		bolsa_dinero.anchor.setTo(0.5, 0.5)
		bolsa_dinero.frameName='bolsa_dinero'
		bolsa_dinero.kill();
	}


	

	
	
	

	
	
	var x=WIEVLYANFM("R_C",0)-COIVBWRMCC;
	var y=FIGQBSJQGA("L_C",0);

	if (JHJEWHFWNL==true)
	{
		x=x-15;
	}
	
	if (GJHWUYGCBN==undefined)
	{
		//GJHWUYGCBN.destroy();
		


		if (JHJEWHFWNL==false)
			{
				x1=WIEVLYANFM("D_5",0)+285; //245
			}
			else
			{
				x1=WIEVLYANFM("R_5",0)-30;
			}
		//	x1=500;
			//if (JHJEWHFWNL==false)
			//{
			y1=FIGQBSJQGA("R_5",0)-110;
		


				
		GJHWUYGCBN=YMHIHSNADE.add.image(x,y, 'general','imagen_turno');
		GJHWUYGCBN.width=anchoimagen;
		GJHWUYGCBN.height=anchoimagen;		
		GJHWUYGCBN.anchor.setTo(0.5, 0.5);
		
		GJHWUYGCBN.x=x1;
		GJHWUYGCBN.y=y1;			
	}		
	
	
	GJHWUYGCBN.kill();
	
	var x=WIEVLYANFM("U_C",0)-COIVBWRMCC;
	var y=YMHIHSNADE.world.height-SXSHBRJFIR-PPLOSJIWHO+(YAJVUBPNNW);

	if (DHJGJHGWCY==undefined)
	{

		
		x1=WIEVLYANFM("D_5",0)+150;
				////console.log("1.4");
				
		if (JHJEWHFWNL==false)
		{
			y1=FIGQBSJQGA("L_0",0)+60;
		}
		else
		{
			x1=WIEVLYANFM("D_5",0)+125;
			y1=FIGQBSJQGA("L_0",0)+70;
		}
				
		DHJGJHGWCY=YMHIHSNADE.add.image(x,y, 'general','imagen_turno');
		DHJGJHGWCY.width=anchoimagen;
		DHJGJHGWCY.height=anchoimagen;
		DHJGJHGWCY.anchor.setTo(0.5, 0.5);
		DHJGJHGWCY.x=x1;
		DHJGJHGWCY.y=y1;

		

	}
	
	
	DHJGJHGWCY.kill();
}


TUYTTXXUSX=function()
{
	//console.log("de");
	if (SNJCSVWFCC()==true)
	{
		if (MQUGCIUQII!=undefined && MQUGCIUQII!=null && XPBCVAGCDQ.length>0)
		{
			var UYEUYIYECB=IEUIUCYUCC("Revisaremos la partida. Â¡Gracias!",40);
			UYEUYIYECB.alpha=1;
			var tw = YMHIHSNADE.add.tween(UYEUYIYECB).to( { alpha: 0 }, 1000, KYFMRVNHIQ, true,1000);
			tw.onComplete.add(function(){
				UYEUYIYECB.kill();
			});
			
			try
			{
			socket.emit('enviar_denuncia',XPBCVAGCDQ[TFSXFTYVGQ-1].OBTBPOULAV, MQUGCIUQII, XPBCVAGCDQ[TFSXFTYVGQ-1].Sala,
			 XPBCVAGCDQ[TFSXFTYVGQ-1].Amigo)
			}
			catch(e){}
		}
	}
}


EnviarGPRD_OK=function()
{
	if (SNJCSVWFCC()==true)
	{
		console.log("Confirma GPRD "+PWMIBRSDCJ[0].OBTBPOULAV);
		try
		{
			socket.emit('confirmar_gprd',PWMIBRSDCJ[0].OBTBPOULAV);
		}
		catch(e){}
	}
}


LHEQVYHCSK=function()
{
	
	
	var JHKSJDHVKJ;
	
	if (LUCRWXJMDR==1 && VDKOVQXHON.length==0)
	{
		JHKSJDHVKJ=GWFPRHAYQK; //ILA 20170128 JHKSJDHVKJ=GWFPRHAYQK; 
	}
	else{
		JHKSJDHVKJ=GWFPRHAYQK;
	}
	
	if (LUCRWXJMDR!=1)
	{
		JHKSJDHVKJ=GWFPRHAYQK; //1.0.9 15 chance ponÃ­a 15 pero creo que mejor dejarlo asi
	}
	
	if (AJFQVFUKAP==true)
	{
		JHKSJDHVKJ=5; //1.0.9 7
	}
	
	if (LUCRWXJMDR==10)
	{
		JHKSJDHVKJ=1; 
	}
	
	if (EGSJHTESLW==true)
	{
		JHKSJDHVKJ=0.2;		
	}
	
	return JHKSJDHVKJ;
}

FReconectando=function(laxo) //2.0.1
{

	if (HMVFLEYPXM.length>0 || REDYBSYSNN.length>0) //2.0.7 Quito DUGDLNBOGK==true || . TambiÃ©n quito || WSHPROHDIV>0 || RLEHYYGBGQ>0 ) || HGMNXSIAPV==false
	{
		return true;
	}
	else
	{
		return false;
	}
	
}
GIDSSFEUNT=function(SinIA)
{
	
	var JHKSJDHVKJ;
	var KKKKSKSSKW=1000;
	var NMBBHJGSXX=false;
	var PLKOPTSHBQ;
	var i;
	var CambioEstado=false;
	
	/*if (BloqueoOrganizador==false)
	{
		CambioEstado=true;
		BloqueoOrganizador=true;
	}
	*/
	console.log("GBROPWPVSK: "+GBROPWPVSK+" FReconectando"+FReconectando())
	if (GBROPWPVSK==false && FReconectando()==false ) //2.0.7 && WSHPROHDIV==0
	{
		KKQJCHKQEP();	
		
		if (FReconectando()==true)
		{
			//console.log("No procede hacer nada");
			return false;
		}
		
		if (EGPDVIEJEL==false)
		{
			if (JHHWEKWEJK==true)
			{
				//console.log("Nueva partida superorganizador");
				if (KYLIAIETHX==false)
				{
					try
					{
						socket.emit("Consola","Nueva partida superorganizador monojugador "+TFSXFTYVGQ);
					}
					catch(e){}
				}
		
				KPQSPDMKJE(DVNRTQIWGL); 
			}
			else
			{
				if (DVNRTQIWGL!=TFSXFTYVGQ)
				{
					NMBBHJGSXX=true;
				}
			}
		}
		else
		{
			
			console.log("JHHWEKWEJK: "+JHHWEKWEJK);
			if (JHHWEKWEJK==true)
			{
				console.log("Nueva partida superorganizador");
				if (KYLIAIETHX==false)
				{
					try
					{
						socket.emit("Consola","Nueva partida superorganizador "+TFSXFTYVGQ);
					}
					catch(e){}
				}
		
				KPQSPDMKJE(DVNRTQIWGL); 
			}
			else
			{
				
				if (DVNRTQIWGL==TFSXFTYVGQ)
				{		
					//console.log("por aqui "+TiempoAntesDesconexion);
					if (HUUCUYFBLW.duration.toFixed(0)==0)
					{
						
						
						
						
						//console.log("Mostrando contador "+EGPDVIEJEL+" "+VEMBUOOHLM+" "+DUGDLNBOGK);
						console.log("entra Mostrando contador "+TiempoAntesDesconexion+" "+SinIA);
						if (TiempoAntesDesconexion>0) //2.0.7
						{
							JHKSJDHVKJ=TiempoAntesDesconexion;
							//TiempoAntesDesconexion=0;
						}
						else
						{
							//TiempoAntesDesconexion=0;
							JHKSJDHVKJ=LHEQVYHCSK();
						}
					
						if (EGSJHTESLW==true)
						{
							KKKKSKSSKW=200;
						}
						
						
						//console.log("Mostrando contador A ");
						


						//console.log("Lo atraviesa");
						log(false,"VECES QUE PONE EL RELOJ")
						var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

						
						//HUUCUYFBLW = YMHIHSNADE.time.create(false);
						HUUCUYFBLW.loop(KKKKSKSSKW, function(){			

							if (DVNRTQIWGL!=TFSXFTYVGQ)
							{
								HUUCUYFBLW.stop();
							}
								
							if (YJNIRPCWEI!=undefined)
							{
								YJNIRPCWEI.revive();
								YJNIRPCWEI.text="";
							}
							
							if (JHKSJDHVKJ>GWFPRHAYQK)
							{
								YJNIRPCWEI.text="";
							}
							else
							{
								
								if (MYQBNBVHKU==true)
								{
									//textoContador2=YMHIHSNADE.add.bitmapText(0, 40, 'MiFuenteAmarilla', 'BitmapText', 44);
									//textoContador2.text="KOO";
									
									
									//VTEVNYKAUB.add(textoContador2);
									//YJNIRPCWEI.revive();
									//console.log(HUUCUYFBLW.duration.toFixed(0));
									YJNIRPCWEI.text="Es mi turno "+JHKSJDHVKJ;
									//YJNIRPCWEI.tint=Phaser.Color.getColor(110,110,110);
									//console.log("DIBUJANDO "+YJNIRPCWEI.text);
									//YMHIHSNADE.world.bringToTop(VTEVNYKAUB);
								}
								
							}

							
							if (JHKSJDHVKJ<=0)
							{
								YJNIRPCWEI.text="";
								YJNIRPCWEI.kill();
								TKXPPGUPVV.stop();
								HUUCUYFBLW.stop();
								//socket.emit("Consola","IA desde 1. Soy el jugador "+TFSXFTYVGQ);
								IA(DVNRTQIWGL,LUCRWXJMDR);
								AJFQVFUKAP=true; //1.0.8	
								TiempoAntesDesconexion=0;
							}
							else
							{
								JHKSJDHVKJ=JHKSJDHVKJ-1;
								TiempoAntesDesconexion=JHKSJDHVKJ;
							}
					
						});				
						HUUCUYFBLW.start();
					}

				}
				else
				{
					//console.log("UHYCGYFWYJ total: "+KYDWXPGHVY.length);
					for (i=0;i<=KYDWXPGHVY.length-1;i++)
					{
						//console.log("XJARYUVBCB "+KYDWXPGHVY[i].SSUNXNEEHN+" "+DVNRTQIWGL+" "+TFSXFTYVGQ+" "+ESKTEXAVHU);	
						if (DVNRTQIWGL==KYDWXPGHVY[i].SSUNXNEEHN && TFSXFTYVGQ==ESKTEXAVHU)
						{
							if (MYQBNBVHKU==true) //2.0.7  && SinIA!=true SinIA. Si viene de recuperar que no lance IA
							{
								NMBBHJGSXX=true;
								/*if (SinIA!=true)
								{
									console.log("Lo siento pero no lanzo IA");
								}*/
								break;					
							}			
						}	
						
					}	
				}
			}
		}
		
		if (NMBBHJGSXX==true)
		{
			//console.log("Entra TKXPPGUPVV "+DVNRTQIWGL+" "+LUCRWXJMDR);
			PLKOPTSHBQ=XNYRSXYRGF(DVNRTQIWGL);
			TKXPPGUPVV.stop();
			TKXPPGUPVV.add(PLKOPTSHBQ, function()
			{		
				TKXPPGUPVV.stop();
				//console.log("IA Dos "+DVNRTQIWGL+" "+LUCRWXJMDR);
				//socket.emit("Consola","IA desde 2. Soy el jugador "+TFSXFTYVGQ);
				IA(DVNRTQIWGL,LUCRWXJMDR);
				//return false;
			}
			);
			TKXPPGUPVV.start();	
		}
	}
	else
	{

		//console.log("RecuperaciÃ³n chunga");
		//OGGWQECXBK("SinClave") //2.0.7 chungo
		
	}
	BloqueoOrganizador=false;
}


EABXADHEVT=function(OTBFIOUAIV)
{	
	var LXGKVFJUFT;
	var lAudioTag=false;
	var SO=""
	var PPOQCOUQCE=false;
	var IQQIXCCBNV=""
	
switch (OTBFIOUAIV)
	{
		case 'WWYKUMYJBJ' :
			IQQIXCCBNV='VKEJRPCHKN';
			//VKEJRPCHKN.play();
			break;

		case 'CVRQKCGIRI' :
			IQQIXCCBNV='LFWPDMQYKH';
			//LFWPDMQYKH.play();
			break;
		
		case 'BNSLLGGORP' :
			IQQIXCCBNV='BHLJBCKLKE';
			//BHLJBCKLKE.play();
			break;	
		
		case 'TKYUFYJRRA' :
			IQQIXCCBNV='SFVDEVFFCR';
			//SFVDEVFFCR.play();
			break;		
		
		case 'LFYAQLIDAI' :
			IQQIXCCBNV='KMBKTLXURD';
			//KMBKTLXURD.play();
			break;		
		
		case 'CEDKIIHEHO' :
			IQQIXCCBNV='UIYIEWUHCI';
			//UIYIEWUHCI.play();
			break;		

		case '_Veinte' :
			IQQIXCCBNV='Snd20';
			//Snd20.play();
			break;						
			
		case 'CPBEWFVQIJ' :
			
			LXGKVFJUFT = Math.floor(Math.random() * 2) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='DPCNHOBNRM';
				//DPCNHOBNRM.play();
			}
			else
			{
				IQQIXCCBNV='GMKJKKAKMH';
				//GMKJKKAKMH.play();
			}

			break;		
			
			
		case 'JCIRYRCUJJ' :
			
			LXGKVFJUFT = Math.floor(Math.random() * 2) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='UHKVCVBOMD';
				//UHKVCVBOMD.play();
			}
			else
			{
				IQQIXCCBNV='JHGVBSHGIW';
				//JHGVBSHGIW.play();
			}
			break;	

		case 'CLVBGPCTEJ' :
			
			LXGKVFJUFT = Math.floor(Math.random() * 2) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='LKGDBLGIEP';
				//LKGDBLGIEP.play();
			}
			else
			{
				IQQIXCCBNV='IUIUOPPWCC';
				//IUIUOPPWCC.play();
			}
			break;	
			
	

		case 'USNAAQWHUY' :
			
			LXGKVFJUFT = Math.floor(Math.random() * 2) + 1  
			
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='KFDIGGAMBI';
				//KFDIGGAMBI.play();
			}
			if (LXGKVFJUFT==2)
			{
				IQQIXCCBNV='MWLXRMDQXK';
				//MWLXRMDQXK.play();
			}
			break;	
			
		
		case 'DNBXXHKKYK' :
			LXGKVFJUFT = Math.floor(Math.random() * 4) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='DPIDINSQVF';
				//DPIDINSQVF.play();
			}
			if (LXGKVFJUFT==2)
			{
				IQQIXCCBNV='NUSHIUSPKE';
				//NUSHIUSPKE.play();
			}					
			break;	
			
		case '_Gafas' :
			LXGKVFJUFT = Math.floor(Math.random() * 3) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='NNXHHWHWWW';
				//DPIDINSQVF.play();
			}
				
			break;				

		case 'JCGKEWDJBQ' :
			
			LXGKVFJUFT = Math.floor(Math.random() * 4) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='NSNSNSWGIU;';
			}	
			else
			{
				IQQIXCCBNV='GERQISACAV';
			}
			//GERQISACAV.play();
			break;		

		case 'CAGCUMKBGA' :
			LXGKVFJUFT = Math.floor(Math.random() * 4) + 1  
			if (LXGKVFJUFT<=3)
			{
				IQQIXCCBNV='TSXDMBDDID';
			}
			else
			{
				IQQIXCCBNV='HJGWHJDGJP';
			}
			//TSXDMBDDID.play();
			break;	

		case 'TSYFNOWESC' :
			IQQIXCCBNV='VLVITFRSLA';
			//VLVITFRSLA.play();
			break;		

		case 'XKBVJQJRBV' :
			LXGKVFJUFT = Math.floor(Math.random() * 10) + 1  
			if (LXGKVFJUFT<=7 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='LSQGNFJBGH';
				//LSQGNFJBGH.play();
				PPOQCOUQCE=true;
			}
			if (LXGKVFJUFT<=8 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='UUUUDJWJAJ';
				//MSJIWCUWCU.play();
				PPOQCOUQCE=true;
			}				
			if (LXGKVFJUFT<=9 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='MSJIWCUWCU';
				//MSJIWCUWCU.play();
				PPOQCOUQCE=true;
			}	
			if (LXGKVFJUFT<=10 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='AZZHJKWPLD';
				//AZZHJKWPLD.play();
				PPOQCOUQCE=true;
			}							
	
			break;		

		case 'LMAYDDUATD' :
			LXGKVFJUFT = Math.floor(Math.random() * 10) + 1  
			if (LXGKVFJUFT<=7  && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='CVJDMGILKI';
				//CVJDMGILKI.play();
				PPOQCOUQCE=true;
			}
			if (LXGKVFJUFT<=8 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='UUUUDJWJAJ';
				//MSJIWCUWCU.play();
				PPOQCOUQCE=true;
			}				
			if (LXGKVFJUFT<=9  && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='MSJIWCUWCU';
				//MSJIWCUWCU.play();
				PPOQCOUQCE=true;
			}	
			if (LXGKVFJUFT<=10  && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='AZZHJKWPLD';
				//AZZHJKWPLD.play();
				PPOQCOUQCE=true;
			}					
		
			break;	

		case 'YURJWRGUNO' :
			
			
			
			if (JVQXQGYDHH==0 && CNCCBHQJKL==1)
			{
				LXGKVFJUFT = Math.floor(Math.random() * 3) + 1  
				
				if (LXGKVFJUFT==1)
				{
					IQQIXCCBNV='HGJCHGAJGC';
					//HGJCHGAJGC.play();
				}
				if (LXGKVFJUFT==2)
				{
					IQQIXCCBNV='VPGBDEHDIT';
					//VPGBDEHDIT.play();
				}
				if (LXGKVFJUFT==3)
				{
					IQQIXCCBNV='NBSMNBHWOW';
					//VPGBDEHDIT.play();
				}				
				PPOQCOUQCE=true;
			}
			
			if (JVQXQGYDHH==0 && CNCCBHQJKL==2)
			{
				IQQIXCCBNV='LOIYUIYIUC';
				//LOIYUIYIUC.play();
				PPOQCOUQCE=true;
			}				
			
			LXGKVFJUFT = Math.floor(Math.random() * 3) + 1  
			
			if (LXGKVFJUFT==1 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='NEKUUPJKUV';
				//NEKUUPJKUV.play();
				PPOQCOUQCE=true;
			}
			if (LXGKVFJUFT==2 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='VPGBDEHDIT';
				//VPGBDEHDIT.play();
				PPOQCOUQCE=true;
			}		
				
			if (LXGKVFJUFT==3  && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='UUYECMNSZZ';
				//UUYECMNSZZ.play();
				PPOQCOUQCE=true;
			}						
							
			break;		

		case 'OTSNYLXEHR' :
			LXGKVFJUFT = Math.floor(Math.random() * 2) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='MIKBDMVLOR';
				//MIKBDMVLOR.play();
			}
			if (LXGKVFJUFT==2)
			{
				IQQIXCCBNV='HKHCMJEIUU';
				//HKHCMJEIUU.play();
			}	
			
			break;	
			
		case '_HayPROS' :
			LXGKVFJUFT = Math.floor(Math.random() * 1) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='UUQGJQGJAM';
				//MIKBDMVLOR.play();
			}
			
			break;		

		case '_HayProfesionales' :
			
			LXGKVFJUFT = Math.floor(Math.random() * 5) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='LWHWUIWHIL';
			}
			break;		
			
			
		case '_Oficio' :
			LXGKVFJUFT = Math.floor(Math.random() * 4) + 1  
			if (LXGKVFJUFT<=2 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='NXHWHHWQQE';
				PPOQCOUQCE=true;
				//MIKBDMVLOR.play();
			}
			if (LXGKVFJUFT==3 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='MIKBDMVLOR';
				PPOQCOUQCE=true;
				//MIKBDMVLOR.play();
			}			
			if (LXGKVFJUFT==4 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='HKHCMJEIUU';
				PPOQCOUQCE=true;
				//HKHCMJEIUU.play();
			}	
			
			break;				

						
		case 'OJJBAIPHEV' :
		
			LXGKVFJUFT = Math.floor(Math.random() * 5) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='JDPOTVNRCT';
				//JDPOTVNRCT.play();
			}
			if (LXGKVFJUFT==2)
			{
				IQQIXCCBNV='UWYIUWJHGS;';
				//JDPOTVNRCT.play();
			}			
			
			break;		

		case '_Ultimas' :
			IQQIXCCBNV='NBIQIUICLA';
			//NBIQIUICLA.play();
			break;	
			
		case '_Grano' :
		
			LXGKVFJUFT = Math.floor(Math.random() * 2) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='JBCWHUIWCW';
				//JBCWHUIWCW.play();
			}				
			break;						
			
		case '_Puntos_menos15' :
		
			LXGKVFJUFT = Math.floor(Math.random() * 7) + 1  

			if (LXGKVFJUFT<=3 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='MSJIWCUWCU';
				//MSJIWCUWCU.play();
				PPOQCOUQCE=true;
			}	
			
			
			if (LXGKVFJUFT<=6 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='UUUUDJWJAJ;';
				//MSJIWCUWCU.play();
				PPOQCOUQCE=true;
			}
			
			if (LXGKVFJUFT<=7 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='AZZHJKWPLD';
				//AZZHJKWPLD.play();
				PPOQCOUQCE=true;
			}						
			break;		

	case '_Puntos_mas15' :
		
			LXGKVFJUFT = Math.floor(Math.random() * 10) + 1  

			if (LXGKVFJUFT<=3 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='MSJIWCUWCU';
				//MSJIWCUWCU.play();
				PPOQCOUQCE=true;
			}	
			
			if (LXGKVFJUFT<=6 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='OOUOIWJDDD';
				//MSJIWCUWCU.play();
				PPOQCOUQCE=true;
			}				
			
			if (LXGKVFJUFT<=9 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='UUUUDJWJAJ;';
				//MSJIWCUWCU.play();
				PPOQCOUQCE=true;
			}
			
			if (LXGKVFJUFT<=10 && PPOQCOUQCE==false)
			{
				IQQIXCCBNV='AZZHJKWPLD';
				//AZZHJKWPLD.play();
				PPOQCOUQCE=true;
			}						
			break;						

		case '_Chatarrero' :
		
			LXGKVFJUFT = Math.floor(Math.random() * 3) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='UIYIUHCWVX';
				//UIYIUHCWVX.play();
			}	
					
			break;	

		case '_Suerte' :
			
			LXGKVFJUFT = Math.floor(Math.random() * 15) + 1  
			//console.log("vRONDA SUERTE "+LUCRWXJMDR+" "+LXGKVFJUFT);
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='AAAAJKGHKC';
				//AAAAJKGHKC.play();
			}	
			if (LXGKVFJUFT==2)
			{
				IQQIXCCBNV='HKJHVUHWUO';
				//HKJHVUHWUO.play();
			}	
			if (LXGKVFJUFT==3)
			{
				IQQIXCCBNV='UIYIUWCHCW';
				//UIYIUWCHCW.play();
			}					
					
			break;	
		
		case '_Escupe' :
		
			LXGKVFJUFT = Math.floor(Math.random() * 2) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='ZZJJJUHIHI';
				//ZZJJJUHIHI.play();
			}						
					
			break;			

		case '_GuinoteOtro' :
		
			LXGKVFJUFT = Math.floor(Math.random() * 1) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='BVUWCEFEGY';
				//BVUWCEFEGY.play();
			}						
					
			break;		

		case '_Faldas' :
		
			LXGKVFJUFT = Math.floor(Math.random() * 2) + 1  
			if (LXGKVFJUFT==1)
			{
				IQQIXCCBNV='LEUSNCUWAA';
				//LEUSNCUWAA.play();
			}						
					
			break;							
	
	}
	
	Reproduce(IQQIXCCBNV);
	

}
	
Reproduce=function(IQQIXCCBNV)
{
	
	var lAudioTag=false;
	var SO=""
	
	if (IQQIXCCBNV!="" && BNCXHHJGVW==true)
	{
		
		lAudioTag=YMHIHSNADE.sound.usingAudioTag;
	
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
			window.plugins.NativeAudio.play(IQQIXCCBNV);
		}
		else
		{
			//console.log("reproduccion "+IQQIXCCBNV);
			try
			{
				eval(IQQIXCCBNV).play();
			}
			catch(e){}
		}
	}
}



CHJKAHKJHC=function()
{
	var i;
	try
	{
		for (i=0;i<=KNVKGHHTYC.length-1;i++)
		{
			XNFDNBQFUA(KNVKGHHTYC[i].TNFAGGMKXD);
		}
		for (i=0;i<=CBCNHFGWLU.length-1;i++)
		{
			XNFDNBQFUA(CBCNHFGWLU[i].TNFAGGMKXD);
		}
		for (i=0;i<=TWJONOKGHC.length-1;i++)
		{
			XNFDNBQFUA(TWJONOKGHC[i].TNFAGGMKXD);
		}		
		
	}
	catch(e){}
	
}



QTIPILDEPH=function(sprite,UBWRXKMTQN,SLGKDYQCAY,UHTPGPRUJA,TXLWIIINGQ){
	
	
	////console.log("Entra al tablero "+MYQBNBVHKU);
	//raka
	TiempoAntesDesconexion=0; //2.0.7 para que el contador del turno se recalcule
	
	
	if (MYQBNBVHKU==false || LUCRWXJMDR==1)
	{
	//	NUWTGXUUTS(true); // A veces se queda pillado con el tema de las desconexiones. AsÃ­ garantizo que si alguien tira, la partida comienza
	}
	
	if (OTGNMRHTVK()==true && 1==2) // 1.0.9
	{
		//WWAYLOUPUQ(); 
	}
	else
	{
	//Paro el reloj
	//if (UHHXSNXXJK<JLVDFTPUNI && PXGXKDDNFK<JLVDFTPUNI)
	//{
		if (EGPDVIEJEL==true)
		{
			HUUCUYFBLW.stop();
			TKXPPGUPVV.stop();
			YJNIRPCWEI.text="";
		}	

		////console.log("GRR STLEOJDWSU: "+UBWRXKMTQN+" "+UHTPGPRUJA);
		//var s; 
		//PXEBTYBHGS=((YMHIHSNADE.world.height-MKSLYEWQQS-PPLOSJIWHO)/2)+COIVBWRMCC;
		//alert(PXEBTYBHGS+" H"+YMHIHSNADE.world.height+" MKSLYEWQQS "+MKSLYEWQQS+" MKSLYEWQQS Escalado "+PPLOSJIWHO+" Ancho*2"+COIVBWRMCC)
		UOPIKJVEKS.add(sprite);
		SUMEMLHUFX(UBWRXKMTQN);
		if (UBWRXKMTQN=="D"){
			var NOFEDXHMLS=VUFCMULFSR;
			var GHTWROCHVV=QTQIWVWEOI;
			var UYAEIRFYUJ=sprite.angle+DDONCKKEVJ;		
		}
		
		if (UBWRXKMTQN=="U"){
			var NOFEDXHMLS=GHGYTYYGNN;
			var GHTWROCHVV=HJGJWOCUMN;
			var UYAEIRFYUJ=sprite.angle+NXXLHVGDFY;		
		}	
		
		if (UBWRXKMTQN=="L"){
			var NOFEDXHMLS=IXWMVXRIVW;
			var GHTWROCHVV=QFPBRSSRCY;
			var UYAEIRFYUJ=sprite.angle+MALHKNCITQ;	
			
		}	

		if (UBWRXKMTQN=="R"){
			var NOFEDXHMLS=HCTVQVJJIB;
			var GHTWROCHVV=IWGTWFENXM;
			var UYAEIRFYUJ=sprite.angle+WPVNAOXVJH;			
		}	
		
			//log(false,"STLEOJDWSU "+UBWRXKMTQN+" "+NOFEDXHMLS+" "+GHTWROCHVV);
			//log(false,"LUCRWXJMDR para pasar "+SLGKDYQCAY);
			
			
			////console.log("MUEVE AL TABLERO: ACABA DE MOVERSE LA CARTA DE "+UHTPGPRUJA+" sprite: "+sprite.name+" STLEOJDWSU: "+UBWRXKMTQN);
			////console.log("a la NPYBJSHIFL "+NOFEDXHMLS+" "+GHTWROCHVV);
			VRLYJAAHUE(sprite);
			EABXADHEVT('CVRQKCGIRI');
			
			try
			{				
				PQUFIBKJJH = YMHIHSNADE.add.tween(sprite);
				PQUFIBKJJH.to( {x:NOFEDXHMLS
				,y:GHTWROCHVV,
				angle : UYAEIRFYUJ
				}, MDYSFNYPYP, KYFMRVNHIQ,false);		
				PQUFIBKJJH.onComplete.add( function () {
					//CHJKAHKJHC();
					log(true,"MUEVE AL TABLERO: VA A LLAMAR A QUIEN GANA MANO "+UHTPGPRUJA);
				console.log("Acabo de tirar una carta al centro "+sprite.name+" con tarea "+TXLWIIINGQ)
				FRWLTWDFVM(SLGKDYQCAY,UHTPGPRUJA,TXLWIIINGQ); //Truco para poder pasar por parámetro
				
				}  );	

			}
			catch(e)
			{
				////console.log("Error "+e);
			}
			
			if (JHJEWHFWNL==false)
			{
				YMHIHSNADE.add.tween(sprite.scale).to( {x:1,y:1}, IRXOKNWTLV, BSXWFYLCEW,true);
			}
			else
			{
				YMHIHSNADE.add.tween(sprite.scale).to( {x:1.2,y:1.2}, IRXOKNWTLV, BSXWFYLCEW,true);
			}
			
			PQUFIBKJJH.start();
			sprite.bringToTop();
	//}	
		

	}

};


PJAQOVTWWG=function(SLGKDYQCAY,UHTPGPRUJA)
{
	var QOWECQVXCM=false;
	var i;
	var NBOOATHXUG=LUCRWXJMDR;
	var CuentaTiradas=0;
	
	//Nunca vendrÃ¡n rondas pasadas. Solo futuras
	
	if (SLGKDYQCAY!=LUCRWXJMDR)
	{		
		QOWECQVXCM=false; 
	}
	else
	{
			if(UHTPGPRUJA==DVNRTQIWGL) //misma ronda
			{
				QOWECQVXCM=true; 
			}
			else
			{
				QOWECQVXCM=false; 
			}
	}
	
	return QOWECQVXCM;
}




FRWLTWDFVM=function(SLGKDYQCAY,UHTPGPRUJA,TXLWIIINGQ){
	var QJXRLWRPYD;
	var TTJFVWDTMG;
	var ESHLDBNEQI;
	var  JJUORGEQOU;
	var CBKCESMEVY=false;
	var LJKAEXAOJE=0;
	var UPCWNPYAIE;
	var i;
	var MMMCNMNKTP;
	
	if (SLGKDYQCAY==undefined){
		log(true,"LUCRWXJMDR Recibida por mí mismo "+LUCRWXJMDR+" SSUNXNEEHN: "+TFSXFTYVGQ);
		UPCWNPYAIE=LUCRWXJMDR;
		MMMCNMNKTP=TFSXFTYVGQ
	}	
	else{
		log(true,"LUCRWXJMDR Recibida por parámetro "+SLGKDYQCAY+" SSUNXNEEHN: "+UHTPGPRUJA);
		UPCWNPYAIE=SLGKDYQCAY;
		MMMCNMNKTP=UHTPGPRUJA
	}
	
	
	
	//if (1==1)
	if (OTGNMRHTVK()==true && 1==2) //1.0.9
	{
		//WWAYLOUPUQ(); 
	}
	else
	{
	//ape if (HQWFFUCQDR(UPCWNPYAIE,MMMCNMNKTP)==true){
		
		
		
			var WTDTNBNNXE=0;
		
		//1.0.4 23/05/17
		if (VDKOVQXHON.length>0 && EGPDVIEJEL==true)
		{
			//1.0.9 chungoorden VDKOVQXHON.sort(sort_by('VMKDXVSQEY', false, parseFloat));
		}		
			
		
		if (VDKOVQXHON.length>=4 ){
		log(true,"DEBE LIMPIAR MESA");
		TKXPPGUPVV.stop(); //Mucho miedo 29/04/2017
				TLGMUNNDGH=true; //por si cambia el turno que no me deje tirar
				
				UPCWNPYAIE=LUCRWXJMDR;
				//PNVKSWRTOJ++;
				
				if (LUCRWXJMDR==3)
				{
					SVHMCOYULR("Â¡Â¡ de Ãºltimas !!")
					EABXADHEVT("_Ultimas");
				}
			

			
			//1.0.6 Antes borraba mÃ¡s
			//VDKOVQXHON.splice(0,4);
			
			for (i=0;i<=3;i++)
			
			{
				if (i==0){
					QJXRLWRPYD=VDKOVQXHON[i].VVRCMEUNOJ;
					ESHLDBNEQI=VDKOVQXHON[i].SGCSHJVERI;
					TTJFVWDTMG=VDKOVQXHON[i].jugador;
					JJUORGEQOU=VDKOVQXHON[i].TNFAGGMKXD
				}
			
				if ( (VDKOVQXHON[i].VVRCMEUNOJ>QJXRLWRPYD && VDKOVQXHON[i].SGCSHJVERI==ESHLDBNEQI)
					|| (  VDKOVQXHON[i].SGCSHJVERI==TGTQPBEQFR && ESHLDBNEQI!=TGTQPBEQFR )
				)
				{

				QJXRLWRPYD=VDKOVQXHON[i].VVRCMEUNOJ;
				ESHLDBNEQI=VDKOVQXHON[i].SGCSHJVERI;
				TTJFVWDTMG=VDKOVQXHON[i].jugador;
				JJUORGEQOU=VDKOVQXHON[i].TNFAGGMKXD
				
				}
				
				LJKAEXAOJE=LJKAEXAOJE+VDKOVQXHON[i].WQCPJQWFPN

			}
			
			//TTJFVWDTMG=1;
			DVNRTQIWGL=TTJFVWDTMG;
			
			//console.log("Se cambia el turno elegantemente a "+DVNRTQIWGL);
			
			MMMCNMNKTP=DVNRTQIWGL;
			KKQJCHKQEP();
				
			
			log(true,"DVNRTQIWGL VA GANANDO "+DVNRTQIWGL);
			
			if (TFSXFTYVGQ==1){
				if (TTJFVWDTMG==1){
					PPTWRPRLSI=true;
				}
				if (TTJFVWDTMG==2){
					PPTWRPRLSI=false;
				}
				if (TTJFVWDTMG==3){
					PPTWRPRLSI=true;
				}
				if (TTJFVWDTMG==4){
					PPTWRPRLSI=false;
				}			
			}
			if (TFSXFTYVGQ==2){
				if (TTJFVWDTMG==2){
					PPTWRPRLSI=true;
				}
				if (TTJFVWDTMG==3){
					PPTWRPRLSI=false;
				}
				if (TTJFVWDTMG==4){
					PPTWRPRLSI=true;
				}
				if (TTJFVWDTMG==1){
					PPTWRPRLSI=false;
				}			
			}
			if (TFSXFTYVGQ==3){
				if (TTJFVWDTMG==3){
					PPTWRPRLSI=true;
				}
				if (TTJFVWDTMG==4){
					PPTWRPRLSI=false;
				}
				if (TTJFVWDTMG==1){
					PPTWRPRLSI=true;
				}
				if (TTJFVWDTMG==2){
					PPTWRPRLSI=false;
				}			
			}
			if (TFSXFTYVGQ==4){
				if (TTJFVWDTMG==4){
					PPTWRPRLSI=true;
				}
				if (TTJFVWDTMG==1){
					PPTWRPRLSI=false;
				}
				if (TTJFVWDTMG==2){
					PPTWRPRLSI=true;
				}
				if (TTJFVWDTMG==3){
					PPTWRPRLSI=false;
				}			
			}		
			

			var OTGBWFDOND;
			if (PPTWRPRLSI==true){
				OTGBWFDOND=LQJEJOOAPH("N",	LJKAEXAOJE, TXLWIIINGQ);			
			}
			else{
				OTGBWFDOND=LQJEJOOAPH("R",	LJKAEXAOJE, TXLWIIINGQ);	
			}	
			
			log(true,"EXOQTFOAQQ FRWLTWDFVM: "+UHHXSNXXJK+" "+PXGXKDDNFK+" "+OTGBWFDOND);
			
			if (OTGBWFDOND==true)
			{
				
				VRLYJAAHUE(JJUORGEQOU);
				
				//Vibración
				//if (VDKOVQXHON.length==4)
				//{
				//	log(true,"TABAZO "+TTJFVWDTMG+" "+VDKOVQXHON[3].jugador);
				//}
					
				
				if ( (LJKAEXAOJE>=21 && VDKOVQXHON[3].WQCPJQWFPN==11 && TTJFVWDTMG==VDKOVQXHON[3].jugador) )
				{
					//if ((LUCRWXJMDR<3 || LUCRWXJMDR==4) )
					if ((LUCRWXJMDR!=3) )
					{
						if (VDKOVQXHON[3].WQCPJQWFPN==11 && VDKOVQXHON[2].WQCPJQWFPN==10 && VDKOVQXHON[3].SGCSHJVERI==VDKOVQXHON[2].SGCSHJVERI && VDKOVQXHON[2].SGCSHJVERI==TGTQPBEQFR)
						{
							EABXADHEVT("_Oficio");
						}
						else
						{
							EABXADHEVT("OTSNYLXEHR");
						}
					}
					//addquake();
					//if("vibrate" in window.navigator) {

					if (FReconectando(true)==false)
					{
						// define the camera offset for the VHYOFJEDUQ
						var margin = 50;
						// and set the world's bounds according to the given margin
						var x = -margin;
						var y = -margin;
						//var x=0;
						//var y=0;
							
						var w = YMHIHSNADE.world.width + margin * 2;
						var h = YMHIHSNADE.world.height + margin * 2;
						YMHIHSNADE.world.setBounds(x, y, w, h);

						// we make sure camera is at position (0,0)
						YMHIHSNADE.world.camera.position.set(0,0);

						var rumbleOffset = 30;

						// we need to move according to the camera's current position
						var properties = {
						x: YMHIHSNADE.camera.x - rumbleOffset
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

						var VHYOFJEDUQ = YMHIHSNADE.add.tween(YMHIHSNADE.camera)
						.to(properties, duration, ease, autoStart, delay, repeat, yoyo);
					  
						// we're using this line for the example to run indefinitely
						VHYOFJEDUQ.onComplete.addOnce(
							function()
							{
								quakeEnd();
								tw5 = YMHIHSNADE.add.tween(JJUORGEQOU.scale);
								tw5.to( {x:MEPQMUPTEH,y:MEPQMUPTEH}		
								, MDYSFNYPYP, KYFMRVNHIQ,false,PVQFVAAAEY);
								//PQUFIBKJJH.onComplete.add(JFILXLIVJN,this)
									log(false,"¿LAS HARA PEQUEÑAS?");
								tw5.onComplete.add(
									function () {
										JFILXLIVJN(UPCWNPYAIE,MMMCNMNKTP,TXLWIIINGQ); //Truco para poder pasar por parámetro
										JJUORGEQOU.bringToTop();
									}
								);				
								tw5.start();
								
							}

						);

						// let the earthquake begins
						VHYOFJEDUQ.start();

						if(navigator.vibrate) {
							window.navigator.vibrate(300);
						}
					}
					else
					{
						JFILXLIVJN(UPCWNPYAIE,MMMCNMNKTP,TXLWIIINGQ); //Truco para poder pasar por parâ®¥tro
						JJUORGEQOU.bringToTop();
					}

					
					
				}
				else
				{
					var PPOQCOUQCE=false;
					
					 if (TTJFVWDTMG==VDKOVQXHON[3].jugador && VDKOVQXHON[3].WQCPJQWFPN==2 && (LUCRWXJMDR<3 || LUCRWXJMDR==4) && LJKAEXAOJE<=10 )
					 {
						 EABXADHEVT("OJJBAIPHEV");
						 PPOQCOUQCE=true;
					 }
		
					 if (TTJFVWDTMG==VDKOVQXHON[3].jugador && VDKOVQXHON[3].WQCPJQWFPN==11 && (LUCRWXJMDR<3 || LUCRWXJMDR==4) && VDKOVQXHON[3].SGCSHJVERI=="oros" && PPOQCOUQCE==false)
					 {
						 EABXADHEVT("LMAYDDUATD");
						 PPOQCOUQCE=true;
					 }	
					 
					 if (TTJFVWDTMG==VDKOVQXHON[3].jugador && VDKOVQXHON[3].WQCPJQWFPN==11 && (LUCRWXJMDR<3 || LUCRWXJMDR==4) && VDKOVQXHON[3].SGCSHJVERI=="espadas" && PPOQCOUQCE==false)
					 {
						 EABXADHEVT("XKBVJQJRBV");
						 PPOQCOUQCE=true;
					 }		

					 if (TTJFVWDTMG==VDKOVQXHON[3].jugador && VDKOVQXHON[3].WQCPJQWFPN>=10 &&  LJKAEXAOJE<=20  &&  LJKAEXAOJE>11 && (LUCRWXJMDR<3 || LUCRWXJMDR==4) && PPOQCOUQCE==false && EVAILWGGKX==false)
					 {
						 if (LJKAEXAOJE<15)
						 {
							EABXADHEVT("_Puntos_menos15");
						 }
						 else
						 {
							EABXADHEVT("_Puntos_mas15");
						 }
						 PPOQCOUQCE=true;
					 }
					 
					 if (TTJFVWDTMG==VDKOVQXHON[3].jugador && VDKOVQXHON[3].WQCPJQWFPN<10 && LJKAEXAOJE<=14  && (LUCRWXJMDR<3 || LUCRWXJMDR==4)  && PPOQCOUQCE==false && LUCRWXJMDR!=4 && EVAILWGGKX==false)
					 {
						 EABXADHEVT("_Chatarrero");
						 PPOQCOUQCE=true;
					 }			

					 if ( (TTJFVWDTMG==VDKOVQXHON[0].jugador || TTJFVWDTMG==VDKOVQXHON[2].jugador)  && VDKOVQXHON[3].WQCPJQWFPN>=10 && LUCRWXJMDR>=5  && PPOQCOUQCE==false)
					 {
						 EABXADHEVT("_Escupe");
						 PPOQCOUQCE=true;
					 }						 
					 
					if (
					
						(
						(TFSXFTYVGQ==VDKOVQXHON[1].jugador && PPTWRPRLSI==true  && VDKOVQXHON[3].WQCPJQWFPN>=2 && VDKOVQXHON[3].WQCPJQWFPN<=4 &&(LUCRWXJMDR<3 || LUCRWXJMDR==4))
						||
						(TFSXFTYVGQ==VDKOVQXHON[3].jugador && PPTWRPRLSI==true  && VDKOVQXHON[3].WQCPJQWFPN>=2 && VDKOVQXHON[3].WQCPJQWFPN<=4 && (LUCRWXJMDR<3 || LUCRWXJMDR==4))			
						)  && PPOQCOUQCE==false
					)
					{
						EABXADHEVT("_Grano");
						PPOQCOUQCE=true;
					}
					
					  if ((LUCRWXJMDR==2 || LUCRWXJMDR==4)  && PPOQCOUQCE==false)
					 {
						 EABXADHEVT("_Suerte");
						 PPOQCOUQCE=true;
					 }		
				 
					
					tw5 = YMHIHSNADE.add.tween(JJUORGEQOU.scale);
					tw5.to( {x:MEPQMUPTEH,y:MEPQMUPTEH}		
					, MDYSFNYPYP, KYFMRVNHIQ,false,PVQFVAAAEY);
					//PQUFIBKJJH.onComplete.add(JFILXLIVJN,this)
						log(false,"¿LAS HARA PEQUEÑAS?");
					tw5.onComplete.add(
						function () {
							JFILXLIVJN(UPCWNPYAIE,MMMCNMNKTP,TXLWIIINGQ); //Truco para poder pasar por parámetro
							JJUORGEQOU.bringToTop();
						}
					);				
					tw5.start();
					
				}
				
			}
			
		
			
			
			//log(false,"Gana "+TTJFVWDTMG);
			
			
			

			
		}
		else
		{
			
				if (VDKOVQXHON.length>0)
				{
					var PPOQCOUQCE=false;
					log(true,"REAL "+VDKOVQXHON[VDKOVQXHON.length-1].VVRCMEUNOJ+" "+ VDKOVQXHON[VDKOVQXHON.length-1].SGCSHJVERI)
					 if (VDKOVQXHON[VDKOVQXHON.length-1].VVRCMEUNOJ==5 && VDKOVQXHON[VDKOVQXHON.length-1].SGCSHJVERI=="bastos"  && LUCRWXJMDR<=4)
					 {
						 EABXADHEVT("DNBXXHKKYK");
						 PPOQCOUQCE=true;
					 }			
					 
					 if (VDKOVQXHON[VDKOVQXHON.length-1].VVRCMEUNOJ==2 && VDKOVQXHON[VDKOVQXHON.length-1].SGCSHJVERI=="oros"  && LUCRWXJMDR<=4)
					 {
						 EABXADHEVT("_Gafas");
						 PPOQCOUQCE=true;
					 }							 
					 
					 if (VDKOVQXHON.length==2)
					 {
						 if ( VDKOVQXHON[0].WQCPJQWFPN>=10 &&  VDKOVQXHON[0].SGCSHJVERI!=TGTQPBEQFR && VDKOVQXHON[1].WQCPJQWFPN>=10 &&  VDKOVQXHON[1].SGCSHJVERI!=TGTQPBEQFR && LUCRWXJMDR<=4 && PPOQCOUQCE==false)
						 {
							 EABXADHEVT("_GuinoteOtro");
							 PPOQCOUQCE=true;
						 }
					 }	
					 
					  if ( VDKOVQXHON[VDKOVQXHON.length-1].WQCPJQWFPN==2 &&  VDKOVQXHON[VDKOVQXHON.length-1].SGCSHJVERI==TGTQPBEQFR && LUCRWXJMDR>=5 && PPOQCOUQCE==false)
					  {
						  EABXADHEVT("_Faldas");
						  PPOQCOUQCE=true;
					  }
					  

					//else
					//{
						if (VDKOVQXHON.length==1)
						{
							if ( (VDKOVQXHON[0].SGCSHJVERI==TGTQPBEQFR ||  VDKOVQXHON[0].WQCPJQWFPN==11) && LUCRWXJMDR==5)
							{
								EABXADHEVT("USNAAQWHUY");
							}
						}
					//}
				}
				
				
			
				AGLRWERBPD(UPCWNPYAIE); 
				
			
				log(true,"CAMBIO DVNRTQIWGL A" + DVNRTQIWGL);	
			
				if (EGPDVIEJEL==false)
				{
					//log(true,"IA Desde FRWLTWDFVM");


						//console.log("superorganizador desde quienganamano monojugador");
						GIDSSFEUNT();
						/*
						//raka
						var PLKOPTSHBQ=XNYRSXYRGF(DVNRTQIWGL);

						
						TKXPPGUPVV.stop(); //04/17
						TKXPPGUPVV.add(PLKOPTSHBQ, function(){
							TKXPPGUPVV.stop();
							//console.log("IA 1");
							//raka IA(DVNRTQIWGL,false);
						} );
						TKXPPGUPVV.start();		
						*/

						
					//}
				}
				else
				{
				
					console.log("RECUPERA_ Quienganamano");
					OGGWQECXBK(TXLWIIINGQ,false,false);
					//2.0.7 PMMTTJWRVR(TXLWIIINGQ);

					
				}
			
			
			
			//} );
			//timerCalculaTurno.start();
			
			

		

							

		}
		
		//if  (UHTPGPRUJA==TFSXFTYVGQ)
		//{
			IXLQLKYFRI();
		//}
		LMGBDQDXWP();
	
	
		
		
	
	}
	
	//else
	//{
	//	log(true,"No se puede mover para LUCRWXJMDR "+UPCWNPYAIE+" y jugador "+MMMCNMNKTP);
	//}
	
	
	//log(false,"Q INTENTA METER MANO");
	/*////console.log("Desde FRWLTWDFVM")
	HeredandoJugadores(UPCWNPYAIE);*/
	
	
	

}


UEWYIUWIVW=function(JugadorValidar)
{
	
	var i;
	var QOWECQVXCM=true
	for (i=0;i<=KYDWXPGHVY.length-1;i++)
	{
		////console.log("XJARYUVBCB "+ESKTEXAVHU);	
		if (JugadorValidar==KYDWXPGHVY[i].SSUNXNEEHN)
		{
			QOWECQVXCM=false;
			break;
		}
	}
	
	return QOWECQVXCM;
}

XNYRSXYRGF=function(JugadorValidar)
{
	var NEHWUIWGWQ;
	if( UEWYIUWIVW(JugadorValidar)==true )
	{
		if (EGPDVIEJEL==false)
		{
			NEHWUIWGWQ=HLBMKNFUWL;	
		}
		else
		{
			NEHWUIWGWQ=HLBMKNFUWL;	
		}
		
	}
	else
	{
		NEHWUIWGWQ=HLBMKNFUWL;	
	}
	
	if( (VDKOVQXHON.length>=4 || VDKOVQXHON.length>=4) && LUCRWXJMDR<=3)
	{
		NEHWUIWGWQ=NEHWUIWGWQ+2000;
	}
	
	if (EGSJHTESLW==true)
	{
		NEHWUIWGWQ=200;
	}
	//NEHWUIWGWQ=5000;		
	return NEHWUIWGWQ;
}					
					


AGLRWERBPD=function(UPCWNPYAIE){
	
	
	HUUCUYFBLW.stop();
	TKXPPGUPVV.stop();
	
	
	
	
	//1.0.9
	if (DVNRTQIWGL==4){
		DVNRTQIWGL=1;
	}
	else{
		DVNRTQIWGL++;
	}
	//console.log("Se cambia el turno a "+DVNRTQIWGL);
		
	//console.log("Superorganizado desde calculaturno")
	GIDSSFEUNT();		
	KKQJCHKQEP();	
	//raka JWXRWCVLGC(UPCWNPYAIE);
			
}

JFILXLIVJN=function(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ){
	
	var i;
	for (i=0;i<=AGKVNAGGLB.length-1;i++)
	{
		AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
	}
	//for (i=0;i<=VDKOVQXHON.length-1;i++){
		//log(false,"ante de hacerse pequeñas")
		if(VDKOVQXHON.length>=1){
		//log(false,"Se hacen pequeñas")
		VRLYJAAHUE(VDKOVQXHON[0].TNFAGGMKXD);
		VDKOVQXHON[0].TNFAGGMKXD.alpha=1;
		TKXWTMCBFU = YMHIHSNADE.add.tween(VDKOVQXHON[0].TNFAGGMKXD.scale);
		TKXWTMCBFU.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,false,PVQFVAAAEY);
		TKXWTMCBFU.onComplete.add(function(){
			WEFMQSNCOE(TXLWIIINGQ);
			})				
		TKXWTMCBFU.start();					
		}
//}
//EfectosHacerPequenas2=function(){
		if(VDKOVQXHON.length>=2){
		VRLYJAAHUE(VDKOVQXHON[1].TNFAGGMKXD);
		VDKOVQXHON[1].TNFAGGMKXD.alpha=1;
		UEIQAMIDWY = YMHIHSNADE.add.tween(VDKOVQXHON[1].TNFAGGMKXD.scale);
		UEIQAMIDWY.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,false,PVQFVAAAEY);
		UEIQAMIDWY.onComplete.add(function(){
			UCJLIRNXGJ(TXLWIIINGQ);
			})				
		UEIQAMIDWY.start();		
		}
//}
//EfectosHacerPequenas3=function(){
		if(VDKOVQXHON.length>=3){		
		VRLYJAAHUE(VDKOVQXHON[2].TNFAGGMKXD);
		VDKOVQXHON[2].TNFAGGMKXD.alpha=1;
		GCKCAMPPHX = YMHIHSNADE.add.tween(VDKOVQXHON[2].TNFAGGMKXD.scale);
		GCKCAMPPHX.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,false,PVQFVAAAEY);
		GCKCAMPPHX.onComplete.add(function(){
			PGDMTNSUGD(TXLWIIINGQ);
			})				
		GCKCAMPPHX.start();		
		}
//}
//EfectosHacerPequenas4=function(){		
		if(VDKOVQXHON.length>=4){
		//log(false,"Antes de llegar al 4");
		VRLYJAAHUE(VDKOVQXHON[3].TNFAGGMKXD);
		VDKOVQXHON[3].TNFAGGMKXD.alpha=1;
		CFFVTFENDF = YMHIHSNADE.add.tween(VDKOVQXHON[3].TNFAGGMKXD.scale);
		CFFVTFENDF.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,false,PVQFVAAAEY);
		CFFVTFENDF.onComplete.add(//VRHXGWDUTQ,this)		
				function () {
					VRHXGWDUTQ(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ); //Truco para poder pasar por parámetro
				}
		);		
		CFFVTFENDF.start();		
		}
	//}
		
}
//*/

DFCCHCJBNP=function(UPCWNPYAIE,TXLWIIINGQ){


	if (OTGNMRHTVK()==true && 1==2) // 1.0.9
	{
		//WWAYLOUPUQ(); 
	}
	else
	{

		//if (VDKOVQXHON.length>=4){
		
		
			log(false,"Se mete en DFCCHCJBNP");
			////console.log("Acabo de eliminar.."+VDKOVQXHON.length+" registros");
			
			VDKOVQXHON.splice(0,4);
			//console.log("Borro Mazon BPDXTHCDTB "+VDKOVQXHON.length);
			LUCRWXJMDR++;
			//console.log("Cambio ronda a "+LUCRWXJMDR)
			
			////console.log("GIDSSFEUNT desde eliminarmesa")
			//GIDSSFEUNT(); guauu
			//raka JWXRWCVLGC(LUCRWXJMDR); //1.0.9
			//raka KKQJCHKQEP(); //1.0.9
	
			
			

			TLGMUNNDGH=false;

			
			
			console.log("RECUPERA_ Elimina mesa");
			OGGWQECXBK(TXLWIIINGQ,false,false);
			//2.0.7 PMMTTJWRVR(TXLWIIINGQ);


					
			//		}

			//}
			
			if (EGPDVIEJEL==false){
				//log(true,"IA Desde Eliminar de la mesa");
					
					//var TKXPPGUPVV = YMHIHSNADE.time.create(false);//REVISIONTIEMPO
					
					var PLKOPTSHBQ=XNYRSXYRGF(DVNRTQIWGL);
					/*if (PQUFIBKJJH.isRunning==true)
					{
						PLKOPTSHBQ=PLKOPTSHBQ+1500
					}
					else
					{
						////console.log("No corre");
					}*/
						
					////console.log("Tiempo "+PLKOPTSHBQ);
					//var	TKXPPGUPVV = YMHIHSNADE.time.create(false);
					//console.log("superorganizador desde eliminar mesa monojugador");
					GIDSSFEUNT();
					/*
					//raka
					
					TKXPPGUPVV.stop(); //04/17
					TKXPPGUPVV.add(PLKOPTSHBQ, function(){
					TKXPPGUPVV.stop();
					////console.log("IA DESDE eliminar de la mesa");
					//console.log("IA 3");
					//raka IA(DVNRTQIWGL,false);} );
					TKXPPGUPVV.start();
					*/
							
							
				//}
			}
			
			

		//}

		if (EGPDVIEJEL==true)
		{
			//if (TFSXFTYVGQ==1)
			//{
				IXLQLKYFRI();
			//}
		}
		
		//LMGBDQDXWP();
		////console.log("SON VUELTAS "+EVAILWGGKX);
		////console.log("VIYQDHWIAA EXOQTFOAQQ: "+UHHXSNXXJK+" YOBEPVEEMW: "+PXGXKDDNFK+" GANAR: "+JLVDFTPUNI);
		if (EVAILWGGKX==false)
		{
			if (AGKVNAGGLB.length==0 && JHHWEKWEJK==false) //2.0.1 AÃ±ado BKBXOKMUUQ
			{
				//console.log("AGTXFNIKQD finalizada")
				BKBXOKMUUQ(TXLWIIINGQ);
			}
			
			//if (LUCRWXJMDR==2)
			//{
			//	BKBXOKMUUQ();
			//WWAYLOUPUQ();
			//}
		}
		else
		{
			if (UHHXSNXXJK>=JLVDFTPUNI || PXGXKDDNFK>=JLVDFTPUNI)
			{
				//console.log("WWAYLOUPUQ Desde eliminar mesa");
				//NOCREO WWAYLOUPUQ(); 
			}
		}
		
		LMGBDQDXWP();
	}
}


HQWFFUCQDR=function(SLGKDYQCAY,UHTPGPRUJA){
	var HAUSUTNHGI=true
	var i;

		for (i=0;i<=KTBOJTXFEU.length-1;i++){
			if(KTBOJTXFEU[i].AGTXFNIKQD==SLGKDYQCAY && KTBOJTXFEU[i].SSUNXNEEHN==UHTPGPRUJA){
				HAUSUTNHGI=false;
				break;
			}
		}
	
	if (HAUSUTNHGI==true){
		log(true,"Validado correctamente: LUCRWXJMDR "+SLGKDYQCAY+" "+"SSUNXNEEHN "+UHTPGPRUJA);
	/*	if (SLGKDYQCAY==2 && UHTPGPRUJA==1)
		{
			alert("mierder");
		}*/
		KTBOJTXFEU.push(new NQMQGXXHIL(SLGKDYQCAY,UHTPGPRUJA) );
		////console.log("BLOQUEO DESDE SERVER RAPIDO (validando movimietno) "+UHTPGPRUJA+" "+SLGKDYQCAY);
	}
	else{
		log(false,"Validado Incorrectamente: LUCRWXJMDR "+SLGKDYQCAY+" "+"SSUNXNEEHN "+UHTPGPRUJA);
	}
	
	return HAUSUTNHGI;
}


TurnoYaPasado=function(SLGKDYQCAY,UHTPGPRUJA){
	var YaPasado=false;
	var i;

		for (i=0;i<=KTBOJTXFEU.length-1;i++){
			if(KTBOJTXFEU[i].AGTXFNIKQD==SLGKDYQCAY && KTBOJTXFEU[i].SSUNXNEEHN==UHTPGPRUJA){
				YaPasado=true;
				break;
			}
		}
	
	
	return YaPasado;
}
/*ValidaMovimientoJugadorSinActualizar=function(SLGKDYQCAY,UHTPGPRUJA){
	var HAUSUTNHGI=true
	var i;
	
		for (var i=0;i<=KTBOJTXFEU.length-1;i++){
			if(KTBOJTXFEU[i].AGTXFNIKQD==SLGKDYQCAY && KTBOJTXFEU[i].SSUNXNEEHN==UHTPGPRUJA){
				HAUSUTNHGI=false;
				break;
			}
		}
	
	if (HAUSUTNHGI==true){
		log(true,"No quiero actualizar Array: LUCRWXJMDR "+SLGKDYQCAY+" "+"SSUNXNEEHN "+UHTPGPRUJA);
		//KTBOJTXFEU.push(new NQMQGXXHIL(SLGKDYQCAY,UHTPGPRUJA) );
	}
	else{
		log(true,"Validado Incorrectamente 1, pero no pasa nada: LUCRWXJMDR "+SLGKDYQCAY+" "+"SSUNXNEEHN "+UHTPGPRUJA);
	}
	
	return HAUSUTNHGI;
}*/

/*ValidaMovimientoJugadorSinActualizarRapido=function(SLGKDYQCAY,UHTPGPRUJA){
	var HAUSUTNHGI=true
	var i;
	
		for (var i=0;i<=XYXCEMMRDC.length-1;i++){
			if(XYXCEMMRDC[i].AGTXFNIKQD==SLGKDYQCAY && XYXCEMMRDC[i].SSUNXNEEHN==UHTPGPRUJA){
				HAUSUTNHGI=false;
				break;
			}
		}
	
	if (HAUSUTNHGI==true){
		log(true,"No quiero actualizar Array: LUCRWXJMDR "+SLGKDYQCAY+" "+"SSUNXNEEHN "+UHTPGPRUJA);
		//KTBOJTXFEU.push(new NQMQGXXHIL(SLGKDYQCAY,UHTPGPRUJA) );
	}
	else{
		log(true,"Validado Incorrectamente 2, pero no pasa nada: LUCRWXJMDR "+SLGKDYQCAY+" "+"SSUNXNEEHN "+UHTPGPRUJA);
	}
	
	return HAUSUTNHGI;
}*/

/* 2.0.7 No se usaba
OSBTHSJKFW=function(){
	var HAUSUTNHGI=true;
	var i;
	
	//1.0.9 Antes era con TFSXFTYVGQ. Ahora con MQUGCIUQII
	
		for (i=0;i<=DCOXIXEBRJ.length-1;i++){
			if(DCOXIXEBRJ[i]==MQUGCIUQII){
				HAUSUTNHGI=false;
				break;
			}
		}
	
	if (HAUSUTNHGI==true){
	
		DCOXIXEBRJ.push(MQUGCIUQII);
	//	////console.log("BLOQUEO DESDE SERVER RAPIDO (validando movimietno) "+UHTPGPRUJA+" "+SLGKDYQCAY);
	}
	//else{
	//	log(false,"Validado Incorrectamente: LUCRWXJMDR "+SLGKDYQCAY+" "+"SSUNXNEEHN "+UHTPGPRUJA);
	//}
	
	return HAUSUTNHGI;
}
*/
HGFAUFDVDF=function(){
	var HAUSUTNHGI=false;
	var i;
	
	for (i=0;i<=JEHYBALODM.length-1;i++){
		//console.log("ValidaTexto: "+JEHYBALODM[i].MQUGCIUQII+" "+JEHYBALODM[i].estado)
		if(JEHYBALODM[i].MQUGCIUQII==MQUGCIUQII && JEHYBALODM[i].estado==1)
		{
			HAUSUTNHGI=true;
			JEHYBALODM[i].estado=2;
			//break; //2.0.1 para por si acaso hay algÃºn error
		}
	}	

	
	return HAUSUTNHGI;
}

FinalizaTextoPuntuacionJugador=function(){
	var HAUSUTNHGI=false;
	var i;
	
	for (i=0;i<=JEHYBALODM.length-1;i++){
		if(JEHYBALODM[i].MQUGCIUQII==MQUGCIUQII ){ //2.0.1 Para por si acaso ha cambiado el MQUGCIUQII
			console.log("C A M BI O estado a 3")
			JEHYBALODM[i].estado=3;
		}
	}
	
	//return HAUSUTNHGI;
}

CompruebaPartidaFinalizada=function(idPartidaComprobar)
{
	var HAUSUTNHGI=true;
	var i;
	
	//console.log("ID "+MQUGCIUQII);
	
	if (JEHYBALODM.length==0)
	{
		HAUSUTNHGI=true;
	}
	else 
	{
		for (i=0;i<=JEHYBALODM.length-1;i++){
			console.log("estado semaforo "+JEHYBALODM[i].estado);
			if(JEHYBALODM[i].MQUGCIUQII==MQUGCIUQII && (JEHYBALODM[i].estado==1 || JEHYBALODM[i].estado==2 ))
			{
				HAUSUTNHGI=false;
				break;
			}
		}
	}
	
	//console.log("HAUSUTNHGI "+HAUSUTNHGI);
	if (HAUSUTNHGI==true)
	{
		var ObjetoPartida=function(partida,estado)
		{
			this.MQUGCIUQII=partida
			this.estado=estado
		}
	
		
		JEHYBALODM.push( new ObjetoPartida(idPartidaComprobar,1));
		
	}
	
	
	return HAUSUTNHGI;
}


CompruebaPeticionReparto=function(idPartidaComprobar)
{
	var HAUSUTNHGI=false;
	var i;
	
	//console.log("ID "+MQUGCIUQII);
	
	if (JEHYBALODM.length==0)
	{
		HAUSUTNHGI=true;
	}
	else
	{
		for (i=0;i<=JEHYBALODM.length-1;i++){
			//console.log("estado semaforo "+JEHYBALODM[i].estado);
			if(JEHYBALODM[i].MQUGCIUQII==idPartidaComprobar &&  JEHYBALODM[i].estado==3 ){
				JEHYBALODM[i].estado==4
				HAUSUTNHGI=true;
				break;
			}
		}
	}
	
	
	
	
	return HAUSUTNHGI;
}

/* 2.0.6
IGPARKSECH=function(idJugador){
var HAUSUTNHGI=true;
var i;

	for (i=0;i<=BSFNXQXOTD.length-1;i++){
		if(BSFNXQXOTD[i]==idJugador){
			HAUSUTNHGI=false;
			break;
		}
	}
	
	if (HAUSUTNHGI==true){
		log(false,"DKIFYHXLLC Validado correctamente:  "+idJugador);
		BSFNXQXOTD.push(idJugador);
	}
	else{
		log(false,"Ya estaba validado el DKIFYHXLLC "+idJugador);
	}
	
	return HAUSUTNHGI;
}
*/

MazoOBuffer=function(UHTPGPRUJA,SLGKDYQCAY)
{
	var DirectoAlMazo;
	console.log("grrr 7: "+DVNRTQIWGL+" "+UHTPGPRUJA+" "+LUCRWXJMDR+" "+SLGKDYQCAY)
	if (DVNRTQIWGL==UHTPGPRUJA)
	{
		if (LUCRWXJMDR==SLGKDYQCAY)
		{
			if (VDKOVQXHON.length<=3) //2.0.7
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
	}
	else
	{
		DirectoAlMazo=false;
	}
	
	return DirectoAlMazo;
}




RQMTWGKGIA=function(XACEBCSJAB,STLEOJDWSU,SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ){
	var WXYPYAPQQJ=false;
	var SEQJGUOFTO;
	var i;
	var DirectoAlMazo=false;
	var u;
	

	
	for (i=0;i<=XACEBCSJAB.length-1;i++){
		
		if(XACEBCSJAB[i].TNFAGGMKXD.name==SJVCMXWVVI)
		{
			
			console.log("Encuentro la carta ")
			WXYPYAPQQJ=true;
			
			if (VDKOVQXHON.length<=3 &&  MazoOBuffer(UHTPGPRUJA,SLGKDYQCAY)==true  ) //2.0.7 antes ponÃ­a <=4
			{ 
				VDKOVQXHON.push(new TVYNYTCQYW(XACEBCSJAB[i].SGCSHJVERI,XACEBCSJAB[i].UUOPKETETA,XACEBCSJAB[i].HVCFEWNDRF,XACEBCSJAB[i].TNFAGGMKXD,null,UHTPGPRUJA,null,VMKDXVSQEY,XACEBCSJAB[i].MQUGCIUQII));
				
			

				
				GLFVIKHXMD();
				if (VDKOVQXHON.length>0)
				{
					//1.0.9 chungoorden VDKOVQXHON.sort(sort_by('VMKDXVSQEY', false, parseFloat));
				}				
				
				
				log(true,"CREO QUE SE METE AQUI PARA MOVEL AL TABLERO "+UHTPGPRUJA);
				NAYBJTKIKA(XACEBCSJAB[i].TNFAGGMKXD);
				console.log("voy a mover al tablero "+TXLWIIINGQ);
				QTIPILDEPH(XACEBCSJAB[i].TNFAGGMKXD,STLEOJDWSU,SLGKDYQCAY,UHTPGPRUJA,TXLWIIINGQ);
				XACEBCSJAB.splice(i,1);	

				
				
			}
			else
			{

				console.log("pero no puede entrar")
				

				console.log("El mazo o buffer es "+MazoOBuffer(UHTPGPRUJA,SLGKDYQCAY))
				
				
				console.log("El mazo central mide "+VDKOVQXHON.length)
				
				WXYPYAPQQJ=false; //1.0.7
			}
			/*else
			{				
				//console.log("haha"+VDKOVQXHON.length+" "+ MazoOBuffer(UHTPGPRUJA,SLGKDYQCAY)+" "+WSHPROHDIV.length+" "+HMVFLEYPXM.length);
				log(true,"Rellenandoo Buffer pq el FXGSEGRXKC BPDXTHCDTB mide..."+VDKOVQXHON.length+" SSUNXNEEHN "+UHTPGPRUJA+" LUCRWXJMDR "+SLGKDYQCAY);
				
			
				WSHPROHDIV.push(new TVYNYTCQYW(XACEBCSJAB[i].SGCSHJVERI,XACEBCSJAB[i].UUOPKETETA,XACEBCSJAB[i].HVCFEWNDRF,XACEBCSJAB[i].TNFAGGMKXD,null,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY));

				
				log(false,"Rellenandoo Buffer..."+XACEBCSJAB[i].SGCSHJVERI+" "+XACEBCSJAB[i].HVCFEWNDRF);
			}*/
			
		

			break;
		}
	}
	
	console.log("TVYNYTCQYW encontrada "+WXYPYAPQQJ);
	
	
	if (WXYPYAPQQJ==false) //Ya pasÃ³ el turno. Sobra esta tirada
	{
		if (TurnoYaPasado(SLGKDYQCAY,UHTPGPRUJA)==true)
		{
			console.log("RECUPERA_ turno pasado");		
			OGGWQECXBK(TXLWIIINGQ,false,false);
			WXYPYAPQQJ=true;
		}
		
	}
	
	
	
	if (WXYPYAPQQJ==false)
	{
		var	timermanocentro = YMHIHSNADE.time.create(true);
		timermanocentro.add(2000, function()
		{
			console.log("RECUPERA_ organiza mano no encuentro carta");
			DesbloquearID(TXLWIIINGQ);			
			OGGWQECXBK(TXLWIIINGQ,true,false);
		});
		timermanocentro.start();
	}

	
	OROGRNBISW(XACEBCSJAB,STLEOJDWSU)
	
	

	//}
}


OrganizarManoMueveCentroVerifica=function(XACEBCSJAB,STLEOJDWSU,SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ){
	var WXYPYAPQQJ=false;
	var SEQJGUOFTO;
	var i;
	var DirectoAlMazo=false;
	var u;
	var existe=false;

	
	for (i=0;i<=XACEBCSJAB.length-1;i++){
		if(XACEBCSJAB[i].TNFAGGMKXD.name==SJVCMXWVVI)
		{		
			
			//WXYPYAPQQJ=true;
			
			//if (VDKOVQXHON.length<=4 &&  MazoOBuffer(UHTPGPRUJA,SLGKDYQCAY)==true  )
			//{ 
				existe=true;
			//}
		}
	}
	return existe;
}


VPDVSDLPHG=function(UHTPGPRUJA,SJVCMXWVVI,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ){
	////console.log("Mover Centro Ajeno: Soy "+TFSXFTYVGQ+" Mueve "+UHTPGPRUJA+" la carta "+SJVCMXWVVI+" VDKOVQXHON mide: "+VDKOVQXHON.length);
	
	//if (TFSXFTYVGQ!=UHTPGPRUJA){
		//console.log("MUEVO CENTRO AJENO "+UHTPGPRUJA+" "+SJVCMXWVVI);
		console.log("Llego a centro ajeno "+TXLWIIINGQ)
		if(TFSXFTYVGQ==1){
			if (UHTPGPRUJA==1){
				RQMTWGKGIA(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==2){
				RQMTWGKGIA(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==3){
				RQMTWGKGIA(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==4){
				RQMTWGKGIA(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}		
		}

		if(TFSXFTYVGQ==2){
			if (UHTPGPRUJA==2){
				RQMTWGKGIA(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==3){
				RQMTWGKGIA(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==4){
				RQMTWGKGIA(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==1){
				RQMTWGKGIA(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}		
		}

		if(TFSXFTYVGQ==3){
			if (UHTPGPRUJA==3){
				RQMTWGKGIA(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==4){
				RQMTWGKGIA(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==1){
				RQMTWGKGIA(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==2){
				RQMTWGKGIA(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}		
		}
		
		if(TFSXFTYVGQ==4){
			if (UHTPGPRUJA==4){
				RQMTWGKGIA(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==1){
				RQMTWGKGIA(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==2){
				RQMTWGKGIA(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==3){
				RQMTWGKGIA(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}		
		}
		
	//}
	//else
	//{
	//	////console.log("No ABWBCAJRXQ al centro ajeno")
	//}
}

MoverCentroAjenoVerifica=function(UHTPGPRUJA,SJVCMXWVVI,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ){
	////console.log("Mover Centro Ajeno: Soy "+TFSXFTYVGQ+" Mueve "+UHTPGPRUJA+" la carta "+SJVCMXWVVI+" VDKOVQXHON mide: "+VDKOVQXHON.length);
	
	//if (TFSXFTYVGQ!=UHTPGPRUJA){
		//console.log("MUEVO CENTRO AJENO "+UHTPGPRUJA+" "+SJVCMXWVVI);
		var verifica=false;
	
		if(TFSXFTYVGQ==1){
			if (UHTPGPRUJA==1){
				verifica=OrganizarManoMueveCentroVerifica(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==2){
				verifica=OrganizarManoMueveCentroVerifica(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==3){
				verifica=OrganizarManoMueveCentroVerifica(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==4){
				verifica=OrganizarManoMueveCentroVerifica(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}		
		}

		if(TFSXFTYVGQ==2){
			if (UHTPGPRUJA==2){
				verifica=OrganizarManoMueveCentroVerifica(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==3){
				verifica=OrganizarManoMueveCentroVerifica(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==4){
				verifica=OrganizarManoMueveCentroVerifica(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==1){
				verifica=OrganizarManoMueveCentroVerifica(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}		
		}

		if(TFSXFTYVGQ==3){
			if (UHTPGPRUJA==3){
				verifica=OrganizarManoMueveCentroVerifica(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==4){
				verifica=OrganizarManoMueveCentroVerifica(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==1){
				verifica=OrganizarManoMueveCentroVerifica(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==2){
				verifica=OrganizarManoMueveCentroVerifica(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}		
		}
		
		if(TFSXFTYVGQ==4){
			if (UHTPGPRUJA==4){
				verifica=OrganizarManoMueveCentroVerifica(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==1){
				verifica=OrganizarManoMueveCentroVerifica(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==2){
				verifica=OrganizarManoMueveCentroVerifica(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==3){
				verifica=OrganizarManoMueveCentroVerifica(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,TXLWIIINGQ);
			}		
		}
		
		return verifica;
		
	//}
	//else
	//{
	//	////console.log("No ABWBCAJRXQ al centro ajeno")
	//}
}



GLFVIKHXMD=function(){
	var WJBJUSUMHN;
	var i;
	
	WJBJUSUMHN=TFSXFTYVGQ-1;
	if (WJBJUSUMHN==0){
		WJBJUSUMHN=4;
	}
	
	for (i=0;i<=VDKOVQXHON.length-1;i++)
	{
		
		if (VDKOVQXHON[i].jugador==WJBJUSUMHN)
		{
			////console.log("Ocultando");

			//IEQDMBJCAY.loadTexture('Boton_cantar_off', 0); //asd
			//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
			
			//IEQDMBJCAY.frameName= 'cantar gris';		//asd
			//YGTNAODFHW.frameName='cambiar 7 gris';
			
			NMABWIWAAA();
			PAHJCWBNJH();
			
		}	
	}	
}


checkConnection=function() {

	var QOWECQVXCM=true;
	
	var isCordovaApp = document.URL.indexOf('http://') === -1
		&& document.URL.indexOf('https://') === -1;

	//SVHMCOYULR("Chequeando");
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
				QOWECQVXCM=false;
				SVHMCOYULR("Revisa tu conexiÃ³n a internet");
			}

			
		
		}
		catch(e)
		{
			SVHMCOYULR("Error "+e);
		}
	}

	
	return QOWECQVXCM;
	
}
