import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';


const CadastroCategoria = () => {

  const [nomeDaCategoria, setNomeDaCAtegoria] = useState();

  const handle = (info) => {
    setNomeDaCAtegoria(info.target.value);
  }

  console.log('[nomeDaCategoria]', nomeDaCategoria);
  return (
    <PageDefault>
      <h1>Cadastro de categoria: {nomeDaCategoria}</h1>

      <form >

        <label htmlFor="">
          Nome da Categoria:
          <input 
            type="text" 
            value={nomeDaCategoria}
            onChange={handle}
          />
        </label>
      </form>

      <Link to="/" >
        Ir para a home
        </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;