import React, { Component } from "react"
import FormularioCadastro from "./componentes/FormularioCadastro";
import ListaDeNotas from "./componentes/ListaDeNotas";

class App extends Component {

  render() {
    return (
      <>
        <FormularioCadastro/>
        <ListaDeNotas/>
        </>
  
    );
  }
}

export default App;