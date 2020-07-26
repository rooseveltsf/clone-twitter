import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  // EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined >Editar perfil</EditButton> */}

        <h1>Roosevelt de Souza</h1>
        <h2>@rooseveltssf</h2>

        <p>
          Desenvolvedor Front-end
        </p>

        <ul>
          <li>
            <LocationIcon />
            João Pessoa, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 14 de fevereiro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>100</strong>
          </span>
          <span>
            <strong>150 </strong>seguidores
          </span>
        </Followage>

      </ProfileData>
    </Container>
  );
};

export default ProfilePage;