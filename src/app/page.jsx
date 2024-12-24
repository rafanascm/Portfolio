"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../sass/page.scss"

const Homepage = () => {
  const [text] = useTypewriter({
    words: ['Desenvolvedora Front End', 'Freelancer', 'UX/UI'],
    loop: true, 
  });

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="sss h-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGEM DO CONTAINER */}
        <div className="relative w-64 h-64 lg:w-96 lg:h-96 lg:flex lg:justify-center lg:mr-8 lg:mt-36">
          <Image src="/eu-desenho.svg" alt="" fill className="object-contain" />
        </div>
        {/* TEXTO CONTAINER */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center md:items-start md:pl-8 lg:w-1/2 lg:justify-center lg:mt-36">
          {/* TITULO */}
          <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
           Rafaela Nascimento
          </h1>
          {/* DESCRICAO */}
          <p className="text-2xl  text-center md:text-left font-light">
          Eu sou <span className="text-purple-800 font-light">{text}</span>
          <span className="text-purple-700"><Cursor /></span>
          </p>
          {/* BOTÕES */}
          <div className="flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Conheça o meu trabalho
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Entre em contato
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
