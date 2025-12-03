/**
 * Punto de entrada para el arranque en servidor (Server-Side Rendering).
 *
 * - `bootstrapApplication` arranca una aplicación Angular standalone.
 * - `AppComponent` es el componente raíz que se renderiza en el servidor.
 * - `config` contiene providers y configuración específica para el entorno SSR.
 *
 * Exportamos por defecto la función `bootstrap` para que el host del servidor
 * (por ejemplo un adaptador Express o un entorno serverless) pueda importarla
 * y ejecutar el arranque de la aplicación.
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// Función que inicia la aplicación en contexto de servidor usando la configuración indicada.
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
