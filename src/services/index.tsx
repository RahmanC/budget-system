import postData from "services/requests/postData";

// auth
export const login = async (data = {}) => {
  const respData = await postData("/login", data);
  return respData;
};
