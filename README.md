# AVANTIA ABOGADOS.CL — Sitio Web Oficial

Sitio web profesional de alto contraste para el estudio jurídico **AVANTIA ABOGADOS.CL**, desarrollado con **Astro 5** y **Tailwind CSS v4**.

El proyecto implementa un diseño editorial moderno de **monocromo estricto** (Blanco `#FFFFFF` y Negro `#000000`) basado en referencias visuales de alta gama (*PILOTREPUBLIK* y *MINDS*), combinando tipografías geométricas sans-serif (`Montserrat` e `Inter`) con componentes modulares de alto rendimiento.

---

## 🎨 Características de Diseño y Estética

- **Alto Contraste Estricto**: Paleta de colores restringida exclusivamente a blanco puro y negro sólido.
- **Tipografía Geométrica**: `Montserrat` para titulares impactantes en mayúsculas e `Inter` para cuerpos de texto de alta legibilidad.
- **Estilo Editorial Moderno**: Inspirado en diseños editoriales minimalistas con distribución asimétrica, listas numeradas limpias y botones estilo píldora (`rounded-full`).
- **Alternancia de Bloques Monocromáticos**: Secuencia fluida entre fondos blancos y negros a lo largo de las secciones.

---

## 📁 Estructura del Proyecto

```text
avantiaAbogados/
├── public/                     # Archivos estáticos e íconos (favicon.svg, etc.)
├── src/
│   ├── components/             # Componentes modulares Astro
│   │   ├── Hero.astro          # Bloque 1: Hero centrado con titular sólido y botón píldora (Fondo Blanco)
│   │   ├── Mision.astro        # Bloque 2: Declaración institucional estilo PILOTREPUBLIK (Fondo Negro)
│   │   ├── AreasPractica.astro # Bloque 3: Grid 2 columnas estilo "How does it work?" (Fondo Blanco)
│   │   ├── Equipo.astro        # Bloque 4: Retratos profesionales estilo MINDS en grayscale (Fondo Negro)
│   │   └── Contacto.astro      # Bloque 5: Formulario de consulta legal e información institucional
│   ├── pages/
│   │   └── index.astro         # Página principal que integra todos los componentes
│   └── styles/
│       └── global.css          # Estilos globales, Google Fonts y directiva de Tailwind CSS v4
├── tailwind.config.mjs         # Configuración de colores estrictos y tipografías en Tailwind CSS
└── package.json                # Dependencias y scripts de construcción
```

---

## 🧱 Componentes Modulares y Secciones

### 1. `Hero.astro` *(Fondo Blanco)*
- **Header**: Navegación minimalista con logotipo `AVANTIA ABOGADOS`.
- **Titular Principal**: Tipografía gigante en negro sólido centrado.
- **Llamado a la Acción**: Botón minimalista estilo píldora (`bg-black text-white rounded-full`) para agendar consultas legales.

### 2. `Mision.astro` *(Fondo Negro)*
- **Estilo Editorial PILOTREPUBLIK**: Etiqueta minimalista `[ NUESTRA MISIÓN ]` a la izquierda.
- **Declaración Gigante**: Oración principal en mayúsculas a la derecha destacando la excelencia, cercanía y compromiso del bufete.

### 3. `AreasPractica.astro` *(Fondo Blanco)*
- **Diseño en 2 Columnas**: Inspirado en la sección *"How does it work?"*.
- **Columna Izquierda**: Lista numerada (`01` al `06`) limpia sin bordes con títulos y subcategorías:
  1. **Derecho Civil**
  2. **Derecho de Familia**
  3. **Derecho Administrativo**
  4. **Derecho Penal**
  5. **Derecho Laboral**
  6. **Juzgado de Policía Local**
- **Columna Derecha**: Marcador de posición de imagen fijo (*sticky*) con bordes redondeados (`rounded-3xl`).

### 4. `Equipo.astro` *(Fondo Negro)*
- **Retratos Profesionales Estilo MINDS**: Marcadores verticales de gran escala con la clase `grayscale` para escala de grises.
- **Integrantes**:
  - **Diego Antonio Sotomayor Stagno** — Abogado (Universidad Finis Terrae) / Cientista Político (Universidad Gabriela Mistral).
  - **Mikel Xavier Basauri Fernández** — Licenciado en Ciencias Jurídicas (Universidad Finis Terrae).
- **Cierre Editorial**: Bloque tipográfico conceptual en mayúsculas al pie de la sección.

### 5. `Contacto.astro` *(Fondo Blanco / Tarjeta Negra)*
- Formulario de contacto directo con validación de campos para agendar consultas jurídicas.
- Pie de página institucional con derechos reservados y ubicación en Santiago de Chile.

---

## 🛠️ Comandos de Desarrollo

En la raíz del proyecto, ejecuta los siguientes comandos en la terminal:

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor local de desarrollo en `http://localhost:4321` |
| `npm run build` | Compila el sitio estático optimizado en el directorio `./dist/` |
| `npm run preview` | Previsualiza localmente la build de producción compilada |

---

## ⚖️ Información del Bufete

- **Nombre**: AVANTIA ABOGADOS.CL
- **Ubicación**: Santiago, Región Metropolitana, Chile
- **Especialidades**: Derecho Civil, Familia, Administrativo, Penal, Laboral y Juzgados de Policía Local.
