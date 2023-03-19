import React, { useEffect, useState } from 'react';
import './Exercises.css'
import Exercise from '../Exercise/Exercise';
import List from '../List/List';

const Exercises = () => {
    const [exerciseItem, setExerciseItem] = useState([]);

    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setExerciseItem(data))
    }, [])
    return (
        <div className='my-10'>
            <h1 className='text-2xl font-semibold text-left p-10'>Select today's exercise</h1>
            <div className='exercises mx-10'>
                <div className='grid grid-cols-3'>
                    {
                        exerciseItem.map(exercise => <Exercise
                            key={exercise.id}
                            
                        ></Exercise>)
                    }
                </div>
                <div className='h-60 bg-slate-500'>
                    <List></List>
                </div>
            </div>
        </div>
    );
};

export default Exercises;