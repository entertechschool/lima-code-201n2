# Laboratorio: Odd Duck Products

Lee el documento por completo antes de comenzar con el trabajo del laboratorio. Para ver esta tarea de laboratorio en su propia pestaña, haz click [AQUÍ](https://entertechschool.github.io/code-201-guide/curriculum/class-11/lab/){:target="_blank"}

## Descripción del problema

Odd Duck Product Co está tratando de decidir en qué proyecto de su departamento I+D debería invertir a continuación para vender. Te pidieron crear una página web que puedan ejecutar en un kiosco en la entrada principal de su campus. Cuando un empleado pase por ahí, puede votar por 1 de 3 productos mostrados que crea que debe ser el siguiente producto en salir al mercado. Después de recolectar los datos, les gustaría unos buenos gráficos para visualizar los resultados.

Para que este proyecto de recolección de datos sea efectivo, Odd Duck quiere que construyas una app que muestre tres productos potenciales uno al lado del otro sin que se favorezca un producto en particular. Necesitarás destionar el tamaño y relación de aspecto de las imágenes.

Ya que el propósito de la app es que los miembros del personal escojan qué producto, de las 3 imágenes mostradas, estarían más interesados en ver como una nueva creación, necesitarás almacenar cada voto anónimo, calcular el total y mostrar los resultados.

Para que el proceso de selección del producto sea lo más imparcial posible, te han indicado que no permitas que los resultados se muestren a los usuarios hasta que haya un total de 25 selecciones.

El equipo de marketing no solo está interesado en el número total de clicks, sino también en el porcentaje de veces que un elemento ha sido elegido cuando se ha mostrado. Así que también necesitarás dar seguimiento de la cantidad de veces que cada imagen se ha mostrado y hacer los cálculos.

También eres responsable del aspecto y estilo de la app, así que no te olvides de aplicar una fuente personalizada, paleta de colores, layout con HTML semántico, etc.

## Historias de usuario

Las historias de usuario son un recurso utlizado para identificar cuáles deben ser las funcionalidades y el diseño de un producto considerando los intereses y motivaciones de personas con distintos puntos de vista. Se presentan de la siguiente forma:

> Como un(a) _____, quiero _____, para que ____

Este layout permite que un cliente le indique a un equipo el tipo de interacción que está esperando y permite que el equipo desarrollador piense en una solución que se acomode a las necesidades del cliente.

El equipo desarrollador creará una categoría llamada *__Tareas de funcionalidad__* las cuales son tareas individuales que deberán ser completadas por el desarrollador para completar la historia del usuario. Una vez se hayan completado las tareas de un usuario individual, también se completa la historia del usuario. 

A continuación se encuentran los requisitos para el laboratorio en este formato. Piensa en cuáles serían las tareas de funcionalidad para cada historia, una vez que termines, o te atasques, revisa la tarea proporcionada para ver cuáles son las tareas reales para cada historia.

## Instrucciones

1. Como usuario, me gustaría mostrar tres productos únicos al azar para que los espectadores puedan escoger un favorito.

    - Crea una función constructora que cree un objeto asociado con cada producto, y que tenga las siguientes características:
        1. Nombre del producto
        1. Ruta de la imagen
        1. Veces que la imagen ha sido mostrada

    - Crea un algoritmo que genere al azar tres imágenes únicas de productos desde el directorio de las imágenes y muéstralas una al lado de la otra en la ventana del navegador. 

    - Por cada una de las tres imágenes, incrementa la propiedad de veces en la que se ha mostrado en uno.

    - Añade un event listener a la sección de la página HTML en donde se van a mostrar las imágenes.

    - Una vez que los usuarios hagan 'click' a un producto, genera tres nuevos productos para que el usuario escoja.

1. Como usuario, me gustaría monitorear las selecciones hechas por los espectadores para así poder determinar con qué productos comienzo la producción.
    - En la función constructora, define una propiedad que tenga el número de veces que un producto ha sido seleccionado.

    - Después de cada selección hecha por el usuario, actualiza la propiedad recién añadida para que se refleje si se le ha dado click.

1. Como usuario, me gustaría controlar el número de rondas que se le presenta a un usuario para que pueda controlar la duración de la votación.
    - Por defecto, se le presenta el usuario 25 rondas de votos antes de terminar la sesión.
    - Almacena el número de rondas en una variable que permita que el número sea cambiado fácilmente para propósitos de depuración y pruebas.

1. Como usuario, me gustaría ver un informe de los resultados después de que todas las rondas de votos hayan terminado para que pueda evaluar qué productos fueron los más populares.
    - Crea una propiedad adjunta a la función constructora que le dé seguimiento a todos los productos que están siendo considerados.

    - Una vez que las rondas de votos se hayan terminado, elimina los event listeners del producto.

    - Añade un botón con el texto `Ver Resultados`, y que cuando se le haga click muestre todos los productos seguido de los votos recibidos y el número de veces que se ha visto cada uno. Ejemplo: `plátano tiene 3 votos, y se ha visto 5 veces.`
      - > NOTA: Los nombre de los productos mostrados deben coincidir con el nombre del archivo del producto. Ejemplo: el producto representado con `dog-duck.jpg` se debe mostrar al usuario exactamente como "dog-duck" cuando se muestren los resultados.

1. Utilizando Lighthouse en las Herramientas para desarrolladores de Chrome, analiza la accesibilidad de tu aplicación.

    - En este módulo, intenta obtener una puntuación mayor a 80. Haz los ajustes necesarios en base al informe para obtener esa puntuación.
    - Añade una captura de pantalla de tu puntuación a tu archivo README.md.

### Logros Adicionales

- Gestiona la visualización y votación de un número arbitrario de imágenes.
- Utilizando una variable, declara en tu JS cuántas imágenes se van a mostrar.
- En base a ese valor, crea de forma dinámica ese mismo número de etiquetas ```<img>```
- También, en base a ese valor, asegúrate de que tu selector aleatorio esté gestionando apropiadamente el número específico de imágenes que se van a mostrar y el seguimiento de repeticiones.

## Recursos

Los assets para este laboratorio se pueden encontrar en tu carpeta `class11/lab/assets` de tu repositorio diario de la clase.

En tu repositorio de la clase está un wireframe sugerido para seguir mientras construyes tu aplicación de Odd Duck Products.

### Guía de estilo de desarrollo

- Crea un nuevo repositorio para este proyecto multi-labotatorio llamado `odd-duck`.

- Estructura tu repositorio con los archivos usuales README, CSS, JS, y HTML, además de un directorio `img/`.

- Incluye en tu repositorio un archivo `.eslintrc.json` cuyos contenidos sean copiados del archivo `eslintrc.json` en el repositorio de la clase.

-Extrae los assets del directorio `assets/` y colócales en tu directorio de imágenes.

- Haz el trabajo de hoy en una rama llamada `lab11`.

Esta es una tarea individual por hoy, pero tienen permitido colaborar con sus compañeros si quieren. Solo asegúrense de que si lo hacen, anoten la colaboración en su archivo README. 

## Instrucciones de envío

1. Cuando tu trabajo esté terminado y listo para enviarse, abre un Pull Request de tu rama actual hacia `main`.
1. Envía el link de la Pull request anteriormente mencionada a Canvas.
1. Añade un comentario al envío de Canvas con respuestas a las siguientes preguntas.
    - ¿Cómo te fue, en general?
    - ¿Qué observaciones o preguntas tienes acerca de lo que hemos aprendido hasta ahora?
    - ¿Cuánto tiempo te tomó terminar esta tarea? Y, antes de que comenzaras, ¿cuánto tiempo creiste que te tomaría terminar esta tarea?
1. Completa el merge de tu rama actual a `main`.
1. Una vez que hayas completado tu merge, despliega tu repositorio de GitHub utilizando [Github Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site){:  target="_blank"}. Envía el enlace a tu repositorio de GitHub para este proyecto.
