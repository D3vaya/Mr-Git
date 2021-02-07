## <img src="assets/static/images/error-informatico.svg" alt="error informatico" height="40"/> **git bugreport**

Este comando extremadamente util pero relativamente "nuevo", nos entrega un informe de error con mucha información relevante del sistema, como la **CPU** o versión de git que se esta ejecutando. Cuando ejecute **git bugreport** se abrira el editor predeterminado de su sistema con una especie de formulario con preguntas predeterminadas sobre el error. Asi podrá depurar con mayor facilidad el inconveniente. Cuando termine de llenar este **"formulario"** de depuración de error, podrá envíar de la forma que estime conveniente este archivo a la lista de correo de GIT o donde se le apetezca. Es realmente util este archivo. Te dejo la salida de cuando generas un bugreport.

```bash
$ git bugreport

!Gracias por prepara un reporte de bug de Git!
Por favor responde las siguientes preguntas para ayudarnos a entender el problema.

¿Qué hiciste antes de que sucediera el bug? (Pasos para reproducir el problema)

¿Qué esperabas que sucediera? (Comportamiento esperado)

¿Qué sucedio en lugar de eso? (Comportamiento real)

¿Qué es diferente entre lo que esperabas y lo que pasó?

Cualquier cosa que quieras agregar:

Por favor revisa el resto del reporte abajo.
Puedes borrar cualquier línea que no desees compartir.


[Información del sistema]
versión de git:
"~/MiPc/CarpetaProyecto/NombreProyecto/git-bugreport-2021-02-07-0023.txt" 32L, 1002C
```

>

<center>
<img src="assets/static/images/bug.svg" alt="boya salvavidas" height="100" class="mb-2"/>

#### Un comando poco usado, pero que siempre tenemos que tener en cuenta.

</center>
