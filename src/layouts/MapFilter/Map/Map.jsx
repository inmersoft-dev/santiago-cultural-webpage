/* eslint-disable no-shadow */
/* eslint-disable react/function-component-definition */
import { useEffect, useState } from "react";

// react-map-gl
// eslint-disable-next-line no-unused-vars
import ReactMapGL, { Marker } from "react-map-gl";
// styles
import "mapbox-gl/dist/mapbox-gl.css";

// prop types
import PropTypes from "prop-types";

// @mui components
import { Box } from "@mui/material";

// services
import { loadFromServer } from "services/get";

const Map = (props) => {
  const { visible } = props;

  const [apiMap, setApiMap] = useState("");

  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 21.801503428305598,
    longitude: -79.98476050000002,
    zoom: 15,
  });

  const init = async () => {
    setApiMap(await loadFromServer("api/map_key/"));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        flex: 1,
        height: "694px",
        transform: visible ? "translateX(0)" : "translateX(-600px)",
        transition: "transform 500ms ease",
      }}
    >
      {apiMap !== "" && (
        <ReactMapGL
          {...viewport}
          mapboxAccessToken={apiMap}
          width="100vw"
          height="100%"
          mapStyle="mapbox://styles/mapbox/light-v9"
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          {/* points.map((item, index) => (
            <Marker
              latitude={item.lat}
              longitude={item.lon}
              offsetLeft={-10}
              offsetTop={-10}
              key={index}
            >
              <PlaceIcon className="point-background" />
              {getIconByType(item.type, index)}
            </Marker>
          )) */}
        </ReactMapGL>
      )}
    </Box>
  );
};

Map.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Map;
