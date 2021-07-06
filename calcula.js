		/*creamos una función para calcular*/
		function formulaDeVelocidad(){
				var dameUnValorParaLaDistanciaRecorrida = prompt("Dame un valor para la distancia recorrida en metros");
				var dameUnValorParaElTiempoQueDuroElRecorrido = prompt("Dame un valor el tiempo que duró la distancia recorrida en horas");
				var distanciaRecorrida = parseInt(dameUnValorParaLaDistanciaRecorrida);
				var tiempoDelRecorrido =  parseInt(dameUnValorParaElTiempoQueDuroElRecorrido);
		/*Evaluamos los valores ingresados y que traen las variables*/
			if (distanciaRecorrida > 0 && tiempoDelRecorrido > 0) {
 				var guardoDistancia = distanciaRecorrida;
  				var velocidadResuelta = guardoDistancia * 1 / 1000;
  				var resultadoFinal = velocidadResuelta  /tiempoDelRecorrido;
  				document.write(resultadoFinal  + " KM/H");}
  			else{
  				document.write("Repite la operatoria, debes un ingresar un valor válido");}
			};
		/*llamamos a esa función*/
			formulaDeVelocidad()
		/*
		Escrito por David S 
		---> https://github.com/nob322
		*/