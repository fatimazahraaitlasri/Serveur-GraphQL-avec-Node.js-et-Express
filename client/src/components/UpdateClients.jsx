import { useState } from "react";
import { useMutation } from "@apollo/client";
// import { GET_PROJECT } from "../queries/projectQueries";
import { UPDATE_CLIENT } from "../mutations/ClientMutations";
import { GET_CLIENTS } from "../queries/ClientQuiries";

function UpdateClients({ client }) {
  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);
  const [phone, setPhone] = useState(client.phone);
  const [isOpen, setIsOpen] = useState(false);

  const [updateClient] = useMutation(UPDATE_CLIENT, {
    variables: { id: client.id, name, email, phone },
    refetchQueries: [{ query: GET_CLIENTS, variables: { id: client.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      return alert("Please fill out all fields");
    }

    updateClient(name, email, phone);
    console.log(client.name)

  };

  return (
  <div>
      <button
        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        onClick={() => setIsOpen(true)}
      >
        Update
      </button>

      {isOpen && (
        <div className=" absolute -ml-[70%] my-auto">
            <div className="w-[100%] bg-white rounded shadow-2xl p-8 m-4 ml-64">
            <div className="flex">
            <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
                Update Form
              </h1>
              <button  className="text-2xl font-bold -mt-[3rem]"                 
                onClick={()=> setIsOpen(false)}
                >X</button>
            </div>
              <form action="/" method="post" onSubmit={onSubmit}>
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
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    className="border py-2 px-3 text-grey-800"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label
                    className="mb-2 font-bold text-lg text-gray-900"
                    for="Date"
                  >
                    Phone
                  </label>
                  <input
                    className="border py-2 px-3 text-grey-800"
                    type="text"
                    name="Phone"
                    id="Phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>

                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                >
                  update
                </button>
              </form>
            </div>
          </div>
      )}
    </div>
  );
}
export default UpdateClients;
