# POO (Programación Orientada a Objetos)

## Funciones constructoras

```js
const carro = {
  marca: 'Jeep',
  modelo: 'Compass',
  imprimir: function () {
    return this.marca + " - " + this.modelo
  }
}
```

### Funcion contructora

```js
function Persona(nombre, apellido, edad, correo) {
  // this.name = variable
  // nombre = Es el valor que recibimos por parametros
  this.name = nombre
  this.lastname = apellido
  this.age = edad
  this.email = correo
}
```

¿Qué es una función constructora en JavaScript y para qué se utiliza?

- Permite crear objetos en JavaScript, estos objetos puede tener propiedades

- ¿Cómo se crea una instancia de un objeto utilizando una función constructora?

- Una instancia nos permite crear un objeto basados en una función constructora

```js
const persona1 = new Persona('Pepe', 'Zapata', 19, 'pepe@gmail.com')
const persona2 = new Persona('Jaun', 'Perez', 34, 'juan@gmail.com')
```

¿Qué diferencia hay entre una función constructora y una función regular?

- En una funcion constructora usamos this para asignar valores
- El nombre de la funcion constructora inicia con Mayuscula
- En una funcion constructora no hay return
- Una funcion constructora no necesita acabar en un verbo infinitivo

## Prototipos

¿Qué es un prototipo en JavaScript?

- Es la forma en la que podemos agregar funciones a nuestra funcion constructora

¿Cómo se añade un método al prototipo de una función constructora?

- Para agregar una funcion a una function constructora vamos a hacer lo siguiente:

```js
Persona.prototype.calcularFechaDeNacimiento = function () {
  // como estamos dentro de Persona podemos acceder a sus propiedades
  console.log(this.name)
  console.log(this.age)
}
```

Cuando agregamos una `function` usando `prototype` todos los objetos la van a heredar

## HTML - Tables

¿Qué es una tabla en HTML?

- Una forma de representar objetos
- Puede usarse para visualizar los datos de objetos
- Puede ser alimentando en base a datos dinamicos
- Esta compuesto por filas y columnas, también tiene una cabecera
- Es una tag (etiqueta) de HTML la cual esta compuesta por diferentes partes

¿Cómo se crea una tabla en HTML?

```html
<table>
  <thead>
    <tr>
      <th>titulo de la cabecera</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>columana</td>
    </tr>
     <tr>
      <td>columana</td>
    </tr>
     <tr>
      <td>columana</td>
    </tr>
     <tr>
      <td>columana</td>
    </tr>
  </tbody>
</table>
```
