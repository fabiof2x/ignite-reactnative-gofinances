import React, {
  createContext,
  useContext,
  ReactNode
} from "react";

interface AuthProviderProps {
  children: ReactNode
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: User;
}

export const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: '1212',
    name: 'Fábio Dias',
    email: 'fabio@f2x.com'
  };

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }