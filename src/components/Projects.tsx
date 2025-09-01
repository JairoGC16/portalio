import * as motion from "motion/react-client";
import Image from "next/image";

const projects = [
  {
    title: "Sistema de Punto de Venta en la Nube",
    image:
      "https://res.cloudinary.com/dnbftqck9/image/upload/v1755886950/Captura_de_pantalla_2025-08-22_122058_soiua4.png",
    description:
      "Aplicación para PyMEs que optimiza gestión de ventas y operaciones.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    link: "https://demo-pos.com",
  },
  {
    title: "Sistema de Salud Inteligente",
    image:
      "https://res.cloudinary.com/dnbftqck9/image/upload/v1755389830/Screenshot_2025-08-16_181451_bsinqj.png",
    description:
      "Plataforma web responsiva para gestión y análisis en el sector salud.",
    tech: ["Next.js", "Nest.js", "Tailwind", "Motion.dev"],
    link: "https://demo-health.com",
  },
  {
    title: "Gestión de Transporte Nocturno",
    image:
      "https://res.cloudinary.com/dnbftqck9/image/upload/v1755472892/IMG-20240527-WA0051_mhlmrl.jpg",
    description:
      "PWA para administración de transporte nocturno con programación automática.",
    tech: ["Next.js", "TypeScript", "Tailwind", "PWA"],
    link: "https://demo-transport.com",
  },
  {
    title: "Plataforma de Comunicación Gubernamental",
    image:
      "https://res.cloudinary.com/dnbftqck9/image/upload/v1755622089/Captura_de_pantalla_2025-08-19_104719_sid0sw.png",
    description:
      "Aplicación web con microservicios para comunicación y seguridad.",
    tech: ["Next.js", "Nest.js", "Tailwind", "Microservices"],
    link: "https://demo-gov.com",
  },
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-10 sm:py-16 px-2 sm:px-6"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Proyectos
      </h2>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 transition-all flex flex-col h-full"
          >
            <div className="relative w-full h-40 sm:h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover rounded-t-xl"
                priority={idx === 0}
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-2 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
