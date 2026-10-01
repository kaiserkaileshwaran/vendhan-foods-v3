import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface RouterContextType {
  currentPath: string;
  searchQuery: string;
  navigate: (to: string, options?: { replace?: boolean }) => void;
  goBack: () => void;
  activeCategorySlug: string | null;
  activeProductSlug: string | null;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function parsePath(pathname: string) {
  let activeCategorySlug: string | null = null;
  let activeProductSlug: string | null = null;

  if (pathname.startsWith('/categories/')) {
    activeCategorySlug = pathname.replace('/categories/', '').split('/')[0];
  } else if (pathname.startsWith('/products/')) {
    activeProductSlug = pathname.replace('/products/', '').split('/')[0];
  }

  return { activeCategorySlug, activeProductSlug };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname || '/');
  const [searchQuery, setSearchQuery] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('q') || '';
  });

  const updateStateFromLocation = useCallback(() => {
    const pathname = window.location.pathname || '/';
    setCurrentPath(pathname);
    const params = new URLSearchParams(window.location.search);
    setSearchQuery(params.get('q') || '');
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      updateStateFromLocation();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [updateStateFromLocation]);

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    if (options?.replace) {
      window.history.replaceState(null, '', to);
    } else {
      window.history.pushState(null, '', to);
    }

    const [pathPart, searchPart] = to.split('?');
    setCurrentPath(pathPart || '/');
    if (searchPart) {
      const params = new URLSearchParams(searchPart);
      setSearchQuery(params.get('q') || '');
    } else {
      setSearchQuery('');
    }

    // Scroll to top on page navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  const { activeCategorySlug, activeProductSlug } = parsePath(currentPath);

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        searchQuery,
        navigate,
        goBack,
        activeCategorySlug,
        activeProductSlug
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
