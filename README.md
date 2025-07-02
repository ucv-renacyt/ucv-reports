# UCV Reports

Este proyecto es un sistema de reportes desarrollado para la Universidad Central de Venezuela (UCV), compuesto por dos módulos principales: un frontend y un backend. El objetivo es facilitar la gestión, visualización y generación de reportes institucionales.

## Estructura del Proyecto

- **frontend-ucvreports/**: Contiene la aplicación frontend (interfaz de usuario) desarrollada en JavaScript, HTML y CSS.
- **backend-ucvreports/**: Contiene la API y lógica de negocio, desarrollada con NestJS (Node.js + TypeScript).

---

## Frontend

Ubicación: `frontend-ucvreports/`

### Instalación de dependencias

```bash
cd frontend-ucvreports
npm install
```

### Ejecución

```bash
node server.js
```

La aplicación estará disponible en `http://localhost:3000` (o el puerto configurado en `server.js`).

### Estructura relevante

- `HTML/`: Archivos HTML de la aplicación.
- `CSS/`: Archivos de estilos.
- `JAVASCRIPT/`: Scripts de la aplicación.
- `package.json`: Dependencias y scripts del frontend.

---

## Backend

Ubicación: `backend-ucvreports/`

### Instalación de dependencias

```bash
cd backend-ucvreports
npm install
```

### Ejecución

Modo desarrollo:

```bash
npm run start:dev
```

Modo producción:

```bash
npm run start:prod
```

### Estructura relevante

- `src/`: Código fuente principal (NestJS).
- `templates/`: Plantillas utilizadas por el backend.
- `package.json`: Dependencias y scripts del backend.

---

## Notas adicionales

- Cada módulo tiene su propio archivo `README.md` con instrucciones más detalladas.
- Asegúrate de tener Node.js y npm instalados en tu sistema.
- Utiliza los archivos `.gitignore` de cada módulo para evitar subir archivos innecesarios.

---
