import { DESIGNS_PATH, SETOUTS_PATH, NOT_FOUND_PATH } from "./paths";
import { Designs, Setouts, NotFound } from "views";
import { FunctionComponent } from "react";

interface route {
  component: FunctionComponent;
  path: string;
}

const DESIGNS: route = {
  component: Designs,
  path: DESIGNS_PATH,
};

const SETOUTS: route = {
  component: Setouts,
  path: SETOUTS_PATH,
};

const NOT_FOUND: route = {
  component: NotFound,
  path: NOT_FOUND_PATH,
};

const ROUTES = [DESIGNS, SETOUTS, NOT_FOUND];
export default ROUTES;
