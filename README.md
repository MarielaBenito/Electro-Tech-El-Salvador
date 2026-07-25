# ElectroTech El Salvador

Sitio web de comercio electrónico y recursos tecnológicos con catálogo de productos, tutoriales y descargas. Proyecto desplegado en Netlify: https://electro-tech-el-salvador.netlify.app/

Resumen
- Sitio estático responsivo desarrollado con HTML, CSS, JavaScript y Bootstrap.
- Contenido: catálogo de productos, páginas de información corporativa, tutoriales en video, descargas y formulario de contacto que genera un mensaje para WhatsApp.

En vivo
- URL de producción: https://electro-tech-el-salvador.netlify.app/

Cómo ejecutar localmente
1. Clona o descarga el repositorio.
2. Desde la carpeta raíz, sirve archivos estáticos (opción mínima):

```bash
python -m http.server 8000
# luego abrir http://localhost:8000
```

Alternativa (si instalas paquetes npm):

```bash
# instalar 'serve' globalmente
npm install -g serve
serve -s . -l 8000
```

Estructura principal
- `index.html` — Página principal.
- `assets/` — Imágenes, videos, audios, documentos y SVG.
- `src/css/` — Estilos (incluye Bootstrap).
- `src/js/` — JavaScript (p. ej. `index.js` maneja el año y el formulario de contacto).
- `src/html/` — Páginas internas: `Catalogo.html`, `QuienesSomos.html`, `Tutoriales.html`, `Descargas.html`, `Contacto.html`, `confirmarCompra.html`.

Tecnologías
- HTML5, CSS3, JavaScript (vanilla)
- Bootstrap 5

Cómo contribuir
- Abrir un issue describiendo la propuesta o bug.
- Crear una rama por feature: `feature/nombre-descriptivo` y enviar un pull request con cambios claros y capturas si aplica.
