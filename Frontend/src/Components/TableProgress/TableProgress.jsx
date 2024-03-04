import { students } from "../Database/Students";

export default function TableProgress() {
  const rows = students.map(function (item) {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.lastname}</td>
        <td>{item.firstname}</td>
        <td>{item.surname}</td>
      </tr>
    );
  });

  return (
    <div className="content__table">
      <table className="content__main-table">
        <thead>
          <tr>
            <td></td>
            <td>Список учащихся</td>
            <td></td>
            <td></td>
            <td>
              Первая <br></br>четверть
            </td>
            <td>
              Вторая <br></br>четверть
            </td>
            <td>
              Третья <br></br>четверть
            </td>
            <td>
              Четвертая <br></br>четверть
            </td>
            <td>Итоговая</td>
            <td>комментарий</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
