import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estudiantes" element={<List tabla='estudiantes'/>} />
        <Route path="/profesores" element={<List tabla='profesores'/>} />
        <Route path="/materias" element={<List tabla='materias' />} />
      </Routes>
    </div>
  );
}

export default App;
