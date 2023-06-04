import React from "react";

export function InputButtons({ register }) {
  return (
    <div
      style={{
        justifyContent: "space-between",
        display: "flex",
        marginBlockEnd: "40px",
      }}
    >
      <label style={{ fontSize: "15px" }}>
        Urgent message:{" "}
        <input className="check" type="checkbox" {...register("urgent")} />
      </label>

      <input className="submit" type="submit" value="Sent" />
    </div>
  );
}
