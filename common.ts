export function cleanText(text: string): string {
    return text.replace(/[^a-zA-Z0-9\s-_]/g, '').replace(/\s+/g, ' ').trim();
  }

export const descriptions: { [key: string]: string } = {
    "Created By": "Usuario que creó el registro",
    "Created By Delegate": "Usuario delegado que creó el registro en nombre de otro usuario.",
    "Created On": "Fecha y hora en que se creó el registro.",
    "Import Sequence Number": "Número de secuencia de importación.",
    "Modified By": "Usuario que modificó el registro.",
    "Modified By Delegate": "Usuario delegado que modificó el registro en nombre de otro usuario.",
    "Modified On": "Fecha y hora en que se modificó el registro.",
    "Name (Primary name column)": "Nombre del registro.",
    "Name Primary name column": "Nombre del registro.",
    "Owner": "Propietario del registro.",
    "Owning Business Unit": "Unidad de negocio propietaria del registro.",
    "Owning Team": "Equipo propietario del registro.",
    "Owning User": "Usuario propietario del registro.",
    "Record Created On": "Fecha en que se creó el registro.",
    "Status": "Código de estado del registro.",
    "Status Reason": "Razón del estado del registro.",
    "Time Zone Rule Version Number": "Número de versión de la regla de zona horaria.",
    "UTC Conversion Time Zone Code": "Código de conversión de zona horaria UTC.",
    "Version Number": "Número de versión del registro."
  };