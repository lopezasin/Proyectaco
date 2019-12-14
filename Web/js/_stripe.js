function MostrarStripe()
{
	var RHOLNWBOXR;
	var i;
	var d;
	var u;
	//ArticuloGlobal
	document.getElementById('DivStripe').style.display='inline-block';
}


var stripe = Stripe('pk_test_SZ72NAvtDtfbnM0gV8Bas9Kz00NiQ5iuNg');
//var stripe = Stripe('pk_live_CyFBwI9vJ1d3ioXmQDk4MfOQ00MlkFaGDx');	



var elements = stripe.elements();
var cardElement = elements.create('card');
cardElement.mount('#card-element');

//var cardholderName = document.getElementById('cardholder-name');

//document.getElementById('tipooct').value=TipoOct;
var cardButton = document.getElementById('card-button');

cardButton.addEventListener('click', function(ev) {
	var cardholderName=PWMIBRSDCJ[0].OBTBPOULAV;
	
	console.log("ArticuloComprarLocal: "+ArticuloComprar)
console.log("click")


  stripe.createPaymentMethod('card', cardElement, {
    billing_details: {name: cardholderName} //cardholderName.value
  }).then(function(result) {
    if (result.error) {
      // Show error in payment form
    } else {
      // Otherwise send paymentMethod.id to your server (see Step 2)
      fetch('http://192.168.43.100:8888/confirm_payment', {
	  //fetch('https://guiñotepro.es/confirm_payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Articulo: ArticuloComprar, prueba:"sin doble", payment_method_id: result.paymentMethod.id  })
      }).then(function(result) {
        // Handle server response (see Step 3)
		//console.log("IVAN0 "+ result  );
		
        result.json().then(function(json) {
		 //console.log("IVAN1 "+ JSON.parse(json)  );
          handleServerResponse(json);
        })
      });
    }
  });
});


function handleServerResponse(response) {
	console.log("en el handle")
  if (response.error) {
    // Show error from server on payment form
	console.log("error en el pago")
  } else if (response.requires_action) {
    // Use Stripe.js to handle required card action
    stripe.handleCardAction(
      response.payment_intent_client_secret
    ).then(function(result) {
      if (result.error) {
        // Show error in payment form
      } else {
        // The card action has been handled
        // The PaymentIntent can be confirmed again on the server
        fetch('http://192.168.43.100:8888/confirm_payment', {
		//fetch('https://guiñotepro.es/confirm_payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ Articulo: ArticuloComprar, prueba:"con doble", payment_intent_id: result.paymentIntent.id })
        }).then(function(confirmResult) {
			console.log("IVAN OK?"  );
            return confirmResult.json();
        }).then(handleServerResponse);
      }
    });
  } else {
    // Show success message
	console.log("Proceso exitoso sin acciones");
	var juego='#gamer';
	$(juego).focus();
	$(juego).click();
		document.getElementById("BotonComprar").disabled=true;
		
		var ObjetoRes=function(SSUNXNEEHN,EBAPPJFYSW,Articulo,Tipo)
		{
			this.Tipo=Tipo
		}
		var res=new ObjetoRes('Web')
		EnviarComprarGbits(ArticuloComprar, res);		
		OcultarDetalleTienda();
		CerrarTienda();	
		
		
  }
}
