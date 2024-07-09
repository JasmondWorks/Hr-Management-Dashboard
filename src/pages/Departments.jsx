import DashboardLayout from "../components/DashboardLayout";
import SearchInput from "../components/SearchInput";
import TopBar from "../components/TopBar";
import Loader from "../components/Loader";
import DeptMembersList from "../components/DeptMembersList";
import useEmployees from "../hooks/useEmployees";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

function Departments() {
  const { employees, isLoadingAll } = useEmployees();
  const departmentsMap = employees?.reduce((acc, employee) => {
    if (!acc[employee.department]) {
      acc[employee.department] = { name: employee.department, members: [] };
    }
    acc[employee.department].members.push(employee.id);
    return acc;
  }, {});
  const departments = Object.values(departmentsMap);

  if (isLoadingAll) return <Loader />;

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
            {departments?.map((dept) => (
              <DeptMembersList
                key={dept.name}
                deptObj={dept}
                employees={employees}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Departments;
