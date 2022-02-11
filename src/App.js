
import React from 'react';
import Pagination from './components/Pagination';
import RegistrationForStudents from './components/registrationForStudents';
import RegistrationForTeachers from './components/registrationForTeacher';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (


    <div className="flex justify-center bg-slate-300">
      <div className="container bg-slate-300">

        <BrowserRouter>

          <Pagination />
          <Routes>
            <Route path="/students" element={<RegistrationForStudents />} exact />
            <Route path="/teachers" element={<RegistrationForTeachers />} />
            <Route path="*" element={<Navigate to="/students" />} />
          </Routes>


        </BrowserRouter>





      </div >
    </div >


  );
}

export default App;
