// localStorage.setItem('numeros', [1,2,3,4,5])
// localStorage.setItem('persona', {
//   nombre: 'Linder',
//   apellido: 'Hassinger'
// })
localStorage.setItem("numeros", JSON.stringify([1, 2, 3, 4, 5]));
localStorage.setItem(
  "persona",
  JSON.stringify({
    nombre: "Linder",
    apellido: "Hassinger",
  })
);
localStorage.setItem("es_mayor_de_edad", JSON.stringify(true));
// Para guardar un string no hace falta usar JSON.stringify
localStorage.setItem("nombre_completo", "Linder Hassinger");
