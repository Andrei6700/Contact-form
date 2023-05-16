import React from "react";
import { InputName } from "./input-name";
import { InputEmail } from "./input-email";
import { InputText } from "./input-text";

export function InputField ({ register, errors }) {
  return (
    <div>
      <InputName  register={register} errors={errors}/>
      <InputEmail register={register} errors={errors}/>
      <InputText  register={register} errors={errors}/>
    </div>
  )
}