import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../assets/list.png'
export default function Empetylist() {
    return (
        <div className='max-w-xl mx-auto'>
            <h1 className='text-2xl text-white font-bold text-center my-6 bg-sky-400 shadow-xl rounded-lg'>Todo App Electron x React</h1>
            <Link to={'Add'} className='w-[110px] p-2 block m-2 bg-sky-400 shadow-xl rounded-lg text-white font-bold text-center'>ADD LIST</Link>
            <div className='max-w-xl mx-auto bg-white shadow-xl mt-5 h-[350px] p-2 rounded-lg'>
                <h1 className='text-3xl font-bold text-neutral-600 text-center'>Empty List ........!!!</h1>
                <img src={Image} alt="list" className='object-contain w-[300px] mx-auto img' />
            </div>
        </div>
    )
}
