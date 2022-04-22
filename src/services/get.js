/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { getAuth } from "auth/auth";
import config from "config";

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
