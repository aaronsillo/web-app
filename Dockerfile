# Usar una imagen base de Node.js para compilar la aplicación
FROM node:16 as build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el package.json y el package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Compilar la aplicación Angular
RUN npm run build --prod

# Usar una imagen base de Nginx para servir la aplicación
# FROM nginx:alpine

# Copiar los archivos compilados desde la imagen de compilación
# COPY --from=build /app/dist/web-app-admin /usr/share/nginx/html
COPY ./src ./src

# Exponer el puerto 80
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
