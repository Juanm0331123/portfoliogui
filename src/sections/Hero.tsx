import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export const Hero: React.FC = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, I&apos;m Juan Miguel</h1>
        <div className="change-text">
          <h3>And I&apos;m a&nbsp;</h3>
          <h3>
            <span className="word">Web&nbsp;Developer</span>
            <span className="word">Programmer</span>
            <span className="word">Software&nbsp;Engineer</span>
            <span className="word">Fronted&nbsp;Developer</span>
            <span className="word">Backend&nbsp;Developer</span>
          </h3>
        </div>
        <p>
          I&apos;m a passionate web developer with experience in HTML, CSS,
          JavaScript, SQL, Java, Python, and more. Programming isn&apos;t just
          my job; it&apos;s my favorite pastime and a true passion. In every
          project, I pour all my care and dedication, and I&apos;m constantly on
          the lookout for opportunities to learn and enhance my skills.
          Programming is my true passion!
        </p>
        <div className="social-media">
          <a href="#">
            <FaFacebook size={20} />
          </a>
          <a href="#">
            <FaYoutube size={20} />
          </a>
          <a href="#">
            <FaLinkedin size={20} />
          </a>
          <a href="#">
            <FaInstagram size={20} />
          </a>
        </div>
        <a href="#" className="btn">
          Hire Me
        </a>
      </div>
      <div className="home-img">
        <Image
          src="/images/Programming-amico.svg"
          alt="Programming illustration"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
