import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createData } from '../Redux/CRUD/CrudAction.jsx'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [formInfo, setFormInfo] = useState({ name: "", email: "", address: "", phone: "" })
    const [information, setInformation] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { name, email, address, phone } = formInfo

    function handleChange(e) {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!formInfo.name || !formInfo.email || !formInfo.address || !formInfo.phone) {
            alert("All fields are mandatory...")
        }
        else {
            dispatch(createData({
                id: crypto.randomUUID(),
                name,
                email,
                address,
                phone
            }))
        }
        navigate("/table")
        setInformation([...information, formInfo])
        console.log(information)
    }
    return (
        <>
            <div className="grid grid-cols-3 gap-40">
                <div></div>
                <div>
                    <h1 className="text-2xl font-bold underline mt-20 text-center">Form</h1>
                    <form >
                        <div className="grid gap-3 ">

                            <input type="text"
                                className="block p-1.5 border font-medium rounded-lg border-gray-400 mb-2 mt-5"
                                value={formInfo.name}
                                onChange={handleChange}
                                name="name"
                                placeholder='Enter Name' />

                            <input type="text"
                                className="block p-1.5 border font-medium rounded-lg border-gray-400 mb-2"
                                value={formInfo.email}
                                onChange={handleChange}
                                name="email"
                                placeholder='Enter Email' />

                            <input type="text"
                                className="block p-1.5 border font-medium rounded-lg border-gray-400 mb-2"
                                value={formInfo.address}
                                onChange={handleChange}
                                name="address"
                                placeholder='Enter Address' />

                            <input type="text"
                                className="block p-1.5 border font-medium rounded-lg border-gray-400 mb-2"
                                value={formInfo.phone}
                                onChange={handleChange}
                                name="phone"
                                placeholder='Enter Phone' />

                            <button
                                className='text-white bg-gradient-to-br from-purple-600 
                                to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                                focus:ring-blue-100 dark:focus:ring-blue-800 font-medium rounded-lg 
                                text-sm px-5 py-2.5 text-center mb-2' onClick={handleSubmit}>Submit Data</button>

                        </div>
                    </form>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Form