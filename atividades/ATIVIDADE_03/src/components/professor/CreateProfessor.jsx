import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../utils/FirebaseContext";
const ListProfessorPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(value) => <CreateProfessor firebase={value} />}
    </FirebaseContext.Consumer>
  );
};

const CreateProfessor = (props) => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    //criando obj professor
    const professorNew = { name, university, degree };
    //cadastro professor
    ProfessorService.createProfessor(props.firebase.getFirestoreDb(), professorNew, () => {
      alert("Professor cadastrado com sucesso!");
      navigate("/listprofessor");
    });

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
          <label>University: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite Universidade"
            onChange={(event) => {
              setUniversity(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Salário: </label>
          <input
            type="numeric"
            className="form-control"
            placeholder="Digite Salário"
            onChange={(event) => {
              setDegree(event.target.value);
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

export default ListProfessorPage;
