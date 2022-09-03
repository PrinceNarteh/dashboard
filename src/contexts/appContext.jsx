import { createContext, useReducer } from "react";

export const AppContext = createContext({
  sidebarOpen: false,
  toggleSidebar: () => {},
});

const initialState = {
  sidebarOpen: true,
};

const appContextReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      console.log(state);
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appContextReducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <AppContext.Provider value={{ ...state, toggleSidebar, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
