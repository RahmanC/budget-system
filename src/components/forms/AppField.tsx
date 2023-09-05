import { Field, FormikValues, useFormikContext } from "formik";
import React, { FC } from "react";
import { AppFieldProps } from "utils/types";
import ErrorMessage from "./ErrorMessage";

export const AppField: FC<AppFieldProps> = ({ name, ...rest }) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext<FormikValues>();

  return (
    <React.Fragment>
      <div className=" min-w-[25vw] border-1 border-[#cccccc] border-[1px]  p-[0.5rem] item-center bg-white rounded-[5px] text-[#646464] text-[0.9rem] ">
        <Field
          className=" bg-none outline-none "
          id={name}
          name={name}
          onBlur={() => setFieldTouched(name, true)}
          onChange={(e: any) => setFieldValue(name, e.target.value)}
          value={values[name]}
          {...rest}
        />
      </div>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
};
