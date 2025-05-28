const fs = require('fs');
const path = './data/usuarios.json';

function leerUsuarios() {
  return JSON.parse(fs.readFileSync(path));
}

function escribirUsuarios(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

exports.getAll = (req, res) => res.json(leerUsuarios());
exports.create = (req, res) => {
  const usuarios = leerUsuarios();
  usuarios.push(req.body);
  escribirUsuarios(usuarios);
  res.status(201).json(req.body);
};
exports.update = (req, res) => {
  let usuarios = leerUsuarios();
  const index = usuarios.findIndex(u => u.id === req.params.id);
  usuarios[index] = req.body;
  escribirUsuarios(usuarios);
  res.json(req.body);
};
exports.remove = (req, res) => {
  let usuarios = leerUsuarios().filter(u => u.id !== req.params.id);
  escribirUsuarios(usuarios);
  res.sendStatus(204);
};
