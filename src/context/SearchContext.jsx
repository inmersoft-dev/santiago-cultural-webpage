/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import * as React from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const SearchContext = React.createContext();

const searchReducer = (searchState, action) => {
  switch (action.type) {
    case "searching":
      return {
        where: searchState.where,
        toSearch: action.toSearch,
      };
    case "change":
      return {
        where: action.where,
        toSearch: "",
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const SearchProvider = ({ children }) => {
  const [searchState, setSearchState] = React.useReducer(searchReducer, {
    where: "",
    toSearch: "",
  });

  const value = { searchState, setSearchState };
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useSearch = () => {
  const context = React.useContext(SearchContext);
  if (context === undefined) throw new Error("searchContext must be used within a Provider");
  return context;
};

export { SearchProvider, useSearch };
