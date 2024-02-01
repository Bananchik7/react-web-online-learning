import "./ButtonMenu.css";

export default function ButtonMenu({ children }) {
  return (
    <button className="menu__button">
      <img
        className="menu__button-img"
        src="/button-menu.png"
        alt="button-menu"
      />
      {children}
    </button>
  );
}
