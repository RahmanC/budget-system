import React from "react";

import * as Yup from "yup";
import AppButton from "components/AppButton";

import { AppForm } from "components/forms/AppForm";
import { AppField } from "components/forms/AppField";
import { useDispatch } from "react-redux";
import { LoginUser } from "redux/slices/auth";
import { useSelector } from "react-redux";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .email("Invalid email address")
    .required("Required")
    .label("Email"),
  password: Yup.string().required("Required").label("Password"),
});

const SignIn = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state: any) => state.auth);

  const handleSubmit = (values: any) => {
    dispatch(LoginUser(values));
  };

  return (
    <div className="flex items-center justify-center flex-1 w-[100%] h-screen px-[3.5rem] ">
      <div className="bg-white shadow-lg rounded-md p-[1.5rem]">
        <p className="text-[1.3rem] md:text-[1.6rem] text-[#5b5b5b] text-center font-[900]">
          Budget Management System
        </p>

        <p className="text-[0.9rem] text-[#15849d] text-center font-[500]">
          Sign in to manage your expenses
        </p>
        <div className="mt-[2.5rem]">
          <AppForm
            initialValues={{ username: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <AppField name="username" placeholder="Email address" />
            <AppField name="password" placeholder="Password" type="password" />
            <AppButton
              disabled={isLoading}
              type={"submit"}
              label={isLoading ? "please wait" : "Sign In"}
            />
          </AppForm>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
