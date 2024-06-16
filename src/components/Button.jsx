import styles from "./Button.module.css";

function Button({
  variant = "neutral",
  children,
  className = "",
  style,
  onClick,
  size = "",
}) {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`${styles.btn} ${styles[variant]} ${className} ${styles[size]}`}
    >
      {children}
    </button>
  );
}

export default Button;
