/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { getAuth } from "auth/auth";
import config from "../config";

/**
 * It then makes a GET request to the server using the axios library.
 * If the request is successful, it returns the data.
 * If the request is unsuccessful, it returns an error.
 * @param {string} from - The endpoint to call.
 * @param {string} [collection] - the name of the collection to load from
 * @param {string} [id] - the id of the object to load
 * @returns The data returned from the server.
 */
export const loadFromServerGet = async (from, collection = "", id = "", lang = "") => {
  try {
    const response = await axios.get(
      `${config.serverUrl}/${from}${collection !== "" ? `?collection=${collection}` : ""}${
        id !== "" ? `&id=${id}` : ""
      }${lang !== "" ? `&lang=${lang}` : ""}`,
      {
        headers: getAuth,
      }
    );
    const data = await response.data;
    if (data.error === undefined) return data;
    return { error: response.statusText };
  } catch (err) {
    return { error: String(err) };
  }
};

/**
 * @param {string} from - The name of the endpoint to load data from.
 * @returns The data returned from the server.
 */
export const loadFromServer = async (from) => {
  try {
    const response = await axios.get(`${config.serverUrl}/${from}`, {
      headers: getAuth,
    });
    const data = await response.data;
    if (data.error === undefined) return data;
    return { error: response.statusText };
  } catch (err) {
    return { error: String(err) };
  }
};
