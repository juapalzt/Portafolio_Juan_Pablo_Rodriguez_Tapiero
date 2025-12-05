/**
 * ========================================
 * CONFIGURACIÓN CENTRALIZADA DE DATOS PERSONALES
 * ========================================
 * 
 * Este archivo contiene todos los datos personales y de contacto
 * en un único lugar para facilitar:
 * - Actualización centralizada
 * - Privacidad y seguridad
 * - Mantenimiento del portafolio
 * 
 * IMPORTANTE: Los datos sensibles (teléfono, email) se pueden reemplazar
 * fácilmente desde aquí sin necesidad de buscar en todo el proyecto.
 */

export const PERSONAL_DATA = {
  // ========== DATOS PERSONALES BÁSICOS ==========
  fullName: 'Juan Pablo Rodríguez Tapiero',
  profession: 'QA Automation Engineer & Full Stack Developer',
  title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
  
  // ========== INFORMACIÓN DE CONTACTO ==========
  contact: {
    phone: '+57 319 584 4475',
    phoneRaw: '573195844475', // Sin caracteres especiales para enlaces
    emails: [
      'juapalzt@gmail.com',
      'jprodtap@gmail.com'
    ]
  },

  // ========== DATOS PERSONALES DETALLADOS ==========
  personalDetails: {
    birthDate: '21/11/2000',
    cedula: '1000514447',
    nationality: 'Bogotá D.C / Colombia',
    address: 'Calle 69# 112 A 09 Localidad Engativá occidente Barrio: Marandu'
  },

  // ========== REDES SOCIALES ==========
  socialLinks: {
    github: {
      url: 'https://github.com/juapalzt',
      username: 'juapalzt',
      label: 'Perfil GitHub'
    },
    instagram: {
      url: 'https://instagram.com/juapalzt',
      username: 'juapalzt',
      label: 'Perfil Instagram'
    },
    linkedin: {
      url: 'https://linkedin.com',
      label: 'Perfil LinkedIn'
    },
    whatsapp: {
      url: 'https://wa.me/573195844475',
      phone: '573195844475',
      label: 'WhatsApp directo'
    }
  },

  // ========== DOCUMENTOS Y ARCHIVOS ==========
  documents: {
    cv: 'Hoja de vida - Juan Pablo Rodriguez Tapiero.pdf'
  },

  // ========== PERFIL LABORAL ==========
  workProfile: `Tecnólogo en Análisis y Desarrollo de Sistemas de Información con sólidos conocimientos en desarrollo web y backend, complementados con experiencia en metodologías ágiles como Scrum. Poseo más de dos años de experiencia en automatización de pruebas, especializado en la optimización de procesos, la mejora de la eficiencia operativa y el aseguramiento de la calidad en entornos de desarrollo.
Cuento con habilidades avanzadas en automatización utilizando Virtuoso QA, Selenium, Appium, JUnit, TestNG y Cucumber, además de experiencia en pruebas de APIs con Postman, SoapUI y Apache JMeter, garantizando una cobertura integral y precisa. Mi enfoque está orientado al pensamiento lógico, la capacidad de abstracción y la resolución efectiva de problemas complejos.
Estoy certificado en Lean Six Sigma, Scrum Foundation y Postman, lo que me permite aplicar enfoques estructurados y estratégicos para la mejora continua de los procesos de QA. Adicionalmente, he fortalecido mis conocimientos en herramientas y metodologías basadas en inteligencia artificial, incluyendo estructuración de prompts y su aplicación para mejorar el desarrollo, la automatización y la optimización de procesos.
Me destaco por la documentación minuciosa de casos de prueba, el análisis de datos y el liderazgo técnico dentro de equipos QA, fomentando la colaboración, la calidad y la mejora constante mediante la reducción de tiempos de ejecución y la automatización de procesos.`,

  // ========== FORMACIÓN ACADÉMICA ==========
  education: [
    {
      institution: 'UNIVERSIDAD ÁREA ANDINA',
      degree: 'INGENIERÍA DE SISTEMAS',
      status: 'Cursando',
      date: '01/02/2023',
      type: 'Pregrado'
    },
    {
      institution: 'SENA - CENTRO DE SERVICIOS FINANCIEROS',
      degree: 'TECNÓLOGO EN ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORMACIÓN',
      status: 'Egresado',
      date: '18/01/2021',
      type: 'Técnico'
    },
    {
      institution: 'SENA',
      degree: 'COMPLEMENTARIA VIRTUAL EN ANÁLISIS PARA EL DESARROLLO CON APP INVENTOR',
      status: 'Egresado',
      date: '04/06/2021',
      type: 'Complementaria'
    },
    {
      institution: 'SENA',
      degree: 'CALIDAD EN EL DESARROLLO DE SOFTWARE',
      status: 'Egresado',
      date: '04/12/2018',
      type: 'Complementaria'
    },
    {
      institution: 'SENA',
      degree: 'ENGLISH DOTWORKS BEGINNER',
      status: 'Egresado',
      date: '08/11/2018',
      type: 'Idioma'
    },
    {
      institution: 'SENA - CENTRO DE SERVICIOS FINANCIEROS',
      degree: 'EJERCICIO DERECHOS FUNDAMENTALES EN EL TRABAJO',
      status: 'Egresado',
      date: '12/02/2020',
      type: 'Complementaria'
    },
    {
      institution: 'COLEGIO VILLA AMALIA I.E.D',
      degree: 'GESTIÓN Y ORGANIZACIÓN EMPRESARIAL',
      status: 'Egresado',
      date: '2017',
      type: 'Bachillerato'
    }
  ],

  // ========== EXPERIENCIA LABORAL ==========
  workExperience: [
    {
      company: 'DXC TECHNOLOGY',
      position: 'Líder de Desarrollo de Automatización de Pruebas en Java Selenium',
      startDate: '01-02-2023',
      endDate: '11-06-2025',
      responsibilities: [
        'Liderar creación y mantenimiento de automatización de pruebas para aplicaciones web y app utilizando Selenium con Java y Appium',
        'Implementé pruebas funcionales y de rendimiento en entornos web y móviles',
        'Implementación de frameworks de pruebas basados en Page Object Model y Data-Driven Testing',
        'Coordinación de un equipo multidisciplinario bajo metodologías ágiles (Scrum), asegurando el cumplimiento de plazos y la calidad del producto en 70%',
        'Reducción del tiempo de ejecución de pruebas automatizadas mediante la optimización de scripts',
        'Realización de pruebas de APIs para verificar la correcta integración y funcionamiento de los servicios',
        'Uso de Apache JMeter para pruebas de rendimiento y carga, garantizando que los servicios cumplan con los requisitos de escalabilidad',
        'Atención al Usuario y comprensión con las incidencias del cliente'
      ]
    },
    {
      company: 'GRUPO CINTE COLOMBIA',
      position: 'Tester Junior',
      startDate: '29-06-2021',
      endDate: '31-01-2023',
      responsibilities: [
        'Realización de pruebas funcionales web y APP, pruebas de rendimiento y pruebas de escalabilidad',
        'Realización de documentación de casos de prueba y pruebas sugeridas',
        'Manejo de sistema de datos (Microsoft SQL Server)',
        'Ejecución de pruebas de APIs y uso de Apache JMeter para pruebas de rendimiento y carga',
        'Atención al Usuario y comprensión con las incidencias del cliente'
      ]
    },
    {
      company: 'COMPONENTE SERVIEX S.A.S',
      position: 'Tester Junior',
      startDate: '04-02-2020',
      endDate: '03-06-2020',
      responsibilities: [
        'Realización de pruebas funcionales web y APP, pruebas de rendimiento y pruebas de escalabilidad',
        'Manejo de sistema de datos (Microsoft SQL Server)',
        'Realización de pruebas de APIs para verificar la correcta integración y funcionamiento de los servicios',
        'Atención al Usuario y comprensión con las incidencias del cliente'
      ]
    }
  ],

  // ========== HABILIDADES TÉCNICAS ==========
  technicalSkills: {
    developmentEnv: ['Netbeans', 'Visual Studio 2019', 'Visual Studio Code', 'Eclipse', 'Sublime Text'],
    languages: ['Java', 'JavaScript', 'ASP.NET MVC', 'SQL', 'HTML', 'CSS', 'Bootstrap', 'PHP', 'JSF', 'XML'],
    databases: ['MySQL', 'Microsoft SQL Server', 'XAMPP'],
    testingTools: ['Selenium', 'Postman', 'SoapUI', 'Apache JMeter', 'TestLink', 'Mantis', 'ALM'],
    automationTools: ['Maven', 'Virtuoso QA', 'Appium', 'JUnit', 'TestNG', 'Cucumber'],
    projectManagement: ['ALM', 'Jira', 'Mantis', 'Git'],
    aiTools: ['Copilot'],
    others: ['Microsoft Office', 'Kleopatra']
  },

  // ========== REFERENCIAS ==========
  references: {
    family: [
      {
        name: 'José Luis Rodriguez Tapiero',
        position: 'Analista',
        relationship: 'Hermano',
        phone: '3115955713'
      },
      {
        name: 'Jilmar Alexis Rodriguez Tapiero',
        position: 'Coordinador de Almacén',
        relationship: 'Hermano',
        phone: '3045214694'
      }
    ],
    personal: [
      {
        name: 'Mileidy Cespedes Delgado',
        position: 'Asesor Comercial',
        phone: '3115955713'
      },
      {
        name: 'Santiago Ramírez',
        position: 'QA Tester Junior',
        phone: '3138956954'
      }
    ],
    professional: [
      {
        name: 'Bruno Isaac Gomez',
        position: 'Líder Automatización',
        relationship: 'Líder',
        phone: '3015001215'
      },
      {
        name: 'Cristian Ovaller',
        position: 'Analista de Software Senior',
        relationship: 'Líder',
        phone: '3143143195'
      }
    ]
  },

  // ========== DATOS ADICIONALES (para futuro uso) ==========
  additionalInfo: {
    // Datos sensibles - mantener privados
  }
};

/**
 * Utilidades para acceder a datos de contacto de forma segura
 */
export class PersonalDataHelper {
  /**
   * Obtiene el teléfono formateado para WhatsApp
   */
  static getWhatsAppLink(): string {
    return PERSONAL_DATA.socialLinks.whatsapp.url;
  }

  /**
   * Obtiene el email primario
   */
  static getPrimaryEmail(): string {
    return PERSONAL_DATA.contact.emails[0];
  }

  /**
   * Obtiene el teléfono en formato legible
   */
  static getFormattedPhone(): string {
    return PERSONAL_DATA.contact.phone;
  }

  /**
   * Obtiene todos los emails para mostrar en contacto
   */
  static getAllEmails(): string[] {
    return PERSONAL_DATA.contact.emails;
  }

  /**
   * Obtiene todas las redes sociales como array
   */
  static getSocialLinksArray() {
    return [
      { name: 'GitHub', url: PERSONAL_DATA.socialLinks.github.url },
      { name: 'Instagram', url: PERSONAL_DATA.socialLinks.instagram.url },
      { name: 'LinkedIn', url: PERSONAL_DATA.socialLinks.linkedin.url },
      { name: 'WhatsApp', url: PERSONAL_DATA.socialLinks.whatsapp.url }
    ];
  }

  /**
   * Obtiene todas las habilidades técnicas como array plano
   */
  static getAllTechnicalSkills(): string[] {
    const skills: string[] = [];
    const techSkills = PERSONAL_DATA.technicalSkills;
    
    skills.push(...techSkills.developmentEnv);
    skills.push(...techSkills.languages);
    skills.push(...techSkills.databases);
    skills.push(...techSkills.testingTools);
    skills.push(...techSkills.automationTools);
    skills.push(...techSkills.projectManagement);
    skills.push(...(techSkills.aiTools || []));
    skills.push(...(techSkills.others || []));

    return skills;
  }

  /**
   * Obtiene años de experiencia total basado en workExperience
   */
  static getWorkExperienceYears(): number {
    if (!PERSONAL_DATA.workExperience || PERSONAL_DATA.workExperience.length === 0) {
      return 0;
    }
    
    // Obtiene el año de la empresa más antigua
    const years = PERSONAL_DATA.workExperience.map(job => {
      const startYear = parseInt(job.startDate.split('-')[1]);
      return startYear;
    });
    
    const minYear = Math.min(...years);
    const currentYear = new Date().getFullYear();
    
    return currentYear - minYear;
  }

  /**
   * Obtiene referencias profesionales
   */
  static getProfessionalReferences() {
    return PERSONAL_DATA.references.professional || [];
  }

  /**
   * Obtiene todas las referencias
   */
  static getAllReferences() {
    return {
      professional: PERSONAL_DATA.references.professional || [],
      personal: PERSONAL_DATA.references.personal || [],
      family: PERSONAL_DATA.references.family || []
    };
  }

  /**
   * Obtiene certificaciones (si existen en futuro)
   */
  static getCertifications() {
    // Placeholder para futuras certificaciones
    return [];
  }
}
