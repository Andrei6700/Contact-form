
import React from "react";

export const bordercolor = ({input}) => {
    if (errors(input)) 
      return 'red';
    else
      return 'white';
  }