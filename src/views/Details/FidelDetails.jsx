/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// @mui icons
import ReplayIcon from "@mui/icons-material/Replay";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// @mui components
import {
  Typography,
  IconButton,
  Box,
  useTheme,
  Divider,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

// @mui icons
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// services
import { loadFromServerGet } from "services/get";
import post from "services/post";

// contexts
import { useLanguage } from "context/LanguageProvider";
import { useRoute } from "context/RouterProvider";

// utils
import { toSentenceCase } from "utils/functions";

// layouts
import Map from "layouts/MapFilter/Map/Map";

// images
import Crash from "assets/images/crash";

// own components
import ScrollView from "layouts/ScrollView/ScrollView";
import Container from "components/Container/Container";
import Loading from "components/Loading/Loading";
import Image from "components/Image/Image";
import Card from "components/Card/Card";
import LightBox from "components/LightBox/LightBox";
import ContactInfo from "./ContactInfo/ContactInfo";

const Details = () => {
  const { data } = useParams();
  const theme = useTheme();

  const { languageState } = useLanguage();
  const { setRouteState } = useRoute();

  const [loading, setLoading] = useState(1);
  const [placeTypes, setPlaceTypes] = useState([]);

  const [object, setObject] = useState({});
  const [lightBox, setLightBox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState([]);

  const imgSX = {
    objectFit: "cover",
    borderRadius: "1rem",
    cursor: "pointer",
  };

  const onLightBoxClose = () => {
    setLightBox(false);
  };

  const init = async () => {
    const params = data.substring(1).split("-");

    const id = params[0];
    const collection = params[1];
    try {
      const remoteData = await loadFromServerGet(
        "api/load/get",
        collection,
        id,
        languageState.language
      );

      console.log(remoteData);
      if (collection === "places") {
        const { result } = await post("placeTypes");
        const localPlaceTypes = result;
        const finalPlaceTypes = [];
        remoteData.placeType.forEach((item) => {
          const filtered = localPlaceTypes.filter((jtem) => {
            if (jtem.id === item) return jtem;
            return null;
          });
          if (filtered.length > 0)
            finalPlaceTypes.push(<Typography>{toSentenceCase(filtered[0].texts.name)}</Typography>);
        });
        setPlaceTypes(finalPlaceTypes);
      }

      const transformedContent = [];
      const localAllImages = [];
      if (collection === "places") {
        if (!remoteData.schedule) {
          const date = new Date();
          remoteData.schedule = {
            sun: { s: date, e: date, off: true, visible: false },
            mon: { s: date, e: date, off: false, visible: false },
            tue: { s: date, e: date, off: false, visible: false },
            wed: { s: date, e: date, off: false, visible: false },
            thu: { s: date, e: date, off: false, visible: false },
            fri: { s: date, e: date, off: false, visible: false },
            sat: { s: date, e: date, off: false, visible: false },
          };
        }
        if (!remoteData.phone) remoteData.phone = "(+1)5312345689";
      }
      if (remoteData.headerImages)
        remoteData.headerImages.forEach((item) => localAllImages.push(item.url));
      if (remoteData.headerImages.length === 0) remoteData.headerImages.push({ url: Crash });
      let imageList = [];
      if (remoteData.texts.content)
        remoteData.texts.content.forEach((item, i) => {
          if (item.type === "text") {
            if (imageList.length > 1) {
              transformedContent.push({
                type: "carousel",
                imageList,
              });
              imageList = [];
            } else transformedContent.push(item);
          } else {
            localAllImages.push(item.url);
            imageList.push(
              <Box
                sx={{
                  img: {
                    width: "300px",
                    height: "300px",
                    ...imgSX,
                  },
                }}
                onClick={() => {
                  setLightBox(true);
                  if (remoteData.headerImage) setSelectedImage(i + 1);
                  else setSelectedImage(i + remoteData.headerImages.length);
                }}
              >
                <Image img={item.url} />
              </Box>
            );
            if (i === remoteData.texts.content.length - 1 && imageList.length === 1)
              transformedContent.push(item);
            else if (i === remoteData.texts.content.length - 1)
              transformedContent.push({
                type: "carousel",
                imageList,
              });
          }
        });
      remoteData.texts.content = [...transformedContent];
      if (remoteData.error) {
        setLoading(-1);
      } else {
        setObject(remoteData);
        setAllImages(localAllImages);
        setLoading(0);
      }
    } catch (e) {
      console.log(e);
      setLoading(-1);
    }
  };

  const reload = () => {
    setLoading(1);
    init();
  };

  useEffect(() => {
    init();
  }, []);

  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(1);

  const fetchNews = async () => {
    try {
      const { result } = await post("news");
      if (result.indexOf("Error") > -1 || !result) {
        // show an error :)
        setLoadingNews(-1);
      } else {
        const items = [];
        result.forEach((item) => {
          const element = (
            <Card route="/home" img={item.headerImage.url} imageProps={{ alt: "bruce" }}>
              <Typography
                color="secondary"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.secondary.main,
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {item.texts.title}
              </Typography>
            </Card>
          );

          items.push(element);
        });
        setNews(items);
        setLoadingNews(0);
      }
    } catch (error) {
      console.log(error);
      setLoadingNews(-1);
    }
  };

  const reloadNews = async () => {
    setLoadingNews(1);
    fetchNews();
  };

  useEffect(() => {
    setRouteState({ type: "set", to: -1 });
    reloadNews();
  }, []);

  return (
    <Container
      sx={{
        width: "100vw",
        flexDirection: "column",
        background: theme.palette.primary.main,
      }}
    >
      <Loading visible={loading === 1} background="none" color={theme.palette.secondary.main} />
      <Container
        sx={{
          width: "100%",
          padding: {
            lg: "10rem 0 50px 0",
            md: "100px 0",
            sm: "80px 60px 20px 60px",
            xs: "80px 20px 20px 20px",
          },
        }}
      >
        <Box sx={{ minHeight: "600px", width: "100%" }}>
          {loading === 0 && (
            <>
              <Container sx={{ width: "100%", flexDirection: { md: "row", xs: "column" } }}>
                {allImages.length > 0 && (
                  <LightBox
                    index={selectedImage}
                    visible={lightBox}
                    onClose={onLightBoxClose}
                    images={[...allImages]}
                  />
                )}

                <Container
                  justify="center"
                  sx={{
                    flexDirection: { md: "column", xs: "row" },
                    width: { md: "50%", xs: "100%" },
                    height: "100%",
                    paddingRight: "25px",
                    img: {
                      width: { lg: "100%", sm: "350px", xs: "285px" },
                      height: { lg: "100%", sm: "350px", xs: "250px" },
                      ...imgSX,
                    },
                  }}
                >
                  <Container
                    extraProps={{
                      onClick: () => {
                        setLightBox(true);
                        setSelectedImage(0);
                      },
                    }}
                  >
                    <Image
                      img={
                        object.headerImages && object.headerImages[0]
                          ? object.headerImages[0].url
                          : object.headerImage.url
                      }
                    />
                  </Container>
                </Container>
                <Container
                  sx={{ marginTop: "20px", flex: 1, flexDirection: "column", width: "500px" }}
                >
                  {object.placeType && (
                    <ScrollView
                      sx={{ padding: "0 !important", marginBottom: "40px" }}
                      title=""
                      empty=""
                      content={placeTypes}
                    />
                  )}
                  {object.texts.title && (
                    <Typography variant="h2" sx={{ width: "80%" }}>
                      {object.texts.title}
                    </Typography>
                  )}
                  {object.texts.name && (
                    <Typography variant="h2" sx={{ width: "80%" }}>
                      {object.texts.name}
                    </Typography>
                  )}
                  <Divider
                    sx={{
                      marginTop: "20px",
                      borderColor: theme.palette.primary.contrastText,
                      width: "30%",
                    }}
                  />
                  {object.texts.subtitle && (
                    <Typography variant="subtitle1" sx={{ margin: "20px 0" }}>
                      {object.texts.subtitle}
                    </Typography>
                  )}
                  {object.texts.description && (
                    <Typography variant="subtitle1" sx={{ margin: "20px 0", textAlign: "justify" }}>
                      {object.texts.description}
                    </Typography>
                  )}
                </Container>
              </Container>
              <Container
                align="center"
                sx={{ width: "100%", padding: "0 10rem", flexDirection: "column" }}
              >
                <Container
                  align="center"
                  justify="space-between"
                  sx={{ width: { lg: "80%", md: "90%" } }}
                >
                  <Typography variant="h3">
                    {languageState.texts.Activities.Calendar.Schedule}
                  </Typography>
                  <Button variant="outlined" sx={{ alignItems: "center", textTransform: "none" }}>
                    <CalendarTodayIcon />
                    <Typography sx={{ margin: "0 10px" }}>
                      {languageState.texts.Activities.Calendar.Months[new Date().getMonth()]}
                    </Typography>
                    <Typography>{new Date().getFullYear()}</Typography>
                  </Button>
                </Container>
                <Container justify="center" sx={{ width: "100%", margin: "40px 0  20px 0" }}>
                  <Divider
                    sx={{
                      width: { lg: "79%", md: "89%" },
                      borderColor: theme.palette.primary.dark,
                    }}
                  />
                </Container>
                <Container justify="center" sx={{ width: "100%" }}>
                  {languageState.texts.all.days.map((item) => (
                    <Container key={item.id} sx={{ flexDirection: "column", marginRight: "20px" }}>
                      <Container justify="center" sx={{ width: "center", fontWeight: "bold" }}>
                        {item.label}
                      </Container>

                      <Typography>
                        {`${object.schedule[item.id].s.getHours()}:${
                          object.schedule[item.id].s.getMinutes() < 10
                            ? `0${object.schedule[item.id].s.getMinutes()}`
                            : object.schedule[item.id].s.getMinutes()
                        }`}
                        -
                        {`${object.schedule[item.id].e.getHours()}:${
                          object.schedule[item.id].e.getMinutes() < 10
                            ? `0${object.schedule[item.id].e.getMinutes()}`
                            : object.schedule[item.id].e.getMinutes()
                        }`}
                      </Typography>
                    </Container>
                  ))}
                </Container>
                {object.phone !== "" || object.web !== "" ? (
                  <ContactInfo phone={object.phone} web={object.web} />
                ) : (
                  <Box />
                )}
              </Container>
              <Container sx={{ padding: "40px 0 40px 5rem" }}>
                <Container sx={{ flexDirection: "column", width: "50%" }}>
                  {object.services && (
                    <Accordion sx={{ background: "none", width: "100%" }} elevation={0}>
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon
                            sx={{ color: theme.palette.primary.contrastText, fontSize: "50px" }}
                          />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Container sx={{ flexDirection: "column" }}>
                          <Typography
                            variant="h4"
                            sx={{ fontWeight: "bold", color: theme.palette.primary.dark }}
                          >
                            {languageState.texts.Details.Labels.Services}
                          </Typography>
                        </Container>
                      </AccordionSummary>
                      <AccordionDetails>
                        {object.services.map((item) => (
                          <Container align="center" sx={{ marginBottom: "5px" }}>
                            <Typography
                              variant="h6"
                              sx={{ fontSize: "3.3rem", fontWeight: "bold", marginRight: "10px" }}
                            >
                              •
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                              {item}
                            </Typography>
                          </Container>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  )}
                </Container>
                <Container sx={{ width: "50%" }}>
                  <Map visible point={object.location} />
                </Container>
              </Container>
            </>
          )}
          {loading === -1 && (
            <Container justify="center" align="center" sx={{ height: "500px", width: "100%" }}>
              <Typography sx={{ marginRight: "20px" }}>
                {languageState.texts.Error.Connection}
              </Typography>
              <IconButton color="primary" onClick={reload} variant="contained">
                <ReplayIcon />
              </IconButton>
            </Container>
          )}
        </Box>
      </Container>

      <Box sx={{ height: "428px", width: "100vw" }}>
        <Loading
          height="428px"
          visible={loadingNews === 1}
          background="none"
          color={theme.palette.secondary.main}
        />
        {loadingNews === 0 && (
          <ScrollView
            sx={{
              padding: { md: "40px 0", xs: "40px 0" },
              paddingLeft: { lg: "10rem", md: "40px", sm: "60px", xs: "20px" },
            }}
            title={languageState.texts.Home.Subtitles[0]}
            empty={languageState.texts.Error.NoNews}
            content={news}
          />
        )}
        {loadingNews === -1 && (
          <Container justify="center" align="center" sx={{ height: "100%" }}>
            <Typography sx={{ marginRight: "20px" }}>
              {languageState.texts.Error.Connection}
            </Typography>
            <IconButton color="primary" onClick={reloadNews} variant="contained">
              <ReplayIcon />
            </IconButton>
          </Container>
        )}
      </Box>
    </Container>
  );
};

export default Details;
