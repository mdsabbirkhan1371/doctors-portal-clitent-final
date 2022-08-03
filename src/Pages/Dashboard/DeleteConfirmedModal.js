import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmedModal = ({ deleteDoctor, setdeleteDoctor }) => {
    const { name, email } = deleteDoctor;
    const handleDeleteDoctor = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: "DELETE",

            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount) {
                    toast.success(`Deleted ${name} successfully.`)
                    setdeleteDoctor(null)
                }
                else {
                    toast.success(`Deleted ${name} successfully.`)
                }
            })
    }
    return (
        <div>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-600">Are you sure Want to delete Mr. {name}</h3>
                    <p class="py-4">If you click on delete then it will permanently deleted from your website and also database,make sure to click on this button.</p>
                    <div class="modal-action">

                        <button onClick={() => handleDeleteDoctor()} class="btn btn-xs btn-error">Delete</button>
                        <label for="my-modal-6" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmedModal;