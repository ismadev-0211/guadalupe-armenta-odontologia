# Requirements Document

## Introduction

Refactorización completa del sitio web de un consultorio dental para **Guadalupe Armenta Odontología — Especialista en ortodoncia**, ubicado en San Felipe, Guanajuato. El sitio actual (React + Vite + TypeScript + Tailwind CSS) pertenece a otro consultorio ("Casa Dental") y debe ser reemplazado en su totalidad con un diseño completamente nuevo, identidad visual propia y animaciones premium usando AnimeJS. El resultado debe ser una landing page moderna, premium y memorable que refleje la especialización en ortodoncia del consultorio.

## Glossary

- **Landing_Page**: El sitio web de una sola página (SPA) que representa al consultorio.
- **Hero_Section**: La primera sección visible al cargar la página, con impacto visual máximo.
- **Services_Section**: Sección que presenta los tres servicios principales del consultorio.
- **About_Section**: Sección que presenta la identidad y propuesta de valor del consultorio.
- **Gallery_Section**: Sección con imágenes informativas y educativas del consultorio.
- **Schedule_Section**: Sección que muestra horarios y ubicación del consultorio.
- **Contact_Section**: Sección con botones de contacto por WhatsApp y teléfono, y formulario de cita.
- **Footer**: Pie de página con redes sociales, navegación y datos de contacto.
- **Navbar**: Barra de navegación fija en la parte superior de la página.
- **AnimeJS**: Biblioteca de animaciones JavaScript usada para efectos de entrada y scroll.
- **Scroll_Animation**: Animación que se activa cuando el usuario hace scroll y el elemento entra al viewport.
- **Color_Palette**: Paleta de colores extraída del logo: dorado/champagne (#B8A96A), gris oscuro (#4A4A4A), blanco (#FFFFFF) y gris claro (#F5F5F5).
- **WhatsApp_CTA**: Botón o enlace que abre WhatsApp con un mensaje predefinido para agendar cita.
- **IntersectionObserver**: API del navegador usada para detectar cuándo un elemento entra al viewport y disparar animaciones.

---

## Requirements

### Requirement 1: Identidad Visual y Paleta de Colores

**User Story:** Como dueña del consultorio, quiero que el sitio web refleje la identidad visual de mi marca con la paleta de colores del logo, para que los visitantes perciban profesionalismo y coherencia de marca.

#### Acceptance Criteria

1. THE Landing_Page SHALL usar exclusivamente la Color_Palette definida: dorado/champagne (#B8A96A) como color primario, gris oscuro (#4A4A4A) como color secundario, blanco (#FFFFFF) como fondo principal y gris claro (#F5F5F5) como fondo alternativo.
2. THE Landing_Page SHALL mostrar el logo `public/logo.jpeg` en el Navbar y en el Footer.
3. THE Landing_Page SHALL usar tipografía premium con una fuente display para títulos (ej. Playfair Display, Cormorant Garamond o similar serif elegante) y una fuente sans-serif para cuerpo de texto (ej. DM Sans, Outfit o similar).
4. THE Landing_Page SHALL mantener consistencia visual entre todas las secciones usando los mismos tokens de color, tipografía y espaciado.
5. IF el logo no carga, THEN THE Navbar SHALL mostrar el nombre "Guadalupe Armenta Odontología" como texto alternativo.

---

### Requirement 2: Navbar con Navegación Suave

**User Story:** Como visitante del sitio, quiero una barra de navegación clara y accesible, para poder desplazarme fácilmente entre las secciones de la página.

#### Acceptance Criteria

1. THE Navbar SHALL estar fija en la parte superior de la pantalla durante todo el scroll.
2. WHEN el usuario hace scroll más de 60px desde el inicio, THE Navbar SHALL aplicar un fondo semitransparente con efecto blur (backdrop-filter) y sombra sutil.
3. THE Navbar SHALL contener enlaces de navegación a las secciones: Inicio, Servicios, Nosotros, Galería, Contacto.
4. WHEN el usuario hace clic en un enlace de navegación, THE Landing_Page SHALL desplazarse suavemente (smooth scroll) a la sección correspondiente.
5. THE Navbar SHALL incluir un botón de llamada a la acción "Agendar Cita" que abra WhatsApp.
6. WHERE el viewport es menor a 768px, THE Navbar SHALL mostrar un menú hamburguesa que despliega los enlaces de navegación.
7. WHEN el menú hamburguesa está abierto, THE Navbar SHALL mostrar los enlaces en un panel desplegable con fondo sólido.

---

### Requirement 3: Hero Section con Animación de Entrada

**User Story:** Como visitante del sitio, quiero una primera impresión visual impactante al cargar la página, para sentir que el consultorio es profesional y de alta calidad.

#### Acceptance Criteria

1. THE Hero_Section SHALL ocupar al menos el 100% del viewport height (min-h-screen).
2. THE Hero_Section SHALL mostrar el nombre "Guadalupe Armenta Odontología" como título principal y "Especialista en Ortodoncia" como subtítulo.
3. THE Hero_Section SHALL incluir la imagen `public/banner_horizontal.jpg` como elemento visual principal.
4. WHEN la página carga, THE Hero_Section SHALL ejecutar una secuencia de animación con AnimeJS: primero el título (translateY de -40px a 0, opacity 0→1, duración 800ms), luego el subtítulo con delay de 200ms, luego el párrafo descriptivo con delay de 400ms, y finalmente los botones CTA con delay de 600ms.
5. THE Hero_Section SHALL incluir dos botones CTA: "Agendar por WhatsApp" (abre WhatsApp) y "Ver Servicios" (scroll a servicios).
6. THE Hero_Section SHALL incluir un indicador de scroll animado (flecha o punto pulsante) en la parte inferior.
7. THE Hero_Section SHALL usar un elemento decorativo geométrico o de fondo que refuerce la paleta dorado/gris.

---

### Requirement 4: Sección de Servicios

**User Story:** Como visitante del sitio, quiero conocer claramente los servicios que ofrece el consultorio, para evaluar si cubre mis necesidades dentales.

#### Acceptance Criteria

1. THE Services_Section SHALL presentar exactamente tres servicios: "Tratamiento de Ortodoncia", "Odontopediatra" y "Endodoncia".
2. THE Services_Section SHALL usar las imágenes correspondientes de `/public`: `tratamiento_ortodoncia.jpeg`, `odontopediatra.jpeg` y `endodoncia.jpeg`.
3. WHEN el usuario hace scroll y THE Services_Section entra al viewport, THE Services_Section SHALL activar una Scroll_Animation con AnimeJS que revele cada tarjeta de servicio con stagger de 150ms (translateY 60px→0, opacity 0→1).
4. THE Services_Section SHALL mostrar para cada servicio: imagen, título, descripción breve y un botón "Más información" que abra WhatsApp con mensaje predefinido.
5. THE Services_Section SHALL usar un layout de tres columnas en desktop y una columna en mobile.
6. WHEN el usuario hace hover sobre una tarjeta de servicio, THE Services_Section SHALL aplicar una transición suave de elevación (box-shadow) y escala (scale 1.02) en 300ms.

---

### Requirement 5: Sección Sobre Nosotros / Acerca de

**User Story:** Como visitante del sitio, quiero conocer la propuesta de valor y la especialización del consultorio, para generar confianza antes de agendar una cita.

#### Acceptance Criteria

1. THE About_Section SHALL presentar el nombre completo "Guadalupe Armenta Odontología" y la especialización "Especialista en Ortodoncia".
2. THE About_Section SHALL usar la imagen `public/alinea_tu_sonrisa.jpeg` o `public/invierte_en_tu_sonrisa.jpeg` como imagen de apoyo visual.
3. WHEN el usuario hace scroll y THE About_Section entra al viewport, THE About_Section SHALL activar una Scroll_Animation con AnimeJS: el texto entra desde la izquierda (translateX -50px→0) y la imagen desde la derecha (translateX 50px→0), ambos con opacity 0→1 y duración 700ms.
4. THE About_Section SHALL incluir al menos tres puntos destacados (ej. "Especialista certificada", "Atención personalizada", "Tecnología moderna") con iconos SVG.
5. THE About_Section SHALL incluir un botón "Conoce más / Agendar cita" que abra WhatsApp.

---

### Requirement 6: Galería de Imágenes Informativas

**User Story:** Como visitante del sitio, quiero ver imágenes educativas e informativas sobre los tratamientos, para entender mejor los servicios y sentir confianza en el consultorio.

#### Acceptance Criteria

1. THE Gallery_Section SHALL mostrar entre 6 y 9 imágenes seleccionadas de `/public`, priorizando: `brackets_autoligado.jpeg`, `tipos_de_mordidas.jpeg`, `maloclusion.jpeg`, `biomecanica.jpeg`, `estetica.jpeg` y `que_es_ortodoncia_lingual.jpeg`.
2. THE Gallery_Section SHALL usar un layout de grid asimétrico o masonry en desktop (mínimo 3 columnas) y 2 columnas en mobile.
3. WHEN el usuario hace scroll y THE Gallery_Section entra al viewport, THE Gallery_Section SHALL activar una Scroll_Animation con AnimeJS usando stagger desde el centro (grid stagger) con delay de 80ms por elemento.
4. WHEN el usuario hace hover sobre una imagen, THE Gallery_Section SHALL aplicar una transición de escala (scale 1.05) y un overlay semitransparente con el nombre de la imagen, en 300ms.
5. THE Gallery_Section SHALL incluir un título de sección y una descripción breve que contextualice las imágenes como contenido educativo.

---

### Requirement 7: Sección de Horarios y Ubicación

**User Story:** Como paciente potencial, quiero conocer los horarios de atención y la ubicación del consultorio, para planificar mi visita.

#### Acceptance Criteria

1. THE Schedule_Section SHALL mostrar los horarios exactos: Lunes a Viernes 10:00am–2:00pm y 4:00pm–8:00pm, Sábados 10:00am–2:00pm.
2. THE Schedule_Section SHALL mostrar la dirección completa: "Jiménez #202, Planta Alta, San Felipe, Gto."
3. THE Schedule_Section SHALL incluir un mapa embebido de Google Maps apuntando a la dirección del consultorio.
4. WHEN el usuario hace scroll y THE Schedule_Section entra al viewport, THE Schedule_Section SHALL activar una Scroll_Animation con AnimeJS que revele los elementos con un efecto de fade-in escalonado (stagger 100ms, opacity 0→1, translateY 30px→0).
5. THE Schedule_Section SHALL incluir un botón "¿Cómo llegar?" que abra Google Maps con la dirección del consultorio.
6. THE Schedule_Section SHALL mostrar visualmente qué días están abiertos y cuáles cerrados (Domingos cerrado).

---

### Requirement 8: Sección de Contacto y Agendar Cita

**User Story:** Como paciente potencial, quiero poder contactar al consultorio fácilmente por WhatsApp o teléfono, para agendar una cita de forma rápida.

#### Acceptance Criteria

1. THE Contact_Section SHALL incluir un botón prominente de WhatsApp que abra `https://wa.me/4281478697` con el mensaje predefinido "Hola, me gustaría agendar una cita en Guadalupe Armenta Odontología."
2. THE Contact_Section SHALL incluir un botón de llamada telefónica que marque el número `428 688 0942`.
3. THE Contact_Section SHALL mostrar los enlaces a redes sociales: Facebook (`https://www.facebook.com/share/1E6CB3C5tr/`) e Instagram (`https://www.instagram.com/gaconsultoriodental`).
4. WHEN el usuario hace scroll y THE Contact_Section entra al viewport, THE Contact_Section SHALL activar una Scroll_Animation con AnimeJS (scale 0.9→1, opacity 0→1, duración 600ms, easing easeOutBack).
5. THE Contact_Section SHALL mostrar un indicador de disponibilidad (ej. "Respondemos en minutos" con punto verde pulsante) junto al botón de WhatsApp.
6. THE Contact_Section SHALL incluir el número de teléfono y WhatsApp visibles como texto para referencia del usuario.

---

### Requirement 9: Footer

**User Story:** Como visitante del sitio, quiero un footer completo con información de contacto y redes sociales, para poder encontrar al consultorio en cualquier plataforma.

#### Acceptance Criteria

1. THE Footer SHALL mostrar el logo `public/logo.jpeg` y el nombre "Guadalupe Armenta Odontología".
2. THE Footer SHALL incluir enlaces a redes sociales: Facebook e Instagram con sus URLs correctas.
3. THE Footer SHALL mostrar la dirección, teléfono y horarios de forma resumida.
4. THE Footer SHALL incluir navegación rápida a las secciones principales de la página.
5. THE Footer SHALL mostrar el texto de copyright: "© [año actual] Guadalupe Armenta Odontología. Todos los derechos reservados."
6. THE Footer SHALL usar el color de fondo oscuro (#4A4A4A o más oscuro) con texto en blanco/gris claro para contraste adecuado (mínimo 4.5:1).

---

### Requirement 10: Animaciones con AnimeJS y Scroll-Triggered

**User Story:** Como visitante del sitio, quiero experimentar animaciones fluidas y modernas al hacer scroll, para que la navegación sea memorable y premium.

#### Acceptance Criteria

1. THE Landing_Page SHALL instalar AnimeJS (`animejs`) como dependencia del proyecto.
2. THE Landing_Page SHALL implementar un hook de React `useScrollAnimation` que use IntersectionObserver para detectar cuando los elementos entran al viewport y disparar animaciones de AnimeJS.
3. WHEN un elemento animado entra al viewport por primera vez, THE Landing_Page SHALL ejecutar su animación de entrada una sola vez (no repetir al hacer scroll hacia arriba y volver).
4. THE Landing_Page SHALL usar exclusivamente `transform` y `opacity` en las animaciones de AnimeJS para garantizar rendimiento GPU-acelerado (no animar `width`, `height`, `top`, `left`).
5. THE Landing_Page SHALL respetar la preferencia del sistema `prefers-reduced-motion`: IF el usuario tiene activada la reducción de movimiento, THEN THE Landing_Page SHALL omitir las animaciones de scroll y mostrar los elementos directamente visibles.
6. THE Landing_Page SHALL usar easings apropiados: `easeOutExpo` o `easeOutQuart` para entradas, `easeInQuad` para salidas.
7. THE Landing_Page SHALL implementar stagger animations en listas y grids con delay de 80ms–150ms por elemento.

---

### Requirement 11: Responsividad y Accesibilidad

**User Story:** Como visitante del sitio desde cualquier dispositivo, quiero que el sitio se vea y funcione correctamente en móvil, tablet y desktop, para tener una experiencia óptima sin importar el dispositivo.

#### Acceptance Criteria

1. THE Landing_Page SHALL ser completamente responsive con breakpoints: mobile (< 640px), tablet (640px–1024px) y desktop (> 1024px).
2. THE Landing_Page SHALL usar diseño mobile-first en todos los componentes.
3. THE Landing_Page SHALL no presentar scroll horizontal en ningún breakpoint.
4. THE Landing_Page SHALL incluir atributos `alt` descriptivos en todas las imágenes.
5. THE Landing_Page SHALL usar elementos HTML semánticos: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
6. THE Landing_Page SHALL garantizar que todos los botones e interacciones sean accesibles por teclado (focus visible).
7. THE Landing_Page SHALL usar tamaño mínimo de fuente de 16px para texto de cuerpo en mobile.
8. THE Landing_Page SHALL garantizar contraste mínimo de 4.5:1 entre texto y fondo en todos los componentes.

---

### Requirement 12: Constantes y Datos del Negocio

**User Story:** Como desarrollador, quiero que toda la información del consultorio esté centralizada en constantes TypeScript, para facilitar el mantenimiento y actualización del sitio.

#### Acceptance Criteria

1. THE Landing_Page SHALL actualizar el archivo `src/constants/businessInfo.ts` con los datos correctos de Guadalupe Armenta Odontología: nombre, dirección (Jiménez #202, Planta Alta, San Felipe, Gto.), teléfono (428 688 0942), WhatsApp (4281478697), redes sociales y horarios.
2. THE Landing_Page SHALL actualizar el archivo `src/constants/services.ts` con los tres servicios reales: Tratamiento de Ortodoncia, Odontopediatra y Endodoncia.
3. THE Landing_Page SHALL usar las constantes definidas en todos los componentes, sin valores hardcodeados de contacto o información del negocio.
