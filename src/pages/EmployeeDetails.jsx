import styles from "./EmployeeDetails.module.css";

import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import TopBar from "../components/TopBar";
import Tabs from "../components/Tabs";
import { useState } from "react";
import Button from "../components/Button";
import UploadFile from "../components/UploadFile";
import Badge from "../components/Badge";

const tabsData = [
  {
    icon: "",
    text: "Profile",
  },
  {
    icon: "",
    text: "Attendance",
  },
  {
    icon: "",
    text: "Projects",
  },
  {
    icon: "",
    text: "Leave",
  },
];
const tabsData2 = [
  {
    icon: "",
    text: "Personal Information",
  },
  {
    icon: "",
    text: "Professional Information",
  },
  {
    icon: "",
    text: "Documents",
  },
  {
    icon: "",
    text: "Account Access",
  },
];

function EmployeeDetails() {
  const [selectedTab, setSelectedTab] = useState(
    tabsData[0].text.toLowerCase()
  );
  return (
    <DashboardLayout>
      <TopBar
        pryTitle="Dina Coneva"
        secTitle={
          <div>
            <Link to="/employees">All Employee</Link>
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
                d="M9.53151 6.41438C9.20806 6.67313 9.15562 7.1451 9.41438 7.46855L13.0396 12L9.41438 16.5315C9.15562 16.855 9.20806 17.3269 9.53151 17.5857C9.85495 17.8444 10.3269 17.792 10.5857 17.4685L14.5857 12.4685C14.8048 12.1946 14.8048 11.8054 14.5857 11.5315L10.5857 6.53151C10.3269 6.20806 9.85495 6.15562 9.53151 6.41438Z"
                fill="white"
              />
            </svg>
            <span>Dina Coneva</span>
          </div>
        }
      />
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div style={{ display: "flex", gap: "2.5rem" }}>
            <div
              style={{
                width: "80px",
                aspectRatio: "1/1",
                backgroundColor: "var(--clr-border)",
              }}
            ></div>
            <div>
              <h3>Dina Coneva</h3>
              <p>
                <small>Project Manager</small>
              </p>
              <p>
                <small>dina.c@gmail.com</small>
              </p>
            </div>
          </div>
          <Button variant="accent">Edit Profile</Button>
        </div>
        <div className={styles.splitWrapper}>
          <Tabs
            styles={{ marginBottom: "2.5rem" }}
            type="vertical"
            data={tabsData}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <>
            {selectedTab === "profile" ? (
              <ProfileContent />
            ) : selectedTab === "attendance" ? (
              <AttendanceContent />
            ) : selectedTab === "projects" ? (
              <ProjectsContent />
            ) : selectedTab === "leave" ? (
              <LeaveContent />
            ) : null}
          </>
        </div>
      </div>
    </DashboardLayout>
  );
}

function ProfileContent() {
  const [selectedTab2, setSelectedTab2] = useState(
    tabsData2[0].text.toLowerCase()
  );

  return (
    <div>
      <Tabs
        type="horizontal"
        data={tabsData2}
        selectedTab={selectedTab2}
        setSelectedTab={setSelectedTab2}
      />
      {selectedTab2 === "personal information" ? (
        <form
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          <input type="text" placeholder="First Name" className="col-1/2" />
          <input type="text" placeholder="Last Name" className="col-1/2" />
          <input type="text" placeholder="Mobile Number" className="col-1/2" />
          <input type="email" placeholder="Email Address" className="col-1/2" />
          <input type="date" placeholder="Date of Birth" className="col-1/2" />
          <select className="col-1/2">
            <option value="marital Status">Marital Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
          <select className="col-1/2">
            <option value="gender">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select className="col-1/2">
            <option value="nationality">Nationality</option>
            <option value="nigerian">Nigerian</option>
            <option value="other">Other</option>
          </select>
          <input type="text" placeholder="Address" className="col-1/1" />
          <select className="col-1/3">
            <option value="city">City</option>
            <option value="lagos">Lagos</option>
            <option value="other">Other</option>
          </select>
          <select className="col-1/3">
            <option value="state">State</option>
            <option value="lagos">Lagos</option>
            <option value="other">Other</option>
          </select>
          <select className="col-1/3">
            <option value="zip-code">ZIP Code</option>
            <option value="23401">23401</option>
            <option value="other">Other</option>
          </select>
          <div
            className="col-1/1"
            style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}
          >
            <Button>Cancel</Button>
            <Button variant="accent">Next</Button>
          </div>
        </form>
      ) : selectedTab2 === "professional information" ? (
        <form
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          <input type="text" placeholder="Employee ID" className="col-1/2" />
          <input type="text" placeholder="User Name" className="col-1/2" />
          <select className="col-1/2">
            <option value="marital Status">Select Employee Type</option>
            <option value="single">Type1</option>
            <option value="married">Type2</option>
          </select>
          <input type="email" placeholder="Email Address" className="col-1/2" />
          <select className="col-1/2">
            <option value="marital Status">Select Department</option>
            <option value="single">Dept1</option>
            <option value="married">Dept2</option>
          </select>
          <input
            type="text"
            placeholder="Enter Designation"
            className="col-1/2"
          />
          <select className="col-1/2">
            <option value="nationality">Select Working Days</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
          <input type="date" placeholder="Email Address" className="col-1/2" />
          <select className="col-1/1">
            <option value="zip-code">Select Office Location</option>
            <option value="23401">HQ</option>
            <option value="other">Branch1</option>
            <option value="other">Branch2</option>
          </select>
          <div
            className="col-1/1"
            style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}
          >
            <Button>Cancel</Button>
            <Button variant="accent">Next</Button>
          </div>
        </form>
      ) : selectedTab2 === "documents" ? (
        <form>
          <div
            className="grid"
            style={{
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            <UploadFile title="Upload Appointment Letter" />
            <UploadFile title="Upload Appointment Letter" />
            <UploadFile title="Upload Appointment Letter" />
            <UploadFile title="Upload Appointment Letter" />
          </div>
          <div
            className="col-1/1"
            style={{
              marginLeft: "auto",
              display: "flex",
              justifyContent: "flex-end",
              gap: "1rem",
              textAlign: "right",
              marginTop: "1.5rem",
            }}
          >
            <Button>Cancel</Button>
            <Button variant="accent">Next</Button>
          </div>
        </form>
      ) : selectedTab2 === "account access" ? (
        <form
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          <input type="email" placeholder="Email Address" className="col-1/2" />
          <input type="text" placeholder="Enter Slack ID" className="col-1/2" />
          <input type="text" placeholder="Enter Skype ID" className="col-1/2" />
          <input
            type="text"
            placeholder="Enter GitHub ID"
            className="col-1/2"
          />
          <div
            className="col-1/1"
            style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}
          >
            <Button>Cancel</Button>
            <Button variant="accent">Next</Button>
          </div>
        </form>
      ) : null}
    </div>
  );
}

function AttendanceContent() {
  return (
    <>
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
        </table>
      </div>
    </>
  );
}
function ProjectsContent() {
  return (
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
      </table>
    </div>
  );
}
function LeaveContent() {
  return (
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
      </table>
    </div>
  );
}

export default EmployeeDetails;
