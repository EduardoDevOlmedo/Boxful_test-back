# Levantar el proyecto

Para levantar el proyecto solo necesitamos:

```bash
  npm i
  npm run start
```

## Simulacion

Al ser un requerimiento hacer la simulacion del guardado en una db, usando prisma, se creo el servicio y el modulo para este fin, ademas del esquema que seguria.
Luego en el servicio del user, se guardan en memoria los usuarios luego de haber validado los datos con el user.dto. Se puede hacer un get para ver estos datos, o
bien verlos reflejados en la consola al hacer el post en el frontend.
