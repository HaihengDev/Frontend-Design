import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section id="hero-wrapper" style={{ backgroundImage: `url(${heroImage})` }}>
      <aside>
        <h3>Techne</h3>
        <p>Get access to million of products for make life easier</p>
        <button>Go Shopping&#x2192;</button>
      </aside>
    </section>
  );
}
