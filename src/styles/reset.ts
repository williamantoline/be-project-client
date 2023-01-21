import { globalCss } from "./styles";

export const resetStyles = globalCss({
  "*, *::before, *::after": { boxSizing: "border-box" },
  body: {
    margin: "0",
    fontFamily: "Nunito",
    fontSize: "$body5",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    lineHeight: 1,
  },
});
