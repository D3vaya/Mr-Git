## <img src="assets/static/images/boton-agregar.svg" alt="boton-agregar" height="50"/> **git add**

Entramos en tierra derecha. De aqui en adelante es sumamente importante que puedas entender cada cosa que hace cada comando. Esto determinara si eres del team 🦖 o el team 🦍.

<center>
<img class="mb-3" src="assets/static/images/nina.svg" alt="nina" height="100" />
<img class="mb-3" src="assets/static/images/nina-clone.svg" alt="nina color" height="100" />
</center>

## <div class="mt-4 mb-3"> <img src="assets/static/images/boton-agregar.svg" alt="boton-agregar" height="50" /> **Analicemos git clone**</div>

Normalmente utilizamos git clone para apuntar a repositorios remotos(**🙊spoiler alert🙊**), y la forma de usarlo es bastante sencilla, veamos el ejemplo del repositorio de <a href="https://github.com/D3vaya/Mr-Git" target="_blank"><img src="assets/img/landing/logo.svg" alt="lanzamiento de cohete" height="20" /></a> que es de codigo abierto y esta disponible para cualquier persona que tenga una cuenta en github.

Solo debemos realizar el clon del repositorio utilizando el comando que hemos visto en este capitulo, **git clone**

```bash
$ git clone https://github.com/D3vaya/Mr-Git.git

Clonando en 'Mr-Git'...
remote: Enumerating objects: 786, done.
remote: Counting objects: 100% (786/786), done.
remote: Compressing objects: 100% (445/445), done.
remote: Total 786 (delta 393), reused 690 (delta 299), pack-reused 0
Recibiendo objetos: 100% (786/786), 4.29 MiB | 1.87 MiB/s, listo.
Resolviendo deltas: 100% (393/393), listo.
```

Con este sencillo paso tenemos el repositorio de <a href="https://github.com/D3vaya/Mr-Git" target="_blank"><img src="assets/img/landing/logo.svg" alt="lanzamiento de cohete" height="20" /></a> al 100% en nuestro equipo para poder hacer con el los que no de la gana 😳. Asi de facil funciona el comando **git clone**, pero no es lo unico que podemos hacer con el. Existen mas opciones que extienden y le dan superpoderes a este **"simple comando"**. Si queremos clonar un repositorio remoto, pero queremos una rama en especifico, tenemos la bandera **--branch**.

```bash
$ git clone -branch markdown https://github.com/D3vaya/Mr-Git.git

```

Este ejemplo solo clonaria la rama **"markdown"** del repositorio de <a href="https://github.com/D3vaya/Mr-Git" target="_blank"><img src="assets/img/landing/logo.svg" alt="mr git" height="20" /></a>. Se trata simplemente de una utilidad práctica que te ahorra el tiempo de descargar la referencia de **HEAD**(**🙊spoiler alert🙊**) del repositorio y, después, el tener que recuperar también la referencia que necesitas.

## <div class="mt-4 mb-3"> <img src="assets/static/images/boton-agregar.svg" alt="boton-agregar" height="50" /> **Url de Git**</div>

Git maneja sus propias sintaxis de **URL**, que son las que usamos para los repositorios remotos, te dejare las 3 que usa git para lo que te comento

- **SSH**
  > Secure Shell (SSH) es un extendido protocolo de red autenticada que se configura habitualmente de manera predeterminada en la mayoría de los servidores. Como SSH es un protocolo autenticado, tendrás que establecer credenciales con el servidor de alojamiento antes de conectarte. ssh://[user@]host.xz[:port]/path/to/repo.git/
  ```bash
  $ git@github.com:D3vaya/Mr-Git.git
  ```
- **GIT**
  > Un protocolo único de Git. Git incluye un daemon que se ejecuta en el puerto (9418). El protocolo es similar a SSH. Sin embargo, NO tiene autenticación. git://host.xz[:port]/path/to/repo.git/
  ```bash
  $ gh repo clone D3vaya/Mr-Git
  ```
- HTTP
  > Protocolo de transferencia de hipertexto. El protocolo de la web, utilizado habitualmente para transferir datos HTML de páginas web por Internet. Git se puede configurar para comunicarse por HTTP http[s]://host.xz[:port]/path/to/repo.git/
  ```bash
  $ https://github.com/D3vaya/Mr-Git.git
  ```

<center>
<img class="mb-3 mt-3" src="assets/static/images/proteger.svg" alt="escudo de seguridad" height="100" />
</center>

En este capitulo nos dimos cuenta que **git clone** es un comando sumamente sencillo y muy util, pero por sobre todo, sumamente utilizado. Terminamos las bases iniciales de git. En la siguiente sección entraremos en la batalla... en el combate... preparate 🐤.
