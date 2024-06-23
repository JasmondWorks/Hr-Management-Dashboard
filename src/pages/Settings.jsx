import DashboardLayout from "../components/DashboardLayout";
import TopBar from "../components/TopBar";
import SwitchToggle from "../components/SwitchToggle";
import styles from "./Settings.module.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

function Settings() {
  const { theme, setTheme } = useContext(AppContext);
  const [selectedTheme, setSelectedTheme] = useState(theme);
  console.log(selectedTheme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  useEffect(
    function () {
      setTheme(selectedTheme);
    },
    [selectedTheme, setTheme]
  );

  function handleThemeChange(event) {
    setSelectedTheme(event.target.value);
  }

  return (
    <DashboardLayout>
      <TopBar pryTitle="Settings" secTitle="All System Settings" />
      <div>
        <div className="card">
          <div className={styles.rowWrapper}>
            <div>
              <p>Appearance</p>
              <p style={{ color: "var(--clr-text-muted)" }}>
                Customize how your theme looks on your device
              </p>
            </div>
            <select value={selectedTheme} onChange={handleThemeChange}>
              <option value="light">Light</option>
              <option value="">Dark</option>
            </select>
          </div>
          <div className={styles.rowWrapper}>
            <div>
              <p>Language</p>
              <p style={{ color: "var(--clr-text-muted)" }}>
                Select your language
              </p>
            </div>
            <select>
              <option value="eng">English</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={styles.rowWrapper}>
            <div>
              <p>Two-factor Authentication</p>
              <p style={{ color: "var(--clr-text-muted)" }}>
                Keep your account secure by enabling 2FA via email
              </p>
            </div>
            <SwitchToggle />
          </div>
          <div className={styles.rowWrapper}>
            <div>
              <p>Mobile Push Notifications</p>
              <p style={{ color: "var(--clr-text-muted)" }}>
                Receive push notifications
              </p>
            </div>
            <SwitchToggle />
          </div>
          <div className={styles.rowWrapper}>
            <div>
              <p>Desktop Notifications</p>
              <p style={{ color: "var(--clr-text-muted)" }}>
                Receive push notification in desktop
              </p>
            </div>
            <SwitchToggle />
          </div>
          <div className={styles.rowWrapper}>
            <div>
              <p>Email Notifications</p>
              <p style={{ color: "var(--clr-text-muted)" }}>
                Receive email notification
              </p>
            </div>
            <SwitchToggle />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;
