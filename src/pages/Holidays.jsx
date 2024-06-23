import Badge from "../components/Badge";
import DashboardLayout from "../components/DashboardLayout";
import TopBar from "../components/TopBar";

function Holidays() {
  return (
    <DashboardLayout>
      <TopBar pryTitle="All Employees" secTitle="All Employee Information" />
      <div>
        <div className="card">
          <div className="table-wrapper">
            <table>
              <tr style={{ padding: "1rem" }}>
                <th>Employee Name</th>
                <th>Designation</th>
                <th>Type</th>
                <th>Check In Time</th>
                <th>Status</th>
              </tr>
              {Array.from({ length: 7 }).map((el, index) => (
                <tr key={index}>
                  <td
                    style={{
                      borderLeft: "4px solid var(--clr-border)",
                      paddingLeft: "1.35rem",
                      paddingBlock: "1.35rem",
                    }}
                  >
                    Dina
                  </td>
                  <td style={{ paddingBlock: "1.35rem" }}>
                    Team Lead - Design
                  </td>
                  <td style={{ paddingBlock: "1.35rem" }}>Office</td>
                  <td style={{ paddingBlock: "1.35rem" }}>09:27 AM</td>
                  <td style={{ paddingBlock: "1.35rem" }}>
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

export default Holidays;
