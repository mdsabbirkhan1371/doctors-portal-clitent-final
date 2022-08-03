import React from 'react';

const DoctorsRow = ({ doctor, index, setdeleteDoctor }) => {
    const { name, specialty, img } = doctor;

    return (

        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-20 rounded">
                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>

            <td>
                <label onClick={() => setdeleteDoctor(doctor)} for="my-modal-6" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>

    );
};

export default DoctorsRow;