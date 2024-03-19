import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../Utils/consts";

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <p>
        jhfkjr <Link to={LOGIN_ROUTE}>auto</Link>
      </p>
    </div>
  );
}
