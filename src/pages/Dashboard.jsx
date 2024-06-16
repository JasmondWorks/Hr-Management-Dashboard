import styles from "./Dashboard.module.css";

// Components
import StatsSummary from "../components/StatsSummary";
import UpcomingEvent from "../components/UpcomingEvent";
import DashboardLayout from "../components/DashboardLayout";
import Badge from "../components/Badge";
import FlowContent from "../components/layout/FlowContent";
import Grid from "../components/layout/Grid";
import Row from "../components/layout/Row";

function Dashboard() {
  return (
    <DashboardLayout>
      <Row split="2_5-1_5">
        {/* col */}
        <FlowContent>
          <Grid>
            <StatsSummary />
            <StatsSummary />
            <StatsSummary />
            <StatsSummary />
          </Grid>
          <div className="card">
            <h4>Attendance Overview</h4>
          </div>
        </FlowContent>
        {/* col */}
        <div className="card">
          <div>calendar</div>
          <UpcomingEvent />
        </div>
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
      </div>
      {/* <Table
          thList={[
            "Employee Name",
            "Designation",
            "Type",
            "Check In Time",
            "Status",
          ]}
        >
          <th></th>
        </Table> */}
    </DashboardLayout>
  );
}

export default Dashboard;
