import { Github, Linkedin, Mail } from "lucide-react";
import { FaFileDownload, FaWhatsapp } from "react-icons/fa";
import React from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jairo-gonzalez-160402mx/",
    icon: <Linkedin className="w-6 h-6" />,
    className: "hover:text-[#0e76a8] focus:text-[#0e76a8]",
  },
  {
    name: "GitHub",
    url: "https://github.com/JairoGC16",
    icon: <Github className="w-6 h-6" />,
    className: "hover:text-[#ffffff] focus:text-[#ffffff]"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/524435290635?text=Hola!%20Estoy%20interesado%20en%20tu%20portafolio",
    icon: <FaWhatsapp className="w-6 h-6" />,
    className: "hover:text-[#25D366] focus:text-[#25D366]",
  },
  {
    name: "Correo",
    url: "mailto:jairoirineo1604@gmail.com",
    icon: <Mail className="w-6 h-6" />,
    className: "hover:text-[#EA4335] focus:text-[#EA4335]",
  },
  {
    name: "CV",
    url: "https://drive.google.com/uc?export=download&id=12BQRYmrREocCnh2IqCWlBtdD2E6vIW_H",
    icon: <FaFileDownload className="w-6 h-6" />,
    className: "hover:text-blue-500 focus:text-blue-500"
  }
];

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        {/* Íconos sociales */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-slate-400 transition-colors duration-300 ${link.className} focus:outline-none`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Línea divisoria */}
        <div className="w-full border-t border-slate-700" />

        {/* Texto copyright */}
        <span className="text-sm text-slate-400 text-center">
          © {new Date().getFullYear()}{" "}
          <span className="text-white">JairoGC16</span>. Todos los derechos
          reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
