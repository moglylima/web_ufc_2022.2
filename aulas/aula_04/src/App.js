import React, { Component } from 'react';
import './App.css';
// import Grupo from './components/Grupo';
// import Hero from './components/Hero'

import Disciplina from './components/Disciplina'
import Aluno from './components/Estudante'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Aula 04 - props children, state</h2>

        {/* <Grupo titulo={"Sou grupo 00"} /> */}

        {/* <Grupo>
          <Hero nome='Capitão América' />
          <Hero nome='Hulk' />
          <Hero nome='Viúva Negra' />
          <Hero nome='Homem de Ferro' />
          <h5>Fim do time!</h5>
        </Grupo> */}

        <Disciplina disciplina={"WEB"}>
          <Aluno
            nome='João'
            curso='RC'
            universidade={'UFC'}

          />
        </Disciplina>

      </div>
    );
  }
}

export default App;
