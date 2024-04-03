import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";
import { fetchGroup } from "../../http/materialsAPI.js";

export const OptionMenuGroup = observer(() => {
  const { material } = useContext(Context);

  return (
    <>
      <select className="content__option-select">
        {material.GroupStudents.map((item) => (
          <option key={item.GroupID}>{item.Name}</option>
        ))}
      </select>
    </>
  );
});

export default OptionMenuGroup;
