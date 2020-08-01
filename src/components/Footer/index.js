import React from 'react';
import { FooterBase, Sabagames } from './styles';

function Footer() {
  return (
    <FooterBase>
      <Sabagames href="https://github.com/Sabanai104">
          Sabagames
      </Sabagames>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
