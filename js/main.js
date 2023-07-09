function contadorTiempo() {
    const dia = new Date();
    let hora = dia.getHours();
    let minuto = dia.getMinutes();
    let segundo = dia.getSeconds();

    document.getElementById("reloj").textContent =  hora + ":" + minuto + ":" + segundo;
    return setTimeout(contadorTiempo, 1000);
  }
  
  console.log(contadorTiempo())