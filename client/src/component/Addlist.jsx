import Axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Addlist() {
    const [list, setList] = useState('');
    const Navigate = useNavigate();
    const AddList = async (event) => {
        event.preventDefault();
        const data = {
            list: list
        };
        try {
            await Axios.post('http://localhost:4000/addTodo', data);
            alert('List berhasil ditambahkan')
            Navigate('/')
        } catch (error) {
            alert(error)
        }
    }


    return (
        <div className='max-w-xl mx-auto'>
            <h1 className='text-2xl text-white font-bold text-center my-6 bg-sky-400 shadow-xl rounded-lg'>Todo App Electron x React</h1>
            <Link to={'/'} className='w-[110px] p-2 block m-2 bg-sky-400 rounded-lg text-white font-bold text-center'>
                BACK
            </Link>
            <form onSubmit={AddList} className='max-w-xl mx-auto shadow-lg mt-5 bg-white rounded-xl'>
                <h1 className='text-2xl text-center font-bold text-white bg-sky-400 rounded-t-xl'>Add New List</h1>
                <div className="gap-6 mb-6 md:grid-cols-2 flex flex-col">
                    <div className='w-[400px] mx-auto'>
                        <label className="block mb-2 text-md font-medium text-gray-900 mt-2">List</label>
                        <input
                            value={list}
                            onChange={(e) => setList(e.target.value)}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-400  block w-full p-2.5"
                            placeholder="Add list" />
                    </div>
                    <button type="submit" className="text-white w-[150px] h-[40px] mx-auto bg-sky-400 m-2 rounded-md">Submit</button>
                </div>
            </form>
        </div>

    )
}
