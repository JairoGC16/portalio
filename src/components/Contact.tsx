"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { send } from "emailjs-com";
import { CheckCircle2, XCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await send(
        "service_0upwewn",
        "template_lyl0ite",
        form,
        "ZZZIJYi9eHWmlRFCc"
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("No se pudo enviar el mensaje. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-10 sm:py-16 flex flex-col items-center px-2 sm:px-6"
    >
      <div className={`${sent || error ? 'p-4' : 'hidden'}`}>
        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 p-3 text-green-700 shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>¡Mensaje enviado con éxito!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-red-700 shadow-sm"
            >
              <XCircle className="w-5 h-5" />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center w-full">
        Contacto
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white rounded-xl shadow-md p-4 sm:p-8 border border-slate-100"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mb-4 px-3 py-2 sm:px-4 sm:py-2 border rounded focus:outline-none focus:border-slate-500 text-sm sm:text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-4 px-3 py-2 sm:px-4 sm:py-2 border rounded focus:outline-none focus:border-slate-500 text-sm sm:text-base"
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full mb-4 px-3 py-2 sm:px-4 sm:py-2 border rounded focus:outline-none focus:border-slate-500 text-sm sm:text-base resize-none h-32"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 hover:cursor-pointer focus:bg-blue-700  rounded hover:bg-blue-700 transition-colors text-sm sm:text-base focus:border-slate-500"
        >
          {loading ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>
      <p className="mt-6 text-slate-500 text-xs sm:text-sm select-text">
        O escríbeme a{" "}
        <a href="mailto:jairoirineo1604@gmail.com" className="underline ">
          jairoirineo1604@gmail.com
        </a>
      </p>
    </motion.section>
  );
}
