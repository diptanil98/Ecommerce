import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User, AuthState } from '../types';
import toast from 'react-hot-toast';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<boolean>;
  updateProfile: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction = 
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE' }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_PROFILE'; payload: Partial<User> };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true };
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, isAuthenticated: true, loading: false };
    case 'LOGIN_FAILURE':
      return { ...state, user: null, isAuthenticated: false, loading: false };
    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false, loading: false };
    case 'UPDATE_PROFILE':
      return { 
        ...state, 
        user: state.user ? { ...state.user, ...action.payload } : null 
      };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    loading: false
  });

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } catch (error) {
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: User) => u.email === email);
      
      if (user && password === 'password') { // Simple password check for demo
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        toast.success('Login successful!');
        return true;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
      toast.error('Invalid email or password');
      return false;
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get existing users
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if user already exists
      if (users.some((u: User) => u.email === email)) {
        throw new Error('User already exists');
      }
      
      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        createdAt: new Date()
      };
      
      // Save to localStorage
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('user', JSON.stringify(newUser));
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: newUser });
      toast.success('Registration successful!');
      return true;
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
      toast.error(error instanceof Error ? error.message : 'Registration failed');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
    toast.success('Logged out successfully');
  };

  const forgotPassword = async (email: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: User) => u.email === email);
      
      if (user) {
        toast.success('Password reset instructions sent to your email');
        return true;
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      toast.error('User not found');
      return false;
    }
  };

  const updateProfile = (userData: Partial<User>) => {
    if (state.user) {
      const updatedUser = { ...state.user, ...userData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      dispatch({ type: 'UPDATE_PROFILE', payload: userData });
      toast.success('Profile updated successfully');
    }
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      register,
      logout,
      forgotPassword,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};