import { useEffect, useState } from "react";
import { getAdmin, getEmployee, getEmployees } from "../api";
import { useFirestoreColl, useFirestoreDoc } from "../hooks/useFirestore";

function useEmployees(id = "") {
  const {
    data: admin,
    loading: isAdminLoading,
    error: adminError,
  } = useFirestoreDoc("admins", "EqPvZR4WaMlD4F7dUI2r");
  const {
    data: allEmployees,
    loading: isLoadingAll,
    error: allError,
  } = useFirestoreColl("employees");

  // Derived states
  const [employees, setEmployees] = useState([]);
  const {
    data: employee,
    loading: isLoadingSingle,
    error: singleError,
  } = useFirestoreDoc("employees", id);

  useEffect(() => {
    admin &&
      allEmployees &&
      setEmployees(
        allEmployees.filter((emp) => admin.assignedEmployees.includes(emp.id))
      );
  }, [allEmployees, admin]);

  // const {
  //   data: employee,
  //   error: errorSingle,
  //   isLoading: isLoadingSingle,
  // } = getEmployee(id);

  if (id) return { employee, isLoadingSingle };

  return { employees, isLoadingAll: isLoadingAll };
}

export default useEmployees;
