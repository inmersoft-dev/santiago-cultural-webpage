/**
 * @param {string} [collection] - the name of the collection to load from the server
 * @param {string[]} [what] - an array of strings that are the names of the fields you want to retrieve from the
 * server.
 * @returns The data returned from the server.
 */
import axios from "axios";
import { getAuth } from "auth/auth";
import config from "../config";

const loadFromServerPost = async (collection = "", what = []) => {
  try {
    const response = await axios.post(
      `${config.serverUrl}/post`,
      { collection, what },
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

export default loadFromServerPost;
