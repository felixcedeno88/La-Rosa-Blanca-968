Calendario Anual - La Rosa Blanca No. 968 L:. & A:.M:.

Descripción
- Calendario estático en HTML/CSS/JS para administrar y visualizar eventos de la logia.

Archivos principales
- [index.html](index.html) — interfaz principal
- [styles.css](styles.css) — estilos
- [script.js](script.js) — lógica y datos de eventos (editar `masonicEvents`)

Ejecutar localmente
- Abrir `index.html` directamente en el navegador (rápido, pero puede causar restricciones CORS en algunas funciones).
- Servidor recomendado (Python 3):

```bash
cd "C:\Users\felix\OneDrive\Desktop\Calendario LRB"
python -m http.server 8000
# Abrir http://localhost:8000
```

- Usando Node (npx):

```bash
cd "C:\Users\felix\OneDrive\Desktop\Calendario LRB"
npx http-server -p 8000
# o
npx serve .
```

Desplegar como sitio web
- GitHub Pages (recomendado, gratis):
  1. Crear un repositorio en GitHub y subir todos los archivos.
  2. Hacer push a `main`.
  3. En Settings → Pages, seleccionar la rama `main` y la carpeta `/(root)`.
  4. El sitio estará en `https://USERNAME.github.io/REPO/`.

Comandos básicos para preparar y subir (en terminal):

```bash
git init
git add .
git commit -m "Calendario inicial"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

- Netlify / Vercel (drag & drop o conectar repo):
  - Netlify: arrastra la carpeta al panel "Sites" → "Drag and drop"
  - Vercel: importa el repo desde GitHub y presiona Deploy

- Compartir por OneDrive/Google Drive:
  1. Subir la carpeta o un ZIP.
  2. Compartir enlace público (opción "Anyone with the link can view").

Editar eventos
- Abrir `script.js` y modificar el objeto `masonicEvents`.
- Cada evento usa la clave `'M-D'` (mes 1-12, día 1-31).
- Ejemplo:
  ```js
  '6-15': { title: 'Tenida Especial', type: 'special', description: '...', address: 'Templo - Calle Ejemplo 10, Ciudad' }
  ```

Siguientes pasos que puedo hacer por ti
- Crear el repositorio en GitHub y hacer push desde esta máquina (necesitaré tu confirmación y credenciales).
- Añadir un flujo de GitHub Actions para publicar automáticamente en Pages.
- Añadir un pequeño editor in-page para crear/editar eventos desde la interfaz.

Si quieres, continuo con cualquiera de las acciones anteriores.