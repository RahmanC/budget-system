import { axiosBaseInstance } from "axiosConfig";

export default async function fetchData(url: string) {
  try {
    const resp = await axiosBaseInstance.get(url);
    return resp.data;
  } catch (error) {
    return error;
  }
}
