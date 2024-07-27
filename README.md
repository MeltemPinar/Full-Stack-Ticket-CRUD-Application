# Full-Stack-Ticket-CRUD-Application

![Zight Recording 2024-07-27 at 04 08 50 PM](https://github.com/user-attachments/assets/d26397c3-e748-4262-b7e6-b51216ae5eef)

# Getting Started

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project is a full-stack application designed to manage tickets with CRUD (Create, Read, Update, Delete) operations. Built using Next.js, React, and MongoDB, this application provides a robust platform for ticket management.

This project uses the following technologies and dependencies:

# Frontend:
next: Framework for server-rendered React applications.
react: JavaScript library for building user interfaces.
react-dom: Provides DOM-specific methods for React.
react-icons: A library for including popular icons in React applications.

# Backend:
mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.

# Development:
typescript: A superset of JavaScript that adds static types.
@types/node: TypeScript definitions for Node.js.
@types/react: TypeScript definitions for React.
@types/react-dom: TypeScript definitions for React DOM.
postcss: A tool for transforming CSS with JavaScript plugins.
tailwindcss: A utility-first CSS framework for rapid UI development.

# Frontend Components

The frontend is built with Next.js and React, featuring components such as:

Ticket List: Displays all tickets with options to view, update, or delete.
Ticket Form: Provides a form to create new tickets or update existing ones.
Ticket Detail: Shows detailed information about a specific ticket.

# CRUD Operations

The application implements the following CRUD operations for managing tickets:

Create: Users can add new tickets through a form. The data is sent to the server via a POST request to /api/tickets.
Read: Users can view a list of all tickets or details of a specific ticket. The data is retrieved from the server via GET requests to /api/tickets and /api/tickets/:id.
Update: Users can update ticket information. The updated data is sent to the server via a PATCH request to /api/tickets/:id.
Delete: Users can delete tickets. This action is performed via a DELETE request to /api/tickets/:id.

# Styling

The application uses Tailwind CSS for styling.v


