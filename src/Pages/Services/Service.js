import React from 'react';


const Service = (props) => {
    const { name, img, description } = props.service;
    return (
        <div class="card w-100 bg-base-100 shadow-xl mt-5">
            <figure class="px-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;