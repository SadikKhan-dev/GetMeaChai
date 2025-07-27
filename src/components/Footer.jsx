import React from 'react'

const Footer = () => {
    return (
        <div className='bottom-0 bg-slate-800 text-white flex justify-center items-center flex-col p-0'>
  
            <div className="logo font-bold text-white text-2xl">
                <span className="text-green-500">&lt;</span>
                <span>Pass</span>
                <span className="text-green-500">OP/&gt;</span>
            </div>
            <p className='flex justify-center items-center'>Created With <img className='w-8 ml-3 mr-3' src="icon/heart.png" alt="" /> by CodeWithHarry</p>
        </div>
    )
}

export default Footer
