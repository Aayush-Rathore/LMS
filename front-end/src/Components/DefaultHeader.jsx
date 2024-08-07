//import { UserCircleIcon } from '@heroicons/react/outline';

function DefaultHeader()
{
    return(
        <>
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
                 {/* Left Side - Logo and Mega Menus */}
        <div className="flex items-center space-x-4">
        <div className="text-white text-2xl font-bold">Logo</div>
        </div>
            {/* Right Side - Search Box and Login */}
        <div className="flex items-center space-x-4">
        <div className="relative">
             <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
         
            {/* <SearchIcon className="absolute right-2 top-2 h-5 w-5 text-gray-400" /> */}
          
        </div>
        <button className="text-white flex items-center space-x-2 hover:bg-[gray] p-3 border-radius-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
            <span>Login</span>
          </button>
        </div>
        </div>
        
        </nav>
        </>
        
    )
}

export default DefaultHeader;


// 
    //   
   
    //      
    //       <div className="relative">
            // <button
            //   onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            //   className="text-white flex items-center space-x-2"
            // >
            //   <MenuIcon className="h-6 w-6" />
            //   <span>Menu</span>
            // </button>
    //         {megaMenuOpen && (
    //           <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg">
    //             <div className="p-4">
    //               <h2 className="text-lg font-bold">Mega Menu</h2>
    //               <ul className="mt-2 space-y-2">
    //                 <li><a href="#" className="block text-gray-700">Link 1</a></li>
    //                 <li><a href="#" className="block text-gray-700">Link 2</a></li>
    //                 <li><a href="#" className="block text-gray-700">Link 3</a></li>
    //               </ul>
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     </div>

        
    //   </div>
    // </nav>