import { Form, Formik } from "formik";
import React, { FC } from "react";
import { AppFormProps } from "utils/types";

export const AppForm: FC<AppFormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  className,
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className={className ?? "flex flex-col gap-[1rem]"}>
          {children}
        </Form>
      )}
    </Formik>
  );
};
