import { Header } from "@/sections/Header";
import Hero from "@/sections/Hero";
import Script from "next/script";

export default function HomePage() {
  return (
    <>
      <div id="particles-js"></div>

      <Header />
      <Hero />

      <Script src="/js/particles.min.js" strategy="lazyOnload" />
      <Script src="/js/particle.js" strategy="lazyOnload" />
      <Script src="/js/script.js" strategy="lazyOnload" />
      <Script
        src="https://unpkg.com/swiper/swiper-bundle.min.js"
        strategy="beforeInteractive"
      />
    </>
  );
}
