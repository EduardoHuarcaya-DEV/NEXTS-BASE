"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  isPinned: boolean;
  setIsPinned: (pinned: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(true);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isPinned,
        setIsPinned,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
