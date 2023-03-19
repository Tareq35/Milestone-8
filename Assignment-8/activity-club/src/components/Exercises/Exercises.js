import React, { useEffect, useState } from 'react';
import './Exercises.css'
import Exercise from '../Exercise/Exercise';
import List from '../List/List';

const Exercises = () => {
    const [exerciseItem, setExerciseItem] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setExerciseItem(data))
    }, [])

    const handleAddToList = (exercise) => {
        const newList = [...list, exercise];
        setList(newList);
    }



    return (
        <div className='my-10'>
            <h1 className='text-2xl font-semibold text-left px-20 pb-10
            '>Select today's exercise</h1>
            <div className='exercises mx-20 mb-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        exerciseItem.map(exercise => <Exercise
                            key={exercise.id}
                            exercise={exercise}
                            handleAddToList={handleAddToList}

                        ></Exercise>)
                    }
                </div>
                <div className='bg-slate-200 rounded p-2'>
                    <List
                        list={list}
                    ></List>
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-bold my-3'>Some Important Questions</h1>
                <div className='mx-[30vh] lg:mx-[40vh] text-left'>
                    <div className='mb-5'>
                        <h4 className='text-lg font-semibold'>Q-1: How does react work?</h4>
                        <p><span className='font-semibold'>Answer: </span>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                    </div>
                    <div className='mb-5'>
                        <h4 className='text-lg font-semibold'>Q-2: What is the difference between props and state?</h4>
                        <p><span className='font-semibold'>Answer: </span>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
                    </div>
                    <div className='mb-5'>
                        <h4 className='text-lg font-semibold'>Q-3: What does useEffect do besides data load?</h4>
                        <p><span className='font-semibold'>Answer: </span>By using useEffect , you tell React that your component needs to do something after render. React will remember the function you passed well refer to it as our “effect”, and call it later after performing the DOM updates.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exercises;