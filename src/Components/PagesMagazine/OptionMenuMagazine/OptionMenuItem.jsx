import { items } from "../../Database/Items";

export default function OptionMenuItem() {
  const lastItem = items.map((item) => {
    return <option key={item.id}>{item.name}</option>;
  });
  return <select className="content__option-select">{lastItem}</select>;
}
