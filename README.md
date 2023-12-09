# Proyecto Final: Aplicación de Bases de Datos con Django y React

## Descripción del Proyecto

Este proyecto es el resultado del trabajo final en la materia de bases de datos. Se trata de una aplicación web que utiliza Django para el backend y React para el frontend. La aplicación gestiona información relacionada con el mundo, con modelos que incluyen tablas para Language, City, CityLanguage, Country y Townhall.

## Estructura del Proyecto

- **backend:** Contiene la implementación del servidor Django.
- **frontend:** Contiene la implementación del cliente React.

## Configuración del Entorno de Desarrollo

### Backend (Django)

1. Crear un entorno virtual:
   ```bash
   python -m venv venv
   pip install -r backend/requirements.txt
   cd backend
   python manage.py migrate
   python manage.py runserver

   ```
## Inicializacion de Frontend

### FrontEnd (React)

   ```bash
   pnpm install
   pnpm run dev
   ```
## Estructura de la Base de Datos
La base de datos está compuesta por las siguientes tablas:

- Language: Almacena información sobre los idiomas.
- City: Contiene datos acerca de las ciudades.
- CityLanguage: Asocia idiomas a ciudades.
- Country: Almacena detalles sobre los países.
- Townhall: Registra información sobre alcaldias.

## Contribuciones y Problemas
Si encuentras algún problema o tienes ideas para mejorar la aplicación, no dudes en crear un issue en este repositorio. También, ¡estamos abiertos a colaboraciones!

Autores
[Kevin Santiago Rojas Rosas
