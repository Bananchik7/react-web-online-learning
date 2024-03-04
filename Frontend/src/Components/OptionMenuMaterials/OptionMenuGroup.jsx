import { groups } from "../Database/Groups";

export default function OptionMenuGroup() {
  const lastGroup = groups.map((group) => {
    return <option key={group.id}>{group.name}</option>;
  });
  return <select className="content__option-select">{lastGroup}</select>;
}
