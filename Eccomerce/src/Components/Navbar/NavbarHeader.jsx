export default function NavbarHeader() {
  return (
    <header className="header">
      <p>Envios a todo el pais 🚚</p>
      <div className="header__container">
        <div className="header__encabezado">
          <img src="../src/img/icon.png" alt="" />
          <h3>Fitness Everywhere</h3>
        </div>
        <div className="header__Smedia">
          <i class="fa-brands fa-instagram"></i>

          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-facebook"></i>
        </div>
      </div>

      <div className="header__login">
        <div className="create-account">
          <a href="">
            <i class="fa-solid fa-square-plus"></i>
            Crear cuenta
          </a>
        </div>

        <div className="log-in">
          <a href="">
            <i class="fa-solid fa-user"></i>
            Iniciar sesison
          </a>
        </div>

        <div className="cart">
          <a href="">
            <i class="fa-solid fa-cart-shopping">
              <span> 0 - $0,00</span>{" "}
            </i>
          </a>
        </div>
      </div>
    </header>
  );
}
