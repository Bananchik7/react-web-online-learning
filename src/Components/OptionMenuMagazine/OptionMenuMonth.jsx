import { months } from "../Database/Months";

export default function OptionMenuMonths() {
  const lastMonth = months.map((month) => {
    return <option key={month.id}>{month.name}</option>;
  });
  return <select className="content__option-select">{lastMonth}</select>;
}
