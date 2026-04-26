# Design Document

## Feature: dental-landing-refactor

## Overview

Landing page premium de una sola página (SPA) para **Guadalupe Armenta Odontología — Especialista en Ortodoncia**. Stack: React 19 + TypeScript + Vite + Tailwind CSS 4 + AnimeJS. Diseño completamente nuevo basado en la paleta del logo: dorado/champagne (#B8A96A), gris oscuro (#4A4A4A), blanco (#FFFFFF) y gris claro (#F5F5F5). Estética premium, minimalista y moderna con animaciones de entrada y scroll-triggered.

---

## Architecture

### Estructura de archivos

```
src/
├── App.tsx                          # Composición principal de secciones
├── index.css                        # Variables CSS, fuentes, estilos globales
├── main.tsx                         # Entry point
├── constants/
│   ├── businessInfo.ts              # Datos del consultorio (actualizar)
│   ├── services.ts                  # Servicios (actualizar)
│   ├── navigation.ts                # Links de navegación
│   └── gallery.ts                   # Imágenes de galería (nuevo)
├── hooks/
│   └── useScrollAnimation.ts        # Hook IntersectionObserver + AnimeJS (nuevo)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx               # Navbar fija con blur scroll (reemplazar)
│   │   └── Footer.tsx               # Footer oscuro (reemplazar)
│   ├── sections/
│   │   ├── HeroSection.tsx          # Hero fullscreen (reemplazar)
│   │   ├── ServicesSection.tsx      # 3 servicios en cards (reemplazar)
│   │   ├── AboutSection.tsx         # Sobre nosotros split layout (reemplazar)
│   │   ├── GallerySection.tsx       # Grid asimétrico de imágenes (nuevo)
│   │   ├── ScheduleSection.tsx      # Horarios + mapa (reemplazar)
│   │   └── ContactSection.tsx       # CTA WhatsApp + teléfono (reemplazar)
│   └── ui/
│       ├── Button.tsx               # Botón reutilizable (actualizar)
│       ├── SectionTitle.tsx         # Título de sección con línea dorada (nuevo)
│       └── ScrollIndicator.tsx      # Indicador de scroll animado (nuevo)
```

---

## Design Tokens

### Colores (variables CSS en `index.css`)

```css
:root {
  --color-primary: #B8A96A;        /* Dorado/champagne */
  --color-primary-dark: #9A8B52;   /* Dorado oscuro para hover */
  --color-primary-light: #D4C88A;  /* Dorado claro para acentos */
  --color-secondary: #4A4A4A;      /* Gris oscuro */
  --color-secondary-dark: #2C2C2C; /* Casi negro para footer */
  --color-bg: #FFFFFF;             /* Fondo principal */
  --color-bg-alt: #F8F7F4;         /* Fondo alternativo cálido */
  --color-text: #2C2C2C;           /* Texto principal */
  --color-text-muted: #6B6B6B;     /* Texto secundario */
  --color-white: #FFFFFF;
}
```

### Tipografía

Importar desde Google Fonts en `index.css`:
- **Display/Títulos**: `Cormorant Garamond` (weights: 400, 600, 700) — serif elegante
- **Cuerpo/UI**: `DM Sans` (weights: 300, 400, 500, 600) — sans-serif moderno

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
```

### Espaciado y radios

- Secciones: `padding: 5rem 0` (py-20) en desktop, `padding: 3rem 0` (py-12) en mobile
- Cards: `border-radius: 1rem` (rounded-2xl)
- Botones: `border-radius: 0.5rem` (rounded-lg) o pill `border-radius: 9999px` (rounded-full)

---

## Components Design

### 1. `useScrollAnimation` hook

```typescript
// src/hooks/useScrollAnimation.ts
import { useEffect, useRef } from 'react';
import anime from 'animejs';

interface ScrollAnimationOptions {
  translateY?: [number, number];
  translateX?: [number, number];
  opacity?: [number, number];
  scale?: [number, number];
  duration?: number;
  delay?: number | ((el: Element, i: number) => number);
  easing?: string;
  stagger?: number;
}

export function useScrollAnimation(options: ScrollAnimationOptions) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respetar prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Estado inicial invisible
    const targets = el.querySelectorAll('[data-animate]');
    const animTargets = targets.length > 0 ? targets : [el];

    anime.set(animTargets, {
      opacity: options.opacity?.[0] ?? 0,
      translateY: options.translateY?.[0] ?? 0,
      translateX: options.translateX?.[0] ?? 0,
      scale: options.scale?.[0] ?? 1,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: animTargets,
              opacity: options.opacity?.[1] ?? 1,
              translateY: options.translateY?.[1] ?? 0,
              translateX: options.translateX?.[1] ?? 0,
              scale: options.scale?.[1] ?? 1,
              duration: options.duration ?? 700,
              delay: options.stagger
                ? anime.stagger(options.stagger)
                : (options.delay ?? 0),
              easing: options.easing ?? 'easeOutExpo',
            });
            observer.unobserve(entry.target); // Solo una vez
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
```

### 2. Navbar

**Comportamiento:**
- Posición: `fixed top-0 left-0 right-0 z-50`
- Estado inicial: fondo transparente, texto blanco
- Al scroll > 60px: `backdrop-blur-md bg-white/90 shadow-sm` con transición CSS `transition-all duration-300`
- Logo: `<img src="/logo.jpeg" alt="GA Odontología" className="h-10 w-auto" />`
- Links: texto gris oscuro, hover dorado con `transition-colors duration-200`
- CTA button: fondo dorado `bg-[#B8A96A]`, texto blanco, hover `bg-[#9A8B52]`
- Mobile: hamburger icon (3 líneas → X), menú desplegable `bg-white shadow-lg`

**Estructura JSX:**
```tsx
<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
    <Logo />
    <DesktopNav links={NAV_LINKS} />
    <CTAButton />
    <HamburgerButton />
  </nav>
  <MobileMenu links={NAV_LINKS} isOpen={isOpen} />
</header>
```

### 3. HeroSection

**Layout:** Split en desktop (texto izquierda 50%, imagen derecha 50%), fullscreen en mobile con imagen de fondo.

**Elementos:**
- Fondo: gradiente sutil `from-[#F8F7F4] to-white` + elemento decorativo SVG (círculo dorado difuminado)
- Imagen: `banner_horizontal.jpg` con `object-cover`, esquinas redondeadas, sombra
- Título: `Cormorant Garamond` 64px desktop / 40px mobile, color `#2C2C2C`
- Subtítulo: `DM Sans` uppercase tracking-widest, color `#B8A96A`
- Párrafo: `DM Sans` 18px, color `#6B6B6B`
- CTA primario: fondo `#B8A96A`, texto blanco, icono WhatsApp SVG
- CTA secundario: borde `#B8A96A`, texto `#B8A96A`, hover fill dorado
- Scroll indicator: flecha animada con `anime` loop `translateY [0, 10, 0]` infinito

**Animación de entrada (AnimeJS timeline):**
```typescript
useEffect(() => {
  const tl = anime.timeline({ easing: 'easeOutExpo' });
  tl.add({ targets: '.hero-badge', opacity: [0, 1], translateY: [-20, 0], duration: 600 })
    .add({ targets: '.hero-title', opacity: [0, 1], translateY: [-40, 0], duration: 800 }, '-=300')
    .add({ targets: '.hero-subtitle', opacity: [0, 1], translateY: [20, 0], duration: 700 }, '-=500')
    .add({ targets: '.hero-text', opacity: [0, 1], translateY: [20, 0], duration: 600 }, '-=400')
    .add({ targets: '.hero-ctas', opacity: [0, 1], translateY: [20, 0], duration: 600 }, '-=300')
    .add({ targets: '.hero-image', opacity: [0, 1], translateX: [60, 0], duration: 900 }, '-=800');
}, []);
```

### 4. ServicesSection

**Layout:** 3 columnas en desktop (`grid-cols-3`), 1 columna en mobile.

**Card design:**
- Fondo blanco, borde `border border-gray-100`, sombra `shadow-sm`
- Imagen superior con `aspect-[4/3] object-cover rounded-t-2xl`
- Línea dorada decorativa `h-1 bg-[#B8A96A]` debajo de la imagen
- Título `Cormorant Garamond` 24px
- Descripción `DM Sans` 15px color muted
- Botón "Más información" → WhatsApp con mensaje específico del servicio
- Hover: `transform scale-[1.02] shadow-lg transition-all duration-300`

**Servicios con imágenes:**
```typescript
const services = [
  { id: 1, title: 'Tratamiento de Ortodoncia', image: '/tratamiento_ortodoncia.jpeg', description: '...', whatsappMsg: 'Hola, me interesa información sobre Tratamiento de Ortodoncia.' },
  { id: 2, title: 'Odontopediatra', image: '/odontopediatra.jpeg', description: '...', whatsappMsg: 'Hola, me interesa información sobre Odontopediatría.' },
  { id: 3, title: 'Endodoncia', image: '/endodoncia.jpeg', description: '...', whatsappMsg: 'Hola, me interesa información sobre Endodoncia.' },
];
```

**Animación scroll:** `useScrollAnimation` con `translateY: [60, 0]`, `opacity: [0, 1]`, `stagger: 150`

### 5. AboutSection

**Layout:** Split 50/50 en desktop — imagen izquierda, texto derecha. En mobile: imagen arriba, texto abajo.

**Elementos:**
- Imagen: `alinea_tu_sonrisa.jpeg` con `object-cover rounded-2xl`, decorador dorado (borde offset)
- Badge: "Especialistas en Ortodoncia" con fondo dorado claro
- Título: `Cormorant Garamond` 48px
- Párrafo descriptivo
- 3 feature points con iconos SVG inline (diente, corazón, estrella) en dorado
- CTA: botón WhatsApp

**Animación scroll:**
- Imagen: `translateX: [-50, 0]`, `opacity: [0, 1]`, `duration: 700`
- Texto: `translateX: [50, 0]`, `opacity: [0, 1]`, `duration: 700`, `delay: 150`

### 6. GallerySection

**Layout:** CSS Grid asimétrico en desktop:
```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
}
/* Primera imagen ocupa 2 columnas */
.gallery-item:first-child { grid-column: span 2; }
```
En mobile: `grid-cols-2`.

**Imágenes seleccionadas (6):**
1. `brackets_autoligado.jpeg` — "Brackets Autoligado"
2. `tipos_de_mordidas.jpeg` — "Tipos de Mordidas"
3. `maloclusion.jpeg` — "Maloclusión"
4. `biomecanica.jpeg` — "Biomecánica"
5. `estetica.jpeg` — "Estética Dental"
6. `que_es_ortodoncia_lingual.jpeg` — "Ortodoncia Lingual"

**Hover overlay:** `absolute inset-0 bg-[#4A4A4A]/70 opacity-0 hover:opacity-100 transition-opacity duration-300` con nombre de imagen centrado en blanco.

**Animación scroll:** stagger `80ms` por elemento, `translateY: [40, 0]`, `opacity: [0, 1]`

### 7. ScheduleSection

**Layout:** 2 columnas en desktop — horarios izquierda, mapa derecha. En mobile: apilado.

**Horarios display:**
```
Lunes – Viernes    10:00 am – 2:00 pm  |  4:00 pm – 8:00 pm   ✓ Abierto
Sábado             10:00 am – 2:00 pm                          ✓ Abierto
Domingo            —                                            ✗ Cerrado
```
Tabla con filas alternadas, checkmark verde / X rojo.

**Mapa:** `<iframe>` de Google Maps embed con dirección "Jiménez 202, San Felipe, Guanajuato".

**Botón "¿Cómo llegar?":** Abre `https://maps.google.com/?q=Jiménez+202,+San+Felipe,+Guanajuato`

**Animación scroll:** `translateY: [30, 0]`, `opacity: [0, 1]`, `stagger: 100`

### 8. ContactSection

**Layout:** Centrado, fondo oscuro `bg-[#2C2C2C]` o gradiente oscuro. Diseño tipo "call to action" prominente.

**Elementos:**
- Título grande `Cormorant Garamond` en blanco
- Subtítulo en dorado
- Indicador de disponibilidad: punto verde pulsante + "Respondemos en minutos"
- Botón WhatsApp: verde `#25D366`, icono SVG WhatsApp, texto "Agendar por WhatsApp"
- Botón Teléfono: borde blanco, icono teléfono, texto "428 688 0942"
- Redes sociales: iconos Facebook e Instagram en blanco/dorado
- Números visibles como texto

**Animación scroll:** `scale: [0.9, 1]`, `opacity: [0, 1]`, `duration: 600`, `easing: 'easeOutBack'`

### 9. Footer

**Layout:** 4 columnas en desktop, 2 en tablet, 1 en mobile.

**Columnas:**
1. Logo + nombre + tagline
2. Navegación rápida
3. Contacto (tel, WhatsApp, dirección)
4. Horarios resumidos + redes sociales

**Estilo:** `bg-[#2C2C2C]` texto `text-gray-300`, links hover `text-[#B8A96A]`, separador `border-t border-gray-700`

---

## Data Constants

### `src/constants/businessInfo.ts`

```typescript
export const BUSINESS_INFO = {
  name: 'Guadalupe Armenta Odontología',
  tagline: 'Especialista en Ortodoncia',
  fullName: 'Guadalupe Armenta Odontología — Especialista en Ortodoncia',
  address: 'Jiménez #202, Planta Alta, San Felipe, Gto.',
  phone: '428 688 0942',
  phoneHref: 'tel:4286880942',
  whatsapp: '4281478697',
  whatsappHref: 'https://wa.me/4281478697',
  whatsappDefaultMsg: 'Hola, me gustaría agendar una cita en Guadalupe Armenta Odontología.',
  facebook: 'https://www.facebook.com/share/1E6CB3C5tr/',
  instagram: 'https://www.instagram.com/gaconsultoriodental',
  mapsUrl: 'https://maps.google.com/?q=Jiménez+202,+San+Felipe,+Guanajuato',
  schedule: {
    weekdays: { days: 'Lunes – Viernes', hours: ['10:00 am – 2:00 pm', '4:00 pm – 8:00 pm'] },
    saturday: { days: 'Sábado', hours: ['10:00 am – 2:00 pm'] },
    sunday: { days: 'Domingo', hours: ['Cerrado'] },
  },
} as const;
```

### `src/constants/services.ts`

```typescript
export const SERVICES = [
  {
    id: 'ortodoncia',
    title: 'Tratamiento de Ortodoncia',
    description: 'Corregimos la posición de tus dientes y mandíbula con brackets y alineadores modernos para una sonrisa perfecta y funcional.',
    image: '/tratamiento_ortodoncia.jpeg',
    alt: 'Tratamiento de ortodoncia con brackets',
    whatsappMsg: 'Hola, me interesa información sobre Tratamiento de Ortodoncia.',
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatra',
    description: 'Cuidamos la salud bucal de los más pequeños con atención especializada, amigable y preventiva desde la primera infancia.',
    image: '/odontopediatra.jpeg',
    alt: 'Odontopediatría para niños',
    whatsappMsg: 'Hola, me interesa información sobre Odontopediatría.',
  },
  {
    id: 'endodoncia',
    title: 'Endodoncia',
    description: 'Tratamiento de conductos para salvar dientes con infección o daño pulpar, eliminando el dolor y preservando tu diente natural.',
    image: '/endodoncia.jpeg',
    alt: 'Tratamiento de endodoncia',
    whatsappMsg: 'Hola, me interesa información sobre Endodoncia.',
  },
] as const;
```

### `src/constants/gallery.ts` (nuevo)

```typescript
export const GALLERY_IMAGES = [
  { src: '/brackets_autoligado.jpeg', alt: 'Brackets Autoligado', label: 'Brackets Autoligado' },
  { src: '/tipos_de_mordidas.jpeg', alt: 'Tipos de Mordidas', label: 'Tipos de Mordidas' },
  { src: '/maloclusion.jpeg', alt: 'Maloclusión dental', label: 'Maloclusión' },
  { src: '/biomecanica.jpeg', alt: 'Biomecánica en ortodoncia', label: 'Biomecánica' },
  { src: '/estetica.jpeg', alt: 'Estética dental', label: 'Estética Dental' },
  { src: '/que_es_ortodoncia_lingual.jpeg', alt: 'Ortodoncia lingual', label: 'Ortodoncia Lingual' },
] as const;
```

---

## Animation Strategy

### Principios

1. **GPU-only**: Solo animar `transform` (translateX, translateY, scale) y `opacity`. Nunca `width`, `height`, `top`, `left`.
2. **Once**: Cada animación se ejecuta una sola vez al entrar al viewport (`observer.unobserve` después de disparar).
3. **Reduced motion**: Verificar `window.matchMedia('(prefers-reduced-motion: reduce)')` antes de animar.
4. **Easings**: `easeOutExpo` para entradas, `easeOutBack` para elementos que "rebotan", `easeInQuad` para salidas.

### Mapa de animaciones por sección

| Sección | Tipo | Parámetros |
|---------|------|-----------|
| Hero | Timeline entrada | Ver §3 HeroSection |
| Services | Stagger cards | translateY [60→0], opacity [0→1], stagger 150ms |
| About | Split bilateral | texto translateX [-50→0], imagen translateX [50→0] |
| Gallery | Stagger grid | translateY [40→0], opacity [0→1], stagger 80ms |
| Schedule | Stagger items | translateY [30→0], opacity [0→1], stagger 100ms |
| Contact | Scale + fade | scale [0.9→1], opacity [0→1], easeOutBack |

### Scroll indicator (Hero)

```typescript
anime({
  targets: '.scroll-indicator',
  translateY: [0, 10],
  opacity: [1, 0.3],
  duration: 1200,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
});
```

---

## Responsive Breakpoints

| Breakpoint | Valor | Comportamiento |
|-----------|-------|---------------|
| mobile | < 640px | 1 columna, menú hamburguesa, fuentes reducidas |
| tablet | 640–1024px | 2 columnas, navbar completa |
| desktop | > 1024px | Layout completo, 3 columnas servicios |

---

## AnimeJS Integration Notes

- Instalar: `npm install animejs` + `npm install -D @types/animejs` (si disponible) o usar tipos incluidos en v4
- Import: `import anime from 'animejs'`
- Para stagger: `anime.stagger(150)` como valor del parámetro `delay`
- Para timelines: `anime.timeline({ easing, duration })` con `.add()` encadenados y offsets negativos para solapamiento
- Los elementos deben tener `opacity: 0` inicial vía `anime.set()` antes de que el observer los detecte, para evitar flash de contenido visible

---

## File Modification Summary

| Archivo | Acción |
|---------|--------|
| `src/index.css` | Reemplazar: variables CSS, fuentes Google, estilos globales |
| `src/App.tsx` | Reemplazar: composición de secciones nueva |
| `src/constants/businessInfo.ts` | Actualizar: datos GA Odontología |
| `src/constants/services.ts` | Actualizar: 3 servicios reales |
| `src/constants/gallery.ts` | Crear: imágenes de galería |
| `src/hooks/useScrollAnimation.ts` | Crear: hook IntersectionObserver + AnimeJS |
| `src/components/layout/Navbar.tsx` | Reemplazar: navbar nueva |
| `src/components/layout/Footer.tsx` | Reemplazar: footer nuevo |
| `src/components/sections/HeroSection.tsx` | Reemplazar: hero nuevo |
| `src/components/sections/ServicesSection.tsx` | Reemplazar: servicios nuevo |
| `src/components/sections/AboutSection.tsx` | Reemplazar: about nuevo |
| `src/components/sections/GallerySection.tsx` | Crear: galería nueva |
| `src/components/sections/ScheduleSection.tsx` | Reemplazar: horarios nuevo |
| `src/components/sections/ContactSection.tsx` | Reemplazar: contacto nuevo |
| `src/components/ui/Button.tsx` | Actualizar: variantes dorado/outline |
| `src/components/ui/SectionTitle.tsx` | Crear: título con línea dorada |
