import styles from "./Button.module.css";

function Button({
  variant = "neutral",
  children,
  className = "",
  style,
  onClick,
  size = "",
  text = "",
  disabled = "false",
}) {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`${styles.btn} ${styles[variant]} ${className} ${styles[size]}`}
    >
      {text || children}
    </button>
  );
}

export default Button;
