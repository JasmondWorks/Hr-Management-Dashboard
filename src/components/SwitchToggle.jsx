import { useState } from "react";
import styles from "./SwitchToggle.module.css";

function SwitchToggle() {
  const [isSwitchActive, setisSwitchActive] = useState("false");

  return (
    <div
      onClick={() => setisSwitchActive((prev) => !prev)}
      className={`${styles.switch} ${isSwitchActive ? styles.active : ""}`}
    ></div>
  );
}

export default SwitchToggle;
