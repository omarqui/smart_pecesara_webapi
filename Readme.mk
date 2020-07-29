# Smart Pecera Webapi
[x] Crear tabla para Pecera con {id, nombre}
[x] Crear tabla caracteriscasPercera con {id, idPecera, nombre, dato}
[x] Crear endPoints para tabla Pecera
[x] Crear endPoints para tabla caracteriscasPercera
[x] Agregar idPecera a tablas existentes
[x] Agregar idPecera a endPoints existentes
[x] Agregar endPoint para filtrar log de sensores por rango de fecha
[x] Persistencia en DB

---

PORT=3500  
NODE_ENV=development 
MONGO_CONNECTION=mongodb+srv://[user-name]:[mongo-password]@cluster0-3ewvh.mongodb.net  
MONGO_DB=smartPecera 
MONGO_SHELL_CONNECTION=mongo "mongodb+srv://cluster0-3ewvh.mongodb.net/test"  --username rebs  