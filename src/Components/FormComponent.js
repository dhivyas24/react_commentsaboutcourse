import React from "react";
import { useState } from "react";
import TableData from "./TableData";
function FormComponent() {
  const [usersData, setUsersData] = useState([
    {
      name: { value: "" },
      comment: { value: "" }
    }
  ]);
  const [currentUser, setCurrentUser] = useState({
    name: { error: false, value: "" },
    comment: { error: false, value: "" }
  });

  function handleAddNewUser(e) {
    // add new user data
    e.preventDefault();
    const updateUsers = [
      // copy the current users state
      ...usersData,
      currentUser
    ];
    // update the state to the updatedUsers
    console.log("current->", currentUser.name.value === "");

    setUsersData(updateUsers);
  }

  function handleNameChange(e) {
    // update currentUser's name with what's currently in the name input box
    setCurrentUser({
      ...currentUser,
      name: { ...currentUser.name, value: e.target.value }
    });
  }
  function handlecommentChange(e) {
    // update currentUser's name with what's currently in the name input box
    setCurrentUser({
      ...currentUser,
      comment: { ...currentUser.comment, value: e.target.value }
    });
  }

  return (
    <div className="cont">
      <div className="box1">
        <div className="boxin1">
          <p style={{ fontWeight: "bold" }}>Share Your Experience</p>

          <form>
            <div>
              <label>Name:</label>
              <input
                margin="dense"
                fullWidth={true}
                value={currentUser.name.value}
                onChange={handleNameChange}
                name="name"
                id="outlined-basic"
                variant="outlined"
              />
              <br />
              <label>Comments:</label>

              <textarea
                margin="dense"
                fullWidth={true}
                value={currentUser.comment.value}
                onChange={handlecommentChange}
                align="left"
                name="comment"
                id="outlined-basic"
                variant="outlined"
              />
            </div>
          </form>

          <button
            type="Post"
            onClick={handleAddNewUser}
            variant="contained"
            color="primary"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="box2">
        <TableData data={usersData} />
      </div>
    </div>
  );
}

export default FormComponent;
