import React, { useEffect, useState } from 'react';
import FormCheck from './UI/FormCheck';
import FormInput from './UI/FormInput'
import FormSelect from './UI/FormSelect';
import FormTextarea from './UI/FormTextarea';
import axios from 'axios'
import DisplayCheck from './DisplayCheck';

function RegistrationForTeachers() {
  const [post, setPost] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [document, setDocument] = useState('')
  const [academicTitle, setAcademicTitle] = useState('')
  const [academicDegree, setAcademicDegree] = useState('')
  const [about, setAbout] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const article = {
      id: Date.now(),
      firstName,
      lastName,
      password,
      document,
      academicTitle,
      academicDegree,
      about
    };

    const res = axios.post('http://localhost:3000/teachers', article)
      .then(response => {
        setPost(response.data)
        console.log(response.data)
      });
    return res.data

  }

  useEffect(() => {
    const res = axios.get('http://localhost:3000/teachers')
      .then(response => {
        setPost(response.data)
        console.log(response.data)
      });
    return res.data
  }, [])


  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-md p-4 mt-4 mb-4 mr-4 bg-white rounded-md shadow-md">
        <h1 className="my-4 text-2xl font-bold text-center ">Оформление заявки
        </h1>
        <form action=""   >

          <div className="">

            <FormInput
              value={firstName}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Имя"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={"Иван..."}
              onChange={e => setFirstName(e.target.value)} />

            <FormInput
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Фамилия"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={"Карпачев..."}
              value={lastName}
              onChange={e => setLastName(e.target.value)} />

            <FormInput
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Пароль"}
              type={"password"}
              value={password}
              classInput={"form_input--text"}
              onChange={e => setPassword(e.target.value)} />

            <FormCheck
              classBlock={"block mt-1"}
              classHeader={"form_caption"}
              header={"Наличие документов"}
              name={"document"}
              type={"checkbox"}
              classInput={"mr-2"}
              value={document}
              onChange={e => setDocument(e.target.value)}
              options={[
                { value: "Паспорт РФ", text: "Паспорт РФ" },
                { value: "Загранпаспорт", text: "Загранпаспорт" },
                { value: "Военный билет", text: "Военный билет" },
              ]} />

            <FormCheck
              classBlock={"block mt-1"}
              classHeader={"form_caption"}
              header={"Ученое звание"}
              name={"degree"}
              type={"radio"}
              classInput={"mr-2"}
              onChange={e => setAcademicTitle(e.target.value)}
              value={academicTitle}
              options={[
                { value: "Доцент", text: "Доцент" },
                { value: "Профессор", text: "Профессор" },
                { value: "Академик", text: "Академик" },
              ]} />

            <FormSelect
              classBlock={"block mt-1"}
              classHeader={"form_caption"}
              header={"Ученая степень"}
              name={"course"}
              classSelect={"block form_input--text"}
              defaultValue={"Выберите ученую степень"}
              value={academicDegree}
              onChange={e => setAcademicDegree(e.target.value)}
              options={[
                { value: "Кандитат наук", text: "Кандитат наук" },
                { value: "Доктор наук", text: "Доктор наук" },

              ]} />

            <FormTextarea
              classBlock={"flex flex-col mt-1"}
              classHeader={"form-caption"}
              header={"Обо мне"}
              classTextarea={"form_input--text"}
              name={"обо мне"}
              cols={"30"}
              rows={"5"}
              value={about}
              placeholder={"Являюсь деканом ..."}
              onChange={e => setAbout(e.target.value)}
            />
          </div>


          <div className="text-center">
            <input type="button " className="mt-4 text-center cursor-pointer btn" value="Опубликовать" onClick={handleSubmit} />
          </div>


        </form >
      </div>
      <div className="flex flex-col w-full max-w-md p-4 mt-4 mb-4 bg-white rounded-md shadow-md">
        <DisplayCheck
          firstName={firstName}
          lastName={lastName}
          password={password}
          document={document}
          academicTitle={academicTitle}
          academicDegree={academicDegree}
          about={about}
        />
      </div>
    </div >
  );
}

export default RegistrationForTeachers;
