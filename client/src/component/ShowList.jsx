import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useEffect } from 'react';
import Empetylist from './empetylist';

export default function ShowList() {
    const [list, setList] = useState([]);

    const GetList = async () => {
        try {
            const List = await Axios.get('http://localhost:4000/list');
            const Response = List.data;
            setList(Response);
        } catch (error) {
            setList([]);
        }
    }
    const DeleteList = async (id) => {
        await Axios.delete(`http://localhost:4000/delete/${id}`);
        GetList();
    }

    useEffect(() => {
        GetList();
    }, []);
    return (
        <>
        { list.length === 0 ? 
            <Empetylist/>
            :
            <div className='max-w-xl mx-auto'>
                <h1 className='text-2xl text-white font-bold text-center my-6 bg-sky-400 shadow-xl rounded-lg'>Todo App Electron x React</h1>
                <Link to={'Add'} className='w-[110px] p-2 block m-2 bg-sky-400 rounded-lg text-white font-bold text-center'>ADD LIST</Link>
                <div className='max-w-xl mx-auto shadow-lg rounded-xl mt-5'>
                    <div className="overflow-x-auto relative rounded-xl">
                        <table className="w-full text-sm text-gray-500 text-center">
                            <thead className="text-xs text-white uppercase bg-sky-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        List
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Progress
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((items, index) => {
                                        return (
                                            <tr key={index} className="bg-white border-b">
                                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                    {items.list}
                                                </th>
                                                {items.Progress === "N" ?
                                                    <td className="py-4 px-6">
                                                        <span className='text-sm border-2 border-[red] rounded-lg p-2'>In Progress</span>
                                                    </td> :
                                                    <td className="py-4 px-6">
                                                        <span className='text-sm border-2 border-[green]/80 rounded-lg p-2'>Done</span>
                                                    </td>
                                                }
                                                <td className="py-4 px-6 flex justify-center gap-3">
                                                    <Link to={`Edit/${items._id}`} className='w-[60px] pt-2 bg-sky-400 text-white rounded-lg'>Edit</Link>
                                                    <button onClick={() => DeleteList(items._id)} className='w-[60px] h-[35px] bg-red-500 text-white rounded-lg'>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        }
        </>
    )
}
