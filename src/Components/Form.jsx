import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({name:"", email:"", address:"", phone:""})
    const [information, setInformation] = useState([])

    function handleChange(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        setInformation([...information,formData])
        
    }
  return (
    <>
    <div className="grid grid-cols-3 gap-40">
        <div></div>
        <div>
            <h1 class="text-2xl font-bold underline mt-20 text-center">Form</h1> 
    <form >
    <div className="grid gap-3 ">

        <input type="text" 
        className="block p-1.5 border font-medium rounded-lg border-gray-400 mb-2 mt-5" 
        value={formData.name}
        onChange={handleChange}
        name="name"
        placeholder='Enter Name'/>

        <input type="text" 
        className="block p-1.5 border font-medium rounded-lg border-gray-400 mb-2" 
        value={formData.email}
        onChange={handleChange}
        name="email"
        placeholder='Enter Email'/>

        <input type="text" 
        className="block p-1.5 border font-medium rounded-lg border-gray-400 mb-2" 
        value={formData.address}
        onChange={handleChange}
        name="address"
        placeholder='Enter Address'/>

        <input type="text" 
        className="block p-1.5 border font-medium rounded-lg border-gray-400 mb-2" 
        value={formData.phone}
        onChange={handleChange}
        name="phone"
        placeholder='Enter Phone'/>

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