import classes from "./ButtonMenu.module.css";

export default function ButtonMenu({ children, isActive, ...props }) {
  return (
    <button
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
    >
      <img
        className="menu__button-img"
        src="/button-menu.png"
        alt="button-menu"
        style={{ padding: "0 10px 0px 20px" }}
      />
      {children}
    </button>
  );
}
