function contadorTiempo() {
    const dia = new Date();
    let hora = dia.getHours();
    let minuto = dia.getMinutes();
    let segundo = dia.getSeconds();

    document.getElementById("reloj").textContent =  hora + ":" + minuto + ":" + segundo;
    while(minuto.length<2) {
      document.getElementById("reloj").textContent =  hora + ":" +"0"+minuto + ":" + segundo;
    }
    return setTimeout(contadorTiempo, 1000);
  }
  
  console.log(contadorTiempo())