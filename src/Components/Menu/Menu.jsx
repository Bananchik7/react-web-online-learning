import "./Menu.css";
import ButtonMenu from "../ButtonMenu/ButtonMenu";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__title">
        <img className="menu__title-img" src="./menu.png" alt="menu" />
        <p className="menu__title-name">МЕНЮ</p>
      </div>
      <ButtonMenu>Журнал учета</ButtonMenu>
      <ButtonMenu>Онлайн-трансляция</ButtonMenu>
      <ButtonMenu>Материалы уроков</ButtonMenu>
      <ButtonMenu>Успеваемость</ButtonMenu>
      <ButtonMenu>Поддержка</ButtonMenu>
    </div>
  );
}
