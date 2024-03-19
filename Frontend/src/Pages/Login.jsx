import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../Utils/consts";

export default function Login() {
  return (
    <div>
      <h1>Auto</h1>
      <p>
        jhfkjr <Link to={REGISTRATION_ROUTE}>registr</Link>
      </p>
    </div>
  );
}
