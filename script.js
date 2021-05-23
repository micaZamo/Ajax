const btnCarga = document.getElementById("btn-carga");
const fechaElegida = document.getElementById("elegir-fecha");
const titulo = document.getElementById("titulo");
const fecha = document.getElementById("fecha");
const detalle = document.getElementById("detalle");
const imagen = document.getElementById("imagen");
const divContenido = document.getElementById("div-contenido");
//Envia un request GET a la api de la nasa
btnCarga.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  divContenido.classList.toggle("contenido");

  xhr.addEventListener("load", function () {
    const response = JSON.parse(xhr.responseText); //convierto el json en objeto y me traigo la respuesta
    //le paso el contenido a los elementos creados en el div
    titulo.textContent = response.title;
    fecha.textContent = response.date;
    detalle.textContent = response.explanation;
    imagen.src = response.url;
  });

  xhr.open(
    "GET",
    `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${fechaElegida.value}`
  );
  xhr.send(); //realiza la consulta del objeto
});
