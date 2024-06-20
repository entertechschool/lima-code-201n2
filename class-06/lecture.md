# El DOM, Modelos de dominio e Introducción a los objetos

## ¿Qué es un objeto?

- Algo que pueda ser representando por medio de caracteristicas y comportamientos o que tenga una funcionalidad
- Es una entidada que contiene caracteristicas y funciones
- Una forma de categorizar elementos similares, dandoles diferencias pequeñas
- Hay 2 formas de crear objetos
  - Objetos literal (hoy)
  - Creando Class (clases)

```js
// Esto es un objeto literal
const persona = {
  nombre: 'Linder',
  apellido: 'Hassinger',
  dni: 888888,
  edad: 99,
  nacionalidad: 'Peruano',
  profesion: 'Programador',
  trabajar: function () {
    return 'Yo trabajo en VML y EnterTech'
  },
  ejecitar: function () {
    return 'Ir al gym todo los dias'
  },
  frameworksFavoritos: {
    js: ['React', 'Next', 'Remix'],
    php: ['Laravel', 'Cake']
  }
}
```

- La estructura de un objeto (object) siempre esta compuesta por `clave (key)` => `valor (value)`

```js
console.log(typeof persona) => 'object'
```

## ¿Qué es el DOM?

- Document Object Model
- Usan el object `document` para acceder a todas las funciones y caracteristicas
- Nos da acceso a todas la funciones que existen atravez del `document`

## Ejemplo del monitor (abstracción):

- Marca
- Pulgadas
- Resolución
- Tipo de conectores (HDMI - VGA - Tipo C)
- Frecuencia de refresco 140Hz - 60Hz
- Nits (Intencidad del brillo)
- Forma (Curvos - Ultrawide)

### Métodos del monitor:

- subirBrillo()
- encenderMonitor()
- apagarMonitor()
- visualizarLaUI()
- subirVolumen()
- bajarVolumen()
- tocarPantalla() (touch)
- calibrarColores()
