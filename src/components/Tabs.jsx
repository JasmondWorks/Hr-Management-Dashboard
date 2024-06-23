import { useState } from "react";
import Tab from "./Tab";

function Tabs({
  data,
  type = "horizontal",
  selectedTab,
  setSelectedTab,
  styles,
}) {
  return (
    <div
      style={
        type === "horizontal"
          ? {
              display: "flex",
              overflowX: "auto",
              gap: "2rem",
              borderBottom: "1px solid var(--clr-border)",
              paddingBottom: ".75rem",
              ...styles,
            }
          : {
              maxWidth: "30rem",
              border: "1px solid var(--clr-border)",
              borderRadius: "var(--size--sm)",
              ...styles,
            }
      }
    >
      {data.map((el) => (
        <Tab
          key={el.text}
          onSelectTab={() => setSelectedTab(el.text.toLowerCase())}
          selectedTab={selectedTab}
          isSelected={selectedTab === el.text.toLowerCase()}
          type={type}
        >
          {el?.icon}
          <span>{el.text}</span>
        </Tab>
      ))}
    </div>
  );
}

export default Tabs;
