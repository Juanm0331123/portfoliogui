import Image from "next/image";
import React from "react";

export const Projects: React.FC = () => {
  return (
    <section className="portfolio" id="portfolio" data-aos="fade-up">
      <h2 className="heading">
        My <span>portfolio</span>
      </h2>
      <p>
        Welcome to my portfolio section, where creativity and innovation meet!
        Here, I invite you to explore a sample of my most outstanding projects.
        From the captivating world of web design to exciting adventures in the
        digital world, my work is steeped in passion and dedication. Each
        project is a unique story, where aesthetics blend harmoniously with
        functionality. Let me take you on a journey through my imagination
        embodied in codes, colors and shapes, feel the magic of creativity in
        every click!
      </p>
      <div className="portfolio-container">
        {/* Portafolio 1 */}
        <div className="portfolio-box">
          <Image
            src="/images/Proyectos-img/portfolio1.jpg"
            alt="Task Manager"
            width={500}
            height={500}
          />
          <div className="portfolio-layer">
            <h4>Task Manager</h4>
            <p>
              An amazing task manager to organize your life and accomplish your
              goals.
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        {/* Portafolio 2 */}
        <div className="portfolio-box">
          <Image
            src="/images/Proyectos-img/portfolio2.jpg"
            alt="Proyecto 2"
            width={500}
            height={500}
          />
          <div className="portfolio-layer">
            <h4>Proyecto 2</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              repellendus!
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        {/* Portafolio 3 */}
        <div className="portfolio-box">
          <Image
            src="/images/Proyectos-img/portfolio3.jpg"
            alt="Proyecto 3"
            width={500}
            height={500}
          />
          <div className="portfolio-layer">
            <h4>Proyecto 3</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              repellendus!
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        {/* Portafolio 4 */}
        <div className="portfolio-box">
          <Image
            src="/images/Proyectos-img/portfolio4.jpg"
            alt="Proyecto 4"
            width={500}
            height={500}
          />
          <div className="portfolio-layer">
            <h4>Proyecto 4</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              repellendus!
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        {/* Portafolio 5 */}
        <div className="portfolio-box">
          <Image
            src="/images/Proyectos-img/portfolio5.jpg"
            alt="Proyecto 5"
            width={500}
            height={500}
          />
          <div className="portfolio-layer">
            <h4>Proyecto 5</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              repellendus!
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        {/* Portafolio 6 */}
        <div className="portfolio-box">
          <Image
            src="/images/Proyectos-img/portfolio6.jpg"
            alt="Proyecto 6"
            width={500}
            height={500}
          />
          <div className="portfolio-layer">
            <h4>Proyecto 6</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              repellendus!
            </p>
            <a href="#">
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
