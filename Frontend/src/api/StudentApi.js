const API_URL = "http://localhost:8080/api/students";

export const getStudents = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const getStudentById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export const createStudent = async (student) => {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
};

export const updateStudent = async (id, student) => {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
};

export const deleteStudent = async (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
