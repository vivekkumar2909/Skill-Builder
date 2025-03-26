import logo from '../assets/linkedin.png';
import { MdDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg z-50 border-b border-gray-800">
      <div className="flex justify-between items-center p-4 width-full pl-20 pr-32 mx-auto">
        <div className="flex items-center">
          <Link to='/home' className='text-3xl font-bold font-serif'>
            {/* <img src={logo} alt="logo" width='40' height='40' className='object-contain' /> */}
            SKILL BUILDER
          </Link>
        </div>
        <div>
          <ul className="flex gap-6 items-center">
            <li>
              <Link
                to='/questions'
                className='bg-gradient-to-r from-gray-700 to-gray-800 text-white py-2 px-4 rounded-md hover:from-gray-600 hover:to-gray-700 transition duration-300'>
                Interview Questions
              </Link>
            </li>
            <li>
              <Link
                to=''
                className='bg-gradient-to-r from-gray-700 to-gray-800 text-white py-2 px-4 rounded-md hover:from-gray-600 hover:to-gray-700 transition duration-300'>
                ChatBot
              </Link>
            </li>
            <li>
              <Link
                to='/login'
                className='bg-gradient-to-r from-gray-700 to-gray-800 text-white py-2 px-4 rounded-md hover:from-gray-600 hover:to-gray-700 transition duration-300'>
                Log In
              </Link>
            </li>
            <li>
              <Link
                to='/signup'
                className='bg-gradient-to-r from-gray-700 to-gray-800 text-white py-2 px-4 rounded-md hover:from-gray-600 hover:to-gray-700 transition duration-300'>
                Sign Up
              </Link>
            </li>
            <li className='text-3xl text-white hover:text-gray-300 transition duration-300'>
              <MdDarkMode />
            </li>
            <li className='text-white font-medium hover:text-gray-300 transition duration-300'>User</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
