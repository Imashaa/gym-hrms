import { useState, useEffect } from "react";
import "./DepartmentPage.css";

const DepartmentForm = ({ department, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    manager: "",
  });

  useEffect(() => {
    if (department) {
      setFormData({
        name: department.name,
        description: department.description,
        manager: department.manager,
      });
    }
  }, [department]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: department?.id || 0,
      ...formData,
      employeeCount: department?.employeeCount || 0,
    });
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h2 className="dialog-title">
          {department ? "Edit Department" : "Add New Department"}
        </h2>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="name">Department Name</label>
            <input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="e.g. Personal Training"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Brief description of the department's responsibilities"
              rows="3"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="manager">Department Manager</label>
            <input
              id="manager"
              value={formData.manager}
              onChange={(e) =>
                setFormData({ ...formData, manager: e.target.value })
              }
              placeholder="Manager's full name"
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="save-btn">
              {department ? "Update" : "Create"} Department
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DepartmentForm;
