import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const Add_Doctor = () => {

    /**
       * 3 ways to store images
       * 1. Third party storage //Free open public storage is ok for Practice project 
       * 2. Your own storage in your own server (file system)
       * 3. Database: Mongodb 
       * 
       * YUP: to validate file: Search: Yup file validation for react hook form
      */

    //  image file storage korar jonno 

    const imgStorageKey = "d4202058b502af3acd2fc3262de367e2";


    // from react form hook 
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setServices(data)

            })
    }, [])
    let signInError;
    // from react hooks form 
    const onSubmit = async (data) => {
        // console.log(data)

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // send your data base img file 
                    fetch('http://localhost:5000/doctor', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)

                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log('doctor', inserted)
                            if (inserted.insertedId) {
                                toast.success("Doctor Added Successfully");
                                reset()
                            }
                            else {
                                toast.error("Doctor is not added")
                            }
                        })


                }

            })


    }



    return (
        <div>
            <h3 className='my-10 font-bold text-center text-green-500'>Add A Doctor Here!!</h3>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>


                    {/* name input field  */}

                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="name"
                            className="w-full max-w-xs input input-bordered"

                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                },
                                pattern: {

                                    message: 'Provide a valid email address'
                                }
                            })}

                        />

                        {/* showing error  */}

                        <label className="label">
                            {errors.name?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.name.message}</span>}
                        </label>

                    </div>

                    {/* email input field */}
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="email"
                            className="w-full max-w-xs input input-bordered"

                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email address'
                                }
                            })}

                        />

                        {/* showing error  */}

                        <label className="label">
                            {errors.email?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                        </label>

                    </div>


                    {/* specialty input  */}


                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>

                        {/* usign daisy select option  */}

                        <select {...register("specialty")} class="select w-full max-w-xs input input-bordered">

                            {
                                services.map(service =>

                                    < option
                                        key={service._id}
                                        service={service}
                                    > {service.name}</option>)

                            }

                        </select>

                    </div>

                    {/* photo url field  */}
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="file"

                            className="w-full max-w-xs input input-bordered"

                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "Image is required"
                                }
                            })}

                        />

                        {/* showing error  */}

                        <label className="label">
                            {errors.name?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.name.message}</span>}
                        </label>

                    </div>

                    {/* login submit field  */}


                    {signInError}

                    <input type="submit" value="Add Now" className="w-full max-w-xs text-white input input-bordered bg-accent" />

                </form>
            </div >
        </div >
    );
};

export default Add_Doctor;