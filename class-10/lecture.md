# Depuración en JS y más CSS: Layout

Revisión del lab anterior

- El poder insertar HTML desde JS
- `submit` El evento `submit` lo usamos para poder enviar datos de un formulario `form`
- Existe una funcion que evitar que al hacer `submit` el navegar se recargue: `preventDefault()`
- `click` Todas las etiquetas de HTML tienen acceso al evento `click`

¿Qué entienden por depuración en el contexto de la programación?

- Posible busqueda de algunos errores
- Limpiar el codigo para hacerlo más claro
- Eliminar codigo innecesario

## Error de sintaxis:

- Cuando el código esta mal escrito
- Omisión de una letra o símbolo
- Posibles error en operadores

```js
// fala la t
cons n1 = 10
// fala la t
funcion saludar(nombre) {
  return 'Hola' + nombre
}

// El operador de comparación esta mal asignado
if (n1 = n2) {}

// Los for siempre usan ;
for (let i = 0; i < 10, i++) {}
```

## Errores lógicos

- Por ejemplo un blucle infinito `while(true)`
- El codigo aparentemento pero no funciona como se esperaba
- Otro ejemplo tratar de convertir una palabra a `number`

`console.log` vs debugger

- El debugger nos da una referencia al error
- El `console.log` podría traer problemas de seguridad

- limitaciones de `console.log`

- `debugger` y `breakpoints`

## CSS: Layout

¿Qué es Flex?

- Es un sistema que permite manejar los elementos de la web tanto en vertical como en horizontal
- Nos ayuda a manipular los elemento de manera independiente
- Permite manejar los elementos en las posiciones x,y

¿Qué es Grid?

- Manejar los elemenos de forma bidireccional, es decir en grillas (cuadriculas)

¿Qué es responsive design? (diseño responsivo)

- El diseño de la web se adapte a cualquier tamaño de dispositivo
- Existen tamaños standard para poder trabajar
- Podemos usar la herramienta de nuestra navegador para poder simular diferente tamaños
