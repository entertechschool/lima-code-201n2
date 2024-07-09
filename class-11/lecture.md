# Audio y Video en HTML

## Review de Salmon Cookies

- Jessica (en progreso)
- Yulber (en progreso) - casi terminado
- David (en progreso)
- Claudio (en progreso) - casi terminado
- Vladimir (en progreso)
- Verónica (en progreso) - casi terminado
- Georgina

## Audio y Video

¿Cuál es la etiqueta HTML para incrustar audio en una página web?

```html
<audio></audio>
```

¿Qué atributo se utiliza en la etiqueta `<audio>` para añadir controles de reproducción?

```html
<audio controls src=''></audio>
```

- La interface del componente `audio` varia segun el navegador que usemos
- Los audios pueden tener diferentes extensiones (.mp3, .trf, .ogg, .mp4)
- Algunas extensiones no son campatibles con los navegadores

¿Cuál es la etiqueta HTML para incrustar video en una página web?

```html
<video controls src=''></video>
```

¿Qué atributo se utiliza en la etiqueta `<video>` para especificar el ancho del reproductor de video?

```html
<video controls src='' width='300'></video>
```

### Atributos

- controls: Permite mostrar los controles de audio y video
- src: Permite colocar la dirección del auido y/o video la cual puede ser local o externa
- muted: Silencia el audio y/o video por defecto
- autoplay: Cuando ingresamos a la web el video y/o audio se reproduce de forma automatica

¿Cuál es el propósito de incluir múltiples etiquetas `<source>` dentro de las etiquetas `<audio>` y/o `<video>`?

- Para tener diferentes alternativa de compatibilidad sea con audio y/o video
- Por que algunos navegadores no soportan ciertos formar de audio y/o video
- Mejora el SEO ya que estamos haciendo que nuestra web sea compatible con la mayoría de navegadores
- Se puede personalizar que tipo de audio y/o video manejar en la web

## Grid

¿Qué valor debe tener la propiedad display para usar CSS Grid?

```css
div {
  display: grid;
}
```

¿Cómo defines el tamaño de las columnas en un contenedor grid?

```css
div {
  display: grid;
  grid-template-columns: 100px
}
```

¿Cómo defines el tamaño de las filas en un contenedor grid?

```css
div {
  display: grid;
  /* columns */
  grid-template-columns: 100px;
  /* rows */
  grid-template-rows: repeat(2, 100px);
}
```

`repeat`: Es una función que recibe 2 parametros, donde el primero es la cantidad de veces que se repite y el segundo es el tamaño (unidad de medida)

¿Qué propiedad de CSS se utiliza para definir el espacio entre las filas y columnas de un contenedor grid?

Usamos gap para poder tener un espacio entre cada elemento
`gap: 20px`
