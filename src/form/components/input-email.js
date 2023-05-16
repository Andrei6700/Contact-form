import React from "react";

export const InputEmail = ({ register, errors }) => {
  const bordercolor = (input) => {
    if (errors[input])
      return 'red';
    else
      return 'white';
  }
  return (
    <>
      <input className="email" placeholder="Your email" style={{ borderColor: bordercolor('email') }} {...register("email")} />
      <p className="errors">{errors.email?.message}</p>
    </>
  )
}