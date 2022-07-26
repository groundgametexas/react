import React, { KeyboardEvent } from "react";
import { styled } from "../stitches.config";

interface VisuallyHiddenProps {
  children: React.ReactNode;
}

const VisuallyHidden = ({ children, ...delegated }: VisuallyHiddenProps) => {
  const [forceShow, setForceShow] = React.useState(false);

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Alt") {
        setForceShow(true);
      }
    };

    const handleKeyUp = () => {
      setForceShow(false);
    };

    window.addEventListener("keydown", handleKeyDown as any);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown as any);
      window.removeEventListener("keydown", handleKeyUp);
    };
  }, []);

  if (forceShow) {
    return children;
  }

  return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled("div", {
  position: "absolute",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  border: "0",
});

export default VisuallyHidden;
