"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function Tracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const gclid = searchParams.get("gclid");
    if (gclid) {
      localStorage.setItem("gclid", gclid);
    }
  }, [searchParams]);

  return null;
}

export default function GclidTracker() {
  return (
    <Suspense fallback={null}>
      <Tracker />
    </Suspense>
  );
}
