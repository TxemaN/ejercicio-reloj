function contadorTiempo() {
    const dia = new Date();
    let hora = dia.getHours();
    let minuto = dia.getMinutes();
    let segundo = dia.getSeconds();

    document.getElementById("reloj").textContent = hora + ":" + minuto + ":" + segundo;
    if(minuto<10) {
      document.getElementById("reloj").textContent =  hora + ":" +"0"+minuto + ":" +segundo;
    }
    if(segundo<10) {
      document.getElementById("reloj").textContent =  hora + ":" +minuto + ":" +"0"+segundo;
    }
    if (minuto<10 && segundo<10) {
      document.getElementById("reloj").textContent =  hora + ":" +"0"+minuto + ":" +"0"+segundo;
    }
    return setTimeout(contadorTiempo, 1000);
  }
  
  console.log(contadorTiempo())
  