/**
 * It then makes a GET request to the server using the axios library.
 * If the request is successful, it returns the data.
 * If the request is unsuccessful, it returns an error.
 * @param {string} [collection] - the name of the collection to load from
 * @param {string} [id] - the id of the object to load
 * @returns The data returned from the server.
 */
import axios from "axios";
import config from "config";
import { getAuth } from "../auth/auth";

const loadFromServerGet = async (collection = "", id = "", lang = "") => {
  try {
    const response = await axios.get(
      `${config.serverUrl}/get${collection !== "" ? `?collection=${collection}` : ""}
      ${id !== "" ? `&id=${id}` : ""}${lang !== "" ? `&lang=${lang}` : ""}`,
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

export default loadFromServerGet;
