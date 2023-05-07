
import React from 'react';
import './Form-style.css';

import { InputButtons } from "./components/input-button";
import { InputField } from "./components/input-field";
import { onSubmit } from "./components/on-submit";
import { FormData } from './components/form-validation';
import { useForm } from 'react-hook-form';

export const Form = (data) => {
  const { register, handleSubmit, formState: { errors } } = useForm(data);
  const onSubmit = (data) => console.log(data);

    return (
    <FormData onSubmit = {handleSubmit(onSubmit)} >
      <InputField register = {register} errors={errors}/>
      <InputButtons register = {register} />
    </FormData>
  )
}
