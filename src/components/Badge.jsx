import styles from "./Badge.module.css";

function Badge({ text = "", children, variant = "success", style }) {
  return (
    <div style={style} className={`${styles.badge} ${styles[variant]}`}>
      {text || children}
    </div>
  );
}

export default Badge;
