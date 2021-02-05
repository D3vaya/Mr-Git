## Que es <img src="assets/img/bg/git-logo.svg" alt="logo git" height="30"/>

Git es un sistema de control de revisión distribuido, rápido y escalable con un conjunto de comandos inusualmente rico que proporciona tanto operaciones de alto nivel como acceso completo a los componentes internos.

Consulte gittutorial [7] para comenzar, luego consulte giteveryday [7] para obtener un conjunto mínimo de comandos útiles. El Manual del usuario de Git tiene una introducción más detallada.

Después de dominar los conceptos básicos, puede volver a esta página para aprender qué comandos ofrece Git. Puede obtener más información sobre los comandos individuales de Git con "git help command". La página de manual de gitcli [7] le brinda una descripción general de la sintaxis de comandos de la línea de comandos.

<center>
<img src="assets/static/images/supervision.svg" alt="logo git" height="150"/>
</center>

## El comando <img src="assets/img/bg/git-logo.svg" alt="logo git" height="40"/>

el comando `git` es el punto de entrada para comenzar a trabajar con esta tecnologia, y este nos entrega una gran cantidad de opciones muy utiles que estaremos viendo.

```shell
git [--version] [--help] [-C <ruta>] [-c <nombre> = <valor>]
    [--exec-path [= <path>]] [--html-path] [--man-path] [--info-path]
    [-p | --paginate | -P | --no-pager] [--no-reemplazar-objetos] [--bare]
    [--git-dir = <ruta>] [--work-tree = <ruta>] [--namespace = <nombre>]
    [--super-prefix = <ruta>]
    <comando> [<args>]
```

# <img src="assets/static/images/opciones.svg" alt="logo git" height="70"/> Opciones

veremos comandos como --version y --help que nos ayudaran cuando andamos super perdidos <img src="assets/static/images/perdio.svg" alt="logo git" height="50"/>

#### <img src="assets/static/images/terminal.svg" alt="logo git" height="50"/> --version

imprime la versión actual de **Git** que tienes instalada en tu pc.

```shell
git --version

git version 2.29.0
```

#### <img src="assets/static/images/boya-salvavidas.svg" alt="logo git" height="50"/> --help

imprime el detalle del comando y una lista de opciones(**comandos**) normalmente utilizados.

```shell
git --help

- Estos son comandos comunes de Git usados en varias situaciones:

- comienza un area de trabajo (ver tambien: git help tutorial)
  - clone             Clona un repositorio dentro de un nuevo directorio
  - init              Crea un repositorio de Git vacio o reinicia el que ya existe

- trabaja en los cambios actuales (ver tambien: git help everyday)
  - add               Agrega contenido de carpetas al indice
  - mv                Mueve o cambia el nombre a archivos, directorios o enlaces simbolicos
  - restore           Restaurar archivos de arboles de trabajo
  - rm                Borra archivos del arbol de trabajo y del indice
  - sparse-checkout   Inicializa y modifica el sparse-checkout

- examina el historial y el estado (ver tambien: git help revisions)
  - bisect            Use la busqueda binaria para encontrar el commit que introdujo el bug
  - diff              Muestra los cambios entre commits, commit y arbol de trabajo, etc
  - grep              Imprime las lineas que concuerdan con el patron
  - log               Muestra los logs de los commits
  - show              Muestra varios tipos de objetos
  - status            Muestra el estado del arbol de trabajo

- crece, marca y ajusta tu historial comun
  - branch            Lista, crea, o borra ramas
  - commit            Graba los cambios en tu repositorio
  - merge             Junta dos o mas historiales de desarrollo juntos
  - rebase            Vuelve a aplicar commits en la punta de otra rama
  - reset             Reinicia el HEAD actual a un estado especifico
  - switch            Cambiar branches
  - tag               Crea, lista, borra o verifica un tag de objeto firmado con GPG

- colabora (mira tambien: git help workflows)
  - fetch             Descarga objetos y referencias de otro repositorio
  - pull              Realiza un fetch e integra con otro repositorio o rama local
  - push              Actualiza referencias remotas junto con sus objetos asociados

```
