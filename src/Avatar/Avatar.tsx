import React, { ComponentProps } from "react";

interface AvatarBaseProps {}

const Avatar = ({ ...props }: AvatarBaseProps) => {
  return <img {...props} />;
};
Avatar.displayName = "Avatar";
export default Avatar;
export type AvatarProps = ComponentProps<typeof Avatar>;
