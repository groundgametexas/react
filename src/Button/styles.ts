import { styled } from "../stitches.config";
import { VariantType } from "./types";

export const getVariantStyles = (variant: VariantType = "default") => {
  const style = {
    default: {
      color: "btn.text",
      backgroundColor: "btn.bg",
    },
    primary: {
      color: "btn.primary.text",
      backgroundColor: "btn.primary.bg",
      borderColor: "border.subtle",
    },
    danger: {
      color: "btn.danger.text",
      backgroundColor: "btn.bg",
    },
    secondary: {},
    outline: {
      color: "btn.outline.text",
      borderColor: "btn.border",
      backgroundColor: "btn.bg",
    },
  };
  return style[variant];
};
