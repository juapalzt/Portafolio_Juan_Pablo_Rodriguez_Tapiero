# 🎨 Portafolio Profesional - Juan Pablo Rodríguez Tapiero

Un portafolio web moderno, responsive y completamente funcional construido con **Angular 18** y mejores prácticas de desarrollo web.

[![Angular](https://img.shields.io/badge/Angular-18-red?style=flat-square&logo=angular)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

## 🌟 Características Principales

- ✅ **Diseño Semántico HTML5**: Estructura accesible con etiquetas semánticas y atributos ARIA
- 🎯 **Responsive Design**: Adaptado para desktop, tablet y móvil (breakpoints 768px y 480px)
- 🌙 **Tema Oscuro/Claro**: Toggle de tema con persistencia en localStorage
- 🌍 **Multiidioma**: Soporte ES/EN con `@ngx-translate/core`
- ♿ **Accesibilidad WCAG**: Etiquetas semánticas, roles ARIA y navegación por teclado
- 📱 **Menú Móvil**: Drawer lateral activable con `Ctrl+D` para navegación
- 📄 **Visor de CV**: Modal para visualizar PDF sin abrir nueva pestaña
- 🚀 **SSR Ready**: Server-side rendering configurado para pre-renderizado
- 💅 **CSS Variables**: Tematización personalizable con variables globales
- 📦 **Componentes Reutilizables**: Arquitectura modular y escalable
- 🎬 **Animaciones Suaves**: Transiciones CSS para mejor UX

## 🗂️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── header/         # Navegación y controles
│   │   ├── footer/         # Pie de página
│   │   ├── hero/           # Sección principal
│   │   ├── about/          # Sobre mí
│   │   ├── experience/     # Experiencia profesional
│   │   ├── projects/       # Proyectos destacados
│   │   ├── skills/         # Habilidades técnicas
│   │   ├── certifications/ # Certificaciones
│   │   ├── contact/        # Formulario de contacto
│   │   ├── cv-viewer/      # Visor de CV
│   │   └── loader/         # Indicador de carga
│   ├── pages/              # Páginas
│   │   └── home/           # Página principal
│   ├── services/           # Servicios
│   │   ├── language.service.ts     # Gestión de idioma
│   │   ├── contact.service.ts      # Envío de contacto
│   │   └── projects.service.ts     # Datos de proyectos
│   ├── app.component.*     # Componente raíz
│   ├── app.routes.ts       # Configuración de rutas
│   └── app.config.ts       # Configuración global
├── assets/
│   ├── img/                # Imágenes y badges
│   └── i18n/               # Archivos de idiomas (ES/EN)
├── styles.scss             # Estilos globales y variables CSS
├── main.ts                 # Entry point del cliente
├── main.server.ts          # Entry point del servidor (SSR)
└── index.html              # HTML principal
```

## 🚀 Inicio Rápido

### Requisitos Previos

- **Node.js**: 18 o superior
- **npm**: 9 o superior
- **Angular CLI**: Instalado globalmente (opcional)

```bash
# Instalar globalmente (opcional)
npm install -g @angular/cli
```

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/juapalzt/Portafolio_Juan_Pablo_Rodriguez_Tapiero.git
cd Portafolio_Juan_Pablo_Rodriguez_Tapiero

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm start

# 4. Abrir en navegador
# La app estará disponible en: http://localhost:4200
```

## 📋 Comandos Disponibles

```bash
# Servidor de desarrollo con hot reload
npm start
# o
ng serve

# Compilación para producción
npm run build
# o
ng build

# Ejecutar pruebas unitarias
npm run test
# o
ng test

# Compilación y deploy a GitHub Pages
npm run deploy
```

## 🎨 Personalización

### Cambiar Color Principal

Edita `src/styles.scss` y modifica la variable `--accent`:

```scss
:root {
  --accent: #0f6fbf;  // Azul predeterminado
  // Cambia a tu color favorito (ej: #ff6b6b para rojo)
}
```

### Agregar Proyectos

Edita `src/app/services/projects.service.ts`:

```typescript
sample() {
  return [
    {
      title: 'Mi Proyecto',
      description: 'Descripción del proyecto',
      technologies: ['Angular', 'TypeScript'],
      image: '/assets/img/proyecto.png',
      repo: 'https://github.com/usuario/proyecto'
    },
    // Agrega más proyectos aquí...
  ];
}
```

### Cambiar Información de Contacto

Edita `src/app/components/contact/contact.component.html`:

```html
<div class="contact-value">tu-email@example.com</div>
<a href="https://linkedin.com/in/tu-perfil">LinkedIn</a>
```

## 🌐 Despliegue

### GitHub Pages

```bash
# Build con base-href correcto
ng build --configuration production --base-href="/Portafolio_Juan_Pablo_Rodriguez_Tapiero/"

# Subir a gh-pages
npm run deploy
```

### Vercel

1. Conecta tu repositorio en [Vercel](https://vercel.com)
2. Configura el build command: `npm run build`
3. Output directory: `dist/mi-portafolio`
4. ¡Listo! Se desplegará automáticamente en cada push

### Netlify

1. Conecta tu repositorio en [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist/mi-portafolio`

## ♿ Accesibilidad

Este proyecto cumple con estándares **WCAG 2.1 AA**:

- ✅ Semántica HTML5 correcta
- ✅ Atributos ARIA implementados
- ✅ Navegación por teclado (Tab, Enter, Escape)
- ✅ Contraste de colores suficiente
- ✅ Alt text en todas las imágenes
- ✅ Formularios etiquetados correctamente
- ✅ Lectores de pantalla soportados

Prueba con [WAVE](https://wave.webaim.org/) o Lighthouse en DevTools.

## 📱 Responsividad

| Dispositivo | Breakpoint | Características |
|-------------|-----------|-----------------|
| Desktop | 1024px+ | Layout completo |
| Tablet | 768px - 1023px | Ajustes de columnas, tipografía |
| Móvil | < 768px | Layout de una columna, menú drawer |

## 🔧 Tecnologías Utilizadas

- **Frontend**: Angular 18, TypeScript 5
- **Styling**: SCSS, CSS Grid, Flexbox
- **Internacionalización**: @ngx-translate/core
- **Build**: Angular CLI, Webpack
- **SSR**: Angular Universal
- **Herramientas**: Git, npm, Node.js

## 📊 Métricas de Calidad

| Métrica | Status |
|---------|--------|
| Build | ✅ Exitoso |
| TypeScript | ✅ Strict mode |
| Accesibilidad | ✅ WCAG 2.1 AA |
| Responsivo | ✅ Mobile-first |
| Performance | ✅ Lazy loading |

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Por favor:

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/MiFeature`)
3. Commit tus cambios (`git commit -m 'Agrego MiFeature'`)
4. Push a la rama (`git push origin feature/MiFeature`)
5. Abre un Pull Request

## 📝 Convenciones de Código

### TypeScript
- Usa tipos explícitos
- Sigue la guía de estilo de Angular
- Agrega comentarios JSDoc para métodos públicos

### SCSS
- Usa variables CSS para colores
- Organiza media queries
- Evita selectores anidados profundos

### HTML
- Usa etiquetas semánticas
- Incluye atributos ARIA
- Agrega alt text en imágenes

## 🐛 Reporte de Errores

Encontraste un bug? Por favor abre un [Issue](https://github.com/juapalzt/Portafolio_Juan_Pablo_Rodriguez_Tapiero/issues) con:

- Descripción clara del problema
- Pasos para reproducirlo
- Navegador y versión usada
- Screenshots si es relevante

## 📚 Recursos Útiles

- [Documentación Angular](https://angular.io/docs)
- [Guía ARIA de MDN](https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA)
- [Web.dev - Responsive Design](https://web.dev/responsive-web-design-basics/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Ver archivo [LICENSE](LICENSE) para más detalles.

## 💬 Contacto

- **Email**: juan.pablo@example.com
- **LinkedIn**: [Perfil LinkedIn](https://linkedin.com/in/juanpablrodriguez)
- **GitHub**: [@juapalzt](https://github.com/juapalzt)
- **Portafolio**: [Ver en vivo](https://juapalzt.github.io/Portafolio_Juan_Pablo_Rodriguez_Tapiero)

---

<div align="center">

**Hecho con ❤️ por Juan Pablo Rodríguez Tapiero**

⭐ Si este proyecto te fue útil, dale una estrella!

</div>
