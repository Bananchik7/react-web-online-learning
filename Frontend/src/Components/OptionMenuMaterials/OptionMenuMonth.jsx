import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";

export const OptionMenuMonth = observer(() => {
  const { material } = useContext(Context);
  return (
    <>
      <select className="content__option-select">
        {material.Months.map((item) => (
          <option key={item.MonthID}>{item.Name}</option>
        ))}
      </select>
    </>
  );
});

export default OptionMenuMonth;
