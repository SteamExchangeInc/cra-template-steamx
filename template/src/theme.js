// Logo colors:
// #d28a1e (our orange for all accents like buttons, toggles, hover over, etc)
// #0c1d31 (dark blue for background, linear gradient start)
// #1f4a7d (light blue for accents, linear gradient end)

// color design tokens
const darkTokens = {
  // grey
  grey: {
    0: "#ffffff", // added manually
    10: "#f6f6f6", // added manually
    50: "#f0f0f0", // added manually
    ////
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    ////
    1000: "#000000", // added manually
  },
  // blue
  primary: {
    100: "#ced2d6",
    200: "#9ea5ad",
    300: "#6d7783",
    400: "#3d4a5a",
    500: "#0c1d31",
    600: "#0a1727",
    700: "#07111d",
    800: "#050c14",
    900: "#02060a",
  },
  // orange
  secondary: {
    100: "#f6e8d2",
    200: "#edd0a5",
    300: "#e4b978",
    400: "#dba14b",
    500: "#d28a1e",
    600: "#a86e18",
    700: "#7e5312",
    800: "#54370c",
    900: "#2a1c06",
  },
  // blue
  accent: {
    100: "#d2dbe5",
    200: "#a5b7cb",
    300: "#7992b1",
    400: "#4c6e97",
    500: "#1f4a7d",
    600: "#193b64",
    700: "#132c4b",
    800: "#0c1e32",
    900: "#060f19",
  },
};

const getLightTokens = (darks) => {
  const lights = {};
  Object.entries(darks).forEach(([key, value]) => {
    const keys = Object.keys(value);
    const values = Object.values(value);
    const tokens = {};
    for (let i = 0; i < keys.length; i++) {
      tokens[keys[i]] = values[keys.length - i - 1];
    }
    lights[key] = tokens;
  });
  return lights;
};

const lightTokens = getLightTokens(darkTokens);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: "600",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            // on input focus and not filled
            "&.Mui-focused": {
              color: theme.palette.primary.dark,
            },
            // once filled
            "&.MuiFormLabel-filled": {
              // color: theme.palette.secondary.dark,
            },
          }),
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: () => ({
            // root: ({ theme }) => ({
            "&:hover .MuiOutlinedInput-notchedOutline": {
              // borderColor: theme.palette.neutral.dark,
              borderColor: "rgba(255, 255, 255, 0.7)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              // borderColor: theme.palette.neutral.main,
              borderColor: "rgba(255, 255, 255, 0.5)",
            },
          }),
        },
      },
    },
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              // ...darkTokens.primary,
              dark: darkTokens.primary[200],
              medium: darkTokens.primary[300],
              main: darkTokens.primary[400],
              light: darkTokens.primary[600],
            },
            secondary: {
              // ...darkTokens.secondary,
              dark: darkTokens.secondary[200],
              medium: darkTokens.secondary[300],
              main: darkTokens.secondary[400],
              light: darkTokens.secondary[600],
            },
            accent: {
              dark: darkTokens.accent[200],
              medium: darkTokens.accent[300],
              main: darkTokens.accent[400],
              light: darkTokens.accent[600],
            },
            neutral: {
              // ...darkTokens.grey,
              darker: darkTokens.grey[10],
              dark: darkTokens.grey[100],
              medium: darkTokens.grey[300],
              main: darkTokens.grey[500],
              light: darkTokens.grey[700],
            },
            background: {
              default: darkTokens.primary[700],
              alt: darkTokens.primary[500],
            },
          }
        : {
            // palette values for dark mode
            primary: {
              ...lightTokens.primary,
              main: darkTokens.grey[50],
              light: darkTokens.grey[100],
            },
            accent: {
              ...lightTokens.accent,
              main: darkTokens.accent[600],
              light: darkTokens.accent[700],
            },
            secondary: {
              ...lightTokens.secondary,
              main: darkTokens.secondary[600],
              light: darkTokens.secondary[700],
            },
            neutral: {
              ...lightTokens.grey,
              main: darkTokens.grey[500],
            },
            background: {
              default: darkTokens.grey[10],
              alt: darkTokens.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Outfit", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Outfit", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Outfit", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Outfit", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Outfit", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Outfit", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Outfit", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
