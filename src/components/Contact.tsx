"use client";
import { motion } from "motion/react";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-10 sm:py-16 flex flex-col items-center px-2 sm:px-6"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center w-full">
        Contacto
      </h2>
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6 sm:p-10 border border-slate-100 flex flex-col items-center text-center">
        <Mail className="w-12 h-12 text-blue-600 mb-4" />
        <p className="text-slate-600 mb-6 text-sm sm:text-base">
          ¿Tienes algún proyecto en mente o simplemente quieres saludar? ¡Me encantaría escucharte!
        </p>
        <a
          href="mailto:jairoirineo1604@gmail.com"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium"
        >
          Envíame un correo
        </a>
      </div>
    </motion.section>
  );
}

