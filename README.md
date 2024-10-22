<p align="center">
    <img width="20%" src=".github/assets/logo.png" alt="native-variants" />
    <h1 align="center">native-variants</h1>
</p>
<p align="center">
  Unlock <em>dynamic</em> and <em>flexible</em> styling for React Native with a powerful variant API.<br><br>
  <a href="https://www.npmjs.com/package/native-variants">
    <img src="https://img.shields.io/npm/dm/native-variants.svg?style=flat-round" alt="npm downloads">
  </a>
  <a href="https://www.npmjs.com/package/native-variants">
    <img alt="NPM Version" src="https://badgen.net/npm/v/native-variants" />
  </a>
  <a href="https://github.com/matheusscode/native-variants/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/native-variants?style=flat" alt="License">
  </a>
</p>

## Features

- Flexible variant-based API
- Optimized for React Native using `StyleSheet`
- Reusable styles with composition
- Fully typed with TypeScript support
- Intuitive default variants

</br>

## Documentation

For full documentation, visit [native-variants](https://github.com/matheusscode/native-variants)

</br>


## Quick Start

### 1. Installation:

To use **native-variants** in your project, you can install it as a dependency:

```bash
yarn add native-variants
# or
npm i native-variants
```

</br>

### 2. Code Overview

1. **DefaultTheme Interface**:
   - Represents the default theme. Extend this interface to define theme properties.

   ```ts
   export interface DefaultTheme {}


</br>

2. **ThemeProviderProps Type**:
- Props for the `ThemeProvider`, including `children` and `theme`

```ts
type ThemeProviderProps = {
  children: React.ReactNode;
  theme: DefaultTheme;
};
```

</br>

3. **ThemeContext**:

- Holds the theme value, initialized as `undefined`.

</br>

4. **ThemeProvider Component**:


```ts
export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={theme as DefaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}
```

</br>

5. **Extending DefaultTheme**:

- Extend `DefaultTheme` with specific `theme` properties.

```ts
import { theme } from "@/theme/token-colors";

declare module "native-variants-test" {
  type Theme = typeof theme;

  export interface DefaultTheme extends Theme {}
}
```

</br>

### 3. Usage:

Here's an example of how to create a styled Button component with variants using native-variants:

```js
import { av } from "native-variants";

const buttonVariants = av({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  variants: {
    variant: {
      default: {
        backgroundColor: "blue",
        color: "white",
      },
      outline: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "blue",
        color: "blue",
      },
    },
    size: {
      default: { height: 40 },
      small: { height: 30, fontSize: 14 },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export const Button = ({ variant, size }) => {
  return <View style={buttonVariants({ variant, size })}><Text>Click me</Text></View>;
};
```

</br>

### Slots

Here's an example of how to create a styled component with variants and slots using native-variants:

```js
import { nv } from 'native-variants';

const tabs = nv({
  slots: {
    tabs_list: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 2,
      marginBottom: 4,
    },
    tab: {
      paddingHorizontal: 20,
      paddingVertical: 6,
      fontSize: 13,
      display: "flex",
      flexDirection: "row",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      gap: 2,
    },
    panel: {
      paddingVertical: 14,
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "auto",
    },
  },
});

const { tabs_list, tab, panel } = tabs({});
```

</br>

## Author

- Matheus Figueiredo (@matheusscode)

</br>

## License

This project is under the MIT License. You can [find the details here](LICENSE).
