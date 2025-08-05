import React from 'react'

const navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-200 py-2'>
        <div className="logo">
            <span className='font-bold text-3xl mx-9'>
                TaskX
            </span>
        </div>
     <ul className="flex gap-7 mx-9 ">
        <li className='cursor-pointer hover:font-bold transition-all duration-55'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-55'>TASKS</li>
     </ul>
    </nav>
  )
}

export default navbar
