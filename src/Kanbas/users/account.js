import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import {Link} from "react";
function Account() {
	const { id } = useParams();
	const [account, setAccount] = useState(null);
	const findUserById = async (id) => {
		const user = await client.findUserById(id);
		setAccount(user);
	};

	const navigate = useNavigate();
	const fetchAccount = async () => {
		const account = await client.account();
		setAccount(account);
	};
	const save = async () => {
		await client.updateUser(account);
	};

	const signout = async () => {
		await client.signout();
		navigate("/Kanbas/signin");
	};

  const signIn = async() => {
    navigate("/Kanbas/signin");
  }

	useEffect(() => {
		if (id) {
			findUserById(id);
		} else {
			fetchAccount();
		}
	}, []);
	return (
		<div className="w-50">
			<h1 className="m-4">Account</h1>
      {!account && <button className="btn btn-primary m-4" onClick={signIn} >Sign In</button>}
			{account && (
				<div className="m-4 d-flex flex-wrap">
					<input
						className="form-control w-75 m-2"
						value={account.password}
						onChange={(e) =>
							setAccount({ ...account, password: e.target.value })
						}
					/>
					<input
						className="form-control w-75 m-2"
						value={account.firstName}
						onChange={(e) =>
							setAccount({
								...account,
								firstName: e.target.value,
							})
						}
					/>
					<input
						className="form-control w-75 m-2"
						value={account.lastName}
						onChange={(e) =>
							setAccount({ ...account, lastName: e.target.value })
						}
					/>
					<input
						className="form-control w-75 m-2"
						value={account.dob}
						onChange={(e) =>
							setAccount({ ...account, dob: e.target.value })
						}
					/>
					<input
						className="form-control w-75 m-2"
						value={account.email}
						onChange={(e) =>
							setAccount({ ...account, email: e.target.value })
						}
					/>
					<select
						className="form-select w-25 m-2"
						onChange={(e) =>
							setAccount({ ...account, role: e.target.value })
						}>
						<option value="USER">User</option>
						<option value="ADMIN">Admin</option>
						<option value="FACULTY">Faculty</option>
						<option value="STUDENT">Student</option>
					</select>
					<button className="btn btn-primary m-2" onClick={save}>
						Save
					</button>
          <button className="btn btn-danger m-2" onClick={signout}>
						Signout
					</button>

					<Link to="/Kanbas/users" className="btn btn-warning w-100">
						Users
					</Link>
				</div>
			)}
		</div>
	);
}
export default Account;
