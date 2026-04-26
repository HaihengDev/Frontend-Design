import NavBar from './NavBar';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-2.5">
      <aside className="flex gap-8 items-center">
        <h2 className="font-bold text-3xl uppercase">Techne</h2>
        <NavBar />
      </aside>

      <div className="icons">
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-solid fa-circle-user"></i>
      </div>
    </header>
  );
}
