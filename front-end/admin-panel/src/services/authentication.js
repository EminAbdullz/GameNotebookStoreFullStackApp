import { admin } from "./base";

export const updateUserRequest = async (url, param) => {
  try {
    const response = await admin.post(url, param);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
