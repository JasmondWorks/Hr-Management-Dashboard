import DashboardLayout from "../components/DashboardLayout";
import SearchInput from "../components/SearchInput";
import TopBar from "../components/TopBar";
import DeptMembersList from "../components/DeptMembersList";

function Departments() {
  return (
    <DashboardLayout>
      <TopBar
        pryTitle="All Departments"
        secTitle="All Departments Information"
      />
      <div>
        <div className="card flow-content">
          <SearchInput />
          <div className="grid">
            <DeptMembersList />
            <DeptMembersList />
            <DeptMembersList />
            <DeptMembersList />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Departments;
