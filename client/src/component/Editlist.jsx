import Axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
export default function Editlist() {
    const [list, setList] = useState([]);
    const [Progress, setProgress] = useState([]);
    const [check, setCheck] = useState(Boolean);
    const { id } = useParams();
    const Navigate = useNavigate();

    const GetListbyID = async () => {
        const Response = await Axios.get(`http://localhost:4000/edit/${id}`);
        setList(Response.data.list);
    }

    const EditList = async (event) => {
        event.preventDefault();
        await Axios.patch(`http://localhost:4000/edit/${id}`, {
            list: list,
            Progress: Progress
        });
        alert('List Berhasil Di Edit');
        Navigate('/');
    }
    useEffect(() => {
        GetListbyID();
    },[]);

    useEffect(() => {
        if (check === true) {
            setProgress('Y');
        } else {
            setProgress('N');
        }
    }, [check])

    return (
        <div className='max-w-xl mx-auto'>
            <h1 className='text-2xl font-bold text-center mt-2'>EDIT LIST</h1>
            <Link to={'/'} className='w-[110px] p-2 block m-2 bg-teal-400 rounded-lg text-white font-bold text-center'>
                BACK
            </Link>
            <form onSubmit={EditList} className='max-w-xl mx-auto shadow-lg mt-5 '>
                <div className="gap-6 mb-6 md:grid-cols-2 flex flex-col">
                    <div className='w-[400px] mx-auto'>
                        <label className="block mb-2 text-sm font-medium text-gray-900">List</label>
                        <input
                            value={list}
                            onChange={(e) => setList(e.target.value)}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-400  block w-full p-2.5"
                            placeholder="Edit list" 
                            required/>
                    </div>
                    <div className='w-[400px] mx-auto'>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Progress</label>
                        <div className='flex gap-3 items-center'>
                            <h6 className='text-sm text-neutral-600'>Done</h6>
                            <input
                                type="checkbox"
                                onChange={(e) => setCheck(e.target.checked)}
                                className='rounded-xl w-[20px] h-[20px] text-teal-500 focus:ring-transparent' />
                        </div>
                    </div>
                    <button type="submit" className="text-white w-[150px] h-[40px] mx-auto bg-green-400 m-2 rounded-md">Submit</button>
                </div>
            </form>
        </div>

    )
}
