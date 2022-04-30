import { API_INSTANCE } from "./api";

const get = async (url = "") => {
  return await API_INSTANCE.get(url);
};

export const http_manager = {
  get,
};
