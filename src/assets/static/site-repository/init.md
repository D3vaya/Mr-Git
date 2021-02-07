## <img src="assets/static/images/lanzamiento.svg" alt="lanzamiento de cohete" height="50"/> **git init**

Este comando suele ser el primero que una ejecuta al comenzar a trbaajr y es el punta pie inicial en este juego. Git init crea un repositorio vacio de nuestro codigo para que podamos comenzar a crear nuestra idea billonaria 🤑. Lo que ocurre internamente es que se crea un directorio en nuestra carpeta de trabajo llamada .git/. En esta se encuentra todos los metadatos con los que trabaja esta git.

Solo basta con escribir el comando.

```bash

$ git init

Inicializado repositorio Git vacío en /ruta/dela/carpetadelproyecto/proyecto/.git/


```

## <div class="mt-4 mb-3"> <img src="assets/static/images/lanzamiento.svg" alt="lanzamiento de cohete" height="50" /> **git init != git clone**

</div>

Hay programadores que confunden estos comandos. Ambos sirven para inicializar repositorios de git. Pero la direncia es que **git clone** depende de **git init** para genera un repositorio nuevo. Despues de esto, lo que hace **git clone** es copiar los datos del repositorio existente y clona en tu directorio seleccionado.

<center>
<img class="mb-3" src="assets/static/images/pera.svg" alt="lanzamiento de cohete" height="100" />
<img class="mb-3" src="assets/static/images/manzana.svg" alt="lanzamiento de cohete" height="100" />
</center>

Pero debemos entender que **git init** no solo nos sirve para comenzar a codear desde 0. Tambien nos sirve para iniciar un repositorio desde una base de codigo ya establecida. Solo debes iniciar el repositiorio con git init y luego agregar los archivos al dicho repositorio y confirmar los cambios

`En este ejemplo veras comandos aun no explicados, pero tranquilo. Ya llegaremos a ese punto.`

```bash
$ cd /path/folder/
$ git init
$ git add
$ git commit

```

<center>
<img class="mb-3" src="assets/static/images/feliz.svg" alt="lanzamiento de cohete" height="100" />
</center>

Como pudiste ver, git init es un comando sencillo y muy facil de entender. En el siguiente capitulo analizaremos a su hermano mellizo, **git clone**.
