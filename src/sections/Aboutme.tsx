import Image from "next/image";

export const Aboutme: React.FC = () => {
  return (
    <section className="aboutMe" id="aboutMe" data-aos="fade-up">
      <div className="img-about">
        <Image
          src="/images/Juan Miguel.jpg"
          alt="Programming illustration"
          width={500}
          height={500}
        />
      </div>
      <div className="aboutMe-content">
        <h4>LET ME INTRODUCE MYSELF</h4>
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Fronted Developer</h3>
        <p>
          Throughout my life, I have always been a curious and determined
          person. From an early age, I was drawn to programming and technology,
          and that passion has stayed with me over the years. Every day, I
          interact with the world of technology, making it part of my everyday
          environment. This deep connection led me to realize that my future was
          tied to this exciting world. Since then, I have longed to learn and
          grow in areas such as Python, Java, JavaScript, HTML, CSS and many
          others. My greatest aspiration is to be able to use my knowledge to
          help people and share what I have learned, inspiring others in their
          learning journey.
        </p>
        <a href="#" className="btn-readMore">
          Read More
        </a>
      </div>
    </section>
  );
};
