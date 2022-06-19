import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
	const [data, setData] = useState(userRows);
	const handleDelete = (id) => {
		setData(data.filter((row) => row.id !== id));
	};
	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{
			field: "user",
			headerName: "User",
			width: 150,
			renderCell: (params) => {
				return (
					<div className="userCell">
						<img className="userCellImg" src={params.row.avatar} alt="" />
						{params.row.username}
					</div>
				);
			},
		},
		{ field: "email", headerName: "Email", width: 150 },
		{ field: "status", headerName: "Status", width: 150 },
		{ field: "transaction", headerName: "Transaction Volume", width: 150 },
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/user/" + params.row.id}>
							<button className="userListEdit">Edit</button>
						</Link>
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
				disableSelectionOnClick
				rows={data}
				columns={columns}
				pageSize={6}
				checkboxSelection
			/>
		</div>
	);
}
