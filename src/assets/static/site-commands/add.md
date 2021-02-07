## <img src="assets/static/images/boton-agregar.svg" alt="boton-agregar" height="50"/> **git add**

Entramos en tierra derecha. De aqui en adelante es sumamente importante que puedas entender cada cosa que hace cada comando. Esto determinara si eres del team 🦖 o el team 🦍.
Realicemos un pequeño repaso. Cuano realizamos git init, pasan 2 cosas importantes.La primera, es que se crea la carpeta .git/, que contiene la base de datos con los cambios atomicos de nuestos archivos. Y lo segundo, es que se crea un área conocida como **Staging**. Te lo repito... **Staging**. Esta área guardará temporalmente nuestros cambios con un comando(🙊**spoiler alert🙊 git add**), y nos permitirá, mas adelante, guardar estos cambios en el repositorio con otro comando(🙊**spoiler alert🙊 git commit**).

<center>
<img class="mb-3" src="assets/static/images/ejemplo-git-add.svg" alt="nina" height="214" style="width:100%" loading="lazy">
</center>

## <div class="mt-4 mb-3"> <img src="assets/static/images/boton-agregar.svg" alt="boton-agregar" height="50" /> **Ciclo de vida**</div>

Cuando trabajamos con Git nuestros archivos pueden vivir y moverse entre 4 diferentes estados (**cuando trabajamos con repositorios remotos pueden ser más estados, pero lo estudiaremos más adelante**):

#### <img src="assets/static/images/seguimiento.svg" alt="seguimiento" height="50" /> **Archivos Tracked**:

son los archivos que viven dentro de Git, no tienen cambios pendientes y sus últimas actualizaciones han sido guardadas en el repositorio gracias a los comandos git add y git commit.

#### <img src="assets/static/images/seguridad-de-archivos.svg" alt="seguridad de archivos" height="50" /> **Archivos Staged**:

son archivos en Staging. Viven dentro de Git y hay registro de ellos porque han sido afectados por el comando git add, aunque no sus últimos cambios. Git ya sabe de la existencia de estos últimos cambios, pero todavía no han sido guardados definitivamente en el repositorio porque falta ejecutar el comando git commit.

#### <img src="assets/static/images/sala-de-espera.svg" alt="sala de espera" height="50" /> Archivos Unstaged:

entiéndelos como archivos “Tracked pero Unstaged”. Son archivos que viven dentro de Git pero no han sido afectados por el comando git add ni mucho menos por git commit. Git tiene un registro de estos archivos, pero está desactualizado, sus últimas versiones solo están guardadas en el disco duro.

#### <img src="assets/static/images/paloma.svg" alt="paloma" height="50" /> Archivos Untracked:

son archivos que NO viven dentro de Git, solo en el disco duro. Nunca han sido afectados por git add, así que Git no tiene registros de su existencia.

Recuerda que hay un caso muy raro donde los archivos tienen dos estados al mismo tiempo: staged y untracked. Esto pasa cuando guardas los cambios de un archivo en el área de Staging (con el comando git add), pero antes de hacer commit para guardar los cambios en el repositorio haces nuevos cambios que todavía no han sido guardados en el área de Staging (en realidad, todo sigue funcionando igual pero es un poco divertido).
