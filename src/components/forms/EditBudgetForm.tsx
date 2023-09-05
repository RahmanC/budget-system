import React from "react";
import { AppForm } from "./AppForm";
import { AppField } from "./AppField";
import AppButton from "components/AppButton";
import * as Yup from "yup";
import { AppSelect } from "./AppSelect";

const statusOptions = ["pending", "done"];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required").label("Budget Name"),
  amount: Yup.number().required("Required").label("Budget Amount"),
});

const EditBudgetForm = ({ manageItem, itemData }: any) => {
  const handleSubmit = (values: any) => {
    values.amount = +values.amount;
    manageItem(values);
  };

  return (
    <div>
      <div className="my-[1rem]">
        <AppForm
          initialValues={itemData}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppField name="name" placeholder="Budget name" />
          <AppField name="amount" placeholder="Total Budget Amount" />
          <AppSelect name="status" options={statusOptions} />

          <AppButton type={"submit"} label="Submit" />
        </AppForm>
      </div>
    </div>
  );
};

export default EditBudgetForm;
