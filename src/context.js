import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

// since we will wrap the whole app inside this provider, we need to add the {children}
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook for our context
export const useGlobalContext = () => {
  return useContext(AppContext);
};
