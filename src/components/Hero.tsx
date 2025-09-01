import * as motion from "motion/react-client"


export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center py-10 sm:py-16 px-2 sm:px-6"
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Jairo Gonzalez</h1>
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-slate-500">Desarrollador Web Front-End</h2>
      <p className="max-w-xl text-sm sm:text-base md:text-lg text-slate-600 mb-6">
        Apasionado por crear experiencias digitales modernas, funcionales y optimizadas. Especializado en tecnologías web y diseño responsivo.
      </p>
    </motion.section>
  );
}
