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
  { path: "*", element: <NoPage /> },
];

export default routes;
