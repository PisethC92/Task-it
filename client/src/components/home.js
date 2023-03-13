import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <img src="https://cdn-icons-png.flaticon.com/512/824/824580.png?w=826&t=st=1675537015~exp=1675537615~hmac=16be06d7a8cf3a1b5ad79915072e70870de0672f0cf7d1a5aa27f99b41fa88e7" alt="TaskIt!" className="icon" />
      <h1 className="title">TaskIt!</h1>
      <p className="description">Welcome to your personal to-do list. Here you can add or navigate to view your tasks.</p>
      <div className="home-buttons-container">
        <NavLink to="/create">
          <button className="home-button">Add Task</button>
        </NavLink>
        <NavLink to="/recordList">
          <button className="home-button">View Task</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
