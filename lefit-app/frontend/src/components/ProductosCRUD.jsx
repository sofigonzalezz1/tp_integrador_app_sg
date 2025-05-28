import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ProductosCRUD() {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({ id: '', nombre: '', precio: '' });

  const fetchData = async () => {
    const res = await axios.get('http://localhost:3000/productos');
    setProductos(res.data);
  };

  useEffect(() => { fetchData(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await axios.put(`http://localhost:3000/productos/${form.id}`, form);
    } else {
      await axios.post('http://localhost:3000/productos', { ...form, id: Date.now().toString() });
    }
    setForm({ id: '', nombre: '', precio: '' });
    fetchData();
  };

  const handleEdit = (producto) => setForm(producto);
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/productos/${id}`);
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-x-2 mb-4">
        <input value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} placeholder="Nombre" className="border p-1" />
        <input value={form.precio} onChange={e => setForm({ ...form, precio: e.target.value })} placeholder="Precio" className="border p-1" />
        <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded">{form.id ? 'Actualizar' : 'Crear'}</button>
      </form>
      <ul>
        {productos.map(p => (
          <li key={p.id} className="mb-2">
            {p.nombre} - ${p.precio}
            <button className="ml-2 text-blue-600" onClick={() => handleEdit(p)}>Editar</button>
            <button className="ml-2 text-red-600" onClick={() => handleDelete(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
