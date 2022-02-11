import React, { useEffect, useState } from 'react';
import FormCheck from './UI/FormCheck';
import FormInput from './UI/FormInput'
import FormSelect from './UI/FormSelect';
import FormTextarea from './UI/FormTextarea';
import axios from 'axios'
import DisplayCheck from './DisplayCheck';

function RegistrationForStudents() {
  const [post, setPost] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [document, setDocument] = useState([])
  const [degree, setDegree] = useState('')
  const [course, setCourse] = useState('')
  const [about, setAbout] = useState('')

  const onChange = (event) => {
    const isChecked = event.target.checked
    if (isChecked) {
      setDocument([...document, event.target.value])
    } else {
      const index = document.indexOf(event.target.value)
      document.splice(index, 1)
      setDocument(document)
    }
    console.log(document)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const article = {
      id: Date.now(),
      firstName,
      lastName,
      password,
      document,
      degree,
      course,
      about
    };

    const res = axios.post('http://localhost:3000/students', article)
      .then(response => {
        setPost(response.data)
        console.log(response.data)
      });
    setFirstName('')
    setLastName('')
    setPassword('')
    setDocument([])
    setDegree('')
    setCourse('')
    setAbout('')
    return res.data


  }

  useEffect(() => {
    const res = axios.get('http://localhost:3000/students')
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
        <form action="" required>

          <div className="">
            <FormInput
              value={firstName}
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Имя"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={"Павел..."}
              onChange={e => setFirstName(e.target.value)} />

            <FormInput
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Фамилия"}
              type={"text"}
              classInput={"form_input--text"}
              placeholder={"Дуров..."}
              value={lastName}
              onChange={e => setLastName(e.target.value)} />

            <FormInput
              classBlock={"block mt-1"}
              classLabel={"form_caption"}
              name={"Пароль"}
              type={"password"}
              classInput={"form_input--text"}
              value={password}
              onChange={e => setPassword(e.target.value)} />

            <FormCheck
              classBlock={"block mt-1"}
              classHeader={"form_caption"}
              header={"Наличие документов"}
              name={"document"}
              type={"checkbox"}
              classInput={"mr-2"}
              onChange={onChange}
              value={document}
              options={[
                { value: "Паспорт РФ", text: "Паспорт РФ" },
                { value: "Загранпаспорт", text: "Загранпаспорт" },
                { value: "Военный билет", text: "Военный билет" },
              ]} />

            <FormCheck
              classBlock={"block mt-1"}
              classHeader={"form_caption"}
              header={"Академическая степень"}
              name={"degree"}
              type={"radio"}
              classInput={"mr-2"}
              onChange={e => setDegree(e.target.value)}
              value={degree}
              options={[
                { value: "Бакалавр", text: "Бакалавр" },
                { value: "Специалист", text: "Специалист" },
                { value: "Магистр", text: "Магистр" },
                { value: "Аспирант", text: "Аспирант" },
              ]} />

            <FormSelect
              classBlock={"block mt-1"}
              classHeader={"form_caption"}
              header={"Учебный курс"}
              name={"course"}
              classSelect={"block form_input--text"}
              defaultValue={"Выберите курс"}
              value={course}
              onChange={e => setCourse(e.target.value)}
              options={[
                { value: "Курс 1", text: "Курс 1" },
                { value: "Курс 2", text: "Курс 2" },
                { value: "Курс 3", text: "Курс 3" },
                { value: "Курс 4", text: "Курс 4" },
                { value: "Курс 5", text: "Курс 5" },
                { value: "Курс 6", text: "Курс 6" },
              ]} />

            <FormTextarea
              classBlock={"flex flex-col mt-1"}
              classHeader={"form-caption"}
              header={"Обо мне"}
              classTextarea={"form_input--text"}
              name={"aboutMe"}
              cols={"30"}
              rows={"5"}
              placeholder={"Не пью, не курю..."}
              value={about}
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
          header={"студентов"}
          firstName={firstName}
          lastName={lastName}
          password={password}
          document={document}
          degree={degree}
          course={course}
          about={about}
        />
      </div>

    </div >




  );
}

export default RegistrationForStudents;
