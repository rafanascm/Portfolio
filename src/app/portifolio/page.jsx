"use client";
import "./custom3D.css"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-gray-500 from-black-500",
    title: "Bikcraft",
    desc: "Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft.",
    img: "/bickcraft.png",
    link: "https://rafa.dev",
  },
  {
    id: 2,
    color: "from-gray-500 from-black-500",
    title: "E-commerce",
    desc: "E-commerce de aparelhos eletronicos, criado para o cliente MKS sistemas.",
    img: "/ecommerce.png",
    link: "https://rafa.dev",
  },
  {
    id: 3,
    color: "from-gray-500 from-black-500",
    title: "Notes",
    desc: "Notes permite que você crie notas tanto por meio da digitação quanto por audio, incrivel né? Bloco de notas totalmente tecnológico.",
    img: "/notes.png",
    link: "https://rafa.dev",
  },
  {
    id:4,
    color: "from-gray-500 from-black-500",
    title: "Projeto4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://rafa.dev",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Meus projetos
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r to-black-200 to-purple-100" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col items-center gap-8 text-black">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                    <div className="h-1 w-full bg-white my-4"></div>
                  </h1>

                  <div className="relative custom-shadow">
                    <Image src={item.img} width={800} height={800} alt="" />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] text-center">
                    {item.desc}
                  </p>
                  <div className="flex flex-row gap-4">
                    <Link href={item.link}>
                      <button className="p-1 font-semibold custom-3d-effect">
                        <div className="flex gap-3 justify-center">
                        <Image src="/git.svg" width={20} height={20} />
                        Site
                        </div>
                      </button>
                    </Link>
                    <Link href={item.link}>
                    <button className="p-1 font-semibold custom-3d-effect">
                        <div className="flex gap-3 justify-center">
                        <Image src="/github.svg" width={20} height={20} />
                        Codigo aberto
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Você tem um projeto??</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Desenvolvedora Front-end Developer e UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contato"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            contate-me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
