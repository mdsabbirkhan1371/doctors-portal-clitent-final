import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">

            <div class="card-body">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi consequuntur delectus ex optio facilis, ab unde soluta animi aspernatur dolores consectetur, laboriosam enim, error voluptas? Ab nam accusantium dolore! Porro illo quos necessitatibus autem deleniti ab sed consequuntur. Minus!</p>
                <div className='flex items-center'>
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 m-3">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl'>{review.name}</h3>
                        <p>{review.country}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;