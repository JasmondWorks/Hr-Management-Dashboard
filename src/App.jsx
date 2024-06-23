import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

function App() {
  const [theme, setTheme] = useState("");
  const [isNavOpen, setIsNavOpen] = useState("");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, setTheme, isNavOpen, setIsNavOpen }}>
      <BrowserRouter>
        <Routes>
          {routes.map((el) => (
            <Route
              path={el.path}
              element={el.element}
              key={el.path}
              index={el.path === "/login"}
            />
          ))}
        </Routes>
        <div className="overlay" onClick={() => setIsNavOpen(false)}></div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
