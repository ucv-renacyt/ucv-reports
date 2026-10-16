# Recursos visuales de Reports

Se sustituyeron los 21 archivos gráficos locales revisados y los respaldos externos de Cairo Sales, Flaticon y Unsplash. Los nombres anteriores se mantienen para compatibilidad, pero su contenido es nuevo. Se añadió `placeholder.jpg`, cuya referencia previa apuntaba a un archivo inexistente.

## Origen

- Diez imágenes generadas con la herramienta integrada `image_gen`, desde descripciones de texto y sin imágenes de referencia: monitor, mouse, escritorio, proyector, ventilador, pizarra, campus ficticio, dos escenas ilustrativas de incidencias y avatar.
- Prompts completos y archivos finales: `generated-assets.json`.
- Logo: SVG escrito desde cero, documento con líneas y marca de seguimiento. No utiliza el emblema UCV ni recursos de Canva. Versiones PNG y nombre SVG anterior contienen el mismo diseño.
- Cuatro iconos y el recurso «Sin evidencia adjunta»: SVG escritos directamente, con copias PNG de los iconos.
- Los tres fondos SVG contienen el mismo campus ficticio generado con IA, comprimido como JPEG incrustado; no incluyen fotos de sedes reales.

Los JPG se ajustaron a sus dimensiones previas sin deformar su contenido. Los PNG y sus versiones de compatibilidad se rasterizaron desde los nuevos SVG o la imagen generada correspondiente. No se reutilizaron píxeles de los recursos anteriores.

## Uso

`preview.html` y `preview.jpg` muestran los recursos nuevos. Las fotografías aportadas por usuarios y las imágenes almacenadas en la API o Google Drive conservan su procedencia y no fueron reemplazadas. El avatar no representa una persona real. Las escenas «Problema monitor» y «Problema silla» son ejemplos ilustrativos, no evidencia de hechos. El respaldo de los reportes usa una tarjeta explícita «Sin evidencia adjunta».

Font Awesome Free y su CDN se conservan: tienen licencias publicadas y no forman parte de estos archivos de origen incierto. La denominación textual de la aplicación tampoco se cambió.

Crear imágenes nuevas reduce la dependencia de obras de procedencia desconocida. No equivale a certificar ausencia de semejanzas, exclusividad jurídica ni disponibilidad registral del logo. El historial Git conserva los archivos anteriores; no se reescribió.
