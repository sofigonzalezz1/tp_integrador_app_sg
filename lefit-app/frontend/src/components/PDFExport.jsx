import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';

export default function PDFExport() {
  const exportPDF = async () => {
    const [productos, usuarios] = await Promise.all([
      axios.get('http://localhost:3000/productos'),
      axios.get('http://localhost:3000/usuarios')
    ]);
    
    const doc = new jsPDF();

    // Título de productos en rosa
    doc.setTextColor(255, 105, 180); // Rosa
    doc.setFontSize(16);
    doc.text('Productos', 10, 10);

    // Tabla de productos con encabezado fucsia
    doc.autoTable({
      startY: 15,
      head: [['Nombre', 'Precio']],
      body: productos.data.map(p => [p.nombre, p.precio]),
      headStyles: {
        fillColor: [255, 0, 128], // Fucsia
        textColor: [255, 255, 255],
        halign: 'center'
      },
      styles: {
        halign: 'center'
      }
    });

    // Título de usuarios en rosa
    doc.setTextColor(255, 105, 180); // Rosa
    const startY = doc.lastAutoTable.finalY + 10;
    doc.text('Usuarios', 10, startY);

    // Tabla de usuarios con encabezado fucsia
    doc.autoTable({
      startY: startY + 5,
      head: [['Nombre', 'Email', 'Edad']],
      body: usuarios.data.map(u => [u.nombre, u.email, u.edad]),
      headStyles: {
        fillColor: [255, 0, 128], // Fucsia
        textColor: [255, 255, 255],
        halign: 'center'
      },
      styles: {
        halign: 'center'
      }
    });

    doc.save('reporte.pdf');
  };

  return (
    <button
      onClick={exportPDF}
      className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow transition-all duration-300"
    >
      Exportar PDF
    </button>
  );
}
