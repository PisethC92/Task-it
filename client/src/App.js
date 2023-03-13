import React from "react";

// Using Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// Import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Home from "./components/home";

// Define the main App component
const App = () => {
  // Return the main App component, which includes a navbar and routes for the different pages
  return (
    <div style={{ 
      backgroundImage: `url(${'https://img.freepik.com/free-photo/close-up-spiral-notepad-coffee-cup-earphone-keyboard-gray-background_23-2148052615.jpg?w=1380&t=st=1678631526~exp=1678632126~hmac=7d0e72e0c7a92c6092e6e9cef88e145ee3d5cd4ffd4020a8e2d39e283c3e36b2'})`, 
      backgroundSize: 'cover',
      minHeight: '100vh',
    }}>
      <Navbar />
      <div style={{ margin: 20 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recordList" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      </div>
    </div>
  );
};

// Export the main App component
export default App;
