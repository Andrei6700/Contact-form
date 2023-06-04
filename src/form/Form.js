import React from "react";
import "./Form-style.css";
import { InputField } from "./components/input-field";
import { InputButtons } from "./components/input-button";
import { OnSubmit } from "./components/on-submit";
import { useFormData } from "./components/form-data";

export const Form = () => {
  const { register, handleSubmit, errors } = useFormData();

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <InputField register={register} errors={errors} />
      <InputButtons register={register} />
    </form>
  );
};
