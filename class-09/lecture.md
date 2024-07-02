# Formularios en HTML y Events en JS

## Revision de la clase anterior

- Intepretar el codigo
- Probando por partes el uso de las instancias
- Manejo del DOM

## Estructura de un formulario en HTML

- Etiqueta principal de un formulario: `<form></form>`
- Recuerden que tener una semantica correcta en nuestra web ayudar mucho al SEO y a la accesibilidad de esta.
- Etiqeta usamos para poder recolectar data del usuario `<input />`
- Los `form` tienen ciertas validaciones, pero ojo estas solo funcionan cuando enviamos la información.
- Aumenta la interactividad con el usuario.
- Podemos usar los formularios para poder obtener la data de los usuarios.
- El boton que permite poder enviar la data de los formulario es el que tenga el tipo `submit`

### Tipos de la etiqueta input:

- text
- email
- password
- number
- checkbox
- radio
- submit

```html
<input type='text' />
<input type='email' />
<input type='password' />
<input type='number' />
<input type='checkbox' />
<input type='radio' />
<input type='submit' />
```

- Si queremos una opción mas custom para nuestro boton, recordemos que la etiqueta `button` tiene la opción de ser `type='submit`

```html
<form>
    <input type='text' placeholder='Nombre' />
    <input type='email' placeholder='Correo' />
    <input type='password' placeholder='Contraseña' />
    <button type='submit'>Enviar datos</button>
</form>
```

```html
<form action="url" method="post">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <button type="submit">Enviar</button>
</form>
```

Ejercicio: Formulario para adoptar a una mascota

## Eventos en JavaScript

- El evento más comun que hace un usuario es el clic (click)
- Todas las etiquetas de HTML tiene la posibilidad de tener el evento click
- Hay eventos que son especificos como por ejemplo: el evento `submit`, para poder usar el evento `submit` requerimos estar dentro de un `form`

## Conclusiones
