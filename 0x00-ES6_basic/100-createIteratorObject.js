export default function createIteratorObject(report) {
  const emp = [];
  for (const dept of Object.keys(report.allEmployees)) {
    for (const name of report.allEmployees[dept]) {
      emp.push(name);
    }
  }
  return emp;
}
