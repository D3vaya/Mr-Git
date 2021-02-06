<center>
<img src="assets/static/images/carpeta.svg" class="mb-4" loading="lazy" alt="logo git" height="100"/>
<sub>versión final</sub>
<img src="assets/static/images/carpeta.svg" class="mb-4" loading="lazy" alt="logo git" height="100"/>
<sub>versión final final</sub>
<img src="assets/static/images/carpeta.svg" class="mb-4" loading="lazy" alt="logo git" height="100"/>
<sub>versión final final ahora si !</sub>
</center>

¿Entiendes todo lo que sufrieron en esos años?. Pero gracias a **Linus Torvalds** este sufrimiento ya no existe. ¿Te sono familiar **Linus Torvalds**?. Si la respuesta es si, es dado que es el mismo creador del kernel de **linux**. Si, el mismo sistema operativo que usa un gran porcentaje de los desarrolladores del mundo y tambien es la tecnologia que soporta todas las aplicaciones que usas dia a dia.

# <center> Gracias tio Linus 😎</center>

<center>
<img src="assets/static/images/tio_linus.jpeg" class="mb-4 mt-4" loading="lazy" alt="logo git" height="250"/>
</center>

**`Importante veremos comandos de git que aún no sabras que hacen, pero no te preocupes, recuerda que esta es una introducción para que entiendas superficialmente en que nos puede ayudar git en nuestro dia a dia`**

Dicho esto, continuemos. Entonces y, para dejarlo mas claro, te explicare con detalle y de forma amigable como trabaja git y como nos ayuda en nuestro dia a dia como desarrolladores de software.
Imagina que estas desarrollando el sitio web de tu portafolio y como es logico, comienzas con la semantica **html** de tu sitio, por lo cual partes creando tu **index.html** y agregas ahí la estructura de tu portafolio web

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Mi Portafolio</title>
  </head>
  <body>
    <div class="container">
      <div class="card">
        <h1>Bienvenidos a mi espectacular portafolio</h1>
        <div class="container-emoji">
          <h3>Hola Soy Pepito 😘</h3>
        </div>
      </div>
    </div>
  </body>
</html>
```

<center>
<img src="assets/static/images/captura-portafolio.png" class="mb-4 mt-4" loading="lazy" alt="captura web" height="114"/>
</center>

Automaticamente git guarda los cambios de tu archivo html y te informa que puedes confirmar dichos cambios para genera un punto en el tiempo. A eso en el mundo de **git** se le llama **commit**. Tranquilo... ya llegaremos a ese punto(😘), pero si eres un pro del versionamiento y solo necesitas refrescar tu memoria, puedes ir directamente a la sección **Menu > Comandos básicos > Commit**.
Entonces, una vez hayamos confirmado el cambio(**commit**) se generará un punto en el tiempo en el código de nuestro proyecto, y asi susesivamente con cada cambio y confirmación que realicemos.

<center>
<img src="assets/static/images/commit-ejemplo.svg" class="mb-4 mt-4" loading="lazy" alt="captura web" height="214"/>
</center>

Ahora, si dejamos nuestro portafolio asi, claramente no seremos considerado como **Pro FrontEnd**. Apliquemos un poco de estilo a nuestro portafolio creando nuestro archivo de css **style.css**

```css
body {
  background-color: antiquewhite;
}
.container {
  padding: 1em;
  align-items: center;
}
.container h1 {
  color: deeppink;
}
.card {
  background-color: #fff;
  border-radius: 10px;
  padding: 1em;
  text-align: center;
}
```

Agregamos la referencia de nuestro **style.css** a nuestro archivo **index.html** y vemos que ha mejorado a tal nivel que nos lloveran las ofertas para startups de silicon valley.

<center>
<img src="assets/static/images/mentiroso.svg" class="mt-1" alt="logo git" height="100"/>
</center>

```html
<link rel="stylesheet" href="css/style.css" />
```

<center>
<img src="assets/static/images/portafolio-profesional.png" class="mt-1 mb-4" alt="logo git" height="153"/>
</center>

Aca es donde git aplica toda su magia, automaticamente detecta 2 cosas. La primera, es que sabe que creamos un archivo **style.css**, y la segunda es que detecta cambios en nuestro archivo **index.html**, esto debido a que anteriormente ya habiamos versionado nuestro archivo, por lo cual git esta monitoreando en todo momento cada archivo en nuestro repositorio.

## <img src="assets/static/images/terminal.svg" class="mt-1" alt="logo git" height="40"/> git

el comando `git` es el punto de entrada para comenzar a trabajar con esta tecnologia, y este nos entrega una gran cantidad de opciones muy utiles que estaremos viendo.

```shell
git [--version] [--help] [-C <ruta>] [-c <nombre> = <valor>]
    [--exec-path [= <path>]] [--html-path] [--man-path] [--info-path]
    [-p | --paginate | -P | --no-pager] [--no-reemplazar-objetos] [--bare]
    [--git-dir = <ruta>] [--work-tree = <ruta>] [--namespace = <nombre>]
    [--super-prefix = <ruta>]
    <comando> [<args>]
```

# <img src="assets/static/images/opciones.svg" loading="lazy" class="mt-3" alt="logo git" height="70"/> Opciones

veremos comandos como --version y --help que nos ayudaran cuando andamos super perdidos <img src="assets/static/images/perdio.svg" loading="lazy" alt="logo git" height="50"/>

#### <img src="assets/static/images/terminal.svg" loading="lazy" alt="logo git" height="50"/> --version

imprime la versión actual de **Git** que tienes instalada en tu pc.

```shell
git --version

git version 2.29.0
```
