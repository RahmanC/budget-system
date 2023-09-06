import { axiosBaseInstance } from "axiosConfig";

export default async function postData(url: string, data?: any, config?: any) {
  try {
    return await axiosBaseInstance.post(url, data, config);
  } catch (error) {
    return error;
  }
}
