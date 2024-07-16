# Introducción a la Persistencia con Local Storage

## Review del lab anterior

- Verónica (en progreso)
- Claudio (en progreso)
- Georgina
- Vladimir (en progreso)
- Yulber (en progreso)

## Preguntas

¿Qué es `localStorage` y para qué sirve?

- Para poder guardar información en nuestro navegador (computadora)
- Es una funcion que existe dentro del objeto de `JS` (window)
- Solo permite guardar `strings` (cadenas de texto)
- Cada pagina web puede guardar los valores necesarios en `localStorage`

¿Dónde y cómo se pueden ver los valores almacenados en `localStorage` en el navegador?

- Entrar a las dev tools (herramientas de desarrollo del navegador)
- Ir al tab de application (aplicación)
- Revisar los valores por link

¿Qué función se usa para guardar un valor en `localStorage`?

- Para poder guardar un valor en `localStorage` usaremos el siguiente codigo

```js
// key => Nombre de la variable
// value => El valor de la variable
localStorage.setItem('key', 'value')
localStorage.setItem('nombre_completo', 'Linder Hassinger')
localStorage.setItem('direccion', 'av mi casa 123')
localStorage.setItem('token', '1234asd')

// ojo: RECUERDEN `localStorage` solo guarda `strings`
localStorage.setItem('numeros', [1,2,3,4,5])
localStorage.setItem('persona', {
  nombre: 'Linder',
  apellido: 'Hassinger'
})
```

¿Qué es `JSON.stringify` y `JSON.parse`?

`JSON.stringify`: Permite convertir cualquier tipo de dato a un `JSON string`, permitiendo guardar la información en `localStorage`

```js
localStorage.setItem('numeros', JSON.stringify([1,2,3,4,5]))
```

`JSON.parse`: Va a revertir lo que hizo la funcion `JSON.stringify`, es decir si, pasamos un `object` a un `string` esto hará que el `string` vuelva a ser un `object`

¿Cómo obtener un valor almacenado en `localStorage`?

- Para poder obtener un valor de `localStorage` solo necesitamos saber su key, ejemplo:

```js
localStorage.getItem('key')
localStorage.getItem('nombre_completo') // Linder Hassinger
localStorage.getItem('numeros') // '[1,2,3,4,5]'
localStorage.getItem('persona') // '{"nombre":"Linder","apellido":"Hassinger"}'
// OJO para poder revertir y hacer que persona sea de nuevo un objeto usamos la siguiente funcion:

JSON.parse(localStorage.getItem('persona'))
/*
{
  "nombre": "Linder",
  "apellido": "Hassinger"
}
/*
```

### Nota:

Si queremos acceder a un valor que no existe en `localStorage` este va a retonar

```js
localStorage.getItem('my_password') // null
```

¿Cómo eliminar un valor de `localStorage`?

¿Cómo eliminar todos los valores almacenados en `localStorage`?
