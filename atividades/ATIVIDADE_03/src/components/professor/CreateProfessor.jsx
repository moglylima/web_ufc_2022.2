import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfessorService from "../../services/PorfessorService";
import { FirebaseContext } from "../../utils/FirebaseContext";

const CreateProfessorPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(value) => <CreateProfessor firebase={value} />}
    </FirebaseContext.Consumer>
  );
};

const CreateProfessor = (props) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [salary, setSalary] = useState(0.0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    //criando obj professor
    const professorNew = { name, course, salary };
    //cadastro professor
    window.confirm(
      `Are you sure you want to create this professor?\nName = ${name}\nCourse = ${course}\nSalary = ${salary}`
    )
      ? ProfessorService.addProfessor(
          props.firebase.getFirestoreDb(),
          professorNew,
          () => {
            alert("Professor cadastrado com sucesso!");
            navigate("/listprofessor");
          }
        )
      : alert("Professor not created!");
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h1>Create Professor...</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite nome"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Course: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite Universidade"
            onChange={(event) => {
              setCourse(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Salary: </label>
          <input
            type="numeric"
            className="form-control"
            placeholder="Digite Salário"
            onChange={(event) => {
              setSalary(event.target.value);
            }}
          />
        </div>
        <div className="form-group" style={{ marginTop: 15 }}>
          <input
            type="submit"
            value="Create Professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProfessorPage;
