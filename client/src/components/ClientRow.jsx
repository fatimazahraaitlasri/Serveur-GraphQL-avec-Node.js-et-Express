import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/ClientMutations";
import { GET_CLIENTS } from "../queries/ClientQuiries";
import Update from "./UpdateClients"

function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT ,{
    variables: {id : client.id },
    update(cache ,{data :{deleteClient}}) {
      const {clients} = cache.readQuery({
        query: GET_CLIENTS
      });
      cache.writeQuery({
        query: GET_CLIENTS,
        data:{ clients: clients.filter(client => client.id !== deleteClient.id)}
      })
    }
  })
  return (
  <tr className="leading-normal ">
      <td class="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-full">
        <div class="flex items-center ">
          <div class="flex-shrink-0 w-10 h-10 hidden sm:table-cell">
            <img
              class="w-full h-full rounded-full"
              src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap text-center">
              {client.name}
            </p>
          </div>
        </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
        <p class="text-gray-900 whitespace-no-wrap text-center">
          {client.email}
        </p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap text-center">
          {client.phone}
        </p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={deleteClient} 
          type="button"
          class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Update className='absolute' client={client}  />
      </td>
    </tr>
  );
}

export default ClientRow;
