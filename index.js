const jsonServer = require('json-server');
const { faker } = require('@faker-js/faker');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

const generateProducts = (count = 20) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    sku: faker.string.alphanumeric(8).toUpperCase(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: `https://picsum.photos/300/300?random=${i + 1}`,
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department()
    },
    brand: faker.company.name(),
    price: parseFloat(faker.commerce.price({ min: 10, max: 500 })),
    stock: faker.number.int({ min: 0, max: 100 }),
    specifications: Array.from({ length: 3 }, () => ({
      name: faker.commerce.productAdjective(),
      value: faker.color.human()
    }))
  }));
};

const db = { products: generateProducts(50) };

const router = jsonServer.router(db);

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
