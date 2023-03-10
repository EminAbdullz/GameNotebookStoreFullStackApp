import { admin } from "./base";

export const createOptionRequest = async (url = "", param = {}) => {
  try {
    const response = await admin.post(url, param);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

/////

export const updateOptionRequest = async (url = "", param = {}) => {
  try {
    const response = await admin.put(url, param);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

/////

export const deleteOptionRequest = async (url = "", param = "") => {
  try {
    const response = await admin.delete(url + param);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
