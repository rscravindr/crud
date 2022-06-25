import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userUpdate, userEdit } from "../../redux/reducers/userSlice";

const addUser = ({ editId }) => {
  const dispacth = useDispatch();
  const { editUserData, userRecordUpdated, error, errorMessage } = useSelector(
    (state) => state.user
  );
  // const [state, setState] = React.useState({
  //   name: "",
  //   email: "",
  //   gender: "",
  //   status: "",
  // });
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [status, setStatus] = React.useState("");
  React.useEffect(() => {
    dispacth(userEdit(editId));
  }, [editId]);

  React.useMemo(() => {
    console.log("memo");
    setName(editUserData.name);
    setEmail(editUserData.email);
    setGender(editUserData.gender);
    setStatus(editUserData.status);
  }, [editUserData]);

  const onUpdate = (e) => {
    e.preventDefault();
    const payload = {
      editId,
      name,
      email,
      gender,
      status,
    };
    //console.log(payload);
    dispacth(userUpdate(payload));
  };
  return (
    <>
      {userRecordUpdated ? (
        <div className="alert alert-success">
          <strong>Success!</strong> User Update succesfull
        </div>
      ) : null}
      {error ? (
        <div className="alert alert-danger">
          <strong>Failed!</strong> {errorMessage}
        </div>
      ) : null}
      <form onSubmit={onUpdate}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            /*  value={
              getUser && getUser.name !== state.name ? state.name : getUser.name
            } */
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
          <label>Gender</label>
          <select
            className="form-control"
            value={gender}
            // onChange={(e) => setState({ ...state, gender: e.target.value })}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Status</label>
          <div className="row">
            <div className="col-xxl-6">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio1"
                  name="optradio"
                  value="active"
                  checked={status === "active"}
                  onChange={(e) => setStatus(e.target.value)}
                  // onChange={(e) =>
                  //   setState({ ...state, status: e.target.value })
                  // }
                />
                Active
                <label className="form-check-label"></label>
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio1"
                  name="optradio"
                  value="inactive"
                  checked={status === "inactive"}
                  onChange={(e) => setStatus(e.target.value)}
                  // onChange={(e) =>
                  //   setState({ ...state, status: e.target.value })
                  // }
                />
                Inactive
                <label className="form-check-label"></label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </>
  );
};

export default addUser;
