"use client";

import { createContext, useContext, ReactNode } from "react";

interface User {
  id: string;
  nombre: string;
  rol: string;
}

interface AuthContextType {
  user: User | null;
  logout: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Mock user for testing layouts
  const user: User = { id: "1", nombre: "Administrador de Prueba", rol: "ADMINISTRADOR" };

  const logout = async () => {
    console.log("Mock logout executed");
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
