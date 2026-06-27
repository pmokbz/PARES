# PARES Suite

Proyecto web en Bootstrap 5 listo para GitHub Pages.

## Archivos incluidos

- `index.html`: página principal de PARES Suite.
- `diagnostico.html`: módulo 1 activo.
- `css/estilos.css`: estilos del proyecto.
- `js/app.js`: lógica básica del estado de módulos y diagnóstico.
- `README.md`: guía breve.

## Cómo usar en GitHub Pages

1. Crear un repositorio en GitHub.
2. Subir todos los archivos respetando la estructura de carpetas.
3. Ir a Settings > Pages.
4. Seleccionar Branch: `main` y carpeta `/root`.
5. Guardar.
6. Abrir el enlace publicado por GitHub Pages.

## Cómo activar nuevos módulos

En `js/app.js`, cambiar el módulo correspondiente de `false` a `true`.

Ejemplo:

```js
academia: true
```

Luego se puede crear el archivo `academia.html` y cambiar el botón correspondiente en `index.html`.
