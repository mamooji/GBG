import Header from "./Header";
import Footer from "./Footer";
import React from "react";

interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
