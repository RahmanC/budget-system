import React from "react";
import { AppForm } from "./AppForm";
import { AppField } from "./AppField";
import AppButton from "components/AppButton";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required").label("Budget Name"),
  amount: Yup.string().required("Required").label("Budget Amount"),
});

const NewBudgetForm = ({ manageItem }: any) => {
  const handleSubmit = (values: any) => {
    manageItem(values);
  };
  return (
    <div>
      <div className="my-[1rem]">
        <AppForm
          initialValues={{ name: "", amount: "", status: "pending" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppField name="name" placeholder="Budget name" />
          <AppField name="amount" placeholder="Total Budget Amount" />
          <AppButton type={"submit"} label="Submit" />
        </AppForm>
      </div>
    </div>
  );
};

export default NewBudgetForm;
