import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";

export const OptionMenuItem = observer(() => {
  const { material } = useContext(Context);
  return (
    <>
      <select className="content__option-select">
        {material.Items.map((item) => (
          <option key={item.ItemID}>{item.Name}</option>
        ))}
      </select>
    </>
  );
});

export default OptionMenuItem;
