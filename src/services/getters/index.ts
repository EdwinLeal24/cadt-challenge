import { http_manager } from "services/api";

const get_designs = async () => {
  try {
    const { data } = await http_manager.get("/designs");
    return [data, null];
  } catch (error) {
    let errorMessage;
    if (error instanceof Error) errorMessage = error.message;
    else errorMessage = String(error);
    return [null, errorMessage];
  }
};

const get_setouts = async () => {
  try {
    const { data } = await http_manager.get("/setouts");
    return [data, null];
  } catch (error) {
    let errorMessage;
    if (error instanceof Error) errorMessage = error.message;
    else errorMessage = String(error);
    return [null, errorMessage];
  }
};

const get_users = async () => {
  try {
    const { data } = await http_manager.get("/users");
    return [data, null];
  } catch (error) {
    let errorMessage;
    if (error instanceof Error) errorMessage = error.message;
    else errorMessage = String(error);
    return [null, errorMessage];
  }
};

export { get_designs, get_setouts, get_users };

// : Promise<Array<IDesigns | string | null>>
