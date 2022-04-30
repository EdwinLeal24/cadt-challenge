import { FunctionComponent } from "react";

interface IDesign {
  id: number;
  name: string;
  status: string;
  updated: string;
  courses: number;
  wales: number;
  user_id_last_update: number;
}

interface IUser {
  id: number;
  name: string;
}

interface ISetout {
  id: number;
  name: string;
  machine_name: string;
  updated: string;
  machine_width: number;
  courses: number;
}

interface IRoute {
  component: FunctionComponent;
  path: string;
}

export type { IDesign, IUser, ISetout, IRoute };
