import React, { useState } from 'react';
import FormCheck from './UI/FormCheck';
import FormInput from './UI/FormInput';
import FormSelect from './UI/FormSelect';
import FormTextarea from './UI/FormTextarea';
import { Link, useLocation } from "react-router-dom";

const DisplayCheck = (props) => {
  const location = useLocation();
  const { firstName,
    lastName,
    password,
    document,
    degree,
    course,
    about,
    academicTitle,
    academicDegree } = props
  
   
 

  return (

    <div className="">
      <div className="">
        <form action=""   >
          <h1 className="my-4 text-2xl font-bold text-center ">Проверка заявки студентов
          </h1>
          <div className="">

            <FormInput
              value={firstName}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Имя"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={""}
              onChange={e => e.target.value}
            />

            <FormInput
              value={lastName}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Фамилия"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={""}
              onChange={e => e.target.value}
            />

            <FormInput
              value={password}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Пароль"}
              type={"password"}
              classInput={"form_input--text"}
              onChange={e => e.target.value}
            />

            <FormInput
              value={document}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Документ"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={""}
              onChange={e => e.target.value}
            />

            {location.pathname === "/students" && <FormInput
              value={degree}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Академическая степень"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={""}
              onChange={e => e.target.value}
            />}

            {location.pathname === "/students" && <FormInput
              value={course}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Курс"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={""}
              onChange={e => e.target.value}
            />
            }
            {location.pathname === "/teachers" && <FormInput
              value={academicTitle}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Ученое звание"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={""}
              onChange={e => e.target.value}
            />
            }
            {location.pathname === "/teachers" && <FormInput
              value={academicDegree}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Ученая степень"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={""}
              onChange={e => e.target.value}
            />
            }
            <FormTextarea
              value={about}
              classBlock={"flex flex-col mt-1"}
              classHeader={"form-caption"}
              header={"Обо мне"}
              classTextarea={"form_input--text"}
              name={"обо мне"}
              cols={"30"}
              rows={"5"}
              placeholder={""}
              onChange={e => e.target.value}
            />
          </div>





        </form >
      </div>
    </div>
  )
}


export default DisplayCheck
