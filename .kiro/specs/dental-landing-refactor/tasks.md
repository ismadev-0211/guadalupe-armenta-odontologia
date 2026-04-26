# Implementation Tasks

## Feature: dental-landing-refactor

- [x] 1. Setup: dependencias, tokens de diseño y constantes
  - [x] 1.1 Instalar AnimeJS: `npm install animejs`
  - [x] 1.2 Actualizar `src/index.css`: importar fuentes Google (Cormorant Garamond + DM Sans), definir variables CSS de paleta de colores, estilos globales (html scroll-behavior: smooth, font-family base)
  - [x] 1.3 Actualizar `src/constants/businessInfo.ts` con todos los datos de GA Odontología (nombre, dirección, teléfono, WhatsApp, redes sociales, horarios, URLs de mapas)
  - [x] 1.4 Actualizar `src/constants/services.ts` con los 3 servicios reales (ortodoncia, odontopediatría, endodoncia) incluyendo imagen, descripción y mensaje de WhatsApp
  - [x] 1.5 Crear `src/constants/gallery.ts` con las 6 imágenes seleccionadas de `/public`

- [x] 2. Hook `useScrollAnimation`
  - [x] 2.1 Crear `src/hooks/useScrollAnimation.ts` con IntersectionObserver + AnimeJS, soporte para translateY, translateX, scale, opacity, stagger y easing
  - [x] 2.2 Implementar respeto a `prefers-reduced-motion` en el hook
  - [x] 2.3 Garantizar que cada animación se ejecute solo una vez (unobserve tras disparar)

- [x] 3. Componentes UI base
  - [x] 3.1 Actualizar `src/components/ui/Button.tsx`: variantes `primary` (fondo dorado), `outline` (borde dorado), `ghost` (texto dorado), `whatsapp` (verde), con props `size` y `href`
  - [x] 3.2 Crear `src/components/ui/SectionTitle.tsx`: título con línea decorativa dorada, subtítulo opcional, alineación configurable

- [x] 4. Navbar
  - [x] 4.1 Reemplazar `src/components/layout/Navbar.tsx`: navbar fija con logo, links de navegación y botón CTA "Agendar Cita"
  - [x] 4.2 Implementar efecto scroll: al pasar 60px aplicar `backdrop-blur-md bg-white/90 shadow-sm` con transición CSS
  - [x] 4.3 Implementar menú hamburguesa para mobile con panel desplegable animado

- [x] 5. HeroSection
  - [x] 5.1 Reemplazar `src/components/sections/HeroSection.tsx`: layout split desktop (texto izquierda, imagen derecha), fullscreen mobile
  - [x] 5.2 Implementar timeline de animación de entrada con AnimeJS (badge → título → subtítulo → párrafo → CTAs → imagen)
  - [x] 5.3 Agregar elemento decorativo SVG (círculo/forma dorada difuminada de fondo)
  - [x] 5.4 Crear `src/components/ui/ScrollIndicator.tsx` con animación loop de flecha pulsante

- [x] 6. ServicesSection
  - [x] 6.1 Reemplazar `src/components/sections/ServicesSection.tsx`: grid 3 columnas desktop / 1 mobile con cards de servicios
  - [x] 6.2 Implementar cards con imagen, línea dorada, título, descripción y botón WhatsApp por servicio
  - [x] 6.3 Agregar hover effect (scale 1.02 + shadow) vía CSS Tailwind
  - [x] 6.4 Conectar `useScrollAnimation` con stagger 150ms en las cards

- [x] 7. AboutSection
  - [x] 7.1 Reemplazar `src/components/sections/AboutSection.tsx`: layout split 50/50 con imagen y texto
  - [x] 7.2 Agregar 3 feature points con iconos SVG inline (diente, corazón, estrella) en dorado
  - [x] 7.3 Implementar animación bilateral: imagen desde izquierda, texto desde derecha con `useScrollAnimation`

- [x] 8. GallerySection
  - [x] 8.1 Crear `src/components/sections/GallerySection.tsx`: grid asimétrico CSS (primera imagen span 2 columnas) con 6 imágenes
  - [x] 8.2 Implementar hover overlay semitransparente con nombre de imagen
  - [x] 8.3 Conectar `useScrollAnimation` con stagger 80ms en los items del grid

- [x] 9. ScheduleSection
  - [x] 9.1 Reemplazar `src/components/sections/ScheduleSection.tsx`: tabla de horarios con indicadores abierto/cerrado y mapa embebido
  - [x] 9.2 Agregar botón "¿Cómo llegar?" que abra Google Maps
  - [x] 9.3 Conectar `useScrollAnimation` con stagger 100ms

- [x] 10. ContactSection
  - [x] 10.1 Reemplazar `src/components/sections/ContactSection.tsx`: sección CTA con fondo oscuro, botones WhatsApp y teléfono prominentes
  - [x] 10.2 Agregar indicador de disponibilidad (punto verde pulsante + "Respondemos en minutos")
  - [x] 10.3 Mostrar redes sociales (Facebook e Instagram) con iconos SVG
  - [x] 10.4 Conectar `useScrollAnimation` con scale + fade easeOutBack

- [x] 11. Footer
  - [x] 11.1 Reemplazar `src/components/layout/Footer.tsx`: footer oscuro 4 columnas con logo, navegación, contacto y horarios
  - [x] 11.2 Agregar iconos de redes sociales y copyright dinámico con año actual

- [x] 12. App.tsx y composición final
  - [x] 12.1 Reemplazar `src/App.tsx`: componer todas las secciones en orden (Navbar, Hero, Services, About, Gallery, Schedule, Contact, Footer)
  - [x] 12.2 Agregar IDs de sección para smooth scroll (`id="inicio"`, `id="servicios"`, `id="nosotros"`, `id="galeria"`, `id="contacto"`)
  - [x] 12.3 Verificar que no haya imports de componentes del proyecto anterior (Casa Dental)
