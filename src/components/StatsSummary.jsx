import styles from "./StatsSummary.module.css";

import Badge from "./Badge";

function StatsSummary({ icon, type = "Employee", data }) {
  // console.log(data);
  return (
    <div className={styles.wrapper} style={{ padding: 0 }}>
      <div className={styles.top}>
        <div>
          <div
            style={{
              backgroundColor: "#281914",
              padding: ".8rem",
              borderRadius: "5px",
              display: "inline-block",
              marginBottom: "1rem",
              lineHeight: 0,
            }}
          >
            {icon}
          </div>
          <p>Total {type}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: "600", fontSize: "2.5rem" }}>{data}</p>
          {/* <Badge
            style={{
              fontSize: "1rem",
              display: "flex",
              gap: ".5rem",
              alignItems: "center",
            }}
            variant={data.percentage <= 0 ? "error" : "success"}
          >
            {data.percentage <= 0 ? (
              <svg
                style={{ width: "18px", height: "auto", lineHeight: 0 }}
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.76793 0.5L4.23207 0.5C2.68849 0.5 1.72675 2.17443 2.50451 3.50774L4.27244 6.53847C5.0442 7.86148 6.9558 7.86148 7.72756 6.53847L9.49548 3.50774C10.2732 2.17443 9.31151 0.5 7.76793 0.5Z"
                  fill="#F45B69"
                />
              </svg>
            ) : (
              <svg
                style={{ width: "18px" }}
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.23207 9.75L7.76793 9.75C9.31151 9.75 10.2733 8.07557 9.49548 6.74226L7.72756 3.71153C6.9558 2.38852 5.0442 2.38852 4.27244 3.71153L2.50452 6.74226C1.72675 8.07557 2.68849 9.75 4.23207 9.75Z"
                  fill="#30BE82"
                />
              </svg>
            )}
            <span>{Math.abs(data.percentage)}</span>
          </Badge> */}
        </div>
      </div>
      <div className={styles.bottom}>
        <small>Update, July 19, 2020</small>
      </div>
    </div>
  );
}

export default StatsSummary;
