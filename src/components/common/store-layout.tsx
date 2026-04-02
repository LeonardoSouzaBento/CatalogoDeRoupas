"use client";
import { useIsMobile } from "@/hooks";
import { BottomNavBar } from "./bottom-nav-bar";

interface StoreLayoutProps {
  children: React.ReactNode;
}

export const StoreLayout = ({ children }: StoreLayoutProps) => {
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col min-h-screen relative">
      {children}
      <BottomNavBar isMobile={isMobile} />
    </div>
  );
};
