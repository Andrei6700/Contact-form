import React from "react";

const LabelProps = ({ register }) => {
  return (
    <label style={{ fontSize: '15px' }}>
      Urgent message: <input className="check" type="checkbox" {...register('urgent')} />
    </label>)
}

export const InputButtons = ({ register }) => {
  return (
    <div style={{ justifyContent: 'space-between', display: 'flex', marginBlockEnd: '40px' }}>
      <LabelProps register={register} />
      <input className="submit" type="submit" value="Sent" />
    </div>
  )
}