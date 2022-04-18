import React from "react"
import { ListaDeNotas } from "./componentes/listaDeNotas";

function App() {
  return (
    <>
    <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva sua nota"></textarea>
        <button>Criar nota</button>
      </form>
      <ListaDeNotas/>
      </>

  );
}

export default App;