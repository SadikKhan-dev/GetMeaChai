// import React from 'react';

// const Navbar = () => {
//     return (
//         <div className="navbar">
//             <nav className="bg-slate-800 text-white ">
//                 <div className="container flex justify-between items-center px-4 py-5 h-14">

//                     {/* Logo Section */}
//                     <div className="logo font-bold text-white text-2xl">
//                         <span className="text-green-500">&lt;</span>
//                         <span>Pass</span>
//                         <span className="text-green-500">OP/&gt;</span>
//                     </div>

//                     {/* Navigation Links */}
//                     <ul className="flex gap-4">
//                         <button className="flex justify-center items-center bg-green-800 p-2 pl-3 pr-3 rounded-full">
//                             <img className="filter invert-1 bg-white rounded-full w-9 font-bold " src="icon/github.svg" alt="" />
//                             <span className="text-[20px] font-bold ml-5">GitHub</span>
//                         </button>

//                     </ul>
//                 </div>
//             </nav>



//         </div>




//     );
// };

// export default Navbar;

import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="bg-slate-800 text-white">
                <div className="container mx-auto flex justify-between items-center px-4 py-5 h-14">

                    {/* Logo Section */}
                    <div className="logo font-bold text-white text-2xl">
                        <span className="text-green-500">&lt;</span>
                        <span>Pass</span>
                        <span className="text-green-500">OP/&gt;</span>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex gap-4">
                        <button className="flex justify-center items-center bg-green-800 p-2 pl-3 pr-3 rounded-full">
                            <img className="filter invert-1 bg-white rounded-full w-9 font-bold" src="icon/github.svg" alt="GitHub" />
                            <span className="text-[20px] font-bold ml-5 hidden md:inline">GitHub</span>
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;