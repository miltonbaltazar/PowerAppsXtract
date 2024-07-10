import * as fs from 'fs';
import * as path from 'path';
import * as xlsx from 'xlsx';

interface ColumnData {
  Campo: string;
  Nombre: string;
  Tipo: string;
  Descripcion: string;
  Requerido: string;
  Buscable: string;
  managed: string;
  customized: string;
  customizable: string;
}

export function exportToExcel(dataDict: ColumnData[], tableName: string, indexTable: number) {
  const filename = `Table${indexTable}_${tableName}`;
  const dir = path.join(__dirname, 'tablas');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const worksheet = xlsx.utils.json_to_sheet(dataDict);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Columns');
  xlsx.writeFile(workbook, path.join(dir, `${filename}.xlsx`));

  console.log(`Datos de la tabla ${tableName} exportados correctamente a Excel.`);
}
