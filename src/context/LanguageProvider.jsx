/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import * as React from "react";

// texts
import texts from "lang/texts.json";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const LanguageContext = React.createContext();

const languageReducer = (languageState, action) => {
  switch (action.type) {
    case "set":
      return {
        lang: action.lang,
        texts: texts[action.lang],
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const LanguageProvider = ({ children }) => {
  const [languageState, setLanguageState] = React.useReducer(languageReducer, {
    language: "es",
    texts: texts.es,
  });

  const value = { languageState, setLanguageState };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) throw new Error("languageContext must be used within a Provider");
  return context;
};

export { LanguageProvider, useLanguage };
