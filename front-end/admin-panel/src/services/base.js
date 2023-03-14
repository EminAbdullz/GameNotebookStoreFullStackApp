import axios from "axios";
import { BASE_URL } from "../api";

export const admin = axios.create({
  baseURL: BASE_URL,
});

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

