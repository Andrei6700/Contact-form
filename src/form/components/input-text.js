import React from "react";

export const InputText = ({ register, errors }) => {
  const bordercolor = (input) => {
    if (errors[input])
      return 'red';
    else
      return 'white';
  }
  return (
    <>
      <input className="text" placeholder="Your message" style={{ borderColor: bordercolor('message') }}{...register("message")} />
      <p className="errors">{errors.message?.message}</p>
    </>
  )
}