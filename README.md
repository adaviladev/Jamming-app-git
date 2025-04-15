# Jammming

Jammming is a React application built with Vite. This project is designed to [describe your app's purpose].

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev`.

## Features

- Feature 1
- Feature 2
- Feature 3

****

# Jammming

Jammming es una aplicación React construida con Vite que permite a los usuarios buscar canciones en Spotify, crear y editar listas de reproducción, y guardarlas directamente en sus cuentas de Spotify.

## 🚀 Getting Started

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
    ```bash
   git clone <URL_DEL_REPOSITORIO>
2. Instala las dependencias:
    ```npm install
3. Inicia el servidor de desarrollo
    ```npm run dev

# Features

1. Búsqueda de canciones
    + Los usuarios pueden buscar canciones, álbumes o artistas utilizando la barra de búsqueda.
    + Los resultados de búsqueda se obtienen directamente desde la API de Spotify.
2. Creación de listas de reproducción
    + Los usuarios pueden crear nuevas listas de reproducción.
    + Las canciones se pueden agregar desde los resultados de búsqueda a la lista de reproducción actual.
3. Edición de listas de reproducción existentes
    + Los usuarios pueden seleccionar una lista de reproducción existente desde su cuenta de Spotify.
    + Es posible editar el nombre de la lista y agregar o eliminar canciones.
4. Guardado de listas de reproducción
    + Las listas de reproducción pueden guardarse en Spotify, ya sea como nuevas listas o actualizando listas existentes.
5. Interfaz intuitiva
    + Diseño limpio y fácil de usar, con componentes React reutilizables como SearchBar, SearchResults, Playlist, y PlaylistList.

# 🛠️ Tecnologías utilizadas
+ React: Biblioteca para construir la interfaz de usuario.
+ Vite: Herramienta de construcción rápida para proyectos modernos de frontend.
+ Spotify Web API: Para buscar canciones y gestionar listas de reproducción.
+ CSS Modules: Para estilos encapsulados y específicos de cada componente.

# Estructura del proyecto

src/
├── components/
│   ├── App/                # Componente principal de la aplicación
│   ├── Playlist/           # Componente para gestionar una lista de reproducción
│   ├── PlaylistList/       # Componente para mostrar las listas de reproducción del usuario
│   ├── SearchBar/          # Barra de búsqueda
│   ├── SearchResults/      # Resultados de búsqueda
│   ├── Track/              # Componente para una canción individual
│   └── Tracklist/          # Contenedor para múltiples canciones
├── util/
│   └── [Spotify.js](http://_vscodecontentref_/1)          # Lógica para interactuar con la API de Spotify
├── index.css               # Estilos globales
├── [main.jsx](http://_vscodecontentref_/2)                # Punto de entrada de la aplicación

# Configuración de Spotify API

Para que la aplicación funcione correctamente, necesitas configurar las credenciales de la API de Spotify:

1. Crea una aplicación en Spotify Developer Dashboard.
2. Obtén tu Client ID y configura el Redirect URI (por ejemplo, http://127.0.0.1:3000).
3. Actualiza las variables clientId y redirectUri en el archivo Spotify.js:

```const clientId = 'TU_CLIENT_ID';
```const redirectUri = 'http://127.0.0.1:3000';

# 🧪 Próximos pasos
+ Mejorar la experiencia de usuario con mensajes de confirmación al guardar listas de reproducción.
+ Implementar pruebas unitarias para garantizar la estabilidad del proyecto.
Optimizar el rendimiento de las solicitudes a la API de Spotify.

📄 Licencia
+ Este proyecto está bajo la licencia MIT.

¡Gracias por usar Jammming! 🎵