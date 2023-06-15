const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__title">
          World<span>Fitness</span>
        </h1>

        <ul className="navbar__list">
          <li className="navbar__list-item">
            <a href="#" className="navbar__link">
              Inicio
            </a>
          </li>

          <li className="navbar__list-item">
            <a href="#" className="navbar__link">
              Productos
            </a>
          </li>

          <li className="navbar__list-item">
            <a href="#" className="navbar__link">
              Nosotros
            </a>
          </li>

          <li className="navbar__list-item">
            <a href="#" className="navbar__link">
              blog
            </a>
          </li>
        </ul>

        <div className="navbar__contact">
          <a href="#" className="navbar__contact-link">
            Contactar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
