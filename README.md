# Challenge_Better
# Descripcion

Se realiza una aplicacion que consumo un json, implementandole un CRUD
con persistencia por medio de localStora
El desarrollo se centro en Home para cumplir con lo solicitado

# Iniciar
- clonar repo
- en la terminal navegar a la carpeta app (cd app)
- ejecutar npm install
- en el archivo .env agregar la ruta del json, debe quedar asi: REACT_APP_URL=https://raw.githubusercontent. com/robconery/json-sales-data/master/data/customers.json
- ejecutar npm run start

# Consideraciones
- No se implemento un estado global (useContext / Redux) al trabajar todo en home
- La informacion se persiste mediante localStorage

- el modal para editar y eliminar se pasa para el proximo sprint
- Los ajustes visuales se pasan para el proximo sprint