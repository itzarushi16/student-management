import { useState, useEffect } from "react";

const StudentForm = ({ onSubmit, editingStudent, cancelEdit }) => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    course: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(student);
    setStudent({ firstName: "", lastName: "", email: "", age: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <h2>{editingStudent ? "Update Student" : "Add Student"}</h2>

      <input name="firstName" value={student.firstName} onChange={handleChange} placeholder="First Name" required />
      <input name="lastName" value={student.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input name="email" value={student.email} onChange={handleChange} placeholder="Email" required />
      <input name="age" value={student.age} onChange={handleChange} placeholder="Age" />
      <input name="course" value={student.course} onChange={handleChange} placeholder="Course" />

      <button type="submit">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>

      {editingStudent && (
        <button type="button" onClick={cancelEdit}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default StudentForm;
