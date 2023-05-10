import React from "react";

export const bordercolor = ({ input, errors }) => {
  if (errors(input))
    return 'red';
  else
    return 'white';
}