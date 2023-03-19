import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import profilePic from '../../images/pp.png'

const List = (props) => {
    const {list} = props;

    const [breakTime, setBreakTime] = useState(localStorage.getItem("break-time"))

    let total = 0;
    for( const exercise of list){
        total = total + exercise.timeRequired;
    }

    const notify = () => toast('Congratulation! you are done with your activity');

    const handleBreakTime = (value) => {
        setBreakTime(value)
        localStorage.setItem('break-time', value)
    }

    return (
        <div className='sticky top-0'>
            <div className='flex mb-10 items-center justify-left'>
                <div className='mr-5'>
                    <img className='w-10 rounded-full' src={profilePic} alt="" />
                </div>
                <div className='text-left'>
                    <h4 className='text-lg font-semibold'>Tareq Islam</h4>
                    <p><small className='text-slate-600'>Dhaka, Bangladesh</small></p>
                </div>
            </div>

            <div className='flex justify-around bg-slate-100 rounded-lg py-2 mb-10'>
                <div>
                    <p><span className='text-xl font-semibold'>82</span> <small className='text-slate-600'>kg</small></p>
                    <p>Weight</p>
                </div>
                <div>
                    <p><span className='text-xl font-semibold'>5.9</span> <small className='text-slate-600'>feet</small></p>
                    <p>Height</p>
                </div>
                <div>
                    <p><span className='text-xl font-semibold'>25</span> <small className='text-slate-600'>years</small></p>
                    <p>Age</p>
                </div>
            </div>

            <div className='mb-10'>
                <h4 className='text-lg font-semibold text-left mb-3'>Add A Break</h4>
                <div className='flex justify-around bg-slate-100 py-4 rounded-lg'>
                    <button onClick={()=> handleBreakTime('2 min')} className='bg-orange-400 hover:bg-orange-300 p-3 rounded-full'><small>2 m</small></button>

                    <button onClick={()=> handleBreakTime('5 min')} className='bg-orange-400 hover:bg-orange-300 p-3 rounded-full'><small>5 m</small></button>

                    <button onClick={()=> handleBreakTime('8 min')} className='bg-orange-400 hover:bg-orange-300 p-3 rounded-full'><small>8 m</small></button>

                    <button onClick={()=> handleBreakTime('10 min')} className='bg-orange-400 hover:bg-orange-300 px-3 rounded-full'><small>10m</small></button>

                    <button onClick={()=> handleBreakTime('15 min')} className='bg-orange-400 hover:bg-orange-300 px-3 rounded-full'><small>15m</small></button>
                </div>

                <div className=''>
                    <h4 className='text-lg font-semibold text-left mt-10 mb-5'>Exercise Details</h4>

                    <div className='text-left mx-10'>
                        <p className='font-semibold bg-slate-100 px-4 py-2 mb-5 rounded-lg'>Exercise time: {total}m</p>

                        <p className='font-semibold bg-slate-100 px-4 py-2 rounded-lg'>Break time: {breakTime}</p>
                    </div>

                    <button onClick={notify} className='hover:bg-orange-300 bg-orange-400 border-none rounded-lg font-medium px-9 py-2 my-10'><p>Activity Completed</p></button>
                    <Toaster />
                </div>

            </div>

        </div>
    );
};

export default List;