import axios from "axios";
import { BASE_URL } from "../api";

const admin = axios.create({
  baseURL: BASE_URL,
});
///////////
export const baseRequest = async (url = "", param = {}) => {
  try {
    const response = await admin.get(url, {
      ...param,
    });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
////////////////
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
    console.log(error);
  }
};
