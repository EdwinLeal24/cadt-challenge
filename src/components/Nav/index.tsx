import { Link, useLocation } from "react-router-dom";
import "./nav.scss";

interface NavProps {
  path: string;
  label: string;
}

const Nav: React.FC<NavProps> = (NavProps) => {
  const { path, label } = NavProps;

  const { pathname } = useLocation();
  const isActive = pathname === path;

  return (
    <Link to={path}>
      <button
        id="nav-button"
        className={isActive ? "active nav-button" : "nav-button"}
      >
        {label}
      </button>
    </Link>
  );
};

export default Nav;
