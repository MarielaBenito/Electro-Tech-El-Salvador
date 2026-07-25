# ElectroTech El Salvador

ElectroTech es un sitio web de comercio electrónico y recursos tecnológicos que ofrece productos electrónicos (laptops, smartphones, gadgets) y contenido educativo en forma de tutoriales y descargas. Este repositorio contiene la interfaz web estática del proyecto, con páginas para catálogo, contacto, tutoriales y más.

¿Qué encontrarás aquí?
- Catálogo de productos y páginas de compra.
- Sección de `Tutoriales` con videos y guías.
- Páginas de `Descargas` y `Contacto` con formulario que envía mensajes por WhatsApp.

Demo rápido
- Abrir `index.html` en un navegador web para ver la página principal.
- Para servir localmente (opción recomendada), usar un servidor estático simple. Por ejemplo con Python 3:

```bash
python -m http.server 8000
# luego abrir http://localhost:8000
```

Estructura del proyecto (resumen)
- `index.html` — Página principal.
- `assets/` — Imágenes, videos, audios, documentos y SVG.
- `src/css/` — Estilos y dependencias de Bootstrap.
- `src/js/` — JavaScript para la interacción (p. ej. `index.js`).
- `src/html/` — Páginas internas: `Catalogo.html`, `QuienesSomos.html`, `Tutoriales.html`, `Descargas.html`, `Contacto.html`, `confirmarCompra.html`.

Detalles técnicos
- Sitio estático HTML/CSS/JS, incorpora Bootstrap para layout y componentes.
- El formulario de contacto construye un mensaje y abre WhatsApp con los datos del usuario (`src/js/index.js`).
- Recomendado servir desde un servidor estático para evitar restricciones de CORS al cargar recursos multimedia.

Cómo contribuir
- Abrir un issue describiendo la mejora o bug.
- Crear una rama por feature y enviar un pull request con cambios claros y pruebas visuales (capturas).

Contacto
- Equipo: Mariela Benito.
- Para soporte o preguntas, usar la página `src/html/Contacto.html`.

Licencia
- No se especificó una licencia en el repositorio. Añade un archivo `LICENSE` si deseas compartir este proyecto bajo una licencia concreta (recomiendo MIT si quieres permitir reutilización).

---
Archivo generado automáticamente: README profesional adaptado al contenido del proyecto.
