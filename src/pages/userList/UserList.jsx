import React from 'react'
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../redux/apiCalls";

export default function UserList() {

  const dispatch = useDispatch()

  const users = useSelector((state) => state.user.users)

  useEffect(()=>{

    getUsers(dispatch)

  },[dispatch])
  // const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    deleteUser(id,dispatch)
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar || "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-26.jpg"} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
   
  
    {
      field: "action",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => {
        return (
          <>
           
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        getRowId={(row) => row._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
