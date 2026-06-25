"use client";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import { trackUserEvent } from "@/lib/trackEvent";

interface TrackedLinkProps extends LinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  children: React.ReactNode;
  targetName: string;
}

export default function TrackedLink({ children, targetName, ...props }: TrackedLinkProps) {
  const handleClick = () => {
    trackUserEvent("nav_click", { target: targetName });
  };

  return (
    <Link onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
