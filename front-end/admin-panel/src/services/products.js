import { admin } from "./base";

export const createProductRequest = async (url = "", param = {}) => {
  try {
    const response = await admin.post(url, param);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
///////////////
export const updateProductRequest = async (url = "", param = {}) => {
  try {
    const response = await admin.put(url, param);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
////////
export const deleteProductRequest = async (url = "", param = "") => {
  try {
    const response = await admin.delete(url, param);
    return response?.data;
  } catch (error) {
    console.log(error.error);
  }
};
