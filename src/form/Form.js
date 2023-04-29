import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Form-style.css';

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

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const bordercolor = (input) => {
    if (errors[input])
      return 'red';
    else
      return 'white';
  }

  const onSubmit = (data) => {
    console.log(data);
  }

  const InputField = ({ register, errors }) => {
    return (
      <div>
        <input className="name" placeholder="Your name" style={{ borderColor: bordercolor('name') }} {...register("name")} />
        <p className="errors">{errors.name?.message}</p>

        <input className="email" placeholder="Your email" style={{ borderColor: bordercolor('email') }} {...register("email")} />
        <p className="errors">{errors.email?.message}</p>

        <input className="text" placeholder="Your message" style={{ borderColor: bordercolor('message') }}{...register("message")} />
        <p className="errors">{errors.message?.message}</p>
      </div>
    )
  };

  const InputButtons = () => {
    return (
      <div style={{ justifyContent: 'space-between', display: 'flex', marginBlockEnd: '40px' }}>

        <label style={{ fontSize: '15px' }}>
          Urgent message: <input className="check" type="checkbox" {...register('urgent')} />
        </label>

        <input className="submit" type="submit" value="Sent" />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField register={register} errors={errors} />
      <InputButtons register={register} />
    </form>
  )
}


