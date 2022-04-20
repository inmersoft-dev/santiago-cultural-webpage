/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from "react";

// @mui components
import { Box, Paper, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Accordion from "components/Accordion/Accordion";

// styles
import "./style.css";

const CCalendar = () => {
  const [days, setDays] = useState(new Date(2022, 4, 0).getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const events = [
    { title: "Hola", details: ["Hola", "Sito"] },
    { title: "Sito", details: ["Hola", "Sito"] },
  ];

  const arrayOfDays = () => {
    const aDays = [];
    for (let i = 0; i < days; i += 1) aDays.push(i + 1);
    return aDays;
  };

  return (
    <Container>
      <Typography>{}</Typography>
      <Container sx={{ flexWrap: "wrap" }}>
        {arrayOfDays().map((item, i) => (
          <Paper key={i}>
            {events.map((jtem, j) => (
              <Accordion key={j} title={jtem.title} details={jtem.details} />
            ))}
          </Paper>
        ))}
      </Container>
    </Container>
  );
};

export default CCalendar;
