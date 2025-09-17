"use client"
import React, { useReducer, useState } from 'react';
const intialize = [];

const reducer = (state, action) => {
    switch (action.type) {
        case "ADDLIST":
            return [...state,{id:Date.now(), text:action.payload ,completed:false}]
        case "TOGLELIST":
            return state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo );
        case "DELET":
            return state.filter((todo)=>todo.id !== action.payload)
        default:
            return state;
    }
}
const Lists = () => {

    const [input, setInput] = useState("");
    const [todos, dispatch] = useReducer(reducer, intialize);
        const handleAdd = () => {
        if (input.trim() === "") return; 
        dispatch({ type: "ADDLIST", payload: input });
        setInput("")
    }
    return (
        <div className='flex justify-center items-center pt-[150px] flex-col '>
            <h2 className='text-[25px] m-[30px] text-green-600'>Todo Lists</h2>
            <div className='mb-[20px]'>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='add todo list here' className='text-[23px] border-[3px] border-green-700v rounded-[10px] py-[5px] px-[20px] mr-[20px]'/> 
                <button onClick={handleAdd} className='rounded-[10px] text-white  text-[23px] bg-green-500 px-[15px] py-[5px]'>ADD</button>
            </div>
            <ul >
                {todos.map((todo) => {
                    return <li key={todo.id} className='bg-gray-200 rounded-[5px] p-[10px] text-[17px] mb-[10px] w-full '>
                        <span onClick={() =>
                            dispatch({type:"TOGLELIST" , payload: todo.id })
                        } className='text-[20px] pr-[30px] text-gray-600'>{todo.text}</span>
                            <button onClick={()=>dispatch({type:"DELET" , payload: todo.id})} className='rounded-[10px] text-[17px] text-white bg-red-500  px-[15px] py-[5px]'>DELET</button> 
                    </li>
                })}
            </ul>
        
        </div>
    );
}

export default Lists;
