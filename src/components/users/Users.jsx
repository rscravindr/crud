import React from "react";
import UserAdd from "./addUser";
import UserEdit from "./EditUser";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, userDelete } from "../../redux/reducers/userSlice";

const users = () => {
  const { getUserData, userRecordAdded, userRecordUpdated, userRecordDeleted } =
    useSelector((state) => state.user);
  const dispacth = useDispatch();
  const [editId, setEditId] = React.useState(null);

  React.useEffect(() => {
    dispacth(getUsers());
  }, [userRecordAdded, userRecordUpdated, userRecordDeleted]);

  const onHandleEdit = (id) => {
    setEditId(id);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xxl-12">
          <div className="row mt-3">
            <div className="col-xxl-12">
              <button
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Add User
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-xxl-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {getUserData.map((v) => (
                    <tr key={v.id}>
                      <td>{v.id}</td>
                      <td>{v.name}</td>
                      <td>{v.email}</td>
                      <td>{v.gender}</td>
                      <td>{v.status}</td>
                      <td>
                        <button
                          className="btn btn-info"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal1"
                          onClick={() => onHandleEdit(v.id)}
                        >
                          Edit
                        </button>
                        &nbsp;
                        <button
                          className="btn btn-danger"
                          type="button"
                          onClick={() => dispacth(userDelete(v.id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Add User</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <UserAdd />
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="myModal1">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Edit User</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              />
            </div>
            {/* Modal body */}
            <div className="modal-body">
              {editId ? <UserEdit editId={editId} /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default users;
