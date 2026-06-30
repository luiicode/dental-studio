# Dental Studio 🦷

Una landing page moderna, rápida y responsiva para una clínica dental, diseñada para ofrecer una experiencia de usuario excepcional y facilitar la conversión de pacientes mediante un diseño limpio y accesible.

## 🚀 Características Principales

* **Navegación Fluida:** Barra de navegación fija con scroll suave hacia las secciones principales (Inicio, Servicio y Testimonio) y acceso al contacto directo.
* **Sección Hero Impactante:** Diseño dinámico con indicadores de "Agenda Abierta", estadísticas de pacientes (+2,500) y tarjetas flotantes de tecnología 3D.
* **Catálogo de Servicios:** Tarjetas generadas dinámicamente que muestran especialidades como Diseño de Sonrisa, Ortodoncia Invisible e Implantología.
* **Prueba Social y Trust Metrics:** Sección de testimonios destacando un 98% de satisfacción y más de 15 años de experiencia médica.
* **Llamado a la Acción (CTA):** Botón flotante e integrado de WhatsApp preparado para dispositivos móviles, optimizado visualmente para respetar el "Safe Area" de los navegadores en iOS.

## 🛠️ Stack Tecnológico

Este proyecto está construido con un stack enfocado en el rendimiento web, la escalabilidad y las mejores prácticas de ingeniería:

* **Core:** React 19
* **Lenguaje:** TypeScript
* **Estilos y Maquetación:** Tailwind CSS v4
* **Componentes UI:** Shadcn UI & Radix UI
* **Iconografía:** Lucide React
* **Entorno / Compilador:** Vite 8

## 📂 Estructura del Proyecto

El código está organizado de manera modular para mantener la escalabilidad:

* `/src/components/layout/` - Componentes globales como el `Navbar` y `Footer`.
* `/src/components/section/` - Bloques principales de la página (`Hero`, `Services`, `Testimonials`, `CTA`).
* `/src/components/ui/` - Componentes atómicos e independientes proveídos por Shadcn (`badge`, `button`, `card`).
* `/src/data/` - Datos estáticos (ej. `DataServiceCard`) para renderizado dinámico.

## 📦 Instalación y Uso

1. Clona este repositorio en tu entorno local.
2. Instala las dependencias del proyecto:
   ```bash
   pnpm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   pnpm run dev
   ```
4. Para generar la versión optimizada para producción:
   ```bash
   pnpm run build
   ```

## 👨‍💻 Autor

**Luis Eduardo Cortés López**
*Frontend Developer / Software and Networks Engineer*
