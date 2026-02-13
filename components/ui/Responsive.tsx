'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface ResponsiveContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
}

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined);

export const ResponsiveProvider = ({ children }: { children: React.ReactNode }) => {
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const isDesktop = screenWidth >= 1024;
  
  return (
    <ResponsiveContext.Provider value={{ 
      isMobile, 
      isTablet, 
      isDesktop, 
      screenWidth 
    }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (context === undefined) {
    throw new Error('useResponsive must be used within a ResponsiveProvider');
  }
  return context;
};

// Component to conditionally render based on screen size
export const MobileOnly = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useResponsive();
  return isMobile ? <>{children}</> : null;
};

export const TabletOnly = ({ children }: { children: React.ReactNode }) => {
  const { isTablet } = useResponsive();
  return isTablet ? <>{children}</> : null;
};

export const DesktopOnly = ({ children }: { children: React.ReactNode }) => {
  const { isDesktop } = useResponsive();
  return isDesktop ? <>{children}</> : null;
};

export const MobileAndTablet = ({ children }: { children: React.ReactNode }) => {
  const { isMobile, isTablet } = useResponsive();
  return (isMobile || isTablet) ? <>{children}</> : null;
};