import { useState, createContext } from "react";
// create context

export const SidebarContext = createContext();
const SidebarProvider = ({ children }) => {
  // sidebar state
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SidebarContext.Provider
      // set up all values that you create
      value={{ isOpen, setIsOpen, handleClose }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
