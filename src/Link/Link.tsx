import React, { ComponentProps } from "react";

interface LinkBaseProps {
  href: string;
  children: React.ReactNode;
}
/**
 * There are three types of links:
 * Internal links to other pages within the same app
 * External links, to other domains
 * Hash links (#introduction), for the same page.
 */
const Link = ({ href, children }: LinkBaseProps) => {
  return <a href={href}>{children}</a>;
};

export type LinkProps = ComponentProps<typeof Link>;
export default Link;
