import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const {
  VITE_DB_BASE_URL: apiUrl,
  VITE_LOGGED_IN_ADMIN_ID: loggedInAdminId,
  VITE_FETCH_DELAY: fetchDelay,
} = import.meta.env;

function useEmployees(id = "") {
  const { data: loggedInAdmin, isLoading: isLoadingLoggedInAdmin } = useFetch(
    `${apiUrl}/admins/${loggedInAdminId}`,
    []
  );

  // const { data: allEmployees, isLoading: isLoadingAll } = useFetch(
  //   `${apiUrl}/employees`
  // );
  const [allEmployees, setAllEmployees] = useState([]);
  const [isAllEmployeesLoading, setIsAllEmployeesLoading] = useState(true);
  let employees = allEmployees.filter((emp) =>
    loggedInAdmin.assignedEmployees?.includes(Number(emp.id))
  );

  const { data: employee, isLoading: isLoadingSingle } = useFetch(
    `${apiUrl}/employees/${id}`
  );

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const res = await fetch(`${apiUrl}/employees`);
        const data = await res.json();
        setAllEmployees(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsAllEmployeesLoading(false);
      }
    }
    setTimeout(function () {
      fetchEmployees();
    }, fetchDelay);
  }, [loggedInAdmin]);

  // useEffect(() => {
  //   if (allEmployees.length > 0) {
  //     setEmployees(
  //       allEmployees?.filter((emp) =>
  //         loggedInAdmin.assignedEmployees.includes(Number(emp.id))
  //       )
  //     );
  //   }
  // }, [allEmployees]);
  // Filter in only logged in admin assigned employees

  if (id) return { employee, isLoadingSingle };
  return { employees, isLoadingAll: isAllEmployeesLoading };
}

export default useEmployees;
