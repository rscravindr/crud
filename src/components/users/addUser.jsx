import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userAdd } from "../../redux/reducers/userSlice";

const addUser = () => {
  const { userRecordAdded, error, errorMessage } = useSelector(
    (state) => state.user
  );
  const dispacth = useDispatch();
  const [state, setState] = React.useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    dispacth(userAdd(state));
  };
  return (
    <>
      {userRecordAdded ? (
        <div className="alert alert-success">
          <strong>Success!</strong> User Added succesfull
        </div>
      ) : null}
      {error ? (
        <div className="alert alert-danger">
          <strong>Failed!</strong> {errorMessage}
        </div>
      ) : null}
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setState({ ...state, name: e.target.value })}
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            onChange={(e) => setState({ ...state, email: e.target.value })}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
          <label>Gender</label>
          <select
            className="form-control"
            onChange={(e) => setState({ ...state, gender: e.target.value })}
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
                  onChange={(e) =>
                    setState({ ...state, status: e.target.value })
                  }
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
                  onChange={(e) =>
                    setState({ ...state, status: e.target.value })
                  }
                />
                Inactive
                <label className="form-check-label"></label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  );
};

export default addUser;
