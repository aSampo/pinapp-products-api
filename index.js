const jsonServer = require('json-server');
const { faker } = require('@faker-js/faker');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

const specificationCategories = {
  Color: () => faker.color.human(),
  Material: () => faker.commerce.productMaterial(),
  Tamaño: () => faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL']),
  Peso: () => faker.number.int({ min: 100, max: 5000 }) + 'g',
  Dimensiones: () => `${faker.number.int({ min: 10, max: 100 })}x${faker.number.int({ min: 10, max: 100 })}cm`
};

const generateProducts = (count = 20) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    sku: faker.string.alphanumeric(8).toUpperCase(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url({ width: 300, height: 300, category: 'products' }),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department()
    },
    brand: faker.company.name(),
    price: parseFloat(faker.commerce.price({ min: 10, max: 500 })),
    stock: faker.number.int({ min: 0, max: 100 }),
    specifications: Array.from({ length: 3 }, () => {
      const category = faker.helpers.arrayElement(Object.keys(specificationCategories));
      return {
        name: category,
        value: specificationCategories[category]()
      };
    })
  }));
};

const db = { products: generateProducts(200) };

const router = jsonServer.router(db);

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
