import { extendTheme } from "@chakra-ui/react";

const nightOwlColors = {
  primary: "#7E57C2",
  primaryLight: "#9575CD",
  primaryDark: "#512DA8",
  secondary: "#82AAFF",
  secondaryLight: "#B3E5FC",
  secondaryDark: "#0288D1",
  background: "#011627",
  foreground: "#03121C",
  error: "#EF5350",
  success: "#9CCC65",
  text: "#D6DEEB",
  comment: "#637777",
};

const theme = extendTheme({
  fonts: {
    heading: "Arvo",
    body: "Arvo",
  },
  colors: {
    primary: nightOwlColors.primary,
    primaryLight: nightOwlColors.primaryLight,
    primaryDark: nightOwlColors.primaryDark,
    secondary: nightOwlColors.secondary,
    secondaryLight: nightOwlColors.secondaryLight,
    secondaryDark: nightOwlColors.secondaryDark,
    background: nightOwlColors.background,
    foreground: nightOwlColors.foreground,
    error: nightOwlColors.error,
    success: nightOwlColors.success,
    text: nightOwlColors.text,
    comment: nightOwlColors.comment,
  },
});

export default theme;
