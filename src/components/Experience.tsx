import * as motion from "motion/react-client";

export type ExperienceItem = {
  empresa: string;
  puesto: string;
  fecha: string;
  actividades: string[];
};

const experiences: ExperienceItem[] = [
  {
    empresa: "Milktech L.L.C.",
    puesto: "Desarrollador Frontend",
    fecha: "Abril 2025 - Presente",
    actividades: [
      "Desarrollo de interfaces web responsivas con React y Next.js.",
      "Implementación de componentes reutilizables y optimizados con Tailwind CSS.",
      "Desarrollo de aplicaciones web cumpliendo con estándares UI/UX.",
    ],
  },
  {
    empresa:
      "Instituto de Educación Media Superior y Superior del Estado de Michoacán",
    puesto: "Supervisor",
    fecha: "Febrero 2025 - Presente",
    actividades: [
      "Revisión y prevención en procesos informáticos.",
      "Implementación de mejoras en la infraestructura tecnológica.",
      "Supervisión y gestión de procesos internos en el sector educativo.",
    ],
  },
  {
    empresa: "Freelance",
    puesto: "Ingeniero de desarrollo de software",
    fecha: "Agosto 2024 - Diciembre 2024",
    actividades: [
      "Diseño e implementación de un sistema de punto de venta en la nube para PyMEs.",
      "Desarrollo con Next.js, optimizando arquitectura, escalabilidad y mantenimiento.",
    ],
  },
  {
    empresa: "Centro de Inteligencia en Salud",
    puesto: "Ingeniero de desarrollo de software",
    fecha: "Agosto 2024 - Diciembre 2024",
    actividades: [
      "Desarrollo con Next.js y Nest.js siguiendo buenas prácticas y código limpio.",
      "Creación de interfaces responsivas y funcionales.",
      "Adaptaciones de interfaces accesibles.",
    ],
  },
  {
    empresa: "Radio Taxi La Huerta",
    puesto: "Ingeniero de desarrollo de software",
    fecha: "Febrero 2024 - Junio 2024",
    actividades: [
      "Desarrollo de PWA para gestión de transporte nocturno, con SSR, caché y cron jobs.",
      "Análisis y planificación con SCRUM para optimizar seguridad y eficiencia.",
      "Adaptaciones de interfaces accesibles.",
    ],
  },
  {
    empresa: "Casa Michoacán",
    puesto: "Ingeniero de desarrollo de software",
    fecha: "Agosto 2023 - Diciembre 2023",
    actividades: [
      "Análisis de requerimientos para mejorar comunicación y seguridad gubernamental.",
      "Implementación de aplicación web con arquitectura de microservicios.",
      "Análisis y planificación con SCRUM para optimizar seguridad y eficiencia.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-10 sm:py-16 px-2 sm:px-6"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">
    Experiencia Laboral
      </h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            }}
            className="bg-white rounded-xl shadow-md border border-slate-100 p-6 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
              <div>
                <h3 className="text-lg font-semibold">{exp.empresa}</h3>
                <span className="block text-slate-500 text-sm">
                  {exp.puesto}
                </span>
              </div>
              <span className="text-slate-400 text-sm">{exp.fecha}</span>
            </div>
            <ul className="list-disc list-inside text-slate-700 text-sm sm:text-base ml-4 mt-2">
              {exp.actividades.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
