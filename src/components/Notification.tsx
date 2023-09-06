import toast from "react-hot-toast";

export const somethingWentWrongToast = () =>
  toast.error("Something Went Wrong");

// @Authentication
export const loginSuccessToast = (message: string) => toast.success(message);
export const logoutSuccessToast = () => toast.success("");
export const invalidCredentialToast = (message: string) => toast.error(message);
