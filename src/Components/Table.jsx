import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteData } from '../Redux/CRUD/CrudAction.jsx'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Table = () => {
  const dispatch = useDispatch()
  const { userList } = useSelector(state => state.crud)
  const navigate = useNavigate()

  if (userList.length === 0) {
    return (
      <>
        <div className='flex flex-wrap justify-center items-center flex-col h-svh'>
          <h3 className='font-serif text-3xl text-gray-800'>Please add data</h3>
          <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 
          hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 
          shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm
           px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => navigate("/")}>Add Data</button>
        </div>
      </>
    )
  }

  function handleDelete(index) {
    dispatch(deleteData(index))
  }

  return (
    <>
      <div className='bg-white-300'>
        <div className="grid grid-cols-7 gap-40">
          <div></div>
          <div className='col-span-5'>
            <table className='w-full text-sm text-left mt-20'>
              <thead className='text-center text-gray-600 border-b font-medium border-black/20'>
                <th className="px-6 py-4">S.No.</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Address</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Update</th>
                <th className="px-6 py-4">Delete</th>
              </thead>
              <tbody className='text-black-500 text-center font-medium'>
                {
                  userList.map((user, index) => {
                    return (
                      <tr key={index} className='border-b border-black/20'>
                        <td className="px-3 py-2">{index + 1}</td>
                        <td className="px-3 py-2">{user.name}</td>
                        <td className="px-3 py-2">{user.email}</td>
                        <td className="px-3 py-2">{user.address}</td>
                        <td className="px-3 py-2">{user.phone}</td>
                        <td className="px-3 py-2">
                          <Link to ={`/update/${user.id}`}><button className='focus:outline-none text-white bg-green-700 
                          hover:bg-green-800  focus:ring-green-300 font-medium rounded-lg text-sm 
                          px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 '>UPDATE</button></Link></td>
                        <td className="px-3 py-2">
                          <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 
                         focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 
                         dark:hover:bg-red-700 dark:focus:ring-red-900'
                            onClick={() => handleDelete(index)}>DELETE</button></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <div className='items-center justify-center flex-wrap flex mt-5'>
              <button className='bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4
               border-blue-800 hover:border-blue-600 rounded'
                onClick={() => navigate("/")}>
                ADD MORE DATA
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Table