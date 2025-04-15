# BeatDate – Sistema de Cartelera y Promoción Musical 
# Materia **Prácticas Profesionalizantes II** - VELLINI MARIA FLORENCIA

## Descripción

**BeatDate** es una aplicación web destinada a gestionar una **cartelera online de eventos musicales**, permitiendo:
- Registrar e iniciar sesión como artista o administrador.
- Cargar y visualizar presentaciones en vivo.
- Administrar y promocionar actividades en diferentes plataformas musicales.

El objetivo es brindar un espacio donde artistas puedan difundir sus presentaciones y el público pueda acceder al cronograma de eventos.

## Tecnologías utilizadas

- `Node.js` y `Express` (backend)
- `MySQL` (base de datos)
- `HTML`, `CSS`, `JavaScript` (frontend)
- `Adminer` / `phpMyAdmin` para gestión de la Base de Datos

## Estructura del proyecto

\`\`\`
beatdate-app/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── css/
│   │   ├── styles.css
│   │   └── w3.css
│   ├── js/
│   │   └── frontDispatcher.js
│   └── index.html
│
└── .gitignore
\`\`\`

## Estado del avance al 15/04/2025

**Login y registro funcionales**  
Base de datos conectada correctamente  
Validación de sesiones y perfiles de usuario  
Registro de presentaciones  
----