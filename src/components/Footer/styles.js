import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const Sabagames = styled.a`
  font-size: 28px;
  text-decoration: none;
  transition: opacity 0.2s;
  color: var(--colorSaba);
  &:hover {
    opacity: 0.5;
  }
`;
