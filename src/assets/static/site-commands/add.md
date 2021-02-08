## <img src="assets/static/images/boton-agregar.svg" alt="boton-agregar" height="50"/> **git add**

Entramos en tierra derecha. De aqui en adelante es sumamente importante que puedas entender cada cosa que hace cada comando. Esto determinara si eres del team 🦖 o el team 🦍.
Realicemos un pequeño repaso. Cuano realizamos git init, pasan 2 cosas importantes.La primera, es que se crea la carpeta .git/, que contiene la base de datos con los cambios atomicos de nuestos archivos. Y lo segundo, es que se crea un área conocida como **Staging**. Te lo repito... **Staging**. Esta área guardará temporalmente nuestros cambios con un comando(🙊spoiler alert🙊 **git add**), y nos permitirá, mas adelante, guardar estos cambios en el repositorio con otro comando(🙊spoiler alert🙊 **git commit**).

<center>
<img class="mb-3" src="assets/static/images/ejemplo-git-add.svg" alt="nina" height="214" style="width:100%" loading="lazy">
</center>

## <div class="mt-4 mb-3"> <img src="assets/static/images/boton-agregar.svg" alt="boton-agregar" height="50" /> **Ciclo de vida**</div>

Cuando trabajamos con Git nuestros archivos pueden vivir y moverse entre 4 diferentes estados (cuando trabajamos con repositorios remotos pueden ser más estados, pero lo estudiaremos más adelante):

#### <img src="assets/static/images/seguimiento.svg" alt="seguimiento" height="50" /> **Archivos Tracked**:

son los archivos que viven dentro de Git, no tienen cambios pendientes y sus últimas actualizaciones han sido guardadas en el repositorio gracias a los comandos git add y git commit.

#### <img src="assets/static/images/seguridad-de-archivos.svg" alt="seguridad de archivos" height="50" /> **Archivos Staged**:

son archivos en Staging. Viven dentro de Git y hay registro de ellos porque han sido afectados por el comando git add, aunque no sus últimos cambios. Git ya sabe de la existencia de estos últimos cambios, pero todavía no han sido guardados definitivamente en el repositorio porque falta ejecutar el comando git commit.

#### <img src="assets/static/images/sala-de-espera.svg" alt="sala de espera" height="50" /> **Archivos Unstaged**:

entiéndelos como archivos “Tracked pero Unstaged”. Son archivos que viven dentro de Git pero no han sido afectados por el comando git add ni mucho menos por git commit. Git tiene un registro de estos archivos, pero está desactualizado, sus últimas versiones solo están guardadas en el disco duro.

#### <img src="assets/static/images/paloma.svg" alt="paloma" height="50" /> **Archivos Untracked**:

son archivos que NO viven dentro de Git, solo en el disco duro. Nunca han sido afectados por git add, así que Git no tiene registros de su existencia.

Recuerda que hay un caso muy raro donde los archivos tienen dos estados al mismo tiempo: staged y untracked. Esto pasa cuando guardas los cambios de un archivo en el área de Staging (con el comando git add), pero antes de hacer commit para guardar los cambios en el repositorio haces nuevos cambios que todavía no han sido guardados en el área de Staging (en realidad, todo sigue funcionando igual pero es un poco divertido).

<!-- # apunte

¿Qué es el staging y los repositorios? Ciclo básico de trabajo en Git
Para iniciar un repositorio, o sea, activar el sistema de control de versiones de Git en tu proyecto, solo debes ejecutar el comando git init.

Este comando se encargará de dos cosas: primero, crear una carpeta .git, donde se guardará toda la base de datos con cambios atómicos de nuestro proyecto; y segundo, crear un área que conocemos como Staging, que guardará temporalmente nuestros archivos (cuando ejecutemos un comando especial para eso) y nos permitirá, más adelante, guardar estos cambios en el repositorio (también con un comando especial).

Ciclo de vida o estados de los archivos en Git:

Cuando trabajamos con Git nuestros archivos pueden vivir y moverse entre 4 diferentes estados (cuando trabajamos con repositorios remotos pueden ser más estados, pero lo estudiaremos más adelante):

Archivos Tracked: son los archivos que viven dentro de Git, no tienen cambios pendientes y sus últimas actualizaciones han sido guardadas en el repositorio gracias a los comandos git add y git commit.
Archivos Staged: son archivos en Staging. Viven dentro de Git y hay registro de ellos porque han sido afectados por el comando git add, aunque no sus últimos cambios. Git ya sabe de la existencia de estos últimos cambios, pero todavía no han sido guardados definitivamente en el repositorio porque falta ejecutar el comando git commit.
Archivos Unstaged: entiéndelos como archivos “Tracked pero Unstaged”. Son archivos que viven dentro de Git pero no han sido afectados por el comando git add ni mucho menos por git commit. Git tiene un registro de estos archivos, pero está desactualizado, sus últimas versiones solo están guardadas en el disco duro.
Archivos Untracked: son archivos que NO viven dentro de Git, solo en el disco duro. Nunca han sido afectados por git add, así que Git no tiene registros de su existencia.
Recuerda que hay un caso muy raro donde los archivos tienen dos estados al mismo tiempo: staged y untracked. Esto pasa cuando guardas los cambios de un archivo en el área de Staging (con el comando git add), pero antes de hacer commit para guardar los cambios en el repositorio haces nuevos cambios que todavía no han sido guardados en el área de Staging (en realidad, todo sigue funcionando igual pero es un poco divertido).
Comandos para mover archivos entre los estados de Git:

git status: nos permite ver el estado de todos nuestros archivos y carpetas.
git add: nos ayuda a mover archivos del Untracked o Unstaged al estado Staged. Podemos usar git nombre-del-archivo-o-carpeta para añadir archivos y carpetas individuales o git add -A para mover todos los archivos de nuestro proyecto (tanto Untrackeds como unstageds).
git reset HEAD: nos ayuda a sacar archivos del estado Staged para devolverlos a su estado anterior. Si los archivos venían de Unstaged, vuelven allí. Y lo mismo se venían de Untracked.
git commit: nos ayuda a mover archivos de Unstaged a Tracked. Esta es una ocasión especial, los archivos han sido guardados o actualizados en el repositorio. Git nos pedirá que dejemos un mensaje para recordar los cambios que hicimos y podemos usar el argumento -m para escribirlo (git commit -m "mensaje").
git rm: este comando necesita alguno de los siguientes argumentos para poder ejecutarse correctamente:

- git rm --cached: Mueve los archivos que le indiquemos al estado Untracked.
- git rm --force: Elimina los archivos de Git y del disco duro. Git guarda el registro de la existencia de los archivos, por lo que podremos recuperarlos si es necesario (pero debemos usar comandos más avanzados). -->
