"use client";

import { useEffect, useState } from "react";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";

interface GoogleAnalyticsLoaderProps {
  gaId: string;
}

export default function GoogleAnalyticsLoader({ gaId }: GoogleAnalyticsLoaderProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(localStorage.getItem("cookie_consent") === "accepted");

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "cookie_consent") {
        setEnabled(event.newValue === "accepted");
      }
    };

    const handleConsentChange = () => {
      setEnabled(localStorage.getItem("cookie_consent") === "accepted");
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("cookie-consent-change", handleConsentChange as EventListener);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("cookie-consent-change", handleConsentChange as EventListener);
    };
  }, []);

  if (!enabled) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
