import React from "react";

import * as Yup from "yup";
import AppButton from "components/AppButton";
import { useNavigate } from "react-router-dom";
import { AppForm } from "components/forms/AppForm";
import { AppField } from "components/forms/AppField";
import { useDispatch } from "react-redux";
import { LoginUser } from "redux/slices/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required")
    .label("Email"),
  password: Yup.string().required("Required").label("Password"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values: any) => {
    dispatch(LoginUser(values));
    navigate("/");
  };

  return (
    <div className="bg-white shadow-lg rounded-md p-[1.5rem]">
      <p className="text-[1.6rem] text-[#5b5b5b] font-[900]">
        Budget Management System
      </p>

      <p className="text-[0.9rem] text-[#15849d] font-[500]">
        Sign in to manage your expenses
      </p>
      <div className="mt-[2.5rem]">
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppField name="email" placeholder="Email address" />
          <AppField name="password" placeholder="Password" type="password" />
          <AppButton type={"submit"} label="Sign In" />
        </AppForm>
      </div>
    </div>
  );
};

export default SignIn;
