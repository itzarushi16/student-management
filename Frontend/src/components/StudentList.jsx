const StudentList = ({ students, onEdit, onDelete }) => {
  if (students.length === 0) {
    return <p>No students found</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First</th>
          <th>Last</th>
          <th>Email</th>
          <th>Age</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.firstName}</td>
            <td>{s.lastName}</td>
            <td>{s.email}</td>
            <td>{s.age || "-"}</td>
            <td>{s.course || "-"}</td>
            <td>
              <button onClick={() => onEdit(s)}>Edit</button>
              <button onClick={() => onDelete(s.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
