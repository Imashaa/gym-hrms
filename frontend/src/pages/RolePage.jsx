import { useState, useEffect } from "react";
import "./RolePage.css";

const RoleForm = ({ role, onSave, onCancel, departments = [] }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    department: "",
    level: "",
  });

  useEffect(() => {
    if (role) {
      setFormData({
        title: role.title,
        description: role.description,
        department: role.department,
        level: role.level,
      });
    }
  }, [role]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: role?.id || 0,
      ...formData,
    });
  };

  const levels = ["Entry", "Mid", "Senior", "Executive"];

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h2 className="dialog-title">{role ? "Edit Role" : "Add New Role"}</h2>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label>Job Title</label>
            <input
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="e.g. Senior Trainer"
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Key responsibilities and duties"
              rows={3}
              required
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <select
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
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
            <label>Level</label>
            <select
              value={formData.level}
              onChange={(e) =>
                setFormData({ ...formData, level: e.target.value })
              }
              required
            >
              <option value="">Select Level</option>
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              {role ? "Update" : "Create"} Role
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoleForm;
