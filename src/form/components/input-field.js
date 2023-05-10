
import React from "react";
import { bordercolor } from "./color-border";

export const InputField = (register, errors) => {
  return (
    <div>
      <input className="name" placeholder="Your name" style={bordercolor}
        {...register("name")} />
      <p className="errors">{errors.name?.message}</p>

      <input className="email" placeholder="Your email" style={bordercolor}
        {...register("email")} />
      <p className="errors">{errors.email?.message}</p>

      <input className="text" placeholder="Your message" style={bordercolor}
        {...register("message")} />
      <p className="errors">{errors.message?.message}</p>
    </div>
  )
}