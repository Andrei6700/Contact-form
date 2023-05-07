
import React from 'react';
import './Form-style.css';

import { InputButtons } from "./components/input-button";
import { InputField } from "./components/input-field";
import { onSubmit } from "./components/on-submit";
import { FormData } from './components/form-validation';
import { useForm } from 'react-hook-form';

export const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().matches(/^[^\d]+$/, 'Invalid name')
      .max(64, 'Maxim 64 characters').required('Invalid form'),
    email: yup.string()
      .email('Invalid email').required('Invalid form'),
    message: yup.string().matches(/^[a-zA-Z\s]+$/, 'Invalid message')
      .max(1024, 'Maxim 1024 characters').required('Invalid form'),
    urgent: yup.boolean(),
  });

 const Form = (data,errors) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

    return (
    <FormData onSubmit = {handleSubmit(onSubmit)} >
      <InputField register = {register} errors={errors}/>
      <InputButtons register = {register} />
    </FormData>
  )
}

