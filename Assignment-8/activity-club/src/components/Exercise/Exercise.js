import React from 'react';

const Exercise = () => {
    return (
        <div className='w-[250px] h-[430px] shadow-md rounded-lg p-10'>
            <div className=''>
                <img src="" alt="" />
                <div className="">
                    <h4 className='my-2'>Yoga</h4>
                    <p className='text-gray-500'>Yoga is essentially a spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body.</p>
                    <p><small>For age: 20-25</small></p>
                    <p><small>Time required: 20 minutes</small></p>
                </div>
                <button className='w-full bg-yellow-600 border-none rounded-lg font-medium '>
                    <p>Add to list</p>
                </button>
            </div>
        </div>
    );
};

export default Exercise;