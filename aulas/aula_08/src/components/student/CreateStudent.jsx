import React, { useState } from "react";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(course);
    console.log(ira);
  };

  return (
    <div>
      <h1>Create Student...</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input
            className="form-control"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Curso</label>
          <input
            className="form-control"
            type="text"
            onChange={(event) => setCourse(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>IRA</label>
          <input
            className="form-control"
            type="number"
            onChange={(event) => setIra(event.target.value)}
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default CreateStudent;
