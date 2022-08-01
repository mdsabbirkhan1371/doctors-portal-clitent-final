import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';

const My_Users = () => {

    // for react query 
    // const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
    //     method: 'GET',
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => res.json()));
    // if (isLoading) {
    //     <Loading></Loading>
    // }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    if (users) {
        <Loading></Loading>
    }

    return (
        <div>
            <h3 className='my-10 font-bold text-center text-green-500'>My All Users: {users.length}</h3>


            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) => <UsersRow
                            key={user._id}
                            user={user}
                            index={index}
                        ></UsersRow>)
                    }
                </table>
            </div>
        </div>

    )


};

export default My_Users;