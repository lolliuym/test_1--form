import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";

const Pagination = () => {
  const location = useLocation();

  return (
    <div className="">
      <div className="mx-auto mb-4 ">
        
        <div className="flex justify-center">
          <Link to="/students"   >
            <button type="button" className={location.pathname == "/students" ? " rounded-l-xl btn_pagination btn_pagination--active" : 'rounded-l-xl btn_pagination'}  >Студентов</button>
          </Link>
          <Link to="/teachers" >
            <button type="button" className={location.pathname == "/teachers" ? " rounded-r-xl btn_pagination btn_pagination--active" : 'rounded-r-xl btn_pagination'} >Преподавателей</button>
          </Link>
        </div>
      </div >
    </div >
  )
}


export default Pagination
