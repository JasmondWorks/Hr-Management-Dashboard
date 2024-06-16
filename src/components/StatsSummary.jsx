import styles from "./StatsSummary.module.css";

import Badge from "./Badge";

function StatsSummary() {
  return (
    <div className={styles.wrapper} style={{ padding: 0 }}>
      <div className={styles.top}>
        <div>
          icon
          <p>Total Employee</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>666</p>
          <Badge />
        </div>
      </div>
      <div className={styles.bottom}>
        <small>Update, July 19, 2020</small>
      </div>
    </div>
  );
}

export default StatsSummary;
