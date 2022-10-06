import React from "react";
import { useState } from "react";

const EditProfessor = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div style={{ marginTop: 20 }}>
      <h1>Edit Professor...</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
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
          <label>University: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite seu curso"
            onChange={(event) => {
              setUniversity(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Degree: </label>
          <input
            type="numeric"
            className="form-control"
            placeholder="Digite seu IRA"
            onChange={(event) => {
              setDegree(event.target.value);
            }}
          />
        </div>
        <div className="form-group" style={{ marginTop: 15 }}>
          <input
            type="submit"
            value="Apply Changes"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfessor;
