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
<img src="assets/static/images/portafolio.svg" class="mb-4 mt-4" loading="lazy" alt="captura web" style="width:100%" height="214"/>
</center>

Automaticamente git guarda los cambios de tu archivo html y te informa que puedes confirmar dichos cambios para genera un punto en el tiempo. A eso en el mundo de **git** se le llama **commit**. Tranquilo... ya llegaremos a ese punto(😘), pero si eres un pro del versionamiento y solo necesitas refrescar tu memoria, puedes ir directamente a la sección **Menu > Comandos básicos > Commit**.
Entonces, una vez hayamos confirmado el cambio(**commit**) se generará un punto en el tiempo en el código de nuestro proyecto, y asi susesivamente con cada cambio y confirmación que realicemos.

<center>
<img src="assets/static/images/commit-ejemplo.svg" class="mb-4 mt-4" loading="lazy" alt="captura web" style="width:100%" height="214"/>
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

Agregamos la referencia de nuestro **style.css** a nuestro archivo **index.html** y vemos que ha mejorado a tal nivel que nos lloveran las ofertas para startups en silicon valley.

<center>
<img src="assets/static/images/mentiroso.svg" class="mt-1" alt="logo git" height="100"/>
</center>

```html
<link rel="stylesheet" href="css/style.css" />
```

<center >
<img src="assets/static/images/portafolio-profesional.svg" class="mt-1 mb-4" alt="logo git" style="width:100%" height="214"/>
</center>

Aca es donde git aplica toda su magia, automaticamente detecta 2 cosas. La primera, es que sabe que creamos un archivo **style.css**, y la segunda es que detecta cambios en nuestro archivo **index.html**, esto debido a que anteriormente ya habiamos versionado nuestro archivo, por lo cual git esta monitoreando en todo momento cada archivo en nuestro repositorio.

## <img src="assets/static/images/terminal.svg" class="mt-1" alt="logo git" height="40"/> git
