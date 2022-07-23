import React from 'react';


const Service = (props) => {
    const { name, img, description } = props.service;
    return (
        <div className="card w-100 bg-base-100 shadow-xl mt-5">
            <figure className="px-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;