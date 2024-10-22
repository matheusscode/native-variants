import { ThemeContext } from "@/providers/theme-provider";
import { useContext } from "react";

/**
 * A custom hook that provides access to the theme context.
 *
 * This hook uses the React Context API to retrieve the current theme
 * from the ThemeContext. If the hook is used outside of a ThemeProvider,
 * it will throw an error to indicate that the hook must be called within
 * the context of a ThemeProvider.
 *
 * @throws {Error} Throws an error if the hook is used outside of a ThemeProvider.
 * @returns {DefaultTheme} The current theme value from the ThemeContext.
 *
 * @example
 * // Example usage:
 * const theme = useTheme();
 * console.log(theme);
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
