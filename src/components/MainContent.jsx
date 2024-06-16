import TopBar from "./TopBar";

function MainContent({ children }) {
  return (
    <main className="flow-content">
      {/* row */}
      <TopBar />
      {children}
    </main>
  );
}

export default MainContent;
