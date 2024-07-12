import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const {
  VITE_DB_BASE_URL: apiUrl,
  VITE_LOGGED_IN_ADMIN_ID: loggedInAdminId,
  VITE_FETCH_DELAY: fetchDelay,
} = import.meta.env;

function useEmployees(id = "") {
  const { data: loggedInAdmin } = useFetch(
    `${apiUrl}/admins/${loggedInAdminId}`,
    []
  );
  const { data: allEmployees, isLoading: isLoadingAll } = useFetch(
    `${apiUrl}/employees`
  );

  let employees = allEmployees.filter((emp) =>
    loggedInAdmin.assignedEmployees?.includes(Number(emp.id))
  );

  const { data: employee, isLoading: isLoadingSingle } = useFetch(
    `${apiUrl}/employees/${id}`
  );

  // useEffect(() => {
  //   async function fetchEmployees() {
  //     try {
  //       const res = await fetch(`${apiUrl}/employees`);
  //       const data = await res.json();
  //       setAllEmployees(data);
  //     } catch (err) {
  //       console.error(err.message);
  //     } finally {
  //       setIsAllEmployeesLoading(false);
  //     }
  //   }
  //   setTimeout(function () {
  //     fetchEmployees();
  //   }, fetchDelay);
  // }, [loggedInAdmin]);

  if (id) return { employee, isLoadingSingle };
  return { employees, isLoadingAll: isLoadingAll };
}

export default useEmployees;
