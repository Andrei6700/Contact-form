import React from "react";

export const InputName = ({ register, errors }) => {
  const bordercolor = (input) => {
    if (errors[input])
      return 'red';
    else
      return 'white';
  }
  return (
    <>
      <input className="name" placeholder="Your name" style={{ borderColor: bordercolor('name') }} {...register("name")} />
      <p className="errors">{errors.name?.message}</p>
    </>
  )
}