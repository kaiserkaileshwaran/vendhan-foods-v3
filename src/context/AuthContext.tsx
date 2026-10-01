import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  joinedDate: string;
  ordersCount: number;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isAuthModalOpen: boolean;
  authModalMode: 'login' | 'register' | 'profile';
  openAuthModal: (mode?: 'login' | 'register' | 'profile') => void;
  closeAuthModal: () => void;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  registerWithEmail: (name: string, email: string, pass: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'vendhan_user_session';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register' | 'profile'>('login');

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const openAuthModal = (mode: 'login' | 'register' | 'profile' = user ? 'profile' : 'login') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const loginWithGoogle = async () => {
    // Simulated Google OAuth login flow (ready for Firebase Authentication hookup)
    const googleUser: UserProfile = {
      id: 'g_' + Date.now(),
      name: 'Kaileshwaran P',
      email: 'kaileshwaranp13@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      joinedDate: 'Joined Oct 2026',
      ordersCount: 2
    };
    setUser(googleUser);
    setAuthModalMode('profile');
  };

  const loginWithEmail = async (email: string) => {
    const formattedName = email.split('@')[0] || 'Customer';
    const emailUser: UserProfile = {
      id: 'usr_' + Date.now(),
      name: formattedName.charAt(0).toUpperCase() + formattedName.slice(1),
      email: email,
      joinedDate: 'Joined Oct 2026',
      ordersCount: 1
    };
    setUser(emailUser);
    setAuthModalMode('profile');
  };

  const registerWithEmail = async (name: string, email: string) => {
    const newUser: UserProfile = {
      id: 'usr_' + Date.now(),
      name: name.trim() || 'Food Lover',
      email: email.trim(),
      joinedDate: 'Joined Oct 2026',
      ordersCount: 0
    };
    setUser(newUser);
    setAuthModalMode('profile');
  };

  const logout = () => {
    setUser(null);
    setAuthModalMode('login');
    setIsAuthModalOpen(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAuthModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal,
        loginWithGoogle,
        loginWithEmail,
        registerWithEmail,
        logout
      }}
    >
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
