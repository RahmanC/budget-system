import { Field, FormikValues, useFormikContext } from "formik";
import React, { FC } from "react";
import { AppFieldProps } from "utils/types";
import ErrorMessage from "./ErrorMessage";

export const AppSelect: FC<AppFieldProps> = ({ name, options }) => {
  const { errors, touched } = useFormikContext<FormikValues>();

  return (
    <React.Fragment>
      <div className=" min-w-[25vw] border-1 border-[#cccccc] border-[1px]  p-[0.5rem] item-center bg-white rounded-[5px] text-[#646464] text-[0.9rem] ">
        <Field
          as="select"
          id={name}
          name={name}
          className="w-[100%] outline-none border-none"
        >
          {options.map((option: string) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Field>
      </div>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
};
