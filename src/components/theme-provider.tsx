import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const root = window.document.documentElement;

    const addThemeClass = (className: string) => {
      root.classList.remove('light', 'dark'); // Remove existing classes
      root.classList.add(className);
    };

    let themeClass = '';
    switch (theme) {
      case 'dark':
        themeClass = 'dark';
        break;
      case 'light':
        themeClass = 'light';
        break;
      case 'system':
        themeClass = mediaQuery.matches ? 'dark' : 'light';
        break;
      default:
        themeClass = 'dark'; // Fallback to dark if no match
        break;
    }

    addThemeClass(themeClass);

    const listener = (ev: MediaQueryListEvent) => {
      if (theme !== 'system') return;
      const systemTheme = ev.matches ? 'dark' : 'light';
      addThemeClass(systemTheme); // Apply the system theme preference
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
