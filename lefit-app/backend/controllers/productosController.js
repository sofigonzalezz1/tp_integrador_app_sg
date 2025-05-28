const fs = require('fs');
const path = './data/productos.json';

function leerProductos() {
  return JSON.parse(fs.readFileSync(path));
}

function escribirProductos(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

exports.getAll = (req, res) => res.json(leerProductos());
exports.create = (req, res) => {
  const productos = leerProductos();
  productos.push(req.body);
  escribirProductos(productos);
  res.status(201).json(req.body);
};
exports.update = (req, res) => {
  let productos = leerProductos();
  const index = productos.findIndex(p => p.id === req.params.id);
  productos[index] = req.body;
  escribirProductos(productos);
  res.json(req.body);
};
exports.remove = (req, res) => {
  let productos = leerProductos().filter(p => p.id !== req.params.id);
  escribirProductos(productos);
  res.sendStatus(204);
};
