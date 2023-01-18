const clients = [
    {
       id: '1',
       name: 'John Smith',
       email: 'john@example.com',
       phone: '555-555-1212'
    },
    {
       id: '2',
       name: 'Jane Doe',
       email: 'jane@example.com',
       phone: '555-555-2323'
    },
    {
       id: '3',
       name: 'Bob Johnson',
       email: 'bob@example.com',
       phone: '555-555-9876'
    },
    {
        id: '4',
        name: 'Bob Johnson',
        email: 'bob@example.com',
        phone: '555-555-9876'
     },
     {
        id: '5',
        name: 'client5',
        email: 'bob@example.com',
        phone: '555-555-9876'
     }
 ];

 const projects = [
    {
       id: '1',
       clientId: '1',
       name: 'project1@example.com',
       description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
       status : 'In Progress'
    },
    {
       id: '2',
       clientId: '2',
       name: 'project2@example.com',
       description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
       status : 'In Progress'
    },
    {
        id: '3',
       clientId:'3',
       name: 'project3@example.com',
       description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
       status : 'In Progress'
    },
    {
        id: '4',
       clientId:'4',
       name: 'project3@example.com',
       description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
       status : 'In Progress'
    },
    {
        id: '5',
       clientId:'5',
       name: 'project3@example.com',
       description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
       status : 'In Progress'
    }
 ];
  
 module.exports = {
    projects,
    clients
 }
 
 
 
 