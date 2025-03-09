# Pinapp Products API

Code challenge para Pinapp, implementa una API REST para gestionar productos. La API utiliza JSON Server y Faker.js para generar datos de prueba realistas.

## 🚀 Tecnologías Utilizadas

- JSON Server
- Faker.js
- Node.js

## 🛠️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/aSampo/pinapp-products-api.git
cd pinapp-products-api
```

2. Instala las dependencias:

```bash
npm install
```

## 🏃‍♂️ Cómo ejecutar el proyecto

1. Para iniciar el servidor en modo desarrollo:

```bash
npm start
```

2. El servidor estará disponible en: http://localhost:3000

## 📚 Endpoints disponibles

- `GET /products` - Obtener todos los productos
- `GET /products/:id` - Obtener un producto por ID

## 🌐 Despliegue

La API está desplegada y disponible en Render:

[https://pinapp-products-api.onrender.com](https://pinapp-products-api.onrender.com)

## 📝 Notas

- Los datos son generados automáticamente usando Faker.js para simular un ambiente real
- La base de datos es reiniciada cada vez que se reinicia el servidor
- Este proyecto es solo para fines de demostración como parte del challenge
