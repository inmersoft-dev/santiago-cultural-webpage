/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable no-shadow */
/* eslint-disable react/function-component-definition */
import { useLayoutEffect, useEffect, useState, useRef } from "react";

// styles
import "./style.css";

// react-map-gl
// eslint-disable-next-line no-unused-vars
import ReactMapGL, { Marker } from "react-map-gl";
// styles
import "mapbox-gl/dist/mapbox-gl.css";

import mapboxgl from "!mapbox-gl";

// prop types
import PropTypes from "prop-types";

// @mui components
import { Box } from "@mui/material";

// services
import { loadFromServer } from "services/get";
import post from "services/post";

// contexts
import { useLanguage } from "context/LanguageProvider";

const Map = (props) => {
  const { visible } = props;
  const { languageState } = useLanguage();

  const [apiMap, setApiMap] = useState("");
  const [points, setPoints] = useState([]);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-79.98476050000002);
  const [lat, setLat] = useState(21.801503428305598);
  const [zoom, setZoom] = useState(15);

  const init = async () => {
    try {
      setApiMap(await loadFromServer("api/map_key/"));
      const { result } = await post("places");
      if (result.indexOf("Error") > -1 || !result) {
        // error
      } else {
        const localPoints = [];
        result.forEach((item) => {
          const { id, location } = item;
          // const [placeType] = item.placeType;
          const { name } = item.texts;
          const [lng, lat] = location.split(",");
          localPoints.push({
            type: "Feature",
            geometry: { type: "Point", coordinates: [Number(lat), Number(lng)] },
            properties: {
              id,
              name,
              type: "places",
              phoneFormatted: "(202) 234-7336",
              phone: "2022347336",
              address: "1471 P St NW",
              city: "Washington DC",
              country: "United States",
              crossStreet: "at 15th St NW",
              postalCode: "20005",
              state: "D.C.",
            },
          });
        });
        setPoints({ type: "FeatureCollection", features: localPoints });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useLayoutEffect(() => {
    init();
  }, []);

  const flyToPoint = (currentFeature) => {
    map.current.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 20,
    });
  };

  const createPopUp = (currentFeature) => {
    const popUps = document.getElementsByClassName("mapboxgl-popup");
    /** Check if there is already a popup on the map and if so, remove it */
    if (popUps[0]) popUps[0].remove();

    const { name, id, type } = currentFeature.properties;

    // eslint-disable-next-line no-unused-vars
    const popup = new mapboxgl.Popup({ closeOnClick: true })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        `<h3>${name}</h3>` +
          `<h4><a href="${process.env.PUBLIC_URL}/details:${id}-${type}">${languageState.texts.Home.SeePlace}</a></h4>`
      )
      .addTo(map.current);
  };

  const addMarkers = () => {
    /* For each feature in the GeoJSON object above: */
    for (const marker of points.features) {
      /* Create a div element for the marker. */
      const el = document.createElement("div");
      /* Assign a unique `id` to the marker. */
      el.id = `marker-${marker.properties.id}`;
      /* Assign the `marker` class to each marker for styling. */
      el.className = "marker";
      // el.style.backgroundImage = `url('${pointImage}')`;

      el.addEventListener("click", (e) => {
        /* Fly to the point */
        flyToPoint(marker);
        /* Close all other popups and display popup for clicked store */
        createPopUp(marker);
        /* Highlight listing in sidebar */
        const activeItem = document.getElementsByClassName("active");
        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].classList.remove("active");
        }
      });

      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map.current);
    }
  };

  useEffect(() => {
    if (apiMap === "" || !points.type) return;
    mapboxgl.accessToken = apiMap;
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom,
    });
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    map.current.on("load", () => {
      /* Add the data to your map as a layer */
      map.current.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        (error, image) => {
          if (error) return error;
          map.current.addImage("my-point", image);
          map.current.addSource("places", {
            type: "geojson",
            data: points,
          });
          map.current.addLayer({
            id: "locations",
            type: "symbol",
            source: "places",
            layout: {
              "icon-image": "my-point",
              "icon-allow-overlap": false,
            },
          });
        }
      );

      addMarkers();
    });
    map.current.on("click", (event) => {
      /* Determine if a feature in the "locations" layer exists at that point. */
      const features = map.current.queryRenderedFeatures(event.point, {
        layers: ["locations"],
      });

      /* If it does not exist, return */
      if (!features.length) return;

      const clickedPoint = features[0];

      /* Fly to the point */
      flyToPoint(clickedPoint);
    });
  });

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
      <Box>
        <Box
          className="sidebar"
          sx={{
            backgroundColor: "rgba(35, 55, 75, 0.9)",
            color: "#fff",
            padding: "6px 12px",
            fontFamily: "monospace",
            zIndex: 1,
            position: "absolute",
            top: 0,
            left: 0,
            margin: "12px",
            borderRadius: "4px",
          }}
        >
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </Box>

        <Box
          ref={mapContainer}
          className="map-container"
          sx={{
            height: "694px",
          }}
        />
      </Box>
    </Box>
  );
};

Map.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Map;
