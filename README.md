# Ediversa Frontend Test

Prueba técnica de frontend — Home de una Facultad de Medicina

## Información básica

### Stack y librerías utilizadas

| Categoría | Tecnología |
|-----------|------------|
| **Framework** | React 19 |
| **Build** | Vite 7 |
| **Lenguaje** | TypeScript |
| **Estilos** | SCSS (Sass) con `sass-embedded` |
| **Formularios** | React Hook Form + Zod (validación) |
| **Validación** | Zod (con `@hookform/resolvers` para integración) |
| **Internacionalización** | i18next + react-i18next |
| **Otros** | normalize.css, Inter (Google Fonts) |

### Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev
```

---

## Estructura del proyecto (componentes y archivos)


```
src/
├── assets/                
│   ├── logo.svg
│   └── img/                # Imágenes (HeroSection, FeaturedProfessorsSection, InnovatingSection, etc.)
│
├── components/             # Componentes reutilizables
│   ├── ArrowTextLink/      
│   ├── ButtonPortal/       
│   ├── ButtonSimple/       
│   ├── FormField/          # Campo de formulario (label + input + error)
│   ├── Footer/             # Footer (FooterColumn, SocialLinks)
│   ├── Header/             
│   ├── Icons/              # Iconos SVG (Arrow, Email, Globe, LinkBlank, etc.)
│   ├── ProfessorLinkCard/  
│   ├── PublicationCard/    
│   ├── SearchInput/        
│   └── TitleSection/       
│
├── data/                   # Datos estáticos
│   ├── featuredProfessors.ts
│   ├── footerLinks.ts
│   └── publications.ts
│
├── locales/                # Textos traducibles (i18n)
│   └── en/
│       └── common.json
│
├── pages/
│   └── Home.tsx            # Página principal 
│
├── schemas/
│   └── requestInfoSchema.ts  # Esquema Zod del formulario
│
├── sections/               # Secciones de la página (por bloque de contenido)
│   ├── FeaturedProfessorsSection/
│   ├── HeroSection/
│   ├── InnovatingBannerSection/
│   ├── LatestResearchSection/
│   └── RequestInfoSection/   # Incluye  (formulario con validación Zod)
│
├── styles/                 # Estilos 
│   ├── global.scss         # Funciones 
│   └── variables.scss      # Variables (colores, breakpoints etc.)
│
├── types/
│   ├── professor.ts
│   └── publication.ts
│
├── App.tsx                 # Componente raíz (Header, Home, Footer)
├── i18n.ts                 # Configuración de i18next
├── index.scss              # Estilos globales, reset, clases comunes 
├── main.tsx               

```
---

## Decisiones técnicas

- **Componentes reutilizables** en `components/`: botones, campos de formulario, card, iconos, etc., para evitar duplicación y mejorar la escalabilidad.
- **Secciones** en `sections/`: cada bloque visible de la página (Hero, Featured Professors, Latest Research & Publications, Banner, Request Information) está en su propia carpeta.
- **Datos** en `data/`: listas de profesores, publicaciones y enlaces del footer en archivos separados para facilitar el cambio por datos de API.
- **Textos** en `locales/` con i18n: todos los textos visibles pasan por i18next para futura multiidioma y mantenimiento.
- **Variables y funciones SCSS** en `styles/variables.scss` y `styles/global.scss`: colores, breakpoints, base size y funciones como `vw()`, `color()` o mixins (`mq-pc`, `mq-sp`) para centralizar la gestión de estilos y facilitar su mantenimiento.

He utilizado **React**, **Vite**, **Zod** e **i18n**, tecnologías con las que ya tenía experiencia previa, lo que facilitó un desarrollo más fluido y consistente.

## Enfoque adoptado para el layout

- **Diseño responsive**
  - Hasta **768px**: ancho de referencia con **vw** para escalar con el viewport; por debajo (móvil) se usan tamaños en **px** fijos.
   - Breakpoint principal: **767px** (`$break-small` en `variables.scss`).
- **Mixins de media queries** en `styles/global.scss`:
  - `mq-pc`: estilos para desktop (min-width > 767px).
  - `mq-sp`: estilos para móvil (max-width ≤ 767px).
  Así se separa claramente el estilo de cada vista.
- **Ancho de secciones**:
  - Clases comunes `.section` y `.section__inner`: ancho máximo y margin/padding unificados para todas las secciones.
- **layout**:
  - Flexbox y Grid para estructuras adaptables.
  - Colores, tamaños de fuente y anchos de pantalla centralizados en `variables.scss` para mantener coherencia y facilitar cambios.

## Mejoras que implementarías con más tiempo

- **Accesibilidad**: Mejoras adicionales en accesibilidad.
- **Búsqueda**: implementación real de la búsqueda (actualmente solo UI en el header).
- **Navegación**: Mejor implementación de la navegación y enlaces del sitio.

## Tiempo aproximado invertido

**Aproximadamente 15 horas.**

---

## Notas adicionales

- En los diseños de referencia había numerosas diferencias de texto entre versión desktop y móvil; se ha unificado el contenido tomando como base la **versión de desktop** en todos los breakpoints.

