import { DESIGNS_PATH, SETOUTS_PATH, NOT_FOUND_PATH, HOME_PATH } from "./paths";
import { Designs, Setouts, NotFound } from "views";
import { IRoute } from "types";

const HOME: IRoute = {
  component: Designs,
  path: HOME_PATH,
};

const DESIGNS: IRoute = {
  component: Designs,
  path: DESIGNS_PATH,
};

const SETOUTS: IRoute = {
  component: Setouts,
  path: SETOUTS_PATH,
};

const NOT_FOUND: IRoute = {
  component: NotFound,
  path: NOT_FOUND_PATH,
};

const ROUTES = [HOME, DESIGNS, SETOUTS, NOT_FOUND];
export default ROUTES;
