import styles from "./Loader.module.css";

function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        display: "grid",
        placeItems: "center",
        inset: 0,
      }}
    >
      <div
        style={{ color: "var(--clr-accent)", zIndex: 10000 }}
        className={styles.laBallGridBeat}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
