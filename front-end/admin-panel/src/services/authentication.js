import { toast } from "react-toastify";
import { admin } from "./base";

// to block or deploy user
export const updateUserRequest = async (url, param) => {
  try {
    const response = await admin.post(url, param);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

// to log in
export const authorizationRequest = async (url, param) => {
  try {
    const response = await admin.post(url, param);
    return response?.data;
  } catch (error) {
    console.log(error);
    toast.error(`${error.response.data}`);
  }
};
