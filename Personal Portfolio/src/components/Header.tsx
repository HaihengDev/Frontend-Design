import NavBar from './NavBar';
import './style/header.css';

export default function Header() {
  return (
    <header>
      <aside>
        <h1>My Portfolio</h1>
        <NavBar />
      </aside>

      <button>Hire Me</button>
    </header>
  );
}
