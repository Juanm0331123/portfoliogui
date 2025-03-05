"use client";

import { useEffect } from "react";
import { Aboutme } from "@/sections/Aboutme";
import { Header } from "@/sections/Header";
import Hero from "@/sections/Hero";
import Script from "next/script";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: "ease-in-out", // Tipo de animación
      once: true, // Si la animación debe ocurrir solo una vez
    });

    // Cargar partículas solo en el cliente
    const script = document.createElement("script");
    script.src = "/js/particles.min.js";
    script.async = true;
    script.onload = () => {
      const particleScript = document.createElement("script");
      particleScript.src = "/js/particle.js";
      particleScript.async = true;
      document.body.appendChild(particleScript);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div id="particles-js"></div>

      <Header />
      <Hero />
      <Aboutme />

      <Script src="/js/script.js" strategy="lazyOnload" />
      <Script
        src="https://unpkg.com/swiper/swiper-bundle.min.js"
        strategy="beforeInteractive"
      />
    </>
  );
}
