import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div className="overflow-hidden min-h-screen font-poppins grid grid-rows-[auto_1fr_auto] grid-cols-1">
      <Header />
      <main className="overflow-y-scroll">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
