import heroStyle from "./Hero.module.css";
import heroImage from "./pizza-hero.png";
const Hero = () => {
  return (
    <main id={heroStyle.heroContainer}>
      <article id={heroStyle.heroContent}>
        <h1>Si tenes Zappi,</h1>
        <h2>tenes Nucba.</h2>
        <p>Buscá lo que quieras y Nucba te quedes sin comida</p>
        <a href="#">Ver mas</a>
      </article>
      <picture id={heroStyle.heroPicture}>
        <img src={heroImage} alt="" />
      </picture>
    </main>
  );
};
export default Hero;
