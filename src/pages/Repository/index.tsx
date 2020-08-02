import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/16194059?s=460&u=48eb2fb0ab72c31eca36377110f8a3ef72a2a685&v=4"
            alt="GoStack"
          />
          <div>
            <strong>salescamila/gostack</strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <p>Stars</p>
          </li>
          <li>
            <strong>48</strong>
            <p>Forks</p>
          </li>
          <li>
            <strong>67</strong>
            <p>Issues abertas</p>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="qwerty">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
