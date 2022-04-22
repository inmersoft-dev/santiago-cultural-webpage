/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// @mui components
import { useTheme, IconButton, Button, Typography, Divider } from "@mui/material";

// @mui icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";

// contexts
import { useLanguage } from "context/LanguageProvider";

// styles
import "./style.css";

// own components
import Container from "components/Container/Container";
import CalendarCard from "./CalendarCard/CalendarCard";

const CCalendar = () => {
  const [days, setDays] = useState(new Date(2022, 4, 0).getDate());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const { languageState } = useLanguage();
  const theme = useTheme();

  const events = [
    { id: 0, title: "Evento1", date: new Date(2022, 4, 1) },
    { id: 1, title: "Evento2", date: new Date(2022, 4, 1) },
    { id: 2, title: "Evento3", date: new Date(2022, 4, 10) },
    { id: 3, title: "Evento4", date: new Date(2022, 4, 5) },
    { id: 4, title: "Evento5", date: new Date(2022, 4, 9) },
  ];

  const arrayOfDays = () => {
    const aDays = [[], [], [], [], [], [], []];
    for (let i = 0; i < days; i += 1) {
      const tDate = new Date(year, month, i);
      if (i === 0) {
        if (tDate.getDay() !== 6) {
          let j = 0;
          const totalDays = new Date(year, month, 0).getDate() - tDate.getDay();
          while (j !== tDate.getDay() + 1) {
            aDays[j].push({ other: true, day: totalDays + j });
            j += 1;
          }
        }
      }
      /* changing monday by sunday */
      if (tDate.getDay() === 6) aDays[0].push({ other: false, day: i + 1 });
      else aDays[tDate.getDay() + 1].push({ other: false, day: i + 1 });
    }
    return aDays;
  };

  const now = () => {
    setDays(new Date(2022, 4, 0).getDate());
    setMonth(new Date().getMonth());
    setYear(new Date().getFullYear());
  };

  const lastMonth = () => {
    setMonth(month - 1);
  };

  const nextMonth = () => {
    setMonth(month + 1);
  };

  return (
    <Container direction="column">
      <Container align="center">
        <Button onClick={now} variant="outlined" sx={{ marginRight: "20px" }}>
          {languageState.texts.Activities.Calendar.Today}
        </Button>
        <Typography variant="h5">
          {languageState.texts.Activities.Calendar.Months[month]}{" "}
          {languageState.texts.Activities.Calendar.of} {year}
        </Typography>
        <IconButton
          onClick={lastMonth}
          sx={{ marginLeft: "10px" }}
          color="primary"
          aria-label="last month"
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={nextMonth}
          sx={{ marginRight: "10px" }}
          color="primary"
          aria-label="next month"
        >
          <ChevronRight />
        </IconButton>
      </Container>

      <Divider sx={{ margin: "20px 0", border: `1px solid ${theme.palette.primary.main}` }} />
      <Container>
        {arrayOfDays().length === 7 &&
          arrayOfDays().map((item, i) => (
            <Container direction="column">
              {item.map((jtem, j) => (
                <CalendarCard key={`${i}card${jtem.day}$${j}`} background={jtem.other}>
                  {j === 0 && (
                    <Typography sx={{ textAlign: "center" }}>
                      {languageState.texts.Activities.Calendar.ReduxDays[i]}
                    </Typography>
                  )}
                  <Typography
                    sx={{
                      textAlign: "center",
                      padding: "5px 10px",
                      borderRadius: "100%",
                      background: jtem.day === currentDay ? theme.palette.primary.light : "none",
                      color: jtem.day === currentDay ? theme.palette.secondary.main : "default",
                    }}
                  >
                    {jtem.day}
                  </Typography>
                  {events.map(
                    (ktem, k) =>
                      ktem.date.getDate() === jtem.day &&
                      ktem.date.getMonth() - 1 === month &&
                      ktem.date.getFullYear() === year && (
                        <Button
                          variant="contained"
                          sx={{
                            margin: "5px 0",
                            height: "25px",
                            width: "100%",
                            textAlign: "left",
                            textTransform: "capitalize",
                          }}
                          disableElevation
                        >
                          <Link
                            key={k}
                            style={{
                              textDecoration: "none",
                              width: "100%",
                              color: theme.palette.text.main,
                            }}
                            to={`/events?id${ktem.id}`}
                          >
                            {ktem.title}
                          </Link>
                        </Button>
                      )
                  )}
                </CalendarCard>
              ))}
            </Container>
          ))}
      </Container>
    </Container>
  );
};

export default CCalendar;
