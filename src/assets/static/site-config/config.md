## <img src="assets/static/images/terminal.svg" alt="logo git" height="40"/> **git config**

El comando **git config** nos ayuda como su nombre dice, a establecer la configuración especifica del usuario, como el email, el correo de contacto, el nombre de usuario y su formato a mostrar en los cambios(**commit**) que dejen en el repositorio. **¿Estas pensando lo mismo que yo?** ... es la configuración que nos acusa cuando la cagamos 🤡🤡.

<div class="col-12 mb-4 mt-4">
<center>
<img src="assets/static/images/nervioso.svg" alt="hombre nervioso" height="100"/>
<img src="assets/static/images/error.svg" alt="un error" height="100"/>
<img src="assets/static/images/caca.svg" alt="caca" height="100"/>
</center>
</div>

## <img src="assets/static/images/terminal.svg" alt="logo git" height="40"/> **Veamoslo en acción**

Te mostrare la forma de configurar nuestros datos de usario en la terminal, asi cuando hagamos/subamos nuestros cambios figuren tus datos(💀💀💀).

Para configurar nuestro nombre de usuario, esta el siguiente comando:

```shell
git config --global user.name "Juanito"

```

Tambien debemos configurar nuestro correo electronico, asi nos mandaran las felicitaciones personalmente cuando vean nuestros cambios 🙈🙈.

```shell
git config --global user.email "juanito.dev@dev.com"

```

Para validar que configuramos correctamente nuestros datos en git, podemos utilizar el comando:  
**git config --list**

```shell
git config --list

user.name=Juanito
user.email=juanito.dev@dev.com
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto
...
```

Como te puedes dar cuenta, son muchas las configuraciones que puedes realizar, pero las que te deje, son las mas **"relevantes"**.

<center>
  <img src="assets/static/images/mentiroso.svg" alt="logo git" height="150"/> 
</center>
