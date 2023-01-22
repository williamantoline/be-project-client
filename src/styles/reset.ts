import { globalCss } from "./styles";

export const resetStyles = globalCss({
  "*, *::before, *::after": { boxSizing: "border-box" },
  body: {
    margin: "0",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "$body5",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    lineHeight: 1,
  },
  p: {
    margin: 0,
    padding: 0,
  },
  img: {
    maxHeight: "100%"
  },
  button: {
    border: 0
  },
  a: {
    color: "white",
    textDecoration: "underline"
  }
});
