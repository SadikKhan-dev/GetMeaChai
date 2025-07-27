// import React from 'react'
import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([])


  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])

  const savePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
      console.log([...passwordArray, form])
      setform({ site: "", username: "", password: "" })

      toast('Password saved!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast('Error: Password not saved!');
    }
  };


  const editPassword = (id) => {
    console.log("Editing password with id ", id);

    // Selected password को form में सेट करें
    const selectedPassword = passwordArray.find((item) => item.id === id);
    setform(selectedPassword);
  };


  const deletePassword = (id) => {
    console.log("Deleting password with id ", id);
    let c = confirm("Do you really want to delete this password?");
    if (c) {
      const filteredPasswords = passwordArray.filter((item) => item.id !== id);
      setPasswordArray(filteredPasswords);
      localStorage.setItem("passwords", JSON.stringify(filteredPasswords));
      toast('Password Deleted!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const showPassword = () => {


    passwordRef.current.type = "text"
    console.log(ref.current.src)

    if (ref.current.src.includes("icon/eye.png")) {
      ref.current.src = "icon/eyecross.png"
      passwordRef.current.type = "password"

    }
    else {
      passwordRef.current.type = "text"
      ref.current.src = "icon/eye.png"
    }


  }


  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }


  const copyText = (text) => {
    toast('Copied to clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text)
  }

  return (

    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />

      <div className="flex justify-center">
        <div className="box-container h-[600px]  bg-green-200 w-[800px] p-4">
          <div className="passop flex justify-center font-bold mt-4">
            <span className="text-green-500 text-xl">&lt;</span>
            <span className="text-2xl">Pass</span>
            <span className="text-green-500 text-2xl">OP/&gt;</span>
          </div>
          <h2 className="flex justify-center">Your own Password Manager</h2>

          <div className="input-container flex flex-col justify-center items-center mt-9 w-full">
            <div className="first-input w-full ">
              <input value={form.site} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter Website URL" type="text" name="site" id="site" />
            </div>

            <div className="flex gap-4 mt-4">
              <input value={form.username} onChange={handleChange} className="w-[600px] p-2 border rounded" type="text" placeholder="Enter Your Username" name="username" id="username" />

              <div className="flex relative items-center">
                <input onClick={savePassword} value={form.password} onChange={handleChange} ref={passwordRef} className="w-full p-2 border rounded pr-10" type="text" placeholder="Enter Your Password" name="password" id="password" />
                <span className="absolute right-3" onClick={showPassword}>
                  <img ref={ref} className='h-5 cursor-pointer' src="icon/eye.png" alt="eye icon" />
                </span>
              </div>
            </div>


            <div className="cursor-pointer add-icons bg-green-500 p-3 rounded-3xl px-10 flex mt-8">


              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M12 8V16M16 12L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <button onClick={savePassword} className='ml-4'>Add Password</button>
            </div>

          </div>

          <div className="passwords mt-4">
            <h2 className="font-bold text-2xl py-4 text-center">Your Passwords</h2>
            {passwordArray.length === 0 ? (
              <div className="text-center">No passwords to show</div>
            ) : (
              <div className="w-full overflow-auto" style={{ height: "25vh" }}>
                <table className="table-auto w-full bg-green-300">
                  <thead className="bg-green-700 text-white w-full">
                    <tr className="w-full flex">
                      <th className="py-2 px-4 flex-1 text-center">Site</th>
                      <th className="py-2 px-4 flex-1 text-center">Username</th>
                      <th className="py-2 px-4 flex-1 text-center">Password</th>
                      <th className="py-2 px-4 flex-1 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-green-100 block w-full overflow-auto" style={{ height: "calc(25vh - 40px)", display: "block" }}>
                    {passwordArray.map((item, index) => (
                      <tr key={index} className="flex w-full items-center justify-center">
                        <td className="py-2 px-4 border flex-1 text-center flex items-center justify-center">
                          <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
                          <button onClick={() => copyText(item.site)} className="ml-2">📋</button>
                        </td>
                        <td className="py-2 px-4 border flex-1 text-center flex items-center justify-center">
                          {item.username}
                          <button onClick={() => copyText(item.username)} className="ml-2">📋</button>
                        </td>
                        <td className="py-2 px-4 border flex-1 text-center flex items-center justify-center">
                          {item.password}
                          <button onClick={() => copyText(item.password)} className="ml-2">📋</button>
                        </td>
                        <td className="py-2 px-45 border flex-1 text-center flex items-center justify-center">
                          <button className='mr-4' onClick={() => editPassword(item.id)}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11 20H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                          </svg></button>
                          <button className=' mr-4' onClick={() => deletePassword(item.id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                          </svg> </button>

                        </td>



                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default Manager;


