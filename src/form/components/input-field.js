import React from "react";

export function InputField({ register, errors }) {
  const bordercolor = (input) => {
    if (errors[input])
      return 'red';
    else
      return 'white';
  }

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
}