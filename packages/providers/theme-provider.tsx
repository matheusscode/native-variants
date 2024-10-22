import React from "react";

/**
 * Represents the default theme interface.
 *
 * This interface can be extended to define the properties of the theme
 * that will be used throughout the application.
 *
 * @interface DefaultTheme
 */
export interface DefaultTheme {}

/**
 * Props for the ThemeProvider component.
 */
type ThemeProviderProps = {
  children: React.ReactNode;
  theme: DefaultTheme;
};

/**
 * The context that holds the theme value.
 *
 * @type {React.Context<unknown>} // Change here to reflect the updated context type
 */
export const ThemeContext = React.createContext<DefaultTheme | undefined>(
  undefined,
);

/**
 * A provider component that wraps the application and provides the current theme.
 *
 * @param {ThemeProviderProps} props - The properties for the ThemeProvider.
 * @returns {JSX.Element} The ThemeProvider component.
 */
export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={theme as DefaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}
