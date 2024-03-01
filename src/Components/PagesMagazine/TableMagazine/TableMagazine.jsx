import "./TableMagazine.css";
import { students } from "../../Database/Students";

export default function TableMagazine() {
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
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
