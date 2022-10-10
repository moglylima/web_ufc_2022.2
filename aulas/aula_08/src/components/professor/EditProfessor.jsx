import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProfessor = () => {
  const baseUrl = process.env.REACT_APP_URL_PROF;
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");

  const navigate = useNavigate();
  const paramUrl = useParams();

  useEffect(() => {
    axios
      .get(baseUrl + paramUrl.idUrl)
      .then((response) => {
        setName(response.data.name);
        setUniversity(response.data.university);
        setDegree(response.data.degree);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const professorUpdate = { name, university, degree };
    axios
      .put(baseUrl + paramUrl.idUrl, professorUpdate)
      .then((response) => {
        alert("Professor updated successfully!");
        navigate("/listprofessor");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ marginTop: 20 }}>
      <h1>Edit Professor...</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            value={name ?? ""}
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
            value={university ?? ""}
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
            value={degree ?? ""}
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
