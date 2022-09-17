import React from "react";
import { styled, keyframes } from "../stitches.config";

const SIZES = {
  xxs: {
    "--width": `${16}px`,
    "--border": `${1}px solid`,
  },
  xs: {
    "--width": `${32}px`,
    "--border": `${2}px solid`,
  },
  small: {
    "--width": `${64}px`,
    "--border": `${4}px solid`,
  },
  medium: {
    "--width": `${72}px`,
    "--border": `${6}px solid`,
  },
  large: {
    "--width": `${128}px`,
    "--border": `${8}px solid`,
  },
  xl: {
    "--width": `${184}px`,
    "--border": `${8}px solid`,
  },
};

const VARIANTS = {
  green: "green",
  sand: "sand",
  teal: "teal",
  orange: "orange",
  charcoal: "charcoal",
};

const COLORS = {
  sand: {
    "--borderColor": "#F9ECD9 transparent transparent transparent",
  },
  teal: {
    "--borderColor": "#93c2bf transparent transparent transparent",
  },
  charcoal: {
    "--borderColor": "#3A3A38 transparent transparent transparent",
  },
  orange: {
    "--borderColor": "#E77423 transparent transparent transparent",
  },
  green: {
    "--borderColor": "#5A6F51 transparent transparent transparent",
  },
};

interface SpinnerProps {
  /* Size of the spinner */
  size: keyof typeof SIZES;
  /* Variant of the spinner */
  variant: keyof typeof VARIANTS;
}

const Spinner = ({ size, variant }: SpinnerProps) => {
  const styles = { ...SIZES[size], ...COLORS[variant] } as React.CSSProperties;

  return (
    <Wrapper style={styles}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Wrapper>
  );
};

const ldsRing = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const Wrapper = styled("div", {
  display: "inline-block",
  position: "relative",
  width: "var(--width)",
  height: "var(--height)",
  div: {
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
    width: "var(--width)",
    height: "var(--width)",
    margin: "8px",
    border: "var(--border)",
    /* border: 8px solid #93c2bf, */

    borderRadius: "50%",
    animation: `${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
    /* border-color: #93c2bf transparent transparent transparent, */
    borderColor: "var(--borderColor)",
  },
  "div:nth-child(1)": {
    animationDelay: "-0.45s",
  },
  "div:nth-child(2)": {
    animationDelay: "-0.3s",
  },
  "div:nth-child(3)": {
    animationDelay: "-0.15s",
  },
});

export default Spinner;
