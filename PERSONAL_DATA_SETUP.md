# Configuración Centralizada de Datos Personales

## 📋 Descripción

Se ha implementado un sistema centralizado para gestionar todos tus datos personales y de contacto en un único archivo: `src/app/config/personal-data.config.ts`

Esta solución permite:
- ✅ **Actualización centralizada**: Cambiar datos en un solo lugar
- ✅ **Privacidad mejorada**: Fácil control de qué datos exponer
- ✅ **Mantenimiento simplificado**: No buscar en todo el proyecto
- ✅ **Reutilización**: Usar los datos en múltiples componentes

## 📁 Estructura de Datos

### Archivo: `src/app/config/personal-data.config.ts`

```typescript
PERSONAL_DATA = {
  fullName: 'Juan Pablo Rodríguez Tapiero',
  profession: 'QA Automation Engineer & Full Stack Developer',
  
  contact: {
    phone: '+57 319 584 4475',           // Formato legible
    phoneRaw: '573195844475',             // Sin caracteres (para enlaces)
    emails: [
      'juapalzt@gmail.com',
      'jprodtap@gmail.com'
    ]
  },
  
  socialLinks: {
    github: { url, username, label },
    instagram: { url, username, label },
    linkedin: { url, label },
    whatsapp: { url, phone, label }
  }
}
```

## 🔧 Cómo Actualizar Tus Datos

### 1. **Cambiar Nombre o Profesión**
```typescript
fullName: 'Tu Nuevo Nombre'
profession: 'Tu Nueva Profesión'
```

### 2. **Cambiar Teléfono**
```typescript
contact: {
  phone: '+57 XXX XXXX XXXX',      // Formato legible
  phoneRaw: '57XXXXXXXXX'           // Sin caracteres especiales
}
```

### 3. **Cambiar Emails**
```typescript
emails: [
  'nuevo@email.com',
  'backup@email.com'
]
```

### 4. **Cambiar Redes Sociales**
```typescript
socialLinks: {
  github: {
    url: 'https://github.com/tunombre',
    username: 'tunombre',
    label: 'Mi GitHub'
  },
  // ... etc
}
```

## 🎯 Componentes Actualizados

Los siguientes componentes ya usan la configuración centralizada:

### 1. **FooterComponent** ✅
- Muestra: nombre, profesión, teléfono, emails, redes sociales
- Ubicación: `src/app/components/footer/`
- Cambios: Importa `PERSONAL_DATA` e inyecta valores dinámicamente

### 2. **ContactComponent** ✅
- Genera WhatsApp link dinámicamente con teléfono de config
- Email del formulario desde config
- Ubicación: `src/app/components/contact/`
- Cambios: Usa `phoneRaw` para generar URL de WhatsApp

## 📚 Uso en Otros Componentes

Para usar los datos en otros componentes:

```typescript
import { PERSONAL_DATA, PersonalDataHelper } from '../../config/personal-data.config';

export class MiComponente {
  personalData = PERSONAL_DATA;
  
  // En el template:
  // {{ personalData.fullName }}
  // {{ personalData.contact.phone }}
  // {{ personalData.socialLinks.github.url }}
}
```

### Métodos Helper Disponibles

```typescript
PersonalDataHelper.getWhatsAppLink()      // URL de WhatsApp
PersonalDataHelper.getPrimaryEmail()       // Email principal
PersonalDataHelper.getFormattedPhone()    // Teléfono formateado
PersonalDataHelper.getAllEmails()         // Array de todos los emails
PersonalDataHelper.getSocialLinksArray()  // Array de redes sociales
```

## 🔐 Datos Sensibles

El archivo está preparado para datos sensibles que NO debajo exponerse públicamente:

```typescript
additionalInfo: {
  // cedula: 'XXXXXXX',           // NO PUBLICAR
  // birthDate: 'XXXX-XX-XX',     // NO PUBLICAR
}
```

**Recomendación**: Mantener estos datos comentados o en variables de entorno.

## 🚀 Ventajas de Esta Implementación

| Aspecto | Antes | Después |
|--------|--------|----------|
| **Lugares con datos** | Dispersos en 3+ componentes | 1 archivo central |
| **Tiempo para actualizar** | 10-15 minutos | 1-2 minutos |
| **Riesgo de inconsistencia** | Alto | Nulo |
| **Facilidad de privacidad** | Difícil | Fácil |

## 📝 Próximos Pasos (Opcional)

Si deseas mejorar más:

1. **Variables de Entorno**: Mover datos sensibles a `.env`
2. **Servicio Específico**: Crear un servicio `PersonalDataService`
3. **i18n Support**: Traducir datos de contacto (teléfono, etc.)
4. **Validación**: Añadir validadores de email y teléfono

---

**Última actualización**: 4 de diciembre de 2025
