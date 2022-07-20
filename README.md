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

## UnderTheHood páginas: pre rendering de páginas
  Rendering es el proceso de generación de páginas
  
  El SSR es el método en el cual el Servidor manda al cliente (navegador web) el código html listo para que se muestre en pantalla. Esto lo que significa es que el cliente no tiene que gastar computo y tiempo haciendo el proceso de renderizado, si no que ya viene hecho.
Ventajas

    Permite que la pagina muestre contenido de una manera mucho mas rápida
    Es bueno para el SEO

Desventajas

    Si el usuario quiere interacción inmediata, la pagina no lo va a poder procesar, ya que incluso aunque el html venga listo para mostrarse, aun así, el cliente tiene que preparar todo para que la pagina sea interactiva, lo cual también lleva sus milisegundos (dependiendo del dispositivo e internet)
    El proceso de descargar el js se hace cada vez que se recarga la pagina

En conclusión, el SSR es muy útil, ya que nos ayuda a que el usuario no abandone la pagina tan pronto e incluso aunque el SSR tenga sus desventajas, las ventajas son mayores.

[The Benefits of Server Side Rendering Over Client Side Rendering](https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8)

![](https://miro.medium.com/max/1400/1*jJkEQpgZ8waQ5P-W5lhxuQ.png)

## Enlazando páginas
  [next/link](https://nextjs.org/docs/api-reference/next/link)
  Next.JS requiere que dentro del componente de Link se encuentre una etiqueta <a></a>, de forma que sea amigable para el SEO. Si no la agregas, de igual forma funciona, pero verás un warning de parte de Next.JS.

  Pueden ver un poco más de información de como trabajar con Styled Components o Componentes que envuelven la etiqueta <a>

  No sufre ningun tipo de recarga de página, ya que el código de la página se carga en tiempo de ejecución esto es [Single Page Application](https://nextjs.org/docs/routing/introduction#linking-between-pages)

## UnderTheHood enlazando páginas: prefetching automático
  - Corremos nuestro build de producción con "npm run build" y servidor en producción con "npm run start".
  Prefetching: es una técnica que permite cargar el código de una página en tiempo de ejecución, para que el usuario no tenga que esperar a que se cargue la página.

  Usar prefetch es recomendable para cargar páginas pesadas, es el mayor propósito. El navegador en últimas tomará la decisión de qué tanto guardar en el prefetch.

  Qué hay que tener en cuenta para prefetch:

    Que si los archivos a hacer prefetch son muy pesados, es posible que nunca se realice el prefetch porque nunca acaba.

  Es por eso que Next.JS usa un enfoque de múltiples archivos hacerlos portables y pequeños

## ¿Cómo crear API con NextJS?
  Configurando una API con Next.JS y TypeScript.

## Creando y consumiendo nuestra propia API
  Creamos una página o ruta dinamica para el producto.
  ![](https://static.platzi.com/media/user_upload/code-83ebf081-9e4c-4108-a524-ab99b66e98bb.jpg)

  Debug en nextjs dentro del package.json creamos un script para que se ejecute una vez que se haya compilado el código:
  ```
  "debug": "NODE_OPTIONS=--'inspect' next",
  ```
  Y dentro del navegador ejecutamos el comando:
  ```
  about:inspect
  ```
## Solucion del reto
  Ejemplo 2 :
  ![](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-12-16%20a%20la%28s%29%2016.59.59-1b001f08-cc15-47f5-b1d8-94e0f93489ed.jpg)

  ![](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-12-16%20a%20la%28s%29%2017.00.16-aca2cda2-f272-4d2f-a54e-356665c94445.jpg) 

  ![](https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202020-12-16%20a%20la%28s%29%2017.01.45-97794b30-60ba-4c40-8841-b71ed4c67f54.jpg)


## Extendiendo el Document
  Extender Next.JS para que nos permita crear un documento personalizado.
  
  Document.- Archivo principal de nuestra pagina donde los cambios se pueden aplicar a una escala global.

  Documentation de Next.js custom document:
  [Custom Document](https://nextjs.org/docs/advanced-features/custom-document)

  La estructura de nuestro proyecto suele ser

    Nuestra Aplicación
        Document
            App
  
  Normalmente solemos editar los primeros dos items.

  Para poder editarlo creamos un archivo en pages llamado “_document.js” para usar un template definido podemos ir a la documentation de Next.js para un custom document.

  En esta clase podemos observar que para editar directamente el document debemos crear una pagina en pages, con el nombre de “_document.js” y usar como template el codígo de la documentación de Next.js.

## Extendiendo el App
  [Custom App](https://nextjs.org/docs/advanced-features/custom-app)
  La renderización dentro Next.JS es de la siguiente forma:
  ```
  Document
    App
      Componente
  ```

  Layout Children - Es un componente que se encarga de renderizar el contenido de la página.
  Forma 1 
  ```javascript
  import React from 'react'
  import Navbar from 'components/Navbar/Navbar'

  const Layout: React.FC = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
        <footer>This is the footer</footer>
      </div>
    )
  }

  export default Layout
  ```
  Forma 2
  ```javascript
  import React from 'react'
  import Navbar from '../Navbar/Navbar'

  const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div>
        <Navbar />
        {children}
        <footer>This is the footer</footer>
      </div>)
  }

  export default Layout
  ```
## Path alias
  Con esta implementación de NextJS podemos evitar el ‘dot hell’ en las rutas: ../../../../../cosa.tsx

  [Absolute Imports and Module path aliases](https://nextjs.org/docs/advanced-features/module-path-aliases)

  Ejemplo de configuración:
  ``` ts
  // tsconfig.json or jsconfig.json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/components/*": ["components/*"]
      }
    }
  }
  ```

## Explora las soluciones de CSS en NextJS y su flexibilidad
  3 Tipos soport de CSS en NextJS
  - Global CSS (.css)
  - Module CSS (.module.css)
  - CSS-in-JS Styled JSX:
  ```ts
    function HelloWorld() {
    return (
      <div>
        Hello world
        <p>scoped!</p>
        <style jsx>{`
          p {
            color: blue;
          }
          div {
            background: red;
          }
          @media (max-width: 600px) {
            div {
              background: blue;
            }
          }
        `}
      </div>
      )
    }

export default HelloWorld
```

  Para los que usamos SCSS o SASS podemos usar el plugin de Next.JS para que nos ayude a convertir nuestro CSS a CSS que pueda ser usado en el navegador.
  - [Customizing PostCSS Config](https://nextjs.org/docs/advanced-features/css-modules)
  - [Built-In CSS Support](https://nextjs.org/docs/basic-features/built-in-css-support)

  Trabajar con sass
  ```
    npm i sass --save-dev
    npm i node-sass --save-dev
    npm i @zeit/next-sass --save-dev
  ```

  [Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)
  ```
    npm i tailwindcss --save-dev
    npm i @zeit/next-css --save-dev
  ```

  Si desean ver su código al estilo de css le adjunto este formateador de styles que esta disponible en extensiones de vscode [styled-jsx](https://marketplace.visualstudio.com/items?itemName=blanu.vscode-styled-jsx)

  [Next.js + Styled Components The Really Simple Guide](https://dev.to/aprietof/nextjs--styled-components-the-really-simple-guide----101c)

## Deploy en Vercel
  [CNextjs](https://curso-nextjs-topaz.vercel.app/)
  [Musica](https://app-music-delta.vercel.app/)
  [Repo](https://github.com/juliosarango/app-music)

## Introducción a los pre-render modes
  - CSR: No es amigable con el SEO, es la manera en la que están hechas las páginas con react (Todo se construye desde un archivo javascript. Luego crea y monta la aplicación en un root en el archivo html que está practicamente vacio)

  - SSR: La aplicación se renderiza desde el servidor. A diferencia de CSR donde te envian un archivo html vacio solo con un root y un (o varios) archivo(s) js. Acá se crean plantillas desde el servidor, sirviendo contenido estático en el html que envían y los datos dinamicos (como los de una api) pueden ser traidos desde el cliente.

  - SSG: Es una belleza donde se crean archivos completamente estáticos en el momento de compilación. Es lo mejor, ya que al tener contenido estático, nuestro sítio se hará super veloz

  CSR ➡ ❌ Afecta el SEO
✔ algo positivo no tenemos problemas de TTFB (Time To First Byte)

SSR ➡ ❌ Afecta el redimiendo de nuestro sitio web con el TTFB (Time To First Byte)
✔ algo positivo es que mejora el SEO

SSG ➡ ❎ Lo mejor de los dos mundos
✔ No tenemos problemas de TTFB ni tampoco con el SEO

  [Server-side vs Client-side Routing](https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f)