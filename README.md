# CNextjs
Curso de Next.js

## Construir una web app con React no es fácil

  - Un sistema de enrutamiento intuitivo basado en páginas (con soporte para rutas dinámicas)
  - La representación previa, tanto la generación estática (SSG) como la representación del lado del servidor (SSR) son compatibles por página
  - División automática de código para cargas de página más rápidas
  - Enrutamiento del lado del cliente con captura previa optimizada
  - Compatibilidad con CSS y Sass incorporada, y compatibilidad con cualquier biblioteca CSS-in-JS
  - Entorno de desarrollo con soporte Fast Refresh
  - Rutas de API para crear endpoints de API con funciones sin servidor
  - Totalmente ampliable

## Nuestro proyecto y lo que necesitaremos
  [Repo del proyecto](https://github.com/jonalvarezz/platzi-nextjs)

  [Desplegado en Vercel](https://platzi-avo.vercel.app/)

## Instalando NextJS
  [Nextjs](https://nextjs.org/docs/getting-started)

  Requisitos:
  - Tener node.js instalado en su computadora mayor a la versión 12.0.0
  - Git instalado en su computadora
  - Browser chrome o firefox

  Instalación:
  - CLI npm create next-app
  - Manual:
    - Inicializar el proyecto: npm init -y
    - Instalamos nextjs npm install next react react-dom
    - Configuramos nuestros scripts:
      - dev: next
      - build: next build
      - start: next start
    - Creamos nuestro directorio de proyecto "pages"
    - Corremos "npm run dev"

## Rutas básicas
  - Rutas Estáticas: Son las que son sencillas y no necesitan de una API
  - Rutas Dinámicas: Son aquellas que se generan de una forma consecutiva dependiendo de variables de entrada

  ![](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-12-04%20a%20la%28s%29%201.05.11-19974b7e-13dd-4ce9-9858-e9dd903e8159.jpg)

## Rutas dinámicas
  - Las rutas dinámicas son las que se generan de una forma consecutiva dependiendo de variables de entrada
  - Las rutas dinámicas se generan de la siguiente forma: `/:variable` o `/:variable/:variable2` 

  [Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes)

## UnderTheHood setup y páginas: optimizaciones ocultas
  - UnderTheHood: Es el proceso de optimización de código que se realiza en el servidor
    next build : para producción 
    next start : servidor node que trae nextjs para producción
  - Code splitting es una técnica que permite dividir el código en partes independientes y cargarlas en tiempo de ejecución
  - chunks: es una parte de código que se carga en tiempo de ejecución

