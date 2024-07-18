import React from "react";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import { Route, Routes } from "react-router-dom";
import Update from "./Components/Update";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/table" element={<Table />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
