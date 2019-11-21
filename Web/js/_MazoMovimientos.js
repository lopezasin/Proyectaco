'use strict';

function CambiarUsuario()
{
	//$('#lateral').slideToggle();
	$('#lateral').animate({width: "toggle"});	
	var a=document.getElementById("lblCambiarUsuario") 
	
	a.textContent = "¿Desea cambiar de usuario?";
	var d=document.getElementById('DivCambiarUsuario');
	d.style.display = 'block';
	
}

function RespuestaCambiarUsuario(JSKXXDPSDS)	
{

	
	document.getElementById('DivCambiarUsuario').style.display = 'none';
	
	
	if (JSKXXDPSDS==true)
	{	
		if( window.plugins)	
		{
			window.plugins.googleplus.disconnect(
			function (msg) {
				MITSNADNQS()
			});


			facebookConnectPlugin.logout(MITSNADNQS, MITSNADNQS)
		}
		else
		{
			window.location.href=JHGHJAGCMC+'/logout'
		}
	}
	//document.getElementById('DivCambiarUsuario').display = 'none';
 
}



function onSocketProgresoDesdeServer(bytesRecibidos, bytesEsperados)
{
	
	var elem = document.getElementById("myBar");   
	var width = bytesRecibidos/bytesEsperados;
	
	console.log("Progreso desde Server "+width*100)
	  //var id = setInterval(frame, 10);
	  //function frame() {
	if (width >= 100) {
	  //clearInterval(id);
	} 
	else 
	{
	  //width++; 
	  var recorre=width*100+ '%';
	   console.log("aumentando "+recorre)
	  elem.style.width = recorre; 
	 
	}
	//}
}

/*function ActivaArticulo(Articulo)
{
	
	ArrayCompras.push(new ObjetoCompra(Articulo,Validez) );
	
	switch (Articulo)
	{
		case 'Art001': 
		TiendaCambiarNombre(OBTBPOULAV,Articulo,Precio, NuevoNombre);
		break;
		
		case 'Art002': 
		TiendaCambiarFoto(OBTBPOULAV,Articulo,Precio, NuevaFoto);
		break;								
		
		case 'Art003': 
		
		
		break;
		
		case 'Art004':
		TiendaPreferenciaElegir(OBTBPOULAV,Articulo,Precio);
		break;			

		case 'Art005':
		TiendaEmojis(OBTBPOULAV,Articulo,Precio);
		break;		

										
	}	

}	

*/

function onSocketSaldoInsuficiente(Precio,Gbits, ArrayArticulosTienda)
{
	ArrayArticulosTiendaGlobal=null;
	ArrayArticulosTiendaGlobal=ArrayArticulosTienda.slice();
	document.getElementById("lblSaldoInsuficiente").textContent="No tienes Guiñobits suficientes. ¿Deseas adquirir Guiñobits?"
	MostrarSaldoInsuficiente();
}

function ValidarTodosArticulos()
{
	if (ValidaDisponibilidadArticulo('Art003'))
	{
		GlobalActivaCuentaPalos=true;
	}
	else
	{
		GlobalActivaCuentaPalos=false;
	}
	
	ValidaDisponibilidadArticulo('Art001') //Para caducar los de Tipo EBAPPJFYSW
	ValidaDisponibilidadArticulo('Art002') //Para caducar los de Tipo EBAPPJFYSW
	ValidaDisponibilidadArticulo('Art005') //Para caducar los de Tipo EBAPPJFYSW
	ValidaDisponibilidadArticulo('Art006') //Para caducar los de Tipo EBAPPJFYSW
	ValidaDisponibilidadArticulo('Art007') //Para caducar los de Tipo EBAPPJFYSW
	//ValidaDisponibilidadArticulo('Art008') //Para caducar los de Tipo EBAPPJFYSW
	ValidaDisponibilidadArticulo('Art009') //Para caducar los de Tipo EBAPPJFYSW
	
}			
			
function ValidaDisponibilidadArticulo(Articulo)
{
	var i;
	var Disponibilidad=false;
	var TipoCaducidad; //1 Tiempo, 2 Cotos
	var HayQueRestar=false;
	//var prueba=-5;
	
	if (EGPDVIEJEL==true)
	{
		TipoCaducidad=CalculaCaducidad(Articulo);
		/*switch (Articulo)
		{

			//case 'Art001': //Cambia WWKVHIMWYD
			//TipoCaducidad=1; //EBAPPJFYSW			
			//break;
			
			case 'Art003': //XRUDRJJNSI
			TipoCaducidad=2; //Cotos			
			break;
			
			case 'Art004': //Prioridad Elegir
			TipoCaducidad=2; //Cotos			
			break;			
		}*/
			
		//console.log("Tipo caducidad "+	TipoCaducidad);
		for (i=0;i<=ArrayCompras.length-1;i++)
		{
			if (ArrayCompras[i].Articulo==Articulo)
			{
				Disponibilidad=true;
				
				if (TipoCaducidad==2)
				{
					ArrayCompras[i].ValidezCotos=ArrayCompras[i].ValidezCotos-1;
					HayQueRestar=true
					//prueba=ArrayCompras[i].ValidezCotos;
					if (ArrayCompras[i].ValidezCotos<=0)
					{
						//Disponibilidad=false; que siempre haya disponibilidad. Ya se borrará del array y dejará de tener
						ArrayCompras[i]["Borrar"]=true;
					}
				}
				else
				{
					if (Articulo='Art006')
					{	
						console.log("Validez EBAPPJFYSW "+ArrayCompras[i].ValidezFecha+" ahora son las "+new Date(Date.now()) )
					}
					
					if (ArrayCompras[i].ValidezFecha<=new Date(Date.now()))
					{
						//Disponibilidad=false; que siempre haya disponibilidad. Ya se borrará del array y dejará de tener
						ArrayCompras[i]["Borrar"]=true;
					}					
				}
				break;
			}
		}
		
		
		i=ArrayCompras.length;  
		while (i--)
		{
			if (ArrayCompras[i]["Borrar"]==true)
			{							
				ArrayCompras.splice(i,1);				
			}
		}
		
		
		if (TipoCaducidad==2 && HayQueRestar==true)
		{
			try
			{
				socket.emit('consume_articulo', PWMIBRSDCJ[0].OBTBPOULAV, Articulo);
			}
			catch(e){}
		}			
	}

	
	return Disponibilidad;
}

function IncorporaCompraInfoJugador(ArrayServerCompras)
{
	var i;
	for (i=0;i<=ArrayServerCompras.length-1;i++)
	{
		console.log("Vienen compras del servidor "+ArrayServerCompras[i].Articulo);
		IncorporaCompra(ArrayServerCompras[i]._id_articulo,ArrayServerCompras[i]._precio,ArrayServerCompras[i]._fecha_fin,ArrayServerCompras[i]._validez_cotos)	
	}
}

function IncorporaCompra(Articulo,Precio,ValidezFecha,ValidezCotos)
{
	var i;
	var VEFCIYHBGC=false;
	
	for (i=0;i<=ArrayCompras.length-1;i++)
	{
		if (ArrayCompras[i].Articulo==Articulo)
		{
			VEFCIYHBGC=true;
			break;
		}
	}
	
	if (VEFCIYHBGC==false)
	{
		//console.log("Añado la compra");
		ArrayCompras.push(new ObjetoCompra(Articulo,Precio,ValidezFecha,ValidezCotos) );
	}
	else
	{
		//console.log("NO Añado la compra");
	}



}
	
function appendLeadingZeroes(n){
  if(n <= 9){
    return "0" + n;
  }
  return n
}

function onSocketIncrementoGbitsComprados(GbitsComprados, TXLWIIINGQ)
{
	var RPHWVBBGIM;
	
	YUFGSLAHYS=GbitsComprados;
	//CerrarTienda();
	//OcultarDetalleTienda();
	Renderizar(true);
	JQDGHVJGUW();	
	
	RPHWVBBGIM="¡Producto comprado correctamente!"
	document.getElementById("lblArticuloYaComprado").textContent=RPHWVBBGIM	
	
	OGGWQECXBK(TXLWIIINGQ,false,false);
}

	
function onSocketArticuloComprado(Articulo,Precio,ValidezFecha, ValidezCotos)
{
	var TipoCaducidad;
	var RPHWVBBGIM;
	
	YUFGSLAHYS=-Precio;
	//CerrarTienda();
	//OcultarDetalleTienda();
	Renderizar(true);
	JQDGHVJGUW();
	
	document.getElementById("BotonComprar").disabled=true;
	
	TipoCaducidad=CalculaCaducidad(Articulo);
	if (TipoCaducidad==1)
	{
		var current_datetime = new Date(ValidezFecha) //ValidezFecha;
		var formatted_date = appendLeadingZeroes(current_datetime.getDate()) +'/'+ appendLeadingZeroes(current_datetime.getMonth() + 1) + '/' +current_datetime.getFullYear() + " " + appendLeadingZeroes(current_datetime.getHours()) + ":" + appendLeadingZeroes(current_datetime.getMinutes()) + ":" + appendLeadingZeroes(current_datetime.getSeconds())

		if (Articulo=='Art010')
		{
			RPHWVBBGIM=""
		}	
		else
		{
			RPHWVBBGIM="¡Producto comprado correctamente!. Cambios ilimitados hasta el "+formatted_date;
		}
	}
	else
	{
		RPHWVBBGIM="¡Producto comprado correctamente!. Válido para "+ValidezCotos+ " cotos.";
	}
	



	switch (Articulo)
	{	
		case "Art001":
		document.getElementById("DivCambiaNombre").style.visibility = "visible";
		break;					
		
		case "Art002":
		document.getElementById("DivCambiaFoto").style.visibility = "visible";
		break;		
		
		case "Art009":
		document.getElementById("DivCambiaFoto").style.visibility = "visible";
		break;		

		case "Art011":
		EfectoAumentaVidas();
		break;			
	}			
							
	document.getElementById("lblArticuloYaComprado").textContent=RPHWVBBGIM
	//ArrayCompras.push(new ObjetoCompra(Articulo,Precio,ValidezFecha,ValidezCotos) );
	IncorporaCompra(Articulo,Precio,ValidezFecha,ValidezCotos)
	
	
	
}

function EfectoAumentaVidas()
{
	var Vidas=2
	
	if (PWMIBRSDCJ.length>0)
	{
		Vidas=PWMIBRSDCJ[0].ObjetoParametros._VidasIniciales;
	}
	TextVidas.text=Vidas
	PWMIBRSDCJ[0].Vidas=Vidas;
}

function onSocketArticuloDuplicado()
{
		CerrarTienda();
		OcultarDetalleTienda();
		Renderizar(true);
		JQDGHVJGUW();
		SVHMCOYULR("Ya tienes el artículo")
}


function GHDHJSKQIU()
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


function TUYTTXXUSX()
{
	if (SNJCSVWFCC()==true)
	{
		if (MQUGCIUQII!=undefined && MQUGCIUQII!=null && XPBCVAGCDQ.length>0)
		{
			var UYEUYIYECB=IEUIUCYUCC("Revisaremos la partida. ¡Gracias!",40);
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


function EnviarGPRD_OK()
{
	if (SNJCSVWFCC()==true)
	{
		//console.log("Confirma GPRD "+PWMIBRSDCJ[0].OBTBPOULAV);
		try
		{
			socket.emit('confirmar_gprd',PWMIBRSDCJ[0].OBTBPOULAV);
		}
		catch(e){}
	}
}


function LHEQVYHCSK()
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
		JHKSJDHVKJ=GWFPRHAYQK; //1.0.9 15 chance ponía 15 pero creo que mejor dejarlo asi
	}
	
	if (AJFQVFUKAP==true)
	{
		JHKSJDHVKJ=0.2; //  5 OJIMETRO
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

function MNAGVJHWOW() //2.0.1
{

	if (HMVFLEYPXM.length>0 || REDYBSYSNN.length>0) //2.0.7 Quito DUGDLNBOGK==true || . También quito || WSHPROHDIV>0 || RLEHYYGBGQ>0 ) || HGMNXSIAPV==false
	{
		return true;
	}
	else
	{
		return false;
	}
	
}
function GIDSSFEUNT(Origen)
{
	
	
	var JHKSJDHVKJ;
	var KKKKSKSSKW=1000;
	var NMBBHJGSXX=false;
	var PLKOPTSHBQ;
	var i;
	var CambioEstado=false;
	
			var current_datetime = new Date() //ValidezFecha;
		var formatted_date = appendLeadingZeroes(current_datetime.getDate()) +'/'+ appendLeadingZeroes(current_datetime.getMonth() + 1) + '/' +current_datetime.getFullYear() + " " + appendLeadingZeroes(current_datetime.getHours()) + ":" + appendLeadingZeroes(current_datetime.getMinutes()) + ":" + appendLeadingZeroes(current_datetime.getSeconds())

	//console.log("superorganizador desde "+Origen+" "+formatted_date)

	
	
	//console.log("GBROPWPVSK: "+GBROPWPVSK+" MNAGVJHWOW"+MNAGVJHWOW())
	//console.log("Super Organizador "+GBROPWPVSK+" MNAGVJHWOW "+MNAGVJHWOW())
	if (GBROPWPVSK==false && MNAGVJHWOW()==false) //2.0.7 && WSHPROHDIV==0
	{

	
		KKQJCHKQEP();	
		//console.log("llegando1");
		
		if (EGPDVIEJEL==false)
		{
			if (JHHWEKWEJK==true)
			{
				/*if (KYLIAIETHX==false)
				{
					try
					{
						socket.emit("Consola","Nueva partida superorganizador monojugador "+TFSXFTYVGQ);
					}
					catch(e){}
				}*/
				//console.log('Consola', 'Nueva desde SuperOrganizador1')
				KPQSPDMKJE(vTurnoConsumido,false); //vTurnoConsumido 2.0.8.37
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
			
			//console.log("JHHWEKWEJK: "+JHHWEKWEJK);
			if (JHHWEKWEJK==true)
			{
				//console.log("Nueva partida superorganizador");
				/*if (KYLIAIETHX==false)
				{
					try
					{
						socket.emit("Consola","Nueva partida superorganizador "+TFSXFTYVGQ);
					}
					catch(e){}
				}*/
				//console.log('Consola', 'Nueva desde SuperOrganizador2')
				KPQSPDMKJE(vTurnoConsumido,false); //vTurnoConsumido 2.0.8.37
				
			}
			else
			{
				//console.log("llegando2");
				if (DVNRTQIWGL==TFSXFTYVGQ)
				{
					//console.log("llegando3");					
					if (HUUCUYFBLW.duration.toFixed(0)==0)
					{
						
						
						
						
						//console.log("entra Mostrando contador "+UWYHEIVJHX+" "+SinIA);
						if (UWYHEIVJHX>0) //2.0.7
						{
							JHKSJDHVKJ=UWYHEIVJHX;
							//UWYHEIVJHX=0;
						}
						else
						{
							//UWYHEIVJHX=0;
							JHKSJDHVKJ=LHEQVYHCSK();
						}
					
						if (EGSJHTESLW==true)
						{
							KKKKSKSSKW=200;
						}
						
						
						


						log(false,"VECES QUE PONE EL RELOJ")
						var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

						
						//HUUCUYFBLW = YMHIHSNADE.time.create(false);
						if (MYQBNBVHKU==true)
						{
							//console.log("Tiempo turno "+KKKKSKSSKW)
							
							HUUCUYFBLW.loop(KKKKSKSSKW, function()
							{	
								Renderizar(true);							
								//console.log("Dando vueltas")
								if (DVNRTQIWGL!=TFSXFTYVGQ)
								{
									HUUCUYFBLW.stop();
									HUUCUYFBLW.remove();
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
									
									if (MYQBNBVHKU==true &&  (GBROPWPVSK==false && MNAGVJHWOW()==false ) )
									{
										//textoContador2=YMHIHSNADE.add.bitmapText(0, 40, 'MiFuenteAmarilla', 'BitmapText', 44);
										//textoContador2.text="KOO";
										
										
										//VTEVNYKAUB.add(textoContador2);
										//YJNIRPCWEI.revive();
										
										

							
										YJNIRPCWEI.text="Es mi turno "+JHKSJDHVKJ;
										//YJNIRPCWEI.tint=Phaser.Color.getColor(110,110,110);
										//YMHIHSNADE.world.bringToTop(VTEVNYKAUB);
									}
									
								}

								
								if (JHKSJDHVKJ<=0 && (GBROPWPVSK==false && MNAGVJHWOW()==false ) )
								{
									YJNIRPCWEI.text="";
									YJNIRPCWEI.kill();
									TKXPPGUPVV.stop();
									TKXPPGUPVV.remove();
									HUUCUYFBLW.stop();
									HUUCUYFBLW.remove();
									//socket.emit("Consola","IA desde 1. Soy el jugador "+TFSXFTYVGQ);
									if (GBROPWPVSK==false && MNAGVJHWOW()==false ) 
									{
										//IA(DVNRTQIWGL,LUCRWXJMDR,MQUGCIUQII);
										//console.log("Llama IA "+DVNRTQIWGL+" "+LUCRWXJMDR+" "+MQUGCIUQII)
										LlamadaIA(DVNRTQIWGL,LUCRWXJMDR,MQUGCIUQII);
									}
									
									AJFQVFUKAP=true; //1.0.8	
									UWYHEIVJHX=0;
								}
								else
								{
									JHKSJDHVKJ=JHKSJDHVKJ-1;
									UWYHEIVJHX=JHKSJDHVKJ;
								}
						
							});				
							HUUCUYFBLW.start();
						}
					}
				}
				else
				{
					//console.log("llegando4 "+MYQBNBVHKU);
					//console.log("Ojo. Apunto estoy ")
					for (i=0;i<=KYDWXPGHVY.length-1;i++)
					{
						//console.log("Ojo. "+DVNRTQIWGL+" "+KYDWXPGHVY[i].SSUNXNEEHN+" "+TFSXFTYVGQ+" "+ESKTEXAVHU+" "+MYQBNBVHKU)
						if (DVNRTQIWGL==KYDWXPGHVY[i].SSUNXNEEHN && TFSXFTYVGQ==ESKTEXAVHU)
						{
							if (MYQBNBVHKU==true) //2.0.7  && SinIA!=true SinIA. Si viene de recuperar que no lance IA
							{
								NMBBHJGSXX=true;
								/*if (SinIA!=true)
								{
									//console.log("Lo siento pero no lanzo IA");
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
			LlamadaIA(DVNRTQIWGL,LUCRWXJMDR,MQUGCIUQII);
		}
	}
	else
	{

		//OGGWQECXBK("SinClave") //2.0.7 chungo
		
	}
	//BHJCWGIUIU=false;
}


function LlamadaIA(TurnoRecibido,SLGKDYQCAY,PartidaRecibida)
{

	if (vProbandoIA==false)
	{
		
		var PLKOPTSHBQ=XNYRSXYRGF(DVNRTQIWGL);

		TKXPPGUPVV.stop();
		TKXPPGUPVV.remove();
		TKXPPGUPVV.add(PLKOPTSHBQ, function()
		{		
			TKXPPGUPVV.stop();
			TKXPPGUPVV.remove();
			if (MNAGVJHWOW()==false)
			{
				//console.log("Llega a IA")
				IA(TurnoRecibido,SLGKDYQCAY,PartidaRecibida);
			}
			
		}
		);
		TKXPPGUPVV.start();	
	}
}

function EABXADHEVT(OTBFIOUAIV)
{	
	var LXGKVFJUFT;
	var lAudioTag=false;
	var SO=""
	var PPOQCOUQCE=false;
	var IQQIXCCBNV=""
	
	if (SonidoSilenciar==false)
	{	
		switch (OTBFIOUAIV)
		{

			case '_NoSube' :
				
				LXGKVFJUFT = Math.floor(Math.random() * 10) + 1  
				if (LXGKVFJUFT<=4)
				{
					IQQIXCCBNV='SndNoSube';
				}
				if (LXGKVFJUFT==5)
				{			
					IQQIXCCBNV='SndNano';
				}
				//SFVDEVFFCR.play();
				
				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}
				
				break;	
				
			case 'WWYKUMYJBJ' :
				IQQIXCCBNV='VKEJRPCHKN';
				//VKEJRPCHKN.play();
				if (SonidoCartas==false)
				{
					IQQIXCCBNV="";
				}
				
				break;

			case 'CVRQKCGIRI' :
				IQQIXCCBNV='LFWPDMQYKH';
				if (SonidoCartas==false)
				{
					IQQIXCCBNV="";
				}
				//LFWPDMQYKH.play();
				break;
			
			case 'BNSLLGGORP' :
				IQQIXCCBNV='BHLJBCKLKE';
				if (SonidoCantes==false)
				{
					IQQIXCCBNV="";
				}			
				//BHLJBCKLKE.play();
				break;	
			
			case 'TKYUFYJRRA' :
			
				LXGKVFJUFT = Math.floor(Math.random() * 4) + 1  
				if (LXGKVFJUFT==1)
				{
					IQQIXCCBNV='Snd20Copas2';
				}
				else
				{			
					IQQIXCCBNV='SFVDEVFFCR';
				}
				
				if (SonidoCantes==false)
				{
					IQQIXCCBNV="";
				}	
				break;		
			
			case 'LFYAQLIDAI' :
				IQQIXCCBNV='KMBKTLXURD';
				
				if (SonidoCantes==false)
				{
					IQQIXCCBNV="";
				}	
				break;		
			
			case 'CEDKIIHEHO' :
				IQQIXCCBNV='UIYIEWUHCI';
				
				if (SonidoCantes==false)
				{
					IQQIXCCBNV="";
				}	
				break;		

			case '_Veinte' :
				IQQIXCCBNV='Snd20';
				
				if (SonidoCantes==false)
				{
					IQQIXCCBNV="";
				}	
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

				if (SonidoCantes==false)
				{
					IQQIXCCBNV="";
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
				
				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
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
				
				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
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
				
				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
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

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}	
				
				break;	
				
			case '_Primo' :
				LXGKVFJUFT = Math.floor(Math.random() * 3) + 1  
				if (LXGKVFJUFT==1)
				{
					IQQIXCCBNV='SndPrimo';
					//DPIDINSQVF.play();
				}

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}				
				break;					
				
			case '_Gafas' :
				LXGKVFJUFT = Math.floor(Math.random() * 3) + 1  
				if (LXGKVFJUFT==1)
				{
					IQQIXCCBNV='NNXHHWHWWW';
					//DPIDINSQVF.play();
				}
				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}	
				
				break;				

			case 'JCGKEWDJBQ' :
				
				LXGKVFJUFT = Math.floor(Math.random() * 10) + 1  
				if (LXGKVFJUFT==1)
				{
					IQQIXCCBNV='NSNSNSWGIU';
				}	
				
				if (LXGKVFJUFT==2)
				{
					IQQIXCCBNV='SndClases';
				}	

				if (LXGKVFJUFT==3)
				{
					IQQIXCCBNV='SndMejor';
				}	

				if (LXGKVFJUFT==4)
				{
					IQQIXCCBNV='SndGenial';
				}	

				if (LXGKVFJUFT==5)
				{
					IQQIXCCBNV='SndArtista';
				}	

				if (LXGKVFJUFT==6)
				{
					IQQIXCCBNV='SndToco';
				}			
				
				if (LXGKVFJUFT>=7)
				{
					IQQIXCCBNV='GERQISACAV';
				}

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}	
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

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}	
				break;	

			case 'TSYFNOWESC' :
				IQQIXCCBNV='VLVITFRSLA';

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}	
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
		
				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
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

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
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

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
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

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}				
				break;	
				
			case '_HayPROS' :
				LXGKVFJUFT = Math.floor(Math.random() * 4) + 1  
				if (LXGKVFJUFT==1)
				{
					IQQIXCCBNV='SndSientate';
				}
				else
				{
					IQQIXCCBNV='UUQGJQGJAM';
					
				}

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}				
				break;		

			case '_HayProfesionales' :
				
				LXGKVFJUFT = Math.floor(Math.random() * 8) + 1  
				if (LXGKVFJUFT==1)
				{
					IQQIXCCBNV='SndSientate';
				}
				if (LXGKVFJUFT==2)
				{
					IQQIXCCBNV='LWHWUIWHIL';
				}
		
				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
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

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
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
					IQQIXCCBNV='UWYIUWJHGS';
					//JDPOTVNRCT.play();
				}			

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}				
				break;		

			case '_Ultimas' :
				IQQIXCCBNV='NBIQIUICLA';
				//NBIQIUICLA.play();

				if (SonidoCantes==false)
				{
					IQQIXCCBNV="";
				}	
				break;	
				
			case '_Grano' :
			
				LXGKVFJUFT = Math.floor(Math.random() * 2) + 1  
				if (LXGKVFJUFT==1)
				{
					IQQIXCCBNV='JBCWHUIWCW';
					//JBCWHUIWCW.play();
				}	

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
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
					IQQIXCCBNV='UUUUDJWJAJ';
					//MSJIWCUWCU.play();
					PPOQCOUQCE=true;
				}
				
				if (LXGKVFJUFT<=7 && PPOQCOUQCE==false)
				{
					IQQIXCCBNV='AZZHJKWPLD';
					//AZZHJKWPLD.play();
					PPOQCOUQCE=true;
				}	

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
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
					IQQIXCCBNV='UUUUDJWJAJ';
					//MSJIWCUWCU.play();
					PPOQCOUQCE=true;
				}
				
				if (LXGKVFJUFT<=10 && PPOQCOUQCE==false)
				{
					IQQIXCCBNV='AZZHJKWPLD';
					//AZZHJKWPLD.play();
					PPOQCOUQCE=true;
				}		

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}				
				break;						

			case '_Chatarrero' :
			
				LXGKVFJUFT = Math.floor(Math.random() * 6) + 1  
				if (LXGKVFJUFT==1)
				{
					IQQIXCCBNV='UIYIUHCWVX';
					//UIYIUHCWVX.play();
				}	
				if (LXGKVFJUFT==2)
				{
					IQQIXCCBNV='SndDar';				
				}	

				if (LXGKVFJUFT==3)
				{
					IQQIXCCBNV='SndTaustano';
				}

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}				
				break;	

			case '_Suerte' :
				
				LXGKVFJUFT = Math.floor(Math.random() * 20) + 1  
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
				if (LXGKVFJUFT==4)
				{
					IQQIXCCBNV='SndArrancao';
					//UIYIUWCHCW.play();
				}		
				if (LXGKVFJUFT==5)
				{
					IQQIXCCBNV='SndNoSabes';
				}	
				if (LXGKVFJUFT==6)
				{
					IQQIXCCBNV='SndPensar';
				}				

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}				
				break;	
			
			case '_Escupe' :
			
				LXGKVFJUFT = Math.floor(Math.random() * 2) + 1  
				if (LXGKVFJUFT==1)
				{
					IQQIXCCBNV='ZZJJJUHIHI';
					//ZZJJJUHIHI.play();
				}						

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}				
				break;			

			case '_GuinoteOtro' :
			
				LXGKVFJUFT = Math.floor(Math.random() * 1) + 1  
				if (LXGKVFJUFT==1)
				{
					IQQIXCCBNV='BVUWCEFEGY';
					//BVUWCEFEGY.play();
				}						

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}				
				break;		

			case '_Faldas' :
			
				LXGKVFJUFT = Math.floor(Math.random() * 2) + 1  
				if (LXGKVFJUFT==1)
				{
					IQQIXCCBNV='LEUSNCUWAA';
					//LEUSNCUWAA.play();
				}						

				if (SonidoChascarrillos==false)
				{
					IQQIXCCBNV="";
				}				
				break;		
			
			case '_Monedas' :
				IQQIXCCBNV='NMGIUEIWFE';
				break;
			case '_Cremallera' :
				IQQIXCCBNV='PPPQIODKJA';
				break;				
		}
		
		Reproduce(IQQIXCCBNV);
		

	}
}		
function Reproduce(IQQIXCCBNV)
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
			try
			{
				eval(IQQIXCCBNV).play();
			}
			catch(e){}
		}
	}
}




function CHJKAHKJHC()
{
	var i;
	
	if (OTGNMRHTVK()==false) //2.0.8051 Para que cuando acabe la partida con un 20 se vean las cartas y no se oculten
	{
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
	
}



function QTIPILDEPH(sprite,UBWRXKMTQN,SLGKDYQCAY,UHTPGPRUJA,TXLWIIINGQ,FHEFFYUQFX){
	
	
	//raka
	UWYHEIVJHX=0; //2.0.7 para que el contador del turno se recalcule
	
	switch (FHEFFYUQFX)
	{
		case "oros" :
			ContadorPaloOros++;
			textoCuentaPaloOros.text=ContadorPaloOros;
		break;

		case "copas" :
			ContadorPaloCopas++;
			textoCuentaPaloCopas.text=ContadorPaloCopas;
		break;
		
		case "espadas" :
			ContadorPaloEspadas++;
			textoCuentaPaloEspadas.text=ContadorPaloEspadas;
		break;

		case "bastos" :
		ContadorPaloBastos++;
		textoCuentaPaloBastos.text=ContadorPaloBastos;
		break;
	}
	
	if (MYQBNBVHKU==false || LUCRWXJMDR==1)
	{
	//	NUWTGXUUTS(true); // A veces se queda pillado con el tema de las desconexiones. Así garantizo que si alguien tira, la partida comienza
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
			HUUCUYFBLW.remove();
			TKXPPGUPVV.stop();
			TKXPPGUPVV.remove();
			YJNIRPCWEI.text="";
		}	

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
			
			
			VRLYJAAHUE(sprite);
			EABXADHEVT('CVRQKCGIRI');
			
			Renderizar(true, "Mueve tablero");
			try
			{			
				
				//PQUFIBKJJH = YMHIHSNADE.add.tween(sprite);
				PQUFIBKJJH.timeline=[]
				PQUFIBKJJH.target=sprite
				
				PQUFIBKJJH.to( {x:NOFEDXHMLS
				,y:GHTWROCHVV,
				angle : UYAEIRFYUJ
				}, MDYSFNYPYP, KYFMRVNHIQ,false);		
				PQUFIBKJJH.onComplete.addOnce( function () {
					//CHJKAHKJHC();
					
					if (JHJEWHFWNL==false)
					{
						 //YMHIHSNADE.add.tween(sprite.scale).to( {x:1,y:1}, IRXOKNWTLV, BSXWFYLCEW,true);
						 sprite.scale.setTo(1,1)
					}
					else
					{
						 //YMHIHSNADE.add.tween(sprite.scale).to( {x:1.2,y:1.2}, IRXOKNWTLV, BSXWFYLCEW,true);
						 sprite.scale.setTo(1.2,1.2)
					}
					sprite.bringToTop();
			
			
					log(true,"MUEVE AL TABLERO: VA A LLAMAR A QUIEN GANA MANO "+UHTPGPRUJA);
					//Renderizar(false);
				//console.log("Acabo de tirar una carta al centro "+sprite.name+" con tarea "+TXLWIIINGQ)
				FRWLTWDFVM(SLGKDYQCAY,UHTPGPRUJA,TXLWIIINGQ); //Truco para poder pasar por par�metro
				
				}  );	

			}
			catch(e)
			{
			}
			
			//var twEscala;

			//twEscala
			
			PQUFIBKJJH.start();
			
	//}	
		

	}

};


function PJAQOVTWWG(SLGKDYQCAY,UHTPGPRUJA)
{
	var QOWECQVXCM=false;
	var i;
	var NBOOATHXUG=LUCRWXJMDR;
	var CuentaTiradas=0;
	
	//Nunca vendrán rondas pasadas. Solo futuras
	
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




function FRWLTWDFVM(SLGKDYQCAY,UHTPGPRUJA,TXLWIIINGQ){
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
		log(true,"LUCRWXJMDR Recibida por m� mismo "+LUCRWXJMDR+" SSUNXNEEHN: "+TFSXFTYVGQ);
		UPCWNPYAIE=LUCRWXJMDR;
		MMMCNMNKTP=TFSXFTYVGQ
	}	
	else{
		log(true,"LUCRWXJMDR Recibida por par�metro "+SLGKDYQCAY+" SSUNXNEEHN: "+UHTPGPRUJA);
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
			
		Renderizar(true);
		if (VDKOVQXHON.length>=4 )
		{
				log(true,"DEBE LIMPIAR MESA");
				TKXPPGUPVV.stop(); //Mucho miedo 29/04/2017
				TKXPPGUPVV.remove();
				//TLGMUNNDGH=true; Comentado 2.0.8054 //por si cambia el turno que no me deje tirar
				
				UPCWNPYAIE=LUCRWXJMDR;
				//PNVKSWRTOJ++;
				
				if (LUCRWXJMDR==3)
				{
					SVHMCOYULR("¡¡ de últimas !!")
					EABXADHEVT("_Ultimas");
				}
			

			
			//1.0.6 Antes borraba más
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
			vTurnoConsumido=TTJFVWDTMG;
			
			ArrayRondaGanada.push(new NQMQGXXHIL(SLGKDYQCAY,DVNRTQIWGL) )
			
			
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
				
				//Vibraci�n
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

					
					if (MNAGVJHWOW()==false)
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
								//tw5 = YMHIHSNADE.add.tween(JJUORGEQOU.scale);
								tw5.timeline=[];
								tw5.target=JJUORGEQOU.scale;
								tw5.to( {x:MEPQMUPTEH,y:MEPQMUPTEH}		
								, MDYSFNYPYP, KYFMRVNHIQ,false,PVQFVAAAEY);
								//PQUFIBKJJH.onComplete.add(JFILXLIVJN,this)
									log(false,"�LAS HARA PEQUE�AS?");
								tw5.onComplete.addOnce(
									function () {
										JFILXLIVJN(UPCWNPYAIE,MMMCNMNKTP,TXLWIIINGQ); //Truco para poder pasar por par�metro
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
						JFILXLIVJN(UPCWNPYAIE,MMMCNMNKTP,TXLWIIINGQ); //Truco para poder pasar por par⮥tro
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
					 
					 if (TTJFVWDTMG==VDKOVQXHON[3].jugador && VDKOVQXHON[0].WQCPJQWFPN<10 
					  && VDKOVQXHON[1].WQCPJQWFPN<10
					   && VDKOVQXHON[2].WQCPJQWFPN<10
					    && VDKOVQXHON[3].WQCPJQWFPN<10 && LJKAEXAOJE>=8  && (LUCRWXJMDR<3 || LUCRWXJMDR==4)  && PPOQCOUQCE==false && LUCRWXJMDR!=4 && EVAILWGGKX==false)
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
				 
					Renderizar(true, "Va ganando 1");
					//tw5 = YMHIHSNADE.add.tween(JJUORGEQOU.scale);
					tw5.timeline=[]
					tw5.target=JJUORGEQOU.scale
					tw5.to( {x:MEPQMUPTEH,y:MEPQMUPTEH}		
					, MDYSFNYPYP, KYFMRVNHIQ,false,PVQFVAAAEY);
						log(false,"�LAS HARA PEQUE�AS?");
					console.log("KOKOKKOK")
					tw5.onComplete.addOnce(
						function () {
							JFILXLIVJN(UPCWNPYAIE,MMMCNMNKTP,TXLWIIINGQ); //Truco para poder pasar por par�metro
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
				//console.log("quien")
				Renderizar(false, "Va ganando 2");

				
				
				//BloqueoCartaCentro=false; 2.0.8051 pasa más abajo, una vez que se calcula el turno.
				//console.log("investigo1 "+BloqueoCartaCentro);
				if (VDKOVQXHON.length>0)
				{
					var PPOQCOUQCE=false;
					log(true,"REAL "+VDKOVQXHON[VDKOVQXHON.length-1].VVRCMEUNOJ+" "+ VDKOVQXHON[VDKOVQXHON.length-1].SGCSHJVERI)
					
					 if ( OQOQOCBSKK(AGKVNAGGLB)<=1 && LUCRWXJMDR<=1 && DVNRTQIWGL==TFSXFTYVGQ && EVAILWGGKX==false)
					 {
						 EABXADHEVT("_NoSube");
						 PPOQCOUQCE=true;
					 }		
					 
					 
					 if (VDKOVQXHON[VDKOVQXHON.length-1].VVRCMEUNOJ==5 && VDKOVQXHON[VDKOVQXHON.length-1].SGCSHJVERI=="bastos"  && LUCRWXJMDR<=4)
					 {
						 EABXADHEVT("DNBXXHKKYK");
						 PPOQCOUQCE=true;
					 }			

					 if (VDKOVQXHON[VDKOVQXHON.length-1].VVRCMEUNOJ==6 && VDKOVQXHON[VDKOVQXHON.length-1].SGCSHJVERI=="bastos"  && LUCRWXJMDR<=4)
					 {
						 EABXADHEVT("_Primo");
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
				BloqueoCartaCentro=false;
			
				log(true,"CAMBIO DVNRTQIWGL A" + DVNRTQIWGL);	
			
				if (EGPDVIEJEL==false)
				{
					//log(true,"IA Desde FRWLTWDFVM");


						GIDSSFEUNT();
						/*
						//raka
						var PLKOPTSHBQ=XNYRSXYRGF(DVNRTQIWGL);

						
						TKXPPGUPVV.stop(); //04/17
						TKXPPGUPVV.add(PLKOPTSHBQ, function(){
							TKXPPGUPVV.stop();
							//raka IA(DVNRTQIWGL,false);
						} );
						TKXPPGUPVV.start();		
						*/

						
					//}
				}
				else
				{
				
					//console.log("RECUPERA_ Quienganamano");
					OGGWQECXBK(TXLWIIINGQ,false,false);
					//2.0.7 PMMTTJWRVR(TXLWIIINGQ);

					
				}
			
			//BloqueoCartaCentro=false;
			//console.log("investigo6 "+BloqueoCartaCentro+" "+DVNRTQIWGL);
			
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
	
	
	
	

}


function UEWYIUWIVW(JugadorValidar)
{
	
	var i;
	var QOWECQVXCM=true
	for (i=0;i<=KYDWXPGHVY.length-1;i++)
	{
		if (JugadorValidar==KYDWXPGHVY[i].SSUNXNEEHN)
		{
			QOWECQVXCM=false;
			break;
		}
	}
	
	return QOWECQVXCM;
}

function XNYRSXYRGF(JugadorValidar)
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
					


function AGLRWERBPD(UPCWNPYAIE){
	
	
	HUUCUYFBLW.stop();
	HUUCUYFBLW.remove();
	TKXPPGUPVV.stop();
	TKXPPGUPVV.remove();
	
	
	
	
	//1.0.9
	if (DVNRTQIWGL==4){
		DVNRTQIWGL=1;
	}
	else{
		DVNRTQIWGL++;
	}
		
	
	GIDSSFEUNT("desde calcular turno");		
	KKQJCHKQEP();	
	//raka JWXRWCVLGC(UPCWNPYAIE);
			
}

function JFILXLIVJN(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ){
	
	var i;
	for (i=0;i<=AGKVNAGGLB.length-1;i++)
	{
		AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
	}
		
	//for (i=0;i<=VDKOVQXHON.length-1;i++){
		//log(false,"ante de hacerse peque�as")
		if(VDKOVQXHON.length>=1){
		//log(false,"Se hacen peque�as")
		VRLYJAAHUE(VDKOVQXHON[0].TNFAGGMKXD);
		VDKOVQXHON[0].TNFAGGMKXD.alpha=1;
		//TKXWTMCBFU = YMHIHSNADE.add.tween(VDKOVQXHON[0].TNFAGGMKXD.scale);
		TKXWTMCBFU.timeline=[]
		TKXWTMCBFU.target=VDKOVQXHON[0].TNFAGGMKXD.scale
		TKXWTMCBFU.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,false,PVQFVAAAEY);
		TKXWTMCBFU.onComplete.addOnce(function(){
			WEFMQSNCOE(TXLWIIINGQ);
			})				
		TKXWTMCBFU.start();					
		}
//}
//EfectosHacerPequenas2=function(){
		if(VDKOVQXHON.length>=2){
		VRLYJAAHUE(VDKOVQXHON[1].TNFAGGMKXD);
		VDKOVQXHON[1].TNFAGGMKXD.alpha=1;
		//UEIQAMIDWY = YMHIHSNADE.add.tween(VDKOVQXHON[1].TNFAGGMKXD.scale);
		UEIQAMIDWY.timeline=[]
		UEIQAMIDWY.target=VDKOVQXHON[1].TNFAGGMKXD.scale		
		UEIQAMIDWY.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,false,PVQFVAAAEY);
		UEIQAMIDWY.onComplete.addOnce(function(){
			UCJLIRNXGJ(TXLWIIINGQ);
			})				
		UEIQAMIDWY.start();		
		}
//}
//EfectosHacerPequenas3=function(){
		if(VDKOVQXHON.length>=3){		
		VRLYJAAHUE(VDKOVQXHON[2].TNFAGGMKXD);
		VDKOVQXHON[2].TNFAGGMKXD.alpha=1;
		//GCKCAMPPHX = YMHIHSNADE.add.tween(VDKOVQXHON[2].TNFAGGMKXD.scale);
		GCKCAMPPHX.timeline=[]
		GCKCAMPPHX.target=VDKOVQXHON[2].TNFAGGMKXD.scale			
		GCKCAMPPHX.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,false,PVQFVAAAEY);
		GCKCAMPPHX.onComplete.addOnce(function(){
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
		//CFFVTFENDF = YMHIHSNADE.add.tween(VDKOVQXHON[3].TNFAGGMKXD.scale);
		CFFVTFENDF.timeline=[]
		CFFVTFENDF.target=VDKOVQXHON[3].TNFAGGMKXD.scale			
		CFFVTFENDF.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,false,PVQFVAAAEY);
		CFFVTFENDF.onComplete.addOnce(//VRHXGWDUTQ,this)		
				function () {
					VRHXGWDUTQ(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ); //Truco para poder pasar por par�metro
				}
		);		
		CFFVTFENDF.start();		
		}
	//}
		
}
//*/

function DFCCHCJBNP(UPCWNPYAIE,TXLWIIINGQ){

console.log("ROBAR CARTAS 1.2 "+FBSDMRLVEL.length)
	BloqueoCartaCentro=false;
	//console.log("investigo4 "+BloqueoCartaCentro);
	if (OTGNMRHTVK()==true && 1==2) // 1.0.9
	{
		//WWAYLOUPUQ(); 
	}
	else
	{

		//if (VDKOVQXHON.length>=4){
		
		
			log(false,"Se mete en DFCCHCJBNP");
			
			VDKOVQXHON.splice(0,4);
			LUCRWXJMDR++;
			YJNIRPCWEI.kill(); //2.0.8051 Para que no aparezca mal lo de es mi turno.
			
			//GIDSSFEUNT(); guauu
			//raka JWXRWCVLGC(LUCRWXJMDR); //1.0.9
			//raka KKQJCHKQEP(); //1.0.9
	
			
			

			DesbloquearTirada();

			
			
			//console.log("RECUPERA_ Elimina mesa");
			OGGWQECXBK(TXLWIIINGQ,false,false);
			//2.0.7 PMMTTJWRVR(TXLWIIINGQ);


					
			//		}

			//}
			
			if (EGPDVIEJEL==false)
			{
				//log(true,"IA Desde Eliminar de la mesa");
					
					//var TKXPPGUPVV = YMHIHSNADE.time.create(false);//REVISIONTIEMPO
					
					var PLKOPTSHBQ=XNYRSXYRGF(DVNRTQIWGL);
					/*if (PQUFIBKJJH.isRunning==true)
					{
						PLKOPTSHBQ=PLKOPTSHBQ+1500
					}
					else
					{
					}*/
						
					//var	TKXPPGUPVV = YMHIHSNADE.time.create(false);
					GIDSSFEUNT("DESDE ELIMINAR MESA");
					/*
					//raka
					
					TKXPPGUPVV.stop(); //04/17
					TKXPPGUPVV.add(PLKOPTSHBQ, function(){
					TKXPPGUPVV.stop();
					//raka IA(DVNRTQIWGL,false);} );
					TKXPPGUPVV.start();
					*/
							
							
				//}
			}
			else
			{
				
				GIDSSFEUNT("DESDE ELIMINAR MESA2");
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
		if (EVAILWGGKX==false)
		{
			if (AGKVNAGGLB.length==0 && JHHWEKWEJK==false) //2.0.1 Añado BKBXOKMUUQ
			{
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
				//NOCREO WWAYLOUPUQ(); 
			}
		}
		
		LMGBDQDXWP();
	}
	console.log("ROBAR CARTAS 3 "+FBSDMRLVEL.length)
}

function CalcularVariableEmoticono(LetraDesde,LetraHasta)
{
	var EmoticonoEnviar;
	
	if (LetraDesde="D")
	{
		if (LetraHasta=="R")
		{
			EmoticonoEnviar=EmoticonoEnviarDR
		}
		if (LetraHasta=="U")
		{
			EmoticonoEnviar=EmoticonoEnviarDU
		}
		if (LetraHasta=="L")
		{
			EmoticonoEnviar=EmoticonoEnviarDL
		}
	}	
	
	if (LetraDesde="R")
	{
		if (LetraHasta=="D")
		{
			EmoticonoEnviar=EmoticonoEnviarRD
		}
		if (LetraHasta=="U")
		{
			EmoticonoEnviar=EmoticonoEnviarRU
		}
		if (LetraHasta=="L")
		{
			EmoticonoEnviar=EmoticonoEnviarRL
		}
	}		

	if (LetraDesde="U")
	{
		if (LetraHasta=="D")
		{
			EmoticonoEnviar=EmoticonoEnviarUD
		}
		if (LetraHasta=="R")
		{
			EmoticonoEnviar=EmoticonoEnviarUR
		}
		if (LetraHasta=="L")
		{
			EmoticonoEnviar=EmoticonoEnviarUL
		}
	}

	if (LetraDesde="L")
	{
		if (LetraHasta=="D")
		{
			EmoticonoEnviar=EmoticonoEnviarLD
		}
		if (LetraHasta=="U")
		{
			EmoticonoEnviar=EmoticonoEnviarLU
		}
		if (LetraHasta=="R")
		{
			EmoticonoEnviar=EmoticonoEnviarLR
		}
	}		
	
	return EmoticonoEnviar;
}

function CalcularTweenEmoticono(LetraDesde,LetraHasta)
{
	var TweenEnviar;
	
	if (LetraDesde="D")
	{
		if (LetraHasta=="R")
		{
			TweenEnviar=twDesplazamientoEmoticonoDR
		}
		if (LetraHasta=="U")
		{
			TweenEnviar=twDesplazamientoEmoticonoDU
		}
		if (LetraHasta=="L")
		{
			TweenEnviar=twDesplazamientoEmoticonoDL
		}
	}	
	
	if (LetraDesde="R")
	{
		if (LetraHasta=="D")
		{
			TweenEnviar=twDesplazamientoEmoticonoRD
		}
		if (LetraHasta=="U")
		{
			TweenEnviar=twDesplazamientoEmoticonoRU
		}
		if (LetraHasta=="L")
		{
			TweenEnviar=twDesplazamientoEmoticonoRL
		}
	}		

	if (LetraDesde="U")
	{
		if (LetraHasta=="D")
		{
			TweenEnviar=twDesplazamientoEmoticonoUD
		}
		if (LetraHasta=="R")
		{
			TweenEnviar=twDesplazamientoEmoticonoUR
		}
		if (LetraHasta=="L")
		{
			TweenEnviar=twDesplazamientoEmoticonoUL
		}
	}

	if (LetraDesde="L")
	{
		if (LetraHasta=="D")
		{
			TweenEnviar=twDesplazamientoEmoticonoLD
		}
		if (LetraHasta=="U")
		{
			TweenEnviar=twDesplazamientoEmoticonoLU
		}
		if (LetraHasta=="R")
		{
			TweenEnviar=twDesplazamientoEmoticonoLR
		}
	}		
	
	return TweenEnviar;
}


function onSocketEnviarEmoticonosDesdeServer(JugadorDesde, JugadorHasta, idEmoticonoServer)
{
	var AQuien;
	var EfectoMovimiento;
	var Efecto=0;
	
	var Rotar=true;
	var Fadding=true;
	var vTiempoEmotiMover=800;
	var vTiempoEmotiDesaparecer=100;
	var LetraDesde;
	var LetraHasta;
	var DUHVSKZZZD=140;
	var DesplazamientoD=200;
	var posXDesde;
	var posXHasta;
	var posYDesde;
	var posYHasta;	
	var twDesplazamientoEmoticono;

	
	//var JugadorDesde=1;
	//var JugadorHasta=4;
	
	var LetraDesde=HHOPUSIABJ(JugadorDesde)
	
	if (LetraDesde=="U")
	{
		posXDesde=YMHIHSNADE.world.centerX	;
		posYDesde=0;

		
	}
	if (LetraDesde=="R")
	{
		posXDesde=YMHIHSNADE.world.width	;
		posYDesde=YMHIHSNADE.world.centerY	;	
	}	
	if (LetraDesde=="L")
	{
		posXDesde=0	;
		posYDesde=YMHIHSNADE.world.centerY	;	
	}		
	if (LetraDesde=="D")
	{
		posXDesde=YMHIHSNADE.world.centerX	;
		posYDesde=YMHIHSNADE.world.height	;	
	}		
	
	
	LetraHasta=HHOPUSIABJ(JugadorHasta)
	
	if (LetraHasta=="U")
	{
		posXHasta=YMHIHSNADE.world.centerX	;
		posYHasta=0+DUHVSKZZZD;	
	}
	if (LetraHasta=="R")
	{
		posXHasta=YMHIHSNADE.world.width-DUHVSKZZZD	;
		posYHasta=YMHIHSNADE.world.centerY	;	
	}	
	if (LetraHasta=="L")
	{
		posXHasta=0+DUHVSKZZZD	;
		posYHasta=YMHIHSNADE.world.centerY	;	
	}		
	if (LetraHasta=="D")
	{
		posXHasta=YMHIHSNADE.world.centerX	;
		if (twEnviarEmoticonoGlobalParaMi.isRunning)
		{
			posXHasta=posXHasta+200
		}
		posYHasta=YMHIHSNADE.world.height-DesplazamientoD	;	
	}		
	
	var EmoticonoEnviar=CalcularVariableEmoticono(LetraDesde,LetraHasta)
	
	EmoticonoEnviar.scale.setTo(0.6,0.6)
	EmoticonoEnviar.bringToTop();
		
	EmoticonoEnviar.revive();
	EmoticonoEnviar.x=posXDesde
	EmoticonoEnviar.y=posYDesde
	EmoticonoEnviar.frameName=idEmoticonoServer
	
	
	twDesplazamientoEmoticono=CalcularTweenEmoticono(LetraDesde,LetraHasta)
		
	Renderizar(true);
	//console.log("EMOTICONO "+idEmoticonoServer)
	//var EmoticonoEnviar=YMHIHSNADE.add.image(posXDesde,posYDesde,'emoticonos_server',idEmoticonoServer);
	
	if (EmoticonoEnviar.frameName!=undefined && !twDesplazamientoEmoticono.isRunning)
	{
		GrupoEmojis.add(EmoticonoEnviar);
		YMHIHSNADE.world.bringToTop(GrupoEmojis);
		EmoticonoEnviar.anchor.setTo(0.5, 0.5)


		   //     YMHIHSNADE.add.tween(EmoticonoEnviar).to({y: 240}, 1000, Phaser.Easing.Bounce.Out, true, 100, 0);

		   
		Efecto=Math.floor(Math.random() * 3) + 1 

		if (Efecto==1) //Rebote
		{
			EfectoMovimiento= Phaser.Easing.Bounce.Out;
			//twDesplazamientoEmoticono=YMHIHSNADE.add.tween(EmoticonoEnviar).to({x:posXHasta,y:posYHasta}, vTiempoEmotiMover, EfectoMovimiento,true);

		}

		if (Efecto==2) 
		{
			EfectoMovimiento= Phaser.Easing.Sinusoidal.InOut;
			//twDesplazamientoEmoticono=YMHIHSNADE.add.tween(EmoticonoEnviar).to({x:posXHasta,y:posYHasta}, vTiempoEmotiMover, EfectoMovimiento,true);
		}	
		
		if (Efecto==3) //Rebote
		{
			EfectoMovimiento= Phaser.Easing.Linear.None;
			//twDesplazamientoEmoticono=YMHIHSNADE.add.tween(EmoticonoEnviar).to({x:posXHasta,y:posYHasta}, vTiempoEmotiMover, EfectoMovimiento,true);
		}	


		Rotar=Math.floor(Math.random() * 5) + 1 
		if (Rotar<=2)
		{
			Rotar=true;
		}
		else
		{
			Rotar=false;
		}

		var MOFGFYOVIG=0;
		if (Rotar==true && Efecto!=1 )
		{
			MOFGFYOVIG=360
			//twDesplazamientoEmoticono=YMHIHSNADE.add.tween(EmoticonoEnviar).to({angle: 360}, vTiempoEmotiMover, Phaser.Easing.Cubic.In, true, 100, 0);
		}
		
		
		twDesplazamientoEmoticono.target=EmoticonoEnviar
		twDesplazamientoEmoticono.timeline=[]		
		twDesplazamientoEmoticono.to({x:posXHasta,y:posYHasta,angle: MOFGFYOVIG}, vTiempoEmotiMover, EfectoMovimiento,true);
		twDesplazamientoEmoticono.onComplete.addOnce(  function(){
			twDesplazamientoEmoticono.target=EmoticonoEnviar.scale
			twDesplazamientoEmoticono.timeline=[]	
			twDesplazamientoEmoticono.to( {x:1.2,y:1.2}, vTiempoEmotiMover, Phaser.Easing.Linear.None,true,vTiempoEmotiDesaparecer)
			twDesplazamientoEmoticono.onComplete.addOnce(  function(){
				twDesplazamientoEmoticono.target=EmoticonoEnviar.scale
				twDesplazamientoEmoticono.timeline=[]	
				twDesplazamientoEmoticono.to( {x:1.2,y:1.2}, vTiempoEmotiMover, Phaser.Easing.Linear.None,true,vTiempoEmotiDesaparecer)
				twDesplazamientoEmoticono.onComplete.addOnce(  function(){
					EmoticonoEnviar.bringToTop();
					EmoticonoEnviar.kill();//2.0.1 clave:rehuse
					Renderizar(true);
				})
			})
		
		})
	
		
		


		

		
		/*
		var twEmoticono=YMHIHSNADE.add.tween(EmoticonoEnviar.scale).to( {x:1.2,y:1.2}, vTiempoEmotiMover, Phaser.Easing.Linear.None,true,vTiempoEmotiDesaparecer);
		twEmoticono.onComplete.add(  function(){
									//if (DQKYYAPEEN.isRunning==false && MJBCTSKUIB.isRunning==false)
									//{
										twEmoticono=YMHIHSNADE.add.tween(EmoticonoEnviar.scale).to( {x:1.2,y:1.2}, 700, Phaser.Easing.Linear.None,true,0);
										twEmoticono.onComplete.add(  function(){
											EmoticonoEnviar.bringToTop();
											EmoticonoEnviar.kill();//2.0.1 clave:rehuse
											Renderizar(true);
										});
									//}
									})*/
		
	}
}

function CalculaQuienEmoticono(QuienSoy,Check)
{
	var QOWECQVXCM=0;
	if(QuienSoy==1)
	{
		if (Check==1)
		{
			QOWECQVXCM=2
		}
		if (Check==2)
		{
			QOWECQVXCM=3
		}
		if (Check==3)
		{
			QOWECQVXCM=4
		}	
	}
	if(QuienSoy==2)
	{
		if (Check==1)
		{
			QOWECQVXCM=1
		}
		if (Check==2)
		{
			QOWECQVXCM=3
		}
		if (Check==3)
		{
			QOWECQVXCM=4
		}	
	}	
	if(QuienSoy==3)
	{
		if (Check==1)
		{
			QOWECQVXCM=1
		}
		if (Check==2)
		{
			QOWECQVXCM=2
		}
		if (Check==3)
		{
			QOWECQVXCM=4
		}	
	}	
	if(QuienSoy==4)
	{
		if (Check==1)
		{
			QOWECQVXCM=1
		}
		if (Check==2)
		{
			QOWECQVXCM=2
		}
		if (Check==3)
		{
			QOWECQVXCM=3
		}	
	}	
		
	return QOWECQVXCM;
}
function EnviarEmoticonoTodos()
{
		/////////////
		var AQuien;
		//var idEmoticono="Emoticono1";
		
		var idEmoticono=EmoticonoGlobal;
		
		if (idEmoticono!="" && AccesoEmoji(idEmoticono) )
		{
			var d=document.getElementById("JugadorEmoti1");
			
			
			
			if(d.checked)
			{
				AQuien=CalculaQuienEmoticono(TFSXFTYVGQ,1)
				
				
				try
				{
					socket.emit('enviar_emoticono', TFSXFTYVGQ,AQuien, idEmoticono, DFBVDPETGO) ;
					//console.log("Lo envia")
				}
				catch(e){}		
				d.checked=false;
			}
			
			var d=document.getElementById("JugadorEmoti2");
			if(d.checked)
			{
				
				AQuien=CalculaQuienEmoticono(TFSXFTYVGQ,2)
				if (AQuien>4)
				{
					AQuien=AQuien-4;
				}
				//console.log("Checked2 Soy "+TFSXFTYVGQ+" y envio a "+AQuien)
				
				try
				{
					socket.emit('enviar_emoticono', TFSXFTYVGQ,AQuien, idEmoticono, DFBVDPETGO) ;
				}
				catch(e){}		
				d.checked=false;
			}		
			
			var d=document.getElementById("JugadorEmoti3");
			if(d.checked)
			{
				AQuien=CalculaQuienEmoticono(TFSXFTYVGQ,3)
				if (AQuien>4)
				{
					AQuien=AQuien-4;
				}
				//console.log("Checked3 Soy "+TFSXFTYVGQ+" y envio a "+AQuien)
				
				try
				{
					socket.emit('enviar_emoticono', TFSXFTYVGQ,AQuien, idEmoticono, DFBVDPETGO) ;
				}
				catch(e){}		
				d.checked=false;
			}		
		}
		OcultarElegirEmoticono();
}

function EnviarEmoticono(JSKXXDPSDS)
{

	if (JSKXXDPSDS==1)
	{
		EnviarEmoticonoTodos()
	}
	else
	{
		OcultarElegirEmoticono()
	}
	

	
}
function HQWFFUCQDR(SLGKDYQCAY,UHTPGPRUJA,PartidaRecibida){
	var HAUSUTNHGI=true
	/*var i;
	//AHORA LO CONTROLA EL SERVER PERO NO LO BORRO POR AHORA
	if (MQUGCIUQII==PartidaRecibida)
	{
		for (i=0;i<=KTBOJTXFEU.length-1;i++){
			if(KTBOJTXFEU[i].AGTXFNIKQD==SLGKDYQCAY && KTBOJTXFEU[i].SSUNXNEEHN==UHTPGPRUJA && KTBOJTXFEU[i].MQUGCIUQII==PartidaRecibida){
				HAUSUTNHGI=false;
				break;
			}
		}
		
		if (HAUSUTNHGI==true){
			log(true,"Validado correctamente: LUCRWXJMDR "+SLGKDYQCAY+" "+"SSUNXNEEHN "+UHTPGPRUJA);

			KTBOJTXFEU.push(new NQMQGXXHIL(SLGKDYQCAY,UHTPGPRUJA,PartidaRecibida) );
		}
		else{
			log(false,"Validado Incorrectamente: LUCRWXJMDR "+SLGKDYQCAY+" "+"SSUNXNEEHN "+UHTPGPRUJA);
		}
	}*/
	
	return HAUSUTNHGI;
}


function TurnoYaPasado(SLGKDYQCAY,UHTPGPRUJA, PartidaRecibida){
	var YaPasado=false;
	//AHORA LO CONTROLA EL SERVER PERO NO LO BORRO POR AHORA
	/*var i;

		for (i=0;i<=KTBOJTXFEU.length-1;i++){
			if(KTBOJTXFEU[i].AGTXFNIKQD==SLGKDYQCAY && KTBOJTXFEU[i].SSUNXNEEHN==UHTPGPRUJA && KTBOJTXFEU[i].MQUGCIUQII==PartidaRecibida){
				YaPasado=true;
				break;
			}
		}
	*/
	
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

/* 2.0.7 No se usaba*/

function OSBTHSJKFW(PartidaComprobar){
	var HAUSUTNHGI=true;
	var i;
	
	//1.0.9 Antes era con TFSXFTYVGQ. Ahora con MQUGCIUQII
	
		for (i=0;i<=DCOXIXEBRJ.length-1;i++){
			if(DCOXIXEBRJ[i]==PartidaComprobar){
				HAUSUTNHGI=false;
				break;
			}
		}
	
	if (HAUSUTNHGI==true){
	
		DCOXIXEBRJ.push(PartidaComprobar);
	}
	//else{
	//	log(false,"Validado Incorrectamente: LUCRWXJMDR "+SLGKDYQCAY+" "+"SSUNXNEEHN "+UHTPGPRUJA);
	//}
	
	return HAUSUTNHGI;
}

function VerificaRepartosJugador(PartidaComprobar){
	var HAUSUTNHGI=true;
	var i;
	
	//1.0.9 Antes era con TFSXFTYVGQ. Ahora con MQUGCIUQII
	
		for (i=0;i<=DCOXIXEBRJ.length-1;i++){
			if(DCOXIXEBRJ[i]==PartidaComprobar){
				HAUSUTNHGI=false;
				break;
			}
		}
	
	
	//else{
	//	log(false,"Validado Incorrectamente: LUCRWXJMDR "+SLGKDYQCAY+" "+"SSUNXNEEHN "+UHTPGPRUJA);
	//}
	
	return HAUSUTNHGI;
}


function HGFAUFDVDF(){
	var HAUSUTNHGI=false;
	var i;
	
	for (i=0;i<=JEHYBALODM.length-1;i++){
		//console.log("ValidaTexto: "+JEHYBALODM[i].MQUGCIUQII+" "+JEHYBALODM[i].estado)
		if(JEHYBALODM[i].MQUGCIUQII==MQUGCIUQII && JEHYBALODM[i].estado==1)
		{
			HAUSUTNHGI=true;
			JEHYBALODM[i].estado=2;
			//console.log("cambio estado de "+MQUGCIUQII+" a 2")
			//break; //2.0.1 para por si acaso hay algún error
		}
	}	

	
	//console.log("SEMAFORO HGFAUFDVDF "+HAUSUTNHGI)
	
	return HAUSUTNHGI;
}

function FinalizaTextoPuntuacionJugador(){
	var HAUSUTNHGI=false;
	var i;
	
	
	for (i=0;i<=JEHYBALODM.length-1;i++){
		if(JEHYBALODM[i].MQUGCIUQII==MQUGCIUQII ){ //2.0.1 Para por si acaso ha cambiado el MQUGCIUQII
			//console.log("C A M BI O estado a 3")
			JEHYBALODM[i].estado=3;
			//console.log("cambio estado de "+MQUGCIUQII+" a 3")
		}
	}
	
	//console.log("SEMAFORO 3")
	//return HAUSUTNHGI;
}

function CompruebaPartidaFinalizada(idPartidaVieja,idPartidaNueva)
{
	var HAUSUTNHGI=false;
	var i;
	
	if (idPartidaVieja!=idPartidaNueva) //importantísimo. Petaba si desconectaba dos al principio...y al rato se generaba otra partida
	{
		if (JEHYBALODM.length==0)
		{
			HAUSUTNHGI=true;
		}
		else 
		{
			for (i=0;i<=JEHYBALODM.length-1;i++){
				//console.log("estado semaforo "+JEHYBALODM[i].MQUGCIUQII+"  "+MQUGCIUQII+"  "+JEHYBALODM[i].estado);
				if(JEHYBALODM[i].MQUGCIUQII==idPartidaVieja && JEHYBALODM[i].estado==3) // (JEHYBALODM[i].estado==1 || JEHYBALODM[i].estado==2 ))
				{
					HAUSUTNHGI=true;
					break;
				}
			}
		}
		
		if (HAUSUTNHGI==true)
		{

		
			//console.log("SEMAFORO NUEVO "+idPartidaNueva)
			JEHYBALODM.push( new ObjetoPartida(idPartidaNueva,1));
			
		}
	}
	
	return HAUSUTNHGI;
}

function CierraPartida(idPartidaComprobar)
{
	var i;
	for (i=0;i<=JEHYBALODM.length-1;i++)
	{
		if(JEHYBALODM[i].MQUGCIUQII==idPartidaComprobar &&  JEHYBALODM[i].estado==3 ){
			JEHYBALODM[i].estado=4
			//console.log("cambio estado de "+idPartidaComprobar+" a 4")
			break;
		}
	}	
}

function CompruebaPeticionReparto(idPartidaComprobar)
{
	var HAUSUTNHGI=false;
	var i;
	
	
	if (JEHYBALODM.length==0)
	{
		HAUSUTNHGI=true;
	}
	else
	{
		for (i=0;i<=JEHYBALODM.length-1;i++){
			if(JEHYBALODM[i].MQUGCIUQII==idPartidaComprobar &&  JEHYBALODM[i].estado==3 ){
				//JEHYBALODM[i].estado=4
				HAUSUTNHGI=true;
				break;
			}
		}
	}
	
	//console.log("SEMAFORO REPARTO "+idPartidaComprobar+" "+HAUSUTNHGI)
	
	
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

function MazoOBuffer(UHTPGPRUJA,SLGKDYQCAY, PartidaRecibida)
{
	var DirectoAlMazo;
	//console.log("grrr 7: "+DVNRTQIWGL+" "+UHTPGPRUJA+" "+LUCRWXJMDR+" "+SLGKDYQCAY)
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




function RQMTWGKGIA(XACEBCSJAB,STLEOJDWSU,SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ){
	var WXYPYAPQQJ=false;
	var SEQJGUOFTO;
	var i;
	var DirectoAlMazo=false;
	var u;
	

	if (MQUGCIUQII==PartidaRecibida)
	{
		for (i=0;i<=XACEBCSJAB.length-1;i++){
			
			if(XACEBCSJAB[i].TNFAGGMKXD.name==SJVCMXWVVI)
			{
				
				//console.log("Encuentro la carta ")
				WXYPYAPQQJ=true;
				
				if (VDKOVQXHON.length<=3 &&  MazoOBuffer(UHTPGPRUJA,SLGKDYQCAY)==true  ) //2.0.7 antes ponía <=4
				{ 
					//if (HQWFFUCQDR(SLGKDYQCAY,UHTPGPRUJA,PartidaRecibida))
					//{
						VDKOVQXHON.push(new TVYNYTCQYW(XACEBCSJAB[i].SGCSHJVERI,XACEBCSJAB[i].UUOPKETETA,XACEBCSJAB[i].HVCFEWNDRF,XACEBCSJAB[i].TNFAGGMKXD,null,UHTPGPRUJA,null,VMKDXVSQEY,XACEBCSJAB[i].MQUGCIUQII));
						//if [11,12].indexOf( XACEBCSJAB[i].VVRCMEUNOJ  )>=0
						//{
							MazoCartasSalidas.push(new TVYNYTCQYW(XACEBCSJAB[i].SGCSHJVERI,XACEBCSJAB[i].UUOPKETETA,XACEBCSJAB[i].HVCFEWNDRF,null,VDKOVQXHON.length,UHTPGPRUJA,SLGKDYQCAY,null,null));
						//}
					

						
						GLFVIKHXMD();
						if (VDKOVQXHON.length>0)
						{
							//1.0.9 chungoorden VDKOVQXHON.sort(sort_by('VMKDXVSQEY', false, parseFloat));
						}				
						
						
						log(true,"CREO QUE SE METE AQUI PARA MOVEL AL TABLERO "+UHTPGPRUJA);
						NAYBJTKIKA(XACEBCSJAB[i].TNFAGGMKXD);
						//console.log("voy a mover al tablero "+TXLWIIINGQ);
						QTIPILDEPH(XACEBCSJAB[i].TNFAGGMKXD,STLEOJDWSU,SLGKDYQCAY,UHTPGPRUJA,TXLWIIINGQ,XACEBCSJAB[i].SGCSHJVERI); //2.0.8054 FHEFFYUQFX
						XACEBCSJAB.splice(i,1);
					//}
					//else
					//{
					//	DesbloquearID(TXLWIIINGQ);	
					//}
					
					
				}
				else
				{

					//console.log("pero no puede entrar")
					

					//console.log("El mazo o buffer es "+MazoOBuffer(UHTPGPRUJA,SLGKDYQCAY))
					
					
					//console.log("El mazo central mide "+VDKOVQXHON.length)
					
					WXYPYAPQQJ=false; //1.0.7
				}
				/*else
				{				
					log(true,"Rellenandoo Buffer pq el FXGSEGRXKC BPDXTHCDTB mide..."+VDKOVQXHON.length+" SSUNXNEEHN "+UHTPGPRUJA+" LUCRWXJMDR "+SLGKDYQCAY);
					
				
					WSHPROHDIV.push(new TVYNYTCQYW(XACEBCSJAB[i].SGCSHJVERI,XACEBCSJAB[i].UUOPKETETA,XACEBCSJAB[i].HVCFEWNDRF,XACEBCSJAB[i].TNFAGGMKXD,null,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY));

					
					log(false,"Rellenandoo Buffer..."+XACEBCSJAB[i].SGCSHJVERI+" "+XACEBCSJAB[i].HVCFEWNDRF);
				}*/
				
			

				break;
			}
		}
	}
	//console.log("TVYNYTCQYW encontrada "+WXYPYAPQQJ);
	
	
	/*if (WXYPYAPQQJ==false) //Ya pasó el turno. Sobra esta tirada
	{
		if (TurnoYaPasado(SLGKDYQCAY,UHTPGPRUJA, PartidaRecibida)==true)
		{
			//console.log("RECUPERA_ turno pasado");		
			OGGWQECXBK(TXLWIIINGQ,false,false);
			WXYPYAPQQJ=true;
		}
		
	}*/
	
	
	
	if (WXYPYAPQQJ==false)
	{
		var	JKWEHVJQXX = YMHIHSNADE.time.create(true);
		JKWEHVJQXX.add(2000, function()
		{
			//console.log("RECUPERA_ organiza mano no encuentro carta");
			DesbloquearID(TXLWIIINGQ);			
			OGGWQECXBK(TXLWIIINGQ,true,false);
		});
		JKWEHVJQXX.start();
	}

	
	OROGRNBISW(XACEBCSJAB,STLEOJDWSU,false,false,false,false)
	
	

	//}
}


function OrganizarManoMueveCentroVerifica(XACEBCSJAB,STLEOJDWSU,SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ){
	var WXYPYAPQQJ=false;
	var SEQJGUOFTO;
	var i;
	var DirectoAlMazo=false;
	var u;
	var existe=false;

	if (MQUGCIUQII==PartidaRecibida)
	{
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
	}
	return existe;
}


function VPDVSDLPHG(UHTPGPRUJA,SJVCMXWVVI,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ){
	
	//if (TFSXFTYVGQ!=UHTPGPRUJA){
		//console.log("Llego a centro ajeno "+TXLWIIINGQ)
		if(TFSXFTYVGQ==1){
			if (UHTPGPRUJA==1){
				RQMTWGKGIA(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==2){
				RQMTWGKGIA(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==3){
				RQMTWGKGIA(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==4){
				RQMTWGKGIA(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}		
		}

		if(TFSXFTYVGQ==2){
			if (UHTPGPRUJA==2){
				RQMTWGKGIA(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==3){
				RQMTWGKGIA(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==4){
				RQMTWGKGIA(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==1){
				RQMTWGKGIA(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}		
		}

		if(TFSXFTYVGQ==3){
			if (UHTPGPRUJA==3){
				RQMTWGKGIA(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==4){
				RQMTWGKGIA(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==1){
				RQMTWGKGIA(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==2){
				RQMTWGKGIA(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}		
		}
		
		if(TFSXFTYVGQ==4){
			if (UHTPGPRUJA==4){
				RQMTWGKGIA(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==1){
				RQMTWGKGIA(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==2){
				RQMTWGKGIA(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==3){
				RQMTWGKGIA(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}		
		}
		
	//}
	//else
	//{
	//}
}

function MoverCentroAjenoVerifica(UHTPGPRUJA,SJVCMXWVVI,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ){
	
	//if (TFSXFTYVGQ!=UHTPGPRUJA){
		var verifica=false;
	
		if(TFSXFTYVGQ==1){
			if (UHTPGPRUJA==1){
				verifica=OrganizarManoMueveCentroVerifica(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==2){
				verifica=OrganizarManoMueveCentroVerifica(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==3){
				verifica=OrganizarManoMueveCentroVerifica(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==4){
				verifica=OrganizarManoMueveCentroVerifica(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}		
		}

		if(TFSXFTYVGQ==2){
			if (UHTPGPRUJA==2){
				verifica=OrganizarManoMueveCentroVerifica(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==3){
				verifica=OrganizarManoMueveCentroVerifica(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==4){
				verifica=OrganizarManoMueveCentroVerifica(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==1){
				verifica=OrganizarManoMueveCentroVerifica(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}		
		}

		if(TFSXFTYVGQ==3){
			if (UHTPGPRUJA==3){
				verifica=OrganizarManoMueveCentroVerifica(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==4){
				verifica=OrganizarManoMueveCentroVerifica(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==1){
				verifica=OrganizarManoMueveCentroVerifica(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==2){
				verifica=OrganizarManoMueveCentroVerifica(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}		
		}
		
		if(TFSXFTYVGQ==4){
			if (UHTPGPRUJA==4){
				verifica=OrganizarManoMueveCentroVerifica(AGKVNAGGLB,"D",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}	
			if (UHTPGPRUJA==1){
				verifica=OrganizarManoMueveCentroVerifica(CBCNHFGWLU,"R",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==2){
				verifica=OrganizarManoMueveCentroVerifica(TWJONOKGHC,"U",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==3){
				verifica=OrganizarManoMueveCentroVerifica(KNVKGHHTYC,"L",SJVCMXWVVI,UHTPGPRUJA,SLGKDYQCAY,VMKDXVSQEY,PartidaRecibida,TXLWIIINGQ);
			}		
		}
		
		return verifica;
		
	//}
	//else
	//{
	//}
}



function GLFVIKHXMD(){
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

			//IEQDMBJCAY.loadTexture('Boton_cantar_off', 0); //asd
			//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
			
			//IEQDMBJCAY.frameName= 'cantar gris';		//asd
			//YGTNAODFHW.frameName='cambiar 7 gris';
			
			NMABWIWAAA();
			PAHJCWBNJH();
			
		}	
	}	
}


function checkConnection() {

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
				SVHMCOYULR("Revisa tu conexión a internet");
			}

			
		
		}
		catch(e)
		{
			SVHMCOYULR("Error "+e);
		}
	}

	
	return QOWECQVXCM;
	
}
