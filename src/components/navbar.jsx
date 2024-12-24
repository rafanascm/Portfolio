"use client";

import Link from "next/link";
import { useState } from "react";
import { NavLink } from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Inicio" },
  { url: "/sobre", title: "Sobre" },
  { url: "/portifolio", title: "Portifólio" },
  { url: "/contato", title: "Contato" },
];

export function Navbar() {
  const [aberto, setAberto] = useState(false);

// Animações menu hamburguer
  const topVariantes = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centroVariantes = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const botoesVariantes = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listaVariante = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
    },
  };
// Fim animação menu hamburguer 
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex justify-center">
        <Link
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          href="/"
        >
          <span className="text-white mr-1">Rafaela Nascimento</span>
          <span className="bg-white w-12 rounded flex items-center justify-center">
            {" "}
            .Dev
          </span>
        </Link>
      </div>
      {/* REDES SOCIAIS */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/rafanascm/rafanascm/blob/main/README.md">
          <img src="/github.svg" alt="github" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/krnascimento/">
          <img src="/linkedin.png" alt="github" width={24} height={24} />
        </Link>
      </div>
      {/* MENU RESPONSIVO */}
      <div className="md:hidden">
        {/* BOTÃO MENU */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setAberto((prev) => !prev)}
        >
          <motion.div
            variants={topVariantes}
            animate={aberto ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centroVariantes}
            animate={aberto ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={botoesVariantes}
            animate={aberto ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* LISTA MENU */}
        {aberto && (
          <motion.div
            variants={listaVariante}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white  flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
