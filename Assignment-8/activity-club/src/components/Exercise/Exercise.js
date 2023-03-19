import React from 'react';

const Exercise = ({ exercise, handleAddToList }) => {
    console.log(exercise);
    const { activityName, description, forAge, timeRequired, img } = exercise;

    return (
        <div className='lg:w-4/5 shadow-lg rounded-lg bg-slate-200 p-5 relative'>
            <div>
                <img className='w-full h-36 rounded-lg' src={img} alt="" />
                <div className="text-left mb-10">
                    <h4 className='my-2 text-lg font-semibold'>{activityName}</h4>
                    <p className='text-gray-600 pb-2'>{description.slice(0,100)+ ('...')}</p>
                    <p><small className='text-gray-700'>For age: <span className='font-semibold'>{forAge}</span></small></p>
                    <p><small className='text-gray-700'>Time required: <span className='font-semibold'>{timeRequired} minutes</span></small></p>
                </div>
                <button onClick={()=> handleAddToList(exercise)} className='w-full hover:bg-orange-300 bg-orange-400 border-none rounded-lg font-medium py-2 absolute bottom-0 left-0'>
                    <p>Add to list</p>
                </button>
            </div>
        </div>
    );
};

export default Exercise;