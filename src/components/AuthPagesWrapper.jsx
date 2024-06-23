import { useContext } from "react";
import { AppContext } from "../App";
import Button from "./Button";
import styles from "./AuthPagesWrapper.module.css";

function AuthPagesWrapper({ children }) {
  const { theme, setTheme } = useContext(AppContext);

  return (
    <div
      style={{
        paddingInline: "2rem",
        height: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr",
        placeItems: "center",
      }}
    >
      <div className={styles.themeSwitcherWrapper}>
        <Button
          onClick={() => setTheme("light")}
          text="Light"
          variant={theme === "light" ? "accent" : "neutral"}
          style={{ padding: ".7rem 1rem", borderRadius: "5px" }}
        />
        <Button
          onClick={() => setTheme("")}
          variant={theme === "" ? "accent" : "neutral"}
          text="Dark"
          style={{ padding: ".7rem 1rem", borderRadius: "5px" }}
        />
      </div>
      <div style={{ width: "100%", maxWidth: "45rem" }}>{children}</div>
    </div>
  );
}

export default AuthPagesWrapper;
