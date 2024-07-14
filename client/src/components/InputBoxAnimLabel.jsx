import styles from "./InputBoxAnimLabel.module.css";

function InputBoxAnimLabel({
  label = "label...",
  placeholder = "placeholder...",
  type = "text",
  onChange,
  value = "",
}) {
  return (
    <div className={styles.wrapper}>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
      <div className={styles.label}>
        <small>{label}</small>
      </div>
    </div>
  );
}

export default InputBoxAnimLabel;
