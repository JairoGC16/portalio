"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/JairoGC16",
    icon: <FaGithub size={22} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/jairo-gonzalez-160402mx/",
    icon: <FaLinkedin size={22} />,
    label: "LinkedIn",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-slate-100 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center  justify-end px-4 py-3">
        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-4">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-slate-600 hover:text-blue-600 transition-colors focus:text-blue-600"
            >
              {link.icon}
            </a>
          ))}
          {/* <a
            href="https://drive.google.com/uc?export=download&id=12BQRYmrREocCnh2IqCWlBtdD2E6vIW_H"
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <FaFileDownload size={18} />
          </a> */}
        </div>
        {/* Mobile */}
        <button
          className="sm:hidden flex items-center text-slate-600 hover:text-blue-600 focus:text-blue-600 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <FaBars size={24} />
        </button>
      </div>
      {/* Mobile menu */}
      {/* Mobile menu con animación motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="sm:hidden w-full bg-white border-t border-slate-100 px-4 py-3 flex flex-col gap-3"
          >
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                {link.icon}
                <span className="text-sm">{link.label}</span>
              </a>
            ))}
            {/* <a
              href="https://drive.google.com/uc?export=download&id=12BQRYmrREocCnh2IqCWlBtdD2E6vIW_H"
              className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <FaFileDownload size={18} />
            </a> */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
