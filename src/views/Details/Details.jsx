/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */

// own components
import Container from "components/Container/Container";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { data } = useParams();

  useEffect(() => {
    const params = data.substring(1).split("-");
    const id = params[0];
    const collection = params[1];
    console.log(id, collection);
  }, []);

  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        paddingTop: "88px",
      }}
    >
      Hola
    </Container>
  );
};

export default Details;
