import "./Menu.css";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Menu({ active, onChange }) {
  const [menuType, setMenuType] = useState("magazine");

  function handleClick(type) {
    setMenuType(type);
  }
  return (
    <section className="menu">
      <article className="menu__title">
        <img className="menu__title-img" src="./menu.png" alt="menu" />
        <p className="menu__title-name">МЕНЮ</p>
      </article>
      <ButtonMenu
        isActive={active === "magazine"}
        onClick={() => onChange("magazine")}
      >
        Журнал учета
      </ButtonMenu>
      <ButtonMenu
        isActive={active === "translate"}
        onClick={() => onChange("translate")}
      >
        Онлайн-трансляция
      </ButtonMenu>
      <ButtonMenu
        isActive={active === "materials"}
        onClick={() => onChange("materials")}
      >
        Материалы уроков
      </ButtonMenu>
      <ButtonMenu isActive={active === "help"} onClick={() => onChange("help")}>
        Поддержка
      </ButtonMenu>
    </section>
  );
}
