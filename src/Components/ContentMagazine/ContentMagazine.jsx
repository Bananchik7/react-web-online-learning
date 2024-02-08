import "./ContentMagazine.css";
import TableMagazine from "../TableMagazine/TableMagazine";
import InfoMagazine from "../InfoMagazine/InfoMagazine";

export default function ContentMagazine() {
  return (
    <div className="content__main">
      <TableMagazine />
      <InfoMagazine />
    </div>
  );
}
