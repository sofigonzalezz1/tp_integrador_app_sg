Mi proyecto: LE FIT aplicacion fullstack - Ropa deportiva para mujeres 

Requisitos: 
- Node.js y npm instalados
- Navegador web 

Instalaciones y ejecuciones: 
Backend:
    abrir terminal
    cd lefit-app/backend
    npm install
    npm start
    abrir http://localhost:3000.

Frontend: 
    abrir terminal
    cd lefit-app/frontend
    npm install
    npm run dev
    abrir http://localhost:5173

Funcionalidades: 
Backend
    Endpoints REST para Productos y Usuarios:
     GET /productos y GET /usuarios
     POST /productos y POST /usuarios
     PUT /productos/:id y PUT /usuarios/:id
     DELETE /productos/:id y DELETE /usuarios/:id
    Persistencia de datos en archivos JSON (productos.json, usuarios.json)
    CORS habilitado para conexión con el frontend.
    
Frontend
    Visualización de listados de Productos y Usuarios en pestañas o componentes separados.
    Formularios para crear y editar productos y usuarios.
    Botones para eliminar productos y usuarios.
    Comunicación con el backend usando Fetch.
    Exportación en PDF de los listados:
     Productos: nombre y precio.
     Usuarios: nombre, email y edad.
    Diseño responsivo y agradable con Bootstrap React.