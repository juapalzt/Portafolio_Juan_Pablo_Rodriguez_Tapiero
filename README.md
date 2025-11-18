# Portafolio - Juan Pablo Rodríguez Tapiero

Este proyecto es un portafolio profesional en Angular (estructura moderna, responsive y listo para desplegar).

## Estructura relevante

- `src/app/components` — componentes reutilizables (Hero, About, Projects, Skills, Contact, etc.)
- `src/app/pages` — páginas (Home)
- `src/app/services` — servicios (contacto, proyectos)
- `src/assets/img` — imágenes y badges
- `src/styles.scss` — variables y estilos globales

## Requisitos

- Node.js 18+ y Angular CLI (compatible con Angular 17+; proyecto usa dependencias actuales).

## Desarrollo local

Instalar dependencias:

```powershell
npm install
```

Levantar servidor de desarrollo:

```powershell
npm start
```

## Deploy

### GitHub Pages

1. Generar build con base-href del repo (reemplaza `mi-portafolio` por el nombre de tu repositorio si es distinto):

```powershell
ng build --output-path=dist --base-href="/mi-portafolio/"
```

2. Sube la carpeta `dist` al branch `gh-pages` (puedes usar `angular-cli-ghpages` o acciones de GitHub).

### Vercel

1. El proyecto incluye `vercel.json`. En Vercel, crea un nuevo proyecto apuntando al repo.
2. Configura el campo de build command a `npm run build` y el output directory a `dist` (o deja la configuración por defecto, Vercel usará `angular.json`).

## Notas y siguientes pasos

- Integrar un servicio real para el envío de mensajes (SendGrid, Netlify Functions, AWS Lambda).
- Añadir animaciones con `@angular/animations` o AOS si deseas efectos más ricos.
- Sustituir imágenes placeholder por fotos reales en `src/assets/img`.
# MiPortafolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
