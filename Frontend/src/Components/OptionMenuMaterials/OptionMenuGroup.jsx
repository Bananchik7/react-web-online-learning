import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";

export const OptionMenuGroup = observer(() => {
  const { content } = useContext(Context);
  return (
    <>
      <select className="content__option-select">
        {content.GroupStudents.map((item) => (
          <option key={item.GroupID}>{item.Name}</option>
        ))}
      </select>
    </>
  );
});

export default OptionMenuGroup;
