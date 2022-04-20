/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import Calendar from "react-calendar";

const CCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default CCalendar;
