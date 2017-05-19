//Carga de datos
	var listaImagenes = new Array(); //creamos variable, la cual será un OBJETO. 
	var num = prompt("¿Cuantas imagenes quiere cargar? (máx. 25)");	
	var repe;	

	num=Number(num);
	while (isNaN(num)==true || Number.isInteger(num)==false || num<1 || num>25){
		num = prompt("Ese valor no es correcto, introduzca otro número");
		num=Number(num);
   	}
   	


	for (var i=0; i<num; i++){
		j=i+1;
		listaImagenes[i] = ("img/image"+[j]+".jpg");
	}
		
		
	//Aqui empieza el Controlador
	var indice = 0;
		
	//carga de la primera imagen y solo entra 1 vez
	function cargaImagen(){
		document.elementoIMG.src = listaImagenes[indice];
		play();
	}
	
	function siguiente(){
		indice +=1;
		if(indice > listaImagenes.length -1){
			indice = 0 ;	
		}
		
		document.elementoIMG.src = listaImagenes[indice];
	}
	
	function anterior(){
		indice -=1;
		if(indice < 0){
			indice = listaImagenes.length -1;	
		}
		
		document.elementoIMG.src = listaImagenes[indice];
	}

	function play(){
		repe = setInterval(siguiente ,3000);
		document.getElementById("botonC").style.float = "right";
		document.getElementById("botonD").style.float = "left";
		document.getElementById("botonC").style.visibility = "hidden";
		document.getElementById("botonD").style.visibility = "visible";	
	}

	function pause(){
		clearInterval(repe);
		document.getElementById("botonD").style.float = "right";
		document.getElementById("botonC").style.float = "left";
		document.getElementById("botonD").style.visibility = "hidden";
		document.getElementById("botonC").style.visibility = "visible";
	}