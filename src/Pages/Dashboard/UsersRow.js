import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, index }) => {
    const { email, role } = user;
    // const [users, setUsers] = useState([]);
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed To Make An Admin Because You Are not An Admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success("Successfully Made An Admin");
                }
            })
    }
    return (
        <tbody>
            <tr className='hover'>
                <th>{index + 1}</th>
                <td>{email}</td>
                <td>{role !== "admin" && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
                <td><button className="btn btn-xs">Remove</button></td>
            </tr>
        </tbody>
    );
};

export default UsersRow;

