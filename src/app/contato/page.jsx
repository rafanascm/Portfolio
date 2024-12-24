"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  user_message: z.string().min(1, "A mensagem é obrigatória"),
  user_email: z.string().email("Digite um email válido"),
});

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Entre em contato";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const sendEmail = (data) => {
    setError(false);
    setSuccess(false);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          user_email: data.user_email,
          user_message: data.user_message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXTO CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <div className="mt-14 flex justify-center">
              <Image src="/image-email-love.svg" width={400} height={400} />
            </div>
          </div>
        </div>
        {/* FORMULARIO CONTAINER */}
        <form
          onSubmit={handleSubmit(sendEmail)}
          className="h-1/2 lg:h-full lg:w-1/2 bg-purple-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Rafinha,</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            {...register("user_message")}
          />
          {errors.user_message && (
            <span className="text-red-600">{errors.user_message.message}</span>
          )}
          <span>Meu email é:</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
            {...register("user_email")}
          />
          {errors.user_email && (
            <span className="text-red-600">{errors.user_email.message}</span>
          )}
          <span>Aguardo seu retorno</span>
          <button className="bg-yellow-400 rounded font-semibold text-black p-4 hover:bg-yellow-300">
            Enviar
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Sua mensagem foi enviada com sucesso!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Ah não, aconteceu algo de errado, tente novamente!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
