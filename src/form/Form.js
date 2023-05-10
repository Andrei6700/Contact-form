
import React from 'react';
import './Form-style.css';

import { InputButtons } from "./components/input-button";
import { InputField } from "./components/input-field";
import { onSubmit } from "./components/on-submit";
import { FormSubmit } from './components/form-validation';
import { useForm } from 'react-hook-form';

export const Form = (onSubmit) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <FormSubmit onSubmit={handleSubmit(onSubmit)}>
      <InputField register={register} errors={errors} />
      <InputButtons register={register} />
    </FormSubmit>
  )
}
