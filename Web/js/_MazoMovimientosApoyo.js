'use strict';


function StoreRegisterProduct() {

	//socket.emit('Consola',"METODO REGISTER");
	var productInApp1;
	
	socket.emit('Consola',"Registrando..");
	try
	{
	store.register({
		id:    "001",
		alias: "android.test.purchased",
		type:  store.CONSUMABLE
	});
	}
	catch(e)
	{
		socket.emit('Consola',"METODO REGISTER "+e.message);
	}
	

	store.ready(function () {
        //console.log("STORE READY");
		//alert("Tienda lista")
		socket.emit('Consola',"STORE READY");
    }); 
	

	store.when("001").approved(function(res) {
		//alert('Product purchased');
		document.getElementById("BotonComprar").disabled=true;
		socket.emit('enviar_comprar_gbits',socket.id,PWMIBRSDCJ[0].OBTBPOULAV,1000);
		OcultarDetalleTienda();
		CerrarTienda();	
		//store.refresh();
		res.finish();
		
	});	
	
	store.when("002").approved(function(res) {
		//alert('Product purchased');
		document.getElementById("BotonComprar").disabled=true;
		socket.emit('enviar_comprar_gbits',socket.id,PWMIBRSDCJ[0].OBTBPOULAV,5000);
		OcultarDetalleTienda();
		CerrarTienda();	
		//store.refresh();
		res.finish();
		
	});	
	
	store.when("001").canceled(function(res) {
		//alert('Product purchased');
		//socket.emit('Consola',"PRODUCTO CANCELADO "+JSON.stringify(res));
	});		
	
	store.when("001").error(function(res) {
		//alert('Product purchased');
		socket.emit('Consola',"PRODUCTO ERROR "+JSON.stringify(res));
	});			


	store.when("002").canceled(function(res) {
		//alert('Product purchased');
		//socket.emit('Consola',"PRODUCTO CANCELADO "+JSON.stringify(res));
	});		
	
	store.when("002").error(function(res) {
		//alert('Product purchased');
		//socket.emit('Consola',"PRODUCTO ERROR "+JSON.stringify(res));
	});		
	
	store.refresh();
    //   console.log(JSON.stringify(store));
}



function StoreBuyProduct(Producto) {

	//socket.emit('Consola',"METODO REGISTER");
	var productInApp1;
	
	//StoreRegisterProduct();
	productInApp1 = store.get(Producto);
	//store.refresh();
}


/*function StoreBuyProduct2() {

	//socket.emit('Consola',"METODO REGISTER");
	var productInApp1;
	
	try
	{
	store.register({
		id:    "001",
		alias: "android.test.purchased",
		type:  store.CONSUMABLE
	});
	}
	catch(e)
	{
		//socket.emit('Consola',"METODO REGISTER "+e.message);
	}
	
	productInApp1 = store.get("001");

	store.ready(function () {
        //console.log("STORE READY");
		//alert("Tienda lista")
		//socket.emit('Consola',"STORE READY");
    }); 
	
	store.refresh();

	store.when("001").approved(function(res) {
		//alert('Product purchased');
		document.getElementById("BotonComprar").disabled=true;
		socket.emit('enviar_comprar_gbits',socket.id,PWMIBRSDCJ[0].OBTBPOULAV,1000);
		OcultarDetalleTienda();
		CerrarTienda();	
		res.finish();
	});	
	
	store.when("002").approved(function(res) {
		//alert('Product purchased');
		document.getElementById("BotonComprar").disabled=true;
		socket.emit('enviar_comprar_gbits',socket.id,PWMIBRSDCJ[0].OBTBPOULAV,5000);
		OcultarDetalleTienda();
		CerrarTienda();	
		res.finish();
	});	
	
	store.when("001").canceled(function(res) {
		//alert('Product purchased');
		//socket.emit('Consola',"PRODUCTO CANCELADO "+JSON.stringify(res));
	});		
	
	store.when("001").error(function(res) {
		//alert('Product purchased');
		//socket.emit('Consola',"PRODUCTO ERROR "+JSON.stringify(res));
	});			


	store.when("002").canceled(function(res) {
		//alert('Product purchased');
		//socket.emit('Consola',"PRODUCTO CANCELADO "+JSON.stringify(res));
	});		
	
	store.when("002").error(function(res) {
		//alert('Product purchased');
		//socket.emit('Consola',"PRODUCTO ERROR "+JSON.stringify(res));
	});		
	
    //   console.log(JSON.stringify(store));
}


*/

function CompraGBits(Articulo){
	//socket.emit('Consola',"COMPRANDO");
	
	//socket.emit('enviar_comprar_gbits',socket.id,PWMIBRSDCJ[0].OBTBPOULAV,200);
	//				OcultarDetalleTienda();
	//				CerrarTienda();	
	
	
	if (PWMIBRSDCJ.length>0)
	{
		if (Articulo=='Art010')
		{
			//console.log("se mete")
			StoreBuyProduct('001');
		}	
		if (Articulo=='Art011')
		{
			//console.log("se mete")
			StoreBuyProduct('002');
		}			
		store.order(vTipoCompras);
	}
}


function EnviarAjax()
{
	
	var elem = document.getElementById("myBar");   
	elem.style.width = '1%'; 

	
	var ObjetoTamano=showFileSize();
	if (ObjetoTamano.Continua==true)
	{
	
		document.getElementById('oct').value=PWMIBRSDCJ[0].OBTBPOULAV;
		try
		{
			document.getElementById('sockoct').value=socket.id;
		}
		catch(e)
		{
			document.getElementById('sockoct').value="ficticio";
		}
	
		$(document).ready(function (e) {
	
    //$("#formdetalle").on('submit', (function (e) {

		var formData = new FormData($('#formdetalle')[0]);
       // e.preventDefault();
        //$("#message").empty();
        //$('#loading').show();
        $.ajax({
            url: "http://192.168.43.100:3000/", // Url to which the request is send
            type: "POST",             // Type of request to be send, called as method
            data: formData, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
            contentType: false,       // The content type used when sending data to the server.
            cache: false,             // To unable request pages to be cached
            processData: false,
            beforeSend: function () {
               // $('.loader-img').show();
			   console.log("Antes enviar")
            },     // To send DOMDocument or non processed data file it is set to false
            success: function (data)   // A function to be called if request succeeds
            {
				console.log("Después enviar")
                /*$('.loader-img').hide();
                if (data.trim() != "")
                    $("#imresss").html(data);*/
            }
        });
    //}));
		})
	}
	

}


function showFileSize() 
{
    var input, file;
	var Continua=true;
	var RHOLNWBOXR="";
	var Error;

	var ObjetoError=function(Continua,RHOLNWBOXR)
	{
		this.Continua=Continua
		this.RHOLNWBOXR=RHOLNWBOXR
	}
    // (Can't use `typeof FileReader === "function"` because apparently
    // it comes back as "object" on some browsers. So just see if it's there
    // at all.)
    if (!window.FileReader) {
        //bodyAppend("p", "The file API isn't supported on this browser yet.");
        //return;
		Continua=false;
		RHOLNWBOXR="API no soportada en tu dispositivo";
    }

	if (Continua==true)
	{
		input = document.getElementById('file_to_upload');
		if (!input) {
			//bodyAppend("p", "Um, couldn't find the fileinput element.");
			Continua=false;
			RHOLNWBOXR="No encuentro FileImput";
		}
		else if (!input.files) {
			//bodyAppend("p", "This browser doesn't seem to support the `files` property of file inputs.");
			Continua=false;
			RHOLNWBOXR="No soportado";
		}
		else if (!input.files[0]) {
			//bodyAppend("p", "Please select a file before clicking 'Load'");
			Continua=false;
			RHOLNWBOXR="Selecciona un Fichero";
		}
		else {
			file = input.files[0];
		
			//bodyAppend("p", "File " + file.name + " is " + file.size + " bytes in size");
			if (file.size>=3*1024*1024)
			{
				Continua=false;
				RHOLNWBOXR="Reduce el tamaño del fichero antes de subirlo";
			}
			else
			{
				var Extension=file.name.split('.').pop().toLowerCase()
				if ( Extension!="jpg" &&  Extension!="jpeg" && Extension!="png" && Extension!="gif")
				{
					Continua=false;
					RHOLNWBOXR="El fichero debe ser una imagen";					
				}
			}
		}
	}
	
	Error=new ObjetoError(Continua,RHOLNWBOXR)
	console.log("Tamaño: "+Error.Continua+" "+Error.RHOLNWBOXR)
	if (Error.Continua==false)
	{
		document.getElementById('TextErrorTienda').textContent=Error.RHOLNWBOXR
	}
	
	return Error;
}	

function CambiarNombreJugador()
{
	try
	{
		if (document.getElementById('txtCambiaNombre').value!="" && PWMIBRSDCJ.length>0)
		{
			socket.emit('cambiar_nombre', PWMIBRSDCJ[0].OBTBPOULAV, document.getElementById('txtCambiaNombre').value);
		}
	}
	catch(e){}
}

function ActivarCuentaPalos()
{
	if (GlobalActivaCuentaPalos==true)
	{
		BotonCuentaPaloOros.revive();
		BotonCuentaPaloCopas.revive();
		BotonCuentaPaloEspadas.revive();
		BotonCuentaPaloBastos.revive();
		
		textoCuentaPaloOros.revive();
		textoCuentaPaloCopas.revive();
		textoCuentaPaloEspadas.revive();
		textoCuentaPaloBastos.revive();	
	}
}

function DesactivarCuentaPalos()
{
	BotonCuentaPaloOros.kill();
	BotonCuentaPaloCopas.kill();
	BotonCuentaPaloEspadas.kill();
	BotonCuentaPaloBastos.kill();
	
	textoCuentaPaloOros.kill();
	textoCuentaPaloCopas.kill();
	textoCuentaPaloEspadas.kill();
	textoCuentaPaloBastos.kill();
}

function SeleccionaEmoti(tabla,celda)
{
	
	
	var i;
	var u;
	var d;
	var x;
	//console.log(d.rows)
	//var a=d.rows
	var filas=0;
	var columnas;
	var actualtabla=""
	
	//
	var allTables = document.getElementById("seleccionaemoji_carrusel").getElementsByTagName("table");
	//console.log(allTables);
	
	for( x = 0; x < allTables.length; x++){
		
		if (allTables[x].id.indexOf("tablaEmojis")!=-1)
		{
			//console.log("ESTOY "+allTables[x].id)
			d=document.getElementById(allTables[x].id)
			filas=d.rows
			for (i=0;i<=filas.length-1;i++)
			{
				columnas=filas[i].cells.length;
				for (u=0;u<=columnas-1;u++)
				{

						filas[i].cells[u].style.backgroundColor="white";

				}
			}
		}
		
		//td.innerHTML = // do something w/ inner html
		//console.log("TABLA "+td);
	}



	//document.getElementById('slick-slide01').style.backgroundColor ="red";
	//var d=document.getElementById('slick-slide01')

	
	//console.log( tabla +" *  "+celda)
	d=document.getElementById(tabla)
	filas=d.rows
	for (i=0;i<=filas.length-1;i++)
	{
		
		columnas=filas[i].cells.length;
		//console.log(filas[i].cells)
		for (u=0;u<=columnas-1;u++)
		{
			//console.log("Se mete")
			if (filas[i].cells[u].id==celda)
			{
				filas[i].cells[u].style.backgroundColor="#66ff33";
				EmoticonoGlobal=celda;
			}
			else
			{
				filas[i].cells[u].style.backgroundColor="white";
			}
			//console.log(filas[i].cells[u].style.backgroundColor)
		}
	}
	//console.log(a[0].cells.length)
	//var d =document.getElementById('slick-slide01')
	//console.log(d);
	//celda.style.backgroundColor="#66ff33" 
}

function SeleccionaJugadorEmoti(Check)
{
	var d=document.getElementById(Check);
	d.checked= !(d.checked);	
}



function track(pagina)
{
	try
	{
		if( window.plugins)	
		{
			gaU('create','UA-97842450-1',{'storage':'none','clientId':device.uuid});
			gaU('set','checkProtocolTask',null);
			//gaU('set','anonymizeIp',true);
			gaU('set','forceSSL',true);
			if (pagina=='index')
			{
				gaU('send','pageview',{'title':'Movil Entrada','page':'/index'});
			}
			else
			{
				gaU('send','pageview',{'title':'Movil Reparto','page':'/reparto'});
			}
			//gaU('send','event',{'eventCategory':'My_Category','eventAction':'My_Action','eventLabel':'Event_Label','eventValue':11});	
		}
		else
		{
			ga('create', 'UA-97842450-1', 'auto');
			ga('require', 'displayfeatures');
			//ga('send', 'pageview');	
			if (pagina=='index')
			{
				ga('send','pageview',{'title':'PC Entrada','page':'/index'});
			}
			else
			{
				ga('send','pageview',{'title':'PC Reparto','page':'/reparto'});
			}
			//console.log("Enviado")
		}
	}
	catch(e)
	{}
		
}

function AbrirCerrarLateral()
{
	var d=document.getElementById('blateral');
	d.click();
	CargaOpcionesDefecto();
}
/*BNVXVJHWWQ=function()
{

					
					

	//var x=WIEVLYANFM("U_C",0)-COIVBWRMCC-45;
	//var y=YMHIHSNADE.world.height-SXSHBRJFIR-PPLOSJIWHO+(YAJVUBPNNW)-10;
	
	var	x=WIEVLYANFM("ULTIMA_Baza",0);
	var y=FIGQBSJQGA("ULTIMA_Baza",0)-100;
			
	POUWEIOUWQ.x=x;
	POUWEIOUWQ.y=y;
	//POUWEIOUWQ.tint=Phaser.Color.getColor(200,200,200);
	WWFSQDQYYU.add(POUWEIOUWQ);
	YMHIHSNADE.add.tween(POUWEIOUWQ).to( { alpha: 1 }, 1500, KYFMRVNHIQ, true);
}*/

function HJBVQUGKVY()
{
	if( window.plugins)	
	{		
		var SO=JHDSFWFWUU();
		if (SO.toUpperCase()!="IOS")
		{	
			  AppRate.preferences = {
				useLanguage: 'es',
				simpleMode:true,
			  displayAppName: 'GuiñotePRO',
			  usesUntilPrompt: 0,
			  promptAgainForEachNewVersion: false,
			  inAppReview: false,
			  storeAppURL: {
				ios: '1232782144',
				android: 'market://details?id=es.guinotepro.guinotepro'
			  },
			  customLocale: {
				title: "¡Valora %@!",
				message: "Te necesitamos para seguir creciendo.",
				cancelButtonLabel: "No, Gracias",
				laterButtonLabel: "Más tarde",
				rateButtonLabel: "Valorar ahora",
				yesButtonLabel: "Sí",
				noButtonLabel: "No",
				appRatePromptTitle: '¿Te gusta %@?'//,
				//feedbackPromptTitle: '¿Algún comentario?'  
			  },
			  callbacks: {
				handleNegativeFeedback: function(){
				  window.open('mailto:feedback@example.com','_system');
				},
				onRateDialogShow: function(callback){
				  //socket.emit('Consola','Ha pulsado rate');
				},
				onButtonClicked: function(buttonIndex){
					//socket.emit('Consola','va a enviar '+buttonIndex);
					if (PWMIBRSDCJ.length>0)
					{
						//socket.emit('Consola','enviar '+buttonIndex+" "+PWMIBRSDCJ[0].OBTBPOULAV);
						try
						{
							socket.emit('EnviaValoraApp', buttonIndex, PWMIBRSDCJ[0].OBTBPOULAV );
						}
						catch(e){}
					}
				}
			  }
			};
			 
			AppRate.promptForRating();
		}
	}
}

function LLALALASCC()
{
	YGTNAODFHW.frameName='cambiar 7';
	YGTNAODFHW.onInputOver.add(function(){
		YGTNAODFHW.frameName='cambiar 7';
	});
	YGTNAODFHW.onInputUp.add(function(){
		YGTNAODFHW.frameName='cambiar 7';
	});	
	YGTNAODFHW.onInputDown.add(function(){
		YGTNAODFHW.frameName='cambiar 7';
	});	
	YGTNAODFHW.onInputOut.add(function(){
		YGTNAODFHW.frameName='cambiar 7';
	});		
}

function NMABWIWAAA()
{
	YGTNAODFHW.frameName='cambiar 7 gris';
	YGTNAODFHW.onInputOver.add(function(){
		YGTNAODFHW.frameName='cambiar 7 gris';
	});
	YGTNAODFHW.onInputUp.add(function(){
		YGTNAODFHW.frameName='cambiar 7 gris';
	});	
	YGTNAODFHW.onInputDown.add(function(){
		YGTNAODFHW.frameName='cambiar 7 gris';
	});	
	YGTNAODFHW.onInputOut.add(function(){
		YGTNAODFHW.frameName='cambiar 7 gris';
	});		
}

function PPPAPAPQCD()
{
	IEQDMBJCAY.frameName='cantar';
	IEQDMBJCAY.onInputOver.add(function(){
		IEQDMBJCAY.frameName='cantar';
	});
	IEQDMBJCAY.onInputUp.add(function(){
		IEQDMBJCAY.frameName='cantar';
	});	
	IEQDMBJCAY.onInputDown.add(function(){
		IEQDMBJCAY.frameName='cantar';
	});	
	IEQDMBJCAY.onInputOut.add(function(){
		IEQDMBJCAY.frameName='cantar';
	});		
}

function PAHJCWBNJH()
{
	IEQDMBJCAY.frameName='cantar gris';
	IEQDMBJCAY.onInputOver.add(function(){
		IEQDMBJCAY.frameName='cantar gris';
	});
	IEQDMBJCAY.onInputUp.add(function(){
		IEQDMBJCAY.frameName='cantar gris';
	});	
	IEQDMBJCAY.onInputDown.add(function(){
		IEQDMBJCAY.frameName='cantar gris';
	});	
	IEQDMBJCAY.onInputOut.add(function(){
		IEQDMBJCAY.frameName='cantar gris';
	});		
}
	
	
function MaliDetect() {
	//unico=1;
    var canv = document.createElement('canvas');
    canv.setAttribute("width", "1");
    canv.setAttribute("height", "1");
    document.body.appendChild(canv);

    var canvas = document.getElementsByTagName('canvas');
    var gl = canvas[0].getContext('webgl', { stencil: true });
    canvas[0].parentNode.removeChild(canvas[0]);

    if (!gl)
        return false;

    var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
	
    var renderer;
    if (dbgRenderInfo != null)
	{
        renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
		//alert(renderer);
    }
	else
	{
		return false;
	}

    //var n = renderer.search("Mali-400");
	if (KYLIAIETHX==false)
	{
		SVHMCOYULR(renderer);
	}
	var n = renderer.search(/mali/i);
    if (n != -1)
        return true;
    else
        return false;
}

function MaliDetect2() {
   
	var canv = document.createElement('canvas');
    var canvas = document.getElementsByTagName('canvas');
    var gl = canvas[0].getContext('webgl', { stencil: true });
    

    if (!gl)
        return false;

    var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
    var renderer;
    if (dbgRenderInfo != null)
        renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
    else return false;

    //var n = renderer.search("Mali-400");
	
	if (KYLIAIETHX==false)
	{
		alert(renderer);
	}
	var n = renderer.search(/mali/i);
    if (n != -1)
	{
		alert("ENCONTRADO");
        return true;
    }
	else
	{
		alert("NO NCONTRADO");
		return false;
	}
        
}

function OTGNMRHTVK()
{
	return ((UHHXSNXXJK>=JLVDFTPUNI || PXGXKDDNFK>=JLVDFTPUNI) && EVAILWGGKX==true);	
}

function PPWJOWHOIW()
{
	HUUCUYFBLW=YMHIHSNADE.time.create(false);
	HYSGUYGUYT=YMHIHSNADE.time.create(false);
	BGHJGDWJVI=YMHIHSNADE.time.create(false); //1.0.6
	CVTBLMKIGL=YMHIHSNADE.time.create(false);
	MMCDRVCGAV=YMHIHSNADE.time.create(false);	
	TKXPPGUPVV=YMHIHSNADE.time.create(false);
	timerrecolector=YMHIHSNADE.time.create(false);
}

function HUCLBWTDFV(UHTPGPRUJA,AWCCMSCOPO,OMDVKATFLQ)
{
	
	var STLEOJDWSU;
	var MUNNUSLXFH;
	var FWXWCWPXPK;
	var XACEBCSJAB;
	var DVWJGSLMYC;
	var VMMMRXJYSL;
	var i;
	var GRNXLBNUJR;
	var YGYIBEIGPR;
	var JQGKJGKCKJ;
	var IUQYICUQIU;
	var JSHKAHUIQE;
	var NBVBVBNVCQ;
	var JHKDVHWODW;
	
		
	if (LUCRWXJMDR<=4)
	{
		
		STLEOJDWSU=HHOPUSIABJ(UHTPGPRUJA);
		if (STLEOJDWSU=="D")
		{
			XACEBCSJAB=AGKVNAGGLB;
		}
		if (STLEOJDWSU=="U")
		{
			XACEBCSJAB=TWJONOKGHC
		}
		if (STLEOJDWSU=="L")
		{
			XACEBCSJAB=KNVKGHHTYC
		}
		if (STLEOJDWSU=="R")
		{
			XACEBCSJAB=CBCNHFGWLU;
		}
		
		if (AWCCMSCOPO=="oros")
		{
			DVWJGSLMYC=8;
			VMMMRXJYSL=10;
		}
		if (AWCCMSCOPO=="copas")
		{
			DVWJGSLMYC=18;
			VMMMRXJYSL=20;
		}
		if (AWCCMSCOPO=="espadas")
		{
			DVWJGSLMYC=28;
			VMMMRXJYSL=30;
		}		
		if (AWCCMSCOPO=="bastos")
		{
			DVWJGSLMYC=38;
			VMMMRXJYSL=40;
		}	
		
		var QLOWMPCLQW;
		var GTAHPENEVN;

		for (i=0;i<=XACEBCSJAB.length-1;i++)
		{
			log(false,"CARTAAAAAAAASSSS: "+XACEBCSJAB[i].TNFAGGMKXD.name);
			if(XACEBCSJAB[i].TNFAGGMKXD.name==DVWJGSLMYC  )
			{
					var QLOWMPCLQW=i;
			}
			
			if(XACEBCSJAB[i].TNFAGGMKXD.name==VMMMRXJYSL  )
			{
					var GTAHPENEVN=i;
			}
		}
		
		if (QLOWMPCLQW!=undefined && GTAHPENEVN!=undefined)
		{
			JQGKJGKCKJ=XACEBCSJAB[QLOWMPCLQW].TNFAGGMKXD;
			NBVBVBNVCQ=XACEBCSJAB[QLOWMPCLQW].TNFAGGMKXD.name
			IUQYICUQIU=XACEBCSJAB[GTAHPENEVN].TNFAGGMKXD;
			JHKDVHWODW=XACEBCSJAB[GTAHPENEVN].TNFAGGMKXD;
			
			if (OMDVKATFLQ==20 && STLEOJDWSU!="D")
			{

					try
					{
						JQGKJGKCKJ.loadTexture(NXNXBWBBWL,AKEULTNWHL(JQGKJGKCKJ), 0);
					}
					catch(e){}
					
					GRNXLBNUJR = YMHIHSNADE.add.tween(JQGKJGKCKJ).to( { alpha: 1 }, 2000, KYFMRVNHIQ, true);
					GRNXLBNUJR.onComplete.add(  function(){
							
							try
							{
								JSHKAHUIQE=true;
								for (i=0;i<=VDKOVQXHON.length-1;i++)
								{
									if (VDKOVQXHON[i].AAJNQWXHMY.name==NBVBVBNVCQ)
									{
										JSHKAHUIQE=false;
									}
								}	
								CHJKAHKJHC();
							}
							catch(e)
							{
								JSHKAHUIQE=false;
								
							}

							
							if (JSHKAHUIQE==true)
							{
								//CHJKAHKJHC();
								/*try
								{
									JQGKJGKCKJ.loadTexture(RCYRGXLWBR, 0);
									
								}
								catch(e)
								{
									try
									{
										JQGKJGKCKJ.loadTexture("Reverso", 0);
									}
									catch(e){}
								
								}*/
							}
						}
					);
					
					try
					{
						IUQYICUQIU.loadTexture(NXNXBWBBWL,AKEULTNWHL(IUQYICUQIU), 0);
					}
					catch(e){}
					
					YGYIBEIGPR = YMHIHSNADE.add.tween(IUQYICUQIU).to( { alpha: 1 }, 2000, KYFMRVNHIQ, true);
					YGYIBEIGPR.onComplete.add(  function(){
							
							try
							{
								CHJKAHKJHC();
								JSHKAHUIQE=true;
								for (i=0;i<=VDKOVQXHON.length-1;i++)
								{
									if (VDKOVQXHON[i].AAJNQWXHMY.name==JHKDVHWODW)
									{
										JSHKAHUIQE=false;
									}
								}	
							}
							catch(e)
							{
								JSHKAHUIQE=false;
								//CHJKAHKJHC();
							}

							
							if (JSHKAHUIQE==true)
							{
								//CHJKAHKJHC();
								/*try
								{
									IUQYICUQIU.loadTexture(RCYRGXLWBR, 0);
									
								}
								catch(e)
								{
									try
									{
										IUQYICUQIU.loadTexture("Reverso", 0);
									}
									catch(e){}
								
								}*/
							}
						}
					);
					
				
			}
		}
	}

}

function UYAKDBNLTD(){
	var i;
	//try
	//{
		for (i=0;i<=KNVKGHHTYC.length-1;i++)
		{
			KNVKGHHTYC[i].TNFAGGMKXD.loadTexture(NXNXBWBBWL,AKEULTNWHL(KNVKGHHTYC[i].TNFAGGMKXD), 0);
		}
		for (i=0;i<=TWJONOKGHC.length-1;i++)
		{
			TWJONOKGHC[i].TNFAGGMKXD.loadTexture(NXNXBWBBWL,AKEULTNWHL(TWJONOKGHC[i].TNFAGGMKXD), 0);
		}		
		for (i=0;i<=CBCNHFGWLU.length-1;i++)
		{
			CBCNHFGWLU[i].TNFAGGMKXD.loadTexture(NXNXBWBBWL,AKEULTNWHL(CBCNHFGWLU[i].TNFAGGMKXD), 0);
		}		
	//}
	//catch(e){}

}

function AKEULTNWHL(TNFAGGMKXD)
{
	var XRJIFVUUGG;
	
	/*if(TFSXFTYVGQ==1)
	{
		XRJIFVUUGG="A";
	}	
	else
	{
		XRJIFVUUGG="A";		
	}
	//console.log("E");
	//console.log(TNFAGGMKXD.name);
	if (TNFAGGMKXD.name<=9)
	{
		XCKJMDNBYC=XRJIFVUUGG+"0"+TNFAGGMKXD.name.toString();
	}
	else
	{
		XCKJMDNBYC=XRJIFVUUGG+TNFAGGMKXD.name.toString();
	}
	
	XCKJMDNBYC='1_oros';*/
	
	var XCKJMDNBYC;
					
	if (TNFAGGMKXD.name<=10)
	{
		XCKJMDNBYC=(TNFAGGMKXD.name-0)+"_oros";
	}
	else
	{
		if (TNFAGGMKXD.name<=20)
		{
			XCKJMDNBYC=(TNFAGGMKXD.name-10)+"_copas";
		}
		else
		{
			if (TNFAGGMKXD.name<=30)
			{
				XCKJMDNBYC=(TNFAGGMKXD.name-20)+"_espadas";
			}
			else
			{
				XCKJMDNBYC=(TNFAGGMKXD.name-30)+"_bastos";
			}
		}
		
	}
					
	return XCKJMDNBYC;
}
function NAYBJTKIKA(TNFAGGMKXD){
	var XCKJMDNBYC;
	if (HBFBHWJQSQ==false)
	{
		try
		{
			

			//2.0.1 TNFAGGMKXD.loadTexture(AKEULTNWHL(TNFAGGMKXD), 0);
			//TNFAGGMKXD.loadTexture(NXNXBWBBWL,AKEULTNWHL(TNFAGGMKXD));
			TNFAGGMKXD.loadTexture(NXNXBWBBWL);
			TNFAGGMKXD.frameName=AKEULTNWHL(TNFAGGMKXD)
			//a=YMHIHSNADE.cache.getFrame('BMANCBQGIU');
			//Phaser.Texture.fromFrame('BMANCBQGIU')
			//TNFAGGMKXD.frame=a;
			//TNFAGGMKXD.frameName= 'BMANCBQGIU';
		}
		catch(e){
		}
	}
}

function XNFDNBQFUA(TNFAGGMKXD){	
	if (HBFBHWJQSQ==false)
	{
		//log(true,"El reverso global es: "+RCYRGXLWBR)
		try
		{
			if (YMHIHSNADE.cache.checkImageKey(RCYRGXLWBR))
			{
				TNFAGGMKXD.loadTexture(RCYRGXLWBR, 0);
			}
			else
			{
				RCYRGXLWBR='Reverso'
				TNFAGGMKXD.loadTexture(RCYRGXLWBR, 0);
			}
		}
		catch(e)
		{
			log(true,"El reverso con el catch "+TNFAGGMKXD.key);
			try
			{
				RCYRGXLWBR='Reverso'
				TNFAGGMKXD.loadTexture(RCYRGXLWBR, 0);
				
			}
			catch(u)
			{}
		}
	}
	
	
}
function NPOUCHQXMY(UHTPGPRUJA,SJVCMXWVVI,TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ,DesdeForzarCambio){
  var i;
  var XACEBCSJAB;
  var UBWRXKMTQN;
  var LSKPLOTYIB=false;
  var NJGFWACAPY;
  //YGTNAODFHW.kill();
	//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
	//YGTNAODFHW.frameName='cambiar 7 gris';
console.log("Entra en ajeno")
Renderizar(true, "cambio 7 ajeno");
  NMABWIWAAA();
  
  UBWRXKMTQN=HHOPUSIABJ(UHTPGPRUJA);
   log(false,"SSUNXNEEHN 7: "+UHTPGPRUJA+"STLEOJDWSU: "+UBWRXKMTQN+" KEY: "+SJVCMXWVVI)
   
  	if (UBWRXKMTQN=="D"){
		XACEBCSJAB=AGKVNAGGLB;
	}
    if (UBWRXKMTQN=="L"){
		XACEBCSJAB=KNVKGHHTYC;
	}
    if (UBWRXKMTQN=="U"){
		XACEBCSJAB=TWJONOKGHC;
	}
    if (UBWRXKMTQN=="R"){
		XACEBCSJAB=CBCNHFGWLU;
	}	
	
	for (i=0;i<=XACEBCSJAB.length-1;i++)
	{
		if(XACEBCSJAB[i].TNFAGGMKXD.name==SJVCMXWVVI)
		{
			LSKPLOTYIB=true;
			break;
		}
	}
	
	if (LSKPLOTYIB==true)
	{
		Renderizar(true, "Cambio 7 ajeno 2");
		log(false,"ENCONTRADA");
		NJGFWACAPY=XACEBCSJAB[i].TNFAGGMKXD
		NAYBJTKIKA(NJGFWACAPY);
		NJGFWACAPY.sendToBack();
				
		FBSDMRLVEL.push(new TVYNYTCQYW(XACEBCSJAB[i].SGCSHJVERI,XACEBCSJAB[i].UUOPKETETA,XACEBCSJAB[i].HVCFEWNDRF,XACEBCSJAB[i].TNFAGGMKXD,null,null,null,null,XACEBCSJAB[i].MQUGCIUQII));
		
		COTMMCVJWP.add(XACEBCSJAB[i].TNFAGGMKXD);
		YMHIHSNADE.world.bringToTop(VDKOVQXHON);
		YMHIHSNADE.world.bringToTop(AGKVNAGGLB);
		
		XACEBCSJAB.splice(i,1);
		OROGRNBISW(XACEBCSJAB,UBWRXKMTQN,false,false,false,false);
		

		
		
		
		//HHBPAROITT = YMHIHSNADE.add.tween(NJGFWACAPY);
		HHBPAROITT.timeline = [];
		HHBPAROITT.target=NJGFWACAPY
		HHBPAROITT.updateTweenData('target',NJGFWACAPY)
		HHBPAROITT.to( {x:(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6))  - (YAJVUBPNNW*8) +  COIVBWRMCC)/2)+ (1 *(COIVBWRMCC+ YAJVUBPNNW))
		,y:PXEBTYBHGS,
		angle : 90
		}, 500, BSXWFYLCEW);		
		
		HHBPAROITT.onComplete.addOnce( 			
			function () {
				GNAHFPUEID(XACEBCSJAB,UBWRXKMTQN,UHTPGPRUJA,TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ,DesdeForzarCambio);
				if (UBWRXKMTQN=="D")
				{
					//YMHIHSNADE.add.tween(NJGFWACAPY.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
					NJGFWACAPY.scale.setTo( 1,1);
				}
			} ,this)

		//if (UBWRXKMTQN=="D")
		//{
			//YMHIHSNADE.add.tween(NJGFWACAPY.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
		//	YMHIHSNADE.add.tween(NJGFWACAPY.scale).to( {x:1,y:1}, IRXOKNWTLV, BSXWFYLCEW,true);
		//}					
		
		HHBPAROITT.start();	
	}
	else{
		//log(false,"NO ENCONTRADA");
	}
	
	
	
}


function TengoMedioCuarenta(MazoTrabajo)
{
	var i;
	var RTOSLKFWHC=false;
	for (i=0;i<=MazoTrabajo.length-1;i++)
	{
		if( (MazoTrabajo[i].VVRCMEUNOJ==9 || MazoTrabajo[i].VVRCMEUNOJ==10) && MazoTrabajo[i].SGCSHJVERI==TGTQPBEQFR)
		{
			RTOSLKFWHC=true;
			break;
		}
	}
	return RTOSLKFWHC;
}
function QPGADJGDVQ(Jugador7)
{
	var i;
	var NJGFWACAPY;
	var LSKPLOTYIB=false;
	var XACEBCSJAB;
	var LECTUTFGKY;
	
		if ( TFSXFTYVGQ==1 || TFSXFTYVGQ==3 )
		{
			
			if ( Jugador7==1 || Jugador7==3) {
				if (PPTWRPRLSI==true)
				{
					LECTUTFGKY=true;
				}
				else
				{
					LECTUTFGKY=false;
				}
			}
			else
			{
				if (PPTWRPRLSI==true)
				{
					LECTUTFGKY=false;
				}
				else
				{
					LECTUTFGKY=true;
				}
			}
		}
		
		if ( TFSXFTYVGQ==2 || TFSXFTYVGQ==4 ) //No hago else porque se ve más claro
		{
			if ( Jugador7==2 || Jugador7==4) {
				if (PPTWRPRLSI==true)
				{
					LECTUTFGKY=true;
				}
				else
				{
					LECTUTFGKY=false;
				}
			}
			else
			{
				if (PPTWRPRLSI==true)
				{
					LECTUTFGKY=false;
				}
				else
				{
					LECTUTFGKY=true;
				}
			}
		}
			
			
			
	
   var UBWRXKMTQN=HHOPUSIABJ(Jugador7);
 
   
	if (UBWRXKMTQN=="D"){
		XACEBCSJAB=AGKVNAGGLB;
	}
	if (UBWRXKMTQN=="L"){
		XACEBCSJAB=KNVKGHHTYC;
	}
	if (UBWRXKMTQN=="U"){
		XACEBCSJAB=TWJONOKGHC;
	}
	if (UBWRXKMTQN=="R"){
		XACEBCSJAB=CBCNHFGWLU;
	}	
			
	
	if ( ( (EGPDVIEJEL==true && SNJCSVWFCC()) || EGPDVIEJEL==false ) && LUCRWXJMDR<=4    )
	{
		//if (YGTNAODFHW.frameName=='cambiar 7') 2.0.1 clave:7gris
		if ( (VDKOVQXHON.length==0 || VDKOVQXHON.length==1) && ( (LECTUTFGKY==true && TengoEl7(Jugador7)==true && Jugador7==TFSXFTYVGQ)
			
		||
		(LECTUTFGKY==true && TengoEl7(Jugador7)==true && Jugador7!=TFSXFTYVGQ && PermisoParaTomarControl(Jugador7) && FBSDMRLVEL[0].VVRCMEUNOJ>7 && 
		 
		 (EVAILWGGKX==true || (EVAILWGGKX==false && (FBSDMRLVEL[0].VVRCMEUNOJ==9  || FBSDMRLVEL[0].VVRCMEUNOJ==10 ) && TengoMedioCuarenta(XACEBCSJAB)==true  )  )

		) //Cambio por otro
		//ESKTEXAVHU==TFSXFTYVGQ cabezon
		
		) //2.0.1 clave:7gris
		)
		{
			

				
			
			
			//YGTNAODFHW.kill();
			//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
			//YGTNAODFHW.frameName='cambiar 7 gris';
			NMABWIWAAA();
			
			for (i=0;i<=XACEBCSJAB.length-1;i++)
			{
				if(XACEBCSJAB[i].HVCFEWNDRF==7 && XACEBCSJAB[i].SGCSHJVERI==TGTQPBEQFR)
				{
					LSKPLOTYIB=true;
					break;
				}
			}
			
			if (LSKPLOTYIB==true)
			{
				Renderizar(true, "Cambiar 7")
				if (EGPDVIEJEL==true)
				{

					/////////////
				
					var QKVJASWVEO=Date.now();
					var GXNRNMAAKW=function( DFBVDPETGO,UHTPGPRUJA,AAJNQWXHMY, EVAILWGGKX, KXAWTTIEGG, OBTBPOULAV, AURESXCGMK, WWKVHIMWYD,MQUGCIUQII,
						OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
						 this.DFBVDPETGO=DFBVDPETGO
						 this.UHTPGPRUJA=UHTPGPRUJA
						 this.AAJNQWXHMY=AAJNQWXHMY
						 this.EVAILWGGKX=EVAILWGGKX
						 this.KXAWTTIEGG=KXAWTTIEGG
						 this.OBTBPOULAV=OBTBPOULAV
						 this.AURESXCGMK=AURESXCGMK
						 this.WWKVHIMWYD=WWKVHIMWYD
						 this.MQUGCIUQII=MQUGCIUQII
						
															 
						 this.OYJAHGADFQ=OYJAHGADFQ
						 this.OJPXTRQDKS=OJPXTRQDKS
						 this.LYHKNIMVEB=LYHKNIMVEB
						 this.RHOLNWBOXR=RHOLNWBOXR
						 
						 this.EBAPPJFYSW=new Date(Date.now());
					 }
					var QPHHGPRJAI=[];
					QPHHGPRJAI.splice(0,1000);

						
					var OYJAHGADFQ=Math.random()*100000;
					var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,Jugador7,XACEBCSJAB[i].TNFAGGMKXD.name, EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[Jugador7-1].OBTBPOULAV,XPBCVAGCDQ[Jugador7-1].AURESXCGMK, XPBCVAGCDQ[Jugador7-1].WWKVHIMWYD,MQUGCIUQII,
						OYJAHGADFQ,XPBCVAGCDQ[Jugador7-1].AURESXCGMK,DFBVDPETGO,'WROHETMDHX');
					NBEJWDVLLV.push(KCPHFPSPLQ);
					QPHHGPRJAI.push(KCPHFPSPLQ);

					var CKHBSQULIF=YMHIHSNADE.time.create(false);
					CKHBSQULIF.loop(200,function(){
						try
						{
							
							socket.emit('WROHETMDHX',QPHHGPRJAI[0],
							 function(XQLEOGMJYG)
							 {			 
								EXBCVLOIYJ(XQLEOGMJYG,'WROHETMDHX');
							 }
							);						
							QPHHGPRJAI.splice(0,1000);	
							CKHBSQULIF.stop();
							CKHBSQULIF.remove();
						}
						catch(e){}
					});
					CKHBSQULIF.start();
					
					/////////////	
					
					
					//socket.emit('WROHETMDHX', DFBVDPETGO,TFSXFTYVGQ,AGKVNAGGLB[i].TNFAGGMKXD.name, EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[TFSXFTYVGQ-1].OBTBPOULAV,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK, XPBCVAGCDQ[TFSXFTYVGQ-1].WWKVHIMWYD) ;
				}
				else //1.0.9
				{				
					NJGFWACAPY=XACEBCSJAB[i].TNFAGGMKXD
					//NJGFWACAPY.sendToBack();
					//VRLYJAAHUE(NJGFWACAPY);
					
					FBSDMRLVEL.push(new TVYNYTCQYW(XACEBCSJAB[i].SGCSHJVERI,XACEBCSJAB[i].UUOPKETETA,XACEBCSJAB[i].HVCFEWNDRF,XACEBCSJAB[i].TNFAGGMKXD,5,XACEBCSJAB[i].jugador,null,null,XACEBCSJAB[i].MQUGCIUQII));
					NAYBJTKIKA(NJGFWACAPY);
					//console.log("antes")
					VRLYJAAHUE(FBSDMRLVEL);
					//console.log("despues")
					//GSXGWASLIY.add(FBSDMRLVEL[0].TNFAGGMKXD);
					COTMMCVJWP.add(XACEBCSJAB[i].TNFAGGMKXD);
					YMHIHSNADE.world.bringToTop(VDKOVQXHON);
					YMHIHSNADE.world.bringToTop(XACEBCSJAB);
					
					//FBSDMRLVEL[1].TNFAGGMKXD.moveDown();
					
					XACEBCSJAB.splice(i,1);
					OROGRNBISW(XACEBCSJAB,UBWRXKMTQN,false,false,false,false);
					

					console.log("por aqui")
					
					
					//HHBPAROITT = YMHIHSNADE.add.tween(NJGFWACAPY);
					HHBPAROITT.timeline = [];
					HHBPAROITT.updateTweenData('target',NJGFWACAPY)
					HHBPAROITT.target=NJGFWACAPY
					console.log("Siete "+NJGFWACAPY.name)
					//HHBPAROITT.pendingDelete=false
					//HHBPAROITT.target=NJGFWACAPY
					HHBPAROITT.to( {x:(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6))  - (YAJVUBPNNW*8) +  COIVBWRMCC)/2)+ (1 *(COIVBWRMCC+ YAJVUBPNNW))
					,y:PXEBTYBHGS,
					angle : 90
					}, 500, BSXWFYLCEW);		
					
					HHBPAROITT.onComplete.addOnce( 
					
						function () {
							VRLYJAAHUE(NJGFWACAPY);
							GNAHFPUEID(XACEBCSJAB,UBWRXKMTQN,Jugador7,false,false,false,false);
							//NJGFWACAPY.scale.setTo(1.9,1.9)
							//if (JHJEWHFWNL==true)
							//{
							//	console.log("Escala ahora")
							//	NJGFWACAPY.scale.setTo(QDTCADQEEX-1,QDTCADQEEX-1)
							//}
							//else
							//{
								//console.log("Escala ahora2")
								//YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
								//NJGFWACAPY.scale.setTo(QDTCADQEEX,QDTCADQEEX)
								//NJGFWACAPY.scale.setTo(1,1)
								//console.log("Escala ")
							//}
						}
					 ,this)		
					
					HHBPAROITT.start();	
					//YMHIHSNADE.add.tween(NJGFWACAPY.scale).to( {x:1,y:1}, IRXOKNWTLV, BSXWFYLCEW,true);
				}
			}
		}
	}
}


function GNAHFPUEID(XACEBCSJAB,STLEOJDWSU,RRWWKUVRLD,TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ,DesdeForzarCambio){
	
	var NOFEDXHMLS;
	var GHTWROCHVV;
	var MOFGFYOVIG;
	
	
		
	XACEBCSJAB.push(new TVYNYTCQYW(FBSDMRLVEL[0].SGCSHJVERI,FBSDMRLVEL[0].UUOPKETETA,FBSDMRLVEL[0].HVCFEWNDRF,FBSDMRLVEL[0].TNFAGGMKXD,7,RRWWKUVRLD,null,null,FBSDMRLVEL[0].MQUGCIUQII));
	
	if (XACEBCSJAB[XACEBCSJAB.length-1].VVRCMEUNOJ>7)
	{
		ArrayCambioCarta.push( new ObjetoCambiaCarta( XACEBCSJAB[XACEBCSJAB.length-1].VVRCMEUNOJ,RRWWKUVRLD) )
	}
	//RXKKPILDQT.add(FBSDMRLVEL[0].TNFAGGMKXD);
	
	console.log("ANTES SHIFT "+FBSDMRLVEL.length)
	if (FBSDMRLVEL.length>=2)
	{
		
		FBSDMRLVEL.shift();
		console.log("*DESPUES SHIFT "+FBSDMRLVEL.length)
	
	}
		console.log("DESPUES SHIFT "+FBSDMRLVEL.length)
	
	//var COIVBWRMCC=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.width;
	
	if (STLEOJDWSU=="D")
	{
		NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)   +  COIVBWRMCC)/2)+ (5 *(COIVBWRMCC+ YAJVUBPNNW));
		GHTWROCHVV=YMHIHSNADE.world.height-COIVBWRMCC;
		MOFGFYOVIG=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.angle - 90;
		NAYBJTKIKA(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
		RXKKPILDQT.add(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
	}
	
	if (STLEOJDWSU=="R")
	{
		//NOFEDXHMLS=YMHIHSNADE.world.height-COIVBWRMCC;
		//GHTWROCHVV=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)  +  COIVBWRMCC  )    /2)+      (0 *(COIVBWRMCC+ YAJVUBPNNW));
		
	 NOFEDXHMLS=YMHIHSNADE.world.width-COIVBWRMCC;
	 GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)   +  COIVBWRMCC)/2)+ (0 *(COIVBWRMCC+ YAJVUBPNNW));
		
		MOFGFYOVIG=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.angle + 180;
		XNFDNBQFUA(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
		BDRJVGFWQH.add(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
	}	
	
	if (STLEOJDWSU=="L")
	{
		NOFEDXHMLS=COIVBWRMCC;
	    GHTWROCHVV=(( YMHIHSNADE.world.height-GAMFUXNGTH-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)   +  COIVBWRMCC)/2)+ (5 *(COIVBWRMCC+ YAJVUBPNNW));
		MOFGFYOVIG=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.angle + 0;
		XNFDNBQFUA(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
		SYXHGDSJDY.add(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
		log(false,"Parte izquierda");
	}	

	if (STLEOJDWSU=="U")
	{
		NOFEDXHMLS=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)  +  COIVBWRMCC  )    /2)+      (0 *(COIVBWRMCC+ YAJVUBPNNW));
		GHTWROCHVV=COIVBWRMCC;	
		
		

		
		
		
		
		
		
		MOFGFYOVIG=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.angle - 90;
		XNFDNBQFUA(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
		PBHYCULPGK.add(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
	}
		
	

	log(false,"Mueve la carta...");	
	//twEsp72 = YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
	HHBPAROITT.timeline=[]
	var cambiosiete=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD
	console.log("cambiosiete "+cambiosiete.name)
	HHBPAROITT.target=cambiosiete
	//twEsp72.target(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD)
	//twEsp72.updateTweenData('target',XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD)
	HHBPAROITT.to( {x:NOFEDXHMLS
		,y:GHTWROCHVV,
		angle : MOFGFYOVIG
		}, 500, BSXWFYLCEW);		
HHBPAROITT.onComplete.addOnce(	function () {
	
					OROGRNBISW(XACEBCSJAB,STLEOJDWSU,false,false,XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.name,false);
					
					if (STLEOJDWSU=="D"){
						
						JQSOOBSDDS();
						HJDIMRVCSU(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD); //2.0.1 importantísimo que esta línea no se ponga donde está la anterior
					}
					else{
						//XNFDNBQFUA(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
					}
					//if (TKWCTNGROU!=undefined && LDCCGSIBKW!=undefined) //Si viene de ajeno y no del click
					//{
					//if (DUGDLNBOGK==false)
					//{
						//UODKOBCGYM(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ);
					//}
					//else
					//{
					if (FXGSEGRXKC.length>0 && DesdeForzarCambio==true)
					{
						console.log("por aqui2")
						CGCMEMLMAG(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ);
					}
					else
					{
						//console.log("RECUPERA_ GNAHFPUEID");
						
						OGGWQECXBK(TXLWIIINGQ,false,false);
					}

						
					//}
					//}
					
					
					
					
				}
				,this)
	

		
	HHBPAROITT.start();
	
	console.log("pre escala "+STLEOJDWSU+" " +JHJEWHFWNL)
	if (STLEOJDWSU=="D")	
	{
			
		//if (JHJEWHFWNL==true)
		//{
			cambiosiete.scale.setTo(QDTCADQEEX,QDTCADQEEX)
		//}
		//else
		//{
			//YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
		//	cambiosiete.scale.setTo(QDTCADQEEX,QDTCADQEEX)
			//console.log("Escala ")
		//}
	}	
	else
	{
		if (JHJEWHFWNL==true)
		{
			//YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale).to( {x:1.2,y:1.2}, IRXOKNWTLV, BSXWFYLCEW,true);
			cambiosiete.scale.setTo(1.2,1.2)
		}
	}
	LMGBDQDXWP(); //2017/04/18

}


function TengoEl7(Jugador7){
	var i;
	var JSAVOOUOYD=false;
	var XACEBCSJAB;
	var UBWRXKMTQN;
	
	if (FXGSEGRXKC.length>0)
	{
		
		
	   UBWRXKMTQN=HHOPUSIABJ(Jugador7);
	 
	   
		if (UBWRXKMTQN=="D"){
			XACEBCSJAB=AGKVNAGGLB;
		}
		if (UBWRXKMTQN=="L"){
			XACEBCSJAB=KNVKGHHTYC;
		}
		if (UBWRXKMTQN=="U"){
			XACEBCSJAB=TWJONOKGHC;
		}
		if (UBWRXKMTQN=="R"){
			XACEBCSJAB=CBCNHFGWLU;
		}	
		
		for (i=0;i<=XACEBCSJAB.length-1;i++)
		{
			if(XACEBCSJAB[i].HVCFEWNDRF==7 && XACEBCSJAB[i].SGCSHJVERI==TGTQPBEQFR)
			{
				JSAVOOUOYD=true;
				break;
			}
		}
	}
	return JSAVOOUOYD;
}





function LQJEJOOAPH(SCWJTHLKWF,OMDVKATFLQ, TXLWIIINGQ){
	

	var MLFDVPXWYK;
	var DSCVVNAYWK;
	var QOWECQVXCM;
	
	//CRITICO
	if (SCWJTHLKWF=="N")
	{
		UHHXSNXXJK=UHHXSNXXJK+OMDVKATFLQ;
	}
	else
	{
		PXGXKDDNFK=PXGXKDDNFK+OMDVKATFLQ;
	}
	
	
	if (UHHXSNXXJK>50){
		MLFDVPXWYK=UHHXSNXXJK-50 + " Buenas";
	}
	else{
		MLFDVPXWYK=UHHXSNXXJK+ " Malas";	
	}
	if (PXGXKDDNFK>50){
		DSCVVNAYWK=PXGXKDDNFK-50 + " Buenas";
	}
	else{
		DSCVVNAYWK=PXGXKDDNFK+ " Malas";	
	}	
	
	ATTUXTNNKX.text=MLFDVPXWYK+"\n"+DSCVVNAYWK;
	
	if ( OTGNMRHTVK()==true )
	{
		//console.log("DEL Actualiza marcador "+JHHWEKWEJK);
		if (JHHWEKWEJK==false) //2.0.1 Se metía varias veces
		{
			WWAYLOUPUQ(TXLWIIINGQ); 
		}
		QOWECQVXCM=false;
	}	
	else
	{
		QOWECQVXCM=true;
	}
	
	log(false,"Nosotros "+UHHXSNXXJK);
	log(false,"YOBEPVEEMW "+PXGXKDDNFK);
	
	return QOWECQVXCM;
}

/*LGDEYPLFSA=function(UHTPGPRUJA,OMDVKATFLQ,AWCCMSCOPO){

	var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
	var text;
	var timerCante;
					//  The Text is positioned at 0, 100
	text = YMHIHSNADE.add.text(0, 0, NJWWPODLWD, style);
	text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	//  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
	text.setTextBounds(0, 100, 800, 100);
	//  Start the TKXPPGUPVV running - this is important!
	//  It won't start automatically, allowing you to hook it to button events and the like.
	timerCante = YMHIHSNADE.time.create(false);
	timerCante.add(3000, FYYEWMEHBU, this,text);
	timerCante.start();
}*/

function SRFFTPLVMJ(SGCSHJVERI){
	var i;
	var WIEMLCTGXO=false;
	for (i=0;i<=FOQUJVEYFC.length-1;i++)
	{
		if (FOQUJVEYFC[i].SGCSHJVERI==SGCSHJVERI){
			WIEMLCTGXO=true;
			break;
		}
	}

	return WIEMLCTGXO;
}

function QuienHaCantado(SGCSHJVERI){
	var i;
	var Quien=false;
	for (i=0;i<=FOQUJVEYFC.length-1;i++)
	{
		if (FOQUJVEYFC[i].SGCSHJVERI==SGCSHJVERI){
			Quien=FOQUJVEYFC[i].jugador;
			break;
		}
	}

	return Quien;
}

function BFXLLYQNMN(BMCBJHBJWH){
	var i;
	var CIPQYKQBMR=false;
	var SWIGVTVMDU=false;
	var UUSWYWBMGP=false;
	var BFXFLFDAPV=false;
	var UBNODRNAGX=false;
	var UNROHJICCV=false;
	var VREOAIDYYY=false;
	var MCTHFYHCXF=false;
	var TGTTLELLIS=false;
	
	for (i=0; i<=BMCBJHBJWH.length-1;i++)
	{
		if (BMCBJHBJWH[i].VVRCMEUNOJ==10 && BMCBJHBJWH[i].SGCSHJVERI=="oros"){
			CIPQYKQBMR=true;
		}
		
		if (BMCBJHBJWH[i].VVRCMEUNOJ==10 && BMCBJHBJWH[i].SGCSHJVERI=="copas"){
			UUSWYWBMGP=true;
		}
		if (BMCBJHBJWH[i].VVRCMEUNOJ==10 && BMCBJHBJWH[i].SGCSHJVERI=="espadas"){
			UBNODRNAGX=true;
		}	
	
		if (BMCBJHBJWH[i].VVRCMEUNOJ==10 && BMCBJHBJWH[i].SGCSHJVERI=="bastos"){
			VREOAIDYYY=true;
		}	
		
		if (BMCBJHBJWH[i].VVRCMEUNOJ==9 && BMCBJHBJWH[i].SGCSHJVERI=="oros"){
			SWIGVTVMDU=true;
		}
		
		if (BMCBJHBJWH[i].VVRCMEUNOJ==9 && BMCBJHBJWH[i].SGCSHJVERI=="copas"){
			BFXFLFDAPV=true;
		}
		if (BMCBJHBJWH[i].VVRCMEUNOJ==9 && BMCBJHBJWH[i].SGCSHJVERI=="espadas"){
			UNROHJICCV=true;
		}	
	
		if (BMCBJHBJWH[i].VVRCMEUNOJ==9 && BMCBJHBJWH[i].SGCSHJVERI=="bastos"){
			MCTHFYHCXF=true;
		}			
	}
	
	if ( (CIPQYKQBMR==true && SWIGVTVMDU==true && SRFFTPLVMJ("oros")==false) ||
		(UUSWYWBMGP==true && BFXFLFDAPV==true && SRFFTPLVMJ("copas")==false) ||
		(UBNODRNAGX==true && UNROHJICCV==true && SRFFTPLVMJ("espadas")==false) ||		
		(VREOAIDYYY==true && MCTHFYHCXF==true && SRFFTPLVMJ("bastos")==false) 	

	)
	{
		TGTTLELLIS=true;
	}	
	else
	{
		TGTTLELLIS=false;
	}
	
	return TGTTLELLIS;

}



function LMGBDQDXWP(){
	var SRCGCMADME;
	var i;
	var QBXGANOVYU;
	var YBWNGQGIHW;
	var LDDXAIVDNC;

	log(true,"Cantes Tamaño: "+ VDKOVQXHON.length);
	//alert("llega a cantar 0");
	if (VDKOVQXHON.length==0 || VDKOVQXHON.length==1)
	{
	
		if (TFSXFTYVGQ==1)
		{
			QBXGANOVYU=3;
			YBWNGQGIHW=2;
			LDDXAIVDNC=4;
		}
		if (TFSXFTYVGQ==2)
		{
			QBXGANOVYU=4;
			YBWNGQGIHW=1;
			LDDXAIVDNC=3;
		}
		if (TFSXFTYVGQ==3)
		{
			QBXGANOVYU=1;
			YBWNGQGIHW=2;
			LDDXAIVDNC=4;
		}
		if (TFSXFTYVGQ==4)
		{
			QBXGANOVYU=2;
			YBWNGQGIHW=1;
			LDDXAIVDNC=3;
		}		
		
		
		if ( LUCRWXJMDR>1)
		{
			if (EGPDVIEJEL==false)
			{
				if (PPTWRPRLSI==true)
				{
					//alert("llega a cantar");
					VSBOFQVPVQ(3,false);
					QPGADJGDVQ(3)
				}
				else
				{
					//alert("llega a cantar 2");
					VSBOFQVPVQ(2,false);
					VSBOFQVPVQ(4,false);
					QPGADJGDVQ(2);
					QPGADJGDVQ(4);
				}
			}
			else
			{
				if (TFSXFTYVGQ==ESKTEXAVHU && MNAGVJHWOW()==false) //cabezon MNAGVJHWOW
				{
					if (PPTWRPRLSI==true)
					{
						for (i=0;i<=KYDWXPGHVY.length-1;i++)
						{
							if (KYDWXPGHVY[i].SSUNXNEEHN==QBXGANOVYU)
							{
								//alert("hasta la cocina 1");
								VSBOFQVPVQ(QBXGANOVYU,false);
								QPGADJGDVQ(QBXGANOVYU);
							}
						}							
					}
					else
					{
						//alert("algo pasa");
						for (i=0;i<=KYDWXPGHVY.length-1;i++)
						{
							//alert(KYDWXPGHVY[i]);
							if (KYDWXPGHVY[i].SSUNXNEEHN==YBWNGQGIHW)
							{
								//alert("hasta la cocina 2");
								VSBOFQVPVQ(YBWNGQGIHW,false);
								QPGADJGDVQ(YBWNGQGIHW);
							}
							if (KYDWXPGHVY[i].SSUNXNEEHN==LDDXAIVDNC)
							{
								//alert("hasta la cocina 3");
								VSBOFQVPVQ(LDDXAIVDNC,false);
								QPGADJGDVQ(LDDXAIVDNC);
							}							
						}						
					}
					
				}				
			}
		}
	
		log(true,"Cantes SRCGCMADME Nuestra: "+PPTWRPRLSI);
		log(true,"Cantes Posible Cante "+BFXLLYQNMN(AGKVNAGGLB));
		if (PPTWRPRLSI==true && BFXLLYQNMN(AGKVNAGGLB)==true )
		{
			//IEQDMBJCAY.revive();	
			//IEQDMBJCAY.loadTexture('Boton_cantar_on', 0);			
			//IEQDMBJCAY.frameName= 'cantar';		//asd
			PPPAPAPQCD();
		}
		else{
			//IEQDMBJCAY.kill();
			//IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);			
			//IEQDMBJCAY.frameName= 'cantar gris';		//asd
			PAHJCWBNJH();

		}	
		
		if (PPTWRPRLSI==true && TengoEl7(TFSXFTYVGQ)==true && FBSDMRLVEL[0].VVRCMEUNOJ>7)
		{
			//YGTNAODFHW.revive();
			//YGTNAODFHW.loadTexture('Boton_cambiar_7_on', 0);
			//YGTNAODFHW.frameName='cambiar 7';
			LLALALASCC();
		}
		else
		{
			//YGTNAODFHW.kill();
			//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
			YGTNAODFHW.frameName='cambiar 7 gris';
			NMABWIWAAA();
		}
		
		
	}
	else
	{
		//YGTNAODFHW.kill();
		//IEQDMBJCAY.kill();
		//IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);
		//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
		//IEQDMBJCAY.frameName='cantar gris';
		//YGTNAODFHW.frameName='cambiar 7 gris';
		PAHJCWBNJH();
		NMABWIWAAA();
	}
	
}

function BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,PAXBGDCANU, FHEFFYUQFX, EVAILWGGKX, KXAWTTIEGG, OBTBPOULAV,AURESXCGMK,WWKVHIMWYD)
{
	
	
		/////////////

	var QKVJASWVEO=Date.now();
	var GXNRNMAAKW=function( DFBVDPETGO,UHTPGPRUJA,PAXBGDCANU, FHEFFYUQFX, EVAILWGGKX, KXAWTTIEGG, OBTBPOULAV,AURESXCGMK,WWKVHIMWYD,MQUGCIUQII,
		OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
		 this.DFBVDPETGO=DFBVDPETGO
		 this.UHTPGPRUJA=UHTPGPRUJA
		 this.PAXBGDCANU=PAXBGDCANU
		 this.FHEFFYUQFX=FHEFFYUQFX
		 this.EVAILWGGKX=EVAILWGGKX
		 this.KXAWTTIEGG=KXAWTTIEGG
		 this.OBTBPOULAV=OBTBPOULAV
		 this.AURESXCGMK=AURESXCGMK
		 this.WWKVHIMWYD=WWKVHIMWYD
		 this.MQUGCIUQII=MQUGCIUQII
											 
		 this.OYJAHGADFQ=OYJAHGADFQ
		 this.OJPXTRQDKS=OJPXTRQDKS
		 this.LYHKNIMVEB=LYHKNIMVEB
		 this.RHOLNWBOXR=RHOLNWBOXR
		 
		 this.EBAPPJFYSW=new Date(Date.now());
	 }
	var QPHHGPRJAI=[];
	QPHHGPRJAI.splice(0,1000);

		
	var OYJAHGADFQ=Math.random()*100000;
	var KCPHFPSPLQ=new GXNRNMAAKW( DFBVDPETGO,UHTPGPRUJA,PAXBGDCANU, FHEFFYUQFX, EVAILWGGKX, KXAWTTIEGG, OBTBPOULAV,AURESXCGMK,WWKVHIMWYD,MQUGCIUQII,
		OYJAHGADFQ,AURESXCGMK,DFBVDPETGO,'OSMNKAMXMY');
	NBEJWDVLLV.push(KCPHFPSPLQ);
	QPHHGPRJAI.push(KCPHFPSPLQ);

	var CKHBSQULIF=YMHIHSNADE.time.create(false);
	CKHBSQULIF.loop(200,function(){
		try
		{
			socket.emit('OSMNKAMXMY',QPHHGPRJAI[0],
			 function(XQLEOGMJYG)
			 {			 
				EXBCVLOIYJ(XQLEOGMJYG,'OSMNKAMXMY');
			 }
			);						
			QPHHGPRJAI.splice(0,1000);
			CKHBSQULIF.stop();
			CKHBSQULIF.remove();
		}
		catch(e){}
	});
	CKHBSQULIF.start();
	
	/////////////	
								
	
}

function VSBOFQVPVQ(UHTPGPRUJA,Manual){
	var i;
	var CIPQYKQBMR=false;
	var SWIGVTVMDU=false;
	var UUSWYWBMGP=false;
	var BFXFLFDAPV=false;
	var UBNODRNAGX=false;
	var UNROHJICCV=false;
	var VREOAIDYYY=false;
	var MCTHFYHCXF=false;
	var SGCSHJVERI;
	var OMDVKATFLQ=0;
	var YDMAEKLTIK=[];
	var UBWRXKMTQN;
	var DVSFGEBHHE;
	
	if (UDUUDUDDJJ(TFSXFTYVGQ,UHTPGPRUJA)==true)
	{
		DVSFGEBHHE=UHHXSNXXJK;
	}
	else
	{
		DVSFGEBHHE=PXGXKDDNFK;
	}
	

//IEQDMBJCAY.kill();
	if ( (EGPDVIEJEL==true && SNJCSVWFCC()) || EGPDVIEJEL==false)
	{
		
		if (EGPDVIEJEL==true)
		{
			//YDMAEKLTIK=AGKVNAGGLB;
			 UBWRXKMTQN=HHOPUSIABJ(UHTPGPRUJA);
			 //alert(UBWRXKMTQN);
			 if (UBWRXKMTQN=="D")
			 {
				YDMAEKLTIK=AGKVNAGGLB;
			 }
			 if (UBWRXKMTQN=="U")
			 {
				YDMAEKLTIK=TWJONOKGHC;
			 }
			 if(UBWRXKMTQN=="L")
			 {
				YDMAEKLTIK=KNVKGHHTYC;
			 }
			 if (UBWRXKMTQN=="R")
			 {
				YDMAEKLTIK=CBCNHFGWLU;
			 }
		}
		else
		{
			if (UHTPGPRUJA==1)
			{
				YDMAEKLTIK=AGKVNAGGLB;
			}

			if (UHTPGPRUJA==2)
			{
				YDMAEKLTIK=CBCNHFGWLU;
			}
			if (UHTPGPRUJA==3)
			{
				YDMAEKLTIK=TWJONOKGHC;
			}
			if (UHTPGPRUJA==4)
			{
				YDMAEKLTIK=KNVKGHHTYC;
			}	
		}

		
		if ( ((IEQDMBJCAY.frameName=="cantar" && UHTPGPRUJA==TFSXFTYVGQ) || UHTPGPRUJA!=TFSXFTYVGQ )
			
		&& (Manual==true || (Manual==false && EVAILWGGKX==false)  || (Manual==false && EVAILWGGKX==true && (DVSFGEBHHE>=81 || BAVVCAHQCC(YDMAEKLTIK)==40 )  )  )  //2.0.8054
		)
		{
			if (IEQDMBJCAY.frameName=="cantar" && UHTPGPRUJA==TFSXFTYVGQ)
			{
				//IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);
				//IEQDMBJCAY.frameName="cantar gris"
				PAHJCWBNJH();
			}
					
			
		//alert("kk");

			
			for (i=0; i<=YDMAEKLTIK.length-1;i++)
			{
				if (YDMAEKLTIK[i].VVRCMEUNOJ==10 && YDMAEKLTIK[i].SGCSHJVERI=="oros" ){
					CIPQYKQBMR=true;	
				}
				
				if (YDMAEKLTIK[i].VVRCMEUNOJ==10 && YDMAEKLTIK[i].SGCSHJVERI=="copas" ){
					UUSWYWBMGP=true;
				}
				if (YDMAEKLTIK[i].VVRCMEUNOJ==10 && YDMAEKLTIK[i].SGCSHJVERI=="espadas"){
					UBNODRNAGX=true;
				}	
			
				if (YDMAEKLTIK[i].VVRCMEUNOJ==10 && YDMAEKLTIK[i].SGCSHJVERI=="bastos"){
					VREOAIDYYY=true;
				}	
				
				if (YDMAEKLTIK[i].VVRCMEUNOJ==9 && YDMAEKLTIK[i].SGCSHJVERI=="oros"){
					SWIGVTVMDU=true;
				}
				
				if (YDMAEKLTIK[i].VVRCMEUNOJ==9 && YDMAEKLTIK[i].SGCSHJVERI=="copas"){
					BFXFLFDAPV=true;
				}
				if (YDMAEKLTIK[i].VVRCMEUNOJ==9 && YDMAEKLTIK[i].SGCSHJVERI=="espadas"){
					UNROHJICCV=true;
				}	
			
				if (YDMAEKLTIK[i].VVRCMEUNOJ==9 && YDMAEKLTIK[i].SGCSHJVERI=="bastos"){
					MCTHFYHCXF=true;
				}			
			}	

			if ( CIPQYKQBMR==true && SWIGVTVMDU==true && SRFFTPLVMJ("oros")==false) 
			{
				log(false,"Canta en Oros");
				if (TGTQPBEQFR=="oros")
				{
					if (EGPDVIEJEL==true)
					{
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,40,"oros", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK, XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD) ;
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,false,true,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"oros",true,40,false,false);
						FOQUJVEYFC.push( new ObjetoCante("oros",UHTPGPRUJA))
					}
					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"oros",true,40);
					
				}
				else
				{
					if (EGPDVIEJEL==true)
					{
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,20,"oros",EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD) ;
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,true,false,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"oros",true,20,false,false);
						FOQUJVEYFC.push( new ObjetoCante("oros",UHTPGPRUJA))
					}
					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"oros",true,20);
					
				}
				//1.0.9 FOQUJVEYFC.push("oros")
			}
			
			if ( UUSWYWBMGP==true && BFXFLFDAPV==true && SRFFTPLVMJ("copas")==false)
			{
				log(false,"Canta en copas");
				if (TGTQPBEQFR=="copas")
				{
					if (EGPDVIEJEL==true)
					{			
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,40,"copas",EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD) ;
						
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,false,true,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"copas",true,40,false,false);
						FOQUJVEYFC.push( new ObjetoCante("copas",UHTPGPRUJA))
					}

					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"copas",true,40);
				}
				else
				{
					if (EGPDVIEJEL==true)
					{
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,20,"copas", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
						
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,true,false,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"copas",true,20,false,false);
						FOQUJVEYFC.push(new ObjetoCante("copas",UHTPGPRUJA))
					}

					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"copas",true,20);
				}
				//1.0.9 FOQUJVEYFC.push("copas")
				
			}

			if ( UBNODRNAGX==true && UNROHJICCV==true && SRFFTPLVMJ("espadas")==false)
			{
				log(false,"Canta en espadas");
				if (TGTQPBEQFR=="espadas")
				{
					if (EGPDVIEJEL==true)
					{
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,40,"espadas", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
						
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,false,true,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"espadas",true,40,false,false);
						FOQUJVEYFC.push(new ObjetoCante("espadas",UHTPGPRUJA))
					}

					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"espadas",true,40);
				}
				else
				{
					if (EGPDVIEJEL==true)
					{
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,20,"espadas", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
						
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,true,false,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"espadas",true,20,false,false);
						FOQUJVEYFC.push(new ObjetoCante("espadas",UHTPGPRUJA))
					}

					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"espadas",true,20);
				}
				//1.0.9 FOQUJVEYFC.push("espadas")
			}
			
			if ( VREOAIDYYY==true && MCTHFYHCXF==true && SRFFTPLVMJ("bastos")==false)
			{
				log(false,"Canta en bastos");
				if (TGTQPBEQFR=="bastos")
				{
					if (EGPDVIEJEL==true)
					{
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,40,"bastos", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
						
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,false,true,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"bastos",true,40,false,false);
						FOQUJVEYFC.push(new ObjetoCante("bastos",UHTPGPRUJA))
					}

					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"bastos",true,40);
				}
				else
				{
					if (EGPDVIEJEL==true)
					{
						BHWUWOPQCB(DFBVDPETGO,UHTPGPRUJA,20,"bastos", EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),XPBCVAGCDQ[UHTPGPRUJA-1].OBTBPOULAV,XPBCVAGCDQ[UHTPGPRUJA-1].AURESXCGMK,XPBCVAGCDQ[UHTPGPRUJA-1].WWKVHIMWYD);
						
						WTERKRAPBE(UHTPGPRUJA,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,true,false,false,false);
					}
					else
					{
						XIAPNYIGXV(UHTPGPRUJA,"bastos",true,20,false,false);
						FOQUJVEYFC.push(new ObjetoCante("bastos",UHTPGPRUJA))
					}

					//1.0.9 XIAPNYIGXV(UHTPGPRUJA,"bastos",true,20);
				}
				//1.0.9 FOQUJVEYFC.push("bastos")
			}	
			if ( OTGNMRHTVK()==true)
			{
				//NOCREO WWAYLOUPUQ(); 
			}	
		}
	}
}

function IXLQLKYFRI(IUYUIHVKJW){
	var i;
	var u;
	//if (LUCRWXJMDR>=SNVWBLGBPJ){
		//if (IUYUIHVKJW==undefined){
	var valida=true;
	
			for (u=0;u<=VDKOVQXHON.length-1;u++)
			{
				if (VDKOVQXHON[u].jugador==TFSXFTYVGQ)
				{
					valida=false;
				}
			}
						
			if (DVNRTQIWGL==TFSXFTYVGQ && valida==true)
			{
				for (i=0;i<=AGKVNAGGLB.length-1;i++)
				{
					if (XPSRYGDPNI(AGKVNAGGLB[i],TFSXFTYVGQ)==true)
					{
						AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
					}
					else
					{
						AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(110,110,110);
					}		
				}
			}
			else
			{
				for (i=0;i<=AGKVNAGGLB.length-1;i++)
				{
					AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
				}
			}
		//}
		/*else
		{
					
					if (XPSRYGDPNI(IUYUIHVKJW,TFSXFTYVGQ)==true || LUCRWXJMDR<=SNVWBLGBPJ  )
					{
						IUYUIHVKJW.TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
					}
					else
					{
						IUYUIHVKJW.TNFAGGMKXD.tint=Phaser.Color.getColor(110,110,110);
					}		
		}*/
	//}
	/*else
	{
		for (i=0;i<=AGKVNAGGLB.length-1;i++)
		{
			if (XPSRYGDPNI(AGKVNAGGLB[i],TFSXFTYVGQ)==true)
			{
				AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
			}
			else
			{
				AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(110,110,110);
			}		
		}
	}*/
}

function XPSRYGDPNI(TVYNYTCQYW,UHTPGPRUJA){
	
	var GMLVJEFHPL;
	var JEOOIEYAWD=[];
	var i;
	var STLEOJDWSU;
	var ROKSCTPBNI=[];
	
	STLEOJDWSU=HHOPUSIABJ(UHTPGPRUJA)
	if (STLEOJDWSU=="D")
	{
		ROKSCTPBNI=AGKVNAGGLB;
	}
	if (STLEOJDWSU=="U")
	{
		ROKSCTPBNI=TWJONOKGHC;
	}	
	if (STLEOJDWSU=="R")
	{
		ROKSCTPBNI=CBCNHFGWLU;
	}
	if (STLEOJDWSU=="L")
	{
		ROKSCTPBNI=KNVKGHHTYC;
	}	
	
	
	if (VDKOVQXHON.length==0 || LUCRWXJMDR<=SNVWBLGBPJ)
	{
		GMLVJEFHPL=true;
	}
	else
	{
	
		
		if (IMVFJBDBXG(ROKSCTPBNI)==true){
			log(false,"Tengo del mismo SGCSHJVERI");
			
			JEOOIEYAWD.splice(0,4);
			for (i=0;i<=VDKOVQXHON.length-1;i++){
				JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[i].SGCSHJVERI,VDKOVQXHON[i].VVRCMEUNOJ,VDKOVQXHON[i].jugador ));
				//log(false,JEOOIEYAWD[i].SGCSHJVERI+" - "+JEOOIEYAWD[i].VVRCMEUNOJ+" - "+JEOOIEYAWD[i].jugador);		
			}
			
			
			if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true){
				log(false,"La SRCGCMADME es nuestra");
				if (TVYNYTCQYW.SGCSHJVERI==VDKOVQXHON[0].SGCSHJVERI){
					log(false,"La carta es del mismo SGCSHJVERI");
					GMLVJEFHPL=true;
				}
				else{
					log(false,"La carta NO es del mismo SGCSHJVERI");
					GMLVJEFHPL=false;
				}
			}
			else{
				//PreparaArray metiendo carta
				log(false,"NO es nuestra SRCGCMADME..");
				JEOOIEYAWD.splice(0,4);
				for (i=0;i<=VDKOVQXHON.length-1;i++){
					JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[i].SGCSHJVERI,VDKOVQXHON[i].VVRCMEUNOJ,VDKOVQXHON[i].jugador ));					
				}
				JEOOIEYAWD.push(new UYOMGORTXR(TVYNYTCQYW.SGCSHJVERI,TVYNYTCQYW.VVRCMEUNOJ,UHTPGPRUJA ));
				log(false,JEOOIEYAWD[JEOOIEYAWD.length-1].SGCSHJVERI+" - "+JEOOIEYAWD[JEOOIEYAWD.length-1].VVRCMEUNOJ+" - "+JEOOIEYAWD[JEOOIEYAWD.length-1].jugador);
				
				if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true){
					log(false,"La SRCGCMADME no ser�a nuestra");
					if (TVYNYTCQYW.SGCSHJVERI==VDKOVQXHON[0].SGCSHJVERI){
						log(false,"Es del mismo SGCSHJVERI");
						GMLVJEFHPL=true;
					}	
					else{
						log(false,"No es del mismo SGCSHJVERI");
						GMLVJEFHPL=false;
					}
				}
				else{
					if (BNKCXIHKDW("MismoPalo",UHTPGPRUJA,ROKSCTPBNI)==true){
						log(false,"Har�a SRCGCMADME con otra carta del mismo SGCSHJVERI");
						GMLVJEFHPL=false;
					}
					else{
						log(false,"NO har�a SRCGCMADME con otra carta del mismo SGCSHJVERI");
						//GMLVJEFHPL=true;
						if (TVYNYTCQYW.SGCSHJVERI==VDKOVQXHON[0].SGCSHJVERI)
						{
							GMLVJEFHPL=true;
						}
						else
						{
							if (IMVFJBDBXG(ROKSCTPBNI)==true){
								GMLVJEFHPL=false;				
							}
							else{
								GMLVJEFHPL=true;
							}
						}
						
					}
				}
				
			}			
		}
		else
		{
		
			JEOOIEYAWD.splice(0,4);
			for (i=0;i<=VDKOVQXHON.length-1;i++){
				JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[i].SGCSHJVERI,VDKOVQXHON[i].VVRCMEUNOJ,VDKOVQXHON[i].jugador ));
				//log(false,JEOOIEYAWD[i].SGCSHJVERI+" - "+JEOOIEYAWD[i].VVRCMEUNOJ+" - "+JEOOIEYAWD[i].jugador);
			}
			
			if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true){
				GMLVJEFHPL=true;
			}
			else{
				
				
				JEOOIEYAWD.splice(0,4);
				for (i=0;i<=VDKOVQXHON.length-1;i++){
					JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[i].SGCSHJVERI,VDKOVQXHON[i].VVRCMEUNOJ,VDKOVQXHON[i].jugador ));
					//log(false,JEOOIEYAWD[i].SGCSHJVERI+" - "+JEOOIEYAWD[i].VVRCMEUNOJ+" - "+JEOOIEYAWD[i].jugador);
				}
				JEOOIEYAWD.push(new UYOMGORTXR(TVYNYTCQYW.SGCSHJVERI,TVYNYTCQYW.VVRCMEUNOJ,UHTPGPRUJA ));
				//log(false,JEOOIEYAWD[JEOOIEYAWD.length-1].SGCSHJVERI+" - "+JEOOIEYAWD[JEOOIEYAWD.length-1].VVRCMEUNOJ+" - "+JEOOIEYAWD[JEOOIEYAWD.length-1].jugador);
				
				if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true){
					GMLVJEFHPL=true;
				}
				else{
					if (BNKCXIHKDW("OtroPalo",UHTPGPRUJA,ROKSCTPBNI)==true){
						GMLVJEFHPL=false;
					}
					else{
						GMLVJEFHPL=true;
					}
				}
			}
		}
	}
	
	return GMLVJEFHPL;
	
}

function log(MYQCQNOJGH,RPHWVBBGIM){
	
	if (MYQCQNOJGH==true)
	{
	}	
}

function BNKCXIHKDW(WIXBCPBSJI,UHTPGPRUJA,ROKSCTPBNI){
	
	var i;
	var u;
	var IRFWBJNIMN;
	var JEOOIEYAWD=[];
	
	IRFWBJNIMN=false;
	if (WIXBCPBSJI=="MismoPalo")
	{
		for (i=0;i<=ROKSCTPBNI.length-1;i++)
		{
			if(IRFWBJNIMN==false){
			JEOOIEYAWD.splice(0,4);
			for (u=0;u<=VDKOVQXHON.length-1;u++){
				JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[u].SGCSHJVERI,VDKOVQXHON[u].VVRCMEUNOJ,VDKOVQXHON[u].jugador ));
			}
			
			if (VDKOVQXHON[0].SGCSHJVERI==ROKSCTPBNI[i].SGCSHJVERI){
				JEOOIEYAWD.push(new UYOMGORTXR(ROKSCTPBNI[i].SGCSHJVERI,ROKSCTPBNI[i].VVRCMEUNOJ,UHTPGPRUJA ));
				if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true){
					IRFWBJNIMN=true;
					break;
				}			
			}	
			}		
		}	
	}

	if (WIXBCPBSJI=="MismoPaloSinBaza")
	{
		for (i=0;i<=ROKSCTPBNI.length-1;i++)
		{
			if(IRFWBJNIMN==false){
			JEOOIEYAWD.splice(0,4);
			for (u=0;u<=VDKOVQXHON.length-1;u++){
				JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[u].SGCSHJVERI,VDKOVQXHON[u].VVRCMEUNOJ,VDKOVQXHON[u].jugador ));
			}
			
			if (VDKOVQXHON[0].SGCSHJVERI==ROKSCTPBNI[i].SGCSHJVERI){
				JEOOIEYAWD.push(new UYOMGORTXR(ROKSCTPBNI[i].SGCSHJVERI,ROKSCTPBNI[i].VVRCMEUNOJ,UHTPGPRUJA ));
				if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true){
					IRFWBJNIMN=true;
					break;
				}			
			}	
			}		
		}	
	}

	
	if (WIXBCPBSJI=="OtroPalo")
	{
		for (i=0;i<=ROKSCTPBNI.length-1;i++){
			if(IRFWBJNIMN==false){
			JEOOIEYAWD.splice(0,4);
			for (u=0;u<=VDKOVQXHON.length-1;u++){
				JEOOIEYAWD.push(new UYOMGORTXR(VDKOVQXHON[u].SGCSHJVERI,VDKOVQXHON[u].VVRCMEUNOJ,VDKOVQXHON[u].jugador ));
			}
			
			if (VDKOVQXHON[0].SGCSHJVERI!=ROKSCTPBNI[i].SGCSHJVERI){
				JEOOIEYAWD.push(new UYOMGORTXR(ROKSCTPBNI[i].SGCSHJVERI,ROKSCTPBNI[i].VVRCMEUNOJ,UHTPGPRUJA ));
				if (VMLEORHBGI(JEOOIEYAWD,UHTPGPRUJA)==true){
					IRFWBJNIMN=true;
					break;
				}			
			}	
			}
		}	
	
	}
	
	return IRFWBJNIMN;
	
}

function IMVFJBDBXG(ROKSCTPBNI){
	
	
	var i;
	var GMLVJEFHPL;
	GMLVJEFHPL=false;
	for (i=0;i<=ROKSCTPBNI.length-1;i++){
		if (ROKSCTPBNI[i].SGCSHJVERI==VDKOVQXHON[0].SGCSHJVERI){
			GMLVJEFHPL=true;
			break;
		}	
	}
	return GMLVJEFHPL;
	
}


function VMLEORHBGI(MAUODEDWED,UHTPGPRUJA){
	
	
	var i;
	var TTJFVWDTMG;
	var LECTUTFGKY=true; 
	var QJXRLWRPYD;
	var ESHLDBNEQI
	
		
		for (i=0;i<=MAUODEDWED.length-1;i++)
		{
	
		
		//log(false,"Dentro-- "+ MAUODEDWED[i].SGCSHJVERI +" - "+MAUODEDWED[i].VVRCMEUNOJ+" - "+MAUODEDWED[i].jugador);
		
			if (i==0){
				QJXRLWRPYD=MAUODEDWED[i].VVRCMEUNOJ;
				ESHLDBNEQI=MAUODEDWED[i].SGCSHJVERI;
				TTJFVWDTMG=MAUODEDWED[i].jugador;				
			}
		
			if ( (MAUODEDWED[i].VVRCMEUNOJ>QJXRLWRPYD && MAUODEDWED[i].SGCSHJVERI==ESHLDBNEQI)
				|| (  MAUODEDWED[i].SGCSHJVERI==TGTQPBEQFR && ESHLDBNEQI!=TGTQPBEQFR )
			)
			{

			QJXRLWRPYD=MAUODEDWED[i].VVRCMEUNOJ;
			ESHLDBNEQI=MAUODEDWED[i].SGCSHJVERI;
			TTJFVWDTMG=MAUODEDWED[i].jugador;
			
			
			}
			
			
		}
		
			
		if (UHTPGPRUJA==1){
			if (TTJFVWDTMG==1){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==2){
				LECTUTFGKY=false;
			}
			if (TTJFVWDTMG==3){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==4){
				LECTUTFGKY=false;
			}			
		}
		if (UHTPGPRUJA==2){
			if (TTJFVWDTMG==2){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==3){
				LECTUTFGKY=false;
			}
			if (TTJFVWDTMG==4){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==1){
				LECTUTFGKY=false;
			}			
		}
		if (UHTPGPRUJA==3){
			if (TTJFVWDTMG==3){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==4){
				LECTUTFGKY=false;
			}
			if (TTJFVWDTMG==1){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==2){
				LECTUTFGKY=false;
			}			
		}
		if (UHTPGPRUJA==4){
			if (TTJFVWDTMG==4){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==1){
				LECTUTFGKY=false;
			}
			if (TTJFVWDTMG==2){
				LECTUTFGKY=true;
			}
			if (TTJFVWDTMG==3){
				LECTUTFGKY=false;
			}			
		}	

	return LECTUTFGKY;
	
}
function HHOPUSIABJ(HGCJHQJCEI){
	
	var DNNXCWARGV="D";
	log(true,"Dentro de DevuelveUbicacion "+TFSXFTYVGQ+" "+HGCJHQJCEI)
	if(TFSXFTYVGQ==1)
	{
		if (HGCJHQJCEI==1){
			DNNXCWARGV="D"
		}
		if (HGCJHQJCEI==2){
			DNNXCWARGV="R"
		}
		if (HGCJHQJCEI==3){
			DNNXCWARGV="U"
		}
		if (HGCJHQJCEI==4){
			DNNXCWARGV="L"
		}	
	}
	
	if(TFSXFTYVGQ==2)
	{
		if (HGCJHQJCEI==2){
			DNNXCWARGV="D"
		}
		if (HGCJHQJCEI==3){
			DNNXCWARGV="R"
		}
		if (HGCJHQJCEI==4){
			DNNXCWARGV="U"
		}
		if (HGCJHQJCEI==1){
			DNNXCWARGV="L"
		}
	}

	if(TFSXFTYVGQ==3)
	{
		if (HGCJHQJCEI==3){
			DNNXCWARGV="D"
		}
		if (HGCJHQJCEI==4){
			DNNXCWARGV="R"
		}
		if (HGCJHQJCEI==1){
			DNNXCWARGV="U"
		}
		if (HGCJHQJCEI==2){
			DNNXCWARGV="L"
		}
	}

	if(TFSXFTYVGQ==4)
	{
		if (HGCJHQJCEI==4){
			DNNXCWARGV="D"
		}
		if (HGCJHQJCEI==1){
			DNNXCWARGV="R"
		}
		if (HGCJHQJCEI==2){
			DNNXCWARGV="U"
		}
		if (HGCJHQJCEI==3){
			DNNXCWARGV="L"
		}
	}	
	
	log(false,"Va a RTOSLKFWHC.."+DNNXCWARGV);
	return DNNXCWARGV;
}


function JHIEHWIMCB(UBWRXKMTQN){
	var SSUNXNEEHN;
	
	if(TFSXFTYVGQ==1)
	{
		if (UBWRXKMTQN=="D"){
			SSUNXNEEHN=1;
		}
		if (UBWRXKMTQN=="R"){
			SSUNXNEEHN=2;
		}
		if (UBWRXKMTQN=="U"){
			SSUNXNEEHN=3;
		}
		if (UBWRXKMTQN=="L"){
			SSUNXNEEHN=4;
		}	
	}
	
	if(TFSXFTYVGQ==2)
	{
		if (UBWRXKMTQN=="D"){
			SSUNXNEEHN=2;
		}
		if (UBWRXKMTQN=="R"){
			SSUNXNEEHN=3;
		}
		if (UBWRXKMTQN=="U"){
			SSUNXNEEHN=4;
		}
		if (UBWRXKMTQN=="L"){
			SSUNXNEEHN=1;
		}	
	}
	
	if(TFSXFTYVGQ==3)
	{
		if (UBWRXKMTQN=="D"){
			SSUNXNEEHN=3;
		}
		if (UBWRXKMTQN=="R"){
			SSUNXNEEHN=4;
		}
		if (UBWRXKMTQN=="U"){
			SSUNXNEEHN=1;
		}
		if (UBWRXKMTQN=="L"){
			SSUNXNEEHN=2;
		}	
	}

	if(TFSXFTYVGQ==4)
	{
		if (UBWRXKMTQN=="D"){
			SSUNXNEEHN=4;
		}
		if (UBWRXKMTQN=="R"){
			SSUNXNEEHN=1;
		}
		if (UBWRXKMTQN=="U"){
			SSUNXNEEHN=2;
		}
		if (UBWRXKMTQN=="L"){
			SSUNXNEEHN=3;
		}	
	}	
	
	return SSUNXNEEHN;
}

function NABJPTUWJA(RDBQUAVHEP){
	var i;
	var DNNXCWARGV;
	
	if(TFSXFTYVGQ==1)
	{
		if (RDBQUAVHEP==1){
			DNNXCWARGV="D"
		}
		if (RDBQUAVHEP==2){
			DNNXCWARGV="R"
		}
		if (RDBQUAVHEP==3){
			DNNXCWARGV="U"
		}
		if (RDBQUAVHEP==4){
			DNNXCWARGV="L"
		}	
	}
	
	if(TFSXFTYVGQ==2)
	{
		if (RDBQUAVHEP==2){
			DNNXCWARGV="D"
		}
		if (RDBQUAVHEP==3){
			DNNXCWARGV="R"
		}
		if (RDBQUAVHEP==4){
			DNNXCWARGV="U"
		}
		if (RDBQUAVHEP==1){
			DNNXCWARGV="L"
		}
	}

	if(TFSXFTYVGQ==3)
	{
		if (RDBQUAVHEP==3){
			DNNXCWARGV="D"
		}
		if (RDBQUAVHEP==4){
			DNNXCWARGV="R"
		}
		if (RDBQUAVHEP==1){
			DNNXCWARGV="U"
		}
		if (RDBQUAVHEP==2){
			DNNXCWARGV="L"
		}
	}

	if(TFSXFTYVGQ==4)
	{
		if (RDBQUAVHEP==4){
			DNNXCWARGV="D"
		}
		if (RDBQUAVHEP==1){
			DNNXCWARGV="R"
		}
		if (RDBQUAVHEP==2){
			DNNXCWARGV="U"
		}
		if (RDBQUAVHEP==3){
			DNNXCWARGV="L"
		}
	}	

	
	if (DNNXCWARGV=="D"){
		for(i=0;i<=FXGSEGRXKC.length-1;i++){
			FXGSEGRXKC[i].TNFAGGMKXD.x=YMHIHSNADE.world.centerX+(i/2);
			FXGSEGRXKC[i].TNFAGGMKXD.y=YMHIHSNADE.world.height-(PPLOSJIWHO)-(FXGSEGRXKC[i].TNFAGGMKXD.height/2)-(YAJVUBPNNW*2)-70;	
		}
	}
	
	if (DNNXCWARGV=="U"){
		for(i=0;i<=FXGSEGRXKC.length-1;i++){
			FXGSEGRXKC[i].TNFAGGMKXD.x=YMHIHSNADE.world.centerX+(i/2);
			FXGSEGRXKC[i].TNFAGGMKXD.y=(FXGSEGRXKC[i].TNFAGGMKXD.height)+(FXGSEGRXKC[i].TNFAGGMKXD.height/2)+(YAJVUBPNNW*2);	;	
		}
	}
	
	if (DNNXCWARGV=="L"){
		for(i=0;i<=FXGSEGRXKC.length-1;i++){
			FXGSEGRXKC[i].TNFAGGMKXD.x=(FXGSEGRXKC[i].TNFAGGMKXD.height)+(FXGSEGRXKC[i].TNFAGGMKXD.height/2)+(YAJVUBPNNW*2)+(i/2);
			FXGSEGRXKC[i].TNFAGGMKXD.y=PXEBTYBHGS;	
			//FXGSEGRXKC[i].TNFAGGMKXD.angle=90;
		}
	}

	if (DNNXCWARGV=="R"){
		for(i=0;i<=FXGSEGRXKC.length-1;i++){
			FXGSEGRXKC[i].TNFAGGMKXD.x=YMHIHSNADE.world.width-(FXGSEGRXKC[i].TNFAGGMKXD.height)-(FXGSEGRXKC[i].TNFAGGMKXD.height/2)-(YAJVUBPNNW*3)+(i/2);
			FXGSEGRXKC[i].TNFAGGMKXD.y=PXEBTYBHGS;	
		}
	}
	
};


function SESLFOEJHY(TXLWIIINGQ){
		//var COIVBWRMCC=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.width;
		var i;
		var u;
		var VEFCIYHBGC;
		
		 
		//for(i=0;i<=FXGSEGRXKC.length-1;i++){
			//	console.log("Tamaño mazo "+FXGSEGRXKC.length)	
			//var s = YMHIHSNADE.add.tween(FXGSEGRXKC[0].TNFAGGMKXD);
			//var s = YMHIHSNADE.add.tween(FXGSEGRXKC[0].TNFAGGMKXD);
			twReparto.timeline=[]
			twReparto.target=FXGSEGRXKC[0].TNFAGGMKXD
			
				for (i=1;i<=FXGSEGRXKC.length-1;i++)
				{
					FXGSEGRXKC[i].TNFAGGMKXD.kill();
				}
			
			
			//twReparto.to( {x:(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)  +  COIVBWRMCC  )    /2)+      (0 *(COIVBWRMCC+ YAJVUBPNNW))+(i/2),
			//y:PXEBTYBHGS}, 2500, KYFMRVNHIQ);	
			//console.log("Centro" +PXEBTYBHGS)
			// YMHIHSNADE.add.tween(GSXGWASLIY.scale).to( {x: 1.2, y: 1.2}, 1000, Phaser.Easing.Back.InOut, true, 0, false).yoyo(true);
		 
			

			
			//twReparto.updateTweenData("vEnd", { x: xMazo, y: FBSDMRLVEL.y, angle:0 });
			
			 twReparto.to( 
			  {x:(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)  +  COIVBWRMCC  )    /2)+      (0 *(COIVBWRMCC+ YAJVUBPNNW))+(1/2),
			y:PXEBTYBHGS,
			angle:0
			}
			, 500, KYFMRVNHIQ,true)
			
			twReparto.onComplete.addOnce(function(){
								
				Renderizar(false, "Mover mazo");	
			 //console.log("Mover FXGSEGRXKC si")
			 
				for (i=0;i<=FXGSEGRXKC.length-1;i++)
				{
					FXGSEGRXKC[i].TNFAGGMKXD.revive();
					FXGSEGRXKC[i].TNFAGGMKXD.x=(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6)) - (YAJVUBPNNW*5)  +  COIVBWRMCC  )    /2)+      (0 *(COIVBWRMCC+ YAJVUBPNNW))+(i/2)
					FXGSEGRXKC[i].TNFAGGMKXD.y=PXEBTYBHGS
				}
				
			} )	
			
			/*if(i==(FXGSEGRXKC.length-1))
			{
				twReparto.onComplete.addOnce(function(){
								
				Renderizar(false, "Mover mazo");	
			//console.log("Mover FXGSEGRXKC "+MuestraProblema())
				
			} )	
			}	*/			
			//twReparto.start();
			
		//}
		

		
		if (EGPDVIEJEL==true)
		{

				
				XSWEXRHSJY();
				WRGLRODAXY(); //20180824
				
				OGGWQECXBK(TXLWIIINGQ,false,false); //2.0.8054 antes estaba en movermazo
				
			//
			

			
		}
		else
		{
			JQSOOBSDDS();
			//log(true,"IA Desde Mover FXGSEGRXKC");
			GIDSSFEUNT("desde movermazo");
			//raka
			//var TKXPPGUPVV = YMHIHSNADE.time.create(false);
			/*var PLKOPTSHBQ=XNYRSXYRGF(DVNRTQIWGL);
			//var	TKXPPGUPVV = YMHIHSNADE.time.create(false);
			TKXPPGUPVV.stop();
			TKXPPGUPVV.add(PLKOPTSHBQ, function(){
				TKXPPGUPVV.stop(); 
			IA(TFSXFTYVGQ,false);} );
			TKXPPGUPVV.start();		*/	
		}
		
		IEQDMBJCAY.revive();
		YGTNAODFHW.revive();
		//CUUKQAGFEB.x=QETACVSHAR;
		//CUUKQAGFEB.revive();

};

function XSWEXRHSJY()
{
	var i;
	
	
	if (MYQBNBVHKU==false)//1.0.6
	{
	
			var GXNRNMAAKW=function( DFBVDPETGO,AURESXCGMK,MQUGCIUQII,
				OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
				 this.DFBVDPETGO=DFBVDPETGO
				 this.AURESXCGMK=AURESXCGMK
				 this.MQUGCIUQII=MQUGCIUQII
									 
				 this.OYJAHGADFQ=OYJAHGADFQ
				 this.OJPXTRQDKS=OJPXTRQDKS
				 this.LYHKNIMVEB=LYHKNIMVEB
				 this.RHOLNWBOXR=RHOLNWBOXR
				 
				 this.EBAPPJFYSW=new Date(Date.now());
			 }
			var QPHHGPRJAI=[];
			QPHHGPRJAI.splice(0,1000);

				
			var OYJAHGADFQ=Math.random()*100000;
			
			var CKHBSQULIF=YMHIHSNADE.time.create(false);
			CKHBSQULIF.loop(200,function(){
			try
			{
			var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,socket.id,MQUGCIUQII,
				OYJAHGADFQ,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK,DFBVDPETGO,'BKEMJDLQQM');
			NBEJWDVLLV.push(KCPHFPSPLQ);
			QPHHGPRJAI.push(KCPHFPSPLQ);

			/*if (KYLIAIETHX==false)
			{
				socket.emit('Consola','Envio listo desconecta '+TFSXFTYVGQ)
			}*/
			
					//socket.emit('Consola','Envio listo normal: '+XPBCVAGCDQ[i].AURESXCGMK+" MQUGCIUQII "+DFBVDPETGO);
					//socket.emit('Consola','Envio listo normal: '+" "+ XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK+" MQUGCIUQII "+MQUGCIUQII+" Hab: "+DFBVDPETGO);

					socket.emit('BKEMJDLQQM',QPHHGPRJAI[0],
					 function(XQLEOGMJYG)
					 {			 
						EXBCVLOIYJ(XQLEOGMJYG,'BKEMJDLQQM');
					 }
					);	
					//console.log("Enviado listo "+MQUGCIUQII)
					QPHHGPRJAI.splice(0,1000);	
					LRYVPILWKS();
					WRGLRODAXY();
					
					CKHBSQULIF.stop();
					CKHBSQULIF.remove();
					
				}
				catch(e){//console.log("ERROR Enviado listo")
				}
			});
			CKHBSQULIF.start();
		
		
		/////////////////////////////////////////////////////////////
		//Testando
		//1.0.4 Uno por otro
		//1.0.9 IOJCRKJSRL();
		//LRYVPILWKS();
		

		//Testando
		
	}
}

function WRGLRODAXY()
{
		var i;
		
		//2.0.8054 Se intenta poner el loop pero falla por estar dentro de un bucle. La variable i va cambiando y no se comporta bien
	
		//console.log("BKEMJDLQQM desconectados1");
		if (ESKTEXAVHU==TFSXFTYVGQ)
		{
			//console.log("Longitud arriba "+XPBCVAGCDQ.length);
			//var Parar=(XPBCVAGCDQ.length-1);
			//console.log("Parar "+Parar);
			for (i=0;i<=XPBCVAGCDQ.length-1;i++)
			{
				//console.log("Vuelta "+i);
				if (XPBCVAGCDQ[i].XJARYUVBCB==true )
				{
					//socket.emit('BKEMJDLQQM', DFBVDPETGO,XPBCVAGCDQ[i].AURESXCGMK);
					
					
						var GXNRNMAAKW=function( DFBVDPETGO,AURESXCGMK,MQUGCIUQII,
						OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
						 this.DFBVDPETGO=DFBVDPETGO
						 this.AURESXCGMK=AURESXCGMK
						 this.MQUGCIUQII=MQUGCIUQII
											 
						 this.OYJAHGADFQ=OYJAHGADFQ
						 this.OJPXTRQDKS=OJPXTRQDKS
						 this.LYHKNIMVEB=LYHKNIMVEB
						 this.RHOLNWBOXR=RHOLNWBOXR
						 
						 this.EBAPPJFYSW=new Date(Date.now());
					 }
					var QPHHGPRJAI=[];
					QPHHGPRJAI.splice(0,1000);

						
					var OYJAHGADFQ=Math.random()*100000;
					//console.log("BKEMJDLQQM desconectados2");

					//var CKHBSQULIF=YMHIHSNADE.time.create(false);
					//var ContinuarTry=true;
				
					//CKHBSQULIF.loop(200,function(){
						try
						{
							
						//	console.log("HVCFEWNDRF de i "+i );
						var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,XPBCVAGCDQ[i].AURESXCGMK,MQUGCIUQII,
							OYJAHGADFQ,XPBCVAGCDQ[i].AURESXCGMK,DFBVDPETGO,'BKEMJDLQQM');
						NBEJWDVLLV.push(KCPHFPSPLQ);
						QPHHGPRJAI.push(KCPHFPSPLQ);

						/*if (KYLIAIETHX==false)
						{
							//socket.emit('Consola','Envio listo desconectados al inicio '+XPBCVAGCDQ[i].AURESXCGMK)
						}*/
							
							
							//socket.emit('Consola','Envio listo desconectados: '+i+" "+ XPBCVAGCDQ[i].AURESXCGMK+" MQUGCIUQII "+MQUGCIUQII+" Hab: "+DFBVDPETGO);
							//console.log("Enviando BKEMJDLQQM desconectados4");
							socket.emit('BKEMJDLQQM',QPHHGPRJAI[0],
							 function(XQLEOGMJYG)
							 {			 
								EXBCVLOIYJ(XQLEOGMJYG,'BKEMJDLQQM');
							 }
							);						
							//console.log("BKEMJDLQQM desconectados3");
							QPHHGPRJAI.splice(0,1000);	
							
							//CKHBSQULIF.stop();
							//CKHBSQULIF.remove();
						}
						catch(e){
							//console.log("Error BKEMJDLQQM desconectados4"+e);
							//							CKHBSQULIF.stop();
							//CKHBSQULIF.remove();
						}
					//});
					//CKHBSQULIF.start();
				}
				else
				{
					//console.log("BKEMJDLQQM desconectados22");
				}
			}
			
		}
		else
		{
			//console.log("BKEMJDLQQM desconectados11 "+ESKTEXAVHU+" "+TFSXFTYVGQ);
		}
	
}

function LRYVPILWKS()
{
	var i;
	var OLJVOASCTV;
	var u;
	var VEFCIYHBGC;
	var UHYCGYFWYJ=0;
	
	KYDWXPGHVY.splice(0,1000);
	for (i=0;i<=XPBCVAGCDQ.length-1;i++)
	{
		if (XPBCVAGCDQ[i].XJARYUVBCB==true)
		{
			
			VEFCIYHBGC=false;
			for ( var u=0;u<=KYDWXPGHVY.length-1;u++)
			{
					
				if ( JHVKJDVHWW(KYDWXPGHVY[u].AURESXCGMK,XPBCVAGCDQ[i].AURESXCGMK))  //MULTIPLEJUGADOR
				{
					VEFCIYHBGC=true;
				}
			
			}
			
			if (VEFCIYHBGC==false)
			{
				
				KYDWXPGHVY.push( new UVYJLLYCYD ( (i+1),XPBCVAGCDQ[i].AURESXCGMK ));
				//ArrayJugadoresDesconectadosID.push(XPBCVAGCDQ[i].AURESXCGMK);
			}

			
			
		}
		else
		{
			
			u=KYDWXPGHVY.length;
			while (u--)
			{	
	
				if (JHVKJDVHWW(KYDWXPGHVY[u].AURESXCGMK,XPBCVAGCDQ[i].AURESXCGMK)) //MULTIPLEJUGADOR
				{
					KYDWXPGHVY.splice(u,1);					
				}		
			}
			

			
		}
			
	}
	
}

function QYYXUWQADX(TXLWIIINGQ){

	//2.0.1 DCOXIXEBRJ.splice(0,100); clave:reparto
	//2.0.1 JEHYBALODM.splice(0,100); clave:reparto
	
	XXXJKHDCJK=0;
	vVecesReconectado=0;
	
	//HJBVQUGKVY();
	
	ActivarCuentaPalos();

	//var s = YMHIHSNADE.add.tween(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
	twReparto.target=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD;
	twReparto.timeline=[];
	
		twReparto.to( {x:(( YMHIHSNADE.world.width-AQONVWHHFT-((COIVBWRMCC*6))  - (YAJVUBPNNW*8) +  COIVBWRMCC)/2)+ (1 *(COIVBWRMCC+ YAJVUBPNNW))
		,y:PXEBTYBHGS,
		angle : 90
		}, 500, KYFMRVNHIQ);		
		
		twReparto.onComplete.addOnce(
		
		function()
		{
				
			FBSDMRLVEL.push(new TVYNYTCQYW(FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI,FXGSEGRXKC[FXGSEGRXKC.length-1].UUOPKETETA,FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF,FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD,5,FXGSEGRXKC[FXGSEGRXKC.length-1].jugador,null,null,FXGSEGRXKC[FXGSEGRXKC.length-1].MQUGCIUQII));
		
		//FBSDMRLVEL[FBSDMRLVEL.length-1].TNFAGGMKXD.moveDown();
		COTMMCVJWP.add(FBSDMRLVEL[FBSDMRLVEL.length-1].TNFAGGMKXD);
		YMHIHSNADE.world.bringToTop(GSXGWASLIY);
		YMHIHSNADE.world.bringToTop(RXKKPILDQT);
		TGTQPBEQFR=FBSDMRLVEL[FBSDMRLVEL.length-1].SGCSHJVERI;
		
		//POUWEIOUWQ.frame=FBSDMRLVEL[0].TNFAGGMKXD.frame
		//FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.tint =  Phaser.Color.getColor(100,100,100);
		FXGSEGRXKC.pop();
		
		if (EGPDVIEJEL==true)
		{
			DHJGJHGWCY.revive();
			GJHWUYGCBN.revive();
			UYIUYIUYIU.revive();
			BNVUWCOWEC.revive();
		}
		console.log("entra a mover")
		HGMNXSIAPV=true;
		//console.log("RECUPERA_ sacatriunfo");
		BloqueoCartaCentro=false;
		//OGGWQECXBK(TXLWIIINGQ,false,false); //QYYXUWQADX

		
		HayPROS();			
				
				
				
				
				SESLFOEJHY(TXLWIIINGQ)				
		}		 )		
		
		twReparto.start();
		
		NAYBJTKIKA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		

		

		
		//JQSOOBSDDS();
};

function MarcadorNuevo()
{
	if (KYLIAIETHX==false)
	{
		return true; //deshaz
	}
	return JVQXQGYDHH==0 && CNCCBHQJKL==0 && UHHXSNXXJK==0 && PXGXKDDNFK==0
}

function HayPROS()
{
	var i;
	var Cuenta=0;
	
	if (XPBCVAGCDQ.length>0)
	{
		for (i=0;i<=XPBCVAGCDQ.length-1;i++)
		{
			if (XPBCVAGCDQ[i].NHWYTYUSYG==true || (XPBCVAGCDQ[i].OIUIOWCHVW>=1 && XPBCVAGCDQ[i].OIUIOWCHVW<=5))
			{
				Cuenta++;
			}
		}
	}
	
	
	if (Cuenta>=1)
	{
		if (MarcadorNuevo() && EVAILWGGKX==false) 
		{
			EABXADHEVT("_HayPROS");
		}
	}
	else
	{
		EABXADHEVT("_HayProfesionales");
			
	}
}


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



function WTNGDOQIWY(sprite) {
  var s;
  var i;
//  log(false,"co");
//log(false,"mide moviendo.. "+AGKVNAGGLB.length);
	for (var i=AGKVNAGGLB.length-1;i>=0;i--){
	   if (checkOverlap(sprite, AGKVNAGGLB[i].TNFAGGMKXD))
		{
			AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(175,200,111);
		}
		else{
			//if (DVNRTQIWGL==TFSXFTYVGQ){
				//IXLQLKYFRI(sprite);
			AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
			//IXLQLKYFRI();
			//}
			//else
			//{
			//	AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
			//}			
		}
		//IXLQLKYFRI();
		//sprite.tint=Phaser.Color.getColor(255,255,255);
	}	
}

function IHSCVAKSDJ(sprite) {
  var s;
  var CYDMXACGSH=false;	
  var i;
  var k;
  var text;
  
  EstoyClickando=false;
	//log(false,"KEYYYYYYYYYYYYYYYYYYYY "+sprite.name);
	//log(false,"elimina");
	//socket.emit('Consola',"Paro Drag");
	
	//console.log(navigator.deviceMemory)
	//if (EGPDVIEJEL==true)
	//{	
		//if (KYLIAIETHX==false)
		//{
		//	socket.emit("Consola","0: "+XPBCVAGCDQ[0].AURESXCGMK+" 1: "+XPBCVAGCDQ[1].AURESXCGMK+" 2: "+XPBCVAGCDQ[2].AURESXCGMK+" 3: //"+XPBCVAGCDQ[3].AURESXCGMK);
		//}
	//}
	
	if (OTGNMRHTVK()==false) //2.0.7
	
		//(!PQUFIBKJJH.isRunning && !LJRRHVSVKD.isRunning && !LCYAHFBDTT.isRunning && !NEPGDYQDEI.isRunning && !HHBPAROITT.isRunning && !EWXBTDLSHW.isRunning && !BDEFDQUJJE.isRunning && !CKOUBGTDUF.isRunning && !JLFYUAKDIJ.isRunning)
	{
	
		/*for (i=0;i<=AGKVNAGGLB.length-1;i++){
			AGKVNAGGLB[i].TNFAGGMKXD.tint=Phaser.Color.getColor(255,255,255);
		}*/
		IXLQLKYFRI();

		for (i=0;i<=AGKVNAGGLB.length-1;i++){
		   if (i!=AGKVNAGGLB.length-1){
			   if (checkOverlap(sprite, AGKVNAGGLB[i].TNFAGGMKXD) && checkOverlap(sprite, AGKVNAGGLB[i+1].TNFAGGMKXD))
			   {
				VOHGWKGYGY(sprite,AGKVNAGGLB,AGKVNAGGLB[i+1].NPYBJSHIFL-0.5)
				CYDMXACGSH=true;			
				
				break;
			   }
			   else
			   {
					if (checkOverlap(sprite, AGKVNAGGLB[i].TNFAGGMKXD)) {					
						VOHGWKGYGY(sprite,AGKVNAGGLB,AGKVNAGGLB[i].NPYBJSHIFL-0.5)
						CYDMXACGSH=true;					
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
				if (checkOverlap(sprite, AGKVNAGGLB[i].TNFAGGMKXD)) {		
					log(false,"La �ltima");	
					VOHGWKGYGY(sprite,AGKVNAGGLB,AGKVNAGGLB[i].NPYBJSHIFL+0.5)	
					CYDMXACGSH=true;					
					break;
				}
				else{
					//log(false,"Regresa a casa 2");	
				}
				
				
			}
		}
		
		if (KYLIAIETHX==false && vCampeonatoOasis==false)
		{

				
		 MensajeError2("Drag: Soy "+TFSXFTYVGQ+" Turno: "+DVNRTQIWGL+" Control:"+ESKTEXAVHU+" Reconectando: "+MNAGVJHWOW()+" AGTXFNIKQD "+LUCRWXJMDR+" Col:"+CYDMXACGSH+" PC "+MYQBNBVHKU+" BT "+TLGMUNNDGH);
		}
		//console.log("ID "+AGKVNAGGLB[0].MQUGCIUQII);
		if (CYDMXACGSH==false)
		{
			for (i=0;i<=AGKVNAGGLB.length-1;i++){
				if (sprite.name==AGKVNAGGLB[i].TNFAGGMKXD.name){
					var posicionX=WIEVLYANFM("D",AGKVNAGGLB[i].NPYBJSHIFL);
					var posicionY=FIGQBSJQGA("D",AGKVNAGGLB[i].NPYBJSHIFL)
					break;
				}
			}
			
			//ape if(ValidaMovimientoJugadorSinActualizarRapido(LUCRWXJMDR,TFSXFTYVGQ)==true)
			//{
				//como quiero que todo siga igual, pong este if, que me fastidiaba los turnos, y en el siguiente, la misma condici�n.
				log(true, "LON "+VDKOVQXHON.length)
				log(true,"turnoOOO ANTES "+DVNRTQIWGL);
				//EVHFMHFMJU(TFSXFTYVGQ);
				
				log(true,"turnoOOO DESPUES "+DVNRTQIWGL);
			//}
			//else
			//{
			//}
			
			log(true,"turnoOOO "+DVNRTQIWGL);
			//for (var k=0;k<=KTBOJTXFEU.length-1;k++){
			//}	

			
		/*
		*/
		
							/*&& !twReuD1.isRunning && !twReuD2.isRunning && !twReuD3.isRunning && !twReuD4.isRunning && !twReuD5.isRunning && !twReuD6.isRunning 
					&& !twReuL1.isRunning && !twReuL2.isRunning && !twReuL3.isRunning && !twReuL4.isRunning && !twReuL5.isRunning && !twReuL6.isRunning 
					&& !twReuR1.isRunning && !twReuR2.isRunning && !twReuR3.isRunning && !twReuR4.isRunning && !twReuR5.isRunning && !twReuR6.isRunning 
					&& !twReuU1.isRunning && !twReuU2.isRunning && !twReuU3.isRunning && !twReuU4.isRunning && !twReuU5.isRunning && !twReuU6.isRunning*/
					
					
		console.log("llega a validar el drag")
			if ( AGKVNAGGLB.length>0 && ( Math.abs(sprite.x-posicionX)<=AGKVNAGGLB[AGKVNAGGLB.length-1].TNFAGGMKXD.width*1.5 &&
				Math.abs(sprite.y-posicionY)<=AGKVNAGGLB[AGKVNAGGLB.length-1].TNFAGGMKXD.height*1.5 && DVNRTQIWGL==TFSXFTYVGQ)	&& 
				(!PQUFIBKJJH.isRunning && !HHBPAROITT.isRunning 
					&& !BDEFDQUJJE.isRunning && !CKOUBGTDUF.isRunning && !JLFYUAKDIJ.isRunning && !twRec4.isRunning
					&& !PTHQXTTWIH.isRunning  && !IRQUWMEVQL.isRunning && !HIFQJUUVEU.isRunning && !JKSTORAHAM.isRunning
				&& !TKXWTMCBFU.isRunning && !UEIQAMIDWY.isRunning && !GCKCAMPPHX.isRunning && !CFFVTFENDF.isRunning) &&
				MYQBNBVHKU==true 
				&& OTGNMRHTVK()==false //1.0.9
				&& MNAGVJHWOW()==false //1.0.9
				//&& TLGMUNNDGH==false 2.0.8054
				&& ( (EGPDVIEJEL==true && SNJCSVWFCC()) || EGPDVIEJEL==false) //1.0.9
				//&& HMVFLEYPXM.length==0 2.0.8054
				)

				//&& ValidaMovimientoJugadorSinActualizarRapido(LUCRWXJMDR,TFSXFTYVGQ)==true 
			{
				if (XPSRYGDPNI(AGKVNAGGLB[i],TFSXFTYVGQ)==true)
				{
					console.log("llega a validar el drag2")
					//New
					//ape XYXCEMMRDC.push(new NQMQGXXHIL(LUCRWXJMDR,TFSXFTYVGQ) );
					
					//if (ValidaMovimientoJugadorSinActualizar(LUCRWXJMDR,TFSXFTYVGQ)==true) 1.0.9
					if (HQWFFUCQDR(LUCRWXJMDR,TFSXFTYVGQ,MQUGCIUQII)==true) //quito el sinacutalizar
					{
						TKXPPGUPVV.stop(); //Mucho miedo 29/04/2017
						TKXPPGUPVV.remove(); 
						//1.0.9 KTBOJTXFEU.push(new NQMQGXXHIL(LUCRWXJMDR,TFSXFTYVGQ) );
						
						//1.0.4
						GLFVIKHXMD();
						if (EGPDVIEJEL==false)
						{
							VDKOVQXHON.push(new TVYNYTCQYW(AGKVNAGGLB[i].SGCSHJVERI,AGKVNAGGLB[i].UUOPKETETA,AGKVNAGGLB[i].HVCFEWNDRF,AGKVNAGGLB[i].TNFAGGMKXD,null,TFSXFTYVGQ,null,null,AGKVNAGGLB[i].MQUGCIUQII));//no hace falta la EBAPPJFYSW hora del server
							
							//if [11,12].indexOf( AGKVNAGGLB[i].VVRCMEUNOJ  )>=0
							//{
								MazoCartasSalidas.push(new TVYNYTCQYW(AGKVNAGGLB[i].SGCSHJVERI,AGKVNAGGLB[i].UUOPKETETA,AGKVNAGGLB[i].HVCFEWNDRF,null,VDKOVQXHON.length,TFSXFTYVGQ,LUCRWXJMDR,null,null));
							//}
							
							QTIPILDEPH(sprite,"D",LUCRWXJMDR,TFSXFTYVGQ,false,AGKVNAGGLB[i].SGCSHJVERI);
							AGKVNAGGLB.splice(i,1);	
							OROGRNBISW(AGKVNAGGLB,"D",false,false,false,false);
						}
						
						
						
						
						
								
						
						if (EGPDVIEJEL==true)
						{
							
							
							/////////////
							AJFQVFUKAP=false; //1.0.8
							
							var QKVJASWVEO=Date.now();
							var GXNRNMAAKW=function( DFBVDPETGO,TFSXFTYVGQ,AAJNQWXHMY,Turno, TKWCTNGROU, EVAILWGGKX,KXAWTTIEGG,OBTBPOULAV,AURESXCGMK,WWKVHIMWYD,MQUGCIUQII,
								OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
								 this.DFBVDPETGO=DFBVDPETGO
								 this.TFSXFTYVGQ=TFSXFTYVGQ
								 this.AAJNQWXHMY=AAJNQWXHMY
								 this.Turno=Turno
								 this.AGTXFNIKQD=TKWCTNGROU
								 this.EVAILWGGKX=EVAILWGGKX
								 this.KXAWTTIEGG=KXAWTTIEGG
								 this.OBTBPOULAV=OBTBPOULAV
								 this.AURESXCGMK=AURESXCGMK
								 this.WWKVHIMWYD=WWKVHIMWYD
								 this.MQUGCIUQII=MQUGCIUQII
								 
								 this.OYJAHGADFQ=OYJAHGADFQ
								 this.OJPXTRQDKS=OJPXTRQDKS
								 this.LYHKNIMVEB=LYHKNIMVEB
								 this.RHOLNWBOXR=RHOLNWBOXR
								 
								 this.EBAPPJFYSW=new Date(Date.now());
							 }
							var QPHHGPRJAI=[];
							QPHHGPRJAI.splice(0,1000);
		 
								
							var OYJAHGADFQ=Math.random()*100000;
							var KCPHFPSPLQ=new GXNRNMAAKW(DFBVDPETGO,TFSXFTYVGQ,AGKVNAGGLB[i].TNFAGGMKXD.name,DVNRTQIWGL, LUCRWXJMDR, EVAILWGGKX,(JVQXQGYDHH+CNCCBHQJKL),
								XPBCVAGCDQ[TFSXFTYVGQ-1].OBTBPOULAV,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK,
								XPBCVAGCDQ[TFSXFTYVGQ-1].WWKVHIMWYD,MQUGCIUQII,
								OYJAHGADFQ,XPBCVAGCDQ[TFSXFTYVGQ-1].AURESXCGMK,DFBVDPETGO,'RYUDYPPOXW');
							NBEJWDVLLV.push(KCPHFPSPLQ);
							QPHHGPRJAI.push(KCPHFPSPLQ);

							//var CKHBSQULIF=YMHIHSNADE.time.create(false);
							try
							{							
								socket.emit('RYUDYPPOXW',QPHHGPRJAI[0],
								 function(XQLEOGMJYG)
								 {			 
									EXBCVLOIYJ(XQLEOGMJYG,'RYUDYPPOXW');
								 }
								);						
								QPHHGPRJAI.splice(0,1000);	
								
								if (AGKVNAGGLB[i].SGCSHJVERI==TGTQPBEQFR)
								{
									if (AGKVNAGGLB[i].HVCFEWNDRF==1)
									{
										WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,false,false,true,false);
									}
									if (AGKVNAGGLB[i].HVCFEWNDRF==3)
									{
										WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL),EVAILWGGKX,0,false,false,false,true);
									}
								}
							
							}
							catch(e){}
							
							/////////////							
							
							
							
							

						}

						
						
					}

				
				}
				

			}
			else
			{
				console.log("culpa de tweens1 "+				(!PQUFIBKJJH.isRunning && !HHBPAROITT.isRunning 
					&& !BDEFDQUJJE.isRunning && !CKOUBGTDUF.isRunning && !JLFYUAKDIJ.isRunning && !twRec4.isRunning) )
				
				console.log("culpa de tweens2 "+				(!PTHQXTTWIH.isRunning  && !IRQUWMEVQL.isRunning && !HIFQJUUVEU.isRunning && !JKSTORAHAM.isRunning
				 ) )

				console.log("culpa de tweens2 "+				( TKXWTMCBFU.isRunning && !UEIQAMIDWY.isRunning && !GCKCAMPPHX.isRunning && !CFFVTFENDF.isRunning) )				
				OROGRNBISW(AGKVNAGGLB,"D",false,false,false,false); 
				if (DVNRTQIWGL!=TFSXFTYVGQ  && (Math.abs(sprite.x-posicionX)<=AGKVNAGGLB[AGKVNAGGLB.length-1].TNFAGGMKXD.width &&
				Math.abs(sprite.y-posicionY)<=AGKVNAGGLB[AGKVNAGGLB.length-1].TNFAGGMKXD.height)  ){
		
					
						//  The Text is positioned at 0, 100
						//text = YMHIHSNADE.add.text(0, 0, SVLGSBPKGJ());
						text = IEUIUCYUCC(SVLGSBPKGJ(),40);
					
						/*text.x=YMHIHSNADE.world.centerX;
						text.y=YMHIHSNADE.world.centerY+30
						
						text.anchor.set(0.5);
						text.align = 'center';


						text.font = 'Arial Black';
						text.fontSize = 30;
						text.fontWeight = 'bold';


						text.stroke = '#961918';
						text.strokeThickness = 7;
						text.fill = '#F8E600';	*/	
						

						
						//  It won't start automatically, allowing you to hook it to button events and the like.
						var timertextoturno = YMHIHSNADE.time.create(true);
						timertextoturno.add(1500, FYYEWMEHBU, this,text);
						timertextoturno.start();
						

						//  Set a timerEvent to occur after 3 seconds
						

				}
			}
			
		}
		else
		{
			OROGRNBISW(AGKVNAGGLB,"D",false,false,false,false);
		}	
	}
	else
	{
		//OROGRNBISW(AGKVNAGGLB,"D"); //2.0.8051
	}		
	
	
}

function CGCMEMLMAG(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ){
	var UBWRXKMTQN;
	var DWTJCXXKNS;
	var XACEBCSJAB;
	
	console.log("por aqui 3")
	//if (UHHXSNXXJK<JLVDFTPUNI && PXGXKDDNFK<JLVDFTPUNI)
	//{
		

		
		var VJGLUDIXWN=LDCCGSIBKW;
		
		log(false,"Intenta robar..");
		if (FXGSEGRXKC.length>0){
		
		DWTJCXXKNS=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD
		UBWRXKMTQN=HHOPUSIABJ(VJGLUDIXWN);
		
		if (UBWRXKMTQN=="U"){
			var XACEBCSJAB=TWJONOKGHC;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			PBHYCULPGK.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="D"){
			var XACEBCSJAB=AGKVNAGGLB;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle;
			NAYBJTKIKA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			RXKKPILDQT.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="L"){
			var XACEBCSJAB=KNVKGHHTYC;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle+90;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			SYXHGDSJDY.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="R"){
			var XACEBCSJAB=CBCNHFGWLU;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle+270;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			BDRJVGFWQH.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}	
		
		log(false,"Tama�o de la mano "+XACEBCSJAB.length);
		
			
			
			XACEBCSJAB.push(new TVYNYTCQYW(FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI,FXGSEGRXKC[FXGSEGRXKC.length-1].UUOPKETETA,FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF,FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD,5,FXGSEGRXKC[FXGSEGRXKC.length-1].jugador,null,null,FXGSEGRXKC[FXGSEGRXKC.length-1].MQUGCIUQII));
			EABXADHEVT('WWYKUMYJBJ');
			
			
			if (UBWRXKMTQN=="D"){
				JQSOOBSDDS();
			}
			
			FXGSEGRXKC.pop();
			
			
			
			var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,99);
			log(false,"X de "+UBWRXKMTQN+" "+NOFEDXHMLS);
			var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,99);
				
			//if (NCKMGYLDRO=="L"){
					//VRLYJAAHUE(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
			if (FXGSEGRXKC.length>0){
				Renderizar(true, "Robar cartas 1");
				//PQUFIBKJJH = YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
				PQUFIBKJJH.timeline=[]
				PQUFIBKJJH.target=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD
				
						PQUFIBKJJH.to( {x:NOFEDXHMLS
						,y:GHTWROCHVV
						,angle:KKQWKUGGSI
						}
						, BQUYYUASDK, KYFMRVNHIQ);
						PQUFIBKJJH.onComplete.addOnce(//BHRQQCWPGM,this)
							function () {
								//OROGRNBISW(XACEBCSJAB,UBWRXKMTQN); 2.0.8051
								BHRQQCWPGM(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ); //Truco para poder pasar por par�metro
							}
						);
						if (UBWRXKMTQN=="D")
						{
							//YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
							XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale.setTo(QDTCADQEEX,QDTCADQEEX)
						}
						PQUFIBKJJH.start();
			}
			else
			{
				log(false,"No quedan cartas");
				log(false,"FXGSEGRXKC grr: "+FXGSEGRXKC[0].HVCFEWNDRF+" "+FXGSEGRXKC[0].SGCSHJVERI);
			}
			
			if (FBSDMRLVEL.length>0){
				FBSDMRLVEL[FBSDMRLVEL.length-1].TNFAGGMKXD.moveDown();	
			}
		}
	//}
}



function BHRQQCWPGM(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ){
	var UBWRXKMTQN;
	var DWTJCXXKNS;
	var XACEBCSJAB;
	
	//if (UHHXSNXXJK<JLVDFTPUNI && PXGXKDDNFK<JLVDFTPUNI)
	//{
	
		var VJGLUDIXWN=LDCCGSIBKW+1;
		
		if (FXGSEGRXKC.length>0){
		
		/*log(false,"DVNRTQIWGL: "+DVNRTQIWGL);
		log(false,"DVNRTQIWGL Ficticio: "+VJGLUDIXWN);*/
		if (VJGLUDIXWN>4){
			VJGLUDIXWN=VJGLUDIXWN-4;
		}
		
		//log(false,"DVNRTQIWGL Ficticio Modificicado: "+VJGLUDIXWN);
		DWTJCXXKNS=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD
		
		//log(false,"Robada 2 "+FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF+" de "+FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI);
		
		
		UBWRXKMTQN=HHOPUSIABJ(VJGLUDIXWN);
		//log(false,"STLEOJDWSU: "+UBWRXKMTQN);
		
		if (UBWRXKMTQN=="U"){
			var XACEBCSJAB=TWJONOKGHC;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			PBHYCULPGK.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="D"){
			var XACEBCSJAB=AGKVNAGGLB;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle;
			NAYBJTKIKA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			RXKKPILDQT.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="L"){
			var XACEBCSJAB=KNVKGHHTYC;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle+90;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			SYXHGDSJDY.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="R"){
			var XACEBCSJAB=CBCNHFGWLU;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle+270;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			BDRJVGFWQH.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}	
		
		//if (XACEBCSJAB.length<6){
			XACEBCSJAB.push(new TVYNYTCQYW(FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI,FXGSEGRXKC[FXGSEGRXKC.length-1].UUOPKETETA,FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF,FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD,5,FXGSEGRXKC[FXGSEGRXKC.length-1].jugador,null,null,FXGSEGRXKC[FXGSEGRXKC.length-1].MQUGCIUQII));
			EABXADHEVT('WWYKUMYJBJ');
			
			if (UBWRXKMTQN=="D"){
				JQSOOBSDDS();
			}
			
			FXGSEGRXKC.pop();
			
			
			
			var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,99);
			var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,99);
			log(false,"X de "+UBWRXKMTQN+" "+NOFEDXHMLS);
				
			if (FXGSEGRXKC.length>0){
					//VRLYJAAHUE(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
					//PQUFIBKJJH = YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
					PQUFIBKJJH.timeline=[]
					PQUFIBKJJH.target=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD
						PQUFIBKJJH.to( {x:NOFEDXHMLS
						,y:GHTWROCHVV
						,angle:KKQWKUGGSI
						}
						, BQUYYUASDK, KYFMRVNHIQ);
						PQUFIBKJJH.onComplete.addOnce(//NDYHJQQAUL,this)
							function () {
								//OROGRNBISW(XACEBCSJAB,UBWRXKMTQN); 2.0.8051
								NDYHJQQAUL(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ); //Truco para poder pasar por par�metro
							}
						);
						if (UBWRXKMTQN=="D")
						{
							//YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
							XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale.setTo(QDTCADQEEX,QDTCADQEEX)
						}
						PQUFIBKJJH.start();
			}
			if (FBSDMRLVEL.length>0){
				FBSDMRLVEL[FBSDMRLVEL.length-1].TNFAGGMKXD.moveDown();	
			}
		}
	//}
}


function NDYHJQQAUL(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ){
	var UBWRXKMTQN;
	var DWTJCXXKNS;
	var XACEBCSJAB;
	var i;
	

	
	
	//if (UHHXSNXXJK<JLVDFTPUNI && PXGXKDDNFK<JLVDFTPUNI)
	//{
		var VJGLUDIXWN=LDCCGSIBKW+2;
		if (VJGLUDIXWN>4){
			VJGLUDIXWN=VJGLUDIXWN-4;
		}
		
		if (FXGSEGRXKC.length>0){
		
		DWTJCXXKNS=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD
		//log(false,"Robada 3 "+FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF+" de "+FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI);
		
		UBWRXKMTQN=HHOPUSIABJ(VJGLUDIXWN);
		
		if (UBWRXKMTQN=="U"){
			var XACEBCSJAB=TWJONOKGHC;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			PBHYCULPGK.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="D"){
			var XACEBCSJAB=AGKVNAGGLB;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle;
			NAYBJTKIKA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			RXKKPILDQT.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="L"){
			var XACEBCSJAB=KNVKGHHTYC;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle+90;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			SYXHGDSJDY.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="R"){
			var XACEBCSJAB=CBCNHFGWLU;
			var KKQWKUGGSI=FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD.angle+270;
			XNFDNBQFUA(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
			BDRJVGFWQH.add(FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD);
		}	
		
		//if (XACEBCSJAB.length<6){
			XACEBCSJAB.push(new TVYNYTCQYW(FXGSEGRXKC[FXGSEGRXKC.length-1].SGCSHJVERI,FXGSEGRXKC[FXGSEGRXKC.length-1].UUOPKETETA,FXGSEGRXKC[FXGSEGRXKC.length-1].HVCFEWNDRF,FXGSEGRXKC[FXGSEGRXKC.length-1].TNFAGGMKXD,5,FXGSEGRXKC[FXGSEGRXKC.length-1].jugador,null,null,FXGSEGRXKC[FXGSEGRXKC.length-1].MQUGCIUQII));
			EABXADHEVT('WWYKUMYJBJ');
			
			if (UBWRXKMTQN=="D"){
				JQSOOBSDDS();
			}
			
			FXGSEGRXKC.pop();
			
			
			
			var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,99);
			var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,99);
			log(false,"X de "+UBWRXKMTQN+" "+NOFEDXHMLS);
				
			if (FXGSEGRXKC.length>0 || FBSDMRLVEL.length>0){
					//VRLYJAAHUE(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
					//PQUFIBKJJH = YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
					PQUFIBKJJH.timeline=[]
					PQUFIBKJJH.target=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD
					
						PQUFIBKJJH.to( {x:NOFEDXHMLS
						,y:GHTWROCHVV
						,angle:KKQWKUGGSI
						}
						, BQUYYUASDK, KYFMRVNHIQ);
					PQUFIBKJJH.onComplete.addOnce(//TMUBOPUYAH,this)
							function () {
								//OROGRNBISW(XACEBCSJAB,UBWRXKMTQN); 2.0.8051
								TMUBOPUYAH(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ); //Truco para poder pasar por par�metro
							}
						);
						if (UBWRXKMTQN=="D")
						{
							//YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,true);
							//XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale.setTo(QDTCADQEEX,QDTCADQEEX)
							XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale.setTo(QDTCADQEEX,QDTCADQEEX)
						}
						PQUFIBKJJH.start();
			}
			
			if (FBSDMRLVEL.length>0){
				FBSDMRLVEL[FBSDMRLVEL.length-1].TNFAGGMKXD.moveDown();	
			}
		}
	//}
}



function TMUBOPUYAH(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ){
	var UBWRXKMTQN;
	var DWTJCXXKNS;
	var XACEBCSJAB;
	var MazoMover=[];
	var i;
	

	//if (UHHXSNXXJK<JLVDFTPUNI && PXGXKDDNFK<JLVDFTPUNI)
	//{
		var VJGLUDIXWN=LDCCGSIBKW+3;
		if (VJGLUDIXWN>4){
			VJGLUDIXWN=VJGLUDIXWN-4;
		}
		
		if (FXGSEGRXKC.length>0 || FBSDMRLVEL.length>0 ){
		
		log(false,"koooo")
		
		if(FXGSEGRXKC.length>0){
			MazoMover=FXGSEGRXKC;		
			//log(false,"Error");
			
		}
		else
		{
			MazoMover=FBSDMRLVEL;		
			
			if (FBSDMRLVEL[0].VVRCMEUNOJ>7)
			{
				var Destinatario=0;

				Destinatario=DVNRTQIWGL-1;
				if (Destinatario==0)
				{
					Destinatario=4;
				}
				ArrayCambioCarta.push( new ObjetoCambiaCarta( FBSDMRLVEL[FBSDMRLVEL.length-1].VVRCMEUNOJ, Destinatario) )
			}
			
			
			//log(false,"Robada4 "+FBSDMRLVEL[MazoMover.length-1].HVCFEWNDRF+" de "+FBSDMRLVEL[MazoMover.length-1].SGCSHJVERI);
			//log(false,"Robada4 "+FBSDMRLVEL[FBSDMRLVEL.length-1].HVCFEWNDRF+" de "+FBSDMRLVEL[FBSDMRLVEL.length-1].SGCSHJVERI);
		}
		
		DWTJCXXKNS=MazoMover[MazoMover.length-1].TNFAGGMKXD;
		//log(false,"Robada4 "+MazoMover[MazoMover.length-1].HVCFEWNDRF+" de "+MazoMover[MazoMover.length-1].SGCSHJVERI);
		
		UBWRXKMTQN=HHOPUSIABJ(VJGLUDIXWN);
		
		if (UBWRXKMTQN=="U"){
			var XACEBCSJAB=TWJONOKGHC;
			var KKQWKUGGSI=MazoMover[MazoMover.length-1].TNFAGGMKXD.angle;
			//XNFDNBQFUA(MazoMover[MazoMover.length-1].TNFAGGMKXD);
			for (i=0;i<=MazoMover.length-1;i++)
			{
				XNFDNBQFUA(MazoMover[i].TNFAGGMKXD);
			}
			
			PBHYCULPGK.add(MazoMover[MazoMover.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="D"){
			var XACEBCSJAB=AGKVNAGGLB;
			var KKQWKUGGSI=MazoMover[MazoMover.length-1].TNFAGGMKXD.angle;
			NAYBJTKIKA(MazoMover[MazoMover.length-1].TNFAGGMKXD);
			RXKKPILDQT.add(MazoMover[MazoMover.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="L"){
			var XACEBCSJAB=KNVKGHHTYC;
			var KKQWKUGGSI=MazoMover[MazoMover.length-1].TNFAGGMKXD.angle+90;
			//XNFDNBQFUA(MazoMover[MazoMover.length-1].TNFAGGMKXD);
			for (i=0;i<=MazoMover.length-1;i++)
			{
				XNFDNBQFUA(MazoMover[i].TNFAGGMKXD);
			}
			SYXHGDSJDY.add(MazoMover[MazoMover.length-1].TNFAGGMKXD);
		}
		if (UBWRXKMTQN=="R"){
			var XACEBCSJAB=CBCNHFGWLU;
			var KKQWKUGGSI=MazoMover[MazoMover.length-1].TNFAGGMKXD.angle+270;
			//XNFDNBQFUA(MazoMover[MazoMover.length-1].TNFAGGMKXD);
			for (i=0;i<=MazoMover.length-1;i++)
			{
				XNFDNBQFUA(MazoMover[i].TNFAGGMKXD);
			}
			BDRJVGFWQH.add(MazoMover[MazoMover.length-1].TNFAGGMKXD);
		}	
		
		//if (XACEBCSJAB.length<6){ // Hay que poner este control porque si no pasa varias veces en multijugador
		XACEBCSJAB.push(new TVYNYTCQYW(MazoMover[MazoMover.length-1].SGCSHJVERI,MazoMover[MazoMover.length-1].UUOPKETETA,MazoMover[MazoMover.length-1].HVCFEWNDRF,MazoMover[MazoMover.length-1].TNFAGGMKXD,5,
		MazoMover[MazoMover.length-1].jugador,null,null,MazoMover[MazoMover.length-1].MQUGCIUQII));
		
		EABXADHEVT('WWYKUMYJBJ');
		
		if (UBWRXKMTQN=="D"){
			JQSOOBSDDS();
		}
		console.log("ROBAR CARTAS 1 "+FBSDMRLVEL.length)
		if (FXGSEGRXKC.length>0) //2.0.8054 pongo el if
		{
			MazoMover.pop();
		}
		console.log("ROBAR CARTAS 1.1 "+FBSDMRLVEL.length)
		
		//if (MazoMover.length==0)
		if (FXGSEGRXKC.length==0)
		{
			KKQWKUGGSI=KKQWKUGGSI-90;
		}
		
		var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,99);
		var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,99);
		log(false,"X de "+UBWRXKMTQN+" "+NOFEDXHMLS);	
		//if (NCKMGYLDRO=="L"){
				//VRLYJAAHUE(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
				//Renderizar(true, "Robar cartas 2");
				//PQUFIBKJJH = YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD);
					PQUFIBKJJH.timeline=[]
					PQUFIBKJJH.target=XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD
					
					PQUFIBKJJH.to( {x:NOFEDXHMLS
					,y:GHTWROCHVV
					,angle:KKQWKUGGSI
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					PQUFIBKJJH.onComplete.addOnce( function(){ 
					
					if (UBWRXKMTQN!="D")
					{
						//console.log("Renderiza?")
						Renderizar(false, "robar cartas 3");
					}
					//if (LUCRWXJMDR==4)
					//{
						//BNVXVJHWWQ();
					//}
					//OROGRNBISW(XACEBCSJAB,UBWRXKMTQN); 2.0.8051
					DFCCHCJBNP(TKWCTNGROU,TXLWIIINGQ);
					
					} 
					)
					if (UBWRXKMTQN=="D")
					{
						//var twEscala=YMHIHSNADE.add.tween(XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale).to( {x:QDTCADQEEX,y:QDTCADQEEX}, IRXOKNWTLV, BSXWFYLCEW,false);
						//twEscala.onComplete.add( function(){ 
						//console.log("Renderiza2?")
						XACEBCSJAB[XACEBCSJAB.length-1].TNFAGGMKXD.scale.setTo(QDTCADQEEX,QDTCADQEEX)						
						Renderizar(false, "robar cartas 4");
						//});
						//twEscala.start();
					}
					PQUFIBKJJH.start();
		//}
				if (FBSDMRLVEL.length>0){
					FBSDMRLVEL[FBSDMRLVEL.length-1].TNFAGGMKXD.moveDown();	
					console.log("ROBAR CARTAS 2 "+FBSDMRLVEL.length)
				}
		
		
		}
		LMGBDQDXWP();
	//}
}


function FYYEWMEHBU(text){
Renderizar(true);
text.kill();
}



function VOHGWKGYGY(sprite, Array, BBSGITWRQX){
	//Env�a la posici�n al resto de compa�eros
	if (SNJCSVWFCC()==true || EGPDVIEJEL==false ) //2.0.1 EGPDVIEJEL==false
	{
		for (var i=0; i<=Array.length-1; i++){
			if (Array[i].TNFAGGMKXD.name==sprite.name){
				Array[i].NPYBJSHIFL=BBSGITWRQX;	
				if (EGPDVIEJEL==true && MNAGVJHWOW()==false )
				{
					try
					{
						socket.emit('SSPKARCWJW', DFBVDPETGO,TFSXFTYVGQ,Array[i].TNFAGGMKXD.name,BBSGITWRQX,MQUGCIUQII) ;
					}
					catch(e){}
				}
				break;
			}
		}
	}
	
}

function WIEVLYANFM(FXGSEGRXKC,NPYBJSHIFL){
	for(var i = 0; i < ETAUVLWEYR.length; i++) {
		if (ETAUVLWEYR[i].FXGSEGRXKC==FXGSEGRXKC && ETAUVLWEYR[i].NPYBJSHIFL==NPYBJSHIFL){
			return ETAUVLWEYR[i].x;
		}		
	}
}

function FIGQBSJQGA(FXGSEGRXKC,NPYBJSHIFL){
	for(var i = 0; i < ETAUVLWEYR.length; i++) {
		if (ETAUVLWEYR[i].FXGSEGRXKC==FXGSEGRXKC && ETAUVLWEYR[i].NPYBJSHIFL==NPYBJSHIFL){
			return ETAUVLWEYR[i].y;
		}		
	}
}
	
function OROGRNBISW(JYVKHLQLIM,NCKMGYLDRO,BBUAAVEPDC,SJVCMXWVVI,KeyDesde7,Manual){
	
	
	var i;
	var twLocal1;
	var twLocal2
	var twLocal3
	var twLocal4
	var twLocal5
	var twLocal6
	
	//console.log("reubicando")
	//Para que cuando robe el 7 sea la �ltima
	for (var i=0;i<=JYVKHLQLIM.length-1;i++)
	{
		if (JYVKHLQLIM[i].TNFAGGMKXD.name==KeyDesde7)
		{
			JYVKHLQLIM[i].NPYBJSHIFL=10;
		}
	}

	
	JYVKHLQLIM.sort(sort_by('NPYBJSHIFL', false, parseFloat));
	
	for (var i=0;i<=JYVKHLQLIM.length-1;i++)
	{
		JYVKHLQLIM[i].NPYBJSHIFL=i;
	}


	//console.log("EfectoSacarCarta: " +BBUAAVEPDC)


	if (BBUAAVEPDC==true)
	{
			
		
		for (var i=0;i<=JYVKHLQLIM.length-1;i++){
			if (JYVKHLQLIM[i].TNFAGGMKXD.name==SJVCMXWVVI){
				break;
			}
		}	
		
		SUMEMLHUFX(NCKMGYLDRO)
		var NOFEDXHMLS=WIEVLYANFM(NCKMGYLDRO,i);
		var GHTWROCHVV=FIGQBSJQGA(NCKMGYLDRO,i);
		
		var twReuLocal
		
		if (Manual==true)
		{
			if (NCKMGYLDRO=="D")
			{
				twLocal1=twReuD1;
				twLocal2=twReuD2;
				twLocal3=twReuD3;
				twLocal4=twReuD4;
				twLocal5=twReuD5;
				twLocal6=twReuD6;
			}
			if (NCKMGYLDRO=="L")
			{
				twLocal1=twReuL1;
				twLocal2=twReuL2;
				twLocal3=twReuL3;
				twLocal4=twReuL4;
				twLocal5=twReuL5;
				twLocal6=twReuL6;
			}
			if (NCKMGYLDRO=="R")
			{
				twLocal1=twReuR1;
				twLocal2=twReuR2;
				twLocal3=twReuR3;
				twLocal4=twReuR4;
				twLocal5=twReuR5;
				twLocal6=twReuR6;
			}
			if (NCKMGYLDRO=="U")
			{
				twLocal1=twReuU1;
				twLocal2=twReuU2;
				twLocal3=twReuU3;
				twLocal4=twReuU4;
				twLocal5=twReuU5;
				twLocal6=twReuU6;
			}	
		}
		else
		{
			if (NCKMGYLDRO=="D")
			{
				twLocal1=twReuDA1;
				twLocal2=twReuDA2;
				twLocal3=twReuDA3;
				twLocal4=twReuDA4;
				twLocal5=twReuDA5;
				twLocal6=twReuDA6;
			}
			if (NCKMGYLDRO=="L")
			{
				twLocal1=twReuLA1;
				twLocal2=twReuLA2;
				twLocal3=twReuLA3;
				twLocal4=twReuLA4;
				twLocal5=twReuLA5;
				twLocal6=twReuLA6;
			}
			if (NCKMGYLDRO=="R")
			{
				twLocal1=twReuRA1;
				twLocal2=twReuRA2;
				twLocal3=twReuRA3;
				twLocal4=twReuRA4;
				twLocal5=twReuRA5;
				twLocal6=twReuRA6;
			}
			if (NCKMGYLDRO=="U")
			{
				twLocal1=twReuUA1;
				twLocal2=twReuUA2;
				twLocal3=twReuUA3;
				twLocal4=twReuUA4;
				twLocal5=twReuUA5;
				twLocal6=twReuUA6;
			}	
		}
		if (KeyDesde7!=false)
		{
			twLocal1=twReu7;
		}
		
		if (!twLocal1.isRunning)
		{
		
			if (NCKMGYLDRO=="L")
			{
					VRLYJAAHUE(JYVKHLQLIM[i].TNFAGGMKXD);
					//EWXBTDLSHW = YMHIHSNADE.add.tween(JYVKHLQLIM[i].TNFAGGMKXD);
					twLocal1.target=JYVKHLQLIM[i].TNFAGGMKXD
					twLocal1.timeline=[]
					twLocal1.to( {x:NOFEDXHMLS+ JYVKHLQLIM[JYVKHLQLIM.length-1].TNFAGGMKXD.width
					,y:GHTWROCHVV
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					twLocal1.onComplete.addOnce(BWTIWMVDQQ,this)
					
					twLocal1.start();
			}
			if (NCKMGYLDRO=="R"){
				VRLYJAAHUE(JYVKHLQLIM[i].TNFAGGMKXD);
				//EWXBTDLSHW = YMHIHSNADE.add.tween(JYVKHLQLIM[i].TNFAGGMKXD);
					twLocal1.target=JYVKHLQLIM[i].TNFAGGMKXD
					twLocal1.timeline=[]			
					twLocal1.to( {x:NOFEDXHMLS- JYVKHLQLIM[JYVKHLQLIM.length-1].TNFAGGMKXD.width
					,y:GHTWROCHVV
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					twLocal1.onComplete.addOnce(BQNUWYNWUM,this)
					
					twLocal1.start();
			}		
			if (NCKMGYLDRO=="U"){
				VRLYJAAHUE(JYVKHLQLIM[i].TNFAGGMKXD);
				//EWXBTDLSHW = YMHIHSNADE.add.tween(JYVKHLQLIM[i].TNFAGGMKXD);
					twLocal1.target=JYVKHLQLIM[i].TNFAGGMKXD
					twLocal1.timeline=[]			
					twLocal1.to( {x:NOFEDXHMLS
					,y:GHTWROCHVV+ JYVKHLQLIM[JYVKHLQLIM.length-1].TNFAGGMKXD.width
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					twLocal1.onComplete.addOnce(IASDVOABBB,this)
					
					twLocal1.start();
			}	
		}
		
	}
	else
	{
		XVQSVMPDII(NCKMGYLDRO,true);
	}
	
	
	



}

function BQNUWYNWUM(){
	XVQSVMPDII("R");
}


function BWTIWMVDQQ(){
	XVQSVMPDII("L");
}

function IASDVOABBB(){
	XVQSVMPDII("U");
}

//2.0.1 01/02/2018
function Desolapar()
{
	try{
		SYXHGDSJDY.sort('y', Phaser.Group.SORT_ASCENDING);
		BDRJVGFWQH.sort('y', Phaser.Group.SORT_DESCENDING);	
	}
	catch(e){}
	//Renderizar(false, "desolapar");
}

function XVQSVMPDII(UBWRXKMTQN,Manual){
	
	
	var twLocal1;
	var twLocal2;
	var twLocal3;
	var twLocal4;
	var twLocal5;
	var twLocal6;
	
	var NNLCEDVGOV=[];
	
		if (Manual==true)
		{
			if (UBWRXKMTQN=="D")
			{
				NNLCEDVGOV=AGKVNAGGLB;
				twLocal1=twReuD1;
				twLocal2=twReuD2;
				twLocal3=twReuD3;
				twLocal4=twReuD4;
				twLocal5=twReuD5;
				twLocal6=twReuD6;
			}
			if (UBWRXKMTQN=="L")
			{
				NNLCEDVGOV=KNVKGHHTYC;
				twLocal1=twReuL1;
				twLocal2=twReuL2;
				twLocal3=twReuL3;
				twLocal4=twReuL4;
				twLocal5=twReuL5;
				twLocal6=twReuL6;
			}
			if (UBWRXKMTQN=="R")
			{
				NNLCEDVGOV=CBCNHFGWLU;
				twLocal1=twReuR1;
				twLocal2=twReuR2;
				twLocal3=twReuR3;
				twLocal4=twReuR4;
				twLocal5=twReuR5;
				twLocal6=twReuR6;
			}
			if (UBWRXKMTQN=="U")
			{
				NNLCEDVGOV=TWJONOKGHC;
				twLocal1=twReuU1;
				twLocal2=twReuU2;
				twLocal3=twReuU3;
				twLocal4=twReuU4;
				twLocal5=twReuU5;
				twLocal6=twReuU6;
			}	
		}
		else
		{
			if (UBWRXKMTQN=="D")
			{
				NNLCEDVGOV=AGKVNAGGLB;
				twLocal1=twReuDA1;
				twLocal2=twReuDA2;
				twLocal3=twReuDA3;
				twLocal4=twReuDA4;
				twLocal5=twReuDA5;
				twLocal6=twReuDA6;
			}
			if (UBWRXKMTQN=="L")
			{
				NNLCEDVGOV=KNVKGHHTYC;
				twLocal1=twReuLA1;
				twLocal2=twReuLA2;
				twLocal3=twReuLA3;
				twLocal4=twReuLA4;
				twLocal5=twReuLA5;
				twLocal6=twReuLA6;
			}
			if (UBWRXKMTQN=="R")
			{
				NNLCEDVGOV=CBCNHFGWLU;
				twLocal1=twReuRA1;
				twLocal2=twReuRA2;
				twLocal3=twReuRA3;
				twLocal4=twReuRA4;
				twLocal5=twReuRA5;
				twLocal6=twReuRA6;
			}
			if (UBWRXKMTQN=="U")
			{
				NNLCEDVGOV=TWJONOKGHC;
				twLocal1=twReuUA1;
				twLocal2=twReuUA2;
				twLocal3=twReuUA3;
				twLocal4=twReuUA4;
				twLocal5=twReuUA5;
				twLocal6=twReuUA6;
			}	
		}
		
	 
	if (!twLocal1.isRunning && !twLocal2.isRunning && !twLocal3.isRunning && !twLocal4.isRunning && !twLocal5.isRunning && !twLocal6.isRunning)
	{

		SUMEMLHUFX(UBWRXKMTQN)
		
		Renderizar(true, "reordenar cartas");
		if (NNLCEDVGOV.length>=1)
		{
		

		var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,0);
		var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,0);
		
		
		//log(false,"REORDENANDO X: FXGSEGRXKC "+UBWRXKMTQN+" "+NOFEDXHMLS);
		//log(false,"REORDENANDO Y: FXGSEGRXKC "+UBWRXKMTQN+" "+GHTWROCHVV);
		//Desolapar(); //2.0.8051
		
		//EWXBTDLSHW = YMHIHSNADE.add.tween(NNLCEDVGOV[0].TNFAGGMKXD);
		twLocal1.timeline=[]
		twLocal1.target=NNLCEDVGOV[0].TNFAGGMKXD
			twLocal1.to( {x:NOFEDXHMLS
			,y:GHTWROCHVV
			}
			, MDYSFNYPYP, KYFMRVNHIQ);
			twLocal1.onComplete.addOnce(function(){Desolapar();
			
			if (NNLCEDVGOV.length==1)
			{
				//Renderizar(false, "reordenar cartas1");
			}
			
			} );
			twLocal1.start();
		}

		if (NNLCEDVGOV.length>=2)
		{	
		
			var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,1);
			var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,1);
			
		//log(false,"REORDENANDO X: FXGSEGRXKC "+UBWRXKMTQN+" "+NOFEDXHMLS);
		//log(false,"REORDENANDO Y: FXGSEGRXKC "+UBWRXKMTQN+" "+GHTWROCHVV);
		
		//EWXBTDLSHW= YMHIHSNADE.add.tween(NNLCEDVGOV[1].TNFAGGMKXD);
		twLocal2.timeline=[]
		twLocal2.target=NNLCEDVGOV[1].TNFAGGMKXD	
			twLocal2.to( {x:NOFEDXHMLS
			,y:GHTWROCHVV
			}
			, MDYSFNYPYP, KYFMRVNHIQ);
			twLocal2.onComplete.addOnce(function(){Desolapar();
			
			if (NNLCEDVGOV.length==2)
			{
				//Renderizar(false, "reordenar cartas2");
			}
			
			} );
			twLocal2.start();
		}

		if (NNLCEDVGOV.length>=3)
		{
		
		//log(false,"REORDENANDO X: FXGSEGRXKC "+UBWRXKMTQN+" "+NOFEDXHMLS);
		//log(false,"REORDENANDO Y: FXGSEGRXKC "+UBWRXKMTQN+" "+GHTWROCHVV);
		
		
			var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,2);
			var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,2);
		
		
		//EWXBTDLSHW = YMHIHSNADE.add.tween(NNLCEDVGOV[2].TNFAGGMKXD);
		twLocal3.timeline=[]
		twLocal3.target=NNLCEDVGOV[2].TNFAGGMKXD		
			twLocal3.to( {x:NOFEDXHMLS
			,y:GHTWROCHVV
			}
			, MDYSFNYPYP, KYFMRVNHIQ);
			twLocal3.onComplete.addOnce(function(){Desolapar();
			
			if (NNLCEDVGOV.length==3)
			{
				//Renderizar(false, "reordenar cartas3");
			}
			
			} );
			twLocal3.start();
		}

		if (NNLCEDVGOV.length>=4)
		{
			if (FXGSEGRXKC.length>0)
		{
			var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,3);
			var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,3);
		}
		else
		{
			if(UBWRXKMTQN=="R")
			{
				var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,3);
				var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,3);
			}
			else
			{
				var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,3);
				var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,3);
			}
		}
		//log(false,"REORDENANDO X: FXGSEGRXKC "+UBWRXKMTQN+" "+NOFEDXHMLS);
		//log(false,"REORDENANDO Y: FXGSEGRXKC "+UBWRXKMTQN+" "+GHTWROCHVV);
		
		//EWXBTDLSHW = YMHIHSNADE.add.tween(NNLCEDVGOV[3].TNFAGGMKXD);
		twLocal4.timeline=[]
		twLocal4.target=NNLCEDVGOV[3].TNFAGGMKXD		
			twLocal4.to( {x:NOFEDXHMLS
			,y:GHTWROCHVV
			}
			, MDYSFNYPYP, KYFMRVNHIQ);
			twLocal4.onComplete.addOnce(function(){Desolapar();
			
			if (NNLCEDVGOV.length==4)
			{
				//Renderizar(false, "reordenar cartas4");
			}
			
			
			} );
			twLocal4.start();
		}
		
		if (NNLCEDVGOV.length>=5)
		{	
			var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,4);
			var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,4);
		
		//log(false,"REORDENANDO X: FXGSEGRXKC "+UBWRXKMTQN+" "+NOFEDXHMLS);
		//log(false,"REORDENANDO Y: FXGSEGRXKC "+UBWRXKMTQN+" "+GHTWROCHVV);
		
		//EWXBTDLSHW = YMHIHSNADE.add.tween(NNLCEDVGOV[4].TNFAGGMKXD);
		twLocal5.timeline=[]
		twLocal5.target=NNLCEDVGOV[4].TNFAGGMKXD		
			twLocal5.to( {x:NOFEDXHMLS
			,y:GHTWROCHVV
			}
			, MDYSFNYPYP, KYFMRVNHIQ);
			twLocal5.onComplete.addOnce(function(){Desolapar();
			
			if (NNLCEDVGOV.length==5)
			{
				//Renderizar(false, "reordenar cartas5");
			}
			
			
			} );
			twLocal5.start();		
		}
			
		if (NNLCEDVGOV.length>=6)
		{		
		
			var NOFEDXHMLS=WIEVLYANFM(UBWRXKMTQN,5);
			var GHTWROCHVV=FIGQBSJQGA(UBWRXKMTQN,5);
		
		//log(false,"REORDENANDO X: FXGSEGRXKC "+UBWRXKMTQN+" "+NOFEDXHMLS);
		//log(false,"REORDENANDO Y: FXGSEGRXKC "+UBWRXKMTQN+" "+GHTWROCHVV);
		
		//EWXBTDLSHW = YMHIHSNADE.add.tween(NNLCEDVGOV[5].TNFAGGMKXD);
		twLocal6.timeline=[]
		twLocal6.target=NNLCEDVGOV[5].TNFAGGMKXD		
			twLocal6.to( {x:NOFEDXHMLS
			,y:GHTWROCHVV
			}
			, MDYSFNYPYP, KYFMRVNHIQ);
			twLocal6.onComplete.addOnce(function(){Desolapar();
			
			if (NNLCEDVGOV.length==6)
			{
				//Renderizar(false, "reordenar cartas6");
			}
			
			} );
			twLocal6.start();
		}
	}
}

function JQSOOBSDDS(){
var i;
	
		
		for (i=0;i<=AGKVNAGGLB.length-1;i++){
			//if (AGKVNAGGLB[i].TNFAGGMKXD.inputEnabled==false || AGKVNAGGLB[i].TNFAGGMKXD.inputEnabled==undefined) //2.0.1
			//{
				AGKVNAGGLB[i].TNFAGGMKXD.inputEnabled = true;
				AGKVNAGGLB[i].TNFAGGMKXD.input.enableDrag(false,true);
				//AGKVNAGGLB[i].TNFAGGMKXD.input.allowVerticalDrag = false;
				//AGKVNAGGLB[i].TNFAGGMKXD.events.onInputUp.add(QTIPILDEPH);
				//AGKVNAGGLB[i].TNFAGGMKXD.events.onDragUpdate.add(WTNGDOQIWY); 
				
				AGKVNAGGLB[i].TNFAGGMKXD.events.onInputDown.add(function(){
					Renderizar(true);
					EstoyClickando=true;
					console.log("clickando " +EstoyClickando)
					});
				AGKVNAGGLB[i].TNFAGGMKXD.events.onDragStop.add(IHSCVAKSDJ); 
			//}
		}
		
		//raka JWXRWCVLGC(1); //ILA 20170128 PELIGROSO. LO HE AÑADIDO
}

function VRLYJAAHUE(sprite){
	sprite.inputEnabled = false;
}

function HJDIMRVCSU(sprite){
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


function RAVHQRVMNJ(UHTPGPRUJA,SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ){
	//if (TFSXFTYVGQ!=UHTPGPRUJA){
		Renderizar(true);
		if(TFSXFTYVGQ==1){
			if (UHTPGPRUJA==2){
				UFYWSHNLRM(CBCNHFGWLU,"R",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==3){
				UFYWSHNLRM(TWJONOKGHC,"U",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==4){
				UFYWSHNLRM(KNVKGHHTYC,"L",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}		
		}
	
		if(TFSXFTYVGQ==2){
			if (UHTPGPRUJA==3){
				UFYWSHNLRM(CBCNHFGWLU,"R",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==4){
				UFYWSHNLRM(TWJONOKGHC,"U",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==1){
				UFYWSHNLRM(KNVKGHHTYC,"L",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
		
		}	

		if(TFSXFTYVGQ==3){
			if (UHTPGPRUJA==4){
				UFYWSHNLRM(CBCNHFGWLU,"R",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==1){
				UFYWSHNLRM(TWJONOKGHC,"U",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==2){
				UFYWSHNLRM(KNVKGHHTYC,"L",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}		
		}

		if(TFSXFTYVGQ==4){
			if (UHTPGPRUJA==1){
				UFYWSHNLRM(CBCNHFGWLU,"R",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==2){
				UFYWSHNLRM(TWJONOKGHC,"U",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}
			if (UHTPGPRUJA==3){
				UFYWSHNLRM(KNVKGHHTYC,"L",SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ);
			}	
		}		
	//}
	

}

function UFYWSHNLRM(XACEBCSJAB,STLEOJDWSU,SJVCMXWVVI,BBSGITWRQX,TXLWIIINGQ){
	for (var i=0;i<=XACEBCSJAB.length-1;i++){
		if(XACEBCSJAB[i].TNFAGGMKXD.name==SJVCMXWVVI){
			XACEBCSJAB[i].NPYBJSHIFL=BBSGITWRQX;
			OROGRNBISW(XACEBCSJAB,STLEOJDWSU,true,SJVCMXWVVI,false,true)
			break;
		}
	}
	
	//OGGWQECXBK(TXLWIIINGQ,false,false); //Orden cartas 2.0.8054 Ya no va a ser importante que esté 100% sincronizado. No se gestiona desde tareas
}

function WEFMQSNCOE(TXLWIIINGQ){
	//for (i=0;i<=VDKOVQXHON.length-1;i++){
	
	var i;	
		
		//CHJKAHKJHC();
		if (VDKOVQXHON.length>=1){
		//log(false,"RECOJO CARTA 1");
			XNFDNBQFUA(VDKOVQXHON[0].TNFAGGMKXD);
			
			if (PPTWRPRLSI==true){
					for (i=1;i<=XYRJNHOCRB.length;i++)
					{
						XYRJNHOCRB.alpha=1;
					}
					//XYRJNHOCRB.splice(0,10);
					VRLYJAAHUE(VDKOVQXHON[0].TNFAGGMKXD);
					//PTHQXTTWIH = YMHIHSNADE.add.tween(VDKOVQXHON[0].TNFAGGMKXD);
					PTHQXTTWIH.timeline = [];
					PTHQXTTWIH.target=VDKOVQXHON[0].TNFAGGMKXD
					PTHQXTTWIH.to( {x: WIEVLYANFM("ULTIMA_Baza",0)
					,y:FIGQBSJQGA("ULTIMA_Baza",0),//YMHIHSNADE.world.height- VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(UCJLIRNXGJ,this)						
					PTHQXTTWIH.start();
					//WWFSQDQYYU.add(VDKOVQXHON[0].TNFAGGMKXD);
					//KBESPOUXUK.push(VDKOVQXHON[0].TNFAGGMKXD);
					//XYRJNHOCRB.push(VDKOVQXHON[0].TNFAGGMKXD);
					OYOANGYTVY(VDKOVQXHON[0].TNFAGGMKXD);
				}
				else{
				
				for (i=1;i<=HAJIKEVCFP.length;i++)
				{
					HAJIKEVCFP.alpha=1;
				}
				//HAJIKEVCFP.splice(0,10);
				VRLYJAAHUE(VDKOVQXHON[0].TNFAGGMKXD);
				//PTHQXTTWIH = YMHIHSNADE.add.tween(VDKOVQXHON[0].TNFAGGMKXD);
				PTHQXTTWIH.timeline = [];
				PTHQXTTWIH.target=VDKOVQXHON[0].TNFAGGMKXD
					PTHQXTTWIH.to( {x:WIEVLYANFM("ULTIMA_Baza_Rival",0)
					,y:FIGQBSJQGA("ULTIMA_Baza_Rival",0),//0+ VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(UCJLIRNXGJ,this)			
					PTHQXTTWIH.start();
					//WWFSQDQYYU.add(VDKOVQXHON[0].TNFAGGMKXD);
					//BRILHDFUSO.push(VDKOVQXHON[0].TNFAGGMKXD);
					//HAJIKEVCFP.push(VDKOVQXHON[0].TNFAGGMKXD);
					OYOANGYTVY(VDKOVQXHON[0].TNFAGGMKXD);
			
				}
		//log(false,"fin RECOJO CARTA 1");
		}
		
		
}

function UCJLIRNXGJ(TXLWIIINGQ){
	//for (i=0;i<=VDKOVQXHON.length-1;i++){
		if (VDKOVQXHON.length>=2){		
		//log(false,"RECOJO CARTA 2");
			XNFDNBQFUA(VDKOVQXHON[1].TNFAGGMKXD);
			
			if (PPTWRPRLSI==true){
					VRLYJAAHUE(VDKOVQXHON[1].TNFAGGMKXD);
					//IRQUWMEVQL = YMHIHSNADE.add.tween(VDKOVQXHON[1].TNFAGGMKXD);
					IRQUWMEVQL.timeline = [];
					IRQUWMEVQL.target= VDKOVQXHON[1].TNFAGGMKXD
					//IRQUWMEVQL.updateTweenData('target', VDKOVQXHON[1].TNFAGGMKXD)
					IRQUWMEVQL.to( {x:WIEVLYANFM("ULTIMA_Baza",0)
					,y:FIGQBSJQGA("ULTIMA_Baza",0),//YMHIHSNADE.world.height- VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(PGDMTNSUGD,this)						
					IRQUWMEVQL.start();
					
					//KBESPOUXUK.push(VDKOVQXHON[1].TNFAGGMKXD);
					//XYRJNHOCRB.push(VDKOVQXHON[1].TNFAGGMKXD);
					OYOANGYTVY(VDKOVQXHON[1].TNFAGGMKXD);
					//WWFSQDQYYU.add(VDKOVQXHON[1].TNFAGGMKXD);
				}
				else{
					
					VRLYJAAHUE(VDKOVQXHON[1].TNFAGGMKXD);
					//IRQUWMEVQL = YMHIHSNADE.add.tween(VDKOVQXHON[1].TNFAGGMKXD);
					IRQUWMEVQL.timeline = [];
					IRQUWMEVQL.target= VDKOVQXHON[1].TNFAGGMKXD
					IRQUWMEVQL.to( {x:WIEVLYANFM("ULTIMA_Baza_Rival",0)
					,y:FIGQBSJQGA("ULTIMA_Baza_Rival",0),//0+ VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(PGDMTNSUGD,this)						
					IRQUWMEVQL.start();
	
					//BRILHDFUSO.push(VDKOVQXHON[1].TNFAGGMKXD);
					//HAJIKEVCFP.push(VDKOVQXHON[1].TNFAGGMKXD);
					OYOANGYTVY(VDKOVQXHON[1].TNFAGGMKXD);					
					//WWFSQDQYYU.add(VDKOVQXHON[1].TNFAGGMKXD);
				}
		//log(false,"fin RECOJO CARTA 2");
		}
		
		
}

function PGDMTNSUGD(TXLWIIINGQ){
	//for (i=0;i<=VDKOVQXHON.length-1;i++){
		if (VDKOVQXHON.length>=3){	
			XNFDNBQFUA(VDKOVQXHON[2].TNFAGGMKXD);
		//	log(false,"RECOJO CARTA3");
				if (PPTWRPRLSI==true){
					VRLYJAAHUE(VDKOVQXHON[2].TNFAGGMKXD);
					//HIFQJUUVEU = YMHIHSNADE.add.tween(VDKOVQXHON[2].TNFAGGMKXD);
					HIFQJUUVEU.timeline = [];
					HIFQJUUVEU.target= VDKOVQXHON[2].TNFAGGMKXD					
					HIFQJUUVEU.to( {x:WIEVLYANFM("ULTIMA_Baza",0)
					,y:FIGQBSJQGA("ULTIMA_Baza",0),//YMHIHSNADE.world.height- VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(VRHXGWDUTQ,this)					
					HIFQJUUVEU.start();
					
					//KBESPOUXUK.push(VDKOVQXHON[2].TNFAGGMKXD);
					//XYRJNHOCRB.push(VDKOVQXHON[2].TNFAGGMKXD);
					OYOANGYTVY(VDKOVQXHON[2].TNFAGGMKXD);
					//WWFSQDQYYU.add(VDKOVQXHON[2].TNFAGGMKXD);				
				}
				else{
					VRLYJAAHUE(VDKOVQXHON[2].TNFAGGMKXD);
					//HIFQJUUVEU= YMHIHSNADE.add.tween(VDKOVQXHON[2].TNFAGGMKXD);
					HIFQJUUVEU.timeline = [];
					HIFQJUUVEU.target= VDKOVQXHON[2].TNFAGGMKXD						
					HIFQJUUVEU.to( {x:WIEVLYANFM("ULTIMA_Baza_Rival",0)
					,y:FIGQBSJQGA("ULTIMA_Baza_Rival",0),//0+ VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					//PQUFIBKJJH.onComplete.add(VRHXGWDUTQ,this)					
					HIFQJUUVEU.start();
					
					//BRILHDFUSO.push(VDKOVQXHON[2].TNFAGGMKXD);
					//HAJIKEVCFP.push(VDKOVQXHON[2].TNFAGGMKXD);
					OYOANGYTVY(VDKOVQXHON[2].TNFAGGMKXD);					
					//WWFSQDQYYU.add(VDKOVQXHON[2].TNFAGGMKXD);
				}
	//	log(false,"fin RECOJO CARTA 3");
		}
		
		
}


function VRHXGWDUTQ(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ){
	//for (i=0;i<=VDKOVQXHON.length-1;i++){
	//log(false,"se mete 4");
	

	
	
	
		if (VDKOVQXHON.length>=4){
				
			XNFDNBQFUA(VDKOVQXHON[3].TNFAGGMKXD);
			//log(false,"RECOJO CARTA 4");
		//	log(false,"Quiere Robar...");
		
			//Está bien pensado. Un If va a PPYGSSQBDV que luego llama a Robar, y después a Eliminar. El else, elimina porque no hay para robar.
			if (PPTWRPRLSI==true)
			{
					VRLYJAAHUE(VDKOVQXHON[3].TNFAGGMKXD);
					//JKSTORAHAM = YMHIHSNADE.add.tween(VDKOVQXHON[3].TNFAGGMKXD);
					JKSTORAHAM.timeline = [];
					JKSTORAHAM.target= VDKOVQXHON[3].TNFAGGMKXD	
					JKSTORAHAM.to( {x:WIEVLYANFM("ULTIMA_Baza",0)
					,y:FIGQBSJQGA("ULTIMA_Baza",0),//YMHIHSNADE.world.height- VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					
					
			
					if (FXGSEGRXKC.length>0){
						JKSTORAHAM.onComplete.addOnce(//CGCMEMLMAG,this)
							function () {
							PPYGSSQBDV(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ); //Este llama a robar
							//KBESPOUXUK.push(VDKOVQXHON[3].TNFAGGMKXD)
							//XYRJNHOCRB.push(VDKOVQXHON[3].TNFAGGMKXD);
							
							XYRJNHOCRB.splice(0,10);

							KBESPOUXUK.push(VDKOVQXHON[0].TNFAGGMKXD);
							KBESPOUXUK.push(VDKOVQXHON[1].TNFAGGMKXD);
							KBESPOUXUK.push(VDKOVQXHON[2].TNFAGGMKXD);
							KBESPOUXUK.push(VDKOVQXHON[3].TNFAGGMKXD);
							
							XYRJNHOCRB.push(VDKOVQXHON[0].TNFAGGMKXD);
							XYRJNHOCRB.push(VDKOVQXHON[1].TNFAGGMKXD);
							XYRJNHOCRB.push(VDKOVQXHON[2].TNFAGGMKXD);
							XYRJNHOCRB.push(VDKOVQXHON[3].TNFAGGMKXD);

							
							OYOANGYTVY(VDKOVQXHON[3].TNFAGGMKXD);
							
							GrupoUltimaBazaNuestra.add(VDKOVQXHON[0].TNFAGGMKXD);
							GrupoUltimaBazaNuestra.add(VDKOVQXHON[1].TNFAGGMKXD);
							GrupoUltimaBazaNuestra.add(VDKOVQXHON[2].TNFAGGMKXD);
							GrupoUltimaBazaNuestra.add(VDKOVQXHON[3].TNFAGGMKXD);
							//CGCMEMLMAG(TKWCTNGROU,LDCCGSIBKW); //Truco para poder pasar por par�metro
						}
						);
					}
					else
					{
						log(false,"se deber�a meter aqu�");
						//KBESPOUXUK.push(VDKOVQXHON[3].TNFAGGMKXD)
						//XYRJNHOCRB.push(VDKOVQXHON[3].TNFAGGMKXD);
						
						XYRJNHOCRB.splice(0,10);
						
						KBESPOUXUK.push(VDKOVQXHON[0].TNFAGGMKXD);
						KBESPOUXUK.push(VDKOVQXHON[1].TNFAGGMKXD);
						KBESPOUXUK.push(VDKOVQXHON[2].TNFAGGMKXD);
						KBESPOUXUK.push(VDKOVQXHON[3].TNFAGGMKXD);
						
						XYRJNHOCRB.push(VDKOVQXHON[0].TNFAGGMKXD);
						XYRJNHOCRB.push(VDKOVQXHON[1].TNFAGGMKXD);
						XYRJNHOCRB.push(VDKOVQXHON[2].TNFAGGMKXD);
						XYRJNHOCRB.push(VDKOVQXHON[3].TNFAGGMKXD);
							
						OYOANGYTVY(VDKOVQXHON[3].TNFAGGMKXD);
						//WWFSQDQYYU.add(VDKOVQXHON[3].TNFAGGMKXD);
						GrupoUltimaBazaNuestra.add(VDKOVQXHON[0].TNFAGGMKXD);
						GrupoUltimaBazaNuestra.add(VDKOVQXHON[1].TNFAGGMKXD);
						GrupoUltimaBazaNuestra.add(VDKOVQXHON[2].TNFAGGMKXD);
						GrupoUltimaBazaNuestra.add(VDKOVQXHON[3].TNFAGGMKXD);
						
						
						JKSTORAHAM.onComplete.addOnce( function(){ 
						Renderizar(false, "recoger 1");
						DFCCHCJBNP(TKWCTNGROU,TXLWIIINGQ);
						
						} )
					}
					JKSTORAHAM.start();
					
				
				}
				else
				{
					VRLYJAAHUE(VDKOVQXHON[3].TNFAGGMKXD);
					//JKSTORAHAM = YMHIHSNADE.add.tween(VDKOVQXHON[3].TNFAGGMKXD);
					JKSTORAHAM.timeline = [];
					JKSTORAHAM.target= VDKOVQXHON[3].TNFAGGMKXD	
					JKSTORAHAM.to( {x:WIEVLYANFM("ULTIMA_Baza_Rival",0)
					,y:FIGQBSJQGA("ULTIMA_Baza_Rival",0),//0+ VDKOVQXHON[VDKOVQXHON.length-1].TNFAGGMKXD.width,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ);
					if (FXGSEGRXKC.length>0){
						JKSTORAHAM.onComplete.addOnce(//CGCMEMLMAG,this)
							function () {
							PPYGSSQBDV(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ);
							
							HAJIKEVCFP.splice(0,10);
							
							BRILHDFUSO.push(VDKOVQXHON[0].TNFAGGMKXD);
							BRILHDFUSO.push(VDKOVQXHON[1].TNFAGGMKXD);
							BRILHDFUSO.push(VDKOVQXHON[2].TNFAGGMKXD);
							BRILHDFUSO.push(VDKOVQXHON[3].TNFAGGMKXD);
							
							HAJIKEVCFP.push(VDKOVQXHON[0].TNFAGGMKXD);
							HAJIKEVCFP.push(VDKOVQXHON[1].TNFAGGMKXD);
							HAJIKEVCFP.push(VDKOVQXHON[2].TNFAGGMKXD);
							HAJIKEVCFP.push(VDKOVQXHON[3].TNFAGGMKXD);
							
							
							OYOANGYTVY(VDKOVQXHON[3].TNFAGGMKXD);
							//WWFSQDQYYU.add(VDKOVQXHON[3].TNFAGGMKXD);
							GrupoUltimaBazaRival.add(VDKOVQXHON[0].TNFAGGMKXD);
							GrupoUltimaBazaRival.add(VDKOVQXHON[1].TNFAGGMKXD);
							GrupoUltimaBazaRival.add(VDKOVQXHON[2].TNFAGGMKXD);
							GrupoUltimaBazaRival.add(VDKOVQXHON[3].TNFAGGMKXD);
							//CGCMEMLMAG(TKWCTNGROU,LDCCGSIBKW); //Truco para poder pasar por par�metro
						}
						);
					}	
					else
					{
						log(false,"o aqu�");
						
						//BRILHDFUSO.push(VDKOVQXHON[3].TNFAGGMKXD);
						HAJIKEVCFP.splice(0,10);
						
						BRILHDFUSO.push(VDKOVQXHON[0].TNFAGGMKXD);
						BRILHDFUSO.push(VDKOVQXHON[1].TNFAGGMKXD);
						BRILHDFUSO.push(VDKOVQXHON[2].TNFAGGMKXD);
						BRILHDFUSO.push(VDKOVQXHON[3].TNFAGGMKXD);
						
						HAJIKEVCFP.push(VDKOVQXHON[0].TNFAGGMKXD);
						HAJIKEVCFP.push(VDKOVQXHON[1].TNFAGGMKXD);
						HAJIKEVCFP.push(VDKOVQXHON[2].TNFAGGMKXD);
						HAJIKEVCFP.push(VDKOVQXHON[3].TNFAGGMKXD);						
						
						//HAJIKEVCFP.push(VDKOVQXHON[3].TNFAGGMKXD);
						OYOANGYTVY(VDKOVQXHON[3].TNFAGGMKXD);
						//WWFSQDQYYU.add(VDKOVQXHON[3].TNFAGGMKXD);
						GrupoUltimaBazaRival.add(VDKOVQXHON[0].TNFAGGMKXD);
						GrupoUltimaBazaRival.add(VDKOVQXHON[1].TNFAGGMKXD);
						GrupoUltimaBazaRival.add(VDKOVQXHON[2].TNFAGGMKXD);
						GrupoUltimaBazaRival.add(VDKOVQXHON[3].TNFAGGMKXD);
						
						JKSTORAHAM.onComplete.addOnce( function(){ 
						Renderizar(false, "recoger 2");
						DFCCHCJBNP(TKWCTNGROU,TXLWIIINGQ);
						
						})
					}					
					JKSTORAHAM.start();
					
								
			
				}
		//log(false,"fin RECOJO CARTA 4");
		}
		
		
		//VDKOVQXHON.splice(0,4);
		
}

function PPYGSSQBDV(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ){
	var i;
	var LSKPLOTYIB=false;
	var EYCRTUIDMY;
	var BQJIVKRBLA;
	var UBWRXKMTQN;
	
	
	for (i=0;i<=AGKVNAGGLB.length-1;i++){
		if (AGKVNAGGLB[i].SGCSHJVERI==TGTQPBEQFR && AGKVNAGGLB[i].HVCFEWNDRF==7)
		{
			LSKPLOTYIB=true;
			BQJIVKRBLA= AGKVNAGGLB[i].TNFAGGMKXD.name;
			UBWRXKMTQN="D";
		}
	}

	for (i=0;i<=CBCNHFGWLU.length-1;i++){
		if (CBCNHFGWLU[i].SGCSHJVERI==TGTQPBEQFR && CBCNHFGWLU[i].HVCFEWNDRF==7)
		{
			LSKPLOTYIB=true;
			BQJIVKRBLA= CBCNHFGWLU[i].TNFAGGMKXD.name;
			UBWRXKMTQN="R";
		}
	}
	
	for (i=0;i<=TWJONOKGHC.length-1;i++){
		if (TWJONOKGHC[i].SGCSHJVERI==TGTQPBEQFR && TWJONOKGHC[i].HVCFEWNDRF==7)
		{
			LSKPLOTYIB=true;
			BQJIVKRBLA= TWJONOKGHC[i].TNFAGGMKXD.name;
			UBWRXKMTQN="U";
		}
	}
	
	for (i=0;i<=KNVKGHHTYC.length-1;i++){
		if (KNVKGHHTYC[i].SGCSHJVERI==TGTQPBEQFR && KNVKGHHTYC[i].HVCFEWNDRF==7)
		{
			LSKPLOTYIB=true;
			BQJIVKRBLA= KNVKGHHTYC[i].TNFAGGMKXD.name;
			UBWRXKMTQN="L";
		}
	}
		
	EYCRTUIDMY=JHIEHWIMCB(UBWRXKMTQN);
	log(false,"La LUCRWXJMDR es " + TKWCTNGROU);
	if (LSKPLOTYIB==true && FBSDMRLVEL[0].VVRCMEUNOJ>7 && TKWCTNGROU==4 &&  (  (PPTWRPRLSI==true && (UBWRXKMTQN=="D" || UBWRXKMTQN=="U"))  ||  (PPTWRPRLSI==false && (UBWRXKMTQN=="L" || UBWRXKMTQN=="R") )     )  ){
		log(false,"TVYNYTCQYW a cambiar "+BQJIVKRBLA);
		NPOUCHQXMY(EYCRTUIDMY,BQJIVKRBLA,TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ,true); //Aprovecho la funci�n NPOUCHQXMY para los cambios forzados de �ltima LUCRWXJMDR
			//Debo arrastrar TKWCTNGROU,LDCCGSIBKW porque lo usa CGCMEMLMAG
		
	
	}
	else
	{
		CGCMEMLMAG(TKWCTNGROU,LDCCGSIBKW,TXLWIIINGQ);
	}

}


function IEUIUCYUCC(RPHWVBBGIM,Tamano) {

	var AWCCMSCOPO;
	var grd;
	var TextoGeneral;

	//text = YMHIHSNADE.add.text(0, 0, RPHWVBBGIM);
	if (RPHWVBBGIM!=null && RPHWVBBGIM!="") //si no sale rápido el mensaje acabando la partida
	{
		VTEVNYKAUB.removeAll(); //2.0.1 clave:textoseliminar		
	}
	

	TextoGeneral=YMHIHSNADE.add.bitmapText(0, 0, 'MiFuenteAmarilla', 'BitmapText', Tamano);
	TextoGeneral.text=RPHWVBBGIM;
	TextoGeneral.anchor.set(0.5,0.5);
	TextoGeneral.x=YMHIHSNADE.world.centerX;
	TextoGeneral.y=YMHIHSNADE.world.centerY-25

	

		/*TextoGeneral.revive();
		TextoGeneral.alpha=1;
		//TextoGeneral.x=YMHIHSNADE.world.centerX;
		//TextoGeneral.y=YMHIHSNADE.world.centerY-25
		TextoGeneral.text=RPHWVBBGIM;
		TextoGeneral.fontSize=Tamano;*/
	
	
	
	VTEVNYKAUB.add(TextoGeneral); //2.0.1 clave:textoseliminar
	YMHIHSNADE.world.bringToTop(VTEVNYKAUB);
	
	
	return TextoGeneral;
}


function BKBXOKMUUQ(TXLWIIINGQ){
	
	
	if (JHHWEKWEJK==false)
	{
		JHHWEKWEJK=true; //1.0.8 Para controlar que si alguien desconecta no reparte echando leches (onsocketdesconectado)
		BRJIESNORM();
		
		
		/*if (EGPDVIEJEL==true) 2.0.7
		{
			socket.emit('TXCYFYXTAI', DFBVDPETGO,socket.id) ;
		}*/
		
		
		if (EVAILWGGKX==false)
		{		
			
			SYJLVBWPIM(TXLWIIINGQ);
		}
	}

}




function SYJLVBWPIM(TXLWIIINGQ){
	var RPHWVBBGIM;
	var UYEUYIYECB;
	log(true,"A contar..");


	
	DesactivarCuentaPalos();	
	WWAYLOUPUQ(TXLWIIINGQ);
		

	
}




function BorrarTareasObsoletas()
{
	var i;
	var u;
	
	//Al finalizar, a veces no se borra la tarea porque no se recupera al ser detenida la partida. Paramos hasta detecta una baraja desde server
	//if (MQUGCIUQII!=null && MQUGCIUQII!=false && MQUGCIUQII!=undefined )
	//{
		//return false; //2.0.8051 critico
		for (i=0;i<=HMVFLEYPXM.length-1;i++)
		{
			//if (HMVFLEYPXM[i].RHOLNWBOXR=="FFGKWCDVFE")
				
			if (HMVFLEYPXM[i].MQUGCIUQII==MQUGCIUQII && HMVFLEYPXM[i].RHOLNWBOXR!="TGUUXMBTHT" && HMVFLEYPXM[i].RHOLNWBOXR!="GCOMOMYQBP")
			{
			//	break;
			//}
			//else
			//{
				//console.log("Marco para borrar "+MQUGCIUQII)
				HMVFLEYPXM[i]["Borrar"]=true;
			}		

			if (HMVFLEYPXM[i].RHOLNWBOXR=="TGUUXMBTHT") //2.0.8051 critico todo este bloque
			{
				for (u=0;u<=HMVFLEYPXM[i].KJEWHVDJKS.length-1;u++)
				{
					if (HMVFLEYPXM[i].KJEWHVDJKS[u].MQUGCIUQII==MQUGCIUQII && HMVFLEYPXM[i].KJEWHVDJKS[u].RHOLNWBOXR!="TGUUXMBTHT")
					{
						HMVFLEYPXM[i].KJEWHVDJKS[u]["Borrar"]=true;
						console.log("Preparando borrado antiguo")
					}
					else
					{
						console.log("NO Preparando borrado antiguo")
					}
				}	
				
				u=HMVFLEYPXM[i].KJEWHVDJKS.length;
				while (u--)
				{
					if (HMVFLEYPXM[i].KJEWHVDJKS[u]["Borrar"]==true)
					{
						//console.log("Borro tarea desde obsoletas "+HMVFLEYPXM[i].RHOLNWBOXR)
							
						HMVFLEYPXM[i].KJEWHVDJKS.splice(u,1);
						console.log("Fin borrado antiguo")
						
					}
				}
			}	


			
		}
		
		i=HMVFLEYPXM.length; //2.0.1 Cuelgue Faltaba esto
		while (i--)
		{
			if (HMVFLEYPXM[i]["Borrar"]==true)
			{
				//console.log("Borro tarea desde obsoletas "+HMVFLEYPXM[i].RHOLNWBOXR)
					
				HMVFLEYPXM.splice(i,1);
				
				
			}
		}
		
		if (HMVFLEYPXM.length==0) //2.0.8051
		{
			DesbloquearTirada();
		}
	
		////////////////Ahora los bloqueos
		
		for (i=0;i<=REDYBSYSNN.length-1;i++)
		{
			//if (HMVFLEYPXM[i].RHOLNWBOXR=="FFGKWCDVFE")
				
			if (REDYBSYSNN[i].MQUGCIUQII==MQUGCIUQII && REDYBSYSNN[i].RHOLNWBOXR!="TGUUXMBTHT" && REDYBSYSNN[i].RHOLNWBOXR!="GCOMOMYQBP")
			{
			//	break;
			//}
			//else
			//{
				//console.log("Marco para borrar "+MQUGCIUQII)
				REDYBSYSNN[i]["Borrar"]=true;
			}			
		}
		
		i=REDYBSYSNN.length; //2.0.1 Cuelgue Faltaba esto
		while (i--)
		{
			if (REDYBSYSNN[i]["Borrar"]==true)
			{
				//console.log("Borro bloqueo tarea desde obsoletas ")
					
				REDYBSYSNN.splice(i,1);
				
				
			}
		}		
		
		
	//}
	//REDYBSYSNN.splice(0,10000);
}

function CalculaGBits()
{
	var ObjetoGBits=function(BNMSISPWOI,GbitsNuevoDia)
	{
		this.BNMSISPWOI=BNMSISPWOI
		this.GbitsNuevoDia=GbitsNuevoDia
	}
	
	var BNMSISPWOI;
	var GbitsNuevoDia;
	var SEQJGUOFTO=false;
	
	BNMSISPWOI=0;
	GbitsNuevoDia=0;
	
	try
	{
		if (XPBCVAGCDQ[TFSXFTYVGQ-1].Amigo==false)
		{
			SEQJGUOFTO=true;
		}
		else
		{
			SEQJGUOFTO=false;
		}
	}
	catch(e)
	{
		SEQJGUOFTO=false;
	}
	
	
	if (SEQJGUOFTO==true)
	{	
		GbitsNuevoDia=JHGQKGFQGB();
		
		
		if (FinCoto())
		{
			if (JVQXQGYDHH>CNCCBHQJKL)
			{
				if (JVQXQGYDHH==3 && CNCCBHQJKL==0)
				{
					if(PWMIBRSDCJ!=undefined && PWMIBRSDCJ[0].TTTTQJHGDQ)
					{
						BNMSISPWOI=50; //Antes 10 2.0.8051
					}
					else
					{
						BNMSISPWOI=50;
					}
				}
				else
				{
					if(PWMIBRSDCJ!=undefined && PWMIBRSDCJ[0].TTTTQJHGDQ)
					{
						BNMSISPWOI=25; //Antes 5 2.0.8051
					}
					else
					{
						BNMSISPWOI=25;
					}
				}
			}
			else
			{



				if(PWMIBRSDCJ!=undefined && PWMIBRSDCJ[0].TTTTQJHGDQ)
				{
					BNMSISPWOI=-20; //Antes -4 2.0.8051
				}
				else
				{
					BNMSISPWOI=-20;
				}
							
				
				if (PWMIBRSDCJ.length>0)
				{
					if (PWMIBRSDCJ[0].BNMSISPWOI+PWMIBRSDCJ[0].GGHGFTERRW+PWMIBRSDCJ[0].BCKDDFIRYT+
						BNMSISPWOI<0)
						{
							//console.log("LO ANULO");
							//BNMSISPWOI=0; 2.0.8054 
							BNMSISPWOI=-(PWMIBRSDCJ[0].BNMSISPWOI+PWMIBRSDCJ[0].GGHGFTERRW+PWMIBRSDCJ[0].BCKDDFIRYT) //2.0.8054 para que le ponga a 0
						}				
				}
				
			}
			
			/*No es necesario porque sale a la pantalla principal
			var Vidas;
			switch (BNMSISPWOI)
			{
				case 5:
					Vidas=1;
				case 3:
					Vidas=0;
				case 0:
					Vidas=0;
				case -2:
					Vidas=-1;
			}
			
			//PWMIBRSDCJ[0].Vidas //no lo actualizo. Prefiero que me venga siempre del servidor.
			Vidas=PWMIBRSDCJ[0].Vidas+Vidas
			if (Vidas<0)
			{
				Vidas=0;
			}
			TextVidas.text=Vidas;*/
			
		}
		
		YUFGSLAHYS=YUFGSLAHYS+BNMSISPWOI+GbitsNuevoDia;
	}
	//console.log("ANTES METODO: "+BNMSISPWOI+ " .. "+GbitsNuevoDia )
	var ObjetoMoneda=new ObjetoGBits(BNMSISPWOI,GbitsNuevoDia);
	//console.log("DEPUES METODO: "+ObjetoMoneda.BNMSISPWOI+ " .. "+ObjetoMoneda.GbitsNuevoDia )
	return ObjetoMoneda;
}

function FinCoto()
{
	if (vCampeonatoOasis==true)
	{
		return ((JVQXQGYDHH+CNCCBHQJKL)==MFENMIFPUA)	
	}
	else
	{
		return (JVQXQGYDHH==MFENMIFPUA || CNCCBHQJKL==MFENMIFPUA)			
	}
}

function WWAYLOUPUQ(TXLWIIINGQ) {
	
	var AWCCMSCOPO;
	var texto2;
    //  You can either set the tab size in the style object:
	var MLFDVPXWYK;
	var DSCVVNAYWK;
	var OUENWKLUUA;
	var QJUYVEJMEB;
	var i;
	var KMHMNPUINK;

	//console.log("Crear AWCCMSCOPO puntuacion")
	if (HGFAUFDVDF()==true) //2.0.1 Añado JHHWEKWEJK==false
	{
		DesactivarCuentaPalos();
		
		HGMNXSIAPV=false;
		MYQBNBVHKU==false;
		
		//2.0.1 Cuelgue Me sigo asegurando de que la segunda posición no es también FFGKWCDVFE
		/*if (HMVFLEYPXM.length>=2)
		{
			if (HMVFLEYPXM[1].RHOLNWBOXR=="FFGKWCDVFE") //Segunda posición
			{
				HMVFLEYPXM.splice(1,1);
			}
		}*/
		
		DesbloquearTirada(); //2.0.1 clave:bloqueotirada
		
		
		JHHWEKWEJK=true; //1.0.8 Para controlar que si alguien desconecta no reparte echando leches (onsocketdesconectado)
		HUUCUYFBLW.stop();
		HUUCUYFBLW.remove();
		TKXPPGUPVV.stop();
		TKXPPGUPVV.remove();
		UYAKDBNLTD();
	
		if (EVAILWGGKX==false || MNAGVJHWOW()==true)
		{
			QJUYVEJMEB=0;
		}
		else
		{
			QJUYVEJMEB=5000; //2.0.8051 Aumento tiempo
		}
		
		
		
		var	timerpuntuacion = YMHIHSNADE.time.create(true);
		timerpuntuacion.add(QJUYVEJMEB, function()
		{
		
			UIYIUCHWUH();
			
			//ATTUXTNNKX.kill();
			ATTUXTNNKX.kill();
			XQDPVWOUII.kill();
			var SQIRFQMWSL=DVNRTQIWGL;

			//YMHIHSNADE.tweens.pauseAll(); 
			
			
			
			if (SNJCSVWFCC()==true)
			{
				if (PWMIBRSDCJ.length>0)
				{
					var JugadorPubli=PWMIBRSDCJ[0].WWKVHIMWYD;
					var JugadorFullPubli=PWMIBRSDCJ[0].FFRVOEAXTF + '-'+ PWMIBRSDCJ[0].BDYYDTFQAO;
					try
					{
						socket.emit('EOMOFODTKB', socket.id,SFKLFIJOIO,ObjetoG) ;
					}
					catch(e){}
				}
				else
				{
					try
					{
						socket.emit('EOMOFODTKB', socket.id,SFKLFIJOIO,ObjetoG) ;
					}
					catch(e){}
				}
				
			}
				
			//CRITICO
			if (PPTWRPRLSI==true){
				if (EVAILWGGKX==false)
				{
					UHHXSNXXJK=UHHXSNXXJK+10;
				}
			}
			else
			{
				if (EVAILWGGKX==false)
				{
					PXGXKDDNFK=PXGXKDDNFK+10;
				}
			}
			
			
			if (UHHXSNXXJK>=JLVDFTPUNI || PXGXKDDNFK>=JLVDFTPUNI)
			{
				
				OUENWKLUUA=true;
			}
			else
			{
				OUENWKLUUA=false;
				
			}
			

			if (EVAILWGGKX==true)
			{
				EVAILWGGKX=false;	
			}
			else
			{
				EVAILWGGKX=true;	
			}
			
			if (OUENWKLUUA==true)
			{
				EVAILWGGKX=false;	
				BRJIESNORM();
			}
			

			
			
			if (UHHXSNXXJK>50){
				MLFDVPXWYK=UHHXSNXXJK-50 + " Buenas";
			}
			else{
				MLFDVPXWYK=UHHXSNXXJK+ " Malas";	
			}
			
			if (PXGXKDDNFK>50){
				DSCVVNAYWK=PXGXKDDNFK-50 + " Buenas";
			}
			else{
				DSCVVNAYWK=PXGXKDDNFK+ " Malas";	
			}	
			
			ATTUXTNNKX.text=MLFDVPXWYK+"\n"+DSCVVNAYWK;
				
			KMHMNPUINK="¡¡ Vamos de vueltas !!";
			if (UHHXSNXXJK>=JLVDFTPUNI && PXGXKDDNFK>=JLVDFTPUNI)
			{
				if (PPTWRPRLSI==true){
					JVQXQGYDHH++;
					
					
					
					WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL-1),EVAILWGGKX,1,false,false,false,false);
					if (JVQXQGYDHH==MFENMIFPUA)
					{
						if (EGPDVIEJEL==true)
						{
							MQUIQKWTWS=true;
						}
						KMHMNPUINK="¡¡ Ganamos la partida\n y el coto !!";
						//KMHMNPUINK="";
						EABXADHEVT("JCGKEWDJBQ");
					}
					else
					{
						KMHMNPUINK="¡¡ Ganamos la partida !!";
						EABXADHEVT("JCGKEWDJBQ");
					}
					
				}
				else
				{
					CNCCBHQJKL++;
					WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL-1),EVAILWGGKX,2,false,false,false,false);
					if (CNCCBHQJKL==MFENMIFPUA)
					{
						//KMHMNPUINK="¡¡ Otra vez será.\n Hicieron las 10 últimas.\n Perdimos el coto  :(  !!";
						KMHMNPUINK="¡¡ Perdimos el coto  :(  !!";
						EABXADHEVT("YURJWRGUNO");
					}
					else
					{
						//KMHMNPUINK="Hemos perdido.\n Ellos hicieron las 10 últimas.\n ¡¡ A por ellos !!";
						KMHMNPUINK="Hemos perdido la partida.\n ¡¡ A por ellos !!";
						EABXADHEVT("YURJWRGUNO");
					}
					
				}
			}
			else
			{
				if(UHHXSNXXJK>=JLVDFTPUNI)
				{
					JVQXQGYDHH++;
					WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL-1),EVAILWGGKX,1,false,false,false,false);
					if (JVQXQGYDHH==MFENMIFPUA)
					{
						if (EGPDVIEJEL==true)
						{
							MQUIQKWTWS=true;
						}
						KMHMNPUINK="¡¡ Ganamos la partida\n y el coto !!";
						ISVLSNLHWR=0;
						EABXADHEVT("JCGKEWDJBQ");						
					}
					else
					{
						KMHMNPUINK="¡¡ Ganamos la partida !!";
						EABXADHEVT("JCGKEWDJBQ");
					}
					
					
				}
				if(PXGXKDDNFK>=JLVDFTPUNI)
				{
					
					CNCCBHQJKL++;
					WTERKRAPBE(TFSXFTYVGQ,(JVQXQGYDHH+CNCCBHQJKL-1),EVAILWGGKX,2,false,false,false,false);
					
					if (CNCCBHQJKL==MFENMIFPUA)
					{
						KMHMNPUINK="¡¡ Perdimos el coto  :(  !!";
						ISVLSNLHWR=0;
						EABXADHEVT("YURJWRGUNO");						
					}
					else
					{
						KMHMNPUINK="Hemos perdido la partida.\n ¡¡ A por ellos !!";
						EABXADHEVT("YURJWRGUNO");
					}
				}
			}
			
			if (vCampeonatoOasis==true)
			{
				TextoCampeonato.text="Humanos: "+JVQXQGYDHH+" Robots: "+CNCCBHQJKL;
			}
			
			if (FinCoto())
			{
				var imagenFin;
			
				if (EGPDVIEJEL==true)
				{
					//console.log("Amigo "+XPBCVAGCDQ[TFSXFTYVGQ-1].Amigo)
					if (SNJCSVWFCC()==true && XPBCVAGCDQ[TFSXFTYVGQ-1].Amigo==false)
					{
						//console.log("Amigo dentro "+XPBCVAGCDQ[TFSXFTYVGQ-1].Amigo)
						try
						{
							socket.emit("UIEWYIIWIW", socket.id,DFBVDPETGO,MQUGCIUQII);
						}
						catch(e){}
					}
				}


				if (JVQXQGYDHH==MFENMIFPUA)
				{
					imagenFin='copa';
					LLSSKSKSKQ();
				}
				else
				{
					imagenFin='perder';
				}
				
				//var BMANCBQGIU=YMHIHSNADE.add.image(YMHIHSNADE.world.width+500,YMHIHSNADE.world.centerY, 'general',imagenFin); //2.0.1 clave:rehuse
				//BMANCBQGIU.anchor.setTo(0.5,0.5);
				BMANCBQGIU.frameName=imagenFin;
				BMANCBQGIU.x=YMHIHSNADE.world.width+500;
				BMANCBQGIU.revive();
				//BMANCBQGIU.bringToTop();
				BMANCBQGIU.alpha=1;
				
				//BDEFDQUJJE=YMHIHSNADE.add.tween(BMANCBQGIU).to( { x: YMHIHSNADE.world.centerX }, 1000, QUXNHVVDDK,true);
				BDEFDQUJJE.target=BMANCBQGIU
				BDEFDQUJJE.timeline=[]
				BDEFDQUJJE.to( { x: YMHIHSNADE.world.centerX }, 1000, QUXNHVVDDK,true);
				
				BDEFDQUJJE.onComplete.addOnce(
					function (){
						 EABXADHEVT("TSYFNOWESC");
						 //CKOUBGTDUF=YMHIHSNADE.add.tween(BMANCBQGIU).to( { alpha:0 }, 0, KYFMRVNHIQ, true, 3000);
						CKOUBGTDUF.target=BMANCBQGIU
						CKOUBGTDUF.timeline=[]					 
						
						 CKOUBGTDUF.to( { alpha:0 }, 0, KYFMRVNHIQ, true, 3000);
						 CKOUBGTDUF.onComplete.addOnce(	function()
						 {
							 BMANCBQGIU.kill();
							 BMANCBQGIU.alpha=1;
							 Renderizar(false, "copa");
						 }
						 );
					}		
				);
				
				
			}

			
			
			
				//text = YMHIHSNADE.add.text(YMHIHSNADE.world.centerX, YMHIHSNADE.world.centerY, KMHMNPUINK);
				
			
				AWCCMSCOPO=IEUIUCYUCC( KMHMNPUINK ,60);
				AWCCMSCOPO.anchor.setTo(0.5,0.5);
				
				
				/*text.x=YMHIHSNADE.world.centerX;
				text.y=YMHIHSNADE.world.centerY;
				
				text.anchor.set(0.5);
				text.align = 'center';


				text.font = 'Arial Black';
				text.fontSize = 40;
				text.fontWeight = 'bold';


				text.stroke = '#961918';
				text.strokeThickness = 7;
				text.fill = '#F8E600';	
				text.boundsAlignH= "center";
				text.boundsAlignV= "middle";*/
				
				var TiempoDelay=1000;
				var TiempoAnimacion=2000;
				
				if (MNAGVJHWOW()==true)
				{
					var TiempoDelay=0;
					var TiempoAnimacion=0;
					
				}
				AWCCMSCOPO.alpha=1;
				
				
				
				//console.log("Tiempo "+TiempoAnimacion)
				Renderizar(false, "acabando 1");
				//JLFYUAKDIJ = YMHIHSNADE.add.tween(AWCCMSCOPO).to( { alpha: 0 }, TiempoDelay, KYFMRVNHIQ, true,TiempoAnimacion);
				JLFYUAKDIJ.timeline=[]
				JLFYUAKDIJ.target=AWCCMSCOPO
				JLFYUAKDIJ.to( { alpha: 0 }, TiempoDelay, KYFMRVNHIQ, true,TiempoAnimacion);
				JLFYUAKDIJ.onComplete.addOnce(
					function()
					{
							
							//AWCCMSCOPO.kill();
							var y = document.getElementById("Clasificacion").rows[1].cells;
							y[1].innerHTML = MLFDVPXWYK;
							y[2].innerHTML = JVQXQGYDHH;
							
							var y = document.getElementById("Clasificacion").rows[2].cells;
							y[1].innerHTML = DSCVVNAYWK;
							y[2].innerHTML = CNCCBHQJKL;		
							
							var d=document.getElementById('DivResultado');
							d.style.display = 'block';
							//d.style.zIndex=-100;
							
							if (OUENWKLUUA==true)
							{
								UHHXSNXXJK=0;
								PXGXKDDNFK=0;

								//QSAXUCPASV();
							}
							
							var TiempoDelay=0;
							var TiempoAnimacion=3000;
							
							if (MNAGVJHWOW()==true)
							{
								var TiempoDelay=0;
								var TiempoAnimacion=0;
							}
				
				
							//twRec4 = YMHIHSNADE.add.tween(AWCCMSCOPO).to( { alpha: 0 }, TiempoDelay, KYFMRVNHIQ, true,TiempoAnimacion);
							twRec4.timeline=[]
							twRec4.target=AWCCMSCOPO
							twRec4.to( { alpha: 0 }, TiempoDelay, KYFMRVNHIQ, true,TiempoAnimacion);
							twRec4.onComplete.addOnce( 
							
								function()
								{
								
									//var TKXPPGUPVV = YMHIHSNADE.time.create(false);
									//TKXPPGUPVV.add(3000, function(){
							
											var d=document.getElementById('DivResultado');
											d.style.display = 'none';
											//d.style.zIndex=-1;
												
												//console.log("deberia saltar");
												if (FinCoto() )
												{
													//var timerdelaymatarconexion;
													//timerdelaymatarconexion=YMHIHSNADE.time.create(false);
													//timerdelaymatarconexion.add(2000, function()
													//{
														//MostrarRevancha()
														MHELAUXKXR();
														XEMENNVXGV();
														//JHKWHCWKWC(); //2.0.7
													//});
													//timerdelaymatarconexion.start();
													
												}												
												else
												{
													if (1==1) //HGFAUFDVDF()==true)
													{	
														//2.0.1 DCOXIXEBRJ.splice(0,100); clave:reparto
														//2.0.1 JEHYBALODM.splice(0,100); clave:reparto
														
														FinalizaTextoPuntuacionJugador();
														
														
														//JHHWEKWEJK=false;  2.0.7
								
														/*if (EGPDVIEJEL==false)
														{
															//console.log("BORRO TODOS LOS TIMERS");
															try
															{
																YMHIHSNADE.time.removeAll()				
																PPWJOWHOIW();
															}
															catch(e){}
														}*/
														
														//console.log("BORRA llega hasta aqui");
														
														//console.log("llamada a obsoletas 1 "+TXLWIIINGQ);
														BorrarTareasObsoletas();
														console.log("Recuperandome "+TXLWIIINGQ )
														OGGWQECXBK(TXLWIIINGQ,false,true); //2.0.8054 Pongo el true porque quito los efectos de mover cartas.
												
														
														

	
	

														
														
														
														
													}

												}
										
								} 
									
							);
								//TKXPPGUPVV.start();	
								
							
							
						}
					
			
			
				);	
				
		});	
		timerpuntuacion.start();
	}
	else
	{
	}
}



function MatarConexionPrueba()
{	
	try
	{
		//if (SNJCSVWFCC()==true)
		//{
				YTUGCWECJC=true;
			
				socket.disconnect();
				socket=undefined; //1.0.8 ivan
				//DFBVDPETGO=Math.floor(Math.random());
				
				
				
				JKCANKPQBB=0;
			
		//}
	}
	catch(e){}
	
	
}

function MHELAUXKXR()
{	

	BNWHJGHWUW.removeAll(); //2.0.7 para poder chatear durante los recuentos. Que se mate en este momento.
	//console.log("BORRO TODOS LOS TIMERS");
	try
	{
		YMHIHSNADE.time.removeAll()				
		PPWJOWHOIW();
	}
	catch(e){}
															
															
	//console.log("He sido asesinado de verdad");
	try
	{
		//if (SNJCSVWFCC()==true)
		//{
			YTUGCWECJC=false;
			
				socket.disconnect();
				socket=undefined; //1.0.8 ivan

				
				DFBVDPETGO=Math.floor(Math.random());
				JKCANKPQBB=0;
			
		//}
	}
	catch(e){}
	
	DFBVDPETGO=Math.floor(Math.random()); //1.0.8 y lo de atrás que he comentado
	
	/*	if (JKCANKPQBB<=2)
	{
		PWGIQBBAWX=true;
	
	}
	else
	{		
		PWGIQBBAWX=false;	
	}*/
	//YMHIHSNADE.destroy();
	
	WNEWPCNXPA(); //2.0.1
	QSAXUCPASV(); //2.0.1
	
	YMHIHSNADE.state.start("Level",false,true); //2.0.8.37 el true
	
	//XEMENNVXGV(); //1.0.8 Si no fallaba la consulta del ránking desde logindesdeweb
}


function JHKWHCWKWC()
{	
	
	BNWHJGHWUW.removeAll(); //2.0.7 para poder chatear durante los recuentos. Que se mate en este momento.
	
	
	//console.log("He sido asesinado de mentira");
	DFBVDPETGO=Math.floor(Math.random()); //1.0.8 y lo de atrás que he comentado
	
	WNEWPCNXPA(); //1.0.9
	QSAXUCPASV(); //1.0.9
	
	/*if (JKCANKPQBB<=2)
	{
		PWGIQBBAWX=true;
	
	}
	else
	{		
		PWGIQBBAWX=false;	
	}*/
	YMHIHSNADE.state.start("Level",false,true); //2.0.8.37 el true
	//XEMENNVXGV(); //1.0.8 Si no fallaba la consulta del ránking desde logindesdeweb
}

function UIYIUCHWUH(){
	
	var i;
	
	
	
	try
	{
		WTCIGMLJUY.kill(); //2.0.1
		GJHWUYGCBN.kill();
		BNVUWCOWEC.kill();
		UYIUYIUYIU.kill();
		DHJGJHGWCY.kill();
	}
	catch(e){}



	FXGSEGRXKC.splice(0,100);
	MazoTodas.splice(0,100);
	CBCNHFGWLU.splice(0,100);
	KNVKGHHTYC.splice(0,100);
	TWJONOKGHC.splice(0,100);
	AGKVNAGGLB.splice(0,100);
	VDKOVQXHON.splice(0,100);
	FBSDMRLVEL.splice(0,100);
	KBESPOUXUK.splice(0,100);
	BRILHDFUSO.splice(0,100);
	MazoCartasSalidas.splice(0,100);
	ArrayCambioCarta.splice(0,100);
	ArrayRondaGanada.splice(0,100);
	ArrayRevisaArrastre.splice(0,100);
	
	try
	{
		RXKKPILDQT.removeAll();
		SYXHGDSJDY.removeAll();
		BDRJVGFWQH.removeAll();
		PBHYCULPGK.removeAll();
		GSXGWASLIY.removeAll();
		UOPIKJVEKS.removeAll();
		GrupoUltimaBazaNuestra.removeAll();
		GrupoUltimaBazaRival.removeAll();
		COTMMCVJWP.removeAll();
		//BNWHJGHWUW.removeAll(); 2.0.7 Excepción, para que puedan hablar en el chat mientras se reparte o cuenta. Lo pongo al acabar el coto.		
		VTEVNYKAUB.removeAll();
		GrupoEmojis.removeAll();
		
		console.log("Limpio grupos")
	

		//if ( EstanTweensParados()  
		
		//)
		//{
			
		//	try
		//	{
				
				
				YMHIHSNADE.tweens.removeAll(); //2.0.8054 limpio siempre
				console.log("Limpio tweens")
		//	}
		//	catch(e){}
		//}
		//else
		//{
		//		console.log("NO Limpio tweens")
		//}
		
		
		
	}
	catch(e)
	{}	


	
	

	
}
		
function LimpiarCuentaPalos()
{
	ContadorPaloOros=0;
	ContadorPaloCopas=0;
	ContadorPaloEspadas=0;
	ContadorPaloBastos=0;
	
	textoCuentaPaloOros.text=0
	textoCuentaPaloCopas.text=0
	textoCuentaPaloEspadas.text=0
	textoCuentaPaloBastos.text=0
	
}	
function QSAXUCPASV(){

var i;

LimpiarCuentaPalos()

if (MNAGVJHWOW()==false) //2.0.8.37, junto con todos BloqueoCartaCentro
{
	BloqueoCartaCentro=false;
}

IHSKJHKWCM=false; 
//BHJCWGIUIU=false;

VBMSLTWABI=0;
//NO DEBE DUGDLNBOGK=false;
AJFQVFUKAP=false;
//JHHWEKWEJK=false; //1.0.8 NO SE PUEDE PONER
		
MYQBNBVHKU=false; //1.0.9
HGMNXSIAPV=false; //1.0.9

UWYHEIVJHX=0; //2.0.8.37 Para que el contador de turno se recalcule

if (HUUCUYFBLW!=undefined) //2.0.1 todo este if y el contenido
{
	HUUCUYFBLW.stop();
	HUUCUYFBLW.remove();
}
if (HYSGUYGUYT!=undefined)
{
	HYSGUYGUYT.stop();
	HYSGUYGUYT.remove();
}
if (BGHJGDWJVI!=undefined)
{
	BGHJGDWJVI.stop();
	BGHJGDWJVI.remove();
}	
if (CVTBLMKIGL!=undefined)
{
	CVTBLMKIGL.stop();
	CVTBLMKIGL.remove();
	//console.log("Limpio CVTBLMKIGL")
}	
if (MMCDRVCGAV!=undefined)
{
	MMCDRVCGAV.stop();
	MMCDRVCGAV.remove();
}	
if (TKXPPGUPVV!=undefined)
{
	TKXPPGUPVV.stop();
	TKXPPGUPVV.remove();
}	



	if (HMVFLEYPXM.length==0)
	{
		DesbloquearTirada();
	}
	
FSKHWVCMCA=false;
BUJELVTIKU.kill();
//ATTUXTNNKX.kill();
ATTUXTNNKX.kill();
XQDPVWOUII.kill();
IEQDMBJCAY.kill();
YGTNAODFHW.kill();
YJNIRPCWEI.text="";
YJNIRPCWEI.kill();

//YMHIHSNADE.tweens.pauseAll(); 
GJHWUYGCBN.kill(); 
BNVUWCOWEC.kill();
UYIUYIUYIU.kill();
DHJGJHGWCY.kill();

//if (inputField!=undefined)
//{
	;
	PANPKTGSCV.kill();
	HRGDCMPPKU.kill();	
	IFMJVFFEQN.kill()
	KAHCKJHQEO.kill();
	if (BotonEmoticono!=undefined)
	{
		BotonEmoticono.kill();
	}
//}
log(true,"Limpiando variables..");

//2.0.1
/*for (i=0;i<=FXGSEGRXKC.length-1;i++)
{
	try
	{
		FXGSEGRXKC[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}
}

for (i=0;i<=CBCNHFGWLU.length-1;i++)
{
	try
	{	
		CBCNHFGWLU[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}

for (i=0;i<=KNVKGHHTYC.length-1;i++)
{
	try
	{	
		KNVKGHHTYC[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}

for (i=0;i<=TWJONOKGHC.length-1;i++)
{
	try
	{	
		TWJONOKGHC[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}
for (i=0;i<=AGKVNAGGLB.length-1;i++)
{
	try
	{
		AGKVNAGGLB[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}


for (i=0;i<=VDKOVQXHON.length-1;i++)
{
	try
	{	
		VDKOVQXHON[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}


for (i=0;i<=VDKOVQXHON.length-1;i++)
{
	try
	{	
		VDKOVQXHON[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}

for (i=0;i<=FBSDMRLVEL.length-1;i++)
{
	try
	{	
		FBSDMRLVEL[i].TNFAGGMKXD.destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}

for (i=0;i<=KBESPOUXUK.length-1;i++)
{
	try
	{	
		KBESPOUXUK[i].destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}

for (i=0;i<=BRILHDFUSO.length-1;i++)
{
	try
	{	
		BRILHDFUSO[i].destroy();
	}
	catch(e)
	{
		SVHMCOYULR("Destroy error")
	}	
}*/

//IEQDMBJCAY.kill();
//YGTNAODFHW.kill();
//IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);
//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
//IEQDMBJCAY.frameName= 'cantar gris';		//asd
//YGTNAODFHW.frameName='cambiar 7 gris';

NMABWIWAAA();
PAHJCWBNJH();

NBEJWDVLLV.splice(0,1000); //1.0.6

FXGSEGRXKC.splice(0,100);
MazoTodas.splice(0,100);
WUHRYVMYBE.splice(0,100);
CBCNHFGWLU.splice(0,100);
KNVKGHHTYC.splice(0,100);
TWJONOKGHC.splice(0,100);
AGKVNAGGLB.splice(0,100);
ETAUVLWEYR.splice(0,100);
VDKOVQXHON.splice(0,100);
//WSHPROHDIV.splice(0,100); 2.0.7
//TTJKWKBPWO.splice(0,100); 2.0.7
FBSDMRLVEL.splice(0,100);
KBESPOUXUK.splice(0,100);
JLOISTPAPQ.splice(0,100);
BRILHDFUSO.splice(0,100);
MazoCartasSalidas.splice(0,100);
ArrayCambioCarta.splice(0,100);
ArrayRondaGanada.splice(0,100);
ArrayRevisaArrastre.splice(0,100);

i=KTBOJTXFEU.length
while (i--)
{
	if (KTBOJTXFEU[i].MQUGCIUQII==MQUGCIUQII)
	{
		KTBOJTXFEU.splice(i,1);
	}
}
//KTBOJTXFEU.splice(0,100);


//XYXCEMMRDC.splice(0,100);
//BSFNXQXOTD.splice(0,100);
LUCRWXJMDR=1;
PNVKSWRTOJ=1;
KKPQLKMIQR.splice(0,100);
PPTWRPRLSI=false;
FOQUJVEYFC.splice(0,100);
XYRJNHOCRB.splice(0,100);
HAJIKEVCFP.splice(0,100);
//LSJCRLDUCH.splice(0,100);
//NKJHKJHHHE.splice(0,100);

log(true,"Fin limpiando variables..");
}

function DesbloquearTirada() //2.0.1 clave:bloqueotirada
{
	TLGMUNNDGH=false;
}

function WNEWPCNXPA()
{
	QSAXUCPASV();
	
	BloqueoCartaCentro=false;
	IHSKJHKWCM=false; 

	//BHJCWGIUIU=false;
	
	UWYHEIVJHX=0; //2.0.8.37 Para que el contador de turno se recalcule
	
	MQUGCIUQII=null; //2.0.1 20180224 NO PONER EN LIMPIARVARIABLES	
	FSKHWVCMCA=false;
	VBMSLTWABI=0;
	//DUGDLNBOGK=false; 2.0.7
	AJFQVFUKAP=false;
	JHHWEKWEJK=false; //1.0.8
	//console.log("Finalizando partida a false WNEWPCNXPA");
	//YMHIHSNADE.tweens.pauseAll(); 
	GJHWUYGCBN.kill();
	BNVUWCOWEC.kill();
	UYIUYIUYIU.kill();
	DHJGJHGWCY.kill();
	
	DesbloquearTirada();
	
	
	log(true,"Limpiando variables conexión nueva..");
	DFBVDPETGO=Math.floor(Math.random());
	YJEISFVFQY();
	
	DCOXIXEBRJ.splice(0,1000);
	JEHYBALODM.splice(0,100);
	
	HMVFLEYPXM.splice(0,10000);
	//RLEHYYGBGQ.splice(0,10000); 2.0.7
	REDYBSYSNN.splice(0,10000);
	UTGVHSDVNR.splice(0,10000);
	JSNTWHPRIL.splice(0,10000); //1.0.7
	ArrayUltimoControl.splice(0,10000); //2.0.8051
	//NHLRWTHYVG=false;
	//VKYLOUGFGR=false;
	NBEJWDVLLV.splice(0,1000); //1.0.6
	//ATTUXTNNKX.kill();
	ATTUXTNNKX.text="";
	ATTUXTNNKX.kill();
	XQDPVWOUII.kill();
	YJNIRPCWEI.text="";
	YJNIRPCWEI.kill();
	IEQDMBJCAY.kill();
	YGTNAODFHW.kill();
	
	UHHXSNXXJK=75; //deshaz
	PXGXKDDNFK=75;//deshaz
	
	MarcadorPartidasNuestroFin=JVQXQGYDHH;
	MarcadorPartidasRivalFin=CNCCBHQJKL;	
	
	JVQXQGYDHH=0;
	CNCCBHQJKL=0;
	
	

	
	XPBCVAGCDQ.splice(0,1000);
	KYDWXPGHVY.splice(0,1000);
	//ArrayJugadoresDesconectadosID.splice(0,1000);
	//XYXCEMMRDC.splice(0,1000);
	QLNEIQGEDF.splice(0,1000);
	//NKJHKJHHHE.splice(0,100);
	
	ESKTEXAVHU=0;
	MYQBNBVHKU=false;
	HGMNXSIAPV=false;
	EVAILWGGKX=true;//deshaz
	LUCRWXJMDR=1;
	PNVKSWRTOJ=1;
	DVNRTQIWGL=1
	
	//UIYIUCHWUH(); 2.0.1 lo paso al Level
}
function CargaOpcionesDefecto()
{
	var PantallaActivaPrevio;
	PantallaActivaPrevio=PantallaActivaGlobal;
	
	var d=document.getElementById("SelectorBaraja");
    d.selectedIndex=StorageGet("NXNXBWBBWL")
	if (d.selectedIndex==1)
	{
		NXNXBWBBWL="baraja_guinarte";
	}
	else
	{
		NXNXBWBBWL="baraja_pro";
	}
	
	
	var d=document.getElementById("OptAudioChascarrillo");
    d.checked=StorageGet("AudioChascarrillos")	
	
	var d=document.getElementById("OptAudioCantes");
    d.checked=StorageGet("AudioCantes")	
	
	var d=document.getElementById("OptAudioCartas");
    d.checked=StorageGet("AudioCartas")		
	
	var d=document.getElementById("OptAudioSilenciar");
    d.checked=StorageGet("AudioSilenciar")			

	var d=document.getElementById("OptPantallaActiva");
    d.checked=StorageGet("PantallaActiva")		
	
	
	PantallaActivaGlobal=StorageGet("PantallaActiva");
	if (window.plugins && PantallaActivaGlobal!=PantallaActivaPrevio)
	{
		if(	PantallaActivaGlobal==true)
		{
			try
			{
				window.powermanagement.acquire();
			}
			catch(e)
			{}	
		}
		else
		{
			try
			{
				window.powermanagement.release();
			}
			catch(e)
			{}			
		}
	}
	
	SonidoChascarrillos=StorageGet("AudioChascarrillos");
	SonidoCantes=StorageGet("AudioCantes");
	SonidoCartas=StorageGet("AudioCartas");
	SonidoSilenciar=StorageGet("AudioSilenciar");
	
}

function CambioSelectorBaraja()
{
	var d=document.getElementById("SelectorBaraja");
	StorageSet("NXNXBWBBWL",d.selectedIndex)
	
	CargaOpcionesDefecto();
}

function CambioSelectorAudioChascarrillos()
{
	var d=document.getElementById("OptAudioChascarrillo");
    StorageSet("AudioChascarrillos",d.checked)
	
	document.getElementById("OptAudioSilenciar").checked=false;
	StorageSet("AudioSilenciar",false)
	
	CargaOpcionesDefecto();
}

function CambioSelectorAudioCantes()
{
	var d=document.getElementById("OptAudioCantes");
	StorageSet("AudioCantes",d.checked)
	
	document.getElementById("OptAudioSilenciar").checked=false;
	StorageSet("AudioSilenciar",false)
	
	
	CargaOpcionesDefecto();
}

function CambioSelectorAudioCartas()
{
	var d=document.getElementById("OptAudioCartas");
    //console.log(d.checked);
	StorageSet("AudioCartas",d.checked)
	
	document.getElementById("OptAudioSilenciar").checked=false;
	StorageSet("AudioSilenciar",false)
	
	CargaOpcionesDefecto();
}

function CambioSelectorSilenciar()
{
	var d=document.getElementById("OptAudioSilenciar");
    //console.log(d.checked);
	StorageSet("AudioSilenciar",d.checked)
	
	document.getElementById("OptAudioChascarrillo").checked=false;
	StorageSet("AudioChascarrillos",false)
	document.getElementById("OptAudioCantes").checked=false;
	StorageSet("AudioCantes",false)	
	document.getElementById("OptAudioCartas").checked=false;
	StorageSet("AudioCartas",false)		
	
	CargaOpcionesDefecto();	
}

function CambioSelectorPantallaActiva()
{
	var d=document.getElementById("OptPantallaActiva");
    //console.log(d.checked);
	StorageSet("PantallaActiva",d.checked)
	CargaOpcionesDefecto();
	if (d.checked==true)
	{
		alert("Se ahora más energía si está desactivada esta opción y se gestiona directamente desde la configuración del dispositivo");
	}
}


function ACGJHQWGVB()
{
	//if (RXKKPILDQT==undefined)
	//{
		
		CargaOpcionesDefecto();
		
		console.log("grupoemojis "+GrupoEmojis)
		//if (GrupoEmojis==undefined)
		//{

			GrupoEmojis=YMHIHSNADE.add.group();
			
			RXKKPILDQT = YMHIHSNADE.add.group();
			SYXHGDSJDY = YMHIHSNADE.add.group();
			BDRJVGFWQH = YMHIHSNADE.add.group();
			PBHYCULPGK = YMHIHSNADE.add.group();
			GSXGWASLIY = YMHIHSNADE.add.group();
			UOPIKJVEKS = YMHIHSNADE.add.group();
			GrupoUltimaBazaNuestra = YMHIHSNADE.add.group();
			GrupoUltimaBazaRival = YMHIHSNADE.add.group();
			COTMMCVJWP = YMHIHSNADE.add.group();
			BNWHJGHWUW = YMHIHSNADE.add.group();
			VTEVNYKAUB=YMHIHSNADE.add.group();//1.0.9
		//}
	
	VTEVNYKAUB.add(JBXCGDTWYW);
	YMHIHSNADE.world.bringToTop(VTEVNYKAUB);
	VTEVNYKAUB.add(NSNUIQUYIU);
	YMHIHSNADE.world.bringToTop(VTEVNYKAUB);
	
	console.log("tw "+UTIDOKPNXQ)
	//if (UTIDOKPNXQ==undefined)
	//{
		UTIDOKPNXQ=YMHIHSNADE.add.tween(BRQFVLOBSF);
		TTCLPDJAMD=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twFondoNegro2=YMHIHSNADE.add.tween(BRQFVLOBSF);
		BDEFDQUJJE=YMHIHSNADE.add.tween(BRQFVLOBSF);
		CKOUBGTDUF=YMHIHSNADE.add.tween(BRQFVLOBSF);
		JLFYUAKDIJ=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twRec4=YMHIHSNADE.add.tween(BRQFVLOBSF);
		PQUFIBKJJH=YMHIHSNADE.add.tween(BRQFVLOBSF);
		//LJRRHVSVKD=YMHIHSNADE.add.tween(BRQFVLOBSF);
		//LCYAHFBDTT=YMHIHSNADE.add.tween(BRQFVLOBSF);
		//NEPGDYQDEI=YMHIHSNADE.add.tween(BRQFVLOBSF);
		
		tw5=YMHIHSNADE.add.tween(BRQFVLOBSF);
		HHBPAROITT=YMHIHSNADE.add.tween(BRQFVLOBSF);
		//twEsp72=YMHIHSNADE.add.tween(BRQFVLOBSF);
		
		twReu7=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuD1=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuD2=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuD3=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuD4=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuD5=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuD6=YMHIHSNADE.add.tween(BRQFVLOBSF);
		
		twReuL1=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuL2=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuL3=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuL4=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuL5=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuL6=YMHIHSNADE.add.tween(BRQFVLOBSF);


		twReuR1=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuR2=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuR3=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuR4=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuR5=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuR6=YMHIHSNADE.add.tween(BRQFVLOBSF);

		twReuU1=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuU2=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuU3=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuU4=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuU5=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuU6=YMHIHSNADE.add.tween(BRQFVLOBSF);
		
		twReuDA1=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuDA2=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuDA3=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuDA4=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuDA5=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuDA6=YMHIHSNADE.add.tween(BRQFVLOBSF);
		
		twReuLA1=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuLA2=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuLA3=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuLA4=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuLA5=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuLA6=YMHIHSNADE.add.tween(BRQFVLOBSF);


		twReuRA1=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuRA2=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuRA3=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuRA4=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuRA5=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuRA6=YMHIHSNADE.add.tween(BRQFVLOBSF);

		twReuUA1=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuUA2=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuUA3=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuUA4=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuUA5=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twReuUA6=YMHIHSNADE.add.tween(BRQFVLOBSF);
		
		twDemo=YMHIHSNADE.add.tween(BRQFVLOBSF);
		
		PTHQXTTWIH=YMHIHSNADE.add.tween(BRQFVLOBSF);
		IRQUWMEVQL=YMHIHSNADE.add.tween(BRQFVLOBSF);
		HIFQJUUVEU=YMHIHSNADE.add.tween(BRQFVLOBSF);	
		JKSTORAHAM=YMHIHSNADE.add.tween(BRQFVLOBSF);	
		TKXWTMCBFU=YMHIHSNADE.add.tween(BRQFVLOBSF);
		UEIQAMIDWY=YMHIHSNADE.add.tween(BRQFVLOBSF);
		GCKCAMPPHX=YMHIHSNADE.add.tween(BRQFVLOBSF);	
		CFFVTFENDF=YMHIHSNADE.add.tween(BRQFVLOBSF);
		
		
		twReparto=YMHIHSNADE.add.tween(BRQFVLOBSF);

				
		JHVJLQHUVQ=YMHIHSNADE.add.tween(BRQFVLOBSF);
		CBJKQGHVQV=YMHIHSNADE.add.tween(BRQFVLOBSF);
							
		NNXBXBHSHH=YMHIHSNADE.add.tween(BRQFVLOBSF);
		MMSJJSJSUW=YMHIHSNADE.add.tween(BRQFVLOBSF);	
		OOQQOQOOID=YMHIHSNADE.add.tween(BRQFVLOBSF);
		QTQTQTQTQT=YMHIHSNADE.add.tween(BRQFVLOBSF);
		GSGGWGWGWG=YMHIHSNADE.add.tween(BRQFVLOBSF);
		HGJCWICPWQ=YMHIHSNADE.add.tween(BRQFVLOBSF);
		NBMNABHJCG=YMHIHSNADE.add.tween(BRQFVLOBSF);
		NXHWIWPWOW=YMHIHSNADE.add.tween(BRQFVLOBSF);

		BJHGSJHDGS=YMHIHSNADE.add.tween(BRQFVLOBSF);
		IUWYIUFYCW=YMHIHSNADE.add.tween(BRQFVLOBSF);
		NXWIWPWPQQ=YMHIHSNADE.add.tween(BRQFVLOBSF);
		NMSBGIVWOT=YMHIHSNADE.add.tween(BRQFVLOBSF);
		NNCHIEIEWW=YMHIHSNADE.add.tween(BRQFVLOBSF);
		PPWPWWODJF=YMHIHSNADE.add.tween(BRQFVLOBSF);
		HJGWIOWOVD=YMHIHSNADE.add.tween(BRQFVLOBSF);
		HQJHKJCHKW=YMHIHSNADE.add.tween(BRQFVLOBSF);

		JKHKJVHWPW=YMHIHSNADE.add.tween(BRQFVLOBSF);
		NBXIJWGIWP=YMHIHSNADE.add.tween(BRQFVLOBSF);
		JHWJFHWIWW=YMHIHSNADE.add.tween(BRQFVLOBSF);
		MNIIWIWIUD=YMHIHSNADE.add.tween(BRQFVLOBSF);
		DSCHJGSVHJ=YMHIHSNADE.add.tween(BRQFVLOBSF);
		UIWYCUIHWU=YMHIHSNADE.add.tween(BRQFVLOBSF);
		NBSHGWHGWW=YMHIHSNADE.add.tween(BRQFVLOBSF);
		EHIEHUIEHU=YMHIHSNADE.add.tween(BRQFVLOBSF);
		FJHJGFHGFO=YMHIHSNADE.add.tween(BRQFVLOBSF);
		HGHJGWKHAA=YMHIHSNADE.add.tween(BRQFVLOBSF);
		AAAAJGHJGW=YMHIHSNADE.add.tween(BRQFVLOBSF);
		UIWYIEUCWW=YMHIHSNADE.add.tween(BRQFVLOBSF);
		BBBJHKWOOW=YMHIHSNADE.add.tween(BRQFVLOBSF);
		MMSWJWIAHG=YMHIHSNADE.add.tween(BRQFVLOBSF);
		HJGSXHJGSW=YMHIHSNADE.add.tween(BRQFVLOBSF);
		YYYWCGWCGW=YMHIHSNADE.add.tween(BRQFVLOBSF);


		twUB1N=YMHIHSNADE.add.tween(BRQFVLOBSF); //2.0.8051
		twUB2N=YMHIHSNADE.add.tween(BRQFVLOBSF); //2.0.8054
		twUB3N=YMHIHSNADE.add.tween(BRQFVLOBSF); //2.0.8054
		twUB4N=YMHIHSNADE.add.tween(BRQFVLOBSF); //2.0.8054
		
		twUB1E=YMHIHSNADE.add.tween(BRQFVLOBSF); //2.0.8051
		twUB2E=YMHIHSNADE.add.tween(BRQFVLOBSF); //2.0.8054
		twUB3E=YMHIHSNADE.add.tween(BRQFVLOBSF); //2.0.8054
		twUB4E=YMHIHSNADE.add.tween(BRQFVLOBSF); //2.0.8054
		
		twEfectoCanteGlobal1=YMHIHSNADE.add.tween(BRQFVLOBSF); //2.0.8051
		twEfectoCanteGlobal2=YMHIHSNADE.add.tween(BRQFVLOBSF); //2.0.8051
		twDesplazaDerechaGlobal=YMHIHSNADE.add.tween(BRQFVLOBSF); //2.0.8051
		twDesplazaIzquierdaGlobal=YMHIHSNADE.add.tween(BRQFVLOBSF); //2.0.8051
		//twEnviarEmoticonoGlobal=YMHIHSNADE.add.tween(BRQFVLOBSF); //2.0.8051
		//twEnviarEmoticonoGlobalParaMi=YMHIHSNADE.add.tween(BRQFVLOBSF); //2.0.8051
		
		twDesplazamientoEmoticonoDL=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twDesplazamientoEmoticonoDU=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twDesplazamientoEmoticonoDR=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twDesplazamientoEmoticonoLD=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twDesplazamientoEmoticonoLU=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twDesplazamientoEmoticonoLR=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twDesplazamientoEmoticonoUD=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twDesplazamientoEmoticonoUR=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twDesplazamientoEmoticonoUL=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twDesplazamientoEmoticonoRD=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twDesplazamientoEmoticonoRU=YMHIHSNADE.add.tween(BRQFVLOBSF);
		twDesplazamientoEmoticonoRL=YMHIHSNADE.add.tween(BRQFVLOBSF);		


		twMensajeError=YMHIHSNADE.add.tween(BRQFVLOBSF);
	//}
	
}
function KPQSPDMKJE(SQIRFQMWSL,TUTWNSAGSX)
{
	var i;
	var LHRDGYYJLJ;
	var TodoEnOrden=false;
	var UEHKJHJNWV=60;
	var Ok=false
	//MMCDRVCGAV.stop();
	
	MMCDRVCGAV.stop();
	MMCDRVCGAV.remove();	
	
	DVNRTQIWGL=SQIRFQMWSL; //2.0.8.37 Nuevo

	var RDBQUAVHEP=SQIRFQMWSL; //ILA RDBQUAVHEP he puesto el var
	console.log("Nueva partida quien "+RDBQUAVHEP+" Soy "+TFSXFTYVGQ)
	console.log("Permiso "+PermisoParaTomarControl(RDBQUAVHEP)+" Estoy conectado "+SNJCSVWFCC()+" Reconectando "+MNAGVJHWOW()+ " primera vez "+TUTWNSAGSX)
	if ( (RDBQUAVHEP==TFSXFTYVGQ ||  PermisoParaTomarControl(RDBQUAVHEP) ) &&  ( (EGPDVIEJEL==true && SNJCSVWFCC() && (MNAGVJHWOW()==false || TUTWNSAGSX==true)    ) || EGPDVIEJEL==false ) )
	{
		console.log("Nueva partida")
		LHRDGYYJLJ=false;
		for (i=0;i<=KYDWXPGHVY.length-1;i++)
		{
			if (KYDWXPGHVY[i].SSUNXNEEHN==RDBQUAVHEP)
			{
				LHRDGYYJLJ=true;
			}
			
		}
		
		if ( EGPDVIEJEL==false )
		{
			LHRDGYYJLJ=true
		}
		
		if (RDBQUAVHEP==TFSXFTYVGQ || LHRDGYYJLJ==true)
		{
			//var MMCDRVCGAV=YMHIHSNADE.time.create(false);						
			//MMCDRVCGAV.loop(1000,function(){
			
			UEHKJHJNWV--;
			if (UEHKJHJNWV<=0)
			{
				MMCDRVCGAV.stop();
				MMCDRVCGAV.remove();					
			}
					
			//if (VerificaRepartosJugador(MQUGCIUQII))
			//{
			//console.log("Nueva partida2")

			if (CompruebaPeticionReparto(MQUGCIUQII))
			{
				//console.log("Nueva partida3")
				if (EGPDVIEJEL==false) //2.0.1
				{
					//console.log("MQUGCIUQII "+MQUGCIUQII)
					var idPartidaVieja=MQUGCIUQII;
					
					MQUGCIUQII=Math.random()*100000;
					
					CompruebaPartidaFinalizada(idPartidaVieja,MQUGCIUQII)
					CierraPartida(idPartidaVieja);
				}
					
		
				
				if (EGPDVIEJEL==false)
				{
						ETKKAJPFXQ(RDBQUAVHEP);	
						TodoEnOrden=true;
						MMCDRVCGAV.stop();
						MMCDRVCGAV.remove();
						Ok=true;
				}
				else
				{		
				
					//1.0.6 if (AGKVNAGGLB.length==0 && VDKOVQXHON.length==0 && KNVKGHHTYC.length==0 && CBCNHFGWLU.length==0 && XPBCVAGCDQ.length>=4)
					if (AGKVNAGGLB.length==0 && VDKOVQXHON.length==0 && KNVKGHHTYC.length==0 && CBCNHFGWLU.length==0 && XPBCVAGCDQ.length>=4 && (MNAGVJHWOW()==false || TUTWNSAGSX==true))  //2.0.1 03/02/2018 Clave:Reparto
					{
						
						
						//ESKTEXAVHU==TFSXFTYVGQ cabezon

								
						1==1 //1.0.9 if (OSBTHSJKFW()==true) //1.0.8
						{
							//console.log("CREO LA BARAJA Y LA ENVIO")	;
							
							//console.log("Nueva partida4")
							ETKKAJPFXQ(RDBQUAVHEP);	
							
							log(false,WUHRYVMYBE.length);
							//log(false,"ROOM "+socket.room);
							log(true,"... y la envío")
							log(true,"Envío que reparte: "+RDBQUAVHEP);
							HKJWHCKHWQ(WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,(JVQXQGYDHH+CNCCBHQJKL));	
							MMCDRVCGAV.stop();
							MMCDRVCGAV.remove();
							Ok=true;
						
						}
					}
			
				}
			}				
		//});	
		//MMCDRVCGAV.start();
		
		}
	}
	
	return Ok;
}
	//RDBQUAVHEP=4;
	//DVNRTQIWGL=0;
function BRJIESNORM()
{
	YJNIRPCWEI.text="";
	YJNIRPCWEI.kill();
	MYQBNBVHKU=false;
	HGMNXSIAPV=false;
	HUUCUYFBLW.stop();
	HUUCUYFBLW.remove();
	TKXPPGUPVV.stop();
	TKXPPGUPVV.remove();
	//IEQDMBJCAY.kill();		
	//YGTNAODFHW.kill();	
	//IEQDMBJCAY.loadTexture('Boton_cantar_off', 0);
	//YGTNAODFHW.loadTexture('Boton_cambiar_7_off', 0);
	//IEQDMBJCAY.frameName= 'cantar gris';		//asd
	//YGTNAODFHW.frameName='cambiar 7 gris';
	
	PAHJCWBNJH();
	NMABWIWAAA();
			
	IEQDMBJCAY.kill();
	YGTNAODFHW.kill();
}	








function OYOANGYTVY(sprite)
{
	sprite.inputEnabled = true;
	sprite.input.disableDrag();
	sprite.events.onInputDown.add(GJFQTBUCRH);
	
}

function UJTKROLWWS(sprite)
{
	sprite.inputEnabled = false;
	//sprite.input.disableDrag();
	//sprite.events.onInputDown.add(GJFQTBUCRH);
	
}

function GJFQTBUCRH(sprite){
	log(false,"mostrando �ltima SRCGCMADME");
	var i;
	var CMWUMHNEHK="VIYQDHWIAA"
	var VEFCIYHBGC=false;
	var EDLRWACYRF;
	var GEFUYWBVWG=[];
	var JKAHQMCRIV=0;
	
	Renderizar(true, "Muestra ultima baza");
	if (1==1)
	{
		for (i=0;i<=KBESPOUXUK.length-1;i++)
		{
			//KBESPOUXUK[i].bringToTop();
			//if (KBESPOUXUK[i].key.indexOf('baraja')==0)
			//{
			//	JKAHQMCRIV++;
			//}
				
			if (sprite.name==KBESPOUXUK[i].name)
			{
				VEFCIYHBGC=true;
				CMWUMHNEHK="VIYQDHWIAA";
				

				
				//break;
			}
		}	
		
		if (VEFCIYHBGC==true){
			EDLRWACYRF=XYRJNHOCRB;
		}
		else
		{
			//JKAHQMCRIV=0;
			for (i=0;i<=BRILHDFUSO.length-1;i++)
			{
				//if (BRILHDFUSO[i].key.indexOf('baraja')==0)
				//{
				//	JKAHQMCRIV++;
				//}
			
				if (sprite.name==BRILHDFUSO[i].name)
				{					
					VEFCIYHBGC=true;
					CMWUMHNEHK="YOBEPVEEMW";
					
					//if (BRILHDFUSO[i].key.indexOf('baraja')==0)
					//{
					//	JKAHQMCRIV++;
					//}
				
					//break;
				}
			}	
			
			if (VEFCIYHBGC==true){
				EDLRWACYRF=HAJIKEVCFP;
			}
			//else
			//{
			//	JKAHQMCRIV=0;
			//}
		
		}
		

		JKAHQMCRIV=0;
		var PosicionCante=[];
		
		for (i=0;i<=EDLRWACYRF.length-1;i++)
		{
			console.log("hay cantes.. "+EDLRWACYRF[i].key)
			//if (EDLRWACYRF[i].key.indexOf('baraja')==0)
			if(EDLRWACYRF[i].Es20==true)
			{
				console.log("hay cantes CONFIRMADO")
				JKAHQMCRIV++;
				PosicionCante.push(i);
			}
		}
		
		//Para evitar que se pare la recogida de cartas
		for (i=0;i<=EDLRWACYRF.length-1;i++)
		{
			GEFUYWBVWG.push(EDLRWACYRF[i]);
			//WWFSQDQYYU.add(GEFUYWBVWG[i])
			NAYBJTKIKA(GEFUYWBVWG[i]);
			//GEFUYWBVWG[i].bringToTop();
		}
		

		
		if (CMWUMHNEHK=="VIYQDHWIAA")
		{
			YMHIHSNADE.world.bringToTop(GrupoUltimaBazaNuestra);
		}
		else
		{
			YMHIHSNADE.world.bringToTop(GrupoUltimaBazaRival);
		}
		//log(false,"ENC"+ sprite.name);
		if (VEFCIYHBGC==true)
		{
			

			
			


			
			//try
			//{
				//log(false,"NO ENC");
				//NMBDSKWHIU = YMHIHSNADE.add.tween(GEFUYWBVWG[0].scale);
			
			var twUB1Ejecutar
			var twUB2Ejecutar
			var twUB3Ejecutar
			var twUB4Ejecutar
			
			if (CMWUMHNEHK=="VIYQDHWIAA")
			{
				twUB1Ejecutar=twUB1N
				twUB2Ejecutar=twUB2N
				twUB3Ejecutar=twUB3N
				twUB4Ejecutar=twUB4N	
			}
			else
			{
				twUB1Ejecutar=twUB1E
				twUB2Ejecutar=twUB2E
				twUB3Ejecutar=twUB3E
				twUB4Ejecutar=twUB4E					
			}
			var VEFCIYHBGC=false;
				if (!twUB1Ejecutar.isRunning && !twUB2Ejecutar.isRunning && !twUB3Ejecutar.isRunning && !twUB4Ejecutar.isRunning)
				{
					try
					{
						twUB1Ejecutar.timeline=[]
						twUB1Ejecutar.target=GEFUYWBVWG[0].scale
						twUB1Ejecutar.to( {x:XQNKTFDREN
						,y:XQNKTFDREN,
						angle:0  
						}
						, MDYSFNYPYP, KYFMRVNHIQ, true);
						
						twUB1Ejecutar.onComplete.addOnce( function()
							{
								console.log("Comenzando transparencia")
								for(i=0;i<=VDKOVQXHON.length-1;i++)
								{
									console.log("dandolooo "+VDKOVQXHON[i].name)
									for (var u=0;u<=GEFUYWBVWG[u].length-1;u++)
									{
										console.log("dandolooo "+GEFUYWBVWG[u].name+" "+VDKOVQXHON[i].name)
										if (GEFUYWBVWG[u].name==VDKOVQXHON[i].name)
										{
											console.log("dandolo "+GEFUYWBVWG[u].name+" "+VDKOVQXHON[i].name)
											VEFCIYHBGC=true;
										}
									}
									if (VEFCIYHBGC==false)
									{
										VDKOVQXHON[i].TNFAGGMKXD.alpha=0.2;
									}
									VEFCIYHBGC=false;
									
								}
								
			
								twUB1Ejecutar.timeline=[]
								twUB1Ejecutar.target=GEFUYWBVWG[0]
								twUB1Ejecutar.to( {x:YMHIHSNADE.world.centerX
								,y:PXEBTYBHGS,
								angle:0  
								}
								, MDYSFNYPYP, KYFMRVNHIQ, true);
								twUB1Ejecutar.onComplete.addOnce( function()
									{
										GEFUYWBVWG[0].alpha=1;
									}									
								)
								//NMBDSKWHIU.start();
							}
						)
						//twUB1Ejecutar.start();		


						twUB2Ejecutar.timeline=[]
						twUB2Ejecutar.target=GEFUYWBVWG[1].scale
						twUB2Ejecutar.to( {x:XQNKTFDREN
						,y:XQNKTFDREN,
						angle:0  
						}
						, MDYSFNYPYP, KYFMRVNHIQ, true);
						
						twUB2Ejecutar.onComplete.addOnce( function()
							{
								twUB2Ejecutar.timeline=[]
								twUB2Ejecutar.target=GEFUYWBVWG[1]
								twUB2Ejecutar.to( {x:YMHIHSNADE.world.centerX+(COIVBWRMCC*1)+(YAJVUBPNNW*1)
								,y:PXEBTYBHGS,
								angle:0  
								}
								, MDYSFNYPYP, KYFMRVNHIQ, true);
								twUB2Ejecutar.onComplete.addOnce( function()
									{
										GEFUYWBVWG[1].alpha=1;
									}									
								)								
								//NMBDSKWHIU.start();
							}
						)



						twUB3Ejecutar.timeline=[]
						twUB3Ejecutar.target=GEFUYWBVWG[2].scale
						twUB3Ejecutar.to( {x:XQNKTFDREN
						,y:XQNKTFDREN,
						angle:0  
						}
						, MDYSFNYPYP, KYFMRVNHIQ, true);
						
						twUB3Ejecutar.onComplete.addOnce( function()
							{
								twUB3Ejecutar.timeline=[]
								twUB3Ejecutar.target=GEFUYWBVWG[2]
								twUB3Ejecutar.to( {x:YMHIHSNADE.world.centerX+(COIVBWRMCC*2)+(YAJVUBPNNW*2)
								,y:PXEBTYBHGS,
								angle:0  
								}
								, MDYSFNYPYP, KYFMRVNHIQ, true);
								twUB3Ejecutar.onComplete.addOnce( function()
									{
										GEFUYWBVWG[2].alpha=1;
									}									
								)								
								//NMBDSKWHIU.start();
							}
						)	


						twUB4Ejecutar.timeline=[]
						twUB4Ejecutar.target=GEFUYWBVWG[3].scale
						twUB4Ejecutar.to( {x:XQNKTFDREN
						,y:XQNKTFDREN,
						angle:0  
						}
						, MDYSFNYPYP, KYFMRVNHIQ, true);
						
						twUB4Ejecutar.onComplete.addOnce( function()
							{
								twUB4Ejecutar.timeline=[]
								twUB4Ejecutar.target=GEFUYWBVWG[3]
								twUB4Ejecutar.to( {x:YMHIHSNADE.world.centerX+(COIVBWRMCC*3)+(YAJVUBPNNW*3)
								,y:PXEBTYBHGS,
								angle:0  
								}
								, MDYSFNYPYP, KYFMRVNHIQ, true);
								
								twUB4Ejecutar.onComplete.addOnce( function(){
									GEFUYWBVWG[3].alpha=1;
									JKKJHKHSWV(GEFUYWBVWG,CMWUMHNEHK,PosicionCante);
								}							
								)
								
								//NMBDSKWHIU.start();
							}
						)	

					}
					catch(e){}
				}
		
			
		}
	
	}
}



function JKKJHKHSWV(GEFUYWBVWG,MNABIEVSLA,PosicionCante){
	
	
	//NMBDSKWHIU = YMHIHSNADE.add.tween(GEFUYWBVWG[0].scale);
		
			var twUB1Ejecutar
			var twUB2Ejecutar
			var twUB3Ejecutar
			var twUB4Ejecutar
			
			if (MNABIEVSLA=="VIYQDHWIAA")
			{
				twUB1Ejecutar=twUB1N
				twUB2Ejecutar=twUB2N
				twUB3Ejecutar=twUB3N
				twUB4Ejecutar=twUB4N	
			}
			else
			{
				twUB1Ejecutar=twUB1E
				twUB2Ejecutar=twUB2E
				twUB3Ejecutar=twUB3E
				twUB4Ejecutar=twUB4E					
			}
			
		twUB1Ejecutar.timeline=[]	
		twUB1Ejecutar.target=GEFUYWBVWG[0].scale
		twUB1Ejecutar.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,true,500);
	

		twUB2Ejecutar.timeline=[]	
		twUB2Ejecutar.target=GEFUYWBVWG[1].scale
		twUB2Ejecutar.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,true,500);	
		
		twUB3Ejecutar.timeline=[]	
		twUB3Ejecutar.target=GEFUYWBVWG[2].scale
		twUB3Ejecutar.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,true,500);		
		
		twUB4Ejecutar.timeline=[]	
		twUB4Ejecutar.target=GEFUYWBVWG[3].scale
		twUB4Ejecutar.to( {x:RABUWLOKWX
		,y:RABUWLOKWX
		}
		, MDYSFNYPYP, KYFMRVNHIQ,true,500);	
		
		twUB4Ejecutar.onComplete.addOnce(function(){
			KHCJWKUIYV(GEFUYWBVWG,MNABIEVSLA,PosicionCante);
		})
		
	

}



function KHCJWKUIYV(GEFUYWBVWG,MNABIEVSLA,PosicionCante){
	var NOFEDXHMLS;
	var	GHTWROCHVV;
	var i;
	
	if 	(MNABIEVSLA=="VIYQDHWIAA"){
		NOFEDXHMLS=WIEVLYANFM("ULTIMA_Baza",0);
		GHTWROCHVV=FIGQBSJQGA("ULTIMA_Baza",0);
	}
	else{
		//NOFEDXHMLS=WIEVLYANFM("D",98)- (SXSHBRJFIR)-(COIVBWRMCC/2);
		//GHTWROCHVV=FIGQBSJQGA("U",5);
		
		NOFEDXHMLS=WIEVLYANFM("ULTIMA_Baza_Rival",0);
		GHTWROCHVV=FIGQBSJQGA("ULTIMA_Baza_Rival",0);
	}
	


			var twUB1Ejecutar
			var twUB2Ejecutar
			var twUB3Ejecutar
			var twUB4Ejecutar
			
			if (MNABIEVSLA=="VIYQDHWIAA")
			{
				twUB1Ejecutar=twUB1N
				twUB2Ejecutar=twUB2N
				twUB3Ejecutar=twUB3N
				twUB4Ejecutar=twUB4N	
			}
			else
			{
				twUB1Ejecutar=twUB1E
				twUB2Ejecutar=twUB2E
				twUB3Ejecutar=twUB3E
				twUB4Ejecutar=twUB4E					
			}
	
	
		XNFDNBQFUA(GEFUYWBVWG[0]);	
		XNFDNBQFUA(GEFUYWBVWG[1]);
		XNFDNBQFUA(GEFUYWBVWG[2]);
		XNFDNBQFUA(GEFUYWBVWG[3]);
		
		if (PosicionCante.length>0) //2.0.7
		{
			for (i=0;i<=PosicionCante.length-1;i++)
			{
				NAYBJTKIKA(GEFUYWBVWG[ PosicionCante[i]   ]);
			}
		}
			


////////////////////////////////////
					twUB1Ejecutar.timeline=[]
					twUB1Ejecutar.target=GEFUYWBVWG[0]
					GEFUYWBVWG[0].alpha=1;
					twUB1Ejecutar.to( {x:NOFEDXHMLS
					,y:GHTWROCHVV,
					angle:Math.floor(Math.random() * 360) + 1  
					}
					, MDYSFNYPYP, KYFMRVNHIQ, true);
					
					twUB1Ejecutar.onComplete.addOnce( function()
						{
							GEFUYWBVWG[0].alpha=1;
						}									
					)						
	


					twUB2Ejecutar.timeline=[]
					twUB2Ejecutar.target=GEFUYWBVWG[1]
					GEFUYWBVWG[1].alpha=1;
					twUB2Ejecutar.to( {x:NOFEDXHMLS
						,y:GHTWROCHVV,
						angle:Math.floor(Math.random() * 360) + 1  
						}
					, MDYSFNYPYP, KYFMRVNHIQ, true);
					
					twUB2Ejecutar.onComplete.addOnce( function()
						{
							GEFUYWBVWG[1].alpha=1;
						}									
					)						
			


					twUB3Ejecutar.timeline=[]
					twUB3Ejecutar.target=GEFUYWBVWG[2]
					GEFUYWBVWG[2].alpha=1;
					twUB3Ejecutar.to( {x:NOFEDXHMLS
						,y:GHTWROCHVV,
						angle:Math.floor(Math.random() * 360) + 1  
						}
					, MDYSFNYPYP, KYFMRVNHIQ, true);
				
					twUB3Ejecutar.onComplete.addOnce( function()
						{
							GEFUYWBVWG[2].alpha=1;
						}									
					)	
					

					twUB4Ejecutar.timeline=[]
					twUB4Ejecutar.target=GEFUYWBVWG[3]
					
					twUB4Ejecutar.to( {x:NOFEDXHMLS
						,y:GHTWROCHVV,
						angle:Math.floor(Math.random() * 360) + 1  
						}
					, MDYSFNYPYP, KYFMRVNHIQ, true);
					twUB4Ejecutar.onComplete.addOnce( function()
						{
							for(i=0;i<=VDKOVQXHON.length-1;i++)
							{
								VDKOVQXHON[i].TNFAGGMKXD.alpha=1;			
							}
							
							GEFUYWBVWG[3].alpha=1;
						}
					
					)
				
////////////////////////////////////




		

}


function quakeEnd()
{


 	 var margin = -50;
	 //var margin = 0;
	 // and set the world's bounds according to the given margin
	 var x = 0;
	 var y = 0;
	//var x = -margin;
	//var y = -margin;

	 var w = YMHIHSNADE.world.width + (margin * 2);
	 var h = YMHIHSNADE.world.height+ (margin * 2);
	 
  YMHIHSNADE.world.setBounds(x, y, w, h);
  YMHIHSNADE.world.camera.position.set(0,0);
	
}

function YJEISFVFQY()
{
	var d=document.getElementById('DivResultado');
	d.style.display = 'none';
	//d.style.zIndex=-1;
}

function HKJWHCKHWQ(WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,KXAWTTIEGG)
{
	
	//socket.emit('NQAQCOINMY', WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,KXAWTTIEGG);
	/////////////
	var QKVJASWVEO=Date.now();
	var GXNRNMAAKW=function( WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,KXAWTTIEGG,MQUGCIUQII,
		OYJAHGADFQ,OJPXTRQDKS,LYHKNIMVEB,RHOLNWBOXR){
		 this.WUHRYVMYBE=WUHRYVMYBE
		 this.DFBVDPETGO=DFBVDPETGO
		 this.RDBQUAVHEP=RDBQUAVHEP
		 this.EVAILWGGKX=EVAILWGGKX
		 this.XPBCVAGCDQ=XPBCVAGCDQ
		 this.KXAWTTIEGG=KXAWTTIEGG
		 this.MQUGCIUQII=MQUGCIUQII
											 
		 this.OYJAHGADFQ=OYJAHGADFQ
		 this.OJPXTRQDKS=OJPXTRQDKS
		 this.LYHKNIMVEB=LYHKNIMVEB
		 this.RHOLNWBOXR=RHOLNWBOXR
		 
		 this.EBAPPJFYSW=new Date(Date.now());
	 }
	var QPHHGPRJAI=[];
	QPHHGPRJAI.splice(0,1000);

		
	var OYJAHGADFQ=Math.random()*100000;
	
	//2.0.1 clave:reparto var MQUGCIUQII=OYJAHGADFQ; //Para que no calcule otra vez
	//console.log("ENVIO EL ID "+MQUGCIUQII);
	var KCPHFPSPLQ=new GXNRNMAAKW(WUHRYVMYBE,DFBVDPETGO,RDBQUAVHEP,EVAILWGGKX,XPBCVAGCDQ,KXAWTTIEGG,MQUGCIUQII,
		OYJAHGADFQ,socket.id,DFBVDPETGO,'NQAQCOINMY');
	NBEJWDVLLV.push(KCPHFPSPLQ);
	QPHHGPRJAI.push(KCPHFPSPLQ);

	var CKHBSQULIF=YMHIHSNADE.time.create(false);
	CKHBSQULIF.loop(200,function(){
		try
		{
			//socket.emit('Consola','Envío la baraja desde cliente '+TFSXFTYVGQ);
			//CierraPartida(MQUGCIUQII);
			socket.emit('NQAQCOINMY',QPHHGPRJAI[0],
			 function(XQLEOGMJYG)
			 {		
				EXBCVLOIYJ(XQLEOGMJYG,'NQAQCOINMY');
			 }
			);						
			QPHHGPRJAI.splice(0,1000);	
			CKHBSQULIF.stop();
			CKHBSQULIF.remove();
		}
		catch(e){}
	});
	CKHBSQULIF.start();
	
	/////////////		
}