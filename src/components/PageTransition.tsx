import { useLocation } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [displayKey, setDisplayKey] = useState(location.pathname);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    if (location.pathname === displayKey) return;
    setShown(false);
    const t = setTimeout(() => {
      setDisplayKey(location.pathname);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      setShown(true);
    }, 220);
    return () => clearTimeout(t);
  }, [location.pathname, displayKey]);

  return (
    <div
      key={displayKey}
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      {children}
    </div>
  );
}
