import * as motion from "motion/react-client";
import Image from "next/image";

export default function About() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center gap-8 py-10 px-4 sm:px-8 lg:px-24 xl:px-40"
      >
        <div className="flex justify-center w-full md:w-auto">
          <Image
            width={256}
            height={256}
            src="https://res.cloudinary.com/dnbftqck9/image/upload/v1755276785/IMG-20250328-WA0115_gchnjt.jpg"
            alt="Foto de Jairo Gonzalez"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-slate-200 shadow-md mb-6 md:mb-0"
          />
        </div>
        <div className="w-full max-w-xl text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Sobre mí</h2>
          <p className="text-slate-600 mb-4 text-base sm:text-lg">
            Soy Ingeniero en Sistemas Computacionales especializado en
            Ingeniería de Software, con enfoque en desarrollo front-end y
            creación de experiencias de usuario óptimas. Me adapto con facilidad
            a nuevas tecnologías y metodologías ágiles, aportando soluciones
            escalables, mantenibles y con alto rendimiento.
          </p>
          <ul className="list-disc list-inside text-slate-700 text-sm sm:text-base flex flex-col gap-1 sm:gap-2">
            <li>
              Experiencia: React, Next.js, Node.js, TypeScript, Python, Java,
              PHP, SQL, Prisma, Figma, Jira
            </li>
            <li>Habilidades: UI/UX, Tailwind CSS, SEO, Animaciones</li>
            <li>Idiomas: Español (nativo), Inglés (~B2)</li>
          </ul>
        </div>
      </motion.section>
    </>
  );
}
