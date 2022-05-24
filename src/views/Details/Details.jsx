/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// @mui icons
import ReplayIcon from "@mui/icons-material/Replay";

// @mui components
import { Typography, IconButton } from "@mui/material";

// own components
import Container from "components/Container/Container";
import Loading from "components/Loading/Loading";
import Image from "components/Image/Image";
import HtmlEditor from "components/HtmlEditor/HtmlEditor";

// services
import { loadFromServerGet } from "services/get";

// contexts
import { useLanguage } from "context/LanguageProvider";

const Details = () => {
  const { data } = useParams();

  const { languageState } = useLanguage();

  const [loading, setLoading] = useState(1);

  const [object, setObject] = useState({});

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
      if (remoteData.error) {
        console.log(remoteData.error);
        setLoading(-1);
      } else {
        setObject(remoteData);
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

  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Loading visible={loading === 1} />
      <Container
        sx={{
          padding: { md: "100px 0", xs: "80px 20px" },
          paddingLeft: { md: "10rem", xs: "20px" },
        }}
      >
        {loading === 0 && (
          <Container sx={{ width: { lg: "80%", md: "90%" } }}>
            <Container
              sx={{
                width: " 400px",
                height: "100%",
                padding: "25px",
                img: {
                  width: "350px",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "1rem",
                },
              }}
            >
              <Image img={object.headerImage.url} />
            </Container>
            <Container sx={{ marginTop: "20px", flex: 1, flexDirection: "column" }}>
              <Typography variant="h5">{object.texts.title}</Typography>
              <Typography variant="subtitle1" sx={{ marginBottom: "20px" }}>
                {object.texts.subtitle}
              </Typography>
              {object.texts.content.map((item, i) => (
                <Container key={`${i}`}>
                  {item.type === "text" && <HtmlEditor value={item.value} />}
                </Container>
              ))}
            </Container>
          </Container>
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
      </Container>
    </Container>
  );
};

export default Details;
