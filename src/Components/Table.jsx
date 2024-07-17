import React from 'react'

const Table = () => {
  return (
    <>
    <div className="grid grid-cols-7 gap-40">
        <div></div>
        <div className='col-span-5'>
            <table className='w-full text-sm text-left dark:text-gray-400 mt-20'>
              <thead className='text-center text-black'>
                <th>S. No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </thead>
              <tbody className='text-gray-500 text-center font-medium'>
                {
                  
                } 
              </tbody>
            </table>
        </div>
        <div></div>
    </div>
    </>
  )
}

export default Table