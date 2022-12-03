import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="navbar">
      <ul class="navbar-li">
        <li class="navbar-item">
          <Link to={"/"}>
            <Button variant="text">Home</Button>
          </Link>
        </li>
        <li class="navbar-item">
          <Link to={"/bibliography"}>
            <Button variant="text">Bibliography</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
