import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section id="hero-wrapper" style={{ backgroundImage: `url(${heroImage})` }}>
      <aside>
        <h3>Techne</h3>
        <p>Get access to million of products for make life easier</p>
        <a href="#card-layout">Go Shopping&#x2192;</a>
      </aside>
    </section>
  );
}
