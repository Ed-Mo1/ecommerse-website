import { useState, createContext, useEffect } from "react";
const base = "https://fakestoreapi.com/products";
export const SidebarContext = createContext();
const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SidebarContext.Provider value={{ handleClose, setIsOpen, isOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
