function Persona(nombre, apellido, edad, direccion) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.direccion = direccion;
}

Persona.prototype.imprimir = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
};

const personas = [];

const btnCrearUsuario = document.getElementById("btnCrearUsuario");
btnCrearUsuario.addEventListener("click", function () {
  const nombre = prompt("Ingrese su nombre");
  const apellido = prompt("Ingrese su apellido");
  const edad = prompt("Ingrese su edad");
  const direccion = prompt("Ingrese su direccion");

  // instancia de la funcion constructora Persona
  const nuevaPersona = new Persona(nombre, apellido, edad, direccion);
  personas.push(nuevaPersona);
});

const btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", function () {
  localStorage.setItem("personas", JSON.stringify(personas));
});

const mostrarInformacion = document.getElementById("mostrarInformacion");
mostrarInformacion.addEventListener("click", function () {
  const personasFromLocalStorage = JSON.parse(localStorage.getItem("personas"));
  // Los objetos cuando se guardan en localStorage pierden lo prototype que aumentamos
  // re instansación
  const persona1 = personasFromLocalStorage[0];
  console.log(persona1.apellido);
  const personaReinstanciada = new Persona(
    persona1.nombre,
    persona1.apellido,
    persona1.edad,
    persona1.direccion
  );
  personaReinstanciada.imprimir();
});
