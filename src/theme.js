import { createContext, useMemo, useState } from "react";

import { createTheme } from "@mui/material";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        red: {
          100: "#E3646E",
        },
        purple: {
          100: "#BB72E9",
        },
        blue: {
          100: "#3996DB",
        },
        green: {
          100: "#82BC4F",
        },
        yellow: {
          100: "#EABD5F",
        },
        grey: {
          100: "#cdced9",
          200: "#9c9cb2",
          300: "#6a6b8c",
          400: "#393965",
          500: "#07083f",
          600: "#060632",
          700: "#040526",
          800: "#030319",
          900: "#01020d",
        },
      }
    : {
        red: {
          100: "#E3646E",
        },
        purple: {
          100: "#BB72E9",
        },
        blue: {
          100: "#3996DB",
        },
        green: {
          100: "#82BC4F",
        },
        yellow: {
          100: "#EABD5F",
        },
        grey: {
          100: "#cfeccf",
          200: "#9ed89e",
          300: "#6ec56e",
          400: "#3db13d",
          500: "#0d9e0d",
          600: "#0a7e0a",
          700: "#085f08",
          800: "#053f05",
          900: "#032003",
        },
      }),
});

// Theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.grey[100],
            },
            background: {
              dark: "#f1f1f1",
            },
            border: {
              dark: colors.grey[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.grey[500],
            },
            background: {
              dark: colors.grey[200],
            },
            border: {
              dark: colors.grey[100],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 14,
      },
      p: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 10,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            textTransform: "none", // Prevents automatic uppercase transformation
            padding: "8px 16px",
            ...(mode === "dark"
              ? {
                  backgroundColor: colors.grey[500],
                  color: colors.grey[100],
                  border: "none",
                  "&:hover": {
                    backgroundColor: colors.grey[600],
                    border: "none",
                  },
                }
              : {
                  backgroundColor: colors.grey[500],
                  color: colors.grey[100],
                  border: "none",
                  "&:hover": {
                    backgroundColor: colors.grey[600],
                    border: "none",
                  },
                }),
          },
        },
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
