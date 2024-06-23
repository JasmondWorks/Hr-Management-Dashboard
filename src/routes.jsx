import Attendance from "./pages/Attendance";
import Candidates from "./pages/Candidates";
import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Departments";
import Employees from "./pages/Employees";
import Holidays from "./pages/Holidays";
import Jobs from "./pages/Jobs";
import Leaves from "./pages/Leaves";
import Payroll from "./pages/Payroll";
import Settings from "./pages/Settings";
import NoPage from "./pages/NoPage.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Otp from "./pages/Otp.jsx";
import AddNewEmployee from "./pages/AddNewEmployee.jsx";
import EmployeeDetails from "./pages/EmployeeDetails.jsx";
import DepartmentDetails from "./pages/DepartmentDetails.jsx";

const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/attendance", element: <Attendance /> },
  { path: "/candidates", element: <Candidates /> },
  { path: "/departments", element: <Departments /> },
  { path: "/employees", element: <Employees /> },
  { path: "/holidays", element: <Holidays /> },
  { path: "/jobs", element: <Jobs /> },
  { path: "/leaves", element: <Leaves /> },
  { path: "/payroll", element: <Payroll /> },
  { path: "/settings", element: <Settings /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/otp", element: <Otp /> },
  { path: "/add-new-employee", element: <AddNewEmployee /> },
  { path: "/dept-details", element: <DepartmentDetails /> },
  { path: "/emp-details", element: <EmployeeDetails /> },
  { path: "*", element: <NoPage /> },
];

export default routes;
