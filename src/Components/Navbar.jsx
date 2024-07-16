import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div class="hidden w-full md:block md:w-auto">

      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black-100 
      rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 
      md:border-0 md:bg-white dark:bg-black md:dark:bg-black-900 dark:border-black-700">

        <li>
          <Link to="/" 
          class="block py-2 px-3 text-white rounded md:bg-transparent 
          md:text-gray-700 md:hover:text-blue-500 md:p-0 dark:text-white " 
          aria-current="page">Form</Link>
        </li>

        <li>
          <Link to="/table" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
          md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white 
          md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
          md:dark:hover:bg-transparent">Table</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar