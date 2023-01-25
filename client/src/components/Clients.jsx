import React from "react";
import { gql, useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/ClientQuiries";
import Spinner from "./Spinner";
import Register from "./Register";
import { useState } from "react";


function Clients() {
  const [isOpen, setIsOpen] = useState(false);
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return <Spinner />;
  if (error) return <p> something Went Wrong </p>;
 
  return (
    <>
      {!loading && !error && (
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
             
             <Register/>
            </div>
           
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                  <thead class="min-w-full leading-normal">
                    <tr>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Email
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        phone
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Deleted
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Dpdated
                      </th>
                    </tr>
                  </thead>
                  <tbody class="min-w-full leading-normal">
                    {data.clients.map((client) => (
                      <ClientRow key={client.id} client={client} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Clients;
