# 📚 Curso de Lógica Computacional

Un proyecto educativo completo que proporciona recursos digitales para el aprendizaje de la lógica computacional a través de 12 temas estructurados.

## 🎯 Descripción del Proyecto

Este proyecto nace de la necesidad de proporcionar a los estudiantes un recurso digital organizado y accesible para el curso de Lógica Computacional. El objetivo es crear una plataforma web moderna que permita a los estudiantes navegar fácilmente por todos los temas del curso, acceder a material de estudio, ejercicios prácticos y recursos adicionales.

## 🏗️ Estructura del Proyecto

```
logica-computacional/
├── index.html                 # Página principal del curso
├── assets/
│   ├── css/
│   │   └── styles.css         # Estilos principales
│   ├── js/
│   │   └── main.js           # Funcionalidad JavaScript
│   └── images/               # Imágenes del proyecto
├── temas/
│   ├── tema1/
│   │   ├── contenido.html    # Contenido del tema 1
│   │   ├── tema1.pdf         # PDF original del tema
│   │   └── ejercicios.html   # Ejercicios del tema
│   ├── tema2/                # (Estructura similar para temas 2-12)
│   ├── tema3/
│   └── ... (hasta tema 12)
├── recursos/
│   ├── ejercicios/           # Ejercicios adicionales
│   ├── evaluaciones/         # Exámenes y quizzes
│   └── material-adicional/   # Documentos complementarios
└── README.md                 # Este archivo
```

## 📋 Temas del Curso

### ✅ Tema 1: Justificación de la Lógica
- **Estado**: Completado
- **Contenido**: Fundamentos básicos de la lógica computacional y su importancia en la informática
- **Recursos**: PDF completo, contenido web, ejercicios

### 🔄 Temas 2-12: En Desarrollo
- **Tema 2**: Cálculo de Deducción Natural de Enunciados
- **Tema 3**: Estrategias de Formalización para la Lógica Proposicional
- **Tema 4**: Estrategias de Deducción para la Lógica Proposicional
- **Tema 5**: Semántica de la Lógica Proposicional
- **Tema 6**: Aplicaciones de la Lógica Proposicional: Circuitos Lógicos
- **Tema 7**: Cálculo de Deducción Natural de Predicados
- **Tema 8**: Estrategias de Formalización para la Lógica de Predicados
- **Tema 9**: Estrategias de Deducción para la Lógica de Predicados
- **Tema 10**: Teoría de Conjuntos y Lógica de Predicados
- **Tema 11**: Semántica de la Lógica de Predicados
- **Tema 12**: Aplicaciones de la Lógica de Predicados: Introducción a la Programación Lógica

## 🚀 Características del Proyecto

### ✨ Interfaz Moderna
- Diseño responsivo que se adapta a diferentes dispositivos
- Navegación intuitiva y fácil de usar
- Animaciones suaves y efectos visuales atractivos
- Paleta de colores profesional y accesible

### 📱 Funcionalidades Interactivas
- **Seguimiento de Progreso**: Los estudiantes pueden ver su avance en cada tema
- **Navegación Inteligente**: Enlaces activos que se actualizan según la sección visible
- **Notificaciones**: Sistema de alertas para informar sobre el estado de los temas
- **Búsqueda y Filtros**: (Próximamente) Búsqueda de contenido y filtros por estado

### 🎓 Recursos Educativos
- **Contenido Estructurado**: Cada tema tiene su propia página con contenido organizado
- **Material Descargable**: PDFs originales disponibles para descarga
- **Ejercicios Prácticos**: Problemas y ejercicios para reforzar el aprendizaje
- **Recursos Adicionales**: Material complementario y referencias

### 🔧 Características Técnicas
- **HTML5 Semántico**: Estructura de código limpia y accesible
- **CSS3 Moderno**: Variables CSS, Flexbox, Grid y animaciones
- **JavaScript Vanilla**: Funcionalidad interactiva sin dependencias externas
- **Accesibilidad**: Cumple con estándares de accesibilidad web
- **SEO Optimizado**: Meta tags y estructura para mejor indexación

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Fuentes**: Inter (Google Fonts)
- **Iconos**: Font Awesome 6.0
- **Responsive Design**: Mobile-first approach
- **Almacenamiento Local**: localStorage para progreso del usuario

## 📖 Cómo Usar el Proyecto

### Para Estudiantes
1. **Acceder al Curso**: Abrir `index.html` en cualquier navegador moderno
2. **Navegar por Temas**: Usar la sección "Temas del Curso" para acceder al contenido
3. **Seguir el Progreso**: El sistema automáticamente guarda el progreso de lectura
4. **Descargar Material**: Acceder a los PDFs originales desde cada tema
5. **Practicar**: Completar ejercicios y evaluaciones disponibles

### Para Docentes
1. **Personalizar Contenido**: Modificar los archivos HTML según las necesidades del curso
2. **Agregar Temas**: Crear nuevas carpetas y archivos para temas adicionales
3. **Actualizar Recursos**: Añadir ejercicios, evaluaciones y material complementario
4. **Configurar Hosting**: Subir el proyecto a un servidor web para acceso remoto

## 🔧 Instalación y Configuración

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web (opcional, para hosting)

### Instalación Local
1. Clonar o descargar el proyecto
2. Abrir `index.html` en el navegador
3. ¡Listo! El proyecto funciona completamente offline

### Hosting en Servidor
1. Subir todos los archivos al servidor web
2. Configurar el servidor para servir archivos estáticos
3. Acceder a través de la URL del servidor

## 📝 Personalización

### Cambiar Colores
Editar las variables CSS en `assets/css/styles.css`:
```css
:root {
    --primary-color: #2563eb;    /* Color principal */
    --secondary-color: #64748b;  /* Color secundario */
    --accent-color: #f59e0b;     /* Color de acento */
    /* ... más variables */
}
```

### Agregar Nuevos Temas
1. Crear carpeta `temas/temaX/`
2. Crear archivo `contenido.html` siguiendo la estructura del tema 1
3. Actualizar `index.html` con la información del nuevo tema
4. Agregar el PDF correspondiente

### Modificar Funcionalidad
Editar `assets/js/main.js` para:
- Cambiar comportamientos de navegación
- Agregar nuevas funcionalidades
- Modificar el sistema de progreso
- Personalizar notificaciones

## 🤝 Contribuciones

Este proyecto está diseñado para ser fácilmente personalizable y extensible. Las contribuciones pueden incluir:

- **Nuevos Temas**: Agregar contenido para temas adicionales
- **Mejoras de UX**: Sugerencias para mejorar la experiencia del usuario
- **Funcionalidades**: Nuevas características y herramientas
- **Correcciones**: Reportes de bugs y mejoras de código

## 📄 Licencia

Este proyecto está diseñado para uso educativo. Los derechos de autor del contenido original pertenecen a sus respectivos autores.

## 👨‍🏫 Información del Curso

- **Asignatura**: Lógica Computacional
- **Modalidad**: Presencial con recursos digitales
- **Duración**: 12 semanas (1 tema por semana)
- **Créditos**: [Especificar según la institución]

## 📞 Contacto

Para preguntas, sugerencias o soporte técnico:
- **Docente**: [Nombre del profesor]
- **Email**: [Correo electrónico]
- **Institución**: [Nombre de la institución]

---

**Desarrollado con ❤️ para el aprendizaje de la Lógica Computacional**

*Última actualización: Agosto 2024*
