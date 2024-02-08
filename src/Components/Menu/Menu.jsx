import "./Menu.css";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
//import { useState } from "react";

export default function Menu({ active, onChange }) {
  //const [menuType, setMenuType] = useState("magazine");

  //function handleClick(type) {
  //  setMenuType(type);
  //}
  return (
    <div className="menu">
      <div className="menu__title">
        <img className="menu__title-img" src="./menu.png" alt="menu" />
        <p className="menu__title-name">МЕНЮ</p>
      </div>
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
      <ButtonMenu
        isActive={active === "progress"}
        onClick={() => onChange("progress")}
      >
        Успеваемость
      </ButtonMenu>
      <ButtonMenu isActive={active === "help"} onClick={() => onChange("help")}>
        Поддержка
      </ButtonMenu>
    </div>
  );
}
