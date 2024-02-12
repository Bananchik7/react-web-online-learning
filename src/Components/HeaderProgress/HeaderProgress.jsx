import "../HeaderMagazine/HeaderMagazine";
import OptionMenuGroup from "../OptionMenuProgress/OptionMenuGroup";
import OptionMenuItem from "../OptionMenuProgress/OptionMenuItem";

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
    </div>
  );
}
