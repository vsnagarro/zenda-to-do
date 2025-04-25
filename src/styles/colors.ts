const baseColors = {
  white: "#FFFFFF",
  whiteTransparent05: "#FFFFFF05",
  whiteTransparent10: "#FFFFFF10",
  whiteTransparent90: "rgba(255, 255, 255, 0.9)",
  black: {
    light: "#515151",
    medium: "#191919",
    dark: "#000000",
  },
  blackTransparent20: "#00000020",
  grey: {
    light: "#CCCCCC",
    medium: "#B0B0B0",
    dark: "#383838",
  },
  blue: {
    primary: "#0E69F2",
    secondary: "#083F91",
    transparent: "#466AA133",
  },
  darkBlue: {
    lighter: "#1F2731",
    darker: "#182028",
  },
  charcoal: "#363636",
};

const colors = {
  backgroundGradientStart: baseColors.darkBlue.lighter,
  backgroundGradientEnd: baseColors.darkBlue.darker,
  textPrimary: baseColors.white,
  textSecondary: baseColors.grey.medium,
  borderColor: baseColors.grey.light,

  borderColorResting: baseColors.charcoal,
  borderColorActive: baseColors.white,
  colorResting: baseColors.whiteTransparent05,
  colorActive: baseColors.blue.transparent,
  backgroundResting: baseColors.whiteTransparent05,
  backgroundActive: baseColors.blue.transparent,

  textAreaBackground: "#1E1E1E",
  textAreaBorder: baseColors.black.light,
  textAreaEditingBackground: "#212934",
  textAreaColor: baseColors.white,
  textAreaEditingBorder: baseColors.white,

  checkboxBorder: baseColors.white,
  checkboxBackground: baseColors.whiteTransparent05,
  checkboxTickWhite: baseColors.white,
  checkboxTickDark: baseColors.black.dark,

  buttonPrimaryText: baseColors.white,
  buttonPrimaryBackground: baseColors.blue.primary,
  buttonPrimaryHoverBackground: baseColors.blue.secondary,
  buttonDisabledBackground: baseColors.grey.dark,
  buttonTextWhite: baseColors.white,
  buttonBorderWhite: baseColors.whiteTransparent10,

  buttonTertiary: baseColors.blue.primary,
  buttonTertiaryText: baseColors.white,

  buttonTertiaryHoverBorder: baseColors.blue.primary,
  buttonTertiaryHoverBackground: "transparent",
  buttonTertiaryDisabledText: baseColors.grey.dark,
  buttonDisabledText: baseColors.grey.light,

  dropdownBackground: baseColors.black.dark,
  dropdownBorder: baseColors.white,
  dropdownSelected: baseColors.blue.primary,
  dropdownSelectedBar: baseColors.blue.primary,
  dropdownText: baseColors.black.dark,
  dropdownHoverText: baseColors.black.dark,

  modalBackdrop: baseColors.blackTransparent20,
  modalBackground: baseColors.black.medium,
  modalBorder: baseColors.black.light,
  cancelButtonBorder: baseColors.blue.primary,
  createButtonBackground: baseColors.blue.primary,

  searchBarText: baseColors.grey.light,
  searchBarTextActive: baseColors.white,
  searchBarBackground: baseColors.whiteTransparent05,
  searchBarBackgroundActive: baseColors.blue.transparent,
  searchBarBorder: baseColors.whiteTransparent05,
  searchBarBorderActive: baseColors.white,
  searchBarIcon: baseColors.white,
};

export default colors;
