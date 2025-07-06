import React, { useEffect, useState } from "react";
import EmployeePage from "./EmployeePage";

const EmployeePageWrapper = () => {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const departments = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Trainers" },
  ];

  const roles = [
    { id: 1, title: "Receptionist", department: "Admin" },
    { id: 2, title: "Gym Trainer", department: "Trainers" },
  ];

  useEffect(() => {
    fetch("http://localhost:8080/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleSave = (employee) => {
    const url = employee.id
      ? `http://localhost:8080/api/employees/${employee.id}`
      : "http://localhost:8080/api/employees";

    const method = employee.id ? "PUT" : "POST";

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    })
      .then((res) => res.json())
      .then((savedEmployee) => {
        if (employee.id) {
          setEmployees((prev) =>
            prev.map((e) => (e.id === savedEmployee.id ? savedEmployee : e))
          );
        } else {
          setEmployees((prev) => [...prev, savedEmployee]);
        }
        setShowForm(false);
        setEditingEmployee(null);
      });
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingEmployee(null);
  };

  return (
    <div className="page-container">
      <h2>Employee List</h2>
      <button onClick={() => setShowForm(true)}>Add Employee</button>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.department} - {emp.role}
            <button
              onClick={() => {
                setEditingEmployee(emp);
                setShowForm(true);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      {showForm && (
        <EmployeePage
          employee={editingEmployee}
          onSave={handleSave}
          onCancel={handleCancel}
          departments={departments}
          roles={roles}
        />
      )}
    </div>
  );
};

export default EmployeePageWrapper;
