"use client";
import { Link } from "@/i18n/routing";
import type { ComponentProps } from "react";
import { AnchorHTMLAttributes } from "react";
import { trackUserEvent } from "@/lib/trackEvent";
type LinkProps = ComponentProps<typeof Link>;

interface TrackedLinkProps extends Omit<LinkProps, 'href'> {
  children: React.ReactNode;
  targetName: string;
  href: LinkProps['href'] | string;
}

export default function TrackedLink({ children, targetName, href, ...props }: TrackedLinkProps) {
  const handleClick = () => {
    trackUserEvent("navigation_link_clicked", { target: targetName });
  };

  const isExternal = typeof href === 'string' && href.startsWith('http');

  if (isExternal) {
    return (
      <a href={href} onClick={handleClick} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href as any} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
