import Badge from "../components/Badge";
import DashboardLayout from "../components/DashboardLayout";
import SearchInput from "../components/SearchInput";
import TopBar from "../components/TopBar";

function Candidates() {
  return (
    <DashboardLayout>
      <TopBar pryTitle="Candidates" secTitle="Show All Candidates" />
      <div>
        <div className="card">
          <SearchInput />
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
      </div>
    </DashboardLayout>
  );
}

export default Candidates;
