# Revisión de recursos visuales de UCV Reports

> **Actualización posterior:** los recursos estáticos descritos a continuación se sustituyeron por imágenes IA y diseños vectoriales nuevos. Este informe conserva los hallazgos de la versión original `7d290a0`; para el estado actual, consultar [branding/README.md](branding/README.md) y el registro de prompts. No se sustituyeron las imágenes dinámicas de usuarios, API o Drive.

Revisión del código y archivos locales de la versión `7d290a0`. Fecha: 15 de octubre de 2026, America/Lima.

## Resultado

Se identificaron 21 archivos gráficos locales, tres proveedores externos de imágenes en JavaScript (Flaticon, Unsplash y Cairo Sales), imágenes aportadas por usuarios a través de Google Drive y Font Awesome servido por CDN. No se encontraron documentos de permiso ni licencias específicas para los archivos locales. No se acredita una infracción; queda pendiente acreditar el derecho de uso.

El commit `7d290a0` ("Without Images and Icons") retiró numerosas referencias de las pantallas. Los archivos siguen presentes en `frontend-ucvreports/CSS/auth/images/`. La ausencia de referencias directas no demuestra que un recurso sea inaccesible en una publicación ni que no haya sido distribuido en el repositorio.

## Inventario de archivos locales

Todas las rutas de esta tabla son relativas a `frontend-ucvreports/CSS/auth/images/`.

| Archivo | Contenido observado / origen | Referencias encontradas y estado |
| --- | --- | --- |
| `logo.png` | Emblema rojo de la Universidad César Vallejo | Referencia residual en `CSS/reportes_gestion/reportes_gestion.css:30`. La ruta relativa apunta a otra carpeta y la regla requiere un elemento `.logo img`. No se demuestra visualización actual. Confirmar permiso institucional. |
| `logosinFondo.png` | Mismo emblema, transparente | Sin referencia directa actual. Confirmar permiso institucional. |
| `logo_ucv.png` | Emblema UCV con texto REPORTS | Sin referencia directa actual. Metadatos: Canva, autor declarado Angel Campos Pezo, título UniEventos - 5, creación 2025-05-29. Los metadatos no prueban cesión de derechos ni permiso institucional. |
| `logo_ucv_modal.png` | Variante del emblema UCV con REPORTS | Sin referencia directa actual. Mismos datos de autoría declarada y exportación Canva; mismos permisos pendientes. |
| `logo_ucv_page.svg` | Composición con marca UCV | Sin referencia directa actual; contiene cuatro elementos image con PNG incrustados, además de trazados. Requiere permiso sobre sus componentes. |
| `fondo.svg` | Fotografía de una sede de la UCV | Sin referencia directa actual. Contiene dos elementos image con fotografía PNG incrustada. Sin fotógrafo o licencia documentados. |
| `recuperar.svg` | Fotografía del campus y personas | Sin referencia directa actual. Contiene dos elementos image con fotografía incrustada. Sin fotógrafo o licencia documentados. Si se publica, revisar también derechos de imagen de personas identificables. |
| `regosterfondo.svg` | Fotografía del campus, estatua y marca de aniversario UCV | Sin referencia directa actual. Contiene dos elementos image con fotografía incrustada. No hay permiso o procedencia documentados. |
| `Problema monitor.jpg` | Foto de equipo instalado en aula | Sin referencia directa actual. No hay autor/licencia; podría ser evidencia propia, pendiente de confirmar con quien la tomó. |
| `Problema silla.jpg` | Foto de mobiliario en aula | Sin referencia directa actual. No hay autor/licencia; podría ser evidencia propia, pendiente de confirmar. |
| `escritorios.jpg` | Foto de producto: escritorio | Sin referencia directa actual. Fuente y licencia sin acreditar. |
| `mouse.jpg` | Foto de producto con marca Logitech | Referenciada en `JAVASCRIPT/articulos_uso_actual.js:9`; no se encontró carga de ese script desde el HTML actual. Fuente y licencia de la foto sin acreditar. |
| `ordenador.jpg` | Foto comercial de equipo y pantalla | Sin referencia directa actual. Fuente y licencia sin acreditar. |
| `pizarra.jpg` | Foto de producto: pizarra | Sin referencia directa actual. El EXIF incluye `imagery4`; no identifica una licencia. |
| `proyector.jpg` | Foto de producto con marca Epson | Sin referencia directa actual. Fuente y licencia de la foto sin acreditar. |
| `ventilador.jpg` | Foto de producto: ventilador | Sin referencia directa actual. Fuente y licencia sin acreditar. |
| `perfil.png` | Avatar ilustrado | Sin referencia directa actual. Metadato Inkscape, sin autor o licencia acreditados. |
| `cartIcon.png` | Icono de carrito | Sin referencia directa actual. Proveedor y licencia sin acreditar. |
| `reportIcon.png` | Icono de documento/informe | Sin referencia directa actual. Proveedor y licencia sin acreditar. |
| `riskIcon.png` | Icono triangular de advertencia | Sin referencia directa actual. El símbolo es común; eso no certifica los derechos de este archivo concreto. |
| `saveIcon.png` | Icono de disquete | Sin referencia directa actual. Proveedor y licencia sin acreditar. |

## Recursos externos y dinámicos

| Recurso | Evidencia en código | Evaluación |
| --- | --- | --- |
| Flaticon, icono 7415672 | `frontend-ucvreports/JAVASCRIPT/productos_danados.js:38` | URL directa a CDN; no se encontró atribución ni certificado premium. No se encontró carga de ese script desde el HTML actual. La licencia gratuita de Flaticon exige atribución; verificar autor y licencia concreta o sustituir. No se identificó de forma fiable la ficha del icono. |
| Unsplash, photo-1581092160562-40aa08e78837 | `frontend-ucvreports/JAVASCRIPT/usuario_reportes_globales.js:26` | Imagen de respaldo en reportes globales; el HTML sí carga este script. La licencia general de Unsplash permite muchos usos comerciales sin atribución obligatoria; queda pendiente documentar la ficha y autor de esta foto y comprobar derechos adicionales según contenido y uso. Sigue siendo una obra con derechos. |
| Cairo Sales, foto de Lenovo | `frontend-ucvreports/JAVASCRIPT/existencia_entrada.js:73` y `existencia_salida.js:53` | Respaldo cuando hardware no tiene imagen; ambos scripts están enlazados desde HTML. No se identificó licencia de reutilización. La disponibilidad pública o el enlace directo no acreditan permiso. Priorizar sustitución por fotografía propia o ilustración original. |
| Google Drive / imágenes de API | Archivos `usuario_reportes_globales.js`, `reportes_globlaes.js`, `reportes_gestion_M9.js` y módulos de hardware | El repositorio no incluye las imágenes reales de usuarios o base de datos. No se accedió al backend ni a Drive. No se puede auditar su autoría desde este checkout. Acreditar origen por archivo. |
| Font Awesome Free 5/6 | Enlaces CDN en HTML y CSS | Tiene licencias publicadas para iconos, fuentes y código. Conservar los avisos correspondientes y verificar que se usa la edición Free. No es necesario reemplazarlo únicamente por ser de terceros. |
| Patrones SVG inline de puntos y círculos | `frontend-ucvreports/CSS/reportes_ver/reportes_ver.css:201` y `:265` | Formas geométricas sencillas, sin proveedor declarado. Menor preocupación aparente que fotografías y logos, sin certificación de titularidad. |

## Interpretación y siguientes pasos

1. Obtener confirmación de la UCV para el uso y adaptación de su emblema y nombre. Si este es un proyecto institucional autorizado, documentar ese permiso; el uso puede ser legítimo.
2. Solicitar al autor declarado los originales y el detalle de los componentes de Canva. Exportar desde Canva no demuestra que todo el contenido sea propio o exclusivo.
3. Sustituir la foto enlazada desde Cairo Sales o conseguir una autorización expresa. Revisar también las fotos locales de catálogo.
4. Resolver el icono Flaticon con atribución y licencia comprobadas, o reemplazarlo si se reactiva el script.
5. Confirmar la autoría de las fotos de aulas/campus; no asumir que una foto de la universidad pertenece al proyecto.
6. Guardar para cada imagen la fuente, autor, licencia, fecha de obtención y permiso. Revisar los archivos sin uso antes de volver a distribuirlos.

La etiqueta ISC de `frontend-ucvreports/package.json` no demuestra que el proyecto tenga derechos sobre imágenes ajenas. El backend figura como UNLICENSED. Los textos de licencia de dependencias tampoco acreditan permisos sobre las fotografías o logos del proyecto.

No se modificaron logos, imágenes, código funcional ni historial Git. Este informe es una revisión documental y estática: no incluye búsqueda inversa exhaustiva, búsqueda registral de marcas, revisión de contratos ni evaluación jurídica definitiva.

## Fuentes oficiales consultadas

- UCV, manual de identidad: https://webadminportal.ucv.edu.pe/uploads/files/Manual_basico_de_identidad_visual_Universidad_Cesar_Vallejo.pdf
- Canva, titularidad de diseños: https://www.canva.com/help/copyright-design-ownership/
- Canva, logos y marcas: https://www.canva.com/help/trademarks-logo/
- Flaticon, licencia gratuita: https://www.flaticon.com/media/license/license.pdf
- Unsplash, licencia: https://unsplash.com/license
- Unsplash, términos y derechos adicionales: https://unsplash.com/terms
- Font Awesome 6.4.2, licencia: https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.4.2/LICENSE.txt
- OMPI, Decreto Legislativo 822 de Perú: https://www.wipo.int/wipolex/es/legislation/details/3412
