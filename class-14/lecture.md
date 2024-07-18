# CSS Transform, Transition, Animation y JS Reinstansación

## Transform

¿ Qué es `transform` ?

Es una proiedad de CSS la cual, nos permite manipular los elememtos de nuestro HTML

### Propiedades

- `translate(x, y)`: Mueve un elemento en el eje X y Y.
- `rotate(deg/rad/turn)`: Rota un elemento. 1turn = 360deg
- `scale(x, y)`: Escala un elemento.
- `skew(x-angle, y-angle)`: Deforma un elemento.

### Ejemplo

```css
.box {
  transform: translate(50px, 50px) rotate(45deg) scale(1.5) skew(10deg, 10deg);
}
```

## Transition

¿Qué propiedad CSS usarías para crear una transición suave en el cambio de color de fondo de un elemento?

- transtion: background-color

¿Qué cuatro propiedades se pueden especificar en transition?

- `transition-property`: Propiedad que se va a animar.
- `transition-duration`: Duración de la animación.
- `transition-timing-function`: Función de tiempo.
- `transition-delay`: Retraso de la animación.
- `transition`: Propiedad abreviada.

## Animation

¿Qué es?

¿Qué propiedad CSS usarías para crear una animación en un elemento?

Ejemplo:

```css
@keyframes example {
  0% {
    background-color: red;
  }
  50% {
    background-color: yellow;
  }
  100% {
    background-color: green;
  }
}

.box {
  animation-name: example;
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```
