import styles from "./Job.module.css";
import Badge from "./Badge";

function Job() {
  return (
    <div
      className={styles.wrapper}
      style={{
        padding: "2rem",
        display: "grid",
        gap: "2rem",
        borderRadius: "var(--size--sm)",
      }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6M2 10.3475C2 10.3475 5.11804 12.4244 9.97767 12.9109M22 10.3475C22 10.3475 18.882 12.4244 14.0223 12.9109M6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14 12.1602V13.1602C14 13.1702 14 13.1702 14 13.1802C14 14.2702 13.99 15.1602 12 15.1602C10.02 15.1602 10 14.2802 10 13.1902V12.1602C10 11.1602 10 11.1602 11 11.1602H13C14 11.1602 14 11.1602 14 12.1602Z"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>
          <p style={{ fontWeight: 700 }}>UI/UX Designer</p>
          <p>
            <small>Design</small>
          </p>
        </div>
      </div>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {["Design", "Full Time", "Remote"].map((el) => (
          <Badge
            key={el}
            text={el}
            style={{ padding: "1rem", fontSize: "1.3rem", fontWeight: "400" }}
            variant="accent"
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={12} cy={11} r={3} stroke="white" strokeWidth="1.5" />
            <path
              d="M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
          <p>
            <small>Maldova</small>
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontWeight: "700", fontSize: "110%" }}>$3600</span>
          <span>/Month</span>
        </div>
      </div>
    </div>
  );
}

export default Job;
