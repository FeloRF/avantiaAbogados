# AVANTIA ABOGADOS — Sitio Web Oficial

Sitio web profesional de alto contraste para el estudio jurídico **AVANTIA ABOGADOS**, desarrollado con **Astro 5** y **Tailwind CSS v4**.

El proyecto implementa un diseño editorial moderno de **monocromo estricto** (Blanco `#FFFFFF` y Negro `#000000`) basado en referencias visuales de alta gama (*PILOTREPUBLIK* y *MINDS*), combinando tipografías geométricas sans-serif (`Montserrat` e `Inter`) con componentes modulares de alto rendimiento.

---

## 🎨 Características de Diseño y Estética

- **Alto Contraste Estricto**: Paleta de colores restringida exclusivamente a blanco puro y negro sólido.
- **Tipografía Geométrica**: `Montserrat` para titulares impactantes en mayúsculas e `Inter` para cuerpos de texto de alta legibilidad.
- **Estilo Editorial Moderno**: Inspirado en diseños editoriales minimalistas con distribución asimétrica, tarjetas interactivas y botones estilo píldora (`rounded-full`).
- **Alternancia de Bloques Monocromáticos**: Secuencia fluida entre fondos blancos y negros a lo largo de las secciones.
- **Botón Flotante de WhatsApp**: Acceso rápido e interactivo a atención directa por WhatsApp en la esquina inferior derecha.

---

## 📁 Estructura del Proyecto

```text
avantiaAbogados/
├── public/                     # Archivos estáticos e íconos (favicon.svg, etc.)
├── src/
│   ├── assests/img/            # Recursos gráficos e imágenes del sitio (hall1.jpg, abo1.jpeg, etc.)
│   ├── components/             # Componentes modulares Astro
│   │   ├── Hero.astro          # Header de navegación, titular principal e imagen principal (hall1.jpg)
│   │   ├── Mision.astro        # Declaración institucional estilo PILOTREPUBLIK
│   │   ├── AreasPractica.astro # Grid interactivo con áreas de práctica legal
│   │   ├── AreaCard.astro      # Tarjetas individuales para cada área del derecho
│   │   ├── Equipo.astro        # Retratos profesionales estilo MINDS en escala de grises
│   │   ├── Contacto.astro      # Formulario de consulta jurídica
│   │   ├── Footer.astro        # Pie de página institucional con enlaces y créditos
│   │   └── WhatsAppButton.astro# Botón flotante interactivo de WhatsApp
│   ├── pages/
│   │   └── index.astro         # Página principal que integra todos los componentes
│   └── styles/
│       └── global.css          # Estilos globales, Google Fonts y Tailwind CSS v4
├── tailwind.config.mjs         # Configuración de estilos y tipografías
├── astro.config.mjs            # Configuración de Astro
└── package.json                # Dependencias y scripts
```

---

## 🧱 Componentes Modulares y Secciones

### 1. `Hero.astro` *(Fondo Blanco)*
- **Header**: Navegación minimalista con logotipo `AVANTIA ABOGADOS` e isotipo `AV`.
- **Titular Principal**: Tipografía impactante en negro sólido centrado.
- **Imagen Principal**: Imagen vertical (*hall1.jpg*) con escala de grises y esquinas redondeadas.
- **Llamado a la Acción**: Botón píldora (`bg-black text-white rounded-full`) para agendar consulta legal.

### 2. `Mision.astro` *(Fondo Negro)*
- **Estilo Editorial PILOTREPUBLIK**: Etiqueta minimalista `[ NUESTRA MISIÓN ]` a la izquierda.
- **Declaración Gigante**: Oración principal en mayúsculas a la derecha destacando la excelencia, cercanía y compromiso del bufete.
- **Layout Fotográfico**: Distribución asimétrica de imágenes corporativas.

### 3. `AreasPractica.astro` & `AreaCard.astro` *(Fondo Blanco)*
- **Áreas de Práctica**:
  1. **Derecho Civil**
  2. **Derecho de Familia**
  3. **Derecho Administrativo**
  4. **Derecho Penal**
  5. **Derecho Laboral**
  6. **Juzgado de Policía Local**
- **Tarjetas Interactivas**: Tarjetas modulares (`AreaCard.astro`) con títulos, íconos y desplegables descriptivos.

### 4. `Equipo.astro` *(Fondo Negro)*
- **Retratos Profesionales Estilo MINDS**: Imágenes verticales en escala de grises (`grayscale`).
- **Integrantes**:
  - **Diego Antonio Sotomayor Stagno** — Abogado (Universidad Finis Terrae) / Cientista Político (Universidad Gabriela Mistral).
  - **Mikel Xavier Basauri Fernández** — Licenciado en Ciencias Jurídicas (Universidad Finis Terrae).

### 5. `Contacto.astro` & `Footer.astro` *(Fondo Blanco / Negro)*
- Formulario directo con campos validados para consultas jurídicas.
- Footer institucional con enlaces rápidos de navegación, datos de contacto y copyright.

### 6. `WhatsAppButton.astro`
- Botón flotante fijo en la esquina inferior derecha para contacto directo e inmediato por WhatsApp.

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

- **Nombre**: AVANTIA ABOGADOS
- **Ubicación**: Santiago, Región Metropolitana, Chile
- **Especialidades**: Derecho Civil, Familia, Administrativo, Penal, Laboral y Juzgados de Policía Local.
