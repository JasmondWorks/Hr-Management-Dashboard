import Badge from "../components/Badge";
import DashboardLayout from "../components/DashboardLayout";
import TopBar from "../components/TopBar";

function Employees() {
  return (
    <DashboardLayout>
      <TopBar pryTitle="All Employees" secTitle="All Employee Information" />
      <div>
        <div className="card">
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
      </div>
    </DashboardLayout>
  );
}

export default Employees;
