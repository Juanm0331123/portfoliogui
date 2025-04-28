"use client";

import { Aboutme } from "@/sections/Aboutme";
import { Header } from "@/sections/Header";
import Hero from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
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
      <Projects />

      <Script src="/js/script.js" strategy="lazyOnload" />
      <Script
        src="https://unpkg.com/swiper/swiper-bundle.min.js"
        strategy="beforeInteractive"
      />
    </>
  );
}
