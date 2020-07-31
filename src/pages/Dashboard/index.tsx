import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/16194059?s=460&u=48eb2fb0ab72c31eca36377110f8a3ef72a2a685&v=4"
            alt="Camila Sales"
          />
          <div>
            <strong>salescamila/gostack</strong>
            <p>
              Índice dos repositórios criados durante o Bootcamp GoStack da
              @Rocketseat
            </p>
          </div>

          <FiChevronRight />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/16194059?s=460&u=48eb2fb0ab72c31eca36377110f8a3ef72a2a685&v=4"
            alt="Camila Sales"
          />
          <div>
            <strong>salescamila/gostack</strong>
            <p>
              Índice dos repositórios criados durante o Bootcamp GoStack da
              @Rocketseat
            </p>
          </div>

          <FiChevronRight />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/16194059?s=460&u=48eb2fb0ab72c31eca36377110f8a3ef72a2a685&v=4"
            alt="Camila Sales"
          />
          <div>
            <strong>salescamila/gostack</strong>
            <p>
              Índice dos repositórios criados durante o Bootcamp GoStack da
              @Rocketseat
            </p>
          </div>

          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
