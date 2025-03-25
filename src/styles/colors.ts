// Base color palette
const baseColors = {
  white: "#FFFFFF",
  whiteTransparent05: "#FFFFFF05",
  whiteTransparent10: "#FFFFFF10",
  whiteTransparent90: "rgba(255, 255, 255, 0.9)",
  black: "#000000",
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
  // Original colors
  backgroundGradientStart: baseColors.darkBlue.lighter,
  backgroundGradientEnd: baseColors.darkBlue.darker,
  textPrimary: baseColors.white,
  textSecondary: baseColors.grey.medium,
  borderColor: baseColors.grey.light,

  // Text fields
  borderColorResting: baseColors.charcoal,
  borderColorActive: baseColors.white,
  colorResting: baseColors.whiteTransparent05,
  colorActive: baseColors.blue.transparent,
  backgroundResting: baseColors.whiteTransparent05,
  backgroundActive: baseColors.blue.transparent,

  // Checkbox
  checkboxBorder: baseColors.white,
  checkboxBackground: baseColors.whiteTransparent05,
  checkboxTickWhite: baseColors.white,
  checkboxTickDark: baseColors.black,

  // Buttons
  buttonPrimaryText: baseColors.white,
  buttonPrimaryBackground: baseColors.blue.primary,
  buttonPrimaryHoverBackground: baseColors.blue.secondary,
  buttonDisabledBackground: baseColors.grey.dark,
  buttonTextWhite: baseColors.white,
  buttonBorderWhite: baseColors.whiteTransparent10,

  buttonTertiary: baseColors.blue.primary,
  buttonTertiaryText: baseColors.white,
  buttonTertiaryHover: baseColors.blue.primary,

  buttonTertiaryDisabledText: baseColors.grey.dark,
  buttonDisabledText: baseColors.grey.light,

  // Dropdown
  dropdownBackground: baseColors.black,
  dropdownBorder: baseColors.white,
  dropdownSelected: "#0E69F2",
  dropdownSelectedBar: baseColors.blue.primary,
  dropdownText: baseColors.black,
  dropdownHoverText: baseColors.black,

  modalBackdrop: "rgba(0, 0, 0, 0.2)",
  modalBackground: "#191919", // Modal background
  modalBorder: "#515151", // Modal border color
  textAreaEditingBackground: "#466AA133", // Background when textarea is being edited
  cancelButtonBorder: "#0E69F2", // Border-bottom for cancel button
  createButtonBackground: "#0E69F2",

  // Searchbar
  searchBarText: baseColors.grey.light,
  searchBarTextActive: baseColors.white,
  searchBarBackground: baseColors.whiteTransparent05,
  searchBarBackgroundActive: baseColors.blue.transparent,
  searchBarBorder: baseColors.whiteTransparent05,
  searchBarBorderActive: baseColors.white,
  searchBarIcon: baseColors.white,
};

export default colors;
