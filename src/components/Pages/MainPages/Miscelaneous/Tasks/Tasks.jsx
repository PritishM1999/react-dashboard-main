import React, { useRef } from "react";
import "./Tasks.css";
import Draggable from "react-draggable";
import AdminImage from "../../../../../assets/user.jpg";

const Tasks = () => {
  const handleTaskToChange = (event) => {
    console.log(event.target.value);
  };

  const cardRef = useRef(null); // Add a useRef hook to get a reference to the draggable card

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Add New Tasks</h3>
      </div>
      <div className="main-body2">
        <div>
          <div className="tasks-main-container">
            <div className="task-inputs">
              {/* ... */}

              <input type="date" className="task-date" />

              <select
                id="taskTo"
                className="task-select"
                onChange={handleTaskToChange}
              >
                <option value="task1">To</option>
                <option value="task2">Admin1</option>
                <option value="task3">Admin2</option>
                <option value="task4">Admin3</option>
              </select>

              <input
                type="text"
                placeholder="Task Name"
                className="task-name"
              />

              <input
                type="text"
                id="taskDescription"
                className="task-description"
                placeholder="Task Description"
              />

              <button className="task-submit">Add Task</button>

              {/* sm={4} md={6} */}
            </div>

            <br />
            <div className="task-list">
              <div className="task-header">
                <div className="move-tasks">
                  {/* Wrap the draggable card with the Draggable component */}
                  <Draggable
                    nodeRef={cardRef}
                    axis="both"
                    // handle=".task-list"
                    // defaultPosition={{ x: 0, y: 0 }}
                    // position={null}
                    // grid={[100, 230]}
                    grid={[50, 50]}
                    scale={1}
                    bounds=".all-task-actions"
                    // className="adjust-draggable"
                  >
                    <div className="task-card-container" ref={cardRef}>
                      <div className="task-card">
                        <div className="create-use">
                          <h4>Create a website</h4>
                          <p>Use, HTML5, CSS3</p>
                        </div>
                        <div className="user-profile-tasks">
                          <div className="card-image">
                            <img src={AdminImage} alt="User" />
                          </div>
                          <div className="card-name">Admin</div>
                        </div>
                        <div className="card-task-date">
                          <p>Date: May 04, 2023</p>
                        </div>
                      </div>
                    </div>
                  </Draggable>
                </div>

              <section className="all-task-actions">
                <div
                  className="task"
                  // bounds=".move-tasks"
                  // handle=".task-list"
                >
                  <label>Task</label>
                </div>
                <div className="process">
                  <label>Process</label>
                </div>
                <div className="review">
                  <label>Review</label>
                </div>
                <div className="complete">
                  <label>Completed</label>
                </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
