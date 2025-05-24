# CRUD de Usuarios - Node.js + React


## Instrucciones

### 1. Clonar el repositorio

```bash
git git@github.com:GonzaSp24/CRUD_Usuarios_NodeJs.git
cd CRUD_Usuarios_NodeJs
```

### 2. Instalar dependencias

```bash
npm install


## 🛣️ Endpoints de la API


`GET`     `http://localhost:3000/usuarios`   Lista todos los usuarios     
`GET`     `http://localhost:3000/usuarios/2` Devuelve usuario con ID 2    
`POST`    `http://localhost:3000/usuarios`   Crea un nuevo usuario        
`PUT`     `http://localhost:3000/usuarios/1` Actualiza usuario con ID 1   
`DELETE`  `http://localhost:3000/usuarios/1` Elimina usuario con ID 1     

---

### 📥 Ejemplo de cuerpo JSON para POST/PUT

```json
{
  "nombre": "Raul Blanco",
  "email": "rb@example.com",
  "edad": 22
}

## ✅ Validaciones

- `nombre`, `email`, `edad` son obligatorios.
- El `email` debe ser único y válido.
