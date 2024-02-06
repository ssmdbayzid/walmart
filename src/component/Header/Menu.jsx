import React from 'react'

const Menu = () => {
  return (
    <div className="p-4">
        <h1 className="text-2xl font-semibold">Sidebar</h1>
        <ul className="mt-4">
          <li className="mb-2">
            <a href="#" className="block hover:text-indigo-400">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:text-indigo-400">
              About
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:text-indigo-400">
              Services
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:text-indigo-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
  )
}

export default Menu