import styles from "./Badge.module.css";

function Badge({ text = "", children, variant = "success", style }) {
  console.log(variant);
  return (
    <div style={style} className={`${styles.badge} ${styles[variant]}`}>
      {text || children}
    </div>
  );
}

export default Badge;
