import React, { useMemo } from "react";
import { ADD_CLIENT } from "../mutations/ClientMutations";
// import { useNavigate } from "react-router-dom";  


import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_CLIENTS } from "../queries/ClientQuiries";
// import { ADD_CLIENT } from '../mutations/ClientMutations';

function Register() {

 
  const [isOpen, setIsOpen] = useState(false);

    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || phone === '') {
      return alert('Please fill in all fields');
    }

    addClient(name, email, phone);

    setName('');
    setEmail('');
    setPhone('');
  };
  return (
    <div>
      
    <button className='border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline' onClick={() => setIsOpen(true)}>
      Add client  
    </button>
     
    {isOpen && (
      <div>
        
        <div className="w-4/5 h-1/2 bg-gray-100  flex flex-col ml-36 py-11 ">
        
        <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4 ml-64">
        <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
         
          Register Form
        </h1>
        <form action="/" method="post"  onSubmit={onSubmit}>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 font-bold text-lg text-gray-900"
              for="first_name"
            >
              First Name 
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e)=>{ setName(e.target.value)}}
              
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-gray-900" for="email">
              Email
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e)=>{ setEmail(e.target.value)}}

              
            />
          </div>
        
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-gray-900" for="Date">
              Phone
            </label>
            <input
              className="border py-2 px-3 text-grey-800"
              type="text"
              name="Phone"
              id="Phone"
              value={phone} 
              onChange={(e)=>{ setPhone(e.target.value)}}

            />
          </div>
          
          <button  type='submit'
                  data-bs-dismiss='modal'  className='border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline' >
          {/* onClick={()=> setIsOpen(false)} */}
           valide
        </button>
        </form>
      </div>
         
        </div>
     
      
        
      </div>
    )}
    
  </div>
  );
}

export default Register;
