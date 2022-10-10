import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0.0);

  const baseUrl = process.env.REACT_APP_URL_STUD;
  const handleSubmit = (event) => {
    const student = { name, course, ira };

    axios
      .post(baseUrl, student)
      .then((response) => {
        alert("Student created successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ marginTop: 20 }}>
      <h1>Create Student...</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite seu nome"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Curso: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite seu curso"
            onChange={(event) => {
              setCourse(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>IRA: </label>
          <input
            type="numeric"
            min="0"
            max="10"
            step="any"
            className="form-control"
            placeholder="Digite seu IRA"
            onChange={(event) => {
              setIra(Number(event.target.value));
            }}
          />
        </div>
        <div className="form-group" style={{ marginTop: 15 }}>
          <input
            type="submit"
            value="Create Student"
            className="btn btn-primary"
          />
        </div>
      </form>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default CreateStudent;
