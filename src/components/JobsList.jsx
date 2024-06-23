import Job from "../components/Job";

const data = [
  {
    name: "UI/UX Designer",
    cat: "Design",
  },
  {
    name: "UI/UX Designer",
    cat: "Design",
  },
];

function JobsList({ state = "active" }) {
  return (
    <div className="card">
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "10px",
              aspectRatio: "1/1",
              background: "#ffaabb",
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <span>Active Jobs</span>
      </div>
      <div style={{ display: "grid", gap: "1.5rem" }}>
        {Array.from({ length: 4 }).map((el, index) => (
          <Job key={index} />
        ))}
      </div>
    </div>
  );
}

export default JobsList;
