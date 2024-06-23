import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import Button from "../components/Button";
import DashboardLayout from "../components/DashboardLayout";
import SearchInput from "../components/SearchInput";
import TopBar from "../components/TopBar";

function Employees() {
  return (
    <DashboardLayout>
      <TopBar pryTitle="All Employees" secTitle="All Employee Information" />
      <div>
        <div className="card flow-content">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <SearchInput />
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link style={{ textDecoration: "none" }} to="/add-new-employee">
                <Button
                  variant="accent"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                  }}
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8V16M16 12H8M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>Add New Employee</span>
                </Button>
              </Link>
              <Button
                variant="neutral"
                style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              >
                <svg
                  width={25}
                  height={24}
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 6H10.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 12H12.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5 12H21.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5 6L21.5 6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 18H20.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 18H6.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="8.5"
                    cy={18}
                    r={2}
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="17.5"
                    cy={12}
                    r={2}
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12.5"
                    cy={6}
                    r={2}
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
                <span>Filter</span>
              </Button>
            </div>
          </div>
          <div className="table-wrapper">
            <table>
              <tr>
                <th>Employee Name</th>
                <th>Designation</th>
                <th>Type</th>
                <th>Check In Time</th>
                <th>Status</th>
              </tr>
              {Array.from({ length: 7 }).map((el, index) => (
                <tr key={index}>
                  <td>
                    <Link style={{ textDecoration: "none" }} to="/emp-details">
                      Dina
                    </Link>
                  </td>
                  <td>Team Lead - Design</td>
                  <td>Office</td>
                  <td>09:27 AM</td>
                  <td>
                    <Badge
                      style={{ fontSize: "1rem" }}
                      text="On Time"
                      variant="success"
                    />
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Employees;
