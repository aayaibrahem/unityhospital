import { createContext, useState } from "react";
export const AppNavigationContext = createContext();

const AppGlobalProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <AppNavigationContext.Provider value={{ isSidebarOpen, setSidebarOpen }}>
      {children}
    </AppNavigationContext.Provider>
  );
};

export default AppGlobalProvider;
