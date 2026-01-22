import { useEffect, useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import Message from "../components/Message";
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../api/StudentApi";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [message, setMessage] = useState("");

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleSubmit = async (student) => {
    if (editingStudent) {
      await updateStudent(editingStudent.id, student);
      setMessage("Student updated successfully");
      setEditingStudent(null);
    } else {
      await createStudent(student);
      setMessage("Student added successfully");
    }
    loadStudents();
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    setMessage("Student deleted successfully");
    loadStudents();
  };

  return (
  <div className="app-container">
    <div className="app-header">
      <h1>Student Management System</h1>
      
    </div>

    <Message text={message} type="success" />

    <StudentForm
      onSubmit={handleSubmit}
      editingStudent={editingStudent}
      cancelEdit={() => setEditingStudent(null)}
    />

    <StudentList
      students={students}
      onEdit={setEditingStudent}
      onDelete={handleDelete}
    />
  </div>
);

};

export default Home;
