

import { Dark, HighBrightness, Mobile } from '../../assets/svgs';
import * as logo from '../../assets/logo.png'
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme';
import { ViewContext } from '../context/View';
import { NavBarProps } from './NavBar';



function NavTopBar({props: {dropdown, open}}: NavBarProps) {

  const perspective = useContext(ViewContext)
  const {theme, toggleTheme} = useContext(ThemeContext)


  return (
    // {/* NavBar */}
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700" data-theme={theme.isDark ? 'myDark' : 'myLight'}>
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between flex-1 rtl:justify-end">

            {/* Menu button & Logo*/}
            <div className='flex items-center'>
              <button 
                onClick={() => open('menu')}
                type="button" 
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hiddenDISABLED hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                  <span className="sr-only">Open sidebar</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
              </button>
              <a href="https://denzariu.github.io" className="flex ms-2 md:me-24">
                <img src={logo.default} className="h-8 me-3 bg-gray-100 rounded-md p-1" alt="Denzariu Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-gray-700 dark:text-white">Demozariu</span>
              </a>
            </div>

            {/* Perspective & Theme Buttons */}
            <div className='flex items-center'>
              <button className={`hidden sm:flex bg-primary text-primary-content rounded-full p-1 mx-2`}
                onClick={perspective.toggleView}
              >
                <Mobile color='stroke-primary-content' height={24} width={24}/>
              </button>
              <button className={`bg-primary text-primary-content rounded-full p-2`}
                onClick={toggleTheme}
              >
                {theme.isDark ? 
                  <Dark height={18} width={18} color='stroke-primary-content fill-primary-content'/>
                  :
                  <HighBrightness height={18} width={18} color='fill-primary-content'/>
                  
                }
              </button>
            </div>
          </div>

          {/* User Icon */}
          <div className="">
            <div className="flex items-center ms-3 w-8 h-8">
                <button type="button" 
                  className="flex text-sm w-8 h-8 bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
                  onClick={() => open('user')}
                >
                  <span className="sr-only">Open user menu</span>
                  <img className="w-8 h-8 rounded-full" src="https://media.licdn.com/dms/image/D4D03AQFJOVwicsV57A/profile-displayphoto-shrink_100_100/0/1702470747169?e=1717632000&v=beta&t=y3yKaIkadQYqoG26wUCYxD61sOw3pkK2vR87-fqAPRE" alt="User Photo"/>
                </button>
              <div className={`z-50 ${dropdown.user ? "" : "hidden"} -mx-[11.5rem] mt-72 sm:-mx-[13rem] text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                id="dropdown-user"
              >
                <div className="px-4 py-3 max-w-48 sm:max-w-64">
                  <p className="text-sm text-gray-900 dark:text-white">
                    Sorin Sorescu
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate ... dark:text-gray-300">
                    sorin.sorescu@denzariu.com
                  </p>
                </div>
                <ul className="py-1">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavTopBar
