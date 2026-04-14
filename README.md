# 🎮 GamerZone — Tienda Virtual de Videojuegos

> Proyecto desarrollado con **React + Vite** y **Material UI (MUI v6)** como parte del Taller 3 del programa de formación SENA.

---

## 📋 Descripción

**GamerZone** es una landing page / tienda virtual orientada al mundo de los videojuegos. Permite explorar un catálogo de artículos, agregar productos al carrito y a favoritos, y navegar entre secciones como Ofertas, Mi Cuenta, Mis Favoritos y Mis Compras.

El proyecto fue construido con el objetivo de practicar el uso de **React Hooks**, **React Router**, **componentes reutilizables** y la librería de estilos **Material UI**, integrando conceptos de diseño responsivo y gestión de estado.

---

## ✨ Características Principales

- 🏠 **Landing Page** con banner de bienvenida, sección de características y tarjetas informativas
- 🛒 **Catálogo de artículos** con 20 juegos, precio, descuento, categoría y botones de acción
- ❤️ **Sistema de Favoritos** con contador en tiempo real en el header
- 🛒 **Carrito de compras** con badge actualizable desde cualquier tarjeta
- 🔗 **Navegación con React Router** usando `HashRouter` y `NavLink` con estilos activos
- 📱 **Diseño responsivo** adaptado para móvil, tablet y escritorio
- 🎯 **Página de Ofertas** con 8 demostraciones interactivas de React Hooks
- 👤 Páginas individuales para Mi Cuenta, Mis Favoritos y Mis Compras

---

## 🖥️ Interfaz Gráfica

### Header
- Logo con imagen personalizada y nombre **GamerZone**
- Links de navegación con efecto `active` y hover en color `rgb(226, 43, 165)`
- Badge de favoritos sobre el link "MIS FAVORITOS"
- Buscador con animación de expansión
- Carrito con badge contador en rojo

### Página de Inicio (Content)
- Banner con imagen de fondo, capa oscura y texto superpuesto
- Sección **Características** con 4 cards informativas con hover animado

### Página de Artículos
- Grid de 4 columnas con 20 juegos
- Cada card muestra: imagen, categoría, título, precio con descuento
- Botones: ❤️ Favoritos y 🛒 Agregar al carrito
- Hover con efecto `scale`

### Página de Ofertas (React Hooks)
- 8 cards interactivas, una por cada hook:
  - `useState` → selector de color favorito
  - `useEffect` → simulación de título con notificaciones
  - `useContext` → cambio de usuario logueado
  - `useRef` → enfoque de input desde botón
  - `useReducer` → lista de tareas con agregar/eliminar
  - `useCallback` → contador con medición de re-renders
  - `useMemo` → cálculo de números pares memorizado
  - `Custom Hook` → contador reutilizable `useContador`

### Footer
- 4 columnas: Logo, Navegación, Soporte, Recibe Ofertas
- Links con hover en color rosa
- Copyright al pie

---

## 🏗️ Arquitectura del Proyecto

```
MuiHooks/
├── public/
│   └── imgs/                  # Imágenes del proyecto (banner, logo, juegos, etc.)
├── src/
│   ├── articles/
│   │   └── components/
│   │       └── Articles.jsx   # Catálogo de juegos
│   ├── compra/
│   │   └── components/
│   │       └── Compras.jsx    # Página Mis Compras
│   ├── cuenta/
│   │   └── components/
│   │       └── MiCuenta.jsx   # Página Mi Cuenta
│   ├── favorites/
│   │   └── components/
│   │       └── Favorites.jsx  # Página Mis Favoritos
│   ├── layout/
│   │   └── components/
│   │       ├── Header.jsx     # Barra de navegación
│   │       ├── Footer.jsx     # Pie de página
│   │       └── Content.jsx    # Página de inicio
│   ├── ofert/
│   │   └── components/
│   │       └── Oferts.jsx     # Demos interactivas de Hooks
│   ├── App.jsx                # Rutas principales y estado global
│   └── main.jsx               # Punto de entrada
├── index.html
├── vite.config.js
└── package.json
```

### Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18+ | Framework principal |
| Vite | 5+ | Bundler y servidor de desarrollo |
| Material UI (MUI) | v6 | Componentes de interfaz |
| React Router DOM | v6 | Navegación entre páginas |
| gh-pages | 6+ | Despliegue en GitHub Pages |

### Gestión de Estado

El estado global del carrito y favoritos se maneja con `useState` en `App.jsx` y se pasa como props a los componentes que lo necesitan:

```
App.jsx
  ├── useState → favoritos, carrito
  ├── Header  ← recibe: favoritos, carrito
  └── Articles ← recibe: setFavoritos, setCarrito
```

---

## 👨‍💻 Datos del Autor

| Campo | Información |
|---|---|
| **Nombre** | Juan José Giraldo |
| **Programa** | Análisis y Desarrollo de Software |
| **Institución** | SENA |
| **Trimestre** | 3° Trimestre |
| **Año** | 2026 |
| **Proyecto** | Taller 3 — React + MUI |

### Contacto

- 📧 Email: *(correo del autor)*
- 🐙 GitHub: *(usuario de GitHub)*
- 🚀 Deploy: [GitHub Pages](https://TuUsuario.github.io/Taller3React.github.io)

---

## 🚀 Instalación y Uso

```bash
# Clonar el repositorio
git clone https://github.com/TuUsuario/Taller3React.github.io.git

# Entrar al directorio
cd MuiHooks

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Desplegar en GitHub Pages
npm run deploy
```

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos para el programa de formación del **SENA**.  
© 2026 Juan José Giraldo — All Rights Reserved :|