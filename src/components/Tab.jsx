import styles from "./Tab.module.css";

function Tab({ children, isSelected = "", onSelectTab, type }) {
  if (type === "horizontal")
    return (
      <div
        style={{
          fontSize: "1.4rem",
          whiteSpace: "nowrap",
          color: isSelected ? "var(--clr-accent)" : "var(--clr-fg)",
          borderBottom: isSelected ? "2px solid var(--clr-accent)" : "none",
          cursor: "pointer",
          lineHeight: "1.2",
          paddingBlock: ".75rem",
        }}
        onClick={onSelectTab}
      >
        {children}
      </div>
    );
  else if (type === "vertical")
    return (
      <div
        className={styles.tab}
        style={{
          fontSize: "1.4rem",
          whiteSpace: "nowrap",
          color: isSelected ? "#fff" : "var(--clr-fg)",
          backgroundColor: isSelected ? "var(--clr-accent)" : "transparent",
          cursor: "pointer",
          lineHeight: "1.2",
          padding: "1.5rem 2rem",
        }}
        onClick={onSelectTab}
      >
        {children}
      </div>
    );
}

export default Tab;
