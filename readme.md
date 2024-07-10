### `README.md`

```markdown
# Proyecto de Automatización con Playwright

Este proyecto utiliza Playwright para automatizar la extracción de datos de columnas desde PowerApps y exportarlos a archivos Excel.
Se conecta a una instancia existente de Chrome mediante el protocolo DevTools. está diseñado para automatizar la documentación de las
tablas de Dataverse en aplicaciones Power Apps mediante técnicas avanzadas de scraping. Este proceso optimiza y facilita la gestión
de datos al proporcionar una extracción de información precisa y eficiente, transformando los datos de columnas en informes estructurados
y accesibles.

## Funcionalidades

- Conexión a una instancia de Chrome ya abierta usando el WebSocket Debugging.
- Navegación a una página de PowerApps específica.
- Extracción de datos de columnas de tablas en PowerApps.
- Limpieza y estructuración de los datos extraídos.
- Exportación de los datos a archivos Excel.
- Captura de capturas de pantalla de la página actual.

## Requisitos Previos

- Node.js (versión 14 o superior)
- Playwright
- Chrome instalado y configurado para permitir la depuración remota

## Configuración del Entorno

1. **Instalar Node.js**

   Descargar e instalar Node.js desde [nodejs.org](https://nodejs.org/).

2. **Clonar el repositorio**

   git clone https://github.com/tu_usuario/tu_proyecto.git
   cd tu_proyecto
 

3. **Instalar dependencias**

   ```bash
   npm install
   ```

4. **Configurar Chrome para depuración remota**

   Ir a las propiedades de Chrome y configurar así:

   ```bash
   "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222
   ```

5. **Iniciar Chrome con la depuración remota habilitada**

   Abrir Chrome usando el comando anterior.

## Uso

1. **Ejecutar el script de automatización**

   ```bash
   npx ts-node index.ts
   ```

   El script se conectará a la instancia de Chrome abierta, navegará a la página de PowerApps especificada y extraerá los datos de las columnas.

## Estructura del Proyecto

- **index.ts**: Archivo principal que maneja la lógica de automatización.
- **helpers.ts**: Contiene funciones auxiliares y constantes globales.
- **excel.ts**: Maneja la exportación de datos a archivos Excel.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue los pasos a continuación para contribuir:

1. Realiza un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y realiza commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Envía los cambios a la rama original (`git push origin feature/nueva-funcionalidad`).
5. Abre una Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
```

