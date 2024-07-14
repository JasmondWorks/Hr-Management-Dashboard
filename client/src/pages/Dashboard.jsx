import styles from "./Dashboard.module.css";

// Components
import StatsSummary from "../components/StatsSummary";
import UpcomingEvent from "../components/UpcomingEvent";
import DashboardLayout from "../components/DashboardLayout";
import Badge from "../components/Badge";
import FlowContent from "../components/layout/FlowContent";
import Row from "../components/layout/Row";
import TopBar from "../components/TopBar";

// import { useState } from "react";
// import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import useEmployees from "../hooks/useEmployees";
import Loader from "../components/Loader";

const statsSummaryDataIcons = [
  {
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11ZM12 19C15.3137 19 18 17.6569 18 16C18 14.3431 15.3137 13 12 13C8.68629 13 6 14.3431 6 16C6 17.6569 8.68629 19 12 19ZM6.38165 13.019C3.91199 13.1713 2 14.2241 2 15.5001C2 16.5521 3.29949 17.4523 5.13963 17.8213C4.72843 17.2645 4.5 16.6483 4.5 16.0001C4.5 14.8567 5.21076 13.8129 6.38165 13.019ZM19.5001 16.0001C19.5001 16.6483 19.2716 17.2645 18.8604 17.8213C20.7006 17.4523 22.0001 16.5521 22.0001 15.5001C22.0001 14.2241 20.0881 13.1713 17.6184 13.019C18.7893 13.8129 19.5001 14.8567 19.5001 16.0001ZM15.7183 10.5354C16.2115 9.8134 16.5 8.94039 16.5 8C16.5 7.68794 16.4682 7.3833 16.4077 7.08914C16.5949 7.0312 16.7938 7 17 7C18.1045 7 19 7.89543 19 9C19 10.1046 18.1045 11 17 11C16.5123 11 16.0653 10.8254 15.7183 10.5354ZM7 7C7.20619 7 7.40509 7.0312 7.59223 7.08914C7.53176 7.3833 7.5 7.68794 7.5 8C7.5 8.94039 7.78845 9.8134 8.28171 10.5354C7.93462 10.8254 7.4877 11 7 11C5.89543 11 5 10.1046 5 9C5 7.89543 5.89543 7 7 7Z"
          fill="var(--clr-accent)"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6M2 10.3475C2 10.3475 5.11804 12.4244 9.97767 12.9109M22 10.3475C22 10.3475 18.882 12.4244 14.0223 12.9109M6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22Z"
          stroke="var(--clr-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 12.16V13.16C14 13.17 14 13.17 14 13.18C14 14.27 13.99 15.16 12 15.16C10.02 15.16 10 14.28 10 13.19V12.16C10 11.16 10 11.16 11 11.16H13C14 11.16 14 11.16 14 12.16Z"
          stroke="var(--clr-accent)"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 2V5"
          stroke="var(--clr-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 2V5"
          stroke="var(--clr-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.5Z"
          stroke="var(--clr-accent)"
          strokeWidth="1.5"
        />
        <path
          d="M9 15L10.7528 16.4023C11.1707 16.7366 11.7777 16.6826 12.1301 16.2799L15 13"
          stroke="var(--clr-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 9H21"
          stroke="var(--clr-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.83333 18.3332C7.38957 18.3332 8.69672 17.2667 9.06381 15.8247C9.17736 15.3787 9.53976 14.9998 10 14.9998H15.8333M5.83333 18.3332C3.99238 18.3332 2.5 16.8408 2.5 14.9998V4.1665C2.5 2.78579 3.61929 1.6665 5 1.6665H13.3333C14.714 1.6665 15.8333 2.78579 15.8333 4.1665V14.9998M5.83333 18.3332H15.8333C17.3896 18.3332 18.6967 17.2667 19.0638 15.8247C19.1774 15.3787 18.7936 14.9998 18.3333 14.9998H15.8333M12.5 5.83317H5.83333M9.16667 9.99984H5.83333"
          stroke="#E25319"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];
const statsSummaryData = [
  {
    count: 666,
    percentage: 18,
  },
  {
    count: 736,
    percentage: -5,
  },
  {
    count: 376,
    percentage: 32,
  },
  {
    count: 354,
    percentage: -17,
  },
];

const apiUrl = import.meta.env.VITE_DB_BASE_URL;

function Dashboard() {
  const { employees, isLoadingAll } = useEmployees();

  console.log(employees);

  const { data: applicants } = useFetch(`${apiUrl}/candidates`);

  let numEmployees = employees?.length;
  let numApplicants = applicants?.length;
  let numAttendances = 4;
  let numProjects = employees?.flatMap((emp) => emp.projects).length;

  // const [totalCounts, setTotalCounts] = useState({
  //   numEmployees: employees?.length,
  //   numApplicants: applicants?.length,
  //   numAttendance: 3,
  //   numProjects: employees.flatMap((emp) => emp.projects).length,
  // });
  // let numEmployees = employees?.length
  // let numApplicants = applicants?.length
  // let numAttendances =
  // let numProjects =

  if (isLoadingAll) return <Loader />;

  return (
    <DashboardLayout>
      <TopBar pryTitle="Hello, Jasmond" secTitle="Good Morning" />
      <Row split="">
        {/* col */}
        <FlowContent>
          <div className="grid">
            <StatsSummary
              icon={statsSummaryDataIcons[0].icon}
              data={numEmployees}
              type="Employee"
            />
            <StatsSummary
              icon={statsSummaryDataIcons[1].icon}
              data={numApplicants}
              type="Applicant"
            />
            <StatsSummary
              icon={statsSummaryDataIcons[2].icon}
              data={numAttendances}
              type="Attendance"
            />
            <StatsSummary
              icon={statsSummaryDataIcons[3].icon}
              data={numProjects}
              type="Projects"
            />
          </div>
          <div className="card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4>Attendance Overview</h4>
              <select name="" id="">
                <option value="">Today</option>
                <option value="">Last week</option>
                <option value="">Last month</option>
              </select>
            </div>
          </div>
        </FlowContent>
        {/* col */}
        {/* <div className="card">
          <div>
            <Calendar
              onChange={onChange}
              value={calendarVal}
              className="block-middle"
            />
          </div>
          <UpcomingEvent />
        </div> */}
      </Row>

      {/* row */}
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4>Attendance Overview</h4>
          <p>aside</p>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Designation</th>
                <th>Type</th>
                <th>Check In Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 7 }).map((el, index) => (
                <tr key={index}>
                  <td>Dina</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
