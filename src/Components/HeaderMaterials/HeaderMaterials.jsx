import "../HeaderMagazine/HeaderMagazine.css";
import OptionMenuItem from "../OptionMenuMaterials/OptionMenuItem";
import OptionMenuGroup from "../OptionMenuMaterials/OptionMenuGroup";
import OptionMenuMonth from "../OptionMenuMaterials/OptionMenuMonth";

export default function HeaderMaterials() {
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
        <OptionMenuMonth />
      </div>
    </div>
  );
}
