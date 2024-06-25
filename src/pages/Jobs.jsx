import Button from "../components/Button";
import DashboardLayout from "../components/DashboardLayout";
import SearchInput from "../components/SearchInput";
import JobsList from "../components/JobsList";
import TopBar from "../components/TopBar";

function Jobs() {
  return (
    <DashboardLayout>
      <TopBar pryTitle="Jobs" secTitle="Show All Jobs" />
      <div className="card flow-content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "var(--size)",
            flexWrap: "wrap",
            flex: 1,
          }}
        >
          <SearchInput styles={{ flex: "1" }} />
          <Button variant="accent">Add New Job</Button>
        </div>
        <div className="grid">
          <JobsList />
          <JobsList />
          <JobsList />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Jobs;
