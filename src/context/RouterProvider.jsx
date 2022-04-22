/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import * as React from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const RouteContext = React.createContext();

const routeReducer = (routeState, action) => {
  switch (action.type) {
    case "jndex":
      return {
        ...routeState,
        jndex: action.to,
      };
    case "set":
      return {
        ...routeState,
        route: action.to,
        page: action.page,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const RouteProvider = ({ children }) => {
  const [routeState, setRouteState] = React.useReducer(routeReducer, {
    route: 0,
    page: "",
    jndex: 0,
  });

  const value = { routeState, setRouteState };
  return <RouteContext.Provider value={value}>{children}</RouteContext.Provider>;
};

RouteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useRoute = () => {
  const context = React.useContext(RouteContext);
  if (context === undefined) throw new Error("routeContext must be used within a Provider");
  return context;
};

export { RouteProvider, useRoute };
