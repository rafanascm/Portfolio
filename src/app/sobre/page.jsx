"use client";
import Cerebro from "@/components/cerebro";
import "./custom3D.css";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function SobrePage() {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();

  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXTO CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:w-1/2">
          {/* BIOGRAFIA CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* TITULO BIOGRAFIA */}
            <h1 className="font-bold text-2xl">Um pouco sobre mim...</h1>
            {/* DESCRICAO BIOGRTAFIA */}
            <p className="text-lg">
              Oi! Eu sou a Rafinha, tenho 23 anos e sou formada em Análise e
              Desenvolvimento de Sistemas pela FIAP. Atualmente, trabalho como
              desenvolvedora front end, entretanto minha jornada na tecnologia
              começou como analista de dados voltado para o mercado GRC e ESG.
              Também tenho experiência de back end, então tenho um pé em cada
              canto do desenvolvimento. <br /> Vamos trocar uma ideia sobre
              tecnologia e inovação?
            </p>

            {/* ASSINATURA */}
            <div className="relative w-80 h-20 self-end">
              <Image
                src="/rubrica.svg"
                alt=""
                fill
                className="object-contain"
                layout="fill"
              />
            </div>
            {/* BIOGRAFIA SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITULO */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SILKS */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <div className="flex gap-2">
                  <Image src="/javascript-plain.svg" width={15} height={15} />
                  JavaScript
                </div>
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <div className="flex gap-2">
                  <Image src="/typescript.svg" width={15} height={15} />
                  TypeScript
                </div>
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <div className="flex gap-2">
                  <Image src="/react.svg" width={15} height={15} />
                  React.js
                </div>
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <div className="flex gap-2">
                  <Image src="/nextjs.svg" width={15} height={15} />
                  Next.js
                </div>
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <div className="flex gap-2">
                  <Image src="/bootstrap.svg" width={15} height={15} />
                  Bootstrap 5
                </div>
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <div className="flex gap-2">
                  <Image src="/tailwindcss.svg" width={15} height={15} />
                  Tailwind CSS
                </div>
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <div className="flex gap-2">
                  <Image src="/sqldeveloper.svg" width={15} height={15} />
                  SQL
                </div>
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <div className="flex gap-2">
                  <Image src="/mongodb.svg" width={15} height={15} />
                  MongoDB
                </div>
              </div>
              <br />
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <div className="flex gap-2">
                  <Image src="/framermotion.svg" width={15} height={15} />
                  Framer Motion
                </div>
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <div className="flex gap-2">
                  <Image src="/vite.svg" width={15} height={15} />
                  Vite
                </div>
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <div className="flex gap-2">
                  <Image src="/git.svg" width={15} height={15} />
                  Git
                </div>
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                <div className="flex gap-2">
                  <Image src="/figma.svg" width={15} height={15} />
                  Figma
                </div>
              </div>
            </motion.div>
            {/* SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCIA */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCIA TITULO */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              CARREIRA
            </motion.h1>
            {/* EXPERIENCIA LISTA */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCIA LISTA ITEM */}
              <div className="flex justify-between h-48">
                {/* ESQUERDA */}
                <div className="w-2/3 ">
                  {/* JOB TITLE */}
                  <div className="p-3 font-semibold custom-3d-effect">
                    Desenvolvedora Front end
                  </div>
                  <div className="p-1 rounded  text-sm font-semibold w-fit">
                    AMBIPAR ESG{" "}
                    <div className="text">2024 - Presente</div>
                  </div>
                  {/* DESC */}
                  <div className="p-3 text-sm ">
                    Desenvolvimento de soluções de software para atender às
                    demandas específicas do mercado de ESG. Implementação de
                    funcionalidades avançadas para visualização de dados
                    relacionados a questões ambientais, sociais e de governança.
                  </div>
                  {/* Icons */}
                  {/* <div className="flex gap-3 justify-center">
                  <Image className=""
                    src="/html.svg"
                    width={20}
                    height={20}
                    />
                     <Image
                    src="/css.svg"
                    width={20}
                    height={20}
                    />
                      <Image
                    src="/javascript-plain.svg"
                    width={20}
                    height={20}
                    />
                      <Image
                    src="/typescript.svg"
                    width={20}
                    height={20}
                    />
                    <Image
                    src="/react.svg"
                    width={20}
                    height={20}
                    />
                  </div> */}
                </div>
                {/* CENTRO */}
                <div className="w-1/12 flex justify-center">
                  {/* LINHA */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCULO LINHA */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-600 bg-white -left-2"></div>
                  </div>
                </div>
                {/* DIREITA */}
                <div className="w-2/3 "></div>
              </div>
              {/* EXPERIENCIA LISTA ITEM */}
              <div className="flex justify-between h-48">
                {/* ESQUERDA */}
                <div className="w-1/2"></div>
                {/* CENTRO */}
                <div className="w-1/12 flex justify-center items-center">
                  {/* LINHA */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINHA CIRCULO */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-600 bg-white -left-2"></div>
                  </div>
                </div>
                {/* DIREITA */}
                <div className="w-1/2 ">
                  {/* EXPERIENCIA TITULO */}
                  <div className=" p-3 font-semibold custom-3d-effect">
                    Analista de Dados Júnior
                  </div>
                  <div className="p-1 rounded  text-sm font-semibold w-fit">
                    BRAVO GRC
                    <div className="text">2023</div>
                  </div>
                  {/* EXPERIENCIA DESC */}
                  <div className="p-3 text-sm  w-76">
                    Realizar análises de riscos em conjunto com a equipe,
                    contribuindo para a melhoria contínua dos processos;
                    Colaborar na implementação de processos e controles
                    internos, participando ativamente em reuniões de desenho
                    colaborativo. Criação de heatmaps de frameworks para Riscos,
                    Compliance, Auditoria Interna, Continuidade de Negócios,
                    Gestão de Terceiros e Cybersecurity. - Colaboração na
                    identificação de oportunidades de melhoria nos processos e
                    controles existentes
                  </div>
                </div>
              </div>
              {/* EXPERIENCIA LISTA */}
              <div className="flex justify-between h-48">
                {/* ESUQERDA */}
                <div className="w-2/3 ">
                  {/* TRABALHO TITULO */}
                  <div className=" p-3 font-semibold custom-3d-effect">
                    Estagiária de Dados
                  </div>
                  <div className="p-1 rounded  text-sm font-semibold w-fit">
                    BRAVO GRC
                    <div className="text">2021 - 2023</div>
                  </div>
                  {/* EXPERIENCIA DESC */}
                  <div className="p-3 text-sm ">
                    Auxiliar na projeção e criação de     soluções
                 de software sob a orientação da equipe de
                    especialistas em Banco de Dados. - Participar da verificação
                    de viabilidade de protótipos de software, colaborando na
                    análise e avaliação para garantir soluções viáveis e
                    alinhadas aos requisitos do cliente. - Auxiliar na
                    modificação de códigos existentes para corrigir erros,
                    melhorar a eficiência e contribuir para a segurança dos
                    sistemas de banco de dados. - Colaborar na criação de
                    relatórios visuais.{""}
                  </div>
                </div>
                {/* CENTRO */}
                <div className="w-1/12 flex justify-center">
                  {/* LINHA */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINHA CIRCULO */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-600 bg-white -left-2"></div>
                  </div>
                </div>
                {/* DIREITA */}
                <div className="w-2/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Cerebro scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}
