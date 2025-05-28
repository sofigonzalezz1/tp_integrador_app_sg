import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UsuariosCRUD() {
  const [usuarios, setUsuarios] = useState([]);
  const [form, setForm] = useState({ id: '', nombre: '', email: '', edad: '' });

  const fetchData = async () => {
    const res = await axios.get('http://localhost:3000/usuarios');
    setUsuarios(res.data);
  };

  useEffect(() => { fetchData(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await axios.put(`http://localhost:3000/usuarios/${form.id}`, form);
    } else {
      await axios.post('http://localhost:3000/usuarios', { ...form, id: Date.now().toString() });
    }
    setForm({ id: '', nombre: '', email: '', edad: '' });
    fetchData();
  };

  const handleEdit = (usuario) => setForm(usuario);
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/usuarios/${id}`);
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-x-2 mb-4">
        <input value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} placeholder="Nombre" className="border p-1" />
        <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" className="border p-1" />
        <input value={form.edad} onChange={e => setForm({ ...form, edad: e.target.value })} placeholder="Edad" className="border p-1" />
        <button type="submit" className="bg-green-500 text-white px-2 py-1 rounded">{form.id ? 'Actualizar' : 'Crear'}</button>
      </form>
      <ul>
        {usuarios.map(u => (
          <li key={u.id} className="mb-2">
            {u.nombre} - {u.email} - {u.edad} años
            <button className="ml-2 text-blue-600" onClick={() => handleEdit(u)}>Editar</button>
            <button className="ml-2 text-red-600" onClick={() => handleDelete(u.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}