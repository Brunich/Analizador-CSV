# Analizador de CSV

[![CI](https://github.com/Brunich/analizador-csv/actions/workflows/ci.yml/badge.svg)](https://github.com/Brunich/analizador-csv/actions/workflows/ci.yml)

*Tu reporte, limpio en un clic.*

Encuentra duplicados, valores mal escritos, fechas mezcladas y reglas rotas, y corrige lo mecánico con un clic. Después lo grafica sin abrir Excel y le puedes preguntar en SQL.

![Captura de Analizador de CSV](docs/captura.png)

**Pruébalo en vivo:** [bruno-portfolio-azure.vercel.app/proyectos/analizador-csv](https://bruno-portfolio-azure.vercel.app/proyectos/analizador-csv)

## Cómo funciona

1. **Lee.** Abre tu CSV en el navegador y detecta el tipo de cada columna.
2. **Revisa.** Siete reglas buscan duplicados, mayúsculas y acentos distintos, fechas mezcladas, negativos y reglas de negocio.
3. **Limpia.** Corrige lo mecánico con un clic y marca lo que requiere criterio.
4. **Grafica.** Sugiere la gráfica que tiene sentido para tus columnas; la bajas en PNG o SVG, o copias los datos a Canva, Flourish o Datawrapper.
5. **Pregunta.** El archivo se vuelve una tabla de SQLite dentro del navegador: escribe tu consulta o usa un ejemplo, y grafica el resultado.

## Qué hay adentro

| Archivo | Qué hace |
| --- | --- |
| `src/csv.ts` | Lee el CSV con cualquier separador (`,` `;` tabulador `|`) y codificación (UTF-8, Windows-1252 de Excel en español, UTF-16); tolera filas cortas o con datos de más sin perder nada, y perfila cada columna. |
| `src/read-file.ts` | Abre CSV, TSV y Excel (.xlsx, .xls) con las mismas reglas. |
| `src/quality.ts` | Las siete reglas: duplicados, variantes de mayúsculas y acentos, fechas mezcladas, negativos, vacíos y reglas de negocio. |
| `src/CsvCharts.tsx` | Sugiere la gráfica según las columnas y la dibuja como SVG; exporta PNG, SVG, CSV o la copia para Canva, Flourish o Datawrapper. |
| `src/CsvSql.tsx` | Convierte el archivo en una tabla de SQLite (sql.js, WebAssembly) para consultarla y graficar el resultado. |
| `src/DataWorkbench.tsx` | La pantalla: tabla, mapa de columnas, «Qué encontré» y las pestañas limpiar / graficar / SQL. |

La lógica está separada de la interfaz, así se prueba sin navegador (`tests/`).

## Decisiones

- Todo corre en tu navegador: el archivo no se sube a ningún servidor.
- SQLite viene compilado a WebAssembly y sólo se descarga cuando abres la pestaña SQL, para que la página cargue ligera.
- Las gráficas son SVG propio en vez de una librería: así se exportan tal cual a PNG o SVG y pesan poco.
- Lo mecánico (espacios, mayúsculas, fechas) se corrige con un clic; lo que requiere criterio sólo se marca.
- Abre lo que Excel guarda de verdad: acentos en Windows-1252, filas rotas y líneas vacías no tiran el archivo, y avisa qué ajustó. Probado con 60 000 filas (~2 s).

## Correrlo

```bash
npm install
npm run dev
```

```bash
npm test        # pruebas de la lógica (node:test)
npm run build   # tipos + build de producción
```

Hecho con React 19, TypeScript y Vite. Necesita Node 22 o más nuevo (las pruebas corren TypeScript directo con Node).

## Lo que sigue

- Guardar reglas de negocio propias por tipo de reporte.
- Comparar dos cortes del mismo reporte y ver qué cambió.

---

Parte del [portafolio de Bruno Salas](https://bruno-portfolio-azure.vercel.app) · [GitHub](https://github.com/Brunich)
