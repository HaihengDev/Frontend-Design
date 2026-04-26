import NavBar from './NavBar';

export default function Header() {
  return (
    <header className="bg-gray-50 flex justify-between items-center p-2.5 sticky top-0 z-50 shadow-sm">
      <aside className="flex gap-8 items-center">
        <a href="#hero-wrapper" className="font-bold text-3xl uppercase">
          Techne
        </a>
        <NavBar />
      </aside>

      <div className="icons">
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-circle-user"></i>
      </div>
    </header>
  );
}
