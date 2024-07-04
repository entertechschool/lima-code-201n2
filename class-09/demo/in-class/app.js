"use strict";

// // Usamos el for para poder hacer iteraciones
// for (let i = 0; i <= 12; i++) {
//   console.log(`============INICIO DE VUELTA ${i}=============`);
//   // cuantas veces aparece este for: 13
//   // este segundo for cuantas veces se hará?
//   for (let j = 0; j <= 12; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log(`============FIN DE VUELTA ${i}============`);
// }

function DatosDeAdopcion(
  nombreMascota,
  tipoMascota,
  raza,
  edadMascota,
  generoMascota,
  documentNumber,
  documentType,
  nombrePersona
) {
  this.nombreMascota = nombreMascota;
  this.tipoMascota = tipoMascota;
  this.raza = raza;
  this.edadMascota = edadMascota;
  this.generoMascota = generoMascota;
  this.documentNumber = documentNumber;
  this.documentType = documentType;
  this.nombrePersona = nombrePersona;
}

const adopciones = [];

const formAdopcion = document.getElementById("form-adopcion");
// podemos captar cuando el form sea enviado y evitar que la web se recargue
// que evento usan los formularios? submit
formAdopcion.addEventListener("submit", function (event) {
  // event contiene toda la información del formulario como también contiene
  // funciones de este, donde una de esas funciones me permite evitar
  // que al hacer submit la web se recargue
  // preventDefault()
  event.preventDefault();
  const adopcion = new DatosDeAdopcion();
  //event.target es un array que contiene todos los elementos de nuestro formulario
  for (let i = 0; i < event.target.length; i++) {
    // console.log(typeof event.target[i].name);
    // Si name no es vacio entonces imprime en consola el valor
    // sql: <>
    if (event.target[i].name !== "") {
      // datosDeAdopcion[event.target[i].name] = event.target[i].value;
      adopcion[event.target[i].name] = event.target[i].value;
      console.log(event.target[i].name);
    }
  }
  adopciones.push(adopcion);
});

const btnTest = document.getElementById("btn-test");
btnTest.addEventListener("click", function () {
  alert("Estamos probando el evento click");
});
