# Backend - DailyDo

## Descripción
Este es el backend del proyecto DailyDo, una aplicación de gestión de tareas que permite a los usuarios realizar operaciones CRUD sobre sus tareas. 




   

## Tecnologías Usadas

### 1. **Node.js:**
### 2. **Express**

### 3. **MongoDB**
### 4. **Mongoose**




## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Andrezgrondona/DailyDo-backend.git

2. Instala las Dependencias:
   ```bash
   npm install

3. Inicia la Aplicación:
   ```bash
   npm run dev

3. Configura las variables de entorno creando un archivo .env en la raíz del proyecto:
   ```bash
   PORT=5001
   MONGO_URI=mongodb+srv://afgo4ster:fjcbBQLEPUiXXnIW@cluster0.bw5hk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

3. las pruebas con Thunder Client o Postman:
   ```bash
   Obtener todas las tareas
   URL: https://dailydo-backend-production.up.railway.app/api/tasks
   Método: GET

   Obtener una tarea específica
   URL: https://dailydo-backend-production.up.railway.app/api/tasks/:id
   Método: GET
   
   Crear una nueva tarea
   URL: https://dailydo-backend-production.up.railway.app/api/tasks
   Método: POST

   Actualizar una tarea
   URL: https://dailydo-backend-production.up.railway.app/api/tasks/:id
   Método: PUT

### Depoly
https://dailydo-backend-production.up.railway.app
