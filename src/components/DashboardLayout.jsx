import MainContent from "./MainContent";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="app-wrapper">
      <Navbar />
      <MainContent>{children}</MainContent>
    </div>
  );
}

export default DashboardLayout;
