
import { ReactNode, useEffect } from "react";
import NavBar from "./NavBar";
import MatrixRain from "./MatrixRain";
import Footer from "./Footer";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      <MatrixRain opacity={0.05} />
      <NavBar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
