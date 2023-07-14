import React, { useState } from "react";

const StaffNotePopup = ({ onSave, onCancel }) => {
  const [staffNote, setStaffNote] = useState("");

  const handleSave = () => {
    // Call the onSave callback with the staff note value
    onSave(staffNote);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <label className="popup-label">Staff note:</label>
        <textarea
          className="popup-textarea"
          value={staffNote}
          onChange={(event) => setStaffNote(event.target.value)}
        />
        <div className="popup-buttons">
          <button className="popup-button" onClick={handleSave}>
            Save
          </button>
          <button className="popup-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffNotePopup;
