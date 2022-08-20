import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import LogIn from "./pages/LogIn";
import ToDo from "./pages/ToDo";
import WriteToDo from "./pages/WriteToDo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </div>
  );
}

export default App;
