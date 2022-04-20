/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from "react";

// @mui components
import { useTheme, Box, Paper, Typography } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Accordion from "components/Accordion/Accordion";

// contexts
import { useLanguage } from "context/LanguageProvider";

// styles
import "./style.css";

const CCalendar = () => {
  const [days, setDays] = useState(new Date(2022, 4, 0).getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const { languageState } = useLanguage();
  const theme = useTheme();

  const events = [
    { title: "Evento1", date: new Date(2022, 4, 1), details: ["Hola", "Sito"] },
    { title: "Evento2", date: new Date(2022, 4, 12), details: ["Hola", "Sito"] },
    { title: "Evento3", date: new Date(2022, 4, 10), details: ["Hola", "Sito"] },
    { title: "Evento4", date: new Date(2022, 4, 5), details: ["Hola", "Sito"] },
    { title: "Evento5", date: new Date(2022, 4, 9), details: ["Hola", "Sito"] },
  ];

  const arrayOfDays = () => {
    const aDays = [[], [], [], [], [], [], []];
    for (let i = 0; i < days; i += 1) {
      const tDate = new Date(year, month, i);
      aDays[tDate.getDay()].push(i + 1);
    }
    return aDays;
  };

  return (
    <Container>
      <Typography>{languageState.texts.Activities.Calendar.Months[month]}</Typography>
      <Container>
        {arrayOfDays().map((item, i) => (
          <Container direction="column">
            {item.map((jtem, j) => (
              <Paper
                elevation={0}
                key={j}
                sx={{
                  padding: "10px",
                  paddingLeft: "0",
                  minWidth: "150px",
                  minHeight: "150px",
                  background: "#00000000",
                  border: `1px solid ${theme.palette.secondary.main}`,
                  borderRadius: 0,
                }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  {jtem}
                  {events.map(
                    (ktem, k) =>
                      ktem.date.getDate() === jtem && (
                        <Accordion key={k} title={ktem.title} details={ktem.details} />
                      )
                  )}
                </Typography>
              </Paper>
            ))}
          </Container>
        ))}
      </Container>
    </Container>
  );
};

export default CCalendar;
