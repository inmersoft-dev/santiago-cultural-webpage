/**
 * It takes a string, splits it into an array of words, capitalizes the first letter of each word, and
 * then joins the array back into a string
 * @param string - The string to be converted to sentence case.
 * @returns a string with the first letter of each word capitalized.
 */
export const toSentenceCase = (string) => {
  let result = "";
  let space = true;
  for (let i = 0; i < string.length; i += 1) {
    if (space) {
      result += string[i].toUpperCase();
      space = false;
    } else {
      result += string[i];
    }
    if (string[i] === " ") space = true;
  }
  return result;
};

export const getWeekAround = (day) => {};
