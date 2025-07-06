import { useState, useEffect } from "react";
import "./EmployeePage.css";

const EmployeePage = ({
  employee,
  onSave,
  onCancel,
  departments = [],
  roles = [],
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    role: "",
    status: "Active",
    joinDate: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name,
        email: employee.email,
        phone: employee.phone,
        department: employee.department,
        role: employee.role,
        status: employee.status,
        joinDate: employee.joinDate,
      });
    }
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: employee?.id || 0,
      ...formData,
    });
  };

  const filteredRoles = roles.filter(
    (role) => role.department === formData.department
  );

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h2 className="dialog-title">
          {employee ? "Edit Employee" : "Add New Employee"}
        </h2>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label>Full Name</label>
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <select
              value={formData.department}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  department: e.target.value,
                  role: "",
                })
              }
              required
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.name}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Role</label>
            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              disabled={!formData.department}
              required
            >
              <option value="">Select Role</option>
              {filteredRoles.map((role) => (
                <option key={role.id} value={role.title}>
                  {role.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
              required
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="form-group">
            <label>Join Date</label>
            <input
              type="date"
              value={formData.joinDate}
              onChange={(e) =>
                setFormData({ ...formData, joinDate: e.target.value })
              }
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              {employee ? "Update" : "Create"} Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeePage;
