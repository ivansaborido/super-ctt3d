# Super CTT 3D

Juego de plataformas 3D: lleva el envío desde tu comunidad hasta la central de Coslada.
Funciona en el navegador del móvil y del ordenador, se puede instalar como app y va sin conexión después de abrirlo una vez.

## Qué hay en esta carpeta

| Archivo o carpeta | Para qué sirve |
|---|---|
| `index.html` | El juego completo |
| `manifest.webmanifest` | Nombre, icono y colores de la app al instalarla |
| `sw.js` | Guarda el juego en el móvil para que funcione sin internet |
| `icons/` | Iconos de la app |
| `fonts/` | Tipografías (licencia OFL, libres) |
| `vendor/three/` | Motor 3D three.js (licencia MIT, libre) |

## Publicarlo en GitHub Pages (sin instalar nada)

1. Entra en https://github.com y crea una cuenta gratuita (o inicia sesión).
2. Arriba a la derecha pulsa **+** → **New repository**.
   - Repository name: `super-ctt`
   - Marca **Public** (GitHub Pages gratis solo funciona con repositorios públicos).
   - Pulsa **Create repository**.
3. En la página del repositorio pulsa **uploading an existing file** (o **Add file → Upload files**).
4. Descomprime el zip en tu ordenador, abre la carpeta y **arrastra todo su contenido** (los archivos y las carpetas `fonts`, `icons` y `vendor`) a la ventana de GitHub. No arrastres la carpeta de fuera: `index.html` tiene que quedar en la raíz del repositorio.
5. Abajo pulsa **Commit changes**.
6. Ve a **Settings** → **Pages** (menú de la izquierda).
   - En *Build and deployment*, Source: **Deploy from a branch**.
   - Branch: **main** y carpeta **/ (root)** → **Save**.
7. Espera 1 o 2 minutos y recarga esa página. Aparecerá la dirección del juego:
   `https://TU-USUARIO.github.io/super-ctt/`

Esa es la dirección que puedes mandar por WhatsApp.

## Instalarlo como app en el móvil

- **Android (Chrome):** abre la dirección → menú ⋮ → **Instalar aplicación** (o **Añadir a pantalla de inicio**). También aparece un botón **Instalar app** en el menú del juego cuando el móvil lo permite.
- **iPhone (Safari):** abre la dirección → botón **Compartir** → **Añadir a pantalla de inicio**.

Se abre a pantalla completa, con su icono, y funciona sin conexión.

## Subir una versión nueva

1. En GitHub, entra en el archivo que cambies (por ejemplo `index.html`) → icono del lápiz o **Add file → Upload files** para reemplazarlo.
2. Abre `sw.js` y cambia `super-ctt-3d-v1` por `super-ctt-3d-v2` (y así cada vez). Si no lo cambias, los móviles que ya lo tienen instalado seguirán usando la versión antigua.
3. **Commit changes**. En un par de minutos está publicado.

## Convertirlo en app de Google Play (opcional)

Con la web ya publicada, entra en https://www.pwabuilder.com, pega la dirección de GitHub Pages y pulsa **Package for stores** → **Android**. Genera el paquete para subir a Google Play (hace falta una cuenta de desarrollador de Google, con pago único).

## Controles

- Móvil: joystick a la izquierda, **SALTAR** y **ACCIÓN** a la derecha.
- Teclado: WASD o flechas para moverte, Espacio para saltar, X para la acción, P para pausa.
- Mando: stick izquierdo, A para saltar, X o B para la acción, Start para pausa.

## Licencias de terceros

- three.js: MIT (`vendor/three/LICENSE`).
- Barlow y Lilita One: SIL Open Font License (`fonts/`).
