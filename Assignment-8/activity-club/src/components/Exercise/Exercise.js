import React from 'react';

const Exercise = ({ exercise }) => {
    console.log(exercise);
    const { activityName, description, forAge, timeRequired, img } = exercise;

    return (
        <div className='lg:w-4/5 shadow-lg rounded-lg bg-slate-200 p-5 relative'>
            <div>
                <img className='w-full h-36 rounded-lg' src={img} alt="" />
                <div className="text-left">
                    <h4 className='my-2 text-lg font-semibold'>{activityName}</h4>
                    <p className='text-gray-600 pb-2'>{description}</p>
                    <p><small className='text-gray-700'>For age: {forAge}</small></p>
                    <p><small className='text-gray-700'>Time required: {timeRequired} minutes</small></p>
                </div>
                <button className='w-full hover:bg-orange-300 bg-orange-400 border-none rounded-lg font-medium py-2 mt-2 absolute bottom-0 left-0'>
                    <p>Add to list</p>
                </button>
            </div>
        </div>
    );
};

export default Exercise;