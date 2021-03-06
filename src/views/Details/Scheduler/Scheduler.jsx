/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/function-component-definition */
import PropTypes from "prop-types";

// @mui icons
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// @mui components
import { useTheme, Divider, Typography, Button } from "@mui/material";

// own components
import Container from "components/Container/Container";

// contexts
import { useLanguage } from "context/LanguageProvider";

const Scheduler = (props) => {
  const { languageState } = useLanguage();
  const { schedule } = props;
  const theme = useTheme();

  return (
    <>
      <Container align="center" justify="space-between" sx={{ width: { xl: "80%", xs: "100%" } }}>
        <Typography variant="h3">{languageState.texts.Activities.Calendar.Schedule}</Typography>
        <Button
          variant="outlined"
          sx={{
            alignItems: "center",
            textTransform: "none",
            borderColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
            hover: {
              borderColor: theme.palette.secondary.dark,
            },
          }}
          href={`${process.env.PUBLIC_URL}/activities:2`}
        >
          <CalendarTodayIcon />
          <Typography sx={{ margin: "0 10px", fontWeight: "bold" }}>
            {languageState.texts.Activities.Calendar.Months[new Date().getMonth()]}
          </Typography>
          <Typography>{new Date().getFullYear()}</Typography>
        </Button>
      </Container>
      <Container
        justify="center"
        sx={{ width: "100%", margin: { md: "40px 0 20px 0", sm: "10px 0 20px 0" } }}
      >
        <Divider
          sx={{
            width: { xl: "79%", md: "99%", xs: "100%" },
            borderColor: theme.palette.primary.dark,
          }}
        />
      </Container>
      <Container
        justify="center"
        sx={{ width: "100%", flexDirection: { xs: "column", lg: "row" } }}
      >
        {languageState.texts.all.days.map((item) => (
          <Container
            key={item.id}
            align="center"
            sx={{
              flexDirection: { xs: "row", lg: "column" },
              marginRight: "20px",
              width: { lg: "97px", xs: "100%" },
            }}
          >
            <Container
              justify="center"
              sx={{ fontWeight: "bold", display: { lg: "flex", xs: "none" } }}
            >
              {item.label}
            </Container>
            <Container
              sx={{
                marginRight: "10px",
                display: { lg: "none", xs: "flex" },
                width: "75px",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
            </Container>

            <Typography sx={{ textAlign: "center" }}>
              {`${schedule[item.id].s.getHours()}:${
                schedule[item.id].s.getMinutes() < 10
                  ? `0${schedule[item.id].s.getMinutes()}`
                  : schedule[item.id].s.getMinutes()
              }`}
              {" - "}
              {`${schedule[item.id].e.getHours()}:${
                schedule[item.id].e.getMinutes() < 10
                  ? `0${schedule[item.id].e.getMinutes()}`
                  : schedule[item.id].e.getMinutes()
              }`}
            </Typography>
          </Container>
        ))}
      </Container>
    </>
  );
};

Scheduler.propTypes = {
  schedule: PropTypes.object.isRequired,
};

export default Scheduler;
