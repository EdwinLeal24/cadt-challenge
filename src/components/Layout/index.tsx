import "./layout.scss";
import { DESIGNS_PATH, SETOUTS_PATH } from "../../router/paths";
import { Nav } from "components";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const routes = [
    {
      path: DESIGNS_PATH,
      label: "DESIGNS",
    },
    {
      path: SETOUTS_PATH,
      label: "SETOUTS",
    },
  ];

  return (
    <div className="layout-container">
      <div className="layout-sidebar">
        <div className="layout-sidebar_nav">
          {routes.map(({ path, label }) => (
            <Nav key={label} label={label} path={path} />
          ))}
        </div>
      </div>
      <div className="layout-content">{children}</div>
    </div>
  );
};

export default Layout;
