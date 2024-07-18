import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { updateData } from '../Redux/CRUD/CrudAction.jsx'


const Update = () => {

    const { id } = useParams()
    const { userList } = useSelector(state => state.crud)
    const updating = userList.find(f => f.id === id)
    const { name, email, address, phone } = updating
    const [updatedName, setUpdatedName] = useState(name)
    const [updatedEmail, setUpdatedEmail] = useState(email)
    const [updatedAddress, setUpdatedAddress] = useState(address)
    const [updatedPhone, setUpdatedPhone] = useState(phone)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    function handleUpdatedData(e){
        e.preventDefault()
        dispatch({
            type: "UPDATE_DATA",
            payload: {
                id:id,
                name:updatedName,
                email:updatedEmail,
                address:updatedAddress,
                phone:updatedPhone
            }
        })
        navigate("/table")
    }
    

    return (
        <>
            <div className="grid grid-cols-3 gap-40">
                <div></div>
                <div>
                    <h1 className="text-2xl font-bold underline mt-20 text-center">Update Data</h1>
                    <form >
                        <div className="grid gap-3 ">

                            <input type="text"
                                className="block p-1.5 border font-medium rounded-lg border-gray-400 mb-2 mt-5"
                                value={updatedName}
                                onChange={e => setUpdatedName(e.target.value)}
                                name="name"
                                placeholder='Enter Name' />

                            <input type="text"
                                className="block p-1.5 border font-medium rounded-lg border-gray-400 mb-2"
                                value={updatedEmail}
                                onChange={e=> setUpdatedEmail(e.target.value)}
                                name="email"
                                placeholder='Enter Email' />

                            <input type="text"
                                className="block p-1.5 border font-medium rounded-lg border-gray-400 mb-2"
                                value={updatedAddress}
                                onChange={e=> setUpdatedAddress(e.target.value)}
                                name="address"
                                placeholder='Enter Address' />

                            <input type="text"
                                className="block p-1.5 border font-medium rounded-lg border-gray-400 mb-2"
                                value={updatedPhone}
                                onChange={e=> setUpdatedPhone(e.target.value)}
                                name="phone"
                                placeholder='Enter Phone' />

                            <button
                                className='focus:outline-none text-white bg-green-700 hover:bg-green-800 
                                focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 
                                py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 
                                dark:focus:ring-green-800' onClick={handleUpdatedData}>UPDATE DATA</button>

                        </div>
                    </form>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Update