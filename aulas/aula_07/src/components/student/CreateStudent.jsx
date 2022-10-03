import React from "react";
import { useState } from "react";

const CreateStudent = () => {

  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [ira, setIra] = useState(0.0)

  // id: 3, name: "Vilnei", course: "DD", ira: 4.5 }
  const handleSubmit = (event) => {
    //event.preventDefault()
    // const estudante = {
    //   id: (),
    //   name: name,
    //   course: course,
    //   ira: ira
    // }
    console.log(name)
    console.log(course)
    console.log(ira)
  }
  return (
    <div style={{ marginTop: 20 }}>
      <h1>Create Student...</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Nome: </label>
          <input
            type='text'
            className='form-control'
            placeholder='Digite seu nome'
            onChange={
              (event) => {
                setName(event.target.value)
              }
            }
          />
        </div>
        <div className='form-group'>
          <label>Curso: </label>
          <input
            type='text'
            className='form-control'
            placeholder='Digite seu curso'
            onChange={
              (event) => {
                setCourse(event.target.value)
              }
            }
          />
        </div>
        <div className='form-group'>
          <label>IRA: </label>
          <input
            type='numeric'
            min="0"
            max="10"
            step='any'
            className='form-control'
            placeholder='Digite seu IRA'
            onChange={
              (event) => {
                setIra(Number(event.target.value))
              }
            }
          />
        </div>
        <div className='form-group' style={{ marginTop: 15 }}>
          <input
            type='submit'
            value='Criar Estudante'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>



  );
}

export default CreateStudent;