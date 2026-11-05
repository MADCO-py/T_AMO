# Para siempre ♡
Álbum romántico responsive, con once fotografías, fechas especiales, melodía de cuerdas opcional y una única ruleta de siete cupones sin repeticiones.

## Local
Node.js 20.19+ o 22 y npm.

```sh
npm install
npm run dev
```
Abre la dirección que muestra Vite (normalmente http://localhost:5173).

```sh
npm test
npm run build
npm run preview
```

## GitHub Pages
Sube el proyecto a tu repositorio. En Settings → Pages → Source selecciona GitHub Actions. El workflow incluido publica al hacer push a main o master, o al ejecutarlo manualmente. Las rutas relativas permiten alojarlo en la raíz o en una subcarpeta. La carpeta public/photos contiene fotos personales: al publicar el sitio también estarán disponibles para quienes puedan visitarlo.

## Personalizar
Las fechas y textos están en src/main.jsx. No se asumieron años ni nombres. Los siete cupones están en src/wheel.js. Las once fotos se optimizaron como WebP en public/photos sin modificar los originales.

La ruleta guarda los premios ganados en localStorage, por navegador y dominio; no se sincronizan entre celulares ni entre localhost y GitHub Pages. El ganador desaparece al finalizar cada giro y queda en “Nuestros cupones ganados”. Reiniciar requiere confirmación. Si se borra el almacenamiento del navegador se reinicia el progreso. Si no está disponible, se avisa y el progreso dura mientras la página esté abierta.

La melodía se genera en el navegador y se activa únicamente al pulsar el botón de sonido. No requiere archivos de audio externos. Tipografías de Google Fonts con fuentes alternativas; fotos, scripts e iconos se sirven localmente.

Tecnologías: React, Vite, Motion, Radix Dialog, Lucide y canvas-confetti. Node.js se usa para desarrollo y compilación; el resultado es estático y compatible con GitHub Pages.
