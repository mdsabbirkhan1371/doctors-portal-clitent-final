import React, { useEffect, useState } from 'react';
import DeleteConfirmedModal from './DeleteConfirmedModal';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {

    const [doctors, setDoctors] = useState([])
    const [deleteDoctor, setdeleteDoctor] = useState(null)

    useEffect(() => {
        fetch('https://my-docorts-portal-site.herokuapp.com/doctor', {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
            })
    }, [])
    return (
        <div>
            <h3 className='my-10 font-bold text-center text-green-500'>Manage Doctors Here! : {doctors.length}</h3>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avater</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorsRow
                                doctor={doctor}
                                key={doctor._id}
                                index={index}
                                setdeleteDoctor={setdeleteDoctor}
                            ></DoctorsRow>)
                        }
                    </tbody>

                </table>
            </div>
            {deleteDoctor && <DeleteConfirmedModal
                deleteDoctor={deleteDoctor}
                setdeleteDoctor={setdeleteDoctor}
            ></DeleteConfirmedModal>}
        </div>
    );
};

export default ManageDoctors;