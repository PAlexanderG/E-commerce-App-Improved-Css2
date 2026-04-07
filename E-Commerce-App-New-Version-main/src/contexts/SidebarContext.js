import React, { useState, createContext } from "react";

// 1. CREATE AND EXPORT THE CONTEXT
// This allows Sidebar.js to do: import { SidebarContext }
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // Sidebar state (Open or Closed)
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the sidebar
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider
      // We pass these values so Header.js can open it and Sidebar.js can close it
      value={{ isOpen, setIsOpen, handleClose }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// 2. EXPORT THE PROVIDER AS DEFAULT
export default SidebarProvider;