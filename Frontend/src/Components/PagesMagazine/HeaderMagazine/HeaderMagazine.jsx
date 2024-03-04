import OptionMenuItem from "../OptionMenuMagazine/OptionMenuItem";
import OptionMenuGroup from "../OptionMenuMagazine/OptionMenuGroup";
import OptionMenuMonths from "../OptionMenuMagazine/OptionMenuMonth";
import "./HeaderMagazine.css";

export default function HeaderMagazine() {
  return (
    <div className="content__header">
      <div className="content__header-option">
        <p className="content__option-title">Предмет:</p>
        <OptionMenuItem />
      </div>
      <div className="content__header-option">
        <p className="content__option-title">Класс:</p>
        <OptionMenuGroup />
      </div>
      <div className="content__header-option">
        <p className="content__option-title">Месяц:</p>
        <OptionMenuMonths />
      </div>
    </div>
  );
}
