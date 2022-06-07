# frontend_plantilla
Construir y desarrollar un de esqueleto frontend con React.

# Instalar React

npx create-react-app ruta
cd ruta
npm start 

# Configurar React

## Jest


instalar npm install --save-dev jest
Tras el resultado:

>6 high severity vulnerabilities
>
>To address all issues (including breaking changes), run:
>  npm audit fix --force
>
>Run `npm audit` for details.
>

actualizamos las versiones para corregir errores de vulnerabilidad con:
npm audit fix --force
El resultado es: 

>66 vulnerabilities (14 low, 17 moderate, 34 high, 1 critical)
>
>To address issues that do not require attention, run:
>  npm audit fix
>

Por lo que vulvo a aplicar auto fix force para volver al principio. y obtener un mejor resultado.

Instalar jest
npm install jest --global

crear un archivo setup_test.js

aplicar npm run eject