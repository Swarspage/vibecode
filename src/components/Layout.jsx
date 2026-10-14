import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import PageSkeleton from "./PageSkeleton";

const Layout = () => {
  return (
    <div
      id="app-root"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Nav />
      <ScrollToTop />

      <main id="main-content" style={{ flex: 1 }}>
        <div className="shell-fluid">
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
