import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './userReducer';

export const Home = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }))
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-extrabold my-6 text-center text-gray-800">CRUD APP</h2>
            <div className="flex justify-end mb-6">
                <Link to="/components/Create" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Create +</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-lg rounded-lg">
                    <thead className="bg-gray-900 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left font-semibold">ID</th>
                            <th className="py-3 px-6 text-left font-semibold">Name</th>
                            <th className="py-3 px-6 text-left font-semibold">Email</th>
                            <th className="py-3 px-6 text-left font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-6 text-gray-700">{user.id}</td>
                                <td className="py-4 px-6 text-gray-700">{user.name}</td>
                                <td className="py-4 px-6 text-gray-700">{user.email}</td>
                                <td className="py-4 px-6 flex space-x-3">
                                    <Link to={`/components/Update/${user.id}`} className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300">Edit</Link>
                                    <button onClick={() => handleDelete(user.id)} className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
