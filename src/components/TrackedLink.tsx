"use client";
import Link, { LinkProps } from "next/link";
import { trackUserEvent } from "@/lib/trackEvent";

interface TrackedLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
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
