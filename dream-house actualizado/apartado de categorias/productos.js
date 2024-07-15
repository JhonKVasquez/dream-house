const elements = {
    mostrador: document.getElementById("mostrador"),
    seleccion: document.getElementById("seleccion"),
    imgSeleccionada: document.getElementById("img"),
    modeloSeleccionado: document.getElementById("modelo"),
    descripSeleccionada: document.getElementById("descripcion"),
    precioSeleccionado: document.getElementById("precio"),
  };
  
  function cargar(item) {
    quitarBordes();
    elements.mostrador.style.width = "60%";
    elements.seleccion.style.width = "40%";
    elements.seleccion.style.opacity = "1";
    item.style.border = "2px solid red";
  
    elements.imgSeleccionada.src = item.querySelector("img").src;
    elements.modeloSeleccionado.innerHTML = item.querySelector("p").innerHTML;
    elements.descripSeleccionada.innerHTML = "Descripción del modelo ";
    elements.precioSeleccionado.innerHTML = item.querySelector("span").innerHTML;
  }
  
  function cerrar() {
    elements.mostrador.style.width = "100%";
    elements.seleccion.style.width = "0%";
    elements.seleccion.style.opacity = "0";
    quitarBordes();
  }
  
  function quitarBordes() {
    document.querySelectorAll(".item").forEach((item) => {
      item.style.border = "none";
    });
  }
