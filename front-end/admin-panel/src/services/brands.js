import { admin } from "./base";

export const createBrandRequest = async (url = "", param = {}) => {
  try {
    const response = await admin.post(url, param);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

/////

export const updateBrandRequest = async (url = "", param = {}) => {
  try {
    const response = await admin.put(url, param);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

/////

export const deleteBrandRequest = async (url = "", param = "") => {
  try {
    const response = await admin.delete(url + param);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
