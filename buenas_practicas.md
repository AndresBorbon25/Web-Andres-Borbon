# Buenas Prácticas - SOLO ESTILO Barbería

## 1. Organización de Código
- Separar **frontend** y **backend** en carpetas distintas.
- Usar nombres claros: `login.html`, `reserva.html`, `server.js`.

## 2. Convenciones
- **JavaScript**: usar `camelCase` en variables y funciones.
- **HTML**: identar con 2 espacios, etiquetas en minúscula.
- **CSS**: clases con nombres descriptivos (`.form-container`, `.hero`).

## 3. Seguridad
- No guardar contraseñas en texto plano en un proyecto real (usar hashing).
- Validar datos en cliente y servidor.
- Usar `CORS` solo cuando sea necesario.

## 4. Documentación
- Comentar funciones en `server.js`.
- Mantener este manual técnico y de usuario actualizado.
- Incluir ejemplos de requests/responses.

## 5. Control de versiones
- Subir el proyecto a GitHub.
- Usar `main` o `master` como rama principal.
- Hacer commits descriptivos:
  - `feat: agregar reserva con servicio y hora`
  - `fix: corregir validación de login`

## 6. Escalabilidad (a futuro)
- Migrar la base de datos en memoria a MongoDB o PostgreSQL.
- Implementar autenticación con JWT.
- Desplegar en un servicio cloud (Heroku, Vercel, Render).

