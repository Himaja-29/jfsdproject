import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthUser } from '../types/auth';

interface AuthContextType {
  user: AuthUser | null;
  login: (user: AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  // Save user data to localStorage on login
  const login = (userData: AuthUser) => {
    setUser(userData);
    localStorage.setItem('authUser', JSON.stringify(userData)); // Persist user data
  };

  // Clear user data from state and localStorage on logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  // Load user data from localStorage when the app initializes
  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
